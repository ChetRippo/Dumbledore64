//--------------------------------------------- Enemies -----------------------------------------------------------------------------//

// Enemy 1 - Hudge
var Enemy = {
	type: 0,
	x: 500,
	y: -400,
	width: 32,
	height: 32,
	speed: 4,
	speed2: 2,
	dirct: 0,
	dir: "W",
	respawn: 1,
	origrp: 1,
	rp: 100,
	pts: 50,
	LR: "",
	onScreen: 0,
	movement: false,
	// Draws the enemy on the canvas when called
	draw: function(){
		if(this.dir == "WA" || this.dir == "AS" || this.dir == "A"){
			this.LR = "Left";
			ctx.drawImage(HudgeL, this.x - this.width / 2, this.y - this.height / 2);
		}
		else if(this.dir == "WD" || this.dir == "SD" || this.dir == "D"){
			ctx.drawImage(HudgeR, this.x - this.width / 2, this.y - this.height / 2);
			this.LR = "Right";
		}
		else if(this.LR == "Left"){
			ctx.drawImage(HudgeL, this.x - this.width / 2, this.y - this.height / 2);
		}
		else{
			ctx.drawImage(HudgeR, this.x - this.width / 2, this.y - this.height / 2);
		}
	}
};

// Enemy 2 - Pikkit
var EnemyA = {
	type: 0,
	x: -500,
	y: -500,
	width: 32,
	height: 32,
	dirct: 0,
	speed: 4,
	speed2: 2,
	respawn: 250,
	origrp: 250,
	pts: 50,
	dir: "W",
	rp: 100,
	onScreen: 0,
	movement: false,
	// Draws the enemy on the canvas when called
	draw: function(){
		ctx.drawImage(Pikkit, this.x - this.width / 2, this.y - this.height / 2);
	}
};

// Enemy 3 - Hudge
var EnemyB = {
	type: 0,
	x: -500,
	y: -500,
	width: 32,
	height: 32,
	dirct: 0,
	speed: 4,
	speed2: 2,
	respawn: 125,
	origrp: 125,
	pts: 50,
	rp: 100,
	dir: "W",
	LR: "",
	onScreen: 0,
	movement: false,
	// Draws the enemy on the canvas when called
	draw: function(){
		if(this.dir == "WA" || this.dir == "AS" || this.dir == "A"){
			this.LR = "Left";
			ctx.drawImage(HudgeL, this.x - this.width / 2, this.y - this.height / 2);
		}
		else if(this.dir == "WD" || this.dir == "SD" || this.dir == "D"){
			ctx.drawImage(HudgeR, this.x - this.width / 2, this.y - this.height / 2);
			this.LR = "Right";
		}
		else if(this.LR == "Left"){
			ctx.drawImage(HudgeL, this.x - this.width / 2, this.y - this.height / 2);
		}
		else{
			ctx.drawImage(HudgeR, this.x - this.width / 2, this.y - this.height / 2);
		}
	}
};

// Enemy 4 - Pikkit
var EnemyC = {
	type: 0,
	x: -500,
	y: -500,
	width: 32,
	height: 32,
	dirct: 0,
	speed: 4,
	speed2: 2,
	respawn: 300,
	pts: 50,
	dir: "W",
	origrp: 300,
	rp: 100,
	onScreen: 0,
	movement: false,
	// Draws the enemy on the canvas when called
	draw: function(){
		ctx.drawImage(Pikkit, this.x - this.width / 2, this.y - this.height / 2);
	}
};

// Fast Enemy - Globbly
var Tenemy = {
	type: 0,
	x: 2000,
	y: 0,
	width: 32,
	height: 32,
	speed: 8,
	speed2: 4,
	dirct: 0,
	dir: "W",
	respawn: 600,
	origrp: 600,
	pts: 50,
	rp: 600,
	onScreen: 0,
	movement: false,
	// Draws the enemy on the canvas when called
	draw: function(){
		ctx.drawImage(Globbly, this.x - this.width / 2, this.y - this.height / 2);
	}
};
// Fast Enemy 2 - Globbly
var TenemyA = {
	type: 0,
	x: 2000,
	y: 0,
	width: 32,
	height: 32,
	speed: 8,
	speed2: 4,
	dirct: 0,
	dir: "W",
	respawn: 2400,
	origrp: 2400,
	pts: 50,
	rp: 600,
	onScreen: 0,
	movement: false,
	// Draws the enemy on the canvas when called
	draw: function(){
		ctx.drawImage(Globbly, this.x - this.width / 2, this.y - this.height / 2);
	}
};

