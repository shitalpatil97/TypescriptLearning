var Calculator = /** @class */ (function () {
    function Calculator() {
    }
    Calculator.add = function (arg1, arg2) {
        return arg1 + arg2;
    };
    Calculator.sub = function (arg1, arg2) {
        return arg1 - arg2;
    };
    Calculator.mul = function (arg1, arg2) {
        return arg1 * arg2;
    };
    Calculator.div = function (arg1, arg2) {
        return arg1 / arg2;
    };
    Calculator.mod = function (arg1, arg2) {
        return arg1 % arg2;
    };
    return Calculator;
}());
var cal = new Calculator();
console.log("****************static method exp*************************");
console.log("Addition of number 10 & 20 is ", Calculator.add(10, 20));
console.log("Subtraction of of number 20 & 10 is ", Calculator.sub(20, 10));
console.log("Multiplication of of number 10 & 10 is ", Calculator.mul(10, 10));
console.log("Division of of number 20 & 2 is ", Calculator.div(20, 2));
console.log("Modulus of of number 20 & 10 is ", Calculator.mod(20, 10));
