// Air: Blows back all enemies in front of player
var air = {
	timeLeft: 0,
	cd: 0,
	speed: 16,
	onScreen: 0,
	cast: 0,
	used: 0,
	
	draw: function(){
		if(this.onScreen == 1 && this.cast == 0){
			if(player.dir == "W"){
				if(player.LR == "Left"){
					ctx.globalAlpha = Alpha/2;
					ctx.drawImage(WizzurdL, player.x - player.width / 2, player.y - player.height / 2 + 8);
					ctx.globalAlpha = Alpha/2;
					ctx.drawImage(WizzurdL, player.x - player.width / 2, player.y - player.height / 2 + 24);
					ctx.globalAlpha = Alpha/4;
					ctx.drawImage(WizzurdL, player.x - player.width / 2, player.y - player.height / 2 + 40);
					ctx.globalAlpha = Alpha/4;
					ctx.drawImage(WizzurdL, player.x - player.width / 2, player.y - player.height / 2 + 56);
					ctx.globalAlpha = Alpha/6;
					ctx.drawImage(WizzurdL, player.x - player.width / 2, player.y - player.height / 2 + 72);
					ctx.globalAlpha = Alpha/6;
					ctx.drawImage(WizzurdL, player.x - player.width / 2, player.y - player.height / 2 + 88);
				}
				else{
					ctx.globalAlpha = Alpha/2;
					ctx.drawImage(WizzurdR, player.x - player.width / 2, player.y - player.height / 2 + 8);
					ctx.globalAlpha = Alpha/2;
					ctx.drawImage(WizzurdR, player.x - player.width / 2, player.y - player.height / 2 + 24);
					ctx.globalAlpha = Alpha/4;
					ctx.drawImage(WizzurdR, player.x - player.width / 2, player.y - player.height / 2 + 40);
					ctx.globalAlpha = Alpha/4;
					ctx.drawImage(WizzurdR, player.x - player.width / 2, player.y - player.height / 2 + 56);
					ctx.globalAlpha = Alpha/6;
					ctx.drawImage(WizzurdR, player.x - player.width / 2, player.y - player.height / 2 + 72);
					ctx.globalAlpha = Alpha/6;
					ctx.drawImage(WizzurdR, player.x - player.width / 2, player.y - player.height / 2 + 88);
				}
			}
			if(player.dir == "S"){
				if(player.LR == "Left"){
					ctx.globalAlpha = Alpha/2;
					ctx.drawImage(WizzurdL, player.x - player.width / 2, player.y - player.height / 2 - 8);
					ctx.globalAlpha = Alpha/2;
					ctx.drawImage(WizzurdL, player.x - player.width / 2, player.y - player.height / 2 - 24);
					ctx.globalAlpha = Alpha/4;
					ctx.drawImage(WizzurdL, player.x - player.width / 2, player.y - player.height / 2 - 40);
					ctx.globalAlpha = Alpha/4;
					ctx.drawImage(WizzurdL, player.x - player.width / 2, player.y - player.height / 2 - 56);
					ctx.globalAlpha = Alpha/6;
					ctx.drawImage(WizzurdL, player.x - player.width / 2, player.y - player.height / 2 - 72);
					ctx.globalAlpha = Alpha/6;
					ctx.drawImage(WizzurdL, player.x - player.width / 2, player.y - player.height / 2 - 88);
				}
				else{
					ctx.globalAlpha = Alpha/2;
					ctx.drawImage(WizzurdR, player.x - player.width / 2, player.y - player.height / 2 - 8);
					ctx.globalAlpha = Alpha/2;
					ctx.drawImage(WizzurdR, player.x - player.width / 2, player.y - player.height / 2 - 24);
					ctx.globalAlpha = Alpha/4;
					ctx.drawImage(WizzurdR, player.x - player.width / 2, player.y - player.height / 2 - 40);
					ctx.globalAlpha = Alpha/4;
					ctx.drawImage(WizzurdR, player.x - player.width / 2, player.y - player.height / 2 - 56);
					ctx.globalAlpha = Alpha/6;
					ctx.drawImage(WizzurdR, player.x - player.width / 2, player.y - player.height / 2 - 72);
					ctx.globalAlpha = Alpha/6;
					ctx.drawImage(WizzurdR, player.x - player.width / 2, player.y - player.height / 2 - 88);
				}
			}
			if(player.dir == "A"){
				ctx.globalAlpha = Alpha/2;
				ctx.drawImage(WizzurdL, player.x - player.width / 2 + 8, player.y - player.height / 2);
				ctx.globalAlpha = Alpha/2;
				ctx.drawImage(WizzurdL, player.x - player.width / 2 + 24, player.y - player.height / 2);
				ctx.globalAlpha = Alpha/4;
				ctx.drawImage(WizzurdL, player.x - player.width / 2 + 40, player.y - player.height / 2);
				ctx.globalAlpha = Alpha/4;
				ctx.drawImage(WizzurdL, player.x - player.width / 2 + 56, player.y - player.height / 2);
				ctx.globalAlpha = Alpha/6;
				ctx.drawImage(WizzurdL, player.x - player.width / 2 + 72, player.y - player.height / 2);
				ctx.globalAlpha = Alpha/6;
				ctx.drawImage(WizzurdL, player.x - player.width / 2 + 88, player.y - player.height / 2);
			}
			if(player.dir == "D"){
				ctx.globalAlpha = Alpha/2;
				ctx.drawImage(WizzurdR, player.x - player.width / 2 - 8, player.y - player.height / 2);
				ctx.globalAlpha = Alpha/2;
				ctx.drawImage(WizzurdR, player.x - player.width / 2 - 24, player.y - player.height / 2);
				ctx.globalAlpha = Alpha/4;
				ctx.drawImage(WizzurdR, player.x - player.width / 2 - 40, player.y - player.height / 2);
				ctx.globalAlpha = Alpha/4;
				ctx.drawImage(WizzurdR, player.x - player.width / 2 - 56, player.y - player.height / 2);
				ctx.globalAlpha = Alpha/6;
				ctx.drawImage(WizzurdR, player.x - player.width / 2 - 72, player.y - player.height / 2);
				ctx.globalAlpha = Alpha/6;
				ctx.drawImage(WizzurdR, player.x - player.width / 2 - 88, player.y - player.height / 2);
			}
			ctx.globalAlpha = Alpha;
		}
	},
	effect: function(){
		if(this.cd > 0){
			this.cd-=1;
		}
		if(this.cast > 0){
			this.cast-=1;
		}
		if(this.timeLeft > 0 && this.cast <= 0){
			this.timeLeft-=1;
		}
		if(this.onScreen == 1 && this.cast == 0){
			for(E in AllEnemies){
				if(collision(player.dir, player, AllEnemies[E])){
					onHit(AllEnemies[E]);
				}
			}
			for(O in ObsList){
				if(collision(player.dir, player, ObsList[O])){
					obsHit(ObsList[O]);
				}
			}
			player.speed = player.speed2 * 16;
		}
		if(this.onScreen == 1 && this.cast == 0 && this.used == 0){
			player.dirct = 15;
			hptimer = 15;
			player.speed = player.speed2 * 16;
			this.used = 1;
			Wind.currentTime = 0;
			Wind.play();
		}
		if(this.timeLeft <=0 && this.onScreen == 1){
			player.speed = player.speed2 * 4;
			this.onScreen = 0;
		}
	},
	// Spawn
	shoot: function(){
	if(this.cd == 0){
		this.cd = 120;
		this.timeLeft = 15;
		this.onScreen = 1;
		this.used = 0;
	}
	}
};
// air2: Blow away all nearby enemies
var air2 = {
	timeLeft: 0,
	cd: 0,
	speed: 16,
	onScreen: 0,
	cast: 0,
	num: 0,
	used: 0,
	
	draw: function(){
		if(this.onScreen == 1 && this.cast == 0){
			if(player.dir == "W"){
				if(player.LR == "Left"){
					ctx.globalAlpha = Alpha/2;
					ctx.drawImage(WizzurdL, player.x - player.width / 2, player.y - player.height / 2 + 8);
					ctx.globalAlpha = Alpha/2;
					ctx.drawImage(WizzurdL, player.x - player.width / 2, player.y - player.height / 2 + 24);
					ctx.globalAlpha = Alpha/4;
					ctx.drawImage(WizzurdL, player.x - player.width / 2, player.y - player.height / 2 + 40);
					ctx.globalAlpha = Alpha/4;
					ctx.drawImage(WizzurdL, player.x - player.width / 2, player.y - player.height / 2 + 56);
					ctx.globalAlpha = Alpha/6;
					ctx.drawImage(WizzurdL, player.x - player.width / 2, player.y - player.height / 2 + 72);
					ctx.globalAlpha = Alpha/6;
					ctx.drawImage(WizzurdL, player.x - player.width / 2, player.y - player.height / 2 + 88);
				}
				else{
					ctx.globalAlpha = Alpha/2;
					ctx.drawImage(WizzurdR, player.x - player.width / 2, player.y - player.height / 2 + 8);
					ctx.globalAlpha = Alpha/2;
					ctx.drawImage(WizzurdR, player.x - player.width / 2, player.y - player.height / 2 + 24);
					ctx.globalAlpha = Alpha/4;
					ctx.drawImage(WizzurdR, player.x - player.width / 2, player.y - player.height / 2 + 40);
					ctx.globalAlpha = Alpha/4;
					ctx.drawImage(WizzurdR, player.x - player.width / 2, player.y - player.height / 2 + 56);
					ctx.globalAlpha = Alpha/6;
					ctx.drawImage(WizzurdR, player.x - player.width / 2, player.y - player.height / 2 + 72);
					ctx.globalAlpha = Alpha/6;
					ctx.drawImage(WizzurdR, player.x - player.width / 2, player.y - player.height / 2 + 88);
				}
			}
			if(player.dir == "S"){
				if(player.LR == "Left"){
					ctx.globalAlpha = Alpha/2;
					ctx.drawImage(WizzurdL, player.x - player.width / 2, player.y - player.height / 2 - 8);
					ctx.globalAlpha = Alpha/2;
					ctx.drawImage(WizzurdL, player.x - player.width / 2, player.y - player.height / 2 - 24);
					ctx.globalAlpha = Alpha/4;
					ctx.drawImage(WizzurdL, player.x - player.width / 2, player.y - player.height / 2 - 40);
					ctx.globalAlpha = Alpha/4;
					ctx.drawImage(WizzurdL, player.x - player.width / 2, player.y - player.height / 2 - 56);
					ctx.globalAlpha = Alpha/6;
					ctx.drawImage(WizzurdL, player.x - player.width / 2, player.y - player.height / 2 - 72);
					ctx.globalAlpha = Alpha/6;
					ctx.drawImage(WizzurdL, player.x - player.width / 2, player.y - player.height / 2 - 88);
				}
				else{
					ctx.globalAlpha = Alpha/2;
					ctx.drawImage(WizzurdR, player.x - player.width / 2, player.y - player.height / 2 - 8);
					ctx.globalAlpha = Alpha/2;
					ctx.drawImage(WizzurdR, player.x - player.width / 2, player.y - player.height / 2 - 24);
					ctx.globalAlpha = Alpha/4;
					ctx.drawImage(WizzurdR, player.x - player.width / 2, player.y - player.height / 2 - 40);
					ctx.globalAlpha = Alpha/4;
					ctx.drawImage(WizzurdR, player.x - player.width / 2, player.y - player.height / 2 - 56);
					ctx.globalAlpha = Alpha/6;
					ctx.drawImage(WizzurdR, player.x - player.width / 2, player.y - player.height / 2 - 72);
					ctx.globalAlpha = Alpha/6;
					ctx.drawImage(WizzurdR, player.x - player.width / 2, player.y - player.height / 2 - 88);
				}
			}
			if(player.dir == "A"){
				ctx.globalAlpha = Alpha/2;
				ctx.drawImage(WizzurdL, player.x - player.width / 2 + 8, player.y - player.height / 2);
				ctx.globalAlpha = Alpha/2;
				ctx.drawImage(WizzurdL, player.x - player.width / 2 + 24, player.y - player.height / 2);
				ctx.globalAlpha = Alpha/4;
				ctx.drawImage(WizzurdL, player.x - player.width / 2 + 40, player.y - player.height / 2);
				ctx.globalAlpha = Alpha/4;
				ctx.drawImage(WizzurdL, player.x - player.width / 2 + 56, player.y - player.height / 2);
				ctx.globalAlpha = Alpha/6;
				ctx.drawImage(WizzurdL, player.x - player.width / 2 + 72, player.y - player.height / 2);
				ctx.globalAlpha = Alpha/6;
				ctx.drawImage(WizzurdL, player.x - player.width / 2 + 88, player.y - player.height / 2);
			}
			if(player.dir == "D"){
				ctx.globalAlpha = Alpha/2;
				ctx.drawImage(WizzurdR, player.x - player.width / 2 - 8, player.y - player.height / 2);
				ctx.globalAlpha = Alpha/2;
				ctx.drawImage(WizzurdR, player.x - player.width / 2 - 24, player.y - player.height / 2);
				ctx.globalAlpha = Alpha/4;
				ctx.drawImage(WizzurdR, player.x - player.width / 2 - 40, player.y - player.height / 2);
				ctx.globalAlpha = Alpha/4;
				ctx.drawImage(WizzurdR, player.x - player.width / 2 - 56, player.y - player.height / 2);
				ctx.globalAlpha = Alpha/6;
				ctx.drawImage(WizzurdR, player.x - player.width / 2 - 72, player.y - player.height / 2);
				ctx.globalAlpha = Alpha/6;
				ctx.drawImage(WizzurdR, player.x - player.width / 2 - 88, player.y - player.height / 2);
			}
			ctx.globalAlpha = Alpha;
		}
	},
	effect: function(){
		if(this.cd > 0){
			this.cd-=1;
		}
		if(this.cast > 0){
			this.cast-=1;
		}
		if(this.timeLeft > 0){
			this.timeLeft-=1;
		}
		if(this.onScreen == 1 && this.cast == 0){
			for(E in AllEnemies){
				if(collision(player.dir, player, AllEnemies[E])){
					onHit(AllEnemies[E]);
				}
			}
			for(O in ObsList){
				if(collision(player.dir, player, ObsList[O])){
					obsHit(ObsList[O]);
				}
			}
		}
		if(this.onScreen == 1 && this.cast == 0 && this.used == 0){
			player.dirct = 10;
			hptimer = 40;
			player.speed = player.speed2 * 16;
			this.used = 1;
			Wind.currentTime = 0;
			Wind.play();
		}
		if(this.timeLeft <=0 && this.onScreen == 1){
			if(this.num >= 4){
				player.speed = player.speed2 * 4;
				this.onScreen = 0;
				this.num = 0;
			}
			else{
				this.num++;
				this.timeLeft = 10;
				player.dirct = 10;
				player.speed = player.speed2 * 16;
				if (87 in keysDown){
					player.dir = "W";
				}
				if (65 in keysDown){
					player.dir = "A";
				}
				if (83 in keysDown){
					player.dir = "S";
				}
				if (68 in keysDown){
					player.dir = "D";
				}
			}
		}
	},
	// Spawn
	shoot: function(){
	if(this.cd == 0){
		this.cd = 300;
		this.timeLeft = 10;
		this.onScreen = 1;
		this.used = 0;
	}
	}
};