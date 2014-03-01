var Player = {

  all: [],
  playerTurns: [],

  initialize : function(symbol) {
    this.symbol = symbol;
  },

  create : function(symbol) {
    var playerInstance = Object.create(Player);
    playerInstance.initialize(symbol);
    Player.all.push(playerInstance);
    playerInstance.spacesOwned = []
    return playerInstance;
  }


/*  Space.find.matchedSpaces.forEach(function(combo) {
    var winningPlayer = Object.create(
    return winningPlayer;
    return gameEnd;
  })*/

};

var Space = {

  all: [],

  initialize : function(posx, posy) {
    this.xCoordinate = posx;
    this.yCoordinate = posy;

  },

  create : function(posx, posy) {
    var spaceInstance = Object.create(Space);
    spaceInstance.initialize(posx,posy);
    Space.all.push(spaceInstance);
    return spaceInstance;
  },

  markBy : function(player) {
    this.markBy = player;
  },

  markedSpace : function(player) {
    this.markedSpace = markBy;
  },

  find : function(posx, posy) {
    var matchedSpaces = Space.all.filter(function(space) {
      return posx === space.xCoordinate && posy === space.yCoordinate;
    });
    console.log(matchedSpaces);
    return matchedSpaces[0];
  }
};



var Board = {

  spaces: [],

  initialize : function() {
    
    for (var x = 1; x <= 3; x++) {
      for (var y = 1; y <= 3; y++) {
        this.spaces.push(Space.create(x,y));
      };
    };
  }
};

var Game = {
  
  maxTurns: 9,

  winningCombos: [  
                    [[1,1],[1,2],[1,3]],
                    [[2,1],[2,2],[2,3]],
                    [[3,1],[3,2],[3,3]], 
                    [[1,1],[2,1],[3,1]],
                    [[1,2],[2,2],[3,2]],
                    [[1,3],[2,3],[3,3]],
                    [[1,1],[2,2],[3,3]],
                    [[3,1],[2,2],[1,3]]
                ],

  initialize : function() {
    Board.initialize();
    Player.create('X');
    Player.create('O');
  },

  create : function() {
    var gameInstance = Object.create(Game); 
    gameInstance.initialize();
    return gameInstance;
    
  },


  gameWinner : function() {

    if (winningArrayX) {
      return "winner is x"
    } else if (winningArrayO) {
      return "O's win"
    } else {
      return false
    }
  },

  gameEnd : function() {
    if (Space.markedSpaces.length === this.maxTurns) {
      return true;
    }
  },

  gameOver : function() {
      if (!gameWinner) {
        return "Cat's Game"
      } else {
        return 
      }
  }
}

$(function() {
  Game.initialize();
  Board.spaces.forEach(function(currentSpace) {
    $('#game-board').append('<div class="space-cell" data-coordinate="[' + currentSpace.xCoordinate + "," + currentSpace.yCoordinate + ']"></div>')
  });


  for (var x = 0; x < 9; x++) {
    Player.playerTurns.push(Player.all[x%2])
  };

  $('.space-cell').click(function() {
    var cellCoordinate = $(this).data('coordinate');
    $(this).text(Player.playerTurns[0].symbol);
    var currentPlayer = Player.playerTurns[0];
    
    Player.playerTurns[0].spacesOwned.push(cellCoordinate)




    Game.winningCombos.forEach(function(comboCheck) {
      
      // test horizontal
      comboCheck.forEach(function(currentCombo) {
        var matches = 0;

        Player.playerTurns[0].spacesOwned.forEach(function(playerSet) {
          if (currentCombo[0] === playerSet[0]) {
            matches += 1;
          }
          if (matches === 3) {
            console.log('winner horizontal')
          }          
        });
      });

      // test vertical
      comboCheck.forEach(function(currentCombo) {
        var matches = 0;

        Player.playerTurns[0].spacesOwned.forEach(function(playerSet) {
          if (currentCombo[1] === playerSet[1]) {
            matches += 1;
          }
          if (matches === 3) {
            console.log('winner vertical')
          }          
        });
      });

      // test diagonal 
       comboCheck.forEach(function(currentCombo) {
        var matches = 0;

        Player.playerTurns[0].spacesOwned.forEach(function(playerTurns) {
          if ((Space.initialize.xCoordinate === [1,2,3] && Space.initialize.yCoordinate === [1,2,3]) || (Space.initialize.xCoordinate === [1,2,3] && Space.initialize.yCoordinate === [3,2,1])) {
            matches += 1;
          }
          if (matches === 3) {
            console.log('winner diagonal')
          }
        })

        Player.playerTurns[0].spacesOwned.forEach(function(playerSet) {
          //if ((playerSet === [1,1] || playerSet === [2,2] || playerSet === [3,3]) || (playerSet === [3,1] || playerSet === [2,2] || playerSet === [1,3]) ) {
          if ((playerSet[0] === 1 && playerSet[1] === 1 || playerSet[0] === 2 && playerSet[1] === 2 || playerSet[0] === 3 && playerSet[1] === 3) || (playerSet[0] === 3 && playerSet[1] === 1 || playerSet[0] === 2 && playerSet[1] === 2 || playerSet[0] === 1 && playerSet[1] === 3)) {
            matches += 1;
          }
          if (matches === 3) {
            console.log('winner diagonal')
          }          
        });
      });


    
    });

    Player.playerTurns.shift();
  });


  

  /*$("form#Players").submit(function() {
    event.preventDefault();


    if xcoordinate.forEach(markedSpace) === ycoordinate.forEach([])

    
    

  });*/



})




