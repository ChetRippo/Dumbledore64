//--------------------------------------------- Enemies -----------------------------------------------------------------------------//

// Enemy 1
var Enemy = {
	x: 500,
	y: -400,
	width: 32,
	height: 32,
	speed: 4,
	speed2: 2,
	dirct: 0,
	respawn: 1,
	origrp: 1,
	rp: 100,
	onScreen: 0,
	movement: false,
	// Draws the enemy on the canvas when called
	draw: function(){
		ctx.drawImage(Hudge, this.x - this.width / 2, this.y - this.height / 2);
	}
};

// Enemy 2
var EnemyA = {
	x: -500,
	y: -500,
	width: 32,
	height: 32,
	dirct: 0,
	speed: 4,
	speed2: 2,
	respawn: 250,
	origrp: 250,
	rp: 100,
	onScreen: 0,
	movement: false,
	// Draws the enemy on the canvas when called
	draw: function(){
		ctx.drawImage(Pikkit, this.x - this.width / 2, this.y - this.height / 2);
	}
};

// Enemy 3
var EnemyB = {
	x: -500,
	y: -500,
	width: 32,
	height: 32,
	dirct: 0,
	speed: 4,
	speed2: 2,
	respawn: 125,
	origrp: 125,
	rp: 100,
	onScreen: 0,
	movement: false,
	// Draws the enemy on the canvas when called
	draw: function(){
		ctx.drawImage(Hudge, this.x - this.width / 2, this.y - this.height / 2);
	}
};

// Enemy 4
var EnemyC = {
	x: -500,
	y: -500,
	width: 32,
	height: 32,
	dirct: 0,
	speed: 4,
	speed2: 2,
	respawn: 300,
	origrp: 300,
	rp: 100,
	onScreen: 0,
	movement: false,
	// Draws the enemy on the canvas when called
	draw: function(){
		ctx.drawImage(Pikkit, this.x - this.width / 2, this.y - this.height / 2);
	}
};

// Triangle Enemy 1
var Tenemy = {
	x: 2000,
	y: 0,
	width: 32,
	height: 32,
	speed: 8,
	speed2: 4,
	dirct: 0,
	respawn: 600,
	origrp: 600,
	rp: 600,
	onScreen: 0,
	movement: false,
	// Draws the enemy on the canvas when called
	draw: function(){
		ctx.drawImage(Globbly, this.x - this.width / 2, this.y - this.height / 2);
	}
};
// Triangle Enemy 2
var TenemyA = {
	x: 2000,
	y: 0,
	width: 32,
	height: 32,
	speed: 8,
	speed2: 4,
	dirct: 0,
	respawn: 2400,
	origrp: 2400,
	rp: 600,
	onScreen: 0,
	movement: false,
	// Draws the enemy on the canvas when called
	draw: function(){
		ctx.drawImage(Globbly, this.x - this.width / 2, this.y - this.height / 2);
	}
};

