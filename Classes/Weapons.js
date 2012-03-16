//--------------------------------------------- Weapons -----------------------------------------------------------------------------//
// Bullet: A basic attack
var bullet = {
	color: "blue",
	x: -100,
	y: -200,
	timeLeft: 0,
	speed: 16,
	width: 8,
	height: 6,
	dir: "A",
	
	// Spawn
	shoot: function(dir, h, w){	
	if(!(this.x == -100) && !(this.y == -200) && cd == 0
		&& !(bullet2.x == -100) && !(bullet2.y == -200)
		&& !(bullet3.x == -100) && !(bullet3.y == -200)){
		bullet4.shoot(dir, h, w);
	}
	else if(!(this.x == -100) && !(this.y == -200) && cd == 0
		&& !(bullet2.x == -100) && !(bullet2.y == -200)){
		bullet3.shoot(dir, h, w);
	}
	else if(!(this.x == -100) && !(this.y == -200) && cd == 0){
		bullet2.shoot(dir, h, w);
	}
	if(cd == 0){
		Beam.play();
		this.dir = dir;
		this.timeLeft = 60;
		this.height = h;
		this.width = w;
		this.x = player.x;
		this.y = player.y;
		cd = 20;
	}
	else{
		return 0;
	}
	}
};

// Bullet: A basic attack
var bullet2 = {
	color: "blue",
	x: -100,
	y: -200,
	timeLeft: 0,
	speed: 16,
	width: 8,
	height: 6,
	dir: "A",

	// Spawn
	shoot: function(dir, h, w){
	if(cd == 0){
		Beam.play();
		this.dir = dir;
		this.timeLeft = 60;
		this.height = h;
		this.width = w;
		this.x = player.x;
		this.y = player.y;
		cd = 20;
	}
	else{
		return 0;
	}
	}
	
};

// Bullet: A basic attack
var bullet3 = {
	color: "blue",
	x: -100,
	y: -200,
	timeLeft: 0,
	speed: 16,
	width: 8,
	height: 6,
	dir: "A",

	// Spawn
	shoot: function(dir, h, w){
	if(cd == 0){
		Beam.play();
		this.dir = dir;
		this.timeLeft = 60;
		this.height = h;
		this.width = w;
		this.x = player.x;
		this.y = player.y;
		cd = 20;
	}
	else{
		return 0;
	}
	}
	
};

// Bullet: A basic attack
var bullet4 = {
	color: "blue",
	x: -100,
	y: -200,
	timeLeft: 0,
	speed: 16,
	width: 8,
	height: 6,
	dir: "A",

	// Spawn
	shoot: function(dir, h, w){
	if(cd == 0){
		Beam.play();
		this.dir = dir;
		this.timeLeft = 60;
		this.height = h;
		this.width = w;
		this.x = player.x;
		this.y = player.y;
		cd = 20;
	}
	else{
		return 0;
	}
	}
	
};

// tinybullet: A basic tiny wizard attack
var tinybullet = {
	color: "red",
	x: -100,
	y: -200,
	timeLeft: 0,
	speed: 16,
	width: 4,
	height: 3,
	dir: "A",

	// Spawn
	shoot: function(dir, w, h){
		this.dir = dir;
		this.timeLeft = 60;
		this.height = h;
		this.width = w;
		this.x = Bwizz.x;
		this.y = Bwizz.y;
	}
};
// tinybullet: A basic tiny wizard attack
var tinybullet2 = {
	color: "red",
	x: -100,
	y: -200,
	timeLeft: 0,
	speed: 16,
	width: 4,
	height: 3,
	dir: "A",

	// Spawn
	shoot: function(dir, w, h){
		this.dir = dir;
		this.timeLeft = 60;
		this.height = h;
		this.width = w;
		this.x = Bwizz2.x;
		this.y = Bwizz2.y;
	}
};
// tinybullet: A basic tiny wizard attack
var tinybullet3 = {
	color: "red",
	x: -100,
	y: -200,
	timeLeft: 0,
	speed: 16,
	width: 4,
	height: 3,
	dir: "A",

	// Spawn
	shoot: function(dir, w, h){
		this.dir = dir;
		this.timeLeft = 60;
		this.height = h;
		this.width = w;
		this.x = Bwizz3.x;
		this.y = Bwizz3.y;
	}
};
// tinybullet: A basic tiny wizard attack
var tinybullet4 = {
	color: "red",
	x: -100,
	y: -200,
	timeLeft: 0,
	speed: 16,
	width: 4,
	height: 3,
	dir: "A",

	// Spawn
	shoot: function(dir, w, h){
		this.dir = dir;
		this.timeLeft = 60;
		this.height = h;
		this.width = w;
		this.x = Bwizz4.x;
		this.y = Bwizz4.y;
	}
};

function drawBullet(B){
	if (B.timeLeft > 0){
		if(B.dir == "W" || B.dir == "A" || B.dir == "S" || B.dir == "D"){
			ctx.fillStyle = B.color;
			ctx.fillRect(B.x - B.width / 2,
			B.y - B.height / 2,
			B.width, B.height);
		}
		else if(B.dir == "WA" || B.dir == "SD"){
			ctx.fillStyle = B.color;
				ctx.fillRect(B.x - B.width / 2,
				B.y - B.height / 2,
				B.width, B.height);
			ctx.fillRect(B.x + B.width / 2, B.y + B.height / 2, B.width, B.height);
			ctx.fillRect(B.x + B.width / 2 + B.width, B.y + B.height / 2 + B.height, B.width, B.height);
			ctx.fillRect(B.x + B.width / 2 + B.width + B.width,
				B.y + B.height / 2 + B.height + B.height, B.width, B.height);
			ctx.fillRect(B.x + B.width / 2 + B.width + B.width + B.width,
				B.y + B.height / 2 + B.height + B.height + B.height, B.width, B.height);
		}
		else if(B.dir == "WD" || B.dir == "AS"){
			ctx.fillStyle = B.color;
				ctx.fillRect(B.x,
				B.y - B.height / 2,
				B.width, B.height);
			ctx.fillRect(B.x + B.width, B.y - B.height - B.height / 2, B.width, B.height);
			ctx.fillRect(B.x + B.width + B.width, B.y - B.height - B.height - B.height / 2, B.width, B.height);
			ctx.fillRect(B.x + B.width + B.width + B.width,
				B.y - B.height - B.height - B.height - B.height / 2, B.width, B.height);
			ctx.fillRect(B.x + B.width + B.width + B.width + B.width,
				B.y - B.height - B.height - B.height - B.height - B.height / 2, B.width, B.height);
		}
	}
	else{
		B.x = -100;
		B.y = -200;
		}
}
// Increment
function Bulletmove(B){
	if(collision(B.dir, B, obstacle) || (collision(B.dir, B, obstacleA)) || (collision(B.dir, B, obstacleB))){
		B.timeLeft = 0;
	}
	for (E in Enemies){
		if(collision(B.dir, B, Enemies[E])){
			B.timeLeft = 0;
			onHit(Enemies[E], Enemies[E].rp);
		}
	}
	if(collision(B.dir, B, Sorceror)){
		B.timeLeft = 0;
		Sorceror.onHit();
	}
	if(collision(B.dir, B, Spawner)){
		B.timeLeft = 0;
		Spawner.onHit();
	}
	if (B.timeLeft > 0 && B.dir == "W"){
		B.timeLeft--;
		B.y -= B.speed;
	}
	else if (B.timeLeft > 0 && B.dir == "A"){
		B.timeLeft--;
		B.x -= B.speed;
	}
	else if (B.timeLeft > 0 && B.dir == "S"){
		B.timeLeft--;
		B.y += B.speed;
	}
	else if (B.timeLeft > 0 && B.dir == "D"){
		B.timeLeft--;
		B.x += B.speed;
	}
	else if (B.timeLeft > 0 && B.dir == "WA"){
		B.timeLeft--;
		B.x -= B.speed;
		B.y -= B.speed;
	}
	else if (B.timeLeft > 0 && B.dir == "AS"){
		B.timeLeft--;
		B.x -= B.speed;
		B.y += B.speed;
	}
	else if (B.timeLeft > 0 && B.dir == "SD"){
		B.timeLeft--;
		B.x += B.speed;
		B.y += B.speed;
	}
	else if (B.timeLeft > 0 && B.dir == "WD"){
		B.timeLeft--;
		B.x += B.speed;
		B.y -= B.speed;
	}
}

