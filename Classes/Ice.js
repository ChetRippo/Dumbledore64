// Ice: Slows all enemies by halving their speed
var ice = {
	color: "00CCFF",
	timeLeft: 0,
	width: 32,
	height: 32,
	x: -100,
	y: -200,
	frame: 0,
	cd: 0,
	onScreen: 0,
	end: false,
	cast: 0,
	used: 0,
	
	draw: function(){
		if(this.onScreen == 1 && this.cast ==0){
			if(this.used == 0){
				Frozen.play();
				this.used = 1;
			}
			ctx.globalAlpha = 0.15;
			ctx.fillStyle = this.color;
			ctx.fillRect(this.x - this.width / 2, this.y - this.height / 2,	this.width, this.height);
		}
	},
	
	move: function(){
		if(this.cd > 0){
			this.cd-=1;
		}
		if(this.cast > 0){
			this.cast-=1;
		}
		if(this.frame == 150 && this.onScreen == 1){
			this.width = 32;
			this.height = 32;
			this.x = -200;
			this.y = -100;
			this.onScreen = 0;
			this.end = true;
			ctx.globalAlpha = 1;
		}
		else if(this.onScreen == 1 && this.cast == 0){
			this.width = this.width + (32*this.frame);
			this.height = this.height + (32*this.frame);
			this.frame++;
		}
	},
	// Slow all enemies in radius
	effect: function(){
		if(this.onScreen == 1 && this.cast == 0){
			for (E in AllEnemies){
				AllEnemies[E].speed = AllEnemies[E].speed2;
			}
		}
		else if(this.end == true){
			for (E in AllEnemies){
				AllEnemies[E].speed = AllEnemies[E].speed*2;
			}
			this.frame = 0;
			this.end = false;
		}
	},
		
	// Spawn
	shoot: function(){
	if(this.cd == 0){
		this.height = 32;
		this.width = 32;
		this.x = player.x;
		this.y = player.y;
		this.cd = 450;
		this.frame = 0;
		this.onScreen = 1;
		this.used = 0;
	}
	}
};

