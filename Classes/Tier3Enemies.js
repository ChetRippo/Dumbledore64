//**This file contains tier 3 enemies, starting with bosses that show up in tier 2 levels. Tier 1 and 2 enemies are in Enemies.js**//
//--------------------------------------------- Tier 3 Enemies ----------------------------------------------------------------------//
// Crocodile enemy
var Croc = {
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
	respawn: 150,
	rp: 300,
	onScreen: 0,
	movement: false,
	hp: 5,
	hptimer: 0,
	pts: 2000,
	draw: function(){
		if(this.onScreen == 1){
			if(this.hptimer>0){
				this.hptimer-=1;
			}
			if (this.hptimer/2 != Math.round(this.hptimer/2)){
				ctx.fillStyle = "white"
				ctx.fillRect(this.x - this.width / 2, this.y - this.height / 2, this.width, this.height);
			}
			else{
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
					obstacle2[O].y+=obstacle2[O].height/2;
					if(collision("D", this, obstacle2[O]) || collision("A", this, obstacle2[O]) || collision("S", this, obstacle2[O]) || collision("W", this, obstacle2[O]) ||
						collision("WD", this, obstacle2[O]) || collision("WA", this, obstacle2[O]) || collision("AS", this, obstacle2[O]) || collision("SD", this, obstacle2[O])){
						landed = true;
					}
					obstacle2[O].x-=32;
					obstacle2[O].y-=obstacle2[O].height/2;
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
							ctx.drawImage(crocclosel1, this.x - this.width / 2, this.y - this.height / 2);
						}
						else{
							ctx.drawImage(crocopenl1, this.x - this.width / 2, this.y - this.height / 2);
						}
					}
					else{
						if(far){
							ctx.drawImage(croceyesl1, this.x - this.width / 2, this.y - this.height / 2);
						}
						else{
							ctx.drawImage(crocswiml1, this.x - this.width / 2, this.y - this.height / 2);
						}
					}
				}
				else if(this.dir == "WD" || this.dir == "SD" || this.dir == "D"){
					this.LR = "Right";
					if(landed){
						if(far){
							ctx.drawImage(croccloser1, this.x - this.width / 2, this.y - this.height / 2);
						}
						else{
							ctx.drawImage(crocopenr1, this.x - this.width / 2, this.y - this.height / 2);
						}
					}
					else{
						if(far){
							ctx.drawImage(croceyesr1, this.x - this.width / 2, this.y - this.height / 2);
						}
						else{
							ctx.drawImage(crocswimr1, this.x - this.width / 2, this.y - this.height / 2);
						}
					}
				}
				else if(this.LR == "Left"){
					if(landed){
						if(far){
							ctx.drawImage(crocclosel1, this.x - this.width / 2, this.y - this.height / 2);
						}
						else{
							ctx.drawImage(crocopenl1, this.x - this.width / 2, this.y - this.height / 2);
						}
					}
					else{
						if(far){
							ctx.drawImage(croceyesl1, this.x - this.width / 2, this.y - this.height / 2);
						}
						else{
							ctx.drawImage(crocswiml1, this.x - this.width / 2, this.y - this.height / 2);
						}
					}
				}
				else{
					if(landed){
						if(far){
							ctx.drawImage(croccloser1, this.x - this.width / 2, this.y - this.height / 2);
						}
						else{
							ctx.drawImage(crocopenr1, this.x - this.width / 2, this.y - this.height / 2);
						}
					}
					else{
						if(far){
							ctx.drawImage(croceyesr1, this.x - this.width / 2, this.y - this.height / 2);
						}
						else{
							ctx.drawImage(crocswimr1, this.x - this.width / 2, this.y - this.height / 2);
						}
					}
				}
			}
			hpBarDraw(this);
		}
	}
};
var Croc2 = {
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
	respawn: 300,
	rp: 300,
	onScreen: 0,
	movement: false,
	hp: 5,
	hptimer: 0,
	pts: 2000,
	draw: function(){
		if(this.onScreen == 1){
			if(this.hptimer>0){
				this.hptimer-=1;
			}
			if (this.hptimer/2 != Math.round(this.hptimer/2)){
				ctx.fillStyle = "white"
				ctx.fillRect(this.x - this.width / 2, this.y - this.height / 2, this.width, this.height);
			}
			else{
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
					obstacle2[O].y+=obstacle2[O].height/2;
					if(collision("D", this, obstacle2[O]) || collision("A", this, obstacle2[O]) || collision("S", this, obstacle2[O]) || collision("W", this, obstacle2[O]) ||
						collision("WD", this, obstacle2[O]) || collision("WA", this, obstacle2[O]) || collision("AS", this, obstacle2[O]) || collision("SD", this, obstacle2[O])){
						landed = true;
					}
					obstacle2[O].x-=32;
					obstacle2[O].y-=obstacle2[O].height/2;
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
							ctx.drawImage(crocclosel1, this.x - this.width / 2, this.y - this.height / 2);
						}
						else{
							ctx.drawImage(crocopenl1, this.x - this.width / 2, this.y - this.height / 2);
						}
					}
					else{
						if(far){
							ctx.drawImage(croceyesl1, this.x - this.width / 2, this.y - this.height / 2);
						}
						else{
							ctx.drawImage(crocswiml1, this.x - this.width / 2, this.y - this.height / 2);
						}
					}
				}
				else if(this.dir == "WD" || this.dir == "SD" || this.dir == "D"){
					this.LR = "Right";
					if(landed){
						if(far){
							ctx.drawImage(croccloser1, this.x - this.width / 2, this.y - this.height / 2);
						}
						else{
							ctx.drawImage(crocopenr1, this.x - this.width / 2, this.y - this.height / 2);
						}
					}
					else{
						if(far){
							ctx.drawImage(croceyesr1, this.x - this.width / 2, this.y - this.height / 2);
						}
						else{
							ctx.drawImage(crocswimr1, this.x - this.width / 2, this.y - this.height / 2);
						}
					}
				}
				else if(this.LR == "Left"){
					if(landed){
						if(far){
							ctx.drawImage(crocclosel1, this.x - this.width / 2, this.y - this.height / 2);
						}
						else{
							ctx.drawImage(crocopenl1, this.x - this.width / 2, this.y - this.height / 2);
						}
					}
					else{
						if(far){
							ctx.drawImage(croceyesl1, this.x - this.width / 2, this.y - this.height / 2);
						}
						else{
							ctx.drawImage(crocswiml1, this.x - this.width / 2, this.y - this.height / 2);
						}
					}
				}
				else{
					if(landed){
						if(far){
							ctx.drawImage(croccloser1, this.x - this.width / 2, this.y - this.height / 2);
						}
						else{
							ctx.drawImage(crocopenr1, this.x - this.width / 2, this.y - this.height / 2);
						}
					}
					else{
						if(far){
							ctx.drawImage(croceyesr1, this.x - this.width / 2, this.y - this.height / 2);
						}
						else{
							ctx.drawImage(crocswimr1, this.x - this.width / 2, this.y - this.height / 2);
						}
					}
				}
			}
			hpBarDraw(this);
		}
	}
};
// Mosquito enemy
var Mosquito = {
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
	respawn: 90,
	rp: 150,
	onScreen: 0,
	movement: false,
	hp: 1,
	index: false,
	hptimer: 0,
	pts: 100,
	runTimer: 0,
	draw: function(){
		if(this.onScreen == 1){
			if(this.hptimer>0){
				this.hptimer-=1;
			}
			if(this.runTimer>0){
				this.runTimer-=1;
			}
			if (this.hptimer/2 != Math.round(this.hptimer/2)){
				ctx.fillStyle = "white"
				ctx.fillRect(this.x - this.width / 2, this.y - this.height / 2, this.width, this.height);
			}
			else{
				if(this.dir == "WA" || this.dir == "AS" || this.dir == "A"){
					this.LR = "Left";
					if(this.index){
						ctx.drawImage(bugL2, this.x - this.width / 2, this.y - this.height / 2);
						this.index = false;
					}
					else{
						ctx.drawImage(bugL1, this.x - this.width / 2, this.y - this.height / 2);
						this.index = true;
					}
				}
				else if(this.dir == "WD" || this.dir == "SD" || this.dir == "D"){
					if(this.index){
						ctx.drawImage(bugR2, this.x - this.width / 2, this.y - this.height / 2);
						this.index = false;
					}
					else{
						ctx.drawImage(bugR1, this.x - this.width / 2, this.y - this.height / 2);
						this.index = true;
					}
					this.LR = "Right";
				}
				else if(this.LR == "Left"){
					if(this.index){
						ctx.drawImage(bugL2, this.x - this.width / 2, this.y - this.height / 2);
						this.index = false;
					}
					else{
						ctx.drawImage(bugL1, this.x - this.width / 2, this.y - this.height / 2);
						this.index = true;
					}
				}
				else{
					if(this.index){
						ctx.drawImage(bugR2, this.x - this.width / 2, this.y - this.height / 2);
						this.index = false;
					}
					else{
						ctx.drawImage(bugR1, this.x - this.width / 2, this.y - this.height / 2);
						this.index = true;
					}
				}
			}
			hpBarDraw(this);
			if(collision(this.dir, this, player) && this.runTimer == 0 && (hptimer <=0 || hptimer >= 29)){
				this.runTimer = 30;
				this.hp+=1;
			}
		}
	}
};
// Mosquito enemy
var Mosquito2 = {
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
	respawn: 240,
	rp: 150,
	onScreen: 0,
	movement: false,
	hp: 1,
	index: false,
	hptimer: 0,
	pts: 100,
	runTimer: 0,
	draw: function(){
		if(this.onScreen == 1){
			if(this.hptimer>0){
				this.hptimer-=1;
			}
			if(this.runTimer>0){
				this.runTimer-=1;
			}
			if (this.hptimer/2 != Math.round(this.hptimer/2)){
				ctx.fillStyle = "white"
				ctx.fillRect(this.x - this.width / 2, this.y - this.height / 2, this.width, this.height);
			}
			else{
				if(this.dir == "WA" || this.dir == "AS" || this.dir == "A"){
					this.LR = "Left";
					if(this.index){
						ctx.drawImage(bugL2, this.x - this.width / 2, this.y - this.height / 2);
						this.index = false;
					}
					else{
						ctx.drawImage(bugL1, this.x - this.width / 2, this.y - this.height / 2);
						this.index = true;
					}
				}
				else if(this.dir == "WD" || this.dir == "SD" || this.dir == "D"){
					if(this.index){
						ctx.drawImage(bugR2, this.x - this.width / 2, this.y - this.height / 2);
						this.index = false;
					}
					else{
						ctx.drawImage(bugR1, this.x - this.width / 2, this.y - this.height / 2);
						this.index = true;
					}
					this.LR = "Right";
				}
				else if(this.LR == "Left"){
					if(this.index){
						ctx.drawImage(bugL2, this.x - this.width / 2, this.y - this.height / 2);
						this.index = false;
					}
					else{
						ctx.drawImage(bugL1, this.x - this.width / 2, this.y - this.height / 2);
						this.index = true;
					}
				}
				else{
					if(this.index){
						ctx.drawImage(bugR2, this.x - this.width / 2, this.y - this.height / 2);
						this.index = false;
					}
					else{
						ctx.drawImage(bugR1, this.x - this.width / 2, this.y - this.height / 2);
						this.index = true;
					}
				}
			}
			hpBarDraw(this);
			if(collision(this.dir, this, player) && this.runTimer == 0 && (hptimer <=0 || hptimer >= 29)){
				this.runTimer = 30;
				this.hp+=1;
			}
		}
	}
};
// Mosquito enemy
var Mosquito3 = {
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
	respawn: 390,
	rp: 150,
	onScreen: 0,
	movement: false,
	hp: 1,
	index: false,
	hptimer: 0,
	pts: 100,
	runTimer: 0,
	draw: function(){
		if(this.onScreen == 1){
			if(this.hptimer>0){
				this.hptimer-=1;
			}
			if(this.runTimer>0){
				this.runTimer-=1;
			}
			if (this.hptimer/2 != Math.round(this.hptimer/2)){
				ctx.fillStyle = "white"
				ctx.fillRect(this.x - this.width / 2, this.y - this.height / 2, this.width, this.height);
			}
			else{
				if(this.dir == "WA" || this.dir == "AS" || this.dir == "A"){
					this.LR = "Left";
					if(this.index){
						ctx.drawImage(bugL2, this.x - this.width / 2, this.y - this.height / 2);
						this.index = false;
					}
					else{
						ctx.drawImage(bugL1, this.x - this.width / 2, this.y - this.height / 2);
						this.index = true;
					}
				}
				else if(this.dir == "WD" || this.dir == "SD" || this.dir == "D"){
					if(this.index){
						ctx.drawImage(bugR2, this.x - this.width / 2, this.y - this.height / 2);
						this.index = false;
					}
					else{
						ctx.drawImage(bugR1, this.x - this.width / 2, this.y - this.height / 2);
						this.index = true;
					}
					this.LR = "Right";
				}
				else if(this.LR == "Left"){
					if(this.index){
						ctx.drawImage(bugL2, this.x - this.width / 2, this.y - this.height / 2);
						this.index = false;
					}
					else{
						ctx.drawImage(bugL1, this.x - this.width / 2, this.y - this.height / 2);
						this.index = true;
					}
				}
				else{
					if(this.index){
						ctx.drawImage(bugR2, this.x - this.width / 2, this.y - this.height / 2);
						this.index = false;
					}
					else{
						ctx.drawImage(bugR1, this.x - this.width / 2, this.y - this.height / 2);
						this.index = true;
					}
				}
			}
			hpBarDraw(this);
			if(collision(this.dir, this, player) && this.runTimer == 0 && (hptimer <=0 || hptimer >= 29)){
				this.runTimer = 30;
				this.hp+=1;
			}
		}
	}
};
// Mosquito enemy
var Mosquito4 = {
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
	respawn: 540,
	rp: 150,
	onScreen: 0,
	movement: false,
	hp: 1,
	index: false,
	hptimer: 0,
	pts: 100,
	runTimer: 0,
	draw: function(){
		if(this.onScreen == 1){
			if(this.hptimer>0){
				this.hptimer-=1;
			}
			if(this.runTimer>0){
				this.runTimer-=1;
			}
			if (this.hptimer/2 != Math.round(this.hptimer/2)){
				ctx.fillStyle = "white"
				ctx.fillRect(this.x - this.width / 2, this.y - this.height / 2, this.width, this.height);
			}
			else{
				if(this.dir == "WA" || this.dir == "AS" || this.dir == "A"){
					this.LR = "Left";
					if(this.index){
						ctx.drawImage(bugL2, this.x - this.width / 2, this.y - this.height / 2);
						this.index = false;
					}
					else{
						ctx.drawImage(bugL1, this.x - this.width / 2, this.y - this.height / 2);
						this.index = true;
					}
				}
				else if(this.dir == "WD" || this.dir == "SD" || this.dir == "D"){
					if(this.index){
						ctx.drawImage(bugR2, this.x - this.width / 2, this.y - this.height / 2);
						this.index = false;
					}
					else{
						ctx.drawImage(bugR1, this.x - this.width / 2, this.y - this.height / 2);
						this.index = true;
					}
					this.LR = "Right";
				}
				else if(this.LR == "Left"){
					if(this.index){
						ctx.drawImage(bugL2, this.x - this.width / 2, this.y - this.height / 2);
						this.index = false;
					}
					else{
						ctx.drawImage(bugL1, this.x - this.width / 2, this.y - this.height / 2);
						this.index = true;
					}
				}
				else{
					if(this.index){
						ctx.drawImage(bugR2, this.x - this.width / 2, this.y - this.height / 2);
						this.index = false;
					}
					else{
						ctx.drawImage(bugR1, this.x - this.width / 2, this.y - this.height / 2);
						this.index = true;
					}
				}
			}
			hpBarDraw(this);
			if(collision(this.dir, this, player) && this.runTimer == 0 && (hptimer <=0 || hptimer >= 29)){
				this.runTimer = 30;
				this.hp+=1;
			}
		}
	}
};
// Swudge Decoy
var Swudge = {
	x: 9000,
	y: -400,
	width: 80,
	height: 60,
	LR: "",
	onScreen: 0,
	index: 1,
	// Draws the enemy on the canvas when called
	draw: function(){
		if(this.onScreen){
			if(this.LR == "Left"){
				ctx.drawImage(BoomswudgeL[Math.floor(this.index/3+1)], this.x - this.width / 2, this.y - this.height / 2);
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
				ctx.drawImage(BoomswudgeR[Math.floor(this.index/3+1)], this.x - this.width / 2, this.y - this.height / 2);
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
};
// Swudge Decoy
var Swudge2 = {
	x: 9000,
	y: -400,
	width: 80,
	height: 60,
	LR: "",
	onScreen: 0,
	index: 1,
	// Draws the enemy on the canvas when called
	draw: function(){
		if(this.onScreen){
			if(this.LR == "Left"){
				ctx.drawImage(BoomswudgeL[Math.floor(this.index/3+1)], this.x - this.width / 2, this.y - this.height / 2);
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
				ctx.drawImage(BoomswudgeR[Math.floor(this.index/3+1)], this.x - this.width / 2, this.y - this.height / 2);
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
};
//---------------------------------------------- Tier 3 Bosses ----------------------------------------------------------------------//
//Boss: Master Thief
//Location: Jungle
//Req: Stolen from 2 times?
//Attacks: 
//      -Comes in with all stolen spells. Maybe cast like sorceror?
//		-Can cut trees down with dash move
//		-Can turn invisible, forcing you to follow footprints
//		-Can Steal from you
//Outcome: 
//      -All trees should have fallen down by end of fight, else they fall down at end.
//		-Blue aura
//		-On pickup water floods the area and the tree logs turn in to bridges based on where the tree spawned and where it fell.
//		-Swamp level begins
//		-Pickup: Element Drop Rate Up
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
			if (this.hptimer/2 != Math.round(this.hptimer/2) && this.hp > 3){
				ctx.fillStyle = "white"
				ctx.fillRect(this.x - this.width / 2, this.y - this.height / 2, this.width, this.height);
			}
			else if(this.hp < 4){
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
					ctx.drawImage(ThiefBossPicL, this.x - this.width / 2, this.y - this.height / 2);
				}
				else if(this.LR == "Right"){
					ctx.drawImage(ThiefBossPicR, this.x - this.width / 2, this.y - this.height / 2);
				}
			}
			else{
				if(this.LR == "Left"){
					ctx.drawImage(ThiefBossDashL, this.x - this.width / 2, this.y - this.height / 2);
				}
				else if(this.LR == "Right"){
					ctx.drawImage(ThiefBossDashR, this.x - this.width / 2, this.y - this.height / 2);
				}
			}
			if(this.dir == "WA" || this.dir == "AS" || this.dir == "A"){
				this.LR = "Left";
			}
			else if(this.dir == "WD" || this.dir == "SD" || this.dir == "D"){
				this.LR = "Right";
			}
			if(this.hp > 3){
				hpBarDraw(this);
			}
			if(MThiefHeal.onScreen == 0){
				var Q = 32;
			}
			else{
				var Q = 2 + MThiefHeal.timeLeft*2;
			}
			if(this.hp > 3){
				if(this.spell1 != "N/A"){
					if(this.spell1 == "Fire"){
						ctx.drawImage(Firebox, this.x-this.width/3, this.y - this.height + 16, Q, Q);
					}
					if(this.spell1 == "Ice"){
						ctx.drawImage(Icebox, this.x-this.width/3, this.y - this.height + 16, Q, Q);
					}
					if(this.spell1 == "Earth"){
						ctx.drawImage(Earthbox, this.x-this.width/3, this.y - this.height + 16, Q, Q);
					}
					if(this.spell1 == "Lightning"){
						ctx.drawImage(Thunderbox, this.x-this.width/3, this.y - this.height + 16, Q, Q);
					}
					if(this.spell1 == "Air"){
						ctx.drawImage(Windbox, this.x-this.width/3, this.y - this.height + 16, Q, Q);
					}
					if(this.spell1 == "Mystic"){
						ctx.drawImage(Mysticbox, this.x-this.width/3, this.y - this.height + 16, Q, Q);
					}
					if(this.spell1 == "Water"){
						ctx.drawImage(Waterbox, this.x-this.width/3, this.y - this.height + 16, Q, Q);
					}
					if(this.spell1 == "Dark"){
						ctx.drawImage(Darkbox, this.x-this.width/3, this.y - this.height + 16, Q, Q);
					}
				}
				if(this.spell2 != "N/A"){
					if(this.spell2 == "Fire"){
						ctx.drawImage(Firebox, this.x-this.width/8, this.y - this.height + 16, Q, Q);
					}
					if(this.spell2 == "Ice"){
						ctx.drawImage(Icebox, this.x-this.width/8, this.y - this.height + 16, Q, Q);
					}
					if(this.spell2 == "Earth"){
						ctx.drawImage(Earthbox, this.x-this.width/8, this.y - this.height + 16, Q, Q);
					}
					if(this.spell2 == "Lightning"){
						ctx.drawImage(Thunderbox, this.x-this.width/8, this.y - this.height + 16, Q, Q);
					}
					if(this.spell2 == "Air"){
						ctx.drawImage(Windbox, this.x-this.width/8, this.y - this.height + 16, Q, Q);
					}
					if(this.spell2 == "Mystic"){
						ctx.drawImage(Mysticbox, this.x-this.width/8, this.y - this.height + 16, Q, Q);
					}
					if(this.spell2 == "Water"){
						ctx.drawImage(Waterbox, this.x-this.width/8, this.y - this.height + 16, Q, Q);
					}
					if(this.spell2 == "Dark"){
						ctx.drawImage(Darkbox, this.x-this.width/8, this.y - this.height + 16, Q, Q);
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
			}
			else if(spell1 != "N/A"){
				if(this.spell1 == "N/A"){
					this.spell1 = spell1;
				}
				else if(this.spell2 == "N/A"){
					this.spell2 = spell1;
				}
				spell1 = "N/A";
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
			ctx.globalAlpha = Alpha/2;
			ctx.fillStyle = "black";
			ctx.fillRect(this.x-this.width/2, this.y-this.height/2, this.width, this.height);
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
var Foot1 = {
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
			if(MasterThief.hptimer/2 != Math.round(MasterThief.hptimer/2)){
				if(this.LR == "Right"){
					ctx.drawImage(ThiefBossFlashPrintR, this.x-this.width/2, this.y-this.height/2);
				}
				else{
					ctx.drawImage(ThiefBossFlashPrintL, this.x-this.width/2, this.y-this.height/2);
				}
			}
			else if(this.LR == "Right"){
				ctx.drawImage(ThiefBossPrintR, this.x-this.width/2, this.y-this.height/2);
			}
			else{
				ctx.drawImage(ThiefBossPrintL, this.x-this.width/2, this.y-this.height/2);
			}
		}
	}
}
var Foot2 = {
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
			if(MasterThief.hptimer/2 != Math.round(MasterThief.hptimer/2)){
				if(this.LR == "Right"){
					ctx.drawImage(ThiefBossFlashPrintR, this.x-this.width/2, this.y-this.height/2);
				}
				else{
					ctx.drawImage(ThiefBossFlashPrintL, this.x-this.width/2, this.y-this.height/2);
				}
			}
			else if(this.LR == "Right"){
				ctx.drawImage(ThiefBossPrintR, this.x-this.width/2, this.y-this.height/2);
			}
			else{
				ctx.drawImage(ThiefBossPrintL, this.x-this.width/2, this.y-this.height/2);
			}
		}
	}
}
var Foot3 = {
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
			if(MasterThief.hptimer/2 != Math.round(MasterThief.hptimer/2)){
				if(this.LR == "Right"){
					ctx.drawImage(ThiefBossFlashPrintR, this.x-this.width/2, this.y-this.height/2);
				}
				else{
					ctx.drawImage(ThiefBossFlashPrintL, this.x-this.width/2, this.y-this.height/2);
				}
			}
			else if(this.LR == "Right"){
				ctx.drawImage(ThiefBossPrintR, this.x-this.width/2, this.y-this.height/2);
			}
			else{
				ctx.drawImage(ThiefBossPrintL, this.x-this.width/2, this.y-this.height/2);
			}
		}
	}
}
var Foot4 = {
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
			if(MasterThief.hptimer/2 != Math.round(MasterThief.hptimer/2)){
				if(this.LR == "Right"){
					ctx.drawImage(ThiefBossFlashPrintR, this.x-this.width/2, this.y-this.height/2);
				}
				else{
					ctx.drawImage(ThiefBossFlashPrintL, this.x-this.width/2, this.y-this.height/2);
				}
			}
			else if(this.LR == "Right"){
				ctx.drawImage(ThiefBossPrintR, this.x-this.width/2, this.y-this.height/2);
			}
			else{
				ctx.drawImage(ThiefBossPrintL, this.x-this.width/2, this.y-this.height/2);
			}
		}
	}
}
var Foot5 = {
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
			if(MasterThief.hptimer/2 != Math.round(MasterThief.hptimer/2)){
				if(this.LR == "Right"){
					ctx.drawImage(ThiefBossFlashPrintR, this.x-this.width/2, this.y-this.height/2);
				}
				else{
					ctx.drawImage(ThiefBossFlashPrintL, this.x-this.width/2, this.y-this.height/2);
				}
			}
			else if(this.LR == "Right"){
				ctx.drawImage(ThiefBossPrintR, this.x-this.width/2, this.y-this.height/2);
			}
			else{
				ctx.drawImage(ThiefBossPrintL, this.x-this.width/2, this.y-this.height/2);
			}
		}
	}
}
var Foot6 = {
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
			if(MasterThief.hptimer/2 != Math.round(MasterThief.hptimer/2)){
				if(this.LR == "Right"){
					ctx.drawImage(ThiefBossFlashPrintR, this.x-this.width/2, this.y-this.height/2);
				}
				else{
					ctx.drawImage(ThiefBossFlashPrintL, this.x-this.width/2, this.y-this.height/2);
				}
			}
			else if(this.LR == "Right"){
				ctx.drawImage(ThiefBossPrintR, this.x-this.width/2, this.y-this.height/2);
			}
			else{
				ctx.drawImage(ThiefBossPrintL, this.x-this.width/2, this.y-this.height/2);
			}
		}
	}
}
var Foot7 = {
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
			if(MasterThief.hptimer/2 != Math.round(MasterThief.hptimer/2)){
				if(this.LR == "Right"){
					ctx.drawImage(ThiefBossFlashPrintR, this.x-this.width/2, this.y-this.height/2);
				}
				else{
					ctx.drawImage(ThiefBossFlashPrintL, this.x-this.width/2, this.y-this.height/2);
				}
			}
			else if(this.LR == "Right"){
				ctx.drawImage(ThiefBossPrintR, this.x-this.width/2, this.y-this.height/2);
			}
			else{
				ctx.drawImage(ThiefBossPrintL, this.x-this.width/2, this.y-this.height/2);
			}
		}
	}
}
var Foot8 = {
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
			if(MasterThief.hptimer/2 != Math.round(MasterThief.hptimer/2)){
				if(this.LR == "Right"){
					ctx.drawImage(ThiefBossFlashPrintR, this.x-this.width/2, this.y-this.height/2);
				}
				else{
					ctx.drawImage(ThiefBossFlashPrintL, this.x-this.width/2, this.y-this.height/2);
				}
			}
			else if(this.LR == "Right"){
				ctx.drawImage(ThiefBossPrintR, this.x-this.width/2, this.y-this.height/2);
			}
			else{
				ctx.drawImage(ThiefBossPrintL, this.x-this.width/2, this.y-this.height/2);
			}
		}
	}
}
var Foot9 = {
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
			if(MasterThief.hptimer/2 != Math.round(MasterThief.hptimer/2)){
				if(this.LR == "Right"){
					ctx.drawImage(ThiefBossFlashPrintR, this.x-this.width/2, this.y-this.height/2);
				}
				else{
					ctx.drawImage(ThiefBossFlashPrintL, this.x-this.width/2, this.y-this.height/2);
				}
			}
			else if(this.LR == "Right"){
				ctx.drawImage(ThiefBossPrintR, this.x-this.width/2, this.y-this.height/2);
			}
			else{
				ctx.drawImage(ThiefBossPrintL, this.x-this.width/2, this.y-this.height/2);
			}
		}
	}
}
var Foot10 = {
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
			if(MasterThief.hptimer/2 != Math.round(MasterThief.hptimer/2)){
				if(this.LR == "Right"){
					ctx.drawImage(ThiefBossFlashPrintR, this.x-this.width/2, this.y-this.height/2);
				}
				else{
					ctx.drawImage(ThiefBossFlashPrintL, this.x-this.width/2, this.y-this.height/2);
				}
			}
			else if(this.LR == "Right"){
				ctx.drawImage(ThiefBossPrintR, this.x-this.width/2, this.y-this.height/2);
			}
			else{
				ctx.drawImage(ThiefBossPrintL, this.x-this.width/2, this.y-this.height/2);
			}
		}
	}
}
var Foot11 = {
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
			if(MasterThief.hptimer/2 != Math.round(MasterThief.hptimer/2)){
				if(this.LR == "Right"){
					ctx.drawImage(ThiefBossFlashPrintR, this.x-this.width/2, this.y-this.height/2);
				}
				else{
					ctx.drawImage(ThiefBossFlashPrintL, this.x-this.width/2, this.y-this.height/2);
				}
			}
			else if(this.LR == "Right"){
				ctx.drawImage(ThiefBossPrintR, this.x-this.width/2, this.y-this.height/2);
			}
			else{
				ctx.drawImage(ThiefBossPrintL, this.x-this.width/2, this.y-this.height/2);
			}
		}
	}
}
var Foot12 = {
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
			if(MasterThief.hptimer/2 != Math.round(MasterThief.hptimer/2)){
				if(this.LR == "Right"){
					ctx.drawImage(ThiefBossFlashPrintR, this.x-this.width/2, this.y-this.height/2);
				}
				else{
					ctx.drawImage(ThiefBossFlashPrintL, this.x-this.width/2, this.y-this.height/2);
				}
			}
			else if(this.LR == "Right"){
				ctx.drawImage(ThiefBossPrintR, this.x-this.width/2, this.y-this.height/2);
			}
			else{
				ctx.drawImage(ThiefBossPrintL, this.x-this.width/2, this.y-this.height/2);
			}
		}
	}
}
var Feet = {1: Foot1, 2: Foot2, 3: Foot3, 4: Foot4, 5: Foot5, 6: Foot6, 7: Foot7, 8: Foot8, 9: Foot9, 10: Foot10, 11: Foot11, 12: Foot12};