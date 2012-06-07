//Teleport
var mystic = {
	color: "#FF00FF",
	width: 32,
	height: 32,
	x: player.x,
	y: player.y,
	x1: 0,
	y1: 0,
	cd: 0,
	cdTop: 90,
	onScreen: 0,
	cast: 0,
	mult: 6,
	mult2: 0,
	loop: 0,
	draaw: 0,
	frame: 0,
	cast: 0,
	used: 0,
	
	draw: function(){
		if(this.draaw == 1 && this.cast <= 0){
			ctx.fillStyle = this.color;
			ctx.globalAlpha = Alpha*0.25;
			if(this.used == 0){
				fastbeepsHigh.currentTime=0;
				fastbeepsHigh.play();
				this.used = 1;
			}
			if(this.frame < 4){
				ctx.fillRect(this.x1-this.width/2, this.y1-this.height/2, this.width, this.height);
				ctx.fillRect(player.x-this.width/2, player.y-this.height/2, this.width, this.height);
				this.width = this.width + 8 * this.frame;
				this.height = this.height + 8 * this.frame;
				this.frame++;
			}
			else if(this.frame < 8){
				ctx.fillRect(this.x1-this.width/2, this.y1-this.height/2, this.width, this.height);
				ctx.fillRect(player.x-this.width/2, player.y-this.height/2, this.width, this.height);
				this.width = this.width - 8 * this.frame;
				this.height = this.height - 8 * this.frame;
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
	},
	
	move: function(){
	if(this.cd > 0){
		this.cd -=1;
	}
	if(this.cast > 0){
		this.cast-=1;
	}
	if(this.onScreen == 1 && this.cast <=0){
		this.x1 = player.x;
		this.y1 = player.y;
		if(player.dir == "W"){
			this.x = player.x;
			this.y = player.y - 32*this.mult;
			if(STATE != "Swamp"){
				for(Z in obstacle1){
					if(contained(this, obstacle1[Z])){
						this.mult2 +=1;
					}
				}
				for(Z in obstacle2){
					if(contained(this, obstacle2[Z])){
						this.mult2 +=1;
					}
				}
				for(Z in obstacle3){
					if(contained(this, obstacle3[Z])){
						this.mult2 +=1;
					}
				}
			}
			this.y = this.y - 32*this.mult2;			
		}
		else if(player.dir == "A"){
			this.x = player.x-32*this.mult;
			this.y = player.y;
			if(STATE != "Swamp"){
				for(Z in obstacle1){
					if(contained(this, obstacle1[Z])){
						this.mult2 +=1;
					}
				}
				for(Z in obstacle2){
					if(contained(this, obstacle2[Z])){
						this.mult2 +=1;
					}
				}
				for(Z in obstacle3){
					if(contained(this, obstacle3[Z])){
						this.mult2 +=1;
					}
				}
			}
			this.x = this.x - 32*this.mult2;			
		}
		else if(player.dir == "S"){
			this.x = player.x;
			this.y = player.y + 32*this.mult;
			if(STATE != "Swamp"){
				for(Z in obstacle1){
					if(contained(this, obstacle1[Z])){
						this.mult2 +=1;
					}
				}
				for(Z in obstacle2){
					if(contained(this, obstacle2[Z])){
						this.mult2 +=1;
					}
				}
				for(Z in obstacle3){
					if(contained(this, obstacle3[Z])){
						this.mult2 +=1;
					}
				}
			}
			this.y = this.y + 32*this.mult2;			
		}
		else if(player.dir == "D"){
			this.x = player.x+32*this.mult;
			this.y = player.y;
			if(STATE != "Swamp"){
				for(Z in obstacle1){
					if(contained(this, obstacle1[Z])){
						this.mult2 +=1;
					}
				}
				for(Z in obstacle2){
					if(contained(this, obstacle2[Z])){
						this.mult2 +=1;
					}
				}
				for(Z in obstacle3){
					if(contained(this, obstacle3[Z])){
						this.mult2 +=1;
					}
				}
			}
			this.x = this.x + 32*this.mult2;	
		}
		if(this.loop > 0){
			this.loop -= 1;
			this.move();
		}
		hptimer = 30;
		this.mult2 = 0;
		if(this.x < 8){
			this.x = 8;
		}
		if(this.y < 8){
			this.y = 8;
		}
		if(this.x > 792){
			this.x = 792;
		}
		if(this.y > 568){
			this.y = 568;
		}
		player.x = this.x;
		player.y = this.y;
		for(B in bubbleRotate){
			if(bubbleRotate[B].onScreen == 1){
				bubbleRotate[B].shoot();
			}
		}
		if(water.onScreen == 1){
			water.x = player.x - 48;
			water.y = player.y;
			water.dir = "WD";
		}
		this.onScreen = 0;
		}
	},
	// Spawn
	shoot: function(){
	if(this.cd == 0){
		this.height = 32;
		this.width = 32;
		this.draaw = 1;
		this.x = player.x;
		this.y = player.y;
		this.cd = this.cdTop;
		this.loop = 2;
		this.onScreen = 1;
		this.used = 0;
	}
	}
};
//Mirage
var mystic2 = {
	color: "#FF00FF",
	width: 32,
	height: 32,
	x: player.x,
	y: player.y,
	x1: 0,
	y1: 0,
	cd: 0,
	cdTop: 450,
	onScreen: 0,
	cast: 0,
	mult: 6,
	mult2: 0,
	loop: 0,
	draaw: 0,
	frame: 0,
	cast: 0,
	
	draw: function(){
		if(this.draaw == 1 && this.cast <= 0){
			ctx.fillStyle = this.color;
			ctx.globalAlpha = Alpha*0.25;
			if(this.frame < 4){
				ctx.fillRect(this.x1-this.width/2, this.y1-this.height/2, this.width, this.height);
				ctx.fillRect(player.x-this.width/2, player.y-this.height/2, this.width, this.height);
				this.width = this.width + 8 * this.frame;
				this.height = this.height + 8 * this.frame;
				this.frame++;
			}
			else if(this.frame < 8){
				ctx.fillRect(this.x1-this.width/2, this.y1-this.height/2, this.width, this.height);
				ctx.fillRect(player.x-this.width/2, player.y-this.height/2, this.width, this.height);
				this.width = this.width - 8 * this.frame;
				this.height = this.height - 8 * this.frame;
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
	},
	
	move: function(){
	if(this.cd > 0){
		this.cd -=1;
	}
	if(this.cast > 0){
		this.cast-=1;
	}
	if(this.onScreen == 1 && this.cast <=0){
		this.x1 = player.x;
		this.y1 = player.y;
		if(player.dir == "W"){
			this.x = player.x;
			this.y = player.y - 32*this.mult;
			for(Z in obstacle1){
				if(contained(this, obstacle1[Z])){
					this.mult2 +=1;
				}
			}
			for(Z in obstacle2){
				if(contained(this, obstacle2[Z])){
					this.mult2 +=1;
				}
			}
			for(Z in obstacle3){
				if(contained(this, obstacle3[Z])){
					this.mult2 +=1;
				}
			}
			this.y = this.y - 32*this.mult2;			
		}
		else if(player.dir == "A"){
			this.x = player.x-32*this.mult;
			this.y = player.y;
			for(Z in obstacle1){
				if(contained(this, obstacle1[Z])){
					this.mult2 +=1;
				}
			}
			for(Z in obstacle2){
				if(contained(this, obstacle2[Z])){
					this.mult2 +=1;
				}
			}
			for(Z in obstacle3){
				if(contained(this, obstacle3[Z])){
					this.mult2 +=1;
				}
			}
			this.x = this.x - 32*this.mult2;			
		}
		else if(player.dir == "S"){
			this.x = player.x;
			this.y = player.y + 32*this.mult;
			for(Z in obstacle1){
				if(contained(this, obstacle1[Z])){
					this.mult2 +=1;
				}
			}
			for(Z in obstacle2){
				if(contained(this, obstacle2[Z])){
					this.mult2 +=1;
				}
			}
			for(Z in obstacle3){
				if(contained(this, obstacle3[Z])){
					this.mult2 +=1;
				}
			}
			this.y = this.y + 32*this.mult2;			
		}
		else if(player.dir == "D"){
			this.x = player.x+32*this.mult;
			this.y = player.y;
			for(Z in obstacle1){
				if(contained(this, obstacle1[Z])){
					this.mult2 +=1;
				}
			}
			for(Z in obstacle2){
				if(contained(this, obstacle2[Z])){
					this.mult2 +=1;
				}
			}
			for(Z in obstacle3){
				if(contained(this, obstacle3[Z])){
					this.mult2 +=1;
				}
			}
			this.x = this.x + 32*this.mult2;	
		}
		if(this.loop > 0){
			this.loop -= 1;
			this.move();
		}
		hptimer = 30;
		this.mult2 = 0;
		if(this.x < 8){
			this.x = 8;
		}
		if(this.y < 8){
			this.y = 8;
		}
		if(this.x > 792){
			this.x = 792;
		}
		if(this.y > 568){
			this.y = 568;
		}
		player.x = this.x;
		player.y = this.y;
		this.onScreen = 0;
		if(Illusion.onScreen == 0 && this.loop == 0){
			Illusion.onScreen = 1;
			Illusion.x = this.x1;
			Illusion.y = this.y1;
			Illusion.cd = 90;
		}
	}
	},
		
	shoot: function(){
	if(this.cd == 0){
		fastbeepsHigh.currentTime=0;
		fastbeepsHigh.play();
		this.height = 32;
		this.width = 32;
		this.draaw = 1;
		this.x = player.x;
		this.y = player.y;
		this.cd = this.cdTop;
		this.loop = 2;
		this.onScreen = 1;
	}
	}
};
var Illusion = {
	width: 32,
	height: 32,
	width2: 32,
	height2: 32,
	x: -100,
	y: 200,
	cd: 0,
	onScreen: 0,
	frame: 0,
	
	draw: function(){
	if(this.onScreen == 1){
		ctx.drawImage(MonoWizzurd, this.x-this.width/2, this.y-this.height/2, this.width, this.height);
		ctx.drawImage(MonoWizzurd, this.x-16, this.y-16, 32, 32);
		this.frame++;
		if(this.frame<=5){
			this.width=32-this.frame*2;
			this.height=32-this.frame*2;
		}
		else if(this.frame<=10){
			this.width=32+this.frame*2;
			this.height=32+this.frame*2;
		}		
		else{
			this.frame = 0;
			this.width = 32;
			this.height = 32;
		}
	}
	},
	shoot: function(){
		if(this.cd > 0 && this.onScreen == 1){
			this.cd-=1;
		}
		else if(this.onScreen == 1){
			IllusionBlast.x = this.x;
			IllusionBlast.y = this.y;
			IllusionBlast.shoot();
			IllusionBlast.onScreen = 1;
			this.onScreen = 0;
			this.x = -200;
			this.y = 100;
			this.frame = 0;
		}
	}
};
// IllusionBlast
var IllusionBlast = {
	color: "#FF00FF",
	x: -100,
	y: -200,
	timeLeft: 0,
	width: 32,
	height: 32,
	frame: 0,
	onScreen: 0,
	
	draw: function(){
		if(this.onScreen == 1){
			ctx.globalAlpha = Alpha*0.25;
			if(this.frame/2 != Math.round(this.frame/2)){
				ctx.fillStyle = "#660099";
			}
			else{
				ctx.fillStyle = this.color;
			}
			ctx.fillRect(this.x - this.width / 2,
			this.y - this.height / 2,
			this.width, this.height);
			ctx.globalAlpha = Alpha;
		}
	},
	
	move: function(){
		if(this.onScreen == 1 && this.frame < 20){
			this.width = 32 + (16*this.frame);
			this.height = 32 + (16*this.frame);
			this.frame++;
			for (E in AllEnemies){
				if(contained(AllEnemies[E], this)){
					onHit(AllEnemies[E]);
				}
			}
			for (O in obstacle1){
				if(contained(obstacle1[O], this)){
					obsHit(obstacle1[O]);
				}
			}
			for (O in obstacle2){
				if(contained(obstacle2[O], this)){
					obsHit(obstacle2[O]);
				}
			}
			for (O in obstacle3){
				if(contained(obstacle3[O], this)){
					obsHit(obstacle3[O]);
				}
			}
		}
		else if(this.frame <= 30 && this.onScreen == 1){
			this.frame++;
			for (E in AllEnemies){
				if(contained(AllEnemies[E], this)){
					onHit(AllEnemies[E]);
				}
			}
			for (O in obstacle1){
				if(contained(obstacle1[O], this)){
					obsHit(obstacle1[O]);
				}
			}
			for (O in obstacle2){
				if(contained(obstacle2[O], this)){
					obsHit(obstacle2[O]);
				}
			}
			for (O in obstacle3){
				if(contained(obstacle3[O], this)){
					obsHit(obstacle3[O]);
				}
			}
		}
		else if(this.frame <= 50 && this.onScreen == 1){
			this.height = 32;
			this.width = 32;
			this.onScreen = 0;
			this.frame = 0;
			this.x = 2000;
			this.y = 2000;
		}
	},
		
	// Spawn
	shoot: function(){
		Explosion.currentTime=0;
		Explosion.play();
		this.height = 32;
		this.width = 32;
		this.frame = 0;
		this.onScreen = 1;
	}
};
//------------------------------------------ Import Arrays --------------------------------------------------------------------------//
var Ticks = {1: iceheal, 2: fireheal, 3: lightningheal, 4: airearth, 5: mysticearth, 6: icelightning, 7: waterearth, 8: waterlightning, 9: dark2};