// Triangle Enemy 3
var TenemyB = {
	x: 2000,
	y: 0,
	width: 32,
	height: 32,
	speed: 8,
	speed2: 4,
	dirct: 0,
	respawn: 1800,
	origrp: 1800,
	rp: 600,
	onScreen: 0,
	movement: false,
	// Draws the enemy on the canvas when called
	draw: function(){
		ctx.drawImage(Globbly, this.x - this.width / 2, this.y - this.height / 2);
	}
};
/*
// Baby Wizard :]
var Bwizz = {
	x: 2000,
	y: 0,
	width: 16,
	height: 16,
	speed: 4,
	speed2: 2,
	dirct: 0,
	respawn: -1,
	origrp: -1,
	dir: "W",
	rp: -1,
	onScreen: 0,
	cd: 15,
	movement: false,
	// Draws the enemy on the canvas when called
	draw: function(){
		ctx.drawImage(BabyWizard, this.x - this.width / 2, this.y - this.height / 2);
	},
	fire: function(){
		if(this.cd<= 0 && this.movement == true){
			if(this.dir == "W" || this.dir == "S"){
				tinybullet.shoot(this.dir, 4, 16);
				this.cd = 45;
			}
			else if(this.dir == "A" || this.dir == "D"){
				tinybullet.shoot(this.dir, 16, 4);
				this.cd = 45;
			}
			else if(this.dir == "WA" || this.dir == "SD" || this.dir == "WD" || this.dir == "AS"){
				tinybullet.shoot(this.dir, 4, 4);
				this.cd = 45;
			}
		}
		else{
			this.cd-=1;
		}
	}
};
// Baby Wizard :]
var Bwizz2 = {
	x: 2000,
	y: 0,
	width: 16,
	height: 16,
	speed: 4,
	speed2: 2,
	dirct: 0,
	respawn: -1,
	origrp: -1,
	dir: "W",
	rp: -1,
	onScreen: 0,
	cd: 15,
	movement: false,
	// Draws the enemy on the canvas when called
	draw: function(){
		ctx.drawImage(BabyWizard, this.x - this.width / 2, this.y - this.height / 2);
	},
	fire: function(){
		if(this.cd<= 0 && this.movement == true){
			if(this.dir == "W" || this.dir == "S"){
				tinybullet2.shoot(this.dir, 4, 16);
				this.cd = 45;
			}
			else if(this.dir == "A" || this.dir == "D"){
				tinybullet2.shoot(this.dir, 16, 4);
				this.cd = 45;
			}
			else if(this.dir == "WA" || this.dir == "SD" || this.dir == "WD" || this.dir == "AS"){
				tinybullet2.shoot(this.dir, 4, 4);
				this.cd = 45;
			}
		}
		else{
			this.cd-=1;
		}
	}
};
// Baby Wizard :]
var Bwizz3 = {
	x: 2000,
	y: 0,
	width: 16,
	height: 16,
	speed: 4,
	speed2: 2,
	dirct: 0,
	respawn: -1,
	origrp: -1,
	dir: "W",
	rp: -1,
	onScreen: 0,
	cd: 15,
	movement: false,
	// Draws the enemy on the canvas when called
	draw: function(){
		ctx.drawImage(BabyWizard, this.x - this.width / 2, this.y - this.height / 2);
	},
	fire: function(){
		if(this.cd<= 0 && this.movement == true){
			if(this.dir == "W" || this.dir == "S"){
				tinybullet3.shoot(this.dir, 4, 16);
				this.cd = 45;
			}
			else if(this.dir == "A" || this.dir == "D"){
				tinybullet3.shoot(this.dir, 16, 4);
				this.cd = 45;
			}
			else if(this.dir == "WA" || this.dir == "SD" || this.dir == "WD" || this.dir == "AS"){
				tinybullet3.shoot(this.dir, 4, 4);
				this.cd = 45;
			}
		}
		else{
			this.cd-=1;
		}
	}
};
// Baby Wizard :]
var Bwizz4 = {
	x: 2000,
	y: 0,
	width: 16,
	height: 16,
	speed: 4,
	speed2: 2,
	dirct: 0,
	respawn: -1,
	origrp: -1,
	dir: "W",
	rp: -1,
	onScreen: 0,
	cd: 15,
	movement: false,
	// Draws the enemy on the canvas when called
	draw: function(){
		ctx.drawImage(BabyWizard, this.x - this.width / 2, this.y - this.height / 2);
	},
	fire: function(){
		if(this.cd<= 0 && this.movement == true){
			if(this.dir == "W" || this.dir == "S"){
				tinybullet4.shoot(this.dir, 4, 16);
				this.cd = 45;
			}
			else if(this.dir == "A" || this.dir == "D"){
				tinybullet4.shoot(this.dir, 16, 4);
				this.cd = 45;
			}
			else if(this.dir == "WA" || this.dir == "SD" || this.dir == "WD" || this.dir == "AS"){
				tinybullet4.shoot(this.dir, 4, 4);
				this.cd = 45;
			}
		}
		else{
			this.cd-=1;
		}
	}
};
*/

