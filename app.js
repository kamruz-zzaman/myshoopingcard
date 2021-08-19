function getInput(product, productAmount, perAmount, isWant) {
    const inputNumber = document.getElementById(product);
    let input = inputNumber.value;
    const inputNum = parseInt(input);
    if (isWant) {
        input = inputNum + 1;
    }
    else if (inputNum > 0) {
        input = inputNum - 1;
    }
    inputNumber.value = input;
    const getProducstAmount = document.getElementById(productAmount);
    getProducstAmount.innerText = inputNumber.value * perAmount;
    calclateTotal();
}
function getPrductsNumber(product) {
    const inputNumber = document.getElementById(product);
    let input = inputNumber.value;
    const inputNum = parseInt(input);
    return inputNum;
}
function calclateTotal() {
    const phoneNumber = getPrductsNumber('phone-number') * 1219;
    const caseNumber = getPrductsNumber('case-number') * 59;
    const subTotal = phoneNumber + caseNumber;
    const tax = subTotal / 10;
    const total = subTotal + tax;

    document.getElementById('subtotal').innerText = subTotal;
    document.getElementById('tax').innerText = tax;
    document.getElementById('total').innerText = total;
}



document.getElementById('plus-btn').addEventListener('click', function () {
    getInput('phone-number', 'phoneAmount', 1219, true);
})
document.getElementById('minus-btn').addEventListener('click', function () {
    getInput('phone-number', 'phoneAmount', 1219, false);
})
document.getElementById('case-Inc').addEventListener('click', function () {
    getInput('case-number', 'caseAmount', 59, true);
})
document.getElementById('case-Dic').addEventListener('click', function () {
    getInput('case-number', 'caseAmount', 59, false);
})
document.getElementById('c').addEventListener('click', function () {
    alert('please Give your Credit Card!!!')
})
