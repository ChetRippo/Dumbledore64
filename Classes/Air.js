// Air: Blows back all enemies in front of player
var air = {
	color: "E8E8E8",
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
			ctx.globalAlpha = 0.5;
			ctx.fillStyle = this.color;
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
			ctx.globalAlpha = 1;
		}
	},
	effect: function(){
		if(this.cd > 0){
			this.cd-=1;
		}
		if(this.frame == 5){
			air12.x = this.ox;
			air12.y = this.oy;
			air12.shoot();
		}
		if(this.frame == 10){
			air13.x = this.ox;
			air13.y = this.oy;
			air13.shoot();
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
			for (E in AllEnemies){
				if(collision(AllEnemies[E].dir, AllEnemies[E], this)){
					if(AllEnemies[E].dir == "W"){
						AllEnemies[E].dir = "S";
					}
					else if(AllEnemies[E].dir == "S"){
						AllEnemies[E].dir = "W";
					}
					else if(AllEnemies[E].dir == "A"){
						AllEnemies[E].dir = "D";
					}
					else if(AllEnemies[E].dir == "D"){
						AllEnemies[E].dir = "A";
					}
					else if(AllEnemies[E].dir == "WD"){
						AllEnemies[E].dir = "AS";
					}
					else if(AllEnemies[E].dir == "AS"){
						AllEnemies[E].dir = "WD";
					}
					else if(AllEnemies[E].dir == "WA"){
						AllEnemies[E].dir = "SD";
					}
					else if(AllEnemies[E].dir == "SD"){
						AllEnemies[E].dir = "WD";
					}
					AllEnemies[E].dirct = 15;
					AllEnemies[E].speed = 32;
				}
			}
		}
	},
	// Spawn
	shoot: function(){
	if(this.cd == 0){
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
// Air: Blows back all enemies in front of player
var air12 = {
	color: "E8E8E8",
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
			ctx.globalAlpha = 0.5;
			ctx.fillStyle = this.color;
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
			ctx.globalAlpha = 1;
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
			for (E in AllEnemies){
				if(collision(AllEnemies[E].dir, AllEnemies[E], this)){
					if(AllEnemies[E].dir == "W"){
						AllEnemies[E].dir = "S";
					}
					else if(AllEnemies[E].dir == "S"){
						AllEnemies[E].dir = "W";
					}
					else if(AllEnemies[E].dir == "A"){
						AllEnemies[E].dir = "D";
					}
					else if(AllEnemies[E].dir == "D"){
						AllEnemies[E].dir = "A";
					}
					else if(AllEnemies[E].dir == "WD"){
						AllEnemies[E].dir = "AS";
					}
					else if(AllEnemies[E].dir == "AS"){
						AllEnemies[E].dir = "WD";
					}
					else if(AllEnemies[E].dir == "WA"){
						AllEnemies[E].dir = "SD";
					}
					else if(AllEnemies[E].dir == "SD"){
						AllEnemies[E].dir = "WD";
					}
					AllEnemies[E].dirct = 15;
					AllEnemies[E].speed = 32;
				}
			}
		}
	},
	// Spawn
	shoot: function(){
		this.width = 32;
		this.dir = air.dir;
		this.frame = 0;
		this.onScreen = 1;
	}
};

// Air: Blows back all enemies in front of player
var air13 = {
	color: "E8E8E8",
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
			ctx.globalAlpha = 0.5;
			ctx.fillStyle = this.color;
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
			ctx.globalAlpha = 1;
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
			for (E in AllEnemies){
				if(collision(AllEnemies[E].dir, AllEnemies[E], this)){
					if(AllEnemies[E].dir == "W"){
						AllEnemies[E].dir = "S";
					}
					else if(AllEnemies[E].dir == "S"){
						AllEnemies[E].dir = "W";
					}
					else if(AllEnemies[E].dir == "A"){
						AllEnemies[E].dir = "D";
					}
					else if(AllEnemies[E].dir == "D"){
						AllEnemies[E].dir = "A";
					}
					else if(AllEnemies[E].dir == "WD"){
						AllEnemies[E].dir = "AS";
					}
					else if(AllEnemies[E].dir == "AS"){
						AllEnemies[E].dir = "WD";
					}
					else if(AllEnemies[E].dir == "WA"){
						AllEnemies[E].dir = "SD";
					}
					else if(AllEnemies[E].dir == "SD"){
						AllEnemies[E].dir = "WD";
					}
					AllEnemies[E].dirct = 15;
					AllEnemies[E].speed = 32;
				}
			}
		}
	},
	// Spawn
	shoot: function(){
		this.width = 32;
		this.dir = air.dir;
		this.frame = 0;
		this.onScreen = 1;
	}
};