// Lavaman
var Lavaman = {
	x: 500,
	y: -400,
	width: 32,
	height: 32,
	speed: 4,
	speed2: 2,
	dirct: 0,
	respawn: -1,
	origrp: -1,
	rp: -1,
	onScreen: 0,
	movement: false,
	// Draws the enemy on the canvas when called
	draw: function(){
		ctx.drawImage(Lavamanpic, this.x - this.width / 2, this.y - this.height / 2);
	}
};
var Lavaman2 = {
	x: 500,
	y: -400,
	width: 32,
	height: 32,
	speed: 4,
	speed2: 2,
	dirct: 0,
	respawn: -1,
	origrp: -1,
	rp: -1,
	onScreen: 0,
	movement: false,
	// Draws the enemy on the canvas when called
	draw: function(){
		ctx.drawImage(Lavamanpic, this.x - this.width / 2, this.y - this.height / 2);
	}
};
var Lavaman3 = {
	x: 500,
	y: -400,
	width: 32,
	height: 32,
	speed: 4,
	speed2: 2,
	dirct: 0,
	respawn: -1,
	origrp: -1,
	rp: -1,
	onScreen: 0,
	movement: false,
	// Draws the enemy on the canvas when called
	draw: function(){
		ctx.drawImage(Lavamanpic, this.x - this.width / 2, this.y - this.height / 2);
	}
};
var Lavaman4 = {
	x: 500,
	y: -400,
	width: 32,
	height: 32,
	speed: 4,
	speed2: 2,
	dirct: 0,
	respawn: -1,
	origrp: -1,
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
				this.cd = 90;
			}
			else if(Lavaman2.onScreen == 0){
				SpawnerSpawn.play();
				Lavaman2.onScreen = 1;
				Lavaman2.x = this.x-this.width/2;
				Lavaman2.y = this.y-this.height/2;
				Lavaman2.movement = true;
				Lavaman2.cd = 15;
				this.cd = 90;
			}
			else if(Lavaman3.onScreen == 0){
				SpawnerSpawn.play();
				Lavaman3.onScreen = 1;
				Lavaman3.x = this.x-this.width/2;
				Lavaman3.y = this.y-this.height/2;
				Lavaman3.movement = true;
				Lavaman3.cd = 15;
				this.cd = 90;
			}
			else if(Lavaman4.onScreen == 0){
				SpawnerSpawn.play();
				Lavaman4.onScreen = 1;
				Lavaman4.x = this.x-this.width/2;
				Lavaman4.y = this.y-this.height/2;
				Lavaman4.movement = true;
				Lavaman4.cd = 15;
				this.cd = 90;
			}
		}
		else{
			this.cd-=1;
		}
	}
	},
	onHit: function(){
		if(!(this.hptimer > 0)){
			this.hp-=1;
			if(this.hp < 1){
				Killed.play();
			}
			else{
				onDmg.play();
			}
			this.hptimer = 30;
			if(this.hp < 1){
				this.onScreen = 0;
				if(((Math.floor(Math.random() * 10) + 1) == 7) && redCube.x == -100){
					redCube.x = this.x;
					redCube.y = this.y;
					redCube.timeLeft = 90;
				}
				else if(((Math.floor(Math.random() * 10) + 1) == 7) && tealCube.x == -100){
					tealCube.x = this.x;
					tealCube.y = this.y;
					tealCube.timeLeft = 90;
				}
				else if(((Math.floor(Math.random() * 10) + 1) == 7) && greenCube.x == -100){
					greenCube.x = this.x;
					greenCube.y = this.y;
					greenCube.timeLeft = 90;
				}
				else if(((Math.floor(Math.random() * 10) + 1) == 7) && yellowCube.x == -100){
					yellowCube.x = this.x;
					yellowCube.y = this.y;
					yellowCube.timeLeft = 90;
				}
				if(marker.x != -100 && marker2.x != -100 && marker3.x != -100){
					marker4.points = "500";
					marker4.mult = multiplier;
					marker4.x = this.x;
					marker4.y = this.y;
					marker4.timeLeft = 20;
				}
				else if(marker.x != -100 && marker2.x != -100){
					marker3.points = "500";
					marker3.mult = multiplier;
					marker3.x = this.x;
					marker3.y = this.y;
					marker3.timeLeft = 20;
				}
				else if(marker.x != -100){
					marker2.points = "500";
					marker2.mult = multiplier;
					marker2.x = this.x;
					marker2.y = this.y;
					marker2.timeLeft = 20;
				}
				else{
					marker.points = "500";
					marker.mult = multiplier;
					marker.x = this.x;
					marker.y = this.y;
					marker.timeLeft = 20;
				}
				this.x = -500;
				this.y = -500;
				this.respawn = 2400;
				this.hp = 5;
				this.movement = false;
				score+=(500 * multiplier);
				currpts = "500";
				multiplier++;
				multtimer = 50;
			}
		}
	}
};

