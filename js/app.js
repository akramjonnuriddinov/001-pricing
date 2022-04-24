const elPracingNum = document.querySelector('.card-item-pricing-number');
const elRadio = document.querySelector('.pracing-radio');

elRadio.addEventListener('click', function () {
    elPracingNum.textContent = "244.999";
});