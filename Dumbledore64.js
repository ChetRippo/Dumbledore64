 /*
	GANGNAM STYLE GANGNAM STYLE GANGNAM STYLE GANGNAM STYLE GANGNAM STYLE GANGNAM STYLE GANGNAM STYLE GANGNAM STYLE GANGNAM STYLE GANGNAM STYLE GANGNAM STYLE GANGNAM STYLE
	Version 0.9.3 Changes(11/22/2012):
		--Misc Update--
		-Additions:
			-CHRISTMAS GRAPHICS
			-Teleport animation changed
			-New score markers
		-Balancing:
		-Bug fixes:
			
	TODO:
		-Bugs/Other
			-High Priority:
				-fix tutorial
				-element rarities based on level/gameplay
				-Redo mystics (all mystics have mirage effect, mystic2 = confusion beam
			-Backlog:
				-array everything on screen and draw them e.g.
					-onscreens[1] = {fire, fire fns}
				-general draw functions for all level stuff
				-shortcuts
				-stunned text pops up when already stunned
				-scorpions can try to hit you facing the wrong way (make them face based on you not target)
				-Ice spells make jungle trees transparent *Don't know how to fix yet*
				-Make multiples of sound effects so that hitting a bunch of people wont clip it (pierce through shots etc)
				-sound for mummy spawn and wrapping change
				-unlock bgm
				-thief boss dies offscreen + powerup unreachable
				-Changing modified beams causes all beams on screen to change
			-Maybe issues:
				-All ice slows do not end stun when enemy out of range
				-light2 slows frame rate (light and light2 inefficient)
				-Loading bar doesn't preload everything (sounds, only 400 graphics, load graphics, etc)
				-too many assets
				-icelightning technically deletes enemies before frame loops:
					ex: dash (or any spell run after webs) and hit enemy at exact time it hits icelightning will not dmg it
	GENERAL:
		-Spells
			-???
		-Level select?
		-Optimize
			-Make speeds a list of factors so that multiple things can effect it easier (velocity?)
		-Terrain/levels
			-Tier 3: Swamp, Desert, Graveyard
				-Graveyard level
					-Day/night cycle
			-Tier 4: Cave, Ice
				-Cave level
					-Dark, moonlight effect, can see enemy eyes
				-Ice level
			-Tier 5: Final level
				-multiplayer background?, 3 spell slots, cast pure spell of each element to beat giant boss?
	NOTES:
		-reset badwizards song on every boss
		-music tracks- possible = multiplayer, seeker, arcane bits and pieces
*/
//------------------------------------------------- Player --------------------------------------------------------------------------//
// Player
var player = {
	x: 400,
	y: 256,
	width: 32,
	height: 32,
	speed: 8,
	speed2: 2,
	dirct: 0,
	hp: 3,
	maxhp: 3,
	power: 1,
	currpower: 1,
	dmg: false,
	dir: "W",
	LR: "",
	zapIndex: 1,
	lucky: false,
	shadowed: false,
	regen: false,
	regenFrame: 0,
	knocked: 0,
	knockDir: "",
	stunTimer: 0,
	// Draws the player on the canvas when called
	draw: function(){
		// Flash if the player has been hit
		if (hptimer*0.5 != Math.round(hptimer*0.5)){
			if(this.dir == "A" || 65 in keysDown){
				this.LR = "Left";
				ctx.drawImage(Wizzurd2, this.x - this.width * 0.5, this.y - this.height * 0.5, this.width, this.height);
			}
			else if(this.dir == "D" || 68 in keysDown){
				ctx.drawImage(Wizzurd2R, this.x - this.width * 0.5, this.y - this.height * 0.5, this.width, this.height);
				this.LR = "Right";
			}
			else if(this.LR == "Left"){
				ctx.drawImage(Wizzurd2, this.x - this.width * 0.5, this.y - this.height * 0.5, this.width, this.height);
			}
			else{
				ctx.drawImage(Wizzurd2R, this.x - this.width * 0.5, this.y - this.height * 0.5, this.width, this.height);
			}
		}
		else if(waterlightning.onScreen){
			if(this.dir == "A" || 65 in keysDown){
				this.LR = "Left";
				ctx.drawImage(ZapTrapL[this.zapIndex], this.x - this.width * 0.5, this.y - this.height * 0.5, this.width, this.height);
			}
			else if(this.dir == "D" || 68 in keysDown){
				ctx.drawImage(ZapTrapR[this.zapIndex], this.x - this.width * 0.5, this.y - this.height * 0.5, this.width, this.height);
				this.LR = "Right";
			}
			else if(this.LR == "Left"){
				ctx.drawImage(ZapTrapL[this.zapIndex], this.x - this.width * 0.5, this.y - this.height * 0.5, this.width, this.height);
			}
			else{
				ctx.drawImage(ZapTrapR[this.zapIndex], this.x - this.width * 0.5, this.y - this.height * 0.5, this.width, this.height);
			}
			this.zapIndex++;
			if(this.zapIndex > 5){
				this.zapIndex = 1;
			}
		}
		else{
			if(this.dir == "A" || 65 in keysDown){
				this.LR = "Left";
				//Check speed instead of water collision to use less system shit
				if(this.speed ==4 && STATE == "Swamp" && obstacle24.swampBoardindex == 102){
					ctx.drawImage(swimWizzL, this.x - this.width * 0.5, this.y - this.height * 0.5, this.width, this.height);
				}
				else if(STATE == "Jungle" && player.shadowed){
					ctx.drawImage(shadeWizzL, this.x - this.width * 0.5, this.y - this.height * 0.5, this.width, this.height);
				}
				else{
					ctx.drawImage(WizzurdL, this.x - this.width * 0.5, this.y - this.height * 0.5, this.width, this.height);
				}
			}
			else if(this.dir == "D" || 68 in keysDown){
				if(this.speed ==4 && STATE == "Swamp" && obstacle24.swampBoardindex == 102){
					ctx.drawImage(swimWizzR, this.x - this.width * 0.5, this.y - this.height * 0.5, this.width, this.height);
				}
				else if(STATE == "Jungle" && player.shadowed){
					ctx.drawImage(shadeWizzR, this.x - this.width * 0.5, this.y - this.height * 0.5, this.width, this.height);
				}
				else{
					ctx.drawImage(WizzurdR, this.x - this.width * 0.5, this.y - this.height * 0.5, this.width, this.height);
				}
				this.LR = "Right";
			}
			else if(this.LR == "Left"){
				if(this.speed ==4 && STATE == "Swamp" && obstacle24.swampBoardindex == 102){
					ctx.drawImage(swimWizzL, this.x - this.width * 0.5, this.y - this.height * 0.5, this.width, this.height);
				}
				else if(STATE == "Jungle" && player.shadowed){
					ctx.drawImage(shadeWizzL, this.x - this.width * 0.5, this.y - this.height * 0.5, this.width, this.height);
				}
				else{
					ctx.drawImage(WizzurdL, this.x - this.width * 0.5, this.y - this.height * 0.5, this.width, this.height);
				}
			}
			else{
				if(this.speed ==4 && STATE == "Swamp" && obstacle24.swampBoardindex == 102){
					ctx.drawImage(swimWizzR, this.x - this.width * 0.5, this.y - this.height * 0.5, this.width, this.height);
				}
				else if(STATE == "Jungle" && player.shadowed){
					ctx.drawImage(shadeWizzR, this.x - this.width * 0.5, this.y - this.height * 0.5, this.width, this.height);
				}
				else{
					ctx.drawImage(WizzurdR, this.x - this.width * 0.5, this.y - this.height * 0.5, this.width, this.height);
				}
			}
		}
		if(!this.shadowed){
			hpBarDraw(this);
		}
	},
	//onhit: determines enemy collisions and handles hp regen
	onhit: function(){
		if(this.dirct > 0){
			this.dirct-=1;
		}
		if(this.stunTimer > 0){
			this.stunTimer-=1;
			if(this.stunTimer == 0){
				this.speed = this.speed2*4;
			}
		}
		//slow player
		if(STATE == "Desert"){
			for(E in AllEnemies){
				if((collision(AllEnemies[E].dir, AllEnemies[E], this) || collision(this.dir, this, AllEnemies[E])) && this.stunTimer < 40 && AllEnemies[E].type == 0 && AllEnemies[E].castIndex >= 11 && AllEnemies[E].castIndex <= 17){
					this.speed = this.speed2*2;
					this.stunTimer = 45;
					for(T in typemarkerlist){
						if(typemarkerlist[T].x == -100){
							typemarkerlist[T].text = "Stunned!";
							typemarkerlist[T].x = player.x-player.width*2;
							typemarkerlist[T].y = player.y;
							typemarkerlist[T].timeLeft = 20;
							break;
						}
					}
				}
			}
		}
		if(hptimer > 0){
			hptimer-=1;
		}
		else{
			for(E in AllEnemies){
				if((collision(AllEnemies[E].dir, AllEnemies[E], this) || collision(this.dir, this, AllEnemies[E])) && AllEnemies[E] != Lamp){
					if(AllEnemies[E].onTree == 0){
						this.knocked = 5;
						this.knockDir = AllEnemies[E].dir;
						if(darkwater.onScreen == 1){
							darkwater.hptimer = 20;
							darkwater.hp-=1;
							hptimer = 20;
							onHit(AllEnemies[E]);
						}
						else{
							onDmg.currentTime=0;
							onDmg.play();
							this.dmg = true;
							//boss achievements
							if(AllEnemies[E] == treeWizz || AllEnemies[E] == rootStrike || AllEnemies[E] == rootStrike2 || AllEnemies[E] == rootStrike3 || AllEnemies[E] == rootStrike4){
								AList[2] = false;
							}
							else if(AllEnemies[E].type == "Meteor" || AllEnemies[E].type == "Dragon" ||
								AllEnemies[E].type == "DragonL" || AllEnemies[E].type == "DragonR"){
								AList[3] = false;
							}
							else if(AllEnemies[E].type == "MasterThief" || (MasterThief.onScreen == 1 && AllEnemies[E].type == "Thief")){
								AList[4] = false;
							}
							else if(Genie.onScreen == 1){
								AList[5] = false;
							}
						}
					}
				}
			}
			for(E in EMeteors){
				if(EMeteors[E].index >= 21){
					if(collision(this.dir, this, EMeteors[E])){
						this.knocked = 5;
						//extra knockback
						if(EMeteors[E].LR == 1){
							if(!(this.y>=568)){
								this.y+=this.knocked*8;
								for(W in bubbleRotate){
									if(bubbleRotate[W].onScreen == 1){
										bubbleRotate[W].y+=this.knocked*8;
									}
								}
							}
							if(!(this.x>=792)){
								this.x+=this.knocked*8;
								for(W in bubbleRotate){
									if(bubbleRotate[W].onScreen == 1){
										bubbleRotate[W].x+=this.knocked*8;
									}
								}
							}
						}
						else{
							if(!(this.y>=568)){
								this.y+=this.knocked*8;
								for(W in bubbleRotate){
									if(bubbleRotate[W].onScreen == 1){
										bubbleRotate[W].y+=this.knocked*8;
									}
								}
							}
							if(!(this.x<=8)){
								this.x-=this.knocked*8;
								for(W in bubbleRotate){
									if(bubbleRotate[W].onScreen == 1){
										bubbleRotate[W].x-=this.knocked*8;
									}
								}
							}
						}
						this.knockDir = AllEnemies[E].dir;
						if(darkwater.onScreen == 1){
							darkwater.hptimer = 20;
							darkwater.hp-=1;
							hptimer = 20;
						}
						else{
							onDmg.currentTime=0;
							onDmg.play();
							this.dmg = true;
							if(Genie.onScreen == 1){
								AList[5] = false;
							}
						}
					}
				}
			}
			if(this.dmg == true){
				this.hp-=1;
				hptimer = 30;
				this.dmg = false;
			}
			else{
				this.hp = this.hp;
			}
		}
		//regen
		if(this.regen && this.hp < this.maxhp){
			this.regenFrame++;
			if(this.regenFrame == 210){
				this.regenFrame = 0;
				if(this.hp<this.maxhp){
					this.hp+=1;
					Pickup.currentTime=0;
					Pickup.play();
					for(T in typemarkerlist){
						if(typemarkerlist[T].x == -100){
							typemarkerlist[T].x = this.x-8;
							typemarkerlist[T].y = this.y;
							typemarkerlist[T].text = "+1";
							typemarkerlist[T].timeLeft = 20;
							typemarkerlist[T].regen = true;
							break;
						}
					}
				}
			}
			//draw hp regen bar
			ctx.fillStyle = "#0C9A16";
			ctx.strokeStyle = "black";
			ctx.strokeRect(this.x - this.width*0.5, this.y-this.height, this.width, this.height*0.15);
			ctx.fillRect(this.x - this.width*0.5, this.y-this.height, this.width*this.regenFrame/210, this.height*0.15);
		}
		//don't regen if full hp
		if(this.hp == this.maxhp){
			this.regenFrame = 0;
		}
	},
	//Handle speed, swamp only
	speedHandle: function(){
		if(STATE != "Desert"){
			for(O in obstacle1){
				if(obstacle1[O].LR == "Right"){
					obstacle1[O].x+=256;
					obstacle1[O].y-=64;
					obstacle1[O].width+=64;
				}
				else{
					obstacle1[O].x-=256;
					obstacle1[O].y-=64;
					obstacle1[O].width+=64;
				}
				if(collision(this.dir, this, obstacle1[O]) || ((collision("S", this, obstacle1[O]) || collision("A", this, obstacle1[O]) || collision("D", this, obstacle1[O])) && this.dir == "W")){
					this.speed = 8;
					var noswim = true;
				}
				if(obstacle1[O].LR == "Right"){
					obstacle1[O].x-=256;
					obstacle1[O].y+=64;
					obstacle1[O].width-=64;
				}
				else{
					obstacle1[O].x+=256;
					obstacle1[O].y+=64;
					obstacle1[O].width-=64;
				}
			}
			for(O in obstacle2){
				obstacle2[O].x+=32;
				obstacle2[O].y+=obstacle2[O].height*0.5;
				//collisions are weird on W because W returns true too much
				if(((this.dir == "A" || this.dir == "D" || this.dir == "S") && collision(this.dir, this, obstacle2[O])) ||
					(this.dir == "W" && (collision("S", this, obstacle2[O]) || collision("D", this, obstacle2[O]) || collision("A", this, obstacle2[O])))){
					this.speed = 8;
					var noswim = true;
				}
				obstacle2[O].x-=32;
				obstacle2[O].y-=obstacle2[O].height*0.5;
			}
			//check ob 24 to stop water effect before swamp water appears
			if(!noswim && obstacle24.swampBoardindex >= 90){
				this.speed = 4;
			}
		}
		else{
			for(S in Sandpits){
				Sandpits[S].x+=32;
				Sandpits[S].y+=32;
				if(collision("W", this, Sandpits[S]) || collision("D", this, Sandpits[S]) || collision("A", this, Sandpits[S]) || collision("S", this, Sandpits[S])){
					if(player.x > Sandpits[S].x){
						player.x-=4;
						for(W in bubbleRotate){
							if(bubbleRotate[W].onScreen == 1){
								bubbleRotate[W].x-=4;
							}
						}
					}
					if(player.x < Sandpits[S].x){
						player.x+=4;
						for(W in bubbleRotate){
							if(bubbleRotate[W].onScreen == 1){
								bubbleRotate[W].x+=4;
							}
						}
					}
					if(player.y > Sandpits[S].y){
						player.y-=4;
						for(W in bubbleRotate){
							if(bubbleRotate[W].onScreen == 1){
								bubbleRotate[W].y-=4;
							}
						}
					}
					if(player.y < Sandpits[S].y){
						player.y+=2;
						for(W in bubbleRotate){
							if(bubbleRotate[W].onScreen == 1){
								bubbleRotate[W].y+=2;
							}
						}
					}
				}
				Sandpits[S].x-=32;
				Sandpits[S].y-=32;
			}
		}
	},
	//knocks back player when hit
	knockBack: function(){
		if(this.knocked>0){
			var collisionObs = false;
			for(O in ObsList){
				if(collision(this.dir, this, ObsList[O])){
					collisionObs = true;
					break;
				}
			}
			if(!collisionObs){
				if((this.knockDir == "W" || this.knockDir == "WA" || this.knockDir == "WD") && !(this.y<=8)){
					this.y-=this.knocked*4;
					for(W in bubbleRotate){
						if(bubbleRotate[W].onScreen == 1){
							bubbleRotate[W].y-=this.knocked*4;
						}
					}
				}
				if((this.knockDir == "A" || this.knockDir == "WA" || this.knockDir == "AS") && !(this.x<=8)){
					this.x-=this.knocked*4;
					for(W in bubbleRotate){
						if(bubbleRotate[W].onScreen == 1){
							bubbleRotate[W].x-=this.knocked*4;
						}
					}
				}
				if((this.knockDir == "S" || this.knockDir == "SD" || this.knockDir == "AS") && !(this.y>=568)){
					this.y+=this.knocked*4;
					for(W in bubbleRotate){
						if(bubbleRotate[W].onScreen == 1){
							bubbleRotate[W].y+=this.knocked*4;
						}
					}
				}
				if((this.knockDir == "D" || this.knockDir == "SD" || this.knockDir == "WD") && !(this.x>=792)){
					this.x+=this.knocked*4;
					for(W in bubbleRotate){
						if(bubbleRotate[W].onScreen == 1){
							bubbleRotate[W].x+=this.knocked*4;
						}
					}
				}
			}
			this.knocked-=1;
		}
	}
};

