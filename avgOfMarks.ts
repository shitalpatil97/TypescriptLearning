var MathsMarks:any=prompt("Enter a marks of Maths Subject ")
var Physics:any =prompt("Enter a marks for physics subject");
var Chem:any=prompt("Enter a marks for chemistry subject");
console.log(`Maths Subject Mark is: ${MathsMarks}`);
console.log(`Physics Subject Mark is: ${Physics}`);
console.log(`Chemistry Subject Mark is: ${Chem}`);
var average:Number=(parseInt(MathsMarks)+parseInt(Physics)+parseInt(Chem))/3;
console.log(`Average of marks is: ${average}`);
var result=()=>{

    if (average>90) {
        console.log("Grade A");
        
        
    }
     else if (average>70 && average<90) {
        console.log("Grade B");
        
        
     } 
     else {
        console.log("Grade C");
        
     }


}
result();