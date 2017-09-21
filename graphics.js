const numberofBlocksInX = 10;
const numberOfBlocksInY = 22;
const playFieldHeightPrecentage = 75;
var blockWidht = 40;        //Pixels

function createGraphics(){
    blockWidht = (screen.height * playFieldHeightPrecentage/100)/numberOfBlocksInY; 
    
    document.body.innerHTML += "<canvas id=\"mainCanvas\" widht=\"" + 
    blockWidht*numberofBlocksInX +
    "\" height=\""+ blockWidht*numberOfBlocksInY +
    "\" style=\"border:1px solid #000000;\"></canvas>";

}

function drawBlock(x,y,color){
    
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


