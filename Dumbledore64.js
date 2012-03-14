 /*        DO WHAT THE FUCK YOU WANT TO PUBLIC LICENSE
                 Version 2, December 2004

 Copyright (C) 2012 Brett Davis <bdavis1000@gmail.com>

 Everyone is permitted to copy and distribute verbatim or modified
 copies of this license document, and changing it is allowed as long
 as the name is changed.

            DO WHAT THE FUCK YOU WANT TO PUBLIC LICENSE
   TERMS AND CONDITIONS FOR COPYING, DISTRIBUTION AND MODIFICATION

  0. You just DO WHAT THE FUCK YOU WANT TO.

*/
/*
	Version 0.3.6 Changes:
		-Added Menus
		-Modified Sorceror AI
		-Added High Scores
	TODO:
		-Spells IP
		-More enemies and AI IP
		-Back button in high scores
		-High Score access in main menu
*/

//----------------------------------- Setup -----------------------------------------------------------------------------------------//

// Canvas, Frames per Second, KeysDown, Global vars
var canvas = document.createElement("canvas");
canvas.width = 800;
canvas.height = 576;
document.body.appendChild(canvas);
var ctx = canvas.getContext("2d");
var cX = new Number();
var cY = new Number();
var hX = new Number();
var hY = new Number();
var STATE = 0;
var nu = 0;
var hs = 0;
canvas.addEventListener("mousedown", getPosition, false);
canvas.addEventListener("mousemove", getPositionhover, false);

var highscore1 = $.jStorage.get("highscore1");
if(!highscore1){
		var highscore1 = 0;
		$.jStorage.set("highscore1",highscore1);}
var highscore2 = $.jStorage.get("highscore2");
if(!highscore2){
		var highscore2 = 0;
		$.jStorage.set("highscore2",highscore2);}
var highscore3 = $.jStorage.get("highscore3");
if(!highscore3){
		var highscore3 = 0;
		$.jStorage.set("highscore3",highscore3);}
var highscore4 = $.jStorage.get("highscore4");
if(!highscore4){
		var highscore4 = 0;
		$.jStorage.set("highscore4",highscore4);}
var highscore5 = $.jStorage.get("highscore5");
if(!highscore5){
		var highscore5 = 0;
		$.jStorage.set("highscore5",highscore5);}

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
function getPositionhover(event){
    if (event.x != undefined && event.y != undefined){
		 hX = event.x;
         hY = event.y;
        }
        else // Firefox method to get the position
        {
		  hX = event.clientX + document.body.scrollLeft +
              document.documentElement.scrollLeft;
          hY = event.clientY + document.body.scrollTop +
              document.documentElement.scrollTop;
        }
		hX -= canvas.offsetLeft;
        hY -= canvas.offsetTop;
}

var FPS = 30;
var keysDown = {};
var cd = 0;
var hptimer = 0;
var spell1 = "N/A";
var spell2 = "N/A";
var spell = "N/A";
var keycount = 0;

//Girraffix
var Wizzurd = new Image();
Wizzurd.src = "grafix/wizzurd32.png";

//Ondmg
var Wizzurd2 = new Image();
Wizzurd2.src = "grafix/nega-wizzurd32.png";

//Enemy1
var Lavaman = new Image();
Lavaman.src = "grafix/lavaman32.png";

//Tenemy
var Robo = new Image();
Robo.src = "grafix/nicebot32.png";

//Evil Wizzurd
var Sorcerorpng = new Image();
Sorcerorpng.src = "grafix/poison-wizzurd32.png";

//TinyWizard
var BabyWizard = new Image();
BabyWizard.src = "grafix/wizzurd16.png";

//Fire powerup
var Firebox = new Image();
Firebox.src = "grafix/redcube19.png";

//Ice powerup
var Icebox = new Image();
Icebox.src = "grafix/tealcube19.png";

//Earth powerup
var Earthbox = new Image();
Earthbox.src = "grafix/greencube19.png";

//lightning powerup
var Thunderbox = new Image();
Thunderbox.src = "grafix/bluecube19.png";

//hlightning
var hlightning = new Image();
hlightning.src = "grafix/lightning-h.png";

//vlightning
var vlightning = new Image();
vlightning.src = "grafix/lightning-v.png";

//shlightning
var shlightning = new Image();
shlightning.src = "grafix/lightning-h.png";

//svlightning
var svlightning = new Image();
svlightning.src = "grafix/lightning-v.png";

//Score
var score = 0;
var muliplier = 1;
var multtimer = 0;
var currpts = 0;

// Key Listeners
addEventListener("keydown", function (e) {keysDown[e.keyCode] = true;}, false);
addEventListener("keyup", function (e) {delete keysDown[e.keyCode];}, false);

