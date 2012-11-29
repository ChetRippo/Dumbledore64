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
					ctx.globalAlpha = Alpha*0.5;
					ctx.drawImage(ThiefBossDashL, MasterThief.x - MasterThief.width * 0.5, MasterThief.y - MasterThief.height * 0.5 + 8);
					ctx.globalAlpha = Alpha*0.5;
					ctx.drawImage(ThiefBossDashL, MasterThief.x - MasterThief.width * 0.5, MasterThief.y - MasterThief.height * 0.5 + 24);
					ctx.globalAlpha = Alpha*0.25;
					ctx.drawImage(ThiefBossDashL, MasterThief.x - MasterThief.width * 0.5, MasterThief.y - MasterThief.height * 0.5 + 40);
					ctx.globalAlpha = Alpha*0.25;
					ctx.drawImage(ThiefBossDashL, MasterThief.x - MasterThief.width * 0.5, MasterThief.y - MasterThief.height * 0.5 + 56);
					ctx.globalAlpha = Alpha/6;
					ctx.drawImage(ThiefBossDashL, MasterThief.x - MasterThief.width * 0.5, MasterThief.y - MasterThief.height * 0.5 + 72);
					ctx.globalAlpha = Alpha/6;
					ctx.drawImage(ThiefBossDashL, MasterThief.x - MasterThief.width * 0.5, MasterThief.y - MasterThief.height * 0.5 + 88);
				}
				else{
					ctx.globalAlpha = Alpha*0.5;
					ctx.drawImage(ThiefBossDashR, MasterThief.x - MasterThief.width * 0.5, MasterThief.y - MasterThief.height * 0.5 + 8);
					ctx.globalAlpha = Alpha*0.5;
					ctx.drawImage(ThiefBossDashR, MasterThief.x - MasterThief.width * 0.5, MasterThief.y - MasterThief.height * 0.5 + 24);
					ctx.globalAlpha = Alpha*0.25;
					ctx.drawImage(ThiefBossDashR, MasterThief.x - MasterThief.width * 0.5, MasterThief.y - MasterThief.height * 0.5 + 40);
					ctx.globalAlpha = Alpha*0.25;
					ctx.drawImage(ThiefBossDashR, MasterThief.x - MasterThief.width * 0.5, MasterThief.y - MasterThief.height * 0.5 + 56);
					ctx.globalAlpha = Alpha/6;
					ctx.drawImage(ThiefBossDashR, MasterThief.x - MasterThief.width * 0.5, MasterThief.y - MasterThief.height * 0.5 + 72);
					ctx.globalAlpha = Alpha/6;
					ctx.drawImage(ThiefBossDashR, MasterThief.x - MasterThief.width * 0.5, MasterThief.y - MasterThief.height * 0.5 + 88);
				}
			}
			if(MasterThief.dir == "S"){
				if(MasterThief.LR == "Left"){
					ctx.globalAlpha = Alpha*0.5;
					ctx.drawImage(ThiefBossDashL, MasterThief.x - MasterThief.width * 0.5, MasterThief.y - MasterThief.height * 0.5 - 8);
					ctx.globalAlpha = Alpha*0.5;
					ctx.drawImage(ThiefBossDashL, MasterThief.x - MasterThief.width * 0.5, MasterThief.y - MasterThief.height * 0.5 - 24);
					ctx.globalAlpha = Alpha*0.25;
					ctx.drawImage(ThiefBossDashL, MasterThief.x - MasterThief.width * 0.5, MasterThief.y - MasterThief.height * 0.5 - 40);
					ctx.globalAlpha = Alpha*0.25;
					ctx.drawImage(ThiefBossDashL, MasterThief.x - MasterThief.width * 0.5, MasterThief.y - MasterThief.height * 0.5 - 56);
					ctx.globalAlpha = Alpha/6;
					ctx.drawImage(ThiefBossDashL, MasterThief.x - MasterThief.width * 0.5, MasterThief.y - MasterThief.height * 0.5 - 72);
					ctx.globalAlpha = Alpha/6;
					ctx.drawImage(ThiefBossDashL, MasterThief.x - MasterThief.width * 0.5, MasterThief.y - MasterThief.height * 0.5 - 88);
				}
				else{
					ctx.globalAlpha = Alpha*0.5;
					ctx.drawImage(ThiefBossDashR, MasterThief.x - MasterThief.width * 0.5, MasterThief.y - MasterThief.height * 0.5 - 8);
					ctx.globalAlpha = Alpha*0.5;
					ctx.drawImage(ThiefBossDashR, MasterThief.x - MasterThief.width * 0.5, MasterThief.y - MasterThief.height * 0.5 - 24);
					ctx.globalAlpha = Alpha*0.25;
					ctx.drawImage(ThiefBossDashR, MasterThief.x - MasterThief.width * 0.5, MasterThief.y - MasterThief.height * 0.5 - 40);
					ctx.globalAlpha = Alpha*0.25;
					ctx.drawImage(ThiefBossDashR, MasterThief.x - MasterThief.width * 0.5, MasterThief.y - MasterThief.height * 0.5 - 56);
					ctx.globalAlpha = Alpha/6;
					ctx.drawImage(ThiefBossDashR, MasterThief.x - MasterThief.width * 0.5, MasterThief.y - MasterThief.height * 0.5 - 72);
					ctx.globalAlpha = Alpha/6;
					ctx.drawImage(ThiefBossDashR, MasterThief.x - MasterThief.width * 0.5, MasterThief.y - MasterThief.height * 0.5 - 88);
				}
			}
			if(MasterThief.dir == "A"){
				ctx.globalAlpha = Alpha*0.5;
				ctx.drawImage(ThiefBossDashL, MasterThief.x - MasterThief.width * 0.5 + 8, MasterThief.y - MasterThief.height * 0.5);
				ctx.globalAlpha = Alpha*0.5;
				ctx.drawImage(ThiefBossDashL, MasterThief.x - MasterThief.width * 0.5 + 24, MasterThief.y - MasterThief.height * 0.5);
				ctx.globalAlpha = Alpha*0.25;
				ctx.drawImage(ThiefBossDashL, MasterThief.x - MasterThief.width * 0.5 + 40, MasterThief.y - MasterThief.height * 0.5);
				ctx.globalAlpha = Alpha*0.25;
				ctx.drawImage(ThiefBossDashL, MasterThief.x - MasterThief.width * 0.5 + 56, MasterThief.y - MasterThief.height * 0.5);
				ctx.globalAlpha = Alpha/6;
				ctx.drawImage(ThiefBossDashL, MasterThief.x - MasterThief.width * 0.5 + 72, MasterThief.y - MasterThief.height * 0.5);
				ctx.globalAlpha = Alpha/6;
				ctx.drawImage(ThiefBossDashL, MasterThief.x - MasterThief.width * 0.5 + 88, MasterThief.y - MasterThief.height * 0.5);
			}
			if(MasterThief.dir == "D"){
				ctx.globalAlpha = Alpha*0.5;
				ctx.drawImage(ThiefBossDashR, MasterThief.x - MasterThief.width * 0.5 - 8, MasterThief.y - MasterThief.height * 0.5);
				ctx.globalAlpha = Alpha*0.5;
				ctx.drawImage(ThiefBossDashR, MasterThief.x - MasterThief.width * 0.5 - 24, MasterThief.y - MasterThief.height * 0.5);
				ctx.globalAlpha = Alpha*0.25;
				ctx.drawImage(ThiefBossDashR, MasterThief.x - MasterThief.width * 0.5 - 40, MasterThief.y - MasterThief.height * 0.5);
				ctx.globalAlpha = Alpha*0.25;
				ctx.drawImage(ThiefBossDashR, MasterThief.x - MasterThief.width * 0.5 - 56, MasterThief.y - MasterThief.height * 0.5);
				ctx.globalAlpha = Alpha/6;
				ctx.drawImage(ThiefBossDashR, MasterThief.x - MasterThief.width * 0.5 - 72, MasterThief.y - MasterThief.height * 0.5);
				ctx.globalAlpha = Alpha/6;
				ctx.drawImage(ThiefBossDashR, MasterThief.x - MasterThief.width * 0.5 - 88, MasterThief.y - MasterThief.height * 0.5);
			}
			if(MasterThief.dir == "WD"){
				ctx.globalAlpha = Alpha*0.5;
				ctx.drawImage(ThiefBossDashR, MasterThief.x - MasterThief.width * 0.5 - 8, MasterThief.y - MasterThief.height * 0.5 + 8);
				ctx.globalAlpha = Alpha*0.5;
				ctx.drawImage(ThiefBossDashR, MasterThief.x - MasterThief.width * 0.5 - 24, MasterThief.y - MasterThief.height * 0.5 + 24);
				ctx.globalAlpha = Alpha*0.25;
				ctx.drawImage(ThiefBossDashR, MasterThief.x - MasterThief.width * 0.5 - 40, MasterThief.y - MasterThief.height * 0.5 + 40);
				ctx.globalAlpha = Alpha*0.25;
				ctx.drawImage(ThiefBossDashR, MasterThief.x - MasterThief.width * 0.5 - 56, MasterThief.y - MasterThief.height * 0.5 + 56);
				ctx.globalAlpha = Alpha/6;
				ctx.drawImage(ThiefBossDashR, MasterThief.x - MasterThief.width * 0.5 - 72, MasterThief.y - MasterThief.height * 0.5 + 72);
				ctx.globalAlpha = Alpha/6;
				ctx.drawImage(ThiefBossDashR, MasterThief.x - MasterThief.width * 0.5 - 88, MasterThief.y - MasterThief.height * 0.5 + 88);
			}
			if(MasterThief.dir == "WA"){
				ctx.globalAlpha = Alpha*0.5;
				ctx.drawImage(ThiefBossDashL, MasterThief.x - MasterThief.width * 0.5 + 8, MasterThief.y - MasterThief.height * 0.5 + 8);
				ctx.globalAlpha = Alpha*0.5;
				ctx.drawImage(ThiefBossDashL, MasterThief.x - MasterThief.width * 0.5 + 24, MasterThief.y - MasterThief.height * 0.5 + 24);
				ctx.globalAlpha = Alpha*0.25;
				ctx.drawImage(ThiefBossDashL, MasterThief.x - MasterThief.width * 0.5 + 40, MasterThief.y - MasterThief.height * 0.5 + 40);
				ctx.globalAlpha = Alpha*0.25;
				ctx.drawImage(ThiefBossDashL, MasterThief.x - MasterThief.width * 0.5 + 56, MasterThief.y - MasterThief.height * 0.5 + 56);
				ctx.globalAlpha = Alpha/6;
				ctx.drawImage(ThiefBossDashL, MasterThief.x - MasterThief.width * 0.5 + 72, MasterThief.y - MasterThief.height * 0.5 + 72);
				ctx.globalAlpha = Alpha/6;
				ctx.drawImage(ThiefBossDashL, MasterThief.x - MasterThief.width * 0.5 + 88, MasterThief.y - MasterThief.height * 0.5 + 88);
			}
			if(MasterThief.dir == "AS"){
				ctx.globalAlpha = Alpha*0.5;
				ctx.drawImage(ThiefBossDashL, MasterThief.x - MasterThief.width * 0.5 + 8, MasterThief.y - MasterThief.height * 0.5 - 8);
				ctx.globalAlpha = Alpha*0.5;
				ctx.drawImage(ThiefBossDashL, MasterThief.x - MasterThief.width * 0.5 + 24, MasterThief.y - MasterThief.height * 0.5 - 24);
				ctx.globalAlpha = Alpha*0.25;
				ctx.drawImage(ThiefBossDashL, MasterThief.x - MasterThief.width * 0.5 + 40, MasterThief.y - MasterThief.height * 0.5 - 40);
				ctx.globalAlpha = Alpha*0.25;
				ctx.drawImage(ThiefBossDashL, MasterThief.x - MasterThief.width * 0.5 + 56, MasterThief.y - MasterThief.height * 0.5 - 56);
				ctx.globalAlpha = Alpha/6;
				ctx.drawImage(ThiefBossDashL, MasterThief.x - MasterThief.width * 0.5 + 72, MasterThief.y - MasterThief.height * 0.5 - 72);
				ctx.globalAlpha = Alpha/6;
				ctx.drawImage(ThiefBossDashL, MasterThief.x - MasterThief.width * 0.5 + 88, MasterThief.y - MasterThief.height * 0.5 - 88);
			}
			if(MasterThief.dir == "SD"){
				ctx.globalAlpha = Alpha*0.5;
				ctx.drawImage(ThiefBossDashR, MasterThief.x - MasterThief.width * 0.5 - 8, MasterThief.y - MasterThief.height * 0.5 - 8);
				ctx.globalAlpha = Alpha*0.5;
				ctx.drawImage(ThiefBossDashR, MasterThief.x - MasterThief.width * 0.5 - 24, MasterThief.y - MasterThief.height * 0.5 - 24);
				ctx.globalAlpha = Alpha*0.25;
				ctx.drawImage(ThiefBossDashR, MasterThief.x - MasterThief.width * 0.5 - 40, MasterThief.y - MasterThief.height * 0.5 - 40);
				ctx.globalAlpha = Alpha*0.25;
				ctx.drawImage(ThiefBossDashR, MasterThief.x - MasterThief.width * 0.5 - 56, MasterThief.y - MasterThief.height * 0.5 - 56);
				ctx.globalAlpha = Alpha/6;
				ctx.drawImage(ThiefBossDashR, MasterThief.x - MasterThief.width * 0.5 - 72, MasterThief.y - MasterThief.height * 0.5 - 72);
				ctx.globalAlpha = Alpha/6;
				ctx.drawImage(ThiefBossDashR, MasterThief.x - MasterThief.width * 0.5 - 88, MasterThief.y - MasterThief.height * 0.5 - 88);
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
				ctx.fillRect(this.x1-this.width*0.5, this.y1-this.height*0.5, this.width, this.height);
				this.width = this.width + 16 * this.frame;
				this.height = this.height + 16 * this.frame;
				this.frame++;
			}
			else if(this.frame < 8){
				ctx.fillRect(this.x1-this.width*0.5, this.y1-this.height*0.5, this.width, this.height);
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
			ctx.fillRect(this.x-this.width*0.5,this.y-this.height*0.5,this.width, this.height);
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
					if(MasterThief.onScreen == 1){
						AList[4] = false;
					}
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
			ctx.fillRect(this.x-this.width*0.5,this.y-this.height*0.5,this.width, this.height);
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
					if(MasterThief.onScreen == 1){
						AList[4] = false;
					}
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
			ctx.fillRect(this.x-this.width*0.5,this.y-this.height*0.5,this.width, this.height);
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
					if(MasterThief.onScreen == 1){
						AList[4] = false;
					}
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
			ctx.fillRect(this.x-this.width*0.5,this.y-this.height*0.5,this.width, this.height);
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
					if(MasterThief.onScreen == 1){
						AList[4] = false;
					}
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
var TreeFallExplosion5 = {
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
			ctx.fillRect(this.x-this.width*0.5,this.y-this.height*0.5,this.width, this.height);
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
					if(MasterThief.onScreen == 1){
						AList[4] = false;
					}
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
var TreeFallExplosion6 = {
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
			ctx.fillRect(this.x-this.width*0.5,this.y-this.height*0.5,this.width, this.height);
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
					if(MasterThief.onScreen == 1){
						AList[4] = false;
					}
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
var TreeFallExplosion7 = {
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
			ctx.fillRect(this.x-this.width*0.5,this.y-this.height*0.5,this.width, this.height);
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
					if(MasterThief.onScreen == 1){
						AList[4] = false;
					}
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
var TreeFallExplosion8 = {
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
			ctx.fillRect(this.x-this.width*0.5,this.y-this.height*0.5,this.width, this.height);
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
					if(MasterThief.onScreen == 1){
						AList[4] = false;
					}
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
var treeFallExplosions = {1: TreeFallExplosion, 2: TreeFallExplosion2, 3: TreeFallExplosion3, 4: TreeFallExplosion4, 5: TreeFallExplosion5, 6: TreeFallExplosion6, 7: TreeFallExplosion7, 8: TreeFallExplosion8};
//------------------------------------------------------------ Genie Moves ----------------------------------------------------------//
var LaserUpAttack = {
	width: 5,
	height: 5,
	frame: 1,
	onScreen: 0,
	LR: "Right",
	
	draw: function(){
		if(this.onScreen == 1){
			if(this.LR == "Left"){
				ctx.drawImage(LaserUpsL[this.frame], Genie.x-Genie.width*0.5-64-104-480, Genie.y-Genie.height*0.5-124 - 124+156);
				this.frame++;
				if(this.frame>16){
					this.frame = 1;
					this.onScreen = 0;
					Genie.movement = true;
					Genie.lasering = false;
				}
			}
			else{
				ctx.drawImage(LaserUpsR[this.frame], Genie.x-Genie.width*0.5-64-104+200, Genie.y-Genie.height*0.5-124 - 124+156);
				this.frame++;
				if(this.frame>16){
					this.frame = 1;
					this.onScreen = 0;
					Genie.movement = true;
					Genie.lasering = false;
				}
			}
		}
	},
	move: function(){
		if(this.onScreen == 1){
			//change dim based on frame x is drawn x + given x from .txt file, same with y
			if(this.LR == "Left"){
				if(this.frame < 4){
					this.width = 24;
					this.height = 36;
					this.x = Genie.x-Genie.width*0.5-64-104-480+532+this.width*0.5;
					this.y = Genie.y-Genie.height*0.5-124 - 124+156 + 288 + this.height*0.5;
				}
				else if(this.frame < 6){
					this.width = 40;
					this.height = 49;
					this.x = Genie.x-Genie.width*0.5-64-104-480+491+this.width*0.5;
					this.y = Genie.y-Genie.height*0.5-124 - 124+156 + 279 + this.height*0.5;
				}
				else if(this.frame < 8){
					this.width = 44;
					this.height = 51;
					this.x = Genie.x-Genie.width*0.5-64-104-480+456+this.width*0.5;
					this.y = Genie.y-Genie.height*0.5-124 - 124+156 + 279 + this.height*0.5;
				}
				else if(this.frame < 9){
					this.width = 62;
					this.height = 56;
					this.x = Genie.x-Genie.width*0.5-64-104-480+415+this.width*0.5;
					this.y = Genie.y-Genie.height*0.5-124 - 124+156 + 271 + this.height*0.5;
				}
				else if(this.frame < 10){
					this.width = 72;
					this.height = 64;
					this.x = Genie.x-Genie.width*0.5-64-104-480+360+this.width*0.5;
					this.y = Genie.y-Genie.height*0.5-124 - 124+156 + 256 + this.height*0.5;
				}
				else if(this.frame < 11){
					this.width = 90;
					this.height = 80;
					this.x = Genie.x-Genie.width*0.5-64-104-480+269+this.width*0.5;
					this.y = Genie.y-Genie.height*0.5-124 - 124+156 + 220 + this.height*0.5;
				}
				else if(this.frame < 12){
					this.width = 126;
					this.height = 85;
					this.x = Genie.x-Genie.width*0.5-64-104-480+139+this.width*0.5;
					this.y = Genie.y-Genie.height*0.5-124 - 124+156 + 192 + this.height*0.5;
				}
				else if(this.frame < 14){
					this.width = 105;
					this.height = 76;
					this.x = Genie.x-Genie.width*0.5-64-104-480+83+this.width*0.5;
					this.y = Genie.y-Genie.height*0.5-124 - 124+156 + 156 + this.height*0.5;
				}
				else{
					this.width = 55;
					this.height = 144;
					this.x = Genie.x-Genie.width*0.5-64-104-480+78+this.width*0.5;
					this.y = Genie.y-Genie.height*0.5-124 - 124+156 + 61 + this.height*0.5;
				}
			}
			else{
				if(this.frame < 4){
					this.width = 24;
					this.height = 36;
					this.x = Genie.x-Genie.width*0.5-64-104+200+100+this.width*0.5;
					this.y = Genie.y-Genie.height*0.5-124 - 124+156 + 288 + this.height*0.5;
				}
				else if(this.frame < 6){
					this.width = 40;
					this.height = 49;
					this.x = Genie.x-Genie.width*0.5-64-104+200+125+this.width*0.5;
					this.y = Genie.y-Genie.height*0.5-124 - 124+156 + 279 + this.height*0.5;
				}
				else if(this.frame < 8){
					this.width = 44;
					this.height = 51;
					this.x = Genie.x-Genie.width*0.5-64-104+200+156+this.width*0.5;
					this.y = Genie.y-Genie.height*0.5-124 - 124+156 + 279 + this.height*0.5;
				}
				else if(this.frame < 9){
					this.width = 62;
					this.height = 56;
					this.x = Genie.x-Genie.width*0.5-64-104+200+179+this.width*0.5;
					this.y = Genie.y-Genie.height*0.5-124 - 124+156 + 271 + this.height*0.5;
				}
				else if(this.frame < 10){
					this.width = 72;
					this.height = 64;
					this.x = Genie.x-Genie.width*0.5-64-104+200+224+this.width*0.5;
					this.y = Genie.y-Genie.height*0.5-124 - 124+156 + 256 + this.height*0.5;
				}
				else if(this.frame < 11){
					this.width = 90;
					this.height = 80;
					this.x = Genie.x-Genie.width*0.5-64-104+200+297+this.width*0.5;
					this.y = Genie.y-Genie.height*0.5-124 - 124+156 + 220 + this.height*0.5;
				}
				else if(this.frame < 12){
					this.width = 126;
					this.height = 85;
					this.x = Genie.x-Genie.width*0.5-64-104+200+391+this.width*0.5;
					this.y = Genie.y-Genie.height*0.5-124 - 124+156 + 192 + this.height*0.5;
				}
				else if(this.frame < 14){
					this.width = 105;
					this.height = 76;
					this.x = Genie.x-Genie.width*0.5-64-104+200+468+this.width*0.5;
					this.y = Genie.y-Genie.height*0.5-124 - 124+156 + 156 + this.height*0.5;
				}
				else{
					this.width = 55;
					this.height = 144;
					this.x = Genie.x-Genie.width*0.5-64-104+200+523+this.width*0.5;
					this.y = Genie.y-Genie.height*0.5-124 - 124+156 + 61 + this.height*0.5;
				}
			}
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
					AList[5] = false;
				}
			}
		}
	}
};
var LaserFdAttack = {
	width: 5,
	height: 5,
	frame: 1,
	onScreen: 0,
	LR: "Right",
	
	draw: function(){
		if(this.onScreen == 1){
			if(this.LR == "Left"){
				ctx.drawImage(LaserFdsL[this.frame], Genie.x-Genie.width*0.5-64-104-480, Genie.y-Genie.height*0.5-124 - 124+156);
				this.frame++;
				if(this.frame>16){
					this.frame = 1;
					this.onScreen = 0;
					Genie.movement = true;
					Genie.lasering = false;
				}
			}
			else{
				ctx.drawImage(LaserFdsR[this.frame], Genie.x-Genie.width*0.5-64-104+200, Genie.y-Genie.height*0.5-124 - 124+156);
				this.frame++;
				if(this.frame>16){
					this.frame = 1;
					this.onScreen = 0;
					Genie.movement = true;
					Genie.lasering = false;
				}
			}
		}
	},
	move: function(){
		if(this.onScreen == 1){
			if(this.LR == "Left"){
				//change dim based on frame x is drawn x + given x from .txt file, same with y
				if(this.frame < 4){
					this.width = 43;
					this.height = 49;
					this.x = Genie.x-Genie.width*0.5-64-104-480+547+this.width*0.5;
					this.y = Genie.y-Genie.height*0.5-124 - 124+156 + 235 + this.height*0.5;
				}
				else if(this.frame < 6){
					this.width = 43;
					this.height = 49;
					this.x = Genie.x-Genie.width*0.5-64-104-480+500+this.width*0.5;
					this.y = Genie.y-Genie.height*0.5-124 - 124+156 + 213 + this.height*0.5;
				}
				else if(this.frame < 8){
					this.width = 42;
					this.height = 48;
					this.x = Genie.x-Genie.width*0.5-64-104-480+496+this.width*0.5;
					this.y = Genie.y-Genie.height*0.5-124 - 124+156 + 238 + this.height*0.5;
				}
				else if(this.frame < 9){
					this.width = 70;
					this.height = 55;
					this.x = Genie.x-Genie.width*0.5-64-104-480+432+this.width*0.5;
					this.y = Genie.y-Genie.height*0.5-124 - 124+156 + 208 + this.height*0.5;
				}
				else if(this.frame < 10){
					this.width = 83;
					this.height = 60;
					this.x = Genie.x-Genie.width*0.5-64-104-480+363+this.width*0.5;
					this.y = Genie.y-Genie.height*0.5-124 - 124+156 + 200 + this.height*0.5;
				}
				else if(this.frame < 11){
					this.width = 123;
					this.height = 60;
					this.x = Genie.x-Genie.width*0.5-64-104-480+240+this.width*0.5;
					this.y = Genie.y-Genie.height*0.5-124 - 124+156 + 200 + this.height*0.5;
				}
				else if(this.frame < 12){
					this.width = 111;
					this.height = 60;
					this.x = Genie.x-Genie.width*0.5-64-104-480+142+this.width*0.5;
					this.y = Genie.y-Genie.height*0.5-124 - 124+156 + 202 + this.height*0.5;
				}
				else if(this.frame < 14){
					this.width = 100;
					this.height = 60;
					this.x = Genie.x-Genie.width*0.5-64-104-480+90+this.width*0.5;
					this.y = Genie.y-Genie.height*0.5-124 - 124+156 + 207 + this.height*0.5;
				}
				else{
					this.width = 102;
					this.height = 60;
					this.x = Genie.x-Genie.width*0.5-64-104-480+48+this.width*0.5;
					this.y = Genie.y-Genie.height*0.5-124 - 124+156 + 209 + this.height*0.5;
				}
			}
			else{
				if(this.frame < 4){
					this.width = 43;
					this.height = 49;
					this.x = Genie.x-Genie.width*0.5-64-104+200+66+this.width*0.5;
					this.y = Genie.y-Genie.height*0.5-124 - 124+156 + 235 + this.height*0.5;
				}
				else if(this.frame < 6){
					this.width = 43;
					this.height = 49;
					this.x = Genie.x-Genie.width*0.5-64-104+200+113+this.width*0.5;
					this.y = Genie.y-Genie.height*0.5-124 - 124+156 + 213 + this.height*0.5;
				}
				else if(this.frame < 8){
					this.width = 42;
					this.height = 48;
					this.x = Genie.x-Genie.width*0.5-64-104+200+118+this.width*0.5;
					this.y = Genie.y-Genie.height*0.5-124 - 124+156 + 238 + this.height*0.5;
				}
				else if(this.frame < 9){
					this.width = 70;
					this.height = 55;
					this.x = Genie.x-Genie.width*0.5-64-104+200+154+this.width*0.5;
					this.y = Genie.y-Genie.height*0.5-124 - 124+156 + 208 + this.height*0.5;
				}
				else if(this.frame < 10){
					this.width = 83;
					this.height = 60;
					this.x = Genie.x-Genie.width*0.5-64-104+200+210+this.width*0.5;
					this.y = Genie.y-Genie.height*0.5-124 - 124+156 + 200 + this.height*0.5;
				}
				else if(this.frame < 11){
					this.width = 123;
					this.height = 60;
					this.x = Genie.x-Genie.width*0.5-64-104+200+293+this.width*0.5;
					this.y = Genie.y-Genie.height*0.5-124 - 124+156 + 200 + this.height*0.5;
				}
				else if(this.frame < 12){
					this.width = 111;
					this.height = 60;
					this.x = Genie.x-Genie.width*0.5-64-104+200+403+this.width*0.5;
					this.y = Genie.y-Genie.height*0.5-124 - 124+156 + 202 + this.height*0.5;
				}
				else if(this.frame < 14){
					this.width = 100;
					this.height = 60;
					this.x = Genie.x-Genie.width*0.5-64-104+200+466+this.width*0.5;
					this.y = Genie.y-Genie.height*0.5-124 - 124+156 + 207 + this.height*0.5;
				}
				else{
					this.width = 102;
					this.height = 60;
					this.x = Genie.x-Genie.width*0.5-64-104+200+506+this.width*0.5;
					this.y = Genie.y-Genie.height*0.5-124 - 124+156 + 209 + this.height*0.5;
				}
			}
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
					AList[5] = false;
				}
			}
		}
	}
};
var LaserDAttack = {
	width: 5,
	height: 5,
	frame: 1,
	onScreen: 0,
	LR: "Right",
	
	draw: function(){
		if(this.onScreen == 1){
			if(this.LR == "Left"){
				ctx.drawImage(LaserDsL[this.frame], Genie.x-Genie.width*0.5-64-104-480, Genie.y-Genie.height*0.5-124 - 124+156);
				this.frame++;
				if(this.frame>16){
					this.frame = 1;
					this.onScreen = 0;
					Genie.movement = true;
					Genie.lasering = false;
				}
			}
			else{
				ctx.drawImage(LaserDsR[this.frame], Genie.x-Genie.width*0.5-64-104+200, Genie.y-Genie.height*0.5-124 - 124+156);
				this.frame++;
				if(this.frame>16){
					this.frame = 1;
					this.onScreen = 0;
					Genie.movement = true;
					Genie.lasering = false;
				}
			}
		}
	},
	move: function(){
		if(this.onScreen == 1){
			if(this.LR == "Left"){
				//change dim based on frame x is drawn x + given x from .txt file, same with y
				if(this.frame < 4){
					this.width = 45;
					this.height = 44;
					this.x = Genie.x-Genie.width*0.5-64-104-480+512+this.width*0.5;
					this.y = Genie.y-Genie.height*0.5-124 - 124+156 + 149 + this.height*0.5;
				}
				else if(this.frame < 6){
					this.width = 45;
					this.height = 44;
					this.x = Genie.x-Genie.width*0.5-64-104-480+495+this.width*0.5;
					this.y = Genie.y-Genie.height*0.5-124 - 124+156 + 149 + this.height*0.5;
				}//
				else if(this.frame < 8){
					this.width = 48;
					this.height = 48;
					this.x = Genie.x-Genie.width*0.5-64-104-480+473+this.width*0.5;
					this.y = Genie.y-Genie.height*0.5-124 - 124+156 + 148 + this.height*0.5;
				}
				else if(this.frame < 9){
					this.width = 68;
					this.height = 50;
					this.x = Genie.x-Genie.width*0.5-64-104-480+430+this.width*0.5;
					this.y = Genie.y-Genie.height*0.5-124 - 124+156 + 152 + this.height*0.5;
				}
				else if(this.frame < 10){
					this.width = 90;
					this.height = 56;
					this.x = Genie.x-Genie.width*0.5-64-104-480+368+this.width*0.5;
					this.y = Genie.y-Genie.height*0.5-124 - 124+156 + 168 + this.height*0.5;
				}
				else if(this.frame < 11){
					this.width = 131;
					this.height = 61;
					this.x = Genie.x-Genie.width*0.5-64-104-480+244+this.width*0.5;
					this.y = Genie.y-Genie.height*0.5-124 - 124+156 + 205 + this.height*0.5;
				}
				else if(this.frame < 12){
					this.width = 100;
					this.height = 60;
					this.x = Genie.x-Genie.width*0.5-64-104-480+107+this.width*0.5;
					this.y = Genie.y-Genie.height*0.5-124 - 124+156 + 274 + this.height*0.5;
				}
				else if(this.frame < 14){
					this.width = 95;
					this.height = 67;
					this.x = Genie.x-Genie.width*0.5-64-104-480+48+this.width*0.5;
					this.y = Genie.y-Genie.height*0.5-124 - 124+156 + 338 + this.height*0.5;
				}
				else{
					this.width = 95;
					this.height = 67;
					this.x = Genie.x-Genie.width*0.5-64-104-480+25+this.width*0.5;
					this.y = Genie.y-Genie.height*0.5-124 - 124+156 + 363 + this.height*0.5;
				}
			}
			else{
				if(this.frame < 4){
					this.width = 45;
					this.height = 44;
					this.x = Genie.x-Genie.width*0.5-64-104+200+99+this.width*0.5;
					this.y = Genie.y-Genie.height*0.5-124 - 124+156 + 149 + this.height*0.5;
				}
				else if(this.frame < 6){
					this.width = 45;
					this.height = 44;
					this.x = Genie.x-Genie.width*0.5-64-104+200+116+this.width*0.5;
					this.y = Genie.y-Genie.height*0.5-124 - 124+156 + 149 + this.height*0.5;
				}
				else if(this.frame < 8){
					this.width = 48;
					this.height = 48;
					this.x = Genie.x-Genie.width*0.5-64-104+200+135+this.width*0.5;
					this.y = Genie.y-Genie.height*0.5-124 - 124+156 + 148 + this.height*0.5;
				}
				else if(this.frame < 9){
					this.width = 68;
					this.height = 50;
					this.x = Genie.x-Genie.width*0.5-64-104+200+158+this.width*0.5;
					this.y = Genie.y-Genie.height*0.5-124 - 124+156 + 152 + this.height*0.5;
				}
				else if(this.frame < 10){
					this.width = 90;
					this.height = 56;
					this.x = Genie.x-Genie.width*0.5-64-104+200+198+this.width*0.5;
					this.y = Genie.y-Genie.height*0.5-124 - 124+156 + 168 + this.height*0.5;
				}
				else if(this.frame < 11){
					this.width = 131;
					this.height = 61;
					this.x = Genie.x-Genie.width*0.5-64-104+200+281+this.width*0.5;
					this.y = Genie.y-Genie.height*0.5-124 - 124+156 + 205 + this.height*0.5;
				}
				else if(this.frame < 12){
					this.width = 100;
					this.height = 60;
					this.x = Genie.x-Genie.width*0.5-64-104+200+449+this.width*0.5;
					this.y = Genie.y-Genie.height*0.5-124 - 124+156 + 274 + this.height*0.5;
				}
				else if(this.frame < 14){
					this.width = 95;
					this.height = 67;
					this.x = Genie.x-Genie.width*0.5-64-104+200+513+this.width*0.5;
					this.y = Genie.y-Genie.height*0.5-124 - 124+156 + 338 + this.height*0.5;
				}
				else{
					this.width = 95;
					this.height = 67;
					this.x = Genie.x-Genie.width*0.5-64-104+200+536+this.width*0.5;
					this.y = Genie.y-Genie.height*0.5-124 - 124+156 + 363 + this.height*0.5;
				}
			}
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
					AList[5] = false;
				}
			}
		}
	}
};
//----------------------------------------------------------- Anubis Moves ----------------------------------------------------------//
//slopes of possible dirs
//just shot set //set 2 (continue circle, change dir to opposite //NO 4 RIGHT NOW
var AnubisProjArray = {0: -4, 1: -3, 2: -2, 3: -1, 4: -0.75, 5: -0.5, 6: -0.25, 7: 0, 8: 0.25, 9: 0.5, 10: 0.75, 11: 1, 12: 2, 13: 3, 14: 4};
var AnubisProj1 = {
	type: "Proj",
	x: 9000,
	onTree: 0,
	y: -400,
	width: 16,
	height: 16,
	speed: 6,
	speed2: 1,
	dirct: 0,
	dir: "A",
	slope: 1,
	closestSlope: 1,
	slopeIndex: 11,
	respawn: -1,
	rp: -1,
	onScreen: 0,
	found: true,
	index: 1,
	pts: 0,
	frame: 0,
	dirct: 0,
	dirSwitch: false,
	destDir: "",
	draw: function(){
		if(this.onScreen){
			ctx.drawImage(AnubisProjLoop[Math.ceil(this.index*0.5)], this.x-this.width*0.5, this.y-this.height*0.5);
			this.index++;
			if(this.index > 6){
				this.index = 1;
			}
			this.frame++;
			if(collision(player.dir, player, this) || contained(player, this)){
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
				this.x = 9000;
				this.y = -400;
				this.width = 16;
				this.height = 16;
				this.dirct = 0;
				this.dir = "A";
				this.slope = 1;
				this.closestSlope = 1;
				this.slopeIndex = 11;
				this.respawn = -1;
				this.onScreen = 0;
				this.found = true;
				this.frame = 0;
				this.dirct = 0;
				this.dirSwitch = false;
				this.destDir = "";
			}
		}
	}
};
var AnubisProj2 = {
	type: "Proj",
	x: 9000,
	onTree: 0,
	y: -400,
	width: 16,
	height: 16,
	speed: 6,
	speed2: 1,
	dirct: 0,
	dir: "A",
	slope: 1,
	closestSlope: 1,
	slopeIndex: 11,
	respawn: -1,
	rp: -1,
	onScreen: 0,
	found: true,
	index: 1,
	pts: 0,
	frame: 0,
	dirct: 0,
	dirSwitch: false,
	destDir: "",
	draw: function(){
		if(this.onScreen){
			ctx.drawImage(AnubisProjLoop[Math.ceil(this.index*0.5)], this.x-this.width*0.5, this.y-this.height*0.5);
			this.index++;
			if(this.index > 6){
				this.index = 1;
			}
			this.frame++;
			if(collision(player.dir, player, this) || contained(player, this)){
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
				this.x = 9000;
				this.y = -400;
				this.width = 16;
				this.height = 16;
				this.dirct = 0;
				this.dir = "A";
				this.slope = 1;
				this.closestSlope = 1;
				this.slopeIndex = 11;
				this.respawn = -1;
				this.onScreen = 0;
				this.found = true;
				this.frame = 0;
				this.dirct = 0;
				this.dirSwitch = false;
				this.destDir = "";
			}
		}
	}
};
var AnubisProj3 = {
	type: "Proj",
	x: 9000,
	onTree: 0,
	y: -400,
	width: 16,
	height: 16,
	speed: 6,
	speed2: 1,
	dirct: 0,
	dir: "A",
	slope: 1,
	closestSlope: 1,
	slopeIndex: 11,
	respawn: -1,
	rp: -1,
	onScreen: 0,
	found: true,
	index: 1,
	pts: 0,
	frame: 0,
	dirct: 0,
	dirSwitch: false,
	destDir: "",
	draw: function(){
		if(this.onScreen){
			ctx.drawImage(AnubisProjLoop[Math.ceil(this.index*0.5)], this.x-this.width*0.5, this.y-this.height*0.5);
			this.index++;
			if(this.index > 6){
				this.index = 1;
			}
			this.frame++;
			//dmg player and disappear
			if(collision(player.dir, player, this) || contained(player, this)){
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
				this.x = 9000;
				this.y = -400;
				this.width = 16;
				this.height = 16;
				this.dirct = 0;
				this.dir = "A";
				this.slope = 1;
				this.closestSlope = 1;
				this.slopeIndex = 11;
				this.respawn = -1;
				this.onScreen = 0;
				this.found = true;
				this.frame = 0;
				this.dirct = 0;
				this.dirSwitch = false;
				this.destDir = "";
			}
		}
	}
};
var AnubisProj4 = {
	type: "Proj",
	x: 9000,
	onTree: 0,
	y: -400,
	width: 16,
	height: 16,
	speed: 6,
	speed2: 1,
	dirct: 0,
	dir: "A",
	slope: 1,
	closestSlope: 1,
	slopeIndex: 11,
	respawn: -1,
	rp: -1,
	onScreen: 0,
	found: true,
	index: 1,
	pts: 0,
	frame: 0,
	dirct: 0,
	dirSwitch: false,
	destDir: "",
	draw: function(){
		if(this.onScreen){
			ctx.drawImage(AnubisProjLoop[Math.ceil(this.index*0.5)], this.x-this.width*0.5, this.y-this.height*0.5);
			this.index++;
			if(this.index > 6){
				this.index = 1;
			}
			this.frame++;
			if(collision(player.dir, player, this) || contained(player, this)){
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
				this.x = 9000;
				this.y = -400;
				this.width = 16;
				this.height = 16;
				this.dirct = 0;
				this.dir = "A";
				this.slope = 1;
				this.closestSlope = 1;
				this.slopeIndex = 11;
				this.respawn = -1;
				this.onScreen = 0;
				this.found = true;
				this.frame = 0;
				this.dirct = 0;
				this.dirSwitch = false;
				this.destDir = "";
			}
		}
	}
};
var AnubisProj5 = {
	type: "Proj",
	x: 9000,
	onTree: 0,
	y: -400,
	width: 16,
	height: 16,
	speed: 6,
	speed2: 1,
	dirct: 0,
	dir: "A",
	slope: 1,
	closestSlope: 1,
	slopeIndex: 11,
	respawn: -1,
	rp: -1,
	onScreen: 0,
	found: true,
	index: 1,
	pts: 0,
	frame: 0,
	dirct: 0,
	dirSwitch: false,
	destDir: "",
	draw: function(){
		if(this.onScreen){
			ctx.drawImage(AnubisProjLoop[Math.ceil(this.index*0.5)], this.x-this.width*0.5, this.y-this.height*0.5);
			this.index++;
			if(this.index > 6){
				this.index = 1;
			}
			this.frame++;
			if(collision(player.dir, player, this) || contained(player, this)){
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
				this.x = 9000;
				this.y = -400;
				this.width = 16;
				this.height = 16;
				this.dirct = 0;
				this.dir = "A";
				this.slope = 1;
				this.closestSlope = 1;
				this.slopeIndex = 11;
				this.respawn = -1;
				this.onScreen = 0;
				this.found = true;
				this.frame = 0;
				this.dirct = 0;
				this.dirSwitch = false;
				this.destDir = "";
			}
		}
	}
};
var AnubisProj6 = {
	type: "Proj",
	x: 9000,
	onTree: 0,
	y: -400,
	width: 16,
	height: 16,
	speed: 6,
	speed2: 1,
	dirct: 0,
	dir: "A",
	slope: 1,
	closestSlope: 1,
	slopeIndex: 11,
	respawn: -1,
	rp: -1,
	onScreen: 0,
	found: true,
	index: 1,
	pts: 0,
	frame: 0,
	dirct: 0,
	dirSwitch: false,
	destDir: "",
	draw: function(){
		if(this.onScreen){
			ctx.drawImage(AnubisProjLoop[Math.ceil(this.index*0.5)], this.x-this.width*0.5, this.y-this.height*0.5);
			this.index++;
			if(this.index > 6){
				this.index = 1;
			}
			this.frame++;
			if(collision(player.dir, player, this) || contained(player, this)){
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
				this.x = 9000;
				this.y = -400;
				this.width = 16;
				this.height = 16;
				this.dirct = 0;
				this.dir = "A";
				this.slope = 1;
				this.closestSlope = 1;
				this.slopeIndex = 11;
				this.respawn = -1;
				this.onScreen = 0;
				this.found = true;
				this.frame = 0;
				this.dirct = 0;
				this.dirSwitch = false;
				this.destDir = "";
			}
		}
	}
};
var AnubisProjectileList = {1: AnubisProj1, 2: AnubisProj2, 3: AnubisProj3, 4: AnubisProj4, 5: AnubisProj5, 6: AnubisProj6};

