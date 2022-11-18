var Passenger = /** @class */ (function () {
    function Passenger(firstName, lastName, flightno) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.frequentFlyerno = flightno;
    }
    Passenger.prototype.display = function () {
        console.log(passenger.firstName + " " + passenger.lastName + " " + passenger.frequentFlyerno);
    };
    return Passenger;
}());
var passenger = new Passenger("Jsck", "Sparrow", 102);
passenger.display();
var passenger2 = new Passenger("shital", "patil", 103);
passenger2.display();
for (var key in passenger) {
    if (passenger[key] instanceof function () { }) {
        continue;
    }
    else {
        console.log(key);
        console.log(passenger[key]);
    }
}
