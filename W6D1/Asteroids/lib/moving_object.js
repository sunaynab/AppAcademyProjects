const Util = require("./util");

const MovingObject = function (options) {
  this.pos = options.pos;
  this.vel = options.vel;
  this.radius = options.radius;
  this.color = options.color;
};

MovingObject.prototype.draw = function (ctx) {
  ctx.fillStyle = this.color;
  ctx.beginPath();

  ctx.arc(
    this.pos[0],
    this.pos[1],
    this.radius,
    0,
    2 * Math.PI,
    true
  );

  ctx.fill();

};

MovingObject.prototype.move = function () {
  let newPos = this.pos;
  newPos[0] += this.vel;
  newPos[1] += this.vel;
};

module.exports = MovingObject;
