Function.prototype.inherits1 = function (superClass) {
  function Surrogate () {}
  Surrogate.prototype = superClass.prototype;
  this.prototype = new Surrogate();
  this.prototype.constructor = this;
};

Function.prototype.inherits2 = function (superClass) {
  this.prototype = Object.create(superClass.prototype);
  this.prototype.constructor = this;
};

// tests

function Car(type) {
  this.type = type;
}

Car.prototype.drive = function () {
  console.log(this.type + " vrooms.");
};

function Tesla (type) {
  Car.call(this, type);
}

Tesla.inherits1(Car);

Tesla.prototype.honk = function () {
  console.log(this.type + " honks.");
};

const sedan = new Tesla("sedan");
sedan.honk();
sedan.drive();
