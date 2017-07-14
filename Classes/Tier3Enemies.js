//**This file contains tier 3 enemies, starting with bosses that show up in tier 2 levels. Tier 1 and 2 enemies are in Enemies.js**//
//--------------------------------------------- Tier 3 Enemies ----------------------------------------------------------------------//
// Crocodile enemy
function Crocodile_Enemy(rp){
	this.respawn = rp;
};
Crocodile_Enemy.prototype = {
	type: "Crocodile",
	x: 9000,
	onTree: 0,
	y: -400,
	width: 64,
	height: 44,
	speed: 2,
	speed2: 1,
	dirct: 0,
	dir: "W",
	LR: "",
	rp: 300,
	onScreen: 0,
	movement: false,
	hp: 5,
	hptimer: 0,
	pts: 6000,
	draw: function(){
		if(this.onScreen == 1){
			if(this.hptimer>0){
				this.hptimer-=1;
			}
			if (this.hptimer*0.5 != Math.round(this.hptimer*0.5)){
				ctx.globalAlpha = Alpha*0.5;
			}
			var landed = false;
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
					landed = true;
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
				obstacle2[O].y+=obstacle2[O].height*0.5;
				if(collision("D", this, obstacle2[O]) || collision("A", this, obstacle2[O]) || collision("S", this, obstacle2[O]) || collision("W", this, obstacle2[O]) ||
					collision("WD", this, obstacle2[O]) || collision("WA", this, obstacle2[O]) || collision("AS", this, obstacle2[O]) || collision("SD", this, obstacle2[O])){
					landed = true;
				}
				obstacle2[O].x-=32;
				obstacle2[O].y-=obstacle2[O].height*0.5;
			}
			var far = false;
			var xdiff = player.x - this.x;
			var ydiff = player.y - this.y;
			var dist = Math.sqrt((ydiff * ydiff) + (xdiff * xdiff));
			if(dist > 128){
				far = true;
			}
			if(this.dir == "WA" || this.dir == "AS" || this.dir == "A"){
				this.LR = "Left";
				if(landed){
					if(far){
						ctx.drawImage(crocclosel1, this.x - this.width * 0.5, this.y - this.height * 0.5);
					}
					else{
						ctx.drawImage(crocopenl1, this.x - this.width * 0.5, this.y - this.height * 0.5);
					}
				}
				else{
					if(far){
						ctx.drawImage(croceyesl1, this.x - this.width * 0.5, this.y - this.height * 0.5);
					}
					else{
						ctx.drawImage(crocswiml1, this.x - this.width * 0.5, this.y - this.height * 0.5);
					}
				}
			}
			else if(this.dir == "WD" || this.dir == "SD" || this.dir == "D"){
				this.LR = "Right";
				if(landed){
					if(far){
						ctx.drawImage(croccloser1, this.x - this.width * 0.5, this.y - this.height * 0.5);
					}
					else{
						ctx.drawImage(crocopenr1, this.x - this.width * 0.5, this.y - this.height * 0.5);
					}
				}
				else{
					if(far){
						ctx.drawImage(croceyesr1, this.x - this.width * 0.5, this.y - this.height * 0.5);
					}
					else{
						ctx.drawImage(crocswimr1, this.x - this.width * 0.5, this.y - this.height * 0.5);
					}
				}
			}
			else if(this.LR == "Left"){
				if(landed){
					if(far){
						ctx.drawImage(crocclosel1, this.x - this.width * 0.5, this.y - this.height * 0.5);
					}
					else{
						ctx.drawImage(crocopenl1, this.x - this.width * 0.5, this.y - this.height * 0.5);
					}
				}
				else{
					if(far){
						ctx.drawImage(croceyesl1, this.x - this.width * 0.5, this.y - this.height * 0.5);
					}
					else{
						ctx.drawImage(crocswiml1, this.x - this.width * 0.5, this.y - this.height * 0.5);
					}
				}
			}
			else{
				if(landed){
					if(far){
						ctx.drawImage(croccloser1, this.x - this.width * 0.5, this.y - this.height * 0.5);
					}
					else{
						ctx.drawImage(crocopenr1, this.x - this.width * 0.5, this.y - this.height * 0.5);
					}
				}
				else{
					if(far){
						ctx.drawImage(croceyesr1, this.x - this.width * 0.5, this.y - this.height * 0.5);
					}
					else{
						ctx.drawImage(crocswimr1, this.x - this.width * 0.5, this.y - this.height * 0.5);
					}
				}
			}
			if (this.hptimer*0.5 != Math.round(this.hptimer*0.5)){
				ctx.globalAlpha = Alpha;
			}
			hpBarDraw(this);
		}
	}
};
var Croc = new Crocodile_Enemy(150);
var Croc2 = new Crocodile_Enemy(300);

// Mosquito enemy
function Mosquito_Enemy(rp){
	this.respawn = rp;
};
Mosquito_Enemy.prototype = {
	type: "Mosquito",
	x: 9000,
	onTree: 0,
	y: -400,
	width: 32,
	height: 32,
	speed: 4,
	speed2: 2,
	dirct: 0,
	dir: "W",
	LR: "",
	rp: 150,
	onScreen: 0,
	movement: false,
	hp: 1,
	index: false,
	hptimer: 0,
	pts: 200,
	runTimer: 0,
	draw: function(){
		if(this.onScreen == 1){
			if(this.hptimer>0){
				this.hptimer-=1;
			}
			if(this.runTimer>0){
				this.runTimer-=1;
			}
			if (this.hptimer*0.5 != Math.round(this.hptimer*0.5)){
				ctx.globalAlpha = Alpha*0.5;
			}
			if(this.dir == "WA" || this.dir == "AS" || this.dir == "A"){
				this.LR = "Left";
				if(this.index){
					ctx.drawImage(bugL2, this.x - this.width * 0.5, this.y - this.height * 0.5);
					this.index = false;
				}
				else{
					ctx.drawImage(bugL1, this.x - this.width * 0.5, this.y - this.height * 0.5);
					this.index = true;
				}
			}
			else if(this.dir == "WD" || this.dir == "SD" || this.dir == "D"){
				if(this.index){
					ctx.drawImage(bugR2, this.x - this.width * 0.5, this.y - this.height * 0.5);
					this.index = false;
				}
				else{
					ctx.drawImage(bugR1, this.x - this.width * 0.5, this.y - this.height * 0.5);
					this.index = true;
				}
				this.LR = "Right";
			}
			else if(this.LR == "Left"){
				if(this.index){
					ctx.drawImage(bugL2, this.x - this.width * 0.5, this.y - this.height * 0.5);
					this.index = false;
				}
				else{
					ctx.drawImage(bugL1, this.x - this.width * 0.5, this.y - this.height * 0.5);
					this.index = true;
				}
			}
			else{
				if(this.index){
					ctx.drawImage(bugR2, this.x - this.width * 0.5, this.y - this.height * 0.5);
					this.index = false;
				}
				else{
					ctx.drawImage(bugR1, this.x - this.width * 0.5, this.y - this.height * 0.5);
					this.index = true;
				}
			}
			if (this.hptimer*0.5 != Math.round(this.hptimer*0.5)){
				ctx.globalAlpha = Alpha;
			}
			hpBarDraw(this);
			if(collision(this.dir, this, player) && this.runTimer == 0 && (hptimer <=0 || hptimer >= 29)){
				this.runTimer = 30;
				this.hp+=1;
			}
		}
	}
};
var Mosquito = new Mosquito_Enemy(90);
var Mosquito2 = new Mosquito_Enemy(240);
var Mosquito3 = new Mosquito_Enemy(390);
var Mosquito4 = new Mosquito_Enemy(540);

// Swudge Decoy
function Swudge_Decoy(num){
	if(num == 1){
		this.draw = function(){
			if(this.onScreen){
				if(this.LR == "Left"){
					ctx.drawImage(SwudgeSheet, 80*Math.floor(this.index/3), 60, 80, 60, this.x - this.width * 0.5, this.y - this.height * 0.5, 80, 60);
					Globblyfire.x = this.x;
					Globblyfire.y = this.y;
					this.index++;
					if(this.index > 8){
						this.onScreen = 0;
						this.x = 9000;
						this.y = -400;
						this.LR = "";
						this.index = 1;
					}
				}
				else{
					ctx.drawImage(SwudgeSheet, 80*Math.floor(this.index/3), 120, 80, 60, this.x - this.width * 0.5, this.y - this.height * 0.5, 80, 60);
					Globblyfire.x = this.x;
					Globblyfire.y = this.y;
					this.index++;
					if(this.index > 8){
						this.onScreen = 0;
						this.x = 9000;
						this.y = -400;
						this.LR = "";
						this.index = 1;
					}
				}
			}
		}
	}else{
		this.draw = function(){
			if(this.onScreen){
				if(this.LR == "Left"){
					ctx.drawImage(SwudgeSheet, 80*Math.floor(this.index/3), 60, 80, 60, this.x - this.width * 0.5, this.y - this.height * 0.5, 80, 60);
					Globblyfire2.x = this.x;
					Globblyfire2.y = this.y;
					this.index++;
					if(this.index > 8){
						this.onScreen = 0;
						this.x = 9000;
						this.y = -400;
						this.LR = "";
						this.index = 1;
					}
				}
				else{
					ctx.drawImage(SwudgeSheet, 80*Math.floor(this.index/3), 120, 80, 60, this.x - this.width * 0.5, this.y - this.height * 0.5, 80, 60);
					Globblyfire2.x = this.x;
					Globblyfire2.y = this.y;
					this.index++;
					if(this.index > 8){
						this.onScreen = 0;
						this.x = 9000;
						this.y = -400;
						this.LR = "";
						this.index = 1;
					}
				}
			}
		}
	}
};
Swudge_Decoy.prototype = {
	x: 9000,
	y: -400,
	width: 80,
	height: 60,
	LR: "",
	onScreen: 0,
	index: 1
};
var Swudge = new Swudge_Decoy(1);
var Swudge2 = new Swudge_Decoy(2);

//Desert Scorps
function Scorp_Enemy(rp, rp2){
	this.respawn = rp;
	this.rp = rp2;
};
Scorp_Enemy.prototype = {
	type: 0,
	x: 9000,
	onTree: 0,
	y: -400,
	width: 40,
	height: 36,
	speed: 4,
	speed2: 2,
	dirct: 0,
	dir: "W",
	LR: "",
	onScreen: 0,
	movement: false,
	index: 1,
	pts: 100,
	casting: false,
	castIndex: 1,
	rollIndex: 1,
	cd: 0,
	moved: false,
	draw: function(){
		drawScorp(this);
	}
};
var Scorp1 = new Scorp_Enemy(90, 300);
var Scorp2 = new Scorp_Enemy(150, 300);
var Scorp3 = new Scorp_Enemy(210, 300);
var Scorp4 = new Scorp_Enemy(300, 300);
var Scorp5 = new Scorp_Enemy(390, 300);
var Scorp6 = new Scorp_Enemy(480, 300);
var Scorp7 = new Scorp_Enemy(-1, -1);
var Scorp8 = new Scorp_Enemy(-1, -1);
var ScorpsArray = {1: Scorp1, 2: Scorp2, 3: Scorp3, 4: Scorp4, 5: Scorp5, 6: Scorp6, 7: Scorp7, 8: Scorp8};
//draws scorpion and does attack ai
function drawScorp(E){
	if(E.onScreen == 1){
		if(SandStorm.onScreen){
			if(SandStorm.dir == "A"){
				ctx.drawImage(ScorpSheet, 80*(Math.ceil(E.rollIndex/3)-1), 160, 80, 40, E.x - E.width * 0.5 - 40, E.y - E.height * 0.5, 80, 40);
			}
			else{
				ctx.drawImage(ScorpSheet, 80*(Math.ceil(E.rollIndex/3)-1), 200, 80, 40, E.x - E.width * 0.5 - 40, E.y - E.height * 0.5, 80, 40);
			}
			E.rollIndex++;
			if(E.rollIndex > 12){
				E.rollIndex = 1;
			}
		}
		else{
			if(E.cd > 0){
				E.cd-=1;
			}
			if(!E.casting){
				E.width = 40;
				E.height = 36;
				if(E.dir == "WA" || E.dir == "AS" || E.dir == "A"){
					E.LR = "Left";
					ctx.drawImage(ScorpSheet, 80*(Math.ceil(E.index/3)-1), 0, 80, 40, E.x - E.width * 0.5 - 40, E.y - E.height * 0.5, 80, 40);
				}
				else if(E.dir == "WD" || E.dir == "SD" || E.dir == "D"){
					ctx.drawImage(ScorpSheet, 80*(Math.ceil(E.index/3)-1), 40, 80, 40, E.x - E.width * 0.5, E.y - E.height * 0.5, 80, 40);
					E.LR = "Right";
				}
				else if(E.LR == "Left"){
					ctx.drawImage(ScorpSheet, 80*(Math.ceil(E.index/3)-1), 0, 80, 40, E.x - E.width * 0.5 - 40, E.y - E.height * 0.5, 80, 40);
				}
				else{
					ctx.drawImage(ScorpSheet, 80*(Math.ceil(E.index/3)-1), 40, 80, 40, E.x - E.width * 0.5, E.y - E.height * 0.5, 80, 40);
				}
				E.index++;
				if(E.index > 18){
					E.index = 1;
				}
			}
			else{
				if(E.dir == "WA" || E.dir == "AS" || E.dir == "A"){
					E.LR = "Left";
					ctx.drawImage(ScorpSheet, 80*(ScorpStab[E.castIndex])-80, 80, 80, 40, E.x - 20 - 32, E.y - E.height * 0.5, 80, 40);
				}
				else if(E.dir == "WD" || E.dir == "SD" || E.dir == "D"){
					ctx.drawImage(ScorpSheet, 80*(ScorpStab[E.castIndex])-80, 120, 80, 40, E.x - 20, E.y - E.height * 0.5, 80, 40);
					E.LR = "Right";
				}
				else if(E.LR == "Left"){
					ctx.drawImage(ScorpSheet, 80*(ScorpStab[E.castIndex])-80, 80, 80, 40, E.x - 20 - 32, E.y - E.height * 0.5, 80, 40);
				}
				else{
					ctx.drawImage(ScorpSheet, 80*(ScorpStab[E.castIndex])-80, 120, 80, 40, E.x - 20, E.y - E.height * 0.5, 80, 40);
				}
				E.castIndex++;
				if(E.castIndex > 17){
					E.castIndex = 1;
					E.casting = false;
					E.movement = true;
				}
				if(E.castIndex == 11){
					grit.currentTime = 0;
					grit.play();
				}
				if(E.castIndex >= 12 && E.castIndex <= 16){
					E.width = 96;
					E.height = 40;
					if(E.LR == "Right" && !E.moved){
						E.width+=32;
						E.x+=16;
						E.moved = true;
					}
				}
				else if(E.castIndex == 17){
					if(E.LR == "Right" && E.moved){
						E.width -=32;
						E.x-=16;
						E.moved = false;
					}
				}
			}
		}
	}
}

