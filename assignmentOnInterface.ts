interface IEmployee{
    Emp_ID:number;
    Emp_Name:string;
    Emp_dept:string;
    Emp_salary?:number;
}

var empShital:IEmployee={
    Emp_ID:1,
    Emp_Name:"Shital",
    Emp_dept:"Computer Science",
    Emp_salary:55000
}
var empPravin:IEmployee={
    Emp_ID:2,
    Emp_Name:"Pravin",
    Emp_dept:"HR"
}
console.log(empShital);
console.log(empPravin);


console.log(`Details of employee Shital Employee ID :${empShital.Emp_ID}  Employee Name: ${empShital.Emp_Name}  Employee Department:${empShital.Emp_dept}  Employee Salary: ${empShital.Emp_salary}`);
console.log(`Details of employee Pravin Employee ID :${empPravin.Emp_ID}  Employee Name: ${empPravin.Emp_Name}  Employee Department:${empPravin.Emp_dept}`);

