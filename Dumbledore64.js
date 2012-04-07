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
	Version 0.5.4 Changes(4/5/2012):
		-Bug Fixes:
			-Can no longer be damaged by humpdumps while they
				are in trees
			-Can no longer shoot while casting
			-Pause menu sound fully stops
			-Fixed bubblebeam diagonal shots so they make sense
			-Teleporting when bubble shields are around you no longer
				causes the bubbles to scatter
			-Fixed bug where page reload didn't work in chrome
			-Fixed bug where homing shots cooldown didn't change
			-Fixed thief alpha effect negating ice
			-Fixed bug where thieves disappeared easily
		-Balancing:
			-Reset all High scores. Will do this every tenth of a version
				e.g. version 0.6.0
			-Frozen Web now has a longer recharge
			-Zap Trap now has a shorter recharge
			-Homing Shots now have a 1.5 second cooldown
			-Added 5 seconds to Chain Lightning cooldown
			-Added 1 second to all teleport cooldowns
			-Subtracted 5 seconds from Mirage cooldown
			-Halved Thief points to 250
			-Increased Enemy Wizard points to 500
			-Increased Tree Wizard points to 2000
			-Increased pickup points to 50
		-Added Thief enemy in Jungle. Has 2 hp. Steals spell from you and runs away.
		-Took out the 3 globbly enemies in the Jungle, replaced them with thieves
		-Thieves now are more stealthy
		-Optimized a lot of code, should load and run slightly faster
		
	TODO:
		+Bugs
		-Highscores
			-Prompt for initials
			-Cannot make dynamic pages on git
		+Optimize
			+Arrays
		-Spells
			-Dark (Black)
				-HP Steal?
			-Summon (?)
				-Minions
		+More enemies and AI
			+Bosses:
				+Grass level boss #2: 3 part dragon (Dragon, DragonR, DragonL)
			-Make it apparent what spell the enemy wizard has
			-Random Power Ups
		-Terrain
			-Different levels, at the end of each is a boss
			-During battle terrain gradually changes to new level
			-Each level has its own element drops and enemies
				Forest = Earth(rare), Water, Air?
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
//Pause menu
var preSTATE = 0;
var keytimer = 0;
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
// Environment
var planted = false;
var jungleAni = false;
//------------------------------------------------------- Graphics ------------------------------------------------------------------//
//Girraffix
var WizzurdL = new Image();
WizzurdL.src = "grafix/wizzurds/wizard/wiz.l.png";
var WizzurdR = new Image();
WizzurdR.src = "grafix/wizzurds/wizard/wiz.r.png";
//Ondmg
var Wizzurd2 = new Image();
Wizzurd2.src = "grafix/wizzurds/effects.wizard/nega.wiz.l1.png";
//menu
var menuBack = new Image();
menuBack.src = "grafix/menu/menu.png";
var Title = new Image();
Title.src = "grafix/menu/title.png";
var textmenu = new Image();
textmenu.src = "grafix/menu/mainmenu/text.png";
var creditsmenu = new Image();
creditsmenu.src = "grafix/menu/mainmenu/bkgblur.credits.png";
var helpmenu = new Image();
helpmenu.src = "grafix/menu/mainmenu/bkgblur.help.png";
var newgamemenu = new Image();
newgamemenu.src = "grafix/menu/mainmenu/bkgblur.newgame.png";
var noselectmenu = new Image();
noselectmenu.src = "grafix/menu/mainmenu/bkgblur.noneselect.png";
var optionsmenu = new Image();
optionsmenu.src = "grafix/menu/mainmenu/bkgblur.options.png";
var scoremenu = new Image();
scoremenu.src = "grafix/menu/mainmenu/bkgblur.score.png";
//Environment
var Tree = new Image();
Tree.src = "grafix/objects/tree/health.3.png";
var Tree2 = new Image();
Tree2.src = "grafix/objects/tree/health.2.png";
var Tree3 = new Image();
Tree3.src = "grafix/objects/tree/health.1.png";
var backGround1 = new Image();
backGround1.src = "grafix/background/grass1.png";
var backGround2 = new Image();
backGround2.src = "grafix/background/jungle1.png";
//Jungle
var Jtree1 = new Image();
Jtree1.src = "grafix/objects/jungle.tree/sprout1.png";
var Jtree2 = new Image();
Jtree2.src = "grafix/objects/jungle.tree/grow1.png";
var Jtree3 = new Image();
Jtree3.src = "grafix/objects/jungle.tree/grow2.png";
var Jtree4 = new Image();
Jtree4.src = "grafix/objects/jungle.tree/grow3.png";
var Jtree5 = new Image();
Jtree5.src = "grafix/objects/jungle.tree/grow4.png";
var Jtree6 = new Image();
Jtree6.src = "grafix/objects/jungle.tree/grow5.png";
var Jtree7 = new Image();
Jtree7.src = "grafix/objects/jungle.tree/trunk.png";
var JungleTrees = {0: Jtree1, 1: Jtree2, 2: Jtree3, 3: Jtree4, 4: Jtree5, 5: Jtree6, 6: Jtree7}; 
var jungleIndex = 0;
//Lavaman
var Lavamanpic = new Image();
Lavamanpic.src = "grafix/creatures/firesprite/firesprite.l1.png";
//Tenemy
var Globbly = new Image();
Globbly.src = "grafix/creatures/globbly/globbly.r1.png";
var Globbly2 = new Image();
Globbly2.src = "grafix/creatures/globbly/globbly.r2.png";
var Globbly3 = new Image();
Globbly3.src = "grafix/creatures/globbly/globbly.r3.png";
var Globbly4 = new Image();
Globbly4.src = "grafix/creatures/globbly/globbly.r4.png";
var Globbly5 = new Image();
Globbly5.src = "grafix/creatures/globbly/globbly.r5.png";
var Globbly6 = new Image();
Globbly6.src = "grafix/creatures/globbly/globbly.r6.png";
var Globbly7 = new Image();
Globbly7.src = "grafix/creatures/globbly/globbly.r7.png";
var Globbly8 = new Image();
Globbly8.src = "grafix/creatures/globbly/globbly.r8.png";
var Globblys = {1: Globbly, 2: Globbly2, 3: Globbly3, 4: Globbly4, 5: Globbly5, 6: Globbly6, 7: Globbly7, 8: Globbly8};
//Hudge
var HudgeL = new Image();
HudgeL.src = "grafix/creatures/hudge/hudge.l1.png";
var HudgeR = new Image();
HudgeR.src = "grafix/creatures/hudge/hudge.r1.png";
//Enemy2
var Pikkit = new Image();
Pikkit.src = "grafix/creatures/pikkit/pikkit.l1.png";
var humpDumpr1 = new Image();
humpDumpr1.src = "grafix/creatures/humpdump/humpdump.r1.png";
var humpDumpr2 = new Image();
humpDumpr2.src = "grafix/creatures/humpdump/humpdump.r2.png";
var humpDumpr3 = new Image();
humpDumpr3.src = "grafix/creatures/humpdump/humpdump.r3.png";
var humpDumpl1 = new Image();
humpDumpl1.src = "grafix/creatures/humpdump/humpdump.l1.png";
var humpDumpl2 = new Image();
humpDumpl2.src = "grafix/creatures/humpdump/humpdump.l2.png";
var humpDumpl3 = new Image();
humpDumpl3.src = "grafix/creatures/humpdump/humpdump.l3.png";
var humprList = {1: humpDumpr1, 2: humpDumpr2, 3: humpDumpr3};
var humplList = {1: humpDumpl1, 2: humpDumpl2, 3: humpDumpl3};
var humpDumpd1 = new Image();
humpDumpd1.src = "grafix/creatures/humpdump/humpdump.d1.png";
var humpDumpd2 = new Image();
humpDumpd2.src = "grafix/creatures/humpdump/humpdump.d2.png";
var humpdList = {1: humpDumpd1, 2: humpDumpd2};
//Thief
var thiefPeek = new Image();
thiefPeek.src = "grafix/creatures/sneak/peek.png";
var thiefSneak = new Image();
thiefSneak.src = "grafix/creatures/sneak/hidden.l1.png";
var thiefVis = new Image();
thiefVis.src = "grafix/creatures/sneak/visible.l1.png";
var Thieves = {1: thiefPeek, 2: thiefSneak, 3: thiefVis};
//Spawner
var Splavaman = new Image();
Splavaman.src = "grafix/creatures/lavaman/lavaman.l1.png";
//Evil Wizzurd
var Sorcerorpng = new Image();
Sorcerorpng.src = "grafix/wizzurds/poison.wizard/poison.wiz.l1.png";
//Tree Wizzurd
var TWizzurd = new Image();
TWizzurd.src = "grafix/wizzurds/tree.wizard/tree.wiz.l1.png";
var TWizzurd2 = new Image();
TWizzurd2.src = "grafix/wizzurds/tree.wizard/tree.wiz.l2.png";
var TWizzurd3 = new Image();
TWizzurd3.src = "grafix/wizzurds/tree.wizard/tree.wiz.l3.png";
var TWizzurd4 = new Image();
TWizzurd4.src = "grafix/wizzurds/tree.wizard/tree.wiz.l4.png";
var TWizzurd5 = new Image();
TWizzurd5.src = "grafix/wizzurds/tree.wizard/tree.wiz.l5.png";
var TWizzurd6 = new Image();
TWizzurd6.src = "grafix/wizzurds/tree.wizard/tree.wiz.l6.png";
var TWizzurd7 = new Image();
TWizzurd7.src = "grafix/wizzurds/tree.wizard/tree.wiz.l7.png";
var TWizzurd8 = new Image();
TWizzurd8.src = "grafix/wizzurds/tree.wizard/tree.wiz.l8.png";
var Treewizzez = {1: TWizzurd, 2: TWizzurd2, 3: TWizzurd3, 4: TWizzurd4, 5: TWizzurd5, 6: TWizzurd6, 7: TWizzurd7, 8: TWizzurd8};
//Monochrome Wizzurd
var MonoWizzurd = new Image();
MonoWizzurd.src = "grafix/wizzurds/effects.wizard/bw.wiz.l1.png";
//Fire powerup
var Firebox = new Image();
Firebox.src = "grafix/powers/fire/fire1.png";
var Firebox2 = new Image();
Firebox2.src = "grafix/powers/fire/fire2.png";
var Firebox3 = new Image();
Firebox3.src = "grafix/powers/fire/fire3.png";
var Firebox4 = new Image();
Firebox4.src = "grafix/powers/fire/fire4.png";
var Firebox5 = new Image();
Firebox5.src = "grafix/powers/fire/fire5.png";
var Fires = {1: Firebox, 2: Firebox2, 3: Firebox3, 4: Firebox4, 5: Firebox5};
//Ice powerup
var Icebox = new Image();
Icebox.src = "grafix/powers/ice/ice1.png";
var Icebox2 = new Image();
Icebox2.src = "grafix/powers/ice/ice2.png";
var Icebox3 = new Image();
Icebox3.src = "grafix/powers/ice/ice3.png";
var Icebox4 = new Image();
Icebox4.src = "grafix/powers/ice/ice4.png";
var Icebox5 = new Image();
Icebox5.src = "grafix/powers/ice/ice5.png";
var Ices = {1: Icebox, 2: Icebox2, 3: Icebox3, 4: Icebox4, 5: Icebox5};
//Earth powerup
var Earthbox = new Image();
Earthbox.src = "grafix/powers/earth/earth1.png";
var Earthbox2 = new Image();
Earthbox2.src = "grafix/powers/earth/earth2.png";
var Earthbox3 = new Image();
Earthbox3.src = "grafix/powers/earth/earth3.png";
var Earthbox4 = new Image();
Earthbox4.src = "grafix/powers/earth/earth4.png";
var Earthbox5 = new Image();
Earthbox5.src = "grafix/powers/earth/earth5.png";
var Earths = {1: Earthbox, 2: Earthbox2, 3: Earthbox3, 4: Earthbox4, 5: Earthbox5};
//lightning powerup
var Thunderbox = new Image();
Thunderbox.src = "grafix/powers/zap/zap1.png";
var Thunderbox2 = new Image();
Thunderbox2.src = "grafix/powers/zap/zap2.png";
var Thunderbox3 = new Image();
Thunderbox3.src = "grafix/powers/zap/zap3.png";
var Thunderbox4 = new Image();
Thunderbox4.src = "grafix/powers/zap/zap4.png";
var Thunderbox5 = new Image();
Thunderbox5.src = "grafix/powers/zap/zap5.png";
var Thunders = {1: Thunderbox, 2: Thunderbox2, 3: Thunderbox3, 4: Thunderbox4, 5: Thunderbox5};
//Air powerup
var Windbox = new Image();
Windbox.src = "grafix/powers/air/air1.png";
var Windbox2 = new Image();
Windbox2.src = "grafix/powers/air/air2.png";
var Windbox3 = new Image();
Windbox3.src = "grafix/powers/air/air3.png";
var Windbox4 = new Image();
Windbox4.src = "grafix/powers/air/air4.png";
var Windbox5 = new Image();
Windbox5.src = "grafix/powers/air/air5.png";
var Winds = {1: Windbox, 2: Windbox2, 3: Windbox3, 4: Windbox4, 5: Windbox5};
//Mystic powerup
var Mysticbox = new Image();
Mysticbox.src = "grafix/powers/mystic/mystic1.png";
var Mysticbox2 = new Image();
Mysticbox2.src = "grafix/powers/mystic/mystic2.png";
var Mysticbox3 = new Image();
Mysticbox3.src = "grafix/powers/mystic/mystic3.png";
var Mysticbox4 = new Image();
Mysticbox4.src = "grafix/powers/mystic/mystic4.png";
var Mysticbox5 = new Image();
Mysticbox5.src = "grafix/powers/mystic/mystic5.png";
var Mystics = {1: Mysticbox, 2: Mysticbox2, 3: Mysticbox3, 4: Mysticbox4, 5: Mysticbox5};
//Water powerup
var Waterbox = new Image();
Waterbox.src = "grafix/powers/water/water1.png";
var Waterbox2 = new Image();
Waterbox2.src = "grafix/powers/water/water2.png";
var Waterbox3 = new Image();
Waterbox3.src = "grafix/powers/water/water3.png";
var Waterbox4 = new Image();
Waterbox4.src = "grafix/powers/water/water4.png";
var Waterbox5 = new Image();
Waterbox5.src = "grafix/powers/water/water5.png";
var Waters = {1: Waterbox, 2: Waterbox2, 3: Waterbox3, 4: Waterbox4, 5: Waterbox5};
//Hp up
var maxUP = new Image();
maxUP.src = "grafix/powers/heartup/treeheart.png";
// Particle
var particle1 = new Image();
particle1.src = "grafix/effects/hpup/hpup1.png";
var particle2 = new Image();
particle2.src = "grafix/effects/hpup/hpup2.png";
var particle3 = new Image();
particle3.src = "grafix/effects/hpup/hpup3.png";
var particle4 = new Image();
particle4.src = "grafix/effects/hpup/hpup4.png";
var particle5 = new Image();
particle5.src = "grafix/effects/hpup/hpup5.png";
var particle6 = new Image();
particle6.src = "grafix/effects/hpup/hpup6.png";
var particle7 = new Image();
particle7.src = "grafix/effects/hpup/hpup7.png";
var particle8 = new Image();
particle8.src = "grafix/effects/hpup/hpup8.png";
var colorParticles = {1: particle1, 2: particle2, 3: particle3, 4: particle4, 5: particle5, 6: particle6, 7: particle7, 8: particle8};
//Bubble
var Bubble = new Image();
Bubble.src = "grafix/effects/bubble/bubble.png";
var FireBubble = new Image();
FireBubble.src = "grafix/effects/bubble/firebubble.png";
var IceBubble = new Image();
IceBubble.src = "grafix/effects/bubble/icebubble.png";
var MysticBubble = new Image();
MysticBubble.src = "grafix/effects/bubble/mysticbubble.png";
//hlightning
var hlightning1 = new Image();
hlightning1.src = "grafix/effects/lightning.self/hor.1.png";
var hlightning2 = new Image();
hlightning2.src = "grafix/effects/lightning.self/hor.2.png";
var hlightning3 = new Image();
hlightning3.src = "grafix/effects/lightning.self/hor.3.png";
//vlightning
var vlightning1 = new Image();
vlightning1.src = "grafix/effects/lightning.self/ver.1.png";
var vlightning2 = new Image();
vlightning2.src = "grafix/effects/lightning.self/ver.2.png";
var vlightning3 = new Image();
vlightning3.src = "grafix/effects/lightning.self/ver.3.png";
//ehlightning
var ehlightning1 = new Image();
ehlightning1.src = "grafix/effects/lightning.enemy/hor.1.png";
var ehlightning2 = new Image();
ehlightning2.src = "grafix/effects/lightning.enemy/hor.2.png";
var ehlightning3 = new Image();
ehlightning3.src = "grafix/effects/lightning.enemy/hor.3.png";
//evlightning
var evlightning1 = new Image();
evlightning1.src = "grafix/effects/lightning.enemy/ver.1.png";
var evlightning2 = new Image();
evlightning2.src = "grafix/effects/lightning.enemy/ver.2.png";
var evlightning3 = new Image();
evlightning3.src = "grafix/effects/lightning.enemy/ver.3.png";
//--------------------------------------------------- Sounds ------------------------------------------------------------------------//
var Beam = document.getElementsByTagName("audio")[0];
var Killed = document.getElementsByTagName("audio")[1];
var Pickup = document.getElementsByTagName("audio")[2];
var Explosion = document.getElementsByTagName("audio")[3];
var Frozen = document.getElementsByTagName("audio")[4];
var Fwave = document.getElementsByTagName("audio")[5];
var Thunder = document.getElementsByTagName("audio")[6];
var Wind = document.getElementsByTagName("audio")[7];
var onDmg = document.getElementsByTagName("audio")[8];
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
//Longsounds
var hum = document.getElementsByTagName("audio")[20];
var longfuzz = document.getElementsByTagName("audio")[21];
var longlaser = document.getElementsByTagName("audio")[22];
var longpew = document.getElementsByTagName("audio")[23];
var longpulse = document.getElementsByTagName("audio")[24];
var lowpulse = document.getElementsByTagName("audio")[25];
var radiofailure = document.getElementsByTagName("audio")[26];
var trailingbeeps = document.getElementsByTagName("audio")[27];
var AllSounds = {1: Beam, 2: Killed, 3: Pickup, 4: Explosion, 5: Frozen, 6: Fwave, 7: Thunder, 8: Wind, 9: onDmg, 10: SpawnerSpawn,
				11: zapLaser, 12: Plucky, 13: multiLaser, 14: midBoop, 15: lowDouble, 16: lowBomb, 17: highDouble, 18: flatBoop, 19: fastbeepsLow, 20: fastbeepsHigh,
				21: hum, 22: longfuzz, 23: longlaser, 24: longpew, 25: longpulse, 26: lowpulse, 27: radiofailure, 28: trailingbeeps};
