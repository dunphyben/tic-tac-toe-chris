describe("Player", function() {
  describe("initialize", function() {
    it("is initialized with a symbol", function() {
      var testPlayer = Object.create(Player);
      testPlayer.initialize("X");
      testPlayer.symbol.should.equal("X");
    });
  });

  // describe("playerTurns", function() {
  //   it("alternates between players after click to mark space", function() {
  //     var testPlayer = Object.create(Player);
  //     testPlayer.
  //   })
  // })


  describe("create", function() {
    it("creates a new player object", function() {
      var testPlayer = Player.create("X");
      Player.isPrototypeOf(testPlayer).should.equal(true);
    });
  });
});

describe("Space", function() {
  describe("initialize", function() {
    it("is initialized with an x and y coordinate", function() {
      var testSpace = Object.create(Space);
      testSpace.initialize(1, 2);
      testSpace.xCoordinate.should.equal(1);
      testSpace.yCoordinate.should.equal(2);
    });
  });

  describe("create", function() {
    it("Creates positions on a board", function() {
      var testSpace = Space.create(1,2);
      Space.isPrototypeOf(testSpace).should.equal(true);
    });
  });

  describe("markBy", function() {
    it("Lets a player mark the space", function() {
      var testPlayer = Player.create("X");
      var testSpace = Space.create(1,2);
      testSpace.markBy(testPlayer);
      testSpace.markBy.should.equal(testPlayer);
    });
  });

  describe("find", function() {
    it("returns a space by its coordinates", function() {
      var testSpace = Object.create(Space);
      testSpace.initialize(1, 2);
      // console.log(testSpace.xCoordinate);
      testSpace.find(1,2).should.eql(testSpace);
    });
  });  

  // describe("winningPlayer", function() {
  //   it("Returns true if one of the winning combinations are met", function() {
  //     var testPlayer = Object.create(winner);
      
  //   }
  // })
  
});


describe("Board", function() {
  describe("initialize", function() {
    it("Sets up the board with 9 empty Spaces", function() {
      var testBoard = Object.create(Board);
      // var testSpace = Space.create(1,1);
      testBoard.initialize();
      testBoard.spaces.should.equal[9];
    });

    it("Sets up the board with correct coordinates", function() {
      var testBoard = Object.create(Board);
      testBoard.initialize();
      // console.log(testBoard.spaces[5]);
      testBoard.spaces[5].xCoordinate.should.equal(2);
      testBoard.spaces[5].yCoordinate.should.equal(3);
    });
  });
});


describe("Game", function() {
  describe("gameEnd", function() {
    it("Ends the game after 9 turns", function() {
      var testGame = Object.create(Board);
      testGame.initialize();
      
      testGame.gameEnd(9).should.equal(true);
    });
  });
  // describe("gameWinner", function() {
  //   it("Returns a winner when a winnning combination is reached by Player 1", function() {
  //     var testGame = Object.create(Game);
  //     // var testSpace = Space.create(1,1);
  //     testGame.initialize();
  //     testGame.;

  //   });
  // });
});




//   describe("assign", function() {
//     it("Will assign playerOne an X", function() {
//       var playerOne = Object.create(Player);      
//       playerOne.assign("x");
//       playerOne.letter.should.equal("x");
//     });

//     it("Will assign playerTwo an O", function() {
//       var playerTwo = Object.create(Player);
//       playerTwo.assign();
//       playerTwo.letter.should.equal("o");
//     });
//   });
// });

