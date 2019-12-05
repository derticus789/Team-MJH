var playerLeft = 0;
var playerTop = 0;
var gridSize = 50;

var mazeString = `\
.....
xxxx.
xxx..
xxx.x
!...x`;

var mazeString2 = `\
.....xxxxxxx........
xxxx.xxxxxxx.xxxxxx.
xxxx.xxxxxxx.xxxxxx.
xxxx.........xxxxxx.
!xxxxxxxxxxxxxxxxxx.
.xxxxxxxxxxxxxxxxxx.
.xxxxxxxxxxxxxx.....
................xxxx`;



let mazeArray = [mazeString, mazeString2];
var maze = mazeArray[0].split("\n").map(row => row.split(""));

function mazeClass(character) {
  if (character === "x") {
    return "mazeCell mazeWall";
  } else if (character === ".") {
    return "mazeCell";
  } else {
    return "mazeCell goal";
  }
}


// function drawMaze() {
//   $("#maze").empty();
//   var div = $("");
//   console.log(div);
//   for (var i = 0; i < maze.length; i++) {
//     div.append($("<div>").addClass("mazeRow"));
//     console.log(div);

//     for (var j = 0; j < maze[i].length; j++) {
//       var mazeCell = maze[i][j];
//       var className = mazeClass(maze[i][j]);  

//       div.append($("<span>").addClass(className));
//     }
//   }

//   $("#maze").replaceWith(div);

// }



function drawMaze() {
  $("#maze").empty()

  for (var i = 0; i < maze.length; i++) {
    var div = $("<div>").addClass("mazeRow");

    for (var j = 0; j < maze[i].length; j++) {
      var mazeCell = maze[i][j];
      var className = mazeClass(maze[i][j]);

      div.append($("<span>").addClass(className));
    }
    $("#maze").append(div);
  }
}

drawMaze();


$("body").keydown(function(event) {
  console.log(playerLeft, playerTop);
  if (event.key === "ArrowRight") {
    if (
      playerLeft === maze[0].length - 1 ||
      maze[playerTop][playerLeft + 1] === "x"
    ) {
      return;
    }
    playerLeft += 1;
  } else if (event.key === "ArrowLeft") {
    if (maze[playerTop][playerLeft - 1] === "x") {
      return;
    }
    if (0 !== playerLeft) {
      playerLeft -= 1;
    }
  } else if (event.key === "ArrowUp") {
    if (playerTop === 0 || maze[playerTop - 1][playerLeft] === "x") {
      return;
    }
    if (0 !== playerTop) {
      playerTop -= 1;
    }
  } else if (event.key === "ArrowDown") {
    if (
      playerTop === maze.length - 1 ||
      maze[playerTop + 1][playerLeft] === "x"
    ) {
      return;
    }
      playerTop += 1;
  }
  drawPlayer();
  if (playerLeft === 0 && playerTop === 4) {
  

    setTimeout(function() {
      alert("u win lol");
    }, 250);
    // var button = document.createElement ("Next level");
    // var button1 = $("<button/>");
    // button1.text("TEST");

    var button1 = $('<input type="button" value="NEXT LEVEL" id="button1"/>');
    $(document).ready(() => {
      $("#button1").click( () => {
        nextLevel();
      })
    });

    $("#buttonArea").append(button1);
   

    var audio = new Audio("http://soundbible.com/grab.php?id=1719&type=wav");
    audio.play(5);      
    }
});

function nextLevel() {
  maze = mazeArray[1].split("\n").map(row => row.split(""));
  playerLeft = 0
  playerTop = 0

    drawMaze();
    console.log(maze.length)
  /* $("body").keydown(function(event) {
    console.log(playerLeft, playerTop);
    if (event.key === "ArrowRight") {
      if (
        playerLeft === maze[0].length - 1 ||
        maze[playerTop][playerLeft + 1] === "x"
      ) {
        return;
      }
      playerLeft += 1;
    } else if (event.key === "ArrowLeft") {
      if (maze[playerTop][playerLeft - 1] === "x") {
        return;
      }
      if (0 !== playerLeft) {
        playerLeft -= 1;
      }
    } else if (event.key === "ArrowUp") {
      if (playerTop === 0 || maze[playerTop - 1][playerLeft] === "x") {
        return;
      }
      if (0 !== playerTop) {
        playerTop -= 1;
      }
    } else if (event.key === "ArrowDown") {
      if (
        playerTop === maze.length - 1 ||
        maze[playerTop + 1][playerLeft] === "x"
      ) {
        return;
      }
      if (4 !== playerTop) {
        playerTop += 1;
      }
    }
    drawPlayer();
    if (playerLeft === 0 && playerTop === 4) {
    

      setTimeout(function() {
        alert("u win lol");
      }, 250);
      // var button = document.createElement ("Next level");
      // var button1 = $("<button/>");
      // button1.text("TEST");

      var button1 = $('<input type="button" value="NEXT LEVEL" id="button1"/>');
      $(document).ready(() => {
        $("#button1").click( () => {
          nextLevel();
        })
      });

      $("#buttonArea").append(button1);
    

      var audio = new Audio("http://soundbible.com/grab.php?id=1719&type=wav");
      audio.play(5);      
      }
  }); */
}


// function nextLevel() {
//   maze = mazeArray[1].split("\n").map(row => row.split(""));
//   drawMaze();
//   $("body").keydown(function(event) {
//     console.log(playerLeft, playerTop);
//     if (event.key === "ArrowRight") {
//       if (
//         playerLeft === maze[0].length - 1 ||
//         maze[playerTop][playerLeft + 1] === "x"
//       ) {
//         return;
//       }
//       playerLeft += 1;
//     } else if (event.key === "ArrowLeft") {
//       if (maze[playerTop][playerLeft - 1] === "x") {
//         return;
//       }
//       if (0 !== playerLeft) {
//         playerLeft -= 1;
//       }
//     } else if (event.key === "ArrowUp") {
//       if (playerTop === 0 || maze[playerTop - 1][playerLeft] === "x") {
//         return;
//       }
//       if (0 !== playerTop) {
//         playerTop -= 1;
//       }
//     } else if (event.key === "ArrowDown") {
//       if (
//         playerTop === maze.length - 1 ||
//         maze[playerTop + 1][playerLeft] === "x"
//       ) {
//         return;
//       }
//       if (4 !== playerTop) {
//         playerTop += 1;
//       }
//     }
//   drawPlayer();
// });

function drawPlayer() {
  $("#player").css("left", playerLeft * gridSize + "px");
  $("#player").css("top", playerTop * gridSize + "px");
}
drawPlayer();