// Increment
function tBulletmove(B){
	if(collision(B.dir, B, obstacle) || (collision(B.dir, B, obstacleA)) || (collision(B.dir, B, obstacleB))){
		B.timeLeft = 0;
	}
	if(collision(B.dir, B, player)){
		if(hptimer > 0){
			onDmg.play();
			player.hp-=1;
			hptimer = 30;
		}
		B.timeLeft = 0;
	}
	if (B.timeLeft > 0 && B.dir == "W"){
		B.timeLeft--;
		B.y -= B.speed;
	}
	else if (B.timeLeft > 0 && B.dir == "A"){
		B.timeLeft--;
		B.x -= B.speed;
	}
	else if (B.timeLeft > 0 && B.dir == "S"){
		B.timeLeft--;
		B.y += B.speed;
	}
	else if (B.timeLeft > 0 && B.dir == "D"){
		B.timeLeft--;
		B.x += B.speed;
	}
	else if (B.timeLeft > 0 && B.dir == "WA"){
		B.timeLeft--;
		B.x += B.speed;
		B.y += B.speed;
	}
	else if (B.timeLeft > 0 && B.dir == "AS"){
		B.timeLeft--;
		B.x += B.speed;
		B.y -= B.speed;
	}
	else if (B.timeLeft > 0 && B.dir == "SD"){
		B.timeLeft--;
		B.x -= B.speed;
		B.y -= B.speed;
	}
	else if (B.timeLeft > 0 && B.dir == "WD"){
		B.timeLeft--;
		B.x -= B.speed;
		B.y += B.speed;
	}
}

// Frozen Fireball: Fires a projectile. On hitting an obstacle or wall it explodes forming an ice field.
var fireice = {
	color1: "FF6600",
	color2: "00CCFF",
	color: "FF6600",
	state: 0,
	x: -1000,
	y: -200,
	width: 32,
	height: 32,
	frame: 0,
	cd: 0,
	onScreen: 0,
	dir: "W",
	speed: 16,
	flicker: 600,
	draw: function(){
		if(this.onScreen == 1){
			if(this.state == 0){
				if(this.flicker/2 != Math.round(this.flicker/2)){
					ctx.globalAlpha = 0.5;
					ctx.fillStyle = this.color2;
					ctx.fillRect(this.x - this.width / 2,
					this.y - this.height / 2,
					this.width, this.height);
					ctx.globalAlpha = 1;
					this.flicker-=1;
				}
				else{
					ctx.globalAlpha = 0.5;
					ctx.fillStyle = this.color1;
					ctx.fillRect(this.x - this.width / 2,
					this.y - this.height / 2,
					this.width, this.height);
					ctx.globalAlpha = 1;
					this.flicker-=1;
				}	
			}
			else{
			ctx.globalAlpha = 1;
			ctx.globalAlpha = 0.5;
			ctx.fillStyle = this.color;
			ctx.fillRect(this.x - this.width / 2,
			this.y - this.height / 2,
			this.width, this.height);
			ctx.globalAlpha = 1;
			}
		}
	},
	
	move: function(){
		if(this.cd > 0){
			this.cd-=1;
		}
		if(this.state == 1){		
			if(this.frame <= 10){
				this.color = this.color2;
				this.width = this.width + 8*this.frame;
				this.height = this.height + 8*this.frame;
				this.frame++;
				for (E in AllEnemies){
					if(collision(AllEnemies[E].dir, AllEnemies[E], this) || contained(this, AllEnemies[E])){
						AllEnemies[E].speed = AllEnemies[E].speed2;
					}
				}
			}
			else{
				this.frame++;
				for (E in AllEnemies){
					if(collision(AllEnemies[E].dir, AllEnemies[E], this) || contained(this, AllEnemies[E])){
						AllEnemies[E].speed = AllEnemies[E].speed2;
					}
				}
			}
			if(this.frame == 60){
				for (E in AllEnemies){
					AllEnemies[E].speed = AllEnemies[E].speed2 * 2;
				}
				this.onScreen = 0;
				this.state = 0;
				this.frame = 0;
			}
		}
		else if(this.onScreen == 1 && this.state == 0){
			if(collision(this.dir, this, obstacle) || (collision(this.dir, this, obstacleA)) || (collision(this.dir, this, obstacleB)
				|| this.x <= 32 || this.x >= 768 || this.y <= 32 || this.y >= 544)){
				this.state = 1;
				Fwave.play();
			}
			for (E in Enemies){
				if(collision(Enemies[E].dir, Enemies[E], this)){
					onHit(Enemies[E], Enemies[E].rp);
				}
				if(collision(Sorceror.dir, Sorceror, this)){
					Sorceror.onHit();
				}
				if(collision(Spawner.dir, Spawner, this)){
					Spawner.onHit();
				}
			}
			if (this.dir == "W"){
				this.y -= this.speed;
			}
			if (this.dir == "A"){
				this.x -= this.speed;
			}
			if (this.dir == "S"){
				this.y += this.speed;
			}
			if (this.dir == "D"){
				this.x += this.speed;
			}
			if (this.dir == "WA"){
				this.x -= this.speed;
				this.y -= this.speed;
			}
			if (this.dir == "AS"){
				this.x -= this.speed;
				this.y += this.speed;
			}
			if (this.dir == "SD"){
				this.x += this.speed;
				this.y += this.speed;
			}
			if (this.dir == "WD"){
				this.x += this.speed;
				this.y -= this.speed;
			}
		}
	},
		
	// Spawn
	shoot: function(){
	if(this.cd == 0){
		Frozen.play();
		this.height = 32;
		this.width = 32;
		this.x = player.x;
		this.y = player.y;
		this.dir = player.dir;
		this.cd = 120;
		this.frame = 0;
		this.onScreen = 1;
		this.color = this.color1;
		this.state = 0;
	}
	else{
		return 0;
	}
	}
	
};

// Fire and Heal: Heals user by 1 and casts Fire
var fireheal = {
	cd: 0,
	tick: function(){
		if(this.cd > 0){
			this.cd-=1;
		}
	},
	shoot: function(){
		if(this.cd == 0){
			Explosion.play();
			this.cd = 600;
			fire.cd = 0;
			earth.cd = 0;
			fire.shoot();
			earth.shoot();
			fire.cd = 0;
			earth.cd = 0;
		}
		else{
			return 0;
		}
	}	
};

// Ice and Heal: Heals user by 1 and casts Ice
var iceheal = {
	cd: 0,
	tick: function(){
		if(this.cd > 0){
			this.cd-=1;
		}
	},
	shoot: function(){
		if(this.cd == 0){
			Frozen.play();
			this.cd = 600;
			ice.cd = 0;
			earth.cd = 0;
			ice.shoot();
			earth.shoot();
			ice.cd = 0;
			earth.cd = 0;
		}
		else{
			return 0;
		}
	}	
};

