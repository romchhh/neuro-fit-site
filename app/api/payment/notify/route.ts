import crypto from 'crypto';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const contentType = req.headers.get('content-type') ?? '';

    let body: Record<string, unknown>;
    if (contentType.includes('multipart/form-data')) {
      const formData = await req.formData();
      body = Object.fromEntries(formData.entries());
    } else {
      // JSON або urlencoded — спочатку читаємо текст
      const text = await req.text();
      try {
        body = JSON.parse(text);
      } catch {
        body = Object.fromEntries(new URLSearchParams(text));
      }
    }

    console.log('[NOTIFY] Parsed fields:', JSON.stringify(body));

    const merchantSecretKey = process.env.MERCHANT_SECRET_KEY;
    if (!merchantSecretKey) {
      console.error('[NOTIFY] Missing MERCHANT_SECRET_KEY');
      return Response.json({ status: 'error' }, { status: 500 });
    }

    const merchantAccount   = String(body.merchantAccount   ?? '');
    const orderReference    = String(body.orderReference    ?? '');
    const transactionStatus = String(body.transactionStatus ?? body.status ?? '');
    const reasonCode        = String(body.reasonCode        ?? body.reason_code ?? '');
    const reason            = String(body.reason            ?? '');
    const authCode          = String(body.authCode          ?? '');
    const cardPan           = String(body.cardPan           ?? '');
    const amount            = String(body.amount            ?? '');
    const currency          = String(body.currency          ?? '');
    const merchantSignature = String(body.merchantSignature ?? '');

    // Верифікуємо підпис згідно документації WayForPay (service response)
    // Порядок: merchantAccount;orderReference;amount;currency;authCode;cardPan;transactionStatus;reasonCode
    const signatureSource = [
      merchantAccount,
      orderReference,
      amount,
      currency,
      authCode,
      cardPan,
      transactionStatus,
      reasonCode,
    ].join(';');

    const expectedSignature = crypto
      .createHmac('md5', merchantSecretKey)
      .update(signatureSource)
      .digest('hex');

    if (merchantSignature !== expectedSignature) {
      console.warn('[NOTIFY] Signature mismatch. Received:', merchantSignature, '| Expected:', expectedSignature);
    } else {
      console.log('[NOTIFY] Signature OK');
    }

    const isApproved =
      transactionStatus === 'Approved' ||
      transactionStatus === 'approved' ||
      reasonCode === '1100' ||
      reasonCode === 1100 as unknown as string;

    console.log('[NOTIFY] Payment result:', { orderReference, transactionStatus, reasonCode, amount, isApproved });

    // TODO: якщо isApproved — зберегти в БД, надіслати email, активувати доступ

    // Відповідь WayForPay (обов'язково, інакше він повторює запити)
    const now = Math.floor(Date.now() / 1000);
    const responseStatus = isApproved ? 'accept' : 'decline';

    const responseSignSource = [orderReference, responseStatus, now].join(';');
    const responseSignature = crypto
      .createHmac('md5', merchantSecretKey)
      .update(responseSignSource)
      .digest('hex');

    return NextResponse.json({
      orderReference,
      status: responseStatus,
      time: now,
      signature: responseSignature,
    });
  } catch (error) {
    console.error('[NOTIFY] Error:', error);
    return Response.json({ status: 'error' }, { status: 500 });
  }
}
