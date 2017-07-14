//--------------------------------------------- Enemies -----------------------------------------------------------------------------//
// Enemy type 1: bee, mudge, swudge
function Enemy_Type1(rp){
	this.respawn = rp;
};
Enemy_Type1.prototype = {
	type: 0,
	bug: 0,
	onTree: 0,
	x: 9000,
	y: -400,
	width: 32,
	height: 32,
	speed: 4,
	speed2: 2,
	dirct: 0,
	dir: "W",
	rp: 100,
	pts: 50,
	LR: "",
	onScreen: 0,
	movement: false,
	swimming: true,
	index: 1,
	hudgeIndex: 1,
	mudgeIndex: 1,
	color: Math.floor(Math.random() * 2) + 1,
	draw: function(){
		if(this.onScreen){
			if(STATE != "Swamp"){
				if(this.dir == "WA" || this.dir == "AS" || this.dir == "A"){
					this.LR = "Left";
					if(STATE == "Jungle"){
						ctx.drawImage(HudgeLs[Math.ceil(this.hudgeIndex*0.25)], this.x - this.width * 0.5, this.y - this.height * 0.5);
						this.hudgeIndex++;
						if(this.hudgeIndex > 16){
							this.hudgeIndex = 1;
						}
					}
					else if(STATE == 1 || STATE == "Tutorial"){
						if(this.index == 1){
							if(this.color == 1){
								ctx.drawImage(BeeL1, this.x - this.width * 0.5, this.y - this.height * 0.5);
							}
							else{
								ctx.drawImage(YBeeL1, this.x - this.width * 0.5, this.y - this.height * 0.5);
							}
							this.index++;
						}
						else{
							if(this.color == 1){
								ctx.drawImage(BeeL2, this.x - this.width * 0.5, this.y - this.height * 0.5);
							}
							else{
								ctx.drawImage(YBeeL2, this.x - this.width * 0.5, this.y - this.height * 0.5);
							}
							this.index--;
						}
					}
					else{
						ctx.drawImage(MudgeL[this.mudgeIndex], this.x - this.width * 0.5, this.y - this.height * 0.5);
						this.mudgeIndex++;
						if(this.mudgeIndex>3){
							this.mudgeIndex = 1;
						}
					}
				}
				else if(this.dir == "WD" || this.dir == "SD" || this.dir == "D"){
					if(STATE == "Jungle"){
						ctx.drawImage(HudgeRs[Math.ceil(this.hudgeIndex*0.25)], this.x - this.width * 0.5, this.y - this.height * 0.5);
						this.hudgeIndex++;
						if(this.hudgeIndex > 16){
							this.hudgeIndex = 1;
						}
					}
					else if(STATE == 1 || STATE == "Tutorial"){
						if(this.index == 1){
							if(this.color == 1){
								ctx.drawImage(BeeR1, this.x - this.width * 0.5, this.y - this.height * 0.5);
							}
							else{
								ctx.drawImage(YBeeR1, this.x - this.width * 0.5, this.y - this.height * 0.5);
							}
							this.index++;
						}
						else{
							if(this.color == 1){
								ctx.drawImage(BeeR2, this.x - this.width * 0.5, this.y - this.height * 0.5);
							}
							else{
								ctx.drawImage(YBeeR2, this.x - this.width * 0.5, this.y - this.height * 0.5);
							}
							this.index--;
						}
					}
					else{
						ctx.drawImage(MudgeR[this.mudgeIndex], this.x - this.width * 0.5, this.y - this.height * 0.5);
						this.mudgeIndex++;
						if(this.mudgeIndex>3){
							this.mudgeIndex = 1;
						}
					}
					this.LR = "Right";
				}
				else if(this.LR == "Left"){
					if(STATE == "Jungle"){
						ctx.drawImage(HudgeLs[Math.ceil(this.hudgeIndex*0.25)], this.x - this.width * 0.5, this.y - this.height * 0.5);
						this.hudgeIndex++;
						if(this.hudgeIndex > 16){
							this.hudgeIndex = 1;
						}
					}
					else if(STATE == 1 || STATE == "Tutorial"){
						if(this.index == 1){
							if(this.color == 1){
								ctx.drawImage(BeeL1, this.x - this.width * 0.5, this.y - this.height * 0.5);
							}
							else{
								ctx.drawImage(YBeeL1, this.x - this.width * 0.5, this.y - this.height * 0.5);
							}
							this.index++;
						}
						else{
							if(this.color == 1){
								ctx.drawImage(BeeL2, this.x - this.width * 0.5, this.y - this.height * 0.5);
							}
							else{
								ctx.drawImage(YBeeL2, this.x - this.width * 0.5, this.y - this.height * 0.5);
							}
							this.index--;
						}
					}
					else{
						ctx.drawImage(MudgeL[this.mudgeIndex], this.x - this.width * 0.5, this.y - this.height * 0.5);
						this.mudgeIndex++;
						if(this.mudgeIndex>3){
							this.mudgeIndex = 1;
						}
					}
				}
				else{
					if(STATE == "Jungle"){
						ctx.drawImage(HudgeRs[Math.ceil(this.hudgeIndex*0.25)], this.x - this.width * 0.5, this.y - this.height * 0.5);
						this.hudgeIndex++;
						if(this.hudgeIndex > 16){
							this.hudgeIndex = 1;
						}
					}
					else if(STATE == 1 || STATE == "Tutorial"){
						if(this.index == 1){
							if(this.color == 1){
								ctx.drawImage(BeeR1, this.x - this.width * 0.5, this.y - this.height * 0.5);
							}
							else{
								ctx.drawImage(YBeeR1, this.x - this.width * 0.5, this.y - this.height * 0.5);
							}
							this.index++;
						}
						else{
							if(this.color == 1){
								ctx.drawImage(BeeR2, this.x - this.width * 0.5, this.y - this.height * 0.5);
							}
							else{
								ctx.drawImage(YBeeR2, this.x - this.width * 0.5, this.y - this.height * 0.5);
							}
							this.index--;
						}
					}
					else{
						ctx.drawImage(MudgeR[this.mudgeIndex], this.x - this.width * 0.5, this.y - this.height * 0.5);
						this.mudgeIndex++;
						if(this.mudgeIndex>3){
							this.mudgeIndex = 1;
						}
					}
				}
			}
			else{
				if(this.swimming){
					if(this.dir == "WA" || this.dir == "AS" || this.dir == "A"){
						this.LR = "Left";
						ctx.drawImage(SwudgeSheet, 160, 0, 80, 60, this.x - this.width * 0.5, this.y - this.height * 0.5, 80, 60);
					}
					else if(this.dir == "WD" || this.dir == "SD" || this.dir == "D"){
						ctx.drawImage(SwudgeSheet, 240, 0, 80, 60, this.x - this.width * 0.5, this.y - this.height * 0.5, 80, 60);
						this.LR = "Right";
					}
					else if(this.LR == "Left"){
						ctx.drawImage(SwudgeSheet, 160, 0, 80, 60, this.x - this.width * 0.5, this.y - this.height * 0.5, 80, 60);
					}
					else{
						ctx.drawImage(SwudgeSheet, 240, 0, 80, 60, this.x - this.width * 0.5, this.y - this.height * 0.5, 80, 60);
					}
				}
				else{
					if(this.dir == "WA" || this.dir == "AS" || this.dir == "A"){
						this.LR = "Left";
						ctx.drawImage(SwudgeSheet, 0, 0, 80, 60, this.x - this.width * 0.5, this.y - this.height * 0.5, 80, 60);
					}
					else if(this.dir == "WD" || this.dir == "SD" || this.dir == "D"){
						ctx.drawImage(SwudgeSheet, 80, 0, 80, 60, this.x - this.width * 0.5, this.y - this.height * 0.5, 80, 60);
						this.LR = "Right";
					}
					else if(this.LR == "Left"){
						ctx.drawImage(SwudgeSheet, 0, 0, 80, 60, this.x - this.width * 0.5, this.y - this.height * 0.5, 80, 60);
					}
					else{
						ctx.drawImage(SwudgeSheet, 80, 0, 80, 60, this.x - this.width * 0.5, this.y - this.height * 0.5, 80, 60);
					}
				}
			}
		}
	}
};
var Enemy = new Enemy_Type1(1);
var EnemyB = new Enemy_Type1(125);

// Enemy 2 - flower/ladybug
function Enemy_Type2(rp){
	this.respawn = rp;
};
Enemy_Type2.prototype = {
	type: 0,
	bug: 1,
	onTree: 0,
	x: -9000,
	y: -9000,
	width: 32,
	height: 32,
	dirct: 0,
	speed: 4,
	speed2: 2,
	pts: 50,
	dir: "W",
	rp: 100,
	onScreen: 0,
	index: 1,
	mudgeIndex: 1,
	dindex: 1,
	LR: "",
	growIndex: 1,
	color: "",
	movement: false,
	draw: function(){
		if(STATE == "Swamp"){
			this.respawn = 250;
		}
		if(this.onTree == 1){
			this.speed = 8;
		}
		if((STATE == 1 || STATE == "Tutorial") && this.onScreen == 1){
			if(this.growIndex <= 60){
				if(this.color=="Red"){
					ctx.drawImage(FlowerSheet, (Math.ceil(this.growIndex/15) - 1)*32, 32, 32, 32, 9000 + this.x-this.width*0.5, 9000 + this.y-this.height*0.5, 32, 32);
				}
				else if(this.color=="Blue"){
					ctx.drawImage(FlowerSheet, (Math.ceil(this.growIndex/15) - 1)*32, 0, 32, 32, 9000 + this.x-this.width*0.5, 9000 + this.y-this.height*0.5, 32, 32);
				}
				else if(this.color=="Yellow"){
					ctx.drawImage(FlowerSheet, (Math.ceil(this.growIndex/15) - 1)*32, 64, 32, 32, 9000 + this.x-this.width*0.5, 9000 + this.y-this.height*0.5, 32, 32);
				}
				this.growIndex++;
			}
			if(this.growIndex == 61){
				this.growIndex++;
				this.x+=9000;
				this.y+=9000;
				this.movement = true;				
			}
			if(this.growIndex > 61){
				if(this.dir == "WA" || this.dir == "AS" || this.dir == "A"){
					this.LR = "Left";
					if(this.color == "Blue"){
						ctx.drawImage(FlowerSheet, 128, 0, 32, 32, this.x - this.width * 0.5, this.y - this.height * 0.5, 32, 32);
					}
					else if(this.color == "Red"){
						ctx.drawImage(FlowerSheet, 128, 32, 32, 32, this.x - this.width * 0.5, this.y - this.height * 0.5, 32, 32);
					}
					else{
						ctx.drawImage(FlowerSheet, 128, 64, 32, 32, this.x - this.width * 0.5, this.y - this.height * 0.5, 32, 32);
					}
				//	ctx.drawImage(santaL, this.x-this.width*0.5+8, this.y-this.height*0.5-2);
				}
				else if(this.dir == "WD" || this.dir == "SD" || this.dir == "D"){
					if(this.color == "Blue"){
						ctx.drawImage(FlowerSheet, 160, 0, 32, 32, this.x - this.width * 0.5, this.y - this.height * 0.5, 32, 32);
					}
					else if(this.color == "Red"){
						ctx.drawImage(FlowerSheet, 160, 32, 32, 32, this.x - this.width * 0.5, this.y - this.height * 0.5, 32, 32);
					}
					else{
						ctx.drawImage(FlowerSheet, 160, 64, 32, 32, this.x - this.width * 0.5, this.y - this.height * 0.5, 32, 32);
					}
					this.LR = "Right";
				//	ctx.drawImage(santaR, this.x-this.width*0.5, this.y-this.height*0.5-2);
				}
				else if(this.LR == "Left"){
					if(this.color == "Blue"){
						ctx.drawImage(FlowerSheet, 128, 0, 32, 32, this.x - this.width * 0.5, this.y - this.height * 0.5, 32, 32);
					}
					else if(this.color == "Red"){
						ctx.drawImage(FlowerSheet, 128, 32, 32, 32, this.x - this.width * 0.5, this.y - this.height * 0.5, 32, 32);
					}
					else{
						ctx.drawImage(FlowerSheet, 128, 64, 32, 32, this.x - this.width * 0.5, this.y - this.height * 0.5, 32, 32);
					}
				//	ctx.drawImage(santaL, this.x-this.width*0.5+8, this.y-this.height*0.5-2);
				}
				else{
					if(this.color == "Blue"){
						ctx.drawImage(FlowerSheet, 160, 0, 32, 32, this.x - this.width * 0.5, this.y - this.height * 0.5, 32, 32);
					}
					else if(this.color == "Red"){
						ctx.drawImage(FlowerSheet, 160, 32, 32, 32, this.x - this.width * 0.5, this.y - this.height * 0.5, 32, 32);
					}
					else{
						ctx.drawImage(FlowerSheet, 160, 64, 32, 32, this.x - this.width * 0.5, this.y - this.height * 0.5, 32, 32);
					}
				//	ctx.drawImage(santaR, this.x-this.width*0.5, this.y-this.height*0.5-2);
				}
			}
		}
		if(STATE == "Scorched"){
			if(this.dir == "WA" || this.dir == "AS" || this.dir == "A"){
				this.LR = "Left";
				ctx.drawImage(MudgeL[this.mudgeIndex], this.x - this.width * 0.5, this.y - this.height * 0.5);
			}
			else if(this.dir == "WD" || this.dir == "SD" || this.dir == "D"){
				ctx.drawImage(MudgeR[this.mudgeIndex], this.x - this.width * 0.5, this.y - this.height * 0.5);
				this.LR = "Right";
			}
			else if(this.LR == "Left"){
				ctx.drawImage(MudgeL[this.mudgeIndex], this.x - this.width * 0.5, this.y - this.height * 0.5);
			}
			else{
				ctx.drawImage(MudgeR[this.mudgeIndex], this.x - this.width * 0.5, this.y - this.height * 0.5);
			}
			this.mudgeIndex++;
			if(this.mudgeIndex>3){
				this.mudgeIndex = 1;
			}
		}
		else if(STATE == "Jungle"){
			if(this.onTree == 1){
				if(this.dindex > 2){
					this.dindex = 1;
				}
				ctx.drawImage(humpdList[this.dindex], this.x - this.width * 0.5, this.y - this.height * 0.5);
				this.dindex++;
			}
			else{
				if(this.index > 3){
					this.index = 1;
				}
				if(this.dir == "WA" || this.dir == "AS" || this.dir == "A"){
					this.LR = "Left";
					ctx.drawImage(humplList[this.index], this.x - this.width * 0.5, this.y - this.height * 0.5);
				}
				else if(this.dir == "WD" || this.dir == "SD" || this.dir == "D"){
					ctx.drawImage(humprList[this.index], this.x - this.width * 0.5, this.y - this.height * 0.5);
					this.LR = "Right";
				}
				else if(this.LR == "Left"){
					ctx.drawImage(humplList[this.index], this.x - this.width * 0.5, this.y - this.height * 0.5);
				}
				else{
					ctx.drawImage(humprList[this.index], this.x - this.width * 0.5, this.y - this.height * 0.5);
				}
				this.index++;
			}
		}
	}
};
var EnemyA = new Enemy_Type2(250);
var EnemyC = new Enemy_Type2(300);

