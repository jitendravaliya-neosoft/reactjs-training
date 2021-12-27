class Car {
    speed:number;
    constructor(){
       this.speed=50;
    }
    acc(){
       this.speed+=60;
    }
    checkspeed(){
        console.log(`The speed is ${this.speed}`)
    }
}
const obj=new Car;
obj.checkspeed();
obj.acc();
obj.checkspeed();