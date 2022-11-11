var Employee:any={
    ID:1,
    FirstName:"Shital",
    LastName:"Patil",
    Gender:"Female",
    ismarried:"Yes"
}
console.table(Employee);
console.log("************Object traversed using for-in loop***************");

for (const key in Employee) {
    
        const element = Employee[key];
        console.log(element);
        
        
    }

    console.log("**********Object destructuring *******************");
    let {ID,FirstName,LastName,Gender,ismarried}=Employee;
    console.log(`ID:${ID} FirstName: ${FirstName} LastName: ${LastName} Gender: ${Gender} Ismarried: ${ismarried}`);
    
    
