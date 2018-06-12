function intAdd(stringNum) {
    var stringNumDuplication = stringNum;
    var negative = [];
    var answer = 0;
    var separator = "";
    if (stringNum.search(/\/\//) >= 0) {
        separator = stringNum[2];
        stringNumDuplication = stringNum.slice(stringNum.search(/\/\//) + 4, stringNum.length);
        while (stringNumDuplication.search(separator) >= 0) { stringNumDuplication = stringNumDuplication.replace(separator, ","); };
    }
    while (stringNumDuplication.search(/\n/) >= 0) { stringNumDuplication = stringNumDuplication.replace(/\n/, ","); };
    negative = stringNumDuplication.match(/\-[\d]/g) ? stringNumDuplication.match(/\-[\d]/g) : [];
    answer = stringNumDuplication.length < 1 ? 0 : stringNumDuplication.split(',').reduce((a, b) => { return +a + +b }, 0);
    if (negative.length > 0) { throw `negative not allowed ${negative}` } else { return answer }
}
module.exports = { intAdd }