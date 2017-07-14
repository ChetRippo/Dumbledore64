//-------------------------------------------------------------- Enemy Spells -------------------------------------------------------//
// Globblyfire: Damages player if in radius
var Globblyfire = {
	color: "#FF6600",
	x: -100,
	y: -200,
	timeLeft: 0,
	width: 16,
	height: 16,
	frame: 0,
	onScreen: 0,
	growth: 16,
	// Spawn
	shoot: function(){
		Explosion.currentTime=0;
		Explosion.play();
		this.height = 16;
		this.width = 16;
		this.frame = 0;
		this.onScreen = 1;
	}
};
// Globblyfire2: Damages player if in radius
var Globblyfire2 = {
	color: "#FF6600",
	x: -100,
	y: -200,
	timeLeft: 0,
	width: 16,
	height: 16,
	frame: 0,
	onScreen: 0,
	growth: 16,
	// Spawn
	shoot: function(){
		Explosion.currentTime=0;
		Explosion.play();
		this.height = 16;
		this.width = 16;
		this.frame = 0;
		this.onScreen = 1;
	}
};
// Globblyfire: Damages player if in radius
var Globblyfire3 = {
	color: "#FF6600",
	x: -100,
	y: -200,
	timeLeft: 0,
	width: 16,
	height: 16,
	frame: 0,
	onScreen: 0,
	growth: 16,
	// Spawn
	shoot: function(){
		Explosion.currentTime=0;
		Explosion.play();
		this.height = 16;
		this.width = 16;
		this.frame = 0;
		this.onScreen = 1;
	}
};
function exploderDraw(E){
	if(E.onScreen == 1){
		ctx.globalAlpha = Alpha*0.5;
		if(E.frame*0.5 != Math.round(E.frame*0.5)){
			if(E.color == "#FF6600"){
				ctx.fillStyle = "#CC0000";
			}
			else{
				ctx.fillStyle = "#33CC00";
			}
		}
		else{
			ctx.fillStyle = E.color;
		}
		ctx.fillRect(E.x - E.width * 0.5, E.y - E.height * 0.5,	E.width, E.height);
		ctx.globalAlpha = Alpha;
	}
}
function exploderMove(E){
	if(E.frame == 10){
		E.x = -100;
		E.y = -200;
		E.width = 16;
		E.height = 16;
		E.onScreen = 0;
	}
	else{
		E.width = 16 + (E.growth*E.frame);
		E.height = 16 + (E.growth*E.frame);
		E.frame++;
		if(contained(player, E)){
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
		if(E.color != "#FF6600"){
			E.growth = 24;
		}
		var currPwr = player.power;
		player.power = 1;
		for (B in AllEnemies){
			if(contained(AllEnemies[B], E)){
				onHit(AllEnemies[B]);
			}
		}
		if(E == Globblyfire || E == Globblyfire2 || E == Globblyfire3){
			for (O in obstacle1){
				if(contained(obstacle1[O], E)){
					obsHit(obstacle1[O]);
				}
			}
			for (O in obstacle2){
				if(contained(obstacle2[O], E)){
					obsHit(obstacle2[O]);
				}
			}
			for (O in obstacle3){
				if(contained(obstacle3[O], E)){
					obsHit(obstacle3[O]);
				}
			}
		}
		player.power = currPwr;
	}
}
var Exploders = {1: Globblyfire, 2: Globblyfire2, 3: Globblyfire3};
// sIce: Slows player down by halving speed
var sIce = {
	color: "#00CCFF",
	timeLeft: 0,
	width: 32,
	height: 32,
	x: -100,
	y: -200,
	frame: 0,
	onScreen: 0,
	end: false,
	cast: 0,
	used: 0,
	
	draw: function(){
		if(this.onScreen == 1 && this.cast == 0){
			Alpha = 0.15;
			ctx.fillStyle = this.color;
			ctx.fillRect(this.x - this.width * 0.5, this.y - this.height * 0.5,	this.width, this.height);
		}
	},
	
	move: function(){
		if(this.onScreen == 1){
			if(this.cast > 0){
				this.cast -=1;
			}
			if(this.cast == 0 && this.used == 0){
				Frozen.currentTime=0;
				Frozen.play();
				this.used = 1;
				this.height = 32;
				this.width = 32;
				this.x = Sorceror.x;
				this.y = Sorceror.y;
			}
			if(this.frame == 150){
				this.width = 32;
				this.height = 32;
				this.x = -200;
				this.y = -100;
				this.onScreen = 0;
				this.end = true;
				Alpha = 1;
			}
			else if(this.cast == 0){
				this.width = this.width + (32*this.frame);
				this.height = this.height + (32*this.frame);
				this.frame++;
			}
		}
	},
	// Slow all enemies in radius
	effect: function(){
		if(this.cast <= 0){
			if(this.onScreen == 1 && air.onScreen != 1 && air2.onScreen != 1){
				player.speed = 4;
			}
			else if(this.end == true){
				player.speed = 8;
				this.frame = 0;
				this.end = false;
			}
		}
	},
		
	// Spawn
	shoot: function(){
		this.frame = 0;
		this.onScreen = 1;
		this.cast = 30;
		SorcCastingBar.onScreen = 1;
		SorcCastingBar.cast = 30;
		SorcCastingBar.castmax = 30;
		this.used = 0;
	}
};

// sFire: Damages player if in radius
var sFire = {
	color: "#FF6600",
	x: -100,
	y: -200,
	timeLeft: 0,
	width: 32,
	height: 32,
	frame: 0,
	onScreen: 0,
	caster: 0,
	used: 0,
	cast: 0,
	
	draw: function(){
		if(this.onScreen == 1 && this.cast == 0){
			ctx.globalAlpha = Alpha*0.5;
			if(this.frame*0.5 != Math.round(this.frame*0.5)){
				ctx.fillStyle = "#CC0000";
			}
			else{
				ctx.fillStyle = this.color;
			}
			ctx.fillRect(this.x - this.width * 0.5,
			this.y - this.height * 0.5,
			this.width, this.height);
			ctx.globalAlpha = Alpha;
		}
	},
	
	move: function(){
		if(this.cast > 0){
			this.cast-=1;
		}
		if(this.used == 0 && this.cast == 0 && this.onScreen == 1){
			this.used = 1;
			Explosion.currentTime=0;
			Explosion.play();
		}
		if(this.frame == 22){
			this.x = -100;
			this.y = -200;
			this.width = 32;
			this.height = 32;
			this.onScreen = 0;
		}
		else if(this.cast == 0 && this.onScreen == 1){
			if(this.caster == Dragon){
				this.width = 64 + (32*this.frame);
				this.height = 64 + (32*this.frame);
			}
			else{
				this.width = 32 + (16*this.frame);
				this.height = 32 + (16*this.frame);
			}
			this.frame++;
			if(contained(player, this) || collision("W", player, this) || collision("A", player, this) || collision("S", player, this) || collision("D", player, this)){
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
					if(this.caster == Dragon){
						AList[3] = false;
					}
				}
			}
			for(O in ObsList){
				if(contained(ObsList[O], this)){
					obsHit(ObsList[O]);
				}
			}
		}
	},
		
	// Spawn
	shoot: function(A){
		this.height = 32;
		this.width = 32;
		this.x = A.x;
		this.y = A.y;
		this.caster = A;
		if(this.caster == Sorceror){
			this.cast = 30;
			SorcCastingBar.onScreen = 1;
			SorcCastingBar.cast = 30;
			SorcCastingBar.castmax = 30;
		}
		else{
			this.cast = 0;
		}
		this.used = 0;
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
	hstate: 0,
	vstate: 0,
	hx: 400,
	hy: -2000,
	vx: -2000,
	vy: 288,
	onScreen: 0,
	used: 0,
	cast: 0,
	draw: function(){
		if(this.onScreen == 1 && this.cast == 0){
			if(this.hstate == 0){
				ctx.drawImage(ehlightning1, this.hx - this.hwidth*0.5, this.hy - this.hheight*0.5);
				this.hstate+=1;
			}
			else if(this.hstate == 1){
				ctx.drawImage(ehlightning2, this.hx - this.hwidth*0.5, this.hy - this.hheight*0.5);
				this.hstate+=1;
			}
			else if(this.hstate == 2){
				ctx.drawImage(ehlightning3, this.hx - this.hwidth*0.5, this.hy - this.hheight*0.5);
				this.hstate=0;
			}
			if(this.vx != -2000){
				if(this.vstate == 0){
					ctx.drawImage(evlightning1, this.vx-this.vwidth*0.5, this.vy - this.vheight*0.5);
					this.vstate+=1;
				}
				else if(this.vstate == 1){
					ctx.drawImage(evlightning2, this.vx-this.vwidth*0.5, this.vy - this.vheight*0.5);
					this.vstate+=1;
				}
				else if(this.vstate == 2){
					ctx.drawImage(evlightning3, this.vx-this.vwidth*0.5, this.vy - this.vheight*0.5);
					this.vstate=0;
				}
			}
		}
	},
	effect: function(){
		if(this.cast > 0){
			this.cast-=1;
		}
		if(this.cast == 0 && this.used == 0 && this.onScreen == 1){
			Thunder.currentTime=0;
			Thunder.play();
			this.used = 1;
		}
		if(this.onScreen == 1 && this.cast == 0){
			if(this.timeLeft <= 0){
				this.onScreen = 0;
			}
			else{
				this.timeLeft-=1;
			}
			if(this.vx != -2000){
				if(player.x >= this.vx-this.vwidth*0.5 && player.x <= this.vx + this.vwidth*0.5
					|| (this.vx >= player.x && this.vx <= player.x + player.height*0.5)){
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
			if(this.hy != -2000){
				if(player.y <= this.hy + this.hheight*0.5 && player.y >= this.hy-this.hheight*0.5
					|| (this.hy >= player.y && this.hy <= player.y + player.height*0.5)){
					if(this.vx == -2000){
						this.vx = player.x
					}
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
		}
	},
	// Spawn
	shoot: function(){
		this.hx = 400;
		this.hy = Sorceror.y;
		this.onScreen = 1;
		this.timeLeft = 150;
		this.cast = 30;
		SorcCastingBar.onScreen = 1;
		SorcCastingBar.cast = 30;
		SorcCastingBar.castmax = 30;
		this.used = 0;
	}
};
//--------------------------------------------------------- Tree Wizzurd Spells -----------------------------------------------------//
var rootBlastW = {
	color: "#006600",
	x: -100,
	y: -200,
	ox: -100,
	oy: -200,
	width: 32,
	height: 8,
	frame: 0,
	cd: 0,
	speed: 16,
	onScreen: 0,
	dir: "W",
	
	draw: function(){
		if(this.onScreen == 1){
			ctx.globalAlpha = Alpha*0.75;
			ctx.fillStyle = this.color;
			ctx.fillRect(this.x - this.width * 0.5, this.y - this.height * 0.5,	this.width, this.height);
			ctx.globalAlpha = Alpha;
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
		}
		else if(this.onScreen ==1){
			this.width = 32 + (4*this.frame);
			this.frame++;
			this.y -= this.speed;
			if(collision(this.dir, this, player)){
				if(darkwater.onScreen == 1 && darkwater.hptimer == 0){
					darkwater.hptimer = 20;
					darkwater.hp-=1;
					hptimer = 20;
				}	
				else if(!(hptimer > 0)){
					player.hp-=1;
					AList[2] = false;
					hptimer = 30;
				}
			}
		}
	},
	// Spawn
	shoot: function(){
		if(this.cd == 0){
			multiLaser.currentTime=0;
			multiLaser.play();
			this.width = 32;
			this.x = treeWizz.x;
			this.y = treeWizz.y;
			this.ox = treeWizz.x;
			this.oy = treeWizz.y;
			this.frame = 0;
			this.onScreen = 1;
		}
	}
};
var rootBlastA = {
	color: "#006600",
	x: -100,
	y: -200,
	ox: -100,
	oy: -200,
	width: 8,
	height: 32,
	frame: 0,
	cd: 0,
	speed: 16,
	onScreen: 0,
	dir: "A",
	
	draw: function(){
		if(this.onScreen == 1){
			ctx.globalAlpha = Alpha*0.75;
			ctx.fillStyle = this.color;
			ctx.fillRect(this.x - this.width * 0.5, this.y - this.height * 0.5, this.width, this.height);
			ctx.globalAlpha = Alpha;
		}
	},
	effect: function(){
		if(this.frame == 30){
			this.x = -100;
			this.y = -200;
			this.height = 32;
			this.onScreen = 0;
			this.width = 8;
			this.frame = 0;
		}
		else if(this.onScreen ==1){
			this.height = 32 + (4*this.frame);
			this.frame++;
			this.x -= this.speed;
			if(collision(this.dir, this, player)){
				if(darkwater.onScreen == 1 && darkwater.hptimer == 0){
					darkwater.hptimer = 20;
					darkwater.hp-=1;
					hptimer = 20;
				}	
				else if(!(hptimer > 0)){
					player.hp-=1;
					AList[2] = false;
					hptimer = 30;
				}
			}
		}
	},
	// Spawn
	shoot: function(){
		if(this.cd == 0){
			multiLaser.currentTime=0;
			multiLaser.play();
			this.height = 32;
			this.x = treeWizz.x;
			this.y = treeWizz.y;
			this.ox = treeWizz.x;
			this.oy = treeWizz.y;
			this.frame = 0;
			this.onScreen = 1;
		}
	}
};
var rootBlastS = {
	color: "#006600",
	x: -100,
	y: -200,
	ox: -100,
	oy: -200,
	width: 32,
	height: 8,
	frame: 0,
	cd: 0,
	speed: 16,
	onScreen: 0,
	dir: "S",
	
	draw: function(){
		if(this.onScreen == 1){
			ctx.globalAlpha = Alpha*0.75;
			ctx.fillStyle = this.color;
				ctx.fillRect(this.x - this.width * 0.5,
				this.y - this.height * 0.5,
				this.width, this.height);
			ctx.globalAlpha = Alpha;
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
		}
		else if(this.onScreen ==1){
			this.width = 32 + (4*this.frame);
			this.frame++;
			this.y += this.speed;
			if(collision(this.dir, this, player)){
				if(darkwater.onScreen == 1 && darkwater.hptimer == 0){
					darkwater.hptimer = 20;
					darkwater.hp-=1;
					hptimer = 20;
				}	
				else if(!(hptimer > 0)){
					player.hp-=1;
					AList[2] = false;
					hptimer = 30;
				}
			}
		}
	},
	// Spawn
	shoot: function(){
		if(this.cd == 0){
			multiLaser.currentTime=0;
			multiLaser.play();
			this.width = 32;
			this.x = treeWizz.x;
			this.y = treeWizz.y;
			this.ox = treeWizz.x;
			this.oy = treeWizz.y;
			this.frame = 0;
			this.onScreen = 1;
		}
	}
};
var rootBlastD = {
	color: "#006600",
	x: -100,
	y: -200,
	ox: -100,
	oy: -200,
	width: 8,
	height: 32,
	frame: 0,
	cd: 0,
	speed: 16,
	onScreen: 0,
	dir: "D",
	
	draw: function(){
		if(this.onScreen == 1){
			ctx.globalAlpha = Alpha*0.75;
			ctx.fillStyle = this.color;
			ctx.fillRect(this.x - this.width * 0.5, this.y - this.height * 0.5, this.width, this.height);
			ctx.globalAlpha = Alpha;
		}
	},
	effect: function(){
		if(this.frame == 30){
			this.x = -100;
			this.y = -200;
			this.width = 8;
			this.onScreen = 0;
			this.height = 32;
			this.frame = 0;
		}
		else if(this.onScreen ==1){
			this.height = 32 + (4*this.frame);
			this.frame++;
			this.x += this.speed;
			//Collisions here were weird. Moved back so it appears to hit you when it does.
			this.speed = 0;
			this.x-=16;
			if(collision(this.dir, this, player)){
				if(darkwater.onScreen == 1 && darkwater.hptimer == 0){
					darkwater.hptimer = 20;
					darkwater.hp-=1;
					hptimer = 20;
				}	
				else if(!(hptimer > 0)){
					player.hp-=1;
					AList[2] = false;
					hptimer = 30;
				}
			}
			this.x+=16;
			this.speed = 16
		}
	},
	// Spawn
	shoot: function(){
	if(this.cd == 0){
		multiLaser.currentTime=0;
		multiLaser.play();
		this.height = 32;
		this.x = treeWizz.x;
		this.y = treeWizz.y;
		this.ox = treeWizz.x;
		this.oy = treeWizz.y;
		this.frame = 0;
		this.onScreen = 1;
	}
	}
};
function rootstrx(){};
rootstrx.prototype = {x: -500,y: -500,width: 16,height: 16,onScreen: 0};
var rootstr = new rootstrx();
var rootstr2 = new rootstrx();
var rootstr3 = new rootstrx();
var rootstr4 = new rootstrx();
var rootstr5 = new rootstrx();
var rootstr6 = new rootstrx();
var rootstr7 = new rootstrx();
var rootstr8 = new rootstrx();
var rootstr9 = new rootstrx();
var rootstr10 = new rootstrx();
var rootstr11 = new rootstrx();
var rootstr12 = new rootstrx();
var rootstr13 = new rootstrx();
var rootstr14 = new rootstrx();
var rootstr15 = new rootstrx();
var rootstr21 = new rootstrx();
var rootstr22 = new rootstrx();
var rootstr23 = new rootstrx();
var rootstr24 = new rootstrx();
var rootstr25 = new rootstrx();
var rootstr26 = new rootstrx();
var rootstr27 = new rootstrx();
var rootstr28 = new rootstrx();
var rootstr29 = new rootstrx();
var rootstr210 = new rootstrx();
var rootstr211 = new rootstrx();
var rootstr212 = new rootstrx();
var rootstr213 = new rootstrx();
var rootstr214 = new rootstrx();
var rootstr215 = new rootstrx();
var rootstr31 = new rootstrx();
var rootstr32 = new rootstrx();
var rootstr33 = new rootstrx();
var rootstr34 = new rootstrx();
var rootstr35 = new rootstrx();
var rootstr36 = new rootstrx();
var rootstr37 = new rootstrx();
var rootstr38 = new rootstrx();
var rootstr39 = new rootstrx();
var rootstr310 = new rootstrx();
var rootstr311 = new rootstrx();
var rootstr312 = new rootstrx();
var rootstr313 = new rootstrx();
var rootstr314 = new rootstrx();
var rootstr315 = new rootstrx();
var rootstr41 = new rootstrx();
var rootstr42 = new rootstrx();
var rootstr43 = new rootstrx();
var rootstr44 = new rootstrx();
var rootstr45 = new rootstrx();
var rootstr46 = new rootstrx();
var rootstr47 = new rootstrx();
var rootstr48 = new rootstrx();
var rootstr49 = new rootstrx();
var rootstr410 = new rootstrx();
var rootstr411 = new rootstrx();
var rootstr412 = new rootstrx();
var rootstr413 = new rootstrx();
var rootstr414 = new rootstrx();
var rootstr415 = new rootstrx();
function drawRoots(R){
	if(R.onScreen == 1){
		ctx.globalAlpha = Alpha*0.5;
		ctx.fillStyle = "#330000";
		ctx.fillRect(R.x - R.width * 0.5, R.y - R.height * 0.5, R.width, R.height);
		ctx.globalAlpha = Alpha;
	}
}
var roots1 = {1: rootstr, 2: rootstr2, 3: rootstr3, 4: rootstr4, 5: rootstr5, 6: rootstr6, 7: rootstr7, 8: rootstr8, 9: rootstr9, 10: rootstr10,
			11: rootstr11, 12: rootstr12, 13: rootstr13, 14: rootstr14, 15: rootstr15, 16: rootstr21, 17: rootstr22, 18: rootstr23, 19: rootstr24,
			20: rootstr25, 21: rootstr26, 22: rootstr27, 23: rootstr28, 24: rootstr29, 25: rootstr210, 26: rootstr211, 27: rootstr212, 28: rootstr213, 29: rootstr214, 30: rootstr215,
			31: rootstr31, 32: rootstr32, 33: rootstr33, 34: rootstr34,	35: rootstr35, 36: rootstr36, 37: rootstr37, 38: rootstr38, 39: rootstr39, 40: rootstr310, 41: rootstr311, 42: rootstr312,
			43: rootstr313, 44: rootstr314, 45: rootstr315, 46: rootstr41, 47: rootstr42, 48: rootstr43, 49: rootstr44,	50: rootstr45, 51: rootstr46, 52: rootstr47, 53: rootstr48,
			54: rootstr49, 55: rootstr410, 56: rootstr411, 57: rootstr412, 58: rootstr413, 59: rootstr414, 60: rootstr415};
var roots11 = {1: rootstr, 2: rootstr2, 3: rootstr3, 4: rootstr4, 5: rootstr5, 6: rootstr6, 7: rootstr7, 8: rootstr8, 9: rootstr9, 10: rootstr10,
			11: rootstr11, 12: rootstr12, 13: rootstr13, 14: rootstr14, 15: rootstr15};
var roots12 = {1: rootstr21, 2: rootstr22, 3: rootstr23, 4: rootstr24, 5: rootstr25, 6: rootstr26, 7: rootstr27, 8: rootstr28, 9: rootstr29, 10: rootstr210, 11: rootstr211,
			12: rootstr212, 13: rootstr213, 14: rootstr214, 15: rootstr215};
var roots13 = {1: rootstr31, 2: rootstr32, 3: rootstr33, 4: rootstr34,	5: rootstr35, 6: rootstr36, 7: rootstr37, 8: rootstr38, 9: rootstr39, 10: rootstr310,
			11: rootstr311, 12: rootstr312,	13: rootstr313, 14: rootstr314, 15: rootstr315};
var roots14 = {1: rootstr41, 2: rootstr42, 3: rootstr43, 4: rootstr44,	5: rootstr45, 6: rootstr46, 7: rootstr47, 8: rootstr48, 9: rootstr49, 10: rootstr410,
			11: rootstr411, 12: rootstr412,	13: rootstr413, 14: rootstr414, 15: rootstr415};
var rootStrike = {
	type: -2,
	x: -500,
	y: -500,
	onTree: 0,
	width: 16,
	height: 16,
	dirct: 0,
	speed: 8,
	speed2: 4,
	respawn: -1,
	dir: "W",
	rp: -1,
	index: 0,
	frame: 0,
	onScreen: 0,
	movement: false,
	draw: function(){
		for(R in roots1){
			if(collision(player.dir, player, roots1[R])){
				if(darkwater.onScreen == 1 && darkwater.hptimer == 0){
					darkwater.hptimer = 20;
					darkwater.hp-=1;
					hptimer = 20;
				}	
				else if(hptimer <= 0){
					player.hp-=1;
					AList[2] = false;
					hptimer = 30;
				}
			}
		}
		if(this.dirct <= 0){
			for(R in roots12){
				if(collision(this.dir, this, roots12[R])){
					this.dir = DiffDir(this.dir);
					this.dirct = 5;
				}
			}
			for(R in roots13){
				if(collision(this.dir, this, roots13[R])){
					this.dir = DiffDir(this.dir);
					this.dirct = 5;
				}
			}
			for(R in roots14){
				if(collision(this.dir, this, roots14[R])){
					this.dir = DiffDir(this.dir);
					this.dirct = 5;
				}
			}
		}
		if(this.onScreen == 1){
			ctx.globalAlpha = Alpha*0.5;
			ctx.fillStyle = "#330000";
			ctx.fillRect(this.x - this.width * 0.5, this.y - this.height * 0.5, this.width, this.height);
			ctx.globalAlpha = Alpha;
			this.frame++;
			if(this.frame*0.5 == Math.round(this.frame*0.5)){
				if(rootstr.onScreen == 0){
					rootstr.onScreen = 1;
					rootstr.x = this.x;
					rootstr.y = this.y;
				}
				else if(rootstr2.onScreen == 0){
					rootstr2.onScreen = 1;
					rootstr2.x = this.x;
					rootstr2.y = this.y;
				}
				else if(rootstr3.onScreen == 0){
					rootstr3.onScreen = 1;
					rootstr3.x = this.x;
					rootstr3.y = this.y;
				}
				else if(rootstr4.onScreen == 0){
					rootstr4.onScreen = 1;
					rootstr4.x = this.x;
					rootstr4.y = this.y;
				}
				else if(rootstr5.onScreen == 0){
					rootstr5.onScreen = 1;
					rootstr5.x = this.x;
					rootstr5.y = this.y;
				}
				else if(rootstr6.onScreen == 0){
					rootstr6.onScreen = 1;
					rootstr6.x = this.x;
					rootstr6.y = this.y;
				}
				else if(rootstr7.onScreen == 0){
					rootstr7.onScreen = 1;
					rootstr7.x = this.x;
					rootstr7.y = this.y;
				}
				else if(rootstr8.onScreen == 0){
					rootstr8.onScreen = 1;
					rootstr8.x = this.x;
					rootstr8.y = this.y;
				}
				else if(rootstr9.onScreen == 0){
					rootstr9.onScreen = 1;
					rootstr9.x = this.x;
					rootstr9.y = this.y;
				}
				else if(rootstr10.onScreen == 0){
					rootstr10.onScreen = 1;
					rootstr10.x = this.x;
					rootstr10.y = this.y;
				}
				else if(rootstr11.onScreen == 0){
					rootstr11.onScreen = 1;
					rootstr11.x = this.x;
					rootstr11.y = this.y;
				}
				else if(rootstr12.onScreen == 0){
					rootstr12.onScreen = 1;
					rootstr12.x = this.x;
					rootstr12.y = this.y;
				}
				else if(rootstr13.onScreen == 0){
					rootstr13.onScreen = 1;
					rootstr13.x = this.x;
					rootstr13.y = this.y;
				}
				else if(rootstr14.onScreen == 0){
					rootstr14.onScreen = 1;
					rootstr14.x = this.x;
					rootstr14.y = this.y;
				}
				else if(rootstr15.onScreen == 0){
					rootstr15.onScreen = 1;
					rootstr15.x = this.x;
					rootstr15.y = this.y;
				}
				else{
					this.movement = false;
					this.frame = 0;
				}
			}
		}
	}
};
var rootStrike2 = {
	type: -3,
	x: -500,
	y: -500,
	onTree: 0,
	width: 16,
	height: 16,
	dirct: 0,
	speed: 8,
	speed2: 4,
	respawn: -1,
	dir: "W",
	rp: -1,
	index: 0,
	frame: 0,
	onScreen: 0,
	movement: false,
	// Draws the enemy on the canvas when called
	draw: function(){
	if(this.onScreen == 1){
		if(this.dirct <= 0){
			for(R in roots11){
				if(collision(this.dir, this, roots11[R])){
					this.dir = DiffDir(this.dir);
					this.dirct = 5;
				}
			}
			for(R in roots13){
				if(collision(this.dir, this, roots13[R])){
					this.dir = DiffDir(this.dir);
					this.dirct = 5;
				}
			}
			for(R in roots14){
				if(collision(this.dir, this, roots14[R])){
					this.dir = DiffDir(this.dir);
					this.dirct = 5;
				}
			}
		}
		ctx.globalAlpha = Alpha*0.5;
		ctx.fillStyle = "#330000";
		ctx.fillRect(this.x - this.width * 0.5, this.y - this.height * 0.5, this.width, this.height);
		ctx.globalAlpha = Alpha;
		this.frame++;
		if(this.frame*0.5 == Math.round(this.frame*0.5)){
			if(rootstr21.onScreen == 0){
				rootstr21.onScreen = 1;
				rootstr21.x = this.x;
				rootstr21.y = this.y;
			}
			else if(rootstr22.onScreen == 0){
				rootstr22.onScreen = 1;
				rootstr22.x = this.x;
				rootstr22.y = this.y;
			}
			else if(rootstr23.onScreen == 0){
				rootstr23.onScreen = 1;
				rootstr23.x = this.x;
				rootstr23.y = this.y;
			}
			else if(rootstr24.onScreen == 0){
				rootstr24.onScreen = 1;
				rootstr24.x = this.x;
				rootstr24.y = this.y;
			}
			else if(rootstr25.onScreen == 0){
				rootstr25.onScreen = 1;
				rootstr25.x = this.x;
				rootstr25.y = this.y;
			}
			else if(rootstr26.onScreen == 0){
				rootstr26.onScreen = 1;
				rootstr26.x = this.x;
				rootstr26.y = this.y;
			}
			else if(rootstr27.onScreen == 0){
				rootstr27.onScreen = 1;
				rootstr27.x = this.x;
				rootstr27.y = this.y;
			}
			else if(rootstr28.onScreen == 0){
				rootstr28.onScreen = 1;
				rootstr28.x = this.x;
				rootstr28.y = this.y;
			}
			else if(rootstr29.onScreen == 0){
				rootstr29.onScreen = 1;
				rootstr29.x = this.x;
				rootstr29.y = this.y;
			}
			else if(rootstr210.onScreen == 0){
				rootstr210.onScreen = 1;
				rootstr210.x = this.x;
				rootstr210.y = this.y;
			}
			else if(rootstr211.onScreen == 0){
				rootstr211.onScreen = 1;
				rootstr211.x = this.x;
				rootstr211.y = this.y;
			}
			else if(rootstr212.onScreen == 0){
				rootstr212.onScreen = 1;
				rootstr212.x = this.x;
				rootstr212.y = this.y;
			}
			else if(rootstr213.onScreen == 0){
				rootstr213.onScreen = 1;
				rootstr213.x = this.x;
				rootstr213.y = this.y;
			}
			else if(rootstr214.onScreen == 0){
				rootstr214.onScreen = 1;
				rootstr214.x = this.x;
				rootstr214.y = this.y;
			}
			else if(rootstr215.onScreen == 0){
				rootstr215.onScreen = 1;
				rootstr215.x = this.x;
				rootstr215.y = this.y;
			}
			else{
				this.movement = false;
				this.frame = 0;
			}
		}
	}
	}
};
var rootStrike3 = {
	type: -4,
	x: -500,
	y: -500,
	onTree: 0,
	width: 16,
	height: 16,
	dirct: 0,
	speed: 8,
	speed2: 4,
	respawn: -1,
	dir: "W",
	rp: -1,
	index: 0,
	frame: 0,
	onScreen: 0,
	movement: false,
	// Draws the enemy on the canvas when called
	draw: function(){
	if(this.onScreen == 1){
		if(this.dirct <= 0){
			for(R in roots12){
				if(collision(this.dir, this, roots12[R])){
					this.dir = DiffDir(this.dir);
					this.dirct = 5;
				}
			}
			for(R in roots11){
				if(collision(this.dir, this, roots11[R])){
					this.dir = DiffDir(this.dir);
					this.dirct = 5;
				}
			}
			for(R in roots14){
				if(collision(this.dir, this, roots14[R])){
					this.dir = DiffDir(this.dir);
					this.dirct = 5;
				}
			}
		}
		ctx.globalAlpha = Alpha*0.5;
		ctx.fillStyle = "#330000";
		ctx.fillRect(this.x - this.width * 0.5, this.y - this.height * 0.5, this.width, this.height);
		ctx.globalAlpha = Alpha;
		this.frame++;
		if(this.frame*0.5 == Math.round(this.frame*0.5)){
			if(rootstr31.onScreen == 0){
				rootstr31.onScreen = 1;
				rootstr31.x = this.x;
				rootstr31.y = this.y;
			}
			else if(rootstr32.onScreen == 0){
				rootstr32.onScreen = 1;
				rootstr32.x = this.x;
				rootstr32.y = this.y;
			}
			else if(rootstr33.onScreen == 0){
				rootstr33.onScreen = 1;
				rootstr33.x = this.x;
				rootstr33.y = this.y;
			}
			else if(rootstr34.onScreen == 0){
				rootstr34.onScreen = 1;
				rootstr34.x = this.x;
				rootstr34.y = this.y;
			}
			else if(rootstr35.onScreen == 0){
				rootstr35.onScreen = 1;
				rootstr35.x = this.x;
				rootstr35.y = this.y;
			}
			else if(rootstr36.onScreen == 0){
				rootstr36.onScreen = 1;
				rootstr36.x = this.x;
				rootstr36.y = this.y;
			}
			else if(rootstr37.onScreen == 0){
				rootstr37.onScreen = 1;
				rootstr37.x = this.x;
				rootstr37.y = this.y;
			}
			else if(rootstr38.onScreen == 0){
				rootstr38.onScreen = 1;
				rootstr38.x = this.x;
				rootstr38.y = this.y;
			}
			else if(rootstr39.onScreen == 0){
				rootstr39.onScreen = 1;
				rootstr39.x = this.x;
				rootstr39.y = this.y;
			}
			else if(rootstr310.onScreen == 0){
				rootstr310.onScreen = 1;
				rootstr310.x = this.x;
				rootstr310.y = this.y;
			}
			else if(rootstr311.onScreen == 0){
				rootstr311.onScreen = 1;
				rootstr311.x = this.x;
				rootstr311.y = this.y;
			}
			else if(rootstr312.onScreen == 0){
				rootstr312.onScreen = 1;
				rootstr312.x = this.x;
				rootstr312.y = this.y;
			}
			else if(rootstr313.onScreen == 0){
				rootstr313.onScreen = 1;
				rootstr313.x = this.x;
				rootstr313.y = this.y;
			}
			else if(rootstr314.onScreen == 0){
				rootstr314.onScreen = 1;
				rootstr314.x = this.x;
				rootstr314.y = this.y;
			}
			else if(rootstr315.onScreen == 0){
				rootstr315.onScreen = 1;
				rootstr315.x = this.x;
				rootstr315.y = this.y;
			}
			else{
				this.movement = false;
				this.frame = 0;
			}
		}
	}
	}
};
var rootStrike4 = {
	type: -5,
	x: -500,
	y: -500,
	width: 16,
	onTree: 0,
	height: 16,
	dirct: 0,
	speed: 8,
	speed2: 4,
	respawn: -1,
	dir: "W",
	rp: -1,
	index: 0,
	frame: 0,
	onScreen: 0,
	movement: false,
	// Draws the enemy on the canvas when called
	draw: function(){
	if(this.onScreen == 1){
		if(this.dirct <= 0){
			for(R in roots12){
				if(collision(this.dir, this, roots12[R])){
					this.dir = DiffDir(this.dir);
					this.dirct = 5;
				}
			}
			for(R in roots13){
				if(collision(this.dir, this, roots13[R])){
					this.dir = DiffDir(this.dir);
					this.dirct = 5;
				}
			}
			for(R in roots11){
				if(collision(this.dir, this, roots11[R])){
					this.dir = DiffDir(this.dir);
					this.dirct = 5;
				}
			}
		}
		ctx.globalAlpha = Alpha*0.5;
		ctx.fillStyle = "#330000";
		ctx.fillRect(this.x - this.width * 0.5, this.y - this.height * 0.5, this.width, this.height);
		ctx.globalAlpha = Alpha;
		this.frame++;
		if(this.frame*0.5 == Math.round(this.frame*0.5)){
			if(rootstr41.onScreen == 0){
				rootstr41.onScreen = 1;
				rootstr41.x = this.x;
				rootstr41.y = this.y;
			}
			else if(rootstr42.onScreen == 0){
				rootstr42.onScreen = 1;
				rootstr42.x = this.x;
				rootstr42.y = this.y;
			}
			else if(rootstr43.onScreen == 0){
				rootstr43.onScreen = 1;
				rootstr43.x = this.x;
				rootstr43.y = this.y;
			}
			else if(rootstr44.onScreen == 0){
				rootstr44.onScreen = 1;
				rootstr44.x = this.x;
				rootstr44.y = this.y;
			}
			else if(rootstr45.onScreen == 0){
				rootstr45.onScreen = 1;
				rootstr45.x = this.x;
				rootstr45.y = this.y;
			}
			else if(rootstr46.onScreen == 0){
				rootstr46.onScreen = 1;
				rootstr46.x = this.x;
				rootstr46.y = this.y;
			}
			else if(rootstr47.onScreen == 0){
				rootstr47.onScreen = 1;
				rootstr47.x = this.x;
				rootstr47.y = this.y;
			}
			else if(rootstr48.onScreen == 0){
				rootstr48.onScreen = 1;
				rootstr48.x = this.x;
				rootstr48.y = this.y;
			}
			else if(rootstr49.onScreen == 0){
				rootstr49.onScreen = 1;
				rootstr49.x = this.x;
				rootstr49.y = this.y;
			}
			else if(rootstr410.onScreen == 0){
				rootstr410.onScreen = 1;
				rootstr410.x = this.x;
				rootstr410.y = this.y;
			}
			else if(rootstr411.onScreen == 0){
				rootstr411.onScreen = 1;
				rootstr411.x = this.x;
				rootstr411.y = this.y;
			}
			else if(rootstr412.onScreen == 0){
				rootstr412.onScreen = 1;
				rootstr412.x = this.x;
				rootstr412.y = this.y;
			}
			else if(rootstr413.onScreen == 0){
				rootstr413.onScreen = 1;
				rootstr413.x = this.x;
				rootstr413.y = this.y;
			}
			else if(rootstr414.onScreen == 0){
				rootstr414.onScreen = 1;
				rootstr414.x = this.x;
				rootstr414.y = this.y;
			}
			else if(rootstr415.onScreen == 0){
				rootstr415.onScreen = 1;
				rootstr415.x = this.x;
				rootstr415.y = this.y;
			}
			else{
				this.movement = false;
				this.frame = 0;
			}
		}
	}
	}
};
// Heal Leaf Wizard
var LeafHeal = {
	color: "#33CC00",
	timeLeft: 0,
	x: -100,
	y: -200,
	speed: 4,
	cast: 0,
	used: 0,
	
	draw: function(){
		if(this.timeLeft == 0){
			this.x = -100;
			this.y = -200;
		}
		if(this.cast > 0){
			this.cast-=1;
		}
		if(this.cast == 0 && this.timeLeft > 0){
			ctx.fillStyle = this.color;
			ctx.font = "18pt Arial";
			ctx.fillText("+1", this.x, this.y);
		}	
	},
	
	move: function(){
		if(this.timeLeft > 0 && this.cast == 0){
			this.y -= this.speed;
			this.timeLeft--;
			if(this.used == 0){
				if(treeWizz.hp < 6){
					treeWizz.hp+=1;
				}
				this.used = 1;
				Pickup.currentTime=0;
				Pickup.play();
			}
		}
			
	},
	// Spawn
	shoot: function(){
		this.x = treeWizz.x;
		this.y = treeWizz.y;
		this.cast = 30;
		this.timeLeft = 15;
		TreecastingBar.onScreen = 1;
		TreecastingBar.cast = 30;
		TreecastingBar.castmax = 30;
		this.used = 0;
	}	
};
//Thief Smoke Bomb
var SmokeBomb = {
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
				this.width = this.width + 8 * this.frame;
				this.height = this.height + 8 * this.frame;
				this.frame++;
			}
			else if(this.frame < 8){
				ctx.fillRect(this.x1-this.width*0.5, this.y1-this.height*0.5, this.width, this.height);
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
	}
};
//Thief Smoke Bomb
var SmokeBombA = {
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
				this.width = this.width + 8 * this.frame;
				this.height = this.height + 8 * this.frame;
				this.frame++;
			}
			else if(this.frame < 8){
				ctx.fillRect(this.x1-this.width*0.5, this.y1-this.height*0.5, this.width, this.height);
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
	}
};
//Thief Smoke Bomb
var SmokeBombB = {
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
				this.width = this.width + 8 * this.frame;
				this.height = this.height + 8 * this.frame;
				this.frame++;
			}
			else if(this.frame < 8){
				ctx.fillRect(this.x1-this.width*0.5, this.y1-this.height*0.5, this.width, this.height);
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
	}
};
//----------------------------------------------- Dragon Attacks --------------------------------------------------------------------//
var DragonFire = {
	color1: "#FF6600",
	color2: "#990000",
	color3: "#FFCC00",
	x: -100,
	y: -200,
	width: 32,
	height: 8,
	dir: "D",
	frame: 0,
	cd: 0,
	speed: 16,
	onScreen: 0,
	
	draw: function(){
		if(this.onScreen == 1){
			var color = Math.floor(Math.random() * 3) + 1;
			if(color == 1){
				ctx.fillStyle = this.color1;
			}
			else if(color == 2){
				ctx.fillStyle = this.color2;
			}
			else if(color == 3){
				ctx.fillStyle = this.color3;
			}
			ctx.fillRect(this.x - this.width * 0.5,
			this.y - this.height * 0.5,
			this.width, this.height);
		}
	},
	effect: function(){
		if(this.frame == 1){
			Dfire2.x = Dragon.x;
			Dfire2.y = Dragon.y;
			Dfire2.shoot();
		}
		if(this.frame == 2){
			Dfire3.x = Dragon.x;
			Dfire3.y = Dragon.y;
			Dfire3.shoot();
		}
		if(this.frame == 3){
			Dfire4.x = Dragon.x;
			Dfire4.y = Dragon.y;
			Dfire4.shoot();
		}
		if(this.frame == 4){
			Dfire5.x = Dragon.x;
			Dfire5.y = Dragon.y;
			Dfire5.shoot();
		}
		if(this.frame == 5){
			Dfire6.x = Dragon.x;
			Dfire6.y = Dragon.y;
			Dfire6.shoot();
		}
		if(this.frame == 6){
			Dfire7.x = Dragon.x;
			Dfire7.y = Dragon.y;
			Dfire7.shoot();
		}
		if(this.frame == 7){
			Dfire8.x = Dragon.x;
			Dfire8.y = Dragon.y;
			Dfire8.shoot();
		}
		if(this.frame == 8){
			Dfire9.x = Dragon.x;
			Dfire9.y = Dragon.y;
			Dfire9.shoot();
		}
		if(this.frame == 9){
			Dfire10.x = Dragon.x;
			Dfire10.y = Dragon.y;
			Dfire10.shoot();
		}
		if(this.frame == 10){
			Dfire11.x = Dragon.x;
			Dfire11.y = Dragon.y;
			Dfire11.shoot();
		}
		if(this.frame == 11){
			Dfire12.x = Dragon.x;
			Dfire12.y = Dragon.y;
			Dfire12.shoot();
		}
		if(this.frame == 12){
			Dfire13.x = Dragon.x;
			Dfire13.y = Dragon.y;
			Dfire13.shoot();
		}
		if(this.frame == 13){
			Dfire14.x = Dragon.x;
			Dfire14.y = Dragon.y;
			Dfire14.shoot();
		}
		if(this.frame == 14){
			Dfire15.x = Dragon.x;
			Dfire15.y = Dragon.y;
			Dfire15.shoot();
		}
		if(this.frame == 45){
			this.x = -100;
			this.y = -200;
			this.onScreen = 0;
			this.frame = 0;
		}
		else if(this.onScreen ==1){
			this.height = 32 + (8*this.frame);
			this.frame++;
			this.x += this.speed;
			if(Hcontained(player, this)){
				if(darkwater.onScreen == 1 && darkwater.hptimer == 0){
					darkwater.hptimer = 20;
					darkwater.hp-=1;
					hptimer = 20;
				}	
				else if(hptimer<=0){
					hptimer = 30;
					player.hp-=1;
					AList[3] = false;
				}
			}
			for (O in obstacle1){
				if(collision(this.dir, this, obstacle1[O])){
					obsHit(obstacle1[O]);
				}
			}
			for (O in obstacle2){
				if(collision(this.dir, this, obstacle2[O])){
					obsHit(obstacle2[O]);
				}
			}
			for (O in obstacle3){
				if(collision(this.dir, this, obstacle3[O])){
					obsHit(obstacle3[O]);
				}
			}
		}
	},
	// Spawn
	shoot: function(){
		longfuzz.currentTime=0;
		longfuzz.play();
		this.height = 32;
		this.width = 16;
		this.x = Dragon.x;
		this.y = Dragon.y;
		this.dir = "D";
		this.frame = 0;
		this.onScreen = 1;
	}
};
var Dfire2 = {
	color1: "#FF6600",
	color2: "#990000",
	color3: "#FFCC00",
	x: -100,
	y: -200,
	width: 32,
	height: 8,
	dir: "D",
	frame: 0,
	speed: 16,
	onScreen: 0,
	
	draw: function(){
		if(this.onScreen == 1){
			var color = Math.floor(Math.random() * 3) + 1;
			if(color == 1){
				ctx.fillStyle = this.color1;
			}
			else if(color == 2){
				ctx.fillStyle = this.color2;
			}
			else if(color == 3){
				ctx.fillStyle = this.color3;
			}
			ctx.fillRect(this.x - this.width * 0.5,
			this.y - this.height * 0.5,
			this.width, this.height);
		}
	},
	effect: function(){
		if(this.frame == 45){
			this.x = -100;
			this.y = -200;
			this.onScreen = 0;
			this.frame = 0;
		}
		else if(this.onScreen ==1){
			this.height = 32 + (8*this.frame);
			this.frame++;
			this.x += this.speed;
			if(Hcontained(player, this)){
				if(darkwater.onScreen == 1 && darkwater.hptimer == 0){
					darkwater.hptimer = 20;
					darkwater.hp-=1;
					hptimer = 20;
				}	
				else if(hptimer<=0){
					hptimer = 30;
					player.hp-=1;
					AList[3] = false;
				}
			}
			for (O in obstacle1){
				if(collision(this.dir, this, obstacle1[O])){
					obsHit(obstacle1[O]);
				}
			}
			for (O in obstacle2){
				if(collision(this.dir, this, obstacle2[O])){
					obsHit(obstacle2[O]);
				}
			}
			for (O in obstacle3){
				if(collision(this.dir, this, obstacle3[O])){
					obsHit(obstacle3[O]);
				}
			}
		}
	},
	// Spawn
	shoot: function(){
		this.onScreen = 1;
		this.height = 32;
		this.width = 16;
	}
};

var Dfire3 = {
	color1: "#FF6600",
	color2: "#990000",
	color3: "#FFCC00",
	x: -100,
	y: -200,
	width: 32,
	height: 8,
	dir: "D",
	frame: 0,
	speed: 16,
	onScreen: 0,
	draw: function(){
		if(this.onScreen == 1){
			var color = Math.floor(Math.random() * 3) + 1;
			if(color == 1){
				ctx.fillStyle = this.color1;
			}
			else if(color == 2){
				ctx.fillStyle = this.color2;
			}
			else if(color == 3){
				ctx.fillStyle = this.color3;
			}
			ctx.fillRect(this.x - this.width * 0.5,
			this.y - this.height * 0.5,
			this.width, this.height);
		}
	},
	effect: function(){
		if(this.frame == 45){
			this.x = -100;
			this.y = -200;
			this.onScreen = 0;
			this.frame = 0;
		}
		else if(this.onScreen ==1){
			this.height = 32 + (8*this.frame);
			this.frame++;
			this.x += this.speed;
			if(Hcontained(player, this)){
				if(darkwater.onScreen == 1 && darkwater.hptimer == 0){
					darkwater.hptimer = 20;
					darkwater.hp-=1;
					hptimer = 20;
				}	
				else if(hptimer<=0){
					hptimer = 30;
					player.hp-=1;
					AList[3] = false;
				}
			}
			for (O in obstacle1){
				if(collision(this.dir, this, obstacle1[O])){
					obsHit(obstacle1[O]);
				}
			}
			for (O in obstacle2){
				if(collision(this.dir, this, obstacle2[O])){
					obsHit(obstacle2[O]);
				}
			}
			for (O in obstacle3){
				if(collision(this.dir, this, obstacle3[O])){
					obsHit(obstacle3[O]);
				}
			}
		}
	},
	// Spawn
	shoot: function(){
		this.onScreen = 1;
		this.width = 16;
		this.height = 32;
	}
};
var Dfire4 = {
	color1: "#FF6600",
	color2: "#990000",
	color3: "#FFCC00",
	x: -100,
	y: -200,
	width: 32,
	height: 8,
	dir: "D",
	frame: 0,
	speed: 16,
	onScreen: 0,
	
	draw: function(){
		if(this.onScreen == 1){
			var color = Math.floor(Math.random() * 3) + 1;
			if(color == 1){
				ctx.fillStyle = this.color1;
			}
			else if(color == 2){
				ctx.fillStyle = this.color2;
			}
			else if(color == 3){
				ctx.fillStyle = this.color3;
			}
			ctx.fillRect(this.x - this.width * 0.5,
			this.y - this.height * 0.5,
			this.width, this.height);
		}
	},
	effect: function(){
		if(this.frame == 45){
			this.x = -100;
			this.y = -200;
			this.onScreen = 0;
			this.frame = 0;
		}
		else if(this.onScreen ==1){
			this.height = 32 + (8*this.frame);
			this.frame++;
			this.x += this.speed;
			if(Hcontained(player, this)){
				if(darkwater.onScreen == 1 && darkwater.hptimer == 0){
					darkwater.hptimer = 20;
					darkwater.hp-=1;
					hptimer = 20;
				}	
				else if(hptimer<=0){
					hptimer = 30;
					player.hp-=1;
					AList[3] = false;
				}
			}
			for (O in obstacle1){
				if(collision(this.dir, this, obstacle1[O])){
					obsHit(obstacle1[O]);
				}
			}
			for (O in obstacle2){
				if(collision(this.dir, this, obstacle2[O])){
					obsHit(obstacle2[O]);
				}
			}
			for (O in obstacle3){
				if(collision(this.dir, this, obstacle3[O])){
					obsHit(obstacle3[O]);
				}
			}
		}
	},
	// Spawn
	shoot: function(){
		this.onScreen = 1;
		this.height = 32;
		this.width = 16;
	}
};
var Dfire5 = {
	color1: "#FF6600",
	color2: "#990000",
	color3: "#FFCC00",
	x: -100,
	y: -200,
	width: 32,
	height: 8,
	dir: "D",
	frame: 0,
	speed: 16,
	onScreen: 0,
	
	draw: function(){
		if(this.onScreen == 1){
			var color = Math.floor(Math.random() * 3) + 1;
			if(color == 1){
				ctx.fillStyle = this.color1;
			}
			else if(color == 2){
				ctx.fillStyle = this.color2;
			}
			else if(color == 3){
				ctx.fillStyle = this.color3;
			}
			ctx.fillRect(this.x - this.width * 0.5,
			this.y - this.height * 0.5,
			this.width, this.height);
		}
	},
	effect: function(){
		if(this.frame == 45){
			this.x = -100;
			this.y = -200;
			this.onScreen = 0;
			this.frame = 0;
		}
		else if(this.onScreen ==1){
			this.height = 32 + (8*this.frame);
			this.frame++;
			this.x += this.speed;
			if(Hcontained(player, this)){
				if(darkwater.onScreen == 1 && darkwater.hptimer == 0){
					darkwater.hptimer = 20;
					darkwater.hp-=1;
					hptimer = 20;
				}	
				else if(hptimer<=0){
					hptimer = 30;
					player.hp-=1;
					AList[3] = false;
				}
			}
			for (O in obstacle1){
				if(collision(this.dir, this, obstacle1[O])){
					obsHit(obstacle1[O]);
				}
			}
			for (O in obstacle2){
				if(collision(this.dir, this, obstacle2[O])){
					obsHit(obstacle2[O]);
				}
			}
			for (O in obstacle3){
				if(collision(this.dir, this, obstacle3[O])){
					obsHit(obstacle3[O]);
				}
			}
		}
	},
	// Spawn
	shoot: function(){
		this.onScreen = 1;
		this.height = 32;
		this.width = 16;
	}
};
var Dfire6 = {
	color1: "#FF6600",
	color2: "#990000",
	color3: "#FFCC00",
	x: -100,
	y: -200,
	width: 32,
	height: 8,
	dir: "D",
	frame: 0,
	speed: 16,
	onScreen: 0,
	
	draw: function(){
		if(this.onScreen == 1){
			var color = Math.floor(Math.random() * 3) + 1;
			if(color == 1){
				ctx.fillStyle = this.color1;
			}
			else if(color == 2){
				ctx.fillStyle = this.color2;
			}
			else if(color == 3){
				ctx.fillStyle = this.color3;
			}
			ctx.fillRect(this.x - this.width * 0.5,
			this.y - this.height * 0.5,
			this.width, this.height);
		}
	},
	effect: function(){
		if(this.frame == 45){
			this.x = -100;
			this.y = -200;
			this.onScreen = 0;
			this.frame = 0;
		}
		else if(this.onScreen ==1){
			this.height = 32 + (8*this.frame);
			this.frame++;
			this.x += this.speed;
			if(Hcontained(player, this)){
				if(darkwater.onScreen == 1 && darkwater.hptimer == 0){
					darkwater.hptimer = 20;
					darkwater.hp-=1;
					hptimer = 20;
				}	
				else if(hptimer<=0){
					hptimer = 30;
					player.hp-=1;
					AList[3] = false;
				}
			}
			for (O in obstacle1){
				if(collision(this.dir, this, obstacle1[O])){
					obsHit(obstacle1[O]);
				}
			}
			for (O in obstacle2){
				if(collision(this.dir, this, obstacle2[O])){
					obsHit(obstacle2[O]);
				}
			}
			for (O in obstacle3){
				if(collision(this.dir, this, obstacle3[O])){
					obsHit(obstacle3[O]);
				}
			}
		}
	},
	// Spawn
	shoot: function(){
		this.onScreen = 1;
		this.height = 32;
		this.width = 16;
	}
};
var Dfire7 = {
	color1: "#FF6600",
	color2: "#990000",
	color3: "#FFCC00",
	x: -100,
	y: -200,
	width: 32,
	height: 8,
	dir: "D",
	frame: 0,
	speed: 16,
	onScreen: 0,
	
	draw: function(){
		if(this.onScreen == 1){
			var color = Math.floor(Math.random() * 3) + 1;
			if(color == 1){
				ctx.fillStyle = this.color1;
			}
			else if(color == 2){
				ctx.fillStyle = this.color2;
			}
			else if(color == 3){
				ctx.fillStyle = this.color3;
			}
			ctx.fillRect(this.x - this.width * 0.5,
			this.y - this.height * 0.5,
			this.width, this.height);
		}
	},
	effect: function(){
		if(this.frame == 45){
			this.x = -100;
			this.y = -200;
			this.onScreen = 0;
			this.frame = 0;
		}
		else if(this.onScreen ==1){
			this.height = 32 + (8*this.frame);
			this.frame++;
			this.x += this.speed;
			if(Hcontained(player, this)){
				if(darkwater.onScreen == 1 && darkwater.hptimer == 0){
					darkwater.hptimer = 20;
					darkwater.hp-=1;
					hptimer = 20;
				}	
				else if(hptimer<=0){
					hptimer = 30;
					player.hp-=1;
					AList[3] = false;
				}
			}
			for (O in obstacle1){
				if(collision(this.dir, this, obstacle1[O])){
					obsHit(obstacle1[O]);
				}
			}
			for (O in obstacle2){
				if(collision(this.dir, this, obstacle2[O])){
					obsHit(obstacle2[O]);
				}
			}
			for (O in obstacle3){
				if(collision(this.dir, this, obstacle3[O])){
					obsHit(obstacle3[O]);
				}
			}
		}
	},
	// Spawn
	shoot: function(){
		this.onScreen = 1;
		this.height = 32;
		this.width = 16;
	}
};
var Dfire8 = {
	color1: "#FF6600",
	color2: "#990000",
	color3: "#FFCC00",
	x: -100,
	y: -200,
	width: 32,
	height: 8,
	dir: "D",
	frame: 0,
	speed: 16,
	onScreen: 0,
	
	draw: function(){
		if(this.onScreen == 1){
			var color = Math.floor(Math.random() * 3) + 1;
			if(color == 1){
				ctx.fillStyle = this.color1;
			}
			else if(color == 2){
				ctx.fillStyle = this.color2;
			}
			else if(color == 3){
				ctx.fillStyle = this.color3;
			}
			ctx.fillRect(this.x - this.width * 0.5,
			this.y - this.height * 0.5,
			this.width, this.height);
		}
	},
	effect: function(){
		if(this.frame == 45){
			this.x = -100;
			this.y = -200;
			this.onScreen = 0;
			this.frame = 0;
		}
		else if(this.onScreen ==1){
			this.height = 32 + (8*this.frame);
			this.frame++;
			this.x += this.speed;
			if(Hcontained(player, this)){
				if(darkwater.onScreen == 1 && darkwater.hptimer == 0){
					darkwater.hptimer = 20;
					darkwater.hp-=1;
					hptimer = 20;
				}	
				else if(hptimer<=0){
					hptimer = 30;
					player.hp-=1;
					AList[3] = false;
				}
			}
			for (O in obstacle1){
				if(collision(this.dir, this, obstacle1[O])){
					obsHit(obstacle1[O]);
				}
			}
			for (O in obstacle2){
				if(collision(this.dir, this, obstacle2[O])){
					obsHit(obstacle2[O]);
				}
			}
			for (O in obstacle3){
				if(collision(this.dir, this, obstacle3[O])){
					obsHit(obstacle3[O]);
				}
			}
		}
	},
	// Spawn
	shoot: function(){
		this.onScreen = 1;
		this.height = 32;
		this.width = 16;
	}
};
var Dfire9 = {
	color1: "#FF6600",
	color2: "#990000",
	color3: "#FFCC00",
	x: -100,
	y: -200,
	width: 32,
	height: 8,
	dir: "D",
	frame: 0,
	speed: 16,
	onScreen: 0,
	
	draw: function(){
		if(this.onScreen == 1){
			var color = Math.floor(Math.random() * 3) + 1;
			if(color == 1){
				ctx.fillStyle = this.color1;
			}
			else if(color == 2){
				ctx.fillStyle = this.color2;
			}
			else if(color == 3){
				ctx.fillStyle = this.color3;
			}
			ctx.fillRect(this.x - this.width * 0.5,
			this.y - this.height * 0.5,
			this.width, this.height);
		}
	},
	effect: function(){
		if(this.frame == 45){
			this.x = -100;
			this.y = -200;
			this.onScreen = 0;
			this.frame = 0;
		}
		else if(this.onScreen ==1){
			this.height = 32 + (8*this.frame);
			this.frame++;
			this.x += this.speed;
			if(Hcontained(player, this)){
				if(darkwater.onScreen == 1 && darkwater.hptimer == 0){
					darkwater.hptimer = 20;
					darkwater.hp-=1;
					hptimer = 20;
				}	
				else if(hptimer<=0){
					hptimer = 30;
					player.hp-=1;
					AList[3] = false;
				}
			}
			for (O in obstacle1){
				if(collision(this.dir, this, obstacle1[O])){
					obsHit(obstacle1[O]);
				}
			}
			for (O in obstacle2){
				if(collision(this.dir, this, obstacle2[O])){
					obsHit(obstacle2[O]);
				}
			}
			for (O in obstacle3){
				if(collision(this.dir, this, obstacle3[O])){
					obsHit(obstacle3[O]);
				}
			}
		}
	},
	// Spawn
	shoot: function(){
		this.onScreen = 1;
		this.height = 32;
		this.width = 16;
	}
};
var Dfire10 = {
	color1: "#FF6600",
	color2: "#990000",
	color3: "#FFCC00",
	x: -100,
	y: -200,
	width: 32,
	height: 8,
	dir: "D",
	frame: 0,
	speed: 16,
	onScreen: 0,
	
	draw: function(){
		if(this.onScreen == 1){
			var color = Math.floor(Math.random() * 3) + 1;
			if(color == 1){
				ctx.fillStyle = this.color1;
			}
			else if(color == 2){
				ctx.fillStyle = this.color2;
			}
			else if(color == 3){
				ctx.fillStyle = this.color3;
			}
			ctx.fillRect(this.x - this.width * 0.5,
			this.y - this.height * 0.5,
			this.width, this.height);
		}
	},
	effect: function(){
		if(this.frame == 45){
			this.x = -100;
			this.y = -200;
			this.onScreen = 0;
			this.frame = 0;
		}
		else if(this.onScreen ==1){
			this.height = 32 + (8*this.frame);
			this.frame++;
			this.x += this.speed;
			if(Hcontained(player, this)){
				if(darkwater.onScreen == 1 && darkwater.hptimer == 0){
					darkwater.hptimer = 20;
					darkwater.hp-=1;
					hptimer = 20;
				}	
				else if(hptimer<=0){
					hptimer = 30;
					player.hp-=1;
					AList[3] = false;
				}
			}
			for (O in obstacle1){
				if(collision(this.dir, this, obstacle1[O])){
					obsHit(obstacle1[O]);
				}
			}
			for (O in obstacle2){
				if(collision(this.dir, this, obstacle2[O])){
					obsHit(obstacle2[O]);
				}
			}
			for (O in obstacle3){
				if(collision(this.dir, this, obstacle3[O])){
					obsHit(obstacle3[O]);
				}
			}
		}
	},
	// Spawn
	shoot: function(){
		this.onScreen = 1;
		this.height = 32;
		this.width = 16;
	}
};
var Dfire11 = {
	color1: "#FF6600",
	color2: "#990000",
	color3: "#FFCC00",
	x: -100,
	y: -200,
	width: 32,
	height: 8,
	dir: "D",
	frame: 0,
	speed: 16,
	onScreen: 0,
	
	draw: function(){
		if(this.onScreen == 1){
			var color = Math.floor(Math.random() * 3) + 1;
			if(color == 1){
				ctx.fillStyle = this.color1;
			}
			else if(color == 2){
				ctx.fillStyle = this.color2;
			}
			else if(color == 3){
				ctx.fillStyle = this.color3;
			}
			ctx.fillRect(this.x - this.width * 0.5,
			this.y - this.height * 0.5,
			this.width, this.height);
		}
	},
	effect: function(){
		if(this.frame == 45){
			this.x = -100;
			this.y = -200;
			this.onScreen = 0;
			this.frame = 0;
		}
		else if(this.onScreen ==1){
			this.height = 32 + (8*this.frame);
			this.frame++;
			this.x += this.speed;
			if(Hcontained(player, this)){
				if(darkwater.onScreen == 1 && darkwater.hptimer == 0){
					darkwater.hptimer = 20;
					darkwater.hp-=1;
					hptimer = 20;
				}	
				else if(hptimer<=0){
					hptimer = 30;
					player.hp-=1;
					AList[3] = false;
				}
			}
			for (O in obstacle1){
				if(collision(this.dir, this, obstacle1[O])){
					obsHit(obstacle1[O]);
				}
			}
			for (O in obstacle2){
				if(collision(this.dir, this, obstacle2[O])){
					obsHit(obstacle2[O]);
				}
			}
			for (O in obstacle3){
				if(collision(this.dir, this, obstacle3[O])){
					obsHit(obstacle3[O]);
				}
			}
		}
	},
	// Spawn
	shoot: function(){
		this.onScreen = 1;
		this.height = 32;
		this.width = 16;
	}
};
var Dfire12 = {
	color1: "#FF6600",
	color2: "#990000",
	color3: "#FFCC00",
	x: -100,
	y: -200,
	width: 32,
	height: 8,
	dir: "D",
	frame: 0,
	speed: 16,
	onScreen: 0,
	
	draw: function(){
		if(this.onScreen == 1){
			var color = Math.floor(Math.random() * 3) + 1;
			if(color == 1){
				ctx.fillStyle = this.color1;
			}
			else if(color == 2){
				ctx.fillStyle = this.color2;
			}
			else if(color == 3){
				ctx.fillStyle = this.color3;
			}
			ctx.fillRect(this.x - this.width * 0.5,
			this.y - this.height * 0.5,
			this.width, this.height);
		}
	},
	effect: function(){
		if(this.frame == 45){
			this.x = -100;
			this.y = -200;
			this.onScreen = 0;
			this.frame = 0;
		}
		else if(this.onScreen ==1){
			this.height = 32 + (8*this.frame);
			this.frame++;
			this.x += this.speed;
			if(Hcontained(player, this)){
				if(darkwater.onScreen == 1 && darkwater.hptimer == 0){
					darkwater.hptimer = 20;
					darkwater.hp-=1;
					hptimer = 20;
				}	
				else if(hptimer<=0){
					hptimer = 30;
					player.hp-=1;
					AList[3] = false;
				}
			}
			for (O in obstacle1){
				if(collision(this.dir, this, obstacle1[O])){
					obsHit(obstacle1[O]);
				}
			}
			for (O in obstacle2){
				if(collision(this.dir, this, obstacle2[O])){
					obsHit(obstacle2[O]);
				}
			}
			for (O in obstacle3){
				if(collision(this.dir, this, obstacle3[O])){
					obsHit(obstacle3[O]);
				}
			}
		}
	},
	// Spawn
	shoot: function(){
		this.onScreen = 1;
		this.height = 32;
		this.width = 16;
	}
};
var Dfire13 = {
	color1: "#FF6600",
	color2: "#990000",
	color3: "#FFCC00",
	x: -100,
	y: -200,
	width: 32,
	height: 8,
	dir: "D",
	frame: 0,
	speed: 16,
	onScreen: 0,
	
	draw: function(){
		if(this.onScreen == 1){
			var color = Math.floor(Math.random() * 3) + 1;
			if(color == 1){
				ctx.fillStyle = this.color1;
			}
			else if(color == 2){
				ctx.fillStyle = this.color2;
			}
			else if(color == 3){
				ctx.fillStyle = this.color3;
			}
			ctx.fillRect(this.x - this.width * 0.5,
			this.y - this.height * 0.5,
			this.width, this.height);
		}
	},
	effect: function(){
		if(this.frame == 45){
			this.x = -100;
			this.y = -200;
			this.onScreen = 0;
			this.frame = 0;
		}
		else if(this.onScreen ==1){
			this.height = 32 + (8*this.frame);
			this.frame++;
			this.x += this.speed;
			if(Hcontained(player, this)){
				if(darkwater.onScreen == 1 && darkwater.hptimer == 0){
					darkwater.hptimer = 20;
					darkwater.hp-=1;
					hptimer = 20;
				}	
				else if(hptimer<=0){
					hptimer = 30;
					player.hp-=1;
					AList[3] = false;
				}
			}
			for (O in obstacle1){
				if(collision(this.dir, this, obstacle1[O])){
					obsHit(obstacle1[O]);
				}
			}
			for (O in obstacle2){
				if(collision(this.dir, this, obstacle2[O])){
					obsHit(obstacle2[O]);
				}
			}
			for (O in obstacle3){
				if(collision(this.dir, this, obstacle3[O])){
					obsHit(obstacle3[O]);
				}
			}
		}
	},
	// Spawn
	shoot: function(){
		this.onScreen = 1;
		this.height = 32;
		this.width = 16;
	}
};
var Dfire14 = {
	color1: "#FF6600",
	color2: "#990000",
	color3: "#FFCC00",
	x: -100,
	y: -200,
	width: 32,
	height: 8,
	dir: "D",
	frame: 0,
	speed: 16,
	onScreen: 0,
	
	draw: function(){
		if(this.onScreen == 1){
			var color = Math.floor(Math.random() * 3) + 1;
			if(color == 1){
				ctx.fillStyle = this.color1;
			}
			else if(color == 2){
				ctx.fillStyle = this.color2;
			}
			else if(color == 3){
				ctx.fillStyle = this.color3;
			}
			ctx.fillRect(this.x - this.width * 0.5,
			this.y - this.height * 0.5,
			this.width, this.height);
		}
	},
	effect: function(){
		if(this.frame == 45){
			this.x = -100;
			this.y = -200;
			this.onScreen = 0;
			this.frame = 0;
		}
		else if(this.onScreen ==1){
			this.height = 32 + (8*this.frame);
			this.frame++;
			this.x += this.speed;
			if(Hcontained(player, this)){
				if(darkwater.onScreen == 1 && darkwater.hptimer == 0){
					darkwater.hptimer = 20;
					darkwater.hp-=1;
					hptimer = 20;
				}	
				else if(hptimer<=0){
					hptimer = 30;
					player.hp-=1;
					AList[3] = false;
				}
			}
			for (O in obstacle1){
				if(collision(this.dir, this, obstacle1[O])){
					obsHit(obstacle1[O]);
				}
			}
			for (O in obstacle2){
				if(collision(this.dir, this, obstacle2[O])){
					obsHit(obstacle2[O]);
				}
			}
			for (O in obstacle3){
				if(collision(this.dir, this, obstacle3[O])){
					obsHit(obstacle3[O]);
				}
			}
		}
	},
	// Spawn
	shoot: function(){
		this.onScreen = 1;
		this.height = 32;
		this.width = 16;
	}
};
var Dfire15 = {
	color1: "#FF6600",
	color2: "#990000",
	color3: "#FFCC00",
	x: -100,
	y: -200,
	width: 32,
	height: 8,
	dir: "D",
	frame: 0,
	speed: 16,
	onScreen: 0,
	
	draw: function(){
		if(this.onScreen == 1){
			var color = Math.floor(Math.random() * 3) + 1;
			if(color == 1){
				ctx.fillStyle = this.color1;
			}
			else if(color == 2){
				ctx.fillStyle = this.color2;
			}
			else if(color == 3){
				ctx.fillStyle = this.color3;
			}
			ctx.fillRect(this.x - this.width * 0.5,
			this.y - this.height * 0.5,
			this.width, this.height);
		}
	},
	effect: function(){
		if(this.frame == 45){
			this.x = -100;
			this.y = -200;
			this.onScreen = 0;
			this.frame = 0;
		}
		else if(this.onScreen ==1){
			this.height = 32 + (8*this.frame);
			this.frame++;
			this.x += this.speed;
			if(Hcontained(player, this)){
				if(darkwater.onScreen == 1 && darkwater.hptimer == 0){
					darkwater.hptimer = 20;
					darkwater.hp-=1;
					hptimer = 20;
				}	
				else if(hptimer<=0){
					hptimer = 30;
					player.hp-=1;
					AList[3] = false;
				}
			}
			for (O in obstacle1){
				if(collision(this.dir, this, obstacle1[O])){
					obsHit(obstacle1[O]);
				}
			}
			for (O in obstacle2){
				if(collision(this.dir, this, obstacle2[O])){
					obsHit(obstacle2[O]);
				}
			}
			for (O in obstacle3){
				if(collision(this.dir, this, obstacle3[O])){
					obsHit(obstacle3[O]);
				}
			}
		}
	},
	// Spawn
	shoot: function(){
		this.onScreen = 1;
		this.height = 32;
		this.width = 16;
	}
};
var Dragonflame = {1: DragonFire, 2: Dfire2, 3: Dfire3, 4: Dfire4, 5: Dfire5, 6: Dfire6, 7: Dfire7, 8: Dfire8, 9: Dfire9, 10: Dfire10, 11: Dfire11, 12: Dfire12, 13: Dfire13, 14: Dfire14, 15: Dfire15};
// Meteor
var BigMeteor1 = {
	type: "Meteor",
	x: -9000,
	y: -2000,
	timeLeft: 0,
	num: 1,
	onTree: 0,
	speed: 8,
	speed2: 4,
	immunity: 0,
	width: 32,
	height: 32,
	//cancel out allenemies[e].movement
	movement: false,
	respawn: -1,
	rs: -1,
	dir: "D",
	draw: function(){
		if(this.timeLeft > 0){
			this.timeLeft-=1;
			if(this.dir == "D"){
				ctx.drawImage(BigMeteorF0, this.x-this.width*0.5, this.y-this.height*0.5);
			}
			if(this.dir == "WD"){
				ctx.drawImage(BigMeteorF45u, this.x-this.width*0.5, this.y-this.height*0.5);
			}
			if(this.dir == "SD"){
				ctx.drawImage(BigMeteorF45d, this.x-this.width*0.5, this.y-this.height*0.5);
			}
			if(this.dir == "DWD"){
				ctx.drawImage(BigMeteorF30u, this.x-this.width*0.5, this.y-this.height*0.5);
			}
			if(this.dir == "D2D"){
				ctx.drawImage(BigMeteorF30d, this.x-this.width*0.5, this.y-this.height*0.5);
			}
		}
		if(this.timeLeft == 0){
			this.x = -9000;
			this.y = -2000;
		}
	},
	shoot: function(){
		this.timeLeft = 150;
	}
};
var Meteor1 = {
	type: "Meteor",
	x: -9000,
	y: -2000,
	timeLeft: 0,
	onTree: 0,
	speed: 8,
	speed2: 4,
	//Bullet clipping causes them to die early
	immunity: 0,
	width: 16,
	height: 16,
	//cancel out allenemies[e].movement
	movement: false,
	respawn: -1,
	rs: -1,
	dir: "SD",
	draw: function(){
		if(this.timeLeft > 0){
			this.timeLeft-=1;
			ctx.drawImage(MeteorF45d, this.x-this.width*0.5, this.y-this.height*0.5);
		}
		if(this.timeLeft == 0){
			this.x = -9000;
			this.y = -2000;
		}
		if(this.immunity > 0){
			this.immunity-=1;
		}
	},
	shoot: function(){
		this.timeLeft = 150;
	}
};
var Meteor2 = {
	type: "Meteor",
	x: -9000,
	y: -2000,
	timeLeft: 0,
	onTree: 0,
	speed: 8,
	speed2: 4,
	//Bullet clipping causes them to die early
	immunity: 0,
	width: 16,
	height: 16,
	//cancel out allenemies[e].movement
	movement: false,
	respawn: -1,
	rs: -1,
	dir: "WD",
	draw: function(){
		if(this.timeLeft > 0){
			this.timeLeft-=1;
			ctx.drawImage(MeteorF45u, this.x-this.width*0.5, this.y-this.height*0.5);
		}
		if(this.timeLeft == 0){
			this.x = -9000;
			this.y = -2000;
		}
		if(this.immunity > 0){
			this.immunity-=1;
		}
	},
	shoot: function(){
		this.timeLeft = 150;
	}
};
var Meteor3 = {
	type: "Meteor",
	x: -9000,
	y: -2000,
	timeLeft: 0,
	onTree: 0,
	speed: 8,
	speed2: 4,
	//Bullet clipping causes them to die early
	immunity: 0,
	width: 16,
	height: 16,
	//cancel out allenemies[e].movement
	movement: false,
	respawn: -1,
	rs: -1,
	dir: "D2D",
	draw: function(){
		if(this.timeLeft > 0){
			this.timeLeft-=1;
			ctx.drawImage(MeteorF30d, this.x-this.width*0.5, this.y-this.height*0.5);
		}
		if(this.timeLeft == 0){
			this.x = -9000;
			this.y = -2000;
		}
		if(this.immunity > 0){
			this.immunity-=1;
		}
	},
	shoot: function(){
		this.timeLeft = 150;
	}
};
var Meteor4 = {
	type: "Meteor",
	x: -9000,
	y: -2000,
	timeLeft: 0,
	onTree: 0,
	speed: 8,
	speed2: 4,
	//Bullet clipping causes them to die early
	immunity: 0,
	width: 16,
	height: 16,
	//cancel out allenemies[e].movement
	movement: false,
	respawn: -1,
	rs: -1,
	dir: "DWD",
	draw: function(){
		if(this.timeLeft > 0){
			this.timeLeft-=1;
			ctx.drawImage(MeteorF30u, this.x-this.width*0.5, this.y-this.height*0.5);
		}
		if(this.timeLeft == 0){
			this.x = -9000;
			this.y = -2000;
		}
		if(this.immunity > 0){
			this.immunity-=1;
		}
	},
	shoot: function(){
		this.timeLeft = 150;
	}
};
var BigMeteor2 = {
	type: "Meteor",
	x: -9000,
	y: -2000,
	timeLeft: 0,
	num: 2,
	onTree: 0,
	speed: 8,
	speed2: 4,
	immunity: 0,
	width: 32,
	height: 32,
	//cancel out allenemies[e].movement
	movement: false,
	respawn: -1,
	rs: -1,
	dir: "D",
	draw: function(){
		if(this.timeLeft > 0){
			this.timeLeft-=1;
			if(this.dir == "D"){
				ctx.drawImage(BigMeteorF0, this.x-this.width*0.5, this.y-this.height*0.5);
			}
			if(this.dir == "WD"){
				ctx.drawImage(BigMeteorF45u, this.x-this.width*0.5, this.y-this.height*0.5);
			}
			if(this.dir == "SD"){
				ctx.drawImage(BigMeteorF45d, this.x-this.width*0.5, this.y-this.height*0.5);
			}
			if(this.dir == "DWD"){
				ctx.drawImage(BigMeteorF30u, this.x-this.width*0.5, this.y-this.height*0.5);
			}
			if(this.dir == "D2D"){
				ctx.drawImage(BigMeteorF30d, this.x-this.width*0.5, this.y-this.height*0.5);
			}
		}
		if(this.timeLeft == 0){
			this.x = -9000;
			this.y = -2000;
		}
	},
	shoot: function(){
		this.timeLeft = 150;
	}
};
var Meteor5 = {
	type: "Meteor",
	x: -9000,
	y: -2000,
	timeLeft: 0,
	onTree: 0,
	speed: 8,
	speed2: 4,
	//Bullet clipping causes them to die early
	immunity: 0,
	width: 16,
	height: 16,
	//cancel out allenemies[e].movement
	movement: false,
	respawn: -1,
	rs: -1,
	dir: "SD",
	draw: function(){
		if(this.timeLeft > 0){
			this.timeLeft-=1;
			ctx.drawImage(MeteorF45d, this.x-this.width*0.5, this.y-this.height*0.5);
		}
		if(this.timeLeft == 0){
			this.x = -9000;
			this.y = -2000;
		}
		if(this.immunity > 0){
			this.immunity-=1;
		}
	},
	shoot: function(){
		this.timeLeft = 150;
	}
};
var Meteor6 = {
	type: "Meteor",
	x: -9000,
	y: -2000,
	timeLeft: 0,
	onTree: 0,
	speed: 8,
	speed2: 4,
	//Bullet clipping causes them to die early
	immunity: 0,
	width: 16,
	height: 16,
	//cancel out allenemies[e].movement
	movement: false,
	respawn: -1,
	rs: -1,
	dir: "WD",
	draw: function(){
		if(this.timeLeft > 0){
			this.timeLeft-=1;
			ctx.drawImage(MeteorF45u, this.x-this.width*0.5, this.y-this.height*0.5);
		}
		if(this.timeLeft == 0){
			this.x = -9000;
			this.y = -2000;
		}
		if(this.immunity > 0){
			this.immunity-=1;
		}
	},
	shoot: function(){
		this.timeLeft = 150;
	}
};
var Meteor7 = {
	type: "Meteor",
	x: -9000,
	y: -2000,
	timeLeft: 0,
	onTree: 0,
	speed: 8,
	speed2: 4,
	//Bullet clipping causes them to die early
	immunity: 0,
	width: 16,
	height: 16,
	//cancel out allenemies[e].movement
	movement: false,
	respawn: -1,
	rs: -1,
	dir: "D2D",
	draw: function(){
		if(this.timeLeft > 0){
			this.timeLeft-=1;
			ctx.drawImage(MeteorF30d, this.x-this.width*0.5, this.y-this.height*0.5);
		}
		if(this.timeLeft == 0){
			this.x = -9000;
			this.y = -2000;
		}
		if(this.immunity > 0){
			this.immunity-=1;
		}
	},
	shoot: function(){
		this.timeLeft = 150;
	}
};
var Meteor8 = {
	type: "Meteor",
	x: -9000,
	y: -2000,
	timeLeft: 0,
	onTree: 0,
	speed: 8,
	speed2: 4,
	//Bullet clipping causes them to die early
	immunity: 0,
	width: 16,
	height: 16,
	//cancel out allenemies[e].movement
	movement: false,
	respawn: -1,
	rs: -1,
	dir: "DWD",
	draw: function(){
		if(this.timeLeft > 0){
			this.timeLeft-=1;
			ctx.drawImage(MeteorF30u, this.x-this.width*0.5, this.y-this.height*0.5);
		}
		if(this.timeLeft == 0){
			this.x = -9000;
			this.y = -2000;
		}
		if(this.immunity > 0){
			this.immunity-=1;
		}
	},
	shoot: function(){
		this.timeLeft = 150;
	}
};
var MeteorD1 = {
	type: "Meteor",
	x: -9000,
	y: -2000,
	timeLeft: 0,
	onTree: 0,
	speed: 8,
	speed2: 4,
	//Bullet clipping causes them to die early
	immunity: 0,
	width: 16,
	height: 16,
	//cancel out allenemies[e].movement
	movement: false,
	respawn: -1,
	rs: -1,
	dir: "D",
	draw: function(){
		if(this.timeLeft > 0){
			this.timeLeft-=1;
			ctx.drawImage(MeteorF0, this.x-this.width*0.5, this.y-this.height*0.5);
		}
		if(this.timeLeft == 0){
			this.x = -9000;
			this.y = -2000;
		}
		if(this.immunity > 0){
			this.immunity-=1;
		}
	},
	shoot: function(){
		this.timeLeft = 150;
	}
};
var MeteorD2 = {
	type: "Meteor",
	x: -9000,
	y: -2000,
	timeLeft: 0,
	onTree: 0,
	speed: 8,
	speed2: 4,
	//Bullet clipping causes them to die early
	immunity: 0,
	width: 16,
	height: 16,
	//cancel out allenemies[e].movement
	movement: false,
	respawn: -1,
	rs: -1,
	dir: "D",
	draw: function(){
		if(this.timeLeft > 0){
			this.timeLeft-=1;
			ctx.drawImage(MeteorF0, this.x-this.width*0.5, this.y-this.height*0.5);
		}
		if(this.timeLeft == 0){
			this.x = -9000;
			this.y = -2000;
		}
		if(this.immunity > 0){
			this.immunity-=1;
		}
	},
	shoot: function(){
		this.timeLeft = 150;
	}
};
var BigMeteors = {1: BigMeteor1, 2: BigMeteor2};
//------------------------------------------------------ Effect Meteors -------------------------------------------------------------//
var EMeteor1 = {
	LR: 1,
	type: "Meteor",
	x: -9000,
	y: -2000,
	width: 96,
	height: 96,
	timer: -1,
	index: 1,
	launched: false
};
var EMeteor2 = {
	LR: 1,
	type: "Meteor",
	x: -9000,
	y: -2000,
	width: 96,
	height: 96,
	timer: -1,
	index: 1,
	launched: false
};
var EMeteor3 = {
	LR: 1,
	type: "Meteor",
	x: -9000,
	y: -2000,
	width: 96,
	height: 96,
	timer: -1,
	index: 1,
	launched: false
};
var EMeteor4 = {
	LR: 1,
	type: "Meteor",
	x: -9000,
	y: -2000,
	width: 96,
	height: 96,
	timer: -1,
	index: 1,
	launched: false
};
var EMeteor5 = {
	LR: 1,
	type: "Meteor",
	x: -9000,
	y: -2000,
	width: 96,
	height: 96,
	timer: -1,
	index: 1,
	launched: false
};
var EMeteor6 = {
	LR: 1,
	type: "Meteor",
	x: -9000,
	y: -2000,
	width: 96,
	height: 96,
	timer: -1,
	index: 1,
	launched: false
};
var EMeteor7 = {
	LR: 1,
	type: "Meteor",
	x: -9000,
	y: -2000,
	width: 96,
	height: 96,
	timer: -1,
	index: 1,
	launched: false
};
var EMeteor8 = {
	LR: 1,
	type: "Meteor",
	x: -9000,
	y: -2000,
	width: 96,
	height: 96,
	timer: -1,
	index: 1,
	launched: false
};
var EMeteor13 = {
	LR: 1,
	type: "Meteor",
	x: -9000,
	y: -2000,
	width: 96,
	height: 96,
	timer: -1,
	index: 1,
	launched: false
};
var EMeteor14 = {
	LR: 1,
	type: "Meteor",
	x: -9000,
	y: -2000,
	width: 96,
	height: 96,
	timer: -1,
	index: 1,
	launched: false
};
var EMeteor15 = {
	LR: 1,
	type: "Meteor",
	x: -9000,
	y: -2000,
	width: 96,
	height: 96,
	timer: -1,
	index: 1,
	launched: false
};
var EMeteor16 = {
	LR: 1,
	type: "Meteor",
	x: -9000,
	y: -2000,
	width: 96,
	height: 96,
	timer: -1,
	index: 1,
	launched: false
};
var EMeteors = {1: EMeteor1, 2: EMeteor2, 3: EMeteor3, 4: EMeteor4, 5: EMeteor5, 6: EMeteor6, 7: EMeteor7, 8: EMeteor8, 9: EMeteor13, 10: EMeteor14, 11: EMeteor15, 12: EMeteor16};
function MeteorMove(B){
	//Damage enemies on landing
	if(B.index >= 21){
		for(E in AllEnemies){
			if(collision(AllEnemies[E].dir, AllEnemies[E], B)){
				var currPwr = player.power;
				player.power = 2;
				onHit(AllEnemies[E]);
				player.power = currPwr;
			}
		}
	}
	if (B.timeLeft > 0 && B.dir == "D"){
		B.timeLeft--;
		Math.floor(B.x += B.speed);
	}
	else if (B.timeLeft > 0 && B.dir == "SD"){
		B.timeLeft--;
		Math.floor(B.x += B.speed);
		Math.floor(B.y += B.speed);
	}
	else if (B.timeLeft > 0 && B.dir == "WD"){
		B.timeLeft--;
		Math.floor(B.x += B.speed);
		Math.floor(B.y -= B.speed);
	}
	else if (B.timeLeft > 0 && B.dir == "D2W"){
		B.timeLeft--;
		Math.floor(B.x += B.speed*0.5);
		Math.floor(B.y -= B.speed);
	}
	else if (B.timeLeft > 0 && B.dir == "D2S"){
		B.timeLeft--;
		Math.floor(B.x += B.speed*0.5);
		Math.floor(B.y += B.speed);
	}
	else if (B.timeLeft > 0 && B.dir == "DD"){
		B.timeLeft--;
		Math.floor(B.x += B.speed);
		Math.floor(B.y -= B.speed*0.5);
	}
	else if (B.timeLeft > 0 && B.dir == "D2D"){
		B.timeLeft--;
		Math.floor(B.x += B.speed);
		Math.floor(B.y += B.speed*0.5);
	}
	else if (B.timeLeft > 0 && B.dir == "DWD"){
		B.timeLeft--;
		Math.floor(B.x += B.speed);
		Math.floor(B.y -= B.speed*0.5);
	}
	else if (B.timeLeft > 0 && B.dir == "D2WD"){
		B.timeLeft--;
		Math.floor(B.x += B.speed*0.5);
		Math.floor(B.y -= B.speed);
	}
	else if (B.timeLeft > 0 && B.dir == "DSD"){
		B.timeLeft--;
		Math.floor(B.x += B.speed);
		Math.floor(B.y += B.speed*0.5);
	}
	else if (B.timeLeft > 0 && B.dir == "D2SD"){
		B.timeLeft--;
		Math.floor(B.x += B.speed*0.5);
		Math.floor(B.y += B.speed);
	}
	while(B.x*0.25 != Math.round(B.x*0.25)){
			B.x++;
	}
	while(B.y*0.25 != Math.round(B.y*0.25)){
			B.y++;
	}
}
function MeteorAI(E){	
	var xdiff = player.x - E.x;
	var ydiff = player.y - E.y;
	if(xdiff < 4 && ydiff < 4){
		E.dir = E.dir;
	}
	else if(xdiff < 4 && ydiff > 4){
		E.dir = E.dir;
	}	
	else if(xdiff > 4 && ydiff < 4){
		E.dir = "DWD";
	}	
	else if (xdiff > 4 && ydiff > 4){
		E.dir = "D2D";
	}
	else if (xdiff == 4 && ydiff > 4){
		E.dir = "SD";
	}
	else if(xdiff == 4 && ydiff < 4){
		E.dir = "WD";
	}
	else if(xdiff < 4 && ydiff == 4){
		E.dir = E.dir;
	}
	else{
		E.dir = "D";
	}
}
function EMeteorDraw(E){
	if(E.timer > 0){
			E.timer-=1;
	}
	else if(E.timer == 0 && !E.launched){
		//spawn
		if(E == EMeteor13 || E == EMeteor14 || E == EMeteor15 || E == EMeteor16){
			if(Genie.LR == "Left"){
				E.LR = 2;
			}
			else{
				E.LR = 1;
			}
			E.x = player.x;
			E.y = player.y
		}
		else{
			E.LR = Math.floor(Math.random() * 2) + 1;
			E.x = (Math.floor(Math.random() * 12) + 3)*48;
			E.y = (Math.floor(Math.random() * 12) + 4)*32;
		}
		E.launched = true;
		//if it is on another meteor, or in lava, redo the calculation next frame
		//y: 56 to 130, 162 to 224, 392 to 508
		//x: 196 to 800, 504 to 800, 0 to 562
		if(E != EMeteor13 && E != EMeteor14 && E != EMeteor15 && E != EMeteor16){
			if((E.x > 196 && E.x < 800 && E.y > 56 && E.y < 130) || (E.x > 504 && E.x < 800 && E.y > 162 && E.y < 224) || (E.x > 0 && E.x < 562 && E.y > 392 && E.y < 508)){
				E.launched = false;
			}
			for(O in ObsList){
				if(contained(E, ObsList[O]) || collision("W", E, ObsList[O]) || collision("D", E, ObsList[O])){
					E.launched = false;
				}
			}
			for(O in EMeteors){
				if(EMeteors[O] != EMeteor13 && EMeteors[O] != EMeteor14 && EMeteors[O] != EMeteor15 && EMeteors[O] != EMeteor16 && EMeteors[O] != E){
					if(contained(E, EMeteors[O]) || collision("W", E, EMeteors[O]) || collision("D", E, EMeteors[O])){
						E.launched = false;
					}
				}
			}
			//make it not next to stuff
			E.x+=32;
			for(O in ObsList){
				if(contained(E, ObsList[O]) || collision("W", E, ObsList[O]) || collision("D", E, ObsList[O])){
					E.launched = false;
				}
			}
			for(O in EMeteors){
				if(EMeteors[O] != EMeteor13 && EMeteors[O] != EMeteor14 && EMeteors[O] != EMeteor15 && EMeteors[O] != EMeteor16 && EMeteors[O] != E){
					if(contained(E, EMeteors[O]) || collision("W", E, EMeteors[O]) || collision("D", E, EMeteors[O])){
						E.launched = false;
					}
				}
			}
			E.x-=64;
			for(O in ObsList){
				if(contained(E, ObsList[O]) || collision("W", E, ObsList[O]) || collision("D", E, ObsList[O])){
					E.launched = false;
				}
			}
			for(O in EMeteors){
				if(EMeteors[O] != EMeteor13 && EMeteors[O] != EMeteor14 && EMeteors[O] != EMeteor15 && EMeteors[O] != EMeteor16 && EMeteors[O] != E){
					if(contained(E, EMeteors[O]) || collision("W", E, EMeteors[O]) || collision("D", E, EMeteors[O])){
						E.launched = false;
					}
				}
			}
			E.y+=32;
			E.x+=32;
			for(O in ObsList){
				if(contained(E, ObsList[O]) || collision("W", E, ObsList[O]) || collision("D", E, ObsList[O])){
					E.launched = false;
				}
			}
			for(O in EMeteors){
				if(EMeteors[O] != EMeteor13 && EMeteors[O] != EMeteor14 && EMeteors[O] != EMeteor15 && EMeteors[O] != EMeteor16 && EMeteors[O] != E){
					if(contained(E, EMeteors[O]) || collision("W", E, EMeteors[O]) || collision("D", E, EMeteors[O])){
						E.launched = false;
					}
				}
			}
			E.y-=64;
			for(O in ObsList){
				if(contained(E, ObsList[O]) || collision("W", E, ObsList[O]) || collision("D", E, ObsList[O])){
					E.launched = false;
				}
			}
			for(O in EMeteors){
				if(EMeteors[O] != EMeteor13 && EMeteors[O] != EMeteor14 && EMeteors[O] != EMeteor15 && EMeteors[O] != EMeteor16 && EMeteors[O] != E){
					if(contained(E, EMeteors[O]) || collision("W", E, EMeteors[O]) || collision("D", E, EMeteors[O])){
						E.launched = false;
					}
				}
			}
			E.y+=32;
			//dont collide
			for(O in ObsList){
				if(E.x == ObsList[O].x && E.y == ObsList[O].y){
					E.launched = false;
				}
			}
			for(O in EMeteors){
				if(EMeteors[O] != EMeteor13 && EMeteors[O] != EMeteor14 && EMeteors[O] != EMeteor15 && EMeteors[O] != EMeteor16 && EMeteors[O] != E){
					if(E.x == EMeteors[O].x && E.y == EMeteors[O].y){
						E.launched = false;
					}
				}
			}
		}
		if(FireGhost.onScreen){
			E.timer = 0;
			E.index = 20;
		}
	}
	else if(E.timer == 0){
		if(!FireGhost.onScreen){
			if(E.LR == 2){
				ctx.drawImage(FallingMeteorsL[Math.ceil(E.index/3)], E.x-E.width*0.5 - 88, E.y-E.height*0.5 - 494);
			}
			else{
				ctx.drawImage(FallingMeteorsR[Math.ceil(E.index/3)], E.x-E.width*0.5 - 600, E.y-E.height*0.5 - 494);
			}
		}
		E.index++;
		if(E.index ==21){
			if(!FireGhost.onScreen){
				Explosion.currentTime=0;
				Explosion.play();
			}
			var landed = false;
			if(E == EMeteor13 || E == EMeteor14 || E == EMeteor15 || E == EMeteor16){
				landed = true;
			}
			if(!landed){
				for(O in obstacle2){
					if(obstacle2[O].x == 2000){
						landed = true;
						obstacle2[O].x = E.x;
						obstacle2[O].y = E.y;
						obstacle2[O].hp = 3;
						if(!FireGhost.spawned && Genie.queue && !Genie.queue2){
							var lampy = Math.floor(Math.random()*2)+1;
							if(lampy == 2){
								Lamp.target = obstacle2[O];
								Genie.queue2 = 1;
							}
						}
						if(FireGhost.onScreen){
							obstacle2[O].fallIndex = 1;
						}
						break;
					}
				}
			}
			if(!landed){
				for(O in obstacle3){
					if(obstacle3[O].x == 2000){
						landed = true;
						obstacle3[O].x = E.x;
						obstacle3[O].y = E.y;
						obstacle3[O].hp = 3;
						if(!FireGhost.spawned && Genie.queue && !Genie.queue2){
							var lampy = Math.floor(Math.random()*2)+1;
							if(lampy == 2){
								Lamp.target = obstacle3[O];
								Genie.queue2 = 1;
							}
						}
						if(FireGhost.onScreen){
							obstacle3[O].fallIndex = 1;
						}
						break;
					}
				}
			}
			if(!landed){
				for(O in obstacle1){
					if(obstacle1[O].x == 2000){
						landed = true;
						obstacle1[O].x = E.x;
						obstacle1[O].y = E.y;
						obstacle1[O].hp = 3;
						if(!FireGhost.spawned && Genie.queue && !Genie.queue2){
							var lampy = Math.floor(Math.random()*2)+1;
							if(lampy == 2){
								Lamp.target = obstacle1[O];
								Genie.queue2 = 1;
							}
						}
						if(FireGhost.onScreen){
							obstacle1[O].fallIndex = 1;
						}
						break;
					}
				}
			}
		}
		if(E.index ==36 || FireGhost.onScreen){
			E.timer--;
			E.launched = false;
			E.index = 1;
			E.x = -9000;
			E.y = -2000;
		}
	}
}