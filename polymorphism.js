var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(fname, lname) {
        this.FirstName = fname;
        this.lastName = lname;
    }
    Person.prototype.display = function () {
        console.log("Person name:".concat(this.FirstName, " ").concat(this.lastName));
    };
    return Person;
}());
var Student1 = /** @class */ (function (_super) {
    __extends(Student1, _super);
    function Student1(fname, lname, marks) {
        var _this = _super.call(this, fname, lname) || this;
        _this.mark = marks;
        return _this;
    }
    Student1.prototype.display = function () {
        console.log("Student name:".concat(this.FirstName, " ").concat(this.lastName, " and Mark is ").concat(this.mark));
    };
    return Student1;
}(Person));
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(fname, lname, dept, salary) {
        var _this = _super.call(this, fname, lname) || this;
        _this.emp_dept = dept;
        _this.emp_salary = salary;
        return _this;
    }
    Employee.prototype.display = function () {
        console.log("Employee name:".concat(this.FirstName, " ").concat(this.lastName, ",      DepartMent: ").concat(this.emp_dept, ",     Salary: ").concat(this.emp_salary));
    };
    return Employee;
}(Person));
var Trainer = /** @class */ (function (_super) {
    __extends(Trainer, _super);
    function Trainer(fname, lname, experience, specialization) {
        var _this = _super.call(this, fname, lname) || this;
        _this.Total_no_year_exp = experience;
        _this.specialization = specialization;
        return _this;
    }
    Trainer.prototype.display = function () {
        console.log("Trainer name:".concat(this.FirstName, " ").concat(this.lastName, ",    Total Number of years Experience:").concat(this.Total_no_year_exp, ",    Specialization: ").concat(this.specialization));
    };
    return Trainer;
}(Person));
var p = new Person("Shital", "Patil");
p.display();
p = new Student1("Shital", "Patil", 99);
p.display();
p = new Employee("Riya", "Pawar", "HR", 55000);
p.display();
p = new Trainer("Dnyanesh", "Sir", 10, "Angular");
p.display();
