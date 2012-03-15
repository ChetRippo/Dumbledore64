// Fire: Damages all enemies in radius
var fire = {
	color: "FF6600",
	x: -100,
	y: -200,
	timeLeft: 0,
	width: 32,
	height: 32,
	frame: 0,
	cd: 0,
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
		if(this.cd > 0){
			this.cd-=1;
		}
		if(this.frame == 20){
			this.x = -100;
			this.y = -200;
			this.width = 32;
			this.height = 32;
			this.onScreen = 0;
		}
		else if(this.onScreen ==1){
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
			}
		}
	},
		
	// Spawn
	shoot: function(){
	if(this.cd == 0){
		this.height = 32;
		this.width = 32;
		this.x = player.x;
		this.y = player.y;
		this.cd = 300;
		this.frame = 0;
		this.onScreen = 1;
	}
	else{
		return 0;
	}
	}
	
};

// Fire2: Damages all enemies in radius
var fire2 = {
	color: "FF6600",
	x: -1000,
	y: -200,
	timeLeft: 0,
	width: 32,
	height: 32,
	frame: 0,
	cd: 0,
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
		if(this.cd > 0){
			this.cd-=1;
		}
		if(this.frame == 20){
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
			for (E in Enemies){
				if(collision(Enemies[E].dir, Enemies[E], this)){
					onHit(Enemies[E], Enemies[E].rp);
				}
				if(collision(Sorceror.dir, Sorceror, this)){
					Sorceror.onHit();
				}
			}
		}
	},
		
	// Spawn
	shoot: function(){
	if(this.cd == 0){
		this.height = 32;
		this.width = 32;
		this.x = player.x;
		this.y = player.y;
		this.cd = 420;
		this.frame = 0;
		this.onScreen = 1;
	}
	else{
		return 0;
	}
	}
	
};