// Lightning and Heal: Heals user by 1 and casts Lightning
var lightningheal = {
	cd: 0,
	tick: function(){
		if(this.cd > 0){
			this.cd-=1;
		}
	},
	shoot: function(){
		if(this.cd == 0){
			Thunder.play();
			this.cd = 600;
			lightning.cd = 0;
			earth.cd = 0;
			lightning.shoot();
			earth.shoot();
			lightning.cd = 0;
			earth.cd = 0;
		}
		else{
			return 0;
		}
	}	
};

// Ragnarok: Creates a cross of lightning for x seconds. Any enemy that hits it explodes
var firelightning = {
	timeLeft: 0,
	vwidth: 32,
	vheight: 800,
	hwidth: 800,
	hheight: 32,
	hx: 400,
	hy: -2000,
	vx: -2000,
	vy: 288,
	cd: 0,
	onScreen: 0,
	
	draw: function(){
		if(this.onScreen == 1){
			ctx.drawImage(hlightning, this.hx - this.hwidth/2, player.y - this.hheight/2);
			ctx.drawImage(vlightning, player.x-this.vwidth/2, this.vy - this.vheight/2);
		}
	},
	effect: function(){
		if(this.cd > 0){
			this.cd-=1;
			this.vx = player.x;
		}
		if(this.onScreen == 1){
			if(this.timeLeft <= 0){
				this.onScreen = 0;
				this.vx = -2000;
				this.hy = -2000
			}
			else{
				this.timeLeft-=1;
			}
			for (E in Enemies){
				if(Enemies[E].x >= player.x && Enemies[E].x <= player.x + this.vwidth && Enemies[E].onScreen == 1){
					if(firelightningf1.x == -1000){
						firelightningf1.x = Enemies[E].x;
						firelightningf1.y = Enemies[E].y;
						firelightningf1.shoot();
					}
					else if(firelightningf2.x == -1000){
						firelightningf2.x = Enemies[E].x;
						firelightningf2.y = Enemies[E].y;
						firelightningf2.shoot();
					}
					else if(firelightningf3.x == -1000){
						firelightningf3.x = Enemies[E].x;
						firelightningf3.y = Enemies[E].y;
						firelightningf3.shoot();
					}
					else if(firelightningf4.x == -1000){
						firelightningf4.x = Enemies[E].x;
						firelightningf4.y = Enemies[E].y;
						firelightningf4.shoot();
					}
				}
				if(Sorceror.x >= player.x && Sorceror.x <= player.x + this.vwidth && Sorceror.onScreen == 1){
					if(firelightningf1.x == -1000){
						firelightningf1.x = Sorceror.x;
						firelightningf1.y = Sorceror.y;
						firelightningf1.shoot();
					}
					else if(firelightningf2.x == -1000){
						firelightningf2.x = Sorceror.x;
						firelightningf2.y = Sorceror.y;
						firelightningf2.shoot();
					}
					else if(firelightningf3.x == -1000){
						firelightningf3.x = Sorceror.x;
						firelightningf3.y = Sorceror.y;
						firelightningf3.shoot();
					}
					else if(firelightningf4.x == -1000){
						firelightningf4.x = Sorceror.x;
						firelightningf4.y = Sorceror.y;
						firelightningf4.shoot();
					}
				}
			}			
			for (E in Enemies){
				if(Enemies[E].y <= player.y + this.hheight && Enemies[E].y >= player.y && Enemies[E].onScreen == 1){
					if(firelightningf1.x == -1000){
						firelightningf1.x = Enemies[E].x;
						firelightningf1.y = Enemies[E].y;
						firelightningf1.shoot();
					}
					else if(firelightningf2.x == -1000){
						firelightningf2.x = Enemies[E].x;
						firelightningf2.y = Enemies[E].y;
						firelightningf2.shoot();
					}
					else if(firelightningf3.x == -1000){
						firelightningf3.x = Enemies[E].x;
						firelightningf3.y = Enemies[E].y;
						firelightningf3.shoot();
					}
					else if(firelightningf4.x == -1000){
						firelightningf4.x = Enemies[E].x;
						firelightningf4.y = Enemies[E].y;
						firelightningf4.shoot();
					}
				}
				if(Sorceror.y <= player.y + this.hheight && Sorceror.y >= player.y && Sorceror.onScreen == 1){
					if(firelightningf1.x == -1000){
						firelightningf1.x = Sorceror.x;
						firelightningf1.y = Sorceror.y;
						firelightningf1.shoot();
					}
					else if(firelightningf2.x == -1000){
						firelightningf2.x = Sorceror.x;
						firelightningf2.y = Sorceror.y;
						firelightningf2.shoot();
					}
					else if(firelightningf3.x == -1000){
						firelightningf3.x = Sorceror.x;
						firelightningf3.y = Sorceror.y;
						firelightningf3.shoot();
					}
					else if(firelightningf4.x == -1000){
						firelightningf4.x = Sorceror.x;
						firelightningf4.y = Sorceror.y;
						firelightningf4.shoot();
					}
				}
				if(Spawner.y <= player.y + this.hheight && Spawner.y >= player.y && Spawner.onScreen == 1){
					if(firelightningf1.x == -1000){
						firelightningf1.x = Spawner.x;
						firelightningf1.y = Spawner.y;
						firelightningf1.shoot();
					}
					else if(firelightningf2.x == -1000){
						firelightningf2.x = Spawner.x;
						firelightningf2.y = Spawner.y;
						firelightningf2.shoot();
					}
					else if(firelightningf3.x == -1000){
						firelightningf3.x = Spawner.x;
						firelightningf3.y = Spawner.y;
						firelightningf3.shoot();
					}
					else if(firelightningf4.x == -1000){
						firelightningf4.x = Spawner.x;
						firelightningf4.y = Spawner.y;
						firelightningf4.shoot();
					}
				}
			}			
		}
	},
	// Spawn
	shoot: function(){
	if(this.cd == 0){
		Thunder.play();
		this.hx = 400;
		this.vx = player.x;
		this.hy = player.y;
		this.cd = 900;
		this.onScreen = 1;
		this.timeLeft = 210;
	}
	else{
		return 0;
	}
	}
	
};
var firelightningf1 = {
	color: "FF6600",
	x: -1000,
	y: -200,
	timeLeft: 0,
	width: 32,
	height: 32,
	frame: 0,
	onScreen: 0,
	
	draw: function(){
		if(this.onScreen == 1){
			ctx.globalAlpha = 0.5;
			ctx.fillStyle = this.color;
			ctx.fillRect(this.x - this.width / 2,
			this.y - this.height / 2,
			this.width, this.height);
			ctx.globalAlpha = 1;
		}
	},
	
	move: function(){
		if(this.frame == 20){
			this.x = -1000;
			this.y = -200;
			this.width = 32;
			this.height = 32;
			this.onScreen = 0;
		}
		else{
			this.width = 32 + (16*this.frame);
			this.height = 32 + (16*this.frame);
			this.frame++;
			for (E in Enemies){
				if(collision(Enemies[E].dir, Enemies[E], this)){
					onHit(Enemies[E], Enemies[E].rp);
				}
				if(collision(Sorceror.dir, Sorceror, this)){
					Sorceror.onHit();
				}
				if(collision(Spawner.dir, Spawner, this)){
					Spawner.onHit();
				}
			}
		}
	},
		
	// Spawn
	shoot: function(){
		Explosion.play();
		this.height = 32;
		this.width = 32;
		this.frame = 0;
		this.onScreen = 1;
	}
	
};
var firelightningf2 = {
	color: "FF6600",
	x: -1000,
	y: -200,
	timeLeft: 0,
	width: 32,
	height: 32,
	frame: 0,
	onScreen: 0,
	
	draw: function(){
		if(this.onScreen == 1){
			ctx.globalAlpha = 0.5;
			ctx.fillStyle = this.color;
			ctx.fillRect(this.x - this.width / 2,
			this.y - this.height / 2,
			this.width, this.height);
			ctx.globalAlpha = 1;
		}
	},
	
	move: function(){
		if(this.frame == 20){
			this.x = -1000;
			this.y = -200;
			this.width = 32;
			this.height = 32;
			this.onScreen = 0;
		}
		else{
			this.width = 32 + (16*this.frame);
			this.height = 32 + (16*this.frame);
			this.frame++;
			for (E in Enemies){
				if(collision(Enemies[E].dir, Enemies[E], this)){
					onHit(Enemies[E], Enemies[E].rp);
				}
				if(collision(Sorceror.dir, Sorceror, this)){
					Sorceror.onHit();
				}
				if(collision(Spawner.dir, Spawner, this)){
					Spawner.onHit();
				}
			}
		}
	},
		
	// Spawn
	shoot: function(){
		Explosion.play();
		this.height = 32;
		this.width = 32;
		this.frame = 0;
		this.onScreen = 1;
	}
	
	
};
var firelightningf3 = {
	color: "FF6600",
	x: -1000,
	y: -200,
	timeLeft: 0,
	width: 32,
	height: 32,
	frame: 0,
	onScreen: 0,
	
	draw: function(){
		if(this.onScreen == 1){
			ctx.globalAlpha = 0.5;
			ctx.fillStyle = this.color;
			ctx.fillRect(this.x - this.width / 2,
			this.y - this.height / 2,
			this.width, this.height);
			ctx.globalAlpha = 1;
		}
	},
	
	move: function(){
		if(this.frame == 20){
			this.x = -1000;
			this.y = -200;
			this.width = 32;
			this.height = 32;
			this.onScreen = 0;
		}
		else{
			this.width = 32 + (16*this.frame);
			this.height = 32 + (16*this.frame);
			this.frame++;
			for (E in Enemies){
				if(collision(Enemies[E].dir, Enemies[E], this)){
					onHit(Enemies[E], Enemies[E].rp);
				}
				if(collision(Sorceror.dir, Sorceror, this)){
					Sorceror.onHit();
				}
				if(collision(Spawner.dir, Spawner, this)){
					Spawner.onHit();
				}
			}
		}
	},
		
	// Spawn
	shoot: function(){
		Explosion.play();
		this.height = 32;
		this.width = 32;
		this.frame = 0;
		this.onScreen = 1;
	}
	
};
var firelightningf4 = {
	color: "FF6600",
	x: -1000,
	y: -200,
	timeLeft: 0,
	width: 32,
	height: 32,
	frame: 0,
	onScreen: 0,
	
	draw: function(){
		if(this.onScreen == 1){
			ctx.globalAlpha = 0.5;
			ctx.fillStyle = this.color;
			ctx.fillRect(this.x - this.width / 2,
			this.y - this.height / 2,
			this.width, this.height);
			ctx.globalAlpha = 1;
		}
	},
	
	move: function(){
		if(this.frame == 20){
			this.x = -1000;
			this.y = -200;
			this.width = 32;
			this.height = 32;
			this.onScreen = 0;
		}
		else{
			this.width = 32 + (16*this.frame);
			this.height = 32 + (16*this.frame);
			this.frame++;
			for (E in Enemies){
				if(collision(Enemies[E].dir, Enemies[E], this)){
					onHit(Enemies[E], Enemies[E].rp);
				}
				if(collision(Sorceror.dir, Sorceror, this)){
					Sorceror.onHit();
				}
				if(collision(Spawner.dir, Spawner, this)){
					Spawner.onHit();
				}
			}
		}
	},
	// Spawn
	shoot: function(){
		Explosion.play();
		this.height = 32;
		this.width = 32;
		this.frame = 0;
		this.onScreen = 1;
	}
};

