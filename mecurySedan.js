//this includes the vehicle class as a module
const VehicleModule = require("./vehicle").Vehicle;

class Car extends VehicleModule {
  constructor(make, model, year, color, mileage) {
    super(make, model, year, color, mileage);
    this.maximumPassengers = 5;
    this.passenger = 0;
    this.numberOfWheels = 4;
    this.maximumSpeed = 160;
    this.fuel = 10;
    this.scheduleService = false;
  }
  loadPassenger(num) {
    if (num + this.passenger <= this.maximumPassengers) {
      this.passenger = num;
      return this.passenger;
      console.log(this.make + " " + this.model + "has enough sapce!");
    } else {
      console.log(this.make + " " + this.model + "does NOT have enough sapce!");
    }
  }
  start() {
    if (this.fuel > 0) {
      console.log("The car has started");
      return (this.started = true);
    } else {
      console.log("There is not enough fuel in the tank.");
      return (this.started = false);
    }
  }
  scheduleService(mileage) {
    if (this.mileage > 30000) {
      this.scheduleService = true;
      return this.scheduleService;
    }
  }
}

//this shows how to call from this module...
let myVehicle = new Car("Lexus", "SUV", "2022", "color", 2500);

myVehicle.start();
myVehicle.loadPassenger(4);
myVehicle.scheduleService();

console.log(myVehicle);
