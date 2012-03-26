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
	Version 0.4.8 Changes(3/26/2012):
		-Balancing
			-Lowered score multiplier timer
			-Reduced Tree wizzurd HP to 6
		-Bug Fixes
			-Fixed bug with spawner spawning with 1 hp
			-Fixed enemy movement bug, would glitch when moving up or down
		-Added some more sound effects
		-Tree wizard grows bigger and moves faster on each heal
		-Made Ice moves have cooler effects by accident
		-Made +1 max hp item appear on tree wizard's death. Has a crazy pickup effect.
		-Put small effect on Ice powerup box
		
	TODO:
		-Bugs/small shit
			-Sound plays on reset
			-Sounds play before cast on cast bar spells
		-Spells
			-Dark (Black)
				-HP Steal?
			++Water (Blue)
				-Particle shield?
			-Summon (?)
				-Minions
		-More enemies and AI
			-Bosses
			-Thief enemy
			+Tree Wizard: Maybe random power ups?
		-Terrain
			-Different levels, at the end of each is a boss
			-During battle terrain gradually changes to new level
			-Each level has its own element drops and enemies
				Forest = Earth(rare), Water, Air?
			+++Special events that can change to other levels (such as tree wizzurd summon)
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
// Mouse listeners
canvas.addEventListener("mousedown", getPosition, false);
canvas.addEventListener("mousemove", getPositionhover, false);
var FPS = 30;
var keysDown = {};
var cd = 0;
var hptimer = 0;
var spell1 = "N/A";
var spell2 = "N/A";
var spell = "N/A";
var spell1pic = "N/A";
var spell2pic = "N/A";
//Score
var score = 0;
var muliplier = 1;
var multtimer = 0;
//colors
var colorz = {1: "D0D0D0", 2: "CC0000", 3: "00FFFF", 4: "yellow", 5: "33FF00", 6: "663399"};
var colorNum = 1;
// Key Listeners
addEventListener("keydown", function (e) {keysDown[e.keyCode] = true;}, false);
addEventListener("keyup", function (e) {delete keysDown[e.keyCode];}, false);
//------------------------------------------------------- Graphics ------------------------------------------------------------------//
//Girraffix
var WizzurdL = new Image();
WizzurdL.src = "grafix/wizzurd.l32.png";
var WizzurdR = new Image();
WizzurdR.src = "grafix/wizzurd.r32.png";
//Ondmg
var Wizzurd2 = new Image();
Wizzurd2.src = "grafix/nega-wizzurd32.png";
//Environment
var Tree = new Image();
Tree.src = "grafix/obj.tree32.png";
var backGround1 = new Image();
backGround1.src = "grafix/bkg1.png";
//Lavaman
var Lavamanpic = new Image();
Lavamanpic.src = "grafix/cre.firesprite32.png";
//Tenemy
var Globbly = new Image();
Globbly.src = "grafix/cre.globbly32.png";
//Hudge
var HudgeL = new Image();
HudgeL.src = "grafix/cre.hudge.l32.png";
var HudgeR = new Image();
HudgeR.src = "grafix/cre.hudge.r32.png";
//Enemy2
var Pikkit = new Image();
Pikkit.src = "grafix/cre.pikkit32.png";
//Spawner
var Splavaman = new Image();
Splavaman.src = "grafix/lavaman64.png";
//Evil Wizzurd
var Sorcerorpng = new Image();
Sorcerorpng.src = "grafix/poison-wizzurd32.png";
//Tree Wizzurd
var TWizzurd = new Image();
TWizzurd.src = "grafix/treewizzurd32.png";
//Monochrome Wizzurd
var MonoWizzurd = new Image();
MonoWizzurd.src = "grafix/bw-wizzurd32.png";
//Fire powerup
var Firebox = new Image();
Firebox.src = "grafix/ele.fire32.1.png";
var Firebox2 = new Image();
Firebox2.src = "grafix/ele.fire32.2.png";
var Firebox3 = new Image();
Firebox3.src = "grafix/ele.fire32.3.png";
var Firebox4 = new Image();
Firebox4.src = "grafix/ele.fire32.4.png";
var Firebox5 = new Image();
Firebox5.src = "grafix/ele.fire32.5.png";
var Fires = {1: Firebox, 2: Firebox2, 3: Firebox3, 4: Firebox4, 5: Firebox5};
//Ice powerup
var Icebox = new Image();
Icebox.src = "grafix/ele.ice32.1.png";
var Icebox2 = new Image();
Icebox2.src = "grafix/ele.ice32.2.png";
var Icebox3 = new Image();
Icebox3.src = "grafix/ele.ice32.3.png";
var Icebox4 = new Image();
Icebox4.src = "grafix/ele.ice32.4.png";
var Icebox5 = new Image();
Icebox5.src = "grafix/ele.ice32.5.png";
var Ices = {1: Icebox, 2: Icebox2, 3: Icebox3, 4: Icebox4, 5: Icebox5};
//Earth powerup
var Earthbox = new Image();
Earthbox.src = "grafix/ele.earth32.1.png";
var Earthbox2 = new Image();
Earthbox2.src = "grafix/ele.earth32.2.png";
var Earthbox3 = new Image();
Earthbox3.src = "grafix/ele.earth32.3.png";
var Earthbox4 = new Image();
Earthbox4.src = "grafix/ele.earth32.4.png";
var Earthbox5 = new Image();
Earthbox5.src = "grafix/ele.earth32.5.png";
var Earths = {1: Earthbox, 2: Earthbox2, 3: Earthbox3, 4: Earthbox4, 5: Earthbox5};
//lightning powerup
var Thunderbox = new Image();
Thunderbox.src = "grafix/ele.zap32.1.png";
var Thunderbox2 = new Image();
Thunderbox2.src = "grafix/ele.zap32.2.png";
var Thunderbox3 = new Image();
Thunderbox3.src = "grafix/ele.zap32.3.png";
var Thunderbox4 = new Image();
Thunderbox4.src = "grafix/ele.zap32.4.png";
var Thunderbox5 = new Image();
Thunderbox5.src = "grafix/ele.zap32.5.png";
var Thunders = {1: Thunderbox, 2: Thunderbox2, 3: Thunderbox3, 4: Thunderbox4, 5: Thunderbox5};
//Air powerup
var Windbox = new Image();
Windbox.src = "grafix/ele.air32.1.png";
var Windbox2 = new Image();
Windbox2.src = "grafix/ele.air32.2.png";
var Windbox3 = new Image();
Windbox3.src = "grafix/ele.air32.3.png";
var Windbox4 = new Image();
Windbox4.src = "grafix/ele.air32.4.png";
var Windbox5 = new Image();
Windbox5.src = "grafix/ele.air32.5.png";
var Winds = {1: Windbox, 2: Windbox2, 3: Windbox3, 4: Windbox4, 5: Windbox5};
//Mystic powerup
var Mysticbox = new Image();
Mysticbox.src = "grafix/ele.dev32.1.png";
var Mysticbox2 = new Image();
Mysticbox2.src = "grafix/ele.dev32.2.png";
var Mysticbox3 = new Image();
Mysticbox3.src = "grafix/ele.dev32.3.png";
var Mysticbox4 = new Image();
Mysticbox4.src = "grafix/ele.dev32.4.png";
var Mysticbox5 = new Image();
Mysticbox5.src = "grafix/ele.dev32.5.png";
var Mystics = {1: Mysticbox, 2: Mysticbox2, 3: Mysticbox3, 4: Mysticbox4, 5: Mysticbox5};
//Hp up
var maxUP = new Image();
maxUP.src = "grafix/cube.green19.png";
// Particle
var particle = new Image();
particle.src = "grafix/particle.png";
var particle1 = new Image();
particle1.src = "grafix/particle1.png";
var particle2 = new Image();
particle2.src = "grafix/particle2.png";
var particle3 = new Image();
particle3.src = "grafix/particle3.png";
var particle4 = new Image();
particle4.src = "grafix/particle4.png";
var particle5 = new Image();
particle5.src = "grafix/particle5.png";
var particle6 = new Image();
particle6.src = "grafix/particle6.png";
var particle7 = new Image();
particle7.src = "grafix/particle7.png";
var particle8 = new Image();
particle8.src = "grafix/particle8.png";
var colorParticles = {1: particle1, 2: particle2, 3: particle3, 4: particle4, 5: particle5, 6: particle6, 7: particle7, 8: particle8};
//hlightning
var hlightning1 = new Image();
hlightning1.src = "grafix/lightning-h1.png";
var hlightning2 = new Image();
hlightning2.src = "grafix/lightning-h2.png";
var hlightning3 = new Image();
hlightning3.src = "grafix/lightning-h3.png";
//vlightning
var vlightning1 = new Image();
vlightning1.src = "grafix/lightning-v1.png";
var vlightning2 = new Image();
vlightning2.src = "grafix/lightning-v2.png";
var vlightning3 = new Image();
vlightning3.src = "grafix/lightning-v3.png";
//Buttons
var newGame = new Image();
newGame.src = "grafix/butt.newgame.png";
//--------------------------------------------------- Sounds ------------------------------------------------------------------------//
//Dumblebeam
var Beam = document.getElementsByTagName("audio")[0];
//Enemy Dead
var Killed = document.getElementsByTagName("audio")[1];
//Pickup
var Pickup = document.getElementsByTagName("audio")[2];
//Fire
var Explosion = document.getElementsByTagName("audio")[3];
//Ice
var Frozen = document.getElementsByTagName("audio")[4];
//Fire Wave
var Fwave = document.getElementsByTagName("audio")[5];
//Thunder
var Thunder = document.getElementsByTagName("audio")[6];
//Wind
var Wind = document.getElementsByTagName("audio")[7];
//Ondmg
var onDmg = document.getElementsByTagName("audio")[8];
//SpawnerSpawn
var SpawnerSpawn = document.getElementsByTagName("audio")[9];
var zapLaser = document.getElementsByTagName("audio")[10];
var Plucky = document.getElementsByTagName("audio")[11];
var multiLaser = document.getElementsByTagName("audio")[12];
var midBoop = document.getElementsByTagName("audio")[13];
var lowDouble = document.getElementsByTagName("audio")[14];
var lowBomb = document.getElementsByTagName("audio")[15];
var highDouble = document.getElementsByTagName("audio")[16];
var flatBoop = document.getElementsByTagName("audio")[17];
var fastbeepsLow = document.getElementsByTagName("audio")[18];
var fastbeepsHigh = document.getElementsByTagName("audio")[19];
//-------------------------------------------------------------- Library Storage ----------------------------------------------------//
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
//---------------------------------------------------------------- Mouse Posn -------------------------------------------------------//
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
//------------------------------------------------- Menu ----------------------------------------------------------------------------//
var Menu = {
	x: canvas.width/2,
	y: canvas.height/2,
	width: 150,
	height: 30,
	draw: function(){
		ctx.fillStyle = "black";
		ctx.font = "18pt Arial";
		ctx.drawImage(newGame, this.x-2*this.width/3, this.y-2*this.height);
		ctx.fillText("Version 0.4.8: March 26 2012", this.x-3*this.width/3, this.y+6*this.height);
		ctx.fillText("Dumbledore64", this.x-2*this.width/3, this.y-6*this.height);
		ctx.fillText("How to Play", this.x-this.width/2, this.y-this.height/2 + this.height);
		ctx.fillText("High Scores", this.x-this.width/2, this.y-this.height/2 + 2*this.height);
		ctx.fillText("Credits", this.x-this.width/2, this.y-this.height/2 + 3*this.height);
		if(hX >= this.x-this.width*4/5 && hX <=this.x + this.width/2 && hY <= this.y && hY>=this.y-2*this.height){
			ctx.strokeRect(this.x-this.width*4/5, this.y-this.height*2, 3*this.width/2, 4*this.height/2);
		}		
		if(cX >= this.x-this.width*4/5 && cX <=this.x + this.width/2 && cY <= this.y && cY>=this.y-2*this.height){
			fastbeepsLow.play();
			STATE = 1;
		}
		if(hX >= this.x-this.width*3/5 && hX <=this.x + this.width/3 && hY <= this.y + this.height && hY>=this.y-this.height*7/6 + this.height){
			ctx.strokeRect(this.x-this.width*3/5, this.y-this.height*7/6 + this.height, this.width, this.height);
		}		
		if(cX >= this.x-this.width*3/5 && cX <=this.x + this.width/3 && cY <= this.y + this.height&& cY>=this.y-this.height*7/6 + this.height){
			fastbeepsLow.play();
			STATE = 2;
		}
		if(hX >= this.x-this.width*3/5 && hX <=this.x + this.width/3 && hY <= this.y + 2*this.height && hY>=this.y-this.height*7/6 + 2*this.height){
			ctx.strokeRect(this.x-this.width*3/5, this.y-this.height*7/6 + 2*this.height, this.width, this.height);
		}		
		if(cX >= this.x-this.width*3/5 && cX <=this.x + this.width/3 && cY <= this.y + 2*this.height&& cY>=this.y-this.height*7/6 + 2*this.height){
			fastbeepsLow.play();
			STATE = 5;
		}
		if(hX >= this.x-this.width*3/5 && hX <=this.x + this.width/3 && hY <= this.y + 3*this.height && hY>=this.y-this.height*7/6 + 3*this.height){
			ctx.strokeRect(this.x-this.width*3/5, this.y-this.height*7/6 + 3*this.height, this.width, this.height);
		}		
		if(cX >= this.x-this.width*3/5 && cX <=this.x + this.width/3 && cY <= this.y + 3*this.height&& cY>=this.y-this.height*7/6 + 3*this.height){
			fastbeepsLow.play();
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
			fastbeepsLow.play();
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
			fastbeepsLow.play();
			STATE = 0;
		}
}
};
//------------------------------------------------- Player --------------------------------------------------------------------------//
// Player
var player = {
	x: 400,
	y: 256,
	width: 32,
	height: 32,
	speed: 8,
	speed2: 2,
	hp: 3,
	maxhp: 3,
	dmg: false,
	dir: "W",
	LR: "",
	// Draws the player on the canvas when called
	draw: function(){
		// Flash if the player has been hit
		if (hptimer/2 != Math.round(hptimer/2)){
			ctx.drawImage(Wizzurd2, this.x - this.width / 2, this.y - this.height / 2);
		}
		else{
			if(this.dir == "WA" || this.dir == "AS" || this.dir == "A"){
				this.LR = "Left";
				ctx.drawImage(WizzurdL, this.x - this.width / 2, this.y - this.height / 2);
			}
			else if(this.dir == "WD" || this.dir == "SD" || this.dir == "D"){
				ctx.drawImage(WizzurdR, this.x - this.width / 2, this.y - this.height / 2);
				this.LR = "Right";
			}
			else if(this.LR == "Left"){
				ctx.drawImage(WizzurdL, this.x - this.width / 2, this.y - this.height / 2);
			}
			else{
				ctx.drawImage(WizzurdR, this.x - this.width / 2, this.y - this.height / 2);
			}
		}
		ctx.fillStyle = "red";
		if(this.hp == 6){
			ctx.fillStyle = "006600";
			ctx.fillRect(this.x - this.width/2 + 4, this.y - this.height/2 - this.height/4, this.width/4, this.height/4);
			ctx.fillRect(this.x - (this.width/2 - this.width/4)+5, this.y - this.height/2 - this.height/4, this.width/4, this.height/4);
			ctx.fillRect(this.x - (this.width/2 - this.width/2) + 6, this.y - this.height/2 - this.height/4, this.width/4, this.height/4);
		}
		else if(this.hp == 5){
			ctx.fillStyle = "006600";
			ctx.fillRect(this.x - this.width/2 + 4, this.y - this.height/2 - this.height/4, this.width/4, this.height/4);
			ctx.fillRect(this.x - (this.width/2 - this.width/4)+5, this.y - this.height/2 - this.height/4, this.width/4, this.height/4);
			ctx.fillStyle = "red";
			ctx.fillRect(this.x - (this.width/2 - this.width/2) + 6, this.y - this.height/2 - this.height/4, this.width/4, this.height/4);
		}
		else if(this.hp == 4){
			ctx.fillStyle = "006600";
			ctx.fillRect(this.x - this.width/2 + 4, this.y - this.height/2 - this.height/4, this.width/4, this.height/4);
			ctx.fillStyle = "red";
			ctx.fillRect(this.x - (this.width/2 - this.width/4)+5, this.y - this.height/2 - this.height/4, this.width/4, this.height/4);
			ctx.fillRect(this.x - (this.width/2 - this.width/2) + 6, this.y - this.height/2 - this.height/4, this.width/4, this.height/4);
		}
		else if(this.hp == 3){
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
	else{
		for(E in AllEnemies){
			if(collision(AllEnemies[E].dir, AllEnemies[E], this) || collision(this.dir, this, AllEnemies[E])){
				onDmg.play();
				this.dmg = true;
			}
		}
		if(this.dmg == true){
			this.hp-=1;
			hptimer = 30;
			this.dmg = false;
		}
		else{
			this.hp = this.hp;
		}
	}
	}
};
//----------------------------------------------- Casting Bar -----------------------------------------------------------------------//
var castingBar = {
	x: player.x - player.width/2,
	y: player.y + player.height/2,
	width: player.width,
	height: player.height/4,
	width2: 0,
	onScreen: 0,
	cast: -1,
	castmax: 0,
	draw: function(){
		this.x = player.x - player.width/2;
		this.y = player.y + player.height/2;
		if(this.onScreen == 1){
			ctx.fillStyle = "0404B4";
			ctx.strokeStyle = "black";
			ctx.strokeRect(this.x, this.y, this.width, this.height);
			ctx.fillRect(this.x + 2, this.y + 2, this.width2, this.height - 2);
		}
	},
	tick: function(){
		if(this.cast > 0){
			player.speed = 0;
			this.cast-=1;
			this.width2 = this.cast/this.castmax * this.width;
		}
		if(this.cast == 0){
			this.cast-=1;
			player.speed = 8;
			this.onScreen = 0;
		}
	}
}
var TreecastingBar = {
	x: treeWizz.x - treeWizz.width/2,
	y: treeWizz.y + treeWizz.height/2,
	width: treeWizz.width,
	height: treeWizz.height/4,
	width2: 0,
	onScreen: 0,
	cast: -1,
	castmax: 0,
	draw: function(){
		this.x = treeWizz.x - treeWizz.width/2;
		this.y = treeWizz.y + treeWizz.height/2;
		if(this.onScreen == 1){
			ctx.fillStyle = "0404B4";
			ctx.strokeStyle = "black";
			ctx.strokeRect(this.x, this.y, this.width, this.height);
			ctx.fillRect(this.x + 2, this.y + 2, this.width2, this.height - 2);
		}
	},
	tick: function(){
		if(this.cast > 0){
			treeWizz.speed = 0;
			this.cast-=1;
			this.width2 = this.cast/this.castmax * this.width;
		}
		if(this.cast == 0){
			treeWizz.speed = treeWizz.speed2*2;
			this.onScreen = 0;
		}
	}
}
//------------------------------------------------- Collision Detection -------------------------------------------------------------//
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
//------------------------------------------------- Point and Element Markers -------------------------------------------------------//
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

var typemarker = {
	color: "00FF00",
	speed: 4,
	timeLeft: 0,
	x: -100,
	y: -100,
	text: "",
};

var typemarker2 = {
	color: "00FF00",
	speed: 4,
	timeLeft: 0,
	x: -100,
	y: -100,
	text: "",
};

var typemarker3 = {
	color: "00FF00",
	speed: 4,
	timeLeft: 0,
	x: -100,
	y: -100,
	text: "",
};
function drawtypeMarker(M){
	if(M.timeLeft == 0){
		M.x = -100;
		M.y = -100;
	}
	if (M.timeLeft != 0){
		if(M.text == "+ Air"){
			M.color = "D0D0D0";
		}
		else if(M.text == "+ Fire"){
			M.color = "CC0000";
		}
		else if(M.text == "+ Ice"){
			M.color = "00FFFF";
		}
		else if(M.text == "+ Lightning"){
			M.color = "yellow";
		}
		else if(M.text == "+ Earth"){
			M.color = "33FF00";
		}
		else if(M.text == "+ Mystic"){
			M.color = "663399";
		}
		else if(M.text == "+ Max Hp"){
			M.color = colorz[colorNum];
			colorNum++;
			if(colorNum > 6){
				colorNum = 1;
			}
		}
	ctx.fillStyle = M.color;
	ctx.font = "32pt Arial";
	ctx.fillText(M.text, M.x, M.y);
	}
}

function drawMarker(M){
	if(M.timeLeft == 0){
		M.x = -100;
		M.y = -100;
		M.speed = 4;
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
//------------------------------------------------- Keep Track of Score Multiplier --------------------------------------------------//
//Multiply
var multiply = function(){
	if(multtimer <= 0){
		multiplier = 1;
	}
	else{
		multtimer-=1;
	}
}
//------------------------------------------------- Clear Canvas Each Frame ---------------------------------------------------------//
// Clear the canvas - draw a white rectangle over everything
var clear = function(){
// Border
if(ctx.globalAlpha == 1){
ctx.fillStyle = "white";
ctx.fillRect(0, 0, canvas.width, canvas.height);
}
	if(STATE != 1){
		ctx.fillStyle = "grey";
		ctx.fillRect(4, 4, canvas.width-4, canvas.height-4);
	}
	else{
		ctx.drawImage(backGround1, 0, 0);
	}
};
//-------------------------------------------------- HUD and Spell Calculation ------------------------------------------------------//
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
		if(spell1 == "Air"){
			spell = "Gust";
		}
		if(spell1 == "Mystic"){
			spell = "Teleport";
		}			
	}
	if(spell1 == "N/A" && spell2 != "N/A"){
		if(spell2 == "Fire"){
			spell = "Fire";
		}
		if(spell2 == "Ice"){
			spell = "Ice";
		}
		if(spell2 == "Earth"){
			spell = "Earth Heal";
		}
		if(spell2 == "Lightning"){
			spell = "Lightning";
		}	
		if(spell2 == "Air"){
			spell = "Gust";
		}
		if(spell2 == "Mystic"){
			spell = "Teleport";
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
	if(spell1 == "Air" && spell2 == "Air"){
		spell = "Twister";
	}
	if((spell1 == "Fire" && spell2 == "Air") || (spell2 == "Fire" && spell1 == "Air")){
		spell = "Fire Wave";
	}
	if((spell1 == "Ice" && spell2 == "Air") || (spell2 == "Ice" && spell1 == "Air")){
		spell = "Maelstrom";
	}
	if((spell1 == "Earth" && spell2 == "Air") || (spell2 == "Earth" && spell1 == "Air")){
		spell = "Gust and Heal";
	}
	if((spell1 == "Lightning" && spell2 == "Air") || (spell2 == "Lightning" && spell1 == "Air")){
		spell = "Thunderstorm";
	}
	if(spell1 == "Mystic" && spell2 == "Mystic"){
		spell = "Mirage";
	}
	if((spell1 == "Fire" && spell2 == "Mystic") || (spell2 == "Fire" && spell1 == "Mystic")){
		spell = "Explosive Shots";
	}
	if((spell1 == "Ice" && spell2 == "Mystic") || (spell2 == "Ice" && spell1 == "Mystic")){
		spell = "Ice Shots";
	}
	if((spell1 == "Earth" && spell2 == "Mystic") || (spell2 == "Earth" && spell1 == "Mystic")){
		spell = "Teleport and Heal";
	}
	if((spell1 == "Lightning" && spell2 == "Mystic") || (spell2 == "Lightning" && spell1 == "Mystic")){
		spell = "Conductive Shots";
	}
	if((spell1 == "Air" && spell2 == "Mystic") || (spell2 == "Air" && spell1 == "Mystic")){
		spell = "Homing Shots";
	}
	if(spell1 == "Fire"){
		spell1pic = Firebox;
	}
	else if(spell1 == "Ice"){
		spell1pic = Icebox;
	}
	else if(spell1 == "Earth"){
		spell1pic = Earthbox;
	}
	else if(spell1 == "Lightning"){
		spell1pic = Thunderbox;
	}
	else if(spell1 == "Air"){
		spell1pic = Windbox;
	}
	else if(spell1 == "Mystic"){
		spell1pic = Mysticbox;
	}
	else{
		spell1pic = "N/A";
	}
	if(spell2 == "Fire"){
		spell2pic = Firebox;
	}
	else if(spell2 == "Ice"){
		spell2pic = Icebox;
	}
	else if(spell2 == "Earth"){
		spell2pic = Earthbox;
	}
	else if(spell2 == "Lightning"){
		spell2pic = Thunderbox;
	}
	else if(spell2 == "Air"){
		spell2pic = Windbox;
	}
	else if(spell2 == "Mystic"){
		spell2pic = Mysticbox;
	}
	else{
		spell2pic = "N/A";
	}
	// Text
	ctx.fillStyle = "black";
	ctx.font = "18pt Arial";
	ctx.fillText("Spell:", 32, 512);
	ctx.strokeStyle = "000000";
	ctx.strokeRect(92, 476, 32, 48);
	ctx.strokeRect(124, 476, 32, 48);
	if(spell1pic != "N/A"){
		ctx.drawImage(spell1pic, 90, 484);
	}
	if(spell2pic != "N/A"){
		ctx.drawImage(spell2pic, 122, 484);
	}
	ctx.fillText("= " + spell, 160, 512);
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
	else if(spell == "Gust"){
		ctx.fillStyle = "black";
		ctx.font = "16pt Arial";
		ctx.fillText("Recharge: " + Math.round(air.cd/30) + "s", 32, 544);
	}
	else if(spell == "Twister"){
		ctx.fillStyle = "black";
		ctx.font = "16pt Arial";
		ctx.fillText("Recharge: " + Math.round(air2.cd/30) + "s", 32, 544);
	}
	else if(spell == "Fire Wave"){
		ctx.fillStyle = "black";
		ctx.font = "16pt Arial";
		ctx.fillText("Recharge: " + Math.round(airfire.cd/30) + "s", 32, 544);
	}
	else if(spell == "Maelstrom"){
		ctx.fillStyle = "black";
		ctx.font = "16pt Arial";
		ctx.fillText("Recharge: " + Math.round(airice.cd/30) + "s", 32, 544);
	}
	else if(spell == "Gust and Heal"){
		ctx.fillStyle = "black";
		ctx.font = "16pt Arial";
		ctx.fillText("Recharge: " + Math.round(airearth.cd/30) + "s", 32, 544);
	}
	else if(spell == "Thunderstorm"){
		ctx.fillStyle = "black";
		ctx.font = "16pt Arial";
		ctx.fillText("Recharge: " + Math.round(airlightning.cd/30) + "s", 32, 544);
	}
	else if(spell == "Teleport"){
		ctx.fillStyle = "black";
		ctx.font = "16pt Arial";
		ctx.fillText("Recharge: " + Math.round(mystic.cd/30) + "s", 32, 544);
	}
	else if(spell == "Mirage"){
		ctx.fillStyle = "black";
		ctx.font = "16pt Arial";
		ctx.fillText("Recharge: " + Math.round(mystic2.cd/30) + "s", 32, 544);
	}
	else if(spell == "Teleport and Heal"){
		ctx.fillStyle = "black";
		ctx.font = "16pt Arial";
		ctx.fillText("Recharge: " + Math.round(mysticearth.cd/30) + "s", 32, 544);
	}
	else if(spell == "Explosive Shots"){
		ctx.fillStyle = "black";
		ctx.font = "16pt Arial";
		ctx.fillText("Recharge: " + Math.round(mystic.cd/30) + "s", 32, 544);
	}
	else if(spell == "Ice Shots"){
		ctx.fillStyle = "black";
		ctx.font = "16pt Arial";
		ctx.fillText("Recharge: " + Math.round(mystic.cd/30) + "s", 32, 544);
	}
	else if(spell == "Conductive Shots"){
		ctx.fillStyle = "black";
		ctx.font = "16pt Arial";
		ctx.fillText("Recharge: " + Math.round(mystic.cd/30) + "s", 32, 544);
	}
	else if(spell == "Homing Shots"){
		ctx.fillStyle = "black";
		ctx.font = "16pt Arial";
		ctx.fillText("Recharge: " + Math.round(mystic.cd/30) + "s", 32, 544);
	}
	ctx.fillStyle = "black";
	ctx.font = "16pt Arial";
	ctx.fillText("Q: Drop Spell 1", 576, 528);
	ctx.fillText("E: Drop Spell 2", 576, 560);
	ctx.fillText("Spacebar: Use spell", 576, 496);
}
//----------------------------------------------------- Score -----------------------------------------------------------------------//
function SCORE(){
	ctx.fillStyle = "black";
	ctx.font = "18pt Arial";
	ctx.fillText("Score: " + score, 32, 48);
}

//--------------------------------------------- Keys and Activation -----------------------------------------------------------------//
// Key bindings
var keys = function(){
	if (87 in keysDown){
		player.dir = "W";
	}
	if (65 in keysDown){
		player.dir = "A";
	}
	if (83 in keysDown){
		player.dir = "S";
	}
	if (68 in keysDown){
		player.dir = "D";
	}
	if (87 in keysDown && player.y - player.speed > 4 && !(obsCollision(obstacle1, player, player.dir)) && !(obsCollision(obstacle2, player, player.dir))
		&& !(obsCollision(obstacle3, player, player.dir))){
		player.y-=player.speed; 
		player.dir = "W";
	}
	if (65 in keysDown && player.x - player.speed > 4 && !(obsCollision(obstacle1, player, player.dir)) && !(obsCollision(obstacle2, player, player.dir))
		&& !(obsCollision(obstacle3, player, player.dir))){
		player.x-=player.speed;
		player.dir = "A";
	}
	if (83 in keysDown && player.y + player.speed < canvas.height - 4 && !(obsCollision(obstacle1, player, player.dir)) && !(obsCollision(obstacle2, player, player.dir))
		&& !(obsCollision(obstacle3, player, player.dir))){
		player.y+=player.speed;
		player.dir = "S";
	}
	if (68 in keysDown && player.x + player.speed < canvas.width - 4 && !(obsCollision(obstacle1, player, player.dir)) && !(obsCollision(obstacle2, player, player.dir))
		&& !(obsCollision(obstacle3, player, player.dir))){
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
	if(81 in keysDown){
		if(spell1 != "N/A"){
			spell1 = "N/A";
			spell = spell2;
		}
	}
	if(69 in keysDown){
		if(spell2 != "N/A"){
			spell2 = "N/A";
			spell = spell1;
		}
	}
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
		if(spell1 == "Air"){
			air.shoot();
		}
		if(spell1 == "Mystic"){
			mystic.shoot();
		}
	}
	if(32 in keysDown && spell2 != "N/A" && spell1 == "N/A"){
		if(spell2 == "Fire"){
			fire.shoot();
		}
		if(spell2 == "Ice"){
			ice.shoot();
		}
		if(spell2 == "Earth"){
			earth.shoot();
		}
		if(spell2 == "Lightning"){
			lightning.shoot();
		}
		if(spell2 == "Air"){
			air.shoot();
		}
		if(spell2 == "Mystic"){
			mystic.shoot();
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
		if(spell1 == "Air" && spell2 == "Air"){
			air2.shoot();
		}
		if((spell1 == "Air" && spell2 == "Fire") || (spell2 == "Air" && spell1 == "Fire")){
			airfire.shoot();
		}
		if((spell1 == "Air" && spell2 == "Ice") || (spell2 == "Air" && spell1 == "Ice")){
			airice.shoot();
		}
		if((spell1 == "Air" && spell2 == "Lightning") || (spell2 == "Air" && spell1 == "Lightning")){
			airlightning.shoot();
		}
		if((spell1 == "Air" && spell2 == "Earth") || (spell2 == "Air" && spell1 == "Earth")){
			airearth.shoot();
		}
		if(spell1 == "Mystic" && spell2 == "Mystic"){
			mystic2.shoot();
		}
		if((spell1 == "Mystic" && spell2 == "Earth") || (spell2 == "Mystic" && spell1 == "Earth")){
			mysticearth.shoot();
		}
		if((spell1 == "Mystic" && spell2 == "Fire") || (spell2 == "Mystic" && spell1 == "Fire")){
			mystic.shoot();
		}
		if((spell1 == "Mystic" && spell2 == "Ice") || (spell2 == "Mystic" && spell1 == "Ice")){
			mystic.shoot();
		}
		if((spell1 == "Mystic" && spell2 == "Lightning") || (spell2 == "Mystic" && spell1 == "Lightning")){
			mystic.shoot();
		}
		if((spell1 == "Mystic" && spell2 == "Air") || (spell2 == "Mystic" && spell1 == "Air")){
			mystic.shoot();
		}
	}
};
//--------------------------------------------------- Reset all Global Variables ----------------------------------------------------//
function reset(){
	nu = 0;
	hs = 0;
	cd = 0;
	hptimer = 0;
	spell1 = "N/A";
	spell2 = "N/A";
	spell = "N/A";
	score = 0;
	muliplier = 1;
	multtimer = 0;
	player.x = 400;
	player.y = 256;
	player.speed = 8;
	player.hp = 3;
	player.dir = "W";
	Sorceror.hp = 1;
	Sorceror.hptimer = 0;
	Spawner.hp = 1;
	Spawner.hptimer = 0;
	treeWizz.hp = 1;
	treeWizz.hptimer = 0;
	for(E in AllEnemies){
		onHit(AllEnemies[E]);
		AllEnemies[E].speed = AllEnemies[E].speed2 * 2;
		AllEnemies[E].respawn = AllEnemies[E].origrp;
	}
	treeWizz.hp = 6;
	treeWizz.spawned = 0;
	treeWizz.speed = 4;
	treeWizz.speed2 = 2;
	treeWizz.width = 32;
	treeWizz.height = 32;
	Sorceror.hp = 3;
	Sorceror.hptimer = 0;
	Sorceror.cd = 0;
	Spawner.hp = 5;
	Spawner.hptimer = 0;
	Spawner.cd = 0;
	for (W in Weapons){
		Weapons[W].timeLeft = 0;
		Weapons[W].onScreen = 0;
	}
	Globblyfire.x = -100;
	Globblyfire.y = -200;
	Globblyfire.width = 16;
	Globblyfire.height = 16;
	Globblyfire.onScreen = 0;
	Globblyfire2.x = -100;
	Globblyfire2.y = -200;
	Globblyfire2.width = 16;
	Globblyfire2.height = 16;
	Globblyfire2.onScreen = 0;
	Globblyfire3.x = -100;
	Globblyfire3.y = -200;
	Globblyfire3.width = 16;
	Globblyfire3.height = 16;
	Globblyfire3.onScreen = 0;
	score = 0;
	multiplier = 1;
	marker.timeLeft = 0;
	marker2.timeLeft = 0;
	marker3.timeLeft = 0;
	marker4.timeLeft = 0;
	redCube.timeLeft = 0;
	tealCube.timeLeft = 0;
	greenCube.timeLeft = 0;
	yellowCube.timeLeft = 0;
	greyCube.timeLeft = 0;
	rePlant();
}
//-------------------------------------------------------------- Game Over ----------------------------------------------------------//
function gameOver(){
	ctx.fillStyle = "white";
	ctx.fillRect(0, 0, canvas.width, canvas.height);
	ctx.fillStyle = "black";
	ctx.font = "18pt Arial";
	var bx = 350;
	var by = 560;
	var width = 20;
	var height = 20;
	multiplier = 1;
	ctx.fillStyle = "grey";
	ctx.fillRect(4, 4, canvas.width-4, canvas.height-4);
	if(STATE != 5){
		ctx.fillText("Score: " + score, 400, 144);
	}
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
		ctx.fillText("New High Score!!", 360, 64);
	}
	ctx.fillStyle = "black";
	ctx.font = "18pt Arial";
	ctx.fillText("High Scores:", 360, 208);
	ctx.fillText("1st: " + highscore1, 360, 240);
	ctx.fillText("2nd: " + highscore2, 360, 272);
	ctx.fillText("3rd: " + highscore3, 360, 304);
	ctx.fillText("4th: " + highscore4, 360, 336);
	ctx.fillText("5th: " + highscore5, 360, 368);
	ctx.fillStyle = "black";
	ctx.font = "16pt Arial";
	ctx.fillText("Back", bx, by);
	if(hX >= bx-10 && hX <=bx + 50 && hY <= by && hY>=by-height*7/6){
		ctx.strokeRect(bx-10, by-height*7/6, width * 3 + 10, height+10);
	}		
	if(cX >= bx-10 && cX <=bx + 50 && cY <= by && cY>=by-height*7/6){
		score = 0;
		reset();
		STATE = 0;
		fastbeepsLow.play();
	}	
}
//---------------------------------------------------------- Big-Bang ---------------------------------------------------------------//
setInterval(function(){
	clear();
	if(STATE == 0){
		Menu.draw();
	}
	else if(STATE == 2){
		Info.draw();
	}
	else if(STATE == 3){
		Credits.draw();
	}
	else if(STATE == 4 || STATE == 5){
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
			
			player.draw();
			player.onhit();
		
			redCube.draw();
			pickup(redCube);
		
			tealCube.draw();
			pickup(tealCube);
		
			yellowCube.draw();
			pickup(yellowCube);
			
			greyCube.draw();
			pickup(greyCube);
		
			greenCube.draw();
			pickup(greenCube);
			
			purpleCube.draw();
			pickup(purpleCube);
			
			hpUp.draw();
			pickup(hpUp);
			for(H in hpParticles){
				hpParticles[H].draw();
				hpParticles[H].onHit();
				HpMove(hpParticles[H]);
				HpAi(hpParticles[H]);
			}
			
			drawObstacle(obstacle1);
			drawObstacle(obstacle2);
			drawObstacle(obstacle3);
			obsTick(obstacle1);
			obsTick(obstacle2);
			obsTick(obstacle3);
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
			airearth.tick();
		
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
			
			air.draw();
			air.effect();
			air12.draw();
			air12.effect();
			air13.draw();
			air13.effect();
			air2.tick();
			air2right.draw();
			air2right.effect();
			air2right2.draw();
			air2right2.effect();
			air2right3.draw();
			air2right3.effect();
			air2left.draw();
			air2left.effect();
			air2left2.draw();
			air2left2.effect();
			air2left3.draw();
			air2left3.effect();
			air2down.draw();
			air2down.effect();
			air2down2.draw();
			air2down2.effect();
			air2down3.draw();
			air2down3.effect();
			air2up.draw();
			air2up.effect();
			air2up2.draw();
			air2up2.effect();
			air2up3.draw();
			air2up3.effect();
			
			airfire.draw();
			airfire.effect();
			airfire12.draw();
			airfire12.effect();
			airfire13.draw();
			airfire13.effect();
			
			airice.draw();
			airice.effect();
			
			airlightning.draw();
			airlightning.effect();
			
			mystic.move();
			mystic.draw();
			Mfire.draw();
			Mfire.move();
			Mfire2.draw();
			Mfire2.move();
			Mfire3.draw();
			Mfire3.move();
			Mfire4.draw();
			Mfire4.move();
			Mice.draw();
			Mice.move();
			Mice2.draw();
			Mice2.move();
			Mice3.draw();
			Mice3.move();
			Mice4.draw();
			Mice4.move();
			mysticearth.tick();
			mystic2.draw();
			mystic2.move();
			Illusion.draw();
			Illusion.shoot();
			IllusionBlast.draw();
			IllusionBlast.move();
		
			sIce.draw();
			sIce.move();
			sIce.effect();
			
			sFire.draw();
			sFire.move();
			
			sLightning.draw();
			sLightning.effect();
			
			rootBlastW.draw();
			rootBlastW.effect();
			rootBlastA.draw();
			rootBlastA.effect();
			rootBlastS.draw();
			rootBlastS.effect();
			rootBlastD.draw();
			rootBlastD.effect();
			LeafHeal.draw();
			LeafHeal.move();
			for(R in roots1){
				roots1[R].draw();
			}
			treeWizz.spawn();
			for(E in AllEnemies){
				AllEnemies[E].draw();
				move(AllEnemies[E]);
				AI(AllEnemies[E]);
				spawn(AllEnemies[E]);
			}
			Globblyfire.draw();
			Globblyfire.move();
			Globblyfire2.draw();
			Globblyfire2.move();
			Globblyfire3.draw();
			Globblyfire3.move();
		
			Spawner.fire();
			
			drawMarker(marker);
			moveMarker(marker);
		
			drawMarker(marker2);
			moveMarker(marker2);
		
			drawMarker(marker3);
			moveMarker(marker3);
		
			drawMarker(marker4);
			moveMarker(marker4);
			
			drawtypeMarker(typemarker);
			moveMarker(typemarker);
		
			drawtypeMarker(typemarker2);
			moveMarker(typemarker2);
		
			drawtypeMarker(typemarker3);
			moveMarker(typemarker3);
			
			castingBar.draw();
			castingBar.tick();
			TreecastingBar.draw();
			TreecastingBar.tick();
			
			// Cooldown calculation
			if(cd <= 0){
				cd = cd;
			}
			else{
				cd--;
			}
		}
	}
}, 1000/FPS);