// Fireball enemies (fire level)
function Globbly_Enemy(rp){
	this.respawn = rp;
};
Globbly_Enemy.prototype = {
	type: 0,
	bug: 0,
	onTree: 0,
	x: 9000,
	y: -9000,
	width: 32,
	height: 32,
	speed: 8,
	speed2: 4,
	dirct: 0,
	dir: "W",
	pts: 50,
	rp: 450,
	frame: 1,
	onScreen: 0,
	movement: false,
	// Draws the enemy on the canvas when called
	draw: function(){
		if(this.dir == "WA" || this.dir == "AS" || this.dir == "A"){
			this.LR = "Left";
			ctx.drawImage(GlobblyL[this.frame], this.x - this.width * 0.5, this.y - this.height * 0.5);
		}
		else if(this.dir == "WD" || this.dir == "SD" || this.dir == "D"){
			ctx.drawImage(GlobblyR[this.frame], this.x - this.width * 0.5, this.y - this.height * 0.5);
			this.LR = "Right";
		}
		else if(this.LR == "Left"){
			ctx.drawImage(GlobblyL[this.frame], this.x - this.width * 0.5, this.y - this.height * 0.5);
		}
		else{
			ctx.drawImage(GlobblyR[this.frame], this.x - this.width * 0.5, this.y - this.height * 0.5);
		}
		this.frame+=1;
		if(this.frame > 3){
			this.frame = 1;
		}
		if(collision(this.dir, this, player)){
			onHit(this);
		}
	}
};
var Tenemy = new Globbly_Enemy(450);
var TenemyA = new Globbly_Enemy(1200);
var TenemyB = new Globbly_Enemy(900);

//lava creatures spawned by winamps
function Lavaman_Enemy(){};
Lavaman_Enemy.prototype = {
	type: 0,
	bug: 0,
	onTree: 0,
	x: 9000,
	y: -400,
	width: 32,
	height: 32,
	speed: 4,
	speed2: 2,
	dirct: 0,
	dir: "W",
	pts: 10,
	respawn: -1,
	rp: -1,
	onScreen: 0,
	movement: false,
	// Draws the enemy on the canvas when called
	draw: function(){
		if(this.respawn == 0){
			this.respawn = -1;
		}
		if(this.dir == "WA" || this.dir == "AS" || this.dir == "A"){
			this.LR = "Left";
			ctx.drawImage(LavamanpicL, this.x - this.width * 0.5, this.y - this.height * 0.5);
		}
		else if(this.dir == "WD" || this.dir == "SD" || this.dir == "D"){
			ctx.drawImage(LavamanpicR, this.x - this.width * 0.5, this.y - this.height * 0.5);
			this.LR = "Right";
		}
		else if(this.LR == "Left"){
			ctx.drawImage(LavamanpicL, this.x - this.width * 0.5, this.y - this.height * 0.5);
		}
		else{
			ctx.drawImage(LavamanpicR, this.x - this.width * 0.5, this.y - this.height * 0.5);
		}
	}
};
var Lavaman = new Lavaman_Enemy();
var Lavaman2 = new Lavaman_Enemy();
var Lavaman3 = new Lavaman_Enemy();
var Lavaman4 = new Lavaman_Enemy();
var Lavaman5 = new Lavaman_Enemy();
var Lavaman6 = new Lavaman_Enemy();
var Lavaman7 = new Lavaman_Enemy();
var Lavaman8 = new Lavaman_Enemy();
var lavamenlist = {1: Lavaman, 2: Lavaman2, 3: Lavaman3, 4: Lavaman4, 5: Lavaman5, 6: Lavaman6, 7: Lavaman7, 8: Lavaman8};

//winamps (fire spawners)
function Winamp_Enemy(rp, number){
	this.respawn = rp;
	if(number == 1){
		this.fire = function(){
			if(this.onScreen == 1){
				if(Lavaman.onScreen == 1 && Lavaman2.onScreen == 1 && Lavaman3.onScreen == 1 && Lavaman4.onScreen == 1){
					this.casted = false;
					this.cast = false;
					this.castIndex = 1;
					this.spawnIndex = 1;
					this.waitIndex = 30;
					//target player
					this.attckPlayer = true;
					this.movement = true;
				}
				else{
					this.attckPlayer = false;
				}
				if(this.spawnIndex == 19){
					if(Lavaman.onScreen == 0){
						SpawnerSpawn.currentTime=0;
						SpawnerSpawn.play();
						Lavaman.onScreen = 1;
						if(this.dir == "D"){
							Lavaman.x = this.x + 156;
							Lavaman.y = this.y+64;
						}
						else{
							Lavaman.x = this.x-164;
							Lavaman.y = this.y+64;
						}
						Lavaman.movement = true;
					}
					else if(Lavaman2.onScreen == 0){
						SpawnerSpawn.currentTime=0;
						SpawnerSpawn.play();
						Lavaman2.onScreen = 1;
						if(this.dir == "D"){
							Lavaman2.x = this.x + 156;
							Lavaman2.y = this.y+64;
						}
						else{
							Lavaman2.x = this.x-164;
							Lavaman2.y = this.y+64;
						}
						Lavaman2.movement = true;
					}
					else if(Lavaman3.onScreen == 0){
						SpawnerSpawn.currentTime=0;
						SpawnerSpawn.play();
						Lavaman3.onScreen = 1;
						if(this.dir == "D"){
							Lavaman3.x = this.x + 156;
							Lavaman3.y = this.y+64;
						}
						else{
							Lavaman3.x = this.x-164;
							Lavaman3.y = this.y+64;
						}
						Lavaman3.movement = true;
					}
					else if(Lavaman4.onScreen == 0){
						SpawnerSpawn.currentTime=0;
						SpawnerSpawn.play();
						Lavaman4.onScreen = 1;
						if(this.dir == "D"){
							Lavaman4.x = this.x + 156;
							Lavaman4.y = this.y+64;
						}
						else{
							Lavaman4.x = this.x-164;
							Lavaman4.y = this.y+64;
						}
						Lavaman4.movement = true;
					}
					else{
						this.casted = false;
						this.cast = false;
						this.castIndex = 1;
						this.spawnIndex = 1;
						this.waitIndex = 30;
					}
				}
			}
		};
	}else{
		this.fire = function(){
			if(this.onScreen == 1){
				if(Lavaman5.onScreen == 1 && Lavaman6.onScreen == 1 && Lavaman7.onScreen == 1 && Lavaman8.onScreen == 1){
					this.casted = false;
					this.cast = false;
					this.castIndex = 1;
					this.spawnIndex = 1;
					this.waitIndex = 30;
					//target player
					this.attckPlayer = true;
					this.movement = true;
				}
				else{
					this.attckPlayer = false;
				}
				if(this.spawnIndex == 19){
					if(Lavaman5.onScreen == 0){
						SpawnerSpawn.currentTime=0;
						SpawnerSpawn.play();
						Lavaman5.onScreen = 1;
						if(this.dir == "D"){
							Lavaman5.x = this.x + 156;
							Lavaman5.y = this.y+64;
						}
						else{
							Lavaman5.x = this.x-164;
							Lavaman5.y = this.y+64;
						}
						Lavaman5.movement = true;
					}
					else if(Lavaman6.onScreen == 0){
						SpawnerSpawn.currentTime=0;
						SpawnerSpawn.play();
						Lavaman6.onScreen = 1;
						if(this.dir == "D"){
							Lavaman6.x = this.x + 156;
							Lavaman6.y = this.y+64;
						}
						else{
							Lavaman6.x = this.x-164;
							Lavaman6.y = this.y+64;
						}
						Lavaman6.movement = true;
					}
					else if(Lavaman7.onScreen == 0){
						SpawnerSpawn.currentTime=0;
						SpawnerSpawn.play();
						Lavaman7.onScreen = 1;
						if(this.dir == "D"){
							Lavaman7.x = this.x + 156;
							Lavaman7.y = this.y+64;
						}
						else{
							Lavaman7.x = this.x-164;
							Lavaman7.y = this.y+64;
						}
						Lavaman7.movement = true;
					}
					else if(Lavaman8.onScreen == 0){
						SpawnerSpawn.currentTime=0;
						SpawnerSpawn.play();
						Lavaman8.onScreen = 1;
						if(this.dir == "D"){
							Lavaman8.x = this.x + 156;
							Lavaman8.y = this.y+64;
						}
						else{
							Lavaman8.x = this.x-164;
							Lavaman8.y = this.y+64;
						}
						Lavaman8.movement = true;
					}
					else{
						this.casted = false;
						this.cast = false;
						this.castIndex = 1;
						this.spawnIndex = 1;
						this.waitIndex = 30;
					}
				}
			}
		};
	}
};
Winamp_Enemy.prototype = {
	type: 2,
	x: 2000,
	y: -9000,
	onTree: 0,
	width: 88,
	height: 92,
	speed: 2,
	speed2: 1,
	dirct: 0,
	hp: 6,
	hptimer: 0,
	dir: "W",
	LR: "",
	TargetObj: "",
	rp: 450,
	pts: 500,
	onScreen: 0,
	casted: false,
	cast: false,
	castIndex: 1,
	walkIndex: 1,
	spawnIndex: 1,
	waitIndex: 30,
	attckPlayer: false,
	movement: false,
	// Draws the enemy on the canvas when called
	draw: function(){
		if(this.hptimer >0){
			this.hptimer-=1;
		}
		if (this.hptimer*0.5 != Math.round(this.hptimer*0.5)){
			ctx.globalAlpha = Alpha*0.5;
		}
		if(!this.cast){
			if(this.dir == "WA" || this.dir == "AS" || this.dir == "A"){
				this.LR = "Left";
				ctx.drawImage(SplavamanSheet, 88*(Math.ceil(this.walkIndex*0.25)-1),0, 88, 92, this.x - this.width * 0.5, this.y - this.height * 0.5, 88, 92);
			}
			else if(this.dir == "WD" || this.dir == "SD" || this.dir == "D"){
				ctx.drawImage(SplavamanSheet, 88*(Math.ceil(this.walkIndex*0.25)-1),92, 88, 92, this.x - this.width * 0.5, this.y - this.height * 0.5, 88, 92);
				this.LR = "Right";
			}
			else if(this.LR == "Left"){
				ctx.drawImage(SplavamanSheet, 88*(Math.ceil(this.walkIndex*0.25)-1),0, 88, 92, this.x - this.width * 0.5, this.y - this.height * 0.5, 88, 92);
			}
			else{
				ctx.drawImage(SplavamanSheet, 88*(Math.ceil(this.walkIndex*0.25)-1),92, 88, 92, this.x - this.width * 0.5, this.y - this.height * 0.5, 88, 92);
			}
			this.walkIndex++;
			if(this.walkIndex > 16){
				this.walkIndex = 1;
			}
		}
		else if(!this.casted){
			if(this.dir == "WA" || this.dir == "AS" || this.dir == "A"){
				this.LR = "Left";
				//offset b/c graphic is diff dimension 
				ctx.drawImage(SplavamanSheet, 244*(SplavamanCast[this.castIndex]-1), 184, 244, 196, this.x - this.width * 0.5 - 164, this.y - this.height * 0.5 - 68, 244, 196);
			}
			else if(this.dir == "WD" || this.dir == "SD" || this.dir == "D"){
				ctx.drawImage(SplavamanSheet, 244*(SplavamanCast[this.castIndex]-1), 380, 244, 196, this.x - this.width * 0.5 - 36, this.y - this.height * 0.5 - 68, 244, 196);
				this.LR = "Right";
			}
			else if(this.LR == "Left"){
				ctx.drawImage(SplavamanSheet, 244*(SplavamanCast[this.castIndex]-1), 184, 244, 196, this.x - this.width * 0.5 - 164, this.y - this.height * 0.5 - 68, 244, 196);
			}
			else{
				ctx.drawImage(SplavamanSheet, 244*(SplavamanCast[this.castIndex]-1), 380, 244, 196, this.x - this.width * 0.5 - 36, this.y - this.height * 0.5 - 68, 244, 196);
			}
			this.castIndex++;
			if(this.castIndex > 27){
				this.casted = true;
				this.castIndex = 1;
			}
		}
		else{
			if(this.dir == "WA" || this.dir == "AS" || this.dir == "A"){
				this.LR = "Left";
				//offset b/c graphic is diff dimension. this.cd-20 = frame #
				ctx.drawImage(SplavamanSheet, 244*(SplavamanSpawn[this.spawnIndex]-1), 576, 244, 196, this.x - this.width * 0.5 - 164, this.y - this.height * 0.5 - 68, 244, 196);
			}
			else if(this.dir == "WD" || this.dir == "SD" || this.dir == "D"){
				ctx.drawImage(SplavamanSheet, 244*(SplavamanSpawn[this.spawnIndex]-1), 772, 244, 196, this.x - this.width * 0.5 - 36, this.y - this.height * 0.5 - 68, 244, 196);
				this.LR = "Right";
			}
			else if(this.LR == "Left"){
				ctx.drawImage(SplavamanSheet, 244*(SplavamanSpawn[this.spawnIndex]-1), 576, 244, 196, this.x - this.width * 0.5 - 164, this.y - this.height * 0.5 - 68, 244, 196);
			}
			else{
				ctx.drawImage(SplavamanSheet, 244*(SplavamanSpawn[this.spawnIndex]-1), 772, 244, 196, this.x - this.width * 0.5 - 36, this.y - this.height * 0.5 - 68, 244, 196);
			}
			if(this.waitIndex <=0){
				this.spawnIndex++;
			}
			else{
				this.waitIndex--;
			}
			if(this.spawnIndex > 21){
				this.spawnIndex = 1;
				this.waitIndex = 30;
			}
		}
		if (this.hptimer*0.5 != Math.round(this.hptimer*0.5)){
			ctx.globalAlpha = Alpha;
		}
		hpBarDraw(this);
	}
};
var Spawner = new Winamp_Enemy(300, 1);
var Spawner2 = new Winamp_Enemy(900, 2);

