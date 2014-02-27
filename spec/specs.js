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
    it("it is initialized with a coordinates", function() {
      var testSpace = Object.create(Space);
      testSpace.initialize(1,2);
      testSpace.coordinateX.should.equal(1);
      testSpace.coordinateY.should.equal(2);
    });
  });
  describe("markBy", function() {
    it("lets a player mark the space", function() {
      var testPlayer = Player.create("X");
      var testSpace = Space.create("A");
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
    it("creates 9 spaces and pushes them into an array when it it initialized", function() {
      var testBoard = Object.create(Board);
      testBoard.initialize();
      testBoard.spaces.should.equal([space1,space2,space3,space4,space5,space6,space7,space8,space9]);
    });
  });
});









