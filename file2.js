"use strict";
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
exports.__esModule = true;
var file_1 = require("./file");
var Implementation = /** @class */ (function (_super) {
    __extends(Implementation, _super);
    function Implementation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Implementation.prototype.display = function () {
        console.log(_super.prototype.add.call(this, 10, 10), _super.prototype.sub.call(this, 10, 10), _super.prototype.mul.call(this, 10, 10), _super.prototype.div.call(this, 10, 10));
    };
    return Implementation;
}(file_1.Arithmetic));
var s = new Implementation();
s.display();
