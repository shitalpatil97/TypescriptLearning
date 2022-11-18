interface IEmployee {
    fname:string;
    lname:string;
    age:number;
   

}
class Person implements IEmployee{
    fname:string;
    lname:string;
    age:number;
    constructor(fname:string,lname:string,age:number){
        this.fname=fname;
        this.lname=lname;
        this.age=age;
        
    }
    display(){
        console.log(`Employee Name:${this.fname} ${this.lname}  Age:${this.age}`);
        
    }

}
var p=new Person("Shital","Patil",24);
p.display();