// Sorceror
var Sorceror = {
	type: 1,
	x: 2000,
	y: -9000,
	onTree: 0,
	width: 32,
	height: 32,
	speed: 4,
	speed2: 2,
	dirct: 0,
	respawn: 1200,
	spell: "Ice",
	hp: 3,
	hptimer: 0,
	movement: false,
	pts: 500,
	cd: 0,
	spawned: 60,
	rp: 1200,
	onScreen: 0,
	// Draws the enemy on the canvas when called
	draw: function(){
		if (this.hptimer*0.5 != Math.round(this.hptimer*0.5)){
			ctx.drawImage(Wiz_Sheet, 0, 192, 32, 32, this.x - this.width * 0.5, this.y - this.height * 0.5, this.width, this.height);
		}
		else{
	//		ctx.drawImage(Sorcerorpng, this.x - this.width * 0.5, this.y - this.height * 0.5);
		}
		hpBarDraw(this);
		if(this.spell == "Fire"){
			ctx.drawImage(FireIcon, this.x-this.width*0.25, this.y - 48);
		}
		if(this.spell == "Ice"){
			ctx.drawImage(IceIcon, this.x-this.width*0.25, this.y - 48);
		}
		if(this.spell == "Lightning"){
			ctx.drawImage(LightningIcon, this.x-this.width*0.25, this.y - 48);
		}
	},
	cast: function(){
		if(this.spell == "Ice"){
			sIce.shoot();
		}
		else if(this.spell == "Fire"){
			sFire.shoot(this);
		}
		else if(this.spell == "Lightning"){
			sLightning.shoot();
		}
		this.cd = 300;
	}
};
var treeWizz = {
	type: -1,
	x: 9000,
	onTree: 0,
	y: -400,
	width: 32,
	height: 44,
	speed: 4,
	speed2: 2,
	dirct: 0,
	dir: "W",
	respawn: -1,
	rp: -1,
	onScreen: 0,
	movement: false,
	cd: 90,
	hp: 5,
	hptimer: 0,
	width2: 0,
	height2: 0,
	deadtrees: 0,
	herp: 0,
	frame: 0,
	pts: 5000,
	spawned: 0,
	LR: "",
	draw: function(){
		if (this.hptimer*0.5 != Math.round(this.hptimer*0.5)){
			ctx.globalAlpha = Alpha*0.5;
		}
		if(this.dir == "WA" || this.dir == "AS" || this.dir == "A"){
			this.LR = "Left";
			ctx.drawImage(TWizzurdL1, this.x - this.width * 0.5, this.y - this.height * 0.5);
		}
		else if(this.dir == "WD" || this.dir == "SD" || this.dir == "D"){
			ctx.drawImage(TWizzurdR1, this.x - this.width * 0.5, this.y - this.height * 0.5);
			this.LR = "Right";
		}
		else if(this.LR == "Left"){
			ctx.drawImage(TWizzurdL1, this.x - this.width * 0.5, this.y - this.height * 0.5);
		}
		else{
			ctx.drawImage(TWizzurdR1, this.x - this.width * 0.5, this.y - this.height * 0.5);
		}
		if (this.hptimer*0.5 != Math.round(this.hptimer*0.5)){
			ctx.globalAlpha = Alpha;
		}
		hpBarDraw(this);
	},
	spawn: function(){
		//if(!opened){
			if(this.hptimer > 0){
				this.hptimer-=1;
			}
			if(this.cd > 0 && this.onScreen == 1){
				this.cd-=1;
			}
			else if(STATE == 1 && Dragon.spawned == 0){
				for(O in obstacle1){
					if(obstacle1[O].hp == 0){
						this.deadtrees+=1;
					}
				}
				for(O in obstacle2){
					if(obstacle2[O].hp == 0){
						this.deadtrees+=1;
					}
				}
				for(O in obstacle3){
					if(obstacle3[O].hp == 0){
						this.deadtrees+=1;
					}
				}
				this.herp = this.deadtrees;
				this.deadtrees = 0;
				if(this.herp >= 6 && this.onScreen == 0){
					this.spawned = 1;
					var queue = true;
					for(E in AllEnemies){
						if(AllEnemies[E].onScreen == 1){
							queue = false;
						}
					}
					if(queue){
						this.respawn = 0;
						spawn(this);
						AList[2] = true;
						this.herp = 0;
					}
				}
			}
		//}
	},
	grow: function(){
		if(this.onScreen == 1){
			this.cd = 90;
			rootStrike.x = -2000;
			rootStrike.y = -2000;
			rootStrike.onScreen = 0;
			rootStrike.movement = false;
			rootStrike.hp = 2;
			rootStrike2.x = -2000;
			rootStrike2.y = -2000;
			rootStrike2.onScreen = 0;
			rootStrike2.movement = false;
			rootStrike2.hp = 2;
			rootStrike3.x = -2000;
			rootStrike3.y = -2000;
			rootStrike3.onScreen = 0;
			rootStrike3.hp = 2;
			rootStrike3.movement = false;
			rootStrike4.x = -2000;
			rootStrike4.y = -2000;
			rootStrike4.onScreen = 0;
			rootStrike4.movement = false;
			rootStrike4.hp = 2;
			for(R in roots11){
				roots11[R].onScreen = 0;
				roots11[R].movement = false;
				roots11[R].x = -9000;
				roots11[R].y = -9000;
			}
			for(R in roots12){
				roots12[R].onScreen = 0;
				roots12[R].movement = false;
				roots12[R].x = -9000;
				roots12[R].y = -9000;
			}
			for(R in roots13){
				roots13[R].onScreen = 0;
				roots13[R].movement = false;
				roots13[R].x = -9000;
				roots13[R].y = -9000;
			}
			for(R in roots14){
				roots14[R].onScreen = 0;
				roots14[R].movement = false;
				roots14[R].x = -9000;
				roots14[R].y = -9000;
			}
			var attack = Math.floor(Math.random() * 5) + 1;
			if(attack == 1 || attack == 4){
				Fwave.currentTime=0;
				Fwave.play();
				rootStrike.x = this.x;
				rootStrike.y = this.y - 64;
				rootStrike.onScreen = 1;
				rootStrike.movement = true;
				rootStrike.hp = 2;
				rootStrike2.x = this.x;
				rootStrike2.y = this.y + 64;
				rootStrike2.onScreen = 1;
				rootStrike2.movement = true;
				rootStrike2.hp = 2;
				rootStrike3.x = this.x - 64;
				rootStrike3.y = this.y;
				rootStrike3.onScreen = 1;
				rootStrike3.hp = 2;
				rootStrike3.movement = true;
				rootStrike4.x = this.x + 64;
				rootStrike4.y = this.y;
				rootStrike4.onScreen = 1;
				rootStrike4.movement = true;
				rootStrike4.hp = 2;
			}
			if(attack == 2 || attack == 5){
				rootBlastW.shoot();
				rootBlastA.shoot();
				rootBlastS.shoot();
				rootBlastD.shoot();
			}
			if(attack == 3 && this.hp < 5){
				LeafHeal.shoot();
			}
		}
	}
};
var TwizEffect = {
	x: 500,
	y: -400,
	width: 32,
	height: 32,
	onScreen: 0,
	frame: 0,
	played: 0,
	cd: 90,
	draw: function(){
		if(this.onScreen == 1){
			if(this.played == 0){
				this.played = 1;
				trailingbeeps.currentTime=0;
				trailingbeeps.play();
			}
			if(Alpha/(2+this.frame*0.1) < 0.1){
				ctx.globalAlpha = 0;
			}
			else{
				ctx.globalAlpha = Alpha/(2+this.frame*0.1);
			}
			ctx.fillStyle = "#228b22";
			ctx.fillRect(this.x-this.width*0.5, this.y-this.height*0.5, this.width, this.height);
			this.width = this.width + 8*this.frame;
			this.height = this.height + 8*this.frame;
			this.frame++;
			ctx.globalAlpha = Alpha;
		}
		if(treeWizz.onScreen == 1 && this.cd <=0){
			if(spell1 == "N/A" && spell2 == "N/A"){
				this.cd = 360;
				RandEffect.onScreen = 1;
				RandEffect.used = 0;
				RandEffect.x = 400;
				RandEffect.y = 288;
				RandomCube.timeLeft = 150;
				RandomCube.x = 400;
				RandomCube.y = 288;
			}
		}
		else if(treeWizz.onScreen == 1){
			this.cd-=1;
		}
	}
};

//jungle thieves
function Thief_Enemy(rp){
	this.respawn = rp;
};
Thief_Enemy.prototype = {
	type: "Thief",
	state: 2,
	spell: "N/A",
	x: 9000,
	onTree: 0,
	y: -400,
	width: 32,
	height: 32,
	speed: 4,
	speed2: 2,
	dirct: 0,
	dir: "W",
	LR: "",
	rp: 300,
	onScreen: 0,
	counter: 0,
	runCounter: -1,
	movement: false,
	stole: false,
	hp: 2,
	alphaChange: false,
	hptimer: 0,
	pts: 250,
	draw: function(){
	if(this.onScreen == 1){
		if(this.counter > 1){
			this.counter-=1;
		}
		if(this.counter == 1){
			this.movement = true;
			this.state = 2;
		}
		if(this.runCounter > 0){
			this.runCounter-=1;
		}
		if(this.runCounter == 0 || (this.x > 792 && this.onScreen == 1) || (this.x < 8 && this.onScreen == 1) || (this.y < 8 && this.onScreen == 1) || (this.y > 568 && this.onScreen == 1)
			|| (this.x >= MasterThief.x-MasterThief.width*0.5 && this.x <= MasterThief.x + MasterThief.width*0.5 && this.y >= MasterThief.y-MasterThief.height*0.5 && this.y <= MasterThief.y+MasterThief.height*0.5 && this.stole)){
			SmokeBomb.x1 = this.x;
			SmokeBomb.y1 = this.y;
			this.runCounter = -1;
			if(this.spell != "N/A"){
				MasterThief.queue+=1;
				if(MasterThief.spell1 == "N/A"){
					MasterThief.spell1 = this.spell;
				}
				else if(MasterThief.spell2 == "N/A"){
					MasterThief.spell2 = this.spell;
				}
			}
			this.spell = "N/A";
			this.speed = 4;
			this.speed2 = 2;
			this.onScreen = 0;
			this.state = 1;
			this.stole = false;
			this.respawn = this.rp;
			this.x = 9000;
			this.y = -9000;
			this.movement = false;
			this.hp = 2;
			this.hptimer = 0;
			this.counter = 0;
			SmokeBomb.frame = 0;
			SmokeBomb.onScreen = 1;
			SmokeBomb.draaw = 1;
			SmokeBomb.used = 0;
		}
		if(this.hptimer>0){
			this.hptimer-=1;
		}
		if(this.state == 1 || this.state == 2){
			ctx.globalAlpha = Alpha/3;
			this.alphaChange = true;
		}
		if (this.hptimer*0.5 != Math.round(this.hptimer*0.5)){
			ctx.globalAlpha = Alpha*0.5;
		}
		if(this.LR == "Left"){
			ctx.drawImage(ThievesL[this.state], this.x - this.width * 0.5, this.y - this.height * 0.5, this.width, this.height);
		}
		else if(this.LR == "Right"){
			ctx.drawImage(ThievesR[this.state], this.x - this.width * 0.5, this.y - this.height * 0.5, this.width, this.height);
		}
		if(this.movement){
			if(this.dir == "WA" || this.dir == "AS" || this.dir == "A"){
				this.LR = "Left";
			}
			else if(this.dir == "WD" || this.dir == "SD" || this.dir == "D"){
				this.LR = "Right";
			}
		}
		if (this.hptimer*0.5 != Math.round(this.hptimer*0.5)){
			ctx.globalAlpha = Alpha;
		}
		hpBarDraw(this);
		if(this.alphaChange){
			ctx.globalAlpha = Alpha;
			this.alphaChange = false;
		}
		if(this.spell != "N/A"){
			if(this.spell == "Fire"){
				ctx.drawImage(FireIcon, this.x-this.width*0.25, this.y - 48);
			}
			else if(this.spell == "Ice"){
				ctx.drawImage(IceIcon, this.x-this.width*0.25, this.y - 48);
			}
			else if(this.spell == "Earth"){
				ctx.drawImage(EarthIcon, this.x-this.width*0.25, this.y - 48);
			}
			else if(this.spell == "Lightning"){
				ctx.drawImage(LightningIcon, this.x-this.width*0.25, this.y - 48);
			}
			else if(this.spell == "Air"){
				ctx.drawImage(AirIcon, this.x-this.width*0.25, this.y - 48);
			}
			else if(this.spell == "Mystic"){
				ctx.drawImage(MysticIcon, this.x-this.width*0.25, this.y - 48);
			}
			else if(this.spell == "Water"){
				ctx.drawImage(WaterIcon, this.x-this.width*0.25, this.y - 48);
			}
			else if(this.spell == "Dark"){
				ctx.drawImage(DarkIcon, this.x-this.width*0.25, this.y - 48);
			}
			else if(this.spell == "Light"){
				ctx.drawImage(LightIcon, this.x-this.width*0.25, this.y - 48);
			}
		}
		}
	},
	steal: function(){
		if(this.spell == "N/A" && this.stole == false){
			if((collision(this.dir, this, player) || contained(player, this)) && (hptimer <= 0 || hptimer == 30 || hptimer == 29)){
				this.stole = true;
				this.runCounter = 45;
				if(spell2 != "N/A"){
					this.spell = spell2;
					spell2 = "N/A";
					typemarker3.x = player.x-player.width*0.5 - 32;
					typemarker3.y = player.y-player.height*0.5;
					typemarker3.timeLeft = 30;
					typemarker3.text = "Stolen!";
					earth.cast = -1;
					earth2.cast = -1;
					lightning.cast = -1;
					lightning2.cast = -1;
					firelightning.cast = -1;
					dark2.cast = -1;
					airice.cast = -1;
					darkwater.cast = -1;
					ice.cast = -1;
					fire.cast = -1;
					air.cast = -1;
					mystic.cast = -1;
					water.cast = -1;
					lightearth.cast = -1;
					player.speed = 8;
					Alpha = 1;
					lightearth.onScreen = 0;
					castingBar.x = player.x - player.width*0.5;
					castingBar.y = player.y + player.height*0.5;
					castingBar.width = player.width;
					castingBar.height = player.height*0.25;
					castingBar.width2 = 0;
					castingBar.onScreen = 0;
					castingBar.cast = -1;
					castingBar.castmax = 0;
				}
				else if(spell1 != "N/A"){
					this.spell = spell1;
					spell1 = "N/A";
					typemarker3.x = player.x-player.width*0.5 - 32;
					typemarker3.y = player.y-player.height*0.5;
					typemarker3.timeLeft = 30;
					typemarker3.text = "Stolen!";
					earth.cast = -1;
					earth2.cast = -1;
					lightning.cast = -1;
					lightning2.cast = -1;
					firelightning.cast = -1;
					dark2.cast = -1;
					airice.cast = -1;
					darkwater.cast = -1;
					ice.cast = -1;
					fire.cast = -1;
					air.cast = -1;
					mystic.cast = -1;
					water.cast = -1;
					lightearth.cast = -1;
					Alpha = 1;
					lightearth.onScreen = 0;
					player.speed = 8;
					castingBar.x = player.x - player.width*0.5;
					castingBar.y = player.y + player.height*0.5;
					castingBar.width = player.width;
					castingBar.height = player.height*0.25;
					castingBar.width2 = 0;
					castingBar.onScreen = 0;
					castingBar.cast = -1;
					castingBar.castmax = 0;
				}
				this.speed = 8;
				this.speed2 = 4;
				this.state = 3;
			}
		}
	}
};
var Thief = new Thief_Enemy(10);
var ThiefA = new Thief_Enemy(600);
var ThiefB = new Thief_Enemy(900);

