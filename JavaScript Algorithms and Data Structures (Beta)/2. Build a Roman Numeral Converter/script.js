// script.js
document.getElementById('convert-btn').addEventListener('click', function() {
    const inputNumber = parseInt(document.getElementById('number').value);
    const outputDiv = document.getElementById('output');

    if (isNaN(inputNumber)) {
        outputDiv.textContent = 'Please enter a valid number';
    } else if (inputNumber < 1) {
        outputDiv.textContent = 'Please enter a number greater than or equal to 1';
    } else if (inputNumber >= 4000) {
        outputDiv.textContent = 'Please enter a number less than or equal to 3999';
    } else {
        outputDiv.textContent = convertToRoman(inputNumber);
    }
});

function convertToRoman(num) {
    const romanNumerals = [
        { value: 1000, symbol: 'M' },
        { value: 900, symbol: 'CM' },
        { value: 500, symbol: 'D' },
        { value: 400, symbol: 'CD' },
        { value: 100, symbol: 'C' },
        { value: 90, symbol: 'XC' },
        { value: 50, symbol: 'L' },
        { value: 40, symbol: 'XL' },
        { value: 10, symbol: 'X' },
        { value: 9, symbol: 'IX' },
        { value: 5, symbol: 'V' },
        { value: 4, symbol: 'IV' },
        { value: 1, symbol: 'I' }
    ];

    let result = '';
    for (const numeral of romanNumerals) {
        while (num >= numeral.value) {
            result += numeral.symbol;
            num -= numeral.value;
        }
    }
    return result;
}
