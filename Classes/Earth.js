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
};