// Blood particle 1
var bloodParticle1 = {
	x: 0,
	y: 0,
	width: 4,
	height: 4,
	speed: 4,
	onScreen: false,
	dir: "right",
	timerLeft: 15
};
var bloodParticle2 = {
	x: 0,
	y: 0,
	width: 4,
	height: 4,
	speed: 4,
	onScreen: false,
	dir: "rightD",
	timerLeft: 15
};
var bloodParticle3 = {
	x: 0,
	y: 0,
	width: 4,
	height: 4,
	speed: 4,
	onScreen: false,
	dir: "rightU",
	timerLeft: 15
};
var bloodParticle4 = {
	x: 0,
	y: 0,
	width: 4,
	height: 4,
	speed: 4,
	onScreen: false,
	dir: "rightD",
	timerLeft: 15
};
var bloodParticle5 = {
	x: 0,
	y: 0,
	width: 4,
	height: 4,
	speed: 4,
	onScreen: false,
	dir: "rightU",
	timerLeft: 15
};

var bloodList = {1: bloodParticle1, 2: bloodParticle2, 3: bloodParticle3, 4: bloodParticle4, 5: bloodParticle5};
var bloodDirR = {1: "right", 2: "rightU", 3: "rightD"};
var bloodDirL = {1: "left", 2: "leftU", 3: "leftD"};
var bloodDirU = {1: "up", 2: "upU", 3: "upD"};
var bloodDirD = {1: "down", 2: "downU", 3: "downD"};
function createBlood(B){
	for(b in bloodList){
		bloodList[b].onScreen = true;
		if(B.dir == "A"){
			bloodList[b].dir = bloodDirL[(Math.round(Math.random()*3)+1)];
		}
		else if(B.dir == "D"){
			bloodList[b].dir = bloodDirR[(Math.round(Math.random()*3)+1)];
		}
		else if(B.dir == "W"){
			bloodList[b].dir = bloodDirU[(Math.round(Math.random()*3)+1)];
		}
		else if(B.dir == "S"){
			bloodList[b].dir = bloodDirD[(Math.round(Math.random()*3)+1)];
		}
		else if(B.dir == "WA"){
			if(Math.round(Math.random()*1)){
				bloodList[b].dir = bloodDirU[(Math.round(Math.random()*3)+1)];
			}
			else{
				bloodList[b].dir = bloodDirL[(Math.round(Math.random()*3)+1)];
			}
		}
		else if(B.dir == "AS"){
			if(Math.round(Math.random()*1)){
				bloodList[b].dir = bloodDirD[(Math.round(Math.random()*3)+1)];
			}
			else{
				bloodList[b].dir = bloodDirL[(Math.round(Math.random()*3)+1)];
			}
		}
		else if(B.dir == "SD"){
			if(Math.round(Math.random()*1)){
				bloodList[b].dir = bloodDirD[(Math.round(Math.random()*3)+1)];
			}
			else{
				bloodList[b].dir = bloodDirR[(Math.round(Math.random()*3)+1)];
			}
		}
		else if(B.dir == "WD"){
			if(Math.round(Math.random()*1)){
				bloodList[b].dir = bloodDirU[(Math.round(Math.random()*3)+1)];
			}
			else{
				bloodList[b].dir = bloodDirR[(Math.round(Math.random()*3)+1)];
			}
		}
		bloodList[b].speed = Math.round(Math.random() * 8) + 4;
		var size = Math.round(Math.random() * 8) + 2;
		bloodList[b].height = size;
		bloodList[b].width = size;
		bloodList[b].timeLeft = 7;
		bloodList[b].x = B.x;
		bloodList[b].y = B.y;
	}
}

