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
			if (this.hptimer*0.5 != Math.round(this.hptimer*0.5)){
				ctx.fillStyle = "white"
				ctx.fillRect(this.x - this.width * 0.5, this.y - this.height * 0.5, this.width, this.height);
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
			if (this.hptimer*0.5 != Math.round(this.hptimer*0.5)){
				ctx.fillStyle = "white"
				ctx.fillRect(this.x - this.width * 0.5, this.y - this.height * 0.5, this.width, this.height);
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
			if (this.hptimer*0.5 != Math.round(this.hptimer*0.5)){
				ctx.fillStyle = "white"
				ctx.fillRect(this.x - this.width * 0.5, this.y - this.height * 0.5, this.width, this.height);
			}
			else{
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
			if (this.hptimer*0.5 != Math.round(this.hptimer*0.5)){
				ctx.fillStyle = "white"
				ctx.fillRect(this.x - this.width * 0.5, this.y - this.height * 0.5, this.width, this.height);
			}
			else{
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
			if (this.hptimer*0.5 != Math.round(this.hptimer*0.5)){
				ctx.fillStyle = "white"
				ctx.fillRect(this.x - this.width * 0.5, this.y - this.height * 0.5, this.width, this.height);
			}
			else{
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
			if (this.hptimer*0.5 != Math.round(this.hptimer*0.5)){
				ctx.fillStyle = "white"
				ctx.fillRect(this.x - this.width * 0.5, this.y - this.height * 0.5, this.width, this.height);
			}
			else{
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
				ctx.drawImage(BoomswudgeL[Math.floor(this.index/3+1)], this.x - this.width * 0.5, this.y - this.height * 0.5);
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
				ctx.drawImage(BoomswudgeR[Math.floor(this.index/3+1)], this.x - this.width * 0.5, this.y - this.height * 0.5);
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
				ctx.drawImage(BoomswudgeL[Math.floor(this.index/3+1)], this.x - this.width * 0.5, this.y - this.height * 0.5);
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
				ctx.drawImage(BoomswudgeR[Math.floor(this.index/3+1)], this.x - this.width * 0.5, this.y - this.height * 0.5);
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
//Desert Scorps
var Scorp1 = {
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
	respawn: 90,
	rp: 300,
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
var Scorp2 = {
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
	respawn: 150,
	rp: 300,
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
var Scorp3 = {
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
	respawn: 210,
	rp: 300,
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
var Scorp4 = {
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
	respawn: 300,
	rp: 300,
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
//rollin: spawn > 1 on 2 of them
var Scorp5 = {
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
	respawn: 390,
	rp: 300,
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
var Scorp6 = {
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
	respawn: 480,
	rp: 300,
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
var Scorp7 = {
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
	respawn: -1,
	rp: -1,
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
var Scorp8 = {
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
	respawn: -1,
	rp: -1,
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
var ScorpsArray = {1: Scorp1, 2: Scorp2, 3: Scorp3, 4: Scorp4, 5: Scorp5, 6: Scorp6, 7: Scorp7, 8: Scorp8};
//draws scorpion and does attack ai
function drawScorp(E){
	if(E.onScreen == 1){
		if(SandStorm.onScreen){
			if(SandStorm.dir == "A"){
				ctx.drawImage(ScorpRollL[Math.ceil(E.rollIndex/3)], E.x - E.width * 0.5 - 40, E.y - E.height * 0.5);
			}
			else{
				ctx.drawImage(ScorpRollR[Math.ceil(E.rollIndex/3)], E.x - E.width * 0.5 - 40, E.y - E.height * 0.5);
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
					ctx.drawImage(ScorpWalkL[Math.ceil(E.index/3)], E.x - E.width * 0.5 - 40, E.y - E.height * 0.5);
				}
				else if(E.dir == "WD" || E.dir == "SD" || E.dir == "D"){
					ctx.drawImage(ScorpWalkR[Math.ceil(E.index/3)], E.x - E.width * 0.5, E.y - E.height * 0.5);
					E.LR = "Right";
				}
				else if(E.LR == "Left"){
					ctx.drawImage(ScorpWalkL[Math.ceil(E.index/3)], E.x - E.width * 0.5 - 40, E.y - E.height * 0.5);
				}
				else{
					ctx.drawImage(ScorpWalkR[Math.ceil(E.index/3)], E.x - E.width * 0.5, E.y - E.height * 0.5);
				}
				E.index++;
				if(E.index > 18){
					E.index = 1;
				}
			}
			else{
				if(E.dir == "WA" || E.dir == "AS" || E.dir == "A"){
					E.LR = "Left";
					ctx.drawImage(ScorpStabL[E.castIndex], E.x - 20 - 32, E.y - E.height * 0.5);
				}
				else if(E.dir == "WD" || E.dir == "SD" || E.dir == "D"){
					ctx.drawImage(ScorpStabR[E.castIndex], E.x - 20, E.y - E.height * 0.5);
					E.LR = "Right";
				}
				else if(E.LR == "Left"){
					ctx.drawImage(ScorpStabL[E.castIndex], E.x - 20 - 32, E.y - E.height * 0.5);
				}
				else{
					ctx.drawImage(ScorpStabR[E.castIndex], E.x - 20, E.y - E.height * 0.5);
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
//anubis
//still left hitbox: 20 x 28 188x 140y 
//still hittable hitbox: 20 by 60 188x 108y
//164x 68y left
/*anibus walk collision box:
56x32
x:180
y:136

hit box:
56x56
x:180
y:112*/
var Anubis1 = {
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
	respawn: 150,
	dir: "W",
	LR: "",
	rp: 300,
	pts: 4000,
	onScreen: 0,
	movement: false,
	moveTime: 0,
	index: 1,
	waitTime: 0,
	deadIndex: 0,
	cd: 90,
	casting: false,
	castIndex: 1,
	Statue: false,
	// Draws the enemy on the canvas when called
	draw: function(){
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
					ctx.drawImage(AnubisStatueL2, this.x - this.width * 0.5-164 - 24+8+9000, this.y - this.height * 0.5-68 - 42+16+9000);
				}
				else{
					ctx.drawImage(AnubisStatueL1, this.x - this.width * 0.5-164 - 24+8+9000, this.y - this.height * 0.5-68 - 42+16+9000);
				}
			}
			else{
				if(SandStorm.timeLeft < 45 && (SandStorm.timeLeft >= 40 || (SandStorm.timeLeft < 35 && SandStorm.timeLeft >= 30) || (SandStorm.timeLeft < 25 && SandStorm.timeLeft >= 20) ||
					(SandStorm.timeLeft < 15 && SandStorm.timeLeft >= 10) || (SandStorm.timeLeft < 5 && SandStorm.timeLeft >= 0))){
					ctx.drawImage(AnubisStatueR2, this.x - this.width * 0.5- 28 - 24+8+9000, this.y - this.height * 0.5-68 - 42+16+9000);
				}
				ctx.drawImage(AnubisStatueR1, this.x - this.width * 0.5- 28 - 24+8+9000, this.y - this.height * 0.5-68 - 42+16+9000);
			}
		}
		else{
			if(this.hptimer >0){
				this.hptimer-=1;
			}
			if (this.hptimer*0.5 != Math.round(this.hptimer*0.5)){
				ctx.fillStyle = "white";
				if(this.LR == "Right"){
					ctx.fillRect(this.x - this.width * 0.5+8, this.y - this.height * 0.5-40+8, this.width, this.height+40);
				}
				else{
					ctx.fillRect(this.x - this.width * 0.5, this.y - this.height * 0.5-40+8, this.width, this.height+40);
				}
			}
			if(this.casting){
				if(this.LR == "Left"){
					//since x and y change, and width/height, 15 and 30 = w or h /2, x and y are x2 y2
					ctx.drawImage(AnubisAttacksL[this.castIndex], this.x2 - 15-164 - 24+8, this.y2 - 30-68 - 42+16);
				}
				else{
					ctx.drawImage(AnubisAttacksR[this.castIndex], this.x2 - 15 - 24+8, this.y2 - 30-68 - 42+16);
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
					ctx.drawImage(AnubisWalkL[Math.ceil(this.index/3)], this.x - this.width * 0.5-164 - 24+8, this.y - this.height * 0.5-68 - 42+16);
				}
				else if(this.dir == "WD" || this.dir == "SD" || this.dir == "D"){
					ctx.drawImage(AnubisWalkR[Math.ceil(this.index/3)], this.x - this.width * 0.5 - 24+8, this.y - this.height * 0.5-68 - 42+16);
					this.LR = "Right";
				}
				else if(this.LR == "Left"){
					ctx.drawImage(AnubisWalkL[Math.ceil(this.index/3)], this.x - this.width * 0.5-164 - 24+8, this.y - this.height * 0.5-68 - 42+16);
				}
				else{
					ctx.drawImage(AnubisWalkR[Math.ceil(this.index/3)], this.x - this.width * 0.5 - 24+8, this.y - this.height * 0.5-68 - 42+16);
				}
				this.index++;
				if(this.index > 15){
					this.index = 1;
				}
			}
			else{
				if(this.dir == "WA" || this.dir == "AS" || this.dir == "A"){
					this.LR = "Left";
					ctx.drawImage(AnubisStandL, this.x - this.width * 0.5-164 - 24+8, this.y - this.height * 0.5-68 - 42+16);
				}
				else if(this.dir == "WD" || this.dir == "SD" || this.dir == "D"){
					ctx.drawImage(AnubisStandR, this.x - this.width * 0.5- 28 - 24+8, this.y - this.height * 0.5-68 - 42+16);
					this.LR = "Right";
				}
				else if(this.LR == "Left"){
					ctx.drawImage(AnubisStandL, this.x - this.width * 0.5-164 - 24+8, this.y - this.height * 0.5-68 - 42+16);
				}
				else{
					ctx.drawImage(AnubisStandR, this.x - this.width * 0.5-28 - 24+8, this.y - this.height * 0.5-68 - 42+16);
				}
			}
			hpBarDraw(this);
		}
	}
};
var Anubis2 = {
	type: "Anubis",
	x: 2000,
	y: -9000,
	x2: 2000,
	y2: -9000,
	onTree: 0,
	width: 30,
	height: 60,
	speed: 4,
	speed2: 2,
	dirct: 0,
	hp: 8,
	hptimer: 0,
	respawn: 450,
	dir: "W",
	LR: "",
	rp: 300,
	pts: 4000,
	onScreen: 0,
	movement: false,
	moveTime: 0,
	index: 1,
	waitTime: 0,
	deadIndex: 0,
	cd: 90,
	casting: false,
	castIndex: 1,
	Statue: false,
	// Draws the enemy on the canvas when called
	draw: function(){
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
		else if(this.Statue){
			if(this.LR == "Left"){
				if(SandStorm.timeLeft < 45 && (SandStorm.timeLeft >= 40 || (SandStorm.timeLeft < 35 && SandStorm.timeLeft >= 30) || (SandStorm.timeLeft < 25 && SandStorm.timeLeft >= 20) ||
					(SandStorm.timeLeft < 15 && SandStorm.timeLeft >= 10) || (SandStorm.timeLeft < 5 && SandStorm.timeLeft >= 0))){
					ctx.drawImage(AnubisStatueL2, this.x - this.width * 0.5-164 - 24+8+9000, this.y - this.height * 0.5-68 - 42+16+9000);
				}
				else{
					ctx.drawImage(AnubisStatueL1, this.x - this.width * 0.5-164 - 24+8+9000, this.y - this.height * 0.5-68 - 42+16+9000);
				}
			}
			else{
				if(SandStorm.timeLeft < 45 && (SandStorm.timeLeft >= 40 || (SandStorm.timeLeft < 35 && SandStorm.timeLeft >= 30) || (SandStorm.timeLeft < 25 && SandStorm.timeLeft >= 20) ||
					(SandStorm.timeLeft < 15 && SandStorm.timeLeft >= 10) || (SandStorm.timeLeft < 5 && SandStorm.timeLeft >= 0))){
					ctx.drawImage(AnubisStatueR2, this.x - this.width * 0.5- 28 - 24+8+9000, this.y - this.height * 0.5-68 - 42+16+9000);
				}
				ctx.drawImage(AnubisStatueR1, this.x - this.width * 0.5- 28 - 24+8+9000, this.y - this.height * 0.5-68 - 42+16+9000);
			}
		}
		else{
			if(this.hptimer >0){
				this.hptimer-=1;
			}
			if (this.hptimer*0.5 != Math.round(this.hptimer*0.5)){
				ctx.fillStyle = "white";
				if(this.LR == "Right"){
					ctx.fillRect(this.x - this.width * 0.5+8, this.y - this.height * 0.5-40+8, this.width, this.height+40);
				}
				else{
					ctx.fillRect(this.x - this.width * 0.5, this.y - this.height * 0.5-40+8, this.width, this.height+40);
				}
			}
			if(this.casting){
				if(this.LR == "Left"){
					//since x and y change, and width/height, 15 and 30 = w or h /2, x and y are x2 y2
					ctx.drawImage(AnubisAttacksL[this.castIndex], this.x2 - 15-164 - 24+8, this.y2 - 30-68 - 42+16);
				}
				else{
					ctx.drawImage(AnubisAttacksR[this.castIndex], this.x2 - 15 - 24+8, this.y2 - 30-68 - 42+16);
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
					ctx.drawImage(AnubisWalkL[Math.ceil(this.index/3)], this.x - this.width * 0.5-164 - 24+8, this.y - this.height * 0.5-68 - 42+16);
				}
				else if(this.dir == "WD" || this.dir == "SD" || this.dir == "D"){
					ctx.drawImage(AnubisWalkR[Math.ceil(this.index/3)], this.x - this.width * 0.5 - 24+8, this.y - this.height * 0.5-68 - 42+16);
					this.LR = "Right";
				}
				else if(this.LR == "Left"){
					ctx.drawImage(AnubisWalkL[Math.ceil(this.index/3)], this.x - this.width * 0.5-164 - 24+8, this.y - this.height * 0.5-68 - 42+16);
				}
				else{
					ctx.drawImage(AnubisWalkR[Math.ceil(this.index/3)], this.x - this.width * 0.5 - 24+8, this.y - this.height * 0.5-68 - 42+16);
				}
				this.index++;
				if(this.index > 15){
					this.index = 1;
				}
			}
			else{
				if(this.dir == "WA" || this.dir == "AS" || this.dir == "A"){
					this.LR = "Left";
					ctx.drawImage(AnubisStandL, this.x - this.width * 0.5-164 - 24+8, this.y - this.height * 0.5-68 - 42+16);
				}
				else if(this.dir == "WD" || this.dir == "SD" || this.dir == "D"){
					ctx.drawImage(AnubisStandR, this.x - this.width * 0.5- 28 - 24+8, this.y - this.height * 0.5-68 - 42+16);
					this.LR = "Right";
				}
				else if(this.LR == "Left"){
					ctx.drawImage(AnubisStandL, this.x - this.width * 0.5-164 - 24+8, this.y - this.height * 0.5-68 - 42+16);
				}
				else{
					ctx.drawImage(AnubisStandR, this.x - this.width * 0.5-28 - 24+8, this.y - this.height * 0.5-68 - 42+16);
				}
			}
			hpBarDraw(this);
		}
	}
};
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
	pts: 10000,
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
				ctx.fillStyle = "white";
				if(this.LR == "Left"){
					ctx.fillRect(this.x - this.width * 0.5, this.y - this.height * 0.5, this.width, this.height);
				}
				else{
					ctx.fillRect(this.x - this.width * 0.5, this.y - this.height * 0.5, this.width, this.height);
				}
			}
			else{
				if(this.dir == "WA" || this.dir == "AS" || this.dir == "A"){
					this.LR = "Left";
					if(this.frame > 240){
						ctx.drawImage(MegaMummy4L[Math.ceil(this.lastWalkIndex*0.33)], this.x-this.width * 0.5-48, this.y-this.height * 0.5);
					}
					else if(this.frame > 180){
						ctx.drawImage(MegaMummy3L[Math.ceil(this.index*0.33)], this.x-this.width * 0.5, this.y-this.height * 0.5);
					}
					else if(this.frame > 120){
						ctx.drawImage(MegaMummy2L[Math.ceil(this.index*0.33)], this.x-this.width * 0.5, this.y-this.height * 0.5);
					}
					else{
						ctx.drawImage(MegaMummy1L[Math.ceil(this.index*0.33)], this.x-this.width * 0.5, this.y-this.height * 0.5);
					}
				}
				else if(this.dir == "WD" || this.dir == "SD" || this.dir == "D"){
					if(this.frame > 240){
						ctx.drawImage(MegaMummy4R[Math.ceil(this.lastWalkIndex*0.33)], this.x-this.width * 0.5-64, this.y-this.height * 0.5);
					}
					else if(this.frame > 180){
						ctx.drawImage(MegaMummy3R[Math.ceil(this.index*0.33)], this.x-this.width * 0.5, this.y-this.height * 0.5);
					}
					else if(this.frame > 120){
						ctx.drawImage(MegaMummy2R[Math.ceil(this.index*0.33)], this.x-this.width * 0.5, this.y-this.height * 0.5);
					}
					else{
						ctx.drawImage(MegaMummy1R[Math.ceil(this.index*0.33)], this.x-this.width * 0.5, this.y-this.height * 0.5);
					}
					this.LR = "Right";
				}
				else if(this.LR == "Left"){
					if(this.frame > 240){
						ctx.drawImage(MegaMummy4L[Math.ceil(this.lastWalkIndex*0.33)], this.x-this.width * 0.5-48, this.y-this.height * 0.5);
					}
					else if(this.frame > 180){
						ctx.drawImage(MegaMummy3L[Math.ceil(this.index*0.33)], this.x-this.width * 0.5, this.y-this.height * 0.5);
					}
					else if(this.frame > 120){
						ctx.drawImage(MegaMummy2L[Math.ceil(this.index*0.33)], this.x-this.width * 0.5, this.y-this.height * 0.5);
					}
					else{
						ctx.drawImage(MegaMummy1L[Math.ceil(this.index*0.33)], this.x-this.width * 0.5, this.y-this.height * 0.5);
					}
				}
				else{
					if(this.frame > 240){
						ctx.drawImage(MegaMummy4R[Math.ceil(this.lastWalkIndex*0.33)], this.x-this.width * 0.5-64, this.y-this.height * 0.5);
					}
					else if(this.frame > 180){
						ctx.drawImage(MegaMummy3R[Math.ceil(this.index*0.33)], this.x-this.width * 0.5, this.y-this.height * 0.5);
					}
					else if(this.frame > 120){
						ctx.drawImage(MegaMummy2R[Math.ceil(this.index*0.33)], this.x-this.width * 0.5, this.y-this.height * 0.5);
					}
					else{
						ctx.drawImage(MegaMummy1R[Math.ceil(this.index*0.33)], this.x-this.width * 0.5, this.y-this.height * 0.5);
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
			}
			//bandages
			if(this.frame == 120 || this.frame == 180 || this.frame == 240){
				this.bandageFrame = 1;
				this.bandX = this.x;
				this.bandY = this.y;
			}
			if(this.bandageFrame > 0){
				if(this.LR == "Right"){
					ctx.drawImage(BandagesR[Math.ceil(this.bandageFrame*0.1)], this.bandX-this.width * 0.5, this.bandY-this.height * 0.5);
				}
				else{
					ctx.drawImage(BandagesL[Math.ceil(this.bandageFrame*0.1)], this.bandX-this.width * 0.5, this.bandY-this.height * 0.5);
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
			if (this.hptimer*0.5 != Math.round(this.hptimer*0.5) && this.hp > 3){
				ctx.fillStyle = "white"
				ctx.fillRect(this.x - this.width * 0.5, this.y - this.height * 0.5, this.width, this.height);
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
}
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
	respawn: 1600,
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
	spawnDone: false,
	laserable: false,
	draw: function(){
		if(this.onScreen == 1){
			if(!this.spawnDone){
				ctx.drawImage(GenieSpawn[this.spawnIndex], this.x-this.width*0.5-104-64, this.y-this.height*0.5-124 - 124);
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
					ctx.fillStyle = "white"
					ctx.fillRect(this.x - this.width * 0.5 - 64, this.y - this.height * 0.5 - 124, 152, 172);
				}
				else if(this.cd > 90 || this.lasering){
					if(this.spell == "Meteor"){
						if(this.LR == "Left"){
							ctx.drawImage(GenieML3, this.x-this.width*0.5-104-64, this.y-this.height*0.5-124 - 124);
						}
						else{
							ctx.drawImage(GenieMR3, this.x-this.width*0.5-104-64, this.y-this.height*0.5-124 - 124);
						}
					}
					else if(this.spell == "Summon"){
						if(this.LR == "Left"){
							ctx.drawImage(GenieRiseL3, this.x-this.width*0.5-104-64, this.y-this.height*0.5-124 - 124);
						}
						else{
							ctx.drawImage(GenieRiseR3, this.x-this.width*0.5-104-64, this.y-this.height*0.5-124 - 124);
						}
					}
					else if(this.spell == "Laser" || this.lasering){
						if(this.LR == "Left"){
							ctx.drawImage(GenieLaserLoopL[this.laserIndex], this.x-this.width*0.5-104-64, this.y-this.height*0.5-124 - 124);
						}
						else{
							ctx.drawImage(GenieLaserLoopR[this.laserIndex], this.x-this.width*0.5-104-64, this.y-this.height*0.5-124 - 124);
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
						ctx.drawImage(GenieL, this.x-this.width*0.5-104-64, this.y-this.height*0.5-124 - 124);
					}
					else if(this.dir == "WD" || this.dir == "SD" || this.dir == "D"){
						this.LR = "Right";
						ctx.drawImage(GenieR, this.x-this.width*0.5-104-64, this.y-this.height*0.5-124 - 124);
					}
					else if(this.LR == "Left"){
						ctx.drawImage(GenieL, this.x-this.width*0.5-104-64, this.y-this.height*0.5-124 - 124);
					}
					else{
						ctx.drawImage(GenieR, this.x-this.width*0.5-104-64, this.y-this.height*0.5-124 - 124);
					}
				}
				hpBarDraw(this);
			}
		}
	},
	spawn: function(){
		if(this.cd > 0 && this.onScreen == 1){
			this.cd-=1;
		}
		if(this.spawned == 0 && hpUp.x == -100){
			//if(treeWizz.spawned == 0){
				this.respawn-=1;
			//}
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
				this.x = 672;
				this.y = 320;
				this.onScreen = 1;
				BadWizards.currentTime = 0;
				GenieSpawnSound.currentTime = 0;
				GenieSpawnSound.play();
				AList[5] = true;
			}
		}
		if(this.cd == 90 && this.onScreen == 1 && this.spawnDone){
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
		if(this.cd > 20 && this.spawnDone && this.laserable && this.cd < 80 && !this.lasering && !this.lasered && ((player.x >= this.x-this.width*0.5-64-104-480+32 && player.x <= this.x-this.width*0.5-64-104-480+546
							&& player.y >= this.y-this.height*0.5-124 - 124+156 + 103 && player.y <= this.y-this.height*0.5-124 - 124+156 + 393)
							|| (player.x >= this.x-this.width*0.5-64-104+200+451 && player.x <= this.x-this.width*0.5-64-104+200+290
							&& player.y >= this.y-this.height*0.5-124 - 124+156 + 103 && player.y <= this.y-this.height*0.5-124 - 124+156 + 393))){
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
			var SpawnInMeteor = Math.floor(Math.random() * 5) + 1;
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
				ctx.fillStyle = "white";
				ctx.fillRect(this.x - this.width * 0.5, this.y - this.height * 0.5, this.width, this.height);
			}
			else if(!this.spawned){
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
				ctx.fillStyle = "white";
				ctx.fillRect(this.x - this.width * 0.5, this.y - this.height * 0.5, this.width, this.height);
			}
			else if(!this.spawned){
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
				ctx.fillStyle = "white";
				ctx.fillRect(this.x - this.width * 0.5, this.y - this.height * 0.5, this.width, this.height);
			}
			else if(!this.spawned){
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
				ctx.fillStyle = "white";
				ctx.fillRect(this.x - this.width * 0.5, this.y - this.height * 0.5, this.width, this.height);
			}
			else if(!this.spawned){
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