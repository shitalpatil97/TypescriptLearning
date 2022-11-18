class Person{
    FirstName:string;
    lastName:string
    constructor(fname:string,lname:string){
        this.FirstName=fname;
        this.lastName=lname;
    }
    display(){
        console.log(`Person name:${this.FirstName} ${this.lastName}`);
        
    }
}
class Student1 extends Person{
    mark:number;
    constructor(fname:string,lname:string,marks:number){
        super(fname,lname);
        this.mark=marks;
    }
    display(){
        console.log(`Student name:${this.FirstName} ${this.lastName} and Mark is ${this.mark}`);
        
    }
}
class Employee extends Person{
    emp_dept:string;
    emp_salary:number;
    constructor(fname:string,lname:string,dept:string,salary:number){
        super(fname,lname);
        this.emp_dept=dept;
        this.emp_salary=salary;
    }
    display(){
        console.log(`Employee name:${this.FirstName} ${this.lastName},      DepartMent: ${this.emp_dept},     Salary: ${this.emp_salary}`);
        
    }
}
class Trainer extends Person{
    Total_no_year_exp:number;
    specialization:string;
    constructor(fname:string,lname:string,experience:number,specialization:string){
        super(fname,lname);
        this.Total_no_year_exp=experience;
        this.specialization=specialization;
        
    }
    display(){
        console.log(`Trainer name:${this.FirstName} ${this.lastName},    Total Number of years Experience:${this.Total_no_year_exp},    Specialization: ${this.specialization}`);
        
    }
}
var p=new Person("Shital","Patil");
p.display();
p=new Student1("Shital","Patil",99);
p.display();
p=new Employee("Riya","Pawar","HR",55000);
p.display();
p=new Trainer("Dnyanesh","Sir",10,"Angular")
p.display();