function Anubis(num, rp){
	this.respawn = rp;
	if(num == 1){
		this.draw = function(){
		//dont use onscreen, b/c sandpit spawns
			if(this.deadIndex > 0){
				if(this.deadIndex == 1){
					var numberSand = 0;
					for(S in Sandpits){
						if(Sandpits[S].onScreen){
							numberSand++;
						}
					}
					var MummySpawn = Math.floor(Math.random() * (5-numberSand)) + 1;
					if(MegaMummy.onScreen){
						MummySpawn = 0;
					}				
					for(S in Sandpits){
						if(Sandpits[S].Mummy){
							MummySpawn = 0;
						}
					}
					if(MummySpawn == 1){
						this.Mummy = true;
					}
				}
				if(this.Mummy){
					ctx.drawImage(AnubisDeath[this.deadIndex], this.x - 153+8, this.y -48 - 42+16);
				}
				else{
					ctx.drawImage(AnubisDeath2[this.deadIndex], this.x - 153+8, this.y -48 - 42+16);
				}
				this.deadIndex++;
				if(this.deadIndex > 22){
					this.deadIndex = 0;
					this.onTree = 0;
					if(!Sandpit1.onScreen){
						Sandpit1.onScreen = 1;
						Sandpit1.x = this.x - 153 + 122;
						Sandpit1.y = this.y -48 - 42 + 78+16;
						Sandpit1.frame = 1;
						if(this.Mummy){
							this.Mummy = false;
							Sandpit1.Mummy = true;
							MegaMummy.xqueue = this.x - 153 - 36;
							MegaMummy.yqueue = this.y -48 - 42+20;
							MegaMummy.spawnTimer = 90;
						}
					}
					else if(!Sandpit2.onScreen){
						Sandpit2.onScreen = 1;
						Sandpit2.x = this.x - 153 + 122;
						Sandpit2.y = this.y -48 - 42 + 78+16;
						Sandpit2.frame = 1;
						if(this.Mummy){
							this.Mummy = false;
							Sandpit2.Mummy = true;
							MegaMummy.xqueue = this.x - 153 - 36;
							MegaMummy.yqueue = this.y -48 - 42+20;
							MegaMummy.spawnTimer = 90;
						}
					}
					else if(!Sandpit3.onScreen){
						Sandpit3.onScreen = 1;
						Sandpit3.x = this.x - 153 + 122;
						Sandpit3.y = this.y -48 - 42 + 78+16;
						Sandpit3.frame = 1;
						if(this.Mummy){
							this.Mummy = false;
							Sandpit3.Mummy = true;
							MegaMummy.xqueue = this.x - 153 - 36;
							MegaMummy.yqueue = this.y -48 - 42+20;
							MegaMummy.spawnTimer = 90;
						}
					}
					else if(!Sandpit3.Mummy){
						Sandpit3.onScreen = 1;
						Sandpit3.x = this.x - 153 + 122;
						Sandpit3.y = this.y -48 - 42 + 78+16;
						Sandpit3.frame = 1;
						if(this.Mummy){
							this.Mummy = false;
							Sandpit3.Mummy = true;
							MegaMummy.xqueue = this.x - 153 - 36;
							MegaMummy.yqueue = this.y -48 - 42+20;
							MegaMummy.spawnTimer = 90;
						}
					}
					else if(!Sandpit2.Mummy){
						Sandpit2.onScreen = 1;
						Sandpit2.x = this.x - 153 + 122;
						Sandpit2.y = this.y -48 - 42 + 78+16;
						Sandpit2.frame = 1;
						if(this.Mummy){
							this.Mummy = false;
							Sandpit2.Mummy = true;
							MegaMummy.xqueue = this.x - 153 - 36;
							MegaMummy.yqueue = this.y -48 - 42+20;
							MegaMummy.spawnTimer = 90;
						}
					}
					else if(!Sandpit1.Mummy){
						Sandpit1.onScreen = 1;
						Sandpit1.x = this.x - 153 + 122;
						Sandpit1.y = this.y -48 - 42 + 78+16;
						Sandpit1.frame = 1;
						if(this.Mummy){
							this.Mummy = false;
							Sandpit1.Mummy = true;
							MegaMummy.xqueue = this.x - 153 - 36;
							MegaMummy.yqueue = this.y -48 - 42+20;
							MegaMummy.spawnTimer = 90;
						}
					}
					this.x = -9000;
					this.y = -9000;
					this.x2 = this.x;
					this.y2 = this.y;
					this.casting = false;
					this.cd = 90;
					this.castIndex = 1;
				}
			}
			//statue is offscreen to undo collisions
			else if(this.Statue){
				if(this.LR == "Left"){
					if(SandStorm.timeLeft < 45 && (SandStorm.timeLeft >= 40 || (SandStorm.timeLeft < 35 && SandStorm.timeLeft >= 30) || (SandStorm.timeLeft < 25 && SandStorm.timeLeft >= 20) ||
						(SandStorm.timeLeft < 15 && SandStorm.timeLeft >= 10) || (SandStorm.timeLeft < 5 && SandStorm.timeLeft >= 0))){
						ctx.drawImage(AnubisSheet, 780, 0, 260, 180, this.x - this.width * 0.5-164 - 24+8+9000, this.y - this.height * 0.5-68 - 42+16+9000, 260, 180);
					}
					else{
						ctx.drawImage(AnubisSheet, 520, 0, 260, 180, this.x - this.width * 0.5-164 - 24+8+9000, this.y - this.height * 0.5-68 - 42+16+9000, 260, 180);
					}
				}
				else{
					if(SandStorm.timeLeft < 45 && (SandStorm.timeLeft >= 40 || (SandStorm.timeLeft < 35 && SandStorm.timeLeft >= 30) || (SandStorm.timeLeft < 25 && SandStorm.timeLeft >= 20) ||
						(SandStorm.timeLeft < 15 && SandStorm.timeLeft >= 10) || (SandStorm.timeLeft < 5 && SandStorm.timeLeft >= 0))){
						ctx.drawImage(AnubisSheet, 1300, 0, 260, 180, this.x - this.width * 0.5- 28 - 24+8+9000, this.y - this.height * 0.5-68 - 42+16+9000, 260, 180);
					}
					ctx.drawImage(AnubisSheet, 1040, 0, 260, 180, this.x - this.width * 0.5- 28 - 24+8+9000, this.y - this.height * 0.5-68 - 42+16+9000, 260, 180);
				}
			}
			else{
				if(this.hptimer >0){
					this.hptimer-=1;
				}
				if (this.hptimer*0.5 != Math.round(this.hptimer*0.5)){
					ctx.globalAlpha = Alpha*0.5;
				}
				if(this.casting){
					if(this.LR == "Left"){
						//since x and y change, and width/height, 15 and 30 = w or h /2, x and y are x2 y2
						ctx.drawImage(AnubisSheet, 260*(AnubisAttacks[this.castIndex] - 1), 360, 260, 180, this.x2 - 15-164 - 24+8, this.y2 - 30-68 - 42+16, 260, 180);
					}
					else{
						ctx.drawImage(AnubisSheet, 260*(AnubisAttacks[this.castIndex] - 1), 540, 260, 180, this.x2 - 15 - 24+8, this.y2 - 30-68 - 42+16, 260, 180);
					}
					this.castIndex++;
					//play sounds
					if(this.castIndex == 2){
						gritlong.currentTime = 0;
						gritlong.play();
					}
					if(this.castIndex == 16){
						gritlong2.currentTime = 0;
						gritlong2.play();
					}
					if(this.castIndex == 32){
						gritlong3.currentTime = 0;
						gritlong3.play();
					}
					if(this.castIndex > 46){
						this.castIndex = 1;
						this.movement = true;
						this.casting = false;
						if(this.LR == "Right"){
							this.x+=32;
						}
						else{
							this.x-=32;
						}
					}
					//change x/y for hit and fire projectiles on 16, 23, 39
					else if(this.castIndex > 27){
						if(this.LR == "Right"){
							this.x = this.x2+100;
							if(this.castIndex == 39){
								AnubisProj1.onScreen = true;
								AnubisProj1.x = this.x+64;
								AnubisProj1.y = this.y-64;
								AnubisProj1.slope = -1;
								AnubisProj1.closestSlope = -1;
								AnubisProj1.slopeIndex = 3;
								AnubisProj1.movement = true;
								AnubisProj1.found = true;
								AnubisProj1.dir = "D";
								AnubisProj1.dirct = 10;
								AnubisProj1.frame = 0;
								AnubisProj1.dirSwitch = false;
								AnubisProj1.destDir = "";
								//try to fix dir
								if(player.x < this.x){
									AnubisProj1.dir = "A";
								}
							}
						}
						else{
							this.x = this.x2-101;
							if(this.castIndex == 39){
								AnubisProj1.onScreen = true;
								AnubisProj1.x = this.x-64;
								AnubisProj1.y = this.y-64;
								AnubisProj1.slope = 1;
								AnubisProj1.closestSlope = 1;
								AnubisProj1.slopeIndex = 11;
								AnubisProj1.movement = true;
								AnubisProj1.found = true;
								AnubisProj1.dir = "A";
								AnubisProj1.dirct = 10;
								AnubisProj1.frame = 0;
								AnubisProj1.dirSwitch = false;
								AnubisProj1.destDir = "";
								if(player.x > this.x){
									AnubisProj1.dir = "D";
								}
							}
						}
					}
					else if(this.castIndex > 15){
						if(this.LR == "Right"){
							this.x = this.x2+52;
							if(this.castIndex == 16){
								AnubisProj2.onScreen = true;
								AnubisProj2.x = this.x+64;
								AnubisProj2.y = this.y-64;
								AnubisProj2.slope = -1;
								AnubisProj2.closestSlope = -1;
								AnubisProj2.slopeIndex = 3;
								AnubisProj2.movement = true;
								AnubisProj2.found = true;
								AnubisProj2.dir = "D";
								AnubisProj2.dirct = 10;
								AnubisProj2.frame = 0;
								AnubisProj2.dirSwitch = false;
								AnubisProj2.destDir = "";
								if(player.x < this.x){
									AnubisProj2.dir = "A";
								}
							}
							else if(this.castIndex == 23){
								AnubisProj3.onScreen = true;
								AnubisProj3.x = this.x+64;
								AnubisProj3.y = this.y-64;
								AnubisProj3.slope = -1;
								AnubisProj3.closestSlope = -1;
								AnubisProj3.slopeIndex = 3;
								AnubisProj3.movement = true;
								AnubisProj3.found = true;
								AnubisProj3.dir = "D";
								AnubisProj3.dirct = 10;
								AnubisProj3.frame = 0;
								AnubisProj3.dirSwitch = false;
								AnubisProj3.destDir = "";
								if(player.x < this.x){
									AnubisProj3.dir = "A";
								}
							}
						}
						else{
							this.x = this.x2-53;
							if(this.castIndex == 16){
								AnubisProj2.onScreen = true;
								AnubisProj2.x = this.x-64;
								AnubisProj2.y = this.y-64;
								AnubisProj2.slope = 1;
								AnubisProj2.closestSlope = 1;
								AnubisProj2.slopeIndex = 11;
								AnubisProj2.movement = true;
								AnubisProj2.found = true;
								AnubisProj2.dir = "A";
								AnubisProj2.dirct = 10;
								AnubisProj2.frame = 0;
								AnubisProj2.dirSwitch = false;
								AnubisProj2.destDir = "";
								if(player.x > this.x){
									AnubisProj2.dir = "D";
								}
							}
							else if(this.castIndex == 23){
								AnubisProj3.onScreen = true;
								AnubisProj3.x = this.x-64;
								AnubisProj3.y = this.y-64;
								AnubisProj3.slope = 1;
								AnubisProj3.closestSlope = 1;
								AnubisProj3.slopeIndex = 11;
								AnubisProj3.movement = true;
								AnubisProj3.found = true;
								AnubisProj3.dir = "A";
								AnubisProj3.dirct = 10;
								AnubisProj3.frame = 0;
								AnubisProj3.dirSwitch = false;
								AnubisProj3.destDir = "";
								if(player.x > this.x){
									AnubisProj3.dir = "D";
								}
							}
						}
					}
					else{
						if(this.LR == "Right"){
							this.x = this.x2+4;
						}
						else{
							this.x = this.x2-8;
						}
					}
				}
				else if(this.movement){
					if(this.dir == "WA" || this.dir == "AS" || this.dir == "A"){
						this.LR = "Left";
						ctx.drawImage(AnubisSheet, 1560 + 260*(Math.ceil(this.index/3) - 1), 0, 260, 180, this.x - this.width * 0.5-164 - 24+8, this.y - this.height * 0.5-68 - 42+16, 260, 180);
					}
					else if(this.dir == "WD" || this.dir == "SD" || this.dir == "D"){
						ctx.drawImage(AnubisSheet, 260*(Math.ceil(this.index/3) - 1), 180, 260, 180, this.x - this.width * 0.5 - 24+8, this.y - this.height * 0.5-68 - 42+16, 260, 180);
						this.LR = "Right";
					}
					else if(this.LR == "Left"){
						ctx.drawImage(AnubisSheet, 1560 + 260*(Math.ceil(this.index/3) - 1), 0, 260, 180, this.x - this.width * 0.5-164 - 24+8, this.y - this.height * 0.5-68 - 42+16, 260, 180);
					}
					else{
						ctx.drawImage(AnubisSheet, 260*(Math.ceil(this.index/3) - 1), 180, 260, 180, this.x - this.width * 0.5 - 24+8, this.y - this.height * 0.5-68 - 42+16, 260, 180);
					}
					this.index++;
					if(this.index > 15){
						this.index = 1;
					}
				}
				else{
					if(this.dir == "WA" || this.dir == "AS" || this.dir == "A"){
						this.LR = "Left";
						ctx.drawImage(AnubisSheet, 0, 0, 260, 180, this.x - this.width * 0.5-164 - 24+8, this.y - this.height * 0.5-68 - 42+16, 260, 180);
					}
					else if(this.dir == "WD" || this.dir == "SD" || this.dir == "D"){
						ctx.drawImage(AnubisSheet, 260, 0, 260, 180, this.x - this.width * 0.5-28 - 24+8, this.y - this.height * 0.5-68 - 42+16, 260, 180);
						this.LR = "Right";
					}
					else if(this.LR == "Left"){
						ctx.drawImage(AnubisSheet, 0, 0, 260, 180, this.x - this.width * 0.5-164 - 24+8, this.y - this.height * 0.5-68 - 42+16, 260, 180);
					}
					else{
						ctx.drawImage(AnubisSheet, 260, 0, 260, 180, this.x - this.width * 0.5-28 - 24+8, this.y - this.height * 0.5-68 - 42+16, 260, 180);
					}
				}
				if (this.hptimer*0.5 != Math.round(this.hptimer*0.5)){
					ctx.globalAlpha = Alpha;
				}
				hpBarDraw(this);
			}
		}
	}else{
		this.draw = function(){
		//dont use onscreen, b/c sandpit spawns
			if(this.deadIndex > 0){
				if(this.deadIndex == 1){
					var numberSand = 0;
					for(S in Sandpits){
						if(Sandpits[S].onScreen){
							numberSand++;
						}
					}
					var MummySpawn = Math.floor(Math.random() * (5-numberSand)) + 1;
					if(MegaMummy.onScreen){
						MummySpawn = 0;
					}				
					for(S in Sandpits){
						if(Sandpits[S].Mummy){
							MummySpawn = 0;
						}
					}
					if(MummySpawn == 1){
						this.Mummy = true;
					}
				}
				if(this.Mummy){
					ctx.drawImage(AnubisDeath[this.deadIndex], this.x - 153+8, this.y -48 - 42+16);
				}
				else{
					ctx.drawImage(AnubisDeath2[this.deadIndex], this.x - 153+8, this.y -48 - 42+16);
				}
				this.deadIndex++;
				if(this.deadIndex > 22){
					this.deadIndex = 0;
					this.onTree = 0;
					if(!Sandpit1.onScreen){
						Sandpit1.onScreen = 1;
						Sandpit1.x = this.x - 153 + 122;
						Sandpit1.y = this.y -48 - 42 + 78+16;
						Sandpit1.frame = 1;
						if(this.Mummy){
							this.Mummy = false;
							Sandpit1.Mummy = true;
							MegaMummy.xqueue = this.x - 153 - 36;
							MegaMummy.yqueue = this.y -48 - 42+20;
							MegaMummy.spawnTimer = 90;
						}
					}
					else if(!Sandpit2.onScreen){
						Sandpit2.onScreen = 1;
						Sandpit2.x = this.x - 153 + 122;
						Sandpit2.y = this.y -48 - 42 + 78+16;
						Sandpit2.frame = 1;
						if(this.Mummy){
							this.Mummy = false;
							Sandpit2.Mummy = true;
							MegaMummy.xqueue = this.x - 153 - 36;
							MegaMummy.yqueue = this.y -48 - 42+20;
							MegaMummy.spawnTimer = 90;
						}
					}
					else if(!Sandpit3.onScreen){
						Sandpit3.onScreen = 1;
						Sandpit3.x = this.x - 153 + 122;
						Sandpit3.y = this.y -48 - 42 + 78+16;
						Sandpit3.frame = 1;
						if(this.Mummy){
							this.Mummy = false;
							Sandpit3.Mummy = true;
							MegaMummy.xqueue = this.x - 153 - 36;
							MegaMummy.yqueue = this.y -48 - 42+20;
							MegaMummy.spawnTimer = 90;
						}
					}
					else if(!Sandpit3.Mummy){
						Sandpit3.onScreen = 1;
						Sandpit3.x = this.x - 153 + 122;
						Sandpit3.y = this.y -48 - 42 + 78+16;
						Sandpit3.frame = 1;
						if(this.Mummy){
							this.Mummy = false;
							Sandpit3.Mummy = true;
							MegaMummy.xqueue = this.x - 153 - 36;
							MegaMummy.yqueue = this.y -48 - 42+20;
							MegaMummy.spawnTimer = 90;
						}
					}
					else if(!Sandpit2.Mummy){
						Sandpit2.onScreen = 1;
						Sandpit2.x = this.x - 153 + 122;
						Sandpit2.y = this.y -48 - 42 + 78+16;
						Sandpit2.frame = 1;
						if(this.Mummy){
							this.Mummy = false;
							Sandpit2.Mummy = true;
							MegaMummy.xqueue = this.x - 153 - 36;
							MegaMummy.yqueue = this.y -48 - 42+20;
							MegaMummy.spawnTimer = 90;
						}
					}
					else if(!Sandpit1.Mummy){
						Sandpit1.onScreen = 1;
						Sandpit1.x = this.x - 153 + 122;
						Sandpit1.y = this.y -48 - 42 + 78+16;
						Sandpit1.frame = 1;
						if(this.Mummy){
							this.Mummy = false;
							Sandpit1.Mummy = true;
							MegaMummy.xqueue = this.x - 153 - 36;
							MegaMummy.yqueue = this.y -48 - 42+20;
							MegaMummy.spawnTimer = 90;
						}
					}
					this.x = -9000;
					this.y = -9000;
					this.x2 = this.x;
					this.y2 = this.y;
					this.casting = false;
					this.cd = 90;
					this.castIndex = 1;
				}
			}
			//statue is offscreen to undo collisions
			else if(this.Statue){
				if(this.LR == "Left"){
					if(SandStorm.timeLeft < 45 && (SandStorm.timeLeft >= 40 || (SandStorm.timeLeft < 35 && SandStorm.timeLeft >= 30) || (SandStorm.timeLeft < 25 && SandStorm.timeLeft >= 20) ||
						(SandStorm.timeLeft < 15 && SandStorm.timeLeft >= 10) || (SandStorm.timeLeft < 5 && SandStorm.timeLeft >= 0))){
						ctx.drawImage(AnubisSheet, 780, 0, 260, 180, this.x - this.width * 0.5-164 - 24+8+9000, this.y - this.height * 0.5-68 - 42+16+9000, 260, 180);
					}
					else{
						ctx.drawImage(AnubisSheet, 520, 0, 260, 180, this.x - this.width * 0.5-164 - 24+8+9000, this.y - this.height * 0.5-68 - 42+16+9000, 260, 180);
					}
				}
				else{
					if(SandStorm.timeLeft < 45 && (SandStorm.timeLeft >= 40 || (SandStorm.timeLeft < 35 && SandStorm.timeLeft >= 30) || (SandStorm.timeLeft < 25 && SandStorm.timeLeft >= 20) ||
						(SandStorm.timeLeft < 15 && SandStorm.timeLeft >= 10) || (SandStorm.timeLeft < 5 && SandStorm.timeLeft >= 0))){
						ctx.drawImage(AnubisSheet, 1300, 0, 260, 180, this.x - this.width * 0.5- 28 - 24+8+9000, this.y - this.height * 0.5-68 - 42+16+9000, 260, 180);
					}
					ctx.drawImage(AnubisSheet, 1040, 0, 260, 180, this.x - this.width * 0.5- 28 - 24+8+9000, this.y - this.height * 0.5-68 - 42+16+9000, 260, 180);
				}
			}
			else{
				if(this.hptimer >0){
					this.hptimer-=1;
				}
				if (this.hptimer*0.5 != Math.round(this.hptimer*0.5)){
					ctx.globalAlpha = Alpha*0.5;
				}
				if(this.casting){
					if(this.LR == "Left"){
						//since x and y change, and width/height, 15 and 30 = w or h /2, x and y are x2 y2
						ctx.drawImage(AnubisSheet, 260*(AnubisAttacks[this.castIndex] - 1), 360, 260, 180, this.x2 - 15-164 - 24+8, this.y2 - 30-68 - 42+16, 260, 180);
					}
					else{
						ctx.drawImage(AnubisSheet, 260*(AnubisAttacks[this.castIndex] - 1), 540, 260, 180, this.x2 - 15 - 24+8, this.y2 - 30-68 - 42+16, 260, 180);
					}
					this.castIndex++;
					//play sounds
					if(this.castIndex == 2){
						gritlong.currentTime = 0;
						gritlong.play();
					}
					if(this.castIndex == 16){
						gritlong2.currentTime = 0;
						gritlong2.play();
					}
					if(this.castIndex == 32){
						gritlong3.currentTime = 0;
						gritlong3.play();
					}
					if(this.castIndex > 46){
						this.castIndex = 1;
						this.movement = true;
						this.casting = false;
						if(this.LR == "Right"){
							this.x+=32;
						}
						else{
							this.x-=32;
						}
					}
					//change x/y for hit and fire projectiles on 16, 23, 39
					else if(this.castIndex > 27){
						if(this.LR == "Right"){
							this.x = this.x2+100;
							if(this.castIndex == 39){
								AnubisProj4.onScreen = true;
								AnubisProj4.x = this.x+64;
								AnubisProj4.y = this.y-64;
								AnubisProj4.slope = -1;
								AnubisProj4.closestSlope = -1;
								AnubisProj4.slopeIndex = 3;
								AnubisProj4.movement = true;
								AnubisProj4.found = true;
								AnubisProj4.dir = "D";
								AnubisProj4.dirct = 10;
								AnubisProj4.frame = 0;
								AnubisProj4.dirSwitch = false;
								AnubisProj4.destDir = "";
								//try to fix dir
								if(player.x < this.x){
									AnubisProj4.dir = "A";
								}
							}
						}
						else{
							this.x = this.x2-101;
							if(this.castIndex == 39){
								AnubisProj4.onScreen = true;
								AnubisProj4.x = this.x-64;
								AnubisProj4.y = this.y-64;
								AnubisProj4.slope = 1;
								AnubisProj4.closestSlope = 1;
								AnubisProj4.slopeIndex = 11;
								AnubisProj4.movement = true;
								AnubisProj4.found = true;
								AnubisProj4.dir = "A";
								AnubisProj4.dirct = 10;
								AnubisProj4.frame = 0;
								AnubisProj4.dirSwitch = false;
								AnubisProj4.destDir = "";
								if(player.x > this.x){
									AnubisProj4.dir = "D";
								}
							}
						}
					}
					else if(this.castIndex > 15){
						if(this.LR == "Right"){
							this.x = this.x2+52;
							if(this.castIndex == 16){
								AnubisProj5.onScreen = true;
								AnubisProj5.x = this.x+64;
								AnubisProj5.y = this.y-64;
								AnubisProj5.slope = -1;
								AnubisProj5.closestSlope = -1;
								AnubisProj5.slopeIndex = 3;
								AnubisProj5.movement = true;
								AnubisProj5.found = true;
								AnubisProj5.dir = "D";
								AnubisProj5.dirct = 10;
								AnubisProj5.frame = 0;
								AnubisProj5.dirSwitch = false;
								AnubisProj5.destDir = "";
								if(player.x < this.x){
									AnubisProj5.dir = "A";
								}
							}
							else if(this.castIndex == 23){
								AnubisProj6.onScreen = true;
								AnubisProj6.x = this.x+64;
								AnubisProj6.y = this.y-64;
								AnubisProj6.slope = -1;
								AnubisProj6.closestSlope = -1;
								AnubisProj6.slopeIndex = 3;
								AnubisProj6.movement = true;
								AnubisProj6.found = true;
								AnubisProj6.dir = "D";
								AnubisProj6.dirct = 10;
								AnubisProj6.frame = 0;
								AnubisProj6.dirSwitch = false;
								AnubisProj6.destDir = "";
								if(player.x < this.x){
									AnubisProj6.dir = "A";
								}
							}
						}
						else{
							this.x = this.x2-53;
							if(this.castIndex == 16){
								AnubisProj5.onScreen = true;
								AnubisProj5.x = this.x-64;
								AnubisProj5.y = this.y-64;
								AnubisProj5.slope = 1;
								AnubisProj5.closestSlope = 1;
								AnubisProj5.slopeIndex = 11;
								AnubisProj5.movement = true;
								AnubisProj5.found = true;
								AnubisProj5.dir = "A";
								AnubisProj5.dirct = 10;
								AnubisProj5.frame = 0;
								AnubisProj5.dirSwitch = false;
								AnubisProj5.destDir = "";
								if(player.x > this.x){
									AnubisProj5.dir = "D";
								}
							}
							else if(this.castIndex == 23){
								AnubisProj6.onScreen = true;
								AnubisProj6.x = this.x-64;
								AnubisProj6.y = this.y-64;
								AnubisProj6.slope = 1;
								AnubisProj6.closestSlope = 1;
								AnubisProj6.slopeIndex = 11;
								AnubisProj6.movement = true;
								AnubisProj6.found = true;
								AnubisProj6.dir = "A";
								AnubisProj6.dirct = 10;
								AnubisProj6.frame = 0;
								AnubisProj6.dirSwitch = false;
								AnubisProj6.destDir = "";
								if(player.x > this.x){
									AnubisProj6.dir = "D";
								}
							}
						}
					}
					else{
						if(this.LR == "Right"){
							this.x = this.x2+4;
						}
						else{
							this.x = this.x2-8;
						}
					}
				}
				else if(this.movement){
					if(this.dir == "WA" || this.dir == "AS" || this.dir == "A"){
						this.LR = "Left";
						ctx.drawImage(AnubisSheet, 1560 + 260*(Math.ceil(this.index/3) - 1), 0, 260, 180, this.x - this.width * 0.5-164 - 24+8, this.y - this.height * 0.5-68 - 42+16, 260, 180);
					}
					else if(this.dir == "WD" || this.dir == "SD" || this.dir == "D"){
						ctx.drawImage(AnubisSheet, 260*(Math.ceil(this.index/3) - 1), 180, 260, 180, this.x - this.width * 0.5 - 24+8, this.y - this.height * 0.5-68 - 42+16, 260, 180);
						this.LR = "Right";
					}
					else if(this.LR == "Left"){
						ctx.drawImage(AnubisSheet, 1560 + 260*(Math.ceil(this.index/3) - 1), 0, 260, 180, this.x - this.width * 0.5-164 - 24+8, this.y - this.height * 0.5-68 - 42+16, 260, 180);
					}
					else{
						ctx.drawImage(AnubisSheet, 260*(Math.ceil(this.index/3) - 1), 180, 260, 180, this.x - this.width * 0.5 - 24+8, this.y - this.height * 0.5-68 - 42+16, 260, 180);
					}
					this.index++;
					if(this.index > 15){
						this.index = 1;
					}
				}
				else{
					if(this.dir == "WA" || this.dir == "AS" || this.dir == "A"){
						this.LR = "Left";
						ctx.drawImage(AnubisSheet, 0, 0, 260, 180, this.x - this.width * 0.5-164 - 24+8, this.y - this.height * 0.5-68 - 42+16, 260, 180);
					}
					else if(this.dir == "WD" || this.dir == "SD" || this.dir == "D"){
						ctx.drawImage(AnubisSheet, 260, 0, 260, 180, this.x - this.width * 0.5-28 - 24+8, this.y - this.height * 0.5-68 - 42+16, 260, 180);
						this.LR = "Right";
					}
					else if(this.LR == "Left"){
						ctx.drawImage(AnubisSheet, 0, 0, 260, 180, this.x - this.width * 0.5-164 - 24+8, this.y - this.height * 0.5-68 - 42+16, 260, 180);
					}
					else{
						ctx.drawImage(AnubisSheet, 260, 0, 260, 180, this.x - this.width * 0.5-28 - 24+8, this.y - this.height * 0.5-68 - 42+16, 260, 180);
					}
				}
				if (this.hptimer*0.5 != Math.round(this.hptimer*0.5)){
					ctx.globalAlpha = Alpha;
				}
				hpBarDraw(this);
			}
		}
	}
};
Anubis.prototype = {
	type: "Anubis",
	x: 2000,
	y: -9000,
	x2: 2000,
	y2: -9000,
	onTree: 0,
	width: 60,
	height: 90,
	speed: 4,
	speed2: 2,
	dirct: 0,
	hp: 8,
	hptimer: 0,
	dir: "W",
	LR: "",
	rp: 300,
	pts: 2000,
	onScreen: 0,
	movement: false,
	moveTime: 0,
	index: 1,
	waitTime: 0,
	deadIndex: 0,
	cd: 90,
	casting: false,
	castIndex: 1,
	Statue: false
};
var Anubis1 = new Anubis(1,150);
var Anubis2 = new Anubis(2,450);
var Anubises = {1: Anubis1, 2: Anubis2};