// Sorceror
var Sorceror = {
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
	cd: 0,
	spawned: 60,
	rp: 900,
	onScreen: 0,
	reverse: 0,
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
	onHit: function(){
		if(!(this.hptimer > 0)){
			Killed.play();
			this.hp-=1;
			onDmg.play();
			this.hptimer = 30;
			if(this.hp < 1){
				this.onScreen = 0;
				if(((Math.floor(Math.random() * 10) + 1) == 7) && redCube.x == -100){
					redCube.x = this.x;
					redCube.y = this.y;
					redCube.timeLeft = 90;
				}
				else if(((Math.floor(Math.random() * 10) + 1) == 7) && tealCube.x == -100){
					tealCube.x = this.x;
					tealCube.y = this.y;
					tealCube.timeLeft = 90;
				}
				else if(((Math.floor(Math.random() * 10) + 1) == 7) && greenCube.x == -100){
					greenCube.x = this.x;
					greenCube.y = this.y;
					greenCube.timeLeft = 90;
				}
				else if(((Math.floor(Math.random() * 10) + 1) == 7) && yellowCube.x == -100){
					yellowCube.x = this.x;
					yellowCube.y = this.y;
					yellowCube.timeLeft = 90;
				}
				if(marker.x != -100 && marker2.x != -100 && marker3.x != -100){
					marker4.points = "100";
					marker4.mult = multiplier;
					marker4.x = this.x;
					marker4.y = this.y;
					marker4.timeLeft = 20;
				}
				else if(marker.x != -100 && marker2.x != -100){
					marker3.points = "100";
					marker3.mult = multiplier;
					marker3.x = this.x;
					marker3.y = this.y;
					marker3.timeLeft = 20;
				}
				else if(marker.x != -100){
					marker2.points = "100";
					marker2.mult = multiplier;
					marker2.x = this.x;
					marker2.y = this.y;
					marker2.timeLeft = 20;
				}
				else{
					marker.points = "100";
					marker.mult = multiplier;
					marker.x = this.x;
					marker.y = this.y;
					marker.timeLeft = 20;
				}
				this.x = -500;
				this.y = -500;
				this.respawn = 2400;
				this.movement = false;
				score+=(100 * multiplier);
				currpts = "100";
				multiplier++;
				multtimer = 50;
			}
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
	},
	spawn: function(){
		if(this.respawn == 0){
			this.movement = true;
			this.hp = 3;
			this.onScreen = 1;
			this.cd = 0;
			this.reverse = 0;
			this.spawned = 60;
			if((Math.floor(Math.random() * 3) + 1) == 1){
				this.spell = "Fire";
			}
			else if((Math.floor(Math.random() * 3) + 1) == 2){
				this.spell = "Ice";
			}
			else{
				this.spell = "Lightning";
			}
			var spawnPoint = Math.floor(Math.random() * 8) + 1;
			if(spawnPoint == 1){
				this.x = 0;
				this.y = 0;
				this.respawn-=1;
			}
			else if(spawnPoint == 2){
				this.x = 400;
				this.y = 0;
				this.respawn-=1;
			}
			else if(spawnPoint == 3){
				this.x = 800;
				this.y = 0;
				this.respawn-=1;
			}
			else if(spawnPoint == 4){
				this.x = 0;
				this.y = 288;
				this.respawn-=1;
			}
			else if(spawnPoint == 5){
				this.x = 800;
				this.y = 288;
				this.respawn-=1;
			}
			else if(spawnPoint == 6){
				this.x = 0;
				this.y = 576;
				this.respawn-=1;
			}
			else if(spawnPoint == 7){
				this.x = 400;
				this.y = 576;
				this.respawn-=1;
			}
			else{
				this.x = 800;
				this.y = 576;
				this.respawn-=1;
			}			
		}
		else{
			this.respawn-=1;
		}
	},
	AI: function(){
		if(this.spawned > 0){
			this.spawned-=1;
		}
		if(this.hptimer > 0){
			this.hptimer-=1;
		}
		var xdiff = player.x - this.x;
		var ydiff = player.y - this.y;
		if(this.spell == "Ice"){
			if(this.x > 32 && this.y > 32 && this.x < 768 && this.y < 560 && this.cd <=0){
				this.cast();
			}
			else if(!(this.cd <=0)){
				this.cd-=1;
			}
		}
		else if(this.spell == "Fire"){
			if((Math.abs(xdiff) < 128) && (Math.abs(ydiff) < 128) && this.cd <= 0
				&& this.x > 32 && this.x < 768 && this.y > 32 && this.y < 560){
				this.cast();
			}
			if(this.cd <= 0){
				this.reverse = 0;
			}
			else if(!(this.cd <= 0)){
				this.cd-=1;
				this.reverse = 1;
			}
		}
		else if(this.spell == "Lightning"){
			if(this.y <= player.y + sLightning.hheight/2 && this.y >= player.y && this.y> 32 && this.y < 560
				&& this.x > 32 && this.x < 768){
				this.cast();
			}
			if(this.cd <= 0){
				this.reverse = 0;
			}
			else if(!(this.cd <= 0)){
				this.cd-=1;
				this.reverse = 1;
			}
		}
		if(collision(this.dir, this, obstacle) || collision(this.dir, this, obstacleA) || collision(this.dir, this, obstacleB) || 
			(this.spawned <=0 && this.x <= 8) || (this.spawned<=0&&this.x >= 792) || (this.spawned<=0&&this.y <= 8) || (this.spawned<=0&&this.y >= 570)){
			if(this.dir == "W"){
				this.dir = "D";
				this.dirct = 20;
				this.y-=this.speed;
			}
			else if(this.dir == "A"){
				this.dir = "W";
				this.dirct = 20;
				this.x+=this.speed;
			}
			else if(this.dir == "S"){
				this.dir = "A";
				this.dirct = 20;
				this.y+=this.speed;
			}
			else if(this.dir == "D"){
				this.dir = "S";
				this.dirct = 20;
				this.x-=this.speed;
			}
			else if(this.dir == "WD"){
				this.dir = "W";
				this.dirct = 20;
				this.x+=this.speed;
				this.y-=this.speed;
			}
			else if(this.dir == "WA"){
				this.dir = "A";
				this.dirct = 20;
				this.x-=this.speed;
				this.y-=this.speed;
			}
			else if(this.dir == "AS"){
				this.dir = "S";
				this.dirct = 20;
				this.x-=this.speed;
				this.y+=this.speed;
			}
			else if(this.dir == "SD"){
				this.dir = "D";
				this.dirct = 20;
				this.x+=this.speed;
				this.y+=this.speed;
			}
		}
		else if(this.dirct == 0){
			if(xdiff < 4 && ydiff < 4){
				if(this.reverse == 0){
					this.dir = "SD";
				}
				else{	
					this.dir = "WA";
				}
			}
			else if(xdiff < 4 && ydiff > 4){
				if(this.reverse == 0){
					this.dir = "WD";
				}
				else{
					this.dir = "AS";
				}
			}
			else if(xdiff > 4 && ydiff < 4){
				if(this.reverse == 0){
					this.dir = "AS";
				}
				else{
					this.dir = "WD";
				}
			}
			else if (xdiff > 4 && ydiff > 4){
				if(this.reverse == 0){
					this.dir = "WA";
				}
				else{
					this.dir = "SD";
				}
			}
			else if (xdiff == 4 && ydiff > 4){
				if(this.reverse == 0){
					this.dir = "S";
				}
				else{
					this.dir = "W";
				}
			}
			else if(xdiff == 4 && ydiff < 4){
				if(this.reverse == 0){
					this.dir = "W";
				}
				else{
					this.dir = "S";
				}
			}
			else if(xdiff < 4 && ydiff == 4){
				if(this.reverse == 0){
					this.dir = "A";
				}
				else{
					this.dir = "D";
				}
			}
			else{
				if(this.reverse == 0){
					this.dir = "D";
				}
				else{
					this.dir = "A";
				}
			}
		}
		else{
			this.dirct-=1;
		}
	}
};

var Enemies = {1: Enemy, 2: EnemyA, 3: EnemyB, 4: EnemyC, 5: Tenemy, 6: TenemyA, 7: TenemyB, 8: Lavaman, 9: Lavaman2, 10: Lavaman3, 11: Lavaman4};
var AllEnemies = {1: Enemy, 2: EnemyA, 3: EnemyB, 4: EnemyC, 5: Tenemy, 6: TenemyA, 7: TenemyB, 8: Sorceror, 9: Lavaman, 10: Lavaman2, 11: Lavaman3, 12: Lavaman4, 13: Spawner};

// onHit: Paramaterized
// Hit by bullet
function onHit(E, rs){
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
	if(marker.x != -100 && marker2.x != -100 && marker3.x != -100){
		marker4.points = "50";
		marker4.mult = multiplier;
		marker4.x = E.x;
		marker4.y = E.y;
		marker4.timeLeft = 20;
	}
	else if(marker.x != -100 && marker2.x != -100){
		marker3.points = "50";
		marker3.mult = multiplier;
		marker3.x = E.x;
		marker3.y = E.y;
		marker3.timeLeft = 20;
	}
	else if(marker.x != -100){
		marker2.points = "50";
		marker2.mult = multiplier;
		marker2.x = E.x;
		marker2.y = E.y;
		marker2.timeLeft = 20;
	}
	else{
		marker.points = "50";
		marker.mult = multiplier;
		marker.x = E.x;
		marker.y = E.y;
		marker.timeLeft = 20;
	}
	E.x = -500;
	E.y = -500;
	E.respawn = rs;
	E.movement = false;
	score+=(50 * multiplier);
	currpts = "50";
	multiplier++;
	multtimer = 50;
}

// Enemy move paramaterized
function move(E){
	if(E.movement == true){
		if(E.dir == "W" && !(collision(E.dir, E, obstacle)) && !(collision(E.dir, E, obstacleA))
			&& !(collision(E.dir, E, obstacleB)) && !(collision(E.dir, E, player))){
			E.y-=E.speed;
		}
		if(E.dir == "A" && !(collision(E.dir, E, obstacle)) && !(collision(E.dir, E, obstacleA))
			&& !(collision(E.dir, E, obstacleB)) && !(collision(E.dir, E, player))){
			E.x-=E.speed;
		}
		if(E.dir == "S" && !(collision(E.dir, E, obstacle)) && !(collision(E.dir, E, obstacleA))
			&& !(collision(E.dir, E, obstacleB)) && !(collision(E.dir, E, player))){
			E.y+=E.speed;
		}
		if(E.dir == "D" && !(collision(E.dir, E, obstacle)) && !(collision(E.dir, E, obstacleA))
			&& !(collision(E.dir, E, obstacleB)) && !(collision(E.dir, E, player))){
			E.x+=E.speed;
		}
		if(E.dir == "AS" && !(collision(E.dir, E, obstacle)) && !(collision(E.dir, E, obstacleA))
			&& !(collision(E.dir, E, obstacleB)) && !(collision(E.dir, E, player))){
			E.y-=E.speed;
			E.x+=E.speed;
		}
		if(E.dir == "WA" && !(collision(E.dir, E, obstacle)) && !(collision(E.dir, E, obstacleA))
			&& !(collision(E.dir, E, obstacleB)) && !(collision(E.dir, E, player))){
			E.y+=E.speed;
			E.x+=E.speed;
		}
		if(E.dir == "WD" && !(collision(E.dir, E, obstacle)) && !(collision(E.dir, E, obstacleA))
			&& !(collision(E.dir, E, obstacleB)) && !(collision(E.dir, E, player))){
			E.y+=E.speed;
			E.x-=E.speed;
		}
		if(E.dir == "SD" && !(collision(E.dir, E, obstacle)) && !(collision(E.dir, E, obstacleA))
			&& !(collision(E.dir, E, obstacleB)) && !(collision(E.dir, E, player))){
			E.y-=E.speed;
			E.x-=E.speed;
		}
	}	
}

// Enemy AI
function AI(E){
		var xdiff = player.x - E.x;
		var ydiff = player.y - E.y;
		if(collision(E.dir, E, obstacle) || collision(E.dir, E, obstacleA) || collision(E.dir, E, obstacleB)){
			if(E.dir == "W"){
				E.dir = "D";
				E.dirct = 20;
				E.y-=E.speed;
			}
			else if(E.dir == "A"){
				E.dir = "W";
				E.dirct = 20;
				E.x+=E.speed;
			}
			else if(E.dir == "S"){
				E.dir = "A";
				E.dirct = 20;
				E.y+=E.speed;
			}
			else if(E.dir == "D"){
				E.dir = "S";
				E.dirct = 20;
				E.x-=E.speed;
			}
			else if(E.dir == "WD"){
				E.dir = "W";
				E.dirct = 20;
				E.x+=E.speed;
				E.y-=E.speed;
			}
			else if(E.dir == "WA"){
				E.dir = "A";
				E.dirct = 20;
				E.x-=E.speed;
				E.y-=E.speed;
			}
			else if(E.dir == "AS"){
				E.dir = "S";
				E.dirct = 20;
				E.x-=E.speed;
				E.y+=E.speed;
			}
			else if(E.dir == "SD"){
				E.dir = "D";
				E.dirct = 20;
				E.x+=E.speed;
				E.y+=E.speed;
			}
		}
		else if(E.dirct == 0){
			if(xdiff < 4 && ydiff < 4){
				E.dir = "SD";
			}
			else if(xdiff < 4 && ydiff > 4){
				E.dir = "WD";
			}
			else if(xdiff > 4 && ydiff < 4){
				E.dir = "AS";
			}
			else if (xdiff > 4 && ydiff > 4){
				E.dir = "WA";
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

function spawn(E){
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