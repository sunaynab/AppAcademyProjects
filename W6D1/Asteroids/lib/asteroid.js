const Util = require("./util");
const MovingObject = require("./moving_object");
const Ship = require("./ship");
const Bullet = require("./bullet");

const DEFAULTS = {
	COLOR: "#486D79",
	RADIUS: 20,
	SPEED: 7
};

const Asteroid = function (options = {}) {
  options.color = DEFAULTS.COLOR;
  options.pos = options.pos;
  options.radius = DEFAULTS.RADIUS;
  options.vel = options.vel || Asteroid.randomVec(DEFAULTS.SPEED);

  MovingObject.call(this, options);
};

Asteroid.prototype.randomVec = function (length) {
  const deg = 2 * Math.PI * Math.random();
  return Asteroid.scale([Math.sin(deg), Math.cos(deg)], length);
};

Asteroid.prototype.scale = function (vec, m) {
  return [vec[0] * m, vec[1] * m];
};








module.exports = Asteroid;