var MegaMummy = {
	type: "MegaMummy",
	x: 9000,
	onTree: 0,
	y: -400,
	xqueue: 9000,
	yqueue: -400,
	bandX: 9000,
	bandY: -400,
	width: 224,
	height: 168,
	speed: 2,
	speed2: 1,
	dirct: 0,
	dir: "W",
	LR: "",
	hp: 12,
	hptimer: 0,
	spawnTimer: -1,
	respawn: -1,
	rp: -1,
	onScreen: 0,
	movement: false,
	pts: 8000,
	index: 1,
	lastWalkIndex: 1,
	frame: 0,
	bandageFrame: 0,
	draw: function(){
		if(this.spawnTimer > 0){
			this.spawnTimer-=1;
		}
		if(this.spawnTimer == 16){
			this.lastWalkIndex = 1;
			//let mummies spawn again
			for(S in Sandpits){
				Sandpits[S].Mummy = false;
			}
		}
		if(this.spawnTimer < 16 && this.spawnTimer > 0){
			ctx.drawImage(MegaMummySpawn[Math.ceil(this.lastWalkIndex*0.5)], this.xqueue, this.yqueue);
			this.lastWalkIndex++;
		}
		if(this.spawnTimer == 0){
			this.spawnTimer-=1;
			this.x = this.xqueue+this.width*0.5;
			this.y = this.yqueue+this.height*0.5;
			this.movement = true;
			this.onScreen = 1;
			this.frame = 0;
			this.speed = 2;
			this.speed2 = 1;
			this.lastWalkIndex = 1;
			this.bandageFrame = 0;
		}
		if(this.onScreen){
			this.frame++;
			if(this.hptimer > 0){
				this.hptimer-=1;
			}
			if(this.hptimer*0.5 != Math.round(this.hptimer*0.5)){
				ctx.globalAlpha = Alpha*0.5;
			}
			if(this.dir == "WA" || this.dir == "AS" || this.dir == "A"){
				this.LR = "Left";
				if(this.frame > 240){
					ctx.drawImage(MegaMummySheet, 256*(Math.ceil(this.lastWalkIndex*0.33) - 1), 1056, 256, 176, this.x-this.width * 0.5-48, this.y-this.height * 0.5, 256, 176);
				}
				else if(this.frame > 180){
					ctx.drawImage(MegaMummySheet, 256*(Math.ceil(this.index*0.33)-1), 704, 256, 176, this.x-this.width * 0.5, this.y-this.height * 0.5, 256, 176);
				}
				else if(this.frame > 120){
					ctx.drawImage(MegaMummySheet, 256*(Math.ceil(this.index*0.33)-1), 352, 256, 176, this.x-this.width * 0.5, this.y-this.height * 0.5, 256, 176);
				}
				else{
					ctx.drawImage(MegaMummySheet, 256*(Math.ceil(this.index*0.33)-1), 0, 256, 176, this.x-this.width * 0.5, this.y-this.height * 0.5, 256, 176);
				}
			}
			else if(this.dir == "WD" || this.dir == "SD" || this.dir == "D"){
				if(this.frame > 240){
					ctx.drawImage(MegaMummySheet, 256*(Math.ceil(this.lastWalkIndex*0.33)-1), 1232, 256, 176, this.x-this.width * 0.5-64, this.y-this.height * 0.5, 256, 176);
				}
				else if(this.frame > 180){
					ctx.drawImage(MegaMummySheet, 256*(Math.ceil(this.index*0.33)-1), 880, 256, 176, this.x-this.width * 0.5, this.y-this.height * 0.5, 256, 176);
				}
				else if(this.frame > 120){
					ctx.drawImage(MegaMummySheet, 256*(Math.ceil(this.index*0.33)-1), 528, 256, 176, this.x-this.width * 0.5, this.y-this.height * 0.5, 256, 176);
				}
				else{
					ctx.drawImage(MegaMummySheet, 256*(Math.ceil(this.index*0.33)-1), 176, 256, 176, this.x-this.width * 0.5, this.y-this.height * 0.5, 256, 176);
				}
				this.LR = "Right";
			}
			else if(this.LR == "Left"){
				if(this.frame > 240){
					ctx.drawImage(MegaMummySheet, 256*(Math.ceil(this.lastWalkIndex*0.33) - 1), 1056, 256, 176, this.x-this.width * 0.5-48, this.y-this.height * 0.5, 256, 176);
				}
				else if(this.frame > 180){
					ctx.drawImage(MegaMummySheet, 256*(Math.ceil(this.index*0.33)-1), 704, 256, 176, this.x-this.width * 0.5, this.y-this.height * 0.5, 256, 176);
				}
				else if(this.frame > 120){
					ctx.drawImage(MegaMummySheet, 256*(Math.ceil(this.index*0.33)-1), 352, 256, 176, this.x-this.width * 0.5, this.y-this.height * 0.5, 256, 176);
				}
				else{
					ctx.drawImage(MegaMummySheet, 256*(Math.ceil(this.index*0.33)-1), 0, 256, 176, this.x-this.width * 0.5, this.y-this.height * 0.5, 256, 176);
				}
			}
			else{
				if(this.frame > 240){
					ctx.drawImage(MegaMummySheet, 256*(Math.ceil(this.lastWalkIndex*0.33)-1), 1232, 256, 176, this.x-this.width * 0.5-64, this.y-this.height * 0.5, 256, 176);
				}
				else if(this.frame > 180){
					ctx.drawImage(MegaMummySheet, 256*(Math.ceil(this.index*0.33)-1), 880, 256, 176, this.x-this.width * 0.5, this.y-this.height * 0.5, 256, 176);
				}
				else if(this.frame > 120){
					ctx.drawImage(MegaMummySheet, 256*(Math.ceil(this.index*0.33)-1), 528, 256, 176, this.x-this.width * 0.5, this.y-this.height * 0.5, 256, 176);
				}
				else{
					ctx.drawImage(MegaMummySheet, 256*(Math.ceil(this.index*0.33)-1), 176, 256, 176, this.x-this.width * 0.5, this.y-this.height * 0.5, 256, 176);
				}
			}
			if(this.frame == 240){
				this.speed = 4;
				this.speed2 = 2;
			}
			if(this.frame > 240){
				this.lastWalkIndex++;
				if(this.lastWalkIndex > 24){
					this.lastWalkIndex = 1;
				}
				this.width = 128;
				this.height = 160;
			}
			else{
				this.index++;
				if(this.index > 18){
					this.index = 1;
				}
				this.width = 224;
				this.height = 168;
			}
			if (this.hptimer*0.5 != Math.round(this.hptimer*0.5)){
				ctx.globalAlpha = Alpha;
			}
			//bandages
			if(this.frame == 120 || this.frame == 180 || this.frame == 240){
				this.bandageFrame = 1;
				this.bandX = this.x;
				this.bandY = this.y;
			}
			if(this.bandageFrame > 0){
				if(this.LR == "Right"){
					ctx.drawImage(MegaMummySheet, 256*(Math.ceil(this.bandageFrame*0.1)-1), 1584, 256, 176, this.bandX-this.width * 0.5, this.bandY-this.height * 0.5, 256, 176);
				}
				else{
					ctx.drawImage(MegaMummySheet, 256*(Math.ceil(this.bandageFrame*0.1)-1), 1408, 256, 176, this.bandX-this.width * 0.5, this.bandY-this.height * 0.5, 256, 176);
				}
				this.bandageFrame++;
				if(this.bandageFrame > 30){
					this.bandageFrame = 0;
				}
			}
			if(this.frame > 240){
				hpBarDraw(this);
			}
		}
	}
};
//---------------------------------------------- Tier 3 Bosses ----------------------------------------------------------------------//
var MasterThief = {
	type: "MasterThief",
	spell1: "N/A",
	spell2: "N/A",
	queue: 0,
	x: 9000,
	onTree: 0,
	y: -400,
	width: 120,
	height: 96,
	speed: 2,
	speed2: 1,
	dirct: 0,
	dir: "W",
	LR: "Left",
	respawn: 0,
	rp: -1,
	onScreen: 0,
	spawned: 0,
	movement: false,
	hp: 8,
	hptimer: 0,
	pts: 25000,
	cd: 90,
	feetTimer: 0,
	draw: function(){
		if(this.onScreen == 1){
			if(this.hptimer>0){
				this.hptimer-=1;
			}
			if (this.hptimer*0.5 != Math.round(this.hptimer*0.5) && this.hp > 3){
				ctx.globalAlpha = Alpha*0.5;
			}
			if(this.hp < 4){
				if(this.feetTimer > 0){
					this.feetTimer-=1;
				}
				else{
					if(Foot12.onScreen != 1){
						Foot12.onScreen = 1;
						Foot12.timeLeft = 90;
						Foot12.x = this.x;
						Foot12.y = this.y;
						Foot12.LR = this.LR;
						this.feetTimer = 15;
					}
					else if(Foot11.onScreen != 1){
						Foot11.onScreen = 1;
						Foot11.timeLeft = 90;
						Foot11.x = this.x;
						Foot11.y = this.y;
						Foot11.LR = this.LR;
						this.feetTimer = 15;
					}
					else if(Foot10.onScreen != 1){
						Foot10.onScreen = 1;
						Foot10.timeLeft = 90;
						Foot10.x = this.x;
						Foot10.y = this.y;
						Foot10.LR = this.LR;
						this.feetTimer = 15;
					}
					else if(Foot9.onScreen != 1){
						Foot9.onScreen = 1;
						Foot9.timeLeft = 90;
						Foot9.x = this.x;
						Foot9.y = this.y;
						Foot9.LR = this.LR;
						this.feetTimer = 15;
					}
					else if(Foot8.onScreen != 1){
						Foot8.onScreen = 1;
						Foot8.timeLeft = 90;
						Foot8.x = this.x;
						Foot8.y = this.y;
						Foot8.LR = this.LR;
						this.feetTimer = 15;
					}
					else if(Foot7.onScreen != 1){
						Foot7.onScreen = 1;
						Foot7.timeLeft = 90;
						Foot7.x = this.x;
						Foot7.y = this.y;
						Foot7.LR = this.LR;
						this.feetTimer = 15;
					}
					else if(Foot6.onScreen != 1){
						Foot6.onScreen = 1;
						Foot6.timeLeft = 90;
						Foot6.x = this.x;
						Foot6.y = this.y;
						Foot6.LR = this.LR;
						this.feetTimer = 15;
					}
					else if(Foot5.onScreen != 1){
						Foot5.onScreen = 1;
						Foot5.timeLeft = 90;
						Foot5.x = this.x;
						Foot5.y = this.y;
						Foot5.LR = this.LR;
						this.feetTimer = 15;
					}
					else if(Foot4.onScreen != 1){
						Foot4.onScreen = 1;
						Foot4.timeLeft = 90;
						Foot4.x = this.x;
						Foot4.y = this.y;
						Foot4.LR = this.LR;
						this.feetTimer = 15;
					}
					else if(Foot3.onScreen != 1){
						Foot3.onScreen = 1;
						Foot3.timeLeft = 90;
						Foot3.x = this.x;
						Foot3.y = this.y;
						Foot3.LR = this.LR;
						this.feetTimer = 15;
					}
					else if(Foot2.onScreen != 1){
						Foot2.onScreen = 1;
						Foot2.timeLeft = 90;
						Foot2.x = this.x;
						Foot2.y = this.y;
						Foot2.LR = this.LR;
						this.feetTimer = 15;
					}
					else{
						Foot1.onScreen = 1;
						Foot1.timeLeft = 90;
						Foot1.x = this.x;
						Foot1.y = this.y;
						Foot1.LR = this.LR;
						this.feetTimer = 15;
					}
				}
			}
			else if(sAir.onScreen != 1){
				if(this.LR == "Left"){
					ctx.drawImage(ThiefBossPicL, this.x - this.width * 0.5, this.y - this.height * 0.5);
				}
				else if(this.LR == "Right"){
					ctx.drawImage(ThiefBossPicR, this.x - this.width * 0.5, this.y - this.height * 0.5);
				}
			}
			else{
				if(this.LR == "Left"){
					ctx.drawImage(ThiefBossDashL, this.x - this.width * 0.5, this.y - this.height * 0.5);
				}
				else if(this.LR == "Right"){
					ctx.drawImage(ThiefBossDashR, this.x - this.width * 0.5, this.y - this.height * 0.5);
				}
			}
			if(this.dir == "WA" || this.dir == "AS" || this.dir == "A"){
				this.LR = "Left";
			}
			else if(this.dir == "WD" || this.dir == "SD" || this.dir == "D"){
				this.LR = "Right";
			}
			if (this.hptimer*0.5 != Math.round(this.hptimer*0.5)){
				ctx.globalAlpha = Alpha;
			}
			if(this.hp > 3){
				hpBarDraw(this);
			}
			if(this.hp > 3){
				if(this.spell1 != "N/A"){
					if(this.spell1 == "Fire"){
						ctx.drawImage(FireIcon, this.x-this.width*0.25, this.y - this.height + 16);
					}
					if(this.spell1 == "Ice"){
						ctx.drawImage(IceIcon, this.x-this.width*0.25, this.y - this.height + 16);
					}
					if(this.spell1 == "Earth"){
						ctx.drawImage(EarthIcon, this.x-this.width*0.25, this.y - this.height + 16);
					}
					if(this.spell1 == "Lightning"){
						ctx.drawImage(LightningIcon, this.x-this.width*0.25, this.y - this.height + 16);
					}
					if(this.spell1 == "Air"){
						ctx.drawImage(AirIcon, this.x-this.width*0.25, this.y - this.height + 16);
					}
					if(this.spell1 == "Mystic"){
						ctx.drawImage(MysticIcon, this.x-this.width*0.25, this.y - this.height + 16);
					}
					if(this.spell1 == "Water"){
						ctx.drawImage(WaterIcon, this.x-this.width*0.25, this.y - this.height + 16);
					}
					if(this.spell1 == "Dark"){
						ctx.drawImage(DarkIcon, this.x-this.width*0.25, this.y - this.height + 16);
					}
					if(this.spell1 == "Light"){
						ctx.drawImage(LightIcon, this.x-this.width*0.25, this.y -this.height+16);
					}
				}
				if(this.spell2 != "N/A"){
					if(this.spell2 == "Fire"){
						ctx.drawImage(FireIcon, this.x-this.width/9, this.y - this.height + 16);
					}
					if(this.spell2 == "Ice"){
						ctx.drawImage(IceIcon, this.x-this.width/9, this.y - this.height + 16);
					}
					if(this.spell2 == "Earth"){
						ctx.drawImage(EarthIcon, this.x-this.width/9, this.y - this.height + 16);
					}
					if(this.spell2 == "Lightning"){
						ctx.drawImage(LightningIcon, this.x-this.width/9, this.y - this.height + 16);
					}
					if(this.spell2 == "Air"){
						ctx.drawImage(AirIcon, this.x-this.width/9, this.y - this.height + 16);
					}
					if(this.spell2 == "Mystic"){
						ctx.drawImage(MysticIcon, this.x-this.width/9, this.y - this.height + 16);
					}
					if(this.spell2 == "Water"){
						ctx.drawImage(WaterIcon, this.x-this.width/9, this.y - this.height + 16);
					}
					if(this.spell2 == "Dark"){
						ctx.drawImage(DarkIcon, this.x-this.width/9, this.y - this.height + 16);
					}
					if(this.spell2 == "Light"){
						ctx.drawImage(LightIcon, this.x-this.width/9, this.y - this.height+16);
					}
				}
			}
		}
	},
	spawn: function(){
		if(this.cd > 0 && this.onScreen == 1){
			this.cd-=1;
		}
		if(STATE == "Jungle" && this.queue >= 2){
			var queue = true;
			this.spawned = 1;
			for(E in AllEnemies){
				if(AllEnemies[E].onScreen == 1 && AllEnemies[E].type != "Thief"){
					queue = false;
				}
			}
		}
		if(queue){
			this.x = 400;
			this.y = 288;
			while(obsCollision(obstacle1, this, this.dir)){
				this.x+=8;
			}
			this.onScreen = 1;
			this.movement = true;
			MSmokeBomb.x1 = this.x;
			MSmokeBomb.y1 = this.y;
			MSmokeBomb.frame = 0;
			MSmokeBomb.onScreen = 1;
			MSmokeBomb.draaw = 1;
			MSmokeBomb.used = 0;
			AList[4] = true;
			BadWizards.currentTime = 0;
		}
		if(collision(this.dir, this, player) && (hptimer <= 0 || hptimer == 30)){
			if(spell2 != "N/A"){
				if(this.spell1 == "N/A"){
					this.spell1 = spell2;
				}
				else if(this.spell2 == "N/A"){
					this.spell2 = spell2;
				}
				spell2 = "N/A";
				typemarker3.x = player.x-player.width*0.5 - 32;
				typemarker3.y = player.y-player.height*0.5;
				typemarker3.timeLeft = 30;
				typemarker3.text = "Stolen!";
				earth.cast = -1;
				earth2.cast = -1;
				lightning.cast = -1;
				lightning2.cast = -1;
				firelightning.cast = -1;
				dark2.cast = -1;
				airice.cast = -1;
				darkwater.cast = -1;
				ice.cast = -1;
				fire.cast = -1;
				air.cast = -1;
				mystic.cast = -1;
				water.cast = -1;
				lightearth.cast = -1;
				player.speed = 8;
				Alpha = 1;
				lightearth.onScreen = 0;
				castingBar.x = player.x - player.width*0.5;
				castingBar.y = player.y + player.height*0.5;
				castingBar.width = player.width;
				castingBar.height = player.height*0.25;
				castingBar.width2 = 0;
				castingBar.onScreen = 0;
				castingBar.cast = -1;
				castingBar.castmax = 0;
			}
			else if(spell1 != "N/A"){
				if(this.spell1 == "N/A"){
					this.spell1 = spell1;
				}
				else if(this.spell2 == "N/A"){
					this.spell2 = spell1;
				}
				spell1 = "N/A";
				typemarker3.x = player.x-player.width*0.5 - 32;
				typemarker3.y = player.y-player.height*0.5;
				typemarker3.timeLeft = 30;
				typemarker3.text = "Stolen!";
				earth.cast = -1;
				earth2.cast = -1;
				lightning.cast = -1;
				lightning2.cast = -1;
				firelightning.cast = -1;
				dark2.cast = -1;
				airice.cast = -1;
				darkwater.cast = -1;
				ice.cast = -1;
				fire.cast = -1;
				air.cast = -1;
				mystic.cast = -1;
				lightearth.cast = -1;
				water.cast = -1;
				player.speed = 8;
				Alpha = 1;
				lightearth.onScreen = 0;
				castingBar.x = player.x - player.width*0.5;
				castingBar.y = player.y + player.height*0.5;
				castingBar.width = player.width;
				castingBar.height = player.height*0.25;
				castingBar.width2 = 0;
				castingBar.onScreen = 0;
				castingBar.cast = -1;
				castingBar.castmax = 0;
			}
		}
		if(this.cd == 0 && this.onScreen == 1){
			if(this.spell1 != "N/A" && this.spell2 != "N/A" && this.hp < 7){
				this.cd = 60;
				MThiefHeal.shoot();
			}
			else if(this.speed > 0){
				sAir.shoot();
				this.cd = 90;
			}
		}
	}
};
var MasterTEffect = {
	x: 500,
	y: -400,
	width: 32,
	height: 32,
	onScreen: 0,
	frame: 0,
	played: 0,
	cd: 90,
	draw: function(){
		if(this.onScreen == 1){
			if(this.played == 0){
				this.played = 1;
				trailingbeeps.currentTime=0;
				trailingbeeps.play();
			}
			if(Alpha/(2+this.frame*0.1) < 0.1){
				ctx.globalAlpha = 0;
			}
			else{
				ctx.globalAlpha = Alpha/(2+this.frame*0.1);
			}
			ctx.fillStyle = "black";
			ctx.fillRect(this.x-this.width*0.5, this.y-this.height*0.5, this.width, this.height);
			this.width = this.width + 8*this.frame;
			this.height = this.height + 8*this.frame;
			this.frame++;
			ctx.globalAlpha = Alpha;
		}
		if(MasterThief.onScreen == 1 && this.cd <=0){
			this.cd = 210;
			RandEffect.onScreen = 1;
			RandEffect.used = 0;
			RandEffect.x = 400;
			RandEffect.y = 288;
			RandomCube.timeLeft = 150;
			RandomCube.x = 400;
			RandomCube.y = 288;
			RandEffect2.onScreen = 1;
			RandEffect2.used = 0;
			RandEffect2.x = 64;
			RandEffect2.y = 64;
			RandomCube2.timeLeft = 150;
			RandomCube2.x = 64;
			RandomCube2.y = 64;
			RandEffect3.onScreen = 1;
			RandEffect3.used = 0;
			RandEffect3.x = 736;
			RandEffect3.y = 64;
			RandomCube3.timeLeft = 150;
			RandomCube3.x = 736;
			RandomCube3.y = 64;
			RandEffect4.onScreen = 1;
			RandEffect4.used = 0;
			RandEffect4.x = 64;
			RandEffect4.y = 512;
			RandomCube4.timeLeft = 150;
			RandomCube4.x = 64;
			RandomCube4.y = 512;
			RandEffect5.onScreen = 1;
			RandEffect5.used = 0;
			RandEffect5.x = 736;
			RandEffect5.y = 512;
			RandomCube5.timeLeft = 150;
			RandomCube5.x = 736;
			RandomCube5.y = 512;
		}
		else if(MasterThief.onScreen == 1){
			this.cd-=1;
		}
	}
};
//Footprints
function Foot(){};
Foot.prototype = {
	x: 500,
	y: -400,
	width: 120,
	height: 96,
	onScreen: 0,
	timeLeft: 0,
	LR: "",
	tick: function(){
		if(this.onScreen == 1){
			if(this.timeLeft > 0){
				this.timeLeft-=1;
			}
			if(this.timeLeft == 0){
				this.x = 500;
				this.y = -400;
				this.onScreen = 0;
			}
		}
	},
	draw: function(){
		if(this.onScreen == 1){
			if(MasterThief.hptimer*0.5 != Math.round(MasterThief.hptimer*0.5)){
				if(this.LR == "Right"){
					ctx.drawImage(ThiefBossFlashPrintR, this.x-this.width*0.5, this.y-this.height*0.5);
				}
				else{
					ctx.drawImage(ThiefBossFlashPrintL, this.x-this.width*0.5, this.y-this.height*0.5);
				}
			}
			else if(this.LR == "Right"){
				ctx.drawImage(ThiefBossPrintR, this.x-this.width*0.5, this.y-this.height*0.5);
			}
			else{
				ctx.drawImage(ThiefBossPrintL, this.x-this.width*0.5, this.y-this.height*0.5);
			}
		}
	}
};
var Foot1 = new Foot();
var Foot2 = new Foot();
var Foot3 = new Foot();
var Foot4 = new Foot();
var Foot5 = new Foot();
var Foot6 = new Foot();
var Foot7 = new Foot();
var Foot8 = new Foot();
var Foot9 = new Foot();
var Foot10 = new Foot();
var Foot11 = new Foot();
var Foot12 = new Foot();
var Feet = {1: Foot1, 2: Foot2, 3: Foot3, 4: Foot4, 5: Foot5, 6: Foot6, 7: Foot7, 8: Foot8, 9: Foot9, 10: Foot10, 11: Foot11, 12: Foot12};