// air2: Blow away all nearby enemies
var air2 = {
	cd: 0,
	tick: function(){
		if(this.cd > 0){
			this.cd-=1;
		}
		else{
			this.cd = 0;
		}
	},
	// Spawn
	shoot: function(){
		if(this.cd == 0){
			air2right.shoot();
			air2left.shoot();
			air2up.shoot();
			air2down.shoot();
			this.cd = 150;
		}
	}
};
var air2right = {
	color: "E8E8E8",
	x: -100,
	y: -200,
	dir: "D",
	ox: -100,
	oy: -200,
	width: 32,
	height: 8,
	hwidth: 8,
	hheight: 32,
	frame: 0,
	speed: 16,
	onScreen: 0,
	
	draw: function(){
		if(this.onScreen == 1){
			ctx.globalAlpha = 0.5;
			ctx.fillStyle = this.color;
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
			ctx.globalAlpha = 1;
		}
	},
	effect: function(){
		if(this.frame == 5){
			air2right2.x = this.ox;
			air2right2.y = this.oy;
			air2right2.shoot();
		}
		if(this.frame == 10){
			air2right3.x = this.ox;
			air2right3.y = this.oy;
			air2right3.shoot();
		}
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
			for (E in AllEnemies){
				if(collision(AllEnemies[E].dir, AllEnemies[E], this)){
					if(AllEnemies[E].dir == "W"){
						AllEnemies[E].dir = "S";
					}
					else if(AllEnemies[E].dir == "S"){
						AllEnemies[E].dir = "W";
					}
					else if(AllEnemies[E].dir == "A"){
						AllEnemies[E].dir = "D";
					}
					else if(AllEnemies[E].dir == "D"){
						AllEnemies[E].dir = "A";
					}
					else if(AllEnemies[E].dir == "WD"){
						AllEnemies[E].dir = "AS";
					}
					else if(AllEnemies[E].dir == "AS"){
						AllEnemies[E].dir = "WD";
					}
					else if(AllEnemies[E].dir == "WA"){
						AllEnemies[E].dir = "SD";
					}
					else if(AllEnemies[E].dir == "SD"){
						AllEnemies[E].dir = "WD";
					}
					AllEnemies[E].dirct = 15;
					AllEnemies[E].speed = 32;
				}
			}
		}
	},
	// Spawn
	shoot: function(){
		this.width = 32;
		this.x = player.x;
		this.y = player.y;
		this.ox = player.x;
		this.oy = player.y;
		this.frame = 0;
		this.onScreen = 1;
	}
};
// Air: Blows back all enemies in front of player
var air2right2 = {
	color: "E8E8E8",
	x: -100,
	y: -200,
	width: 32,
	height: 8,
	hwidth: 8,
	hheight: 32,
	dir: "D",
	frame: 0,
	speed: 16,
	onScreen: 0,
	
	draw: function(){
		if(this.onScreen == 1){
			ctx.globalAlpha = 0.5;
			ctx.fillStyle = this.color;
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
			ctx.globalAlpha = 1;
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
			for (E in AllEnemies){
				if(collision(AllEnemies[E].dir, AllEnemies[E], this)){
					if(AllEnemies[E].dir == "W"){
						AllEnemies[E].dir = "S";
					}
					else if(AllEnemies[E].dir == "S"){
						AllEnemies[E].dir = "W";
					}
					else if(AllEnemies[E].dir == "A"){
						AllEnemies[E].dir = "D";
					}
					else if(AllEnemies[E].dir == "D"){
						AllEnemies[E].dir = "A";
					}
					else if(AllEnemies[E].dir == "WD"){
						AllEnemies[E].dir = "AS";
					}
					else if(AllEnemies[E].dir == "AS"){
						AllEnemies[E].dir = "WD";
					}
					else if(AllEnemies[E].dir == "WA"){
						AllEnemies[E].dir = "SD";
					}
					else if(AllEnemies[E].dir == "SD"){
						AllEnemies[E].dir = "WD";
					}
					AllEnemies[E].dirct = 15;
					AllEnemies[E].speed = 32;
				}
			}
		}
	},
	// Spawn
	shoot: function(){
		this.width = 32;
		this.frame = 0;
		this.onScreen = 1;
	}
};