//------------------------------------------------- Menu ----------------------------------------------------------------------------//
var Menu = {
	x: canvas.width/2,
	y: canvas.height/2,
	width: 150,
	height: 30,
	draw: function(){
		ctx.fillStyle = "black";
		ctx.font = "18pt Arial";
		ctx.fillText("New Game", this.x-this.width/2, this.y-this.height/2);
		ctx.fillText("How to Play", this.x-this.width/2, this.y-this.height/2 + this.height);
		ctx.fillText("Credits", this.x-this.width/2, this.y-this.height/2 + 2*this.height);
		if(hX >= this.x-this.width*3/5 && hX <=this.x + this.width/3 && hY <= this.y && hY>=this.y-this.height*7/6){
			ctx.strokeRect(this.x-this.width*3/5, this.y-this.height*7/6, this.width, this.height);
		}		
		if(cX >= this.x-this.width*3/5 && cX <=this.x + this.width/3 && cY <= this.y && cY>=this.y-this.height*7/6){
			STATE = 1;
		}
		if(hX >= this.x-this.width*3/5 && hX <=this.x + this.width/3 && hY <= this.y + this.height && hY>=this.y-this.height*7/6 + this.height){
			ctx.strokeRect(this.x-this.width*3/5, this.y-this.height*7/6 + this.height, this.width, this.height);
		}		
		if(cX >= this.x-this.width*3/5 && cX <=this.x + this.width/3 && cY <= this.y + this.height&& cY>=this.y-this.height*7/6 + this.height){
			STATE = 2;
		}
		if(hX >= this.x-this.width*3/5 && hX <=this.x + this.width/3 && hY <= this.y + 2*this.height && hY>=this.y-this.height*7/6 + 2*this.height){
			ctx.strokeRect(this.x-this.width*3/5, this.y-this.height*7/6 + 2*this.height, this.width, this.height);
		}		
		if(cX >= this.x-this.width*3/5 && cX <=this.x + this.width/3 && cY <= this.y + 2*this.height&& cY>=this.y-this.height*7/6 + 2*this.height){
			STATE = 3;
		}
	}
};
var Info = {
	x: canvas.width/25,
	y: canvas.height/8,
	width: 20,
	height: 20,
	bx: 400-50,
	by: 560,
	draw: function(){
		ctx.fillStyle = "black";
		ctx.font = "16pt Arial";
		ctx.fillText("Have you ever wanted to be just like Dumbledore?", this.x-this.width/2, this.y-this.height/2); 
		ctx.fillText("Well now you can with this AMAZING wizard simulator!", this.x-this.width/2, this.y+2*this.height/2);
		ctx.fillText("Originally released for the Nintendo 64,", this.x-this.width/2, this.y+5*this.height/2);
		ctx.fillText("this lifetime classic is now available at your leisure!",  this.x-this.width/2, this.y+8*this.height/2);
		ctx.fillStyle = "black";
		ctx.fillText("Controls:", this.x-this.width/2, this.y+11*this.height/2);
		ctx.fillText("W: Move up", this.x-this.width/2, this.y+14*this.height/2);
		ctx.fillText("A: Move left", this.x-this.width/2, this.y+17*this.height/2);
		ctx.fillText("S: Move down", this.x-this.width/2, this.y+20*this.height/2);
		ctx.fillText("D: move right", this.x-this.width/2, this.y+23*this.height/2);
		ctx.fillText("Arrow keys: Shoot Dumblebeam", this.x-this.width/2, this.y+26*this.height/2);
		ctx.fillText("Spacebar: Use spell", this.x-this.width/2, this.y+29*this.height/2);
		ctx.fillText("Q: Drop most recently obtained spell", this.x-this.width/2, this.y+32*this.height/2);
		ctx.fillStyle = "black";
		ctx.fillText("How to play: ", this.x-this.width/2, this.y+35*this.height/2);
		ctx.fillText("Kill enemies! Acquire points! Pick up boxes to get elements!", this.x-this.width/2, this.y+38*this.height/2);
		ctx.fillText("Each element corresponds to a unique spell, and you can combine", this.x-this.width/2, this.y+41*this.height/2);
		ctx.fillText("up to 2 elements for MORE unique spells!!!", this.x-this.width/2, this.y+44*this.height/2);
		ctx.fillStyle = "black";
		ctx.font = "16pt Arial";
		ctx.fillText("Back", this.bx, this.by);
		if(hX >= this.bx-10 && hX <=this.bx + 50 && hY <= this.by && hY>=this.by-this.height*7/6){
			ctx.strokeRect(this.bx-10, this.by-this.height*7/6, this.width * 3 + 10, this.height+10);
		}		
		if(cX >= this.bx-10 && cX <=this.bx + 50 && cY <= this.by && cY>=this.by-this.height*7/6){
			STATE = 0;
		}
}
};
var Credits = {
	x: 300,
	y: canvas.height/8,
	width: 20,
	height: 20,
	bx: 400-50,
	by: 560,
	draw: function(){
		ctx.fillStyle = "black";
		ctx.font = "18pt Arial";
		ctx.fillText("Credits", this.x, this.y-this.height/2); 
		ctx.font = "16pt Arial";
		ctx.fillText("Creator/Developer:", this.x-this.width/2, this.y+4*this.height/2);
		ctx.fillText("Brett Davis", this.x-this.width/2, this.y+7*this.height/2);
		ctx.fillText("Art:",  this.x-this.width/2, this.y+12*this.height/2);
		ctx.fillText("Kyle Fleischer", this.x-this.width/2, this.y+15*this.height/2);
		ctx.fillText("Sound and Javascript Master:", this.x-this.width/2, this.y+20*this.height/2);
		ctx.fillText("Dave Gedarovich", this.x-this.width/2, this.y+23*this.height/2);
		ctx.fillStyle = "black";
		ctx.font = "16pt Arial";
		ctx.fillText("Back", this.bx, this.by);
		if(hX >= this.bx-10 && hX <=this.bx + 50 && hY <= this.by && hY>=this.by-this.height*7/6){
			ctx.strokeRect(this.bx-10, this.by-this.height*7/6, this.width * 3 + 10, this.height+10);
		}		
		if(cX >= this.bx-10 && cX <=this.bx + 50 && cY <= this.by && cY>=this.by-this.height*7/6){
			STATE = 0;
		}
}
};
//------------------------------------------------- Player --------------------------------------------------------------------------//
// Player
var player = {
	x: 320,
	y: 128,
	width: 32,
	height: 32,
	speed: 8,
	hp: 3,
	dir: "W",
	// Draws the player on the canvas when called
	draw: function(){
		// Flash if the player has been hit
		if (hptimer/2 != Math.round(hptimer/2)){
			ctx.drawImage(Wizzurd2, this.x - this.width / 2, this.y - this.height / 2);
		}
		else{
			// /2 To make x and y coordinates at player's center
			ctx.drawImage(Wizzurd, this.x - this.width/2, this.y - this.height/2);		
		}
		ctx.fillStyle = "red";
		if(this.hp == 3){
			ctx.fillRect(this.x - this.width/2 + 4, this.y - this.height/2 - this.height/4, this.width/4, this.height/4);
			ctx.fillRect(this.x - (this.width/2 - this.width/4)+5, this.y - this.height/2 - this.height/4, this.width/4, this.height/4);
			ctx.fillRect(this.x - (this.width/2 - this.width/2) + 6, this.y - this.height/2 - this.height/4, this.width/4, this.height/4);
		}
		else if(this.hp == 2){
			ctx.fillRect(this.x - this.width/2 + 4, this.y - this.height/2 - this.height/4, this.width/4, this.height/4);
			ctx.fillRect(this.x - (this.width/2 - this.width/4)+5, this.y - this.height/2 - this.height/4, this.width/4, this.height/4);
		}
		else{
			ctx.fillRect(this.x - this.width/2 + 4, this.y - this.height/2 - this.height/4, this.width/4, this.height/4);
		}
	},
	onhit: function(){
	if(hptimer > 0){
		hptimer-=1;
	}
	else if(collision(this.dir, this, Enemy) || collision(this.dir, this, EnemyA) || collision(Enemy.dir, Enemy, this)
		|| collision(EnemyA.dir, EnemyA, this) || collision(EnemyB.dir, EnemyB, this) || collision(this.dir, this, EnemyB)
		|| collision(this.dir, this, EnemyC)  || collision(EnemyC.dir, EnemyC, this) || collision(Tenemy.dir, Tenemy, this)
		|| collision(this.dir, this, Tenemy) || collision(TenemyA.dir, TenemyA, this) || collision(this.dir, this, TenemyA)
		|| collision(TenemyB.dir, TenemyB, this) || collision(this.dir, this, TenemyB) || collision(Sorceror.dir, Sorceror, this) || collision(this.dir, this, Sorceror)
		|| collision(Bwizz.dir, Bwizz, this) || collision(this.dir, this, Bwizz)){
		this.hp-=1;
		hptimer = 30;
	}
	else{
		this.hp = this.hp;
	}
	}
};

