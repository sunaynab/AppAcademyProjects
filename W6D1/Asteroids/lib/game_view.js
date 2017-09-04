const GameView = function (ctx, game) {
  this.ctx = ctx;
  this.game = game;
};

GameView.MOVES = {
  "w": [ 0, -1],
  "a": [-1,  0],
  "s": [ 0,  1],
  "d": [ 1,  0],
};

GameView.prototype.start = function () {

};
module.exports = GameView;