//GENIE
var Genie = {
	type: "Genie",
	x: 9000,
	y: -400,
	onTree: 0,
	width: 64,
	height: 64,
	speed: 2,
	speed2: 1,
	dirct: 0,
	dir: "W",
	LR: "Left",
	respawn: 300,
	queue: 0,
	queue2: 0,
	rp: -1,
	onScreen: 0,
	spawned: 0,
	movement: false,
	hp: 10,
	hptimer: 0,
	spell: "N/A",
	pts: 25000,
	cd: 90,
	spawnIndex: 1,
	lasering: false,
	//stop repetitive lasers
	lasered: false,
	laserIndex: 1,
	j: 0,
	spawnDone: false,
	laserable: false,
	draw: function(){
		if(this.onScreen == 1){
			if(!this.spawnDone){
				ctx.drawImage(GenieSheet, 360*(GenieSpawn[this.spawnIndex]-1), 360, 360, 360, this.x-this.width*0.5-104-64, this.y-this.height*0.5-124 - 124, 360, 360);
				this.spawnIndex++;
				if(this.spawnIndex > 36){
					this.spawnDone = true;
					this.movement = true;
				}
			}
			else{
				if(this.hptimer>0){
					this.hptimer-=1;
				}
				if (this.hptimer*0.5 != Math.round(this.hptimer*0.5)){
					ctx.globalAlpha = Alpha*0.5;
				}
				if(this.cd > 90 || this.lasering){
					if(this.spell == "Meteor"){
						if(this.LR == "Left"){
							ctx.drawImage(GenieSheet, 720, 0, 360, 360, this.x-this.width*0.5-104-64, this.y-this.height*0.5-124 - 124, 360, 360);
						}
						else{
							ctx.drawImage(GenieSheet, 1080, 0, 360, 360, this.x-this.width*0.5-104-64, this.y-this.height*0.5-124 - 124, 360, 360);
						}
					}
					else if(this.spell == "Summon"){
						if(this.LR == "Left"){
							ctx.drawImage(GenieSheet, 1440, 0, 360, 360, this.x-this.width*0.5-104-64, this.y-this.height*0.5-124 - 124, 360, 360);
						}
						else{
							ctx.drawImage(GenieSheet, 1800, 0, 360, 360, this.x-this.width*0.5-104-64, this.y-this.height*0.5-124 - 124, 360, 360);
						}
					}
					else if(this.spell == "Laser" || this.lasering){
						if(this.LR == "Left"){
							ctx.drawImage(GenieSheet, 2160 + 360*(this.laserIndex-1), 0, 360, 360, this.x-this.width*0.5-104-64, this.y-this.height*0.5-124 - 124, 360, 360);
						}
						else{
							ctx.drawImage(GenieSheet, 3240 + 360*(this.laserIndex-1), 0, 360, 360, this.x-this.width*0.5-104-64, this.y-this.height*0.5-124 - 124, 360, 360);
						}
						this.laserIndex++;
						if(this.laserIndex > 3){
							this.laserIndex = 1;
						}
					}
				}
				else{
					if(this.dir == "WA" || this.dir == "AS" || this.dir == "A"){
						this.LR = "Left";
						ctx.drawImage(GenieSheet, 0, 0, 360, 360, this.x-this.width*0.5-104-64, this.y-this.height*0.5-124 - 124, 360, 360);
					}
					else if(this.dir == "WD" || this.dir == "SD" || this.dir == "D"){
						this.LR = "Right";
						ctx.drawImage(GenieSheet, 360, 0, 360, 360, this.x-this.width*0.5-104-64, this.y-this.height*0.5-124 - 124, 360, 360);
					}
					else if(this.LR == "Left"){
						ctx.drawImage(GenieSheet, 0, 0, 360, 360, this.x-this.width*0.5-104-64, this.y-this.height*0.5-124 - 124, 360, 360);
					}
					else{
						ctx.drawImage(GenieSheet, 360, 0, 360, 360, this.x-this.width*0.5-104-64, this.y-this.height*0.5-124 - 124, 360, 360);
					}
				}
				if (this.hptimer*0.5 != Math.round(this.hptimer*0.5)){
					ctx.globalAlpha = Alpha;
				}
				hpBarDraw(this);
			}
		}else if(Lamp.onScreen && !this.onScreen){
			this.spawn(1);
		}
	},
	spawn: function(x){
		if(this.cd > 0 && this.onScreen == 1){
			this.cd-=1;
		}
		if(!this.spawned && hpUp.x == -100){
			if(FireGhost.spawned == 0){
				this.respawn-=1;
			}
		}
		if(this.respawn ==0){
			this.queue = 1;
			
		}
		if(this.queue && (this.j || x)){
			this.spawned = 1;
			this.j = 1;
			var queue = true;
			for(E in AllEnemies){
				if(AllEnemies[E].onScreen == 1 && AllEnemies[E] != Lamp){
					queue = false;
				}
			}
			if(queue){
				this.respawn-=1;
				this.x = this.spawnxy.x;
				this.y = this.spawnxy.y;
				this.j = 0;
				this.onScreen = 1;
				BadWizards.currentTime = 0;
				GenieSpawnSound.currentTime = 0;
				GenieSpawnSound.play();
				AList[5] = true;
			}
		}
		if(this.cd == 90 && this.onScreen && this.spawnDone){
			this.movement = true;
		}
		//delay spawn
		if(this.spell == "Summon" && this.cd == 97){
			SpawnerSpawn.currentTime = 0;
			SpawnerSpawn.play();
			MiniMum1.LR = this.LR;
			MiniMum2.LR = this.LR;
			MiniMum3.LR = this.LR;
			MiniMum4.LR = this.LR;
			MiniMum1.movement = false;
			MiniMum2.movement = false;
			MiniMum3.movement = false;
			MiniMum4.movement = false;
			MiniMum1.onScreen = 1;
			MiniMum2.onScreen = 1;
			MiniMum3.onScreen = 1;
			MiniMum4.onScreen = 1;
			MiniMum1.hptimer = 0;
			MiniMum2.hptimer = 0;
			MiniMum3.hptimer = 0;
			MiniMum4.hptimer = 0;
			MiniMum1.hp = 4;
			MiniMum2.hp = 4;
			MiniMum3.hp = 4;
			MiniMum4.hp = 4;
			MiniMum1.spawned = false;
			MiniMum2.spawned = false;
			MiniMum3.spawned = false;
			MiniMum4.spawned = false;
			if(this.LR == "Left"){
				MiniMum1.x = this.x - 128;
				MiniMum2.x = this.x - 128;
				MiniMum3.x = this.x - 128;
				MiniMum4.x = this.x - 128;
				MiniMum1.y = this.y - 128;
				MiniMum2.y = this.y - 64;
				MiniMum3.y = this.y;
				MiniMum4.y = this.y + 64;
			}
			else{
				MiniMum1.x = this.x + 128;
				MiniMum2.x = this.x + 128;
				MiniMum3.x = this.x + 128;
				MiniMum4.x = this.x + 128;
				MiniMum1.y = this.y - 128;
				MiniMum2.y = this.y - 64;
				MiniMum3.y = this.y;
				MiniMum4.y = this.y + 64;
			}
		}
		if(this.cd == 0 && this.onScreen == 1){
			this.lasered = false;
			this.laserable = true;
			var newSpell = Math.floor(Math.random()*3) + 1;
			if(newSpell == 1){
				this.cd = 165;
				this.spell = "Meteor";
				EMeteor13.timer = 15;
				EMeteor14.timer = 30;
				EMeteor15.timer = 45;
				EMeteor16.timer = 60;
				this.dirct = 75;
				this.movement = false;
			}
			else if(newSpell == 2 && MiniMum1.onScreen != 1 && MiniMum2.onScreen != 1 && MiniMum3.onScreen != 1 && MiniMum4.onScreen != 1){
				this.cd = 127;
				this.spell = "Summon";
				this.movement = false;
				this.dirct = 37;
			}
		}
		if(this.cd > 20 && this.spawnDone && this.laserable && this.cd < 80 && !this.lasering && !this.lasered){
			//pick laser: find zone player is in and base laser off direction etc
			//far top
			if(this.LR == "Left"){
				if(player.x >= this.x-this.width*0.5-64-104-480+32 && player.x <= this.x-this.width*0.5-64-104-480+205 &&
					player.y >= this.y-this.height*0.5-124 - 124+156 + 103 && player.y <= this.y-this.height*0.5-124 - 124+156 + 256){
					if(player.dir == "S"){
						LaserFdAttack.onScreen = 1;
						LaserFdAttack.LR = "Left";
					}
					else{
						LaserUpAttack.onScreen = 1;
						LaserUpAttack.LR = "Left";
					}
					this.spell = "Laser";
					this.movement = false;
					this.dirct = 16;
					this.lasering = true;
					this.lasered = true;
					GenieLaserSound.currentTime = 0;
					GenieLaserSound.play();
				}
				//far bot
				else if(player.x >= this.x-this.width*0.5-64-104-480+32 && player.x <= this.x-this.width*0.5-64-104-480+205 &&
					player.y >= this.y-this.height*0.5-124 - 124+156 + 256 && player.y <= this.y-this.height*0.5-124 - 124+156 + 393){
					if(player.dir == "W"){
						LaserFdAttack.onScreen = 1;
						LaserFdAttack.LR = "Left";
					}
					else{
						LaserDAttack.onScreen = 1;
						LaserDAttack.LR = "Left";
					}
					this.spell = "Laser";
					this.movement = false;
					this.dirct = 16;
					this.lasering = true;
					this.lasered = true;
					GenieLaserSound.currentTime = 0;
					GenieLaserSound.play();
				}
				//mid top
				else if(player.x >= this.x-this.width*0.5-64-104-480+205 && player.x <= this.x-this.width*0.5-64-104-480+368 &&
					player.y >= this.y-this.height*0.5-124 - 124+156 + 103 && player.y <= this.y-this.height*0.5-124 - 124+156 + 256){
					if(player.dir == "D"){
						LaserDAttack.onScreen = 1;
						LaserDAttack.LR = "Left";
						this.spell = "Laser";
						this.movement = false;
						this.dirct = 16;
						this.lasering = true;
						this.lasered = true;
						GenieLaserSound.currentTime = 0;
						GenieLaserSound.play();
					}
					else if(player.dir == "A"){
						LaserUpAttack.onScreen = 1;
						LaserUpAttack.LR = "Left";
						this.spell = "Laser";
						this.movement = false;
						this.dirct = 16;
						this.lasering = true;
						this.lasered = true;
						GenieLaserSound.currentTime = 0;
						GenieLaserSound.play();
					}
					else if(player.dir == "S"){
						LaserFdAttack.onScreen = 1;
						LaserFdAttack.LR = "Left";
						this.spell = "Laser";
						this.movement = false;
						this.dirct = 16;
						this.lasering = true;
						this.lasered = true;
						GenieLaserSound.currentTime = 0;
						GenieLaserSound.play();
					}
				}
				//mid bot
				else if(player.x >= this.x-this.width*0.5-64-104-480+205 && player.x <= this.x-this.width*0.5-64-104-480+368 &&
					player.y >= this.y-this.height*0.5-124 - 124+156 + 256 && player.y <= this.y-this.height*0.5-124 - 124+156 + 393){
					if(player.dir == "D"){
						LaserUpAttack.onScreen = 1;
						LaserUpAttack.LR = "Left";
						this.spell = "Laser";
						this.movement = false;
						this.dirct = 16;
						this.lasering = true;
						this.lasered = true;
						GenieLaserSound.currentTime = 0;
						GenieLaserSound.play();
					}
					else if(player.dir == "A"){
						LaserDAttack.onScreen = 1;
						LaserDAttack.LR = "Left";
						this.spell = "Laser";
						this.movement = false;
						this.dirct = 16;
						this.lasering = true;
						this.lasered = true;
						GenieLaserSound.currentTime = 0;
						GenieLaserSound.play();
					}
					else if(player.dir == "W"){
						LaserFdAttack.onScreen = 1;
						LaserFdAttack.LR = "Left";
						this.spell = "Laser";
						this.movement = false;
						this.dirct = 16;
						this.lasering = true;
						this.lasered = true;
						GenieLaserSound.currentTime = 0;
						GenieLaserSound.play();
					}
				}
				//near top
				else if(player.x >= this.x-this.width*0.5-64-104-480+368 && player.x <= this.x-this.width*0.5-64-104-480+546 &&
					player.y >= this.y-this.height*0.5-124 - 124+156 + 103 && player.y <= this.y-this.height*0.5-124 - 124+156 + 248){
					if(player.dir == "S"){
						LaserFdAttack.onScreen = 1;
						LaserFdAttack.LR = "Left";
					}
					else{
						LaserDAttack.onScreen = 1;
						LaserDAttack.LR = "Left";
					}
					this.spell = "Laser";
					this.movement = false;
					this.dirct = 16;
					this.lasering = true;
					this.lasered = true;
					GenieLaserSound.currentTime = 0;
					GenieLaserSound.play();
				}
				//near bot
				else if(player.x >= this.x-this.width*0.5-64-104-480+368 && player.x <= this.x-this.width*0.5-64-104-480+546 &&
					player.y >= this.y-this.height*0.5-124 - 124+156 + 248 && player.y <= this.y-this.height*0.5-124 - 124+156 + 393){
					if(player.dir == "W"){
						LaserFdAttack.onScreen = 1;
						LaserFdAttack.LR = "Left";
					}
					else{
						LaserUpAttack.onScreen = 1;
						LaserUpAttack.LR = "Left";
					}
					this.spell = "Laser";
					this.movement = false;
					this.dirct = 16;
					this.lasering = true;
					this.lasered = true;
					GenieLaserSound.currentTime = 0;
					GenieLaserSound.play();
				}
			}
			else{
				//right side, +200 is offset
				//far top
				if(player.x >= this.x-this.width*0.5-64-104+200+451 && player.x <= this.x-this.width*0.5-64-104+200+624 &&
					player.y >= this.y-this.height*0.5-124 - 124+156 + 103 && player.y <= this.y-this.height*0.5-124 - 124+156 + 256){
					if(player.dir == "S"){
						LaserFdAttack.onScreen = 1;
						LaserFdAttack.LR = "Right";
					}
					else{
						LaserUpAttack.onScreen = 1;
						LaserUpAttack.LR = "Right";
					}
					this.spell = "Laser";
					this.movement = false;
					this.dirct = 16;
					this.lasering = true;
					this.lasered = true;
					GenieLaserSound.currentTime = 0;
					GenieLaserSound.play();
				}
				//far bot
				else if(player.x >= this.x-this.width*0.5-64-104+200+451 && player.x <= this.x-this.width*0.5-64-104+200+624 &&
					player.y >= this.y-this.height*0.5-124 - 124+156 + 256 && player.y <= this.y-this.height*0.5-124 - 124+156 + 393){
					if(player.dir == "W"){
						LaserFdAttack.onScreen = 1;
						LaserFdAttack.LR = "Right";
					}
					else{
						LaserDAttack.onScreen = 1;
						LaserDAttack.LR = "Right";
					}
					this.spell = "Laser";
					this.movement = false;
					this.dirct = 16;
					this.lasering = true;
					this.lasered = true;
					GenieLaserSound.currentTime = 0;
					GenieLaserSound.play();
				}
				//mid top
				else if(player.x >= this.x-this.width*0.5-64-104+200+288 && player.x <= this.x-this.width*0.5-64-104+200+451 &&
					player.y >= this.y-this.height*0.5-124 - 124+156 + 103 && player.y <= this.y-this.height*0.5-124 - 124+156 + 256){
					if(player.dir == "D"){
						LaserDAttack.onScreen = 1;
						LaserDAttack.LR = "Right";
						this.spell = "Laser";
						this.movement = false;
						this.dirct = 16;
						this.lasering = true;
						this.lasered = true;
						GenieLaserSound.currentTime = 0;
						GenieLaserSound.play();
					}
					else if(player.dir == "A"){
						LaserUpAttack.onScreen = 1;
						LaserUpAttack.LR = "Right";
						this.spell = "Laser";
						this.movement = false;
						this.dirct = 16;
						this.lasering = true;
						this.lasered = true;
						GenieLaserSound.currentTime = 0;
						GenieLaserSound.play();
					}
					else if(player.dir == "S"){
						LaserFdAttack.onScreen = 1;
						LaserFdAttack.LR = "Right";
						this.spell = "Laser";
						this.movement = false;
						this.dirct = 16;
						this.lasering = true;
						this.lasered = true;
						GenieLaserSound.currentTime = 0;
						GenieLaserSound.play();
					}
				}
				//mid bot
				else if(player.x >= this.x-this.width*0.5-64-104+200+288 && player.x <= this.x-this.width*0.5-64-104+200+451 &&
					player.y >= this.y-this.height*0.5-124 - 124+156 + 256 && player.y <= this.y-this.height*0.5-124 - 124+156 + 393){
					if(player.dir == "D"){
						LaserUpAttack.onScreen = 1;
						LaserUpAttack.LR = "Right";
						this.spell = "Laser";
						this.movement = false;
						this.dirct = 16;
						this.lasering = true;
						this.lasered = true;
						GenieLaserSound.currentTime = 0;
						GenieLaserSound.play();
					}
					else if(player.dir == "A"){
						LaserDAttack.onScreen = 1;
						LaserDAttack.LR = "Right";
						this.spell = "Laser";
						this.movement = false;
						this.dirct = 16;
						this.lasering = true;
						this.lasered = true;
						GenieLaserSound.currentTime = 0;
						GenieLaserSound.play();
					}
					else if(player.dir == "W"){
						LaserFdAttack.onScreen = 1;
						LaserFdAttack.LR = "Right";
						this.spell = "Laser";
						this.movement = false;
						this.dirct = 16;
						this.lasering = true;
						this.lasered = true;
						GenieLaserSound.currentTime = 0;
						GenieLaserSound.play();
					}
				}
				//near top
				else if(player.x >= this.x-this.width*0.5-64-104+200+112 && player.x <= this.x-this.width*0.5-64-104+200+290 &&
					player.y >= this.y-this.height*0.5-124 - 124+156 + 103 && player.y <= this.y-this.height*0.5-124 - 124+156 + 248){
					if(player.dir == "S"){
						LaserFdAttack.onScreen = 1;
						LaserFdAttack.LR = "Right";
					}
					else{
						LaserDAttack.onScreen = 1;
						LaserDAttack.LR = "Right";
					}
					this.spell = "Laser";
					this.movement = false;
					this.dirct = 16;
					this.lasering = true;
					this.lasered = true;
					GenieLaserSound.currentTime = 0;
					GenieLaserSound.play();
				}
				//near bot
				else if(player.x >= this.x-this.width*0.5-64-104+200+112 && player.x <= this.x-this.width*0.5-64-104+200+290 &&
					player.y >= this.y-this.height*0.5-124 - 124+156 + 248 && player.y <= this.y-this.height*0.5-124 - 124+156 + 393){
					if(player.dir == "W"){
						LaserFdAttack.onScreen = 1;
						LaserFdAttack.LR = "Right";
					}
					else{
						LaserUpAttack.onScreen = 1;
						LaserUpAttack.LR = "Right";
					}
					this.spell = "Laser";
					this.movement = false;
					this.dirct = 16;
					this.lasering = true;
					this.lasered = true;
					GenieLaserSound.currentTime = 0;
					GenieLaserSound.play();
				}
			}
		}
	}
};
var Lamp = {
	type: "Lamp",
	x: 500,
	y: -9000,
	onTree: 0,
	width: 32,
	height: 32,
	onScreen: 0,
	pts: 25000,
	dir: "W",
	cd: 0,
	index: 1,
	glowIndex: 1,
	target: "N/A",
	targetting: false,
	targx: 0,
	targy: 0,
	draw: function(){
		if(this.cd > 0){
			this.cd-=1;
		}
		//spawn from glowy meteor
		if(this.targetting && this.target.x == 2000){
			this.targetting = false;
			this.target = "N/A";
			this.x = this.targx;
			this.y = this.targy;
			this.onScreen = 1;
			this.index = 1;
			fastbeepsHigh.currentTime = 0;
			fastbeepsHigh.play();
		}
		if(this.onScreen == 1){
			if(this.index > 23){
				ctx.drawImage(Lampic, this.x-this.width*0.5, this.y-this.height*0.5);
			}
			else{
				ctx.drawImage(LampEntrance[this.index], this.x-this.width*0.5, this.y-this.height*0.5);
				this.index++;
			}
		}
		if(Genie.onScreen == 1 && this.cd == 0 && Genie.spawnDone){
			var SpawnInMeteor = Math.floor(Math.random() * 5) + 2;
			if(SpawnInMeteor > 1){
				this.x = (Math.floor(Math.random() * 10) + 2)*64;
				this.y = (Math.floor(Math.random()*7) + 2)*64;
				var landing = true;
				//dont land on obs or lava
				for(O in ObsList){
					if(collision("W", this, ObsList[O]) || collision("D", this, ObsList[O]) || ((this.x > 196 && this.x < 800 && this.y > 56 && this.y < 130) ||
						(this.x > 504 && this.x < 800 && this.y > 162 && this.y < 224) || (this.x > 0 && this.x < 562 && this.y > 392 && this.y < 508) ||
						(this.x < 588 && this.y > 506))){
						landing = false;
						this.x = -9000;
						this.y = -400
					}
				}
				if(landing){
					this.cd-=1;
					this.onScreen = 1;
					this.index = 1;
					fastbeepsHigh.currentTime = 0;
					fastbeepsHigh.play();
				}
			}
			//spawn in a meteor
			else{
				this.cd-=1;
				this.targetting = true;
				for(O in obstacle2){
					if(obstacle2[O].x != 2000){
						this.target = obstacle2[O];
						this.targx = obstacle2[O].x;
						this.targy = obstacle2[O].y;
						break;
					}
				}
				if(this.target == "N/A"){
					for(O in obstacle3){
						if(obstacle3[O].x != 2000){
							this.target = obstacle3[O];
							this.targx = obstacle3[O].x;
							this.targy = obstacle3[O].y;
							break;
						}
					}
				}
				if(this.target == "N/A"){
					for(O in obstacle1){
						if(obstacle1[O].x != 2000){
							this.target = obstacle1[O];
							this.targx = obstacle1[O].x;
							this.targy = obstacle1[O].y;
							break;
						}
					}
				}
			}
		}
	}
};
//lamp exit
var LampPoof = {
	x: 500,
	y: -400,
	width: 32,
	height: 32,
	onScreen: 0,
	index: 1,
	draw: function(){
		if(this.onScreen == 1){
			ctx.drawImage(Lampoofs[this.index], this.x, this.y);
			this.index++;
			if(this.index>9){
				this.index = 1;
				this.onScreen = 0;
			}
		}
	}
};
	
