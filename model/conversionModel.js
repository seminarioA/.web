// /model/conversionModel.js

const convertBinaryToDecimal = (binary) => {
    return parseInt(binary, 2);
};

const convertDecimalToBinary = (decimal) => {
    return parseInt(decimal).toString(2);
};

module.exports = {
    convertBinaryToDecimal,
    convertDecimalToBinary,
};
