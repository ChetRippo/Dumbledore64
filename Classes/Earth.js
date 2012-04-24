// Earth: Heals player hp by 1
var earth = {
	color: "#33CC00",
	timeLeft: 0,
	x: -100,
	y: -200,
	cd: 0,
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
		if(this.cd > 0){
			this.cd-=1;
		}
		if(this.timeLeft > 0 && this.cast == 0){
			this.y -= this.speed;
			this.timeLeft--;
			if(this.used == 0){
				if(player.hp < player.maxhp){
					player.hp+=1;
				}
				this.used = 1;
				Pickup.currentTime=0;
				Pickup.play();
			}
		}
			
	},
	// Spawn
	shoot: function(){
	if(this.cd == 0){
		this.x = player.x;
		this.y = player.y;
		this.cd = 1020;
		this.cast = 30;
		cd = 30;
		this.timeLeft = 15;
		castingBar.onScreen = 1;
		castingBar.cast = 30;
		castingBar.castmax = 30;
		this.used = 0;
	}
	}	
};
// Earth2: Heals player hp by 2
var earth2 = {
	color: "#33CC00",
	timeLeft: 0,
	x: -100,
	y: -200,
	cd: 0,
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
			ctx.fillText("+2", this.x, this.y);
		}	
	},
	
	move: function(){
		if(this.cd > 0){
			this.cd-=1;
		}
		if(this.timeLeft > 0 && this.cast == 0){
			this.y -= this.speed;
			this.timeLeft--;
			if(this.used == 0){
				if(player.hp < player.maxhp-1){
					player.hp+=2;
				}
				else if(player.hp < player.maxhp){
					player.hp+=1;
				}
				this.used = 1;
				Pickup.currentTime=0;
				Pickup.play();
			}
		}
			
	},
	// Spawn
	shoot: function(){
	if(this.cd == 0){
		this.x = player.x;
		this.y = player.y;
		this.cd = 1020;
		this.cast = 30;
		cd = 30;
		this.timeLeft = 15;
		castingBar.onScreen = 1;
		castingBar.cast = 30;
		castingBar.castmax = 30;
		this.used = 0;
	}
	}	
};/*
var earth2 = {
	cd: 0,
	cast: 0,
	used: 0,
	timeLeft: 0,
	tick: function(){
		if(this.cd > 0){
			this.cd-=1;
		}
		if(this.cast > 0){
			this.cast-=1;
		}
		if(this.timeLeft > 0){
			this.timeLeft-=1;
		}
		if(this.timeLeft == 90){
			earth2rootStrike5.x = earth2rootStrike.x;
			earth2rootStrike5.y = earth2rootStrike.y;
			earth2rootStrike5.onScreen = 1;
			earth2rootStrike5.movement = true;
			earth2rootStrike5.hp = 2;
			earth2rootStrike6.x = earth2rootStrike2.x;
			earth2rootStrike6.y = earth2rootStrike2.y;
			earth2rootStrike6.onScreen = 1;
			earth2rootStrike6.movement = true;
			earth2rootStrike6.hp = 2;
			earth2rootStrike7.x = earth2rootStrike3.x;
			earth2rootStrike7.y = earth2rootStrike3.y;
			earth2rootStrike7.onScreen = 1;
			earth2rootStrike7.hp = 2;
			earth2rootStrike7.movement = true;
			earth2rootStrike8.x = earth2rootStrike4.x;
			earth2rootStrike8.y = earth2rootStrike4.y;
			earth2rootStrike8.onScreen = 1;
			earth2rootStrike8.movement = true;
			earth2rootStrike8.hp = 2;
		}
		if(this.timeLeft == 0){
			earth2rootStrike.x = -100;
			earth2rootStrike.y = -200;
			earth2rootStrike.onScreen = 0;
			earth2rootStrike.movement = false;
			earth2rootStrike2.x = -100;
			earth2rootStrike2.y = -200;
			earth2rootStrike2.onScreen = 0;
			earth2rootStrike2.movement = false;
			earth2rootStrike3.x = -100;
			earth2rootStrike3.y = -200;
			earth2rootStrike3.onScreen = 0;
			earth2rootStrike3.movement = false;
			earth2rootStrike4.x = -100;
			earth2rootStrike4.y = -200;
			earth2rootStrike4.onScreen = 0;
			earth2rootStrike4.movement = false;
			earth2rootStrike5.x = -100;
			earth2rootStrike5.y = -200;
			earth2rootStrike5.onScreen = 0;
			earth2rootStrike5.movement = false;
			earth2rootStrike6.x = -100;
			earth2rootStrike6.y = -200;
			earth2rootStrike6.onScreen = 0;
			earth2rootStrike6.movement = false;
			earth2rootStrike7.x = -100;
			earth2rootStrike7.y = -200;
			earth2rootStrike7.onScreen = 0;
			earth2rootStrike7.movement = false;
			earth2rootStrike8.x = -100;
			earth2rootStrike8.y = -200;
			earth2rootStrike8.onScreen = 0;
			earth2rootStrike8.movement = false;
			for(R in earth2roots1){
				earth2roots1[R].onScreen = 0;
				earth2roots1[R].x = -500;
				earth2roots1[R].y = -500;
			}
			for(R in earth3roots1){
				earth3roots1[R].onScreen = 0;
				earth3roots1[R].x = -500;
				earth3roots1[R].y = -500;
			}
		}
		else{
			for(R in earth2roots1){
				for(E in AllEnemies){
					if(collision(AllEnemies[E].dir, AllEnemies[E], earth2roots1[R])){
						onHit(AllEnemies[E]);
					}
				}
			}
			for(R in earth3roots1){
				for(E in AllEnemies){
					if(collision(AllEnemies[E].dir, AllEnemies[E], earth3roots1[R])){
						onHit(AllEnemies[E]);
					}
				}
			}
		}
	},
	shoot: function(){
		if(this.cd == 0 && this.cast == 0){
			Fwave.currentTime=0;
			Fwave.play();
			earth2rootStrike.x = player.x;
			earth2rootStrike.y = player.y - 64;
			earth2rootStrike.onScreen = 1;
			earth2rootStrike.movement = true;
			earth2rootStrike.hp = 2;
			earth2rootStrike2.x = player.x;
			earth2rootStrike2.y = player.y + 64;
			earth2rootStrike2.onScreen = 1;
			earth2rootStrike2.movement = true;
			earth2rootStrike2.hp = 2;
			earth2rootStrike3.x = player.x - 64;
			earth2rootStrike3.y = player.y;
			earth2rootStrike3.onScreen = 1;
			earth2rootStrike3.hp = 2;
			earth2rootStrike3.movement = true;
			earth2rootStrike4.x = player.x + 64;
			earth2rootStrike4.y = player.y;
			earth2rootStrike4.onScreen = 1;
			earth2rootStrike4.movement = true;
			earth2rootStrike4.hp = 2;
			this.cd = 600;
			this.cast = 180;
			this.timeLeft = 180;
			cd = 180;
			castingBar.onScreen = 1;
			castingBar.cast = 180;
			castingBar.castmax = 180;
			this.used = 0;
		}
	}
};
var earth2rootstr = {
	x: -500,
	y: -500,
	width: 16,
	height: 16,
	onScreen: 0,
	draw: function(){
	if(this.onScreen == 1){
		ctx.globalAlpha = Alpha*0.5;
		ctx.fillStyle = "#330000";
		ctx.fillRect(this.x - this.width / 2, this.y - this.height / 2, this.width, this.height);
		ctx.globalAlpha = Alpha;
	}
		
	}
};
var earth2rootstr2 = {
	x: -500,
	y: -500,
	width: 16,
	height: 16,
	onScreen: 0,
	draw: function(){
	if(this.onScreen == 1){
		ctx.globalAlpha = Alpha*0.5;
		ctx.fillStyle = "#330000";
		ctx.fillRect(this.x - this.width / 2, this.y - this.height / 2, this.width, this.height);
		ctx.globalAlpha = Alpha;
		}
	}
};
var earth2rootstr3 = {
	x: -500,
	y: -500,
	width: 16,
	height: 16,
	onScreen: 0,
	draw: function(){
		if(this.onScreen == 1){
		ctx.globalAlpha = Alpha*0.5;
		ctx.fillStyle = "#330000";
		ctx.fillRect(this.x - this.width / 2, this.y - this.height / 2, this.width, this.height);
		ctx.globalAlpha = Alpha;
		}
		
	}
};
var earth2rootstr4 = {
	x: -500,
	y: -500,
	width: 16,
	height: 16,
	onScreen: 0,
	draw: function(){
		if(this.onScreen == 1){
		ctx.globalAlpha = Alpha*0.5;
		ctx.fillStyle = "#330000";
		ctx.fillRect(this.x - this.width / 2, this.y - this.height / 2, this.width, this.height);
		ctx.globalAlpha = Alpha;
		}
		
	}
};
var earth2rootstr5 = {
	x: -500,
	y: -500,
	width: 16,
	height: 16,
	onScreen: 0,
	draw: function(){
	if(this.onScreen == 1){
		ctx.globalAlpha = Alpha*0.5;
		ctx.fillStyle = "#330000";
		ctx.fillRect(this.x - this.width / 2, this.y - this.height / 2, this.width, this.height);
		ctx.globalAlpha = Alpha;
	}	
	}
};
var earth2rootstr6 = {
	x: -500,
	y: -500,
	width: 16,
	height: 16,
	onScreen: 0,
	draw: function(){
	if(this.onScreen == 1){
		ctx.globalAlpha = Alpha*0.5;
		ctx.fillStyle = "#330000";
		ctx.fillRect(this.x - this.width / 2, this.y - this.height / 2, this.width, this.height);
		ctx.globalAlpha = Alpha;
		}
	}
};
var earth2rootstr7 = {
	x: -500,
	y: -500,
	width: 16,
	height: 16,
	onScreen: 0,
	draw: function(){
	if(this.onScreen == 1){
		ctx.globalAlpha = Alpha*0.5;
		ctx.fillStyle = "#330000";
		ctx.fillRect(this.x - this.width / 2, this.y - this.height / 2, this.width, this.height);
		ctx.globalAlpha = Alpha;
		}
	}
};
var earth2rootstr8 = {
	x: -500,
	y: -500,
	width: 16,
	height: 16,
	onScreen: 0,
	draw: function(){
	if(this.onScreen == 1){
		ctx.globalAlpha = Alpha*0.5;
		ctx.fillStyle = "#330000";
		ctx.fillRect(this.x - this.width / 2, this.y - this.height / 2, this.width, this.height);
		ctx.globalAlpha = Alpha;
		}
	}
};
var earth2rootstr9 = {
	x: -500,
	y: -500,
	width: 16,
	height: 16,
	onScreen: 0,
	draw: function(){
	if(this.onScreen == 1){
		ctx.globalAlpha = Alpha*0.5;
		ctx.fillStyle = "#330000";
		ctx.fillRect(this.x - this.width / 2, this.y - this.height / 2, this.width, this.height);
		ctx.globalAlpha = Alpha;
		}
	}
};
var earth2rootstr10 = {
	x: -500,
	y: -500,
	width: 16,
	height: 16,
	onScreen: 0,
	draw: function(){
	if(this.onScreen == 1){
		ctx.globalAlpha = Alpha*0.5;
		ctx.fillStyle = "#330000";
		ctx.fillRect(this.x - this.width / 2, this.y - this.height / 2, this.width, this.height);
		ctx.globalAlpha = Alpha;
		}
	}
};
var earth2rootstr11 = {
	x: -500,
	y: -500,
	width: 16,
	height: 16,
	onScreen: 0,
	draw: function(){
	if(this.onScreen == 1){
		ctx.globalAlpha = Alpha*0.5;
		ctx.fillStyle = "#330000";
		ctx.fillRect(this.x - this.width / 2, this.y - this.height / 2, this.width, this.height);
		ctx.globalAlpha = Alpha;
		}
	}
};
var earth2rootstr12 = {
	x: -500,
	y: -500,
	width: 16,
	height: 16,
	onScreen: 0,
	draw: function(){
	if(this.onScreen == 1){
		ctx.globalAlpha = Alpha*0.5;
		ctx.fillStyle = "#330000";
		ctx.fillRect(this.x - this.width / 2, this.y - this.height / 2, this.width, this.height);
		ctx.globalAlpha = Alpha;
		}
	}
};
var earth2rootstr13 = {
	x: -500,
	y: -500,
	width: 16,
	height: 16,
	onScreen: 0,
	draw: function(){
	if(this.onScreen == 1){
		ctx.globalAlpha = Alpha*0.5;
		ctx.fillStyle = "#330000";
		ctx.fillRect(this.x - this.width / 2, this.y - this.height / 2, this.width, this.height);
		ctx.globalAlpha = Alpha;
		}
	}
};
var earth2rootstr14 = {
	x: -500,
	y: -500,
	width: 16,
	height: 16,
	onScreen: 0,
	draw: function(){
	if(this.onScreen == 1){
		ctx.globalAlpha = Alpha*0.5;
		ctx.fillStyle = "#330000";
		ctx.fillRect(this.x - this.width / 2, this.y - this.height / 2, this.width, this.height);
		ctx.globalAlpha = Alpha;
		}
	}
};
var earth2rootstr15 = {
	x: -500,
	y: -500,
	width: 16,
	height: 16,
	onScreen: 0,
	draw: function(){
	if(this.onScreen == 1){
		ctx.globalAlpha = Alpha*0.5;
		ctx.fillStyle = "#330000";
		ctx.fillRect(this.x - this.width / 2, this.y - this.height / 2, this.width, this.height);
		ctx.globalAlpha = Alpha;
		}
	}
};
var earth2rootstr21 = {
	x: -500,
	y: -500,
	width: 16,
	height: 16,
	onScreen: 0,
	draw: function(){
	if(this.onScreen == 1){
		ctx.globalAlpha = Alpha*0.5;
		ctx.fillStyle = "#330000";
		ctx.fillRect(this.x - this.width / 2, this.y - this.height / 2, this.width, this.height);
		ctx.globalAlpha = Alpha;
		}
	}
};
var earth2rootstr22 = {
	x: -500,
	y: -500,
	width: 16,
	height: 16,
	onScreen: 0,
	draw: function(){
	if(this.onScreen == 1){
		ctx.globalAlpha = Alpha*0.5;
		ctx.fillStyle = "#330000";
		ctx.fillRect(this.x - this.width / 2, this.y - this.height / 2, this.width, this.height);
		ctx.globalAlpha = Alpha;
		}
	}
};
var earth2rootstr23 = {
	x: -500,
	y: -500,
	width: 16,
	height: 16,
	onScreen: 0,
	draw: function(){
	if(this.onScreen == 1){
		ctx.globalAlpha = Alpha*0.5;
		ctx.fillStyle = "#330000";
		ctx.fillRect(this.x - this.width / 2, this.y - this.height / 2, this.width, this.height);
		ctx.globalAlpha = Alpha;
		}
	}
};
var earth2rootstr24 = {
	x: -500,
	y: -500,
	width: 16,
	height: 16,
	onScreen: 0,
	draw: function(){
	if(this.onScreen == 1){
		ctx.globalAlpha = Alpha*0.5;
		ctx.fillStyle = "#330000";
		ctx.fillRect(this.x - this.width / 2, this.y - this.height / 2, this.width, this.height);
		ctx.globalAlpha = Alpha;
		}
	}
};
var earth2rootstr25 = {
	x: -500,
	y: -500,
	width: 16,
	height: 16,
	onScreen: 0,
	draw: function(){
	if(this.onScreen == 1){
		ctx.globalAlpha = Alpha*0.5;
		ctx.fillStyle = "#330000";
		ctx.fillRect(this.x - this.width / 2, this.y - this.height / 2, this.width, this.height);
		ctx.globalAlpha = Alpha;
		}
	}
};
var earth2rootstr26 = {
	x: -500,
	y: -500,
	width: 16,
	height: 16,
	onScreen: 0,
	draw: function(){
	if(this.onScreen == 1){
		ctx.globalAlpha = Alpha*0.5;
		ctx.fillStyle = "#330000";
		ctx.fillRect(this.x - this.width / 2, this.y - this.height / 2, this.width, this.height);
		ctx.globalAlpha = Alpha;
		}
	}
};
var earth2rootstr27 = {
	x: -500,
	y: -500,
	width: 16,
	height: 16,
	onScreen: 0,
	draw: function(){
	if(this.onScreen == 1){
		ctx.globalAlpha = Alpha*0.5;
		ctx.fillStyle = "#330000";
		ctx.fillRect(this.x - this.width / 2, this.y - this.height / 2, this.width, this.height);
		ctx.globalAlpha = Alpha;
		}
	}
};
var earth2rootstr28 = {
	x: -500,
	y: -500,
	width: 16,
	height: 16,
	onScreen: 0,
	draw: function(){
	if(this.onScreen == 1){
		ctx.globalAlpha = Alpha*0.5;
		ctx.fillStyle = "#330000";
		ctx.fillRect(this.x - this.width / 2, this.y - this.height / 2, this.width, this.height);
		ctx.globalAlpha = Alpha;
		}
	}
};
var earth2rootstr29 = {
	x: -500,
	y: -500,
	width: 16,
	height: 16,
	onScreen: 0,
	draw: function(){
	if(this.onScreen == 1){
		ctx.globalAlpha = Alpha*0.5;
		ctx.fillStyle = "#330000";
		ctx.fillRect(this.x - this.width / 2, this.y - this.height / 2, this.width, this.height);
		ctx.globalAlpha = Alpha;
		}
	}
};
var earth2rootstr210 = {
	x: -500,
	y: -500,
	width: 16,
	height: 16,
	onScreen: 0,
	draw: function(){
	if(this.onScreen == 1){
		ctx.globalAlpha = Alpha*0.5;
		ctx.fillStyle = "#330000";
		ctx.fillRect(this.x - this.width / 2, this.y - this.height / 2, this.width, this.height);
		ctx.globalAlpha = Alpha;
		}
	}
};
var earth2rootstr211 = {
	x: -500,
	y: -500,
	width: 16,
	height: 16,
	onScreen: 0,
	draw: function(){
	if(this.onScreen == 1){
		ctx.globalAlpha = Alpha*0.5;
		ctx.fillStyle = "#330000";
		ctx.fillRect(this.x - this.width / 2, this.y - this.height / 2, this.width, this.height);
		ctx.globalAlpha = Alpha;
		}
	}
};
var earth2rootstr212 = {
	x: -500,
	y: -500,
	width: 16,
	height: 16,
	onScreen: 0,
	draw: function(){
	if(this.onScreen == 1){
		ctx.globalAlpha = Alpha*0.5;
		ctx.fillStyle = "#330000";
		ctx.fillRect(this.x - this.width / 2, this.y - this.height / 2, this.width, this.height);
		ctx.globalAlpha = Alpha;
		}
	}
};
var earth2rootstr213 = {
	x: -500,
	y: -500,
	width: 16,
	height: 16,
	onScreen: 0,
	draw: function(){
	if(this.onScreen == 1){
		ctx.globalAlpha = Alpha*0.5;
		ctx.fillStyle = "#330000";
		ctx.fillRect(this.x - this.width / 2, this.y - this.height / 2, this.width, this.height);
		ctx.globalAlpha = Alpha;
		}
	}
};
var earth2rootstr214 = {
	x: -500,
	y: -500,
	width: 16,
	height: 16,
	onScreen: 0,
	draw: function(){
	if(this.onScreen == 1){
		ctx.globalAlpha = Alpha*0.5;
		ctx.fillStyle = "#330000";
		ctx.fillRect(this.x - this.width / 2, this.y - this.height / 2, this.width, this.height);
		ctx.globalAlpha = Alpha;
		}
	}
};
var earth2rootstr215 = {
	x: -500,
	y: -500,
	width: 16,
	height: 16,
	onScreen: 0,
	draw: function(){
	if(this.onScreen == 1){
		ctx.globalAlpha = Alpha*0.5;
		ctx.fillStyle = "#330000";
		ctx.fillRect(this.x - this.width / 2, this.y - this.height / 2, this.width, this.height);
		ctx.globalAlpha = Alpha;
		}
	}
};
var earth2rootstr31 = {
	x: -500,
	y: -500,
	width: 16,
	height: 16,
	onScreen: 0,
	draw: function(){
	if(this.onScreen == 1){
		ctx.globalAlpha = Alpha*0.5;
		ctx.fillStyle = "#330000";
		ctx.fillRect(this.x - this.width / 2, this.y - this.height / 2, this.width, this.height);
		ctx.globalAlpha = Alpha;
		}
	}
};
var earth2rootstr32 = {
	x: -500,
	y: -500,
	width: 16,
	height: 16,
	onScreen: 0,
	draw: function(){
	if(this.onScreen == 1){
		ctx.globalAlpha = Alpha*0.5;
		ctx.fillStyle = "#330000";
		ctx.fillRect(this.x - this.width / 2, this.y - this.height / 2, this.width, this.height);
		ctx.globalAlpha = Alpha;
		}
	}
};
var earth2rootstr33 = {
	x: -500,
	y: -500,
	width: 16,
	height: 16,
	onScreen: 0,
	draw: function(){
	if(this.onScreen == 1){
		ctx.globalAlpha = Alpha*0.5;
		ctx.fillStyle = "#330000";
		ctx.fillRect(this.x - this.width / 2, this.y - this.height / 2, this.width, this.height);
		ctx.globalAlpha = Alpha;
		}
	}
};
var earth2rootstr34 = {
	x: -500,
	y: -500,
	width: 16,
	height: 16,
	onScreen: 0,
	draw: function(){
	if(this.onScreen == 1){
		ctx.globalAlpha = Alpha*0.5;
		ctx.fillStyle = "#330000";
		ctx.fillRect(this.x - this.width / 2, this.y - this.height / 2, this.width, this.height);
		ctx.globalAlpha = Alpha;
		}
	}
};
var earth2rootstr35 = {
	x: -500,
	y: -500,
	width: 16,
	height: 16,
	onScreen: 0,
	draw: function(){
	if(this.onScreen == 1){
		ctx.globalAlpha = Alpha*0.5;
		ctx.fillStyle = "#330000";
		ctx.fillRect(this.x - this.width / 2, this.y - this.height / 2, this.width, this.height);
		ctx.globalAlpha = Alpha;
		}
	}
};
var earth2rootstr36 = {
	x: -500,
	y: -500,
	width: 16,
	height: 16,
	onScreen: 0,
	draw: function(){
	if(this.onScreen == 1){
		ctx.globalAlpha = Alpha*0.5;
		ctx.fillStyle = "#330000";
		ctx.fillRect(this.x - this.width / 2, this.y - this.height / 2, this.width, this.height);
		ctx.globalAlpha = Alpha;
		}
	}
};
var earth2rootstr37 = {
	x: -500,
	y: -500,
	width: 16,
	height: 16,
	onScreen: 0,
	draw: function(){
	if(this.onScreen == 1){
		ctx.globalAlpha = Alpha*0.5;
		ctx.fillStyle = "#330000";
		ctx.fillRect(this.x - this.width / 2, this.y - this.height / 2, this.width, this.height);
		ctx.globalAlpha = Alpha;
		}
	}
};
var earth2rootstr38 = {
	x: -500,
	y: -500,
	width: 16,
	height: 16,
	onScreen: 0,
	draw: function(){
	if(this.onScreen == 1){
		ctx.globalAlpha = Alpha*0.5;
		ctx.fillStyle = "#330000";
		ctx.fillRect(this.x - this.width / 2, this.y - this.height / 2, this.width, this.height);
		ctx.globalAlpha = Alpha;
		}
	}
};
var earth2rootstr39 = {
	x: -500,
	y: -500,
	width: 16,
	height: 16,
	onScreen: 0,
	draw: function(){
	if(this.onScreen == 1){
		ctx.globalAlpha = Alpha*0.5;
		ctx.fillStyle = "#330000";
		ctx.fillRect(this.x - this.width / 2, this.y - this.height / 2, this.width, this.height);
		ctx.globalAlpha = Alpha;
		}
	}
};
var earth2rootstr310 = {
	x: -500,
	y: -500,
	width: 16,
	height: 16,
	onScreen: 0,
	draw: function(){
	if(this.onScreen == 1){
		ctx.globalAlpha = Alpha*0.5;
		ctx.fillStyle = "#330000";
		ctx.fillRect(this.x - this.width / 2, this.y - this.height / 2, this.width, this.height);
		ctx.globalAlpha = Alpha;
		}
	}
};
var earth2rootstr311 = {
	x: -500,
	y: -500,
	width: 16,
	height: 16,
	onScreen: 0,
	draw: function(){
	if(this.onScreen == 1){
		ctx.globalAlpha = Alpha*0.5;
		ctx.fillStyle = "#330000";
		ctx.fillRect(this.x - this.width / 2, this.y - this.height / 2, this.width, this.height);
		ctx.globalAlpha = Alpha;
		}
	}
};
var earth2rootstr312 = {
	x: -500,
	y: -500,
	width: 16,
	height: 16,
	onScreen: 0,
	draw: function(){
	if(this.onScreen == 1){
		ctx.globalAlpha = Alpha*0.5;
		ctx.fillStyle = "#330000";
		ctx.fillRect(this.x - this.width / 2, this.y - this.height / 2, this.width, this.height);
		ctx.globalAlpha = Alpha;
		}
	}
};
var earth2rootstr313 = {
	x: -500,
	y: -500,
	width: 16,
	height: 16,
	onScreen: 0,
	draw: function(){
	if(this.onScreen == 1){
		ctx.globalAlpha = Alpha*0.5;
		ctx.fillStyle = "#330000";
		ctx.fillRect(this.x - this.width / 2, this.y - this.height / 2, this.width, this.height);
		ctx.globalAlpha = Alpha;
		}
	}
};
var earth2rootstr314 = {
	x: -500,
	y: -500,
	width: 16,
	height: 16,
	onScreen: 0,
	draw: function(){
	if(this.onScreen == 1){
		ctx.globalAlpha = Alpha*0.5;
		ctx.fillStyle = "#330000";
		ctx.fillRect(this.x - this.width / 2, this.y - this.height / 2, this.width, this.height);
		ctx.globalAlpha = Alpha;
		}
	}
};
var earth2rootstr315 = {
	x: -500,
	y: -500,
	width: 16,
	height: 16,
	onScreen: 0,
	draw: function(){
	if(this.onScreen == 1){
		ctx.globalAlpha = Alpha*0.5;
		ctx.fillStyle = "#330000";
		ctx.fillRect(this.x - this.width / 2, this.y - this.height / 2, this.width, this.height);
		ctx.globalAlpha = Alpha;
		}
	}
};
var earth2rootstr41 = {
	x: -500,
	y: -500,
	width: 16,
	height: 16,
	onScreen: 0,
	draw: function(){
	if(this.onScreen == 1){
		ctx.globalAlpha = Alpha*0.5;
		ctx.fillStyle = "#330000";
		ctx.fillRect(this.x - this.width / 2, this.y - this.height / 2, this.width, this.height);
		ctx.globalAlpha = Alpha;
		}
	}
};
var earth2rootstr42 = {
	x: -500,
	y: -500,
	width: 16,
	height: 16,
	onScreen: 0,
	draw: function(){
	if(this.onScreen == 1){
		ctx.globalAlpha = Alpha*0.5;
		ctx.fillStyle = "#330000";
		ctx.fillRect(this.x - this.width / 2, this.y - this.height / 2, this.width, this.height);
		ctx.globalAlpha = Alpha;
		}
	}
};
var earth2rootstr43 = {
	x: -500,
	y: -500,
	width: 16,
	height: 16,
	onScreen: 0,
	draw: function(){
	if(this.onScreen == 1){
		ctx.globalAlpha = Alpha*0.5;
		ctx.fillStyle = "#330000";
		ctx.fillRect(this.x - this.width / 2, this.y - this.height / 2, this.width, this.height);
		ctx.globalAlpha = Alpha;
		}
	}
};
var earth2rootstr44 = {
	x: -500,
	y: -500,
	width: 16,
	height: 16,
	onScreen: 0,
	draw: function(){
	if(this.onScreen == 1){
		ctx.globalAlpha = Alpha*0.5;
		ctx.fillStyle = "#330000";
		ctx.fillRect(this.x - this.width / 2, this.y - this.height / 2, this.width, this.height);
		ctx.globalAlpha = Alpha;
		}
	}
};
var earth2rootstr45 = {
	x: -500,
	y: -500,
	width: 16,
	height: 16,
	onScreen: 0,
	draw: function(){
	if(this.onScreen == 1){
		ctx.globalAlpha = Alpha*0.5;
		ctx.fillStyle = "#330000";
		ctx.fillRect(this.x - this.width / 2, this.y - this.height / 2, this.width, this.height);
		ctx.globalAlpha = Alpha;
		}
	}
};
var earth2rootstr46 = {
	x: -500,
	y: -500,
	width: 16,
	height: 16,
	onScreen: 0,
	draw: function(){
	if(this.onScreen == 1){
		ctx.globalAlpha = Alpha*0.5;
		ctx.fillStyle = "#330000";
		ctx.fillRect(this.x - this.width / 2, this.y - this.height / 2, this.width, this.height);
		ctx.globalAlpha = Alpha;
		}
	}
};
var earth2rootstr47 = {
	x: -500,
	y: -500,
	width: 16,
	height: 16,
	onScreen: 0,
	draw: function(){
	if(this.onScreen == 1){
		ctx.globalAlpha = Alpha*0.5;
		ctx.fillStyle = "#330000";
		ctx.fillRect(this.x - this.width / 2, this.y - this.height / 2, this.width, this.height);
		ctx.globalAlpha = Alpha;
		}
	}
};
var earth2rootstr48 = {
	x: -500,
	y: -500,
	width: 16,
	height: 16,
	onScreen: 0,
	draw: function(){
	if(this.onScreen == 1){
		ctx.globalAlpha = Alpha*0.5;
		ctx.fillStyle = "#330000";
		ctx.fillRect(this.x - this.width / 2, this.y - this.height / 2, this.width, this.height);
		ctx.globalAlpha = Alpha;
		}
	}
};
var earth2rootstr49 = {
	x: -500,
	y: -500,
	width: 16,
	height: 16,
	onScreen: 0,
	draw: function(){
	if(this.onScreen == 1){
		ctx.globalAlpha = Alpha*0.5;
		ctx.fillStyle = "#330000";
		ctx.fillRect(this.x - this.width / 2, this.y - this.height / 2, this.width, this.height);
		ctx.globalAlpha = Alpha;
		}
	}
};
var earth2rootstr410 = {
	x: -500,
	y: -500,
	width: 16,
	height: 16,
	onScreen: 0,
	draw: function(){
	if(this.onScreen == 1){
		ctx.globalAlpha = Alpha*0.5;
		ctx.fillStyle = "#330000";
		ctx.fillRect(this.x - this.width / 2, this.y - this.height / 2, this.width, this.height);
		ctx.globalAlpha = Alpha;
		}
	}
};
var earth2rootstr411 = {
	x: -500,
	y: -500,
	width: 16,
	height: 16,
	onScreen: 0,
	draw: function(){
	if(this.onScreen == 1){
		ctx.globalAlpha = Alpha*0.5;
		ctx.fillStyle = "#330000";
		ctx.fillRect(this.x - this.width / 2, this.y - this.height / 2, this.width, this.height);
		ctx.globalAlpha = Alpha;
		}
	}
};
var earth2rootstr412 = {
	x: -500,
	y: -500,
	width: 16,
	height: 16,
	onScreen: 0,
	draw: function(){
	if(this.onScreen == 1){
		ctx.globalAlpha = Alpha*0.5;
		ctx.fillStyle = "#330000";
		ctx.fillRect(this.x - this.width / 2, this.y - this.height / 2, this.width, this.height);
		ctx.globalAlpha = Alpha;
		}
	}
};
var earth2rootstr413 = {
	x: -500,
	y: -500,
	width: 16,
	height: 16,
	onScreen: 0,
	draw: function(){
	if(this.onScreen == 1){
		ctx.globalAlpha = Alpha*0.5;
		ctx.fillStyle = "#330000";
		ctx.fillRect(this.x - this.width / 2, this.y - this.height / 2, this.width, this.height);
		ctx.globalAlpha = Alpha;
		}
	}
};
var earth2rootstr414 = {
	x: -500,
	y: -500,
	width: 16,
	height: 16,
	onScreen: 0,
	draw: function(){
	if(this.onScreen == 1){
		ctx.globalAlpha = Alpha*0.5;
		ctx.fillStyle = "#330000";
		ctx.fillRect(this.x - this.width / 2, this.y - this.height / 2, this.width, this.height);
		ctx.globalAlpha = Alpha;
		}
	}
};
var earth2rootstr415 = {
	x: -500,
	y: -500,
	width: 16,
	height: 16,
	onScreen: 0,
	draw: function(){
	if(this.onScreen == 1){
		ctx.globalAlpha = Alpha*0.5;
		ctx.fillStyle = "#330000";
		ctx.fillRect(this.x - this.width / 2, this.y - this.height / 2, this.width, this.height);
		ctx.globalAlpha = Alpha;
		}
	}
};
var earth3rootstr = {
	x: -500,
	y: -500,
	width: 16,
	height: 16,
	onScreen: 0,
	draw: function(){
	if(this.onScreen == 1){
		ctx.globalAlpha = Alpha*0.5;
		ctx.fillStyle = "#330000";
		ctx.fillRect(this.x - this.width / 2, this.y - this.height / 2, this.width, this.height);
		ctx.globalAlpha = Alpha;
	}
		
	}
};
var earth3rootstr2 = {
	x: -500,
	y: -500,
	width: 16,
	height: 16,
	onScreen: 0,
	draw: function(){
	if(this.onScreen == 1){
		ctx.globalAlpha = Alpha*0.5;
		ctx.fillStyle = "#330000";
		ctx.fillRect(this.x - this.width / 2, this.y - this.height / 2, this.width, this.height);
		ctx.globalAlpha = Alpha;
		}
	}
};
var earth3rootstr3 = {
	x: -500,
	y: -500,
	width: 16,
	height: 16,
	onScreen: 0,
	draw: function(){
		if(this.onScreen == 1){
		ctx.globalAlpha = Alpha*0.5;
		ctx.fillStyle = "#330000";
		ctx.fillRect(this.x - this.width / 2, this.y - this.height / 2, this.width, this.height);
		ctx.globalAlpha = Alpha;
		}
		
	}
};
var earth3rootstr4 = {
	x: -500,
	y: -500,
	width: 16,
	height: 16,
	onScreen: 0,
	draw: function(){
		if(this.onScreen == 1){
		ctx.globalAlpha = Alpha*0.5;
		ctx.fillStyle = "#330000";
		ctx.fillRect(this.x - this.width / 2, this.y - this.height / 2, this.width, this.height);
		ctx.globalAlpha = Alpha;
		}
		
	}
};
var earth3rootstr5 = {
	x: -500,
	y: -500,
	width: 16,
	height: 16,
	onScreen: 0,
	draw: function(){
	if(this.onScreen == 1){
		ctx.globalAlpha = Alpha*0.5;
		ctx.fillStyle = "#330000";
		ctx.fillRect(this.x - this.width / 2, this.y - this.height / 2, this.width, this.height);
		ctx.globalAlpha = Alpha;
	}	
	}
};
var earth3rootstr6 = {
	x: -500,
	y: -500,
	width: 16,
	height: 16,
	onScreen: 0,
	draw: function(){
	if(this.onScreen == 1){
		ctx.globalAlpha = Alpha*0.5;
		ctx.fillStyle = "#330000";
		ctx.fillRect(this.x - this.width / 2, this.y - this.height / 2, this.width, this.height);
		ctx.globalAlpha = Alpha;
		}
	}
};
var earth3rootstr7 = {
	x: -500,
	y: -500,
	width: 16,
	height: 16,
	onScreen: 0,
	draw: function(){
	if(this.onScreen == 1){
		ctx.globalAlpha = Alpha*0.5;
		ctx.fillStyle = "#330000";
		ctx.fillRect(this.x - this.width / 2, this.y - this.height / 2, this.width, this.height);
		ctx.globalAlpha = Alpha;
		}
	}
};
var earth3rootstr8 = {
	x: -500,
	y: -500,
	width: 16,
	height: 16,
	onScreen: 0,
	draw: function(){
	if(this.onScreen == 1){
		ctx.globalAlpha = Alpha*0.5;
		ctx.fillStyle = "#330000";
		ctx.fillRect(this.x - this.width / 2, this.y - this.height / 2, this.width, this.height);
		ctx.globalAlpha = Alpha;
		}
	}
};
var earth3rootstr9 = {
	x: -500,
	y: -500,
	width: 16,
	height: 16,
	onScreen: 0,
	draw: function(){
	if(this.onScreen == 1){
		ctx.globalAlpha = Alpha*0.5;
		ctx.fillStyle = "#330000";
		ctx.fillRect(this.x - this.width / 2, this.y - this.height / 2, this.width, this.height);
		ctx.globalAlpha = Alpha;
		}
	}
};
var earth3rootstr10 = {
	x: -500,
	y: -500,
	width: 16,
	height: 16,
	onScreen: 0,
	draw: function(){
	if(this.onScreen == 1){
		ctx.globalAlpha = Alpha*0.5;
		ctx.fillStyle = "#330000";
		ctx.fillRect(this.x - this.width / 2, this.y - this.height / 2, this.width, this.height);
		ctx.globalAlpha = Alpha;
		}
	}
};
var earth3rootstr11 = {
	x: -500,
	y: -500,
	width: 16,
	height: 16,
	onScreen: 0,
	draw: function(){
	if(this.onScreen == 1){
		ctx.globalAlpha = Alpha*0.5;
		ctx.fillStyle = "#330000";
		ctx.fillRect(this.x - this.width / 2, this.y - this.height / 2, this.width, this.height);
		ctx.globalAlpha = Alpha;
		}
	}
};
var earth3rootstr12 = {
	x: -500,
	y: -500,
	width: 16,
	height: 16,
	onScreen: 0,
	draw: function(){
	if(this.onScreen == 1){
		ctx.globalAlpha = Alpha*0.5;
		ctx.fillStyle = "#330000";
		ctx.fillRect(this.x - this.width / 2, this.y - this.height / 2, this.width, this.height);
		ctx.globalAlpha = Alpha;
		}
	}
};
var earth3rootstr13 = {
	x: -500,
	y: -500,
	width: 16,
	height: 16,
	onScreen: 0,
	draw: function(){
	if(this.onScreen == 1){
		ctx.globalAlpha = Alpha*0.5;
		ctx.fillStyle = "#330000";
		ctx.fillRect(this.x - this.width / 2, this.y - this.height / 2, this.width, this.height);
		ctx.globalAlpha = Alpha;
		}
	}
};
var earth3rootstr14 = {
	x: -500,
	y: -500,
	width: 16,
	height: 16,
	onScreen: 0,
	draw: function(){
	if(this.onScreen == 1){
		ctx.globalAlpha = Alpha*0.5;
		ctx.fillStyle = "#330000";
		ctx.fillRect(this.x - this.width / 2, this.y - this.height / 2, this.width, this.height);
		ctx.globalAlpha = Alpha;
		}
	}
};
var earth3rootstr15 = {
	x: -500,
	y: -500,
	width: 16,
	height: 16,
	onScreen: 0,
	draw: function(){
	if(this.onScreen == 1){
		ctx.globalAlpha = Alpha*0.5;
		ctx.fillStyle = "#330000";
		ctx.fillRect(this.x - this.width / 2, this.y - this.height / 2, this.width, this.height);
		ctx.globalAlpha = Alpha;
		}
	}
};
var earth3rootstr21 = {
	x: -500,
	y: -500,
	width: 16,
	height: 16,
	onScreen: 0,
	draw: function(){
	if(this.onScreen == 1){
		ctx.globalAlpha = Alpha*0.5;
		ctx.fillStyle = "#330000";
		ctx.fillRect(this.x - this.width / 2, this.y - this.height / 2, this.width, this.height);
		ctx.globalAlpha = Alpha;
		}
	}
};
var earth3rootstr22 = {
	x: -500,
	y: -500,
	width: 16,
	height: 16,
	onScreen: 0,
	draw: function(){
	if(this.onScreen == 1){
		ctx.globalAlpha = Alpha*0.5;
		ctx.fillStyle = "#330000";
		ctx.fillRect(this.x - this.width / 2, this.y - this.height / 2, this.width, this.height);
		ctx.globalAlpha = Alpha;
		}
	}
};
var earth3rootstr23 = {
	x: -500,
	y: -500,
	width: 16,
	height: 16,
	onScreen: 0,
	draw: function(){
	if(this.onScreen == 1){
		ctx.globalAlpha = Alpha*0.5;
		ctx.fillStyle = "#330000";
		ctx.fillRect(this.x - this.width / 2, this.y - this.height / 2, this.width, this.height);
		ctx.globalAlpha = Alpha;
		}
	}
};
var earth3rootstr24 = {
	x: -500,
	y: -500,
	width: 16,
	height: 16,
	onScreen: 0,
	draw: function(){
	if(this.onScreen == 1){
		ctx.globalAlpha = Alpha*0.5;
		ctx.fillStyle = "#330000";
		ctx.fillRect(this.x - this.width / 2, this.y - this.height / 2, this.width, this.height);
		ctx.globalAlpha = Alpha;
		}
	}
};
var earth3rootstr25 = {
	x: -500,
	y: -500,
	width: 16,
	height: 16,
	onScreen: 0,
	draw: function(){
	if(this.onScreen == 1){
		ctx.globalAlpha = Alpha*0.5;
		ctx.fillStyle = "#330000";
		ctx.fillRect(this.x - this.width / 2, this.y - this.height / 2, this.width, this.height);
		ctx.globalAlpha = Alpha;
		}
	}
};
var earth3rootstr26 = {
	x: -500,
	y: -500,
	width: 16,
	height: 16,
	onScreen: 0,
	draw: function(){
	if(this.onScreen == 1){
		ctx.globalAlpha = Alpha*0.5;
		ctx.fillStyle = "#330000";
		ctx.fillRect(this.x - this.width / 2, this.y - this.height / 2, this.width, this.height);
		ctx.globalAlpha = Alpha;
		}
	}
};
var earth3rootstr27 = {
	x: -500,
	y: -500,
	width: 16,
	height: 16,
	onScreen: 0,
	draw: function(){
	if(this.onScreen == 1){
		ctx.globalAlpha = Alpha*0.5;
		ctx.fillStyle = "#330000";
		ctx.fillRect(this.x - this.width / 2, this.y - this.height / 2, this.width, this.height);
		ctx.globalAlpha = Alpha;
		}
	}
};
var earth3rootstr28 = {
	x: -500,
	y: -500,
	width: 16,
	height: 16,
	onScreen: 0,
	draw: function(){
	if(this.onScreen == 1){
		ctx.globalAlpha = Alpha*0.5;
		ctx.fillStyle = "#330000";
		ctx.fillRect(this.x - this.width / 2, this.y - this.height / 2, this.width, this.height);
		ctx.globalAlpha = Alpha;
		}
	}
};
var earth3rootstr29 = {
	x: -500,
	y: -500,
	width: 16,
	height: 16,
	onScreen: 0,
	draw: function(){
	if(this.onScreen == 1){
		ctx.globalAlpha = Alpha*0.5;
		ctx.fillStyle = "#330000";
		ctx.fillRect(this.x - this.width / 2, this.y - this.height / 2, this.width, this.height);
		ctx.globalAlpha = Alpha;
		}
	}
};
var earth3rootstr210 = {
	x: -500,
	y: -500,
	width: 16,
	height: 16,
	onScreen: 0,
	draw: function(){
	if(this.onScreen == 1){
		ctx.globalAlpha = Alpha*0.5;
		ctx.fillStyle = "#330000";
		ctx.fillRect(this.x - this.width / 2, this.y - this.height / 2, this.width, this.height);
		ctx.globalAlpha = Alpha;
		}
	}
};
var earth3rootstr211 = {
	x: -500,
	y: -500,
	width: 16,
	height: 16,
	onScreen: 0,
	draw: function(){
	if(this.onScreen == 1){
		ctx.globalAlpha = Alpha*0.5;
		ctx.fillStyle = "#330000";
		ctx.fillRect(this.x - this.width / 2, this.y - this.height / 2, this.width, this.height);
		ctx.globalAlpha = Alpha;
		}
	}
};
var earth3rootstr212 = {
	x: -500,
	y: -500,
	width: 16,
	height: 16,
	onScreen: 0,
	draw: function(){
	if(this.onScreen == 1){
		ctx.globalAlpha = Alpha*0.5;
		ctx.fillStyle = "#330000";
		ctx.fillRect(this.x - this.width / 2, this.y - this.height / 2, this.width, this.height);
		ctx.globalAlpha = Alpha;
		}
	}
};
var earth3rootstr213 = {
	x: -500,
	y: -500,
	width: 16,
	height: 16,
	onScreen: 0,
	draw: function(){
	if(this.onScreen == 1){
		ctx.globalAlpha = Alpha*0.5;
		ctx.fillStyle = "#330000";
		ctx.fillRect(this.x - this.width / 2, this.y - this.height / 2, this.width, this.height);
		ctx.globalAlpha = Alpha;
		}
	}
};
var earth3rootstr214 = {
	x: -500,
	y: -500,
	width: 16,
	height: 16,
	onScreen: 0,
	draw: function(){
	if(this.onScreen == 1){
		ctx.globalAlpha = Alpha*0.5;
		ctx.fillStyle = "#330000";
		ctx.fillRect(this.x - this.width / 2, this.y - this.height / 2, this.width, this.height);
		ctx.globalAlpha = Alpha;
		}
	}
};
var earth3rootstr215 = {
	x: -500,
	y: -500,
	width: 16,
	height: 16,
	onScreen: 0,
	draw: function(){
	if(this.onScreen == 1){
		ctx.globalAlpha = Alpha*0.5;
		ctx.fillStyle = "#330000";
		ctx.fillRect(this.x - this.width / 2, this.y - this.height / 2, this.width, this.height);
		ctx.globalAlpha = Alpha;
		}
	}
};
var earth3rootstr31 = {
	x: -500,
	y: -500,
	width: 16,
	height: 16,
	onScreen: 0,
	draw: function(){
	if(this.onScreen == 1){
		ctx.globalAlpha = Alpha*0.5;
		ctx.fillStyle = "#330000";
		ctx.fillRect(this.x - this.width / 2, this.y - this.height / 2, this.width, this.height);
		ctx.globalAlpha = Alpha;
		}
	}
};
var earth3rootstr32 = {
	x: -500,
	y: -500,
	width: 16,
	height: 16,
	onScreen: 0,
	draw: function(){
	if(this.onScreen == 1){
		ctx.globalAlpha = Alpha*0.5;
		ctx.fillStyle = "#330000";
		ctx.fillRect(this.x - this.width / 2, this.y - this.height / 2, this.width, this.height);
		ctx.globalAlpha = Alpha;
		}
	}
};
var earth3rootstr33 = {
	x: -500,
	y: -500,
	width: 16,
	height: 16,
	onScreen: 0,
	draw: function(){
	if(this.onScreen == 1){
		ctx.globalAlpha = Alpha*0.5;
		ctx.fillStyle = "#330000";
		ctx.fillRect(this.x - this.width / 2, this.y - this.height / 2, this.width, this.height);
		ctx.globalAlpha = Alpha;
		}
	}
};
var earth3rootstr34 = {
	x: -500,
	y: -500,
	width: 16,
	height: 16,
	onScreen: 0,
	draw: function(){
	if(this.onScreen == 1){
		ctx.globalAlpha = Alpha*0.5;
		ctx.fillStyle = "#330000";
		ctx.fillRect(this.x - this.width / 2, this.y - this.height / 2, this.width, this.height);
		ctx.globalAlpha = Alpha;
		}
	}
};
var earth3rootstr35 = {
	x: -500,
	y: -500,
	width: 16,
	height: 16,
	onScreen: 0,
	draw: function(){
	if(this.onScreen == 1){
		ctx.globalAlpha = Alpha*0.5;
		ctx.fillStyle = "#330000";
		ctx.fillRect(this.x - this.width / 2, this.y - this.height / 2, this.width, this.height);
		ctx.globalAlpha = Alpha;
		}
	}
};
var earth3rootstr36 = {
	x: -500,
	y: -500,
	width: 16,
	height: 16,
	onScreen: 0,
	draw: function(){
	if(this.onScreen == 1){
		ctx.globalAlpha = Alpha*0.5;
		ctx.fillStyle = "#330000";
		ctx.fillRect(this.x - this.width / 2, this.y - this.height / 2, this.width, this.height);
		ctx.globalAlpha = Alpha;
		}
	}
};
var earth3rootstr37 = {
	x: -500,
	y: -500,
	width: 16,
	height: 16,
	onScreen: 0,
	draw: function(){
	if(this.onScreen == 1){
		ctx.globalAlpha = Alpha*0.5;
		ctx.fillStyle = "#330000";
		ctx.fillRect(this.x - this.width / 2, this.y - this.height / 2, this.width, this.height);
		ctx.globalAlpha = Alpha;
		}
	}
};
var earth3rootstr38 = {
	x: -500,
	y: -500,
	width: 16,
	height: 16,
	onScreen: 0,
	draw: function(){
	if(this.onScreen == 1){
		ctx.globalAlpha = Alpha*0.5;
		ctx.fillStyle = "#330000";
		ctx.fillRect(this.x - this.width / 2, this.y - this.height / 2, this.width, this.height);
		ctx.globalAlpha = Alpha;
		}
	}
};
var earth3rootstr39 = {
	x: -500,
	y: -500,
	width: 16,
	height: 16,
	onScreen: 0,
	draw: function(){
	if(this.onScreen == 1){
		ctx.globalAlpha = Alpha*0.5;
		ctx.fillStyle = "#330000";
		ctx.fillRect(this.x - this.width / 2, this.y - this.height / 2, this.width, this.height);
		ctx.globalAlpha = Alpha;
		}
	}
};
var earth3rootstr310 = {
	x: -500,
	y: -500,
	width: 16,
	height: 16,
	onScreen: 0,
	draw: function(){
	if(this.onScreen == 1){
		ctx.globalAlpha = Alpha*0.5;
		ctx.fillStyle = "#330000";
		ctx.fillRect(this.x - this.width / 2, this.y - this.height / 2, this.width, this.height);
		ctx.globalAlpha = Alpha;
		}
	}
};
var earth3rootstr311 = {
	x: -500,
	y: -500,
	width: 16,
	height: 16,
	onScreen: 0,
	draw: function(){
	if(this.onScreen == 1){
		ctx.globalAlpha = Alpha*0.5;
		ctx.fillStyle = "#330000";
		ctx.fillRect(this.x - this.width / 2, this.y - this.height / 2, this.width, this.height);
		ctx.globalAlpha = Alpha;
		}
	}
};
var earth3rootstr312 = {
	x: -500,
	y: -500,
	width: 16,
	height: 16,
	onScreen: 0,
	draw: function(){
	if(this.onScreen == 1){
		ctx.globalAlpha = Alpha*0.5;
		ctx.fillStyle = "#330000";
		ctx.fillRect(this.x - this.width / 2, this.y - this.height / 2, this.width, this.height);
		ctx.globalAlpha = Alpha;
		}
	}
};
var earth3rootstr313 = {
	x: -500,
	y: -500,
	width: 16,
	height: 16,
	onScreen: 0,
	draw: function(){
	if(this.onScreen == 1){
		ctx.globalAlpha = Alpha*0.5;
		ctx.fillStyle = "#330000";
		ctx.fillRect(this.x - this.width / 2, this.y - this.height / 2, this.width, this.height);
		ctx.globalAlpha = Alpha;
		}
	}
};
var earth3rootstr314 = {
	x: -500,
	y: -500,
	width: 16,
	height: 16,
	onScreen: 0,
	draw: function(){
	if(this.onScreen == 1){
		ctx.globalAlpha = Alpha*0.5;
		ctx.fillStyle = "#330000";
		ctx.fillRect(this.x - this.width / 2, this.y - this.height / 2, this.width, this.height);
		ctx.globalAlpha = Alpha;
		}
	}
};
var earth3rootstr315 = {
	x: -500,
	y: -500,
	width: 16,
	height: 16,
	onScreen: 0,
	draw: function(){
	if(this.onScreen == 1){
		ctx.globalAlpha = Alpha*0.5;
		ctx.fillStyle = "#330000";
		ctx.fillRect(this.x - this.width / 2, this.y - this.height / 2, this.width, this.height);
		ctx.globalAlpha = Alpha;
		}
	}
};
var earth3rootstr41 = {
	x: -500,
	y: -500,
	width: 16,
	height: 16,
	onScreen: 0,
	draw: function(){
	if(this.onScreen == 1){
		ctx.globalAlpha = Alpha*0.5;
		ctx.fillStyle = "#330000";
		ctx.fillRect(this.x - this.width / 2, this.y - this.height / 2, this.width, this.height);
		ctx.globalAlpha = Alpha;
		}
	}
};
var earth3rootstr42 = {
	x: -500,
	y: -500,
	width: 16,
	height: 16,
	onScreen: 0,
	draw: function(){
	if(this.onScreen == 1){
		ctx.globalAlpha = Alpha*0.5;
		ctx.fillStyle = "#330000";
		ctx.fillRect(this.x - this.width / 2, this.y - this.height / 2, this.width, this.height);
		ctx.globalAlpha = Alpha;
		}
	}
};
var earth3rootstr43 = {
	x: -500,
	y: -500,
	width: 16,
	height: 16,
	onScreen: 0,
	draw: function(){
	if(this.onScreen == 1){
		ctx.globalAlpha = Alpha*0.5;
		ctx.fillStyle = "#330000";
		ctx.fillRect(this.x - this.width / 2, this.y - this.height / 2, this.width, this.height);
		ctx.globalAlpha = Alpha;
		}
	}
};
var earth3rootstr44 = {
	x: -500,
	y: -500,
	width: 16,
	height: 16,
	onScreen: 0,
	draw: function(){
	if(this.onScreen == 1){
		ctx.globalAlpha = Alpha*0.5;
		ctx.fillStyle = "#330000";
		ctx.fillRect(this.x - this.width / 2, this.y - this.height / 2, this.width, this.height);
		ctx.globalAlpha = Alpha;
		}
	}
};
var earth3rootstr45 = {
	x: -500,
	y: -500,
	width: 16,
	height: 16,
	onScreen: 0,
	draw: function(){
	if(this.onScreen == 1){
		ctx.globalAlpha = Alpha*0.5;
		ctx.fillStyle = "#330000";
		ctx.fillRect(this.x - this.width / 2, this.y - this.height / 2, this.width, this.height);
		ctx.globalAlpha = Alpha;
		}
	}
};
var earth3rootstr46 = {
	x: -500,
	y: -500,
	width: 16,
	height: 16,
	onScreen: 0,
	draw: function(){
	if(this.onScreen == 1){
		ctx.globalAlpha = Alpha*0.5;
		ctx.fillStyle = "#330000";
		ctx.fillRect(this.x - this.width / 2, this.y - this.height / 2, this.width, this.height);
		ctx.globalAlpha = Alpha;
		}
	}
};
var earth3rootstr47 = {
	x: -500,
	y: -500,
	width: 16,
	height: 16,
	onScreen: 0,
	draw: function(){
	if(this.onScreen == 1){
		ctx.globalAlpha = Alpha*0.5;
		ctx.fillStyle = "#330000";
		ctx.fillRect(this.x - this.width / 2, this.y - this.height / 2, this.width, this.height);
		ctx.globalAlpha = Alpha;
		}
	}
};
var earth3rootstr48 = {
	x: -500,
	y: -500,
	width: 16,
	height: 16,
	onScreen: 0,
	draw: function(){
	if(this.onScreen == 1){
		ctx.globalAlpha = Alpha*0.5;
		ctx.fillStyle = "#330000";
		ctx.fillRect(this.x - this.width / 2, this.y - this.height / 2, this.width, this.height);
		ctx.globalAlpha = Alpha;
		}
	}
};
var earth3rootstr49 = {
	x: -500,
	y: -500,
	width: 16,
	height: 16,
	onScreen: 0,
	draw: function(){
	if(this.onScreen == 1){
		ctx.globalAlpha = Alpha*0.5;
		ctx.fillStyle = "#330000";
		ctx.fillRect(this.x - this.width / 2, this.y - this.height / 2, this.width, this.height);
		ctx.globalAlpha = Alpha;
		}
	}
};
var earth3rootstr410 = {
	x: -500,
	y: -500,
	width: 16,
	height: 16,
	onScreen: 0,
	draw: function(){
	if(this.onScreen == 1){
		ctx.globalAlpha = Alpha*0.5;
		ctx.fillStyle = "#330000";
		ctx.fillRect(this.x - this.width / 2, this.y - this.height / 2, this.width, this.height);
		ctx.globalAlpha = Alpha;
		}
	}
};
var earth3rootstr411 = {
	x: -500,
	y: -500,
	width: 16,
	height: 16,
	onScreen: 0,
	draw: function(){
	if(this.onScreen == 1){
		ctx.globalAlpha = Alpha*0.5;
		ctx.fillStyle = "#330000";
		ctx.fillRect(this.x - this.width / 2, this.y - this.height / 2, this.width, this.height);
		ctx.globalAlpha = Alpha;
		}
	}
};
var earth3rootstr412 = {
	x: -500,
	y: -500,
	width: 16,
	height: 16,
	onScreen: 0,
	draw: function(){
	if(this.onScreen == 1){
		ctx.globalAlpha = Alpha*0.5;
		ctx.fillStyle = "#330000";
		ctx.fillRect(this.x - this.width / 2, this.y - this.height / 2, this.width, this.height);
		ctx.globalAlpha = Alpha;
		}
	}
};
var earth3rootstr413 = {
	x: -500,
	y: -500,
	width: 16,
	height: 16,
	onScreen: 0,
	draw: function(){
	if(this.onScreen == 1){
		ctx.globalAlpha = Alpha*0.5;
		ctx.fillStyle = "#330000";
		ctx.fillRect(this.x - this.width / 2, this.y - this.height / 2, this.width, this.height);
		ctx.globalAlpha = Alpha;
		}
	}
};
var earth3rootstr414 = {
	x: -500,
	y: -500,
	width: 16,
	height: 16,
	onScreen: 0,
	draw: function(){
	if(this.onScreen == 1){
		ctx.globalAlpha = Alpha*0.5;
		ctx.fillStyle = "#330000";
		ctx.fillRect(this.x - this.width / 2, this.y - this.height / 2, this.width, this.height);
		ctx.globalAlpha = Alpha;
		}
	}
};
var earth3rootstr415 = {
	x: -500,
	y: -500,
	width: 16,
	height: 16,
	onScreen: 0,
	draw: function(){
	if(this.onScreen == 1){
		ctx.globalAlpha = Alpha*0.5;
		ctx.fillStyle = "#330000";
		ctx.fillRect(this.x - this.width / 2, this.y - this.height / 2, this.width, this.height);
		ctx.globalAlpha = Alpha;
		}
	}
};
var earth2roots1 = {1: earth2rootstr, 2: earth2rootstr2, 3: earth2rootstr3, 4: earth2rootstr4, 5: earth2rootstr5, 6: earth2rootstr6, 7: earth2rootstr7, 8: earth2rootstr8, 9: earth2rootstr9, 10: earth2rootstr10,
			11: earth2rootstr11, 12: earth2rootstr12, 13: earth2rootstr13, 14: earth2rootstr14, 15: earth2rootstr15, 16: earth2rootstr21, 17: earth2rootstr22, 18: earth2rootstr23, 19: earth2rootstr24,
			20: earth2rootstr25, 21: earth2rootstr26, 22: earth2rootstr27, 23: earth2rootstr28, 24: earth2rootstr29, 25: earth2rootstr210, 26: earth2rootstr211, 27: earth2rootstr212, 28: earth2rootstr213, 29: earth2rootstr214, 30: earth2rootstr215,
			31: earth2rootstr31, 32: earth2rootstr32, 33: earth2rootstr33, 34: earth2rootstr34,	35: earth2rootstr35, 36: earth2rootstr36, 37: earth2rootstr37, 38: earth2rootstr38, 39: earth2rootstr39, 40: earth2rootstr310, 41: earth2rootstr311, 42: earth2rootstr312,
			43: earth2rootstr313, 44: earth2rootstr314, 45: earth2rootstr315, 46: earth2rootstr41, 47: earth2rootstr42, 48: earth2rootstr43, 49: earth2rootstr44,	50: earth2rootstr45, 51: earth2rootstr46, 52: earth2rootstr47, 53: earth2rootstr48,
			54: earth2rootstr49, 55: earth2rootstr410, 56: earth2rootstr411, 57: earth2rootstr412, 58: earth2rootstr413, 59: earth2rootstr414, 60: earth2rootstr415};
var earth2roots11 = {1: earth2rootstr, 2: earth2rootstr2, 3: earth2rootstr3, 4: earth2rootstr4, 5: earth2rootstr5, 6: earth2rootstr6, 7: earth2rootstr7, 8: earth2rootstr8, 9: earth2rootstr9, 10: earth2rootstr10,
			11: earth2rootstr11, 12: earth2rootstr12, 13: earth2rootstr13, 14: earth2rootstr14, 15: earth2rootstr15};
var earth2roots12 = {1: earth2rootstr21, 2: earth2rootstr22, 3: earth2rootstr23, 4: earth2rootstr24, 5: earth2rootstr25, 6: earth2rootstr26, 7: earth2rootstr27, 8: earth2rootstr28, 9: earth2rootstr29, 10: earth2rootstr210, 11: earth2rootstr211,
			12: earth2rootstr212, 13: earth2rootstr213, 14: earth2rootstr214, 15: earth2rootstr215};
var earth2roots13 = {1: earth2rootstr31, 2: earth2rootstr32, 3: earth2rootstr33, 4: earth2rootstr34,	5: earth2rootstr35, 6: earth2rootstr36, 7: earth2rootstr37, 8: earth2rootstr38, 9: earth2rootstr39, 10: earth2rootstr310,
			11: earth2rootstr311, 12: earth2rootstr312,	13: earth2rootstr313, 14: earth2rootstr314, 15: earth2rootstr315};
var earth2roots14 = {1: earth2rootstr41, 2: earth2rootstr42, 3: earth2rootstr43, 4: earth2rootstr44,	5: earth2rootstr45, 6: earth2rootstr46, 7: earth2rootstr47, 8: earth2rootstr48, 9: earth2rootstr49, 10: earth2rootstr410,
			11: earth2rootstr411, 12: earth2rootstr412,	13: earth2rootstr413, 14: earth2rootstr414, 15: earth2rootstr415};
var earth3roots1 = {1: earth3rootstr, 2: earth3rootstr2, 3: earth3rootstr3, 4: earth3rootstr4, 5: earth3rootstr5, 6: earth3rootstr6, 7: earth3rootstr7, 8: earth3rootstr8, 9: earth3rootstr9, 10: earth3rootstr10,
			11: earth3rootstr11, 12: earth3rootstr12, 13: earth3rootstr13, 14: earth3rootstr14, 15: earth3rootstr15, 16: earth3rootstr21, 17: earth3rootstr22, 18: earth3rootstr23, 19: earth3rootstr24,
			20: earth3rootstr25, 21: earth3rootstr26, 22: earth3rootstr27, 23: earth3rootstr28, 24: earth3rootstr29, 25: earth3rootstr210, 26: earth3rootstr211, 27: earth3rootstr212, 28: earth3rootstr213, 29: earth3rootstr214, 30: earth3rootstr215,
			31: earth3rootstr31, 32: earth3rootstr32, 33: earth3rootstr33, 34: earth3rootstr34,	35: earth3rootstr35, 36: earth3rootstr36, 37: earth3rootstr37, 38: earth3rootstr38, 39: earth3rootstr39, 40: earth3rootstr310, 41: earth3rootstr311, 42: earth3rootstr312,
			43: earth3rootstr313, 44: earth3rootstr314, 45: earth3rootstr315, 46: earth3rootstr41, 47: earth3rootstr42, 48: earth3rootstr43, 49: earth3rootstr44,	50: earth3rootstr45, 51: earth3rootstr46, 52: earth3rootstr47, 53: earth3rootstr48,
			54: earth3rootstr49, 55: earth3rootstr410, 56: earth3rootstr411, 57: earth3rootstr412, 58: earth3rootstr413, 59: earth3rootstr414, 60: earth3rootstr415};
var earth2rootStrike = {
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
	pts: 0,
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
		ctx.globalAlpha = Alpha*0.5;
		if(this.hptimer/2 != Math.round(this.hptimer/2)){
			ctx.fillStyle = "white";
		}
		else{
			ctx.fillStyle = "#330000";
		}
		ctx.fillRect(this.x - this.width / 2, this.y - this.height / 2, this.width, this.height);
		ctx.globalAlpha = Alpha;
		this.frame++;
		if(this.frame/2 == Math.round(this.frame/2)){
			if(earth2rootstr.onScreen == 0){
				earth2rootstr.onScreen = 1;
				earth2rootstr.x = this.x;
				earth2rootstr.y = this.y;
			}
			else if(earth2rootstr2.onScreen == 0){
				earth2rootstr2.onScreen = 1;
				earth2rootstr2.x = this.x;
				earth2rootstr2.y = this.y;
			}
			else if(earth2rootstr3.onScreen == 0){
				earth2rootstr3.onScreen = 1;
				earth2rootstr3.x = this.x;
				earth2rootstr3.y = this.y;
			}
			else if(earth2rootstr4.onScreen == 0){
				earth2rootstr4.onScreen = 1;
				earth2rootstr4.x = this.x;
				earth2rootstr4.y = this.y;
			}
			else if(earth2rootstr5.onScreen == 0){
				earth2rootstr5.onScreen = 1;
				earth2rootstr5.x = this.x;
				earth2rootstr5.y = this.y;
			}
			else if(earth2rootstr6.onScreen == 0){
				earth2rootstr6.onScreen = 1;
				earth2rootstr6.x = this.x;
				earth2rootstr6.y = this.y;
			}
			else if(earth2rootstr7.onScreen == 0){
				earth2rootstr7.onScreen = 1;
				earth2rootstr7.x = this.x;
				earth2rootstr7.y = this.y;
			}
			else if(earth2rootstr8.onScreen == 0){
				earth2rootstr8.onScreen = 1;
				earth2rootstr8.x = this.x;
				earth2rootstr8.y = this.y;
			}
			else if(earth2rootstr9.onScreen == 0){
				earth2rootstr9.onScreen = 1;
				earth2rootstr9.x = this.x;
				earth2rootstr9.y = this.y;
			}
			else if(earth2rootstr10.onScreen == 0){
				earth2rootstr10.onScreen = 1;
				earth2rootstr10.x = this.x;
				earth2rootstr10.y = this.y;
			}
			else if(earth2rootstr11.onScreen == 0){
				earth2rootstr11.onScreen = 1;
				earth2rootstr11.x = this.x;
				earth2rootstr11.y = this.y;
			}
			else if(earth2rootstr12.onScreen == 0){
				earth2rootstr12.onScreen = 1;
				earth2rootstr12.x = this.x;
				earth2rootstr12.y = this.y;
			}
			else if(earth2rootstr13.onScreen == 0){
				earth2rootstr13.onScreen = 1;
				earth2rootstr13.x = this.x;
				earth2rootstr13.y = this.y;
			}
			else if(earth2rootstr14.onScreen == 0){
				earth2rootstr14.onScreen = 1;
				earth2rootstr14.x = this.x;
				earth2rootstr14.y = this.y;
			}
			else if(earth2rootstr15.onScreen == 0){
				earth2rootstr15.onScreen = 1;
				earth2rootstr15.x = this.x;
				earth2rootstr15.y = this.y;
			}
			else{
				this.movement = false;
				this.frame = 0;
			}
		}
	}
	}
};
var earth2rootStrike2 = {
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
	pts: 0,
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
		ctx.globalAlpha = Alpha*0.5;
		if(this.hptimer/2 != Math.round(this.hptimer/2)){
			ctx.fillStyle = "white";
		}
		else{
			ctx.fillStyle = "#330000";
		}
		ctx.fillRect(this.x - this.width / 2, this.y - this.height / 2, this.width, this.height);
		ctx.globalAlpha = Alpha;
		this.frame++;
		if(this.frame/2 == Math.round(this.frame/2)){
			if(earth2rootstr21.onScreen == 0){
				earth2rootstr21.onScreen = 1;
				earth2rootstr21.x = this.x;
				earth2rootstr21.y = this.y;
			}
			else if(earth2rootstr22.onScreen == 0){
				earth2rootstr22.onScreen = 1;
				earth2rootstr22.x = this.x;
				earth2rootstr22.y = this.y;
			}
			else if(earth2rootstr23.onScreen == 0){
				earth2rootstr23.onScreen = 1;
				earth2rootstr23.x = this.x;
				earth2rootstr23.y = this.y;
			}
			else if(earth2rootstr24.onScreen == 0){
				earth2rootstr24.onScreen = 1;
				earth2rootstr24.x = this.x;
				earth2rootstr24.y = this.y;
			}
			else if(earth2rootstr25.onScreen == 0){
				earth2rootstr25.onScreen = 1;
				earth2rootstr25.x = this.x;
				earth2rootstr25.y = this.y;
			}
			else if(earth2rootstr26.onScreen == 0){
				earth2rootstr26.onScreen = 1;
				earth2rootstr26.x = this.x;
				earth2rootstr26.y = this.y;
			}
			else if(earth2rootstr27.onScreen == 0){
				earth2rootstr27.onScreen = 1;
				earth2rootstr27.x = this.x;
				earth2rootstr27.y = this.y;
			}
			else if(earth2rootstr28.onScreen == 0){
				earth2rootstr28.onScreen = 1;
				earth2rootstr28.x = this.x;
				earth2rootstr28.y = this.y;
			}
			else if(earth2rootstr29.onScreen == 0){
				earth2rootstr29.onScreen = 1;
				earth2rootstr29.x = this.x;
				earth2rootstr29.y = this.y;
			}
			else if(earth2rootstr210.onScreen == 0){
				earth2rootstr210.onScreen = 1;
				earth2rootstr210.x = this.x;
				earth2rootstr210.y = this.y;
			}
			else if(earth2rootstr211.onScreen == 0){
				earth2rootstr211.onScreen = 1;
				earth2rootstr211.x = this.x;
				earth2rootstr211.y = this.y;
			}
			else if(earth2rootstr212.onScreen == 0){
				earth2rootstr212.onScreen = 1;
				earth2rootstr212.x = this.x;
				earth2rootstr212.y = this.y;
			}
			else if(earth2rootstr213.onScreen == 0){
				earth2rootstr213.onScreen = 1;
				earth2rootstr213.x = this.x;
				earth2rootstr213.y = this.y;
			}
			else if(earth2rootstr214.onScreen == 0){
				earth2rootstr214.onScreen = 1;
				earth2rootstr214.x = this.x;
				earth2rootstr214.y = this.y;
			}
			else if(earth2rootstr215.onScreen == 0){
				earth2rootstr215.onScreen = 1;
				earth2rootstr215.x = this.x;
				earth2rootstr215.y = this.y;
			}
			else{
				this.movement = false;
				this.frame = 0;
			}
		}
	}
	}
};
var earth2rootStrike3 = {
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
	pts: 0,
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
		ctx.globalAlpha = Alpha*0.5;
		if(this.hptimer/2 != Math.round(this.hptimer/2)){
			ctx.fillStyle = "white";
		}
		else{
			ctx.fillStyle = "#330000";
		}
		ctx.fillRect(this.x - this.width / 2, this.y - this.height / 2, this.width, this.height);
		ctx.globalAlpha = Alpha;
		this.frame++;
		if(this.frame/2 == Math.round(this.frame/2)){
			if(earth2rootstr31.onScreen == 0){
				earth2rootstr31.onScreen = 1;
				earth2rootstr31.x = this.x;
				earth2rootstr31.y = this.y;
			}
			else if(earth2rootstr32.onScreen == 0){
				earth2rootstr32.onScreen = 1;
				earth2rootstr32.x = this.x;
				earth2rootstr32.y = this.y;
			}
			else if(earth2rootstr33.onScreen == 0){
				earth2rootstr33.onScreen = 1;
				earth2rootstr33.x = this.x;
				earth2rootstr33.y = this.y;
			}
			else if(earth2rootstr34.onScreen == 0){
				earth2rootstr34.onScreen = 1;
				earth2rootstr34.x = this.x;
				earth2rootstr34.y = this.y;
			}
			else if(earth2rootstr35.onScreen == 0){
				earth2rootstr35.onScreen = 1;
				earth2rootstr35.x = this.x;
				earth2rootstr35.y = this.y;
			}
			else if(earth2rootstr36.onScreen == 0){
				earth2rootstr36.onScreen = 1;
				earth2rootstr36.x = this.x;
				earth2rootstr36.y = this.y;
			}
			else if(earth2rootstr37.onScreen == 0){
				earth2rootstr37.onScreen = 1;
				earth2rootstr37.x = this.x;
				earth2rootstr37.y = this.y;
			}
			else if(earth2rootstr38.onScreen == 0){
				earth2rootstr38.onScreen = 1;
				earth2rootstr38.x = this.x;
				earth2rootstr38.y = this.y;
			}
			else if(earth2rootstr39.onScreen == 0){
				earth2rootstr39.onScreen = 1;
				earth2rootstr39.x = this.x;
				earth2rootstr39.y = this.y;
			}
			else if(earth2rootstr310.onScreen == 0){
				earth2rootstr310.onScreen = 1;
				earth2rootstr310.x = this.x;
				earth2rootstr310.y = this.y;
			}
			else if(earth2rootstr311.onScreen == 0){
				earth2rootstr311.onScreen = 1;
				earth2rootstr311.x = this.x;
				earth2rootstr311.y = this.y;
			}
			else if(earth2rootstr312.onScreen == 0){
				earth2rootstr312.onScreen = 1;
				earth2rootstr312.x = this.x;
				earth2rootstr312.y = this.y;
			}
			else if(earth2rootstr313.onScreen == 0){
				earth2rootstr313.onScreen = 1;
				earth2rootstr313.x = this.x;
				earth2rootstr313.y = this.y;
			}
			else if(earth2rootstr314.onScreen == 0){
				earth2rootstr314.onScreen = 1;
				earth2rootstr314.x = this.x;
				earth2rootstr314.y = this.y;
			}
			else if(earth2rootstr315.onScreen == 0){
				earth2rootstr315.onScreen = 1;
				earth2rootstr315.x = this.x;
				earth2rootstr315.y = this.y;
			}
			else{
				this.movement = false;
				this.frame = 0;
			}
		}
	}
	}
};
var earth2rootStrike4 = {
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
	pts: 0,
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
		ctx.globalAlpha = Alpha*0.5;
		if(this.hptimer/2 != Math.round(this.hptimer/2)){
			ctx.fillStyle = "white";
		}
		else{
			ctx.fillStyle = "#330000";
		}
		ctx.fillRect(this.x - this.width / 2, this.y - this.height / 2, this.width, this.height);
		ctx.globalAlpha = Alpha;
		this.frame++;
		if(this.frame/2 == Math.round(this.frame/2)){
			if(earth2rootstr41.onScreen == 0){
				earth2rootstr41.onScreen = 1;
				earth2rootstr41.x = this.x;
				earth2rootstr41.y = this.y;
			}
			else if(earth2rootstr42.onScreen == 0){
				earth2rootstr42.onScreen = 1;
				earth2rootstr42.x = this.x;
				earth2rootstr42.y = this.y;
			}
			else if(earth2rootstr43.onScreen == 0){
				earth2rootstr43.onScreen = 1;
				earth2rootstr43.x = this.x;
				earth2rootstr43.y = this.y;
			}
			else if(earth2rootstr44.onScreen == 0){
				earth2rootstr44.onScreen = 1;
				earth2rootstr44.x = this.x;
				earth2rootstr44.y = this.y;
			}
			else if(earth2rootstr45.onScreen == 0){
				earth2rootstr45.onScreen = 1;
				earth2rootstr45.x = this.x;
				earth2rootstr45.y = this.y;
			}
			else if(earth2rootstr46.onScreen == 0){
				earth2rootstr46.onScreen = 1;
				earth2rootstr46.x = this.x;
				earth2rootstr46.y = this.y;
			}
			else if(earth2rootstr47.onScreen == 0){
				earth2rootstr47.onScreen = 1;
				earth2rootstr47.x = this.x;
				earth2rootstr47.y = this.y;
			}
			else if(earth2rootstr48.onScreen == 0){
				earth2rootstr48.onScreen = 1;
				earth2rootstr48.x = this.x;
				earth2rootstr48.y = this.y;
			}
			else if(earth2rootstr49.onScreen == 0){
				earth2rootstr49.onScreen = 1;
				earth2rootstr49.x = this.x;
				earth2rootstr49.y = this.y;
			}
			else if(earth2rootstr410.onScreen == 0){
				earth2rootstr410.onScreen = 1;
				earth2rootstr410.x = this.x;
				earth2rootstr410.y = this.y;
			}
			else if(earth2rootstr411.onScreen == 0){
				earth2rootstr411.onScreen = 1;
				earth2rootstr411.x = this.x;
				earth2rootstr411.y = this.y;
			}
			else if(earth2rootstr412.onScreen == 0){
				earth2rootstr412.onScreen = 1;
				earth2rootstr412.x = this.x;
				earth2rootstr412.y = this.y;
			}
			else if(earth2rootstr413.onScreen == 0){
				earth2rootstr413.onScreen = 1;
				earth2rootstr413.x = this.x;
				earth2rootstr413.y = this.y;
			}
			else if(earth2rootstr414.onScreen == 0){
				earth2rootstr414.onScreen = 1;
				earth2rootstr414.x = this.x;
				earth2rootstr414.y = this.y;
			}
			else if(earth2rootstr415.onScreen == 0){
				earth2rootstr415.onScreen = 1;
				earth2rootstr415.x = this.x;
				earth2rootstr415.y = this.y;
			}
			else{
				this.movement = false;
				this.frame = 0;
			}
		}
	}
	}
};
var earth2rootStrike5 = {
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
	pts: 0,
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
		ctx.globalAlpha = Alpha*0.5;
		if(this.hptimer/2 != Math.round(this.hptimer/2)){
			ctx.fillStyle = "white";
		}
		else{
			ctx.fillStyle = "#330000";
		}
		ctx.fillRect(this.x - this.width / 2, this.y - this.height / 2, this.width, this.height);
		ctx.globalAlpha = Alpha;
		this.frame++;
		if(this.frame/2 == Math.round(this.frame/2)){
			if(earth3rootstr.onScreen == 0){
				earth3rootstr.onScreen = 1;
				earth3rootstr.x = this.x;
				earth3rootstr.y = this.y;
			}
			else if(earth3rootstr2.onScreen == 0){
				earth3rootstr2.onScreen = 1;
				earth3rootstr2.x = this.x;
				earth3rootstr2.y = this.y;
			}
			else if(earth3rootstr3.onScreen == 0){
				earth3rootstr3.onScreen = 1;
				earth3rootstr3.x = this.x;
				earth3rootstr3.y = this.y;
			}
			else if(earth3rootstr4.onScreen == 0){
				earth3rootstr4.onScreen = 1;
				earth3rootstr4.x = this.x;
				earth3rootstr4.y = this.y;
			}
			else if(earth3rootstr5.onScreen == 0){
				earth3rootstr5.onScreen = 1;
				earth3rootstr5.x = this.x;
				earth3rootstr5.y = this.y;
			}
			else if(earth3rootstr6.onScreen == 0){
				earth3rootstr6.onScreen = 1;
				earth3rootstr6.x = this.x;
				earth3rootstr6.y = this.y;
			}
			else if(earth3rootstr7.onScreen == 0){
				earth3rootstr7.onScreen = 1;
				earth3rootstr7.x = this.x;
				earth3rootstr7.y = this.y;
			}
			else if(earth3rootstr8.onScreen == 0){
				earth3rootstr8.onScreen = 1;
				earth3rootstr8.x = this.x;
				earth3rootstr8.y = this.y;
			}
			else if(earth3rootstr9.onScreen == 0){
				earth3rootstr9.onScreen = 1;
				earth3rootstr9.x = this.x;
				earth3rootstr9.y = this.y;
			}
			else if(earth3rootstr10.onScreen == 0){
				earth3rootstr10.onScreen = 1;
				earth3rootstr10.x = this.x;
				earth3rootstr10.y = this.y;
			}
			else if(earth3rootstr11.onScreen == 0){
				earth3rootstr11.onScreen = 1;
				earth3rootstr11.x = this.x;
				earth3rootstr11.y = this.y;
			}
			else if(earth3rootstr12.onScreen == 0){
				earth3rootstr12.onScreen = 1;
				earth3rootstr12.x = this.x;
				earth3rootstr12.y = this.y;
			}
			else if(earth3rootstr13.onScreen == 0){
				earth3rootstr13.onScreen = 1;
				earth3rootstr13.x = this.x;
				earth3rootstr13.y = this.y;
			}
			else if(earth3rootstr14.onScreen == 0){
				earth3rootstr14.onScreen = 1;
				earth3rootstr14.x = this.x;
				earth3rootstr14.y = this.y;
			}
			else if(earth3rootstr15.onScreen == 0){
				earth3rootstr15.onScreen = 1;
				earth3rootstr15.x = this.x;
				earth3rootstr15.y = this.y;
			}
			else{
				this.movement = false;
				this.frame = 0;
			}
		}
	}
	}
};
var earth2rootStrike6 = {
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
	pts: 0,
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
		ctx.globalAlpha = Alpha*0.5;
		if(this.hptimer/2 != Math.round(this.hptimer/2)){
			ctx.fillStyle = "white";
		}
		else{
			ctx.fillStyle = "#330000";
		}
		ctx.fillRect(this.x - this.width / 2, this.y - this.height / 2, this.width, this.height);
		ctx.globalAlpha = Alpha;
		this.frame++;
		if(this.frame/2 == Math.round(this.frame/2)){
			if(earth3rootstr21.onScreen == 0){
				earth3rootstr21.onScreen = 1;
				earth3rootstr21.x = this.x;
				earth3rootstr21.y = this.y;
			}
			else if(earth3rootstr22.onScreen == 0){
				earth3rootstr22.onScreen = 1;
				earth3rootstr22.x = this.x;
				earth3rootstr22.y = this.y;
			}
			else if(earth3rootstr23.onScreen == 0){
				earth3rootstr23.onScreen = 1;
				earth3rootstr23.x = this.x;
				earth3rootstr23.y = this.y;
			}
			else if(earth3rootstr24.onScreen == 0){
				earth3rootstr24.onScreen = 1;
				earth3rootstr24.x = this.x;
				earth3rootstr24.y = this.y;
			}
			else if(earth3rootstr25.onScreen == 0){
				earth3rootstr25.onScreen = 1;
				earth3rootstr25.x = this.x;
				earth3rootstr25.y = this.y;
			}
			else if(earth3rootstr26.onScreen == 0){
				earth3rootstr26.onScreen = 1;
				earth3rootstr26.x = this.x;
				earth3rootstr26.y = this.y;
			}
			else if(earth3rootstr27.onScreen == 0){
				earth3rootstr27.onScreen = 1;
				earth3rootstr27.x = this.x;
				earth3rootstr27.y = this.y;
			}
			else if(earth3rootstr28.onScreen == 0){
				earth3rootstr28.onScreen = 1;
				earth3rootstr28.x = this.x;
				earth3rootstr28.y = this.y;
			}
			else if(earth3rootstr29.onScreen == 0){
				earth3rootstr29.onScreen = 1;
				earth3rootstr29.x = this.x;
				earth3rootstr29.y = this.y;
			}
			else if(earth3rootstr210.onScreen == 0){
				earth3rootstr210.onScreen = 1;
				earth3rootstr210.x = this.x;
				earth3rootstr210.y = this.y;
			}
			else if(earth3rootstr211.onScreen == 0){
				earth3rootstr211.onScreen = 1;
				earth3rootstr211.x = this.x;
				earth3rootstr211.y = this.y;
			}
			else if(earth3rootstr212.onScreen == 0){
				earth3rootstr212.onScreen = 1;
				earth3rootstr212.x = this.x;
				earth3rootstr212.y = this.y;
			}
			else if(earth3rootstr213.onScreen == 0){
				earth3rootstr213.onScreen = 1;
				earth3rootstr213.x = this.x;
				earth3rootstr213.y = this.y;
			}
			else if(earth3rootstr214.onScreen == 0){
				earth3rootstr214.onScreen = 1;
				earth3rootstr214.x = this.x;
				earth3rootstr214.y = this.y;
			}
			else if(earth3rootstr215.onScreen == 0){
				earth3rootstr215.onScreen = 1;
				earth3rootstr215.x = this.x;
				earth3rootstr215.y = this.y;
			}
			else{
				this.movement = false;
				this.frame = 0;
			}
		}
	}
	}
};
var earth2rootStrike7 = {
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
	pts: 0,
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
		ctx.globalAlpha = Alpha*0.5;
		if(this.hptimer/2 != Math.round(this.hptimer/2)){
			ctx.fillStyle = "white";
		}
		else{
			ctx.fillStyle = "#330000";
		}
		ctx.fillRect(this.x - this.width / 2, this.y - this.height / 2, this.width, this.height);
		ctx.globalAlpha = Alpha;
		this.frame++;
		if(this.frame/2 == Math.round(this.frame/2)){
			if(earth3rootstr31.onScreen == 0){
				earth3rootstr31.onScreen = 1;
				earth3rootstr31.x = this.x;
				earth3rootstr31.y = this.y;
			}
			else if(earth3rootstr32.onScreen == 0){
				earth3rootstr32.onScreen = 1;
				earth3rootstr32.x = this.x;
				earth3rootstr32.y = this.y;
			}
			else if(earth3rootstr33.onScreen == 0){
				earth3rootstr33.onScreen = 1;
				earth3rootstr33.x = this.x;
				earth3rootstr33.y = this.y;
			}
			else if(earth3rootstr34.onScreen == 0){
				earth3rootstr34.onScreen = 1;
				earth3rootstr34.x = this.x;
				earth3rootstr34.y = this.y;
			}
			else if(earth3rootstr35.onScreen == 0){
				earth3rootstr35.onScreen = 1;
				earth3rootstr35.x = this.x;
				earth3rootstr35.y = this.y;
			}
			else if(earth3rootstr36.onScreen == 0){
				earth3rootstr36.onScreen = 1;
				earth3rootstr36.x = this.x;
				earth3rootstr36.y = this.y;
			}
			else if(earth3rootstr37.onScreen == 0){
				earth3rootstr37.onScreen = 1;
				earth3rootstr37.x = this.x;
				earth3rootstr37.y = this.y;
			}
			else if(earth3rootstr38.onScreen == 0){
				earth3rootstr38.onScreen = 1;
				earth3rootstr38.x = this.x;
				earth3rootstr38.y = this.y;
			}
			else if(earth3rootstr39.onScreen == 0){
				earth3rootstr39.onScreen = 1;
				earth3rootstr39.x = this.x;
				earth3rootstr39.y = this.y;
			}
			else if(earth3rootstr310.onScreen == 0){
				earth3rootstr310.onScreen = 1;
				earth3rootstr310.x = this.x;
				earth3rootstr310.y = this.y;
			}
			else if(earth3rootstr311.onScreen == 0){
				earth3rootstr311.onScreen = 1;
				earth3rootstr311.x = this.x;
				earth3rootstr311.y = this.y;
			}
			else if(earth3rootstr312.onScreen == 0){
				earth3rootstr312.onScreen = 1;
				earth3rootstr312.x = this.x;
				earth3rootstr312.y = this.y;
			}
			else if(earth3rootstr313.onScreen == 0){
				earth3rootstr313.onScreen = 1;
				earth3rootstr313.x = this.x;
				earth3rootstr313.y = this.y;
			}
			else if(earth3rootstr314.onScreen == 0){
				earth3rootstr314.onScreen = 1;
				earth3rootstr314.x = this.x;
				earth3rootstr314.y = this.y;
			}
			else if(earth3rootstr315.onScreen == 0){
				earth3rootstr315.onScreen = 1;
				earth3rootstr315.x = this.x;
				earth3rootstr315.y = this.y;
			}
			else{
				this.movement = false;
				this.frame = 0;
			}
		}
	}
	}
};
var earth2rootStrike8 = {
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
	pts: 0,
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
		ctx.globalAlpha = Alpha*0.5;
		if(this.hptimer/2 != Math.round(this.hptimer/2)){
			ctx.fillStyle = "white";
		}
		else{
			ctx.fillStyle = "#330000";
		}
		ctx.fillRect(this.x - this.width / 2, this.y - this.height / 2, this.width, this.height);
		ctx.globalAlpha = Alpha;
		this.frame++;
		if(this.frame/2 == Math.round(this.frame/2)){
			if(earth3rootstr41.onScreen == 0){
				earth3rootstr41.onScreen = 1;
				earth3rootstr41.x = this.x;
				earth3rootstr41.y = this.y;
			}
			else if(earth3rootstr42.onScreen == 0){
				earth3rootstr42.onScreen = 1;
				earth3rootstr42.x = this.x;
				earth3rootstr42.y = this.y;
			}
			else if(earth3rootstr43.onScreen == 0){
				earth3rootstr43.onScreen = 1;
				earth3rootstr43.x = this.x;
				earth3rootstr43.y = this.y;
			}
			else if(earth3rootstr44.onScreen == 0){
				earth3rootstr44.onScreen = 1;
				earth3rootstr44.x = this.x;
				earth3rootstr44.y = this.y;
			}
			else if(earth3rootstr45.onScreen == 0){
				earth3rootstr45.onScreen = 1;
				earth3rootstr45.x = this.x;
				earth3rootstr45.y = this.y;
			}
			else if(earth3rootstr46.onScreen == 0){
				earth3rootstr46.onScreen = 1;
				earth3rootstr46.x = this.x;
				earth3rootstr46.y = this.y;
			}
			else if(earth3rootstr47.onScreen == 0){
				earth3rootstr47.onScreen = 1;
				earth3rootstr47.x = this.x;
				earth3rootstr47.y = this.y;
			}
			else if(earth3rootstr48.onScreen == 0){
				earth3rootstr48.onScreen = 1;
				earth3rootstr48.x = this.x;
				earth3rootstr48.y = this.y;
			}
			else if(earth3rootstr49.onScreen == 0){
				earth3rootstr49.onScreen = 1;
				earth3rootstr49.x = this.x;
				earth3rootstr49.y = this.y;
			}
			else if(earth3rootstr410.onScreen == 0){
				earth3rootstr410.onScreen = 1;
				earth3rootstr410.x = this.x;
				earth3rootstr410.y = this.y;
			}
			else if(earth3rootstr411.onScreen == 0){
				earth3rootstr411.onScreen = 1;
				earth3rootstr411.x = this.x;
				earth3rootstr411.y = this.y;
			}
			else if(earth3rootstr412.onScreen == 0){
				earth3rootstr412.onScreen = 1;
				earth3rootstr412.x = this.x;
				earth3rootstr412.y = this.y;
			}
			else if(earth3rootstr413.onScreen == 0){
				earth3rootstr413.onScreen = 1;
				earth3rootstr413.x = this.x;
				earth3rootstr413.y = this.y;
			}
			else if(earth3rootstr414.onScreen == 0){
				earth3rootstr414.onScreen = 1;
				earth3rootstr414.x = this.x;
				earth3rootstr414.y = this.y;
			}
			else if(earth3rootstr415.onScreen == 0){
				earth3rootstr415.onScreen = 1;
				earth3rootstr415.x = this.x;
				earth3rootstr415.y = this.y;
			}
			else{
				this.movement = false;
				this.frame = 0;
			}
		}
	}
	}
};
function earth2AI(B){
	var closest = "";
	var cdist = 2000;
	for (E in AllEnemies){
		var distance = Math.sqrt(((B.x - AllEnemies[E].x)*(B.x - AllEnemies[E].x)) + ((B.y - AllEnemies[E].y)*(B.y - AllEnemies[E].y)));
		if(distance < cdist){
			cdist = distance;
			closest = AllEnemies[E];
		}
	}
	var xdifference = closest.x - B.x;
	var ydifference = closest.y - B.y;
	if(closest.x < 8 || closest.y < 8 || closest.x > 792 || closest.y > 568){
		B.dir = B.dir;
	}
	else{
		if(xdifference < 4 && ydifference < 4){
			B.dir = "WA";
		}
		else if(xdifference < 4 && ydifference > 4){
			B.dir = "AS";
		}
		else if(xdifference > 4 && ydifference < 4){
			B.dir = "WD";
		}
		else if (xdifference > 4 && ydifference > 4){
			B.dir = "SD";
		}
		else if (xdifference == 4 && ydifference > 4){
			B.dir = "S";
		}
		else if(xdifference == 4 && ydifference < 4){
			B.dir = "W";
		}
		else if(xdifference < 4 && ydifference == 4){
			B.dir = "A";
		}
		else{
			B.dir = "D";
		}
	}
}
function earth2Move(B){
	if(B.movement){
		if (B.dir == "W"){
			B.y -= B.speed;
		}
		else if (B.dir == "A"){
			B.x -= B.speed;
		}
		else if (B.dir == "S"){
			B.y += B.speed;
		}
		else if (B.dir == "D"){
			B.x += B.speed;
		}
		else if (B.dir == "WA"){
			B.x -= B.speed/Math.sqrt(2);
			B.y -= B.speed/Math.sqrt(2);
		}
		else if (B.dir == "AS"){
			B.x -= B.speed/Math.sqrt(2);
			B.y += B.speed/Math.sqrt(2);
		}
		else if (B.dir == "SD"){
			B.x += B.speed/Math.sqrt(2);
			B.y += B.speed/Math.sqrt(2);
		}
		else if (B.dir == "WD"){
			B.x += B.speed/Math.sqrt(2);
			B.y -= B.speed/Math.sqrt(2);
		}
		for(E in AllEnemies){
			if(collision(B.dir, B, AllEnemies[E])){
				onHit(AllEnemies[E]);
			}
		}
	}
}*/