const elsPaymentPeriodRadio = querySelectorAll('[name="payment_period"]');

elsPaymentPeriodRadio.forEach(function (elPaymentPeriodRadio) {
    elPaymentPeriodRadio.addEventListener('change', function () {
        console.log(elPaymentPeriodRadio.value);
    });
});
