import crypto from 'crypto';
import { NextRequest } from 'next/server';

type CreatePaymentBody = {
  price?: number; // дозволяємо передавати ціну з клієнта
  eventTitle?: string;
  tariffType?: string;
};

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as CreatePaymentBody;

    const merchantAccount = process.env.MERCHAND_LOGIN;
    const merchantSecretKey = process.env.MERCHANT_SECRET_KEY;
    const siteUrl = process.env.SITE_URL || 'http://localhost:3000';

    if (!merchantAccount || !merchantSecretKey) {
      console.error('[PAYMENT] Missing MERCHAND_LOGIN or MERCHANT_SECRET_KEY env vars');
      return Response.json(
        { success: false, error: 'Payment configuration error' },
        { status: 500 },
      );
    }

    const merchantDomainName = new URL(siteUrl).hostname;

    // Якщо price не передали або він некоректний — лишається 1 грн (тест)
    const amount = body.price && body.price > 0 ? body.price : 1;
    const currency = 'UAH';

    const orderReference = `NF-${Date.now()}`;
    const orderDate = Math.floor(Date.now() / 1000);

    const productName = [
      body.eventTitle ||
        'Оплата послуги NeuroFit — Neuro-Pilates (тестова оплата 1 грн)',
    ];
    const productPrice = [amount];
    const productCount = [1];

    // Формуємо підпис згідно WayForPay: поля через ";"
    const signatureSource = [
      merchantAccount,
      merchantDomainName,
      orderReference,
      orderDate,
      amount,
      currency,
      ...productName,
      ...productCount,
      ...productPrice,
    ].join(';');

    const merchantSignature = crypto
      .createHmac('md5', merchantSecretKey)
      .update(signatureSource)
      .digest('hex');

    const tariffType = body.tariffType || 'unknown';
    // returnUrl — WayForPay редіректить юзера сюди (GET з query-параметрами статусу)
    const returnUrl  = `${siteUrl}/api/payment/return?tariffType=${tariffType}`;
    // serviceUrl — server-to-server POST notification (підпис, логіка активації)
    const serviceUrl = `${siteUrl}/api/payment/notify`;

    const data = {
      merchantAccount,
      merchantDomainName,
      merchantSignature,
      orderReference,
      orderDate,
      amount,
      currency,
      productName,
      productPrice,
      productCount,
      returnUrl,
      serviceUrl,
    };

    return Response.json({ success: true, data });
  } catch (error) {
    console.error('[PAYMENT] Error creating payment:', error);
    return Response.json(
      {
        success: false,
        error: 'Помилка при створенні оплати',
      },
      { status: 500 },
    );
  }
}