// Air: Blows back all enemies in front of player
var air2right3 = {
	color: "E8E8E8",
	x: -100,
	y: -200,
	width: 32,
	height: 8,
	hwidth: 8,
	dir: "D",
	hheight: 32,
	frame: 0,
	speed: 16,
	onScreen: 0,
	
	draw: function(){
		if(this.onScreen == 1){
			ctx.globalAlpha = 0.5;
			ctx.fillStyle = this.color;
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
			ctx.globalAlpha = 1;
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
			for (E in AllEnemies){
				if(collision(AllEnemies[E].dir, AllEnemies[E], this)){
					if(AllEnemies[E].dir == "W"){
						AllEnemies[E].dir = "S";
					}
					else if(AllEnemies[E].dir == "S"){
						AllEnemies[E].dir = "W";
					}
					else if(AllEnemies[E].dir == "A"){
						AllEnemies[E].dir = "D";
					}
					else if(AllEnemies[E].dir == "D"){
						AllEnemies[E].dir = "A";
					}
					else if(AllEnemies[E].dir == "WD"){
						AllEnemies[E].dir = "AS";
					}
					else if(AllEnemies[E].dir == "AS"){
						AllEnemies[E].dir = "WD";
					}
					else if(AllEnemies[E].dir == "WA"){
						AllEnemies[E].dir = "SD";
					}
					else if(AllEnemies[E].dir == "SD"){
						AllEnemies[E].dir = "WD";
					}
					AllEnemies[E].dirct = 15;
					AllEnemies[E].speed = 32;
				}
			}
		}
	},
	// Spawn
	shoot: function(){
		this.width = 32;
		this.frame = 0;
		this.onScreen = 1;
	}
};
// Air: Blows back all enemies in front of player
var air2left = {
	color: "E8E8E8",
	x: -100,
	y: -200,
	ox: -100,
	oy: -200,
	width: 32,
	height: 8,
	hwidth: 8,
	hheight: 32,
	dir: "A",
	frame: 0,
	cd: 0,
	speed: 16,
	onScreen: 0,
	
	draw: function(){
		if(this.onScreen == 1){
			ctx.globalAlpha = 0.5;
			ctx.fillStyle = this.color;
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
			ctx.globalAlpha = 1;
		}
	},
	effect: function(){
		if(this.frame == 5){
			air2left2.x = this.ox;
			air2left2.y = this.oy;
			air2left2.shoot();
		}
		if(this.frame == 10){
			air2left3.x = this.ox;
			air2left3.y = this.oy;
			air2left3.shoot();
		}
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
			for (E in AllEnemies){
				if(collision(AllEnemies[E].dir, AllEnemies[E], this)){
					if(AllEnemies[E].dir == "W"){
						AllEnemies[E].dir = "S";
					}
					else if(AllEnemies[E].dir == "S"){
						AllEnemies[E].dir = "W";
					}
					else if(AllEnemies[E].dir == "A"){
						AllEnemies[E].dir = "D";
					}
					else if(AllEnemies[E].dir == "D"){
						AllEnemies[E].dir = "A";
					}
					else if(AllEnemies[E].dir == "WD"){
						AllEnemies[E].dir = "AS";
					}
					else if(AllEnemies[E].dir == "AS"){
						AllEnemies[E].dir = "WD";
					}
					else if(AllEnemies[E].dir == "WA"){
						AllEnemies[E].dir = "SD";
					}
					else if(AllEnemies[E].dir == "SD"){
						AllEnemies[E].dir = "WD";
					}
					AllEnemies[E].dirct = 15;
					AllEnemies[E].speed = 32;
				}
			}
		}
	},
	// Spawn
	shoot: function(){
		this.width = 32;
		this.x = player.x;
		this.y = player.y;
		this.ox = player.x;
		this.oy = player.y;
		this.frame = 0;
		this.onScreen = 1;
	}
};
// Air: Blows back all enemies in front of player
var air2left2 = {
	color: "E8E8E8",
	x: -100,
	y: -200,
	width: 32,
	height: 8,
	hwidth: 8,
	hheight: 32,
	dir: "A",
	frame: 0,
	speed: 16,
	onScreen: 0,
	
	draw: function(){
		if(this.onScreen == 1){
			ctx.globalAlpha = 0.5;
			ctx.fillStyle = this.color;
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
			ctx.globalAlpha = 1;
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
			this.frame = 0;
			this.hheight = 32;
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
			for (E in AllEnemies){
				if(collision(AllEnemies[E].dir, AllEnemies[E], this)){
					if(AllEnemies[E].dir == "W"){
						AllEnemies[E].dir = "S";
					}
					else if(AllEnemies[E].dir == "S"){
						AllEnemies[E].dir = "W";
					}
					else if(AllEnemies[E].dir == "A"){
						AllEnemies[E].dir = "D";
					}
					else if(AllEnemies[E].dir == "D"){
						AllEnemies[E].dir = "A";
					}
					else if(AllEnemies[E].dir == "WD"){
						AllEnemies[E].dir = "AS";
					}
					else if(AllEnemies[E].dir == "AS"){
						AllEnemies[E].dir = "WD";
					}
					else if(AllEnemies[E].dir == "WA"){
						AllEnemies[E].dir = "SD";
					}
					else if(AllEnemies[E].dir == "SD"){
						AllEnemies[E].dir = "WD";
					}
					AllEnemies[E].dirct = 15;
					AllEnemies[E].speed = 32;
				}
			}
		}
	},
	// Spawn
	shoot: function(){
		this.width = 32;
		this.frame = 0;
		this.onScreen = 1;
	}
};

