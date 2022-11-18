class Passenger {
    firstName:string;
    lastName: string;
    frequentFlyerno: number
    constructor(firstName: string, lastName:string, flightno:number) 
    {
        this.firstName = firstName;
        this.lastName = lastName;
        this.frequentFlyerno = flightno;
    }
    display(){
        console.log(passenger.firstName + " " + passenger.lastName + " "+ passenger.frequentFlyerno);


    }
}

var passenger = new Passenger("Jsck", "Sparrow", 102);
passenger.display();
var passenger2 = new Passenger("shital", "patil", 103);
passenger2.display();

for (const key in passenger) {
    if (passenger[key] instanceof function) {
        continue;
        
    }
    else
    {
        console.log(key);
        console.log(passenger[key]);
        
        
    }
}