var GenieEffect = {
	x: 500,
	y: -400,
	width: 32,
	height: 32,
	onScreen: 0,
	frame: 0,
	played: 0,
	cd: 0,
	draw: function(){
		if(Genie.onScreen == 1 && this.cd <=0){
			if(spell1 == "N/A" && spell2 == "N/A"){
				this.cd = 360;
				RandEffect.onScreen = 1;
				RandEffect.used = 0;
				RandEffect.x = 400;
				RandEffect.y = 288;
				RandomCube.timeLeft = 150;
				RandomCube.x = 400;
				RandomCube.y = 288;
			}
		}
		else if(Genie.onScreen == 1){
			this.cd-=1;
		}
		if(this.onScreen == 1){
			if(Alpha/(2+this.frame*0.1) < 0.1){
				ctx.globalAlpha = 0;
			}
			else{
				ctx.globalAlpha = Alpha/(2+this.frame*0.1);
			}
			if(this.played == 0){
				this.played = 1;
				radiofailure.currentTime=0;
				radiofailure.play();
				STATE = "Desert";
				planted = false;
				rePlant();
			}
			ctx.fillStyle = "#DBA901";
			ctx.fillRect(this.x-this.width*0.5, this.y-this.height*0.5, this.width, this.height);
			this.width = this.width + 8*this.frame;
			this.height = this.height + 8*this.frame;
			this.frame++;
			ctx.globalAlpha = Alpha;
		}
	}
};
//mummy for genie boss
var MiniMum1 = {
	type: "MiniMummy",
	x: 2000,
	y: -9000,
	onTree: 0,
	width: 20,
	height: 24,
	speed: 4,
	speed2: 2,
	dirct: 0,
	hp: 4,
	hptimer: 0,
	respawn: -1,
	dir: "W",
	LR: "",
	rp: -1,
	pts: 1,
	onScreen: 0,
	spawned: false,
	spawnIndex: 1,
	movement: false,
	// Draws the enemy on the canvas when called
	draw: function(){
		if(this.onScreen == 1){
			if(this.hptimer >0){
				this.hptimer-=1;
			}
			if (this.hptimer*0.5 != Math.round(this.hptimer*0.5)){
				ctx.globalAlpha = Alpha*0.5;
			}
			if(!this.spawned){
				if(this.LR = "Left"){
					ctx.drawImage(BossMummySpawnL[Math.ceil(this.spawnIndex/3)], this.x - this.width * 0.5, this.y - this.height * 0.5);
				}
				else{
					ctx.drawImage(BossMummySpawnR[Math.ceil(this.spawnIndex/3)], this.x - this.width * 0.5, this.y - this.height * 0.5);
				}
				this.spawnIndex++;
				if(this.spawnIndex>21){
					this.spawnIndex = 1;
					this.spawned = true;
					this.movement = true;
				}
			}
			else{
				if(this.dir == "WA" || this.dir == "AS" || this.dir == "A"){
					this.LR = "Left";
					ctx.drawImage(BossMumL, this.x - this.width * 0.5, this.y - this.height * 0.5);
				}
				else if(this.dir == "WD" || this.dir == "SD" || this.dir == "D"){
					ctx.drawImage(BossMumR, this.x - this.width * 0.5, this.y - this.height * 0.5);
					this.LR = "Right";
				}
				else if(this.LR == "Left"){
					ctx.drawImage(BossMumL, this.x - this.width * 0.5, this.y - this.height * 0.5);
				}
				else{
					ctx.drawImage(BossMumR, this.x - this.width * 0.5, this.y - this.height * 0.5);
				}
			}
			if (this.hptimer*0.5 != Math.round(this.hptimer*0.5)){
				ctx.globalAlpha = Alpha;
			}
			hpBarDraw(this);
		}
	}
};
var MiniMum2 = {
	type: "MiniMummy",
	x: 2000,
	y: -9000,
	onTree: 0,
	width: 20,
	height: 24,
	speed: 4,
	speed2: 2,
	dirct: 0,
	hp: 4,
	hptimer: 0,
	respawn: -1,
	dir: "W",
	LR: "",
	rp: -1,
	pts: 1,
	onScreen: 0,
	spawned: false,
	spawnIndex: 1,
	movement: false,
	// Draws the enemy on the canvas when called
	draw: function(){
		if(this.onScreen == 1){
			if(this.hptimer >0){
				this.hptimer-=1;
			}
			if (this.hptimer*0.5 != Math.round(this.hptimer*0.5)){
				ctx.globalAlpha = Alpha*0.5;
			}
			if(!this.spawned){
				if(this.LR = "Left"){
					ctx.drawImage(BossMummySpawnL[Math.ceil(this.spawnIndex/3)], this.x - this.width * 0.5, this.y - this.height * 0.5);
				}
				else{
					ctx.drawImage(BossMummySpawnR[Math.ceil(this.spawnIndex/3)], this.x - this.width * 0.5, this.y - this.height * 0.5);
				}
				this.spawnIndex++;
				if(this.spawnIndex>21){
					this.spawnIndex = 1;
					this.spawned = true;
					this.movement = true;
				}
			}
			else{
				if(this.dir == "WA" || this.dir == "AS" || this.dir == "A"){
					this.LR = "Left";
					ctx.drawImage(BossMumL, this.x - this.width * 0.5, this.y - this.height * 0.5);
				}
				else if(this.dir == "WD" || this.dir == "SD" || this.dir == "D"){
					ctx.drawImage(BossMumR, this.x - this.width * 0.5, this.y - this.height * 0.5);
					this.LR = "Right";
				}
				else if(this.LR == "Left"){
					ctx.drawImage(BossMumL, this.x - this.width * 0.5, this.y - this.height * 0.5);
				}
				else{
					ctx.drawImage(BossMumR, this.x - this.width * 0.5, this.y - this.height * 0.5);
				}
			}
			if (this.hptimer*0.5 != Math.round(this.hptimer*0.5)){
				ctx.globalAlpha = Alpha;
			}
			hpBarDraw(this);
		}
	}
};
var MiniMum3 = {
	type: "MiniMummy",
	x: 2000,
	y: -9000,
	onTree: 0,
	width: 20,
	height: 24,
	speed: 4,
	speed2: 2,
	dirct: 0,
	hp: 4,
	hptimer: 0,
	respawn: -1,
	dir: "W",
	LR: "",
	rp: -1,
	pts: 1,
	onScreen: 0,
	spawned: false,
	spawnIndex: 1,
	movement: false,
	// Draws the enemy on the canvas when called
	draw: function(){
		if(this.onScreen == 1){
			if(this.hptimer >0){
				this.hptimer-=1;
			}
			if (this.hptimer*0.5 != Math.round(this.hptimer*0.5)){
				ctx.globalAlpha = Alpha*0.5;
			}
			if(!this.spawned){
				if(this.LR = "Left"){
					ctx.drawImage(BossMummySpawnL[Math.ceil(this.spawnIndex/3)], this.x - this.width * 0.5, this.y - this.height * 0.5);
				}
				else{
					ctx.drawImage(BossMummySpawnR[Math.ceil(this.spawnIndex/3)], this.x - this.width * 0.5, this.y - this.height * 0.5);
				}
				this.spawnIndex++;
				if(this.spawnIndex>21){
					this.spawnIndex = 1;
					this.spawned = true;
					this.movement = true;
				}
			}
			else{
				if(this.dir == "WA" || this.dir == "AS" || this.dir == "A"){
					this.LR = "Left";
					ctx.drawImage(BossMumL, this.x - this.width * 0.5, this.y - this.height * 0.5);
				}
				else if(this.dir == "WD" || this.dir == "SD" || this.dir == "D"){
					ctx.drawImage(BossMumR, this.x - this.width * 0.5, this.y - this.height * 0.5);
					this.LR = "Right";
				}
				else if(this.LR == "Left"){
					ctx.drawImage(BossMumL, this.x - this.width * 0.5, this.y - this.height * 0.5);
				}
				else{
					ctx.drawImage(BossMumR, this.x - this.width * 0.5, this.y - this.height * 0.5);
				}
			}
			if (this.hptimer*0.5 != Math.round(this.hptimer*0.5)){
				ctx.globalAlpha = Alpha;
			}
			hpBarDraw(this);
		}
	}
};
var MiniMum4 = {
	type: "MiniMummy",
	x: 2000,
	y: -9000,
	onTree: 0,
	onTree: 0,
	width: 20,
	height: 24,
	speed: 4,
	speed2: 2,
	dirct: 0,
	hp: 4,
	hptimer: 0,
	respawn: -1,
	dir: "W",
	LR: "",
	rp: -1,
	pts: 1,
	onScreen: 0,
	spawned: false,
	spawnIndex: 1,
	movement: false,
	// Draws the enemy on the canvas when called
	draw: function(){
		if(this.onScreen == 1){
			if(this.hptimer >0){
				this.hptimer-=1;
			}
			if (this.hptimer*0.5 != Math.round(this.hptimer*0.5)){
				ctx.globalAlpha = Alpha*0.5;
			}
			if(!this.spawned){
				if(this.LR = "Left"){
					ctx.drawImage(BossMummySpawnL[Math.ceil(this.spawnIndex/3)], this.x - this.width * 0.5, this.y - this.height * 0.5);
				}
				else{
					ctx.drawImage(BossMummySpawnR[Math.ceil(this.spawnIndex/3)], this.x - this.width * 0.5, this.y - this.height * 0.5);
				}
				this.spawnIndex++;
				if(this.spawnIndex>21){
					this.spawnIndex = 1;
					this.spawned = true;
					this.movement = true;
				}
			}
			else{
				if(this.dir == "WA" || this.dir == "AS" || this.dir == "A"){
					this.LR = "Left";
					ctx.drawImage(BossMumL, this.x - this.width * 0.5, this.y - this.height * 0.5);
				}
				else if(this.dir == "WD" || this.dir == "SD" || this.dir == "D"){
					ctx.drawImage(BossMumR, this.x - this.width * 0.5, this.y - this.height * 0.5);
					this.LR = "Right";
				}
				else if(this.LR == "Left"){
					ctx.drawImage(BossMumL, this.x - this.width * 0.5, this.y - this.height * 0.5);
				}
				else{
					ctx.drawImage(BossMumR, this.x - this.width * 0.5, this.y - this.height * 0.5);
				}
			}
			if (this.hptimer*0.5 != Math.round(this.hptimer*0.5)){
				ctx.globalAlpha = Alpha;
			}
			hpBarDraw(this);
		}
	}
};
//------------------------------------------------- Desert+ AI/Spawn ----------------------------------------------------------------//
// Enemy AI
function DesertUpAI(E){
	if(E.onScreen){
		var xdiff = player.x - E.x;
		var ydiff = player.y - E.y;
		if(Illusion.onScreen == 1){
			xdiff = Illusion.x - E.x;
			ydiff = Illusion.y - E.y;
		}
		if(!SandStorm.onScreen && E.type == 0){
			if(Math.sqrt(((player.x - 48 - E.x)*(player.x - 48 - E.x)) + ((player.y - E.y)*(player.y - E.y))) < 
				Math.sqrt(((player.x + 48 - E.x)*(player.x + 48 - E.x)) + ((player.y - E.y)*(player.y - E.y)))){
				xdiff = player.x - 48 - E.x;
			}
			else{
				xdiff = player.x + 48 - E.x;
			}
			//use scorpion attack
			if(Math.abs(ydiff) <= 8 && Math.abs(xdiff) <= 64 && E.cd <=0){
				E.casting = true;
				E.movement = false;
				E.cd = 17;
				E.castIndex = 1;
				if(xdiff  > 0){
					E.dir = "D";
				}
				else{
					E.dir = "A";
				}
				E.dirct = 17;
			}
			else if(Math.abs(ydiff) <= 32 && Math.abs(xdiff) <= 128 && E.cd <=0){
				if(player.dir == "A" && E.LR == "Right"){
					E.casting = true;
					E.movement = false;
					E.cd = 17;
					E.castIndex = 1;
					E.dir = "D";
					E.dirct = 17;
				}
				else if(player.dir == "D" && E.LR == "Left"){
					E.casting = true;
					E.movement = false;
					E.cd = 17;
					E.castIndex = 1;
					E.dir = "A";
					E.dirct = 17;
				}
			}
			else if(Math.abs(ydiff) <= 128 && Math.abs(xdiff) <= 32 && E.cd <=0){
				if(player.dir == "W" && ydiff > 0 && xdiff < 0 && E.LR == "Left"){
					E.casting = true;
					E.movement = false;
					E.cd = 17;
					E.castIndex = 1;
					E.dir = "A";
					E.dirct = 17;
				}
				else if(player.dir == "W" && ydiff > 0 && xdiff > 0 && E.LR == "Right"){
					E.casting = true;
					E.movement = false;
					E.cd = 17;
					E.castIndex = 1;
					E.dir = "D";
					E.dirct = 17;
				}
				else if(player.dir == "S" && ydiff < 0 && xdiff > 0 && E.LR == "Right"){
					E.casting = true;
					E.movement = false;
					E.cd = 17;
					E.castIndex = 1;
					E.dir = "D";
					E.dirct = 17;
				}
				else if(player.dir == "S" && ydiff < 0 && xdiff < 0 && E.LR == "Left"){
					E.casting = true;
					E.movement = false;
					E.cd = 17;
					E.castIndex = 1;
					E.dir = "A";
					E.dirct = 17;
				}
			}
		}
		if(E.type == "Anubis"){
			if(!E.Statue){
				if(E.cd > 0 && !E.movement){
					E.cd-=1;
				}
				if(E.cd == 0){
					E.casting = true;
					E.movement = false;
					E.cd = 120;
					if(player.x > E.x){
						E.LR = "Right";
					}
					else{
						E.LR = "Left";
					}
					E.x2 = E.x;
					E.y2 = E.y;
				}
				if(!E.casting){
					if(E.moveTime > 0){
						E.moveTime-=1;
					}
					//move pits for collision detection
					for(S in Sandpits){
						Sandpits[S].x+=32;
						Sandpits[S].y+=32;
					}
					if(E.x < 16 && E.dir != "D" && E.dir != "WD" && E.dir != "SD"){
						E.dir = "D";
						E.waitTime = 0;
						E.moveTime = 10;
						E.movement = true;
					}
					else if(E.x > 784 && E.dir != "A" && E.dir != "WA" && E.dir != "AS"){
						E.dir = "A";
						E.waitTime = 0;
						E.moveTime = 10;
						E.movement = true;
					}
					else if(E.y < 80 && E.dir != "SD" && E.dir != "AS"){
						E.dir = "SD";
						E.waitTime = 0;
						E.moveTime = 10;
						E.movement = true;
					}
					else if(E.y > 560 && E.dir != "WA" && E.dir != "WD"){
						E.dir = "WA";
						E.waitTime = 0;
						E.moveTime = 10;
						E.movement = true;
					}
					for(S in Sandpits){
						Sandpits[S].x-=32;
						Sandpits[S].y-=32;
						if(collision(E.dir, E, Sandpits[S])){
							E.moveTime=10;
							E.movement = true;
						}
					}
					
					if(E.moveTime == 0 && E.waitTime ==0){
						E.waitTime = Math.floor(Math.random()*90)+10;
						E.moveTime = Math.floor(Math.random()*45)+15;
						E.movement = true;
						E.dirct = 900;
						var quadrant = 0;
						var q1dir = {1: "D", 2: "SD"};
						var q2dir = {1: "A", 2: "AS"};
						var q3dir = {1: "D", 2: "WD"};
						var q4dir = {1: "A", 2: "WA"};
						var alldir = {1: "D", 2: "A", 3: "WA", 4: "WD", 5: "AS", 6: "SD"};
						var numbz = Math.floor(Math.random() * 2) + 1;
						var allnumbz = Math.floor(Math.random() * 6) + 1;
						if(E.x < 16){
							quadrant = 6;
						}
						else if(E.x > 784){
							quadrant = 7;
						}
						else if(E.y < 16){
							quadrant = 8;
						}
						else if(E.y > 560){
							quadrant = 9;
						}
						else if(E.x > 224 && E.x < 576 && E.y > 128 && E.y < 348){
							quadrant = 5;
						}
						else if(E.x <= 400 && E.y <= 238){
							quadrant = 1;
						}
						else if(E.x > 400 && E.y <= 238){
							quadrant = 2;
						}
						else if(E.x <= 400 && E.y > 238){
							quadrant = 3;
						}
						else if(E.x > 400 && E.y > 238){
							quadrant = 4;
						}
						if(quadrant == 1){
							E.dir = q1dir[numbz];
						}
						else if(quadrant == 2){
							E.dir = q2dir[numbz];
						}
						else if(quadrant == 3){
							E.dir = q3dir[numbz];
						}
						else if(quadrant == 4){
							E.dir = q4dir[numbz];
						}
						else if(quadrant == 5){
							E.dir = alldir[allnumbz];
						}
						else if(quadrant == 6){
							E.dir = "D";
						}
						else if(quadrant == 7){
							E.dir = "A";
						}
						else if(quadrant == 8){
							if(E.x < 400){
								E.dir = "SD";
							}
							else{
								E.dir = "AS";
							}
						}
						else if(quadrant == 9){
							if(E.x < 400){
								E.dir = "WD";
							}
							else{
								E.dir = "WA";
							}
						}
					}
					else if(E.moveTime == 0 && E.waitTime > 0){
						E.movement = false;
						E.waitTime-=1;
					}
				}
			}
		}
		if(obsCollision(obstacle1, E, E.dir) || obsCollision(obstacle2, E, E.dir) || obsCollision(obstacle3, E, E.dir)){
			if(E.dir == "W"){
				E.dirct = 20;
				E.y+=2*E.speed;
				E.dir = "D";
			}
			else if(E.dir == "A"){
				E.dirct = 20;
				E.x+=E.speed;
				E.dir = "W";
			}
			else if(E.dir == "S"){
				E.dirct = 20;
				E.y-=2*E.speed;
				E.dir = "A";
			}
			else if(E.dir == "D"){
				E.dirct = 20;
				E.x-=E.speed;
				E.dir = "S";
			}
			else if(E.dir == "WD"){
				E.dirct = 20;
				E.x+=E.speed;
				E.y-=E.speed;
				E.dir = "W";
			}
			else if(E.dir == "WA"){
				E.dirct = 20;
				E.x-=E.speed;
				E.y-=E.speed;
				E.dir = "A";
			}
			else if(E.dir == "AS"){
				E.dirct = 20;
				E.x-=E.speed;
				E.y+=E.speed;
				E.dir = "S";
			}
			else if(E.dir == "SD"){
				E.dirct = 20;
				E.x+=E.speed;
				E.y+=E.speed;
				E.dir = "D";
			}
		}
		else if(E.dirct == 0){
			if(xdiff < 4 && ydiff < 4){
				E.dir = "WA";
			}
			else if(xdiff < 4 && ydiff > 4){
				E.dir = "AS";
			}
			else if(xdiff > 4 && ydiff < 4){
				E.dir = "WD";
			}
			else if (xdiff > 4 && ydiff > 4){
				E.dir = "SD";
			}
			else if (xdiff == 4 && ydiff > 4){
				E.dir = "S";
			}
			else if(xdiff == 4 && ydiff < 4){
				E.dir = "W";
			}
			else if(xdiff < 4 && ydiff == 4){
				E.dir = "A";
			}
			else{
				E.dir = "D";
			}
		}
		else{
			E.dirct-=1;
		}
	}
}

