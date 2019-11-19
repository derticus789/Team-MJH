var playerLeft = 0;
var playerTop = 0;
var gridSize = 50;

var mazeString = `\
...x..........
.x.x..x.xxx..x
...x.xx.xxxx.x
xx...xxx!..x..
...x...xxx...x`;
var mazeString2 = `\
...xxxxxx!xxxxxxxxxxx.
.xxxxxxxxxxxxx.xxxxxx.
.....x................
xx..xx.xx..x.x.x.x..!.
.......xx....x.x..x...
xxxxxxxxxx.xxxxxxxxxxx`;

var maze = mazeString.split("\n").map(row => row.split(""));

function mazeClass(character) {
  if (character === "x") {
    return "mazeCell mazeWall";
  } else if (character === ".") {
    return "mazeCell";
  } else {
    return "mazeCell goal";
  }
}
function drawMaze() {
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
    if (4 !== playerTop) {
      playerTop += 1;
    }
  }
  drawPlayer();
  if (playerLeft === 8 && playerTop === 3) {
    setTimeout(function() {
      alert("u win lol");
    }, 250);
    var audio = new Audio("http://soundbible.com/grab.php?id=1719&type=wav");
    audio.play(5);
  }
});

function drawPlayer() {
  $("#player").css("left", playerLeft * gridSize + "px");
  $("#player").css("top", playerTop * gridSize + "px");
}
drawPlayer();
