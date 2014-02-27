var Player = {
  create: function(playerID) {
    var newPlayer = Object.create(Player);
    newPlayer.initialize(playerID);
    return newPlayer;
  },
  initialize: function(playerID) {
    this.symbol = playerID;
    console.log(this);
  }
};

var Space = {
  create: function(x, y) {
    var newSpace = Object.create(Space);
    return newSpace;
  },
  initialize: function(x, y) {
    this.coordinateX = x;
    this.coordinateY = y;
  },
  markBy: function(playerID) {
    this.markedBy = playerID;
  }
};

var Board = {
  spaces: [],
  create: function() {
    var newBoard = Object.create(Board);
    return newBoard;
  },
  initialize: function() {
    this.space1 = Object.create(Space);
    this.space2 = Object.create(Space);
    this.space3 = Object.create(Space);
    this.space4 = Object.create(Space);
    this.space5 = Object.create(Space);
    this.space6 = Object.create(Space);
    this.space7 = Object.create(Space);
    this.space8 = Object.create(Space);
    this.space9 = Object.create(Space);
    this.spaces.push(space1,space2,space3,space4,space5,space6,space7,space8,space9);
    return board;
  }
};
