class View {
  constructor(game, $el) {
    this.game = game;
    this.$el = $el;

    this.setupBoard();
    this.bindEvents();
  }



  bindEvents() {
    const currentPlayer = this.game.currentPlayer;
    this.$el.on("click", "li", event => {
      const $square = $(event.currentTarget);
      this.makeMove($square);
      // $square.on ("mouseover",function () {
      //   $square.css('background-color', 'white');
      // });
      // console.log(this.game.currentPlayer);
      if (this.game.isOver()) {
        const $body = $("body");
        const p = document.createElement("p");
        p.textContent = `${currentPlayer} wins!`;
        $body.append(p);
        this.$el.off("click");
        const $ul = $("ul");

        const $lis = $ul.children();
        for (var i = 0; i < $lis.length; i++) {
          const $li = $($lis[i]);
          if ($li.hasClass(currentPlayer)) {
            $li.addClass(`game-over`);
          }else if ($li.hasClass(!currentPlayer))
            $li.addClass(`winner-${currentPlayer}`);
          }
        }


    });

  }



  makeMove($square) {
    const positions = {
      "0":[0,0],
      "1":[0,1],
      "2":[0,2],
      "3":[1,0],
      "4":[1,1],
      "5":[1,2],
      "6":[2,0],
      "7":[2,1],
      "8":[2,2]
    };
    this.game.playMove(positions[$square.attr("id")]);
    $square.addClass(this.game.currentPlayer);

  }

  setupBoard() {
    const $ul = $("<ul></ul>");
    $ul.attr("style", "width: 300px");
    for (var i = 0; i < 9; i++) {
      const $li = $("<li></li>");
      $li.attr("id", i);
      $ul.append($li);
    }
    this.$el.append($ul);
  }
}

module.exports = View;