//---------------------------------------------- Pickups ----------------------------------------------------------------------------//
// Fire drop
var redCube = {
	x: -100,
	y: -200,
	width: 19,
	height: 19,
	timeLeft: 0,
	
	draw: function(){
		if(this.timeLeft > 0){
			ctx.drawImage(Firebox, this.x - this.width / 2, this.y - this.height / 2);
			this.timeLeft-=1;
		}
		else{
			this.x = -100;
			this.y = -200;
			this.timeLeft = 0;
		}
	},
	onHit: function(){
		if(spell1 == "N/A"){
			spell1 = "Fire";
		}
		else if(spell2 == "N/A"){
			spell2 = "Fire";
		}
		this.x = -100;
		this.y = -200;
		this.timeLeft = 0;
	}
};

// Ice drop
var tealCube = {
	x: -100,
	y: -200,
	width: 19,
	height: 19,
	timeLeft: 0,
	
	draw: function(){
		if(this.timeLeft > 0){
			ctx.drawImage(Icebox, this.x - this.width / 2, this.y - this.height / 2);
			this.timeLeft-=1;
		}
		else{
			this.x = -100;
			this.y = -200;
			this.timeLeft = 0;
		}
	},
	onHit: function(){
		if(spell1 == "N/A"){
			spell1 = "Ice";
		}
		else if(spell2 == "N/A"){
			spell2 = "Ice";
		}
		this.x = -100;
		this.y = -200;
		this.timeLeft = 0;
	}
};

