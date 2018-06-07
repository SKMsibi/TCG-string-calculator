function intAdd(arg) {
    var working = arg;
    var negative = 0;
    var answer = 0;
    if (arg.search(/\/\//) >= 0) {
        var separator = arg[2];
        working = arg.slice(arg.search(/\n/), arg.length);
        var negative = working.search(/\-/);
        answer = working.length < 1 ? 0 : working.split(separator).reduce((a, b) => { return +a + +b }, 0);
    } else {
        while (working.search(/\n/) >= 0) { working = working.replace(/\n/, ","); }
        negative = working.search(/\-/);
        answer = working.length < 1 ? 0 : working.split(',').reduce((a, b) => { return +a + +b }, 0)
    }

    return answer;
}
module.exports = { intAdd };