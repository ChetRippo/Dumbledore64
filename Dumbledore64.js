 /*
	Version 0.8.0 Changes(6/7/2012):
		-Bug fixes:
			-Fixed bug where after having a spell stolen fire, ice, dash, and bubble ring would not work
		-Balancing:
			-Reset High Scores
		-Additions:
			-3D mode now saves with scores- if you got a score in 3d mode, glasses are displayed next to the name
			-Added new HP bar graphics
			-Added new loading screen graphics (preloaded before script)
			-Changed loading bar mechanics:
				-Does not preload sounds due to size limit
				-Does not preload all graphics, cache limit is approx. 425 images
				-Extra content -should- be ready by the time game starts
			-Added new graphics for the score
			
			
	TODO:
		-Bugs/Other
			-High Priority:
			-Maybe issues:
				-Game effect freezes on thief boss kill sometimes (maybe fixed)
				-Boosters not working?
				-obs always take 1 dmg, maybe an issue?
				-Make multiples of sound effects so that hitting a bunch of people wont clip it (pierce through shots etc)
				-Ice spells make jungle trees transparent *Don't know how to fix yet*
				-Loading bar doesn't preload everything (sounds, only 400 graphics, load graphics, etc)
			-Backlog:
		-Optimize
			-Make speeds a list of factors so that multiple things can effect it easier
			-Remove division
		-Map System
		-Sandbox Mode
		-Spells
			-Summon (?)
				-Minions
		-More enemies and AI **NOTE: ADD ALL MOVING ENEMIES TO ICELIGHTNING ARRAY AND RESET ICE LIGHTNING**
			-Boss that takes you to desert from fire level
				-Genie
				-On a timer (temporarily at least)
		-Terrain
			-Tier 3: Desert, Graveyard
				-Desert level
					-Heavy sandstorm winds occasionally
					-Banditos?
					-Cacti obstacles, maybe also enemies
				-Graveyard level
					-Day/night cycle
			-Each level has its own element drops and enemies
				Forest = Earth(rare), Water, Air?
*/
//------------------------------------------------- Player --------------------------------------------------------------------------//
// Player
var player = {
	x: 400,
	y: 256,
	width: 32,
	height: 32,
	speed: 8,
	speed2: 2,
	dirct: 0,
	hp: 3,
	maxhp: 3,
	power: 1,
	currpower: 1,
	dmg: false,
	dir: "W",
	LR: "",
	zapIndex: 1,
	lucky: false,
	shadowed: false,
	// Draws the player on the canvas when called
	draw: function(){
		// Flash if the player has been hit
		if (hptimer/2 != Math.round(hptimer/2)){
			if(this.dir == "WA" || this.dir == "AS" || this.dir == "A"){
				this.LR = "Left";
				ctx.drawImage(Wizzurd2, this.x - this.width / 2, this.y - this.height / 2);
			}
			else if(this.dir == "WD" || this.dir == "SD" || this.dir == "D"){
				ctx.drawImage(Wizzurd2R, this.x - this.width / 2, this.y - this.height / 2);
				this.LR = "Right";
			}
			else if(this.LR == "Left"){
				ctx.drawImage(Wizzurd2, this.x - this.width / 2, this.y - this.height / 2);
			}
			else{
				ctx.drawImage(Wizzurd2R, this.x - this.width / 2, this.y - this.height / 2);
			}
		}
		else if(waterlightning.onScreen == 1){
			if(this.dir == "WA" || this.dir == "AS" || this.dir == "A"){
				this.LR = "Left";
				ctx.drawImage(ZapTrapL[this.zapIndex], this.x - this.width / 2, this.y - this.height / 2);
			}
			else if(this.dir == "WD" || this.dir == "SD" || this.dir == "D"){
				ctx.drawImage(ZapTrapR[this.zapIndex], this.x - this.width / 2, this.y - this.height / 2);
				this.LR = "Right";
			}
			else if(this.LR == "Left"){
				ctx.drawImage(ZapTrapL[this.zapIndex], this.x - this.width / 2, this.y - this.height / 2);
			}
			else{
				ctx.drawImage(ZapTrapR[this.zapIndex], this.x - this.width / 2, this.y - this.height / 2);
			}
			this.zapIndex++;
			if(this.zapIndex > 5){
				this.zapIndex = 1;
			}
		}
		else{
			if(this.dir == "WA" || this.dir == "AS" || this.dir == "A"){
				this.LR = "Left";
				//Check speed instead of water collision to use less system shit
				if(this.speed ==4 && STATE == "Swamp"){
					ctx.drawImage(swimWizzL, this.x - this.width / 2, this.y - this.height / 2);
				}
				else if(STATE == "Jungle" && player.shadowed){
					ctx.drawImage(shadeWizzL, this.x - this.width / 2, this.y - this.height / 2);
				}
				else{
					ctx.drawImage(WizzurdL, this.x - this.width / 2, this.y - this.height / 2);
				}
			}
			else if(this.dir == "WD" || this.dir == "SD" || this.dir == "D"){
				if(this.speed ==4 && STATE == "Swamp"){
					ctx.drawImage(swimWizzR, this.x - this.width / 2, this.y - this.height / 2);
				}
				else if(STATE == "Jungle" && player.shadowed){
					ctx.drawImage(shadeWizzR, this.x - this.width / 2, this.y - this.height / 2);
				}
				else{
					ctx.drawImage(WizzurdR, this.x - this.width / 2, this.y - this.height / 2);
				}
				this.LR = "Right";
			}
			else if(this.LR == "Left"){
				if(this.speed ==4 && STATE == "Swamp"){
					ctx.drawImage(swimWizzL, this.x - this.width / 2, this.y - this.height / 2);
				}
				else if(STATE == "Jungle" && player.shadowed){
					ctx.drawImage(shadeWizzL, this.x - this.width / 2, this.y - this.height / 2);
				}
				else{
					ctx.drawImage(WizzurdL, this.x - this.width / 2, this.y - this.height / 2);
				}
			}
			else{
				if(this.speed ==4 && STATE == "Swamp"){
					ctx.drawImage(swimWizzR, this.x - this.width / 2, this.y - this.height / 2);
				}
				else if(STATE == "Jungle" && player.shadowed){
					ctx.drawImage(shadeWizzR, this.x - this.width / 2, this.y - this.height / 2);
				}
				else{
					ctx.drawImage(WizzurdR, this.x - this.width / 2, this.y - this.height / 2);
				}
			}
		}
		if(!this.shadowed){
			hpBarDraw(this);
		}
	},
	onhit: function(){
		if(this.dirct > 0){
			this.dirct-=1;
		}
		if(hptimer > 0){
			hptimer-=1;
		}
		else{
			for(E in AllEnemies){
				if(collision(AllEnemies[E].dir, AllEnemies[E], this) || collision(this.dir, this, AllEnemies[E])){
					if(AllEnemies[E].onTree == 0){
						if(darkwater.onScreen == 1){
							darkwater.hptimer = 20;
							darkwater.hp-=1;
							hptimer = 20;
							onHit(AllEnemies[E]);
						}
						else{
							onDmg.currentTime=0;
							onDmg.play();
							this.dmg = true;
						}
					}
				}
			}
			for(E in EMeteors){
				if(collision(EMeteors[E].dir, EMeteors[E], this) || collision(this.dir, this, EMeteors[E])){
					if(EMeteors[E].timeLeft > 0){
						if(darkwater.onScreen == 1){
							darkwater.hptimer = 20;
							darkwater.hp-=1;
							hptimer = 20;
						}
						else{
							onDmg.currentTime=0;
							onDmg.play();
							this.dmg = true;
						}
					}
				}
			}
			if(STATE == "Scorched"){
				for(O in ObsList){
					if(collision(this.dir, this, ObsList[O])){
						if(darkwater.onScreen == 1){
							darkwater.hptimer = 20;
							darkwater.hp-=1;
							hptimer = 20;
							obsHit(ObsList[O]);
						}
						else{
							onDmg.currentTime=0;
							onDmg.play();
							this.dmg = true;
						}
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
	},
	//Handle speed, swamp only
	speedHandle: function(){
		for(O in obstacle1){
			if(obstacle1[O].LR == "Right"){
				obstacle1[O].x+=256;
				obstacle1[O].y-=64;
				obstacle1[O].width+=64;
			}
			else{
				obstacle1[O].x-=256;
				obstacle1[O].y-=64;
				obstacle1[O].width+=64;
			}
			if(collision(this.dir, this, obstacle1[O])){
				this.speed = 8;
				var noswim = true;
			}
			if(obstacle1[O].LR == "Right"){
				obstacle1[O].x-=256;
				obstacle1[O].y+=64;
				obstacle1[O].width-=64;
			}
			else{
				obstacle1[O].x+=256;
				obstacle1[O].y+=64;
				obstacle1[O].width-=64;
			}
		}
		for(O in obstacle2){
			obstacle2[O].x+=32;
			obstacle2[O].y+=obstacle2[O].height/2;
			if(collision("D", this, obstacle2[O]) || collision("A", this, obstacle2[O]) || collision("S", this, obstacle2[O]) || collision("W", this, obstacle2[O])){
				this.speed = 8;
				var noswim = true;
			}
			obstacle2[O].x-=32;
			obstacle2[O].y-=obstacle2[O].height/2;
		}
		if(!noswim){
			this.speed = 4;
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
			ctx.fillStyle = "#0404B4";
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
			ctx.fillStyle = "#0404B4";
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
			this.cast-=1;
			treeWizz.speed = treeWizz.speed2*2;
			this.onScreen = 0;
		}
	}
}
var SorcCastingBar = {
	x: -100,
	y: -200,
	width: Sorceror.width,
	height: Sorceror.height/4,
	width2: 0,
	onScreen: 0,
	cast: -1,
	castmax: 0,
	draw: function(){
		this.x = Sorceror.x - Sorceror.width/2;
		this.y = Sorceror.y + Sorceror.height/2;
		if(this.onScreen == 1){
			ctx.fillStyle = "#0404B4";
			ctx.strokeStyle = "black";
			ctx.strokeRect(this.x, this.y, this.width, this.height);
			ctx.fillRect(this.x + 2, this.y + 2, this.width2, this.height - 2);
		}
	},
	tick: function(){
		if(this.cast > 0){
			Sorceror.speed = 0;
			this.cast-=1;
			this.width2 = this.cast/this.castmax * this.width;
		}
		if(this.cast == 0){
			this.cast-=1;
			Sorceror.speed = Sorceror.speed2*2;
			this.onScreen = 0;
		}
	}
}
//------------------------------------------------- Collision Detection -------------------------------------------------------------//
// Collision detection
function collision(dir, one, two){
	if(STATE == "Swamp"){
		if((one == obstacle11 || one == obstacle12 || one == obstacle13 || one == obstacle14 || one == obstacle15 || one == obstacle16 || one == obstacle17 || one == obstacle18 || 
			two == obstacle11 || two == obstacle12 || two == obstacle13 || two == obstacle14 || two == obstacle15 || two == obstacle16 || two == obstacle17 || two == obstacle18 ||
			two == obstacle21 || two == obstacle22 || two == obstacle23 || two == obstacle24 || one == obstacle21 || one == obstacle22 || one == obstacle23 || one == obstacle24)
			&& one != player && two != player && one != Croc && two != Croc && one != Croc2 && two != Croc2 && one != Enemy && two != Enemy && one != EnemyB && two != EnemyB){
			return false;
		}
	}
	if(STATE == "Jungle"){
		if(one == obstacle11 || one == obstacle12 || one == obstacle13 || one == obstacle14 || one == obstacle15 || one == obstacle16 || one == obstacle17 || one == obstacle18 || 
			two == obstacle11 || two == obstacle12 || two == obstacle13 || two == obstacle14 || two == obstacle15 || two == obstacle16 || two == obstacle17 || two == obstacle18){
			if(one.fallIndex == 46 || two.fallIndex == 46){
				return false;
			}
		}
	}
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
//dragon flame
function Hcontained(a, b){
	if(a.y >= b.y-b.height/2 && a.y <= b.y + b.height/2 && a.x <= b.x + b.width/2 && a.x >= b.x-b.width/2){
		return true;
	}
	else{
		return false;
	}
}
//------------------------------------------------------ Other Functions ------------------------------------------------------------//
//DiffDir for rootstrike
function DiffDir(dir){
	if(dir == "W"){
		if(Math.floor(Math.random() * 2) + 1 == 2){
			return "A";
		}
		else{
			return "D";
		}
	}
	else if(dir == "A"){
		if(Math.floor(Math.random() * 2) + 1 == 2){
			return "W";
		}
		else{
			return "S";
		}
	}
	else if(dir == "S"){
		if(Math.floor(Math.random() * 2) + 1 == 2){
			return "A";
		}
		else{
			return "D";
		}
	}
	else if(dir == "D"){
		if(Math.floor(Math.random() * 2) + 1 == 2){
			return "W";
		}
		else{
			return "S";
		}
	}
	else if(dir == "WD"){
		if(Math.floor(Math.random() * 2) + 1 == 2){
			return "WA";
		}
		else{
			return "SD";
		}
	}
	else if(dir == "AS"){
		if(Math.floor(Math.random() * 2) + 1 == 2){
			return "AS";
		}
		else{
			return "WA";
		}
	}
	else if(dir == "WA"){
		if(Math.floor(Math.random() * 2) + 1 == 2){
			return "AS";
		}
		else{
			return "WD";
		}
	}
	else if(dir == "SD"){
		if(Math.floor(Math.random() * 2) + 1 == 2){
			return "AS";
		}
		else{
			return "WD";
		}
	}
}
function hpBarDraw(H){
	if(H.hp > 0){
		if(H.type == "MasterThief"){
			var G = 4;
		}
		else{
			var G = 2;
		}
		ctx.drawImage(hpBarGraphics[H.hp], H.x - (H.width/G), H.y - H.height/G - H.height/4);
	}
}
//------------------------------------------------- Point and Element Markers -------------------------------------------------------//
// Fancyness
var marker = {
	color: "#00FF00",
	speed: 4,
	timeLeft: 0,
	x: -100,
	y: -100,
	points: 0,
	mult: 1
};

var marker2 = {
	color: "#00FF00",
	speed: 4,
	timeLeft: 0,
	x: -100,
	y: -100,
	points: 0,
	mult: 1
};

var marker3 = {
	color: "#00FF00",
	speed: 4,
	timeLeft: 0,
	x: -100,
	y: -100,
	points: 0,
	mult: 1
};

var marker4 = {
	color: "#00FF00",
	speed: 4,
	timeLeft: 0,
	x: -100,
	y: -100,
	points: 0,
	mult: 1
};
var markerlist = {1: marker, 2: marker2, 3: marker3, 4: marker4};
var typemarker = {
	color: "#00FF00",
	speed: 4,
	timeLeft: 0,
	x: -100,
	y: -100,
	text: ""
};

var typemarker2 = {
	color: "#00FF00",
	speed: 4,
	timeLeft: 0,
	x: -100,
	y: -100,
	text: ""
};

var typemarker3 = {
	color: "#00FF00",
	speed: 4,
	timeLeft: 0,
	x: -100,
	y: -100,
	text: ""
};

var typemarker4 = {
	color: "#00FF00",
	speed: 4,
	timeLeft: 0,
	x: -100,
	y: -100,
	text: ""
};

var typemarker5 = {
	color: "#00FF00",
	speed: 4,
	timeLeft: 0,
	x: -100,
	y: -100,
	text: ""
};

var typemarker6 = {
	color: "#00FF00",
	speed: 4,
	timeLeft: 0,
	x: -100,
	y: -100,
	text: ""
};
var typemarkerlist = {1: typemarker, 2: typemarker2, 3: typemarker3, 4: typemarker4, 5: typemarker5, 6: typemarker6};
function drawtypeMarker(M){
	if(M.timeLeft == 0){
		M.x = -100;
		M.y = -100;
	}
	if (M.timeLeft != 0){
		if(M.text == "+ Air" || M.text == "+ Time"){
			M.color = "#D0D0D0";
		}
		else if(M.text == "+ Fire"){
			M.color = "#CC0000";
		}
		else if(M.text == "+ Ice"){
			M.color = "#00FFFF";
		}
		else if(M.text == "+ Lightning"){
			M.color = "yellow";
		}
		else if(M.text == "+ Earth"){
			M.color = "#33FF00";
		}
		else if(M.text == "+ Mystic"){
			M.color = "#663399";
		}
		else if(M.text == "+ Water"){
			M.color = "#0000FF";
		}
		else if(M.text == "+ Dark"){
			M.color = "black";
		}
		else if(M.text == "Dead!"){
			M.color = "#CC0000";
		}
		else if(M.text == "Stolen!"){
			M.color = "yellow";
		}
		else if(M.text == "+1"){
			M.color = "#00FFFF";
		}
		else if(M.text == "+ Max Hp" || M.text == "+ Damage" || M.text == "+ Luck"){
			M.color = colorz[colorNum];
			colorNum++;
			if(colorNum > 6){
				colorNum = 1;
			}
		}
		ctx.fillStyle = M.color;
		if(M.text == "+1"){
			ctx.font = "18pt Arial";
		}
		else{
			ctx.font = "32pt Arial";
		}
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
			M.color = "#00FF00";
		}
		else if(M.mult == 2){
			M.color = "#FFFF00";
		}
		else if(M.mult == 3){
			M.color = "#FF6600";
		}
		else if(M.mult == 4){
			M.color = "#CC0000";
		}
		else if(M.mult >= 5){
			M.color = "#FF99FF";
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
		staticm = 1;
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
	if(gameReady && STATE != 1 && STATE != "Jungle" && STATE != "Scorched" && STATE != "Swamp"){
		ctx.drawImage(menuBack, 0, 0);
	}
	else if(STATE == 1){
		ctx.drawImage(backGround1, 0, 0);
	}
	else if(STATE == "Jungle"){
		ctx.drawImage(backGround2, 0, 0);
	}
	else if(STATE == "Scorched"){
		ctx.drawImage(backGround3, 0, 0);
	}
	else if(STATE == "Swamp"){
		if(Swindex < 15){
			ctx.drawImage(backGround2, 0, 0);
			ctx.globalAlpha = Alpha*1/(60-swampIndex);
			ctx.drawImage(swampbkg1, 0, 0 - swampIndex*2.4);
			ctx.glonalAlpha = Alpha;
			Swindex++;
		}
		else if(Swindex < 30){
			ctx.drawImage(backGround2, 0, 0);
			ctx.globalAlpha = Alpha*1/(60-swampIndex);
			ctx.drawImage(swampbkg2, 0, 0- swampIndex*2.4);
			ctx.glonalAlpha = Alpha;
			Swindex++;
		}
		else if(Swindex < 45){
			ctx.drawImage(backGround2, 0, 0);
			ctx.globalAlpha = Alpha*1/(60-swampIndex);
			ctx.drawImage(swampbkg3, 0, 0- swampIndex*2.4);
			ctx.glonalAlpha = Alpha;
			Swindex++;
		}
		else if(Swindex < 60){
			ctx.drawImage(backGround2, 0, 0);
			ctx.globalAlpha = Alpha*1/(60-swampIndex);
			ctx.drawImage(swampbkg4, 0, 0- swampIndex*2.4);
			ctx.glonalAlpha = Alpha;
			Swindex++;
		}
		else{
			ctx.drawImage(backGround2, 0, 0);
			ctx.globalAlpha = Alpha*1/(60-swampIndex);
			ctx.drawImage(swampbkg1, 0, 0- swampIndex*2.4);
			ctx.glonalAlpha = Alpha;
			Swindex=0;
		}
	}
};
//----------------------------------------------------- Score -----------------------------------------------------------------------//
function SCORE(){
	var ScoreUI = Aes.Ctr.decrypt(Error, ErrorLogs, 256);
	var digits = 0;
	var i = 0;
	for(S in ScoreUI){
		digits++;
	}
	ctx.fillStyle = "#0a1655";
	ctx.globalAlpha = Alpha*0.6;
	ctx.fillRect(56, 48, 36+16*(digits-2), 28);
	ctx.globalAlpha = Alpha;
	ctx.drawImage(ScoreLeft, 48, 48);
	while(i <= digits){
		if(ScoreUI[i] == 0){
			ctx.drawImage(Scorezero, 60+16*i, 52);
		}
		else if(ScoreUI[i] == 1){
			ctx.drawImage(Scoreone, 60+16*i, 52);
		}
		else if(ScoreUI[i] == 2){
			ctx.drawImage(Scoretwo, 60+16*i, 52);
		}
		else if(ScoreUI[i] == 3){
			ctx.drawImage(Scorethree, 60+16*i, 52);
		}
		else if(ScoreUI[i] == 4){
			ctx.drawImage(Scorefour, 60+16*i, 52);
		}
		else if(ScoreUI[i] == 5){
			ctx.drawImage(Scorefive, 60+16*i, 52);
		}
		else if(ScoreUI[i] == 6){
			ctx.drawImage(Scoresix, 60+16*i, 52);
		}
		else if(ScoreUI[i] == 7){
			ctx.drawImage(Scoreseven, 60+16*i, 52);
		}
		else if(ScoreUI[i] == 8){
			ctx.drawImage(Scoreeight, 60+16*i, 52);
		}
		else if(ScoreUI[i] == 9){
			ctx.drawImage(Scorenine, 60+16*i, 52);
		}
		i++;
	}
	ctx.drawImage(ScoreRight, 60+16*(i-1), 48);
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
			ctx.globalAlpha = Alpha;
		}
	}
	else if(player.hp>0){
		//Fix enemy snap
		player.x = Math.floor(player.x);
		player.y = Math.floor(player.y);
		if(Math.round(player.x/4) != player.x/4 && player.speed/4 == Math.round(player.speed/4)){
			player.x+=1;
			for(W in bubbleRotate){
				if(bubbleRotate[W].onScreen == 1){
					bubbleRotate[W].x+=1;
				}
			}
			for(W in wairParticles){
				if(wairParticles[W].onScreen == 1){
					wairParticles[W].x+=1;
				}
			}
		}
		if(Math.round(player.y/4) != player.y/4 && player.speed/4 == Math.round(player.speed/4)){
			player.y+=1;
			for(W in bubbleRotate){
				if(bubbleRotate[W].onScreen == 1){
					bubbleRotate[W].y+=1;
				}
			}
			for(W in wairParticles){
				if(wairParticles[W].onScreen == 1){
					wairParticles[W].y+=1;
				}
			}
		}
		var Up = true;
		var Down = true;
		var Left = true;
		var Right = true;
		if (80 in keysDown && keytimer == 0){
			preSTATE = STATE;
			STATE = "PAUSE";
			keytimer = 20;
		}
		if (87 in keysDown && player.dirct <= 0){
			player.dir = "W";
		}
		if (65 in keysDown && player.dirct <= 0){
			player.dir = "A";
		}
		if (83 in keysDown && player.dirct <= 0){
			player.dir = "S";
		}
		if (68 in keysDown && player.dirct <= 0){
			player.dir = "D";
		}
		if(87 in keysDown && player.dirct <= 0){
			if(STATE != "Swamp"){
				for(O in ObsList){
					if(collision("W", player, ObsList[O])){
						Up = false;
					}
				}
			}
		}
		if(68 in keysDown && player.dirct <= 0){
			if(STATE != "Swamp"){
				for(O in ObsList){
					if(collision("D", player, ObsList[O])){
						Right = false;
					}
				}
			}
		}
		if(83 in keysDown && player.dirct <= 0){
			if(STATE != "Swamp"){
				for(O in ObsList){
					if(collision("S", player, ObsList[O])){
						Down = false;
					}
				}
			}
		}
		if(65 in keysDown && player.dirct <= 0){
			if(STATE != "Swamp"){
				for(O in ObsList){
					if(collision("A", player, ObsList[O])){
						Left = false;
					}
				}
			}
		}
		if ((87 in keysDown || (player.dirct > 0 && player.dir == "W")) && player.y - player.speed > 4 && Up == true){
			if(player.dirct <= 0 || player.dir == "W"){
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
		}
		if ((65 in keysDown || (player.dirct > 0 && player.dir == "A")) && player.x - player.speed > 4 && Left == true){
			if(player.dirct <= 0 || player.dir == "A"){
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
		}
		if ((83 in keysDown || (player.dirct > 0 && player.dir == "S")) && player.y + player.speed < canvas.height - 4 && Down == true){
			if(player.dirct <= 0 || player.dir == "S"){
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
		}
		if ((68 in keysDown || (player.dirct > 0 && player.dir == "D")) && player.x + player.speed < canvas.width - 4 && Right == true){
			if(player.dirct <= 0 || player.dir == "D"){
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
				if(prevSpellRC[1] == "N/A"){
					prevSpellRC[1] = spell;
				}
				else if(prevSpellRC[2] == "N/A"){
					prevSpellRC[2] = spell;
				}
				else if(prevSpellRC[3] == "N/A"){
					prevSpellRC[3] = spell;
				}
				else if(prevSpellRC[4] == "N/A"){
					prevSpellRC[4] = spell;
				}
				else if(prevSpellRC[5] == "N/A"){
					prevSpellRC[5] = spell;
				}
				else if(prevSpellRC[6] == "N/A"){
					prevSpellRC[6] = spell;
				}
				else if(prevSpellRC[7] == "N/A"){
					prevSpellRC[7] = spell;
				}
				else if(prevSpellRC[8] == "N/A"){
					prevSpellRC[8] = spell;
				}
				spell1 = "N/A";
				spell = spell2;
			}
		}
		if(69 in keysDown){
			if(spell2 != "N/A"){
				if(prevSpellRC[1] == "N/A"){
					prevSpellRC[1] = spell;
				}
				else if(prevSpellRC[2] == "N/A"){
					prevSpellRC[2] = spell;
				}
				else if(prevSpellRC[3] == "N/A"){
					prevSpellRC[3] = spell;
				}
				else if(prevSpellRC[4] == "N/A"){
					prevSpellRC[4] = spell;
				}
				else if(prevSpellRC[5] == "N/A"){
					prevSpellRC[5] = spell;
				}
				else if(prevSpellRC[6] == "N/A"){
					prevSpellRC[6] = spell;
				}
				else if(prevSpellRC[7] == "N/A"){
					prevSpellRC[7] = spell;
				}
				else if(prevSpellRC[8] == "N/A"){
					prevSpellRC[8] = spell;
				}
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
			if(spell1 == "Dark"){
				dark.shoot();
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
			if(spell2 == "Dark"){
				dark.shoot();
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
			if(spell1 == "Dark" && spell2 == "Dark"){
				dark2.shoot();
			}
			if((spell1 == "Dark" && spell2 == "Earth") || (spell2 == "Dark" && spell1 == "Earth")){
				darkearth.shoot();
			}
			if((spell1 == "Dark" && spell2 == "Fire") || (spell2 == "Dark" && spell1 == "Fire")){
				darkfire.shoot();
			}
			if((spell1 == "Dark" && spell2 == "Ice") || (spell2 == "Dark" && spell1 == "Ice")){
				darkice.shoot();
			}
			if((spell1 == "Dark" && spell2 == "Lightning") || (spell2 == "Dark" && spell1 == "Lightning")){
				darklightning.shoot();
			}
			if((spell1 == "Dark" && spell2 == "Air") || (spell2 == "Dark" && spell1 == "Air")){
				darkair.shoot();
			}
			if((spell1 == "Dark" && spell2 == "Mystic") || (spell2 == "Dark" && spell1 == "Mystic")){
				mystic.shoot();
			}
			if((spell1 == "Dark" && spell2 == "Water") || (spell2 == "Dark" && spell1 == "Water")){
				darkwater.shoot();
			}
		}
	}
};
//---------------------------------------------------------- Music Player -----------------------------------------------------------//
function MusicPlayer(){
if(Music==2 && STATE != "PAUSE"){
	if(STATE == 1 && treeWizz.onScreen == 0 && Dragon.onScreen == 0){
		DumblebeatsNormal.pause();
		Spells.pause();
		BadWizards.pause();
		swampSong.pause();
		CaseysQuest.pause();
		OverwhelmedByGoblins.play();
	}
	else if(STATE == "Jungle" && MasterThief.onScreen == 0){
		OverwhelmedByGoblins.pause();
		Spells.pause();
		BadWizards.pause();
		swampSong.pause();
		CaseysQuest.pause();
		DumblebeatsNormal.play();
	}
	else if(treeWizz.onScreen==1){
		OverwhelmedByGoblins.pause();
		Spells.pause();
		DumblebeatsNormal.pause();
		swampSong.pause();
		CaseysQuest.pause();
		BadWizards.play();
	}
	else if(Dragon.onScreen==1){
		OverwhelmedByGoblins.pause();
		Spells.pause();
		DumblebeatsNormal.pause();
		CaseysQuest.pause();
		swampSong.pause();
		BadWizards.play();
	}
	else if(MasterThief.onScreen==1){
		OverwhelmedByGoblins.pause();
		Spells.pause();
		DumblebeatsNormal.pause();
		CaseysQuest.pause();
		swampSong.pause();
		BadWizards.play();
	}
	else if(STATE=="Scorched"){
		OverwhelmedByGoblins.pause();
		Spells.pause();
		DumblebeatsNormal.pause();
		BadWizards.pause();
		swampSong.pause();
		CaseysQuest.play();
	}
	else if(STATE=="Swamp"){
		OverwhelmedByGoblins.pause();
		Spells.pause();
		DumblebeatsNormal.pause();
		BadWizards.pause();
		CaseysQuest.pause();
		if(hpUp.x == -100){
			swampSong.play();
		}
	}
	else{
		DumblebeatsNormal.pause();
		OverwhelmedByGoblins.pause();
		BadWizards.pause();
		CaseysQuest.pause();
		Spells.play();
		swampSong.pause();
	}
}
}
//---------------------------------------------------------- Big-Bang ---------------------------------------------------------------//
setInterval(function(){
	if(STATE == "Swamp" && !swampFront){
		clear();
	}
	else{
		clear();
	}
	MusicPlayer();
	if(STATE == 0){
		Menu.draw();
		if(dim == 2){
			ctx.globalAlpha = Alpha*0.25;
			ctx.fillStyle = "#FF0000";
			ctx.fillRect(0,0,400,576);
			ctx.fillStyle = "#000099";
			ctx.fillRect(400,0,400,576);
			ctx.globalAlpha = Alpha;
		}
	}
	else if(STATE == 2){
		Info.draw();
		if(dim == 2){
			ctx.globalAlpha = Alpha*0.25;
			ctx.fillStyle = "#FF0000";
			ctx.fillRect(0,0,400,576);
			ctx.fillStyle = "#000099";
			ctx.fillRect(400,0,400,576);
			ctx.globalAlpha = Alpha;
		}
	}
	else if(STATE == 3){
		Credits.draw();
		if(dim == 2){
			ctx.globalAlpha = Alpha*0.25;
			ctx.fillStyle = "#FF0000";
			ctx.fillRect(0,0,400,576);
			ctx.fillStyle = "#000099";
			ctx.fillRect(400,0,400,576);
			ctx.globalAlpha = Alpha;
		}
	}
	else if(STATE == 4 || STATE == 5){
		gameOver();
		if(dim == 2){
			ctx.globalAlpha = Alpha*0.25;
			ctx.fillStyle = "#FF0000";
			ctx.fillRect(0,0,400,576);
			ctx.fillStyle = "#000099";
			ctx.fillRect(400,0,400,576);
			ctx.globalAlpha = Alpha;
		}
	}
	else if(STATE == "PAUSE"){
		keys();
		Pause.draw();
		if(dim == 2){
			ctx.globalAlpha = Alpha*0.25;
			ctx.fillStyle = "#FF0000";
			ctx.fillRect(0,0,400,576);
			ctx.fillStyle = "#000099";
			ctx.fillRect(400,0,400,576);
			ctx.globalAlpha = Alpha;
		}
	}
	else if(STATE == 6){
		Options.draw();
		if(dim == 2){
			ctx.globalAlpha = Alpha*0.25;
			ctx.fillStyle = "#FF0000";
			ctx.fillRect(0,0,400,576);
			ctx.fillStyle = "#000099";
			ctx.fillRect(400,0,400,576);
			ctx.globalAlpha = Alpha;
		}
	}
	else{
		if(deathTimer > 0){
			deathTimer-=1;
		}
		if(deathTimer == 0){
			deathTimer-=1;
			STATE = 4;
		}
		if(player.hp <= 0){
			if(nu != 1){
				deathTimer = 30;
				typemarker3.x = player.x-player.width/2 - 32;
				typemarker3.y = player.y-player.height/2;
				typemarker3.timeLeft = 30;
				typemarker3.text = "Dead!";
				player.x = 5000;
				player.y = -5000;
				earth.cast = -1;
				earth2.cast = -1;
				lightning.cast = -1;
				lightning2.cast = -1;
				firelightning.cast = -1;
				dark2.cast = -1;
				airice.cast = -1;
				ice.cast = -1;
				fire.cast = -1;
				air.cast = -1;
				mystic.cast = -1;
				water.cast = -1;
				darkwater.cast = -1;
				castingBar.x = player.x - player.width/2;
				castingBar.y = player.y + player.height/2;
				castingBar.width = player.width;
				castingBar.height = player.height/4;
				castingBar.width2 = 0;
				castingBar.onScreen = 0;
				castingBar.cast = -1;
				castingBar.castmax = 0;
			}
			nu = 1;
		}
		ctx.globalAlpha = Alpha;
		keys();
		multiply();
		//--------------------------------------------- Forest Level ------------------------------------------------------------//
		if(STATE == 1){
			treeFall = 2;
			player.draw();
			player.onhit();
			rePlant();
			for(B in Boxes){
				Boxes[B].draw();
				pickup(Boxes[B]);
			}
			RandEffect.draw();
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
			sIce.draw();
			sIce.move();
			sIce.effect();
		
			earth.draw();
			earth.move();
			for(R in earth2roots1){
				drawRoots(earth2roots1[R]);
			}
			for(R in earth3roots1){
				drawRoots(earth3roots1[R]);
			}
			earth2rootStrike.draw();
			earth2Move(earth2rootStrike);
			earth2AI(earth2rootStrike);
			earth2rootStrike2.draw();
			earth2Move(earth2rootStrike2);
			earth2AI(earth2rootStrike2);
			earth2rootStrike3.draw();
			earth2Move(earth2rootStrike3);
			earth2AI(earth2rootStrike3);
			earth2rootStrike4.draw();
			earth2Move(earth2rootStrike4);
			earth2AI(earth2rootStrike4);
			earth2rootStrike5.draw();
			earth2Move(earth2rootStrike5);
			earth2AI(earth2rootStrike5);
			earth2rootStrike6.draw();
			earth2Move(earth2rootStrike6);
			earth2AI(earth2rootStrike6);
			earth2rootStrike7.draw();
			earth2Move(earth2rootStrike7);
			earth2AI(earth2rootStrike7);
			earth2rootStrike8.draw();
			earth2Move(earth2rootStrike8);
			earth2AI(earth2rootStrike8);
			earth2.tick();
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
			air.draw();
			air.effect();
			air2.draw();
			air2.effect();
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
			
			for(S in darkSpikes){
				spikeDraw(darkSpikes[S]);
				spikeMove(darkSpikes[S]);
			}
			for(S in dark2Spikes){
				spikeDraw(dark2Spikes[S]);
				spikeMove(dark2Spikes[S]);
			}
			for(S in darkfireSpikes){
				spikeDraw(darkfireSpikes[S]);
				firespikeMove(darkfireSpikes[S]);
			}
			for(S in darkfireExplosions){
				darkfireExplosions[S].draw();
				darkfireExplosions[S].move();
			}
			for(S in darkiceSpikes){
				spikeDraw(darkiceSpikes[S]);
				firespikeMove(darkiceSpikes[S]);
			}
			for(S in darkiceEffects){
				darkiceEffects[S].draw();
			}
			for(S in darklightningSpikes){
				spikeDraw(darklightningSpikes[S]);
				firespikeMove(darklightningSpikes[S]);
			}
			for(S in darklightningExplosions){
				darklightningExplosions[S].draw();
				darklightningExplosions[S].move();
			}
			darkwater.draw();
			darkwater.effect();
			
			darkair.draw();
			darkair.effect();
			
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
				drawRoots(roots1[R]);
			}
			treeWizz.spawn();
			Dragon.spawn();
			Dragon.draw();
			DragonR.spawn();
			DragonR.draw();
			DragonL.spawn();
			DragonL.draw();
			Dragon.attack();
			DragonR.attack();
			DragonL.attack();
			for(D in Dragonflame){
				Dragonflame[D].draw();
				Dragonflame[D].effect();
			}
			//put here to negate ice abilities
			TreecastingBar.tick();	
			SorcCastingBar.tick();
			for(E in AllEnemies){
				if(AllEnemies[E].onTree == 0){
					AllEnemies[E].draw();
					move(AllEnemies[E]);
				}
				if(AllEnemies[E].type != "Dragon" && AllEnemies[E].type != "DragonL" && AllEnemies[E].type != "DragonR"){
					AI(AllEnemies[E]);
					if(AllEnemies[E].type != "MasterThief"){
						spawn(AllEnemies[E]);
					}
				}
			}
			for(M in BigMeteors){
				MeteorAI(BigMeteors[M]);
			}
			for(E in EMeteors){
				EMeteors[E].draw();
				MeteorMove(EMeteors[E]);
			}
			for(E in Exploders){
				exploderDraw(Exploders[E]);
				exploderMove(Exploders[E]);
			}
			DragonEffect.draw();
			
			TwizEffect.draw();
			DragonEffect2.draw();
			
			for(O in allObs){
				drawObstacle(allObs[O]);
				obsTick(allObs[O]);
			}
			
			castingBar.draw();
			castingBar.tick();
			TreecastingBar.draw();
			SorcCastingBar.draw();
		}
		//--------------------------------------------------------- Jungle Level ------------------------------------------------//
		else if(STATE == "Jungle"){
			//Must be on below trees
			for(F in treeFallExplosions){
				treeFallExplosions[F].draw();
			}
			//Fallen trees
			for(O in allObs){
				drawObstacle(allObs[O]);
			}
			treeFall = 2;
			//for calculating shadow of player in jungle
			var shade = false;
			for(O in obstacle1){
				if(!obstacle1[O].falling || FallingTreesL[obstacle1[O].fallIndex] == shakeTR || FallingTreesL[obstacle1[O].fallIndex] == shakeTL){
					if(player.x <= obstacle1[O].x + obstacle1[O].width/2 && player.x >= obstacle1[O].x - obstacle1[O].width/2
						&& player.y <= obstacle1[O].y && obstacle1[O].index > 5){
							shade = true;
					}
				}
			}
			player.shadowed = shade;
			//if not on top of tree
			if(!player.shadowed){
				player.draw();
			}
			player.onhit();
			rePlant();
			for(B in Boxes){
				Boxes[B].draw();
				pickup(Boxes[B]);
			}
			RandEffect.draw();
			RandEffect2.draw();
			RandEffect3.draw();
			RandEffect4.draw();
			RandEffect5.draw();
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
			for(R in earth2roots1){
				drawRoots(earth2roots1[R]);
			}
			for(R in earth3roots1){
				drawRoots(earth3roots1[R]);
			}
			earth2rootStrike.draw();
			earth2Move(earth2rootStrike);
			earth2AI(earth2rootStrike);
			earth2rootStrike2.draw();
			earth2Move(earth2rootStrike2);
			earth2AI(earth2rootStrike2);
			earth2rootStrike3.draw();
			earth2Move(earth2rootStrike3);
			earth2AI(earth2rootStrike3);
			earth2rootStrike4.draw();
			earth2Move(earth2rootStrike4);
			earth2AI(earth2rootStrike4);
			earth2rootStrike5.draw();
			earth2Move(earth2rootStrike5);
			earth2AI(earth2rootStrike5);
			earth2rootStrike6.draw();
			earth2Move(earth2rootStrike6);
			earth2AI(earth2rootStrike6);
			earth2rootStrike7.draw();
			earth2Move(earth2rootStrike7);
			earth2AI(earth2rootStrike7);
			earth2rootStrike8.draw();
			earth2Move(earth2rootStrike8);
			earth2AI(earth2rootStrike8);
			earth2.tick();
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
			air.draw();
			air.effect();
			air2.draw();
			air2.effect();
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
			
			for(S in darkSpikes){
				spikeDraw(darkSpikes[S]);
				spikeMove(darkSpikes[S]);
			}
			for(S in dark2Spikes){
				spikeDraw(dark2Spikes[S]);
				spikeMove(dark2Spikes[S]);
			}
			for(S in darkfireSpikes){
				spikeDraw(darkfireSpikes[S]);
				firespikeMove(darkfireSpikes[S]);
			}
			for(S in darkfireExplosions){
				darkfireExplosions[S].draw();
				darkfireExplosions[S].move();
			}
			for(S in darkiceSpikes){
				spikeDraw(darkiceSpikes[S]);
				firespikeMove(darkiceSpikes[S]);
			}
			for(S in darkiceEffects){
				darkiceEffects[S].draw();
			}
			for(S in darklightningSpikes){
				spikeDraw(darklightningSpikes[S]);
				firespikeMove(darklightningSpikes[S]);
			}
			for(S in darklightningExplosions){
				darklightningExplosions[S].draw();
				darklightningExplosions[S].move();
			}
			darkwater.draw();
			darkwater.effect();
			
			darkair.draw();
			darkair.effect();
			
			sAir.draw();
			sAir.effect();
			for(F in treeFallExplosions){
				treeFallExplosions[F].move();
			}
			
			MThiefHeal.draw();
			MThiefHeal.move();
			MasterThief.spawn();
			for(E in AllEnemies){
				if(AllEnemies[E].onTree == 0){
					AllEnemies[E].draw();
					move(AllEnemies[E]);
				}
				if(AllEnemies[E].type != "Dragon" && AllEnemies[E].type != "DragonL" && AllEnemies[E].type != "DragonR"){
					AI(AllEnemies[E]);
					if(AllEnemies[E].type != "MasterThief"){
						spawn(AllEnemies[E]);
					}
				}
			}
			for(F in Feet){
				Feet[F].draw();
				Feet[F].tick();
			}

			Thief.steal();
			ThiefA.steal();
			ThiefB.steal();
		
			SmokeBomb.draw();
			SmokeBombA.draw();
			SmokeBombB.draw();
			MSmokeBomb.draw();
			
			for(O in allObs){
				if(allObs[O].fallIndex < 46 || !allObs[O].fallIndex){
					drawObstacle(allObs[O]);
				}
				obsTick(allObs[O]);
			}
			treeFall = 1;
			if(jungleAni == true){
				for(O in obstacle1){
					if(obstacle1[O].growTimer > 0){
						obstacle1[O].growTimer-=1;
					}
					else if(obstacle1[O].index<12){
						obstacle1[O].index+=1;
					}
				}
			}
			//if players in a tree
			if(player.shadowed){
				player.draw();
			}
			for(E in AllEnemies){
				if(AllEnemies[E].onTree == 1){
					AllEnemies[E].draw();
					move(AllEnemies[E]);
				}
			}
			TwizEffect.draw();
			MasterTEffect.draw();
			
			castingBar.draw();
			castingBar.tick();	
		}
		//------------------------------------------------------------ Fire Level -----------------------------------------------//
		else if(STATE == "Scorched"){
			StateTimer+=1;
			//enemy pts change
			Enemy.pts = 25;
			EnemyA.pts = 25;
			EnemyB.pts = 25;
			EnemyC.pts = 25;
	
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
			for(R in earth2roots1){
				drawRoots(earth2roots1[R]);
			}
			for(R in earth3roots1){
				drawRoots(earth3roots1[R]);
			}
			earth2rootStrike.draw();
			earth2Move(earth2rootStrike);
			earth2AI(earth2rootStrike);
			earth2rootStrike2.draw();
			earth2Move(earth2rootStrike2);
			earth2AI(earth2rootStrike2);
			earth2rootStrike3.draw();
			earth2Move(earth2rootStrike3);
			earth2AI(earth2rootStrike3);
			earth2rootStrike4.draw();
			earth2Move(earth2rootStrike4);
			earth2AI(earth2rootStrike4);
			earth2rootStrike5.draw();
			earth2Move(earth2rootStrike5);
			earth2AI(earth2rootStrike5);
			earth2rootStrike6.draw();
			earth2Move(earth2rootStrike6);
			earth2AI(earth2rootStrike6);
			earth2rootStrike7.draw();
			earth2Move(earth2rootStrike7);
			earth2AI(earth2rootStrike7);
			earth2rootStrike8.draw();
			earth2Move(earth2rootStrike8);
			earth2AI(earth2rootStrike8);
			earth2.tick();
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
			air.draw();
			air.effect();
			air2.draw();
			air2.effect();
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
			
			for(S in darkSpikes){
				spikeDraw(darkSpikes[S]);
				spikeMove(darkSpikes[S]);
			}
			for(S in dark2Spikes){
				spikeDraw(dark2Spikes[S]);
				spikeMove(dark2Spikes[S]);
			}
			for(S in darkfireSpikes){
				spikeDraw(darkfireSpikes[S]);
				firespikeMove(darkfireSpikes[S]);
			}
			for(S in darkfireExplosions){
				darkfireExplosions[S].draw();
				darkfireExplosions[S].move();
			}
			for(S in darkiceSpikes){
				spikeDraw(darkiceSpikes[S]);
				firespikeMove(darkiceSpikes[S]);
			}
			for(S in darkiceEffects){
				darkiceEffects[S].draw();
			}
			for(S in darklightningSpikes){
				spikeDraw(darklightningSpikes[S]);
				firespikeMove(darklightningSpikes[S]);
			}
			for(S in darklightningExplosions){
				darklightningExplosions[S].draw();
				darklightningExplosions[S].move();
			}
			darkwater.draw();
			darkwater.effect();
			
			darkair.draw();
			darkair.effect();
			
			
			for(E in AllEnemies){
				if(AllEnemies[E].onTree == 0){
					AllEnemies[E].draw();
					move(AllEnemies[E]);
				}
				if(AllEnemies[E].type != "Dragon" && AllEnemies[E].type != "DragonL" && AllEnemies[E].type != "DragonR"){
					AI(AllEnemies[E]);
					if(AllEnemies[E].type != "MasterThief"){
						spawn(AllEnemies[E]);
					}
				}
			}
			for(M in BigMeteors){
				MeteorAI(BigMeteors[M]);
			}
			for(E in EMeteors){
				EMeteors[E].draw();
				MeteorMove(EMeteors[E]);
			}
			for(E in Exploders){
				exploderDraw(Exploders[E]);
				exploderMove(Exploders[E]);
			}
			DragonEffect.draw();

			Spawner.fire();
			Spawner2.fire();
			treeFall = 2;	
			for(O in allObs){
				if(allObs[O].fallIndex < 46 || !allObs[O].fallIndex){
					drawObstacle(allObs[O]);
				}
				obsTick(allObs[O]);
			}
			
			DragonEffect2.draw();
			
			castingBar.draw();
			castingBar.tick();
		}
		//--------------------------------------------------- Swamp Level -------------------------------------------------------//
		else if(STATE == "Swamp"){
			StateTimer+=1;
			player.shadowed = false;
			//Must be on below trees
			for(F in treeFallExplosions){
				treeFallExplosions[F].draw();
			}
			//Fallen trees
			for(O in allObs){
				drawObstacle(allObs[O]);
			}
			treeFall = 2;
			if(swampFront){
				player.draw();
				if(swampIndex<60){
					swampIndex++;
				}
				else{
					swampFront = false;
				}
				ctx.globalAlpha = 0.25*Alpha;
				ctx.drawImage(RainPics[rainIndex], 0, 0);
				ctx.globalAlpha = Alpha;
			}
			//speed handling (slow in water etc)
			player.speedHandle();
			speedhandle(Enemy);
			speedhandle(EnemyB);
			//for calculating shadow of player in jungle
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
			for(R in earth2roots1){
				drawRoots(earth2roots1[R]);
			}
			for(R in earth3roots1){
				drawRoots(earth3roots1[R]);
			}
			earth2rootStrike.draw();
			earth2Move(earth2rootStrike);
			earth2AI(earth2rootStrike);
			earth2rootStrike2.draw();
			earth2Move(earth2rootStrike2);
			earth2AI(earth2rootStrike2);
			earth2rootStrike3.draw();
			earth2Move(earth2rootStrike3);
			earth2AI(earth2rootStrike3);
			earth2rootStrike4.draw();
			earth2Move(earth2rootStrike4);
			earth2AI(earth2rootStrike4);
			earth2rootStrike5.draw();
			earth2Move(earth2rootStrike5);
			earth2AI(earth2rootStrike5);
			earth2rootStrike6.draw();
			earth2Move(earth2rootStrike6);
			earth2AI(earth2rootStrike6);
			earth2rootStrike7.draw();
			earth2Move(earth2rootStrike7);
			earth2AI(earth2rootStrike7);
			earth2rootStrike8.draw();
			earth2Move(earth2rootStrike8);
			earth2AI(earth2rootStrike8);
			earth2.tick();
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
			air.draw();
			air.effect();
			air2.draw();
			air2.effect();
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
			
			for(S in darkSpikes){
				spikeDraw(darkSpikes[S]);
				spikeMove(darkSpikes[S]);
			}
			for(S in dark2Spikes){
				spikeDraw(dark2Spikes[S]);
				spikeMove(dark2Spikes[S]);
			}
			for(S in darkfireSpikes){
				spikeDraw(darkfireSpikes[S]);
				firespikeMove(darkfireSpikes[S]);
			}
			for(S in darkfireExplosions){
				darkfireExplosions[S].draw();
				darkfireExplosions[S].move();
			}
			for(S in darkiceSpikes){
				spikeDraw(darkiceSpikes[S]);
				firespikeMove(darkiceSpikes[S]);
			}
			for(S in darkiceEffects){
				darkiceEffects[S].draw();
			}
			for(S in darklightningSpikes){
				spikeDraw(darklightningSpikes[S]);
				firespikeMove(darklightningSpikes[S]);
			}
			for(S in darklightningExplosions){
				darklightningExplosions[S].draw();
				darklightningExplosions[S].move();
			}
			darkwater.draw();
			darkwater.effect();
			
			darkair.draw();
			darkair.effect();
			
			for(F in treeFallExplosions){
				treeFallExplosions[F].move();
			}			
			for(O in allObs){
				if(allObs[O].fallIndex < 46 || !allObs[O].fallIndex){
					drawObstacle(allObs[O]);
				}
				obsTick(allObs[O]);
			}
			treeFall = 1;
			for(E in AllEnemies){
				if(AllEnemies[E].onTree == 0){
					AllEnemies[E].draw();
					move(AllEnemies[E]);
				}
				if(AllEnemies[E].type != "Dragon" && AllEnemies[E].type != "DragonL" && AllEnemies[E].type != "DragonR"){
					AI(AllEnemies[E]);
					if(AllEnemies[E].type != "MasterThief"){
						spawn(AllEnemies[E]);
					}
				}
			}
			for(E in Exploders){
				exploderDraw(Exploders[E]);
				exploderMove(Exploders[E]);
			}
			Swudge.draw();
			Swudge2.draw();
			for(F in Feet){
				Feet[F].draw();
				Feet[F].tick();
			}
		
			MasterTEffect.draw();
			
			castingBar.draw();
			castingBar.tick();
			
			//If the swamp craziness happened
			if(Alpha == 0.15 && counter > 0){
				var numHps = 0;
				for(H in hpParticles){
					if(hpParticles[H].x == -100){
						numHps++;
					}
				}
				if(numHps >= 8){
					Alpha = 1;
					player.speed = player.speed2*4;
					if(hpUp.boss == "treeW"){
						jungleAni = true;
						radiofailure.currentTime=0;
						radiofailure.play();
					}
					if(hpUp.boss == "MasterThief"){
						for(O in obstacle1){
							obstacle1[O].board = true;
						}
						swampFront= true;
						radiofailure.currentTime=0;
						radiofailure.play();
					}
					counter = 0;
				}
			}
		}
		// black out screen
		ctx.globalAlpha = 1;
		if(darkearth.blackTimer > 0){
			darkearth.blackDraw();
		}
		darkearth.draw();
		darkearth.move();
		
		UI();
		SCORE();
		
		ctx.globalAlpha = Alpha;
		
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
		
		drawtypeMarker(typemarker4);
		moveMarker(typemarker4);
		
		drawtypeMarker(typemarker5);
		moveMarker(typemarker5);
		
		drawtypeMarker(typemarker6);
		moveMarker(typemarker6);
		
		if(MasterThief.onScreen == 1 || (STATE == "Swamp" && hpUp.x != -100) || (STATE == "Swamp" && hpParticleSD.x != -100) || swampFront){
			ctx.globalAlpha = 0.25*Alpha;
			ctx.drawImage(RainPics[rainIndex], 0, 0);
			rainIndex++;
			if(rainIndex > 10){
				rainIndex = 1;
			}
			if(vol == 2){
				rainsound.play();
			}
			ctx.globalAlpha = Alpha;
		}
		
		if(dim == 2){
			ctx.globalAlpha = Alpha*0.25;
			ctx.fillStyle = "#FF0000";
			ctx.fillRect(0,0,400,576);
			ctx.fillStyle = "#000099";
			ctx.fillRect(400,0,400,576);
			ctx.globalAlpha = Alpha;
		}
		// Cooldown calculation
		if(cd <= 0){
			cd = cd;
		}
		else{
			cd--;
		}
	}
}, 1000/FPS);