// Earth drop
var greenCube = {
	x: -100,
	y: -200,
	width: 19,
	height: 19,
	timeLeft: 0,
	
	draw: function(){
		if(this.timeLeft > 0){
			ctx.drawImage(Earthbox, this.x - this.width / 2, this.y - this.height / 2);
			this.timeLeft-=1;
		}
		else{
			this.x = -100;
			this.y = -200;
			this.timeLeft = 0;
		}
	},
	onHit: function(){
		if(spell1 == "N/A"){
			spell1 = "Earth";
		}
		else if(spell2 == "N/A"){
			spell2 = "Earth";
		}
		this.x = -100;
		this.y = -200;
		this.timeLeft = 0;
	}
};

// Thunder drop
var blueCube = {
	x: -100,
	y: -200,
	width: 19,
	height: 19,
	timeLeft: 0,
	
	draw: function(){
		if(this.timeLeft > 0){
			ctx.drawImage(Thunderbox, this.x - this.width / 2, this.y - this.height / 2);
			this.timeLeft-=1;
		}
		else{
			this.x = -100;
			this.y = -200;
			this.timeLeft = 0;
		}
	},
	onHit: function(){
		if(spell1 == "N/A"){
			spell1 = "Lightning";
		}
		else if(spell2 == "N/A"){
			spell2 = "Lightning";
		}
		this.x = -100;
		this.y = -200;
		this.timeLeft = 0;
	}
};
	
// If you pick it up
function pickup(C){
	if(collision(player.dir, player, C)){
		if((spell1 != "N/A") && (spell2 != "N/A")){
			if(marker.x != -100 && marker2.x != -100 && marker3.x != -100){
				marker4.points = "25";
				marker4.mult = 1;
				marker4.x = player.x;
				marker4.y = player.y;
				marker4.timeLeft = 20;
			}
			else if(marker.x != -100 && marker2.x != -100){
				marker3.points = "25";
				marker3.mult = 1;
				marker3.x = player.x;
				marker3.y = player.y;
				marker3.timeLeft = 20;
			}
			else if(marker.x != -100){
				marker2.points = "25";
				marker2.mult = 1;
				marker2.x = player.x;
				marker2.y = player.y;
				marker2.timeLeft = 20;
			}
			else{
				marker.points = "25";
				marker.mult = 1;
				marker.x = player.x;
				marker.y = player.y;
				marker.timeLeft = 20;
			}
			score+=25;
			currpts = "25";
		}
		C.onHit();
	}
}
	
//------------------------------------------------- Map -----------------------------------------------------------------------------//
// Obstacle
var obstacle = {
	color: "green",
	x: 512,
	y: 352,
	width: 64,
	height: 128,
	// Draws the object on the canvas when called
	draw: function(){
		ctx.fillStyle = this.color;
		// Using width/2 and height/2 so the x and y coordinates are at the object's center
		ctx.fillRect(this.x - this.width / 2, this.y - this.height / 2, this.width, this.height);
	}
};

// Obstacle 2
var obstacleA = {
	color: "green",
	x: 128,
	y: 128,
	width: 128,
	height: 64,
	// Draws the object on the canvas when called
	draw: function(){
		ctx.fillStyle = this.color;
		// Using width/2 and height/2 so the x and y coordinates are at the object's center
		ctx.fillRect(this.x - this.width / 2, this.y - this.height / 2, this.width, this.height);
	}
};

// Obstacle 3
var obstacleB = {
	color: "green",
	x: 704,
	y: 256,
	width: 32,
	height: 128,
	// Draws the object on the canvas when called
	draw: function(){
		ctx.fillStyle = this.color;
		// Using width/2 and height/2 so the x and y coordinates are at the object's center
		ctx.fillRect(this.x - this.width / 2, this.y - this.height / 2, this.width, this.height);
	}
};