// Fast Enemy 3 - Globbly
var TenemyB = {
	type: 0,
	x: 2000,
	y: 0,
	width: 32,
	height: 32,
	speed: 8,
	speed2: 4,
	dirct: 0,
	dir: "W",
	respawn: 1800,
	origrp: 1800,
	pts: 50,
	rp: 600,
	onScreen: 0,
	movement: false,
	// Draws the enemy on the canvas when called
	draw: function(){
		ctx.drawImage(Globbly, this.x - this.width / 2, this.y - this.height / 2);
	}
};

// Lavaman
var Lavaman = {
	type: 0,
	x: 500,
	y: -400,
	width: 32,
	height: 32,
	speed: 4,
	speed2: 2,
	dirct: 0,
	dir: "W",
	respawn: -1,
	origrp: -1,
	pts: 50,
	rp: -1,
	onScreen: 0,
	movement: false,
	// Draws the enemy on the canvas when called
	draw: function(){
		ctx.drawImage(Lavamanpic, this.x - this.width / 2, this.y - this.height / 2);
	}
};
var Lavaman2 = {
	type: 0,
	x: 500,
	y: -400,
	width: 32,
	height: 32,
	speed: 4,
	speed2: 2,
	dirct: 0,
	dir: "W",
	respawn: -1,
	origrp: -1,
	pts: 50,
	rp: -1,
	onScreen: 0,
	movement: false,
	// Draws the enemy on the canvas when called
	draw: function(){
		ctx.drawImage(Lavamanpic, this.x - this.width / 2, this.y - this.height / 2);
	}
};
var Lavaman3 = {
	type: 0,
	x: 500,
	y: -400,
	width: 32,
	height: 32,
	speed: 4,
	speed2: 2,
	dirct: 0,
	dir: "W",
	respawn: -1,
	origrp: -1,
	pts: 50,
	rp: -1,
	onScreen: 0,
	movement: false,
	// Draws the enemy on the canvas when called
	draw: function(){
		ctx.drawImage(Lavamanpic, this.x - this.width / 2, this.y - this.height / 2);
	}
};
var Lavaman4 = {
	type: 0,
	x: 500,
	y: -400,
	width: 32,
	height: 32,
	speed: 4,
	speed2: 2,
	dirct: 0,
	dir: "W",
	respawn: -1,
	origrp: -1,
	pts: 50,
	rp: -1,
	onScreen: 0,
	movement: false,
	// Draws the enemy on the canvas when called
	draw: function(){
		ctx.drawImage(Lavamanpic, this.x - this.width / 2, this.y - this.height / 2);
	}
};
// PORTAL TO HELL
var Spawner = {
	type: 2,
	x: 2000,
	y: 0,
	width: 64,
	height: 64,
	speed: 2,
	speed2: 1,
	dirct: 0,
	hp: 5,
	hptimer: 0,
	respawn: 2000,
	origrp: 2000,
	dir: "W",
	rp: 2000,
	pts: 500,
	onScreen: 0,
	cd: 60,
	movement: false,
	// Draws the enemy on the canvas when called
	draw: function(){
		if(this.hptimer >0){
			this.hptimer-=1;
		}
		if (this.hptimer/2 != Math.round(this.hptimer/2)){
			ctx.fillStyle = "white";
			ctx.fillRect(this.x - this.width / 2, this.y - this.height / 2, this.width, this.height);
		}
		else{
			ctx.drawImage(Splavaman, this.x - this.width / 2, this.y - this.height / 2);
		}
		ctx.fillStyle = "red";
		if(this.hp == 5){
			ctx.fillRect(this.x - (this.width/2), this.y - this.height/2 - this.height/4, player.width/4, player.height/4);
			ctx.fillRect(this.x - (this.width/2) + 13, this.y - this.height/2 - this.height/4, player.width/4, player.height/4);
			ctx.fillRect(this.x - (this.width/2) + 26, this.y - this.height/2 - this.height/4, player.width/4, player.height/4);
			ctx.fillRect(this.x - (this.width/2) + 39, this.y - this.height/2 - this.height/4, player.width/4, player.height/4);
			ctx.fillRect(this.x -(this.width/2) + 52, this.y - this.height/2 - this.height/4, player.width/4, player.height/4);
		}
		if(this.hp == 4){
			ctx.fillRect(this.x - (this.width/2), this.y - this.height/2 - this.height/4, player.width/4, player.height/4);
			ctx.fillRect(this.x - (this.width/2) + 13, this.y - this.height/2 - this.height/4, player.width/4, player.height/4);
			ctx.fillRect(this.x - (this.width/2) + 26, this.y - this.height/2 - this.height/4, player.width/4, player.height/4);
			ctx.fillRect(this.x - (this.width/2) + 39, this.y - this.height/2 - this.height/4, player.width/4, player.height/4);
		}
		if(this.hp == 3){
			ctx.fillRect(this.x - (this.width/2), this.y - this.height/2 - this.height/4, player.width/4, player.height/4);
			ctx.fillRect(this.x - (this.width/2) + 13, this.y - this.height/2 - this.height/4, player.width/4, player.height/4);
			ctx.fillRect(this.x - (this.width/2) + 26, this.y - this.height/2 - this.height/4, player.width/4, player.height/4);
		}
		else if(this.hp == 2){
			ctx.fillRect(this.x - (this.width/2), this.y - this.height/2 - this.height/4, player.width/4, player.height/4);
			ctx.fillRect(this.x - (this.width/2) + 13, this.y - this.height/2 - this.height/4, player.width/4, player.height/4);
		}
		else{
			ctx.fillRect(this.x - (this.width/2), this.y - this.height/2 - this.height/4, player.width/4, player.height/4);
		}
	},
	fire: function(){
	if(this.onScreen == 1){
		if(this.cd<= 0){
			if(Lavaman.onScreen == 0){
				SpawnerSpawn.play();
				Lavaman.onScreen = 1;
				Lavaman.x = this.x-this.width/2;
				Lavaman.y = this.y-this.height/2;
				Lavaman.movement = true;
				Lavaman.cd = 15;
				this.cd = 60;
			}
			else if(Lavaman2.onScreen == 0){
				SpawnerSpawn.play();
				Lavaman2.onScreen = 1;
				Lavaman2.x = this.x-this.width/2;
				Lavaman2.y = this.y-this.height/2;
				Lavaman2.movement = true;
				Lavaman2.cd = 15;
				this.cd = 60;
			}
			else if(Lavaman3.onScreen == 0){
				SpawnerSpawn.play();
				Lavaman3.onScreen = 1;
				Lavaman3.x = this.x-this.width/2;
				Lavaman3.y = this.y-this.height/2;
				Lavaman3.movement = true;
				Lavaman3.cd = 15;
				this.cd = 60;
			}
			else if(Lavaman4.onScreen == 0){
				SpawnerSpawn.play();
				Lavaman4.onScreen = 1;
				Lavaman4.x = this.x-this.width/2;
				Lavaman4.y = this.y-this.height/2;
				Lavaman4.movement = true;
				Lavaman4.cd = 15;
				this.cd = 60;
			}
		}
		else{
			this.cd-=1;
		}
	}
	}
};

