//--------------------------------------------- Enemies -----------------------------------------------------------------------------//

// Enemy 1 - Hudge
var Enemy = {
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
	// Draws the enemy on the canvas when called
	draw: function(){
		if(this.onScreen){
			if(STATE != "Swamp"){
				if(this.dir == "WA" || this.dir == "AS" || this.dir == "A"){
					this.LR = "Left";
					ctx.drawImage(HudgeL, this.x - this.width / 2, this.y - this.height / 2);
				}
				else if(this.dir == "WD" || this.dir == "SD" || this.dir == "D"){
					ctx.drawImage(HudgeR, this.x - this.width / 2, this.y - this.height / 2);
					this.LR = "Right";
				}
				else if(this.LR == "Left"){
					ctx.drawImage(HudgeL, this.x - this.width / 2, this.y - this.height / 2);
				}
				else{
					ctx.drawImage(HudgeR, this.x - this.width / 2, this.y - this.height / 2);
				}
			}
			else{
				if(this.swimming){
					if(this.dir == "WA" || this.dir == "AS" || this.dir == "A"){
						this.LR = "Left";
						ctx.drawImage(SwimswudgeL, this.x - this.width / 2, this.y - this.height / 2);
					}
					else if(this.dir == "WD" || this.dir == "SD" || this.dir == "D"){
						ctx.drawImage(SwimswudgeR, this.x - this.width / 2, this.y - this.height / 2);
						this.LR = "Right";
					}
					else if(this.LR == "Left"){
						ctx.drawImage(SwimswudgeL, this.x - this.width / 2, this.y - this.height / 2);
					}
					else{
						ctx.drawImage(SwimswudgeR, this.x - this.width / 2, this.y - this.height / 2);
					}
				}
				else{
					if(this.dir == "WA" || this.dir == "AS" || this.dir == "A"){
						this.LR = "Left";
						ctx.drawImage(swudgeL, this.x - this.width / 2, this.y - this.height / 2);
					}
					else if(this.dir == "WD" || this.dir == "SD" || this.dir == "D"){
						ctx.drawImage(swudgeR, this.x - this.width / 2, this.y - this.height / 2);
						this.LR = "Right";
					}
					else if(this.LR == "Left"){
						ctx.drawImage(swudgeL, this.x - this.width / 2, this.y - this.height / 2);
					}
					else{
						ctx.drawImage(swudgeR, this.x - this.width / 2, this.y - this.height / 2);
					}
				}
			}
		}
	}
};

// Enemy 2 - Pikkit/humpDump
var EnemyA = {
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
	dindex: 1,
	LR: "",
	movement: false,
	// Draws the enemy on the canvas when called
	draw: function(){
		if(STATE == "Swamp"){
			this.respawn = 250;
		}
		if(this.onTree == 1){
			this.speed = 8;
		}
		if(STATE == 1){
			if(this.dir == "WA" || this.dir == "AS" || this.dir == "A"){
				this.LR = "Left";
				ctx.drawImage(PikkitL, this.x - this.width / 2, this.y - this.height / 2);
			}
			else if(this.dir == "WD" || this.dir == "SD" || this.dir == "D"){
				ctx.drawImage(PikkitR, this.x - this.width / 2, this.y - this.height / 2);
				this.LR = "Right";
			}
			else if(this.LR == "Left"){
				ctx.drawImage(PikkitL, this.x - this.width / 2, this.y - this.height / 2);
			}
			else{
				ctx.drawImage(PikkitR, this.x - this.width / 2, this.y - this.height / 2);
			}
		}
		if(STATE == "Scorched"){
			if(this.dir == "WA" || this.dir == "AS" || this.dir == "A"){
				this.LR = "Left";
				ctx.drawImage(LavamanpicL, this.x - this.width / 2, this.y - this.height / 2);
			}
			else if(this.dir == "WD" || this.dir == "SD" || this.dir == "D"){
				ctx.drawImage(LavamanpicR, this.x - this.width / 2, this.y - this.height / 2);
				this.LR = "Right";
			}
			else if(this.LR == "Left"){
				ctx.drawImage(LavamanpicL, this.x - this.width / 2, this.y - this.height / 2);
			}
			else{
				ctx.drawImage(LavamanpicR, this.x - this.width / 2, this.y - this.height / 2);
			}
		}
		else if(STATE == "Jungle"){
			if(this.onTree == 1){
				if(this.dindex > 2){
					this.dindex = 1;
				}
				ctx.drawImage(humpdList[this.dindex], this.x - this.width / 2, this.y - this.height / 2);
				this.dindex++;
			}
			else{
				if(this.index > 3){
					this.index = 1;
				}
				if(this.dir == "WA" || this.dir == "AS" || this.dir == "A"){
					this.LR = "Left";
					ctx.drawImage(humplList[this.index], this.x - this.width / 2, this.y - this.height / 2);
				}
				else if(this.dir == "WD" || this.dir == "SD" || this.dir == "D"){
					ctx.drawImage(humprList[this.index], this.x - this.width / 2, this.y - this.height / 2);
					this.LR = "Right";
				}
				else if(this.LR == "Left"){
					ctx.drawImage(humplList[this.index], this.x - this.width / 2, this.y - this.height / 2);
				}
				else{
					ctx.drawImage(humprList[this.index], this.x - this.width / 2, this.y - this.height / 2);
				}
				this.index++;
			}
		}
	}
};

// Enemy 3 - Hudge
var EnemyB = {
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
	// Draws the enemy on the canvas when called
	draw: function(){
		if(this.onScreen){
			if(STATE != "Swamp"){
				if(this.dir == "WA" || this.dir == "AS" || this.dir == "A"){
					this.LR = "Left";
					ctx.drawImage(HudgeL, this.x - this.width / 2, this.y - this.height / 2);
				}
				else if(this.dir == "WD" || this.dir == "SD" || this.dir == "D"){
					ctx.drawImage(HudgeR, this.x - this.width / 2, this.y - this.height / 2);
					this.LR = "Right";
				}
				else if(this.LR == "Left"){
					ctx.drawImage(HudgeL, this.x - this.width / 2, this.y - this.height / 2);
				}
				else{
					ctx.drawImage(HudgeR, this.x - this.width / 2, this.y - this.height / 2);
				}
			}
			else{
				if(this.swimming){
					if(this.dir == "WA" || this.dir == "AS" || this.dir == "A"){
						this.LR = "Left";
						ctx.drawImage(SwimswudgeL, this.x - this.width / 2, this.y - this.height / 2);
					}
					else if(this.dir == "WD" || this.dir == "SD" || this.dir == "D"){
						ctx.drawImage(SwimswudgeR, this.x - this.width / 2, this.y - this.height / 2);
						this.LR = "Right";
					}
					else if(this.LR == "Left"){
						ctx.drawImage(SwimswudgeL, this.x - this.width / 2, this.y - this.height / 2);
					}
					else{
						ctx.drawImage(SwimswudgeR, this.x - this.width / 2, this.y - this.height / 2);
					}
				}
				else{
					if(this.dir == "WA" || this.dir == "AS" || this.dir == "A"){
						this.LR = "Left";
						ctx.drawImage(swudgeL, this.x - this.width / 2, this.y - this.height / 2);
					}
					else if(this.dir == "WD" || this.dir == "SD" || this.dir == "D"){
						ctx.drawImage(swudgeR, this.x - this.width / 2, this.y - this.height / 2);
						this.LR = "Right";
					}
					else if(this.LR == "Left"){
						ctx.drawImage(swudgeL, this.x - this.width / 2, this.y - this.height / 2);
					}
					else{
						ctx.drawImage(swudgeR, this.x - this.width / 2, this.y - this.height / 2);
					}
				}
			}
		}
	}
};