// Collision detection
function collision(dir, one, two){
	if(dir == "W"){
		if(one.y <= two.y + two.height/2){
			return false;
		}
		if((one.x-one.width/2<two.x+two.width/2 && one.x+one.width/2>two.x-two.width/2) &&
			one.y - (one.height / 2) - one.speed < two.y + two.height / 2){
			return true;
		}else{
			return false;
		}
	}
	if(dir == "A" || dir == "AS" || dir == "WA"){
		if(one.x <= two.x - two.width/2){
			return false;
		}
		if((one.y-one.height/2 < two.y+two.height/2 && one.y+one.height/2>two.y-two.height/2) &&
			one.x - (one.width / 2) - one.speed < two.x + two.width / 2){
			return true;
		}else{
			return false;
		}
	}
	if(dir == "S"){
		if(one.y >= two.y + two.height/2){
			return false;
		}
		if((one.x-one.width/2 < two.x+two.width/2 && one.x+one.width/2>two.x-two.width/2) &&
			one.y + (one.height / 2) + one.speed > two.y - two.height / 2){
			return true;
		}else{
			return false;
		}
	}
	if(dir == "D" || dir == "WD" || dir == "SD"){
		if(one.x >= two.x + two.width/2){
			return false;
		}
		if((one.y-one.height/2 < two.y+two.height/2 && one.y+one.height/2>two.y-two.height/2) &&
			one.x + (one.height / 2) + one.speed > two.x - two.width / 2){
			return true;
		}else{
			return false;
		}
	}
}

// Collision detection cont'd
function contained(a, b){
	var dist = Math.sqrt(((b.x - a.x)*(b.x - a.x)) + ((b.y - a.y)*(b.y - a.y)));
	if(dist <= b.width/2 || dist <= b.height/2 ||
		dist <= a.width/2 || dist <= a.height/2){
		return true;
	}
	else{
		return false;
	}
}

// Fancyness
var marker = {
	color: "00FF00",
	speed: 4,
	timeLeft: 0,
	x: -100,
	y: -100,
	points: 0,
	mult: 1
};

var marker2 = {
	color: "00FF00",
	speed: 4,
	timeLeft: 0,
	x: -100,
	y: -100,
	points: 0,
	mult: 1
};

var marker3 = {
	color: "00FF00",
	speed: 4,
	timeLeft: 0,
	x: -100,
	y: -100,
	points: 0,
	mult: 1
};

var marker4 = {
	color: "00FF00",
	speed: 4,
	timeLeft: 0,
	x: -100,
	y: -100,
	points: 0,
	mult: 1
};

function drawMarker(M){
	if(M.timeLeft == 0){
		M.x = -100;
		M.y = -100;
	}
	if (M.timeLeft != 0){
		if(M.mult == 1){
			M.color = "00FF00";
		}
		else if(M.mult == 2){
			M.color = "FFFF00";
		}
		else if(M.mult == 3){
			M.color = "FF6600";
		}
		else if(M.mult == 4){
			M.color = "CC0000";
		}
		else if(M.mult >= 5){
			M.color = "FF99FF";
		}
	ctx.fillStyle = M.color;
	ctx.font = "32pt Arial";
	ctx.fillText(M.points * (M.mult), M.x, M.y);
	}
}

function moveMarker(M){
	if (M.timeLeft > 0){
		M.y -= M.speed;
		M.timeLeft--;}
	}

//Multiply
var multiply = function(){
	if(multtimer <= 0){
		multiplier = 1;
	}
	else{
		multtimer-=1;
	}
}
// Clear the canvas - draw a white rectangle over everything

var clear = function(){
// Border
ctx.fillStyle = "white";
ctx.fillRect(0, 0, canvas.width, canvas.height);
ctx.fillStyle = "grey";
ctx.fillRect(4, 4, canvas.width - 4, canvas.height - 4);
};