// Sorceror
var Sorceror = {
	type: 1,
	x: 2000,
	y: 0,
	width: 32,
	height: 32,
	speed: 4,
	speed2: 2,
	dirct: 0,
	respawn: 1200,
	origrp: 1200,
	spell: "Ice",
	hp: 3,
	hptimer: 0,
	movement: false,
	pts: 100,
	cd: 0,
	spawned: 60,
	rp: 1200,
	onScreen: 0,
	// Draws the enemy on the canvas when called
	draw: function(){
		if (this.hptimer/2 != Math.round(this.hptimer/2)){
			ctx.drawImage(Wizzurd2, this.x - this.width / 2, this.y - this.height / 2);
		}
		else{
			ctx.drawImage(Sorcerorpng, this.x - this.width / 2, this.y - this.height / 2);
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
	cast: function(){
		if(this.spell == "Ice"){
			sIce.shoot();
		}
		else if(this.spell == "Fire"){
			sFire.shoot();
		}
		else if(this.spell == "Lightning"){
			sLightning.shoot();
		}
		this.cd = 300;
	}
};
var treeWizz = {
	type: -1,
	x: 500,
	y: -400,
	width: 32,
	height: 32,
	speed: 4,
	speed2: 2,
	dirct: 0,
	dir: "W",
	respawn: -1,
	origrp: -1,
	rp: -1,
	onScreen: 0,
	movement: false,
	cd: 90,
	hp: 10,
	hptimer: 0,
	width2: 0,
	height2: 0,
	deadtrees: 0,
	herp: 0,
	frame: 0,
	pts: 1000,
	spawned: 0,
	draw: function(){
		if (this.hptimer/2 != Math.round(this.hptimer/2)){
			ctx.drawImage(Wizzurd2, this.x - this.width / 2, this.y - this.height / 2);
		}
		else{
			ctx.drawImage(TWizzurd, this.x - this.width / 2, this.y - this.height / 2);
		}
		ctx.fillStyle = "006600";
		if(this.hp == 10){
			ctx.fillRect(this.x - (this.width/2), this.y - this.height/2 - this.height/4, player.width/4, player.height/4);
			ctx.fillRect(this.x - (this.width/2) + 13, this.y - this.height/2 - this.height/4, player.width/4, player.height/4);
			ctx.fillRect(this.x - (this.width/2) + 26, this.y - this.height/2 - this.height/4, player.width/4, player.height/4);
			ctx.fillRect(this.x - (this.width/2) + 39, this.y - this.height/2 - this.height/4, player.width/4, player.height/4);
			ctx.fillRect(this.x -(this.width/2) + 52, this.y - this.height/2 - this.height/4, player.width/4, player.height/4);
		}
		else if(this.hp == 9){
			ctx.fillRect(this.x - (this.width/2), this.y - this.height/2 - this.height/4, player.width/4, player.height/4);
			ctx.fillRect(this.x - (this.width/2) + 13, this.y - this.height/2 - this.height/4, player.width/4, player.height/4);
			ctx.fillRect(this.x - (this.width/2) + 26, this.y - this.height/2 - this.height/4, player.width/4, player.height/4);
			ctx.fillRect(this.x - (this.width/2) + 39, this.y - this.height/2 - this.height/4, player.width/4, player.height/4);
			ctx.fillStyle = "red";
			ctx.fillRect(this.x -(this.width/2) + 52, this.y - this.height/2 - this.height/4, player.width/4, player.height/4);
		}
		else if(this.hp == 8){
			ctx.fillRect(this.x - (this.width/2), this.y - this.height/2 - this.height/4, player.width/4, player.height/4);
			ctx.fillRect(this.x - (this.width/2) + 13, this.y - this.height/2 - this.height/4, player.width/4, player.height/4);
			ctx.fillRect(this.x - (this.width/2) + 26, this.y - this.height/2 - this.height/4, player.width/4, player.height/4);
			ctx.fillStyle = "red";
			ctx.fillRect(this.x - (this.width/2) + 39, this.y - this.height/2 - this.height/4, player.width/4, player.height/4);
			ctx.fillRect(this.x -(this.width/2) + 52, this.y - this.height/2 - this.height/4, player.width/4, player.height/4);
		}
		else if(this.hp == 7){
			ctx.fillRect(this.x - (this.width/2), this.y - this.height/2 - this.height/4, player.width/4, player.height/4);
			ctx.fillRect(this.x - (this.width/2) + 13, this.y - this.height/2 - this.height/4, player.width/4, player.height/4);
			ctx.fillStyle = "red";
			ctx.fillRect(this.x - (this.width/2) + 26, this.y - this.height/2 - this.height/4, player.width/4, player.height/4);
			ctx.fillRect(this.x - (this.width/2) + 39, this.y - this.height/2 - this.height/4, player.width/4, player.height/4);
			ctx.fillRect(this.x -(this.width/2) + 52, this.y - this.height/2 - this.height/4, player.width/4, player.height/4);
		}
		else if(this.hp == 6){
			ctx.fillRect(this.x - (this.width/2), this.y - this.height/2 - this.height/4, player.width/4, player.height/4);
			ctx.fillStyle = "red";
			ctx.fillRect(this.x - (this.width/2) + 13, this.y - this.height/2 - this.height/4, player.width/4, player.height/4);
			ctx.fillRect(this.x - (this.width/2) + 26, this.y - this.height/2 - this.height/4, player.width/4, player.height/4);
			ctx.fillRect(this.x - (this.width/2) + 39, this.y - this.height/2 - this.height/4, player.width/4, player.height/4);
			ctx.fillRect(this.x -(this.width/2) + 52, this.y - this.height/2 - this.height/4, player.width/4, player.height/4);
		}
		else if(this.hp == 5){
			ctx.fillStyle = "red";
			ctx.fillRect(this.x - (this.width/2), this.y - this.height/2 - this.height/4, player.width/4, player.height/4);
			ctx.fillRect(this.x - (this.width/2) + 13, this.y - this.height/2 - this.height/4, player.width/4, player.height/4);
			ctx.fillRect(this.x - (this.width/2) + 26, this.y - this.height/2 - this.height/4, player.width/4, player.height/4);
			ctx.fillRect(this.x - (this.width/2) + 39, this.y - this.height/2 - this.height/4, player.width/4, player.height/4);
			ctx.fillRect(this.x -(this.width/2) + 52, this.y - this.height/2 - this.height/4, player.width/4, player.height/4);
		}
		else if(this.hp == 4){
			ctx.fillStyle = "red";
			ctx.fillRect(this.x - (this.width/2), this.y - this.height/2 - this.height/4, player.width/4, player.height/4);
			ctx.fillRect(this.x - (this.width/2) + 13, this.y - this.height/2 - this.height/4, player.width/4, player.height/4);
			ctx.fillRect(this.x - (this.width/2) + 26, this.y - this.height/2 - this.height/4, player.width/4, player.height/4);
			ctx.fillRect(this.x - (this.width/2) + 39, this.y - this.height/2 - this.height/4, player.width/4, player.height/4);
		}
		else if(this.hp == 3){
			ctx.fillStyle = "red";
			ctx.fillRect(this.x - (this.width/2), this.y - this.height/2 - this.height/4, player.width/4, player.height/4);
			ctx.fillRect(this.x - (this.width/2) + 13, this.y - this.height/2 - this.height/4, player.width/4, player.height/4);
			ctx.fillRect(this.x - (this.width/2) + 26, this.y - this.height/2 - this.height/4, player.width/4, player.height/4);
		}
		else if(this.hp == 2){
			ctx.fillStyle = "red";
			ctx.fillRect(this.x - (this.width/2), this.y - this.height/2 - this.height/4, player.width/4, player.height/4);
			ctx.fillRect(this.x - (this.width/2) + 13, this.y - this.height/2 - this.height/4, player.width/4, player.height/4);
		}
		else{
			ctx.fillStyle = "red";
			ctx.fillRect(this.x - (this.width/2), this.y - this.height/2 - this.height/4, player.width/4, player.height/4);
		}
	},
	spawn: function(){
		if(this.hptimer > 0){
			this.hptimer-=1;
		}
		if(this.cd > 0 && this.onScreen == 1){
			this.cd-=1;
		}
		else if(this.spawned == 0){
			for(O in obstacle1){
				if(obstacle1[O].hp == 0){
					this.deadtrees+=1;
				}
			}
			for(O in obstacle2){
				if(obstacle2[O].hp == 0){
					this.deadtrees+=1;
				}
			}
			for(O in obstacle3){
				if(obstacle3[O].hp == 0){
					this.deadtrees+=1;
				}
			}
			this.herp = this.deadtrees;
			this.deadtrees = 0;
			if(this.herp >= 10 && this.onScreen == 0){ //FLAG
				this.respawn = 0;
				this.spawned = 1;
				spawn(this);
				this.herp = 0;
			}
		}
	},
	grow: function(){
	if(this.onScreen == 1){
		this.cd = 90;
		rootStrike.x = -2000;
		rootStrike.y = -2000;
		rootStrike.onScreen = 0;
		rootStrike.movement = false;
		rootStrike.hp = 2;
		rootStrike2.x = -2000;
		rootStrike2.y = -2000;
		rootStrike2.onScreen = 0;
		rootStrike2.movement = false;
		rootStrike2.hp = 2;
		rootStrike3.x = -2000;
		rootStrike3.y = -2000;
		rootStrike3.onScreen = 0;
		rootStrike3.hp = 2;
		rootStrike3.movement = false;
		rootStrike4.x = -2000;
		rootStrike4.y = -2000;
		rootStrike4.onScreen = 0;
		rootStrike4.movement = false;
		rootStrike4.hp = 2;
		for(R in roots11){
			roots11[R].onScreen = 0;
			roots11[R].movement = false;
			roots11[R].x = -500;
			roots11[R].y = -500;
		}
		for(R in roots12){
			roots12[R].onScreen = 0;
			roots12[R].movement = false;
			roots12[R].x = -500;
			roots12[R].y = -500;
		}
		for(R in roots13){
			roots13[R].onScreen = 0;
			roots13[R].movement = false;
			roots13[R].x = -500;
			roots13[R].y = -500;
		}
		for(R in roots14){
			roots14[R].onScreen = 0;
			roots14[R].movement = false;
			roots14[R].x = -500;
			roots14[R].y = -500;
		}
		var attack = Math.floor(Math.random() * 5) + 1;
		if(attack == 1 || attack == 4){
			Fwave.play();
			rootStrike.x = this.x;
			rootStrike.y = this.y - 64;
			rootStrike.onScreen = 1;
			rootStrike.movement = true;
			rootStrike.hp = 2;
			rootStrike2.x = this.x;
			rootStrike2.y = this.y + 64;
			rootStrike2.onScreen = 1;
			rootStrike2.movement = true;
			rootStrike2.hp = 2;
			rootStrike3.x = this.x - 64;
			rootStrike3.y = this.y;
			rootStrike3.onScreen = 1;
			rootStrike3.hp = 2;
			rootStrike3.movement = true;
			rootStrike4.x = this.x + 64;
			rootStrike4.y = this.y;
			rootStrike4.onScreen = 1;
			rootStrike4.movement = true;
			rootStrike4.hp = 2;
		}
		if(attack == 2 || attack == 5){
			rootBlastW.shoot();
			rootBlastA.shoot();
			rootBlastS.shoot();
			rootBlastD.shoot();
		}
		if(attack == 3 && this.hp < 10){
			LeafHeal.shoot();
		}
	}
	}
};
var AllEnemies = {1: Enemy, 2: EnemyA, 3: EnemyB, 4: EnemyC, 5: Tenemy, 6: TenemyA, 7: TenemyB, 8: Sorceror, 9: Lavaman, 10: Lavaman2, 11: Lavaman3, 12: Lavaman4, 13: Spawner,
					14: treeWizz, 15: rootStrike, 16: rootStrike2, 17: rootStrike3, 18: rootStrike4};
function onHit(E){
	var deadz = false;
	if(E.type == 0){
		deadz = true;
		if(E.speed2*2 == 8){
			if(Globblyfire.onScreen == 1 && Globblyfire2.onScreen == 1){
				Globblyfire3.x = E.x;
				Globblyfire3.y = E.y;
				Globblyfire3.shoot();
			}
			else if(Globblyfire.onScreen == 1){
				Globblyfire2.x = E.x;
				Globblyfire2.y = E.y;
				Globblyfire2.shoot();
			}
			else{
				Globblyfire.x = E.x;
				Globblyfire.y = E.y;
				Globblyfire.shoot();
			}
		}
	}
	if(E.type == 1 || E.type == 2 || E.type == -1 || E.type == -2 || E.type == -3 || E.type == -4 || E.type == -5){
		if(!(E.hptimer > 0)){
			E.hp-=1;
			E.hptimer = 30;
			if(E.hp < 1){
				Killed.play();
				deadz = true;
				if(E.type == -2){
					for(R in roots11){
						roots11[R].onScreen = 0;
						roots11[R].movement = false;
						roots11[R].x = -500;
						roots11[R].y = -500;
					}
				}
				if(E.type == -3){
					for(R in roots12){
						roots12[R].onScreen = 0;
						roots12[R].movement = false;
						roots12[R].x = -500;
						roots12[R].y = -500;
					}
				}
				if(E.type == -4){
					for(R in roots13){
						roots13[R].onScreen = 0;
						roots13[R].movement = false;
						roots13[R].x = -500;
						roots13[R].y = -500;
					}
				}
				if(E.type == -5){
					for(R in roots14){
						roots14[R].onScreen = 0;
						roots14[R].movement = false;
						roots14[R].x = -500;
						roots14[R].y = -500;
					}
				}
					
			}
			else{
				onDmg.play();
			}
		}
	}
	if(deadz == true){
		deadz = false;
		E.onScreen = 0;
		Killed.play();
		if(((Math.floor(Math.random() * 10) + 1) == 7) && redCube.x == -100){
			redCube.x = E.x;
			redCube.y = E.y;
			redCube.timeLeft = 90;
		}
		else if(((Math.floor(Math.random() * 10) + 1) == 7) && tealCube.x == -100){
			tealCube.x = E.x;
			tealCube.y = E.y;
			tealCube.timeLeft = 90;
		}
		else if(((Math.floor(Math.random() * 10) + 1) == 7) && greenCube.x == -100){
			greenCube.x = E.x;
			greenCube.y = E.y;
			greenCube.timeLeft = 90;
		}
		else if(((Math.floor(Math.random() * 10) + 1) == 7) && yellowCube.x == -100){
			yellowCube.x = E.x;
			yellowCube.y = E.y;
			yellowCube.timeLeft = 90;
		}
		else if(((Math.floor(Math.random() * 10) + 1) == 7) && greyCube.x == -100){
			greyCube.x = E.x;
			greyCube.y = E.y;
			greyCube.timeLeft = 90;
		}
		else if(((Math.floor(Math.random() * 10) + 1) == 7) && purpleCube.x == -100){
			purpleCube.x = E.x;
			purpleCube.y = E.y;
			purpleCube.timeLeft = 90;
		}
		if(marker.x != -100 && marker2.x != -100 && marker3.x != -100){
			marker4.points = E.pts;
			marker4.mult = multiplier;
			marker4.x = E.x;
			marker4.y = E.y;
			marker4.timeLeft = 20;
		}
		else if(marker.x != -100 && marker2.x != -100){
			marker3.points = "" + E.pts;
			marker3.mult = multiplier;
			marker3.x = E.x;
			marker3.y = E.y;
			marker3.timeLeft = 20;
		}
		else if(marker.x != -100){
			marker2.points = "" + E.pts;
			marker2.mult = multiplier;
			marker2.x = E.x;
			marker2.y = E.y;
			marker2.timeLeft = 20;
		}
		else{
			marker.points = "" + E.pts;
			marker.mult = multiplier;
			marker.x = E.x;
			marker.y = E.y;
			marker.timeLeft = 20;
		}
		E.x = -500;
		E.y = -500;
		E.respawn = E.rp;
		E.movement = false;
		E.onScreen = 0;
		score+=(E.pts * multiplier);
		multiplier++;
		multtimer = 50;
	}
}
// Enemy move paramaterized
function move(E){
	if(E.movement == true){
		if(E.dir == "W" && !(obsCollision(obstacle1, E, E.dir)) && !(obsCollision(obstacle2, E, E.dir))
			&& !(obsCollision(obstacle3, E, E.dir)) && !(collision(E.dir, E, player)) && !(collision(E.dir, E, Illusion))){
			E.y-=E.speed;
		}
		if(E.dir == "A" && !(obsCollision(obstacle1, E, E.dir)) && !(obsCollision(obstacle2, E, E.dir))
			&& !(obsCollision(obstacle3, E, E.dir)) && !(collision(E.dir, E, player)) && !(collision(E.dir, E, Illusion))){
			E.x-=E.speed;
		}
		if(E.dir == "S" && !(obsCollision(obstacle1, E, E.dir)) && !(obsCollision(obstacle2, E, E.dir))
			&& !(obsCollision(obstacle3, E, E.dir)) && !(collision(E.dir, E, player)) && !(collision(E.dir, E, Illusion))){
			E.y+=E.speed;
		}
		if(E.dir == "D" && !(obsCollision(obstacle1, E, E.dir)) && !(obsCollision(obstacle2, E, E.dir))
			&& !(obsCollision(obstacle3, E, E.dir)) && !(collision(E.dir, E, player)) && !(collision(E.dir, E, Illusion))){
			E.x+=E.speed;
		}
		if(E.dir == "AS" && !(obsCollision(obstacle1, E, E.dir)) && !(obsCollision(obstacle2, E, E.dir))
			&& !(obsCollision(obstacle3, E, E.dir)) && !(collision(E.dir, E, player)) && !(collision(E.dir, E, Illusion))){
			E.y+=E.speed;
			E.x-=E.speed;
		}
		if(E.dir == "WA" && !(obsCollision(obstacle1, E, E.dir)) && !(obsCollision(obstacle2, E, E.dir))
			&& !(obsCollision(obstacle3, E, E.dir)) && !(collision(E.dir, E, player)) && !(collision(E.dir, E, Illusion))){
			E.y-=E.speed;
			E.x-=E.speed;
		}
		if(E.dir == "WD" && !(obsCollision(obstacle1, E, E.dir)) && !(obsCollision(obstacle2, E, E.dir))
			&& !(obsCollision(obstacle3, E, E.dir)) && !(collision(E.dir, E, player)) && !(collision(E.dir, E, Illusion))){
			E.y-=E.speed;
			E.x+=E.speed;
		}
		if(E.dir == "SD" && !(obsCollision(obstacle1, E, E.dir)) && !(obsCollision(obstacle2, E, E.dir))
			&& !(obsCollision(obstacle3, E, E.dir)) && !(collision(E.dir, E, player)) && !(collision(E.dir, E, Illusion))){
			E.y+=E.speed;
			E.x+=E.speed;
		}
	}	
}
// Enemy AI
function AI(E){		
		var xdiff = player.x - E.x;
		var ydiff = player.y - E.y;
		if(Illusion.onScreen == 1){
			xdiff = Illusion.x - E.x;
			ydiff = Illusion.y - E.y;
		}
		if(E.type == -1 && E.cd == 0){
			E.grow();
		}
		if(E.type == -1 && E.dirct == 0){
			var quadrant = 0;
			var q1dir = {1: "S", 2: "D", 3: "SD"};
			var q2dir = {1: "S", 2: "A", 3: "AS"};
			var q3dir = {1: "W", 2: "D", 3: "WD"};
			var q4dir = {1: "W", 2: "A", 3: "WA"};
			var alldir = {1: "W", 2: "A", 3: "S", 4: "D", 5: "WA", 6: "WD", 7: "AS", 8: "SD"};
			E.dirct = 15;
			var numbz = Math.floor(Math.random() * 3) + 1;
			var allnumbz = Math.floor(Math.random() * 8) + 1;
			if(E.x > 224 && E.x < 576 && E.y > 128 && E.y < 348){
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
		}
		if(E.type == 1){
			if(E.spawned > 0){
				E.spawned-=1;
			}
			if(E.hptimer > 0){
				E.hptimer-=1;
			}
			if(E.spell == "Ice"){
				if(E.x > 32 && E.y > 32 && E.x < 768 && E.y < 560 && E.cd <=0){
					E.cast();
				}
				else if(!(E.cd <=0)){
					E.cd-=1;
				}
			}
			else if(E.spell == "Fire"){
				if((Math.abs(xdiff) < 128) && (Math.abs(ydiff) < 128) && E.cd <= 0
					&& E.x > 32 && E.x < 768 && E.y > 32 && E.y < 560){
					E.cast();
				}
				else if(!(E.cd <= 0)){
					E.cd-=1;
				}
			}
			else if(E.spell == "Lightning"){
				if(E.y <= player.y + sLightning.hheight/2 && E.y >= player.y && E.y> 32 && E.y < 560
					&& E.x > 32 && E.x < 768 && E.cd <= 0){
					E.cast();
				}
				else if(!(E.cd <= 0)){
					E.cd-=1;
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
		else if(E.dirct == 0 && E.type != -1){
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
			else if (xdiff <= 4 && ydiff > 4){
				E.dir = "S";
			}
			else if(xdiff <= 4 && ydiff < 4){
				E.dir = "W";
			}
			else if(xdiff < 4 && ydiff <= 4){
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

function spawn(E){
if(treeWizz.onScreen != 1){
	if(E.type == 1){
		if(E.respawn == 0){
			E.movement = true;
			E.hp = 3;
			E.onScreen = 1;
			E.cd = 0;
			E.spawned = 60;
			var SpellType = Math.floor(Math.random() * 3) + 1;
			if(SpellType == 1){
				E.spell = "Ice";
			}
			else if(SpellType == 2){
				E.spell = "Fire";
			}
			else{
				E.spell = "Lightning";
			}
		}
	}
	if(E.respawn == 0){
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
	else{
		E.respawn-=1;
	}
}
}