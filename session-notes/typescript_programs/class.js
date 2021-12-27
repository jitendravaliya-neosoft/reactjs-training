var Car = /** @class */ (function () {
    function Car() {
        this.speed = 50;
    }
    Car.prototype.acc = function () {
        this.speed += 60;
    };
    Car.prototype.checkspeed = function () {
        console.log("The speed is ".concat(this.speed));
    };
    return Car;
}());
var obj = new Car;
obj.checkspeed();
obj.acc();
obj.checkspeed();
