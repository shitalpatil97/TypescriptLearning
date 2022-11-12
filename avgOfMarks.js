var MathsMarks = prompt("Enter a marks of Maths Subject ");
var Physics = prompt("Enter a marks for physics subject");
var Chem = prompt("Enter a marks for chemistry subject");
console.log("Maths Subject Mark is: ".concat(MathsMarks));
console.log("Physics Subject Mark is: ".concat(Physics));
console.log("Chemistry Subject Mark is: ".concat(Chem));
var average = (parseInt(MathsMarks) + parseInt(Physics) + parseInt(Chem)) / 3;
console.log("Average of marks is: ".concat(average));
var result = function () {
    if (average > 90) {
        console.log("Grade A");
    }
    else if (average > 70 && average < 90) {
        console.log("Grade B");
    }
    else {
        console.log("Grade C");
    }
};
result();