// Enemy 4 - Pikkit/humpDump
var EnemyC = {
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
	dindex: 1,
	LR: "",
	movement: false,
	// Draws the enemy on the canvas when called
	draw: function(){
		if(STATE == "Swamp"){
			this.respawn = 250;
		}
		if(this.onTree == 1){
			this.speed = 8;
		}
		if(STATE == 1 || STATE == "Swamp"){
			if(this.dir == "WA" || this.dir == "AS" || this.dir == "A"){
				this.LR = "Left";
				ctx.drawImage(PikkitL, this.x - this.width / 2, this.y - this.height / 2);
			}
			else if(this.dir == "WD" || this.dir == "SD" || this.dir == "D"){
				ctx.drawImage(PikkitR, this.x - this.width / 2, this.y - this.height / 2);
				this.LR = "Right";
			}
			else if(this.LR == "Left"){
				ctx.drawImage(PikkitL, this.x - this.width / 2, this.y - this.height / 2);
			}
			else{
				ctx.drawImage(PikkitR, this.x - this.width / 2, this.y - this.height / 2);
			}
		}
		if(STATE == "Scorched"){
			if(this.dir == "WA" || this.dir == "AS" || this.dir == "A"){
				this.LR = "Left";
				ctx.drawImage(LavamanpicL, this.x - this.width / 2, this.y - this.height / 2);
			}
			else if(this.dir == "WD" || this.dir == "SD" || this.dir == "D"){
				ctx.drawImage(LavamanpicR, this.x - this.width / 2, this.y - this.height / 2);
				this.LR = "Right";
			}
			else if(this.LR == "Left"){
				ctx.drawImage(LavamanpicL, this.x - this.width / 2, this.y - this.height / 2);
			}
			else{
				ctx.drawImage(LavamanpicR, this.x - this.width / 2, this.y - this.height / 2);
			}
		}
		else if(STATE == "Jungle"){
			if(this.onTree == 1){
				if(this.dindex > 2){
					this.dindex = 1;
				}
				ctx.drawImage(humpdList[this.dindex], this.x - this.width / 2, this.y - this.height / 2);
				this.dindex++;
			}
			else{
				if(this.index > 3){
					this.index = 1;
				}
				if(this.dir == "WA" || this.dir == "AS" || this.dir == "A"){
					this.LR = "Left";
					ctx.drawImage(humplList[this.index], this.x - this.width / 2, this.y - this.height / 2);
				}
				else if(this.dir == "WD" || this.dir == "SD" || this.dir == "D"){
					ctx.drawImage(humprList[this.index], this.x - this.width / 2, this.y - this.height / 2);
					this.LR = "Right";
				}
				else if(this.LR == "Left"){
					ctx.drawImage(humplList[this.index], this.x - this.width / 2, this.y - this.height / 2);
				}
				else{
					ctx.drawImage(humprList[this.index], this.x - this.width / 2, this.y - this.height / 2);
				}
				this.index++;
			}
		}
	}
};

// Fast Enemy - Globbly
var Tenemy = {
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
	respawn: 450,
	pts: 50,
	rp: 450,
	frame: 1,
	onScreen: 0,
	movement: false,
	// Draws the enemy on the canvas when called
	draw: function(){
		ctx.drawImage(Globblys[this.frame], this.x - this.width / 2, this.y - this.height / 2);
		this.frame+=1;
		if(this.frame > 8){
			this.frame = 1;
		}
		if(collision(this.dir, this, player)){
			onHit(this);
		}
	}
};
// Fast Enemy 2 - Globbly
var TenemyA = {
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
	respawn: 1200,
	pts: 50,
	rp: 450,
	frame: 1,
	onScreen: 0,
	movement: false,
	// Draws the enemy on the canvas when called
	draw: function(){
		ctx.drawImage(Globblys[this.frame], this.x - this.width / 2, this.y - this.height / 2);
		this.frame+=1;
		if(this.frame > 8){
			this.frame = 1;
		}
		if(collision(this.dir, this, player)){
			onHit(this);
		}
	}
};

// Fast Enemy 3 - Globbly
var TenemyB = {
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
	respawn: 900,
	pts: 50,
	rp: 450,
	frame: 1,
	onScreen: 0,
	movement: false,
	// Draws the enemy on the canvas when called
	draw: function(){
		ctx.drawImage(Globblys[this.frame], this.x - this.width / 2, this.y - this.height / 2);
		this.frame+=1;
		if(this.frame > 8){
			this.frame = 1;
		}
		if(collision(this.dir, this, player)){
			onHit(this);
		}
	}
};