//move projectile evenly on any line with any slope
//start somewhere, move fastish up left, slow down and change dirs rapidly, speed up and limit dir change
function moveAnubisProj(P){
	//if off screen, remove
	if(P.x < -8 || P.x > 808 || P.y < -8 || P.y > 584){
		P.x = 9000;
		P.y = -400;
		P.width = 16;
		P.height = 16;
		P.dirct = 0;
		P.dir = "A";
		P.slope = 1;
		P.closestSlope = 1;
		P.slopeIndex = 11;
		P.respawn = -1;
		P.onScreen = 0;
		P.found = true;
		P.frame = 0;
		P.dirct = 0;
		P.dirSwitch = false;
		P.destDir = "";
	}
	else if(P.onScreen){
		//AI - change speed to give cool effect
		if(P.frame > 45){
			P.speed = 16;
		}
		else if(P.frame > 30){
			P.speed = 12;
		}
		else if(P.frame > 25){
			P.speed = 10;
		}
		else if(P.frame > 20){
			P.speed = 6;
		}
		else if(P.frame > 10){
			P.speed = 2;
		}
		else if(P.frame > 5){
			P.speed = 4;
		}
		else{
			P.speed = 6;
		}
		if(P.dirct > 0){
			P.found = true;
			P.dirct-=1;
		}
		//if not in slope switching phase
		if((P.frame*0.25 == Math.round(P.frame*0.25) && P.dirct <=0 && P.frame < 45) || (P.frame*0.1 == Math.round(P.frame*0.1) && P.dirct <=0 && P.frame > 45)){
			var only1Switch = true;
			P.found = false;
		}
		//found = dir is correct, later it lets the orb change dir by making found false
		// after certain intervals (above)
		if(!P.found && !(P.slope == "Vertical")){
			//change direction
			if(player.x-player.width*0.5 < P.x-P.width*0.5){
				if(P.dir != "A"){
					P.dirSwitch = true;
					P.destDir = "A";
				}
				var playerSlope = (P.y-player.y)/(P.x-player.x);
			}
			else if(player.x - player.width*0.5 == P.x - P.width*0.5){
				P.dir = P.dir;
			}
			else{
				if(P.dir != "D"){
					P.dirSwitch = true;
					P.destDir = "D";
				}
				var playerSlope = (player.y-P.y)/(player.x-P.x);
			}
			if(P.dirSwitch){
				if(P.slopeIndex <= 7){
					P.slopeIndex-=1;
					if(P.slopeIndex < 0){
						P.slopeIndex = 14;
						P.dir = P.destDir;
						P.dirSwitch = false;
					}
					P.slope = AnubisProjArray[P.slopeIndex];
				}
				else{
					P.slopeIndex+=1;
					if(P.slopeIndex > 14){
						P.slopeIndex = 0;
						P.dir = P.destDir;
						P.dirSwitch = false;
					}
					P.slope = AnubisProjArray[P.slopeIndex];
				}
				//stop swap
				if(only1Switch){
					P.found = true;
				}
			}
			else{
				//find ideal slope
				for(N in AnubisProjArray){
					if(Math.abs(AnubisProjArray[N] - playerSlope) < Math.abs(P.closestSlope - playerSlope)){
						P.closestSlope = AnubisProjArray[N];
					}
				}
				//change slope
				if(P.closestSlope > P.slope){
					if(P.closestSlope > 1 && P.slope < -1){
						P.slopeIndex-=1;
						P.slope = AnubisProjArray[P.slopeIndex];
						if(P.slopeIndex < 0){
							P.slopeIndex = 14;
							P.slope = AnubisProjArray[P.slopeIndex];
						}
					}
					else{
						P.slopeIndex+=1;
						P.slope = AnubisProjArray[P.slopeIndex];
					}
				}
				if(P.closestSlope < P.slope || P.slope == "Vertical"){
					if(P.closestSlope < -1 && P.slope > 1){
						P.slopeIndex+=1;
						P.slope = AnubisProjArray[P.slopeIndex];
						if(P.slopeIndex > 14){
							P.slopeIndex = 0;
							P.slope = AnubisProjArray[P.slopeIndex];
						}
					}
					else{
						P.slopeIndex-=1;
						P.slope = AnubisProjArray[P.slopeIndex];
					}
				}
				//consider verticals
				if(P.x >= player.x - player.width*0.5 && P.x <= player.x + player.width*0.5){
					if(P.y-P.height*0.5 > player.y - player.height*0.5){
						P.dir = "A";
					}
					else{
						P.dir = "D";
					}
					P.slope = "Vertical";
					P.slopeIndex = 15;
				}
				//stop slope swap
				if(P.slope == P.closestSlope || P.slope == "Vertical" || only1Switch){
					P.found = true;
				}
			}
		}
		if(P.dir == "D"){
			if(P.slope == "Vertical"){
				var ymove = P.speed;
				P.y+=ymove;
				P.y = Math.floor(P.y);
			}
			else if(P.slope > 0 && P.slope < 1){
				var xmove = Math.sqrt((P.speed*P.speed)/(P.slope*P.slope+1));
				var ymove = xmove*P.slope;
				P.x+=xmove;
				P.y+=ymove;
				P.x = Math.ceil(P.x);
				P.y = Math.floor(P.y);
			}
			else if(P.slope >= 0){
				//get x distance, speed = total diag distance
				var xmove = Math.sqrt((P.speed*P.speed)/(P.slope*P.slope+1));
				var ymove = xmove*P.slope;
				P.x+=xmove;
				P.y+=ymove;
				P.x = Math.ceil(P.x);
				P.y = Math.floor(P.y);
			}
			else if(P.slope <= -1){
				var xmove = Math.sqrt((P.speed*P.speed)/(P.slope*P.slope+1));
				var ymove = xmove*P.slope;
				P.x+=xmove;
				P.y+=ymove;
				P.x = Math.ceil(P.x);
				P.y = Math.ceil(P.y);
			}
			else{
				var xmove = Math.sqrt((P.speed*P.speed)/(P.slope*P.slope+1));
				var ymove = xmove*P.slope;
				P.x+=xmove;
				P.y+=ymove;
			}
		}
		else{
			if(P.slope == "Vertical"){
				var ymove = P.speed;
				P.y-=ymove;
				P.y = Math.floor(P.y);
			}
			else if(P.slope > 0 && P.slope < 1){
				var xmove = Math.sqrt((P.speed*P.speed)/(P.slope*P.slope+1));
				var ymove = xmove*P.slope;
				P.x-=xmove;
				P.y-=ymove;
				P.x = Math.floor(P.x);
				P.y = Math.ceil(P.y);
			}
			else if(P.slope >= 0){
				//get x distance, speed = total diag distance
				var xmove = Math.sqrt((P.speed*P.speed)/(P.slope*P.slope+1));
				var ymove = xmove*P.slope;
				P.x-=xmove;
				P.y-=ymove;
				P.x = Math.ceil(P.x);
				P.y = Math.floor(P.y);
			}
			else if(P.slope <= -1){
				var xmove = Math.sqrt((P.speed*P.speed)/(P.slope*P.slope+1));
				var ymove = xmove*P.slope;
				P.x-=xmove;
				P.y-=ymove;
				P.x = Math.floor(P.x);
				P.y = Math.ceil(P.y);
			}
			else{
				var xmove = Math.sqrt((P.speed*P.speed)/(P.slope*P.slope+1));
				var ymove = xmove*P.slope;
				P.x-=xmove;
				P.y-=ymove;
				P.x = Math.ceil(P.x);
				P.y = Math.floor(P.y);
			}
		}
	}
}