//boss to go to fire level from meadow
var Dragon = {
	type: "Dragon",
	x: 9000,
	onTree: 0,
	y: -400,
	width: 268,
	height: 218,
	speed: 4,
	speed2: 2,
	dirct: 0,
	dir: "D",
	respawn: 2000,
	fall: 1,
	rp: -1,
	onScreen: 0,
	movement: false,
	cd: 90,
	hp: 6,
	hptimer: 0,
	width2: 0,
	height2: 0,
	frame: 0,
	pts: 5000,
	spawned: 0,
	drawShadow: false,
	entranceArray: {1: 0, 2: 0, 3: 1, 4: 1, 5: 2, 6: 2, 7: 3, 8: 3, 9: 4, 10: 4, 11: 5, 12: 5, 13: 5,
					14: 6, 15: 6, 16: 6, 17: 6, 18: 7, 19: 7, 20: 7, 21: 7, 22: 7, 23: 7, 24: 7, 25: 7, 26: 7,
					27: 8, 28: 8, 29: 9, 30: 9, 31: 9, 32: 9, 33: 9, 34: 9, 35: 9, 36: 9, 37: 9, 38: 9, 39: 9, 
					40: 10, 41: 10, 42: 10, 43: 11, 44: 11, 45: 11, 46: 12, 47: 12, 48: 12},
	draw: function(){
		if(this.onScreen == 1){
			if(this.hptimer*0.5 != Math.round(this.hptimer*0.5)){
				ctx.globalAlpha = Alpha*0.5;
			}
			ctx.drawImage(FbossIdle, 0, 0);
			if (this.hptimer*0.5 != Math.round(this.hptimer*0.5)){
				ctx.globalAlpha = Alpha;
			}
			hpBarDraw(this);
		}
		if(this.drawShadow){
			ctx.drawImage(FbossEntrance, 0, 576*this.entranceArray[Math.floor(this.fall*0.5)], 800, 576, 0, 0, 800, 576);
			if(this.fall < 96){
				this.fall++;
				if(this.fall == 40){
					Explosion.play();
					this.onScreen = 1;
					this.x = 64;
					this.y = 280;
					sFire.shoot(this);
				}
			}
			else{
				this.drawShadow = false;
			}
		}
	},
	spawn: function(){
		//if(!opened){
			if(this.hptimer > 0){
				this.hptimer-=1;
			}
			if(this.fall == 96){
				this.x = 64;
				this.y = 280;
				AList[3] = true;
				this.fall+=1;
				this.onScreen = 1;
			}
			if(this.cd > 0 && this.onScreen == 1){
				this.cd-=1;
			}
			if(this.spawned == 0){
				if(treeWizz.spawned == 0){
					this.respawn-=1;
				}
			}
			if(this.respawn ==0){
				var queue = true;
				this.spawned = 1;
				for(E in AllEnemies){
					if(AllEnemies[E].onScreen == 1){
						queue = false;
					}
				}
				if(queue){
					this.respawn-=1;
					this.drawShadow = true;
				}
			}
		//}
	},
	attack: function(){
		if(this.cd == 0 && this.onScreen ==1){
			this.cd = 120;
			if(Math.sqrt(((player.x - this.x)*(player.x - this.x)) + ((player.y - this.y)*(player.y - this.y))) < 448){
				sFire.shoot(this);
			}
			else{
				DragonFire.shoot();
			}
		}
	}
};
var DragonR = {
	type: "DragonR",
	x: 9000,
	onTree: 0,
	y: -400,
	width: 42,
	height: 64,
	speed: 4,
	speed2: 2,
	dirct: 0,
	dir: "D",
	respawn: -1,
	origrp: -1,
	rp: -1,
	onScreen: 0,
	movement: false,
	cd: 90,
	hp: 3,
	hptimer: 0,
	spawned: 0,
	pts: 2000,
	draw: function(){
		if(this.onScreen == 1){
			if(this.hptimer*0.5 != Math.round(this.hptimer*0.5)){
				ctx.globalAlpha = Alpha*0.5;
			}
			ctx.drawImage(FbossTotemD, 0, 0);
			if (this.hptimer*0.5 != Math.round(this.hptimer*0.5)){
				ctx.globalAlpha = Alpha;
			}
			hpBarDraw(this);
		}
	},
	spawn: function(){
		if(this.hptimer > 0){
			this.hptimer-=1;
		}
		if(this.cd > 0 && this.onScreen == 1){
			this.cd-=1;
		}
		if(this.spawned == 0 && Dragon.onScreen == 1){
			this.onScreen = 1;
			this.spawned = 1;
			this.x = 216;
			this.y = 396;
		}
	},
	attack: function(){
		if(this.onScreen == 1 && this.cd == 0){
			this.cd = 150;
			BigMeteor1.x = this.x;
			BigMeteor1.y = this.y;
			BigMeteor1.shoot();
		}
	}
};
var DragonL = {
	type: "DragonL",
	x: 9000,
	onTree: 0,
	y: -400,
	width: 42,
	height: 64,
	speed: 4,
	speed2: 2,
	dirct: 0,
	dir: "D",
	respawn: -1,
	origrp: -1,
	rp: -1,
	onScreen: 0,
	movement: false,
	cd: 90,
	hp: 3,
	hptimer: 0,
	width2: 0,
	height2: 0,
	pts: 2000,
	spawned: 0,
	draw: function(){
		if(this.onScreen == 1){
			if(this.hptimer*0.5 != Math.round(this.hptimer*0.5)){
				ctx.globalAlpha = Alpha*0.5;
			}
			ctx.drawImage(FbossTotemU, 0, 0);
			if (this.hptimer*0.5 != Math.round(this.hptimer*0.5)){
				ctx.globalAlpha = Alpha;
			}
			hpBarDraw(this);
		}
	},
	spawn: function(){
		if(this.hptimer > 0){
			this.hptimer-=1;
		}
		if(this.cd > 0 && this.onScreen == 1){
			this.cd-=1;
		}
		if(this.spawned == 0 && Dragon.onScreen == 1){
			this.onScreen = 1;
			this.spawned = 1;
			this.x = 216;
			this.y = 170;
		}
	},
	attack: function(){
		if(this.onScreen == 1 && this.cd == 0){
			this.cd = 150;
			BigMeteor2.x = this.x;
			BigMeteor2.y = this.y;
			BigMeteor2.shoot();
		}
	}
};
var DragonEffect = {
	x: 500,
	y: -400,
	width: 288,
	height: 288,
	frame: 0,
	cd: 90,
	draw: function(){
		if(Dragon.onScreen == 1 && (DragonL.onScreen == 1 || DragonR.onScreen == 1)){
			ctx.globalAlpha = Alpha*0.25;
			ctx.fillStyle = "red";
			ctx.fillRect(this.x-this.width*0.5, this.y-this.height*0.5, this.width, this.height);
			this.x = Dragon.x + 32;
			this.y = Dragon.y;
			this.frame++;
			ctx.globalAlpha = Alpha;
			for(O in ObsList){
				if(contained(ObsList[O], Dragon) || contained(ObsList[O], DragonR) || contained(ObsList[O], DragonL)
					|| collision("W", Dragon, ObsList[O]) || collision("W", DragonL, ObsList[O]) || collision("W", DragonR, ObsList[O])
					|| collision("D", Dragon, ObsList[O]) || collision("D", DragonL, ObsList[O]) || collision("D", DragonR, ObsList[O])
					|| collision("W", this, ObsList[O]) || collision("D", this, ObsList[O])){
					ObsList[O].x = 2000;
					ObsList[O].y = 2000;
				}
			}
		}
		if(Dragon.onScreen == 1 && this.cd <=0){
			if(spell1 == "N/A" && spell2 == "N/A"){
				this.cd = 360;
				RandEffect.onScreen = 1;
				RandEffect.used = 0;
				RandEffect.x = 400;
				RandEffect.y = 288;
				RandomCube.timeLeft = 150;
				RandomCube.x = 400;
				RandomCube.y = 288;
			}
		}
		else if(Dragon.onScreen == 1){
			this.cd-=1;
		}
	}
};
var DragonEffect2 = {
	x: 500,
	y: -400,
	width: 32,
	height: 32,
	onScreen: 0,
	frame: 0,
	played: 0,
	draw: function(){
		if(this.onScreen == 1){
			if(Alpha/(2+this.frame*0.1) < 0.1){
				ctx.globalAlpha = 0;
			}
			else{
				ctx.globalAlpha = Alpha/(2+this.frame*0.1);
			}
			if(this.played == 0){
				this.played = 1;
				radiofailure.currentTime=0;
				radiofailure.play();
				for(E in EMeteors){
					if(EMeteors[E] != EMeteor13 && EMeteors[E] != EMeteor14 && EMeteors[E] != EMeteor15 && EMeteors[E] != EMeteor16){
						EMeteors[E].timer = (Math.floor(Math.random() * 60));
					}
				}
				STATE = "Scorched";
				planted = false;
				rePlant();
				//place steams
				for(S in Steams){
					Steams[S].cd = Math.floor(Math.random() * 15) + 75;
				}
			}
			ctx.fillStyle = "#CC0000";
			ctx.fillRect(this.x-this.width*0.5, this.y-this.height*0.5, this.width, this.height);
			this.width = this.width + 8*this.frame;
			this.height = this.height + 8*this.frame;
			this.frame++;
			ctx.globalAlpha = Alpha;
		}
	}
};
//mutate for each state
var AllEnemies = {1: Enemy, 2: EnemyA, 3: EnemyB, 4: EnemyC, 5: Tenemy, 6: TenemyA, 7: TenemyB, 8: Sorceror, 9: Lavaman, 10: Lavaman2, 11: Lavaman3, 12: Lavaman4, 13: Spawner,
					14: treeWizz, 15: rootStrike, 16: rootStrike2, 17: rootStrike3, 18: rootStrike4, 19: Thief, 20: ThiefA, 21: ThiefB, 22: Dragon, 23: DragonR, 24: DragonL,
					25: BigMeteor1, 26: Meteor1, 27: Meteor2, 28: Meteor3, 29: Meteor4, 30: BigMeteor2, 31: Meteor5, 32: Meteor6, 33: Meteor7, 34: Meteor8, 35: MeteorD1, 36: MeteorD2,
					37: Lavaman5, 38: Lavaman6, 39: Lavaman7, 40: Lavaman8, 41: Spawner2, 42: MasterThief, 43: Croc, 44: Croc2, 45: Mosquito, 46: Mosquito2, 47: Mosquito3, 48: Mosquito4,
					49: MiniMum1, 50: MiniMum2, 51: MiniMum3, 52: MiniMum4, 53: Genie, 54: Lamp, 55: Scorp1, 56: Scorp2, 57: Scorp3, 58: Scorp4, 59: Anubis1, 60: MegaMummy, 61: Anubis2,
					62: Scorp5, 63: Scorp6, 64: Scorp7, 65: Scorp8};
