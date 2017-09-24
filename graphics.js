/* Handles the graphics for the tetris-game, to use: insert a 'canvas'
in the HTML file with an ID and use the createGraphics()
*/

//Constants
const numberofBlocksInX = 10;
const numberOfBlocksInY = 22;
const playFieldHeightPrecentage = 75;

//Variables
var blockWidht = 40;
var canvasID = "";

function createGraphics(_canvasID){
    canvasID = _canvasID;
    blockWidht = (window.innerHeight * playFieldHeightPrecentage/100)/numberOfBlocksInY;
    document.getElementById(canvasID).width = blockWidht*numberofBlocksInX;
    document.getElementById(canvasID).height = blockWidht*numberOfBlocksInY;
}
// coordinates are in blocks, NOT pixels!
function drawBlock(x,y,color){
    if (valid_X(x) && valid_Y(y)){
        var c=document.getElementById(canvasID);
        var ctx=c.getContext("2d");
        ctx.fillStyle = color;
        ctx.fillRect(x*blockWidht,y*blockWidht,blockWidht,blockWidht);
        //ctx.strokeStyle = "#4d4d4d";
        //ctx.strokeRect(x*blockWidht,y*blockWidht,blockWidht,blockWidht);
    }else{
        //illegal coordinates
        alert("Illegal coord");
    }
}

function clearAll(){
  var c=document.getElementById(canvasID);
  var ctx=c.getContext("2d");
  ctx.clearRect(0,0,blockWidht*numberofBlocksInX,blockWidht*numberOfBlocksInY);
}

function valid_X(x){
    return x >= 0 && x < numberofBlocksInX;
}

function valid_Y(y){
    return y >= 0 && y < numberOfBlocksInY;
}
