describe("Player", function() {
  describe("create", function() {
    it("creates a new Player object", function() {
      var testPlayer = Player.create("X");
      Player.isPrototypeOf(testPlayer).should.equal(true);
    });
  });
  describe("initialize", function() {
    it("is initialized with a symbol", function() {
      var testPlayer = Object.create(Player);
      testPlayer.initialize("X");
      testPlayer.symbol.should.equal("X");
    });
  });
});

describe("Space", function() {
  describe("create", function() {
    it("creates a new Space object", function () {
      var testSpace = Object.create(Space);
      Space.isPrototypeOf(testSpace).should.equal(true);
    });
  });
  describe("initialize", function() {
    it("it is initialized with coordinates", function() {
      var testSpace = Object.create(Space);
      testSpace.initialize(1, 2);
      testSpace.coordinateX.should.equal(1);
      testSpace.coordinateY.should.equal(2);
    });
  });
  describe("markBy", function() {
    it("lets a player mark the space", function() {
      var testPlayer = Player.create("X");
      var testSpace = Space.create(1, 2);
      testSpace.markBy(testPlayer);
      testSpace.markedBy.should.equal(testPlayer);
    });
  });
});

describe("Board", function() {
  describe("create", function() {
    it("creates a new Board object", function() {
      var testBoard = Object.create(Board);
      Board.isPrototypeOf(testBoard).should.equal(true);
    });
  });
  describe("initialize", function() {
    it("it is initialized with 9 spaces and pushes them into an array", function() {
      var testBoard = Object.create(Board);
      testBoard.initialize();
      testBoard.spaces.length.should.equal(9);
    });
  });
  describe("victory", function() {
    it("determines if a player has got three in a row", function() {
      var testBoard = Object.create(Board);
      testBoard.initialize();
      testBoard.spaces[0].markBy("X");
      testBoard.spaces[1].markBy("X");
      testBoard.spaces[2].markBy("X");
      testBoard.victory();
      testBoard.victoryX.should.equal(true);
    });
  });
});

describe("Game", function() {
  describe("create", function() {
    it("creates a new Game object", function() {
      var testGame = Object.create(Game);
      Game.isPrototypeOf(testGame).should.equal(true);
    });
  });
  
  describe("initialize", function() {
    it("creates 2 Player objects and pushes them into an array", function() {
      var testGame = Object.create(Game);
      testGame.initialize();
      testGame.players.length.should.equal(2);
    });
    it("creates a new Board object", function() {
      var testGame = Object.create(Game);
      testGame.initialize();
      testGame.currentBoard.spaces.length.should.equal(9);
    });
  });
  
  describe("switchTurn", function() {
    it("changes the current turn", function() {
      var testGame = Object.create(Game);
      testGame.initialize();
      testGame.switchTurn();
      testGame.turn.should.equal("O");
    });
  });

  describe("gameOver", function() {
    it("decides when the game is over", function() {
      var testGame = Object.create(Game);
      testGame.initialize();
      testGame.gameOver();
      testGame
    });
  });

});




























