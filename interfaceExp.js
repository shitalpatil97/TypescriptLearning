var Organizer1 = /** @class */ (function () {
    function Organizer1(id, name) {
        this.id = id;
        this.name = name;
    }
    Organizer1.prototype.display = function () {
        console.log("ID: ".concat(this.id, "  Name: ").concat(this.name));
    };
    return Organizer1;
}());
var Event1 = /** @class */ (function () {
    function Event1(id, name, description, startTime) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.startTime = startTime;
    }
    Event1.prototype.display = function () {
        console.log("ID: ".concat(this.id, "  Name: ").concat(this.name, " Description: ").concat(this.description, "  StartTime:").concat(this.startTime));
    };
    return Event1;
}());
var Venue = /** @class */ (function () {
    function Venue(id, name, description, startTime, address) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.startTime = startTime;
        this.address = address;
    }
    Venue.prototype.display = function () {
        console.log("ID: ".concat(this.id, "  Name: ").concat(this.name, " Description: ").concat(this.description, "  StartTime:").concat(this.startTime, "  Address: ").concat(this.address));
    };
    return Venue;
}());
var o = new Organizer1(1, "Shital");
o.display();
var e = new Event1(1, "shital", "bday party", 11);
e.display();
var v = new Venue(1, "shital", "bday party", 11, "Sangola");
v.display();
