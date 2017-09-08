const View = require("./ttt-view");
const Game = require("./game");

$( () => {
  // Your code here
  const el = $('.ttt');
  new View(new Game(), el);
});