//Music
var Spells = document.getElementsByTagName("audio")[28];
var OverwhelmedByGoblins = document.getElementsByTagName("audio")[29];
var BadWizards = document.getElementsByTagName("audio")[30];
var DumblebeatsNormal = document.getElementsByTagName("audio")[31];
var AllMusic = {1: Spells, 2: OverwhelmedByGoblins, 3: BadWizards, 4: DumblebeatsNormal};
//-------------------------------------------------------------- Library Storage ----------------------------------------------------//
//reset by changing the strings, change in gameover() too
var highscore1 = $.jStorage.get("v5highscore1");
if(!highscore1){
		var highscore1 = 0;
		$.jStorage.set("v5highscore1",highscore1);}
var highscore2 = $.jStorage.get("v5highscore2");
if(!highscore2){
		var highscore2 = 0;
		$.jStorage.set("v5highscore2",highscore2);}
var highscore3 = $.jStorage.get("v5highscore3");
if(!highscore3){
		var highscore3 = 0;
		$.jStorage.set("v5highscore3",highscore3);}
var highscore4 = $.jStorage.get("v5highscore4");
if(!highscore4){
		var highscore4 = 0;
		$.jStorage.set("v5highscore4",highscore4);}
var highscore5 = $.jStorage.get("v5highscore5");
if(!highscore5){
		var highscore5 = 0;
		$.jStorage.set("v5highscore5",highscore5);}
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
		var select = false;
		ctx.fillStyle = "white";
		ctx.font = "18pt Arial";
		ctx.strokeStyle = "white";
		ctx.drawImage(Title, 0, 0);
		ctx.drawImage(textmenu, 0, 0);
		ctx.fillText("Version 0.5.4: April 5 2012", this.x-3*this.width/3, this.y+8.75*this.height);
		//newgame
		if(hX >= this.x-this.width*4/5 && hX <=this.x + this.width && hY <= this.y + 1.75*this.height && hY>=this.y-this.height*7/6 + 2*this.height){
			select = true;
			ctx.drawImage(newgamemenu, 0, 0);
		}		
		if(cX >= this.x-this.width*4/5 && cX <=this.x + this.width && cY <= this.y + 1.75*this.height && cY>=this.y-this.height*7/6 + 2*this.height){
			fastbeepsLow.currentTime=0;
			fastbeepsLow.play();
			cX = 0;
			cY = 0;
			STATE = 1;
		}
		//How to Play
		if(hX >= this.x-this.width*4/5 && hX <=this.x + this.width/2 && hY <= this.y + 6*this.height && hY>=this.y-this.height*7/6 + 6*this.height){
			select = true;
			ctx.drawImage(helpmenu, 0, 0);
		}		
		if(cX >= this.x-this.width*4/5 && cX <=this.x + this.width/2 && cY <= this.y + 6*this.height && cY>=this.y-this.height*7/6 + 6*this.height){
			fastbeepsLow.currentTime=0;
			fastbeepsLow.play();
			cX = 0;
			cY = 0;
			STATE = 2;
		}
		//Score
		if(hX >= this.x-this.width*4/5 && hX <=this.x + this.width*3/4 && hY <= this.y + 3.25*this.height && hY>=this.y-this.height*7/5 + 3.25*this.height){
			select = true;
			ctx.drawImage(scoremenu, 0, 0);
		}		
		if(cX >= this.x-this.width*4/5 && cX <=this.x + this.width*3/4 && cY <= this.y + 3.25*this.height && cY>=this.y-this.height*7/5 + 3.25*this.height){
			fastbeepsLow.currentTime=0;
			fastbeepsLow.play();
			cX = 0;
			cY = 0;
			STATE = 5;
		}
		//Options
		if(hX >= this.x-this.width*3/5 && hX <=this.x + this.width*3/4 && hY <= this.y + 4.5*this.height && hY>=this.y-this.height*7/6 + 4.5*this.height){
			select = true;
			ctx.drawImage(optionsmenu, 0, 0);
		}		
		if(cX >= this.x-this.width*3/5 && cX <=this.x + this.width*3/4 && cY <= this.y + 4.5*this.height&& cY>=this.y-this.height*7/6 + 4.5*this.height){
			fastbeepsLow.currentTime=0;
			fastbeepsLow.play();
			cX = 0;
			cY = 0;
			STATE = 6;
		}
		//Credits
		if(hX >= this.x-this.width*3/5 && hX <=this.x + this.width*3/4 && hY <= this.y + 7.25*this.height && hY>=this.y-this.height*7/6 + 7.25*this.height){
			select = true;
			ctx.drawImage(creditsmenu, 0, 0);
		}		
		if(cX >= this.x-this.width*3/5 && cX <=this.x + this.width*3/4 && cY <= this.y + 7.25*this.height&& cY>=this.y-this.height*7/6 + 7.25*this.height){
			fastbeepsLow.currentTime=0;
			fastbeepsLow.play();
			cX = 0;
			cY = 0;
			STATE = 3;
		}
		if(select == false){
			ctx.drawImage(noselectmenu, 0, 0);
		}
	}
};
var Info = {
	x: canvas.width/25,
	y: canvas.height/11,
	width: 20,
	height: 20,
	bx: 696,
	by: 560,
	draw: function(){
		ctx.fillStyle = "white";
		ctx.font = "14pt Arial";
		ctx.strokeStyle = "white";
		ctx.fillText("Have you ever wanted to be just like Dumbledore?", this.x-this.width/2, this.y-this.height/2); 
		ctx.fillText("Well now you can with this AMAZING wizard simulator!", this.x-this.width/2, this.y+2*this.height/2);
		ctx.fillText("Originally released for the Nintendo 64,", this.x-this.width/2, this.y+5*this.height/2);
		ctx.fillText("this lifetime classic is now available at your leisure!",  this.x-this.width/2, this.y+8*this.height/2);
		ctx.fillText("Controls:", this.x-this.width/2, this.y+11*this.height/2);
		ctx.fillText("W: Move up", this.x-this.width/2, this.y+14*this.height/2);
		ctx.fillText("A: Move left", this.x-this.width/2, this.y+17*this.height/2);
		ctx.fillText("S: Move down", this.x-this.width/2, this.y+20*this.height/2);
		ctx.fillText("D: move right", this.x-this.width/2, this.y+23*this.height/2);
		ctx.fillText("Arrow keys: Shoot Dumblebeam", this.x-this.width/2, this.y+26*this.height/2);
		ctx.fillText("Spacebar: Use spell", this.x-this.width/2, this.y+29*this.height/2);
		ctx.fillText("Q: Drop Element 1", this.x-this.width/2, this.y+32*this.height/2);
		ctx.fillText("E: Drop Element 2", this.x-this.width/2, this.y+35*this.height/2);
		ctx.fillText("P: Pause game", this.x-this.width/2, this.y+38*this.height/2);
		ctx.fillText("How to play: ", this.x-this.width/2, this.y+41*this.height/2);
		ctx.fillText("Kill enemies! Acquire points! Pick up boxes to get elements!", this.x-this.width/2, this.y+44*this.height/2);
		ctx.fillText("Each element corresponds to a unique spell, and you can combine", this.x-this.width/2, this.y+47*this.height/2);
		ctx.fillText("up to 2 elements for MORE unique spells!!!", this.x-this.width/2, this.y+50*this.height/2);
		ctx.font = "16pt Arial";
		ctx.fillText("Back", this.bx, this.by);
		if(hX >= this.bx-10 && hX <=this.bx + 50 && hY <= this.by && hY>=this.by-this.height*7/6){
			ctx.strokeRect(this.bx-10, this.by-this.height*7/6, this.width * 3 + 10, this.height+10);
		}		
		if(cX >= this.bx-10 && cX <=this.bx + 50 && cY <= this.by && cY>=this.by-this.height*7/6){
			fastbeepsLow.currentTime=0;
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
		ctx.fillStyle = "white";
		ctx.font = "18pt Arial";
		ctx.strokeStyle = "white";
		ctx.fillText("Credits", this.x, this.y-this.height/2); 
		ctx.font = "16pt Arial";
		ctx.fillText("Creator/Developer:", this.x-this.width/2, this.y+4*this.height/2);
		ctx.fillText("Brett Davis", this.x-this.width/2, this.y+7*this.height/2);
		ctx.fillText("Art:",  this.x-this.width/2, this.y+12*this.height/2);
		ctx.fillText("Kyle Fleischer", this.x-this.width/2, this.y+15*this.height/2);
		ctx.fillText("Music and Sound:", this.x-this.width/2, this.y+20*this.height/2);
		ctx.fillText("Dave Gedarovich", this.x-this.width/2, this.y+23*this.height/2);
		ctx.fillText("Jack Van Oudenaren", this.x-this.width/2, this.y+26*this.height/2);
		ctx.fillText("Back", this.bx, this.by);
		if(hX >= this.bx-10 && hX <=this.bx + 50 && hY <= this.by && hY>=this.by-this.height*7/6){
			ctx.strokeRect(this.bx-10, this.by-this.height*7/6, this.width * 3 + 10, this.height+10);
		}		
		if(cX >= this.bx-10 && cX <=this.bx + 50 && cY <= this.by && cY>=this.by-this.height*7/6){
			fastbeepsLow.currentTime=0;
			fastbeepsLow.play();
			STATE = 0;
		}
}
};
var Pause = {
	x: canvas.width/2,
	y: canvas.height/2,
	width: 800,
	height: 576,
	draw: function(){
		ctx.globalAlpha = 1;
		ctx.fillStyle = "white";
		ctx.font = "18pt Arial";
		ctx.drawImage(menuBack, this.x-this.width/2, this.y-this.height/2);
		ctx.fillText("-Paused-", this.x-64, this.y-32);
		for(S in AllSounds){
			AllSounds[S].pause();
		}
		for(S in AllMusic){
			AllMusic[S].pause();
		}
	}
};
var Options = {
	x: 300,
	y: canvas.height/8,
	width: 20,
	height: 20,
	bx: 400-50,
	by: 560,
	dispControls: true,
	vol: true,
	Music: true,
	draw: function(){
		ctx.fillStyle = "white";
		ctx.font = "18pt Arial";
		ctx.strokeStyle = "white";
		ctx.fillText("Options", this.x, this.y-this.height/2); 
		ctx.font = "16pt Arial";
		if(hX >= this.x-20 && hX <=this.x + this.width*4 && hY <= this.y+5*this.height/2 && hY>=this.y+this.height/2){
			ctx.strokeRect(this.x-20, this.y + this.height, this.width * 6, this.height+10);
		}		
		if(cX >= this.x-20 && cX <=this.x + this.width*4 && cY <= this.y+5*this.height/2 && cY>=this.y+this.height/2){
			fastbeepsLow.currentTime=0;
			fastbeepsLow.play();
			if(this.vol == false){
				this.vol = true;
				cX = 0;
				cY = 0;
			}
			else if(this.vol == true){
				this.vol = false;
				cX = 0;
				cY = 0;
			}
		}
		if(this.vol == true){
			ctx.fillText("Sound: On", this.x-this.width/2, this.y+4*this.height/2);
			for(S in AllSounds){
				AllSounds[S].volume=0.8;
			}
		}
		if(this.vol == false){
			ctx.fillText("Sound: Off", this.x-this.width/2, this.y+4*this.height/2);
			for(S in AllSounds){
				AllSounds[S].volume=0;
			}
		}
		if(hX >= this.x-20 && hX <=this.x + this.width*5 && hY <= this.y+7*this.height/2 && hY>=this.y+4*this.height/2){
			ctx.strokeRect(this.x-20, this.y + 2.5*this.height, this.width * 6, this.height+10);
		}		
		if(cX >= this.x-20 && cX <=this.x + this.width*5 && cY <= this.y+7*this.height/2 && cY>=this.y+4*this.height/2){
			fastbeepsLow.currentTime=0;
			fastbeepsLow.play();
			if(this.Music == false){
				this.Music = true;
				cX = 0;
				cY = 0;
			}
			else if(this.Music == true){
				this.Music = false;
				cX = 0;
				cY = 0;
			}
		}
		if(this.Music == true){
			ctx.fillText("Music: On", this.x-this.width/2, this.y+7*this.height/2);
		}
		if(this.Music == false){
			ctx.fillText("Music: Off", this.x-this.width/2, this.y+7*this.height/2);
			for(M in AllMusic){
				AllMusic[M].currentTime=0;
				AllMusic[M].pause();
			}
		}
		if(hX >= this.x-20 && hX <=this.x + this.width*10 && hY <= this.y+10*this.height/2 && hY>=this.y+7*this.height/2){
			ctx.strokeRect(this.x-20, this.y + 4*this.height, this.width * 12, this.height+10);
		}		
		if(cX >= this.x-20 && cX <=this.x + this.width*10 && cY <= this.y+10*this.height/2 && cY>=this.y+7*this.height/2){
			fastbeepsLow.currentTime=0;
			fastbeepsLow.play();
			if(this.dispControls == false){
				this.dispControls = true;
				cX = 0;
				cY = 0;
			}
			else if(this.dispControls == true){
				this.dispControls = false;
				cX = 0;
				cY = 0;
			}
		}
		if(this.dispControls == true){
			ctx.fillText("Display Controls: Yes", this.x-this.width/2, this.y+10*this.height/2);
		}
		if(this.dispControls == false){
			ctx.fillText("Display Controls: No", this.x-this.width/2, this.y+10*this.height/2);
		}
		ctx.fillText("Back", this.bx, this.by);
		if(hX >= this.bx-10 && hX <=this.bx + 50 && hY <= this.by && hY>=this.by-this.height*7/6){
			ctx.strokeRect(this.bx-10, this.by-this.height*7/6, this.width * 3 + 10, this.height+10);
		}		
		if(cX >= this.bx-10 && cX <=this.bx + 50 && cY <= this.by && cY>=this.by-this.height*7/6){
			fastbeepsLow.currentTime=0;
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
			ctx.fillStyle = "yellow";
			ctx.fillRect(this.x - this.width/2 + 4, this.y - this.height/2 - this.height/4, this.width/4, this.height/4);
			ctx.fillRect(this.x - (this.width/2 - this.width/4)+5, this.y - this.height/2 - this.height/4, this.width/4, this.height/4);
			ctx.fillRect(this.x - (this.width/2 - this.width/2) + 6, this.y - this.height/2 - this.height/4, this.width/4, this.height/4);
		}
		else if(this.hp == 5){
			ctx.fillStyle = "yellow";
			ctx.fillRect(this.x - this.width/2 + 4, this.y - this.height/2 - this.height/4, this.width/4, this.height/4);
			ctx.fillRect(this.x - (this.width/2 - this.width/4)+5, this.y - this.height/2 - this.height/4, this.width/4, this.height/4);
			ctx.fillStyle = "red";
			ctx.fillRect(this.x - (this.width/2 - this.width/2) + 6, this.y - this.height/2 - this.height/4, this.width/4, this.height/4);
		}
		else if(this.hp == 4){
			ctx.fillStyle = "yellow";
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
				if(AllEnemies[E].onTree == 0){
					onDmg.currentTime=0;
					onDmg.play();
					this.dmg = true;
				}
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
	else{
		return contained(two, one);
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
		else if(M.text == "+ Water"){
			M.color = "0000FF";
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
	if(STATE != 1 && STATE != "Jungle"){
		ctx.drawImage(menuBack, 4, 4);
	}
	else if(STATE == 1){
		ctx.drawImage(backGround1, 0, 0);
	}
	else if(STATE == "Jungle"){
		ctx.drawImage(backGround2, 0, 0);
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
		if(spell1 == "Water"){
			spell = "Bubble Shield";
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
		if(spell2 == "Water"){
			spell = "Bubble Shield";
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
	if(spell1 == "Water" && spell2 == "Water"){
		spell = "Heavy Bubble Shield";
	}
	if((spell1 == "Water" && spell2 == "Fire") || (spell2 == "Water" && spell1 == "Fire")){
		spell = "Explosive Orbs";
	}
	if((spell1 == "Water" && spell2 == "Ice") || (spell2 == "Water" && spell1 == "Ice")){
		spell = "Frozen Orbs";
	}
	if((spell1 == "Water" && spell2 == "Earth") || (spell2 == "Water" && spell1 == "Earth")){
		spell = "Bubble Shield and Heal";
	}
	if((spell1 == "Water" && spell2 == "Lightning") || (spell2 == "Water" && spell1 == "Lightning")){
		spell = "Zap Trap";
	}
	if((spell1 == "Water" && spell2 == "Air") || (spell2 == "Water" && spell1 == "Air")){
		spell = "Bubble Blast";
	}
	if((spell1 == "Water" && spell2 == "Mystic") || (spell2 == "Water" && spell1 == "Mystic")){
		spell = "Bubblebeam";
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
	else if(spell1 == "Water"){
		spell1pic = Waterbox;
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
	else if(spell2 == "Water"){
		spell2pic = Waterbox;
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
	else if(spell == "Bubble Shield"){
		ctx.fillStyle = "black";
		ctx.font = "16pt Arial";
		ctx.fillText("Recharge: " + Math.round(water.cd/30) + "s", 32, 544);
	}
	else if(spell == "Heavy Bubble Shield"){
		ctx.fillStyle = "black";
		ctx.font = "16pt Arial";
		ctx.fillText("Recharge: " + Math.round(water.cd/30) + "s", 32, 544);
	}
	else if(spell == "Explosive Orbs"){
		ctx.fillStyle = "black";
		ctx.font = "16pt Arial";
		ctx.fillText("Recharge: " + Math.round(waterfire.cd/30) + "s", 32, 544);
	}
	else if(spell == "Frozen Orbs"){
		ctx.fillStyle = "black";
		ctx.font = "16pt Arial";
		ctx.fillText("Recharge: " + Math.round(waterfire.cd2/30) + "s", 32, 544);
	}
	else if(spell == "Bubble Shield and Heal"){
		ctx.fillStyle = "black";
		ctx.font = "16pt Arial";
		ctx.fillText("Recharge: " + Math.round(waterearth.cd/30) + "s", 32, 544);
	}
	else if(spell == "Zap Trap"){
		ctx.fillStyle = "black";
		ctx.font = "16pt Arial";
		ctx.fillText("Recharge: " + Math.round(waterlightning.cd/30) + "s", 32, 544);
	}
	else if(spell == "Bubble Blast"){
		ctx.fillStyle = "black";
		ctx.font = "16pt Arial";
		ctx.fillText("Recharge: " + Math.round(waterair.cd/30) + "s", 32, 544);
	}
	else if(spell == "Bubblebeam"){
		ctx.fillStyle = "black";
		ctx.font = "16pt Arial";
		ctx.fillText("Recharge: " + Math.round(mystic.cd/30) + "s", 32, 544);
	}
	ctx.fillStyle = "black";
	ctx.font = "16pt Arial";
	if(Options.dispControls == true){
		ctx.fillText("Q: Drop Spell 1", 576, 496);
		ctx.fillText("E: Drop Spell 2", 576, 528);
		ctx.fillText("Spacebar: Use spell", 576, 464);
		ctx.fillText("P: Pause", 576, 560);
	}
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
	if(keytimer > 0){
		keytimer-=1;
	}
	if(STATE == "PAUSE"){
		if (80 in keysDown && keytimer == 0){
			STATE = preSTATE;
			keytimer = 20;
			ctx.globalAlpha = 1;
		}
	}
	else{
		var Up = true;
		var Down = true;
		var Left = true;
		var Right = true;
		if (80 in keysDown && keytimer == 0){
			preSTATE = STATE;
			STATE = "PAUSE";
			keytimer = 20;
		}
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
		if(87 in keysDown){
			for(O in ObsList){
				if(collision("W", player, ObsList[O])){
					Up = false;
				}
			}
		}
		if(68 in keysDown){
			for(O in ObsList){
				if(collision("D", player, ObsList[O])){
					Right = false;
				}
			}
		}
		if(83 in keysDown){
			for(O in ObsList){
				if(collision("S", player, ObsList[O])){
					Down = false;
				}
			}
		}
		if(65 in keysDown){
			for(O in ObsList){
				if(collision("A", player, ObsList[O])){
					Left = false;
				}
			}
		}
		if (87 in keysDown && player.y - player.speed > 4 && Up == true){
			player.y-=player.speed;
			for(W in bubbleRotate){
				if(bubbleRotate[W].onScreen == 1){
					bubbleRotate[W].y-=player.speed;
				}
			}
			for(W in wairParticles){
				if(wairParticles[W].onScreen == 1){
					wairParticles[W].y-=player.speed;
				}
			}
			player.dir = "W";
		}
		if (65 in keysDown && player.x - player.speed > 4 && Left == true){
			player.x-=player.speed;
			for(W in bubbleRotate){
				if(bubbleRotate[W].onScreen == 1){
					bubbleRotate[W].x-=player.speed;
				}
			}
			for(W in wairParticles){
				if(wairParticles[W].onScreen == 1){
					wairParticles[W].x-=player.speed;
				}
			}
			player.dir = "A";
		}
		if (83 in keysDown && player.y + player.speed < canvas.height - 4 && Down == true){
			player.y+=player.speed;
			for(W in bubbleRotate){
				if(bubbleRotate[W].onScreen == 1){
					bubbleRotate[W].y+=player.speed;
				}
			}
			for(W in wairParticles){
				if(wairParticles[W].onScreen == 1){
					wairParticles[W].y+=player.speed;
				}
			}
			player.dir = "S";
		}
		if (68 in keysDown && player.x + player.speed < canvas.width - 4 && Right == true){
			player.x+=player.speed;
			for(W in bubbleRotate){
				if(bubbleRotate[W].onScreen == 1){
					bubbleRotate[W].x+=player.speed;
				}
			}
			for(W in wairParticles){
				if(wairParticles[W].onScreen == 1){
					wairParticles[W].x+=player.speed;
				}
			}
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
			if(spell1 == "Water"){
				water.shoot();
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
			if(spell2 == "Water"){
				water.shoot();
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
			if(spell1 == "Water" && spell2 == "Water"){
				water.shoot();
			}
			if((spell1 == "Water" && spell2 == "Earth") || (spell2 == "Water" && spell1 == "Earth")){
				waterearth.shoot();
			}
			if((spell1 == "Water" && spell2 == "Fire") || (spell2 == "Water" && spell1 == "Fire")){
				waterfire.shoot();
			}
			if((spell1 == "Water" && spell2 == "Ice") || (spell2 == "Water" && spell1 == "Ice")){
				waterfire.shoot();
			}
			if((spell1 == "Water" && spell2 == "Lightning") || (spell2 == "Water" && spell1 == "Lightning")){
				waterlightning.shoot();
			}
			if((spell1 == "Water" && spell2 == "Air") || (spell2 == "Water" && spell1 == "Air")){
				waterair.shoot();
			}
			if((spell1 == "Water" && spell2 == "Mystic") || (spell2 == "Water" && spell1 == "Mystic")){
				mystic.shoot();
			}
		}
	}
};
//--------------------------------------------------- Reset all Global Variables ----------------------------------------------------//
function reset(){
	window.location.reload(true);
}
//-------------------------------------------------------------- Game Over ----------------------------------------------------------//
function gameOver(){
	ctx.fillStyle = "white";
	ctx.globalAlpha = 1;
	ctx.font = "18pt Arial";
	var bx = 350;
	var by = 560;
	var width = 20;
	var height = 20;
	multiplier = 1;
	if(STATE != 5){
		ctx.fillText("Score: " + score, 320, 144);
	}
	if(highscore1 < score && nu == 1){
		$.jStorage.set("v5highscore5",highscore4);
		highscore5 = highscore4;
		$.jStorage.set("v5highscore4",highscore3);
		highscore4 = highscore3;
		$.jStorage.set("v5highscore3",highscore2);
		highscore3 = highscore2;
		$.jStorage.set("v5highscore2",highscore1);
		highscore2 = highscore1;
		$.jStorage.set("v5highscore1",score);
		highscore1 = score;
		hs = 1;
		nu = 0;
	}
	else if(highscore2 < score && nu == 1){
		$.jStorage.set("v5highscore5",highscore4);
		highscore5 = highscore4;
		$.jStorage.set("v5highscore4",highscore3);
		highscore4 = highscore3;
		$.jStorage.set("v5highscore3",highscore2);
		highscore3 = highscore2;
		$.jStorage.set("v5highscore2",score);
		highscore2 = score;
		hs = 1;
		nu = 0;
	}
	else if(highscore3 < score && nu == 1){
		$.jStorage.set("v5highscore5",highscore4);
		highscore5 = highscore4;
		$.jStorage.set("v5highscore4",highscore3);
		highscore4 = highscore3;
		$.jStorage.set("v5highscore3",score);
		highscore3 = score;
		hs = 1;
		nu = 0;
	}
	else if(highscore4 < score && nu == 1){
		$.jStorage.set("v5highscore5",highscore4);
		highscore5 = highscore4;
		$.jStorage.set("v5highscore4",score);
		highscore4 = score;
		hs = 1;
		nu = 0;
	}
	else if(highscore5 < score && nu == 1){
		$.jStorage.set("v5highscore5",score);
		highscore5 = score;
		hs = 1;
		nu = 0;
	}
	if(hs == 1){
		ctx.fillStyle = "red";
		ctx.font = "18pt Arial";
		ctx.fillText("New High Score!!", 360, 64);
	}
	ctx.fillStyle = "white";
	ctx.strokeStyle = "white";
	ctx.font = "18pt Arial";
	ctx.fillText("Version 0.5.4: April 5 2012", 244, 96);
	ctx.fillText("High Scores:", 308, 208);
	ctx.fillText("1st: " + highscore1, 308, 240);
	ctx.fillText("2nd: " + highscore2, 308, 272);
	ctx.fillText("3rd: " + highscore3, 308, 304);
	ctx.fillText("4th: " + highscore4, 308, 336);
	ctx.fillText("5th: " + highscore5, 308, 368);
	ctx.font = "16pt Arial";
	ctx.fillText("Back", bx, by);
	if(hX >= bx-10 && hX <=bx + 50 && hY <= by && hY>=by-height*7/6){
		ctx.strokeRect(bx-10, by-height*7/6, width * 3 + 10, height+10);
	}		
	if(cX >= bx-10 && cX <=bx + 50 && cY <= by && cY>=by-height*7/6){
		cX=0;
		cY=0;
		score = 0;
		fastbeepsLow.currentTime=0;
		fastbeepsLow.play();
		reset();
	}	
}
//---------------------------------------------------------- Music Player -----------------------------------------------------------//
function MusicPlayer(){
if(Options.Music==true && STATE != "PAUSE"){
	if(STATE == 1 && treeWizz.onScreen == 0){
		DumblebeatsNormal.currentTime=0;
		Spells.currentTime=0;
		DumblebeatsNormal.pause();
		Spells.pause();
		BadWizards.currentTime=0;
		BadWizards.pause();
		OverwhelmedByGoblins.play();
	}
	else if(STATE == "Jungle"){
		OverwhelmedByGoblins.currentTime=0;
		Spells.currentTime=0;
		OverwhelmedByGoblins.pause();
		Spells.pause();
		BadWizards.currentTime=0;
		BadWizards.pause();
		DumblebeatsNormal.play();
	}
	else if(treeWizz.onScreen==1){
		OverwhelmedByGoblins.currentTime=0;
		Spells.currentTime=0;
		OverwhelmedByGoblins.pause();
		Spells.pause();
		DumblebeatsNormal.currentTime=0;
		DumblebeatsNormal.pause();
		BadWizards.play();
	}
	else{
		DumblebeatsNormal.currentTime=0;
		DumblebeatsNormal.pause();
		OverwhelmedByGoblins.currentTime=0;
		OverwhelmedByGoblins.pause();
		BadWizards.currentTime=0;
		BadWizards.pause();
		Spells.play();
	}
}
}
//---------------------------------------------------------- Big-Bang ---------------------------------------------------------------//
setInterval(function(){
	clear();
	MusicPlayer();
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
	else if(STATE == "PAUSE"){
		keys();
		Pause.draw();
	}
	else if(STATE == 6){
		Options.draw();
	}
	else if(STATE == 1 || STATE == "Jungle"){
		if(player.hp <= 0){
			STATE = 4;
			nu = 1;
		}
		else{
			keys();
			multiply();
			player.draw();
			player.onhit();
			rePlant();
			for(B in Boxes){
				Boxes[B].draw();
				pickup(Boxes[B]);
			}
			for(H in hpParticles){
				hpParticles[H].draw();
				hpParticles[H].onHit();
				HpMove(hpParticles[H]);
				HpAi(hpParticles[H]);
			}
			for(B in Bullets){
				drawBullet(Bullets[B]);
				Bulletmove(Bullets[B]);
			}
			for(F in AllFire){
				AllFire[F].draw();
				AllFire[F].move();
			}
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
			//All Tick spells, in mystic class do to imports
			for(T in Ticks){
				Ticks[T].tick();
			}		
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
			for(A in Air1Air2){
				Air1Air2[A].draw();
				Air1Air2[A].effect();
			}		
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
			Mice.draw();
			Mice.move();
			Mice2.draw();
			Mice2.move();
			Mice3.draw();
			Mice3.move();
			Mice4.draw();
			Mice4.move();
			mystic2.draw();
			mystic2.move();
			Illusion.draw();
			Illusion.shoot();
			IllusionBlast.draw();
			IllusionBlast.move();
			
			for(W in bubbleRotate){
				bubbleRotate[W].draw();
				bubbleRotate[W].effect();
			}
			for(W in waterFires){
				waterFires[W].draw();
				waterFires[W].effect();
			}
			for(W in WFires){
				WFires[W].draw();
				WFires[W].move();
			}
			for(I in IBubbles){
				IBubbles[I].draw();
				IBubbles[I].move();
			}
			
			waterair.draw();
			for(W in wairParticles){
				wairParticles[W].draw();
				wairParticles[W].onHit();
				HpAi(wairParticles[W]);
				HpMove(wairParticles[W]);
			}
			for(W in Wpools){
				Wpools[W].draw();
				Wpools[W].move();
			}
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
				if(AllEnemies[E].onTree == 0){
					AllEnemies[E].draw();
				}
				move(AllEnemies[E]);
				AI(AllEnemies[E]);
				spawn(AllEnemies[E]);
			}
			Thief.steal();
			ThiefA.steal();
			ThiefB.steal();
		
			Spawner.fire();
			SmokeBomb.draw();
			SmokeBombA.draw();
			SmokeBombB.draw();
			for(O in allObs){
				drawObstacle(allObs[O]);
				obsTick(allObs[O]);
			}
			if(STATE == "Jungle" && jungleAni == true){
				for(O in obstacle1){
					if(obstacle1[O].growTimer > 0){
						obstacle1[O].growTimer-=1;
					}
					else if(obstacle1[O].index<12){
						obstacle1[O].index+=1;
					}
				}
			}
			for(E in AllEnemies){
				if(AllEnemies[E].onTree == 1){
					AllEnemies[E].draw();
				}
			}
			TwizEffect.draw();
			
			UI();
			SCORE();
			
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