// Frozen Web: Creates a web of ice that stops all enemies in its tracks
var vertil = {
	color: "00CCFF",
	timeLeft: 0,
	width: 16,
	height: 16,
	x: -2000,
	y: -2000,
	frame: 0,
	onScreen: 0,
	split: 0,
	end: false,
	draw: function(){
		if(this.frame == 240){
			this.onScreen = 0;
			this.x = -2000;
			this.y = -2000;
			this.width = 16;
			this.height = 16;
			this.end = true;
		}
		if(this.onScreen == 1){
			ctx.globalAlpha = 0.25;
			ctx.fillStyle = this.color;
			ctx.fillRect(this.x - this.width / 2, this.y - this.height / 2,	this.width, this.height);
			ctx.globalAlpha = 1;
			this.height = this.height + (32*this.frame);
			this.frame++;
			for(E in AllEnemies){
				if(collision(AllEnemies[E].dir, AllEnemies[E], this)){
					AllEnemies[E].speed = 0;
				}
			}
		}
		if(this.end == true){
			for(E in AllEnemies){
					AllEnemies[E].speed = AllEnemies[E].speed2*2;
			}
			this.end = false;
		}
	}	
};
var vertil2 = {
	color: "00CCFF",
	timeLeft: 0,
	width: 16,
	height: 16,
	x: -2000,
	y: -2000,
	frame: 0,
	onScreen: 0,
	split: 0,
	end: false,
	draw: function(){
		if(this.frame == 240){
			this.onScreen = 0;
			this.x = -2000;
			this.y = -2000;
			this.width = 16;
			this.height = 16;
			this.end = true;
		}
		if(this.onScreen == 1){
			ctx.globalAlpha = 0.25;
			ctx.fillStyle = this.color;
			ctx.fillRect(this.x - this.width / 2, this.y - this.height / 2,	this.width, this.height);
			ctx.globalAlpha = 1;
			this.height = this.height + (32*this.frame);
			this.frame++;
			for(E in AllEnemies){
				if(collision(AllEnemies[E].dir, AllEnemies[E], this)){
					AllEnemies[E].speed = 0;
				}
			}
		}
		if(this.end == true){
			for(E in AllEnemies){
					AllEnemies[E].speed = AllEnemies[E].speed2*2;
			}
			this.end = false;
		}
	}	
};
var vertil3 = {
	color: "00CCFF",
	timeLeft: 0,
	width: 16,
	height: 16,
	x: -2000,
	y: -2000,
	frame: 0,
	onScreen: 0,
	split: 0,
	end: false,
	draw: function(){
		if(this.frame == 240){
			this.onScreen = 0;
			this.x = -2000;
			this.y = -2000;
			this.width = 16;
			this.height = 16;
			this.end = true;
		}
		if(this.onScreen == 1){
			ctx.globalAlpha = 0.25;
			ctx.fillStyle = this.color;
			ctx.fillRect(this.x - this.width / 2, this.y - this.height / 2,	this.width, this.height);
			ctx.globalAlpha = 1;
			this.height = this.height + (32*this.frame);
			this.frame++;
			for(E in AllEnemies){
				if(collision(AllEnemies[E].dir, AllEnemies[E], this)){
					AllEnemies[E].speed = 0;
				}
			}
		}
		if(this.end == true){
			for(E in AllEnemies){
					AllEnemies[E].speed = AllEnemies[E].speed2*2;
			}
			this.end = false;
		}
	}	
};
var vertil4 = {
	color: "00CCFF",
	timeLeft: 0,
	width: 16,
	height: 16,
	x: -2000,
	y: -2000,
	frame: 0,
	onScreen: 0,
	split: 0,
	end: false,
	draw: function(){
		if(this.frame == 240){
			this.onScreen = 0;
			this.x = -2000;
			this.y = -2000;
			this.width = 16;
			this.height = 16;
			this.end = true;
		}
		if(this.onScreen == 1){
			ctx.globalAlpha = 0.25;
			ctx.fillStyle = this.color;
			ctx.fillRect(this.x - this.width / 2, this.y - this.height / 2,	this.width, this.height);
			ctx.globalAlpha = 1;
			this.height = this.height + (32*this.frame);
			this.frame++;
			for(E in AllEnemies){
				if(collision(AllEnemies[E].dir, AllEnemies[E], this)){
					AllEnemies[E].speed = 0;
				}
			}
		}
		if(this.end == true){
			for(E in AllEnemies){
					AllEnemies[E].speed = AllEnemies[E].speed2*2;
			}
			this.end = false;
		}
	}	
};
var vertil5 = {
	color: "00CCFF",
	timeLeft: 0,
	width: 16,
	height: 16,
	x: -2000,
	y: -2000,
	frame: 0,
	onScreen: 0,
	split: 0,
	end: false,
	draw: function(){
		if(this.frame == 240){
			this.onScreen = 0;
			this.x = -2000;
			this.y = -2000;
			this.width = 16;
			this.height = 16;
			this.end = true;
		}
		if(this.onScreen == 1){
			ctx.globalAlpha = 0.25;
			ctx.fillStyle = this.color;
			ctx.fillRect(this.x - this.width / 2, this.y - this.height / 2,	this.width, this.height);
			ctx.globalAlpha = 1;
			this.height = this.height + (32*this.frame);
			this.frame++;
			for(E in AllEnemies){
				if(collision(AllEnemies[E].dir, AllEnemies[E], this)){
					AllEnemies[E].speed = 0;
				}
			}
		}
		if(this.end == true){
			for(E in AllEnemies){
					AllEnemies[E].speed = AllEnemies[E].speed2*2;
			}
			this.end = false;
		}
	}	
};
var horil = {
	color: "00CCFF",
	timeLeft: 0,
	width: 16,
	height: 16,
	x: -2000,
	y: -2000,
	frame: 0,
	onScreen: 0,
	split: 0,
	end: false,
	draw: function(){
		if(this.frame == 240){
			this.onScreen = 0;
			this.x = -2000;
			this.y = -2000;
			this.width = 16;
			this.height = 16;
			this.end = true;
		}
		if(this.onScreen == 1){
			ctx.globalAlpha = 0.25;
			ctx.fillStyle = this.color;
			ctx.fillRect(this.x - this.width / 2, this.y - this.height / 2,	this.width, this.height);
			ctx.globalAlpha = 1;
			this.width = this.width + (32*this.frame);
			this.frame++;
			for(E in AllEnemies){
				if(collision(AllEnemies[E].dir, AllEnemies[E], this)){
					AllEnemies[E].speed = 0;
				}
			}
		}
		if(this.end == true){
			for(E in AllEnemies){
					AllEnemies[E].speed = AllEnemies[E].speed2*2;
			}
			this.end = false;
		}
	}	
};
var horil2 = {
	color: "00CCFF",
	timeLeft: 0,
	width: 16,
	height: 16,
	x: -2000,
	y: -2000,
	frame: 0,
	onScreen: 0,
	split: 0,
	end: false,
	draw: function(){
		if(this.frame == 240){
			this.onScreen = 0;
			this.x = -2000;
			this.y = -2000;
			this.width = 16;
			this.height = 16;
			this.end = true;
		}
		if(this.onScreen == 1){
			ctx.globalAlpha = 0.25;
			ctx.fillStyle = this.color;
			ctx.fillRect(this.x - this.width / 2, this.y - this.height / 2,	this.width, this.height);
			ctx.globalAlpha = 1;
			this.width = this.width + (32*this.frame);
			this.frame++;
			for(E in AllEnemies){
				if(collision(AllEnemies[E].dir, AllEnemies[E], this)){
					AllEnemies[E].speed = 0;
				}
			}
		}
		if(this.end == true){
			for(E in AllEnemies){
					AllEnemies[E].speed = AllEnemies[E].speed2*2;
			}
			this.end = false;
		}
	}	
};
var horil3 = {
	color: "00CCFF",
	timeLeft: 0,
	width: 16,
	height: 16,
	x: -2000,
	y: -2000,
	frame: 0,
	onScreen: 0,
	split: 0,
	end: false,
	draw: function(){
		if(this.frame == 240){
			this.onScreen = 0;
			this.x = -2000;
			this.y = -2000;
			this.width = 16;
			this.height = 16;
			this.end = true;
		}
		if(this.onScreen == 1){
			ctx.globalAlpha = 0.25;
			ctx.fillStyle = this.color;
			ctx.fillRect(this.x - this.width / 2, this.y - this.height / 2,	this.width, this.height);
			ctx.globalAlpha = 1;
			this.width = this.width + (32*this.frame);
			this.frame++;
			for(E in AllEnemies){
				if(collision(AllEnemies[E].dir, AllEnemies[E], this)){
					AllEnemies[E].speed = 0;
				}
			}
		}
		if(this.end == true){
			for(E in AllEnemies){
					AllEnemies[E].speed = AllEnemies[E].speed2*2;
			}
			this.end = false;
		}
	}	
};
var horil4 = {
	color: "00CCFF",
	timeLeft: 0,
	width: 16,
	height: 16,
	x: -2000,
	y: -2000,
	frame: 0,
	onScreen: 0,
	split: 0,
	end: false,
	draw: function(){
		if(this.frame == 240){
			this.onScreen = 0;
			this.x = -2000;
			this.y = -2000;
			this.width = 16;
			this.height = 16;
			this.end = true;
		}
		if(this.onScreen == 1){
			ctx.globalAlpha = 0.25;
			ctx.fillStyle = this.color;
			ctx.fillRect(this.x - this.width / 2, this.y - this.height / 2,	this.width, this.height);
			ctx.globalAlpha = 1;
			this.width = this.width + (32*this.frame);
			this.frame++;
			for(E in AllEnemies){
				if(collision(AllEnemies[E].dir, AllEnemies[E], this)){
					AllEnemies[E].speed = 0;
				}
			}
		}
		if(this.end == true){
			for(E in AllEnemies){
					AllEnemies[E].speed = AllEnemies[E].speed2*2;
			}
			this.end = false;
		}
	}	
};
var horil5 = {
	color: "00CCFF",
	timeLeft: 0,
	width: 16,
	height: 16,
	x: -2000,
	y: -2000,
	frame: 0,
	end: false,
	onScreen: 0,
	split: 0,
	draw: function(){
		if(this.frame == 240){
			this.onScreen = 0;
			this.x = -2000;
			this.y = -2000;
			this.width = 16;
			this.height = 16;
			this.end = true;
		}
		if(this.onScreen == 1){
			ctx.globalAlpha = 0.25;
			ctx.fillStyle = this.color;
			ctx.fillRect(this.x - this.width / 2, this.y - this.height / 2,	this.width, this.height);
			ctx.globalAlpha = 1;
			this.width = this.width + (32*this.frame);
			this.frame++;
			for(E in AllEnemies){
				if(collision(AllEnemies[E].dir, AllEnemies[E], this)){
					AllEnemies[E].speed = 0;
				}
			}
		}
		if(this.end == true){
			for(E in AllEnemies){
					AllEnemies[E].speed = AllEnemies[E].speed2*2;
			}
			this.end = false;
		}
	}	
};
var webhoril = {1: horil5, 2: horil4, 3: horil3, 4: horil2, 5: horil};
var webvertil = {1: vertil5, 2: vertil4, 3: vertil3, 4: vertil2, 5: vertil};
var icelightning = {
	color: "00CCFF",
	cd: 0,
	timeLeft: 0,
	AllEnemiesil: {1: Enemy, 2: EnemyA, 3: EnemyB, 4: EnemyC, 5: Tenemy, 6: TenemyA, 7: TenemyB, 8: Sorceror, 9: Bwizz},
	tick: function(){
		if(this.cd>0){
			this.cd-=1;
		}
		if(this.timeLeft > 0){
			this.timeLeft-=1;
		}
		else if(this.timeLeft<=0){
			horil.split = 0;
			horil2.split = 0;
			horil3.split = 0;
			horil4.split = 0;
			horil5.split = 0;
			vertil.split = 0;
			vertil2.split = 0;
			vertil3.split = 0;
			vertil4.split = 0;
			vertil5.split = 0;
			horil.onScreen = 0;
			horil2.onScreen = 0;
			horil3.onScreen = 0;
			horil4.onScreen = 0;
			horil5.onScreen = 0;
			vertil.onScreen = 0;
			vertil2.onScreen = 0;
			vertil3.onScreen = 0;
			vertil4.onScreen = 0;
			vertil5.onScreen = 0;
			this.AllEnemiesil = {1: Enemy, 2: EnemyA, 3: EnemyB, 4: EnemyC, 5: Tenemy, 6: TenemyA, 7: TenemyB, 8: Sorceror, 9: Bwizz};
		}
	},
	// Slow all enemies in radius
	effect: function(){
	if(this.timeLeft>0){
		for(A in webvertil){
			for(E in this.AllEnemiesil){
				if(collision(this.AllEnemiesil[E].dir, this.AllEnemiesil[E], webvertil[A])){
					//Spawn more webs
					if(horil2.onScreen == 0 && horil2.split == 0){
						horil2.x = this.AllEnemiesil[E].x;
						horil2.y = this.AllEnemiesil[E].y;
						horil2.frame = 0;
						horil2.onScreen = 1;
						horil2.split = 1;
						delete this.AllEnemiesil[E];
					}
					else if(horil3.onScreen == 0 && horil3.split == 0){
						horil3.x = this.AllEnemiesil[E].x;
						horil3.y = this.AllEnemiesil[E].y;
						horil3.frame = 0;
						horil3.onScreen = 1;
						horil3.split = 1;
						delete this.AllEnemiesil[E];
					}
					else if(horil4.onScreen == 0 && horil4.split == 0){
						horil4.x = this.AllEnemiesil[E].x;
						horil4.y = this.AllEnemiesil[E].y;
						horil4.frame = 0;
						horil4.onScreen = 1;
						horil4.split = 1;
						delete this.AllEnemiesil[E];
					}
					else if(horil5.onScreen == 0 && horil5.split == 0){
						horil5.x = this.AllEnemiesil[E].x;
						horil5.y = this.AllEnemiesil[E].y;
						horil5.frame = 0;
						horil5.onScreen = 1;
						horil5.split = 1;
						delete this.AllEnemiesil[E];
					}
				}
			}
		}
		for(A in webhoril){
			for(E in this.AllEnemiesil){
				if(collision(this.AllEnemiesil[E].dir, this.AllEnemiesil[E], webhoril[A])){
					//Spawn more webs
					if(vertil2.onScreen == 0 && vertil2.split == 0){
						vertil2.x = this.AllEnemiesil[E].x;
						vertil2.y = this.AllEnemiesil[E].y;
						vertil2.frame = 0;
						vertil2.onScreen = 1;
						vertil2.split = 1;
						delete this.AllEnemiesil[E];
					}
					else if(vertil3.onScreen == 0 && vertil3.split == 0){
						vertil3.x = this.AllEnemiesil[E].x;
						vertil3.y = this.AllEnemiesil[E].y;
						vertil3.frame = 0;
						vertil3.onScreen = 1;
						vertil3.split = 1;
						delete this.AllEnemiesil[E];
					}
					else if(vertil4.onScreen == 0 && vertil4.split == 0){
						vertil4.x = this.AllEnemiesil[E].x;
						vertil4.y = this.AllEnemiesil[E].y;
						vertil4.frame = 0;
						vertil4.onScreen = 1;
						vertil4.split = 1;
						delete this.AllEnemiesil[E];
					}
					else if(vertil5.onScreen == 0 && vertil5.split == 0){
						vertil5.x = this.AllEnemiesil[E].x;
						vertil5.y = this.AllEnemiesil[E].y;
						vertil5.frame = 0;
						vertil5.onScreen = 1;
						vertil5.split = 1;
						delete this.AllEnemiesil[E];
					}
				}
			}
		}
	}
	},
		
	// Spawn
	shoot: function(){
	if(this.cd == 0){
		Fwave.play();
		vertil.x = player.x
		vertil.y = player.y
		vertil.frame = 0;
		vertil.onScreen = 1;
		horil.x = player.x
		horil.y = player.y
		horil.frame = 0;
		horil.onScreen = 1;
		this.cd = 450;
		this.timeLeft = 300;
		this.AllEnemiesil = {1: Enemy, 2: EnemyA, 3: EnemyB, 4: EnemyC, 5: Tenemy, 6: TenemyA, 7: TenemyB, 8: Sorceror, 9: Bwizz};
	}
	}
	
};

