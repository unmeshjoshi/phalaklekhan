//# spec/calculator-spec.js
var valueListHandler = require(process.cwd() + '/app/home/ValuelistHandler.js').valueListHandler
describe("array split", function () {
    it("should split array with uneven split", function () {
        var array = [1, 2, 3]
        var split = valueListHandler.split_array(array, 2);
        expect(split.length).toBe(2);
        expect(split[0].length).toBe(2);
        expect(split[1].length).toBe(1);
    });

    it("should split array less in size than split size", function () {
        var array = [1]
        var split = valueListHandler.split_array(array, 2);
        expect(split.length).toBe(1);
        expect(split[0].length).toBe(1);
    });

    it("should split array with even splits", function () {
        var array = [1, 2, 3, 4]
        var split = valueListHandler.split_array(array, 2);
        expect(split.length).toBe(2);
        expect(split[0].length).toBe(2);
        expect(split[1].length).toBe(2);
    });
});