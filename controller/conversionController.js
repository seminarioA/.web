// /controller/conversionController.js

const model = require('../model/conversionModel');

let isBinaryToDecimal = true;

const convert = () => {
    const input = document.getElementById(isBinaryToDecimal ? 'binaryInput' : 'decimalOutput').value;
    let result = '';

    if (isBinaryToDecimal) {
        result = input.match(/^[01]+$/) ? model.convertBinaryToDecimal(input) : 'Invalid binary';
    } else {
        result = input.match(/^\d+$/) ? model.convertDecimalToBinary(input) : 'Invalid decimal';
    }

    document.getElementById(isBinaryToDecimal ? 'decimalOutput' : 'binaryInput').value = result;
};

const reverseConversion = () => {
    isBinaryToDecimal = !isBinaryToDecimal;
    document.getElementById('title').textContent = isBinaryToDecimal ? 'Binary to Decimal' : 'Decimal to Binary';
    document.getElementById('binaryInput').placeholder = isBinaryToDecimal ? 'Binary' : 'Decimal';
    document.getElementById('decimalOutput').placeholder = isBinaryToDecimal ? 'Decimal' : 'Binary';
    document.getElementById('binaryInput').value = '';
    document.getElementById('decimalOutput').value = '';
};
