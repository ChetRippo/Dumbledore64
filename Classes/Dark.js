// Dark: Drops a 2 dmg trap on player's location
var dark = {
	x: -100,
	y: -200,
	width: 32,
	height: 32,
	cd: 0,
	cdTop: 30,
	onScreen: 0,
	used: 0,
	inventory: 7,
	dark1: true,
	active: false,
	timeLeft: -1,
	shoot: function(){
		if(this.cd == 0 && this.inventory > 0){
			this.inventory-=1;
			if(this.onScreen == 0){
				this.x = player.x;
				this.y = player.y;
				this.cd = this.cdTop;
				this.onScreen = 1;
				this.used = 0;
			}
			else if(dark12.onScreen == 0){
				dark12.x = player.x;
				dark12.y = player.y;
				this.cd = this.cdTop;
				dark12.onScreen = 1;
				dark12.used = 0;
			}
			else if(dark13.onScreen == 0){
				dark13.x = player.x;
				dark13.y = player.y;
				this.cd = this.cdTop;
				dark13.onScreen = 1;
				dark13.used = 0;
			}
			else if(dark14.onScreen == 0){
				dark14.x = player.x;
				dark14.y = player.y;
				this.cd = this.cdTop;
				dark14.onScreen = 1;
				dark14.used = 0;
			}
			else if(dark15.onScreen == 0){
				dark15.x = player.x;
				dark15.y = player.y;
				this.cd = this.cdTop;
				dark15.onScreen = 1;
				dark15.used = 0;
			}
			else if(dark16.onScreen == 0){
				dark16.x = player.x;
				dark16.y = player.y;
				this.cd = this.cdTop;
				dark16.onScreen = 1;
				dark16.used = 0;
			}
			else if(dark17.onScreen == 0){
				dark17.x = player.x;
				dark17.y = player.y;
				this.cd = this.cdTop;
				dark17.onScreen = 1;
				dark17.used = 0;
			}
		}
	}
};
var dark12 = {
	x: -100,
	y: -200,
	width: 32,
	height: 32,
	onScreen: 0,
	used: 0,
	dark1: true,
	active: false,
	timeLeft: -1
}	
var dark13 = {
	x: -100,
	y: -200,
	width: 32,
	height: 32,
	onScreen: 0,
	used: 0,
	dark1: true,
	active: false,
	timeLeft: -1
}
var dark14 = {
	x: -100,
	y: -200,
	width: 32,
	height: 32,
	onScreen: 0,
	used: 0,
	dark1: true,
	active: false,
	timeLeft: -1
}
var dark15 = {
	x: -100,
	y: -200,
	width: 32,
	height: 32,
	onScreen: 0,
	used: 0,
	dark1: true,
	active: false,
	timeLeft: -1
}
var dark16 = {
	x: -100,
	y: -200,
	width: 32,
	height: 32,
	cd: 0,
	onScreen: 0,
	used: 0,
	dark1: true,
	active: false,
	timeLeft: -1
}
var dark17 = {
	x: -100,
	y: -200,
	width: 32,
	height: 32,
	cd: 0,
	onScreen: 0,
	used: 0,
	dark1: true,
	active: false,
	timeLeft: -1
}
var darkSpikes = {1: dark, 2: dark12, 3: dark13, 4: dark14, 5: dark15, 6: dark16, 7: dark17};
// DeathBound: Creates a bunch of spikes around you that go up and disappear.
var dark2 = {
	x: -100,
	y: -200,
	width: 32,
	height: 32,
	cd: 0,
	cdTop: 210,
	onScreen: 0,
	frame: 0,
	arrIndex: 1,
	dir: "S",
	cast: -1,
	tick: function(){
		if(this.cast > -1){
			this.cast-=1;
		}
		if(this.onScreen == 0 && this.cast == 0 && deathTimer == -1){
			hum.currentTime = 0;
			hum.play();			
			this.x = player.x;
			this.y = player.y + 48;
			this.onScreen = 1;
			this.used = 0;
			dark22.x = player.x;
			dark22.y = player.y - 48;
			dark22.onScreen = 1;
			dark22.used = 0;
			dark23.x = player.x + 48;
			dark23.y = player.y;
			dark23.onScreen = 1;
			dark23.used = 0;
			dark24.x = player.x - 48;
			dark24.y = player.y;
			dark24.onScreen = 1;
			dark24.used = 0;
			dark25.x = player.x+32;
			dark25.y = player.y+32;
			dark25.onScreen = 1;
			dark25.used = 0;
			dark26.x = player.x-32;
			dark26.y = player.y-32;
			dark26.onScreen = 1;
			dark26.used = 0;
			dark27.x = player.x+32;
			dark27.y = player.y-32;
			dark27.onScreen = 1;
			dark27.used = 0;
			dark28.x = player.x-32;
			dark28.y = player.y+32;
			dark28.onScreen = 1;
			dark28.used = 0;
		}
	},
	shoot: function(){
		if(this.cd == 0){
			castingBar.onScreen = 1;
			castingBar.cast = 30;
			castingBar.castmax = 30;
			cd = 30;
			this.cast = 30;
			this.cd = this.cdTop;
		}
	}
};
var dark22 = {
	x: -100,
	y: -200,
	width: 32,
	height: 32,
	onScreen: 0,
	frame: 0,
	arrIndex: 2,
	dir: "W"
}	
var dark23 = {
	x: -100,
	y: -200,
	width: 32,
	height: 32,
	onScreen: 0,
	frame: 0,
	arrIndex: 3,
	dir: "D"
}
var dark24 = {
	x: -100,
	y: -200,
	width: 32,
	height: 32,
	onScreen: 0,
	frame: 0,
	arrIndex: 4,
	dir: "A"
}
var dark25 = {
	x: -100,
	y: -200,
	width: 32,
	height: 32,
	onScreen: 0,
	frame: 0,
	arrIndex: 5,
	dir: "SD"
}
var dark26 = {
	x: -100,
	y: -200,
	width: 32,
	height: 32,
	onScreen: 0,
	frame: 0,
	arrIndex: 6,
	dir: "WA"
}
var dark27 = {
	x: -100,
	y: -200,
	width: 32,
	height: 32,
	onScreen: 0,
	frame: 0,
	arrIndex: 7,
	dir: "WD"
}
var dark28 = {
	x: -100,
	y: -200,
	width: 32,
	height: 32,
	onScreen: 0,
	frame: 0,
	arrIndex: 8,
	dir: "AS"
}
var dark29 = {
	x: -100,
	y: -200,
	width: 32,
	height: 32,
	onScreen: 0,
	frame: 0,
	arrIndex: 1,
	dir: "S"
}
var dark210 = {
	x: -100,
	y: -200,
	width: 32,
	height: 32,
	onScreen: 0,
	frame: 0,
	arrIndex: 2,
	dir: "W"
}
var dark211 = {
	x: -100,
	y: -200,
	width: 32,
	height: 32,
	onScreen: 0,
	frame: 0,
	arrIndex: 3,
	dir: "D"
}
var dark212 = {
	x: -100,
	y: -200,
	width: 32,
	height: 32,
	onScreen: 0,
	frame: 0,
	arrIndex: 4,
	dir: "A"
}
var dark213 = {
	x: -100,
	y: -200,
	width: 32,
	height: 32,
	onScreen: 0,
	frame: 0,
	arrIndex: 5,
	dir: "SD"
}
var dark214 = {
	x: -100,
	y: -200,
	width: 32,
	height: 32,
	onScreen: 0,
	frame: 0,
	arrIndex: 6,
	dir: "WA"
}
var dark215 = {
	x: -100,
	y: -200,
	width: 32,
	height: 32,
	onScreen: 0,
	frame: 0,
	arrIndex: 7,
	dir: "WD"
}
var dark216 = {
	x: -100,
	y: -200,
	width: 32,
	height: 32,
	onScreen: 0,
	frame: 0,
	arrIndex: 8,
	dir: "AS"
}
var dark217 = {
	x: -100,
	y: -200,
	width: 32,
	height: 32,
	onScreen: 0,
	frame: 0,
	arrIndex: 1,
	dir: "S"
}
var dark218 = {
	x: -100,
	y: -200,
	width: 32,
	height: 32,
	onScreen: 0,
	frame: 0,
	arrIndex: 2,
	dir: "W"
}
var dark219 = {
	x: -100,
	y: -200,
	width: 32,
	height: 32,
	onScreen: 0,
	frame: 0,
	arrIndex: 3,
	dir: "D"
}
var dark220 = {
	x: -100,
	y: -200,
	width: 32,
	height: 32,
	onScreen: 0,
	frame: 0,
	arrIndex: 4,
	dir: "A"
}
var dark221 = {
	x: -100,
	y: -200,
	width: 32,
	height: 32,
	onScreen: 0,
	frame: 0,
	arrIndex: 5,
	dir: "SD"
}
var dark222 = {
	x: -100,
	y: -200,
	width: 32,
	height: 32,
	onScreen: 0,
	frame: 0,
	arrIndex: 6,
	dir: "WA"
}
var dark223 = {
	x: -100,
	y: -200,
	width: 32,
	height: 32,
	onScreen: 0,
	frame: 0,
	arrIndex: 7,
	dir: "WD"
}
var dark224 = {
	x: -100,
	y: -200,
	width: 32,
	height: 32,
	onScreen: 0,
	frame: 0,
	arrIndex: 8,
	dir: "AS"
}
var dark225 = {
	x: -100,
	y: -200,
	width: 32,
	height: 32,
	onScreen: 0,
	frame: 0,
	arrIndex: 1,
	dir: "S"
}
var dark226 = {
	x: -100,
	y: -200,
	width: 32,
	height: 32,
	onScreen: 0,
	frame: 0,
	arrIndex: 2,
	dir: "W"
}
var dark227 = {
	x: -100,
	y: -200,
	width: 32,
	height: 32,
	onScreen: 0,
	frame: 0,
	arrIndex: 3,
	dir: "D"
}
var dark228 = {
	x: -100,
	y: -200,
	width: 32,
	height: 32,
	onScreen: 0,
	frame: 0,
	arrIndex: 4,
	dir: "A"
}
var dark229 = {
	x: -100,
	y: -200,
	width: 32,
	height: 32,
	onScreen: 0,
	frame: 0,
	arrIndex: 5,
	dir: "SD"
}
var dark230 = {
	x: -100,
	y: -200,
	width: 32,
	height: 32,
	onScreen: 0,
	frame: 0,
	arrIndex: 6,
	dir: "WA"
}
var dark231 = {
	x: -100,
	y: -200,
	width: 32,
	height: 32,
	onScreen: 0,
	frame: 0,
	arrIndex: 7,
	dir: "WD"
}
var dark232 = {
	x: -100,
	y: -200,
	width: 32,
	height: 32,
	onScreen: 0,
	frame: 0,
	arrIndex: 8,
	dir: "AS"
}
var dark233 = {
	x: -100,
	y: -200,
	width: 32,
	height: 32,
	onScreen: 0,
	frame: 0,
	arrIndex: 1,
	dir: "S"
}	
var dark234 = {
	x: -100,
	y: -200,
	width: 32,
	height: 32,
	onScreen: 0,
	frame: 0,
	arrIndex: 2,
	dir: "W"
}
var dark235 = {
	x: -100,
	y: -200,
	width: 32,
	height: 32,
	onScreen: 0,
	frame: 0,
	arrIndex: 3,
	dir: "D"
}
var dark236 = {
	x: -100,
	y: -200,
	width: 32,
	height: 32,
	onScreen: 0,
	frame: 0,
	arrIndex: 4,
	dir: "A"
}
var dark237 = {
	x: -100,
	y: -200,
	width: 32,
	height: 32,
	onScreen: 0,
	frame: 0,
	arrIndex: 5,
	dir: "SD"
}
var dark238 = {
	x: -100,
	y: -200,
	width: 32,
	height: 32,
	onScreen: 0,
	frame: 0,
	arrIndex: 6,
	dir: "WA"
}
var dark239 = {
	x: -100,
	y: -200,
	width: 32,
	height: 32,
	onScreen: 0,
	frame: 0,
	arrIndex: 7,
	dir: "WD"
}
var dark240 = {
	x: -100,
	y: -200,
	width: 32,
	height: 32,
	onScreen: 0,
	frame: 0,
	arrIndex: 8,
	dir: "AS"
}	
var dark241 = {
	x: -100,
	y: -200,
	width: 32,
	height: 32,
	onScreen: 0,
	frame: 0,
	arrIndex: 1,
	dir: "S"
}
var dark242 = {
	x: -100,
	y: -200,
	width: 32,
	height: 32,
	onScreen: 0,
	frame: 0,
	arrIndex: 2,
	dir: "W"
}
var dark243 = {
	x: -100,
	y: -200,
	width: 32,
	height: 32,
	onScreen: 0,
	frame: 0,
	arrIndex: 3,
	dir: "D"
}
var dark244 = {
	x: -100,
	y: -200,
	width: 32,
	height: 32,
	onScreen: 0,
	frame: 0,
	arrIndex: 4,
	dir: "A"
}
var dark245 = {
	x: -100,
	y: -200,
	width: 32,
	height: 32,
	onScreen: 0,
	frame: 0,
	arrIndex: 5,
	dir: "SD"
}
var dark246 = {
	x: -100,
	y: -200,
	width: 32,
	height: 32,
	onScreen: 0,
	frame: 0,
	arrIndex: 6,
	dir: "WA"
}
var dark247 = {
	x: -100,
	y: -200,
	width: 32,
	height: 32,
	onScreen: 0,
	frame: 0,
	arrIndex: 7,
	dir: "WD"
}
var dark248 = {
	x: -100,
	y: -200,
	width: 32,
	height: 32,
	onScreen: 0,
	frame: 0,
	arrIndex: 8,
	dir: "AS"
}
var dark2Spikes1 = {1: dark2, 2: dark22, 3: dark23, 4: dark24, 5: dark25, 6: dark26, 7: dark27, 8: dark28};
var dark2Spikes2 = {1: dark29, 2: dark210, 3: dark211, 4: dark212, 5: dark213, 6: dark214, 7: dark215, 8: dark216};
var dark2Spikes3 = {1: dark217, 2: dark218, 3: dark219, 4: dark220, 5: dark221, 6: dark222, 7: dark223, 8: dark224};
var dark2Spikes4 = {1: dark225, 2: dark226, 3: dark227, 4: dark228, 5: dark229, 6: dark230, 7: dark231, 8: dark232};
var dark2Spikes5 = {1: dark233, 2: dark234, 3: dark235, 4: dark236, 5: dark237, 6: dark238, 7: dark239, 8: dark240};
var dark2Spikes6 = {1: dark241, 2: dark242, 3: dark243, 4: dark244, 5: dark245, 6: dark246, 7: dark247, 8: dark248};
var dark2Spikes = {1: dark2, 2: dark22, 3: dark23, 4: dark24, 5: dark25, 6: dark26, 7: dark27, 8: dark28,
				9: dark29, 10: dark210, 11: dark211, 12: dark212, 13: dark213, 14: dark214, 15: dark215, 16: dark216,
				17: dark217, 18: dark218, 19: dark219, 20: dark220, 21: dark221, 22: dark222, 23: dark223, 24: dark224,
				25: dark225, 26: dark226, 27: dark227, 28: dark228, 29: dark229, 30: dark230, 31: dark231, 32: dark232,
				33: dark233, 34: dark234, 35: dark235, 36: dark236, 37: dark237, 38: dark238, 39: dark239, 40: dark240,
				41: dark241, 42: dark242, 43: dark243, 44: dark244, 45: dark245, 46: dark246, 47: dark247, 48: dark248};