// Lavaman
var Lavaman = {
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
		if(this.dir == "WA" || this.dir == "AS" || this.dir == "A"){
			this.LR = "Left";
			ctx.drawImage(LavamanpicL, this.x - this.width / 2, this.y - this.height / 2);
		}
		else if(this.dir == "WD" || this.dir == "SD" || this.dir == "D"){
			ctx.drawImage(LavamanpicR, this.x - this.width / 2, this.y - this.height / 2);
			this.LR = "Right";
		}
		else if(this.LR == "Left"){
			ctx.drawImage(LavamanpicL, this.x - this.width / 2, this.y - this.height / 2);
		}
		else{
			ctx.drawImage(LavamanpicR, this.x - this.width / 2, this.y - this.height / 2);
		}
	}
};
var Lavaman2 = {
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
		if(this.dir == "WA" || this.dir == "AS" || this.dir == "A"){
			this.LR = "Left";
			ctx.drawImage(LavamanpicL, this.x - this.width / 2, this.y - this.height / 2);
		}
		else if(this.dir == "WD" || this.dir == "SD" || this.dir == "D"){
			ctx.drawImage(LavamanpicR, this.x - this.width / 2, this.y - this.height / 2);
			this.LR = "Right";
		}
		else if(this.LR == "Left"){
			ctx.drawImage(LavamanpicL, this.x - this.width / 2, this.y - this.height / 2);
		}
		else{
			ctx.drawImage(LavamanpicR, this.x - this.width / 2, this.y - this.height / 2);
		}
	}
};
var Lavaman3 = {
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
		if(this.dir == "WA" || this.dir == "AS" || this.dir == "A"){
			this.LR = "Left";
			ctx.drawImage(LavamanpicL, this.x - this.width / 2, this.y - this.height / 2);
		}
		else if(this.dir == "WD" || this.dir == "SD" || this.dir == "D"){
			ctx.drawImage(LavamanpicR, this.x - this.width / 2, this.y - this.height / 2);
			this.LR = "Right";
		}
		else if(this.LR == "Left"){
			ctx.drawImage(LavamanpicL, this.x - this.width / 2, this.y - this.height / 2);
		}
		else{
			ctx.drawImage(LavamanpicR, this.x - this.width / 2, this.y - this.height / 2);
		}
	}
};
var Lavaman4 = {
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
		if(this.dir == "WA" || this.dir == "AS" || this.dir == "A"){
			this.LR = "Left";
			ctx.drawImage(LavamanpicL, this.x - this.width / 2, this.y - this.height / 2);
		}
		else if(this.dir == "WD" || this.dir == "SD" || this.dir == "D"){
			ctx.drawImage(LavamanpicR, this.x - this.width / 2, this.y - this.height / 2);
			this.LR = "Right";
		}
		else if(this.LR == "Left"){
			ctx.drawImage(LavamanpicL, this.x - this.width / 2, this.y - this.height / 2);
		}
		else{
			ctx.drawImage(LavamanpicR, this.x - this.width / 2, this.y - this.height / 2);
		}
	}
};
// Lavaman
var Lavaman5 = {
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
		if(this.dir == "WA" || this.dir == "AS" || this.dir == "A"){
			this.LR = "Left";
			ctx.drawImage(LavamanpicL, this.x - this.width / 2, this.y - this.height / 2);
		}
		else if(this.dir == "WD" || this.dir == "SD" || this.dir == "D"){
			ctx.drawImage(LavamanpicR, this.x - this.width / 2, this.y - this.height / 2);
			this.LR = "Right";
		}
		else if(this.LR == "Left"){
			ctx.drawImage(LavamanpicL, this.x - this.width / 2, this.y - this.height / 2);
		}
		else{
			ctx.drawImage(LavamanpicR, this.x - this.width / 2, this.y - this.height / 2);
		}
	}
};
var Lavaman6 = {
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
		if(this.dir == "WA" || this.dir == "AS" || this.dir == "A"){
			this.LR = "Left";
			ctx.drawImage(LavamanpicL, this.x - this.width / 2, this.y - this.height / 2);
		}
		else if(this.dir == "WD" || this.dir == "SD" || this.dir == "D"){
			ctx.drawImage(LavamanpicR, this.x - this.width / 2, this.y - this.height / 2);
			this.LR = "Right";
		}
		else if(this.LR == "Left"){
			ctx.drawImage(LavamanpicL, this.x - this.width / 2, this.y - this.height / 2);
		}
		else{
			ctx.drawImage(LavamanpicR, this.x - this.width / 2, this.y - this.height / 2);
		}
	}
};
var Lavaman7 = {
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
		if(this.dir == "WA" || this.dir == "AS" || this.dir == "A"){
			this.LR = "Left";
			ctx.drawImage(LavamanpicL, this.x - this.width / 2, this.y - this.height / 2);
		}
		else if(this.dir == "WD" || this.dir == "SD" || this.dir == "D"){
			ctx.drawImage(LavamanpicR, this.x - this.width / 2, this.y - this.height / 2);
			this.LR = "Right";
		}
		else if(this.LR == "Left"){
			ctx.drawImage(LavamanpicL, this.x - this.width / 2, this.y - this.height / 2);
		}
		else{
			ctx.drawImage(LavamanpicR, this.x - this.width / 2, this.y - this.height / 2);
		}
	}
};
var Lavaman8 = {
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
		if(this.dir == "WA" || this.dir == "AS" || this.dir == "A"){
			this.LR = "Left";
			ctx.drawImage(LavamanpicL, this.x - this.width / 2, this.y - this.height / 2);
		}
		else if(this.dir == "WD" || this.dir == "SD" || this.dir == "D"){
			ctx.drawImage(LavamanpicR, this.x - this.width / 2, this.y - this.height / 2);
			this.LR = "Right";
		}
		else if(this.LR == "Left"){
			ctx.drawImage(LavamanpicL, this.x - this.width / 2, this.y - this.height / 2);
		}
		else{
			ctx.drawImage(LavamanpicR, this.x - this.width / 2, this.y - this.height / 2);
		}
	}
};
var lavamenlist = {1: Lavaman, 2: Lavaman2, 3: Lavaman3, 4: Lavaman4, 5: Lavaman5, 6: Lavaman6, 7: Lavaman7, 8: Lavaman8};
// PORTAL TO HELL
var Spawner = {
	type: 2,
	x: 2000,
	y: -9000,
	onTree: 0,
	width: 64,
	height: 64,
	speed: 2,
	speed2: 1,
	dirct: 0,
	hp: 5,
	hptimer: 0,
	respawn: 300,
	dir: "W",
	rp: 450,
	pts: 500,
	onScreen: 0,
	cd: 60,
	movement: false,
	// Draws the enemy on the canvas when called
	draw: function(){
		if(this.hptimer >0){
			this.hptimer-=1;
		}
		if (this.hptimer/2 != Math.round(this.hptimer/2)){
			ctx.fillStyle = "white";
			ctx.fillRect(this.x - this.width / 2, this.y - this.height / 2, this.width, this.height);
		}
		else{
			ctx.drawImage(Splavaman, this.x - this.width / 2, this.y - this.height / 2);
		}
		hpBarDraw(this);
	},
	fire: function(){
		if(this.onScreen == 1){
			if(this.cd<= 0){
				if(Lavaman.onScreen == 0){
					SpawnerSpawn.currentTime=0;
					SpawnerSpawn.play();
					Lavaman.onScreen = 1;
					Lavaman.x = this.x-this.width/2;
					Lavaman.y = this.y-this.height/2;
					Lavaman.movement = true;
					Lavaman.cd = 15;
					this.cd = 60;
				}
				else if(Lavaman2.onScreen == 0){
					SpawnerSpawn.currentTime=0;
					SpawnerSpawn.play();
					Lavaman2.onScreen = 1;
					Lavaman2.x = this.x-this.width/2;
					Lavaman2.y = this.y-this.height/2;
					Lavaman2.movement = true;
					Lavaman2.cd = 15;
					this.cd = 60;
				}
				else if(Lavaman3.onScreen == 0){
					SpawnerSpawn.currentTime=0;
					SpawnerSpawn.play();
					Lavaman3.onScreen = 1;
					Lavaman3.x = this.x-this.width/2;
					Lavaman3.y = this.y-this.height/2;
					Lavaman3.movement = true;
					Lavaman3.cd = 15;
					this.cd = 60;
				}
				else if(Lavaman4.onScreen == 0){
					SpawnerSpawn.currentTime=0;
					SpawnerSpawn.play();
					Lavaman4.onScreen = 1;
					Lavaman4.x = this.x-this.width/2;
					Lavaman4.y = this.y-this.height/2;
					Lavaman4.movement = true;
					Lavaman4.cd = 15;
					this.cd = 60;
				}
			}
			else{
				this.cd-=1;
			}
		}
	}
};
var Spawner2 = {
	type: 2,
	x: 2000,
	y: -9000,
	onTree: 0,
	width: 64,
	height: 64,
	speed: 2,
	speed2: 1,
	dirct: 0,
	hp: 5,
	hptimer: 0,
	respawn: 900,
	dir: "W",
	rp: 450,
	pts: 500,
	onScreen: 0,
	cd: 60,
	movement: false,
	// Draws the enemy on the canvas when called
	draw: function(){
		if(this.hptimer >0){
			this.hptimer-=1;
		}
		if (this.hptimer/2 != Math.round(this.hptimer/2)){
			ctx.fillStyle = "white";
			ctx.fillRect(this.x - this.width / 2, this.y - this.height / 2, this.width, this.height);
		}
		else{
			ctx.drawImage(Splavaman, this.x - this.width / 2, this.y - this.height / 2);
		}
		hpBarDraw(this);
	},
	fire: function(){
		if(this.onScreen == 1){
			if(this.cd<= 0){
				if(Lavaman5.onScreen == 0){
					SpawnerSpawn.currentTime=0;
					SpawnerSpawn.play();
					Lavaman5.onScreen = 1;
					Lavaman5.x = this.x-this.width/2;
					Lavaman5.y = this.y-this.height/2;
					Lavaman5.movement = true;
					Lavaman5.cd = 15;
					this.cd = 60;
				}
				else if(Lavaman6.onScreen == 0){
					SpawnerSpawn.currentTime=0;
					SpawnerSpawn.play();
					Lavaman6.onScreen = 1;
					Lavaman6.x = this.x-this.width/2;
					Lavaman6.y = this.y-this.height/2;
					Lavaman6.movement = true;
					Lavaman6.cd = 15;
					this.cd = 60;
				}
				else if(Lavaman7.onScreen == 0){
					SpawnerSpawn.currentTime=0;
					SpawnerSpawn.play();
					Lavaman7.onScreen = 1;
					Lavaman7.x = this.x-this.width/2;
					Lavaman7.y = this.y-this.height/2;
					Lavaman7.movement = true;
					Lavaman7.cd = 15;
					this.cd = 60;
				}
				else if(Lavaman8.onScreen == 0){
					SpawnerSpawn.currentTime=0;
					SpawnerSpawn.play();
					Lavaman8.onScreen = 1;
					Lavaman8.x = this.x-this.width/2;
					Lavaman8.y = this.y-this.height/2;
					Lavaman8.movement = true;
					Lavaman8.cd = 15;
					this.cd = 60;
				}
			}
			else{
				this.cd-=1;
			}
		}
	}
};
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
		if (this.hptimer/2 != Math.round(this.hptimer/2)){
			ctx.drawImage(Wizzurd2, this.x - this.width / 2, this.y - this.height / 2);
		}
		else{
			ctx.drawImage(Sorcerorpng, this.x - this.width / 2, this.y - this.height / 2);
		}
		hpBarDraw(this);
		if(this.spell == "Fire"){
			ctx.drawImage(FireIcon, this.x-this.width/4, this.y - 48);
		}
		if(this.spell == "Ice"){
			ctx.drawImage(IceIcon, this.x-this.width/4, this.y - 48);
		}
		if(this.spell == "Lightning"){
			ctx.drawImage(LightningIcon, this.x-this.width/4, this.y - 48);
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
	height: 32,
	speed: 4,
	speed2: 2,
	dirct: 0,
	dir: "W",
	respawn: -1,
	rp: -1,
	onScreen: 0,
	movement: false,
	cd: 90,
	hp: 6,
	hptimer: 0,
	width2: 0,
	height2: 0,
	deadtrees: 0,
	herp: 0,
	frame: 0,
	pts: 5000,
	spawned: 0,
	index: 1,
	draw: function(){
		if (this.hptimer/2 != Math.round(this.hptimer/2)){
			ctx.drawImage(Wizzurd2, this.x - this.width / 2, this.y - this.height / 2, this.width, this.height);
		}
		else{
			ctx.drawImage(Treewizzez[this.index], this.x - this.width / 2, this.y - this.height / 2, this.width, this.height);
			this.index++;
			if(this.index > 8){
				this.index = 1;
			}
		}
		hpBarDraw(this);
	},
	spawn: function(){
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
					this.herp = 0;
				}
			}
		}
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
			if(attack == 3 && this.hp < 6){
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
			ctx.globalAlpha = Alpha/2;
			ctx.fillStyle = "#228b22";
			ctx.fillRect(this.x-this.width/2, this.y-this.height/2, this.width, this.height);
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
// Thief enemy
var Thief = {
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
	respawn: 10,
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
			|| (this.x >= MasterThief.x-MasterThief.width/2 && this.x <= MasterThief.x + MasterThief.width/2 && this.y >= MasterThief.y-MasterThief.height/2 && this.y <= MasterThief.y+MasterThief.height/2 && this.stole)){
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
		if (this.hptimer/2 != Math.round(this.hptimer/2)){
			ctx.fillStyle = "white"
			ctx.fillRect(this.x - this.width / 2, this.y - this.height / 2, this.width, this.height);
		}
		else if(this.LR == "Left"){
			ctx.drawImage(ThievesL[this.state], this.x - this.width / 2, this.y - this.height / 2, this.width, this.height);
		}
		else if(this.LR == "Right"){
			ctx.drawImage(ThievesR[this.state], this.x - this.width / 2, this.y - this.height / 2, this.width, this.height);
		}
		if(this.movement){
			if(this.dir == "WA" || this.dir == "AS" || this.dir == "A"){
				this.LR = "Left";
			}
			else if(this.dir == "WD" || this.dir == "SD" || this.dir == "D"){
				this.LR = "Right";
			}
		}
		hpBarDraw(this);
		if(this.alphaChange){
			ctx.globalAlpha = Alpha;
			this.alphaChange = false;
		}
		if(this.spell != "N/A"){
			if(this.spell == "Fire"){
				ctx.drawImage(FireIcon, this.x-this.width/4, this.y - 48);
			}
			if(this.spell == "Ice"){
				ctx.drawImage(IceIcon, this.x-this.width/4, this.y - 48);
			}
			if(this.spell == "Earth"){
				ctx.drawImage(EarthIcon, this.x-this.width/4, this.y - 48);
			}
			if(this.spell == "Lightning"){
				ctx.drawImage(LightningIcon, this.x-this.width/4, this.y - 48);
			}
			if(this.spell == "Air"){
				ctx.drawImage(AirIcon, this.x-this.width/4, this.y - 48);
			}
			if(this.spell == "Mystic"){
				ctx.drawImage(MysticIcon, this.x-this.width/4, this.y - 48);
			}
			if(this.spell == "Water"){
				ctx.drawImage(WaterIcon, this.x-this.width/4, this.y - 48);
			}
			if(this.spell == "Dark"){
				ctx.drawImage(DarkIcon, this.x-this.width/4, this.y - 48);
			}
		}
		}
	},
	steal: function(){
		if(this.spell == "N/A" && this.stole == false){
			if((collision(this.dir, this, player) || contained(player, this)) && (hptimer <= 0 || hptimer == 30)){
				this.stole = true;
				this.runCounter = 45;
				if(spell2 != "N/A"){
					this.spell = spell2;
					spell2 = "N/A";
					typemarker3.x = player.x-player.width/2 - 32;
					typemarker3.y = player.y-player.height/2;
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
					player.speed = 8;
					castingBar.x = player.x - player.width/2;
					castingBar.y = player.y + player.height/2;
					castingBar.width = player.width;
					castingBar.height = player.height/4;
					castingBar.width2 = 0;
					castingBar.onScreen = 0;
					castingBar.cast = -1;
					castingBar.castmax = 0;
				}
				else if(spell1 != "N/A"){
					this.spell = spell1;
					spell1 = "N/A";
					typemarker3.x = player.x-player.width/2 - 32;
					typemarker3.y = player.y-player.height/2;
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
					player.speed = 8;
					castingBar.x = player.x - player.width/2;
					castingBar.y = player.y + player.height/2;
					castingBar.width = player.width;
					castingBar.height = player.height/4;
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
// Thief enemy
var ThiefA = {
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
	respawn: 600,
	rp: 300,
	onScreen: 0,
	alphaChange: false,
	counter: 0,
	runCounter: -1,
	movement: false,
	stole: false,
	hp: 2,
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
			|| (this.x >= MasterThief.x-MasterThief.width/2 && this.x <= MasterThief.x + MasterThief.width/2 && this.y >= MasterThief.y-MasterThief.height/2 && this.y <= MasterThief.y+MasterThief.height/2 && this.stole)){
			SmokeBombA.x1 = this.x;
			SmokeBombA.y1 = this.y;
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
			SmokeBombA.frame = 0;
			SmokeBombA.onScreen = 1;
			SmokeBombA.draaw = 1;
			SmokeBombA.used = 0;
		}
		if(this.hptimer>0){
			this.hptimer-=1;
		}
		if(this.state == 1 || this.state == 2){
			ctx.globalAlpha = Alpha/3;
			this.alphaChange = true;
		}
		if (this.hptimer/2 != Math.round(this.hptimer/2)){
			ctx.fillStyle = "white"
			ctx.fillRect(this.x - this.width / 2, this.y - this.height / 2, this.width, this.height);
		}
		else if(this.LR == "Left"){
			ctx.drawImage(ThievesL[this.state], this.x - this.width / 2, this.y - this.height / 2, this.width, this.height);
		}
		else if(this.LR == "Right"){
			ctx.drawImage(ThievesR[this.state], this.x - this.width / 2, this.y - this.height / 2, this.width, this.height);
		}
		if(this.movement){
			if(this.dir == "WA" || this.dir == "AS" || this.dir == "A"){
				this.LR = "Left";
			}
			else if(this.dir == "WD" || this.dir == "SD" || this.dir == "D"){
				this.LR = "Right";
			}
		}
		hpBarDraw(this);
		if(this.alphaChange){
			ctx.globalAlpha = Alpha;
			this.alphaChange = false;
		}
		if(this.spell != "N/A"){
			if(this.spell == "Fire"){
				ctx.drawImage(FireIcon, this.x-this.width/4, this.y - 48);
			}
			if(this.spell == "Ice"){
				ctx.drawImage(IceIcon, this.x-this.width/4, this.y - 48);
			}
			if(this.spell == "Earth"){
				ctx.drawImage(EarthIcon, this.x-this.width/4, this.y - 48);
			}
			if(this.spell == "Lightning"){
				ctx.drawImage(LightningIcon, this.x-this.width/4, this.y - 48);
			}
			if(this.spell == "Air"){
				ctx.drawImage(AirIcon, this.x-this.width/4, this.y - 48);
			}
			if(this.spell == "Mystic"){
				ctx.drawImage(MysticIcon, this.x-this.width/4, this.y - 48);
			}
			if(this.spell == "Water"){
				ctx.drawImage(WaterIcon, this.x-this.width/4, this.y - 48);
			}
			if(this.spell == "Dark"){
				ctx.drawImage(DarkIcon, this.x-this.width/4, this.y - 48);
			}
		}
		}
	},
	steal: function(){
		if(this.spell == "N/A" && this.stole == false){
			if((collision(this.dir, this, player) || contained(player, this)) && (hptimer <= 0 || hptimer == 30)){
				this.stole = true;
				this.runCounter = 45;
				if(spell2 != "N/A"){
					this.spell = spell2;
					spell2 = "N/A";
					typemarker3.x = player.x-player.width/2 - 32;
					typemarker3.y = player.y-player.height/2;
					typemarker3.timeLeft = 30;
					typemarker3.text = "Stolen!";
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
					player.speed = 8;
					castingBar.x = player.x - player.width/2;
					castingBar.y = player.y + player.height/2;
					castingBar.width = player.width;
					castingBar.height = player.height/4;
					castingBar.width2 = 0;
					castingBar.onScreen = 0;
					castingBar.cast = -1;
					castingBar.castmax = 0;
				}
				else if(spell1 != "N/A"){
					this.spell = spell1;
					spell1 = "N/A";
					typemarker3.x = player.x-player.width/2 - 32;
					typemarker3.y = player.y-player.height/2;
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
					player.speed = 8;
					water.cast = -1;
					castingBar.x = player.x - player.width/2;
					castingBar.y = player.y + player.height/2;
					castingBar.width = player.width;
					castingBar.height = player.height/4;
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
// Thief enemy
var ThiefB = {
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
	respawn: 900,
	rp: 300,
	onScreen: 0,
	counter: 0,
	alphaChange: false,
	runCounter: -1,
	movement: false,
	stole: false,
	hp: 2,
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
			|| (this.x >= MasterThief.x-MasterThief.width/2 && this.x <= MasterThief.x + MasterThief.width/2 && this.y >= MasterThief.y-MasterThief.height/2 && this.y <= MasterThief.y+MasterThief.height/2 && this.stole)){
			SmokeBombB.x1 = this.x;
			SmokeBombB.y1 = this.y;
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
			SmokeBombB.frame = 0;
			SmokeBombB.onScreen = 1;
			SmokeBombB.draaw = 1;
			SmokeBombB.used = 0;
		}
		if(this.hptimer>0){
			this.hptimer-=1;
		}
		if(this.state == 1 || this.state == 2){
			ctx.globalAlpha = Alpha/3;
			this.alphaChange = true;
		}
		if (this.hptimer/2 != Math.round(this.hptimer/2)){
			ctx.fillStyle = "white"
			ctx.fillRect(this.x - this.width / 2, this.y - this.height / 2, this.width, this.height);
		}
		else if(this.LR == "Left"){
			ctx.drawImage(ThievesL[this.state], this.x - this.width / 2, this.y - this.height / 2, this.width, this.height);
		}
		else if(this.LR == "Right"){
			ctx.drawImage(ThievesR[this.state], this.x - this.width / 2, this.y - this.height / 2, this.width, this.height);
		}
		if(this.movement){
			if(this.dir == "WA" || this.dir == "AS" || this.dir == "A"){
				this.LR = "Left";
			}
			else if(this.dir == "WD" || this.dir == "SD" || this.dir == "D"){
				this.LR = "Right";
			}
		}
		hpBarDraw(this);
		if(this.alphaChange){
			ctx.globalAlpha = Alpha;
			this.alphaChange = false;
		}
		if(this.spell != "N/A"){
			if(this.spell == "Fire"){
				ctx.drawImage(FireIcon, this.x-this.width/4, this.y - 48);
			}
			if(this.spell == "Ice"){
				ctx.drawImage(IceIcon, this.x-this.width/4, this.y - 48);
			}
			if(this.spell == "Earth"){
				ctx.drawImage(EarthIcon, this.x-this.width/4, this.y - 48);
			}
			if(this.spell == "Lightning"){
				ctx.drawImage(LightningIcon, this.x-this.width/4, this.y - 48);
			}
			if(this.spell == "Air"){
				ctx.drawImage(AirIcon, this.x-this.width/4, this.y - 48);
			}
			if(this.spell == "Mystic"){
				ctx.drawImage(MysticIcon, this.x-this.width/4, this.y - 48);
			}
			if(this.spell == "Water"){
				ctx.drawImage(WaterIcon, this.x-this.width/4, this.y - 48);
			}
			if(this.spell == "Dark"){
				ctx.drawImage(DarkIcon, this.x-this.width/4, this.y - 48);
			}
		}
		}
	},
	steal: function(){
		if(this.spell == "N/A" && this.stole == false){
			if((collision(this.dir, this, player) || contained(player, this)) && (hptimer <= 0 || hptimer == 30)){
				this.stole = true;
				this.runCounter = 45;
				if(spell2 != "N/A"){
					this.spell = spell2;
					spell2 = "N/A";
					typemarker3.x = player.x-player.width/2 - 32;
					typemarker3.y = player.y-player.height/2;
					typemarker3.timeLeft = 30;
					typemarker3.text = "Stolen!";
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
					player.speed = 8;
					castingBar.x = player.x - player.width/2;
					castingBar.y = player.y + player.height/2;
					castingBar.width = player.width;
					castingBar.height = player.height/4;
					castingBar.width2 = 0;
					castingBar.onScreen = 0;
					castingBar.cast = -1;
					castingBar.castmax = 0;
				}
				else if(spell1 != "N/A"){
					this.spell = spell1;
					spell1 = "N/A";
					typemarker3.x = player.x-player.width/2 - 32;
					typemarker3.y = player.y-player.height/2;
					typemarker3.timeLeft = 30;
					typemarker3.text = "Stolen!";
					earth.cast = -1;
					earth2.cast = -1;
					lightning.cast = -1;
					lightning2.cast = -1;
					firelightning.cast = -1;
					ice.cast = -1;
					fire.cast = -1;
					air.cast = -1;
					mystic.cast = -1;
					water.cast = -1;
					dark2.cast = -1;
					airice.cast = -1;
					darkwater.cast = -1;
					player.speed = 8;
					castingBar.x = player.x - player.width/2;
					castingBar.y = player.y + player.height/2;
					castingBar.width = player.width;
					castingBar.height = player.height/4;
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
	draw: function(){
		if(this.onScreen == 1){
			if(this.hptimer/2 != Math.round(this.hptimer/2)){
				ctx.fillStyle = "white";
				ctx.fillRect(this.x-this.width/2, this.y-this.height/2, this.width, this.height);
			}
			else{
				ctx.drawImage(FbossIdle, 0, 0);
			}
		ctx.fillStyle = "yellow";
		if(this.hp == 6){
			ctx.fillRect(this.x, this.y - this.height/2 - 32, player.width/4, player.height/4);
			ctx.fillRect(this.x + 13, this.y - this.height/2 - 32, player.width/4, player.height/4);
			ctx.fillRect(this.x + 26, this.y - this.height/2 - 32, player.width/4, player.height/4);
		}
		else if(this.hp == 5){
			ctx.fillRect(this.x, this.y - this.height/2 - 32, player.width/4, player.height/4);
			ctx.fillRect(this.x + 13, this.y - this.height/2 - 32, player.width/4, player.height/4);
			ctx.fillStyle = "red";
			ctx.fillRect(this.x + 26, this.y - this.height/2 - 32, player.width/4, player.height/4);
		}
		else if(this.hp == 4){
			ctx.fillRect(this.x, this.y - this.height/2 - 32, player.width/4, player.height/4);
			ctx.fillStyle = "red";
			ctx.fillRect(this.x + 13, this.y - this.height/2 - 32, player.width/4, player.height/4);
			ctx.fillRect(this.x + 26, this.y - this.height/2 - 32, player.width/4, player.height/4);
		}
		else if(this.hp == 3){
			ctx.fillStyle = "red";
			ctx.fillRect(this.x, this.y - this.height/2 - 32, player.width/4, player.height/4);
			ctx.fillRect(this.x + 13, this.y - this.height/2 - 32, player.width/4, player.height/4);
			ctx.fillRect(this.x + 26, this.y - this.height/2 - 32, player.width/4, player.height/4);
		}
		else if(this.hp == 2){
			ctx.fillStyle = "red";
			ctx.fillRect(this.x, this.y - this.height/2 - 32, player.width/4, player.height/4);
			ctx.fillRect(this.x + 13, this.y - this.height/2 - 32, player.width/4, player.height/4);
		}
		else{
			ctx.fillStyle = "red";
			ctx.fillRect(this.x, this.y - this.height/2 - 32, player.width/4, player.height/4);
		}
	}
	},
	spawn: function(){
		if(this.hptimer > 0){
			this.hptimer-=1;
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
				this.x = 64;
				this.y = 280;
				this.onScreen = 1;
				sFire.shoot(this);
			}
		}
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
			if(this.hptimer/2 != Math.round(this.hptimer/2)){
				ctx.fillStyle = "white";
				ctx.fillRect(this.x-this.width/2, this.y-this.height/2, this.width, this.height);
			}
			else{
				ctx.drawImage(FbossTotemD, 0, 0);
			}
		ctx.fillStyle = "yellow";
		if(this.hp == 6){
			ctx.fillRect(this.x - (this.width/2), this.y + this.height/2 + this.height/4 - 16, player.width/4, player.height/4);
			ctx.fillRect(this.x - (this.width/2) + 13, this.y + this.height/2 + this.height/4 - 16, player.width/4, player.height/4);
			ctx.fillRect(this.x - (this.width/2) + 26, this.y + this.height/2 + this.height/4 - 16, player.width/4, player.height/4);
		}
		else if(this.hp == 5){
			ctx.fillRect(this.x - (this.width/2), this.y + this.height/2 + this.height/4 - 16, player.width/4, player.height/4);
			ctx.fillRect(this.x - (this.width/2) + 13, this.y + this.height/2 + this.height/4 - 16, player.width/4, player.height/4);
			ctx.fillStyle = "red";
			ctx.fillRect(this.x - (this.width/2) + 26, this.y + this.height/2 + this.height/4 - 16, player.width/4, player.height/4);
		}
		else if(this.hp == 4){
			ctx.fillRect(this.x - (this.width/2), this.y + this.height/2 + this.height/4 - 16, player.width/4, player.height/4);
			ctx.fillStyle = "red";
			ctx.fillRect(this.x - (this.width/2) + 13, this.y + this.height/2 + this.height/4 - 16, player.width/4, player.height/4);
			ctx.fillRect(this.x - (this.width/2) + 26, this.y + this.height/2 + this.height/4 - 16, player.width/4, player.height/4);
		}
		else if(this.hp == 3){
			ctx.fillStyle = "red";
			ctx.fillRect(this.x - (this.width/2), this.y + this.height/2 + this.height/4 - 16, player.width/4, player.height/4);
			ctx.fillRect(this.x - (this.width/2) + 13, this.y + this.height/2 + this.height/4 - 16, player.width/4, player.height/4);
			ctx.fillRect(this.x - (this.width/2) + 26, this.y + this.height/2 + this.height/4 - 16, player.width/4, player.height/4);
		}
		else if(this.hp == 2){
			ctx.fillStyle = "red";
			ctx.fillRect(this.x - (this.width/2), this.y + this.height/2 + this.height/4 - 16, player.width/4, player.height/4);
			ctx.fillRect(this.x - (this.width/2) + 13, this.y + this.height/2 + this.height/4 - 16, player.width/4, player.height/4);
		}
		else{
			ctx.fillStyle = "red";
			ctx.fillRect(this.x - (this.width/2), this.y + this.height/2 + this.height/4 - 16, player.width/4, player.height/4);
		}
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
			if(this.hptimer/2 != Math.round(this.hptimer/2)){
				ctx.fillStyle = "white";
				ctx.fillRect(this.x-this.width/2, this.y-this.height/2, this.width, this.height);
			}
			else{
				ctx.drawImage(FbossTotemU, 0, 0);
			}
		ctx.fillStyle = "yellow";
		if(this.hp == 6){
			ctx.fillRect(this.x - (this.width/2), this.y - this.height/2 - this.height/4 + 16, player.width/4, player.height/4);
			ctx.fillRect(this.x - (this.width/2) + 13, this.y - this.height/2 - this.height/4 + 16, player.width/4, player.height/4);
			ctx.fillRect(this.x - (this.width/2) + 26, this.y - this.height/2 - this.height/4 + 16, player.width/4, player.height/4);
		}
		else if(this.hp == 5){
			ctx.fillRect(this.x - (this.width/2), this.y - this.height/2 - this.height/4 + 16, player.width/4, player.height/4);
			ctx.fillRect(this.x - (this.width/2) + 13, this.y - this.height/2 - this.height/4 + 16, player.width/4, player.height/4);
			ctx.fillStyle = "red";
			ctx.fillRect(this.x - (this.width/2) + 26, this.y - this.height/2 - this.height/4 + 16, player.width/4, player.height/4);
		}
		else if(this.hp == 4){
			ctx.fillRect(this.x - (this.width/2), this.y - this.height/2 - this.height/4 + 16, player.width/4, player.height/4);
			ctx.fillStyle = "red";
			ctx.fillRect(this.x - (this.width/2) + 13, this.y - this.height/2 - this.height/4 + 16, player.width/4, player.height/4);
			ctx.fillRect(this.x - (this.width/2) + 26, this.y - this.height/2 - this.height/4 + 16, player.width/4, player.height/4);
		}
		else if(this.hp == 3){
			ctx.fillStyle = "red";
			ctx.fillRect(this.x - (this.width/2), this.y - this.height/2 - this.height/4 + 16, player.width/4, player.height/4);
			ctx.fillRect(this.x - (this.width/2) + 13, this.y - this.height/2 - this.height/4 + 16, player.width/4, player.height/4);
			ctx.fillRect(this.x - (this.width/2) + 26, this.y - this.height/2 - this.height/4 + 16, player.width/4, player.height/4);
		}
		else if(this.hp == 2){
			ctx.fillStyle = "red";
			ctx.fillRect(this.x - (this.width/2), this.y - this.height/2 - this.height/4 + 16, player.width/4, player.height/4);
			ctx.fillRect(this.x - (this.width/2) + 13, this.y - this.height/2 - this.height/4 + 16, player.width/4, player.height/4);
		}
		else{
			ctx.fillStyle = "red";
			ctx.fillRect(this.x - (this.width/2), this.y - this.height/2 - this.height/4 + 16, player.width/4, player.height/4);
		}
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
			ctx.globalAlpha = Alpha/4;
			ctx.fillStyle = "red";
			ctx.fillRect(this.x-this.width/2, this.y-this.height/2, this.width, this.height);
			this.x = Dragon.x + 32;
			this.y = Dragon.y;
			this.frame++;
			ctx.globalAlpha = Alpha;
			for(O in ObsList){
				if(contained(ObsList[O], Dragon) || contained(ObsList[O], DragonR) || contained(ObsList[O], DragonL)){
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
			ctx.globalAlpha = Alpha*0.2;
			if(this.played == 0){
				this.played = 1;
				radiofailure.currentTime=0;
				radiofailure.play();
				for(M in EMeteors){
					EMeteors[M].timeLeft = Math.floor(Math.random() * 150) + 30;
				}
				STATE = "Scorched";
				planted = false;
				rePlant();
			}
			ctx.fillStyle = "#CC0000";
			ctx.fillRect(this.x-this.width/2, this.y-this.height/2, this.width, this.height);
			this.width = this.width + 8*this.frame;
			this.height = this.height + 8*this.frame;
			this.frame++;
		}
	}
};
var AllEnemies = {1: Enemy, 2: EnemyA, 3: EnemyB, 4: EnemyC, 5: Tenemy, 6: TenemyA, 7: TenemyB, 8: Sorceror, 9: Lavaman, 10: Lavaman2, 11: Lavaman3, 12: Lavaman4, 13: Spawner,
					14: treeWizz, 15: rootStrike, 16: rootStrike2, 17: rootStrike3, 18: rootStrike4, 19: Thief, 20: ThiefA, 21: ThiefB, 22: Dragon, 23: DragonR, 24: DragonL,
					25: BigMeteor1, 26: Meteor1, 27: Meteor2, 28: Meteor3, 29: Meteor4, 30: BigMeteor2, 31: Meteor5, 32: Meteor6, 33: Meteor7, 34: Meteor8, 35: MeteorD1, 36: MeteorD2,
					37: Lavaman5, 38: Lavaman6, 39: Lavaman7, 40: Lavaman8, 41: Spawner2, 42: MasterThief, 43: Croc, 44: Croc2, 45: Mosquito, 46: Mosquito2, 47: Mosquito3, 48: Mosquito4};
function onHit(E){
	var deadz = false;
	if(E.type == 0){
		deadz = true;
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
	if(E.type == 1 || E.type == 2 || E.type == -1 || E.type == "Thief" || (E.type == "Dragon" && DragonR.onScreen == 0 && DragonL.onScreen == 0)
		|| E.type == "DragonR" || E.type == "DragonL" || E.type == "MasterThief" || E.type == "Crocodile" || E.type == "Mosquito"){
		if(!(E.hptimer > 0)){
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
			if(E.hp < 1){
				Killed.currentTime=0;
				Killed.play();
				deadz = true;
				if(E.type == 2){
					E.hp = 5;
				}
				if(E.type == 1){
					SorcCastingBar.x = -100;
					SorcCastingBar.y = -200;
					SorcCastingBar.width = Sorceror.width;
					SorcCastingBar.height = Sorceror.height/4;
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
			}
			else{
				onDmg.currentTime=0;
				onDmg.play();
			}
		}
	}
	if(deadz == true){
		deadz = false;
		E.onScreen = 0;
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
				redCube.timeLeft = 90;
			}
			else if(E.spell == "Ice"){
				tealCube.x = E.x;
				tealCube.y = E.y;
				tealCube.timeLeft = 90;
			}
			else if(E.spell == "Earth"){
				greenCube.x = E.x;
				greenCube.y = E.y;
				greenCube.timeLeft = 90;
			}
			else if(E.spell == "Lightning"){
				yellowCube.x = E.x;
				yellowCube.y = E.y;
				yellowCube.timeLeft = 90;
			}
			else if(E.spell == "Air"){
				greyCube.x = E.x;
				greyCube.y = E.y;
				greyCube.timeLeft = 90;
			}
			else if(E.spell == "Mystic"){
				purpleCube.x = E.x;
				purpleCube.y = E.y;
				purpleCube.timeLeft = 90;
			}
			else if(E.spell == "Water"){
				blueCube.x = E.x;
				blueCube.y = E.y;
				blueCube.timeLeft = 90;
			}
			else if(E.spell == "Dark"){
				blackCube.x = E.x;
				blackCube.y = E.y;
				blackCube.timeLeft = 90;
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
		else if(E.type != "DragonR" && E.type != "DragonL" && E.type != "Dragon" && E.type != -1 && E.type != "MasterThief"){
			var drop = Math.floor(Math.random() * 3) + 1;
			if(player.lucky){
				drop = 1;
			}
			if(drop == 1){
				var dropped = Math.floor(Math.random() * 8) + 1;
			}
			else{
				var dropped = 0;
			}
			if(dropped == 1 && redCube.x == -100 && Thief.spell != "Fire" && ThiefA.spell != "Fire"
				 && ThiefB.spell != "Fire"){
				redCube.x = E.x;
				redCube.y = E.y;
				redCube.timeLeft = 90;
			}
			else if(dropped == 2 && tealCube.x == -100 && Thief.spell != "Ice" && ThiefA.spell != "Ice"
				 && ThiefB.spell != "Ice"){
				tealCube.x = E.x;
				tealCube.y = E.y;
				tealCube.timeLeft = 90;
			}
			else if(dropped == 3 && greenCube.x == -100 && Thief.spell != "Earth" && ThiefA.spell != "Earth"
				 && ThiefB.spell != "Earth"){
				greenCube.x = E.x;
				greenCube.y = E.y;
				greenCube.timeLeft = 90;
			}
			else if(dropped == 4 && yellowCube.x == -100 && Thief.spell != "Lightning" && ThiefA.spell != "Lightning"
				 && ThiefB.spell != "Lightning"){
				yellowCube.x = E.x;
				yellowCube.y = E.y;
				yellowCube.timeLeft = 90;
			}
			else if(dropped == 5 && greyCube.x == -100 && Thief.spell != "Air" && ThiefA.spell != "Air"
				 && ThiefB.spell != "Air"){
				greyCube.x = E.x;
				greyCube.y = E.y;
				greyCube.timeLeft = 90;
			}
			else if(dropped == 6 && purpleCube.x == -100 && Thief.spell != "Mystic" && ThiefA.spell != "Mystic"
				 && ThiefB.spell != "Mystic"){
				purpleCube.x = E.x;
				purpleCube.y = E.y;
				purpleCube.timeLeft = 90;
			}
			else if(dropped == 7 && blueCube.x == -100 && Thief.spell != "Water" && ThiefA.spell != "Water"
				 && ThiefB.spell != "Water"){
				blueCube.x = E.x;
				blueCube.y = E.y;
				blueCube.timeLeft = 90;
			}
			else if(dropped == 8 && blackCube.x == -100 && Thief.spell != "Dark" && ThiefA.spell != "Dark"
				 && ThiefB.spell != "Dark"){
				blackCube.x = E.x;
				blackCube.y = E.y;
				blackCube.timeLeft = 90;
			}
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
		E.x = -9000;
		E.y = -9000;
		E.respawn = E.rp;
		E.movement = false;
		E.onScreen = 0;
		Error = Aes.Ctr.encrypt(parseInt(Aes.Ctr.decrypt(Error, ErrorLogs, 256))+(E.pts * staticm) + "", ErrorLogs, 256);
		staticm++;
		multtimer = 30;
		//Makes it harder
		if(StateTimer/30 > 60){
			E.respawn-=Math.floor(StateTimer/30);
			if(E.respawn<30){
				E.respawn = 30;
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
		if(E.dir == "W" && (STATE == "Swamp" || (!(obsCollision(obstacle1, E, E.dir)) && !(obsCollision(obstacle2, E, E.dir))
			&& !(obsCollision(obstacle3, E, E.dir)))) && !(collision(E.dir, E, player)) && !(collision(E.dir, E, Illusion))){
			Math.floor(E.y-=E.speed);
		}
		if(E.dir == "A" && (STATE == "Swamp" || (!(obsCollision(obstacle1, E, E.dir)) && !(obsCollision(obstacle2, E, E.dir))
			&& !(obsCollision(obstacle3, E, E.dir)))) && !(collision(E.dir, E, player)) && !(collision(E.dir, E, Illusion))){
			Math.floor(E.x-=E.speed);
		}
		if(E.dir == "S" && (STATE == "Swamp" || (!(obsCollision(obstacle1, E, E.dir)) && !(obsCollision(obstacle2, E, E.dir))
			&& !(obsCollision(obstacle3, E, E.dir)))) && !(collision(E.dir, E, player)) && !(collision(E.dir, E, Illusion)) && E.onTree != 1){
			Math.floor(E.y+=E.speed);
		}
		if(E.dir == "S" && E.onTree == 1){
			Math.floor(E.y+=E.speed);
		}
		if(E.dir == "D" && (STATE == "Swamp" || (!(obsCollision(obstacle1, E, E.dir)) && !(obsCollision(obstacle2, E, E.dir))
			&& !(obsCollision(obstacle3, E, E.dir)))) && !(collision(E.dir, E, player)) && !(collision(E.dir, E, Illusion))){
			Math.floor(E.x+=E.speed);
		}
		if(E.dir == "AS" && (STATE == "Swamp" || (!(obsCollision(obstacle1, E, E.dir)) && !(obsCollision(obstacle2, E, E.dir))
			&& !(obsCollision(obstacle3, E, E.dir)))) && !(collision(E.dir, E, player)) && !(collision(E.dir, E, Illusion))){
			Math.floor(E.y+=E.speed);
			Math.floor(E.x-=E.speed);
		}
		if(E.dir == "WA" && (STATE == "Swamp" || (!(obsCollision(obstacle1, E, E.dir)) && !(obsCollision(obstacle2, E, E.dir))
			&& !(obsCollision(obstacle3, E, E.dir)))) && !(collision(E.dir, E, player)) && !(collision(E.dir, E, Illusion))){
			Math.floor(E.y-=E.speed);
			Math.floor(E.x-=E.speed);
		}
		if(E.dir == "WD" && (STATE == "Swamp" || (!(obsCollision(obstacle1, E, E.dir)) && !(obsCollision(obstacle2, E, E.dir))
			&& !(obsCollision(obstacle3, E, E.dir)))) && !(collision(E.dir, E, player)) && !(collision(E.dir, E, Illusion))){
			Math.floor(E.y-=E.speed);
			Math.floor(E.x+=E.speed);
		}
		if(E.dir == "SD" && (STATE == "Swamp" || (!(obsCollision(obstacle1, E, E.dir)) && !(obsCollision(obstacle2, E, E.dir))
			&& !(obsCollision(obstacle3, E, E.dir)))) && !(collision(E.dir, E, player)) && !(collision(E.dir, E, Illusion))){
			Math.floor(E.y+=E.speed);
			Math.floor(E.x+=E.speed);
		}
		if(E.x/4 != Math.round(E.x/4) && E.speed/4 == Math.round(E.speed/4)){
			E.x+=1;
		}
		if(E.y/4 != Math.round(E.y/4) && E.speed/4 == Math.round(E.speed/4)){
			E.y+=1;
		}
		if(E.x/2 != Math.round(E.x/2) && E.speed/2 == Math.round(E.speed/2)){
			E.x+=1;
		}
		if(E.y/2 != Math.round(E.y/2) && E.speed/2 == Math.round(E.speed/2)){
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
		var xdiff = player.x - E.x;
		var ydiff = player.y - E.y;
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
			E.dirct = 15;
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
				if(E.y <= player.y + sLightning.hheight/2 && E.y >= player.y && E.y> 32 && E.y < 560
					&& E.x > 32 && E.x < 768 && E.cd <= 0){
					E.cast();
				}
				else if(!(E.cd <= 0)){
					E.cd-=1;
				}	
			}
		}
		if((obsCollision(obstacle1, E, E.dir) || obsCollision(obstacle2, E, E.dir) || obsCollision(obstacle3, E, E.dir)) && STATE != "Swamp"){
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
		else{
			E.dirct-=1;
		}
	}
}

function spawn(E){
	if(treeWizz.onScreen != 1 && typemarker.timeLeft == 0 && typemarker2.timeLeft == 0 && typemarker3.timeLeft == 0 && hpUp.x == -100
		&& Dragon.onScreen != 1 && (!(Dragon.spawned == 1 && player.power < 2) && !(treeWizz.spawned == 1 && player.maxhp < 4) && (!(MasterThief.spawned == 1 && !player.lucky) || E.type == "Thief")
		|| E.type == "Dragon" || E.type == -1)){
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
					obstacle2[O].y+=obstacle2[O].height/2;
					if(collision("D", E, obstacle2[O]) || collision("A", E, obstacle2[O]) || collision("S", E, obstacle2[O]) || collision("W", E, obstacle2[O]) ||
						collision("WD", E, obstacle2[O]) || collision("WA", E, obstacle2[O]) || collision("AS", E, obstacle2[O]) || collision("SD", E, obstacle2[O])){
						landed = true;
					}
					obstacle2[O].x-=32;
					obstacle2[O].y-=obstacle2[O].height/2;
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
				var spawnPoint = Math.floor(Math.random() * 8) + 1;
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
		else if(E.type == "Thief" && STATE == "Jungle" && E.respawn > 0){
			E.respawn-=1;
		}
		else if(E.type == 2 && STATE == "Scorched" && E.respawn > 0){
			E.respawn-=1;
		}
		//if globbly not in fire level
		if(E.type == 0 && STATE != "Scorched" && E.bug == 0 && E.speed2*2 == 8){
			E.respawn= E.respawn;
		}
		else if(E.type != "Thief" && E.type != 2 && E.type != "Crocodile" && E.type != "Mosquito"){
			E.respawn-=1;
		}
		else if(E.type == "Crocodile" && STATE == "Swamp" && !landed){
			E.respawn-=1;
		}
		else if(E.type == "Mosquito" && STATE == "Swamp"){
			E.respawn-=1;
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
		obstacle2[O].y+=obstacle2[O].height/2;
		if(collision("D", E, obstacle2[O]) || collision("A", E, obstacle2[O]) || collision("S", E, obstacle2[O]) || collision("W", E, obstacle2[O]) ||
			collision("WD", E, obstacle2[O]) || collision("WA", E, obstacle2[O]) || collision("AS", E, obstacle2[O]) || collision("SD", E, obstacle2[O])){
			var noswim = true;
			E.swimming = false;
		}
		obstacle2[O].x-=32;
		obstacle2[O].y-=obstacle2[O].height/2;
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