function DesertUpSpawn(E){
	if(!(Genie.spawned == 1 && !player.regen) && E.type != "Genie"){
		if(E.respawn == 0 && !SandStorm.onScreen){
			E.movement = true;	
			var spawnPoint = Math.floor(Math.random() * 8) + 1;
			if(spawnPoint == 1){
				E.x = 0;
				E.y = 0;
				E.onScreen = 1;
				E.respawn-=1;
			}
			else if(spawnPoint == 2){
				E.x = 400;
				E.y = 0;
				E.onScreen = 1;
				E.respawn-=1;
			}
			else if(spawnPoint == 3){
				E.x = 800;
				E.y = 0;
				E.onScreen = 1;
				E.respawn-=1;
			}
			else if(spawnPoint == 4){
				E.x = 0;
				E.y = 288;
				E.onScreen = 1;
				E.respawn-=1;
			}
			else if(spawnPoint == 5){
				E.x = 800;
				E.y = 288;
				E.onScreen = 1;
				E.respawn-=1;
			}
			else if(spawnPoint == 6){
				E.x = 0;
				E.y = 576;
				E.onScreen = 1;
				E.respawn-=1;
			}
			else if(spawnPoint == 7){
				E.x = 400;
				E.y = 576;
				E.onScreen = 1;
				E.respawn-=1;
			}
			else{
				E.x = 800;
				E.y = 576;
				E.onScreen = 1;
				E.respawn-=1;
			}
		}
		else if(!SandStorm.onScreen){
			E.respawn-=1;
		}
	}
}
//------------------------------------------------------- Ghost Boss ----------------------------------------------------------------//
var ThrownMeteor1 = {
	x: 9000,
	y: 9000,
	width: 56,
	height: 56,
	onScreen: 0,
	index: 0,
	slope:"",
	dir: "",
	speed: 16,
	upIndex: 0,
	run: function(){
		Draw_ThrownMeteor(this);
		ThrownMeteor_AI(this);
	}
};
var ThrownMeteor2 = {
	x: 9000,
	y: 9000,
	width: 56,
	height: 56,
	onScreen: 0,
	index: 0,
	slope: "",
	dir: "",
	speed: 16,
	upIndex: 0,
	run: function(){
		Draw_ThrownMeteor(this);
		ThrownMeteor_AI(this);
	}
};
var ThrownMeteor3 = {
	x: 9000,
	y: 9000,
	width: 56,
	height: 56,
	onScreen: 0,
	index: 0,
	upIndex: 0,
	slope:"",
	dir: "",
	speed: 16,
	run: function(){
		Draw_ThrownMeteor(this);
		ThrownMeteor_AI(this);
	}
};
var ThrownMeteor4 = {
	x: 9000,
	y: 9000,
	width: 56,
	height: 56,
	onScreen: 0,
	index: 0,
	upIndex: 0,
	slope:"",
	dir: "",
	speed: 16,
	run: function(){
		Draw_ThrownMeteor(this);
		ThrownMeteor_AI(this);
	}
};

function Draw_ThrownMeteor(M){
	ctx.drawImage(MeteorSheet, Math.floor(M.index/8)*56, 164, 56, 56, M.x-M.width*0.5, M.y-M.height*0.5-2, M.width, M.height);
	M.index++;
	if(M.index > 15){
		M.index = 0;
	}
	if(M.x > 900 || M.x < -100 || M.y > 650 || M.y < -100){
		M.x = 9000;
		M.y = 9000;
		M.width = 56;
		M.height = 56;
		M.onScreen = 0;
		M.index = 0;
		M.upIndex = 0;
		M.slope = "";
		M.dir = "";
		M.speed = 16;
	}
}

