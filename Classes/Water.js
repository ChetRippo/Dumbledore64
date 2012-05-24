var water = {
	x: -100,
	y: -200,
	width: 16,
	height: 16,
	timeLeft: 0,
	cd: 0,
	cd2: 0,
	speed: 4,
	onScreen: 0,
	cast: 0,
	used: 0,
	dir: "",
	
	draw: function(){
		if(this.onScreen == 1 && this.cast == 0){
			if(this.used == 0){
				midBoop.currentTime=0;
				midBoop.play();
				this.used = 1;
			}
			ctx.drawImage(Bubble, this.x-this.width/2, this.y-this.height/2);
		}
	},
	effect: function(){
		if(this.cd > 0){
			this.cd-=1;
		}
		if(this.cd2 > 0){
			this.cd2-=1;
		}
		if(this.timeLeft > 0){
			this.timeLeft-=1;
		}
		if(this.timeLeft == 0){
			for(B in bubbleRotate){
				bubbleRotate[B].onScreen = 0;
				bubbleRotate[B].x = -100;
				bubbleRotate[B].y = -200;
				bubbleRotate[B].used = 0;
			}
		}
		if(this.cast > 0){
			this.cast-=1;
		}
		if(this.cast == 0 && this.onScreen == 1 && water12.used == 0 && water13.used == 0 && water14.used == 0){
			water12.shoot();
			water13.shoot();
			water14.shoot();
			if(spell == "Heavy Bubble Shield" && water21.used == 0 && water22.used == 0 && water23.used == 0 && water24.used == 0){
				water21.shoot();
				water22.shoot();
				water23.shoot();
				water24.shoot();
			}
		}
		if(this.onScreen == 1 && this.cast == 0){
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
		if(this.cd == 0 && (spell == "Bubble Shield" || spell == "Bubble Shield and Heal")){
			for(B in bubbleRotate){
				bubbleRotate[B].onScreen = 0;
				bubbleRotate[B].x = -100;
				bubbleRotate[B].y = -200;
				bubbleRotate[B].used = 0;
			}
			this.x = player.x - 48;
			this.y = player.y;
			this.dir = "WD";
			this.cd = 1020;
			this.onScreen = 1;
			this.used = 0;
			this.timeLeft = 600;
		}
		else if(this.cd2 == 0 && spell == "Heavy Bubble Shield"){
			for(B in bubbleRotate){
				bubbleRotate[B].onScreen = 0;
				bubbleRotate[B].x = -100;
				bubbleRotate[B].y = -200;
				bubbleRotate[B].used = 0;
			}
			this.x = player.x - 48;
			this.y = player.y;
			this.dir = "WD";
			this.cd2 = 1020;
			this.onScreen = 1;
			this.used = 0;
			this.timeLeft = 600;
		}
	}
};
var water12 = {
	x: -100,
	y: -200,
	width: 16,
	height: 16,
	speed: 4,
	onScreen: 0,
	used: 0,
	dir: "",
	
	draw: function(){
		if(this.onScreen == 1){
			if(this.used == 0){
				this.used = 1;
			}
			ctx.drawImage(Bubble, this.x-this.width/2, this.y-this.height/2);
		}
	},
	effect: function(){
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
		this.x = player.x;
		this.y = player.y - 48;
		this.dir = "SD";
		this.onScreen = 1;
		this.used = 0;
	}
};
var water13 = {
	x: -100,
	y: -200,
	width: 16,
	height: 16,
	speed: 4,
	onScreen: 0,
	used: 0,
	dir: "",
	
	draw: function(){
		if(this.onScreen == 1){
			if(this.used == 0){
				this.used = 1;
			}
			ctx.drawImage(Bubble, this.x-this.width/2, this.y-this.height/2);
		}
	},
	effect: function(){
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
		this.x = player.x + 48;
		this.y = player.y;
		this.dir = "AS";
		this.onScreen = 1;
		this.used = 0;
	}
};
var water14 = {
	x: -100,
	y: -200,
	width: 16,
	height: 16,
	speed: 4,
	onScreen: 0,
	used: 0,
	dir: "",
	
	draw: function(){
		if(this.onScreen == 1){
			if(this.used == 0){
				this.used = 1;
			}
			ctx.drawImage(Bubble, this.x-this.width/2, this.y-this.height/2);
		}
	},
	effect: function(){
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
		this.x = player.x;
		this.y = player.y + 48;
		this.dir = "WA";
		this.onScreen = 1;
		this.used = 0;
	}
};
var water21 = {
	x: -100,
	y: -200,
	width: 16,
	height: 16,
	speed: 4,
	onScreen: 0,
	used: 0,
	dir: "",
	
	draw: function(){
		if(this.onScreen == 1){
			if(this.used == 0){
				this.used = 1;
			}
			ctx.drawImage(Bubble, this.x-this.width/2, this.y-this.height/2);
		}
	},
	effect: function(){
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
		this.x = player.x + 24;
		this.y = player.y + 24;
		this.dir = "AS";
		this.onScreen = 1;
		this.used = 0;
	}
};
var water22 = {
	x: -100,
	y: -200,
	width: 16,
	height: 16,
	speed: 4,
	onScreen: 0,
	used: 0,
	dir: "",
	
	draw: function(){
		if(this.onScreen == 1){
			if(this.used == 0){
				this.used = 1;
			}
			ctx.drawImage(Bubble, this.x-this.width/2, this.y-this.height/2);
		}
	},
	effect: function(){
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
		this.x = player.x - 24;
		this.y = player.y + 24;
		this.dir = "WA";
		this.onScreen = 1;
		this.used = 0;
	}
};
var water23 = {
	x: -100,
	y: -200,
	width: 16,
	height: 16,
	speed: 4,
	onScreen: 0,
	used: 0,
	dir: "",
	
	draw: function(){
		if(this.onScreen == 1){
			if(this.used == 0){
				this.used = 1;
			}
			ctx.drawImage(Bubble, this.x-this.width/2, this.y-this.height/2);
		}
	},
	effect: function(){
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
		this.x = player.x + 24;
		this.y = player.y - 24;
		this.dir = "SD";
		this.onScreen = 1;
		this.used = 0;
	}
};
var water24 = {
	x: -100,
	y: -200,
	width: 16,
	height: 16,
	speed: 4,
	onScreen: 0,
	used: 0,
	dir: "",
	
	draw: function(){
		if(this.onScreen == 1){
			if(this.used == 0){
				this.used = 1;
			}
			ctx.drawImage(Bubble, this.x-this.width/2, this.y-this.height/2);
		}
	},
	effect: function(){
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
		this.x = player.x - 24;
		this.y = player.y - 24;
		this.dir = "WD";
		this.onScreen = 1;
		this.used = 0;
	}
};
var bubbleRotate = {1: water, 2: water12, 3: water13, 4: water14, 5: water21, 6: water22, 7: water23, 8: water24};