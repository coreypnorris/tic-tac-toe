var Player = {
  create: function(playerID) {
    var newPlayer = Object.create(Player);
    newPlayer.initialize(playerID);
    return newPlayer;
  },
  initialize: function(playerID) {
    this.symbol = playerID;
  }
};

var Space = {
  create: function(x, y) {
    var newSpace = Object.create(Space);
    newSpace.initialize(x, y);
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
  create: function() {
    var newBoard = Object.create(Board);
    newBoard.initialize();
    return newBoard;
  },
  initialize: function() {
    this.spaces = [];
    var spaceA = Space.create(1,1);
    var spaceB = Space.create(1,2);
    var spaceC = Space.create(1,3);
    var spaceD = Space.create(2,1);
    var spaceE = Space.create(2,2);
    var spaceF = Space.create(2,3);
    var spaceG = Space.create(3,1);
    var spaceH = Space.create(3,2);
    var spaceI = Space.create(3,3);
    this.spaces.push(spaceA, spaceB, spaceC, spaceD, spaceE, spaceF, spaceG, spaceH, spaceI);
    return this.spaces;
  },
  victory: function() {
    if (this.spaces[0].markedBy === "X" && this.spaces[1].markedBy === "X" && this.spaces[2].markedBy === "X") {
      this.victoryX = true;
    } else if (this.spaces[3].markedBy === "X" && this.spaces[4].markedBy === "X" && this.spaces[5].markedBy === "X") {
      this.victoryX = true;
    } else if (this.spaces[6].markedBy === "X" && this.spaces[7].markedBy === "X" && this.spaces[8].markedBy === "X") {
      this.victoryX = true;
    } else if (this.spaces[0].markedBy === "X" && this.spaces[3].markedBy === "X" && this.spaces[6].markedBy === "X") {
      this.victoryX = true;
    } else if (this.spaces[1].markedBy === "X" && this.spaces[4].markedBy === "X" && this.spaces[7].markedBy === "X") {
      this.victoryX = true;
    } else if (this.spaces[2].markedBy === "X" && this.spaces[5].markedBy === "X" && this.spaces[8].markedBy === "X") {
      this.victoryX = true;
    } else if (this.spaces[0].markedBy === "X" && this.spaces[4].markedBy === "X" && this.spaces[8].markedBy === "X") {
      this.victoryX = true;
    } else if (this.spaces[2].markedBy === "X" && this.spaces[4].markedBy === "X" && this.spaces[6].markedBy === "X") {
      this.victoryX = true;
    } else if (this.spaces[0].markedBy === "O" && this.spaces[1].markedBy === "O" && this.spaces[2].markedBy === "O") {
      this.victoryY = true;
    } else if (this.spaces[3].markedBy === "O" && this.spaces[4].markedBy === "O" && this.spaces[5].markedBy === "O") {
      this.victoryY = true;
    } else if (this.spaces[6].markedBy === "O" && this.spaces[7].markedBy === "O" && this.spaces[8].markedBy === "O") {
      this.victoryY = true;
    } else if (this.spaces[0].markedBy === "O" && this.spaces[3].markedBy === "O" && this.spaces[6].markedBy === "O") {
      this.victoryY = true;
    } else if (this.spaces[1].markedBy === "O" && this.spaces[4].markedBy === "O" && this.spaces[7].markedBy === "O") {
      this.victoryY = true;
    } else if (this.spaces[2].markedBy === "O" && this.spaces[5].markedBy === "O" && this.spaces[8].markedBy === "O") {
      this.victoryY = true;
    } else if (this.spaces[0].markedBy === "O" && this.spaces[4].markedBy === "O" && this.spaces[8].markedBy === "O") {
      this.victoryY = true;
    } else if (this.spaces[2].markedBy === "O" && this.spaces[4].markedBy === "O" && this.spaces[6].markedBy === "O") {
      this.victoryY = true;
    } else {
      
    };
  }
};

var Game = {
  games: [],
  create: function(game) {
    var newGame = Object.create(Game);
    newGame.initialize(game);
    Game.games.push(newGame);
    return newGame;
  },
  initialize: function() {
    this.players = [];
    var playerOne = Player.create("X");
    var playerTwo = Player.create("O");
    this.players.push(playerOne, playerTwo);
    this.currentBoard = Board.create();
    this.turn = this.players[0].symbol;
    console.log(this.turn);
  },
  switchTurn: function() {
    if (this.turn === "X") {
      this.turn = this.players[1].symbol;
    } else if (this.turn === "O") {
      this.turn = this.players[0].symbol;
    };
  },
  gameOver: function() {
    
    if (this.currentBoard.victoryX === true) {
      alert("PLAYER 1 WINS!");
      return;
    } else if (this.currentBoard.victoryY === true) {
      alert("PLAYER 2 WINS!");
      return;
    }
  }
};

















