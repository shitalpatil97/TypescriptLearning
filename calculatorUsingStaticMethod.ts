class Calculator{
    
    static add(arg1:number,arg2:number){

        return arg1+arg2;

    }
    static sub(arg1:number,arg2:number){

        return arg1-arg2;

    }
    static mul(arg1:number,arg2:number){

        return arg1*arg2;

    }
    static div(arg1:number,arg2:number){

        return arg1/arg2;

    }
    static mod(arg1:number,arg2:number){

        return arg1%arg2;

    }
    
}
var cal=new Calculator();
console.log("****************static method exp*************************");

console.log("Addition of number 10 & 20 is ",Calculator.add(10,20));
console.log("Subtraction of of number 20 & 10 is ",Calculator.sub(20,10));
console.log("Multiplication of of number 10 & 10 is ",Calculator.mul(10,10));
console.log("Division of of number 20 & 2 is ",Calculator.div(20,2));
console.log("Modulus of of number 20 & 10 is ",Calculator.mod(20,10));

