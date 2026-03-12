// Клієнтський хендлер оплати через WayForPay

type PaymentOptions = {
  price?: number;
  eventTitle?: string;
  tariffType?: string;
};

export const handlePayment = async (options: PaymentOptions = {}) => {
  try {
    console.log('[CLIENT] Starting payment process...', options);

    const title =
      options.eventTitle ||
      'Оплата послуги NeuroFit (тестова оплата 1 грн)';

    const response = await fetch('/api/payment/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        price: options.price,
        eventTitle: title,
        tariffType: options.tariffType || 'test',
      }),
    });

    console.log('[CLIENT] Payment API response status:', response.status);

    const result = await response.json();

    if (!response.ok || !result.success || !result.data) {
      console.error('[CLIENT] Payment API error:', result);
      throw new Error(result.error || 'Помилка при створенні оплати');
    }

    console.log('[CLIENT] Creating WayForPay form with data:', result.data);

    const form = document.createElement('form');
    form.method = 'POST';
    form.action = 'https://secure.wayforpay.com/pay';
    form.target = '_self';

    Object.entries(result.data).forEach(([key, value]) => {
      if (Array.isArray(value)) {
        value.forEach((item, index) => {
          const input = document.createElement('input');
          input.type = 'hidden';
          input.name = `${key}[${index}]`;
          input.value = String(item);
          form.appendChild(input);
        });
      } else {
        const input = document.createElement('input');
        input.type = 'hidden';
        input.name = key;
        input.value = String(value);
        form.appendChild(input);
      }
    });

    document.body.appendChild(form);
    form.submit();
  } catch (error) {
    console.error('[CLIENT] Payment error:', error);
    alert(
      `Помилка при створенні оплати: ${
        error instanceof Error ? error.message : 'Невідома помилка'
      }. Спробуйте пізніше.`,
    );
  }
};