// Fire Wave: Damages all enemies in front of the player
var airfire = {
	color1: "FF6600",
	color2: "990000",
	x: -100,
	y: -200,
	ox: -100,
	oy: -200,
	width: 32,
	height: 8,
	hwidth: 8,
	hheight: 32,
	frame: 0,
	cd: 0,
	speed: 16,
	onScreen: 0,
	
	draw: function(){
		if(this.onScreen == 1){
			if(this.frame/2 == Math.round(this.frame/2)){
				ctx.fillStyle = this.color1;
			}
			else{
				ctx.fillStyle = this.color2;
			}
			ctx.fillRect(this.ox - player.width / 2,
				this.oy - player.height / 2,
				player.width, player.height);
			if(this.dir == "W" || this.dir == "S"){
				ctx.fillRect(this.x - this.width / 2,
				this.y - this.height / 2,
				this.width, this.height);
			}
			else if(this.dir == "A" || this.dir == "D"){
				ctx.fillRect(this.x - this.hwidth / 2,
				this.y - this.hheight / 2,
				this.hwidth, this.hheight);
			}
		}
	},
	effect: function(){
		if(this.cd > 0){
			this.cd-=1;
		}
		if(this.frame == 5){
			airfire12.x = this.ox;
			airfire12.y = this.oy;
			airfire12.shoot();
		}
		if(this.frame == 10){
			airfire13.x = this.ox;
			airfire13.y = this.oy;
			airfire13.shoot();
		}
		if(this.frame == 30){
			this.x = -100;
			this.y = -200;
			this.width = 32;
			this.onScreen = 0;
			this.height = 8;
			this.hwidth = 8;
			this.frame = 0;
			this.hheight = 32;
		}
		else if(this.onScreen ==1){
			if(this.dir == "S" || this.dir == "W"){
				this.width = 32 + (4*this.frame);
			}
			else if(this.dir == "A" || this.dir == "D"){
				this.hheight = 32 + (4*this.frame);
			}
			this.frame++;
			if (this.dir == "W"){
				this.y -= this.speed;
			}
			else if (this.dir == "A"){
				this.x -= this.speed;
			}
			else if (this.dir == "S"){
				this.y += this.speed;
			}
			else if (this.dir == "D"){
				this.x += this.speed;
			}
			for (E in Enemies){
				if(collision(Enemies[E].dir, Enemies[E], this)){
					onHit(Enemies[E], Enemies[E].rp);
				}
			}
			if(collision(Sorceror.dir, Sorceror, this)){
				Sorceror.onHit();
			}
			if(collision(Spawner.dir, Spawner, this)){
				Spawner.onHit();
			}
		}
	},
	// Spawn
	shoot: function(){
	if(this.cd == 0){
		Fwave.play();
		this.width = 32;
		this.x = player.x;
		this.y = player.y;
		this.ox = player.x;
		this.oy = player.y;
		this.dir = player.dir;
		this.cd = 60;
		this.frame = 0;
		this.onScreen = 1;
	}
	else{
		return 0;
	}
	}
};
var airfire12 = {
	color1: "FF6600",
	color2: "990000",
	x: -100,
	y: -200,
	width: 32,
	height: 8,
	hwidth: 8,
	hheight: 32,
	frame: 0,
	speed: 16,
	onScreen: 0,
	
	draw: function(){
		if(this.onScreen == 1){
			if(this.frame/2 == Math.round(this.frame/2)){
				ctx.fillStyle = this.color1;
			}
			else{
				ctx.fillStyle = this.color2;
			}
			if(this.dir == "W" || this.dir == "S"){
				ctx.fillRect(this.x - this.width / 2,
				this.y - this.height / 2,
				this.width, this.height);
			}
			else if(this.dir == "A" || this.dir == "D"){
				ctx.fillRect(this.x - this.hwidth / 2,
				this.y - this.hheight / 2,
				this.hwidth, this.hheight);
			}
		}
	},
	effect: function(){
		if(this.frame == 30){
			this.x = -100;
			this.y = -200;
			this.width = 32;
			this.onScreen = 0;
			this.height = 8;
			this.hwidth = 8;
			this.hheight = 32;
			this.frame = 0;
			for(E in AllEnemies){
				AllEnemies[E].speed = AllEnemies[E].speed2*2;
			}
		}
		else if(this.onScreen ==1){
			if(this.dir == "S" || this.dir == "W"){
				this.width = 32 + (4*this.frame);
			}
			else if(this.dir == "A" || this.dir == "D"){
				this.hheight = 32 + (4*this.frame);
			}
			this.frame++;
			if (this.dir == "W"){
				this.y -= this.speed;
			}
			else if (this.dir == "A"){
				this.x -= this.speed;
			}
			else if (this.dir == "S"){
				this.y += this.speed;
			}
			else if (this.dir == "D"){
				this.x += this.speed;
			}
			for (E in Enemies){
				if(collision(Enemies[E].dir, Enemies[E], this)){
					onHit(Enemies[E], Enemies[E].rp);
				}
			}
			if(collision(Sorceror.dir, Sorceror, this)){
				Sorceror.onHit();
			}
			if(collision(Spawner.dir, Spawner, this)){
				Spawner.onHit();
			}
		}
	},
	// Spawn
	shoot: function(){
		this.width = 32;
		this.dir = airfire.dir;
		this.frame = 0;
		this.onScreen = 1;
	}
};

