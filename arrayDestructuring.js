var Vaxin = ["J&J", "Pfizer", "Sputnick"];
console.log(Vaxin);
console.log("After adding Covaxin");
Vaxin.push("Covaxin");
console.log(Vaxin);
console.log("***********Array Traversing************");
for (var _i = 0, Vaxin_1 = Vaxin; _i < Vaxin_1.length; _i++) {
    var iterator = Vaxin_1[_i];
    console.log(iterator);
}
console.log("*********Array Destructuring************");
var a = Vaxin[0], b = Vaxin[1], c = Vaxin[2], d = Vaxin[3];
console.log(a, "" + b, "" + c, "" + d);
