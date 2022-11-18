var Student = /** @class */ (function () {
    function Student() {
    }
    Object.defineProperty(Student.prototype, "name", {
        get: function () {
            // format 
            return this._userName;
        },
        set: function (name) {
            if (name == "Codemind") {
                this._userName = name;
            }
        },
        enumerable: false,
        configurable: true
    });
    Student.prototype.display = function () {
        console.log(this._userName);
    };
    return Student;
}());
var obj = new Student();
obj.name = "Codemind";
console.log(obj.name);
