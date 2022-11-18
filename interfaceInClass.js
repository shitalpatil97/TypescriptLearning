var Person = /** @class */ (function () {
    function Person(fname, lname, age) {
        this.fname = fname;
        this.lname = lname;
        this.age = age;
    }
    Person.prototype.display = function () {
        console.log("Employee Name:".concat(this.fname, " ").concat(this.lname, "  Age:").concat(this.age));
    };
    return Person;
}());
var p = new Person("Shital", "Patil", 24);
p.display();
