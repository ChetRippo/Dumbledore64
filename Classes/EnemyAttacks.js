//-------------------------------------------------------------- Enemy Spells -------------------------------------------------------//
// Globblyfire: Damages player if in radius
var Globblyfire = {
	color: "FF6600",
	x: -100,
	y: -200,
	timeLeft: 0,
	width: 16,
	height: 16,
	frame: 0,
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
		if(this.frame == 10){
			this.x = -100;
			this.y = -200;
			this.width = 16;
			this.height = 16;
			this.onScreen = 0;
		}
		else{
			this.width = 16 + (16*this.frame);
			this.height = 16 + (16*this.frame);
			this.frame++;
			if(contained(player, this)){
				if(hptimer <= 0){
					player.hp-=1;
					onDmg.play();
					hptimer = 30;
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
	},
		
	// Spawn
	shoot: function(){
		Explosion.play();
		this.height = 16;
		this.width = 16;
		this.frame = 0;
		this.onScreen = 1;
	}
};
// Globblyfire2: Damages player if in radius
var Globblyfire2 = {
	color: "FF6600",
	x: -100,
	y: -200,
	timeLeft: 0,
	width: 16,
	height: 16,
	frame: 0,
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
		if(this.frame == 10){
			this.x = -100;
			this.y = -200;
			this.width = 16;
			this.height = 16;
			this.onScreen = 0;
		}
		else{
			this.width = 16 + (16*this.frame);
			this.height = 16 + (16*this.frame);
			this.frame++;
			if(contained(player, this)){
				if(hptimer <= 0){
					player.hp-=1;
					onDmg.play();
					hptimer = 30;
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
	},
		
	// Spawn
	shoot: function(){
		Explosion.play();
		this.height = 16;
		this.width = 16;
		this.frame = 0;
		this.onScreen = 1;
	}
};
// Globblyfire: Damages player if in radius
var Globblyfire3 = {
	color: "FF6600",
	x: -100,
	y: -200,
	timeLeft: 0,
	width: 16,
	height: 16,
	frame: 0,
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
		if(this.frame == 10){
			this.x = -100;
			this.y = -200;
			this.width = 16;
			this.height = 16;
			this.onScreen = 0;
		}
		else{
			this.width = 16 + (16*this.frame);
			this.height = 16 + (16*this.frame);
			this.frame++;
			if(contained(player, this)){
				if(hptimer <= 0){
					player.hp-=1;
					onDmg.play();
					hptimer = 30;
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
	},
		
	// Spawn
	shoot: function(){
		Explosion.play();
		this.height = 16;
		this.width = 16;
		this.frame = 0;
		this.onScreen = 1;
	}
};
// sIce: Slows player down by halving speed
var sIce = {
	color: "00CCFF",
	timeLeft: 0,
	width: 32,
	height: 32,
	x: -100,
	y: -200,
	frame: 0,
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
		if(this.frame == 150){
			this.width = 32;
			this.height = 32;
			this.x = -200;
			this.y = -100;
			this.onScreen = 0;
			this.end = true;
		}
		else{
			this.width = this.width + (32*this.frame);
			this.height = this.height + (32*this.frame);
			this.frame++;
		}
	},
	// Slow all enemies in radius
	effect: function(){
		if(this.onScreen == 1){
			player.speed = 4;
		}
		else if(this.end == true){
			player.speed = 8;
			this.frame = 0;
			this.end = false;
		}
	},
		
	// Spawn
	shoot: function(){
		Frozen.play();
		this.height = 32;
		this.width = 32;
		this.x = Sorceror.x;
		this.y = Sorceror.y;
		this.frame = 0;
		this.onScreen = 1;
	}
};
// sFire: Damages player if in radius
var sFire = {
	color: "FF6600",
	x: -100,
	y: -200,
	timeLeft: 0,
	width: 32,
	height: 32,
	frame: 0,
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
		if(this.frame == 10){
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
			if(contained(player, this)){
				if(hptimer <= 0){
					player.hp-=1;
					onDmg.play();
					hptimer = 30;
				}
			}
		}
	},
		
	// Spawn
	shoot: function(){
		Explosion.play();
		this.height = 32;
		this.width = 32;
		this.x = Sorceror.x;
		this.y = Sorceror.y;
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
	
	draw: function(){
		if(this.onScreen == 1){
			if(this.hstate == 0){
				ctx.drawImage(hlightning1, this.hx - this.hwidth/2, this.hy - this.hheight/2);
				this.hstate+=1;
			}
			else if(this.hstate == 1){
				ctx.drawImage(hlightning2, this.hx - this.hwidth/2, this.hy - this.hheight/2);
				this.hstate+=1;
			}
			else if(this.hstate == 2){
				ctx.drawImage(hlightning3, this.hx - this.hwidth/2, this.hy - this.hheight/2);
				this.hstate=0;
			}
			if(this.vx != -2000){
				if(this.vstate == 0){
					ctx.drawImage(vlightning1, this.vx-this.vwidth/2, this.vy - this.vheight/2);
					this.vstate+=1;
				}
				else if(this.vstate == 1){
					ctx.drawImage(vlightning2, this.vx-this.vwidth/2, this.vy - this.vheight/2);
					this.vstate+=1;
				}
				else if(this.vstate == 2){
					ctx.drawImage(vlightning3, this.vx-this.vwidth/2, this.vy - this.vheight/2);
					this.vstate=0;
				}
			}
		}
	},
	effect: function(){
		if(this.onScreen == 1){
			if(this.timeLeft <= 0){
				this.onScreen = 0;
			}
			else{
				this.timeLeft-=1;
			}
			if(this.vx != -2000){
				if(player.x >= this.vx && player.x <= this.vx + this.vwidth){
					if(hptimer <= 0){
						player.hp-=1;
						onDmg.play();
						hptimer = 30;
					}
				}
			}
			if(this.hy != -2000){
				if(player.y <= this.hy + this.hheight && player.y >= this.hy){
					if(this.vx == -2000){
						this.vx = player.x
					}
					if(hptimer <= 0){
						player.hp-=1;
						onDmg.play();
						hptimer = 30;
					}
				}			
			}
		}
	},
	// Spawn
	shoot: function(){
		Thunder.play();
		this.hx = 400;
		this.hy = Sorceror.y;
		this.onScreen = 1;
		this.timeLeft = 150;
	}
};
//--------------------------------------------------------- Tree Wizzurd Spells -----------------------------------------------------//
var rootBlastW = {
	color: "33CC00",
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
	dir: "W",
	
	draw: function(){
		if(this.onScreen == 1){
			ctx.globalAlpha = 0.5;
			ctx.fillStyle = this.color;
			ctx.fillRect(this.x - this.width / 2, this.y - this.height / 2,	this.width, this.height);
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
		}
		else if(this.onScreen ==1){
			this.width = 32 + (4*this.frame);
			this.frame++;
			this.y -= this.speed;
			if(collision(this.dir, this, player)){
				if(!(hptimer > 0)){
					player.hp-=1;
					hptimer = 30;
				}
			}
		}
	},
	// Spawn
	shoot: function(){
	if(this.cd == 0){
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
	color: "33CC00",
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
	dir: "A",
	
	draw: function(){
		if(this.onScreen == 1){
			ctx.globalAlpha = 0.5;
			ctx.fillStyle = this.color;
			ctx.fillRect(this.x - this.hwidth / 2, this.y - this.hheight / 2, this.hwidth, this.hheight);
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
		}
		else if(this.onScreen ==1){
			this.hheight = 32 + (4*this.frame);
			this.frame++;
			this.x -= this.speed;
			if(collision(this.dir, this, player)){
				if(!(hptimer > 0)){
					player.hp-=1;
					hptimer = 30;
				}
			}
		}
	},
	// Spawn
	shoot: function(){
	if(this.cd == 0){
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
var rootBlastS = {
	color: "33CC00",
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
	dir: "S",
	
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
		}
		else if(this.onScreen ==1){
			this.width = 32 + (4*this.frame);
			this.frame++;
			this.y += this.speed;
			if(collision(this.dir, this, player)){
				if(!(hptimer > 0)){
					player.hp-=1;
					hptimer = 30;
				}
			}
		}
	},
	// Spawn
	shoot: function(){
	if(this.cd == 0){
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
	color: "33CC00",
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
	dir: "D",
	
	draw: function(){
		if(this.onScreen == 1){
			ctx.globalAlpha = 0.5;
			ctx.fillStyle = this.color;
			ctx.fillRect(this.x - this.hwidth / 2, this.y - this.hheight / 2, this.hwidth, this.hheight);
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
		}
		else if(this.onScreen ==1){
			this.hheight = 32 + (4*this.frame);
			this.frame++;
			this.x += this.speed;
			if(collision(this.dir, this, player)){
				if(!(hptimer > 0)){
					player.hp-=1;
					hptimer = 30;
				}
			}
		}
	},
	// Spawn
	shoot: function(){
	if(this.cd == 0){
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
var rootstr = {
	x: -500,
	y: -500,
	width: 16,
	height: 16,
	onScreen: 0,
	draw: function(){
	if(this.onScreen == 1){
		ctx.globalAlpha = 0.5;
		ctx.fillStyle = "330000";
		ctx.fillRect(this.x - this.width / 2, this.y - this.height / 2, this.width, this.height);
		ctx.globalAlpha = 1;
	}
		
	}
};
var rootstr2 = {
	x: -500,
	y: -500,
	width: 16,
	height: 16,
	onScreen: 0,
	draw: function(){
	if(this.onScreen == 1){
		ctx.globalAlpha = 0.5;
		ctx.fillStyle = "330000";
		ctx.fillRect(this.x - this.width / 2, this.y - this.height / 2, this.width, this.height);
		ctx.globalAlpha = 1;
		}
	}
};
var rootstr3 = {
	x: -500,
	y: -500,
	width: 16,
	height: 16,
	onScreen: 0,
	draw: function(){
		if(this.onScreen == 1){
		ctx.globalAlpha = 0.5;
		ctx.fillStyle = "330000";
		ctx.fillRect(this.x - this.width / 2, this.y - this.height / 2, this.width, this.height);
		ctx.globalAlpha = 1;
		}
		
	}
};
var rootstr4 = {
	x: -500,
	y: -500,
	width: 16,
	height: 16,
	onScreen: 0,
	draw: function(){
		if(this.onScreen == 1){
		ctx.globalAlpha = 0.5;
		ctx.fillStyle = "330000";
		ctx.fillRect(this.x - this.width / 2, this.y - this.height / 2, this.width, this.height);
		ctx.globalAlpha = 1;
		}
		
	}
};
var rootstr5 = {
	x: -500,
	y: -500,
	width: 16,
	height: 16,
	onScreen: 0,
	draw: function(){
	if(this.onScreen == 1){
		ctx.globalAlpha = 0.5;
		ctx.fillStyle = "330000";
		ctx.fillRect(this.x - this.width / 2, this.y - this.height / 2, this.width, this.height);
		ctx.globalAlpha = 1;
	}	
	}
};
var rootstr6 = {
	x: -500,
	y: -500,
	width: 16,
	height: 16,
	onScreen: 0,
	draw: function(){
	if(this.onScreen == 1){
		ctx.globalAlpha = 0.5;
		ctx.fillStyle = "330000";
		ctx.fillRect(this.x - this.width / 2, this.y - this.height / 2, this.width, this.height);
		ctx.globalAlpha = 1;
		}
	}
};
var rootstr7 = {
	x: -500,
	y: -500,
	width: 16,
	height: 16,
	onScreen: 0,
	draw: function(){
	if(this.onScreen == 1){
		ctx.globalAlpha = 0.5;
		ctx.fillStyle = "330000";
		ctx.fillRect(this.x - this.width / 2, this.y - this.height / 2, this.width, this.height);
		ctx.globalAlpha = 1;
		}
	}
};
var rootstr8 = {
	x: -500,
	y: -500,
	width: 16,
	height: 16,
	onScreen: 0,
	draw: function(){
	if(this.onScreen == 1){
		ctx.globalAlpha = 0.5;
		ctx.fillStyle = "330000";
		ctx.fillRect(this.x - this.width / 2, this.y - this.height / 2, this.width, this.height);
		ctx.globalAlpha = 1;
		}
	}
};
var rootstr9 = {
	x: -500,
	y: -500,
	width: 16,
	height: 16,
	onScreen: 0,
	draw: function(){
	if(this.onScreen == 1){
		ctx.globalAlpha = 0.5;
		ctx.fillStyle = "330000";
		ctx.fillRect(this.x - this.width / 2, this.y - this.height / 2, this.width, this.height);
		ctx.globalAlpha = 1;
		}
	}
};
var rootstr10 = {
	x: -500,
	y: -500,
	width: 16,
	height: 16,
	onScreen: 0,
	draw: function(){
	if(this.onScreen == 1){
		ctx.globalAlpha = 0.5;
		ctx.fillStyle = "330000";
		ctx.fillRect(this.x - this.width / 2, this.y - this.height / 2, this.width, this.height);
		ctx.globalAlpha = 1;
		}
	}
};
var rootstr11 = {
	x: -500,
	y: -500,
	width: 16,
	height: 16,
	onScreen: 0,
	draw: function(){
	if(this.onScreen == 1){
		ctx.globalAlpha = 0.5;
		ctx.fillStyle = "330000";
		ctx.fillRect(this.x - this.width / 2, this.y - this.height / 2, this.width, this.height);
		ctx.globalAlpha = 1;
		}
	}
};
var rootstr12 = {
	x: -500,
	y: -500,
	width: 16,
	height: 16,
	onScreen: 0,
	draw: function(){
	if(this.onScreen == 1){
		ctx.globalAlpha = 0.5;
		ctx.fillStyle = "330000";
		ctx.fillRect(this.x - this.width / 2, this.y - this.height / 2, this.width, this.height);
		ctx.globalAlpha = 1;
		}
	}
};
var rootstr13 = {
	x: -500,
	y: -500,
	width: 16,
	height: 16,
	onScreen: 0,
	draw: function(){
	if(this.onScreen == 1){
		ctx.globalAlpha = 0.5;
		ctx.fillStyle = "330000";
		ctx.fillRect(this.x - this.width / 2, this.y - this.height / 2, this.width, this.height);
		ctx.globalAlpha = 1;
		}
	}
};
var rootstr14 = {
	x: -500,
	y: -500,
	width: 16,
	height: 16,
	onScreen: 0,
	draw: function(){
	if(this.onScreen == 1){
		ctx.globalAlpha = 0.5;
		ctx.fillStyle = "330000";
		ctx.fillRect(this.x - this.width / 2, this.y - this.height / 2, this.width, this.height);
		ctx.globalAlpha = 1;
		}
	}
};
var rootstr15 = {
	x: -500,
	y: -500,
	width: 16,
	height: 16,
	onScreen: 0,
	draw: function(){
	if(this.onScreen == 1){
		ctx.globalAlpha = 0.5;
		ctx.fillStyle = "330000";
		ctx.fillRect(this.x - this.width / 2, this.y - this.height / 2, this.width, this.height);
		ctx.globalAlpha = 1;
		}
	}
};
var rootstr21 = {
	x: -500,
	y: -500,
	width: 16,
	height: 16,
	onScreen: 0,
	draw: function(){
	if(this.onScreen == 1){
		ctx.globalAlpha = 0.5;
		ctx.fillStyle = "330000";
		ctx.fillRect(this.x - this.width / 2, this.y - this.height / 2, this.width, this.height);
		ctx.globalAlpha = 1;
		}
	}
};
var rootstr22 = {
	x: -500,
	y: -500,
	width: 16,
	height: 16,
	onScreen: 0,
	draw: function(){
	if(this.onScreen == 1){
		ctx.globalAlpha = 0.5;
		ctx.fillStyle = "330000";
		ctx.fillRect(this.x - this.width / 2, this.y - this.height / 2, this.width, this.height);
		ctx.globalAlpha = 1;
		}
	}
};
var rootstr23 = {
	x: -500,
	y: -500,
	width: 16,
	height: 16,
	onScreen: 0,
	draw: function(){
	if(this.onScreen == 1){
		ctx.globalAlpha = 0.5;
		ctx.fillStyle = "330000";
		ctx.fillRect(this.x - this.width / 2, this.y - this.height / 2, this.width, this.height);
		ctx.globalAlpha = 1;
		}
	}
};
var rootstr24 = {
	x: -500,
	y: -500,
	width: 16,
	height: 16,
	onScreen: 0,
	draw: function(){
	if(this.onScreen == 1){
		ctx.globalAlpha = 0.5;
		ctx.fillStyle = "330000";
		ctx.fillRect(this.x - this.width / 2, this.y - this.height / 2, this.width, this.height);
		ctx.globalAlpha = 1;
		}
	}
};
var rootstr25 = {
	x: -500,
	y: -500,
	width: 16,
	height: 16,
	onScreen: 0,
	draw: function(){
	if(this.onScreen == 1){
		ctx.globalAlpha = 0.5;
		ctx.fillStyle = "330000";
		ctx.fillRect(this.x - this.width / 2, this.y - this.height / 2, this.width, this.height);
		ctx.globalAlpha = 1;
		}
	}
};
var rootstr26 = {
	x: -500,
	y: -500,
	width: 16,
	height: 16,
	onScreen: 0,
	draw: function(){
	if(this.onScreen == 1){
		ctx.globalAlpha = 0.5;
		ctx.fillStyle = "330000";
		ctx.fillRect(this.x - this.width / 2, this.y - this.height / 2, this.width, this.height);
		ctx.globalAlpha = 1;
		}
	}
};
var rootstr27 = {
	x: -500,
	y: -500,
	width: 16,
	height: 16,
	onScreen: 0,
	draw: function(){
	if(this.onScreen == 1){
		ctx.globalAlpha = 0.5;
		ctx.fillStyle = "330000";
		ctx.fillRect(this.x - this.width / 2, this.y - this.height / 2, this.width, this.height);
		ctx.globalAlpha = 1;
		}
	}
};
var rootstr28 = {
	x: -500,
	y: -500,
	width: 16,
	height: 16,
	onScreen: 0,
	draw: function(){
	if(this.onScreen == 1){
		ctx.globalAlpha = 0.5;
		ctx.fillStyle = "330000";
		ctx.fillRect(this.x - this.width / 2, this.y - this.height / 2, this.width, this.height);
		ctx.globalAlpha = 1;
		}
	}
};
var rootstr29 = {
	x: -500,
	y: -500,
	width: 16,
	height: 16,
	onScreen: 0,
	draw: function(){
	if(this.onScreen == 1){
		ctx.globalAlpha = 0.5;
		ctx.fillStyle = "330000";
		ctx.fillRect(this.x - this.width / 2, this.y - this.height / 2, this.width, this.height);
		ctx.globalAlpha = 1;
		}
	}
};
var rootstr210 = {
	x: -500,
	y: -500,
	width: 16,
	height: 16,
	onScreen: 0,
	draw: function(){
	if(this.onScreen == 1){
		ctx.globalAlpha = 0.5;
		ctx.fillStyle = "330000";
		ctx.fillRect(this.x - this.width / 2, this.y - this.height / 2, this.width, this.height);
		ctx.globalAlpha = 1;
		}
	}
};
var rootstr211 = {
	x: -500,
	y: -500,
	width: 16,
	height: 16,
	onScreen: 0,
	draw: function(){
	if(this.onScreen == 1){
		ctx.globalAlpha = 0.5;
		ctx.fillStyle = "330000";
		ctx.fillRect(this.x - this.width / 2, this.y - this.height / 2, this.width, this.height);
		ctx.globalAlpha = 1;
		}
	}
};
var rootstr212 = {
	x: -500,
	y: -500,
	width: 16,
	height: 16,
	onScreen: 0,
	draw: function(){
	if(this.onScreen == 1){
		ctx.globalAlpha = 0.5;
		ctx.fillStyle = "330000";
		ctx.fillRect(this.x - this.width / 2, this.y - this.height / 2, this.width, this.height);
		ctx.globalAlpha = 1;
		}
	}
};
var rootstr213 = {
	x: -500,
	y: -500,
	width: 16,
	height: 16,
	onScreen: 0,
	draw: function(){
	if(this.onScreen == 1){
		ctx.globalAlpha = 0.5;
		ctx.fillStyle = "330000";
		ctx.fillRect(this.x - this.width / 2, this.y - this.height / 2, this.width, this.height);
		ctx.globalAlpha = 1;
		}
	}
};
var rootstr214 = {
	x: -500,
	y: -500,
	width: 16,
	height: 16,
	onScreen: 0,
	draw: function(){
	if(this.onScreen == 1){
		ctx.globalAlpha = 0.5;
		ctx.fillStyle = "330000";
		ctx.fillRect(this.x - this.width / 2, this.y - this.height / 2, this.width, this.height);
		ctx.globalAlpha = 1;
		}
	}
};
var rootstr215 = {
	x: -500,
	y: -500,
	width: 16,
	height: 16,
	onScreen: 0,
	draw: function(){
	if(this.onScreen == 1){
		ctx.globalAlpha = 0.5;
		ctx.fillStyle = "330000";
		ctx.fillRect(this.x - this.width / 2, this.y - this.height / 2, this.width, this.height);
		ctx.globalAlpha = 1;
		}
	}
};
var rootstr31 = {
	x: -500,
	y: -500,
	width: 16,
	height: 16,
	onScreen: 0,
	draw: function(){
	if(this.onScreen == 1){
		ctx.globalAlpha = 0.5;
		ctx.fillStyle = "330000";
		ctx.fillRect(this.x - this.width / 2, this.y - this.height / 2, this.width, this.height);
		ctx.globalAlpha = 1;
		}
	}
};
var rootstr32 = {
	x: -500,
	y: -500,
	width: 16,
	height: 16,
	onScreen: 0,
	draw: function(){
	if(this.onScreen == 1){
		ctx.globalAlpha = 0.5;
		ctx.fillStyle = "330000";
		ctx.fillRect(this.x - this.width / 2, this.y - this.height / 2, this.width, this.height);
		ctx.globalAlpha = 1;
		}
	}
};
var rootstr33 = {
	x: -500,
	y: -500,
	width: 16,
	height: 16,
	onScreen: 0,
	draw: function(){
	if(this.onScreen == 1){
		ctx.globalAlpha = 0.5;
		ctx.fillStyle = "330000";
		ctx.fillRect(this.x - this.width / 2, this.y - this.height / 2, this.width, this.height);
		ctx.globalAlpha = 1;
		}
	}
};
var rootstr34 = {
	x: -500,
	y: -500,
	width: 16,
	height: 16,
	onScreen: 0,
	draw: function(){
	if(this.onScreen == 1){
		ctx.globalAlpha = 0.5;
		ctx.fillStyle = "330000";
		ctx.fillRect(this.x - this.width / 2, this.y - this.height / 2, this.width, this.height);
		ctx.globalAlpha = 1;
		}
	}
};
var rootstr35 = {
	x: -500,
	y: -500,
	width: 16,
	height: 16,
	onScreen: 0,
	draw: function(){
	if(this.onScreen == 1){
		ctx.globalAlpha = 0.5;
		ctx.fillStyle = "330000";
		ctx.fillRect(this.x - this.width / 2, this.y - this.height / 2, this.width, this.height);
		ctx.globalAlpha = 1;
		}
	}
};
var rootstr36 = {
	x: -500,
	y: -500,
	width: 16,
	height: 16,
	onScreen: 0,
	draw: function(){
	if(this.onScreen == 1){
		ctx.globalAlpha = 0.5;
		ctx.fillStyle = "330000";
		ctx.fillRect(this.x - this.width / 2, this.y - this.height / 2, this.width, this.height);
		ctx.globalAlpha = 1;
		}
	}
};
var rootstr37 = {
	x: -500,
	y: -500,
	width: 16,
	height: 16,
	onScreen: 0,
	draw: function(){
	if(this.onScreen == 1){
		ctx.globalAlpha = 0.5;
		ctx.fillStyle = "330000";
		ctx.fillRect(this.x - this.width / 2, this.y - this.height / 2, this.width, this.height);
		ctx.globalAlpha = 1;
		}
	}
};
var rootstr38 = {
	x: -500,
	y: -500,
	width: 16,
	height: 16,
	onScreen: 0,
	draw: function(){
	if(this.onScreen == 1){
		ctx.globalAlpha = 0.5;
		ctx.fillStyle = "330000";
		ctx.fillRect(this.x - this.width / 2, this.y - this.height / 2, this.width, this.height);
		ctx.globalAlpha = 1;
		}
	}
};
var rootstr39 = {
	x: -500,
	y: -500,
	width: 16,
	height: 16,
	onScreen: 0,
	draw: function(){
	if(this.onScreen == 1){
		ctx.globalAlpha = 0.5;
		ctx.fillStyle = "330000";
		ctx.fillRect(this.x - this.width / 2, this.y - this.height / 2, this.width, this.height);
		ctx.globalAlpha = 1;
		}
	}
};
var rootstr310 = {
	x: -500,
	y: -500,
	width: 16,
	height: 16,
	onScreen: 0,
	draw: function(){
	if(this.onScreen == 1){
		ctx.globalAlpha = 0.5;
		ctx.fillStyle = "330000";
		ctx.fillRect(this.x - this.width / 2, this.y - this.height / 2, this.width, this.height);
		ctx.globalAlpha = 1;
		}
	}
};
var rootstr311 = {
	x: -500,
	y: -500,
	width: 16,
	height: 16,
	onScreen: 0,
	draw: function(){
	if(this.onScreen == 1){
		ctx.globalAlpha = 0.5;
		ctx.fillStyle = "330000";
		ctx.fillRect(this.x - this.width / 2, this.y - this.height / 2, this.width, this.height);
		ctx.globalAlpha = 1;
		}
	}
};
var rootstr312 = {
	x: -500,
	y: -500,
	width: 16,
	height: 16,
	onScreen: 0,
	draw: function(){
	if(this.onScreen == 1){
		ctx.globalAlpha = 0.5;
		ctx.fillStyle = "330000";
		ctx.fillRect(this.x - this.width / 2, this.y - this.height / 2, this.width, this.height);
		ctx.globalAlpha = 1;
		}
	}
};
var rootstr313 = {
	x: -500,
	y: -500,
	width: 16,
	height: 16,
	onScreen: 0,
	draw: function(){
	if(this.onScreen == 1){
		ctx.globalAlpha = 0.5;
		ctx.fillStyle = "330000";
		ctx.fillRect(this.x - this.width / 2, this.y - this.height / 2, this.width, this.height);
		ctx.globalAlpha = 1;
		}
	}
};
var rootstr314 = {
	x: -500,
	y: -500,
	width: 16,
	height: 16,
	onScreen: 0,
	draw: function(){
	if(this.onScreen == 1){
		ctx.globalAlpha = 0.5;
		ctx.fillStyle = "330000";
		ctx.fillRect(this.x - this.width / 2, this.y - this.height / 2, this.width, this.height);
		ctx.globalAlpha = 1;
		}
	}
};
var rootstr315 = {
	x: -500,
	y: -500,
	width: 16,
	height: 16,
	onScreen: 0,
	draw: function(){
	if(this.onScreen == 1){
		ctx.globalAlpha = 0.5;
		ctx.fillStyle = "330000";
		ctx.fillRect(this.x - this.width / 2, this.y - this.height / 2, this.width, this.height);
		ctx.globalAlpha = 1;
		}
	}
};
var rootstr41 = {
	x: -500,
	y: -500,
	width: 16,
	height: 16,
	onScreen: 0,
	draw: function(){
	if(this.onScreen == 1){
		ctx.globalAlpha = 0.5;
		ctx.fillStyle = "330000";
		ctx.fillRect(this.x - this.width / 2, this.y - this.height / 2, this.width, this.height);
		ctx.globalAlpha = 1;
		}
	}
};
var rootstr42 = {
	x: -500,
	y: -500,
	width: 16,
	height: 16,
	onScreen: 0,
	draw: function(){
	if(this.onScreen == 1){
		ctx.globalAlpha = 0.5;
		ctx.fillStyle = "330000";
		ctx.fillRect(this.x - this.width / 2, this.y - this.height / 2, this.width, this.height);
		ctx.globalAlpha = 1;
		}
	}
};
var rootstr43 = {
	x: -500,
	y: -500,
	width: 16,
	height: 16,
	onScreen: 0,
	draw: function(){
	if(this.onScreen == 1){
		ctx.globalAlpha = 0.5;
		ctx.fillStyle = "330000";
		ctx.fillRect(this.x - this.width / 2, this.y - this.height / 2, this.width, this.height);
		ctx.globalAlpha = 1;
		}
	}
};
var rootstr44 = {
	x: -500,
	y: -500,
	width: 16,
	height: 16,
	onScreen: 0,
	draw: function(){
	if(this.onScreen == 1){
		ctx.globalAlpha = 0.5;
		ctx.fillStyle = "330000";
		ctx.fillRect(this.x - this.width / 2, this.y - this.height / 2, this.width, this.height);
		ctx.globalAlpha = 1;
		}
	}
};
var rootstr45 = {
	x: -500,
	y: -500,
	width: 16,
	height: 16,
	onScreen: 0,
	draw: function(){
	if(this.onScreen == 1){
		ctx.globalAlpha = 0.5;
		ctx.fillStyle = "330000";
		ctx.fillRect(this.x - this.width / 2, this.y - this.height / 2, this.width, this.height);
		ctx.globalAlpha = 1;
		}
	}
};
var rootstr46 = {
	x: -500,
	y: -500,
	width: 16,
	height: 16,
	onScreen: 0,
	draw: function(){
	if(this.onScreen == 1){
		ctx.globalAlpha = 0.5;
		ctx.fillStyle = "330000";
		ctx.fillRect(this.x - this.width / 2, this.y - this.height / 2, this.width, this.height);
		ctx.globalAlpha = 1;
		}
	}
};
var rootstr47 = {
	x: -500,
	y: -500,
	width: 16,
	height: 16,
	onScreen: 0,
	draw: function(){
	if(this.onScreen == 1){
		ctx.globalAlpha = 0.5;
		ctx.fillStyle = "330000";
		ctx.fillRect(this.x - this.width / 2, this.y - this.height / 2, this.width, this.height);
		ctx.globalAlpha = 1;
		}
	}
};
var rootstr48 = {
	x: -500,
	y: -500,
	width: 16,
	height: 16,
	onScreen: 0,
	draw: function(){
	if(this.onScreen == 1){
		ctx.globalAlpha = 0.5;
		ctx.fillStyle = "330000";
		ctx.fillRect(this.x - this.width / 2, this.y - this.height / 2, this.width, this.height);
		ctx.globalAlpha = 1;
		}
	}
};
var rootstr49 = {
	x: -500,
	y: -500,
	width: 16,
	height: 16,
	onScreen: 0,
	draw: function(){
	if(this.onScreen == 1){
		ctx.globalAlpha = 0.5;
		ctx.fillStyle = "330000";
		ctx.fillRect(this.x - this.width / 2, this.y - this.height / 2, this.width, this.height);
		ctx.globalAlpha = 1;
		}
	}
};
var rootstr410 = {
	x: -500,
	y: -500,
	width: 16,
	height: 16,
	onScreen: 0,
	draw: function(){
	if(this.onScreen == 1){
		ctx.globalAlpha = 0.5;
		ctx.fillStyle = "330000";
		ctx.fillRect(this.x - this.width / 2, this.y - this.height / 2, this.width, this.height);
		ctx.globalAlpha = 1;
		}
	}
};
var rootstr411 = {
	x: -500,
	y: -500,
	width: 16,
	height: 16,
	onScreen: 0,
	draw: function(){
	if(this.onScreen == 1){
		ctx.globalAlpha = 0.5;
		ctx.fillStyle = "330000";
		ctx.fillRect(this.x - this.width / 2, this.y - this.height / 2, this.width, this.height);
		ctx.globalAlpha = 1;
		}
	}
};
var rootstr412 = {
	x: -500,
	y: -500,
	width: 16,
	height: 16,
	onScreen: 0,
	draw: function(){
	if(this.onScreen == 1){
		ctx.globalAlpha = 0.5;
		ctx.fillStyle = "330000";
		ctx.fillRect(this.x - this.width / 2, this.y - this.height / 2, this.width, this.height);
		ctx.globalAlpha = 1;
		}
	}
};
var rootstr413 = {
	x: -500,
	y: -500,
	width: 16,
	height: 16,
	onScreen: 0,
	draw: function(){
	if(this.onScreen == 1){
		ctx.globalAlpha = 0.5;
		ctx.fillStyle = "330000";
		ctx.fillRect(this.x - this.width / 2, this.y - this.height / 2, this.width, this.height);
		ctx.globalAlpha = 1;
		}
	}
};
var rootstr414 = {
	x: -500,
	y: -500,
	width: 16,
	height: 16,
	onScreen: 0,
	draw: function(){
	if(this.onScreen == 1){
		ctx.globalAlpha = 0.5;
		ctx.fillStyle = "330000";
		ctx.fillRect(this.x - this.width / 2, this.y - this.height / 2, this.width, this.height);
		ctx.globalAlpha = 1;
		}
	}
};
var rootstr415 = {
	x: -500,
	y: -500,
	width: 16,
	height: 16,
	onScreen: 0,
	draw: function(){
	if(this.onScreen == 1){
		ctx.globalAlpha = 0.5;
		ctx.fillStyle = "330000";
		ctx.fillRect(this.x - this.width / 2, this.y - this.height / 2, this.width, this.height);
		ctx.globalAlpha = 1;
		}
	}
};
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
	width: 16,
	height: 16,
	dirct: 0,
	speed: 8,
	speed2: 4,
	respawn: -1,
	origrp: -1,
	pts: 25,
	hp: 2,
	hptimer: 0,
	dir: "W",
	rp: -1,
	index: 0,
	frame: 0,
	onScreen: 0,
	movement: false,
	draw: function(){
	if(this.onScreen == 1){
		if(this.hptimer > 0){
			this.hptimer-=1;
		}
		ctx.globalAlpha = 0.5;
		if(this.hptimer/2 != Math.round(this.hptimer/2)){
			ctx.fillStyle = "white";
		}
		else{
			ctx.fillStyle = "330000";
		}
		ctx.fillRect(this.x - this.width / 2, this.y - this.height / 2, this.width, this.height);
		ctx.globalAlpha = 1;
		this.frame++;
		if(this.frame/2 == Math.round(this.frame/2)){
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
	width: 16,
	height: 16,
	dirct: 0,
	speed: 8,
	speed2: 4,
	respawn: -1,
	origrp: -1,
	pts: 25,
	hp: 2,
	hptimer: 0,
	dir: "W",
	rp: -1,
	index: 0,
	frame: 0,
	onScreen: 0,
	movement: false,
	// Draws the enemy on the canvas when called
	draw: function(){
	if(this.onScreen == 1){
		if(this.hptimer > 0){
			this.hptimer-=1;
		}
		ctx.globalAlpha = 0.5;
		if(this.hptimer/2 != Math.round(this.hptimer/2)){
			ctx.fillStyle = "white";
		}
		else{
			ctx.fillStyle = "330000";
		}
		ctx.fillRect(this.x - this.width / 2, this.y - this.height / 2, this.width, this.height);
		ctx.globalAlpha = 1;
		this.frame++;
		if(this.frame/2 == Math.round(this.frame/2)){
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
	width: 16,
	height: 16,
	dirct: 0,
	speed: 8,
	speed2: 4,
	respawn: -1,
	origrp: -1,
	pts: 25,
	hp: 2,
	hptimer: 0,
	dir: "W",
	rp: -1,
	index: 0,
	frame: 0,
	onScreen: 0,
	movement: false,
	// Draws the enemy on the canvas when called
	draw: function(){
	if(this.onScreen == 1){
		if(this.hptimer > 0){
			this.hptimer-=1;
		}
		ctx.globalAlpha = 0.5;
		if(this.hptimer/2 != Math.round(this.hptimer/2)){
			ctx.fillStyle = "white";
		}
		else{
			ctx.fillStyle = "330000";
		}
		ctx.fillRect(this.x - this.width / 2, this.y - this.height / 2, this.width, this.height);
		ctx.globalAlpha = 1;
		this.frame++;
		if(this.frame/2 == Math.round(this.frame/2)){
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
	height: 16,
	dirct: 0,
	speed: 8,
	speed2: 4,
	respawn: -1,
	origrp: -1,
	pts: 25,
	hp: 2,
	hptimer: 0,
	dir: "W",
	rp: -1,
	index: 0,
	frame: 0,
	onScreen: 0,
	movement: false,
	// Draws the enemy on the canvas when called
	draw: function(){
	if(this.onScreen == 1){
		if(this.hptimer > 0){
			this.hptimer-=1;
		}
		ctx.globalAlpha = 0.5;
		if(this.hptimer/2 != Math.round(this.hptimer/2)){
			ctx.fillStyle = "white";
		}
		else{
			ctx.fillStyle = "330000";
		}
		ctx.fillRect(this.x - this.width / 2, this.y - this.height / 2, this.width, this.height);
		ctx.globalAlpha = 1;
		this.frame++;
		if(this.frame/2 == Math.round(this.frame/2)){
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
	color: "33CC00",
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
				if(treeWizz.hp < 10){
					treeWizz.hp+=1;
				}
				treeWizz.height+=8;
				treeWizz.width+=8;
				treeWizz.speed+=2;
				treeWizz.speed2 = treeWizz.speed/2;
				this.used = 1;
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