function UI(){
	//Calculate spell
	if(spell2 == "N/A"){
		if(spell1 == "Fire"){
			spell = "Fire";
		}
		if(spell1 == "Ice"){
			spell = "Ice";
		}
		if(spell1 == "Earth"){
			spell = "Earth Heal";
		}
		if(spell1 == "Lightning"){
			spell = "Lightning";
		}			
	}
	if(spell1 == "Fire" && spell2 == "Fire"){
		spell = "Inferno";
	}
	if((spell1 == "Fire" && spell2 == "Ice") || (spell1 == "Ice" && spell2 == "Fire")){
		spell = "Frozen Fireball";
	}
	if(spell1 == "Ice" && spell2 == "Ice"){
		spell = "Absolute Zero";
	}
	if(spell1 == "Earth" && spell2 == "Earth"){
		spell = "Life";
	}
	if((spell1 == "Earth" && spell2 == "Fire") || (spell2 == "Earth" && spell1 == "Fire")){
		spell = "Fire and Heal";
	}
	if((spell1 == "Earth" && spell2 == "Ice") || (spell2 == "Earth" && spell1 == "Ice")){
		spell = "Ice and Heal";
	}
	if(spell1 == "Lightning" && spell2 == "Lightning"){
		spell = "Chain Lightning";
	}
	if((spell1 == "Earth" && spell2 == "Lightning") || (spell2 == "Earth" && spell1 == "Lightning")){
		spell = "Lightning and Heal";
	}
	if((spell1 == "Fire" && spell2 == "Lightning") || (spell2 == "Fire" && spell1 == "Lightning")){
		spell = "Ragnarok";
	}
	if((spell1 == "Ice" && spell2 == "Lightning") || (spell2 == "Ice" && spell1 == "Lightning")){
		spell = "Frozen Web";
	}
	// Text
	ctx.fillStyle = "black";
	ctx.font = "18pt Arial";
	ctx.fillText("Spell: " + spell1 + " + " + spell2 + " = " + spell, 32, 512);
	// Recharge
	if(spell == "Fire"){
		ctx.fillStyle = "black";
		ctx.font = "16pt Arial";
		ctx.fillText("Recharge: " + Math.round(fire.cd/30) + "s", 32, 544);
	}
	else if(spell == "Inferno"){
		ctx.fillStyle = "black";
		ctx.font = "16pt Arial";
		ctx.fillText("Recharge: " + Math.round(fire2.cd/30) + "s", 32, 544);
	}
	else if(spell == "Frozen Fireball"){
		ctx.fillStyle = "black";
		ctx.font = "16pt Arial";
		ctx.fillText("Recharge: " + Math.round(fireice.cd/30) + "s", 32, 544);
	}
	else if(spell == "Ice"){
		ctx.fillStyle = "black";
		ctx.font = "16pt Arial";
		ctx.fillText("Recharge: " + Math.round(ice.cd/30) + "s", 32, 544);
	}
	else if(spell == "Absolute Zero"){
		ctx.fillStyle = "black";
		ctx.font = "16pt Arial";
		ctx.fillText("Recharge: " + Math.round(ice2.cd/30) + "s", 32, 544);
	}
	else if(spell == "Earth Heal"){
		ctx.fillStyle = "black";
		ctx.font = "16pt Arial";
		ctx.fillText("Recharge: " + Math.round(earth.cd/30) + "s", 32, 544);
	}
	else if(spell == "Life"){
		ctx.fillStyle = "black";
		ctx.font = "16pt Arial";
		ctx.fillText("Recharge: " + Math.round(earth2.cd/30) + "s", 32, 544);
	}
	else if(spell == "Fire and Heal"){
		ctx.fillStyle = "black";
		ctx.font = "16pt Arial";
		ctx.fillText("Recharge: " + Math.round(fireheal.cd/30) + "s", 32, 544);
	}
	else if(spell == "Ice and Heal"){
		ctx.fillStyle = "black";
		ctx.font = "16pt Arial";
		ctx.fillText("Recharge: " + Math.round(iceheal.cd/30) + "s", 32, 544);
	}
	else if(spell == "Lightning"){
		ctx.fillStyle = "black";
		ctx.font = "16pt Arial";
		ctx.fillText("Recharge: " + Math.round(lightning.cd/30) + "s", 32, 544);
	}
	else if(spell == "Chain Lightning"){
		ctx.fillStyle = "black";
		ctx.font = "16pt Arial";
		ctx.fillText("Recharge: " + Math.round(lightning2.cd/30) + "s", 32, 544);
	}
	else if(spell == "Frozen Web"){
		ctx.fillStyle = "black";
		ctx.font = "16pt Arial";
		ctx.fillText("Recharge: " + Math.round(icelightning.cd/30) + "s", 32, 544);
	}
	else if(spell == "Ragnarok"){
		ctx.fillStyle = "black";
		ctx.font = "16pt Arial";
		ctx.fillText("Recharge: " + Math.round(firelightning.cd/30) + "s", 32, 544);
	}
	else if(spell == "Lightning and Heal"){
		ctx.fillStyle = "black";
		ctx.font = "16pt Arial";
		ctx.fillText("Recharge: " + Math.round(lightningheal.cd/30) + "s", 32, 544);
	}
	ctx.fillStyle = "black";
	ctx.font = "16pt Arial";
	ctx.fillText("Q: Drop Spell", 576, 544);
	ctx.fillText("Spacebar: Use spell", 576, 512);
}

function SCORE(){
	ctx.fillStyle = "black";
	ctx.font = "18pt Arial";
	ctx.fillText("Score: " + score, 32, 48);
}