// Air: Blows back all enemies in front of player
var air2left3 = {
	color: "E8E8E8",
	x: -100,
	y: -200,
	width: 32,
	height: 8,
	hwidth: 8,
	hheight: 32,
	dir: "A",
	frame: 0,
	speed: 16,
	onScreen: 0,
	
	draw: function(){
		if(this.onScreen == 1){
			ctx.globalAlpha = 0.5;
			ctx.fillStyle = this.color;
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
			ctx.globalAlpha = 1;
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
			this.frame = 0;
			this.hheight = 32;
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
			for (E in AllEnemies){
				if(collision(AllEnemies[E].dir, AllEnemies[E], this)){
					if(AllEnemies[E].dir == "W"){
						AllEnemies[E].dir = "S";
					}
					else if(AllEnemies[E].dir == "S"){
						AllEnemies[E].dir = "W";
					}
					else if(AllEnemies[E].dir == "A"){
						AllEnemies[E].dir = "D";
					}
					else if(AllEnemies[E].dir == "D"){
						AllEnemies[E].dir = "A";
					}
					else if(AllEnemies[E].dir == "WD"){
						AllEnemies[E].dir = "AS";
					}
					else if(AllEnemies[E].dir == "AS"){
						AllEnemies[E].dir = "WD";
					}
					else if(AllEnemies[E].dir == "WA"){
						AllEnemies[E].dir = "SD";
					}
					else if(AllEnemies[E].dir == "SD"){
						AllEnemies[E].dir = "WD";
					}
					AllEnemies[E].dirct = 15;
					AllEnemies[E].speed = 32;
				}
			}
		}
	},
	// Spawn
	shoot: function(){
		this.width = 32;
		this.frame = 0;
		this.onScreen = 1;
	}
};
// Air: Blows back all enemies in front of player
var air2down = {
	color: "E8E8E8",
	x: -100,
	y: -200,
	ox: -100,
	oy: -200,
	width: 32,
	height: 8,
	hwidth: 8,
	hheight: 32,
	dir: "S",
	frame: 0,
	cd: 0,
	speed: 16,
	onScreen: 0,
	
	draw: function(){
		if(this.onScreen == 1){
			ctx.globalAlpha = 0.5;
			ctx.fillStyle = this.color;
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
			ctx.globalAlpha = 1;
		}
	},
	effect: function(){
		if(this.frame == 5){
			air2down2.x = this.ox;
			air2down2.y = this.oy;
			air2down2.shoot();
		}
		if(this.frame == 10){
			air2down3.x = this.ox;
			air2down3.y = this.oy;
			air2down3.shoot();
		}
		if(this.frame == 30){
			this.x = -100;
			this.y = -200;
			this.width = 32;
			this.onScreen = 0;
			this.height = 8;
			this.frame = 0;
			this.hwidth = 8;
			this.hheight = 32;
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
			for (E in AllEnemies){
				if(collision(AllEnemies[E].dir, AllEnemies[E], this)){
					if(AllEnemies[E].dir == "W"){
						AllEnemies[E].dir = "S";
					}
					else if(AllEnemies[E].dir == "S"){
						AllEnemies[E].dir = "W";
					}
					else if(AllEnemies[E].dir == "A"){
						AllEnemies[E].dir = "D";
					}
					else if(AllEnemies[E].dir == "D"){
						AllEnemies[E].dir = "A";
					}
					else if(AllEnemies[E].dir == "WD"){
						AllEnemies[E].dir = "AS";
					}
					else if(AllEnemies[E].dir == "AS"){
						AllEnemies[E].dir = "WD";
					}
					else if(AllEnemies[E].dir == "WA"){
						AllEnemies[E].dir = "SD";
					}
					else if(AllEnemies[E].dir == "SD"){
						AllEnemies[E].dir = "WD";
					}
					AllEnemies[E].dirct = 15;
					AllEnemies[E].speed = 32;
				}
			}
		}
	},
	// Spawn
	shoot: function(){
		this.width = 32;
		this.x = player.x;
		this.y = player.y;
		this.ox = player.x;
		this.oy = player.y;
		this.frame = 0;
		this.onScreen = 1;
	}
};
// Air: Blows back all enemies in front of player
var air2down2 = {
	color: "E8E8E8",
	x: -100,
	y: -200,
	width: 32,
	height: 8,
	hwidth: 8,
	hheight: 32,
	dir: "S",
	frame: 0,
	speed: 16,
	onScreen: 0,
	
	draw: function(){
		if(this.onScreen == 1){
			ctx.globalAlpha = 0.5;
			ctx.fillStyle = this.color;
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
			ctx.globalAlpha = 1;
		}
	},
	effect: function(){
		if(this.frame == 30){
			this.x = -100;
			this.y = -200;
			this.width = 32;
			this.onScreen = 0;
			this.height = 8;
			this.frame = 0;
			this.hwidth = 8;
			this.hheight = 32;
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
			for (E in AllEnemies){
				if(collision(AllEnemies[E].dir, AllEnemies[E], this)){
					if(AllEnemies[E].dir == "W"){
						AllEnemies[E].dir = "S";
					}
					else if(AllEnemies[E].dir == "S"){
						AllEnemies[E].dir = "W";
					}
					else if(AllEnemies[E].dir == "A"){
						AllEnemies[E].dir = "D";
					}
					else if(AllEnemies[E].dir == "D"){
						AllEnemies[E].dir = "A";
					}
					else if(AllEnemies[E].dir == "WD"){
						AllEnemies[E].dir = "AS";
					}
					else if(AllEnemies[E].dir == "AS"){
						AllEnemies[E].dir = "WD";
					}
					else if(AllEnemies[E].dir == "WA"){
						AllEnemies[E].dir = "SD";
					}
					else if(AllEnemies[E].dir == "SD"){
						AllEnemies[E].dir = "WD";
					}
					AllEnemies[E].dirct = 15;
					AllEnemies[E].speed = 32;
				}
			}
		}
	},
	// Spawn
	shoot: function(){
		this.width = 32;
		this.frame = 0;
		this.onScreen = 1;
	}
};

