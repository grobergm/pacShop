var grid=[];

function PacMan() {
  this.x = 0;
  this.y = 0;
  this.nextX=0;
  this.nextY=0;
  this.dots = 0;
  this.speed = 1;
}

PacMan.prototype.move = function(event) {
  if (event.which == 37) {
    this.nextY -= 1;
  } else if(event.which == 38) {
    this.nextX -= 1;
  } else if (event.which == 39) {
    this.nextY += 1;
  } else if (event.which == 40) {
    this.nextX += 1;
  }
  console.log(this);
  if (this.nextX < 0) {
    this.nextX = grid.length - 1;
    console.log(this);
  }
  if (this.nextY < 0) {
    this.nextY = grid.length - 1;
    console.log(this);
  }
  if (this.nextX == grid.length) {
    this.nextX = 0;
    console.log(this);
  }
  if (this.nextY == grid.length) {
    this.nextY = 0;
    console.log(this);
  }
  updatePos(this);
  this.x = this.nextX;
  this.y = this.nextY;
}

function updatePos(pac) {
  $("#col" + pac.x + "-" + pac.y).addClass("emptyCell");
  $("#col" + pac.x + "-" + pac.y).removeClass("pacAt");
  $("#col" + pac.nextX + "-" + pac.nextY).removeClass("emptyCell");
  $("#col" + pac.nextX + "-" + pac.nextY).addClass("pacAt");
  var hasDot=$("#col" + pac.nextX + "-" + pac.nextY).hasClass("dot");
  if(hasDot){
    $("#col" + pac.nextX + "-" + pac.nextY).removeClass("dot");
    pac.dots++;
  }
  $("span#dotAmount").text(pac.dots);
    console.log(pac);
}
var textBlock = "";
function addGrid(size){
  for (var i=0;i<=parseInt(size);i++){
    grid[i] = [];
    console.log("first"+i)
    textBlock += "<div class='row'>";

    for (var j=0;j<=parseInt(size);j++){
        console.log("second"+i+j)
      grid[i][j]=0;
      textBlock += "<div class='dot emptyCell cell col-md-" + (Math.floor(12/size)) + "' id='col" + i + "-" + j + "'></div>";

    }
    console.log("closing Div")
    textBlock += "</div>";

  }
  $("#gridSpot").append(textBlock);
}


var pacMan = new PacMan();

$(document).ready(function() {
  addGrid(11);
  updatePos(pacMan);
  document.addEventListener("keydown", function(event) {
    pacMan.move(event);
  });
  $("#openShop").click(function(){
    $("#gridSpot").toggle();
    $("#shopSpot").toggle();

  });
});