var airfire13 = {
	color1: "FF6600",
	color2: "990000",
	x: -100,
	y: -200,
	width: 32,
	height: 8,
	hwidth: 8,
	hheight: 32,
	frame: 0,
	speed: 16,
	onScreen: 0,
	
	draw: function(){
		if(this.onScreen == 1){
			if(this.frame/2 == Math.round(this.frame/2)){
				ctx.fillStyle = this.color1;
			}
			else{
				ctx.fillStyle = this.color2;
			}
			if(this.dir == "W" || this.dir == "S"){
				ctx.fillRect(this.x - this.width / 2,
				this.y - this.height / 2,
				this.width, this.height);
			}
			else if(this.dir == "A" || this.dir == "D"){
				ctx.fillRect(this.x - this.hwidth / 2,
				this.y - this.hheight / 2,
				this.hwidth, this.hheight);
			}
		}
	},
	effect: function(){
		if(this.frame == 30){
			this.x = -100;
			this.y = -200;
			this.width = 32;
			this.onScreen = 0;
			this.height = 8;
			this.hwidth = 8;
			this.hheight = 32;
			this.frame = 0;
			for(E in AllEnemies){
				AllEnemies[E].speed = AllEnemies[E].speed2*2;
			}
		}
		else if(this.onScreen ==1){
			if(this.dir == "S" || this.dir == "W"){
				this.width = 32 + (4*this.frame);
			}
			else if(this.dir == "A" || this.dir == "D"){
				this.hheight = 32 + (4*this.frame);
			}
			this.frame++;
			if (this.dir == "W"){
				this.y -= this.speed;
			}
			else if (this.dir == "A"){
				this.x -= this.speed;
			}
			else if (this.dir == "S"){
				this.y += this.speed;
			}
			else if (this.dir == "D"){
				this.x += this.speed;
			}
			for (E in Enemies){
				if(collision(Enemies[E].dir, Enemies[E], this)){
					onHit(Enemies[E], Enemies[E].rp);
				}
			}
			if(collision(Sorceror.dir, Sorceror, this)){
				Sorceror.onHit();
			}
			if(collision(Spawner.dir, Spawner, this)){
				Spawner.onHit();
			}
		}
	},
	// Spawn
	shoot: function(){
		this.width = 32;
		this.dir = airfire.dir;
		this.frame = 0;
		this.onScreen = 1;
	}
};

