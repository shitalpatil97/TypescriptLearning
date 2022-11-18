interface IBank_Details1{
    Bank_Name:string;
    Bank_address:string;
}
interface IBank_Details2{
    Bank_Branch:string;
    IFSC_code:any;
}

interface BankDetailsOfPerson extends IBank_Details1,IBank_Details2{
    person_name:string;
    Acc_No:number;
    Acc_type:string;
}

var personshital:BankDetailsOfPerson={
    person_name:"Shital",
    Acc_No:6044596633,
    Acc_type:"Salary Account",
    Bank_Name:"Bank Of Maharashtra",
    Bank_address:"Jath",
    Bank_Branch:"Jath",
    IFSC_code:'MH12567899'
}
var personPravin:BankDetailsOfPerson={
    person_name:"Pravin",
    Acc_No:6047896633,
    Acc_type:"Current Account",
    Bank_Name:"HDFC",
    Bank_address:"Solapur",
    Bank_Branch:"Sangola",
    IFSC_code:'HDFC34567'
}
console.log(personshital);
console.log(personPravin);
for (const key in personshital) {
    console.log(key+" : "+personshital[key]);
    
    
}







