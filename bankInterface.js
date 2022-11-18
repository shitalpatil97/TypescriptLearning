var personshital = {
    person_name: "Shital",
    Acc_No: 6044596633,
    Acc_type: "Salary Account",
    Bank_Name: "Bank Of Maharashtra",
    Bank_address: "Jath",
    Bank_Branch: "Jath",
    IFSC_code: 'MH12567899'
};
var personPravin = {
    person_name: "Pravin",
    Acc_No: 6047896633,
    Acc_type: "Current Account",
    Bank_Name: "HDFC",
    Bank_address: "Solapur",
    Bank_Branch: "Sangola",
    IFSC_code: 'HDFC34567'
};
console.log(personshital);
console.log(personPravin);
for (var key in personshital) {
    console.log(key + " : " + personshital[key]);
}
