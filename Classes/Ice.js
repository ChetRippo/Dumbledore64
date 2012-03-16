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
	
	draw: function(){
		if(this.onScreen == 1){
			ctx.globalAlpha = 0.25;
			ctx.fillStyle = this.color;
			ctx.fillRect(this.x - this.width / 2, this.y - this.height / 2,	this.width, this.height);
			ctx.globalAlpha = 1;
		}
	},
	
	move: function(){
		if(this.cd > 0){
			this.cd-=1;
		}
		if(this.frame == 150 && this.onScreen == 1){
			this.width = 32;
			this.height = 32;
			this.x = -200;
			this.y = -100;
			this.onScreen = 0;
			this.end = true;
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
			ctx.globalAlpha = 0.25;
			ctx.fillStyle = this.color;
			ctx.fillRect(this.x - this.width / 2, this.y - this.height / 2,	this.width, this.height);
			ctx.globalAlpha = 1;
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