function spikeDraw(S){
	if(S.onScreen == 1){
		if(S.used == 0 && (!S.arrIndex)){
			flatBoop.currentTime=0;
			flatBoop.play();
			S.used = 1;
		}
		if(S.dark1){
			if(S.active){
				ctx.drawImage(darkTrapActive, S.x-S.width/2, S.y-S.height/2);
			}
			else{
				ctx.drawImage(darkTrap, S.x-S.width/2, S.y-S.height/2);
			}
		}
		else if(S.arrIndex){
			if(S.frame < 4){
				ctx.drawImage(dark2img[1], S.x-S.width/2, S.y-S.height/2);
			}
			else if(S.frame < 7){
				ctx.drawImage(dark2img[2], S.x-S.width/2, S.y-S.height/2);
			}
			else if(S.frame < 10){
				ctx.drawImage(dark2img[3], S.x-S.width/2, S.y-S.height/2);
			}
			else if(S.frame < 13){
				ctx.drawImage(dark2img[4], S.x-S.width/2, S.y-S.height/2);
			}
			else{
				ctx.drawImage(dark2img[5], S.x-S.width/2, S.y-S.height/2);
			}
		}
		else if(!S.ice && !S.light){
			ctx.drawImage(darkfireimg[Math.floor(S.index/2)], S.x-S.width/2, S.y-S.height/2);
			S.index++;
			if(S.index > 5){
				S.index = 0;
			}
		}
		else if(S.ice){
			ctx.drawImage(darkiceimg[Math.floor(S.index/2)], S.x-S.width/2, S.y-S.height/2);
			S.index++;
			if(S.index > 10){
				S.index = 0;
			}
		}
		else if(S.light){
			ctx.drawImage(darklightningimg[Math.floor(S.index/2)], S.x-S.width/2, S.y-S.height/2);
			S.index++;
			if(S.index > 5){
				S.index = 0;
			}
		}
	}
	if(S.light){
		if(S.timeLeft > 0){
			S.timeLeft-=1;
		}
		if(S.timeLeft == 0){
			S.timeLeft-=1;
			S.x = -100;
			S.y = -200;
			S.onScreen = 0;
			darklightning.inventory+=1;
			S.active = false;
		}
	}	
}
function spikeMove(S){
	if(S.cd > 0){
		S.cd-=1;
	}
	if(S.onScreen == 1){
		for(D in dark2Spikes){
			if(S == dark2Spikes[D]){
				S.frame++;
				if(S.frame == 15){
					S.onScreen = 0;
					S.x = -100;
					S.y = -200;
					S.frame = 0;
				}
				if(S.frame == 7){
					if(S == dark2Spikes1[S.arrIndex]){
						if(S.dir == "W"){
							dark2Spikes2[S.arrIndex].x = S.x;
							dark2Spikes2[S.arrIndex].y = S.y - 48;
							dark2Spikes2[S.arrIndex].onScreen = 1;
						}
						if(S.dir == "A"){
							dark2Spikes2[S.arrIndex].x = S.x - 48;
							dark2Spikes2[S.arrIndex].y = S.y;
							dark2Spikes2[S.arrIndex].onScreen = 1;
						}
						if(S.dir == "S"){
							dark2Spikes2[S.arrIndex].x = S.x;
							dark2Spikes2[S.arrIndex].y = S.y + 48;
							dark2Spikes2[S.arrIndex].onScreen = 1;
						}
						if(S.dir == "D"){
							dark2Spikes2[S.arrIndex].x = S.x + 48;
							dark2Spikes2[S.arrIndex].y = S.y;
							dark2Spikes2[S.arrIndex].onScreen = 1;
						}
						if(S.dir == "WD"){
							dark2Spikes2[S.arrIndex].x = S.x + 32;
							dark2Spikes2[S.arrIndex].y = S.y - 32;
							dark2Spikes2[S.arrIndex].onScreen = 1;
						}
						if(S.dir == "WA"){
							dark2Spikes2[S.arrIndex].x = S.x - 32;
							dark2Spikes2[S.arrIndex].y = S.y - 32;
							dark2Spikes2[S.arrIndex].onScreen = 1;
						}
						if(S.dir == "AS"){
							dark2Spikes2[S.arrIndex].x = S.x - 32;
							dark2Spikes2[S.arrIndex].y = S.y + 32;
							dark2Spikes2[S.arrIndex].onScreen = 1;
						}
						if(S.dir == "SD"){
							dark2Spikes2[S.arrIndex].x = S.x + 32;
							dark2Spikes2[S.arrIndex].y = S.y + 32;
							dark2Spikes2[S.arrIndex].onScreen = 1;
						}
					}
					if(S == dark2Spikes2[S.arrIndex]){
						if(S.dir == "W"){
							dark2Spikes3[S.arrIndex].x = S.x;
							dark2Spikes3[S.arrIndex].y = S.y - 48;
							dark2Spikes3[S.arrIndex].onScreen = 1;
						}
						if(S.dir == "A"){
							dark2Spikes3[S.arrIndex].x = S.x - 48;
							dark2Spikes3[S.arrIndex].y = S.y;
							dark2Spikes3[S.arrIndex].onScreen = 1;
						}
						if(S.dir == "S"){
							dark2Spikes3[S.arrIndex].x = S.x;
							dark2Spikes3[S.arrIndex].y = S.y + 48;
							dark2Spikes3[S.arrIndex].onScreen = 1;
						}
						if(S.dir == "D"){
							dark2Spikes3[S.arrIndex].x = S.x + 48;
							dark2Spikes3[S.arrIndex].y = S.y;
							dark2Spikes3[S.arrIndex].onScreen = 1;
						}
						if(S.dir == "WD"){
							dark2Spikes3[S.arrIndex].x = S.x + 32;
							dark2Spikes3[S.arrIndex].y = S.y - 32;
							dark2Spikes3[S.arrIndex].onScreen = 1;
						}
						if(S.dir == "WA"){
							dark2Spikes3[S.arrIndex].x = S.x - 32;
							dark2Spikes3[S.arrIndex].y = S.y - 32;
							dark2Spikes3[S.arrIndex].onScreen = 1;
						}
						if(S.dir == "AS"){
							dark2Spikes3[S.arrIndex].x = S.x - 32;
							dark2Spikes3[S.arrIndex].y = S.y + 32;
							dark2Spikes3[S.arrIndex].onScreen = 1;
						}
						if(S.dir == "SD"){
							dark2Spikes3[S.arrIndex].x = S.x + 32;
							dark2Spikes3[S.arrIndex].y = S.y + 32;
							dark2Spikes3[S.arrIndex].onScreen = 1;
						}
					}
					if(S == dark2Spikes3[S.arrIndex]){
						if(S.dir == "W"){
							dark2Spikes4[S.arrIndex].x = S.x;
							dark2Spikes4[S.arrIndex].y = S.y - 48;
							dark2Spikes4[S.arrIndex].onScreen = 1;
						}
						if(S.dir == "A"){
							dark2Spikes4[S.arrIndex].x = S.x - 48;
							dark2Spikes4[S.arrIndex].y = S.y;
							dark2Spikes4[S.arrIndex].onScreen = 1;
						}
						if(S.dir == "S"){
							dark2Spikes4[S.arrIndex].x = S.x;
							dark2Spikes4[S.arrIndex].y = S.y + 48;
							dark2Spikes4[S.arrIndex].onScreen = 1;
						}
						if(S.dir == "D"){
							dark2Spikes4[S.arrIndex].x = S.x + 48;
							dark2Spikes4[S.arrIndex].y = S.y;
							dark2Spikes4[S.arrIndex].onScreen = 1;
						}
						if(S.dir == "WD"){
							dark2Spikes4[S.arrIndex].x = S.x + 32;
							dark2Spikes4[S.arrIndex].y = S.y - 32;
							dark2Spikes4[S.arrIndex].onScreen = 1;
						}
						if(S.dir == "WA"){
							dark2Spikes4[S.arrIndex].x = S.x - 32;
							dark2Spikes4[S.arrIndex].y = S.y - 32;
							dark2Spikes4[S.arrIndex].onScreen = 1;
						}
						if(S.dir == "AS"){
							dark2Spikes4[S.arrIndex].x = S.x - 32;
							dark2Spikes4[S.arrIndex].y = S.y + 32;
							dark2Spikes4[S.arrIndex].onScreen = 1;
						}
						if(S.dir == "SD"){
							dark2Spikes4[S.arrIndex].x = S.x + 32;
							dark2Spikes4[S.arrIndex].y = S.y + 32;
							dark2Spikes4[S.arrIndex].onScreen = 1;
						}
					}
					if(S == dark2Spikes4[S.arrIndex]){
						if(S.dir == "W"){
							dark2Spikes5[S.arrIndex].x = S.x;
							dark2Spikes5[S.arrIndex].y = S.y - 48;
							dark2Spikes5[S.arrIndex].onScreen = 1;
						}
						if(S.dir == "A"){
							dark2Spikes5[S.arrIndex].x = S.x - 48;
							dark2Spikes5[S.arrIndex].y = S.y;
							dark2Spikes5[S.arrIndex].onScreen = 1;
						}
						if(S.dir == "S"){
							dark2Spikes5[S.arrIndex].x = S.x;
							dark2Spikes5[S.arrIndex].y = S.y + 48;
							dark2Spikes5[S.arrIndex].onScreen = 1;
						}
						if(S.dir == "D"){
							dark2Spikes5[S.arrIndex].x = S.x + 48;
							dark2Spikes5[S.arrIndex].y = S.y;
							dark2Spikes5[S.arrIndex].onScreen = 1;
						}
						if(S.dir == "WD"){
							dark2Spikes5[S.arrIndex].x = S.x + 32;
							dark2Spikes5[S.arrIndex].y = S.y - 32;
							dark2Spikes5[S.arrIndex].onScreen = 1;
						}
						if(S.dir == "WA"){
							dark2Spikes5[S.arrIndex].x = S.x - 32;
							dark2Spikes5[S.arrIndex].y = S.y - 32;
							dark2Spikes5[S.arrIndex].onScreen = 1;
						}
						if(S.dir == "AS"){
							dark2Spikes5[S.arrIndex].x = S.x - 32;
							dark2Spikes5[S.arrIndex].y = S.y + 32;
							dark2Spikes5[S.arrIndex].onScreen = 1;
						}
						if(S.dir == "SD"){
							dark2Spikes5[S.arrIndex].x = S.x + 32;
							dark2Spikes5[S.arrIndex].y = S.y + 32;
							dark2Spikes5[S.arrIndex].onScreen = 1;
						}
					}
					if(S == dark2Spikes5[S.arrIndex]){
						if(S.dir == "W"){
							dark2Spikes6[S.arrIndex].x = S.x;
							dark2Spikes6[S.arrIndex].y = S.y - 48;
							dark2Spikes6[S.arrIndex].onScreen = 1;
						}
						if(S.dir == "A"){
							dark2Spikes6[S.arrIndex].x = S.x - 48;
							dark2Spikes6[S.arrIndex].y = S.y;
							dark2Spikes6[S.arrIndex].onScreen = 1;
						}
						if(S.dir == "S"){
							dark2Spikes6[S.arrIndex].x = S.x;
							dark2Spikes6[S.arrIndex].y = S.y + 48;
							dark2Spikes6[S.arrIndex].onScreen = 1;
						}
						if(S.dir == "D"){
							dark2Spikes6[S.arrIndex].x = S.x + 48;
							dark2Spikes6[S.arrIndex].y = S.y;
							dark2Spikes6[S.arrIndex].onScreen = 1;
						}
						if(S.dir == "WD"){
							dark2Spikes6[S.arrIndex].x = S.x + 32;
							dark2Spikes6[S.arrIndex].y = S.y - 32;
							dark2Spikes6[S.arrIndex].onScreen = 1;
						}
						if(S.dir == "WA"){
							dark2Spikes6[S.arrIndex].x = S.x - 32;
							dark2Spikes6[S.arrIndex].y = S.y - 32;
							dark2Spikes6[S.arrIndex].onScreen = 1;
						}
						if(S.dir == "AS"){
							dark2Spikes6[S.arrIndex].x = S.x - 32;
							dark2Spikes6[S.arrIndex].y = S.y + 32;
							dark2Spikes6[S.arrIndex].onScreen = 1;
						}
						if(S.dir == "SD"){
							dark2Spikes6[S.arrIndex].x = S.x + 32;
							dark2Spikes6[S.arrIndex].y = S.y + 32;
							dark2Spikes6[S.arrIndex].onScreen = 1;
						}
					}
				}
			}
		}
		for(D in darkSpikes){
			if(S == darkSpikes[D] && S.active){
				if(S.timeLeft > -1){
					S.timeLeft-=1;
				}
				if(S.timeLeft == 0){
					S.timeLeft-=1;
					S.onScreen = 0;
					S.x = -100;
					S.y = -200;
					S.active = false;
					dark.inventory+=1;
				}
			}
		}
		for (E in AllEnemies){
			if(collision(AllEnemies[E].dir, AllEnemies[E], S) && AllEnemies[E].onTree == 0){
				player.currpower = player.power;
				if(S.arrIndex){
					player.power = player.maxhp-player.hp + 1;
				}
				else{
					player.power+=1;
				}
				onHit(AllEnemies[E]);
				player.power = player.currpower;
				for(D in darkSpikes){
					if(S == darkSpikes[D] && !S.active && AllEnemies[E].onTree == 0){
						S.active = true;
						S.timeLeft = 30;
						Explosion.currentTime = 0;
						Explosion.play();
						
					}
				}
			}
		}
	}
}