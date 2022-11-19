var array = [1, 2, 3, 45, 66, 77];
console.log(array);
array.forEach(function (value) {
    if (value > 20) {
        console.log(value);
    }
});
var arr = array.map(function (value) {
    return value + 1;
});
console.log(arr);
var arr = array.filter(function (value, index) {
    if (index % 2 != 0) {
        console.log(value);
    }
});
