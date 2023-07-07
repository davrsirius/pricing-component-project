const elsPaymentPeriodRadio = document.querySelectorAll('[name="payment-period"]');
const elsPricingPlanValue = document.querySelectorAll('.pricing-plan-price-value');

elsPaymentPeriodRadio.forEach(function(elPaymentPeriodRadio){
    elPaymentPeriodRadio.addEventListener('change', function(){
        const period = elPaymentPeriodRadio.value;
        
        if (period === 'annually') {
            elsPricingPlanValue.forEach(function(elPrice){
                elPrice.textContent = elPrice.closest('.pricing-plan').dataset.paymentAnnual;
            });
        }
        else {
            elsPricingPlanValue.forEach(function(elPrice){
                elPrice.textContent = elPrice.closest('.pricing-plan').dataset.paymentMonthly;
            });
        }
    });
});