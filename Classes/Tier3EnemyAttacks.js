//------------------------------------------------- Master Thief Moves --------------------------------------------------------------//
var sAir = {
	timeLeft: 0,
	speed: 8,
	onScreen: 0,
	used: 0,	
	draw: function(){
		if(this.onScreen == 1 && MasterThief.hp > 3){
			if(MasterThief.dir == "W"){
				if(MasterThief.LR == "Left"){
					ctx.globalAlpha = Alpha/2;
					ctx.drawImage(ThiefBossDashL, MasterThief.x - MasterThief.width / 2, MasterThief.y - MasterThief.height / 2 + 8);
					ctx.globalAlpha = Alpha/2;
					ctx.drawImage(ThiefBossDashL, MasterThief.x - MasterThief.width / 2, MasterThief.y - MasterThief.height / 2 + 24);
					ctx.globalAlpha = Alpha/4;
					ctx.drawImage(ThiefBossDashL, MasterThief.x - MasterThief.width / 2, MasterThief.y - MasterThief.height / 2 + 40);
					ctx.globalAlpha = Alpha/4;
					ctx.drawImage(ThiefBossDashL, MasterThief.x - MasterThief.width / 2, MasterThief.y - MasterThief.height / 2 + 56);
					ctx.globalAlpha = Alpha/6;
					ctx.drawImage(ThiefBossDashL, MasterThief.x - MasterThief.width / 2, MasterThief.y - MasterThief.height / 2 + 72);
					ctx.globalAlpha = Alpha/6;
					ctx.drawImage(ThiefBossDashL, MasterThief.x - MasterThief.width / 2, MasterThief.y - MasterThief.height / 2 + 88);
				}
				else{
					ctx.globalAlpha = Alpha/2;
					ctx.drawImage(ThiefBossDashR, MasterThief.x - MasterThief.width / 2, MasterThief.y - MasterThief.height / 2 + 8);
					ctx.globalAlpha = Alpha/2;
					ctx.drawImage(ThiefBossDashR, MasterThief.x - MasterThief.width / 2, MasterThief.y - MasterThief.height / 2 + 24);
					ctx.globalAlpha = Alpha/4;
					ctx.drawImage(ThiefBossDashR, MasterThief.x - MasterThief.width / 2, MasterThief.y - MasterThief.height / 2 + 40);
					ctx.globalAlpha = Alpha/4;
					ctx.drawImage(ThiefBossDashR, MasterThief.x - MasterThief.width / 2, MasterThief.y - MasterThief.height / 2 + 56);
					ctx.globalAlpha = Alpha/6;
					ctx.drawImage(ThiefBossDashR, MasterThief.x - MasterThief.width / 2, MasterThief.y - MasterThief.height / 2 + 72);
					ctx.globalAlpha = Alpha/6;
					ctx.drawImage(ThiefBossDashR, MasterThief.x - MasterThief.width / 2, MasterThief.y - MasterThief.height / 2 + 88);
				}
			}
			if(MasterThief.dir == "S"){
				if(MasterThief.LR == "Left"){
					ctx.globalAlpha = Alpha/2;
					ctx.drawImage(ThiefBossDashL, MasterThief.x - MasterThief.width / 2, MasterThief.y - MasterThief.height / 2 - 8);
					ctx.globalAlpha = Alpha/2;
					ctx.drawImage(ThiefBossDashL, MasterThief.x - MasterThief.width / 2, MasterThief.y - MasterThief.height / 2 - 24);
					ctx.globalAlpha = Alpha/4;
					ctx.drawImage(ThiefBossDashL, MasterThief.x - MasterThief.width / 2, MasterThief.y - MasterThief.height / 2 - 40);
					ctx.globalAlpha = Alpha/4;
					ctx.drawImage(ThiefBossDashL, MasterThief.x - MasterThief.width / 2, MasterThief.y - MasterThief.height / 2 - 56);
					ctx.globalAlpha = Alpha/6;
					ctx.drawImage(ThiefBossDashL, MasterThief.x - MasterThief.width / 2, MasterThief.y - MasterThief.height / 2 - 72);
					ctx.globalAlpha = Alpha/6;
					ctx.drawImage(ThiefBossDashL, MasterThief.x - MasterThief.width / 2, MasterThief.y - MasterThief.height / 2 - 88);
				}
				else{
					ctx.globalAlpha = Alpha/2;
					ctx.drawImage(ThiefBossDashR, MasterThief.x - MasterThief.width / 2, MasterThief.y - MasterThief.height / 2 - 8);
					ctx.globalAlpha = Alpha/2;
					ctx.drawImage(ThiefBossDashR, MasterThief.x - MasterThief.width / 2, MasterThief.y - MasterThief.height / 2 - 24);
					ctx.globalAlpha = Alpha/4;
					ctx.drawImage(ThiefBossDashR, MasterThief.x - MasterThief.width / 2, MasterThief.y - MasterThief.height / 2 - 40);
					ctx.globalAlpha = Alpha/4;
					ctx.drawImage(ThiefBossDashR, MasterThief.x - MasterThief.width / 2, MasterThief.y - MasterThief.height / 2 - 56);
					ctx.globalAlpha = Alpha/6;
					ctx.drawImage(ThiefBossDashR, MasterThief.x - MasterThief.width / 2, MasterThief.y - MasterThief.height / 2 - 72);
					ctx.globalAlpha = Alpha/6;
					ctx.drawImage(ThiefBossDashR, MasterThief.x - MasterThief.width / 2, MasterThief.y - MasterThief.height / 2 - 88);
				}
			}
			if(MasterThief.dir == "A"){
				ctx.globalAlpha = Alpha/2;
				ctx.drawImage(ThiefBossDashL, MasterThief.x - MasterThief.width / 2 + 8, MasterThief.y - MasterThief.height / 2);
				ctx.globalAlpha = Alpha/2;
				ctx.drawImage(ThiefBossDashL, MasterThief.x - MasterThief.width / 2 + 24, MasterThief.y - MasterThief.height / 2);
				ctx.globalAlpha = Alpha/4;
				ctx.drawImage(ThiefBossDashL, MasterThief.x - MasterThief.width / 2 + 40, MasterThief.y - MasterThief.height / 2);
				ctx.globalAlpha = Alpha/4;
				ctx.drawImage(ThiefBossDashL, MasterThief.x - MasterThief.width / 2 + 56, MasterThief.y - MasterThief.height / 2);
				ctx.globalAlpha = Alpha/6;
				ctx.drawImage(ThiefBossDashL, MasterThief.x - MasterThief.width / 2 + 72, MasterThief.y - MasterThief.height / 2);
				ctx.globalAlpha = Alpha/6;
				ctx.drawImage(ThiefBossDashL, MasterThief.x - MasterThief.width / 2 + 88, MasterThief.y - MasterThief.height / 2);
			}
			if(MasterThief.dir == "D"){
				ctx.globalAlpha = Alpha/2;
				ctx.drawImage(ThiefBossDashR, MasterThief.x - MasterThief.width / 2 - 8, MasterThief.y - MasterThief.height / 2);
				ctx.globalAlpha = Alpha/2;
				ctx.drawImage(ThiefBossDashR, MasterThief.x - MasterThief.width / 2 - 24, MasterThief.y - MasterThief.height / 2);
				ctx.globalAlpha = Alpha/4;
				ctx.drawImage(ThiefBossDashR, MasterThief.x - MasterThief.width / 2 - 40, MasterThief.y - MasterThief.height / 2);
				ctx.globalAlpha = Alpha/4;
				ctx.drawImage(ThiefBossDashR, MasterThief.x - MasterThief.width / 2 - 56, MasterThief.y - MasterThief.height / 2);
				ctx.globalAlpha = Alpha/6;
				ctx.drawImage(ThiefBossDashR, MasterThief.x - MasterThief.width / 2 - 72, MasterThief.y - MasterThief.height / 2);
				ctx.globalAlpha = Alpha/6;
				ctx.drawImage(ThiefBossDashR, MasterThief.x - MasterThief.width / 2 - 88, MasterThief.y - MasterThief.height / 2);
			}
			if(MasterThief.dir == "WD"){
				ctx.globalAlpha = Alpha/2;
				ctx.drawImage(ThiefBossDashR, MasterThief.x - MasterThief.width / 2 - 8, MasterThief.y - MasterThief.height / 2 + 8);
				ctx.globalAlpha = Alpha/2;
				ctx.drawImage(ThiefBossDashR, MasterThief.x - MasterThief.width / 2 - 24, MasterThief.y - MasterThief.height / 2 + 24);
				ctx.globalAlpha = Alpha/4;
				ctx.drawImage(ThiefBossDashR, MasterThief.x - MasterThief.width / 2 - 40, MasterThief.y - MasterThief.height / 2 + 40);
				ctx.globalAlpha = Alpha/4;
				ctx.drawImage(ThiefBossDashR, MasterThief.x - MasterThief.width / 2 - 56, MasterThief.y - MasterThief.height / 2 + 56);
				ctx.globalAlpha = Alpha/6;
				ctx.drawImage(ThiefBossDashR, MasterThief.x - MasterThief.width / 2 - 72, MasterThief.y - MasterThief.height / 2 + 72);
				ctx.globalAlpha = Alpha/6;
				ctx.drawImage(ThiefBossDashR, MasterThief.x - MasterThief.width / 2 - 88, MasterThief.y - MasterThief.height / 2 + 88);
			}
			if(MasterThief.dir == "WA"){
				ctx.globalAlpha = Alpha/2;
				ctx.drawImage(ThiefBossDashL, MasterThief.x - MasterThief.width / 2 + 8, MasterThief.y - MasterThief.height / 2 + 8);
				ctx.globalAlpha = Alpha/2;
				ctx.drawImage(ThiefBossDashL, MasterThief.x - MasterThief.width / 2 + 24, MasterThief.y - MasterThief.height / 2 + 24);
				ctx.globalAlpha = Alpha/4;
				ctx.drawImage(ThiefBossDashL, MasterThief.x - MasterThief.width / 2 + 40, MasterThief.y - MasterThief.height / 2 + 40);
				ctx.globalAlpha = Alpha/4;
				ctx.drawImage(ThiefBossDashL, MasterThief.x - MasterThief.width / 2 + 56, MasterThief.y - MasterThief.height / 2 + 56);
				ctx.globalAlpha = Alpha/6;
				ctx.drawImage(ThiefBossDashL, MasterThief.x - MasterThief.width / 2 + 72, MasterThief.y - MasterThief.height / 2 + 72);
				ctx.globalAlpha = Alpha/6;
				ctx.drawImage(ThiefBossDashL, MasterThief.x - MasterThief.width / 2 + 88, MasterThief.y - MasterThief.height / 2 + 88);
			}
			if(MasterThief.dir == "AS"){
				ctx.globalAlpha = Alpha/2;
				ctx.drawImage(ThiefBossDashL, MasterThief.x - MasterThief.width / 2 + 8, MasterThief.y - MasterThief.height / 2 - 8);
				ctx.globalAlpha = Alpha/2;
				ctx.drawImage(ThiefBossDashL, MasterThief.x - MasterThief.width / 2 + 24, MasterThief.y - MasterThief.height / 2 - 24);
				ctx.globalAlpha = Alpha/4;
				ctx.drawImage(ThiefBossDashL, MasterThief.x - MasterThief.width / 2 + 40, MasterThief.y - MasterThief.height / 2 - 40);
				ctx.globalAlpha = Alpha/4;
				ctx.drawImage(ThiefBossDashL, MasterThief.x - MasterThief.width / 2 + 56, MasterThief.y - MasterThief.height / 2 - 56);
				ctx.globalAlpha = Alpha/6;
				ctx.drawImage(ThiefBossDashL, MasterThief.x - MasterThief.width / 2 + 72, MasterThief.y - MasterThief.height / 2 - 72);
				ctx.globalAlpha = Alpha/6;
				ctx.drawImage(ThiefBossDashL, MasterThief.x - MasterThief.width / 2 + 88, MasterThief.y - MasterThief.height / 2 - 88);
			}
			if(MasterThief.dir == "SD"){
				ctx.globalAlpha = Alpha/2;
				ctx.drawImage(ThiefBossDashR, MasterThief.x - MasterThief.width / 2 - 8, MasterThief.y - MasterThief.height / 2 - 8);
				ctx.globalAlpha = Alpha/2;
				ctx.drawImage(ThiefBossDashR, MasterThief.x - MasterThief.width / 2 - 24, MasterThief.y - MasterThief.height / 2 - 24);
				ctx.globalAlpha = Alpha/4;
				ctx.drawImage(ThiefBossDashR, MasterThief.x - MasterThief.width / 2 - 40, MasterThief.y - MasterThief.height / 2 - 40);
				ctx.globalAlpha = Alpha/4;
				ctx.drawImage(ThiefBossDashR, MasterThief.x - MasterThief.width / 2 - 56, MasterThief.y - MasterThief.height / 2 - 56);
				ctx.globalAlpha = Alpha/6;
				ctx.drawImage(ThiefBossDashR, MasterThief.x - MasterThief.width / 2 - 72, MasterThief.y - MasterThief.height / 2 - 72);
				ctx.globalAlpha = Alpha/6;
				ctx.drawImage(ThiefBossDashR, MasterThief.x - MasterThief.width / 2 - 88, MasterThief.y - MasterThief.height / 2 - 88);
			}
			ctx.globalAlpha = Alpha;
		}
	},
	effect: function(){
		if(this.onScreen == 1){
			if(this.timeLeft > 0){
				this.timeLeft-=1;
			}
			if(this.onScreen == 1){
				MasterThief.speed = MasterThief.speed2 * 8;
			}
			if(this.onScreen == 1 && this.used == 0){
				MasterThief.dirct = 15;
				MasterThief.hptimer = 15;
				MasterThief.speed = MasterThief.speed2 * 8;
				this.used = 1;
				Wind.currentTime = 0;
				Wind.play();
			}
			if(this.timeLeft <=0 && this.onScreen == 1){
				MasterThief.speed = MasterThief.speed2 * 4;
				this.onScreen = 0;
			}
			else{
				if(MasterThief.x > 772 && MasterThief.dir == "D" && this.onScreen == 1){
					MasterThief.dir = "W";
					MasterThief.dirct = hptimer;
				}
				else if(MasterThief.x < 28 && MasterThief.dir == "A" && this.onScreen == 1){
					MasterThief.dir = "S";
					MasterThief.dirct = hptimer;
				}
				else if(MasterThief.y > 548 && MasterThief.dir == "S" && this.onScreen == 1){
					MasterThief.dir = "D";
					MasterThief.dirct = hptimer;
				}
				else if(MasterThief.y < 28 && MasterThief.dir == "W" && this.onScreen == 1){
					MasterThief.dir = "A";
					MasterThief.dirct = hptimer;
				}
			}
			for(O in obstacle1){
				if(collision(MasterThief.dir, MasterThief, obstacle1[O]) && obstacle1[O].fallIndex == 1){
					obstacle1[O].LR = MasterThief.LR;
					obstacle1[O].falling = true;
					lowBomb.currentTime = 0;
					lowBomb.play();
				}
			}
		}
	},
	// Spawn
	shoot: function(){
		this.timeLeft = 15;
		this.onScreen = 1;
		this.used = 0;
	}
};
// Heal Master Thief
var MThiefHeal = {
	color: "#33CC00",
	timeLeft: -1,
	x: -100,
	y: -200,
	speed: 4,
	used: 0,
	onScreen: 0,
	
	draw: function(){
		if(this.timeLeft == 0){
			this.x = -100;
			this.y = -200;
			this.timeLeft-=1;
			MasterThief.spell1 = "N/A";
			MasterThief.spell2 = "N/A";
			this.onScreen = 0;
		}
		if(this.timeLeft > 0){
			ctx.fillStyle = this.color;
			ctx.font = "18pt Arial";
			ctx.fillText("+2", this.x, this.y);
		}	
	},
	
	move: function(){
		if(this.timeLeft > 0){
			this.y -= this.speed;
			this.timeLeft--;
			if(this.used == 0){
				if(MasterThief.hp < 8){
					MasterThief.hp+=2;
				}
				this.used = 1;
				Pickup.currentTime=0;
				Pickup.play();
			}
		}
			
	},
	// Spawn
	shoot: function(){
		this.x = MasterThief.x;
		this.y = MasterThief.y;
		this.timeLeft = 15;
		this.used = 0;
		MSmokeBomb.x1 = MasterThief.x;
		MSmokeBomb.y1 = MasterThief.y;
		MSmokeBomb.frame = 0;
		MSmokeBomb.onScreen = 1;
		MSmokeBomb.draaw = 1;
		MSmokeBomb.used = 0;
		this.onScreen = 1;
	}	
};
var MSmokeBomb = {
	color: "black",
	width: 32,
	height: 32,
	x1: 0,
	y1: 0,
	onScreen: 0,
	draaw: 0,
	frame: 0,
	used: 0,
	
	draw: function(){
		if(this.draaw == 1){
			ctx.fillStyle = this.color;
			ctx.globalAlpha = Alpha*0.5;
			if(this.used == 0){
				fastbeepsHigh.currentTime=0;
				fastbeepsHigh.play();
				this.used = 1;
			}
			if(this.frame < 4){
				ctx.fillRect(this.x1-this.width/2, this.y1-this.height/2, this.width, this.height);
				this.width = this.width + 16 * this.frame;
				this.height = this.height + 16 * this.frame;
				this.frame++;
			}
			else if(this.frame < 8){
				ctx.fillRect(this.x1-this.width/2, this.y1-this.height/2, this.width, this.height);
				this.width = this.width - 16 * this.frame;
				this.height = this.height - 16 * this.frame;
				this.frame++;
			}
			else{
				this.frame = 0;
				this.draaw = 0;
				this.width = 32;
				this.height = 32;
			}
			ctx.globalAlpha = Alpha;
		}
	}
};
// Falling Trees
var TreeFallExplosion = {
	color: "#999900",
	x: -9000,
	y: -9000,
	timeLeft: 0,
	width: 576,
	height: 16,
	frame: 0,
	onScreen: 0,
	
	draw: function(){
		if(this.onScreen == 1){
			ctx.globalAlpha = Alpha*0.5;
			ctx.fillStyle = this.color;
			ctx.fillRect(this.x-this.width/2,this.y-this.height/2,this.width, this.height);
			ctx.globalAlpha = Alpha;
		}
	},
	move: function(){
		if(this.frame == 10){
			this.x = -9000;
			this.y = -9000;
			this.height = 16;
			this.onScreen = 0;
		}
		else{
			this.height = 16 + (16*this.frame);
			this.frame++;
			if(collision(player.dir, player, this)){
				if(darkwater.onScreen == 1 && darkwater.hptimer == 0){
					darkwater.hptimer = 20;
					darkwater.hp-=1;
					hptimer = 20;
				}				
				else if(hptimer <= 0){
					player.hp-=1;
					onDmg.currentTime=0;
					onDmg.play();
					hptimer = 30;
				}
			}
		}
	},
	// Spawn
	shoot: function(){
		Explosion.currentTime=0;
		Explosion.play();
		this.height = 16;
		this.frame = 0;
		this.onScreen = 1;
	}
};
// Falling Trees
var TreeFallExplosion2 = {
	color: "#999900",
	x: -9000,
	y: -9000,
	timeLeft: 0,
	width: 576,
	height: 16,
	frame: 0,
	onScreen: 0,
	
	draw: function(){
		if(this.onScreen == 1){
			ctx.globalAlpha = Alpha*0.5;
			ctx.fillStyle = this.color;
			ctx.fillRect(this.x-this.width/2,this.y-this.height/2,this.width, this.height);
			ctx.globalAlpha = Alpha;
		}
	},
	move: function(){
		if(this.frame == 10){
			this.x = -9000;
			this.y = -9000;
			this.height = 16;
			this.onScreen = 0;
		}
		else{
			this.height = 16 + (16*this.frame);
			this.frame++;
			if(collision(player.dir, player, this)){
				if(darkwater.onScreen == 1 && darkwater.hptimer == 0){
					darkwater.hptimer = 20;
					darkwater.hp-=1;
					hptimer = 20;
				}				
				else if(hptimer <= 0){
					player.hp-=1;
					onDmg.currentTime=0;
					onDmg.play();
					hptimer = 30;
				}
			}
		}
	},
	// Spawn
	shoot: function(){
		Explosion.currentTime=0;
		Explosion.play();
		this.height = 16;
		this.frame = 0;
		this.onScreen = 1;
	}
};
// Falling Trees
var TreeFallExplosion3 = {
	color: "#999900",
	x: -9000,
	y: -9000,
	timeLeft: 0,
	width: 576,
	height: 16,
	frame: 0,
	onScreen: 0,
	
	draw: function(){
		if(this.onScreen == 1){
			ctx.globalAlpha = Alpha*0.5;
			ctx.fillStyle = this.color;
			ctx.fillRect(this.x-this.width/2,this.y-this.height/2,this.width, this.height);
			ctx.globalAlpha = Alpha;
		}
	},
	move: function(){
		if(this.frame == 10){
			this.x = -9000;
			this.y = -9000;
			this.height = 16;
			this.onScreen = 0;
		}
		else{
			this.height = 16 + (16*this.frame);
			this.frame++;
			if(collision(player.dir, player, this)){
				if(darkwater.onScreen == 1 && darkwater.hptimer == 0){
					darkwater.hptimer = 20;
					darkwater.hp-=1;
					hptimer = 20;
				}				
				else if(hptimer <= 0){
					player.hp-=1;
					onDmg.currentTime=0;
					onDmg.play();
					hptimer = 30;
				}
			}
		}
	},
	// Spawn
	shoot: function(){
		Explosion.currentTime=0;
		Explosion.play();
		this.height = 16;
		this.frame = 0;
		this.onScreen = 1;
	}
};
// Falling Trees
var TreeFallExplosion4 = {
	color: "#999900",
	x: -9000,
	y: -9000,
	timeLeft: 0,
	width: 576,
	height: 16,
	frame: 0,
	onScreen: 0,
	
	draw: function(){
		if(this.onScreen == 1){
			ctx.globalAlpha = Alpha*0.5;
			ctx.fillStyle = this.color;
			ctx.fillRect(this.x-this.width/2,this.y-this.height/2,this.width, this.height);
			ctx.globalAlpha = Alpha;
		}
	},
	move: function(){
		if(this.frame == 10){
			this.x = -9000;
			this.y = -9000;
			this.height = 16;
			this.onScreen = 0;
		}
		else{
			this.height = 16 + (16*this.frame);
			this.frame++;
			if(collision(player.dir, player, this)){
				if(darkwater.onScreen == 1 && darkwater.hptimer == 0){
					darkwater.hptimer = 20;
					darkwater.hp-=1;
					hptimer = 20;
				}				
				else if(hptimer <= 0){
					player.hp-=1;
					onDmg.currentTime=0;
					onDmg.play();
					hptimer = 30;
				}
			}
		}
	},
	// Spawn
	shoot: function(){
		Explosion.currentTime=0;
		Explosion.play();
		this.height = 16;
		this.frame = 0;
		this.onScreen = 1;
	}
};
var treeFallExplosions = {1: TreeFallExplosion, 2: TreeFallExplosion2, 3: TreeFallExplosion3, 4: TreeFallExplosion4};