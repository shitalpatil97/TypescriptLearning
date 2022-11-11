var Employee = {
    ID: 1,
    FirstName: "Shital",
    LastName: "Patil",
    Gender: "Female",
    ismarried: "Yes"
};
console.table(Employee);
console.log("************Object traversed using for-in loop***************");
for (var key in Employee) {
    var element = Employee[key];
    console.log(element);
}
console.log("**********Object destructuring *******************");
var ID = Employee.ID, FirstName = Employee.FirstName, LastName = Employee.LastName, Gender = Employee.Gender, ismarried = Employee.ismarried;
console.log("ID:".concat(ID, " FirstName: ").concat(FirstName, " LastName: ").concat(LastName, " Gender: ").concat(Gender, " Ismarried: ").concat(ismarried));
