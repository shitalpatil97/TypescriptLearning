class Student {
    private _userName: string;
 
    get name() : string {
     // format 
     return this._userName;
    }
    set name(name: string) {
     if(name == "Codemind") {
         this._userName = name;
     }
     
    }
   display() {
     console.log(this._userName);
   }
 }
 
 var obj = new Student();
 obj.name = "Codemind";
 console.log(obj.name);
 