function onHit(E){
	var deadz = false;
	if(E.type == 0){
		deadz = true;
		if(E == Scorp1 || E == Scorp2 || E == Scorp3 || E == Scorp4 || E == Scorp5 || E == Scorp6){
			E.index = 1;
			E.casting = false;
			E.castIndex = 1;
			E.cd = 0;
			E.moved = false;
			E.width = 96;
		}
		if(STATE == "Tutorial"){
			if(!Tutorial.lastMessage && !greyCube.timeLeft && ((!Tut1.onScreen && !Tut2.onScreen && !Tut3.onScreen) ||
				(!Tut1.onScreen && !Tut2.onScreen && !Tut4.onScreen) ||
				(!Tut1.onScreen && !Tut3.onScreen && !Tut4.onScreen) ||
				(!Tut2.onScreen && !Tut3.onScreen && !Tut4.onScreen))){
					greyCube.x = E.x;
					greyCube.y = E.y;
					greyCube.timeLeft = 9000;
				}
			else if(Tutorial.lastMessage && ((!Tut1.onScreen && !Tut2.onScreen && !Tut3.onScreen) ||
				(!Tut1.onScreen && !Tut2.onScreen && !Tut4.onScreen) ||
				(!Tut1.onScreen && !Tut3.onScreen && !Tut4.onScreen) ||
				(!Tut2.onScreen && !Tut3.onScreen && !Tut4.onScreen))){
					Tutorial.done = 1;
					dispCntrls = 1;
					$.jStorage.set("tutor", 1);
				}
		}
		if(E.speed2*2 == 8){
			if(Globblyfire.onScreen == 1 && Globblyfire2.onScreen == 1){
				Globblyfire3.x = E.x;
				Globblyfire3.y = E.y;
				Globblyfire3.shoot();
			}
			else if(Globblyfire.onScreen == 1){
				Globblyfire2.x = E.x;
				Globblyfire2.y = E.y;
				Globblyfire2.shoot();
			}
			else{
				Globblyfire.x = E.x;
				Globblyfire.y = E.y;
				Globblyfire.shoot();
			}
		}
		if(STATE == "Swamp" && E.bug == 0){
			//Make rarer
			E.rp = 300;
			if(Swudge.onScreen){
				Swudge2.x = E.x;
				Swudge2.y = E.y;
				Swudge2.onScreen = 1;
				Swudge2.LR = E.LR;
				Swudge2.index = 1;
				Globblyfire2.color = "#008000";
				Globblyfire2.shoot();
			}
			else{
				Globblyfire.color = "#008000";
				Globblyfire.shoot();
				Swudge.x = E.x;
				Swudge.y = E.y;
				Swudge.onScreen = 1;
				Swudge.LR = E.LR;
				Swudge.index = 1;
			}
		}
	}
	if(E.type == 0 && E.onTree == 1){
		deadz = false;
	}
	if(E.type == "Meteor" && E.immunity <= 0){
		deadz = false;
		E.timeLeft = 0;
		Killed.currentTime=0;
		Killed.play();
		if(E.height == 32){
			if(E.num != 2){
				Meteor1.timeLeft = 150;
				Meteor1.x = E.x;
				Meteor1.y = E.y;
				Meteor1.immunity = 5;
				Meteor2.timeLeft = 150;
				Meteor2.x = E.x;
				Meteor2.y = E.y;
				Meteor2.immunity = 5;
				Meteor3.timeLeft = 150;
				Meteor3.x = E.x;
				Meteor3.y = E.y;
				Meteor3.immunity = 5;
				Meteor4.timeLeft = 150;
				Meteor4.x = E.x;
				Meteor4.y = E.y;
				Meteor4.immunity = 5;
				MeteorD1.timeLeft = 150;
				MeteorD1.x = E.x;
				MeteorD1.y = E.y;
				MeteorD1.immunity = 5;
			}
			else{
				Meteor5.timeLeft = 150;
				Meteor5.x = E.x;
				Meteor5.y = E.y;
				Meteor5.immunity = 5;
				Meteor6.timeLeft = 150;
				Meteor6.x = E.x;
				Meteor6.y = E.y;
				Meteor6.immunity = 5;
				Meteor7.timeLeft = 150;
				Meteor7.x = E.x;
				Meteor7.y = E.y;
				Meteor7.immunity = 5;
				Meteor8.timeLeft = 150;
				Meteor8.x = E.x;
				Meteor8.y = E.y;
				Meteor8.immunity = 5;
				MeteorD2.timeLeft = 150;
				MeteorD2.x = E.x;
				MeteorD2.y = E.y;
				MeteorD2.immunity = 5;
			}
		}
	}
	//genie damage
	if(E == Lamp){
		if((Genie.onScreen) && !(Genie.hptimer > 0)){
			Genie.hp-=player.power;
			Genie.hptimer = 30;
			if(Genie.hp < 1){
				Genie.hp = 0;
				deadz = true;
			}
			LampPoof.onScreen = 1;
			LampPoof.x = E.x-16;
			LampPoof.y = E.y-16;
			Lamp.onScreen = 0;
			Lamp.cd = 90;
			if(!Genie.hp<= 0){
				E.x = -9000;
				E.y = -9000;
			}
			onDmg.currentTime=0;
			onDmg.play();
		}
	}
	if(E.type == 1 || E.type == 2 || E.type == -1 || E.type == "Thief" || (E.type == "Dragon" && DragonR.onScreen == 0 && DragonL.onScreen == 0)
		|| E.type == "DragonR" || E.type == "DragonL" || E.type == "MasterThief" || E.type == "Crocodile" || E.type == "Mosquito" ||
		E.type == "MiniMummy" || (E.type == "Anubis" && E.deadIndex == 0) || (E.type == "MegaMummy" && E.frame > 240) || E.type == "FireGhost" || E.type == "skeleton" || E == dog1){
		if(!(E.hptimer > 0)){
			if(E.type != "FireGhost" || (E.type == "FireGhost" && !E.spawnIndex && !E.arrowIndex && !E.arrowing && !E.disappearing)){
			E.hp-=player.power;
			E.hptimer = 30;
			if(E.hp < 0){
				E.hp = 0;
			}
			if(E.type == "Thief"){
				E.state = 3;
				E.counter = 0;
				E.movement = true;
				E.speed = 8;
				E.speed2 = 4;
			}
			else if(E.type == "FireGhost" && !FireGhost.dying){
				if(E.hp > 2){
					E.disappearIndex=1;
				}else{
					if(!FireGhost.arrowIndex && !FireGhost.arrowing){
						E.arrowIndex = 1;
						if(E.hp < 1){
							setTimeout(function(){
								FireGhost.arrowing = 0;
								FireGhost.spawnIndex = 0;
								FireGhost.arrowIndex = 0;
								FireGhost.disappearing = 0;
								FireGhost.dying = 1;
								onHit(FireGhost);
								SeenGraveyard = 1;
							}, 6000);
						}else{
							FireGhost.cd+=210;
							setTimeout(function(){
								FireGhost.arrowing = 0;
								FireGhost.spawnIndex = 0;
								FireGhost.arrowIndex = 0;
								FireGhost.disappearing = 1;
								FireGhost.x+=9000;
								FireGhost.meteorDisappearIndex++;
								FlameWall.used = 0;
								FlameWall.onScreen = 0;
								for(F in FlameWall.walls){
									FlameWall.walls[F].x = 900+Math.round(Math.random()*32)+1;
								}
							}, 6000);
						}
						return;
					}
				}
			}
			if(E.hp < 1){
				Killed.currentTime=0;
				Killed.play();
				deadz = true;
				if(E.type == 2){
					E.hp = 6;
					E.casted = false;
					E.cast = false;
					E.castIndex = 1;
				//	E.walkIndex = 1;
					E.spawnIndex = 1;
					E.waitIndex = 30;
					E.attckPlayer = false;
				}
				if(E.type == 1){
					SorcCastingBar.x = -100;
					SorcCastingBar.y = -200;
					SorcCastingBar.width = Sorceror.width;
					SorcCastingBar.height = Sorceror.height*0.25;
					SorcCastingBar.width2 = 0;
					SorcCastingBar.onScreen = 0;
					SorcCastingBar.cast = -1;
					SorcCastingBar.castmax = 0;
					sIce.color = "#00CCFF";
					sIce.timeLeft = 0;
					sIce.frame = 150;
					sIce.cast = -1;
					sFire.color = "#FF6600";
					sFire.timeLeft = 0;
					sFire.width = 32;
					sFire.height = 32;
					sFire.x = -100;
					sFire.y = -200;
					sFire.frame = 0;
					sFire.onScreen = 0;
					sFire.cast = -1;
					sFire.used = 0;
					sLightning.timeLeft = 0;
					sLightning.vwidth = 32;
					sLightning.vheight = 800;
					sLightning.hwidth = 800;
					sLightning.hheight = 32;
					sLightning.hstate = 0;
					sLightning.vstate = 0;
					sLightning.hx = 400;
					sLightning.hy = -2000;
					sLightning.vx = -2000;
					sLightning.vy = 288;
					sLightning.onScreen = 0;
					sLightning.cast = -1;
					sLightning.used = 0;
				}
				if(E.type == -1){
					BadWizards.currentTime=0;
					rootStrike.x = -2000;
					rootStrike.y = -2000;
					rootStrike.onScreen = 0;
					rootStrike.movement = false;
					rootStrike.hp = 2;
					for(R in roots11){
						roots11[R].onScreen = 0;
						roots11[R].movement = false;
						roots11[R].x = -9000;
						roots11[R].y = -9000;
					}
					rootStrike2.x = -2000;
					rootStrike2.y = -2000;
					rootStrike2.onScreen = 0;
					rootStrike2.movement = false;
					rootStrike2.hp = 2;
					for(R in roots12){
						roots12[R].onScreen = 0;
						roots12[R].movement = false;
						roots12[R].x = -9000;
						roots12[R].y = -9000;
					}
					rootStrike3.x = -2000;
					rootStrike3.y = -2000;
					rootStrike3.onScreen = 0;
					rootStrike3.hp = 2;
					rootStrike3.movement = false;
					for(R in roots13){
						roots13[R].onScreen = 0;
						roots13[R].movement = false;
						roots13[R].x = -9000;
						roots13[R].y = -9000;
					}
					rootStrike4.x = -2000;
					rootStrike4.y = -2000;
					rootStrike4.onScreen = 0;
					rootStrike4.movement = false;
					rootStrike4.hp = 2;
					for(R in roots14){
						roots14[R].onScreen = 0;
						roots14[R].movement = false;
						roots14[R].x = -9000;
						roots14[R].y = -9000;
					}
				}
				if(E.type == -1 || E.type == "Thief"){
					E.speed = 4;
					E.speed2 = 2;
					E.width = 32;
					E.height = 32;
				}
				if(E.type == "Mosquito"){
					E.hp = 1;
					E.hptimer = 0;
				}
				if(E.type == "MegaMummy"){
					E.hp = 12;
					E.hptimer = 0;
					//sandstorm
					SandStorm.onScreen = 1;
					var LR = Math.round(Math.random()*2)+1;
					if(LR == 1){
						SandStorm.dir = "D";
					}
					else{
						SandStorm.dir = "A";
					}
					SandStorm.timeLeft = SandStorm.maxtimeLeft;
					if(!Anubis1.onScreen){
						Anubis1.x = MegaMummy.x;
						Anubis1.y = MegaMummy.y - 128;
						if(Anubis1.y < 32){
							Anubis1.y = MegaMummy.y+256;
						}
					}
					if(!Anubis2.onScreen){
						Anubis2.x = MegaMummy.x;
						Anubis2.y = MegaMummy.y + 128;
						if(Anubis2.y > 544){
							Anubis2.y = MegaMummy.y-256;
						}
					}
				}
			}
			else{
				onDmg.currentTime=0;
				onDmg.play();
			}
			}
		}
	}
	if(deadz == true){
		deadz = false;
		//reset goods
		E.good = false;
		E.goodTimer = 0;
		E.goodNum = 0;
		E.goodTimerMax = 0;
		if(E.type == "FireGhost"){
			hpUp.x = FireGhost.x;
			hpUp.y = FireGhost.y;
			hpUp.boss = "FireGhost";
			FireGhostEffect.x = FireGhost.x;
			FireGhostEffect.y = FireGhost.y;
			FireGhostEffect.onScreen = 1;
			FireGhostEffect.played = 0;
			RandomCube.x = -100;
			RandomCube.y = -200;
			RandomCube.timeLeft = 0;
			RandomCube.index = 1;
			RandomCube.stage = "up";
			RandEffect.width = 32;
			RandEffect.height = 32;
			RandEffect.x = -100;
			RandEffect.y = -200;
			RandEffect.onScreen = 0;
			RandEffect.frame = 0;
			RandEffect.used = 0;
		}
		if(E.type == "Anubis"){
			E.hp = 8;
			E.hptimer = 0;
			//make sandpit
			E.deadIndex = 1;
			//make immmune
			E.onTree = 1;
		}
		if(E.type == "Lamp"){
			for(F in EMeteors){
				EMeteors[F].LR = 1;
				EMeteors[F].type = "Meteor";
				EMeteors[F].x = -9000;
				EMeteors[F].y = -2000;
				EMeteors[F].width = 32;
				EMeteors[F].height = 32;
				EMeteors[F].timer = -1;
				EMeteors[F].index = 1;
				EMeteors[F].launched = false;
			}
			Genie.onScreen = 0;
			Genie.movement = false;
			Genie.respawn = Genie.rp;
			Genie.x = -9000;
			Genie.y = -9000;
			hpUp.x = E.x;
			hpUp.y = E.y;
			hpUp.boss = "Genie";
			GenieEffect.x = E.x;
			GenieEffect.y = E.y;
			GenieEffect.onScreen = 1;
			GenieEffect.played = 0;
			var currPwr = player.power;
			player.power = 4;
			MiniMum1.hptimer = 0;
			MiniMum2.hptimer = 0;
			MiniMum3.hptimer = 0;
			MiniMum4.hptimer = 0;
			if(MiniMum1.onScreen){
				onHit(MiniMum1);
			}
			if(MiniMum2.onScreen){
				onHit(MiniMum2);
			}
			if(MiniMum3.onScreen){
				onHit(MiniMum3);
			}
			if(MiniMum4.onScreen){
				onHit(MiniMum4);
			}
			staticm = 1;
			player.power = currPwr;
			RandomCube.x = -100;
			RandomCube.y = -200;
			RandomCube.timeLeft = 0;
			RandomCube.index = 1;
			RandomCube.stage = "up";
			RandEffect.width = 32;
			RandEffect.height = 32;
			RandEffect.x = -100;
			RandEffect.y = -200;
			RandEffect.onScreen = 0;
			RandEffect.frame = 0;
			RandEffect.used = 0;
		}
		Killed.currentTime=0;
		Killed.play();
		if(E.type == -1){
			hpUp.x = E.x;
			hpUp.y = E.y;
			RandomCube.x = -100;
			RandomCube.y = -200;
			RandomCube.timeLeft = 0;
			RandomCube.index = 1;
			RandomCube.stage = "up";
			RandEffect.width = 32;
			RandEffect.height = 32;
			RandEffect.x = -100;
			RandEffect.y = -200;
			RandEffect.onScreen = 0;
			RandEffect.frame = 0;
			RandEffect.used = 0;
			TwizEffect.x = E.x;
			TwizEffect.y = E.y;
			TwizEffect.played = 0;
			hpUp.boss = "treeW";
			STATE = "Jungle";
			planted = false;
			TwizEffect.onScreen = 1;
		}
		else if(E.type == "Dragon"){
			hpUp.x = E.x;
			hpUp.y = E.y;
			RandomCube.x = -100;
			RandomCube.y = -200;
			RandomCube.timeLeft = 0;
			RandomCube.index = 1;
			RandomCube.stage = "up";
			RandEffect.width = 32;
			RandEffect.height = 32;
			RandEffect.x = -100;
			RandEffect.y = -200;
			RandEffect.onScreen = 0;
			RandEffect.frame = 0;
			RandEffect.used = 0;
			hpUp.boss = "Dragon";
			DragonEffect2.x = E.x;
			DragonEffect2.y = E.y;
			DragonEffect2.played = 0;
			DragonEffect2.onScreen = 1;
		}
		else if(E.type == "MasterThief"){
			//slow swudge spawn
			Enemy.respawn = 60;
			EnemyB.respawn = 60;
			if(Thief.onScreen == 1){
				Thief.hptimer = 0;
				Thief.hp = 1;
				onHit(Thief);
			}
			if(ThiefA.onScreen == 1){
				ThiefA.hptimer = 0;
				ThiefA.hp = 1;
				onHit(ThiefA);
			}
			if(ThiefB.onScreen == 1){
				ThiefB.hptimer = 0;
				ThiefB.hp = 1;
				onHit(ThiefB);
			}
			staticm = 1;
			if(E.x > 740){
				E.x = 740;
			}
			if(E.x < 60){
				E.x = 60;
			}
			if(E.y < 48){
				E.y = 48;
			}
			if(E.y > 528){
				E.y = 528;
			}
			hpUp.x = E.x;
			hpUp.y = E.y;
			hpUp.boss = "MasterThief";
			MasterTEffect.x = E.x;
			MasterTEffect.y = E.y;
			MasterTEffect.played = 0;
			MasterTEffect.onScreen = 1;
			for(O in obstacle1){
				if(!obstacle1[O].falling){
					lowBomb.currentTime = 0;
					lowBomb.play();
					obstacle1[O].falling = true;
					var randLR = Math.floor(Math.random() * 2) + 1;
					if(randLR == 1){
						randLR = "Left";
					}
					else{
						randLR = "Right";
					}
					obstacle1[O].LR = randLR
				}
			}
			RandomCube.x = -100;
			RandomCube.y = -200;
			RandomCube.timeLeft = 0;
			RandomCube.index = 1;
			RandomCube.stage = "up";
			RandEffect.width = 32;
			RandEffect.height = 32;
			RandEffect.x = -100;
			RandEffect.y = -200;
			RandEffect.onScreen = 0;
			RandEffect.frame = 0;
			RandEffect.used = 0;
			RandomCube2.x = -100;
			RandomCube2.y = -200;
			RandomCube2.timeLeft = 0;
			RandomCube2.index = 1;
			RandomCube2.stage = "up";
			RandEffect2.width = 32;
			RandEffect2.height = 32;
			RandEffect2.x = -100;
			RandEffect2.y = -200;
			RandEffect2.onScreen = 0;
			RandEffect2.frame = 0;
			RandEffect2.used = 0;
			RandomCube3.x = -100;
			RandomCube3.y = -200;
			RandomCube3.timeLeft = 0;
			RandomCube3.index = 1;
			RandomCube3.stage = "up";
			RandEffect3.width = 32;
			RandEffect3.height = 32;
			RandEffect3.x = -100;
			RandEffect3.y = -200;
			RandEffect3.onScreen = 0;
			RandEffect3.frame = 0;
			RandEffect3.used = 0;
			RandomCube4.x = -100;
			RandomCube4.y = -200;
			RandomCube4.timeLeft = 0;
			RandomCube4.index = 1;
			RandomCube4.stage = "up";
			RandEffect4.width = 32;
			RandEffect4.height = 32;
			RandEffect4.x = -100;
			RandEffect4.y = -200;
			RandEffect4.onScreen = 0;
			RandEffect4.frame = 0;
			RandEffect4.used = 0;
			RandomCube5.x = -100;
			RandomCube5.y = -200;
			RandomCube5.timeLeft = 0;
			RandomCube5.index = 1;
			RandomCube5.stage = "up";
			RandEffect5.width = 32;
			RandEffect5.height = 32;
			RandEffect5.x = -100;
			RandEffect5.y = -200;
			RandEffect5.onScreen = 0;
			RandEffect5.frame = 0;
			RandEffect5.used = 0;
			STATE = "Swamp";
		}
		if(E.type == "Thief"){
			E.state = 1;
			E.speed = 4;
			E.hp = 2;
			E.stole = false;
			if(E.spell == "Fire"){
				redCube.x = E.x;
				redCube.y = E.y;
				redCube.timeLeft = 120;
			}
			else if(E.spell == "Ice"){
				tealCube.x = E.x;
				tealCube.y = E.y;
				tealCube.timeLeft = 120;
			}
			else if(E.spell == "Earth"){
				greenCube.x = E.x;
				greenCube.y = E.y;
				greenCube.timeLeft = 120;
			}
			else if(E.spell == "Lightning"){
				yellowCube.x = E.x;
				yellowCube.y = E.y;
				yellowCube.timeLeft = 120;
			}
			else if(E.spell == "Air"){
				greyCube.x = E.x;
				greyCube.y = E.y;
				greyCube.timeLeft = 120;
			}
			else if(E.spell == "Mystic"){
				purpleCube.x = E.x;
				purpleCube.y = E.y;
				purpleCube.timeLeft = 120;
			}
			else if(E.spell == "Water"){
				blueCube.x = E.x;
				blueCube.y = E.y;
				blueCube.timeLeft = 120;
			}
			else if(E.spell == "Dark"){
				blackCube.x = E.x;
				blackCube.y = E.y;
				blackCube.timeLeft = 120;
			}
			else if(E.spell == "Light"){
				whiteCube.x = E.x;
				whiteCube.y = E.y;
				whiteCube.timeLeft = 120;
			}
			if(marker.x != -100 && marker2.x != -100 && marker3.x != -100){
				marker4.points = E.pts;
				marker4.mult = staticm;
				marker4.x = E.x;
				marker4.y = E.y;
				marker4.timeLeft = 20;
			}
			else if(marker.x != -100 && marker2.x != -100){
				marker3.points = "" + E.pts;
				marker3.mult = staticm;
				marker3.x = E.x;
				marker3.y = E.y;
				marker3.timeLeft = 20;
			}
			else if(marker.x != -100){
				marker2.points = "" + E.pts;
				marker2.mult = staticm;
				marker2.x = E.x;
				marker2.y = E.y;
				marker2.timeLeft = 20;
			}
			else{
				marker.points = "" + E.pts;
				marker.mult = staticm;
				marker.x = E.x;
				marker.y = E.y;
				marker.timeLeft = 20;
			}
			E.spell = "N/A";
		}
		else if(E.type != "DragonR" && E.type != "DragonL" && E.type != "Dragon" && E.type != -1 && E.type != "MasterThief" && E.type != "Lamp" && E.type != "Genie" && E.type != "FireGhost"){
			if(STATE == "Tutorial"){
				if(E == Enemy){
					redCube.x = E.x;
					redCube.y = E.y;
					redCube.timeLeft = 120;
					if(TutKill1 && !EnemyA.onScreen){
						TutKill2 = true;
					}
				}
				if(E == EnemyA){
					greyCube.x = E.x;
					greyCube.y = E.y;
					greyCube.timeLeft = 120;
					if(!Enemy.onScreen){
						TutKill2 = true;
					}
				}
				E.onScreen = 0;
				E.movement = false;
				E.x = -9000;
				E.y = -9000;
				TutKill1 = true;
			}
			else{
				var drop = Math.floor(Math.random() * 3) + 1;
				if(player.lucky){
					drop = 1;
				}
				if(drop == 1){
					if(STATE == 1){
						var dropped = Math.floor(Math.random() * 4) + 1;
					}else if(STATE == "Scorched" || STATE == "Jungle"){
						var dropped = Math.floor(Math.random() * 7) + 1;
					}else{
						var dropped = Math.floor(Math.random() * 9) + 1;
					}
				}
				else{
					var dropped = 0;
				}
				if(dropped == 1 && redCube.x == -100 && Thief.spell != "Fire" && ThiefA.spell != "Fire"
					 && ThiefB.spell != "Fire"){
					redCube.x = E.x;
					redCube.y = E.y;
					redCube.timeLeft = 120;
				}
				else if(dropped == 6 && tealCube.x == -100 && Thief.spell != "Ice" && ThiefA.spell != "Ice"
					 && ThiefB.spell != "Ice"){
					tealCube.x = E.x;
					tealCube.y = E.y;
					tealCube.timeLeft = 120;
				}
				else if(dropped == 3 && greenCube.x == -100 && Thief.spell != "Earth" && ThiefA.spell != "Earth"
					 && ThiefB.spell != "Earth"){
					greenCube.x = E.x;
					greenCube.y = E.y;
					greenCube.timeLeft = 120;
				}
				else if(dropped == 4 && yellowCube.x == -100 && Thief.spell != "Lightning" && ThiefA.spell != "Lightning"
					 && ThiefB.spell != "Lightning"){
					yellowCube.x = E.x;
					yellowCube.y = E.y;
					yellowCube.timeLeft = 120;
				}
				else if(dropped == 5 && greyCube.x == -100 && Thief.spell != "Air" && ThiefA.spell != "Air"
					 && ThiefB.spell != "Air"){
					greyCube.x = E.x;
					greyCube.y = E.y;
					greyCube.timeLeft = 120;
				}
				else if(dropped == 7 && purpleCube.x == -100 && Thief.spell != "Mystic" && ThiefA.spell != "Mystic"
					 && ThiefB.spell != "Mystic"){
					purpleCube.x = E.x;
					purpleCube.y = E.y;
					purpleCube.timeLeft = 120;
				}
				else if(dropped == 2 && blueCube.x == -100 && Thief.spell != "Water" && ThiefA.spell != "Water"
					 && ThiefB.spell != "Water"){
					blueCube.x = E.x;
					blueCube.y = E.y;
					blueCube.timeLeft = 120;
				}
				else if(dropped == 8 && blackCube.x == -100 && Thief.spell != "Dark" && ThiefA.spell != "Dark"
					 && ThiefB.spell != "Dark"){
					blackCube.x = E.x;
					blackCube.y = E.y;
					blackCube.timeLeft = 120;
				}
				else if(dropped == 9 && whiteCube.x == -100 && Thief.spell != "Light" && ThiefA.spell != "Light"
					 && ThiefB.spell != "Light"){
					whiteCube.x = E.x;
					whiteCube.y = E.y;
					whiteCube.timeLeft = 120;
				}
			}
		}
		if(STATE != "Tutorial"){
			if(marker.x != -100 && marker2.x != -100 && marker3.x != -100){
				marker4.points = E.pts;
				marker4.mult = staticm;
				marker4.x = E.x;
				marker4.y = E.y;
				marker4.timeLeft = 20;
			}
			else if(marker.x != -100 && marker2.x != -100){
				marker3.points = "" + E.pts;
				marker3.mult = staticm;
				marker3.x = E.x;
				marker3.y = E.y;
				marker3.timeLeft = 20;
			}
			else if(marker.x != -100){
				marker2.points = "" + E.pts;
				marker2.mult = staticm;
				marker2.x = E.x;
				marker2.y = E.y;
				marker2.timeLeft = 20;
			}
			else{
				marker.points = "" + E.pts;
				marker.mult = staticm;
				marker.x = E.x;
				marker.y = E.y;
				marker.timeLeft = 20;
			}
			if(E.type != "Anubis"){
				E.x = -9000;
				E.y = -9000;
			}
			E.onScreen = 0;
			E.respawn = E.rp;
			E.movement = false;
			Error = Aes.Ctr.encrypt(parseInt(Aes.Ctr.decrypt(Error, ErrorLogs, 256))+(E.pts * staticm) + "", ErrorLogs, 256);
			if(staticm < 10 && !SandStorm.onScreen){
				staticm++;
			}
			multtimer = 30;
			//Makes it harder - also stops specific enemies from getting short spawns. SHouldnt be a problem when game is done
			if(StateTimer/30 > 30 && E.type != "MiniMummy" && E.type != "MasterThief"  && E.type != "MegaMummy" && E.type != "Lamp" && E.type != "Genie" && E != Lavaman && E != Lavaman2 && E != Lavaman3 && E != Lavaman4 && E != Lavaman5 && E != Lavaman6 && E != Lavaman7 && E != Lavaman8
				&& E != Scorp7 && E != Scorp8){
				E.respawn-=Math.floor(StateTimer/30);
				if(E.respawn<30){
					E.respawn = 30;
				}
			}
		}
	}
}
// Enemy move paramaterized
function move(E){
	if(E.type == "Meteor"){
		MeteorMove(E);
	}
	else if(E.movement == true){
		if(E.dir == "W" && (STATE == "Swamp" || E.type == "Genie" || E.type == "FireGhost" || (!(obsCollision(obstacle1, E, E.dir)) && !(obsCollision(obstacle2, E, E.dir))
			&& !(obsCollision(obstacle3, E, E.dir)))) && !(collision(E.dir, E, player)) && !(collision(E.dir, E, Illusion))){
			Math.floor(E.y-=E.speed);
		}
		if(E.dir == "A" && (STATE == "Swamp" || E.type == "Genie" || E.type == "FireGhost" || (!(obsCollision(obstacle1, E, E.dir)) && !(obsCollision(obstacle2, E, E.dir))
			&& !(obsCollision(obstacle3, E, E.dir)))) && !(collision(E.dir, E, player)) && !(collision(E.dir, E, Illusion))){
			Math.floor(E.x-=E.speed);
		}
		if(E.dir == "S" && (STATE == "Swamp" || E.type == "Genie" || (!(obsCollision(obstacle1, E, E.dir)) && !(obsCollision(obstacle2, E, E.dir))
			&& !(obsCollision(obstacle3, E, E.dir)))) && !(collision(E.dir, E, player)) && !(collision(E.dir, E, Illusion)) && E.onTree != 1){
			Math.floor(E.y+=E.speed);
		}
		if(E.dir == "S" && E.onTree == 1){
			Math.floor(E.y+=E.speed);
		}
		if(E.dir == "D" && (STATE == "Swamp" || E.type == "Genie" || E.type == "FireGhost" || (!(obsCollision(obstacle1, E, E.dir)) && !(obsCollision(obstacle2, E, E.dir))
			&& !(obsCollision(obstacle3, E, E.dir)))) && !(collision(E.dir, E, player)) && !(collision(E.dir, E, Illusion))){
			Math.floor(E.x+=E.speed);
		}
		if(E.dir == "AS" && (STATE == "Swamp" || E.type == "Genie" || E.type == "FireGhost" || (!(obsCollision(obstacle1, E, E.dir)) && !(obsCollision(obstacle2, E, E.dir))
			&& !(obsCollision(obstacle3, E, E.dir)))) && !(collision(E.dir, E, player)) && !(collision(E.dir, E, Illusion))){
			Math.floor(E.y+=E.speed);
			Math.floor(E.x-=E.speed);
		}
		if(E.dir == "WA" && (STATE == "Swamp" || E.type == "Genie" || E.type == "FireGhost" || (!(obsCollision(obstacle1, E, E.dir)) && !(obsCollision(obstacle2, E, E.dir))
			&& !(obsCollision(obstacle3, E, E.dir)))) && !(collision(E.dir, E, player)) && !(collision(E.dir, E, Illusion))){
			Math.floor(E.y-=E.speed);
			Math.floor(E.x-=E.speed);
		}
		if(E.dir == "WD" && (STATE == "Swamp" || E.type == "Genie" || E.type == "FireGhost" || (!(obsCollision(obstacle1, E, E.dir)) && !(obsCollision(obstacle2, E, E.dir))
			&& !(obsCollision(obstacle3, E, E.dir)))) && !(collision(E.dir, E, player)) && !(collision(E.dir, E, Illusion))){
			Math.floor(E.y-=E.speed);
			Math.floor(E.x+=E.speed);
		}
		if(E.dir == "SD" && (STATE == "Swamp" || E.type == "Genie" || E.type == "FireGhost" || (!(obsCollision(obstacle1, E, E.dir)) && !(obsCollision(obstacle2, E, E.dir))
			&& !(obsCollision(obstacle3, E, E.dir)))) && !(collision(E.dir, E, player)) && !(collision(E.dir, E, Illusion))){
			Math.floor(E.y+=E.speed);
			Math.floor(E.x+=E.speed);
		}
		//fix enemy zig zag
		if(E.x*0.25 != Math.round(E.x*0.25) && E.speed*0.25 == Math.round(E.speed*0.25)){
			E.x+=1;
		}
		if(E.y*0.25 != Math.round(E.y*0.25) && E.speed*0.25 == Math.round(E.speed*0.25)){
			E.y+=1;
		}
		if(E.x*0.5 != Math.round(E.x*0.5) && E.speed*0.5 == Math.round(E.speed*0.5)){
			E.x+=1;
		}
		if(E.y*0.5 != Math.round(E.y*0.5) && E.speed*0.5 == Math.round(E.speed*0.5)){
			E.y+=1;
		}
		if(E.x/8 != Math.round(E.x/8) && E.speed/8 == Math.round(E.speed/8)){
			E.x+=1;
		}
		if(E.y/8 != Math.round(E.y/8) && E.speed/8 == Math.round(E.speed/8)){
			E.y+=1;
		}
	}	
}
// Enemy AI
function AI(E){	
	if(E.type != "Meteor"){	
		if(E.type == 0 && STATE == "Jungle" && E.bug == 1 && E.onTree == 1 && E.dirct == 0){
			E.onTree = 0;
			E.speed = E.speed2*2;
		}
		//do confusion stuff
		if(E.good){
			E.goodTimer-=1;
			if(E.goodTimer <=0){
				E.good = false;
			}
			var targx = 0;
			var targy = 0;
			for(A in AllEnemies){
				if(AllEnemies[A] != E && AllEnemies[A].onScreen && Math.sqrt((targx-E.x)*(targx-E.x) + (targy-E.y)*(targy-E.y))
				> Math.sqrt((AllEnemies[A].x-E.x)*(AllEnemies[A].x-E.x) + (AllEnemies[A].y-E.y)*(AllEnemies[A].y-E.y))){
					targx = AllEnemies[A].x;
					targy = AllEnemies[A].y;
					var xdiff = AllEnemies[A].x-E.x;
					var ydiff = AllEnemies[A].y-E.y;
					if(collision(E.dir, E, AllEnemies[A])){
						onHit(AllEnemies[A]);
					}
				}
			}
		}
		else{
			if(player.hp != 0 && !E.multiplayer){
				var xdiff = player.x - E.x;
				var ydiff = player.y - E.y;
			}
			else if(!E.multiplayer){
				var xdiff = player2.x - E.x;
				var ydiff = player2.y - E.y;
			}
			else if(player2.x != 5000 && player2.x != 9000){
				var xdiff = player2.x - E.x;
				var ydiff = player2.y - E.y;
			}
			else{
				var xdiff = player.x - E.x;
				var ydiff = player.y - E.y;
			}
		}
		//aim higher if genie
		if(E.type == "Genie"){
			ydiff-=32;
		}
		if(STATE == "Scorched" && E.type == 2 && E.onScreen == 1 && !E.attckPlayer){
		//find closest meteor, then closest side. Aim at meteor x +-124  -48
			xdiff = 2000;
			ydiff = 2000;
			var side = "";
			for(O in ObsList){
				if(ObsList[O].x != 2000){
					if((E == Spawner && Spawner2.TargetObj != ObsList[O]) || (E == Spawner2 && Spawner.TargetObj != ObsList[O])){
						//side1
						if(Math.sqrt(xdiff*xdiff + ydiff*ydiff) > Math.sqrt((ObsList[O].x-124-E.x)*(ObsList[O].x-124-E.x) + (ObsList[O].y-48-E.y)*(ObsList[O].y-48-E.y))){
							xdiff = ObsList[O].x-124-E.x;
							ydiff = ObsList[O].y-48-E.y;
							//tell other spawner it's targeting this meteor
							E.TargetObj = ObsList[O];
							side = "Left";
						}
						//side2
						if(Math.sqrt(xdiff*xdiff + ydiff*ydiff) > Math.sqrt((ObsList[O].x+124-E.x)*(ObsList[O].x+124-E.x) + (ObsList[O].y-48-E.y)*(ObsList[O].y-48-E.y))){
							xdiff = ObsList[O].x+124-E.x;
							ydiff = ObsList[O].y-48-E.y;
							//tell other spawner it's targeting this meteor
							E.TargetObj = ObsList[O];
							side = "Right";
						}
					}
				}
			}
			//AI: if at correct spot relative to meteor, movement = false, cast mode
			if(Math.abs(xdiff) < 5 && Math.abs(ydiff) < 5){
				E.movement = false;
				if(side == "Left"){
					E.dir = "D";
				}
				else{
					E.dir = "A";
				}
				E.cast = true;
				E.dirct = 2;
				if(xdiff == 4){
					E.x+=4;
				}
				else if(xdiff == 3){
					E.x+=3;
				}
				else if(xdiff == 2){
					E.x+=2;
				}
				else if(xdiff == 1){
					E.x+=1;
				}
				if(xdiff == -4){
					E.x-=4;
				}
				else if(xdiff == -3){
					E.x-=3;
				}
				else if(xdiff == -2){
					E.x-=2;
				}
				else if(xdiff == -1){
					E.x-=1;
				}
				if(ydiff == 4){
					E.y+=4;
				}
				else if(ydiff == 3){
					E.y+=3;
				}
				else if(ydiff == 2){
					E.y+=2;
				}
				else if(ydiff == 1){
					E.y+=1;
				}
				if(ydiff == -4){
					E.y-=4;
				}
				else if(ydiff == -3){
					E.y-=3;
				}
				else if(ydiff == -2){
					E.y-=2;
				}
				else if(ydiff == -1){
					E.y-=1;
				}
			}
			else{
				E.cast = false;
				E.castIndex = 1;
				E.spawnIndex = 1;
				E.movement = true;
				E.casted = false;
				E.waitIndex = 30;
			}
		}
		if(E.type == "bloodDog" && E.onScreen == 1 && !E.skulled){
		//find closest meteor, then closest side. Aim at meteor x +-124  -48
			xdiff = 2000;
			ydiff = 2000;
			for(A in AllEnemies){
				if(AllEnemies[A].onScreen && AllEnemies[A].type == "skeleton" && !AllEnemies[A].headless){
					if(Math.sqrt(xdiff*xdiff + ydiff*ydiff) > Math.sqrt((AllEnemies[A].x-E.x)*(AllEnemies[A].x-E.x) + (AllEnemies[A].y-E.y)*(AllEnemies[A].y-E.y))){
						xdiff = AllEnemies[A].x-E.x;
						ydiff = AllEnemies[A].y-E.y;
						var H = AllEnemies[A];
					}
				}
			}
			//AI: if at correct spot relative to meteor, movement = false, cast mode
			if(Math.abs(xdiff) < 5 && Math.abs(ydiff) < 5){
				H.hp = 1;
				onHit(H);
				E.skulled = 1;
				E.pts = 7000;
				E.hp=6;
				E.dmg = 2;
			}
			if(!H){
				xdiff = player.x - E.x;
				ydiff = player.y - E.y;
			}
		}
		if(Illusion.onScreen == 1){
			xdiff = Illusion.x - E.x;
			ydiff = Illusion.y - E.y;
		}
		if(E.type == -1 && E.cd == 0){
			E.grow();
		}
		if(E.type == -1 && E.dirct == 0){
			var quadrant = 0;
			var q1dir = {1: "S", 2: "D", 3: "SD"};
			var q2dir = {1: "S", 2: "A", 3: "AS"};
			var q3dir = {1: "W", 2: "D", 3: "WD"};
			var q4dir = {1: "W", 2: "A", 3: "WA"};
			var alldir = {1: "W", 2: "A", 3: "S", 4: "D", 5: "WA", 6: "WD", 7: "AS", 8: "SD"};
			E.dirct = Math.floor(Math.random()*30) + 5;
			var numbz = Math.floor(Math.random() * 3) + 1;
			var allnumbz = Math.floor(Math.random() * 8) + 1;
			if(E.x > 224 && E.x < 576 && E.y > 128 && E.y < 348){
				quadrant = 5;
			}
			else if(E.x <= 400 && E.y <= 238){
				quadrant = 1;
			}
			else if(E.x > 400 && E.y <= 238){
				quadrant = 2;
			}
			else if(E.x <= 400 && E.y > 238){
				quadrant = 3;
			}
			else if(E.x > 400 && E.y > 238){
				quadrant = 4;
			}
			if(quadrant == 1){
				E.dir = q1dir[numbz];
			}
			else if(quadrant == 2){
				E.dir = q2dir[numbz];
			}
			else if(quadrant == 3){
				E.dir = q3dir[numbz];
			}
			else if(quadrant == 4){
				E.dir = q4dir[numbz];
			}
			else if(quadrant == 5){
				E.dir = alldir[allnumbz];
			}
		}
		if(E.type == 1){
			if(E.spawned > 0){
				E.spawned-=1;
			}
			if(E.hptimer > 0){
				E.hptimer-=1;
			}
			if(E.spell == "Ice"){
				if(E.x > 32 && E.y > 32 && E.x < 768 && E.y < 560 && E.cd <=0){
					E.cast();
				}
				else if(!(E.cd <=0)){
					E.cd-=1;
				}
			}
			else if(E.spell == "Fire"){
				if((Math.abs(xdiff) < 144) && (Math.abs(ydiff) < 144) && E.cd <= 0
					&& E.x > 32 && E.x < 768 && E.y > 32 && E.y < 560){
					E.cast();
				}
				else if(!(E.cd <= 0)){
					E.cd-=1;
				}
			}
			else if(E.spell == "Lightning"){
				if(E.y <= player.y + sLightning.hheight*0.5 && E.y >= player.y && E.y> 32 && E.y < 560
					&& E.x > 32 && E.x < 768 && E.cd <= 0){
					E.cast();
				}
				else if(!(E.cd <= 0)){
					E.cd-=1;
				}	
			}
		}
		if((obsCollision(obstacle1, E, E.dir) || obsCollision(obstacle2, E, E.dir) || obsCollision(obstacle3, E, E.dir)) && STATE != "Swamp" && E.type != "Genie"){
			if((E.onTree != 1 && E.type != "MasterThief") || (E.type == "MasterThief" && sAir.onScreen != 1)){
				if(E.dir == "W"){
					E.dirct = 20;
					E.y+=2*E.speed;
					E.dir = "D";
				}
				else if(E.dir == "A"){
					E.dirct = 20;
					E.x+=E.speed;
					E.dir = "W";
				}
				else if(E.dir == "S"){
					E.dirct = 20;
					E.y-=2*E.speed;
					E.dir = "A";
				}
				else if(E.dir == "D"){
					E.dirct = 20;
					E.x-=E.speed;
					E.dir = "S";
				}
				else if(E.dir == "WD"){
					E.dirct = 20;
					E.x+=E.speed;
					E.y-=E.speed;
					E.dir = "W";
				}
				else if(E.dir == "WA"){
					E.dirct = 20;
					E.x-=E.speed;
					E.y-=E.speed;
					E.dir = "A";
				}
				else if(E.dir == "AS"){
					E.dirct = 20;
					E.x-=E.speed;
					E.y+=E.speed;
					E.dir = "S";
				}
				else if(E.dir == "SD"){
					E.dirct = 20;
					E.x+=E.speed;
					E.y+=E.speed;
					E.dir = "D";
				}
			}
		}
		else if(E.dirct == 0 && E.type != -1){
			if(E.type == "Thief" && MasterThief.onScreen == 1 && E.stole){
				var xdiff = MasterThief.x - E.x;
				var ydiff = MasterThief.y - E.y;
			}
			if(E.speed != 8){
				if(xdiff < 4 && ydiff < 4){
					E.dir = "WA";
					if((E.type == "Mosquito" && E.runTimer > 0) || (E.type == "Thief" && E.stole && MasterThief.onScreen == 0)){
						E.dir = "SD";
					}
				}
				else if(xdiff < 4 && ydiff > 4){
					E.dir = "AS";
					if((E.type == "Mosquito" && E.runTimer > 0) || (E.type == "Thief" && E.stole && MasterThief.onScreen == 0)){
						E.dir = "WD";
					}
				}
				else if(xdiff > 4 && ydiff < 4){
					E.dir = "WD";
					if((E.type == "Mosquito" && E.runTimer > 0) || (E.type == "Thief" && E.stole && MasterThief.onScreen == 0)){
						E.dir = "AS";
					}
				}
				else if (xdiff > 4 && ydiff > 4){
					E.dir = "SD";
					if((E.type == "Mosquito" && E.runTimer > 0) || (E.type == "Thief" && E.stole && MasterThief.onScreen == 0)){
						E.dir = "WA";
					}
				}
				else if (xdiff == 4 && ydiff > 4){
					E.dir = "S";
					if((E.type == "Mosquito" && E.runTimer > 0) || (E.type == "Thief" && E.stole && MasterThief.onScreen == 0)){
						E.dir = "W";
					}
				}
				else if(xdiff == 4 && ydiff < 4){
					E.dir = "W";
					if((E.type == "Mosquito" && E.runTimer > 0) || (E.type == "Thief" && E.stole && MasterThief.onScreen == 0)){
						E.dir = "S";
					}
				}
				else if(xdiff < 4 && ydiff == 4){
					E.dir = "A";
					if((E.type == "Mosquito" && E.runTimer > 0) || (E.type == "Thief" && E.stole && MasterThief.onScreen == 0)){
						E.dir = "D";
					}
				}
				else{
					E.dir = "D";
					if((E.type == "Mosquito" && E.runTimer > 0) || (E.type == "Thief" && E.stole && MasterThief.onScreen == 0)){
						E.dir = "A";
					}
				}
			}
			//fix globbly zig zag
			else{
				if(xdiff < 8 && ydiff < 8){
					E.dir = "WA";
					if(E.type == "Thief" && E.stole && MasterThief.onScreen == 0){
						E.dir = "SD";
					}
				}
				else if(xdiff < 8 && ydiff > 8){
					E.dir = "AS";
					if(E.type == "Thief" && E.stole && MasterThief.onScreen == 0){
						E.dir = "WD";
					}
				}
				else if(xdiff > 8 && ydiff < 8){
					E.dir = "WD";
					if(E.type == "Thief" && E.stole && MasterThief.onScreen == 0){
						E.dir = "AS";
					}
				}
				else if (xdiff > 8 && ydiff > 8){
					E.dir = "SD";
					if(E.type == "Thief" && E.stole && MasterThief.onScreen == 0){
						E.dir = "WA";
					}
				}
				else if (xdiff == 8 && ydiff > 8){
					E.dir = "S";
					if(E.type == "Thief" && E.stole && MasterThief.onScreen == 0){
						E.dir = "W";
					}
				}
				else if(xdiff == 8 && ydiff < 8){
					E.dir = "W";
					if(E.type == "Thief" && E.stole && MasterThief.onScreen == 0){
						E.dir = "S";
					}
				}
				else if(xdiff < 8 && ydiff == 8){
					E.dir = "A";
					if(E.type == "Thief" && E.stole && MasterThief.onScreen == 0){
						E.dir = "D";
					}
				}
				else{
					E.dir = "D";
					if(E.type == "Thief" && E.stole && MasterThief.onScreen == 0){
						E.dir = "A";
					}
				}
			}
		}
		else{
			E.dirct-=1;
		}
	}
}