// Air: Blows back all enemies in front of player
var air2down3 = {
	color: "E8E8E8",
	x: -100,
	y: -200,
	width: 32,
	height: 8,
	hwidth: 8,
	hheight: 32,
	dir: "S",
	frame: 0,
	speed: 16,
	onScreen: 0,
	
	draw: function(){
		if(this.onScreen == 1){
			ctx.globalAlpha = 0.5;
			ctx.fillStyle = this.color;
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
			ctx.globalAlpha = 1;
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
			this.frame = 0;
			this.hheight = 32;
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
			for (E in AllEnemies){
				if(collision(AllEnemies[E].dir, AllEnemies[E], this)){
					if(AllEnemies[E].dir == "W"){
						AllEnemies[E].dir = "S";
					}
					else if(AllEnemies[E].dir == "S"){
						AllEnemies[E].dir = "W";
					}
					else if(AllEnemies[E].dir == "A"){
						AllEnemies[E].dir = "D";
					}
					else if(AllEnemies[E].dir == "D"){
						AllEnemies[E].dir = "A";
					}
					else if(AllEnemies[E].dir == "WD"){
						AllEnemies[E].dir = "AS";
					}
					else if(AllEnemies[E].dir == "AS"){
						AllEnemies[E].dir = "WD";
					}
					else if(AllEnemies[E].dir == "WA"){
						AllEnemies[E].dir = "SD";
					}
					else if(AllEnemies[E].dir == "SD"){
						AllEnemies[E].dir = "WD";
					}
					AllEnemies[E].dirct = 15;
					AllEnemies[E].speed = 32;
				}
			}
		}
	},
	// Spawn
	shoot: function(){
		this.width = 32;
		this.frame = 0;
		this.onScreen = 1;
	}
};
// Air: Blows back all enemies in front of player
var air2up = {
	color: "E8E8E8",
	x: -100,
	y: -200,
	ox: -100,
	oy: -200,
	width: 32,
	height: 8,
	hwidth: 8,
	hheight: 32,
	dir: "W",
	frame: 0,
	cd: 0,
	speed: 16,
	onScreen: 0,
	
	draw: function(){
		if(this.onScreen == 1){
			ctx.globalAlpha = 0.5;
			ctx.fillStyle = this.color;
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
			ctx.globalAlpha = 1;
		}
	},
	effect: function(){
		if(this.frame == 5){
			air2up2.x = this.ox;
			air2up2.y = this.oy;
			air2up2.shoot();
		}
		if(this.frame == 10){
			air2up3.x = this.ox;
			air2up3.y = this.oy;
			air2up3.shoot();
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
			for (E in AllEnemies){
				if(collision(AllEnemies[E].dir, AllEnemies[E], this)){
					if(AllEnemies[E].dir == "W"){
						AllEnemies[E].dir = "S";
					}
					else if(AllEnemies[E].dir == "S"){
						AllEnemies[E].dir = "W";
					}
					else if(AllEnemies[E].dir == "A"){
						AllEnemies[E].dir = "D";
					}
					else if(AllEnemies[E].dir == "D"){
						AllEnemies[E].dir = "A";
					}
					else if(AllEnemies[E].dir == "WD"){
						AllEnemies[E].dir = "AS";
					}
					else if(AllEnemies[E].dir == "AS"){
						AllEnemies[E].dir = "WD";
					}
					else if(AllEnemies[E].dir == "WA"){
						AllEnemies[E].dir = "SD";
					}
					else if(AllEnemies[E].dir == "SD"){
						AllEnemies[E].dir = "WD";
					}
					AllEnemies[E].dirct = 15;
					AllEnemies[E].speed = 32;
				}
			}
		}
	},
	// Spawn
	shoot: function(){
		this.width = 32;
		this.x = player.x;
		this.y = player.y;
		this.ox = player.x;
		this.oy = player.y;
		this.frame = 0;
		this.onScreen = 1;
	}
};
// Air: Blows back all enemies in front of player
var air2up2 = {
	color: "E8E8E8",
	x: -100,
	y: -200,
	width: 32,
	height: 8,
	hwidth: 8,
	hheight: 32,
	dir: "W",
	frame: 0,
	speed: 16,
	onScreen: 0,
	
	draw: function(){
		if(this.onScreen == 1){
			ctx.globalAlpha = 0.5;
			ctx.fillStyle = this.color;
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
			ctx.globalAlpha = 1;
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
			for (E in AllEnemies){
				if(collision(AllEnemies[E].dir, AllEnemies[E], this)){
					if(AllEnemies[E].dir == "W"){
						AllEnemies[E].dir = "S";
					}
					else if(AllEnemies[E].dir == "S"){
						AllEnemies[E].dir = "W";
					}
					else if(AllEnemies[E].dir == "A"){
						AllEnemies[E].dir = "D";
					}
					else if(AllEnemies[E].dir == "D"){
						AllEnemies[E].dir = "A";
					}
					else if(AllEnemies[E].dir == "WD"){
						AllEnemies[E].dir = "AS";
					}
					else if(AllEnemies[E].dir == "AS"){
						AllEnemies[E].dir = "WD";
					}
					else if(AllEnemies[E].dir == "WA"){
						AllEnemies[E].dir = "SD";
					}
					else if(AllEnemies[E].dir == "SD"){
						AllEnemies[E].dir = "WD";
					}
					AllEnemies[E].dirct = 15;
					AllEnemies[E].speed = 32;
				}
			}
		}
	},
	// Spawn
	shoot: function(){
		this.width = 32;
		this.frame = 0;
		this.onScreen = 1;
	}
};