//--------------------------------------------- Keys and Activation -----------------------------------------------------------------//
// Key bindings
var keys = function(){
	if (87 in keysDown && player.y - player.speed > 4 && !(collision("W", player, obstacle)) && !(collision("W", player, obstacleA))
		&& !(collision("W", player, obstacleB))){
	player.y-=player.speed; 
	player.dir = "W";
	}
	if (65 in keysDown && player.x - player.speed > 4 && !(collision("A", player, obstacle)) && !(collision("A", player, obstacleA))
		&& !(collision("A", player, obstacleB))){
		player.x-=player.speed;
		player.dir = "A";
	}
	if (83 in keysDown && player.y + player.speed < canvas.height - 4 && !(collision("S", player, obstacle)) && !(collision("S", player, obstacleA))
		&& !(collision("S", player, obstacleB))){
		player.y+=player.speed;
		player.dir = "S";
	}
	if (68 in keysDown && player.x + player.speed < canvas.width - 4 && !(collision("D", player, obstacle)) && !(collision("D", player, obstacleA))
		&& !(collision("D", player, obstacleB))){
		player.x+=player.speed;
		player.dir = "D";
	}
	if (37 in keysDown && 38 in keysDown){
		bullet.shoot("WA", 4, 4);
	}	
	if (37 in keysDown && 40 in keysDown){
		bullet.shoot("AS", 4, 4);
	}	
	if (39 in keysDown && 40 in keysDown){
		bullet.shoot("SD", 4, 4);
	}	
	if (38 in keysDown && 39 in keysDown){
		bullet.shoot("WD", 4, 4);
	}	
	if (38 in keysDown){
		bullet.shoot("W", 32, 4);
	}	
	if (37 in keysDown){
		bullet.shoot("A", 4, 32);
	}	
	if (40 in keysDown){
		bullet.shoot("S", 32, 4);
	}	
	if (39 in keysDown){
		bullet.shoot("D", 4, 32);
	}
	if(81 in keysDown && keycount <=0){
		if(spell2 != "N/A"){
			spell2 = "N/A";
			spell = spell1;
			keycount = 30;
		}
		else if(spell1 != "N/A"){
			spell1 = "N/A";
			spell = "N/A";
			keycount = 30;
		}
	}
	keycount-=1;
	if(32 in keysDown && spell1 != "N/A" && spell2 == "N/A"){
		if(spell1 == "Fire"){
			fire.shoot();
		}
		if(spell1 == "Ice"){
			ice.shoot();
		}
		if(spell1 == "Earth"){
			earth.shoot();
		}
		if(spell1 == "Lightning"){
			lightning.shoot();
		}
	}
	if(32 in keysDown && spell1 != "N/A" && spell2 != "N/A"){
		if(spell1 == "Fire" && spell2 == "Fire"){
			fire2.shoot();
		}
		if((spell1 == "Ice" && spell2 == "Fire") || (spell1 == "Fire" && spell2 == "Ice")){
			fireice.shoot();
		}
		if(spell1 == "Ice" && spell2 == "Ice"){
			ice2.shoot();
		}
		if(spell1 == "Earth" && spell2 == "Earth"){
			earth2.shoot();
		}
		if((spell1 == "Earth" && spell2 == "Ice") || (spell2 == "Earth" && spell1 == "Ice")){
			iceheal.shoot();
		}
		if((spell1 == "Fire" && spell2 == "Earth") || (spell2 == "Fire" && spell1 == "Earth")){
			fireheal.shoot();
		}
		if(spell1 == "Lightning" && spell2 == "Lightning"){
			lightning2.shoot();
		}
		if((spell1 == "Fire" && spell2 == "Lightning") || (spell2 == "Fire" && spell1 == "Lightning")){
			firelightning.shoot();
		}
		if((spell1 == "Ice" && spell2 == "Lightning") || (spell2 == "Ice" && spell1 == "Lightning")){
			icelightning.shoot();
		}
		if((spell1 == "Earth" && spell2 == "Lightning") || (spell2 == "Earth" && spell1 == "Lightning")){
			lightningheal.shoot();
		}
	}
};


// Game Over
function gameOver(){
	ctx.fillStyle = "white";
	ctx.fillRect(0, 0, canvas.width, canvas.height);
	ctx.fillStyle = "black";
	ctx.font = "18pt Arial";
	ctx.fillText("Score: " + score, 400, 144);
	if(highscore1 < score && nu == 1){
		$.jStorage.set("highscore5",highscore4);
		highscore5 = highscore4;
		$.jStorage.set("highscore4",highscore3);
		highscore4 = highscore3;
		$.jStorage.set("highscore3",highscore2);
		highscore3 = highscore2;
		$.jStorage.set("highscore2",highscore1);
		highscore2 = highscore1;
		$.jStorage.set("highscore1",score);
		highscore1 = score;
		hs = 1;
		nu = 0;
	}
	else if(highscore2 < score && nu == 1){
		$.jStorage.set("highscore5",highscore4);
		highscore5 = highscore4;
		$.jStorage.set("highscore4",highscore3);
		highscore4 = highscore3;
		$.jStorage.set("highscore3",highscore2);
		highscore3 = highscore2;
		$.jStorage.set("highscore2",score);
		highscore2 = score;
		hs = 1;
		nu = 0;
	}
	else if(highscore3 < score && nu == 1){
		$.jStorage.set("highscore5",highscore4);
		highscore5 = highscore4;
		$.jStorage.set("highscore4",highscore3);
		highscore4 = highscore3;
		$.jStorage.set("highscore3",score);
		highscore3 = score;
		hs = 1;
		nu = 0;
	}
	else if(highscore4 < score && nu == 1){
		$.jStorage.set("highscore5",highscore4);
		highscore5 = highscore4;
		$.jStorage.set("highscore4",score);
		highscore4 = score;
		hs = 1;
		nu = 0;
	}
	else if(highscore5 < score && nu == 1){
		$.jStorage.set("highscore5",score);
		highscore5 = score;
		hs = 1;
		nu = 0;
	}
	if(hs == 1){
		ctx.fillStyle = "red";
		ctx.font = "18pt Arial";
		ctx.fillText("New High Score!!", 400, 64);
	}
	ctx.fillStyle = "black";
	ctx.font = "18pt Arial";
	ctx.fillText("High Scores:", 400, 208);
	ctx.fillText("1st: " + highscore1, 400, 240);
	ctx.fillText("2nd: " + highscore2, 400, 272);
	ctx.fillText("3rd: " + highscore3, 400, 304);
	ctx.fillText("4th: " + highscore4, 400, 336);
	ctx.fillText("5th: " + highscore5, 400, 368);
		
}