function drawBlood(p){
	if(p.onScreen){
		p.timeLeft-=1;
		if(p.timeLeft == 0){
			p.onScreen = false;
			p.x = 0;
			p.y = 0;
		}
		ctx.fillStyle = "#e22914";
		ctx.fillRect(p.x-p.width*0.5, p.y-p.height*0.5, p.width, p.height);
		if(p.dir == "right"){
			p.x+=p.speed;
		}
		if(p.dir == "rightU"){
			p.x+=p.speed;
			p.y-=p.speed*0.5;
		}
		if(p.dir == "rightD"){
			p.x+=p.speed;
			p.y+=p.speed*0.5;
		}
		if(p.dir == "left"){
			p.x-=p.speed;
		}
		if(p.dir == "leftU"){
			p.x-=p.speed;
			p.y-=p.speed*0.5;
		}
		if(p.dir == "leftD"){
			p.x-=p.speed;
			p.y+=p.speed*0.5;
		}
		if(p.dir == "up"){
			p.y-=p.speed;
		}
		if(p.dir == "upU"){
			p.x-=p.speed*0.5;
			p.y-=p.speed;
		}
		if(p.dir == "upD"){
			p.x+=p.speed*0.5;
			p.y-=p.speed;
		}
		if(p.dir == "down"){
			p.y+=p.speed;
		}
		if(p.dir == "downU"){
			p.x-=p.speed*0.5;
			p.y+=p.speed;
		}
		if(p.dir == "downD"){
			p.x+=p.speed*0.5;
			p.y+=p.speed;
		}
		p.height-=0.5;
		p.width-=0.5;
		if(p.height < 0 || p.width < 0){
			p.timeLeft = 1;
		}
	}
}
//----------------------------------------------- Casting Bar -----------------------------------------------------------------------//
var castingBar = {
	x: player.x - player.width*0.5,
	y: player.y + player.height*0.5,
	width: player.width,
	height: player.height*0.25,
	width2: 0,
	onScreen: 0,
	cast: -1,
	castmax: 0,
	draw: function(){
		this.x = player.x - player.width*0.5;
		this.y = player.y + player.height*0.5;
		if(this.onScreen == 1){
			ctx.fillStyle = "#0404B4";
			ctx.strokeStyle = "black";
			ctx.strokeRect(this.x, this.y, this.width, this.height);
			ctx.fillRect(this.x + 2, this.y + 2, this.width2, this.height - 2);
		}
	},
	tick: function(){
		if(this.cast > 0){
			player.speed = 0;
			this.cast-=1;
			this.width2 = this.cast/this.castmax * this.width;
		}
		if(this.cast == 0){
			this.cast-=1;
			player.speed = 8;
			this.onScreen = 0;
		}
	}
}
var TreecastingBar = {
	x: treeWizz.x - treeWizz.width*0.5,
	y: treeWizz.y + treeWizz.height*0.5,
	width: treeWizz.width,
	height: treeWizz.height*0.25,
	width2: 0,
	onScreen: 0,
	cast: -1,
	castmax: 0,
	draw: function(){
		this.x = treeWizz.x - treeWizz.width*0.5;
		this.y = treeWizz.y + treeWizz.height*0.5;
		if(this.onScreen == 1){
			ctx.fillStyle = "#0404B4";
			ctx.strokeStyle = "black";
			ctx.strokeRect(this.x, this.y, this.width, this.height);
			ctx.fillRect(this.x + 2, this.y + 2, this.width2, this.height - 2);
		}
	},
	tick: function(){
		if(this.cast > 0){
			treeWizz.speed = 0;
			this.cast-=1;
			this.width2 = this.cast/this.castmax * this.width;
		}
		if(this.cast == 0){
			this.cast-=1;
			treeWizz.speed = treeWizz.speed2*2;
			this.onScreen = 0;
		}
	}
}
var SorcCastingBar = {
	x: -100,
	y: -200,
	width: Sorceror.width,
	height: Sorceror.height*0.25,
	width2: 0,
	onScreen: 0,
	cast: -1,
	castmax: 0,
	draw: function(){
		this.x = Sorceror.x - Sorceror.width*0.5;
		this.y = Sorceror.y + Sorceror.height*0.5;
		if(this.onScreen == 1){
			ctx.fillStyle = "#0404B4";
			ctx.strokeStyle = "black";
			ctx.strokeRect(this.x, this.y, this.width, this.height);
			ctx.fillRect(this.x + 2, this.y + 2, this.width2, this.height - 2);
		}
	},
	tick: function(){
		if(this.cast > 0){
			Sorceror.speed = 0;
			this.cast-=1;
			this.width2 = this.cast/this.castmax * this.width;
		}
		if(this.cast == 0){
			this.cast-=1;
			Sorceror.speed = Sorceror.speed2*2;
			this.onScreen = 0;
		}
	}
}
//confuse bar
function confuseBarDraw(){
	for(E in AllEnemies){
		if(AllEnemies[E].good){
			ctx.fillStyle = "#0404B4";
			ctx.strokeStyle = "black";
			ctx.strokeRect(AllEnemies[E].x-AllEnemies[E].width*0.5, AllEnemies[E].y-AllEnemies[E].height-8, 32, 8);
			ctx.fillRect(AllEnemies[E].x-AllEnemies[E].width*0.5+2, AllEnemies[E].y-AllEnemies[E].height -6, 
						AllEnemies[E].goodTimer/AllEnemies[E].goodTimerMax * 32, 6);
		}
	}
}
//------------------------------------------------- Collision Detection -------------------------------------------------------------//
// Collision detection
function collision(dir, one, two){
	if(STATE == "Swamp"){
		if((one == obstacle11 || one == obstacle12 || one == obstacle13 || one == obstacle14 || one == obstacle15 || one == obstacle16 || one == obstacle17 || one == obstacle18 || 
			two == obstacle11 || two == obstacle12 || two == obstacle13 || two == obstacle14 || two == obstacle15 || two == obstacle16 || two == obstacle17 || two == obstacle18 ||
			two == obstacle21 || two == obstacle22 || two == obstacle23 || two == obstacle24 || one == obstacle21 || one == obstacle22 || one == obstacle23 || one == obstacle24)
			&& one != player && two != player && one != Croc && two != Croc && one != Croc2 && two != Croc2 && one != Enemy && two != Enemy && one != EnemyB && two != EnemyB){
			return false;
		}
	}
	if(STATE == "Jungle"){
		if(one == obstacle11 || one == obstacle12 || one == obstacle13 || one == obstacle14 || one == obstacle15 || one == obstacle16 || one == obstacle17 || one == obstacle18 || 
			two == obstacle11 || two == obstacle12 || two == obstacle13 || two == obstacle14 || two == obstacle15 || two == obstacle16 || two == obstacle17 || two == obstacle18){
			if(one.fallIndex == 46 || two.fallIndex == 46){
				return false;
			}
		}
	}
	if(dir == "W"){
		if(one.y <= two.y + two.height*0.5){
			return false;
		}
		if((one.x-one.width*0.5<two.x+two.width*0.5 && one.x+one.width*0.5>two.x-two.width*0.5) &&
			one.y - (one.height * 0.5) - one.speed < two.y + two.height * 0.5){
			return true;
		}else{
			return false;
		}
	}
	if(dir == "A" || dir == "AS" || dir == "WA"){
		if(one.x <= two.x - two.width*0.5){
			return false;
		}
		if((one.y-one.height*0.5 < two.y+two.height*0.5 && one.y+one.height*0.5>two.y-two.height*0.5) &&
			one.x - (one.width * 0.5) - one.speed < two.x + two.width * 0.5){
			return true;
		}else{
			return false;
		}
	}
	if(dir == "S"){
		if(one.y >= two.y + two.height*0.5){
			return false;
		}
		if((one.x-one.width*0.5 < two.x+two.width*0.5 && one.x+one.width*0.5>two.x-two.width*0.5) &&
			one.y + (one.height * 0.5) + one.speed > two.y - two.height * 0.5){
			return true;
		}else{
			return false;
		}
	}
	if(dir == "D" || dir == "WD" || dir == "SD"){
		if(one.x >= two.x + two.width*0.5){
			return false;
		}
		if((one.y-one.height*0.5 < two.y+two.height*0.5 && one.y+one.height*0.5>two.y-two.height*0.5) &&
			one.x + (one.height * 0.5) + one.speed > two.x - two.width * 0.5){
			return true;
		}else{
			return false;
		}
	}
	else{
		return contained(two, one);
	}
}

// Collision detection cont'd
function contained(a, b){
	var dist = Math.sqrt(((b.x - a.x)*(b.x - a.x)) + ((b.y - a.y)*(b.y - a.y)));
	if(dist <= b.width*0.5 || dist <= b.height*0.5 ||
		dist <= a.width*0.5 || dist <= a.height*0.5){
		return true;
	}
	else{
		return false;
	}
}
//dragon flame
function Hcontained(a, b){
	if(a.y >= b.y-b.height*0.5 && a.y <= b.y + b.height*0.5 && a.x <= b.x + b.width*0.5 && a.x >= b.x-b.width*0.5){
		return true;
	}
	else{
		return false;
	}
}
//------------------------------------------------------ Other Functions ------------------------------------------------------------//
//DiffDir for rootstrike
function DiffDir(dir){
	if(dir == "W"){
		if(Math.floor(Math.random() * 2) + 1 == 2){
			return "A";
		}
		else{
			return "D";
		}
	}
	else if(dir == "A"){
		if(Math.floor(Math.random() * 2) + 1 == 2){
			return "W";
		}
		else{
			return "S";
		}
	}
	else if(dir == "S"){
		if(Math.floor(Math.random() * 2) + 1 == 2){
			return "A";
		}
		else{
			return "D";
		}
	}
	else if(dir == "D"){
		if(Math.floor(Math.random() * 2) + 1 == 2){
			return "W";
		}
		else{
			return "S";
		}
	}
	else if(dir == "WD"){
		if(Math.floor(Math.random() * 2) + 1 == 2){
			return "WA";
		}
		else{
			return "SD";
		}
	}
	else if(dir == "AS"){
		if(Math.floor(Math.random() * 2) + 1 == 2){
			return "AS";
		}
		else{
			return "WA";
		}
	}
	else if(dir == "WA"){
		if(Math.floor(Math.random() * 2) + 1 == 2){
			return "AS";
		}
		else{
			return "WD";
		}
	}
	else if(dir == "SD"){
		if(Math.floor(Math.random() * 2) + 1 == 2){
			return "AS";
		}
		else{
			return "WD";
		}
	}
}
function hpBarDraw(H){
	if(H.hp > 0){
		var X = H.x - H.width*0.5;
		var Y = H.y - H.height*0.5 - H.height*0.25;
		if(H.type == "MegaMummy"){
			X = H.x;
			Y+=32;
		}
		if(H.type == "MasterThief"){
			X = H.x - H.width*0.25;
			Y = H.y - H.height*0.5;
		}
		else if(H.type == "DragonL" || H.type == "DragonR"){
			X = H.x - H.width*0.5 + 8;
			Y = H.y - H.height*0.5 - H.height*0.25 + 8;
		}
		else if(H.type == "Dragon"){
			X = H.x;
			Y = H.y - H.height*0.5 - 32;
		}
		else if(H.type == "Genie"){
			X = H.x -16;
			Y = H.y - H.height*0.5 - 144;
		}
		else if(H.type == "Anubis"){
			Y = H.y - H.height*0.5 - 64;
		}
		ctx.drawImage(hpBarGraphics[H.hp], X, Y);
	}
}
//------------------------------------------------- Point and Element Markers -------------------------------------------------------//
// Fancyness
var marker = {
	color: "#00FF00",
	speed: 4,
	timeLeft: 0,
	x: -100,
	y: -100,
	points: 0,
	mult: 1
};

var marker2 = {
	color: "#00FF00",
	speed: 4,
	timeLeft: 0,
	x: -100,
	y: -100,
	points: 0,
	mult: 1
};

var marker3 = {
	color: "#00FF00",
	speed: 4,
	timeLeft: 0,
	x: -100,
	y: -100,
	points: 0,
	mult: 1
};

var marker4 = {
	color: "#00FF00",
	speed: 4,
	timeLeft: 0,
	x: -100,
	y: -100,
	points: 0,
	mult: 1
};
var markerlist = {1: marker, 2: marker2, 3: marker3, 4: marker4};
var typemarker = {
	color: "#00FF00",
	speed: 4,
	timeLeft: 0,
	x: -100,
	y: -100,
	text: "",
	regen: false
};

var typemarker2 = {
	color: "#00FF00",
	speed: 4,
	timeLeft: 0,
	x: -100,
	y: -100,
	text: "",
	regen: false
};

var typemarker3 = {
	color: "#00FF00",
	speed: 4,
	timeLeft: 0,
	x: -100,
	y: -100,
	text: "",
	regen: false
};

var typemarker4 = {
	color: "#00FF00",
	speed: 4,
	timeLeft: 0,
	x: -100,
	y: -100,
	text: "",
	regen: false
};

var typemarker5 = {
	color: "#00FF00",
	speed: 4,
	timeLeft: 0,
	x: -100,
	y: -100,
	text: "",
	regen: false
};

var typemarker6 = {
	color: "#00FF00",
	speed: 4,
	timeLeft: 0,
	x: -100,
	y: -100,
	text: "",
	regen: false
};
var typemarkerlist = {1: typemarker, 2: typemarker2, 3: typemarker3, 4: typemarker4, 5: typemarker5, 6: typemarker6};
function drawtypeMarker(M){
	if(M.timeLeft == 0){
		M.x = -100;
		M.y = -100;
		M.regen = false;
	}
	if (M.timeLeft != 0){
		if(M.text == "+ Air" || M.text == "+ Time" || M.text == "Stunned!"){
			M.color = "#D0D0D0";
		}
		else if(M.text == "+ Fire"){
			M.color = "#CC0000";
		}
		else if(M.text == "+ Ice"){
			M.color = "#00FFFF";
		}
		else if(M.text == "+ Lightning"){
			M.color = "yellow";
		}
		else if(M.text == "+ Earth"){
			M.color = "#33FF00";
		}
		else if(M.text == "+ Mystic"){
			M.color = "#663399";
		}
		else if(M.text == "+ Water"){
			M.color = "#0000FF";
		}
		else if(M.text == "+ Dark"){
			M.color = "black";
		}
		else if(M.text == "+ Light"){
			M.color = "white";
		}
		else if(M.text == "Dead!"){
			M.color = "#CC0000";
		}
		else if(M.text == "Stolen!"){
			M.color = "yellow";
		}
		else if(M.text == "+1"){
			//if for player hp green else shield blue
			if(M.regen){
				M.color = "#33CC00";
			}
			else{
				M.color = "#00FFFF";
			}
		}
		else if(M.text == "+ Max Hp" || M.text == "+ Damage" || M.text == "+ Luck" || M.text == "+ Regen"){
			M.color = colorz[colorNum];
			colorNum++;
			if(colorNum > 6){
				colorNum = 1;
			}
		}
		ctx.fillStyle = M.color;
		if(M.text == "+1"){
			ctx.font = "18pt Arial";
		}
		else{
			ctx.font = "32pt Arial";
		}
		ctx.fillText(M.text, M.x, M.y);
	}
}