// Air: Blows back all enemies in front of player
var air2up3 = {
	color: "E8E8E8",
	x: -100,
	y: -200,
	width: 32,
	height: 8,
	hwidth: 8,
	hheight: 32,
	dir: "W",
	frame: 0,
	speed: 16,
	onScreen: 0,
	
	draw: function(){
		if(this.onScreen == 1){
			ctx.globalAlpha = 0.5;
			ctx.fillStyle = this.color;
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
			ctx.globalAlpha = 1;
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
			this.frame = 0;
			this.hheight = 32;
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
			for (E in AllEnemies){
				if(collision(AllEnemies[E].dir, AllEnemies[E], this)){
					if(AllEnemies[E].dir == "W"){
						AllEnemies[E].dir = "S";
					}
					else if(AllEnemies[E].dir == "S"){
						AllEnemies[E].dir = "W";
					}
					else if(AllEnemies[E].dir == "A"){
						AllEnemies[E].dir = "D";
					}
					else if(AllEnemies[E].dir == "D"){
						AllEnemies[E].dir = "A";
					}
					else if(AllEnemies[E].dir == "WD"){
						AllEnemies[E].dir = "AS";
					}
					else if(AllEnemies[E].dir == "AS"){
						AllEnemies[E].dir = "WD";
					}
					else if(AllEnemies[E].dir == "WA"){
						AllEnemies[E].dir = "SD";
					}
					else if(AllEnemies[E].dir == "SD"){
						AllEnemies[E].dir = "WD";
					}
					AllEnemies[E].dirct = 15;
					AllEnemies[E].speed = 32;
				}
			}
		}
	},
	// Spawn
	shoot: function(){
		this.width = 32;
		this.frame = 0;
		this.onScreen = 1;
	}
};