// Maelstrom: Slows all enemies on screen and creates a storm around the player
var airice = {
	color1: "3300CC",
	color2: "33CCCC",
	x: -100,
	y: -200,
	timeLeft: 0,
	width: 64,
	height: 64,
	cd: 0,
	onScreen: 0,
	
	draw: function(){
		if(this.onScreen == 1){
			ctx.globalAlpha = 0.5;
			if(this.timeLeft/2 != Math.round(this.timeLeft/2)){
				ctx.fillStyle = this.color1;
			}
			else{
				ctx.fillStyle = this.color2;
			}
			ctx.fillRect(this.x - this.width / 2,
			this.y - this.height / 2,
			this.width, this.height);
			ctx.globalAlpha = 1;
		}
	},
	
	effect: function(){
		if(this.cd > 0){
			this.cd-=1;
		}
		if(this.timeLeft == 0 && this.onScreen == 1){
			this.onScreen = 0;
			ice.cd = 0;
		}
		else if(this.timeLeft<=30){
			this.height+=4;
			this.width+=4;
		}
		else if(this.timeLeft<=60){
			this.height-=4;
			this.width-=4;
		}
		else if(this.timeLeft<=90){
			this.height+=4;
			this.width+=4;
		}
		else if(this.timeLeft <= 120){
			this.height-=4;
			this.width-=4;
		}
		else{
			this.height+=4;
			this.width+=4;
		}
		if(this.timeLeft != 0){
			this.timeLeft-=1;
			this.x = player.x;
			this.y = player.y;
			for (E in Enemies){
				if(collision(Enemies[E].dir, Enemies[E], this)){
					onHit(Enemies[E], Enemies[E].rp);
				}
				if(collision(Sorceror.dir, Sorceror, this)){
					Sorceror.onHit();
				}
				if(collision(Spawner.dir, Spawner, this)){
					Spawner.onHit();
				}
			}
		}	
	},
		
	// Spawn
	shoot: function(){
	if(this.cd == 0){
		Fwave.play();
		Frozen.play();
		this.x = player.x;
		this.y = player.y;
		this.cd = 450;
		this.width = 64;
		this.height = 64;
		this.onScreen = 1;
		this.timeLeft = 150;
		ice.cd = 0;
		ice.shoot();
	}
	else{
		return 0;
	}
	}
	
};
// Gust and Heal: Heals user by 1 and casts Gust
var airearth = {
	cd: 0,
	tick: function(){
		if(this.cd > 0){
			this.cd-=1;
		}
	},
	shoot: function(){
		if(this.cd == 0){
			Wind.play();
			this.cd = 450;
			air.cd = 0;
			earth.cd = 0;
			air.shoot();
			earth.shoot();
			air.cd = 0;
			earth.cd = 0;
		}
		else{
			return 0;
		}
	}	
};
// Thunderstorm: Creates a Thunderstorm on the map
var airlightning = {
	timeLeft: 0,
	vwidth: 32,
	vheight: 800,
	hwidth: 800,
	hheight: 32,
	hx: 400,
	hy: -2000,
	vx: -2000,
	vy: 288,
	cd: 0,
	onScreen: 0,
	LonScreen: 0,
	frame: 0,
	
	draw: function(){
		if(this.LonScreen == 1){
			Thunder.play();
			ctx.drawImage(hlightning, this.hx - this.hwidth/2, this.hy - this.hheight/2);
			ctx.drawImage(vlightning, this.vx-this.vwidth/2, this.vy - this.vheight/2);
				this.LonScreen = 0;
		}
	},
	effect: function(){
		this.frame++;
		if(this.cd > 0){
			this.cd-=1;
		}
		if(spell != "Thunderstorm"){
			this.onScreen = 0;
		}
		if(this.onScreen == 1 && spell == "Thunderstorm"){
			if(this.frame/30 == Math.round(this.frame/30)){
				this.LonScreen = 1;
				this.timeLeft-=1;
				var STRIKEx = Math.floor(Math.random() * 736) + 64;
				var STRIKEy = Math.floor(Math.random() * 512) + 64;
				this.hy = STRIKEy;
				this.vx = STRIKEx;
			}
			else{
				this.vx = -2000;
				this.hy = -2000;
			}
			for (E in Enemies){
				if(Enemies[E].x >= this.vx && Enemies[E].x <= this.vx + this.vwidth && Enemies[E].onScreen == 1){
					onHit(Enemies[E], Enemies[E].rp);
				}
				if(Sorceror.x >= this.vx && Sorceror.x <= this.vx + this.vwidth && Sorceror.onScreen == 1){
					Sorceror.onHit();
				}
				if(Spawner.x >= this.vx && Spawner.x <= this.vx + this.vwidth && Spawner.onScreen == 1){
					Spawner.onHit();
				}
			}			
			for (E in Enemies){
				if(Enemies[E].y <= this.hy + this.hheight && Enemies[E].y >= this.hy && Enemies[E].onScreen == 1){
					onHit(Enemies[E], Enemies[E].rp);
				}
				if(Sorceror.y <= this.hy + this.hheight && Sorceror.y >= this.hy && Sorceror.onScreen == 1){
					Sorceror.onHit();
				}
				if(Spawner.y <= this.hy + this.hheight && Spawner.y >= this.hy && Spawner.onScreen == 1){
					Spawner.onHit();
				}
			}			
		}
	},
	// Spawn
	shoot: function(){
	if(this.cd == 0){
		this.cd = 60;
		this.onScreen = 1;
		this.timeLeft = 360;
		this.frame = 0;
		air.cd = 0;
		air.shoot();
		air.cd = 0;
	}
	else{
		return 0;
	}
	}
	
};
//-------------------------------------------------------------- Enemy Spells -------------------------------------------------------//
// sIce: Slows player down by halving speed
var sIce = {
	color: "00CCFF",
	timeLeft: 0,
	width: 32,
	height: 32,
	x: -100,
	y: -200,
	frame: 0,
	onScreen: 0,
	end: false,
	
	draw: function(){
		if(this.onScreen == 1){
			ctx.globalAlpha = 0.25;
			ctx.fillStyle = this.color;
			ctx.fillRect(this.x - this.width / 2, this.y - this.height / 2,	this.width, this.height);
			ctx.globalAlpha = 1;
		}
	},
	
	move: function(){
		if(this.frame == 150){
			this.width = 32;
			this.height = 32;
			this.x = -200;
			this.y = -100;
			this.onScreen = 0;
			this.end = true;
		}
		else{
			this.width = this.width + (32*this.frame);
			this.height = this.height + (32*this.frame);
			this.frame++;
		}
	},
	// Slow all enemies in radius
	effect: function(){
		if(this.onScreen == 1){
			player.speed = 4;
		}
		else if(this.end == true){
			player.speed = 8;
			this.frame = 0;
			this.end = false;
		}
	},
		
	// Spawn
	shoot: function(){
		Frozen.play();
		this.height = 32;
		this.width = 32;
		this.x = Sorceror.x;
		this.y = Sorceror.y;
		this.frame = 0;
		this.onScreen = 1;
	}
};