// Big-Bang
setInterval(function(){
	// Clear the canvas so things won't be repeated if moved
	clear();
	// Get the key actions
	if(STATE == 0){
		Menu.draw();
	}
	else if(STATE == 2){
		Info.draw();
	}
	else if(STATE == 3){
		Credits.draw();
	}
	else if(STATE == 4){
		gameOver();
	}
	else if(STATE == 1){
		if(player.hp <= 0){
			STATE = 4;
			nu = 1;
		}
		else{
			keys();
			multiply();
			SCORE();
			// Calling the draw functions
			player.draw();
			player.onhit();
		
			redCube.draw();
			pickup(redCube);
		
			tealCube.draw();
			pickup(tealCube);
		
			blueCube.draw();
			pickup(blueCube);
		
			greenCube.draw();
			pickup(greenCube);
		
			obstacle.draw();
			obstacleA.draw();
			obstacleB.draw();
			UI();
			
			drawBullet(bullet);
			Bulletmove(bullet);
			
			drawBullet(bullet2);
			Bulletmove(bullet2);
			
			drawBullet(bullet3);
			Bulletmove(bullet3);
		
			drawBullet(bullet4);
			Bulletmove(bullet4);
		
			fire.draw();
			fire.move();
			fire2.draw();
			fire2.move();
		
			fireice.draw();
			fireice.move();
		
			ice.draw();
			ice.move();
			ice.effect();
			ice2.draw();
			ice2.move();
			ice2.effect();
		
			earth.draw();
			earth.move();
			earth2.draw();
			earth2.move();
		
			iceheal.tick();
			fireheal.tick();
			lightningheal.tick();
		
			lightning.draw();
			lightning.effect();
		
			lightning12.draw();
			lightning12.effect();
		
			lightning2.draw();
			lightning2.effect();
		
			lightning22.draw();
			lightning22.effect();
		
			lightning23.draw();
			lightning23.effect();
		
			firelightning.draw();
			firelightning.effect();
			firelightningf1.draw();
			firelightningf1.move();
			firelightningf2.draw();
			firelightningf2.move();
			firelightningf3.draw();
			firelightningf3.move();
			firelightningf4.draw();
			firelightningf4.move();
		
			icelightning.tick();
			icelightning.effect();
			horil.draw();
			vertil.draw();
			horil2.draw();
			vertil2.draw();
			horil3.draw();
			vertil3.draw();
			horil4.draw();
			vertil4.draw();
			horil5.draw();
			vertil5.draw();
		
			sIce.draw();
			sIce.move();
			sIce.effect();
			
			sFire.draw();
			sFire.move();
			
			sLightning.draw();
			sLightning.effect();
			
			Enemy.draw();
			spawn(Enemy);
			AI(Enemy);
			move(Enemy);
			
			EnemyA.draw();
			spawn(EnemyA);
			AI(EnemyA);
			move(EnemyA);
		
			EnemyB.draw();
			spawn(EnemyB);
			AI(EnemyB);
			move(EnemyB);
		
			EnemyC.draw();
			spawn(EnemyC);
			AI(EnemyC);
			move(EnemyC);
		
			Tenemy.draw();
			spawn(Tenemy);
			AI(Tenemy);
			move(Tenemy);
	
			TenemyA.draw();
			spawn(TenemyA);
			AI(TenemyA);
			move(TenemyA);
		
			TenemyB.draw();
			spawn(TenemyB);
			AI(TenemyB);
			move(TenemyB);
		
			Sorceror.draw();
			Sorceror.spawn();
			Sorceror.AI();
			move(Sorceror);
		
			Bwizz.draw();
			AI(Bwizz);
			move(Bwizz);
			Bwizz.fire();
			//Will be different
			spawn(Bwizz);
		
			//Bwizz bullet
			tBulletmove(tinybullet);
			drawBullet(tinybullet);
		
			drawMarker(marker);
			moveMarker(marker);
		
			drawMarker(marker2);
			moveMarker(marker2);
		
			drawMarker(marker3);
			moveMarker(marker3);
		
			drawMarker(marker4);
			moveMarker(marker4);
			
			// Cooldown calculation
			if(cd <= 0){
				cd = cd;
			}
			else{
				cd--;
			}
		}
	}
	// End of function, match it up with frames per second defined top
}, 1000/FPS);