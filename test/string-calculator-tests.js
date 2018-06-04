var assert = require('assert');
var expect = require("chai").expect;
var func = require("../4-06-2018-string-calculator")
describe("String calculator tests", function () {
    it("should return the sum off all the numbers in the string.", function () {
        expect(func.intAdd("1,2,3,4")).to.be.eql(10)
    })
    it("should return 0", function () {
        expect(func.intAdd("")).to.be.eql(0)
    })
    it("should return 13.", function () {
        expect(func.intAdd("//~\n~1~2~4~6")).to.be.eql(13)
    })
    it("should return 13.", function () {
        expect(func.intAdd("1\n2\n4\n6")).to.be.eql(13)
    })
    it("should return 1", function () {
        expect(func.intAdd("1")).to.be.eql(1)
    })
    it("should return 10.", function () {
        expect(func.intAdd("1\n2,3\n4")).to.be.eql(10)
    })

})