function spawn(E){
	//make nothing happen on fadein
	if(STATE != 1 || (STATE == 1 && !FadeIn)){
		if(treeWizz.onScreen != 1 && typemarker.timeLeft == 0 && typemarker2.timeLeft == 0 && typemarker3.timeLeft == 0 && hpUp.x == -100
			&& Dragon.onScreen != 1 && (!(Dragon.spawned == 1 && player.power < 2) && !(treeWizz.spawned == 1 && player.maxhp < 7) && (!(MasterThief.spawned == 1 && !player.lucky) || E.type == "Thief")
			&& !(Genie.spawned == 1 && !player.regen) && E.type != "Genie" || E.type == "Dragon" || E.type == -1) && (!(FireGhost.spawned && player.maxhp < 7))){
			if(E.type == 1){
				if(E.respawn == 0 && STATE == 1){
					E.movement = true;
					E.hp = 3;
					E.onScreen = 1;
					E.cd = 0;
					E.spawned = 60;
					var SpellType = Math.floor(Math.random() * 3) + 1;
					if(SpellType == 1){
						E.spell = "Ice";
					}
					else if(SpellType == 2){
						E.spell = "Fire";
					}
					else{
						E.spell = "Lightning";
					}
				}
				else if(STATE != 1){
					E.respawn = -1;
				}
			}
			if(E.respawn == 0){
				if(E.bug == 1 && STATE == 1){
					var spawnSpotx = Math.floor(Math.random() * 23) + 2;
					var spawnSpoty = Math.floor(Math.random() * 16) + 2;
					E.x = spawnSpotx*32;
					E.y = spawnSpoty*32;
					var queue = true;
					for(O in ObsList){
						if(collision(E.dir, E, ObsList[O])){
							queue = false;
						}
					}
					E.x = -9000;
					E.y = -9000;
					if(queue){
						E.x+= spawnSpotx*32;
						E.y += spawnSpoty*32;
						E.growIndex = 1;
						var colorz = Math.floor(Math.random() * 3) + 1;
						if(colorz == 3){
							E.color = "Red";
						}
						else if(colorz == 2){
							E.color = "Blue";
						}
						else{
							E.color = "Yellow";
						}
						E.onScreen = 1;
						E.respawn-=1;
					}
				}
				else{
					E.movement = true;
					if(E.type == "Thief"){
						var spawnspot = Math.floor(Math.random() * 8) + 1;
						var LR = Math.floor(Math.random() * 2) + 1;
						if(E.counter == 1){
							E.movement = true;
							E.state = 2;
							E.respawn-=1;
							E.counter-=1;
						}
						if(obstacle1[spawnspot].x != 2000 && !obstacle1[spawnspot].falling){
							if(LR == 1){
								E.x = obstacle1[spawnspot].x-48;
								E.y = obstacle1[spawnspot].y-32;
								E.LR = "Left"
							}
							else if(LR == 2){
								E.x = obstacle1[spawnspot].x+48;
								E.y = obstacle1[spawnspot].y-32;
								E.LR = "Right"
							}
							E.onScreen = 1;
							E.respawn-=1;
							E.speed = 4;
							E.state = 1;
							E.spell = "N/A";
							E.stole = false;
							E.movement=false;
							E.hp = 2;
							E.counter = 60;
							E.hptimer = 0;
						}
						else{
							E.respawn+=1;
						}
					}
					if(E.type == 0 && E.bug == 1 && STATE == "Jungle"){
						var spawnTree = Math.floor(Math.random() * 8) + 1;
						if(obstacle1[spawnTree].x != 2000){
							E.x = obstacle1[spawnTree].x;
							E.y = obstacle1[spawnTree].y-576;
							E.onScreen = 1;
							E.respawn-=1;
							E.dir = "S";
							E.dirct = 72;
							E.onTree = 1;
							E.speed = 8;
						}
						else{
							E.respawn+=1;
						}
					}
					else if(E.type == "Crocodile" && STATE == "Swamp"){
						//spawn in random spot from player. If not in water try to spawn next frame
						var spawnLoc = Math.floor(Math.random() * 4) + 1;
						if(spawnLoc == 1){
							E.x = player.x-128;
							E.y = player.y;
						}
						else if(spawnLoc == 2){
							E.x = player.x+128;
							E.y = player.y;
						}
						else if(spawnLoc == 3){
							E.x = player.x;
							E.y = player.y+128;
						}
						else if(spawnLoc == 4){
							E.x = player.x;
							E.y = player.y-128;
						}
						var landed = false;
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
							if(collision(E.dir, E, obstacle1[O])){
								landed = true;
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
							if(collision("D", E, obstacle2[O]) || collision("A", E, obstacle2[O]) || collision("S", E, obstacle2[O]) || collision("W", E, obstacle2[O]) ||
								collision("WD", E, obstacle2[O]) || collision("WA", E, obstacle2[O]) || collision("AS", E, obstacle2[O]) || collision("SD", E, obstacle2[O])){
								landed = true;
							}
							obstacle2[O].x-=32;
							obstacle2[O].y-=obstacle2[O].height*0.5;
						}
						if(!landed){
							E.onScreen = 1;
							E.hp = 5;
							E.hptimer = 0;
							E.respawn-=1;
						}
						else{
							E.x = -9000;
							E.y = -9000;
						}
					}
					else if(E.type != "Thief" && E.type != "Crocodile"){
						if((E.type == "bloodDog" || E.type == "Mosquito") && STATE == "Graveyard"){
							E.hp = 6;
							if(E.type == "bloodDog"){
								E.skulled = false;
							}
						}
						if(STATE == "Graveyard"){
							var spawnPoint = Math.floor(Math.random() * 8) + 4;
						}
						else{
							var spawnPoint = Math.floor(Math.random() * 8) + 1;
						}
						if(spawnPoint == 1){
							E.x = 0;
							E.y = 0;
							E.onScreen = 1;
							E.respawn-=1;
						}
						else if(spawnPoint == 2){
							E.x = 400;
							E.y = 0;
							E.onScreen = 1;
							E.respawn-=1;
						}
						else if(spawnPoint == 3){
							E.x = 800;
							E.y = 0;
							E.onScreen = 1;
							E.respawn-=1;
						}
						else if(spawnPoint == 4){
							E.x = 0;
							E.y = 288;
							E.onScreen = 1;
							E.respawn-=1;
						}
						else if(spawnPoint == 5){
							E.x = 800;
							E.y = 288;
							E.onScreen = 1;
							E.respawn-=1;
						}
						else if(spawnPoint == 6){
							E.x = 0;
							E.y = 576;
							E.onScreen = 1;
							E.respawn-=1;
						}
						else if(spawnPoint == 7){
							E.x = 400;
							E.y = 576;
							E.onScreen = 1;
							E.respawn-=1;
						}
						else{
							E.x = 800;
							E.y = 576;
							E.onScreen = 1;
							E.respawn-=1;
						}
					}
				}
			}
			else if(E.type != "Crocodile"){
				//if flower needs to recalc spawn
				if(E.respawn == 0 && E.bug == 1 && STATE == 1){
					E.respawn+=1;
				}
				E.respawn-=1;
			}
			else if(E.type == "Crocodile" && STATE == "Swamp" && !landed){
				E.respawn-=1;
			}
		}
	}
}
function speedhandle(E){
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
		if(collision(E.dir, E, obstacle1[O])){
			var noswim = true;
			E.swimming = false;
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
		if(collision("D", E, obstacle2[O]) || collision("A", E, obstacle2[O]) || collision("S", E, obstacle2[O]) || collision("W", E, obstacle2[O]) ||
			collision("WD", E, obstacle2[O]) || collision("WA", E, obstacle2[O]) || collision("AS", E, obstacle2[O]) || collision("SD", E, obstacle2[O])){
			var noswim = true;
			E.swimming = false;
		}
		obstacle2[O].x-=32;
		obstacle2[O].y-=obstacle2[O].height*0.5;
	}
	if(!noswim){
		E.speed = 2;
		E.speed2 = 1;
		E.swimming = true;
	}
	else{
		E.speed = 4;
		E.speed2 = 2;
	}
}
// Don't get hunked!