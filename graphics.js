const numberofBlocksInX = 10;
const numberOfBlocksInY = 22;
const playFieldHeightPrecentage = 75;
var blockWidht = 40;        //Pixels
var canvasID = "";



function createGraphics(_canvasID){
    canvasID = _canvasID;
    blockWidht = (screen.height * playFieldHeightPrecentage/100)/numberOfBlocksInY; 
    document.getElementById(canvasID).clientWidth = blockWidht*numberofBlocksInX;
    document.getElementById(canvasID).height = blockWidht*numberOfBlocksInY; 
}

function drawBlock(x,y,color){

    var c=document.getElementById(canvasID);
    var ctx=c.getContext("2d"); 
    ctx.fillStyle = color;
    ctx.fillRect(x*blockWidht,y*blockWidht,blockWidht,blockWidht);
    //ctx.strokeRect(x*blockWidht,y*blockWidht,blockWidht,blockWidht);

}


/*

var c=document.getElementById("mainCanvas");
var ctx=c.getContext("2d"); 

ctx.beginPath(); 
ctx.lineWidth="1";
ctx.strokeStyle="black"; // Green path
ctx.moveTo(0,blockWidht);
ctx.lineTo(blockWidht,blockWidht);
ctx.lineTo(blockWidht,0);
ctx.lineTo(0,0);
ctx.stroke(); // Draw it
ctx.fillstyle = 0xFFFF;
ctx.fill();
*/