function ThrownMeteor_AI(M){
	if(M.onScreen){
		if(!M.slope){
			if(player.x-player.width*0.5 < M.x-M.width*0.5){
				M.dir = "A";
				var playerSlope = (M.y-player.y)/(M.x-player.x);
			}
			else{
				M.dir = "D";
				var playerSlope = (player.y-M.y)/(player.x-M.x);
			}
			M.slope = 0;
			for(N in AnubisProjArray){
				if(Math.abs(AnubisProjArray[N] - playerSlope) < Math.abs(M.slope - playerSlope)){
					M.slope = AnubisProjArray[N];
				}
			}
			//consider verticals
			if(M.x >= player.x - player.width*0.5 && M.x <= player.x + player.width*0.5){
				if(M.y-M.height*0.5 > player.y - player.height*0.5){
					M.dir = "A";
				}
				else{
					M.dir = "D";
				}
				M.slope = "Vertical";
				M.slopeIndex = 15;
			}
		}
		move_particle_AI(M);
	}
	else if(M.x != 9000){
		M.y-=4;
		M.upIndex++;
		if(M.upIndex > 8){
			M.onScreen = 1;
			M.upIndex = 0;
		}
	}
	if(collision(player.dir, player, M) || contained(player, M)){
		if(darkwater.onScreen == 1 && darkwater.hptimer == 0){
			darkwater.hptimer = 20;
			darkwater.hp-=1;
			hptimer = 20;
		}	
		else if(hptimer <= 0){
			player.hp-=1;
			onDmg.currentTime=0;
			onDmg.play();
			hptimer = 30;
			AList[7] = false;
		}
	}
}
var FireGhost = {
	type: "FireGhost",
	x: 9000,
	y: -400,
	onTree: 0,
	width: 36,
	height: 96,
	speed: 0,
	speed2: 0,
	dirct: 0,
	dir: "W",
	LR: "Left",
	respawn: 1200,
	rp: -1,
	onScreen: 0,
	spawned: 0,
	movement: false,
	hp: 4,
	hptimer: 0,
	spell: "N/A",
	pts: 25000,
	cd: 90,
	walkIndex: 0,
	slowWalkIndex: 0,
	disappearIndex: 30,
	disappearing: 0,
	invIndex: 0,
	arrowIndex: 0,
	arrowing: 0,
	groundIndex: 0,
	meteorDisappearIndex: -1,
	meteorAppearIndex: -1,
	meteorLiftIndex: -1,
	selectedMeteor: 0,
	selectedMeteor2: 0,
	thrownNumber: 0,
	spawnIndex: 1,
	lightFlicker: 0,
	beforeRingIndex: 60,
	thrownMeteorSet: 1,
	playerNotInMiddle: 0,
	spawningEnemiesIndex: -1,
	meteors: {0: ThrownMeteor1, 1: ThrownMeteor2, 2: ThrownMeteor3, 3: ThrownMeteor4},
	draw: function(){
		if(this.onScreen == 1){
			if(this.x > 382){
				this.LR = "Left";
			}else{
				this.LR = "Right";
			}
			if(this.hptimer>0){
				this.hptimer-=1;
			}
			if (this.hptimer*0.5 != Math.round(this.hptimer*0.5)){
				ctx.globalAlpha = Alpha*0.5;
			}
			if(this.spawnIndex > 0){
				ctx.drawImage(GhostGroundSheet, 872, 164*GhostSpawn[this.spawnIndex], 436, 164, this.x-this.width*0.5 - 180, this.y-this.height*0.5 - 22, 436, 164);
				this.spawnIndex++;
				if(this.spawnIndex > 37){
					this.spawnIndex = 0;
				}
			}
			else if(this.arrowIndex){
				if(this.LR == 'Left'){
					ctx.drawImage(GhostArrow, 100*(Math.floor((this.arrowIndex-1)*0.5)), 228, 100, 76, this.x-this.width*0.5, this.y-this.height*0.5, 100, 76);
				}
				else{
					ctx.drawImage(GhostArrow, 100*(Math.floor((this.arrowIndex-1)*0.5)), 76, 100, 76, this.x-this.width*0.5, this.y-this.height*0.5, 100, 76);
				}
				this.arrowIndex++;
				if(this.arrowIndex > 6){
					this.arrowIndex = 0;
					this.arrowing = 1;
				}
			}
			else if(this.arrowing){
				if(this.LR == 'Left'){
					ctx.drawImage(GhostArrow, 100*(Math.floor((this.arrowing-1)*0.5)), 152, 100, 76, this.x-this.width*0.5, this.y-this.height*0.5, 100, 76);
				}else{
					ctx.drawImage(GhostArrow, 100*(Math.floor((this.arrowing-1)*0.5)), 0, 100, 76, this.x-this.width*0.5, this.y-this.height*0.5, 100, 76);
				}
				this.arrowing++;
				if(this.arrowing > 6){
					this.arrowing = 1;
					FlameWall.onScreen = 1;
					FlameWall.LR = this.LR;
				}
			}
			else if(!this.disappearing){
				if(this.dir == "WA" || this.dir == "AS" || this.dir == "A"){
					this.LR = "Left";
					if(this.movement){
						ctx.drawImage(GhostWalkSheet, 36*Math.floor(this.slowWalkIndex*0.25), 384, 36, 96, this.x-this.width*0.5, this.y-this.height*0.5, 36, 96);
					}else{
						ctx.drawImage(GhostWalkSheet, 36*Math.floor(this.walkIndex*0.5), 0, 36, 96, this.x-this.width*0.5, this.y-this.height*0.5, 36, 96);
					}
				}
				else if(this.dir == "WD" || this.dir == "SD" || this.dir == "D"){
					this.LR = "Right";
					if(this.movement){
						ctx.drawImage(GhostWalkSheet, 36*Math.floor(this.slowWalkIndex*0.25), 480, 36, 96, this.x-this.width*0.5, this.y-this.height*0.5, 36, 96);
					}else{
						ctx.drawImage(GhostWalkSheet, 36*Math.floor(this.walkIndex*0.5), 96, 36, 96, this.x-this.width*0.5, this.y-this.height*0.5, 36, 96);
					}
				}
				else if(this.LR == "Left"){
					if(this.movement){
						ctx.drawImage(GhostWalkSheet, 36*Math.floor(this.slowWalkIndex*0.25), 384, 36, 96, this.x-this.width*0.5, this.y-this.height*0.5, 36, 96);
					}else{
						ctx.drawImage(GhostWalkSheet, 36*Math.floor(this.walkIndex*0.5), 0, 36, 96, this.x-this.width*0.5, this.y-this.height*0.5, 36, 96);
					}
				}
				else{
					if(this.movement){
						ctx.drawImage(GhostWalkSheet, 36*Math.floor(this.slowWalkIndex*0.25), 480, 36, 96, this.x-this.width*0.5, this.y-this.height*0.5, 36, 96);
					}else{
						ctx.drawImage(GhostWalkSheet, 36*Math.floor(this.walkIndex*0.5), 96, 36, 96, this.x-this.width*0.5, this.y-this.height*0.5, 36, 96);
					}
				}
				this.walkIndex++;
				if(this.walkIndex > 7){
					this.walkIndex = 0;
				}
				this.slowWalkIndex++;
				if(this.slowWalkIndex > 14){
					this.slowWalkIndex = 0;
				}
			}
			else if(!this.invIndex){
				ctx.drawImage(GhostGroundSheet, 0, 164*GhostGroundAnimation[this.groundIndex], 436, 164, (this.x-this.width*0.5 - 204) - 9000, this.y-this.height*0.5 - 22, 436, 164);
				this.groundIndex++;
				if(this.groundIndex == 18){
					FireGhostEffect.onScreen = 1;
					FireGhostEffect.x = this.x-this.width*0.5 - 9000;
					FireGhostEffect.y = this.y-this.height*0.5 + 16;
					FireGhostEffect.width = 32;
					FireGhostEffect.height = 32;
					FireGhostEffect.played = 0;
					//this.meteorDisappearIndex++;
					for(O in ObsList){
						ObsList[O].hp = 5;
					}
				}
				if(this.groundIndex > 23){
					this.groundIndex = 0;
					this.invIndex = 30;					
				}
			}
			if (this.hptimer*0.5 != Math.round(this.hptimer*0.5)){
				ctx.globalAlpha = Alpha;
			}
			if(!this.spawnIndex){
				hpBarDraw(this);
			}
		}
	},
	spawn: function(){
		if(this.onScreen){
			if(!this.arrowIndex && !this.arrowing && this.disappearIndex > 0 && !this.spawnIndex){
				this.disappearIndex--;
				if(!this.disappearIndex && this.meteorAppearIndex < 0 && this.meteorDisappearIndex < 0){
					this.disappearing = 1;
					this.x += 9000;
					this.movement = false;
					this.meteorDisappearIndex++;
				}
			}
			else if(this.meteorAppearIndex > -1){
				this.meteorAppearIndex++;
				if(this.meteorAppearIndex > 19){
					this.meteorAppearIndex = -1;
					this.cd+=90;
				}
			}
		}else{
			if(this.spawned == 0 && hpUp.x == -100){
				if(Genie.spawned == 0){
					this.respawn-=1;
				}
			}
			if(this.respawn ==0){
				var queue = true;
				this.spawned = 1;
				for(E in AllEnemies){
					if(AllEnemies[E].onScreen == 1){
						queue = false;
					}
				}
				if(queue){
					this.respawn-=1;
					this.x = 360;
					this.y = 250;
					this.onScreen = 1;
					Lamp.target = 0;
					this.spawnIndex = 1;
					BadWizards.currentTime = 0;
					AList[7] = true;
				}
			}
		}
	},
	Attack: function(){
	if(this.onScreen){
		if(this.cd > 0){
			this.cd--;
		}
		if(this.spawningEnemiesIndex > -1){
			this.spawningEnemiesIndex++;
			if(this.spawningEnemiesIndex > 15){
				this.spawningEnemiesIndex = -1;
			}
		}
		if(this.meteorDisappearIndex > -1){
			this.meteorDisappearIndex++;
			for(O in ObsList){
				ObsList[O].hp = 5;
				ObsList[O].y-=randomInt(1, 20);
			}
			if(this.meteorDisappearIndex > 23){
				for(O in ObsList){
					ObsList[O].hp = 1;
					obsHit(ObsList[O]);
				}
				this.meteorDisappearIndex = -1;
				this.meteorAppearIndex++;
				fastbeepsHigh.currentTime=0;
				fastbeepsHigh.play();
			}
		}
		if(this.meteorLiftIndex > -1){
			this.meteorLiftIndex++;
			if(this.meteorLiftIndex > 11){
				this.meteorLiftIndex = -1;
				if(this.meteors[0].x == 9000){
					this.meteors[0].x = allObs[parseInt(this.selectedMeteor[0])][parseInt(this.selectedMeteor[1])].x;
					this.meteors[0].y = allObs[parseInt(this.selectedMeteor[0])][parseInt(this.selectedMeteor[1])].y - 8;
					this.cd = 0;
				}
				else if(this.meteors[1].x == 9000){
					this.meteors[1].x = allObs[parseInt(this.selectedMeteor[0])][parseInt(this.selectedMeteor[1])].x;
					this.meteors[1].y = allObs[parseInt(this.selectedMeteor[0])][parseInt(this.selectedMeteor[1])].y - 8;
					this.cd = 0;
				}
				else if(this.meteors[2].x == 9000){
					this.meteors[2].x = allObs[parseInt(this.selectedMeteor[0])][parseInt(this.selectedMeteor[1])].x;
					this.meteors[2].y = allObs[parseInt(this.selectedMeteor[0])][parseInt(this.selectedMeteor[1])].y - 8;

					this.meteors[3].x = allObs[parseInt(this.selectedMeteor2[0])][parseInt(this.selectedMeteor2[1])].x;
					this.meteors[3].y = allObs[parseInt(this.selectedMeteor2[0])][parseInt(this.selectedMeteor2[1])].y - 8;
					allObs[parseInt(this.selectedMeteor2[0])][parseInt(this.selectedMeteor2[1])].hp = 1;
					obsHit(allObs[parseInt(this.selectedMeteor2[0])][parseInt(this.selectedMeteor2[1])]);
					this.selectedMeteor2 = 0;
					this.thrownNumber++;
				}
				allObs[parseInt(this.selectedMeteor[0])][parseInt(this.selectedMeteor[1])].hp = 1;
				obsHit(allObs[parseInt(this.selectedMeteor[0])][parseInt(this.selectedMeteor[1])]);
			}
		}
		if(this.hp){
			if(!this.cd && this.thrownNumber < 3 && this.meteorAppearIndex < 0 && this.meteorLiftIndex == -1){
				this.meteorLiftIndex++;
				this.selectedMeteor = randomInt(2,3) + "" + randomInt(1, 4);
				while(allObs[parseInt(this.selectedMeteor[0])][parseInt(this.selectedMeteor[1])].x == 2000){
					this.selectedMeteor = randomInt(2,3) + "" + randomInt(1, 4);
				}
				if(this.meteors[1].x != 9000){
					this.selectedMeteor2 = randomInt(2,3) + "" + randomInt(1, 4);
					while(allObs[parseInt(this.selectedMeteor2[0])][parseInt(this.selectedMeteor2[1])].x == 2000){
						this.selectedMeteor2 = randomInt(2,3) + "" + randomInt(1, 4);
					}
				}
				this.cd = 120;
			}
			if((this.playerNotInMiddle || this.thrownNumber >= 3 || this.beforeRingIndex < 60) && !GhostRing.onScreen){
				if(this.meteorLiftIndex == -1){
					this.thrownMeteorSet--;
					if(this.playerNotInMiddle){
						this.thrownMeteorSet = 0;
					}
				}
				if(!this.thrownMeteorSet || this.beforeRingIndex < 60){
					if(this.meteorLiftIndex == -1 && !this.beforeRingIndex < 60 && !this.thrownMeteorSet){
						this.beforeRingIndex--;
					}
					var xdiff = player.x - GhostRing.x;
					var ydiff = player.y - GhostRing.y;
					var dist = Math.sqrt((ydiff * ydiff) + (xdiff * xdiff));
					if(Math.abs(dist) <= 150 || this.beforeRingIndex < 60){
						if(this.meteorLiftIndex == -1 && !this.beforeRingIndex && (!this.thrownMeteorSet || this.thrownMeteorSet < 0)){
							this.beforeRingIndex = 60;
							hptimer=10;
							GhostRing.onScreen = 1;
							rainsound.currentTime=0;
							rainsound.play();
							GhostRing.enterIndex = 1;
							GhostRing.exitIndex = 1;
							GhostRing.loopIndex = 1;
							//spawn enemies
							this.spawningEnemiesIndex = 1;
							this.thrownMeteorSet = 1;
							this.playerNotInMiddle = 0;
							this.cd = 210;
							this.thrownNumber = 0;
							setTimeout(function(){
								FireGhost.x = Math.round(Math.random()*550)+75;
								FireGhost.y = Math.round(Math.random()*350)+150;
								FireGhost.onScreen = 1;
								FireGhost.spawnIndex = 1;
								FireGhost.disappearing = 0;
								FireGhost.disappearIndex = 90;
								FireGhost.movement = true;
								FireGhost.invIndex = 0;
							}, 3000);
						}else{
							this.thrownNumber = 0;
							if(Math.abs(dist) <= 150){
								this.beforeRingIndex--;
							}
							if(this.beforeRingIndex < 0){
								this.beforeRingIndex = 0;
							}
							this.lightFlicker++;
							if(this.lightFlicker > 3){
								this.lightFlicker = 0;
							}
							if(this.beforeRingIndex < 12){
								ctx.drawImage(GhostLight, 288+36*Math.floor(this.lightFlicker*0.5), 0, 36, 376, 382, -88, 36, 376);
							}else if(this.beforeRingIndex < 24){
								ctx.drawImage(GhostLight, 216+36*Math.floor(this.lightFlicker*0.5), 0, 36, 376, 382, -88, 36, 376);
							}else if(this.beforeRingIndex < 36){
								ctx.drawImage(GhostLight, 144+36*Math.floor(this.lightFlicker*0.5), 0, 36, 376, 382, -88, 36, 376);
							}else if(this.beforeRingIndex < 48){
								ctx.drawImage(GhostLight, 72+36*Math.floor(this.lightFlicker*0.5), 0, 36, 376, 382, -88, 36, 376);
							}else{
								ctx.drawImage(GhostLight, 36*Math.floor(this.lightFlicker*0.5), 0, 36, 376, 382, -88, 36, 376);
							}
						}
					}else{
						this.thrownNumber = 0;
						this.playerNotInMiddle++;
						this.thrownMeteorSet = 0;
						//this.cd = 90;
					}
				}else{
					if(this.meteorLiftIndex == -1){
						this.thrownNumber = 0;
						this.cd = 120;
					}
				}
			}
		}
	}
	},
	run: function(){
		this.draw();
		this.spawn();
		this.Attack();
		for(M in this.meteors){
			this.meteors[M].run();
		}
		if(FlameWall.onScreen){
			FlameWall.run();
		}
	}
};
var FlameWall = {
	onScreen: 0,
	used: 0,
	LR: 'Left',
	speed: 8,
	dying: 0,
	walls: {1: {x: 900+Math.round(Math.random()*32)+1, y: 0, width: 96, height: 32, splitIndex: 0, waitIndex: 0, returnIndex: 0, index: Math.round(Math.random()*5)+1},
			2: {x: 900+Math.round(Math.random()*32)+1, y: 32, width: 96, height: 32, splitIndex: 0, waitIndex: 0, returnIndex: 0, index: Math.round(Math.random()*5)+1},
			3: {x: 900+Math.round(Math.random()*32)+1, y: 64, width: 96, height: 32, splitIndex: 0, waitIndex: 0, returnIndex: 0, index: Math.round(Math.random()*5)+1},
			4: {x: 900+Math.round(Math.random()*32)+1, y: 96, width: 96, height: 32, splitIndex: 0, waitIndex: 0, returnIndex: 0, index: Math.round(Math.random()*5)+1},
			5: {x: 900+Math.round(Math.random()*32)+1, y: 128, width: 96, height: 32, splitIndex: 0, waitIndex: 0, returnIndex: 0, index: Math.round(Math.random()*5)+1},
			6: {x: 900+Math.round(Math.random()*32)+1, y: 160, width: 96, height: 32, splitIndex: 0, waitIndex: 0, returnIndex: 0, index: Math.round(Math.random()*5)+1},
			7: {x: 900+Math.round(Math.random()*32)+1, y: 192, width: 96, height: 32, splitIndex: 0, waitIndex: 0, returnIndex: 0, index: Math.round(Math.random()*5)+1},
			8: {x: 900+Math.round(Math.random()*32)+1, y: 224, width: 96, height: 32, splitIndex: 0, waitIndex: 0, returnIndex: 0, index: Math.round(Math.random()*5)+1},
			9: {x: 900+Math.round(Math.random()*32)+1, y: 256, width: 96, height: 32, splitIndex: 0, waitIndex: 0, returnIndex: 0, index: Math.round(Math.random()*5)+1},
			10: {x: 900+Math.round(Math.random()*32)+1, y: 288, width: 96, height: 32, splitIndex: 0, waitIndex: 0, returnIndex: 0, index: Math.round(Math.random()*5)+1},
			11: {x: 900+Math.round(Math.random()*32)+1, y: 320, width: 96, height: 32, splitIndex: 0, waitIndex: 0, returnIndex: 0, index: Math.round(Math.random()*5)+1},
			12: {x: 900+Math.round(Math.random()*32)+1, y: 352, width: 96, height: 32, splitIndex: 0, waitIndex: 0, returnIndex: 0, index: Math.round(Math.random()*5)+1},
			13: {x: 900+Math.round(Math.random()*32)+1, y: 384, width: 96, height: 32, splitIndex: 0, waitIndex: 0, returnIndex: 0, index: Math.round(Math.random()*5)+1},
			14: {x: 900+Math.round(Math.random()*32)+1, y: 416, width: 96, height: 32, splitIndex: 0, waitIndex: 0, returnIndex: 0, index: Math.round(Math.random()*5)+1},
			15: {x: 900+Math.round(Math.random()*32)+1, y: 448, width: 96, height: 32, splitIndex: 0, waitIndex: 0, returnIndex: 0, index: Math.round(Math.random()*5)+1},
			16: {x: 900+Math.round(Math.random()*32)+1, y: 480, width: 96, height: 32, splitIndex: 0, waitIndex: 0, returnIndex: 0, index: Math.round(Math.random()*5)+1},
			17: {x: 900+Math.round(Math.random()*32)+1, y: 512, width: 96, height: 32, splitIndex: 0, waitIndex: 0, returnIndex: 0, index: Math.round(Math.random()*5)+1},
			18: {x: 900+Math.round(Math.random()*32)+1, y: 544, width: 96, height: 32, splitIndex: 0, waitIndex: 0, returnIndex: 0, index: Math.round(Math.random()*5)+1},
			19: {x: 900+Math.round(Math.random()*32)+1, y: 576, width: 96, height: 32, splitIndex: 0, waitIndex: 0, returnIndex: 0, index: Math.round(Math.random()*5)+1},
			20: {x: 900+Math.round(Math.random()*32)+1, y: 608, width: 96, height: 32, splitIndex: 0, waitIndex: 0, returnIndex: 0, index: Math.round(Math.random()*5)+1},
			21: {x: 900+Math.round(Math.random()*32)+1, y: 640, width: 96, height: 32, splitIndex: 0, waitIndex: 0, returnIndex: 0, index: Math.round(Math.random()*5)+1},
			22: {x: 900+Math.round(Math.random()*32)+1, y: 672, width: 96, height: 32, splitIndex: 0, waitIndex: 0, returnIndex: 0, index: Math.round(Math.random()*5)+1},
			23: {x: 900+Math.round(Math.random()*32)+1, y: 704, width: 96, height: 32, splitIndex: 0, waitIndex: 0, returnIndex: 0, index: Math.round(Math.random()*5)+1},
			24: {x: 900+Math.round(Math.random()*32)+1, y: 736, width: 96, height: 32, splitIndex: 0, waitIndex: 0, returnIndex: 0, index: Math.round(Math.random()*5)+1},
			25: {x: 900+Math.round(Math.random()*32)+1, y: 768, width: 96, height: 32, splitIndex: 0, waitIndex: 0, returnIndex: 0, index: Math.round(Math.random()*5)+1}},
	draw: function(){
		for(W in this.walls){
			if(this.walls[W].waitIndex){
				this.walls[W].waitIndex--;
				if(!this.walls[W].waitIndex){
					this.walls[W].returnIndex++;
				}
			}
			else if(this.walls[W].splitIndex){
				if(this.LR == 'Left'){
					ctx.drawImage(GhostFlameWall, 96*(Math.floor((this.walls[W].splitIndex-1)*0.5)), 32, 96, 32, this.walls[W].x - this.walls[W].width*0.5, this.walls[W].y - this.walls[W].height*0.5, 96, 32);
				}else{
					ctx.drawImage(GhostFlameWall, 96*(Math.floor((this.walls[W].splitIndex-1)*0.5)), 128, 96, 32, this.walls[W].x - this.walls[W].width*0.5, this.walls[W].y - this.walls[W].height*0.5, 96, 32);
				}
				this.walls[W].splitIndex++;
				if(this.walls[W].splitIndex > 5){
					this.walls[W].splitIndex = 0;
					this.walls[W].waitIndex = 20;
				}
			}
			else if(this.walls[W].returnIndex){
				if(this.LR == 'Left'){
					ctx.drawImage(GhostFlameWall, 96*(Math.floor((this.walls[W].returnIndex-1)*0.5)), 64, 96, 32, this.walls[W].x - this.walls[W].width*0.5, this.walls[W].y - this.walls[W].height*0.5, 96, 32);
				}else{
					ctx.drawImage(GhostFlameWall, 96*(Math.floor((this.walls[W].returnIndex-1)*0.5)), 160, 96, 32, this.walls[W].x - this.walls[W].width*0.5, this.walls[W].y - this.walls[W].height*0.5, 96, 32);
				}
				this.walls[W].returnIndex++;
				if(this.walls[W].returnIndex > 5){
					this.walls[W].returnIndex = 0;
				}
			}
			else{
				if(this.LR == 'Left'){
					ctx.drawImage(GhostFlameWall, 96*(Math.floor(this.walls[W].index*0.5)), 0, 96, 32, this.walls[W].x - this.walls[W].width*0.5, this.walls[W].y - this.walls[W].height*0.5, 96, 32);
				}else{
					ctx.drawImage(GhostFlameWall, 96*(Math.floor(this.walls[W].index*0.5)), 96, 96, 32, this.walls[W].x - this.walls[W].width*0.5, this.walls[W].y - this.walls[W].height*0.5, 96, 32);
				}
				this.walls[W].index++;
				if(this.walls[W].index > 5){
					this.walls[W].index = 0;
				}
			}
		}
	},
	move: function(){
		for(W in this.walls){
			if(this.LR == 'Left'){
				this.walls[W].x-=this.speed;
			}else{
				this.walls[W].x+=this.speed;
			}
			if(!this.walls[W].waitIndex && !this.walls[W].splitIndex && !this.walls[W].returnIndex){
				for(O in ObsList){
					if(contained(ObsList[O], this.walls[W])){
						this.walls[W].splitIndex++;
					}
				}
				if(collision(player.dir, player, this.walls[W]) || contained(player, this.walls[W])){
					if(darkwater.onScreen == 1 && darkwater.hptimer == 0){
						darkwater.hptimer = 20;
						darkwater.hp-=1;
						hptimer = 20;
					}	
					else if(hptimer <= 0){
						player.hp-=1;
						onDmg.currentTime=0;
						onDmg.play();
						hptimer = 30;
						AList[7] = false;
					}
				}
			}
			else if(this.walls[W].waitIndex){
				for(O in ObsList){
					if(contained(ObsList[O], this.walls[W])){
						this.walls[W].waitIndex+=1;
					}
				}
			}
		}
	},
	run: function(){
		this.draw();
		this.move();
		if(!this.used && this.LR != 'Left'){
			for(W in this.walls){
				this.walls[W].x = -100-Math.round(Math.random()*32)+1;
			}
			longfuzz.currentTime=0;
			longfuzz.play();
		}
		this.used = 1;
	}
};
var FireGhostEffect = {
	x: 500,
	y: -400,
	width: 32,
	height: 32,
	onScreen: 0,
	frame: 0,
	played: 0,
	cd: 0,
	draw: function(){
		if(FireGhost.onScreen == 1 && this.cd <=0){
			if(spell1 == "N/A" && spell2 == "N/A"){
				this.cd = 360;
				RandEffect.onScreen = 1;
				RandEffect.used = 0;
				RandEffect.x = 400;
				RandEffect.y = 288;
				RandomCube.timeLeft = 150;
				RandomCube.x = 400;
				RandomCube.y = 288;
			}
		}
		else if(FireGhost.onScreen == 1){
			this.cd-=1;
		}
		if(this.onScreen == 1){
			if(Alpha/(2+this.frame*0.1) < 0.1){
				ctx.globalAlpha = 0;
			}
			else{
				ctx.globalAlpha = Alpha/(2+this.frame*0.1);
			}
			if(this.played == 0){
				this.played = 1;
				radiofailure.currentTime=0;
				radiofailure.play();
				if(!FireGhost.hp){
					STATE = "Graveyard";
				}
				rePlant();
				planted = false;
			}
			ctx.fillStyle = "#4a7ba4";
			ctx.fillRect(this.x-this.width*0.5, this.y-this.height*0.5, this.width, this.height);
			this.width = this.width + 8*this.frame;
			this.height = this.height + 8*this.frame;
			this.frame++;
			ctx.globalAlpha = Alpha;
			if(this.frame == 120){
				this.onScreen = 0;
				this.frame = 0;
			}
		}
	}
};
var GhostRing = {
	x: 400,
	y: 288,
	onScreen: 0,
	enterIndex: 1,
	exitIndex: 1,
	loopIndex: 0,
	collision: function(dir){
		for(O in GhostRingObs){
			if(collision(dir, player, GhostRingObs[O])){
				return true;
			}
		}
	},
	run: function(){
		if(this.onScreen){
			var xdiff = player.x - this.x;
			var ydiff = player.y - this.y;
			var dist = Math.sqrt((ydiff * ydiff) + (xdiff * xdiff));
			if(Math.abs(dist) <= 250 && Math.abs(dist) >= 134){
				if(darkwater.onScreen == 1 && darkwater.hptimer == 0){
					darkwater.hptimer = 20;
					darkwater.hp-=1;
					hptimer = 20;
				}	
				else if(hptimer <= 0){
					player.hp-=1;
					AList[7] = false;
					onDmg.currentTime=0;
					onDmg.play();
					hptimer = 30;
				}
			}
			if(this.enterIndex < 6){
				ctx.drawImage(GhostRingSheet, 800*(GhostRingEntrance[this.enterIndex]), 0, 800, 576, 0, 0, 800, 576);
				this.enterIndex++;
			}
			else if(this.enterIndex < 12){
				ctx.drawImage(GhostRingSheet, 800*(GhostRingEntrance[this.enterIndex]), 576, 800, 576, 0, 0, 800, 576);
				this.enterIndex++;
				if(this.enterIndex == 7){
					Explosion.currentTime=0;
					Explosion.play();
				}
			}
			else if(this.loopIndex < 90){
				ctx.drawImage(GhostRingSheet, 800*Math.floor((this.loopIndex%6)*0.5), 1152, 800, 576, 0, 0, 800, 576);
				this.loopIndex++;
			}
			else if(this.exitIndex < 8){
				ctx.drawImage(GhostRingSheet, 800*(GhostRingExit[this.exitIndex]), 1728, 800, 576, 0, 0, 800, 576);
				this.exitIndex++;
			}
			else{
				this.onScreen = 0;
				rainsound.currentTime=0;
				rainsound.pause();
			}
		}
	}
};
/*
Coords for ring collision x y w h
1: 282 34 227 28
2: 569 130 39 202
3: 294 390 226 32
4: 203 105 34 239
5: 220 62 62 43
6: 524 62 41 54
7: 520 344 49 62
8: 250 332 32 48
*/
function ghostRingObstacle(x, y, w, h){
	this.x = x;
	this.y = y;
	this.width = w;
	this.height = h;
};
//+60 to all y
var GhostRingObs = [];
GhostRingObs.push(new ghostRingObstacle(396, 108, 227, 28));
GhostRingObs.push(new ghostRingObstacle(589, 291, 39, 202));
GhostRingObs.push(new ghostRingObstacle(407, 466, 226, 32));
GhostRingObs.push(new ghostRingObstacle(220, 285, 34, 239));
GhostRingObs.push(new ghostRingObstacle(251, 143, 62, 43));
GhostRingObs.push(new ghostRingObstacle(544, 149, 41, 54));
GhostRingObs.push(new ghostRingObstacle(545, 435, 49, 62));
GhostRingObs.push(new ghostRingObstacle(264, 416, 32, 48));

//graveyard npc
var graveDigger = {
	x: 672,
	y: 472,
	width: 64,
	height: 44,
	onScreen: 0,
	index: 0,
	mouthIndex: 0,
	draw: function(){
		ctx.drawImage(GraveyardSheet, 64*(Math.floor(this.index*0.25)), 1632, 64, 44, this.x-this.width*0.5, this.y-this.height*0.5, 64,44);
		this.index++;
		if(this.index > 11){
			this.index = 0;
		}
		if(!GraveNight){
			var xdiff = player.x - this.x;
			var ydiff = player.y - this.y;
			var dist = Math.sqrt((ydiff * ydiff) + (xdiff * xdiff));
			if(dist < 64){
				ctx.drawImage(GraveyardSheet, 0, 620, 588, 80, 124, 31, 588, 80);
				ctx.drawImage(GraveyardSheet, 588+24*Math.floor(this.mouthIndex*0.5), 628, 24, 12, 624, 87, 24, 12);
				this.mouthIndex++;
				if(this.mouthIndex > 5){
					this.mouthIndex = 0;
				}
			}
		}
	}
};