// sFire: Damages player if in radius
var sFire = {
	color: "FF6600",
	x: -100,
	y: -200,
	timeLeft: 0,
	width: 32,
	height: 32,
	frame: 0,
	onScreen: 0,
	
	draw: function(){
		if(this.onScreen == 1){
			ctx.globalAlpha = 0.5;
			ctx.fillStyle = this.color;
			ctx.fillRect(this.x - this.width / 2,
			this.y - this.height / 2,
			this.width, this.height);
			ctx.globalAlpha = 1;
		}
	},
	
	move: function(){
		if(this.frame == 10){
			this.x = -100;
			this.y = -200;
			this.width = 32;
			this.height = 32;
			this.onScreen = 0;
		}
		else{
			this.width = 32 + (32*this.frame);
			this.height = 32 + (32*this.frame);
			this.frame++;
			if(contained(player, this)){
				if(hptimer <= 0){
					player.hp-=1;
					onDmg.play();
					hptimer = 30;
				}
			}
		}
	},
		
	// Spawn
	shoot: function(){
		Explosion.play();
		this.height = 32;
		this.width = 32;
		this.x = Sorceror.x;
		this.y = Sorceror.y;
		this.frame = 0;
		this.onScreen = 1;
	}
};

// sLightning: Creates a small web of lightning
var sLightning = {
	timeLeft: 0,
	vwidth: 32,
	vheight: 800,
	hwidth: 800,
	hheight: 32,
	hx: 400,
	hy: -2000,
	vx: -2000,
	vy: 288,
	onScreen: 0,
	
	draw: function(){
		if(this.onScreen == 1){
			ctx.drawImage(shlightning, this.hx - this.hwidth/2, this.hy);
			if(this.vx != -2000){
				ctx.drawImage(svlightning, this.vx, this.vy - this.vheight/2);
			}
		}
	},
	effect: function(){
		if(this.onScreen == 1){
			if(this.timeLeft <= 0){
				this.onScreen = 0;
			}
			else{
				this.timeLeft-=1;
			}
			if(this.vx != -2000){
				if(player.x >= this.vx && player.x <= this.vx + this.vwidth){
					if(hptimer <= 0){
						player.hp-=1;
						onDmg.play();
						hptimer = 30;
					}
				}
			}
			if(this.hy != -2000){
				if(player.y <= this.hy + this.hheight && player.y >= this.hy){
					if(this.vx == -2000){
						this.vx = player.x
					}
					if(hptimer <= 0){
						player.hp-=1;
						onDmg.play();
						hptimer = 30;
					}
				}			
			}
		}
	},
	// Spawn
	shoot: function(){
		Thunder.play();
		this.hx = 400;
		this.hy = Sorceror.y;
		this.onScreen = 1;
		this.timeLeft = 150;
	}
};

//--------------------------------------------------------------- Spell Array -------------------------------------------------------//
var Weapons = {1: bullet, 2: bullet2, 3: bullet3, 4: bullet4, 5: tinybullet, 6: fire, 7: fire2, 8: ice, 9: ice2, 10: fireice, 
				11: earth, 12: earth2, 13: lightning, 14: lightning2, 15: icelightning, 16: firelightning, 17: sFire, 18: sIce, 19: sLightning,
				20: air, 21: air2, 22: airfire, 23: airice, 24: airlightning};