function addition(arg1, arg2) {
    console.log("Addition of ".concat(arg1, " and ").concat(arg2, " is :").concat(arg1 + arg2));
}
function sub(arg1, arg2) {
    console.log("Subtraction of ".concat(arg1, " and ").concat(arg2, " is :").concat(arg1 - arg2));
}
function mul(arg1, arg2) {
    console.log("Multiplication of ".concat(arg1, " and ").concat(arg2, " is :").concat(arg1 * arg2));
}
function div(arg1, arg2) {
    console.log("Division of ".concat(arg1, " and ").concat(arg2, " is :").concat(arg1 / arg2));
}
var add = addition;
add(10, 20);
var subtraction = sub;
subtraction(20, 10);
var multi = mul;
multi(10, 10);
var division = div;
div(10, 5);