function skeleton(rp, num){
	this.respawn = rp;
	this.num = num;
};
skeleton.prototype = {
	x: 9000,
	type: "skeleton",
	y: -400,
	hp: 4,
	onTree: 0,
	width: 48,
	height: 52,
	onScreen: 0,
	speed: 4,
	speed2: 2,
	dir: "W",
	dirct: 0,
	onTree: 0,
	movement: false,
	walkIndex: 0,
	spawnIndex: -1,
	rp: 90,
	pts: 300,
	LR: "",
	hptimer: 0,
	headless: 0,
	headlessTimer: 90,
	headThrowIndex: 0,
	draw: function(){
		if(this.hptimer >0){
			this.hptimer-=1;
		}
		if (this.hptimer*0.5 != Math.round(this.hptimer*0.5)){
			ctx.globalAlpha = Alpha*0.5;
		}
		if(this.spawnIndex > -1){
			ctx.drawImage(GraveyardSheet, 48*Math.floor(this.spawnIndex*0.5), 804, 48, 52, this.x-24, this.y-26, 48, 52);
			this.spawnIndex++;
			if(this.spawnIndex > 15){
				this.spawnIndex = -1;
				this.onScreen = 1;
				this.movement = true;
			}
		}else if(this.headThrowIndex){
			if(this.LR == "Left"){
				ctx.drawImage(GraveyardSheet, 48*Math.floor(this.headThrowIndex*0.5), 856, 48, 52, this.x-24, this.y-26, 48, 52);
			}else{
				ctx.drawImage(GraveyardSheet, 48*Math.floor(this.headThrowIndex*0.5), 908, 48, 52, this.x-24, this.y-26, 48, 52);
			}
			if(this.headThrowIndex > 17){
				this.headThrowIndex = 0;
				this.movement = true;
				this.headless = 1;
				for(H in SkelHeads){
					if(!SkelHeads[H].onScreen){
						SkelHeads[H].onScreen = 1;
						SkelHeads[H].x = this.x;
						SkelHeads[H].y = this.y;
						break;
					}
				}
			}
		}else if(this.onScreen){
			if(this.dir == "WA" || this.dir == "AS" || this.dir == "A"){
				this.LR = "Left";
				ctx.drawImage(GraveyardSheet, 192*this.headless + 48*Math.floor(this.walkIndex*0.5), 700, 48, 52, this.x-24, this.y-26, 48, 52);
			}else if(this.dir == "WD" || this.dir == "SD" || this.dir == "D"){
				this.LR = "Right";
				ctx.drawImage(GraveyardSheet, 192*this.headless + 48*Math.floor(this.walkIndex*0.5), 752, 48, 52, this.x-24, this.y-26, 48, 52);
			}else if(this.LR == "Left"){
				ctx.drawImage(GraveyardSheet, 192*this.headless + 48*Math.floor(this.walkIndex*0.5), 700, 48, 52, this.x-24, this.y-26, 48, 52);
			}else{
				ctx.drawImage(GraveyardSheet, 192*this.headless + 48*Math.floor(this.walkIndex*0.5), 752, 48, 52, this.x-24, this.y-26, 48, 52);
			}
			this.walkIndex++;
			if(this.walkIndex > 7){
				this.walkIndex = 0;
			}
			hpBarDraw(this);
		}
		if(this.dirct > 10){
			this.dirct = 10;
		}
		if(this.headlessTimer > 0){
			this.headlessTimer--;
		}else if(!this.headless){
			this.headThrowIndex++;
			this.movement = false;
		}
		if (this.hptimer*0.5 != Math.round(this.hptimer*0.5)){
			ctx.globalAlpha = Alpha;
		}
	},
	spawn: function(){
		if(this.respawn > 0){
			this.respawn--;
		}
		else if(!this.onScreen && this.spawnIndex < 0){
			if(GraveNight){
				this.num = Math.floor(Math.random()*9)+1;
				if(this.num == 1){
					this.x = obstacle11.x;
					this.y = obstacle11.y + 52;
					this.spawnIndex = 0;
				}
				else if(this.num == 2){
					this.x = obstacle12.x;
					this.y = obstacle12.y + 52;
					this.spawnIndex = 0;
				}
				else if(this.num == 3){
					this.x = obstacle13.x;
					this.y = obstacle13.y + 52;
					this.spawnIndex = 0;
				}
				else if(this.num == 4){
					this.x = obstacle15.x;
					this.y = obstacle15.y + 52;
					this.spawnIndex = 0;
				}
				else if(this.num == 5){
					this.x = obstacle16.x;
					this.y = obstacle16.y + 52;
					this.spawnIndex = 0;
				}
				else if(this.num == 6){
					this.x = obstacle17.x;
					this.y = obstacle17.y + 52;
					this.spawnIndex = 0;
				}
				else if(this.num == 7){
					this.x = obstacle21.x;
					this.y = obstacle21.y + 52;
					this.spawnIndex = 0;
				}
				else if(this.num == 8){
					this.x = obstacle22.x;
					this.y = obstacle22.y + 52;
					this.spawnIndex = 0;
				}
				else if(this.num == 9){
					this.x = obstacle23.x;
					this.y = obstacle23.y + 52;
					this.spawnIndex = 0;
				}
				this.headless = 0;
				this.headlessTimer = Math.floor(Math.random()*300)+30;
				this.hp = Math.floor(Math.random()*4)+1;
				this.headThrowIndex = 0;
			}
		}
	},
	run: function(){
		this.draw();
		if(this.onScreen){
			move(this);
			AI(this);
		}
		if(GraveNight){
			this.spawn();
		}
	}
};
function SkelHead(){};
SkelHead.prototype = {
	type: "Proj",
	x: 9000,
	onTree: 0,
	y: -400,
	width: 24,
	height: 20,
	speed: 12,
	speed2: 6,
	dirct: 0,
	dir: "A",
	slope: 1,
	closestSlope: 1,
	slopeIndex: 11,
	respawn: -1,
	rp: -1,
	onScreen: 0,
	found: true,
	pts: 0,
	frame: 0,
	dirct: 0,
	dirSwitch: false,
	destDir: "",
	draw: function(){
		if(this.onScreen){
			if(this.dir == "A"){
				ctx.drawImage(GraveyardSheet, 0, 960, 24, 20, this.x-this.width*0.5, this.y-this.height*0.5, 24, 20);
			}else{
				ctx.drawImage(GraveyardSheet, 24, 960, 24, 20, this.x-this.width*0.5, this.y-this.height*0.5, 24, 20);
			}
			this.frame++;
			if(collision(player.dir, player, this) || contained(player, this)){
				if(darkwater.onScreen == 1 && darkwater.hptimer == 0){
					darkwater.hptimer = 20;
					darkwater.hp-=1;
					hptimer = 20;
				}	
				else if(hptimer <= 0){
					player.hp-=1;
					onDmg.currentTime=0;
					onDmg.play();
					hptimer = 30;
				}
				this.x = 9000;
				this.y = -400;
				this.width = 16;
				this.height = 16;
				this.dirct = 0;
				this.dir = "A";
				this.slope = 0;
				this.closestSlope = 1;
				this.slopeIndex = 11;
				this.respawn = -1;
				this.onScreen = 0;
				this.found = true;
				this.frame = 0;
				this.dirct = 0;
				this.dirSwitch = false;
				this.destDir = "";
			}
		}
	}
};
var SkelHead1 = new SkelHead();
var SkelHead2 = new SkelHead();
var SkelHead3 = new SkelHead();
var SkelHead4 = new SkelHead();
var SkelHead5 = new SkelHead();
var SkelHeads = {1: SkelHead1, 2: SkelHead2, 3: SkelHead3, 4: SkelHead4, 5: SkelHead5};
var skel1 = new skeleton(-1,1);
var skel2 = new skeleton(-1,2);
var skel3 = new skeleton(-1,3);
var skel4 = new skeleton(150,4);
var skel5 = new skeleton(300, 5);
function moveSkelProj(M){
	if(M.onScreen){
		if(M.x < 0 || M.x > 800 || M.y < 0 || M.y > 576){
			M.x = 9000;
			M.y = -400;
			M.width = 16;
			M.height = 16;
			M.dirct = 0;
			M.dir = "A";
			M.slope = 0;
			M.closestSlope = 1;
			M.slopeIndex = 11;
			M.respawn = -1;
			M.onScreen = 0;
			M.found = true;
			M.frame = 0;
			M.dirct = 0;
			M.dirSwitch = false;
			M.destDir = "";
			return;
		}
		if(!M.slope){
			if(player.x-player.width*0.5 < M.x-M.width*0.5){
				M.dir = "A";
				var playerSlope = (M.y-player.y)/(M.x-player.x);
			}
			else{
				M.dir = "D";
				var playerSlope = (player.y-M.y)/(player.x-M.x);
			}
			M.slope = 0;
			for(N in AnubisProjArray){
				if(Math.abs(AnubisProjArray[N] - playerSlope) < Math.abs(M.slope - playerSlope)){
					M.slope = AnubisProjArray[N];
				}
			}
			//consider verticals
			if(M.x >= player.x - player.width*0.5 && M.x <= player.x + player.width*0.5){
				if(M.y-M.height*0.5 > player.y - player.height*0.5){
					M.dir = "A";
				}
				else{
					M.dir = "D";
				}
				M.slope = "Vertical";
				M.slopeIndex = 15;
			}
		}
		move_particle_AI(M);
	}
	
	if(collision(player.dir, player, M) || contained(player, M)){
		if(darkwater.onScreen == 1 && darkwater.hptimer == 0){
			darkwater.hptimer = 20;
			darkwater.hp-=1;
			hptimer = 20;
		}	
		else if(hptimer <= 0){
			player.hp-=1;
			onDmg.currentTime=0;
			onDmg.play();
			hptimer = 30;
		}
		M.x = 9000;
		M.y = -400;
		M.width = 16;
		M.height = 16;
		M.dirct = 0;
		M.dir = "A";
		M.slope = 0;
		M.closestSlope = 1;
		M.slopeIndex = 11;
		M.respawn = -1;
		M.onScreen = 0;
		M.found = true;
		M.frame = 0;
		M.dirct = 0;
		M.dirSwitch = false;
		M.destDir = "";
	}
}
function vampire(rp){
	this.respawn = rp;
};
vampire.prototype = {
	type: "Mosquito",
	x: 9000,
	onTree: 0,
	y: -400,
	width: 48,
	height: 48,
	speed: 8,
	speed2: 4,
	dirct: 0,
	dir: "W",
	LR: "",
	rp: 150,
	onScreen: 0,
	movement: false,
	hp: 6,
	batIndex: 0,
	walkIndex: 0,
	hptimer: 0,
	pts: 6666,
	batTimer: 0,
	humanTimer: 0,
	nightAck: 0,
	frame: 0,
	cd: 0,
	target: 0,
	slope: 1,
	closestSlope: 1,
	slopeIndex: 11,
	dirSwitch: false,
	destDir: "",
	toHumanTimer: 0,
	toBatTimer: 0,
	draw: function(){
		if(this.onScreen == 1){
			if(this.hptimer>0){
				this.hptimer-=1;
			}
			if(this.batTimer > 0){
				this.batTimer--;
				if(!this.batTimer){
					this.toHumanTimer++;
				}
			}
			if (this.hptimer*0.5 != Math.round(this.hptimer*0.5)){
				ctx.globalAlpha = Alpha*0.5;
			}
			if(this.toHumanTimer){
				if(this.dir == "WA" || this.dir == "AS" || this.dir == "A"){
					this.LR = "Left";
					ctx.drawImage(GraveyardSheet, 48*Math.floor(this.toHumanTimer*0.5), 1224, 48, 48, this.x-24, this.y-24, 48, 48);
				}else if(this.dir == "WD" || this.dir == "SD" || this.dir == "D"){
					this.LR = "Right";
					ctx.drawImage(GraveyardSheet, 240+48*Math.floor(this.toHumanTimer*0.5), 1224, 48, 48, this.x-24, this.y-24, 48, 48);
				}else if(this.LR == "Left"){
					ctx.drawImage(GraveyardSheet, 48*Math.floor(this.toHumanTimer*0.5), 1224, 48, 48, this.x-24, this.y-24, 48, 48);
				}else{
					ctx.drawImage(GraveyardSheet, 240+48*Math.floor(this.toHumanTimer*0.5), 1224, 48, 48, this.x-24, this.y-24, 48, 48);
				}
				this.toHumanTimer++;
				if(this.toHumanTimer >= 11){
					this.toHumanTimer = 0;
					this.speed = 4;
					this.speed2 = 2;
					this.target = 0;
					this.humanTimer = Math.floor(Math.random()*120)+30;
				}
			}else if(this.toBatTimer){
				if(this.dir == "WA" || this.dir == "AS" || this.dir == "A"){
					this.LR = "Left";
					ctx.drawImage(GraveyardSheet, 48*Math.floor(this.toBatTimer*0.5), 1176, 48, 48, this.x-24, this.y-24, 48, 48);
				}else if(this.dir == "WD" || this.dir == "SD" || this.dir == "D"){
					this.LR = "Right";
					ctx.drawImage(GraveyardSheet, 384+48*Math.floor(this.toBatTimer*0.5), 1176, 48, 48, this.x-24, this.y-24, 48, 48);
				}else if(this.LR == "Left"){
					ctx.drawImage(GraveyardSheet, 48*Math.floor(this.toBatTimer*0.5), 1176, 48, 48, this.x-24, this.y-24, 48, 48);
				}else{
					ctx.drawImage(GraveyardSheet, 384+48*Math.floor(this.toBatTimer*0.5), 1176, 48, 48, this.x-24, this.y-24, 48, 48);
				}
				this.toBatTimer++;
				if(this.toBatTimer >= 16){
					this.toBatTimer = 0;
					this.batTimer = Math.floor(Math.random()*90)+15;
					this.target = Math.floor(Math.random()*1);
					this.speed = 8;
					this.speed2 = 4;
				}
			}else if(this.batTimer){
				if(this.dir == "WA" || this.dir == "AS" || this.dir == "A"){
					this.LR = "Left";
					ctx.drawImage(GraveyardSheet, 48*Math.floor(this.batIndex*0.5), 1080, 48, 48, this.x-24, this.y-24, 48, 48);
				}else if(this.dir == "WD" || this.dir == "SD" || this.dir == "D"){
					this.LR = "Right";
					ctx.drawImage(GraveyardSheet, 48*Math.floor(this.batIndex*0.5), 1128, 48, 48, this.x-24, this.y-24, 48, 48);
				}else if(this.LR == "Left"){
					ctx.drawImage(GraveyardSheet, 48*Math.floor(this.batIndex*0.5), 1080, 48, 48, this.x-24, this.y-24, 48, 48);
				}else{
					ctx.drawImage(GraveyardSheet, 48*Math.floor(this.batIndex*0.5), 1128, 48, 48, this.x-24, this.y-24, 48, 48);
				}
				this.batIndex++;
				if(this.batIndex > 9){
					this.batIndex = 0;
				}
			}else if(this.humanTimer){
				if(this.dir == "WA" || this.dir == "AS" || this.dir == "A"){
					this.LR = "Left";
					ctx.drawImage(GraveyardSheet, 48*Math.floor(this.walkIndex*0.5), 984, 48, 48, this.x-24, this.y-24, 48, 48);
				}else if(this.dir == "WD" || this.dir == "SD" || this.dir == "D"){
					this.LR = "Right";
					ctx.drawImage(GraveyardSheet, 48*Math.floor(this.walkIndex*0.5), 1032, 48, 48, this.x-24, this.y-24, 48, 48);
				}else if(this.LR == "Left"){
					ctx.drawImage(GraveyardSheet, 48*Math.floor(this.walkIndex*0.5), 984, 48, 48, this.x-24, this.y-24, 48, 48);
				}else{
					ctx.drawImage(GraveyardSheet, 48*Math.floor(this.walkIndex*0.5), 1032, 48, 48, this.x-24, this.y-24, 48, 48);
				}
				this.walkIndex++;
				if(this.walkIndex > 5){
					this.walkIndex = 0;
				}
				this.humanTimer--;
				if(!this.humanTimer){
					this.toBatTimer++;
				}
			}
			if (this.hptimer*0.5 != Math.round(this.hptimer*0.5)){
				ctx.globalAlpha = Alpha;
			}
			if(GraveNight){
				hpBarDraw(this);
				if(collision(this.dir, this, player) && (hptimer <=0 || hptimer >= 29)){
					if(!this.batTimer && !this.toBatTimer){
						this.toBatTimer++;
					}
					this.target = 1;
					this.hp+=1;
				}
			}
		}
	},
	move: function(){
		if(this.cd > 0){
			this.cd -=1;
		}
		if(this.onScreen){
			if(this.toBatTimer){
				return;
			}
			if(this.batTimer){
				if(this.dirct > 0){
					this.found = true;
					this.dirct-=1;
				}
				//change direction
				if(this.target){
					player.x = 800 - player.x;
					player.y = 576 - player.y;
				}
				if(Math.sqrt((player.x-this.x)*(player.x- this.x) + (player.y-this.y)*(player.y-this.y)) > 96){
					if(player.x-player.width*0.5 < this.x-this.width*0.5){
						if(this.dir != "A"){
							this.dirSwitch = true;
							this.destDir = "A";
						}
						var playerSlope = (this.y-player.y)/(this.x-player.x);
					}
					else if(player.x - player.width*0.5 == this.x - this.width*0.5){
						this.dir = this.dir;
					}
					else{
						if(this.dir != "D"){
							this.dirSwitch = true;
							this.destDir = "D";
						}
						var playerSlope = (player.y-this.y)/(player.x-this.x);
					}
					if(this.dirSwitch){
						if(this.slopeIndex <= 7){
							this.slopeIndex-=1;
							if(this.slopeIndex < 0){
								this.slopeIndex = 14;
								this.dir = this.destDir;
								this.dirSwitch = false;
							}
							this.slope = lightSlopes[this.slopeIndex];
						}
						else{
							this.slopeIndex+=1;
							if(this.slopeIndex > 14){
								this.slopeIndex = 0;
								this.dir = this.destDir;
								this.dirSwitch = false;
							}
							this.slope = lightSlopes[this.slopeIndex];
						}
					}
					else{
						//find ideal slope
						for(N in lightSlopes){
							if(Math.abs(lightSlopes[N] - playerSlope) < Math.abs(this.closestSlope - playerSlope)){
								this.closestSlope = lightSlopes[N];
							}
						}
						//change slope
						if(this.closestSlope > this.slope){
							if(this.closestSlope > 1 && this.slope < -1){
								this.slopeIndex-=1;
								this.slope = lightSlopes[this.slopeIndex];
								if(this.slopeIndex < 0){
									this.slopeIndex = 14;
									this.slope = lightSlopes[this.slopeIndex];
								}
							}
							else{
								this.slopeIndex+=1;
								this.slope = lightSlopes[this.slopeIndex];
							}
						}
						if(this.closestSlope < this.slope || this.slope == "Vertical"){
							if(this.closestSlope < -1 && this.slope > 1){
								this.slopeIndex+=1;
								this.slope = lightSlopes[this.slopeIndex];
								if(this.slopeIndex > 14){
									this.slopeIndex = 0;
									this.slope = lightSlopes[this.slopeIndex];
								}
							}
							else{
								this.slopeIndex-=1;
								this.slope = lightSlopes[this.slopeIndex];
							}
						}
						if(this.x >= player.x - player.width*0.5 && this.x <= player.x + player.width*0.5){
							if(this.y-this.height*0.5 > player.y - player.height*0.5){
								this.dir = "A";
							}
							else{
								this.dir = "D";
							}
							this.slope = "Vertical";
							this.slopeIndex = 15;
						}
					}
				}
				if(this.target){
					player.x = 800 - player.x;
					player.y = 576 - player.y;
				}
				move_particle_AI(this);
			}else{
				AI(this);
				move(this);
			}
		}
	},
	run: function(){
		if(!GraveNight){
			this.x+=3000;
			this.y+=3000;
			this.batTimer = 30;
			this.nightAck = 0;
		}
		else if(!this.nightAck){
			this.batTimer = 1;
			this.nightAck = 1;
		}
		if(this.onScreen && this.x < -1000){
			this.x+=3000;
			this.y+=3000;
		}
		this.draw();
		if(this.onScreen){
			this.move();
		}
		if(!dayone){
			spawn(this);
		}
		if(!GraveNight){
			this.x -= 3000;
			this.y -=3000;
		}
	}
};
var vamp1 = new vampire(30);
function bloodDog(rp){
	this.respawn = rp;
};
bloodDog.prototype = {
	x: 9000,
	type: "bloodDog",
	y: -400,
	hp: 6,
	onTree: 0,
	width: 48,
	height: 44,
	onScreen: 0,
	speed: 4,
	speed2: 2,
	dir: "W",
	dirct: 0,
	onTree: 0,
	movement: false,
	walkIndex: 0,
	rp: 120,
	pts: 700,
	LR: "",
	hptimer: 0,
	skulled: 0,
	corner: 1,
	corners: {1: {x: 80, y: 256}, 2: {x:96, y: 496}, 3: {x: 696, y: 496}, 4: {x: 672, y: 184}, 5: {x: 696, y: 496}, 6: {x: 96, y: 496}},
	draw: function(){
		if(this.hptimer >0){
			this.hptimer-=1;
		}
		if (this.hptimer*0.5 != Math.round(this.hptimer*0.5)){
			ctx.globalAlpha = Alpha*0.5;
		}
		if(this.onScreen){
			if(this.dir == "WA" || this.dir == "AS" || this.dir == "A"){
				this.LR = "Left";
				ctx.drawImage(GraveyardSheet, 64*Math.floor(this.walkIndex*0.5), 1676+ 112*this.skulled, 64, 56, this.x - 32, this.y - 28, 64, 56);
			}else if(this.dir == "WD" || this.dir == "SD" || this.dir == "D"){
				this.LR = "Right";
				ctx.drawImage(GraveyardSheet, 64*Math.floor(this.walkIndex*0.5), 1732+ 112*this.skulled, 64, 56, this.x - 32, this.y - 28, 64, 56);
			}else if(this.LR == "Left"){
				ctx.drawImage(GraveyardSheet, 64*Math.floor(this.walkIndex*0.5), 1676+ 112*this.skulled, 64, 56, this.x - 32, this.y - 28, 64, 56);
			}else{
				ctx.drawImage(GraveyardSheet, 64*Math.floor(this.walkIndex*0.5), 1732+ 112*this.skulled, 64, 56, this.x - 32, this.y - 28, 64, 56);
			}
			this.walkIndex++;
			if(this.walkIndex > 7){
				this.walkIndex = 0;
			}
			hpBarDraw(this);
		}
		if(this.dirct > 12){
			this.dirct = 12;
		}
		if (this.hptimer*0.5 != Math.round(this.hptimer*0.5)){
			ctx.globalAlpha = Alpha;
		}
	},
	run: function(){
		this.draw();
		if(this.onScreen){
			move(this);
			AI(this);
		}
		if(GraveNight && !dayone){
			spawn(this);
		}
	}
};
var dog1 = new bloodDog(150);