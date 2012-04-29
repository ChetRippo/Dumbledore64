// Dark: Drops a 2 dmg trap on player's location
var dark = {
	color: "black",
	x: -100,
	y: -200,
	width: 32,
	height: 32,
	cd: 0,
	onScreen: 0,
	used: 0,
	inventory: 7,
	shoot: function(){
		if(this.cd == 0 && this.inventory > 0){
			this.inventory-=1;
			if(this.onScreen == 0){
				this.x = player.x;
				this.y = player.y;
				this.cd = 30;
				this.onScreen = 1;
				this.used = 0;
			}
			else if(dark12.onScreen == 0){
				dark12.x = player.x;
				dark12.y = player.y;
				this.cd = 30;
				dark12.onScreen = 1;
				dark12.used = 0;
			}
			else if(dark13.onScreen == 0){
				dark13.x = player.x;
				dark13.y = player.y;
				this.cd = 30;
				dark13.onScreen = 1;
				dark13.used = 0;
			}
			else if(dark14.onScreen == 0){
				dark14.x = player.x;
				dark14.y = player.y;
				this.cd = 30;
				dark14.onScreen = 1;
				dark14.used = 0;
			}
			else if(dark15.onScreen == 0){
				dark15.x = player.x;
				dark15.y = player.y;
				this.cd = 30;
				dark15.onScreen = 1;
				dark15.used = 0;
			}
			else if(dark16.onScreen == 0){
				dark16.x = player.x;
				dark16.y = player.y;
				this.cd = 30;
				dark16.onScreen = 1;
				dark16.used = 0;
			}
			else if(dark17.onScreen == 0){
				dark17.x = player.x;
				dark17.y = player.y;
				this.cd = 30;
				dark17.onScreen = 1;
				dark17.used = 0;
			}
		}
	}
};
var dark12 = {
	color: "black",
	x: -100,
	y: -200,
	width: 32,
	height: 32,
	cd: 0,
	onScreen: 0,
	used: 0
}	
var dark13 = {
	color: "black",
	x: -100,
	y: -200,
	width: 32,
	height: 32,
	cd: 0,
	onScreen: 0,
	used: 0
}
var dark14 = {
	color: "black",
	x: -100,
	y: -200,
	width: 32,
	height: 32,
	cd: 0,
	onScreen: 0,
	used: 0
}
var dark15 = {
	color: "black",
	x: -100,
	y: -200,
	width: 32,
	height: 32,
	cd: 0,
	onScreen: 0,
	used: 0
}
var dark16 = {
	color: "black",
	x: -100,
	y: -200,
	width: 32,
	height: 32,
	cd: 0,
	onScreen: 0,
	used: 0
}
var dark17 = {
	color: "black",
	x: -100,
	y: -200,
	width: 32,
	height: 32,
	cd: 0,
	onScreen: 0,
	used: 0
}
var darkSpikes = {1: dark, 2: dark12, 3: dark13, 4: dark14, 5: dark15, 6: dark16, 7: dark17};
function spikeDraw(S){
	if(S.onScreen == 1){
		if(S.used == 0){
			flatBoop.currentTime=0;
			flatBoop.play();
			S.used = 1;
		}
		ctx.globalAlpha = Alpha*0.5;
		ctx.fillStyle = S.color;
		ctx.fillRect(S.x - S.width / 2,
		S.y - S.height / 2,
		S.width, S.height);
		ctx.globalAlpha = Alpha;
	}
}
function spikeMove(S){
	if(S.cd > 0){
		S.cd-=1;
	}
	else if(S.onScreen == 1){
		for (E in AllEnemies){
			if(collision(AllEnemies[E].dir, AllEnemies[E], S)){
				player.currpower = player.power;
				player.power+=1;
				onHit(AllEnemies[E]);
				player.power = player.currpower;
				S.onScreen = 0;
				S.x = -100;
				S.y = -200;
				dark.inventory+=1;
			}
		}
	}
}