function drawMarker(M){
	if(M.timeLeft == 0){
		M.x = -100;
		M.y = -100;
		M.speed = 4;
	}
	var offset = 0;
	var dispScore = M.points*M.mult+"";
	if(M.mult > 2){
		for(S in dispScore){
			ctx.drawImage(RedScore[dispScore[S]], M.x-32 +24*offset , M.y);
			offset++;
		}
		var exclams = M.mult - 3;
		while(exclams > 0){
			ctx.drawImage(RScoreBurstEx, M.x-32 +24*offset , M.y);
			offset++;
			exclams--;
		}
	}
	else if(M.mult > 1){
		for(S in dispScore){
			ctx.drawImage(OrangeScore[dispScore[S]], M.x-32 +24*offset , M.y);
			offset++;
		}
	}
	else{
		for(S in dispScore){
			ctx.drawImage(YellowScore[dispScore[S]], M.x-32 +24*offset , M.y);
			offset++;
		}
	}
}

function moveMarker(M){
	if (M.timeLeft > 0){
		M.y -= M.speed;
		M.timeLeft--;
	}
}
//------------------------------------------------- Keep Track of Score Multiplier --------------------------------------------------//
//Multiply
var multiply = function(){
	if(multtimer <= 0){
		staticm = 1;
	}
	else{
		multtimer-=1;
	}
}
//------------------------------------------------- Clear Canvas Each Frame ---------------------------------------------------------//
// Clear the canvas - draw a white rectangle over everything
var clear = function(){
// Border
if(ctx.globalAlpha == 1){
ctx.fillStyle = "white";
ctx.fillRect(0, 0, canvas.width, canvas.height);
}
	if(gameReady && STATE != 1 && STATE != "Jungle" && STATE != "Scorched" && STATE != "Swamp" && STATE != "Desert" && STATE != "Tutorial"
		&& STATE != 5 && STATE != 4){
		ctx.drawImage(menuBack, 0, 0);
	}
	else if(STATE == 5 || STATE == 4){
		ctx.drawImage(highscoreBack, 0, 0);
	}
	else if(STATE == 1 || STATE == "Tutorial"){
		ctx.drawImage(forestbkgs[Math.ceil(forestIndex/15)], 0, 0);
		forestIndex++;
		if(forestIndex>120){
			forestIndex = 1;
		}
	}
	else if(STATE == "Jungle"){
		ctx.drawImage(backGround2, 0, 0);
	}
	else if(STATE == "Scorched"){
		ctx.drawImage(FireBackGrounds[Math.ceil(firebkgIndex/15)], 0, 0);
		firebkgIndex++;
		if(firebkgIndex>60){
			firebkgIndex = 1;
		}
	}
	else if(STATE == "Desert"){
		ctx.drawImage(DesertBackground, 0, 0);
	}
	else if(STATE == "Swamp"){
		if(Swindex < 15){
			ctx.drawImage(backGround2, 0, 0);
			ctx.globalAlpha = Alpha*1/(60-swampIndex);
			ctx.drawImage(swampbkg1, 0, 0 - swampIndex*2.4);
			ctx.glonalAlpha = Alpha;
			Swindex++;
		}
		else if(Swindex < 30){
			ctx.drawImage(backGround2, 0, 0);
			ctx.globalAlpha = Alpha*1/(60-swampIndex);
			ctx.drawImage(swampbkg2, 0, 0- swampIndex*2.4);
			ctx.glonalAlpha = Alpha;
			Swindex++;
		}
		else if(Swindex < 45){
			ctx.drawImage(backGround2, 0, 0);
			ctx.globalAlpha = Alpha*1/(60-swampIndex);
			ctx.drawImage(swampbkg3, 0, 0- swampIndex*2.4);
			ctx.glonalAlpha = Alpha;
			Swindex++;
		}
		else if(Swindex < 60){
			ctx.drawImage(backGround2, 0, 0);
			ctx.globalAlpha = Alpha*1/(60-swampIndex);
			ctx.drawImage(swampbkg4, 0, 0- swampIndex*2.4);
			ctx.glonalAlpha = Alpha;
			Swindex++;
		}
		else{
			ctx.drawImage(backGround2, 0, 0);
			ctx.globalAlpha = Alpha*1/(60-swampIndex);
			ctx.drawImage(swampbkg1, 0, 0- swampIndex*2.4);
			ctx.glonalAlpha = Alpha;
			Swindex=0;
		}
	}
};
//----------------------------------------------------- Score -----------------------------------------------------------------------//
function SCORE(){
	var ScoreUI = Aes.Ctr.decrypt(Error, ErrorLogs, 256);
	var digits = 0;
	var i = 0;
	for(S in ScoreUI){
		digits++;
	}
	ctx.fillStyle = "#0a1655";
	if(player.x>=32 && player.y >=32 && player.x <= 96+16*(digits-2) && player.y <=84){
		ctx.globalAlpha = Alpha*0.6*0.1;
	}
	else{
		ctx.globalAlpha = Alpha*0.6;
	}
	ctx.fillRect(40, 32, 36+16*(digits-2), 28);
	if(player.x>=32 && player.y >=32 && player.x <= 96+16*(digits-2) && player.y <=84){
		ctx.globalAlpha = Alpha*0.1;
	}
	else{
		ctx.globalAlpha = Alpha;
	}
	ctx.drawImage(ScoreLeft, 32, 32);
	while(i <= digits){
		if(ScoreUI[i] == 0){
			ctx.drawImage(Scorezero, 44+16*i, 36);
		}
		else if(ScoreUI[i] == 1){
			ctx.drawImage(Scoreone, 44+16*i, 36);
		}
		else if(ScoreUI[i] == 2){
			ctx.drawImage(Scoretwo, 44+16*i, 36);
		}
		else if(ScoreUI[i] == 3){
			ctx.drawImage(Scorethree, 44+16*i, 36);
		}
		else if(ScoreUI[i] == 4){
			ctx.drawImage(Scorefour, 44+16*i, 36);
		}
		else if(ScoreUI[i] == 5){
			ctx.drawImage(Scorefive, 44+16*i, 36);
		}
		else if(ScoreUI[i] == 6){
			ctx.drawImage(Scoresix, 44+16*i, 36);
		}
		else if(ScoreUI[i] == 7){
			ctx.drawImage(Scoreseven, 44+16*i, 36);
		}
		else if(ScoreUI[i] == 8){
			ctx.drawImage(Scoreeight, 44+16*i, 36);
		}
		else if(ScoreUI[i] == 9){
			ctx.drawImage(Scorenine, 44+16*i, 36);
		}
		i++;
	}
	ctx.drawImage(ScoreRight, 44+16*(i-1), 32);
	ctx.globalAlpha = Alpha;
}
//--------------------------------------------- Keys and Activation -----------------------------------------------------------------//
// Key bindings
var keys = function(){
	if(keytimer > 0){
		keytimer-=1;
	}
	if(STATE == "PAUSE"){
		if (80 in keysDown && keytimer == 0){
			STATE = preSTATE;
			keytimer = 20;
			ctx.globalAlpha = Alpha;
		}
	}
	else if(player.hp>0){
		//Fix enemy snap
		player.x = Math.floor(player.x);
		player.y = Math.floor(player.y);
		if(Math.round(player.x/8) != player.x/8 && player.speed/8 == Math.round(player.speed/8)){
			player.x+=1;
			for(W in bubbleRotate){
				if(bubbleRotate[W].onScreen == 1){
					bubbleRotate[W].x+=1;
				}
			}
			for(W in wairParticles){
				if(wairParticles[W].onScreen == 1){
					wairParticles[W].x+=1;
				}
			}
		}
		if(Math.round(player.y/8) != player.y/8 && player.speed/8 == Math.round(player.speed/8)){
			player.y+=1;
			for(W in bubbleRotate){
				if(bubbleRotate[W].onScreen == 1){
					bubbleRotate[W].y+=1;
				}
			}
			for(W in wairParticles){
				if(wairParticles[W].onScreen == 1){
					wairParticles[W].y+=1;
				}
			}
		}
		var Up = true;
		var Down = true;
		var Left = true;
		var Right = true;
		if (80 in keysDown && keytimer == 0){
			preSTATE = STATE;
			STATE = "PAUSE";
			keytimer = 20;
		}
		if (87 in keysDown && player.dirct <= 0){
			player.dir = "W";
		}
		if (65 in keysDown && player.dirct <= 0){
			player.dir = "A";
		}
		if (83 in keysDown && player.dirct <= 0){
			player.dir = "S";
		}
		if (68 in keysDown && player.dirct <= 0){
			player.dir = "D";
		}
		if(87 in keysDown && player.dirct <= 0){
			if(STATE != "Swamp"){
				for(O in ObsList){
					if(collision("W", player, ObsList[O])){
						Up = false;
					}
				}
			}
		}
		if(68 in keysDown && player.dirct <= 0){
			if(STATE != "Swamp"){
				for(O in ObsList){
					if(collision("D", player, ObsList[O])){
						Right = false;
					}
				}
			}
		}
		if(83 in keysDown && player.dirct <= 0){
			if(STATE != "Swamp"){
				for(O in ObsList){
					if(collision("S", player, ObsList[O])){
						Down = false;
					}
				}
			}
		}
		if(65 in keysDown && player.dirct <= 0){
			if(STATE != "Swamp"){
				for(O in ObsList){
					if(collision("A", player, ObsList[O])){
						Left = false;
					}
				}
			}
		}
		if ((87 in keysDown || (player.dirct > 0 && player.dir == "W")) && player.y - player.speed > 4 && Up == true){
			if(player.dirct <= 0 || player.dir == "W"){
				player.y-=player.speed;
				for(W in bubbleRotate){
					if(bubbleRotate[W].onScreen == 1){
						bubbleRotate[W].y-=player.speed;
					}
				}
				for(W in wairParticles){
					if(wairParticles[W].onScreen == 1){
						wairParticles[W].y-=player.speed;
					}
				}
				player.dir = "W";
			}
		}
		if ((65 in keysDown || (player.dirct > 0 && player.dir == "A")) && player.x - player.speed > 4 && Left == true){
			if(player.dirct <= 0 || player.dir == "A"){
				player.x-=player.speed;
				for(W in bubbleRotate){
					if(bubbleRotate[W].onScreen == 1){
						bubbleRotate[W].x-=player.speed;
					}
				}
				for(W in wairParticles){
					if(wairParticles[W].onScreen == 1){
						wairParticles[W].x-=player.speed;
					}
				}
				player.dir = "A";
			}
		}
		if ((83 in keysDown || (player.dirct > 0 && player.dir == "S")) && player.y + player.speed < canvas.height - 4 && Down == true){
			if(player.dirct <= 0 || player.dir == "S"){
				player.y+=player.speed;
				for(W in bubbleRotate){
					if(bubbleRotate[W].onScreen == 1){
						bubbleRotate[W].y+=player.speed;
					}
				}
				for(W in wairParticles){
					if(wairParticles[W].onScreen == 1){
						wairParticles[W].y+=player.speed;
					}
				}
				player.dir = "S";
			}
		}
		if ((68 in keysDown || (player.dirct > 0 && player.dir == "D")) && player.x + player.speed < canvas.width - 4 && Right == true){
			if(player.dirct <= 0 || player.dir == "D"){
				player.x+=player.speed;
				for(W in bubbleRotate){
					if(bubbleRotate[W].onScreen == 1){
						bubbleRotate[W].x+=player.speed;
					}
				}
				for(W in wairParticles){
					if(wairParticles[W].onScreen == 1){
						wairParticles[W].x+=player.speed;
					}
				}
				player.dir = "D";
			}
		}
		if (37 in keysDown && 38 in keysDown){
			bullet.shoot("WA", 4, 4);
		}	
		if (37 in keysDown && 40 in keysDown){
			bullet.shoot("AS", 4, 4);
		}	
		if (39 in keysDown && 40 in keysDown){
			bullet.shoot("SD", 4, 4);
		}	
		if (38 in keysDown && 39 in keysDown){
			bullet.shoot("WD", 4, 4);
		}	
		if (38 in keysDown){
			bullet.shoot("W", 32, 4);
		}	
		if (37 in keysDown){
			bullet.shoot("A", 4, 32);
		}	
		if (40 in keysDown){
			bullet.shoot("S", 32, 4);
		}	
		if (39 in keysDown){
			bullet.shoot("D", 4, 32);
		}
		if(81 in keysDown){
			if(spell1 != "N/A"){
				if(prevSpellRC[1] == "N/A"){
					prevSpellRC[1] = spell;
				}
				else if(prevSpellRC[2] == "N/A"){
					prevSpellRC[2] = spell;
				}
				else if(prevSpellRC[3] == "N/A"){
					prevSpellRC[3] = spell;
				}
				else if(prevSpellRC[4] == "N/A"){
					prevSpellRC[4] = spell;
				}
				else if(prevSpellRC[5] == "N/A"){
					prevSpellRC[5] = spell;
				}
				else if(prevSpellRC[6] == "N/A"){
					prevSpellRC[6] = spell;
				}
				else if(prevSpellRC[7] == "N/A"){
					prevSpellRC[7] = spell;
				}
				else if(prevSpellRC[8] == "N/A"){
					prevSpellRC[8] = spell;
				}
				spell1 = "N/A";
				spell = spell2;
			}
		}
		if(69 in keysDown){
			if(spell2 != "N/A"){
				if(prevSpellRC[1] == "N/A"){
					prevSpellRC[1] = spell;
				}
				else if(prevSpellRC[2] == "N/A"){
					prevSpellRC[2] = spell;
				}
				else if(prevSpellRC[3] == "N/A"){
					prevSpellRC[3] = spell;
				}
				else if(prevSpellRC[4] == "N/A"){
					prevSpellRC[4] = spell;
				}
				else if(prevSpellRC[5] == "N/A"){
					prevSpellRC[5] = spell;
				}
				else if(prevSpellRC[6] == "N/A"){
					prevSpellRC[6] = spell;
				}
				else if(prevSpellRC[7] == "N/A"){
					prevSpellRC[7] = spell;
				}
				else if(prevSpellRC[8] == "N/A"){
					prevSpellRC[8] = spell;
				}
				spell2 = "N/A";
				spell = spell1;
			}
		}
		if(32 in keysDown && spell1 != "N/A" && spell2 == "N/A"){
			if(spell1 == "Fire"){
				fire.shoot();
			}
			if(spell1 == "Ice"){
				ice.shoot();
			}
			if(spell1 == "Earth"){
				earth.shoot();
			}
			if(spell1 == "Lightning"){
				lightning.shoot();
			}
			if(spell1 == "Air"){
				air.shoot();
			}
			if(spell1 == "Mystic"){
				mystic.shoot();
			}
			if(spell1 == "Water"){
				water.shoot();
			}
			if(spell1 == "Dark"){
				dark.shoot();
			}
			if(spell1 == "Light"){
				light.shoot();
			}
		}
		if(32 in keysDown && spell2 != "N/A" && spell1 == "N/A"){
			if(spell2 == "Fire"){
				fire.shoot();
			}
			if(spell2 == "Ice"){
				ice.shoot();
			}
			if(spell2 == "Earth"){
				earth.shoot();
			}
			if(spell2 == "Lightning"){
				lightning.shoot();
			}
			if(spell2 == "Air"){
				air.shoot();
			}
			if(spell2 == "Mystic"){
				mystic.shoot();
			}
			if(spell2 == "Water"){
				water.shoot();
			}
			if(spell2 == "Dark"){
				dark.shoot();
			}
			if(spell2 == "Light"){
				light.shoot();
			}
		}
		if(32 in keysDown && spell1 != "N/A" && spell2 != "N/A"){
			if(spell1 == "Fire" && spell2 == "Fire"){
				fire2.shoot();
			}
			if((spell1 == "Ice" && spell2 == "Fire") || (spell1 == "Fire" && spell2 == "Ice")){
				fireice.shoot();
			}
			if(spell1 == "Ice" && spell2 == "Ice"){
				ice2.shoot();
			}
			if(spell1 == "Earth" && spell2 == "Earth"){
				earth2.shoot();
			}
			if((spell1 == "Earth" && spell2 == "Ice") || (spell2 == "Earth" && spell1 == "Ice")){
				iceheal.shoot();
			}
			if((spell1 == "Fire" && spell2 == "Earth") || (spell2 == "Fire" && spell1 == "Earth")){
				fireheal.shoot();
			}
			if(spell1 == "Lightning" && spell2 == "Lightning"){
				lightning2.shoot();
			}
			if((spell1 == "Fire" && spell2 == "Lightning") || (spell2 == "Fire" && spell1 == "Lightning")){
				firelightning.shoot();
			}
			if((spell1 == "Ice" && spell2 == "Lightning") || (spell2 == "Ice" && spell1 == "Lightning")){
				icelightning.shoot();
			}
			if((spell1 == "Earth" && spell2 == "Lightning") || (spell2 == "Earth" && spell1 == "Lightning")){
				lightningheal.shoot();
			}
			if(spell1 == "Air" && spell2 == "Air"){
				air2.shoot();
			}
			if((spell1 == "Air" && spell2 == "Fire") || (spell2 == "Air" && spell1 == "Fire")){
				airfire.shoot();
			}
			if((spell1 == "Air" && spell2 == "Ice") || (spell2 == "Air" && spell1 == "Ice")){
				airice.shoot();
			}
			if((spell1 == "Air" && spell2 == "Lightning") || (spell2 == "Air" && spell1 == "Lightning")){
				airlightning.shoot();
			}
			if((spell1 == "Air" && spell2 == "Earth") || (spell2 == "Air" && spell1 == "Earth")){
				airearth.shoot();
			}
			if(spell1 == "Mystic" && spell2 == "Mystic"){
				mystic2.shoot();
			}
			if((spell1 == "Mystic" && spell2 == "Earth") || (spell2 == "Mystic" && spell1 == "Earth")){
				mysticearth.shoot();
			}
			if((spell1 == "Mystic" && spell2 == "Fire") || (spell2 == "Mystic" && spell1 == "Fire")){
				mystic.shoot();
			}
			if((spell1 == "Mystic" && spell2 == "Ice") || (spell2 == "Mystic" && spell1 == "Ice")){
				mystic.shoot();
			}
			if((spell1 == "Mystic" && spell2 == "Lightning") || (spell2 == "Mystic" && spell1 == "Lightning")){
				mystic.shoot();
			}
			if((spell1 == "Mystic" && spell2 == "Air") || (spell2 == "Mystic" && spell1 == "Air")){
				mystic.shoot();
			}
			if(spell1 == "Water" && spell2 == "Water"){
				water.shoot();
			}
			if((spell1 == "Water" && spell2 == "Earth") || (spell2 == "Water" && spell1 == "Earth")){
				waterearth.shoot();
			}
			if((spell1 == "Water" && spell2 == "Fire") || (spell2 == "Water" && spell1 == "Fire")){
				waterfire.shoot();
			}
			if((spell1 == "Water" && spell2 == "Ice") || (spell2 == "Water" && spell1 == "Ice")){
				waterfire.shoot();
			}
			if((spell1 == "Water" && spell2 == "Lightning") || (spell2 == "Water" && spell1 == "Lightning")){
				waterlightning.shoot();
			}
			if((spell1 == "Water" && spell2 == "Air") || (spell2 == "Water" && spell1 == "Air")){
				waterair.shoot();
			}
			if((spell1 == "Water" && spell2 == "Mystic") || (spell2 == "Water" && spell1 == "Mystic")){
				mystic.shoot();
			}
			if(spell1 == "Dark" && spell2 == "Dark"){
				dark2.shoot();
			}
			if((spell1 == "Dark" && spell2 == "Earth") || (spell2 == "Dark" && spell1 == "Earth")){
				darkearth.shoot();
			}
			if((spell1 == "Dark" && spell2 == "Fire") || (spell2 == "Dark" && spell1 == "Fire")){
				darkfire.shoot();
			}
			if((spell1 == "Dark" && spell2 == "Ice") || (spell2 == "Dark" && spell1 == "Ice")){
				darkice.shoot();
			}
			if((spell1 == "Dark" && spell2 == "Lightning") || (spell2 == "Dark" && spell1 == "Lightning")){
				darklightning.shoot();
			}
			if((spell1 == "Dark" && spell2 == "Air") || (spell2 == "Dark" && spell1 == "Air")){
				darkair.shoot();
			}
			if((spell1 == "Dark" && spell2 == "Mystic") || (spell2 == "Dark" && spell1 == "Mystic")){
				mystic.shoot();
			}
			if((spell1 == "Dark" && spell2 == "Water") || (spell2 == "Dark" && spell1 == "Water")){
				darkwater.shoot();
			}
			if(spell1 == "Light" && spell2 == "Light"){
				light2.shoot();
			}
			if((spell1 == "Light" && spell2 == "Fire") || (spell2 == "Light" && spell1 == "Fire")){
				lightfire.shoot();
			}
			if((spell1 == "Light" && spell2 == "Ice") || (spell2 == "Light" && spell1 == "Ice")){
				lightice.shoot();
			}
			if((spell1 == "Light" && spell2 == "Earth") || (spell2 == "Light" && spell1 == "Earth")){
				lightearth.shoot();
			}
			if((spell1 == "Light" && spell2 == "Lightning") || (spell2 == "Light" && spell1 == "Lightning")){
				lightlightning.shoot();
			}
			if((spell1 == "Light" && spell2 == "Air") || (spell2 == "Light" && spell1 == "Air")){
				lightair.shoot();
			}
			if((spell1 == "Light" && spell2 == "Mystic") || (spell2 == "Light" && spell1 == "Mystic")){
				mystic.shoot();
			}
			if((spell1 == "Light" && spell2 == "Water") || (spell2 == "Light" && spell1 == "Water")){
				lightwater.shoot();
			}
			if((spell1 == "Light" && spell2 == "Dark") || (spell2 == "Light" && spell1 == "Dark")){
				lightdark.shoot();
			}
		}
	}
};
//---------------------------------------------------------- Music Player -----------------------------------------------------------//
function MusicPlayer(){
if(Music==2 && STATE != "PAUSE"){
	if(STATE == 1 && treeWizz.onScreen == 0 && Dragon.onScreen == 0){
		DumblebeatsNormal.pause();
		Spells.pause();
		BadWizards.pause();
		swampSong.pause();
		CaseysQuest.pause();
		DesertSong.pause();
		OverwhelmedByGoblins.play();
	}
	else if(STATE == "Jungle" && MasterThief.onScreen == 0){
		OverwhelmedByGoblins.pause();
		Spells.pause();
		BadWizards.pause();
		swampSong.pause();
		CaseysQuest.pause();
		DesertSong.pause();
		if(hpUp.x == -100){
			DumblebeatsNormal.play();
			SoothingSound.pause();
			SoothingSound.currentTime = 0;
		}
		else{
			SoothingSound.play();
		}
	}
	else if(treeWizz.onScreen==1 && STATE == 1){
		OverwhelmedByGoblins.pause();
		Spells.pause();
		DumblebeatsNormal.pause();
		swampSong.pause();
		CaseysQuest.pause();
		DesertSong.pause();
		BadWizards.play();
	}
	else if(Dragon.onScreen==1 && STATE == 1){
		OverwhelmedByGoblins.pause();
		Spells.pause();
		DumblebeatsNormal.pause();
		CaseysQuest.pause();
		swampSong.pause();
		DesertSong.pause();
		BadWizards.play();
	}
	else if(MasterThief.onScreen==1 && STATE == "Jungle"){
		OverwhelmedByGoblins.pause();
		Spells.pause();
		DumblebeatsNormal.pause();
		CaseysQuest.pause();
		swampSong.pause();
		DesertSong.pause();
		BadWizards.play();
	}
	else if(Genie.onScreen==1 && STATE == "Scorched"){
		OverwhelmedByGoblins.pause();
		Spells.pause();
		DumblebeatsNormal.pause();
		CaseysQuest.pause();
		swampSong.pause();
		DesertSong.pause();
		BadWizards.play();
	}
	else if(STATE=="Scorched"){
		OverwhelmedByGoblins.pause();
		Spells.pause();
		DumblebeatsNormal.pause();
		BadWizards.pause();
		swampSong.pause();
		DesertSong.pause();
		if(hpUp.x == -100){
			CaseysQuest.play();
			SoothingSound.pause();
			SoothingSound.currentTime = 0;
		}
		else{
			SoothingSound.play();
		}
	}
	else if(STATE=="Swamp"){
		OverwhelmedByGoblins.pause();
		Spells.pause();
		DumblebeatsNormal.pause();
		BadWizards.pause();
		CaseysQuest.pause();
		DesertSong.pause();
		if(hpUp.x == -100){
			swampSong.play();
			SoothingSound.pause();
			SoothingSound.currentTime = 0;
		}
		else{
			SoothingSound.play();
		}
	}
	else if(STATE=="Desert"){
		OverwhelmedByGoblins.pause();
		Spells.pause();
		DumblebeatsNormal.pause();
		BadWizards.pause();
		CaseysQuest.pause();
		if(hpUp.x == -100){
			DesertSong.play();
			SoothingSound.pause();
			SoothingSound.currentTime = 0;
		}
		else{
			SoothingSound.play();
		}
	}
	else{
		DumblebeatsNormal.pause();
		OverwhelmedByGoblins.pause();
		BadWizards.pause();
		CaseysQuest.pause();
		Spells.play();
		swampSong.pause();
		DesertSong.pause();
	}
}
}
//---------------------------------------------------------- Big-Bang ---------------------------------------------------------------//
setInterval(function(){
	if(STATE == "Swamp" && !swampFront){
		clear();
	}
	else{
		clear();
	}
	MusicPlayer();
	if(STATE == 0){
		Menu.draw();
		if(dim == 2){
			ctx.globalAlpha = Alpha*0.25;
			ctx.fillStyle = "#FF0000";
			ctx.fillRect(0,0,400,576);
			ctx.fillStyle = "#000099";
			ctx.fillRect(400,0,400,576);
			ctx.globalAlpha = Alpha;
		}
	}
	else if(STATE == 2){
		Info.draw();
		if(dim == 2){
			ctx.globalAlpha = Alpha*0.25;
			ctx.fillStyle = "#FF0000";
			ctx.fillRect(0,0,400,576);
			ctx.fillStyle = "#000099";
			ctx.fillRect(400,0,400,576);
			ctx.globalAlpha = Alpha;
		}
	}
	else if(STATE == 3){
		Credits.draw();
		if(dim == 2){
			ctx.globalAlpha = Alpha*0.25;
			ctx.fillStyle = "#FF0000";
			ctx.fillRect(0,0,400,576);
			ctx.fillStyle = "#000099";
			ctx.fillRect(400,0,400,576);
			ctx.globalAlpha = Alpha;
		}
	}
	else if(STATE == 4 || STATE == 5){
		gameOver();
		if(dim == 2){
			ctx.globalAlpha = Alpha*0.25;
			ctx.fillStyle = "#FF0000";
			ctx.fillRect(0,0,400,576);
			ctx.fillStyle = "#000099";
			ctx.fillRect(400,0,400,576);
			ctx.globalAlpha = Alpha;
		}
	}
	else if(STATE == "PAUSE"){
		keys();
		Pause.draw();
		if(dim == 2){
			ctx.globalAlpha = Alpha*0.25;
			ctx.fillStyle = "#FF0000";
			ctx.fillRect(0,0,400,576);
			ctx.fillStyle = "#000099";
			ctx.fillRect(400,0,400,576);
			ctx.globalAlpha = Alpha;
		}
	}
	else if(STATE == 6){
		Options.draw();
		if(dim == 2){
			ctx.globalAlpha = Alpha*0.25;
			ctx.fillStyle = "#FF0000";
			ctx.fillRect(0,0,400,576);
			ctx.fillStyle = "#000099";
			ctx.fillRect(400,0,400,576);
			ctx.globalAlpha = Alpha;
		}
	}
	else{
		if(deathTimer > 0){
			deathTimer-=1;
		}
		if(deathTimer == 0){
			deathTimer-=1;
			Alpha = 1;
			STATE = 4;
		}
		if(player.hp <= 0){
			if(nu != 1){
				deathTimer = 30;
				typemarker3.x = player.x-player.width*0.5 - 32;
				typemarker3.y = player.y-player.height*0.5;
				typemarker3.timeLeft = 30;
				typemarker3.text = "Dead!";
				player.x = 5000;
				player.y = -5000;
				earth.cast = -1;
				earth2.cast = -1;
				lightning.cast = -1;
				lightning2.cast = -1;
				firelightning.cast = -1;
				dark2.cast = -1;
				airice.cast = -1;
				ice.cast = -1;
				fire.cast = -1;
				air.cast = -1;
				mystic.cast = -1;
				water.cast = -1;
				darkwater.cast = -1;
				lightearth.cast = -1;
				castingBar.x = player.x - player.width*0.5;
				castingBar.y = player.y + player.height*0.5;
				castingBar.width = player.width;
				castingBar.height = player.height*0.25;
				castingBar.width2 = 0;
				castingBar.onScreen = 0;
				castingBar.cast = -1;
				castingBar.castmax = 0;
			}
			nu = 1;
		}
		ctx.globalAlpha = Alpha;
		keys();
		multiply();
		if(STATE == "Tutorial"){
			AllEnemies = {1: Enemy, 2: EnemyA};
			
			ctx.drawImage(MoveShoot, 0, 0);
			if(87 in keysDown){
				ctx.drawImage(WPress, 0, 0);
				moved = true;
			}
			if(65 in keysDown){
				ctx.drawImage(APress, 0, 0);
				moved = true;
			}
			if(83 in keysDown){
				ctx.drawImage(SPress, 0, 0);
				moved = true;
			}
			if(68 in keysDown){
				ctx.drawImage(DPress, 0, 0);
				moved = true;
			}
			if(38 in keysDown && 37 in keysDown){
				ctx.drawImage(WAShootTut, 0, 0);
				shot = true;
			}
			else if(38 in keysDown && 39 in keysDown){
				ctx.drawImage(WDShootTut, 0, 0);
				shot = true;
			}
			else if(37 in keysDown && 40 in keysDown){
				ctx.drawImage(ASShootTut, 0, 0);
				shot = true;
			}
			else if(40 in keysDown && 39 in keysDown){
				ctx.drawImage(SDShootTut, 0, 0);
				shot = true;
			}
			else{
				if(38 in keysDown){
					ctx.drawImage(WShootTut, 0, 0);
					shot = true;
				}
				if(37 in keysDown){
					ctx.drawImage(AShootTut, 0, 0);
					shot = true;
				}
				if(40 in keysDown){
					ctx.drawImage(SShootTut, 0, 0);
					shot = true;
				}
				if(39 in keysDown){
					ctx.drawImage(DShootTut, 0, 0);
					shot = true;
				}
			}
			ctx.drawImage(EnterSkip, 0, 0);
			if(13 in keysDown && keytimer <= 0){
				redCube.x = -100;
				redCube.y = -200;
				greyCube.x = -100;
				greyCube.y = -200;
				Enemy.movement = false;
				Enemy.onScreen = 0;
				Enemy.x = 9000;
				Enemy.y = -400;
				EnemyA.movement = false;
				EnemyA.onScreen = 0;
				EnemyA.x = -9000;
				EnemyA.y = -9000;
				TutKill1 = true;
				TutKill2 = true;
				ctx.drawImage(EnterSkipPress, 0, 0);
			}
			
			if(shot && moved && !Enemy.onScreen && !TutKill1){
				Enemy.x = 800;
				Enemy.y = 288;
				Enemy.movement = true;
				Enemy.onScreen = 1;
			}
			if(spell != "N/A"){
				ctx.drawImage(SpaceKey, 0, 0);
				if(32 in keysDown){
					ctx.drawImage(SpaceKeyPress, 0, 0);
				}
			}
			
			if(spell1 != "N/A" && spell2 != "N/A"){
				if((forestIndex >= 10 && forestIndex < 20) || (forestIndex >= 30 && forestIndex < 40)
					 || (forestIndex >= 50 && forestIndex < 60) || (forestIndex >= 70 && forestIndex < 80)
					  || (forestIndex >= 90 && forestIndex < 100) || (forestIndex >= 110 && forestIndex < 120)){
					ctx.drawImage(DropQ2, 0, 0);
					ctx.drawImage(DropE2, 0, 0);
				}
				else{
					ctx.drawImage(DropQ1, 0, 0);
					ctx.drawImage(DropE1, 0, 0);
				}
			}
			
			if(TutKill1 && !TutKill2 && !Enemy.onScreen && !EnemyA.onScreen && redCube.x == -100){
				Enemy.x = 800;
				Enemy.y = 288;
				Enemy.movement = true;
				Enemy.onScreen = 1;
				
				EnemyA.x = 0;
				EnemyA.y = 288;
				EnemyA.movement = true;
				EnemyA.onScreen = 1;
				EnemyA.growIndex = 62;
			}
			
			player.draw();
			player.onhit();
			//knock back when hit by enemies/meteors
			player.knockBack();
			
			rePlant();
			
			for(B in Boxes){
				Boxes[B].draw();
				pickup(Boxes[B]);
			}
			
			for(B in Bullets){
				drawBullet(Bullets[B]);
				Bulletmove(Bullets[B]);
			}
			
			for(F in AllFire){
				AllFire[F].draw();
				AllFire[F].move();
			}
			
			airfire.draw();
			airfire.effect();
			airfire12.draw();
			airfire12.effect();
			airfire13.draw();
			airfire13.effect();
			
			for(E in AllEnemies){
				AllEnemies[E].draw();
				move(AllEnemies[E]);
				AI(AllEnemies[E]);
			}
			
			treeFall = 2;
			for(O in allObs){
				drawObstacle(allObs[O]);
				obsTick(allObs[O]);
			}
			
			castingBar.draw();
			castingBar.tick();
		}
		//--------------------------------------------- Forest Level ------------------------------------------------------------//
		else if(STATE == 1){
			levelorder = 0;
			//Enemy list optimization
			AllEnemies = {1: Enemy, 2: EnemyA, 3: EnemyB, 4: EnemyC, 5: Sorceror, 6: treeWizz, 7: rootStrike, 8: rootStrike2, 9: rootStrike3, 10: rootStrike4, 11: Dragon, 12: DragonR, 13: DragonL,
					14: BigMeteor1, 15: Meteor1, 16: Meteor2, 17: Meteor3, 18: Meteor4, 19: BigMeteor2, 20: Meteor5, 21: Meteor6, 22: Meteor7, 23: Meteor8, 24: MeteorD1, 25: MeteorD2};
			treeFall = 2;
			player.draw();
			player.onhit();
			//knock back when hit by enemies/meteors
			player.knockBack();
			//make growing flowers collideable
			if(EnemyA.onScreen == 1 && EnemyA.growIndex < 62){
				EnemyA.x+=9000;
				EnemyA.y+=9000;
				var Alowered = true;
			}
			if(EnemyC.onScreen == 1 && EnemyC.growIndex < 62){
				EnemyC.x+=9000;
				EnemyC.y+=9000;
				var Clowered = true;
			}
			rePlant();
			for(B in Boxes){
				Boxes[B].draw();
				pickup(Boxes[B]);
			}
			RandEffect.draw();
			for(H in hpParticles){
				hpParticles[H].draw();
				hpParticles[H].onHit();
				HpMove(hpParticles[H]);
				HpAi(hpParticles[H]);
			}
			
			drawSpells();
			
			sFire.draw();
			sFire.move();
			
			sLightning.draw();
			sLightning.effect();
			
			rootBlastW.draw();
			rootBlastW.effect();
			rootBlastA.draw();
			rootBlastA.effect();
			rootBlastS.draw();
			rootBlastS.effect();
			rootBlastD.draw();
			rootBlastD.effect();
			LeafHeal.draw();
			LeafHeal.move();
			for(R in roots1){
				drawRoots(roots1[R]);
			}
			treeWizz.spawn();
			Dragon.spawn();
			Dragon.draw();
			DragonR.spawn();
			DragonR.draw();
			DragonL.spawn();
			DragonL.draw();
			Dragon.attack();
			DragonR.attack();
			DragonL.attack();
			for(D in Dragonflame){
				Dragonflame[D].draw();
				Dragonflame[D].effect();
			}
			//put here to negate ice abilities
			TreecastingBar.tick();	
			SorcCastingBar.tick();
			if(EnemyA.onScreen == 1 && EnemyA.growIndex < 62 && Alowered){
				EnemyA.x-=9000;
				EnemyA.y-=9000;
			}
			if(EnemyC.onScreen == 1 && EnemyC.growIndex < 62 && Clowered){
				EnemyC.x-=9000;
				EnemyC.y-=9000;
			}
			for(E in AllEnemies){
				if(AllEnemies[E].onTree == 0){
					AllEnemies[E].draw();
					move(AllEnemies[E]);
				}
				if(AllEnemies[E].type != "Dragon" && AllEnemies[E].type != "DragonL" && AllEnemies[E].type != "DragonR"){
					AI(AllEnemies[E]);
					if(AllEnemies[E].type != "MasterThief"){
						spawn(AllEnemies[E]);
					}
				}
			}
			for(M in BigMeteors){
				MeteorAI(BigMeteors[M]);
			}
			
			DragonEffect.draw();
			
			TwizEffect.draw();
			DragonEffect2.draw();
			
			for(O in allObs){
				drawObstacle(allObs[O]);
				obsTick(allObs[O]);
			}
			
			for(b in bloodList){
				drawBlood(bloodList[b]);
			}
			
			confuseBarDraw();
			castingBar.draw();
			castingBar.tick();
			TreecastingBar.draw();
			SorcCastingBar.draw();
		}
		//--------------------------------------------------------- Jungle Level ------------------------------------------------//
		else if(STATE == "Jungle"){
			levelorder = 11;
			SeenJungle = 1;
			$.jStorage.set("SeenJungle", SeenJungle);
			
			//change enemies
			AllEnemies = {1: Enemy, 2: EnemyA, 3: EnemyB, 4: EnemyC, 5: treeWizz, 6: rootStrike, 7: rootStrike2, 8: rootStrike3,
							9: rootStrike4, 10: Thief, 11: ThiefA, 12: ThiefB, 13: MasterThief};
			StateTimer+=1;
			//resize hudge
			Enemy.width = 40;
			Enemy.height = 28;
			EnemyB.width = 40;
			EnemyB.height = 28;
			//draw grass
			for(G in tallGrasses){
				ctx.drawImage(tallG, tallGrasses[G].x-tallGrasses[G].width*0.5, tallGrasses[G].y-tallGrasses[G].height*0.5);
			}
			//Must be on below trees
			for(F in treeFallExplosions){
				treeFallExplosions[F].draw();
			}
			//Fallen trees
			for(O in allObs){
				drawObstacle(allObs[O]);
			}
			treeFall = 2;
			//for calculating shadow of player in jungle
			var shade = false;
			for(O in obstacle1){
				if(!obstacle1[O].falling || FallingTreesL[obstacle1[O].fallIndex] == shakeTR || FallingTreesL[obstacle1[O].fallIndex] == shakeTL){
					if(player.x <= obstacle1[O].x + obstacle1[O].width*0.5 && player.x >= obstacle1[O].x - obstacle1[O].width*0.5
						&& player.y <= obstacle1[O].y && obstacle1[O].index > 5){
							shade = true;
					}
				}
			}
			player.shadowed = shade;
			//if not on top of tree
			if(!player.shadowed){
				player.draw();
			}
			player.onhit();
			//knock back when hit by enemies/meteors
			//bug fix- make thieves steal before movement
			Thief.steal();
			ThiefA.steal();
			ThiefB.steal();
			player.knockBack();
			rePlant();
			for(B in Boxes){
				Boxes[B].draw();
				pickup(Boxes[B]);
			}
			RandEffect.draw();
			RandEffect2.draw();
			RandEffect3.draw();
			RandEffect4.draw();
			RandEffect5.draw();
			for(H in hpParticles){
				hpParticles[H].draw();
				hpParticles[H].onHit();
				HpMove(hpParticles[H]);
				HpAi(hpParticles[H]);
			}
			
			drawSpells();
			
			sAir.draw();
			sAir.effect();
			
			for(F in treeFallExplosions){
				treeFallExplosions[F].move();
			}
			
			MThiefHeal.draw();
			MThiefHeal.move();
			MasterThief.spawn();
			for(E in AllEnemies){
				if(AllEnemies[E].onTree == 0){
					AllEnemies[E].draw();
					move(AllEnemies[E]);
				}
				if(AllEnemies[E].type != "Dragon" && AllEnemies[E].type != "DragonL" && AllEnemies[E].type != "DragonR"){
					AI(AllEnemies[E]);
					if(AllEnemies[E].type != "MasterThief"){
						spawn(AllEnemies[E]);
					}
				}
			}
			for(F in Feet){
				Feet[F].draw();
				Feet[F].tick();
			}
			SmokeBomb.draw();
			SmokeBombA.draw();
			SmokeBombB.draw();
			MSmokeBomb.draw();
			//draw top trees
			for(O in allObs){
				drawObstacle(allObs[O]);
			}
			//draw fog 1
			ctx.drawImage(fog1, EnvFog1.x, EnvFog1.y);
			EnvFog1.x++;
			if(EnvFog1.x == -400){
				EnvFog1.x = -1599;
			}
			fogNum = 2;
			//draw mid trees
			for(O in allObs){
				drawObstacle(allObs[O]);
			}
			//draw fog 2
			ctx.drawImage(fog2, EnvFog2.x, EnvFog2.y);
			EnvFog2.x++;
			if(EnvFog2.x == -400){
				EnvFog2.x = -1599;
			}
			if(jungleAni == true){
				for(O in obstacle1){
					if(obstacle1[O].growTimer > 0){
						obstacle1[O].growTimer-=1;
					}
					else if(obstacle1[O].index<12){
						obstacle1[O].index+=1;
					}
				}
			}
			fogNum = 3;
			//draw front trees
			for(O in allObs){
				drawObstacle(allObs[O]);
				obsTick(allObs[O]);
			}
			//draw fog 3
			ctx.drawImage(fog3, EnvFog3.x, EnvFog3.y);
			EnvFog3.x++;
			if(EnvFog3.x == -560){
				EnvFog3.x = -1919;
			}
			fogNum = 1;
			treeFall = 1;
			//if players in a tree
			if(player.shadowed){
				player.draw();
			}
			//draw bugs
			for(E in AllEnemies){
				if(AllEnemies[E].onTree == 1){
					AllEnemies[E].draw();
					move(AllEnemies[E]);
				}
			}
			
			for(b in bloodList){
				drawBlood(bloodList[b]);
			}
			
			TwizEffect.draw();
			MasterTEffect.draw();
			
			confuseBarDraw();
			castingBar.draw();
			castingBar.tick();
		}
		//------------------------------------------------------------ Fire Level -----------------------------------------------//
		else if(STATE == "Scorched"){
			levelorder = 12;
			SeenFire = 1;
			$.jStorage.set("SeenFire", SeenFire);
			
			//change enemies
			AllEnemies = {1: Enemy, 2: EnemyA, 3: EnemyB, 5: Tenemy, 6: TenemyA, 8: Lavaman, 9: Lavaman2, 10: Lavaman3, 11: Lavaman4, 12: Spawner, 13: Dragon, 14: DragonR, 15: DragonL,
					16: BigMeteor1, 17: Meteor1, 18: Meteor2, 19: Meteor3, 20: Meteor4, 21: BigMeteor2, 22: Meteor5, 23: Meteor6, 24: Meteor7, 25: Meteor8, 26: MeteorD1, 27: MeteorD2,
					28: Lavaman5, 29: Lavaman6, 30: Lavaman7, 31: Lavaman8, 32: Spawner2, 33: MiniMum1, 34: MiniMum2, 35: MiniMum3, 36: MiniMum4, 37: Genie, 38: Lamp};
			StateTimer+=1;
			//enemy pts change
			Enemy.pts = 25;
			EnemyA.pts = 25;
			EnemyB.pts = 25;
			EnemyC.pts = 25;
			//change enemy sizes for mudge
			Enemy.width = 40;
			Enemy.height = 16;
			EnemyA.width = 40;
			EnemyA.height = 16;
			EnemyB.width = 40;
			EnemyB.height = 16;
			EnemyC.width = 40;
			EnemyC.height = 16;
	
			for(O in allObs){
				drawObstacle(allObs[O]);
				obsTick(allObs[O]);
			}
			player.draw();
			player.onhit();
			//knock back when hit by enemies/meteors
			player.knockBack();
			rePlant();
			for(B in Boxes){
				Boxes[B].draw();
				pickup(Boxes[B]);
			}
			RandEffect.draw();
			for(H in hpParticles){
				hpParticles[H].draw();
				hpParticles[H].onHit();
				HpMove(hpParticles[H]);
				HpAi(hpParticles[H]);
			}
			
			drawSpells();
			
			//genie and lamp
			Lamp.draw();
			LampPoof.draw();
			Genie.spawn();
			for(E in AllEnemies){
				if(AllEnemies[E] != Lamp){
					if(AllEnemies[E].onTree == 0){
						AllEnemies[E].draw();
						move(AllEnemies[E]);
					}
					if(AllEnemies[E].type != "Dragon" && AllEnemies[E].type != "DragonL" && AllEnemies[E].type != "DragonR"){
						AI(AllEnemies[E]);
						if(AllEnemies[E].type != "MasterThief" && E.type != "Genie"){
							spawn(AllEnemies[E]);
						}
					}
				}
			}
			LaserUpAttack.draw();
			LaserUpAttack.move();
			LaserFdAttack.draw();
			LaserFdAttack.move();
			LaserDAttack.draw();
			LaserDAttack.move();
			for(M in BigMeteors){
				MeteorAI(BigMeteors[M]);
			}
			for(S in Steams){
				drawSteam(Steams[S]);
			}
			for(E in Exploders){
				exploderDraw(Exploders[E]);
				exploderMove(Exploders[E]);
			}
			for(E in EMeteors){
				EMeteorDraw(EMeteors[E]);
				MeteorMove(EMeteors[E]);
			}
			DragonEffect.draw();

			Spawner.fire();
			Spawner2.fire();
			treeFall = 2;	
			
			for(b in bloodList){
				drawBlood(bloodList[b]);
			}
			
			DragonEffect2.draw();
			GenieEffect.draw();
			confuseBarDraw();
			castingBar.draw();
			castingBar.tick();
		}
		//--------------------------------------------------- Swamp Level -------------------------------------------------------//
		else if(STATE == "Swamp"){
			levelorder = 21;
			SeenSwamp = 1;
			$.jStorage.set("SeenSwamp", SeenSwamp);
			
			//change enemy list
			AllEnemies = {1: Enemy, 2: EnemyB, 3: MasterThief, 4: Croc, 5: Croc2, 6: Mosquito, 7: Mosquito2, 8: Mosquito3, 9: Mosquito4};
			StateTimer+=1;
			player.shadowed = false;
			//Must be on below trees
			for(F in treeFallExplosions){
				treeFallExplosions[F].draw();
			}
			//Fallen trees
			for(O in allObs){
				drawObstacle(allObs[O]);
			}
			treeFall = 2;
			if(swampFront){
				player.draw();
				if(swampIndex<60){
					swampIndex++;
				}
				else{
					swampFront = false;
				}
				ctx.globalAlpha = 0.25*Alpha;
				ctx.drawImage(RainPics[rainIndex], 0, 0);
				ctx.globalAlpha = Alpha;
			}
			//speed handling (slow in water etc)
			player.speedHandle();
			speedhandle(Enemy);
			speedhandle(EnemyB);
			//for calculating shadow of player in jungle
			player.draw();
			player.onhit();
			//knock back when hit by enemies/meteors
			player.knockBack();
			rePlant();
			for(B in Boxes){
				Boxes[B].draw();
				pickup(Boxes[B]);
			}
			
			for(H in hpParticles){
				hpParticles[H].draw();
				hpParticles[H].onHit();
				HpMove(hpParticles[H]);
				HpAi(hpParticles[H]);
			}
			
			drawSpells();
			
			for(F in treeFallExplosions){
				treeFallExplosions[F].move();
			}			
			for(O in allObs){
				if(allObs[O].fallIndex < 46 || !allObs[O].fallIndex){
					drawObstacle(allObs[O]);
				}
				obsTick(allObs[O]);
			}
			treeFall = 1;
			for(E in AllEnemies){
				if(AllEnemies[E].onTree == 0){
					AllEnemies[E].draw();
					move(AllEnemies[E]);
				}
				if(AllEnemies[E].type != "Dragon" && AllEnemies[E].type != "DragonL" && AllEnemies[E].type != "DragonR"){
					AI(AllEnemies[E]);
					if(AllEnemies[E].type != "MasterThief"){
						spawn(AllEnemies[E]);
					}
				}
			}
			for(E in Exploders){
				exploderDraw(Exploders[E]);
				exploderMove(Exploders[E]);
			}
			Swudge.draw();
			Swudge2.draw();
			for(F in Feet){
				Feet[F].draw();
				Feet[F].tick();
			}
		
			for(b in bloodList){
				drawBlood(bloodList[b]);
			}
			
			MasterTEffect.draw();
			
			confuseBarDraw();
			castingBar.draw();
			castingBar.tick();
			
			//If the swamp craziness happened
			if(Alpha == 0.15 && counter > 0){
				var numHps = 0;
				for(H in hpParticles){
					if(hpParticles[H].x == -100){
						numHps++;
					}
				}
				if(numHps >= 8){
					Alpha = 1;
					player.speed = player.speed2*4;
					if(hpUp.boss == "treeW"){
						jungleAni = true;
						radiofailure.currentTime=0;
						radiofailure.play();
					}
					if(hpUp.boss == "MasterThief"){
						for(O in obstacle1){
							obstacle1[O].board = true;
						}
						swampFront= true;
						radiofailure.currentTime=0;
						radiofailure.play();
					}
					counter = 0;
				}
			}
		}
		//------------------------------------------------------ Desert Level -------------------------------------------------------//
		else if(STATE == "Desert"){
			levelorder = 22;
			SeenDesert = 1;
			$.jStorage.set("SeenDesert", SeenDesert);
			
			//set enemies
			AllEnemies = {1: Scorp5, 2: Scorp6, 3: Scorp7, 4: Scorp8, 5: Scorp1, 6: Scorp2, 7: Scorp3, 8: Scorp4, 9: Anubis1, 10: MegaMummy, 11: Anubis2};
			StateTimer+=1;
			//draw sand part
			for(X in Sandpits){
				drawSandpit(Sandpits[X], "Sand");
			}
			
			//here onTree is used to determine if enemy is dying anubis, draw below everything
			for(E in AllEnemies){
				if(AllEnemies[E].onTree == 1){
					AllEnemies[E].draw();
				}
			}
			//Anubis resize
			for(A in Anubises){
				if(Anubises[A].casting){
					if(Anubises[A].castIndex > 27){
						if(Anubises[A].LR == "Right"){
							Anubises[A].x+=100;
							Anubises[A].width = 56+16;
							Anubises[A].height = 33+16;
						}
						else{
							Anubises[A].width = 51+16;
							Anubises[A].height = 52+16;
							Anubises[A].x-=101;
							Anubises[A].y-=19;
						}
					}
					else if(Anubises[A].castIndex > 15){
						if(Anubises[A].LR == "Right"){
							Anubises[A].x+=52;
							Anubises[A].y-=1;
							Anubises[A].width = 56+16;
							Anubises[A].height = 43+16;
						}
						else{
							Anubises[A].width = 50+16;
							Anubises[A].height = 36+16;
							Anubises[A].x-=53;
							Anubises[A].y-=4;
						}
					}
					else{
						if(Anubises[A].LR == "Right"){
							Anubises[A].x+=4;
							Anubises[A].y+=2;
							Anubises[A].width = 62+16;
							Anubises[A].height = 32+16;
						}
						else{
							Anubises[A].width = 54+16;
							Anubises[A].height = 34+16;
							Anubises[A].x-=8;
							Anubises[A].y-=1;
						}
					}
				}
				else if(!Anubises[A].movement){
					Anubises[A].width = 30+16;
					Anubises[A].height = 28+16;
					Anubises[A].y+=32;
				}
				else{
					Anubises[A].width = 56+16;
					Anubises[A].height = 32+16;
				}
				Anubises[A].y-=8;
			}
			player.draw();
			player.onhit();
			player.speedHandle();
			for(A in Anubises){
				if(Anubises[A].casting){
					if(Anubises[A].castIndex > 27){
						if(Anubises[A].LR == "Right"){
							Anubises[A].x-=100;
							Anubises[A].width = 56+8;
							Anubises[A].height = 53+16;
						}
						else{
							Anubises[A].x+=101;
							Anubises[A].y+=19;
							Anubises[A].width = 51+8;
							Anubises[A].height = 75+16;
						}
					}
					else if(Anubises[A].castIndex > 15){
						if(Anubises[A].LR == "Right"){
							Anubises[A].x-=52;
							Anubises[A].y+=1;
							Anubises[A].width = 56+8;
							Anubises[A].height = 64+16;
						}
						else{
							Anubises[A].x+=53;
							Anubises[A].y+=4;
							Anubises[A].width = 50+8;
							Anubises[A].height = 57+16;
						}
					}
					else{
						if(Anubises[A].LR == "Right"){
							Anubises[A].x-=4;
							Anubises[A].y-=2;
							Anubises[A].width = 62+8;
							Anubises[A].height = 64+16;
						}
						else{
							Anubises[A].x+=8;
							Anubises[A].y+=1;
							Anubises[A].width = 54+8;
							Anubises[A].height = 62+16;
						}
					}
				}
				else if(!Anubises[A].movement){
					Anubises[A].width = 30+8;
					Anubises[A].height = 60+16;
					Anubises[A].y-=32;
				}
				else{
					Anubises[A].width = 56+8;
					Anubises[A].height = 56+16;
				}
				Anubises[A].y+=8;
			}
			//knock back when hit by enemies/meteors
			player.knockBack();

			rePlant();
			for(B in Boxes){
				Boxes[B].draw();
				pickup(Boxes[B]);
			}
			RandEffect.draw();
			for(H in hpParticles){
				hpParticles[H].draw();
				hpParticles[H].onHit();
				HpMove(hpParticles[H]);
				HpAi(hpParticles[H]);
			}
			
			drawSpells();
			
			for(E in AllEnemies){
				if(AllEnemies[E] != Lamp){
					if(AllEnemies[E].onTree == 0){
						AllEnemies[E].draw();
					}
					move(AllEnemies[E]);
					DesertUpAI(AllEnemies[E]);
					if(AllEnemies[E].type != "MasterThief" && E.type != "Genie"){
						DesertUpSpawn(AllEnemies[E]);
					}
				}
			}
			for(A in AnubisProjectileList){
				AnubisProjectileList[A].draw();
				moveAnubisProj(AnubisProjectileList[A]);
			}
			
			//draw head part
			for(X in Sandpits){
				drawSandpit(Sandpits[X], "Head");
			}
			
			LampPoof.draw();
			
			for(b in bloodList){
				drawBlood(bloodList[b]);
			}
			
			GenieEffect.draw();
			confuseBarDraw();
			castingBar.draw();
			castingBar.tick();
			
			SandStorm.draw();
		}
		//----------------------------------------------------------- End -----------------------------------------------------------//
		// black out screen
		ctx.globalAlpha = 1;
		if(darkearth.blackTimer > 0){
			darkearth.blackDraw();
		}
		darkearth.draw();
		darkearth.move();
		
		UI();
		if(STATE != "Tutorial"){
			SCORE();
		}
		
		ctx.globalAlpha = Alpha;
		
		drawMarker(marker);
		moveMarker(marker);
	
		drawMarker(marker2);
		moveMarker(marker2);
	
		drawMarker(marker3);
		moveMarker(marker3);
	
		drawMarker(marker4);
		moveMarker(marker4);
		
		drawtypeMarker(typemarker);
		moveMarker(typemarker);
	
		drawtypeMarker(typemarker2);
		moveMarker(typemarker2);
	
		drawtypeMarker(typemarker3);
		moveMarker(typemarker3);
		
		drawtypeMarker(typemarker4);
		moveMarker(typemarker4);
		
		drawtypeMarker(typemarker5);
		moveMarker(typemarker5);
		
		drawtypeMarker(typemarker6);
		moveMarker(typemarker6);
		
		if(MasterThief.onScreen == 1 || (STATE == "Swamp" && hpUp.x != -100) || (STATE == "Swamp" && hpParticleSD.x != -100) || swampFront){
			ctx.globalAlpha = 0.25*Alpha;
			ctx.drawImage(RainPics[rainIndex], 0, 0);
			rainIndex++;
			if(rainIndex > 10){
				rainIndex = 1;
			}
			if(vol == 2){
				rainsound.play();
			}
			ctx.globalAlpha = Alpha;
		}
		else if(STATE != "Desert"){
			rainsound.currentTime=0;
			rainsound.pause();
		}
		
		//fade out tutorial
		if(TutKill2 && redCube.x == -100 && greyCube.x == -100 && STATE == "Tutorial"){
			TutFadeIndex++;
			ctx.globalAlpha = Alpha*0.1 + (0.1*TutFadeIndex*0.5);
			if(ctx.globalAlpha >= 1){
				FadeIn = true;
				var setForestStuffOnce = true;
			}
			ctx.fillStyle = DarkColor;
			ctx.fillRect(-5, -5, 805, 581);
			ctx.globalAlpha = Alpha;
		}
		if(FadeIn){
			if(setForestStuffOnce){
				planted = false;
				STATE = 1;
				player.x = 400;
				player.y = 256;
				spell1 = "N/A";
				spell2 = "N/A";
				player.hp = player.maxhp;
				fire.x = -100;
				fire.y = -200;
				fire.width = 32;
				fire.height = 32;
				fire.onScreen = 0;
				airfire.x = -100;
				airfire.y = -200;
				airfire.width = 32;
				airfire.onScreen = 0;
				airfire.height = 8;
				airfire.frame = 0;
				airfire12.x = -100;
				airfire12.y = -200;
				airfire12.width = 32;
				airfire12.onScreen = 0;
				airfire12.height = 8;
				airfire12.frame = 0;
				airfire13.x = -100;
				airfire13.y = -200;
				airfire13.width = 32;
				airfire13.onScreen = 0;
				airfire13.height = 8;
				airfire13.frame = 0;
			}
			TutFadeIndex--;
			if(TutFadeIndex == 0){
				FadeIn = false;
			}
			ctx.globalAlpha = Alpha*0.1 + (0.1*TutFadeIndex*0.5);
			ctx.fillStyle = DarkColor;
			ctx.fillRect(-5, -5, 805, 581);
			ctx.globalAlpha = Alpha;
		}
		
		if(dim == 2){
			ctx.globalAlpha = Alpha*0.25;
			ctx.fillStyle = "#FF0000";
			ctx.fillRect(0,0,400,576);
			ctx.fillStyle = "#000099";
			ctx.fillRect(400,0,400,576);
			ctx.globalAlpha = Alpha;
		}
		// Cooldown calculation
		if(cd <= 0){
			cd = cd;
		}
		else{
			cd--;
		}
	}
}, 1000/FPS);
