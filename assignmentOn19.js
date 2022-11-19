var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Organizer = /** @class */ (function () {
    function Organizer(id, name) {
        this.id = id;
        this.name = name;
    }
    Organizer.prototype.display = function () {
        console.log("Organizer id ".concat(this.id, " and ").concat(this.name));
    };
    return Organizer;
}());
var Event1 = /** @class */ (function (_super) {
    __extends(Event1, _super);
    function Event1(id, name, description, startTime) {
        var _this = _super.call(this, id, name) || this;
        _this.description = description;
        _this.startTime = startTime;
        return _this;
    }
    Event1.prototype.display = function () {
        _super.prototype.display.call(this);
        console.log("Id: ".concat(this.id, "  Name: ").concat(this.name, "  Description: ").concat(this.description, "   StartTime:").concat(this.startTime));
    };
    return Event1;
}(Organizer));
var Venue = /** @class */ (function (_super) {
    __extends(Venue, _super);
    function Venue(id, name, description, startTime, address) {
        var _this = _super.call(this, id, name, description, startTime) || this;
        _this.address = address;
        return _this;
    }
    Venue.prototype.display = function () {
        _super.prototype.display.call(this);
        console.log("Id: ".concat(this.id, "  Name: ").concat(this.name, "  Description: ").concat(this.description, "   StartTime:").concat(this.startTime, "  Address:").concat(this.address));
    };
    return Venue;
}(Event1));
var obj = new Venue(1, "shital", "this is famous event management company", 11, "Sangola");
obj.display();
