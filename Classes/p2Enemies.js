var p2Enemy = {
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
	respawn: 1,
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
	multiplayer: true,
	// Draws the enemy on the canvas when called
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
					//	ctx.drawImage(santaL, this.x-this.width*0.5, this.y-this.height*0.5-2);
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
					//	ctx.drawImage(santaR, this.x-this.width*0.5+4, this.y-this.height*0.5-2);
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
					//	ctx.drawImage(santaL, this.x-this.width*0.5, this.y-this.height*0.5-2);
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
					//	ctx.drawImage(santaR, this.x-this.width*0.5+4, this.y-this.height*0.5-2);
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

// Enemy 2 - Pikkit/humpDump
var p2EnemyA = {
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
	respawn: 250,
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
	multiplayer: true,
	// Draws the enemy on the canvas when called
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
// Enemy 3 - Hudge
var p2EnemyB = {
	type: 0,
	bug: 0,
	onTree: 0,
	x: -9000,
	y: -9000,
	width: 32,
	height: 32,
	dirct: 0,
	speed: 4,
	speed2: 2,
	respawn: 125,
	pts: 50,
	rp: 100,
	dir: "W",
	LR: "",
	onScreen: 0,
	movement: false,
	swimming: true,
	index: 1,
	mudgeIndex: 1,
	hudgeIndex: 1,
	color: Math.floor(Math.random() * 2) + 1,
	multiplayer: true,
	// Draws the enemy on the canvas when called
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
					else if(STATE == 1){
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
					else if(STATE == 1){
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
					else if(STATE == 1){
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
					else if(STATE == 1){
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

// Enemy 4 - Pikkit/humpDump
var p2EnemyC = {
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
	respawn: 300,
	pts: 50,
	dir: "W",
	rp: 100,
	onScreen: 0,
	index: 1,
	mudgeIndex: 1,
	dindex: 1,
	growIndex: 1,
	color: "",
	LR: "",
	movement: false,
	multiplayer: true,
	// Draws the enemy on the canvas when called
	draw: function(){
		if(STATE == "Swamp"){
			this.respawn = 250;
		}
		if(this.onTree == 1){
			this.speed = 8;
		}
		if(STATE == 1 && this.onScreen == 1){
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