// Ice2: Slows all enemies by halving their speed
var ice2 = {
	color: "00CCFF",
	timeLeft: 0,
	width: 32,
	height: 32,
	x: -100,
	y: -200,
	frame: 0,
	cd: 0,
	onScreen: 0,
	end: false,
	
	draw: function(){
		if(this.onScreen == 1){
			ctx.globalAlpha = 0.15;
			ctx.fillStyle = this.color;
			ctx.fillRect(this.x - this.width / 2, this.y - this.height / 2,	this.width, this.height);
		}
	},
	
	move: function(){
		if(this.cd > 0){
			this.cd-=1;
		}
		if(this.frame == 300 && this.onScreen == 1){
			this.width = 32;
			this.height = 32;
			this.x = -200;
			this.y = -100;
			this.onScreen = 0;
			this.end = true;
			ctx.globalAlpha = 1;
		}
		else if(this.onScreen == 1){
			this.width = this.width + (32*this.frame);
			this.height = this.height + (32*this.frame);
			this.frame++;
		}
	},
	// Slow all enemies in radius
	effect: function(){
		if(this.onScreen == 1){
			for (E in AllEnemies){
				AllEnemies[E].speed = AllEnemies[E].speed2;
			}
		}
		else if(this.end == true){
			for (E in AllEnemies){
				AllEnemies[E].speed = AllEnemies[E].speed*2;
			}
			this.frame = 0;
			this.end = false;
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
		this.cd = 450;
		this.frame = 0;
		this.onScreen = 1;
	}
	else{
		return 0;
	}
	}
	
};
//----------------------------------------------------------- Mystic Ice Shots ------------------------------------------------------//
var Mice = {
	color: "00CCFF",
	timeLeft: 0,
	width: 32,
	height: 32,
	x: -100,
	y: -200,
	frame: 0,
	onScreen: 0,
	
	draw: function(){
		if(this.onScreen == 1){
			ctx.globalAlpha = 0.25;
			ctx.fillStyle = this.color;
			ctx.fillRect(this.x - this.width / 2, this.y - this.height / 2,	this.width, this.height);
			ctx.globalAlpha = 1;
		}
	},
	
	move: function(){
		if(this.frame <= 10 && this.onScreen == 1){
			this.width = this.width + 2*this.frame;
			this.height = this.height + 2*this.frame;
			this.frame++;
			for (E in AllEnemies){
				if(collision(AllEnemies[E].dir, AllEnemies[E], this) || contained(this, AllEnemies[E])){
					AllEnemies[E].speed = AllEnemies[E].speed2;
				}
			}
		}
		else if(this.frame < 45 && this.onScreen == 1){
			this.frame++;
			for (E in AllEnemies){
				if(collision(AllEnemies[E].dir, AllEnemies[E], this) || contained(this, AllEnemies[E])){
					AllEnemies[E].speed = AllEnemies[E].speed2;
				}
			}
		}
		if(this.frame >= 45 && this.onScreen == 1){
			for (E in AllEnemies){
				AllEnemies[E].speed = AllEnemies[E].speed2 * 2;
			}
			this.onScreen = 0;
			this.frame = 0;
			this.width = 32;
			this.height = 32;
		}
	}
};
var Mice2 = {
	color: "00CCFF",
	timeLeft: 0,
	width: 32,
	height: 32,
	x: -100,
	y: -200,
	frame: 0,
	onScreen: 0,
	
	draw: function(){
		if(this.onScreen == 1){
			ctx.globalAlpha = 0.25;
			ctx.fillStyle = this.color;
			ctx.fillRect(this.x - this.width / 2, this.y - this.height / 2,	this.width, this.height);
			ctx.globalAlpha = 1;
		}
	},
	
	move: function(){
		if(this.frame <= 10 && this.onScreen == 1){
			this.width = this.width + 2*this.frame;
			this.height = this.height + 2*this.frame;
			this.frame++;
			for (E in AllEnemies){
				if(collision(AllEnemies[E].dir, AllEnemies[E], this) || contained(this, AllEnemies[E])){
					AllEnemies[E].speed = AllEnemies[E].speed2;
				}
			}
		}
		else if(this.frame < 45 && this.onScreen == 1){
			this.frame++;
			for (E in AllEnemies){
				if(collision(AllEnemies[E].dir, AllEnemies[E], this) || contained(this, AllEnemies[E])){
					AllEnemies[E].speed = AllEnemies[E].speed2;
				}
			}
		}
		if(this.frame >= 45 && this.onScreen == 1){
			for (E in AllEnemies){
				AllEnemies[E].speed = AllEnemies[E].speed2 * 2;
			}
			this.onScreen = 0;
			this.frame = 0;
			this.width = 32;
			this.height = 32;
		}
	}
};
var Mice3 = {
	color: "00CCFF",
	timeLeft: 0,
	width: 32,
	height: 32,
	x: -100,
	y: -200,
	frame: 0,
	onScreen: 0,
	
	draw: function(){
		if(this.onScreen == 1){
			ctx.globalAlpha = 0.25;
			ctx.fillStyle = this.color;
			ctx.fillRect(this.x - this.width / 2, this.y - this.height / 2,	this.width, this.height);
			ctx.globalAlpha = 1;
		}
	},
	
	move: function(){
		if(this.frame <= 10 && this.onScreen == 1){
			this.width = this.width + 2*this.frame;
			this.height = this.height + 2*this.frame;
			this.frame++;
			for (E in AllEnemies){
				if(collision(AllEnemies[E].dir, AllEnemies[E], this) || contained(this, AllEnemies[E])){
					AllEnemies[E].speed = AllEnemies[E].speed2;
				}
			}
		}
		else if(this.frame < 45 && this.onScreen == 1){
			this.frame++;
			for (E in AllEnemies){
				if(collision(AllEnemies[E].dir, AllEnemies[E], this) || contained(this, AllEnemies[E])){
					AllEnemies[E].speed = AllEnemies[E].speed2;
				}
			}
		}
		if(this.frame >= 45 && this.onScreen == 1){
			for (E in AllEnemies){
				AllEnemies[E].speed = AllEnemies[E].speed2 * 2;
			}
			this.onScreen = 0;
			this.frame = 0;
			this.width = 32;
			this.height = 32;
		}
	}
};
var Mice4 = {
	color: "00CCFF",
	timeLeft: 0,
	width: 32,
	height: 32,
	x: -100,
	y: -200,
	frame: 0,
	onScreen: 0,
	
	draw: function(){
		if(this.onScreen == 1){
			ctx.globalAlpha = 0.25;
			ctx.fillStyle = this.color;
			ctx.fillRect(this.x - this.width / 2, this.y - this.height / 2,	this.width, this.height);
			ctx.globalAlpha = 1;
		}
	},
	
	move: function(){
		if(this.frame <= 10 && this.onScreen == 1){
			this.width = this.width + 2*this.frame;
			this.height = this.height + 2*this.frame;
			this.frame++;
			for (E in AllEnemies){
				if(collision(AllEnemies[E].dir, AllEnemies[E], this) || contained(this, AllEnemies[E])){
					AllEnemies[E].speed = AllEnemies[E].speed2;
				}
			}
		}
		else if(this.frame < 45 && this.onScreen == 1){
			this.frame++;
			for (E in AllEnemies){
				if(collision(AllEnemies[E].dir, AllEnemies[E], this) || contained(this, AllEnemies[E])){
					AllEnemies[E].speed = AllEnemies[E].speed2;
				}
			}
		}
		if(this.frame >= 45 && this.onScreen == 1){
			for (E in AllEnemies){
				AllEnemies[E].speed = AllEnemies[E].speed2 * 2;
			}
			this.onScreen = 0;
			this.frame = 0;
			this.width = 32;
			this.height = 32;
		}
	}
};