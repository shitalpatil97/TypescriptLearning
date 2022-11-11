var Vaxin:Array<string>=["J&J","Pfizer","Sputnick"];
console.log(Vaxin);
console.log("After adding Covaxin");

Vaxin.push("Covaxin");
console.log(Vaxin);

console.log("***********Array Traversing************");
for (const iterator of Vaxin) {
    console.log(iterator);
    
    
}
console.log("*********Array Destructuring************");
let[a,b,c,d]=Vaxin;
console.log(a,""+b,""+c,""+d);




