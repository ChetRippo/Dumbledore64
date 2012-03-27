var Water = {
	x: -100,
	y: -200,
	width: 16,
	height: 16,
	timeLeft: 0,
	cd: 0,
	speed: 4,
	onScreen: 0,
	cast: 0,
	used: 0,
	dir: "",
	
	draw: function(){
		if(this.onScreen == 1 && this.cast == 0){
			if(this.used == 0){
				//Wind.play();
				this.used = 1;
			}
			ctx.drawImage(Bubble, this.x-this.width/2, this.y-this.height/2);
		}
	},
	effect: function(){
		if(this.cd > 0){
			this.cd-=1;
		}
		if(this.timeLeft > 0){
			this.timeLeft-=1;
		}
		if(this.timeLeft == 0){
			for(B in bubbleRotate){
				bubbleRotate[B].onScreen = 0;
				bubbleRotate[B].x = -100;
				bubbleRotate[B].y = -200;
			}
		}
		if(this.cast > 0){
			this.cast-=1;
		}
		if(this.cast == 0 && this.onScreen == 1 && Water12.used == 0 && Water13.used == 0){
			Water12.shoot();
			Water13.shoot();
			Water14.shoot();
			if(spell == "Heavy Bubble Shield"){
				Water21.shoot();
				Water22.shoot();
				Water23.shoot();
				Water24.shoot();
			}
		}
		if(this.onScreen == 1){
			HpMove(this);
			if(this.x == player.x - 48 && this.y == player.y){
				this.dir = "WD";
			}
			else if(this.x == player.x && this.y == player.y - 48){
				this.dir = "SD";
			}
			else if(this.x == player.x + 48 && this.y == player.y){
				this.dir = "AS";
			}
			else if(this.x == player.x && this.y == player.y + 48){
				this.dir = "WA";
			}
			for(E in AllEnemies){
				if(collision(this.dir, this, AllEnemies[E]) || collision(AllEnemies[E].dir, AllEnemies[E], this)){
					onHit(AllEnemies[E]);
					this.x = -100;
					this.y = -200;
					this.onScreen = 0;
				}
			}
		}
	},
	// Spawn
	shoot: function(){
	if(this.cd == 0){
		this.x = player.x - 48;
		this.y = player.y;
		this.dir = "WD";
		this.cd = 1020;
		this.onScreen = 1;
		this.used = 0;
		this.timeLeft = 600;
	}
	}
};
var Water12 = {
	x: -100,
	y: -200,
	width: 16,
	height: 16,
	cd: 0,
	speed: 4,
	onScreen: 0,
	cast: 0,
	used: 0,
	dir: "",
	
	draw: function(){
		if(this.onScreen == 1 && this.cast == 0){
			if(this.used == 0){
				this.used = 1;
			}
			ctx.drawImage(Bubble, this.x-this.width/2, this.y-this.height/2);
		}
	},
	effect: function(){
		if(this.cast > 0){
			this.cast-=1;
		}
		if(this.onScreen == 1){
			HpMove(this);
			if(this.x == player.x - 48 && this.y == player.y){
				this.dir = "WD";
			}
			else if(this.x == player.x && this.y == player.y - 48){
				this.dir = "SD";
			}
			else if(this.x == player.x + 48 && this.y == player.y){
				this.dir = "AS";
			}
			else if(this.x == player.x && this.y == player.y + 48){
				this.dir = "WA";
			}
			for(E in AllEnemies){
				if(collision(this.dir, this, AllEnemies[E]) || collision(AllEnemies[E].dir, AllEnemies[E], this)){
					onHit(AllEnemies[E]);
					this.x = -100;
					this.y = -200;
					this.onScreen = 0;
				}
			}
		}
	},
	// Spawn
	shoot: function(){
	if(this.cd == 0){
		this.x = player.x;
		this.y = player.y - 48;
		this.dir = "SD";
		this.onScreen = 1;
		this.used = 0;
	}
	}
};
var Water13 = {
	x: -100,
	y: -200,
	width: 16,
	height: 16,
	cd: 0,
	speed: 4,
	onScreen: 0,
	cast: 0,
	used: 0,
	dir: "",
	
	draw: function(){
		if(this.onScreen == 1 && this.cast == 0){
			if(this.used == 0){
				this.used = 1;
			}
			ctx.drawImage(Bubble, this.x-this.width/2, this.y-this.height/2);
		}
	},
	effect: function(){
		if(this.cast > 0){
			this.cast-=1;
		}
		if(this.onScreen == 1){
			HpMove(this);
			if(this.x == player.x - 48 && this.y == player.y){
				this.dir = "WD";
			}
			else if(this.x == player.x && this.y == player.y - 48){
				this.dir = "SD";
			}
			else if(this.x == player.x + 48 && this.y == player.y){
				this.dir = "AS";
			}
			else if(this.x == player.x && this.y == player.y + 48){
				this.dir = "WA";
			}
			for(E in AllEnemies){
				if(collision(this.dir, this, AllEnemies[E]) || collision(AllEnemies[E].dir, AllEnemies[E], this)){
					onHit(AllEnemies[E]);
					this.x = -100;
					this.y = -200;
					this.onScreen = 0;
				}
			}
		}
	},
	// Spawn
	shoot: function(){
	if(this.cd == 0){
		this.x = player.x + 48;
		this.y = player.y;
		this.dir = "AS";
		this.onScreen = 1;
		this.used = 0;
	}
	}
};
var Water14 = {
	x: -100,
	y: -200,
	width: 16,
	height: 16,
	cd: 0,
	speed: 4,
	onScreen: 0,
	cast: 0,
	used: 0,
	dir: "",
	
	draw: function(){
		if(this.onScreen == 1 && this.cast == 0){
			if(this.used == 0){
				this.used = 1;
			}
			ctx.drawImage(Bubble, this.x-this.width/2, this.y-this.height/2);
		}
	},
	effect: function(){
		if(this.cast > 0){
			this.cast-=1;
		}
		if(this.onScreen == 1){
			HpMove(this);
			if(this.x == player.x - 48 && this.y == player.y){
				this.dir = "WD";
			}
			else if(this.x == player.x && this.y == player.y - 48){
				this.dir = "SD";
			}
			else if(this.x == player.x + 48 && this.y == player.y){
				this.dir = "AS";
			}
			else if(this.x == player.x && this.y == player.y + 48){
				this.dir = "WA";
			}
			for(E in AllEnemies){
				if(collision(this.dir, this, AllEnemies[E]) || collision(AllEnemies[E].dir, AllEnemies[E], this)){
					onHit(AllEnemies[E]);
					this.x = -100;
					this.y = -200;
					this.onScreen = 0;
				}
			}
		}
	},
	// Spawn
	shoot: function(){
	if(this.cd == 0){
		this.x = player.x;
		this.y = player.y + 48;
		this.dir = "WA";
		this.onScreen = 1;
		this.used = 0;
	}
	}
};
var Water21 = {
	x: -100,
	y: -200,
	width: 16,
	height: 16,
	cd: 0,
	speed: 4,
	onScreen: 0,
	cast: 0,
	used: 0,
	dir: "",
	
	draw: function(){
		if(this.onScreen == 1 && this.cast == 0){
			if(this.used == 0){
				this.used = 1;
			}
			ctx.drawImage(Bubble, this.x-this.width/2, this.y-this.height/2);
		}
	},
	effect: function(){
		if(this.cast > 0){
			this.cast-=1;
		}
		if(this.onScreen == 1){
			HpMove(this);
			if(this.x == player.x - 48 && this.y == player.y){
				this.dir = "WD";
			}
			else if(this.x == player.x && this.y == player.y - 48){
				this.dir = "SD";
			}
			else if(this.x == player.x + 48 && this.y == player.y){
				this.dir = "AS";
			}
			else if(this.x == player.x && this.y == player.y + 48){
				this.dir = "WA";
			}
			for(E in AllEnemies){
				if(collision(this.dir, this, AllEnemies[E]) || collision(AllEnemies[E].dir, AllEnemies[E], this)){
					onHit(AllEnemies[E]);
					this.x = -100;
					this.y = -200;
					this.onScreen = 0;
				}
			}
		}
	},
	// Spawn
	shoot: function(){
	if(this.cd == 0){
		this.x = player.x + 24;
		this.y = player.y + 24;
		this.dir = "AS";
		this.onScreen = 1;
		this.used = 0;
	}
	}
};
var Water22 = {
	x: -100,
	y: -200,
	width: 16,
	height: 16,
	cd: 0,
	speed: 4,
	onScreen: 0,
	cast: 0,
	used: 0,
	dir: "",
	
	draw: function(){
		if(this.onScreen == 1 && this.cast == 0){
			if(this.used == 0){
				this.used = 1;
			}
			ctx.drawImage(Bubble, this.x-this.width/2, this.y-this.height/2);
		}
	},
	effect: function(){
		if(this.cast > 0){
			this.cast-=1;
		}
		if(this.onScreen == 1){
			HpMove(this);
			if(this.x == player.x - 48 && this.y == player.y){
				this.dir = "WD";
			}
			else if(this.x == player.x && this.y == player.y - 48){
				this.dir = "SD";
			}
			else if(this.x == player.x + 48 && this.y == player.y){
				this.dir = "AS";
			}
			else if(this.x == player.x && this.y == player.y + 48){
				this.dir = "WA";
			}
			for(E in AllEnemies){
				if(collision(this.dir, this, AllEnemies[E]) || collision(AllEnemies[E].dir, AllEnemies[E], this)){
					onHit(AllEnemies[E]);
					this.x = -100;
					this.y = -200;
					this.onScreen = 0;
				}
			}
		}
	},
	// Spawn
	shoot: function(){
	if(this.cd == 0){
		this.x = player.x - 24;
		this.y = player.y + 24;
		this.dir = "WA";
		this.onScreen = 1;
		this.used = 0;
	}
	}
};
var Water23 = {
	x: -100,
	y: -200,
	width: 16,
	height: 16,
	cd: 0,
	speed: 4,
	onScreen: 0,
	cast: 0,
	used: 0,
	dir: "",
	
	draw: function(){
		if(this.onScreen == 1 && this.cast == 0){
			if(this.used == 0){
				this.used = 1;
			}
			ctx.drawImage(Bubble, this.x-this.width/2, this.y-this.height/2);
		}
	},
	effect: function(){
		if(this.cast > 0){
			this.cast-=1;
		}
		if(this.onScreen == 1){
			HpMove(this);
			if(this.x == player.x - 48 && this.y == player.y){
				this.dir = "WD";
			}
			else if(this.x == player.x && this.y == player.y - 48){
				this.dir = "SD";
			}
			else if(this.x == player.x + 48 && this.y == player.y){
				this.dir = "AS";
			}
			else if(this.x == player.x && this.y == player.y + 48){
				this.dir = "WA";
			}
			for(E in AllEnemies){
				if(collision(this.dir, this, AllEnemies[E]) || collision(AllEnemies[E].dir, AllEnemies[E], this)){
					onHit(AllEnemies[E]);
					this.x = -100;
					this.y = -200;
					this.onScreen = 0;
				}
			}
		}
	},
	// Spawn
	shoot: function(){
	if(this.cd == 0){
		this.x = player.x + 24;
		this.y = player.y - 24;
		this.dir = "SD";
		this.onScreen = 1;
		this.used = 0;
	}
	}
};
var Water24 = {
	x: -100,
	y: -200,
	width: 16,
	height: 16,
	cd: 0,
	speed: 4,
	onScreen: 0,
	cast: 0,
	used: 0,
	dir: "",
	
	draw: function(){
		if(this.onScreen == 1 && this.cast == 0){
			if(this.used == 0){
				this.used = 1;
			}
			ctx.drawImage(Bubble, this.x-this.width/2, this.y-this.height/2);
		}
	},
	effect: function(){
		if(this.cast > 0){
			this.cast-=1;
		}
		if(this.onScreen == 1){
			HpMove(this);
			if(this.x == player.x - 48 && this.y == player.y){
				this.dir = "WD";
			}
			else if(this.x == player.x && this.y == player.y - 48){
				this.dir = "SD";
			}
			else if(this.x == player.x + 48 && this.y == player.y){
				this.dir = "AS";
			}
			else if(this.x == player.x && this.y == player.y + 48){
				this.dir = "WA";
			}
			for(E in AllEnemies){
				if(collision(this.dir, this, AllEnemies[E]) || collision(AllEnemies[E].dir, AllEnemies[E], this)){
					onHit(AllEnemies[E]);
					this.x = -100;
					this.y = -200;
					this.onScreen = 0;
				}
			}
		}
	},
	// Spawn
	shoot: function(){
	if(this.cd == 0){
		this.x = player.x - 24;
		this.y = player.y - 24;
		this.dir = "WD";
		this.onScreen = 1;
		this.used = 0;
	}
	}
};
var bubbleRotate = {1: Water, 2: Water12, 3: Water13, 4: Water14, 5: Water21, 6: Water22, 7: Water23, 8: Water24};