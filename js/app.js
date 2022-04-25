const elsPaymentPeriodRadio = document.querySelectorAll('[name="payment_period"]');
const elsPaymentPricingValue = document.querySelectorAll('.card-item-pricing-number');

elsPaymentPeriodRadio.forEach(function (elPaymentPeriodRadio) {
    elPaymentPeriodRadio.addEventListener('change', function () {
        const period = elPaymentPeriodRadio.value;
        if (period === 'anual') {
            elsPaymentPricingValue.forEach(function(elPrice) {
                elPrice.textContent = elPrice.closest('.card-item').dataset.paymentAnual;
            });
        } else {
            elsPaymentPricingValue.forEach(function(elPrice) {
                elPrice.textContent = elPrice.closest('.card-item').dataset.paymentMonthly;
            });
        }
    });
});
  