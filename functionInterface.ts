interface IArithmetic{
    (arg1:number,arg2:number):void;
}
function addition(arg3:number,arg2:number):void{
    console.log(`Addition of ${arg3} and ${arg2} is :${arg3+arg2}`);
    
}
function sub(arg1:number,arg2:number):void{
    console.log(`Subtraction of ${arg1} and ${arg2} is :${arg1-arg2}`);
}
function mul(arg1:number,arg2:number):void{
    console.log(`Multiplication of ${arg1} and ${arg2} is :${arg1*arg2}`);
}
function div(arg1:number,arg2:number):void{
    console.log(`Division of ${arg1} and ${arg2} is :${arg1/arg2}`);
}

let add:IArithmetic=addition;
add(10,20);
let subtraction:IArithmetic=sub;
subtraction(20,10);
let multi:IArithmetic=mul;
multi(10,10);
let division:IArithmetic=div;
div(10,5);


