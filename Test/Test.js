// Canvas, Frames per Second, KeysDown, Global vars
var canvas = document.createElement("canvas");
canvas.width = 800;
canvas.height = 640;
document.body.appendChild(canvas);
var ctx = canvas.getContext("2d");
var cX = new Number();
var cY = new Number();
var hX = new Number();
var hY = new Number();
var FPS = 30;
// Mouse listeners
canvas.addEventListener("mousedown", getPosition, false);
function getPosition(event){
    if (event.x != undefined && event.y != undefined){
         cX = event.x;
         cY = event.y;
        }
        else // Firefox method to get the position
        {
          cX = event.clientX + document.body.scrollLeft +
              document.documentElement.scrollLeft;
          cY = event.clientY + document.body.scrollTop +
              document.documentElement.scrollTop;
        }
        cX -= canvas.offsetLeft;
        cY -= canvas.offsetTop;
}

var Button = {
	width: canvas.width/8,
	height: canvas.height/10,
	x: canvas.width/2,
	y: canvas.height/2,
	tick: function(){
		this.width = canvas.width/8;
		this.height = canvas.height/10;
		this.x = canvas.width/2;
		this.y = canvas.height/2;
	},
	draw: function(){
		ctx.fillStyle = "red";
		ctx.fillRect(this.x-this.width/2, this.y-this.height/2, this.width, this.height);
	}
};

var clear = function(){
	if(ctx.globalAlpha == 1){
		ctx.fillStyle = "white";
		ctx.fillRect(0, 0, canvas.width, canvas.height);
	}
};

function CanvasHandle(){
	if(cX >= Button.x-Button.width/2 && cX <=Button.x + Button.width/2 && cY <= Button.y + Button.height/2 && cY>=Button.y-Button.height/2){
		cX = 0;
		cY = 0;
		canvas.width = canvas.width/2;
	}
}

setInterval(function(){
	clear();
	Button.tick();
	Button.draw();
	CanvasHandle();
}, 1000/FPS);