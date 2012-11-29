var lightSlopes = {0: -4, 1: -3, 2: -2, 3: -1, 4: -0.75, 5: -0.5, 6: -0.25, 7: 0, 8: 0.25, 9: 0.5, 10: 0.75, 11: 1, 12: 2, 13: 3, 14: 4};
//attack
var arrow = {
	x: -100,
	y: -200,
	timeLeft: 0,
	speed: 16,
	width: 16,
	height: 16,
	dir: "A",
	active: true,
	draw: function(){
		if(this.timeLeft){
			ctx.fillStyle = "yellow";
			ctx.fillRect(this.x-this.width*0.5, this.y-this.height*0.5, this.width, this.height);
		}
	}
};
var arrow2 = {
	x: -100,
	y: -200,
	timeLeft: 0,
	speed: 16,
	width: 16,
	height: 16,
	dir: "A",
	active: true,
	draw: function(){
		if(this.timeLeft){
			ctx.fillStyle = "yellow";
			ctx.fillRect(this.x-this.width*0.5, this.y-this.height*0.5, this.width, this.height);
		}
	}
};
var arrow3 = {
	x: -100,
	y: -200,
	timeLeft: 0,
	speed: 16,
	width: 16,
	height: 16,
	dir: "A",
	active: true,
	draw: function(){
		if(this.timeLeft){
			ctx.fillStyle = "yellow";
			ctx.fillRect(this.x-this.width*0.5, this.y-this.height*0.5, this.width, this.height);
		}
	}
};
var arrow4 = {
	x: -100,
	y: -200,
	timeLeft: 0,
	speed: 16,
	width: 16,
	height: 16,
	dir: "A",
	active: true,
	draw: function(){
		if(this.timeLeft){
			ctx.fillStyle = "yellow";
			ctx.fillRect(this.x-this.width*0.5, this.y-this.height*0.5, this.width, this.height);
		}
	}
};
var Light2Arrows = {1: arrow2, 2: arrow3, 3: arrow4};
//angel
var light = {
	x: -100,
	y: -200,
	width: 20,
	height: 20,
	width2: 32,
	height2: 32,
	frame: 0,
	timeLeft: 0,
	cd: 0,
	cdTop: 1200,
	speed: 6,
	onScreen: 0,
	dir: "",
	dirct: 0,
	slope: 1,
	closestSlope: 1,
	slopeIndex: 11,
	dirSwitch: false,
	destDir: "",
	draw: function(){
		if(this.onScreen){
			if(this.dir == "A" || this.slope == "Vertical"){
				ctx.drawImage(AngelL1, this.x-this.width*0.5, this.y-this.height*0.5);
			}
			else{
				ctx.drawImage(AngelR1, this.x-this.width*0.5, this.y-this.height*0.5);
			}
			ctx.globalAlpha = Alpha*0.25;
			ctx.fillStyle = LightningColor;
			if(this.frame < 4){
				ctx.fillRect(this.x-this.width2*0.5, this.y-this.height2*0.5, this.width2, this.height2);
				this.width2 = this.width2 + 8 * this.frame;
				this.height2 = this.height2 + 8 * this.frame;
				this.frame++;
			}
			else if(this.frame < 8){
				ctx.fillRect(this.x-this.width2*0.5, this.y-this.height2*0.5, this.width2, this.height2);
				this.width2 = this.width2 - 8 * this.frame;
				this.height2 = this.height2 - 8 * this.frame;
				this.frame++;
			}
			ctx.globalAlpha = Alpha;
		}
	},
	Move_AI: function(){
		if(this.cd > 0){
			this.cd -=1;
		}
		if(this.onScreen){
			if(this.timeLeft > 0){
				this.timeLeft--;
			}
			//if off screen, remove
			if(this.timeLeft <= 0){
				this.x = 9000;
				this.y = -400;
				this.width = 16;
				this.height = 16;
				this.dirct = 0;
				this.dir = "A";
				this.slope = 1;
				this.closestSlope = 1;
				this.slopeIndex = 11;
				this.onScreen = 0;
				this.dirct = 0;
				this.dirSwitch = false;
				this.destDir = "";
			}
			else{
				if(this.dirct > 0){
					this.found = true;
					this.dirct-=1;
				}
				//change direction
				if(Math.sqrt((player.x-this.x)*(player.x- this.x) + (player.y-this.y)*(player.y-this.y)) > 96){
					if(player.x-player.width*0.5 < this.x-this.width*0.5){
						if(this.dir != "A"){
							this.dirSwitch = true;
							this.destDir = "A";
						}
						var playerSlope = (this.y-player.y)/(this.x-player.x);
					}
					else if(player.x - player.width*0.5 == this.x - this.width*0.5){
						this.dir = this.dir;
					}
					else{
						if(this.dir != "D"){
							this.dirSwitch = true;
							this.destDir = "D";
						}
						var playerSlope = (player.y-this.y)/(player.x-this.x);
					}
					if(this.dirSwitch){
						if(this.slopeIndex <= 7){
							this.slopeIndex-=1;
							if(this.slopeIndex < 0){
								this.slopeIndex = 14;
								this.dir = this.destDir;
								this.dirSwitch = false;
							}
							this.slope = lightSlopes[this.slopeIndex];
						}
						else{
							this.slopeIndex+=1;
							if(this.slopeIndex > 14){
								this.slopeIndex = 0;
								this.dir = this.destDir;
								this.dirSwitch = false;
							}
							this.slope = lightSlopes[this.slopeIndex];
						}
					}
					else{
						//find ideal slope
						for(N in lightSlopes){
							if(Math.abs(lightSlopes[N] - playerSlope) < Math.abs(this.closestSlope - playerSlope)){
								this.closestSlope = lightSlopes[N];
							}
						}
						//change slope
						if(this.closestSlope > this.slope){
							if(this.closestSlope > 1 && this.slope < -1){
								this.slopeIndex-=1;
								this.slope = lightSlopes[this.slopeIndex];
								if(this.slopeIndex < 0){
									this.slopeIndex = 14;
									this.slope = lightSlopes[this.slopeIndex];
								}
							}
							else{
								this.slopeIndex+=1;
								this.slope = lightSlopes[this.slopeIndex];
							}
						}
						if(this.closestSlope < this.slope || this.slope == "Vertical"){
							if(this.closestSlope < -1 && this.slope > 1){
								this.slopeIndex+=1;
								this.slope = lightSlopes[this.slopeIndex];
								if(this.slopeIndex > 14){
									this.slopeIndex = 0;
									this.slope = lightSlopes[this.slopeIndex];
								}
							}
							else{
								this.slopeIndex-=1;
								this.slope = lightSlopes[this.slopeIndex];
							}
						}
						//consider verticals
						if(this.x >= player.x - player.width*0.5 && this.x <= player.x + player.width*0.5){
							if(this.y-this.height*0.5 > player.y - player.height*0.5){
								this.dir = "A";
							}
							else{
								this.dir = "D";
							}
							this.slope = "Vertical";
							this.slopeIndex = 15;
						}
					}
				}
			}
			if(this.dir == "D"){
				if(this.slope == "Vertical"){
					var ymove = this.speed;
					this.y+=ymove;
					this.y = Math.floor(this.y);
				}
				else if(this.slope > 0 && this.slope < 1){
					var xmove = Math.sqrt((this.speed*this.speed)/(this.slope*this.slope+1));
					var ymove = xmove*this.slope;
					this.x+=xmove;
					this.y+=ymove;
					this.x = Math.ceil(this.x);
					this.y = Math.floor(this.y);
				}
				else if(this.slope >= 0){
					//get x distance, speed = total diag distance
					var xmove = Math.sqrt((this.speed*this.speed)/(this.slope*this.slope+1));
					var ymove = xmove*this.slope;
					this.x+=xmove;
					this.y+=ymove;
					this.x = Math.ceil(this.x);
					this.y = Math.floor(this.y);
				}
				else if(this.slope <= -1){
					var xmove = Math.sqrt((this.speed*this.speed)/(this.slope*this.slope+1));
					var ymove = xmove*this.slope;
					this.x+=xmove;
					this.y+=ymove;
					this.x = Math.ceil(this.x);
					this.y = Math.ceil(this.y);
				}
				else{
					var xmove = Math.sqrt((this.speed*this.speed)/(this.slope*this.slope+1));
					var ymove = xmove*this.slope;
					this.x+=xmove;
					this.y+=ymove;
				}
			}
			else{
				if(this.slope == "Vertical"){
					var ymove = this.speed;
					this.y-=ymove;
					this.y = Math.floor(this.y);
				}
				else if(this.slope > 0 && this.slope < 1){
					var xmove = Math.sqrt((this.speed*this.speed)/(this.slope*this.slope+1));
					var ymove = xmove*this.slope;
					this.x-=xmove;
					this.y-=ymove;
					this.x = Math.floor(this.x);
					this.y = Math.ceil(this.y);
				}
				else if(this.slope >= 0){
					//get x distance, speed = total diag distance
					var xmove = Math.sqrt((this.speed*this.speed)/(this.slope*this.slope+1));
					var ymove = xmove*this.slope;
					this.x-=xmove;
					this.y-=ymove;
					this.x = Math.ceil(this.x);
					this.y = Math.floor(this.y);
				}
				else if(this.slope <= -1){
					var xmove = Math.sqrt((this.speed*this.speed)/(this.slope*this.slope+1));
					var ymove = xmove*this.slope;
					this.x-=xmove;
					this.y-=ymove;
					this.x = Math.floor(this.x);
					this.y = Math.ceil(this.y);
				}
				else{
					var xmove = Math.sqrt((this.speed*this.speed)/(this.slope*this.slope+1));
					var ymove = xmove*this.slope;
					this.x-=xmove;
					this.y-=ymove;
					this.x = Math.ceil(this.x);
					this.y = Math.floor(this.y);
				}
			}
			this.Shoot_AI();
		}
	},
	Shoot_AI: function(){
		if(this.onScreen){
			if(!arrow.timeLeft){
				for(E in AllEnemies){
					if(AllEnemies[E].onScreen){
						var tempEnemy = {x: AllEnemies[E].x,
										 y: AllEnemies[E].y,
										 width: AllEnemies[E].width,
										 height: AllEnemies[E].height,
										 speed: AllEnemies[E].speed,
										 movement: AllEnemies[E].movement,
										 onScreen: AllEnemies[E].onScreen,
										 dir: AllEnemies[E].dir};
						var tempArrow = {x: this.x,
										 y: this.y,
										 timeLeft: 60,
										 speed: 16,
										 width: 16,
										 height: 16,
										 dir: "W",
										 active: false};
						while(tempArrow.y > 0){
							moveArrow(tempArrow);
							move(tempEnemy);
							if(tempArrow.timeLeft == 0){
								arrow.x = this.x;
								arrow.y = this.y;
								arrow.timeLeft = 60;
								arrow.dir = tempArrow.dir;
								Beam.currentTime = 0;
								Beam.play();
								return;
							}
						}
						tempArrow.x = this.x;
						tempArrow.y = this.y;
						tempArrow.timeLeft = 60;
						tempArrow.dir = "A";
						while(tempArrow.x > 0){
							moveArrow(tempArrow);
							move(tempEnemy);
							if(tempArrow.timeLeft == 0){
								arrow.x = this.x;
								arrow.y = this.y;
								arrow.timeLeft = 60;
								arrow.dir = tempArrow.dir;
								Beam.currentTime = 0;
								Beam.play();
								return;
							}
						}
						tempArrow.x = this.x;
						tempArrow.y = this.y;
						tempArrow.timeLeft = 60;
						tempArrow.dir = "S";
						while(tempArrow.y < 576){
							if(tempArrow.timeLeft == 0){
								arrow.x = this.x;
								arrow.y = this.y;
								arrow.timeLeft = 60;
								arrow.dir = tempArrow.dir;
								Beam.currentTime = 0;
								Beam.play();
								return;
							}
							moveArrow(tempArrow);
							move(tempEnemy);
						}
						tempArrow.x = this.x;
						tempArrow.y = this.y;
						tempArrow.timeLeft = 60;
						tempArrow.dir = "D";
						while(tempArrow.x < 800){
							if(tempArrow.timeLeft == 0){
								arrow.x = this.x;
								arrow.y = this.y;
								arrow.timeLeft = 60;
								arrow.dir = tempArrow.dir;
								Beam.currentTime = 0;
								Beam.play();
								return;
							}
							moveArrow(tempArrow);
							move(tempEnemy);
						}
						tempArrow.x = this.x;
						tempArrow.y = this.y;
						tempArrow.timeLeft = 60;
						tempArrow.dir = "WD";
						while(tempArrow.x < 800 && tempArrow.y > 0){
							moveArrow(tempArrow);
							move(tempEnemy);
							if(tempArrow.timeLeft == 0){
								arrow.x = this.x;
								arrow.y = this.y;
								arrow.timeLeft = 60;
								arrow.dir = tempArrow.dir;
								Beam.currentTime = 0;
								Beam.play();
								return;
							}
						}
						tempArrow.x = this.x;
						tempArrow.y = this.y;
						tempArrow.timeLeft = 60;
						tempArrow.dir = "SD";
						while(tempArrow.x < 800 && tempArrow.y < 576){
							if(tempArrow.timeLeft == 0){
								arrow.x = this.x;
								arrow.y = this.y;
								arrow.timeLeft = 60;
								arrow.dir = tempArrow.dir;
								Beam.currentTime = 0;
								Beam.play();
								return;
							}
							moveArrow(tempArrow);
							move(tempEnemy);
						}
						tempArrow.x = this.x;
						tempArrow.y = this.y;
						tempArrow.timeLeft = 60;
						tempArrow.dir = "AS";
						while(tempArrow.x > 0 && tempArrow.y < 576){
							moveArrow(tempArrow);
							move(tempEnemy);
							if(tempArrow.timeLeft == 0){
								arrow.x = this.x;
								arrow.y = this.y;
								arrow.timeLeft = 60;
								arrow.dir = tempArrow.dir;
								Beam.currentTime = 0;
								Beam.play();
								return;
							}
						}
						tempArrow.x = this.x;
						tempArrow.y = this.y;
						tempArrow.timeLeft = 60;
						tempArrow.dir = "WA";
						while(tempArrow.x > 0 && tempArrow.y > 0){
							moveArrow(tempArrow);
							move(tempEnemy);
							if(tempArrow.timeLeft == 0){
								arrow.x = this.x;
								arrow.y = this.y;
								arrow.timeLeft = 60;
								arrow.dir = tempArrow.dir;
								Beam.currentTime = 0;
								Beam.play();
								return;
							}
						}
					}
				}
			}
		}
	},
	shoot: function(){
		if(this.cd <= 0){
			fastbeepsHigh.currentTime=0;
			fastbeepsHigh.play();
			this.x = player.x;
			this.y = player.y;
			this.onScreen = 1;
			this.timeLeft = 450;
			this.width2 = 32;
			this.height2 = 32;
			this.frame = 0;
			this.cd = this.cdTop;
		}
	}
};

function moveArrow(A){
	for(E in AllEnemies){
		if(collision(AllEnemies[E].dir, AllEnemies[E], A)){
			if(A.active){
				onHit(AllEnemies[E]);
			}
			A.timeLeft = 0;
			A.x = -100;
			A.y = -200;
			break;
		}
	}
	if (A.timeLeft > 0 && A.dir == "W"){
		A.timeLeft--;
		A.y -= A.speed;
	}
	else if (A.timeLeft > 0 && A.dir == "A"){
		A.timeLeft--;
		A.x -= A.speed;
	}
	else if (A.timeLeft > 0 && A.dir == "S"){
		A.timeLeft--;
		A.y += A.speed;
	}
	else if (A.timeLeft > 0 && A.dir == "D"){
		A.timeLeft--;
		A.x += A.speed;
	}
	else if (A.timeLeft > 0 && A.dir == "WA"){
		A.timeLeft--;
		A.x -= A.speed/Math.sqrt(2);
		A.y -= A.speed/Math.sqrt(2);
	}
	else if (A.timeLeft > 0 && A.dir == "AS"){
		A.timeLeft--;
		A.x -= A.speed/Math.sqrt(2);
		A.y += A.speed/Math.sqrt(2);
	}
	else if (A.timeLeft > 0 && A.dir == "SD"){
		A.timeLeft--;
		A.x += A.speed/Math.sqrt(2);
		A.y += A.speed/Math.sqrt(2);
	}
	else if (A.timeLeft > 0 && A.dir == "WD"){
		A.timeLeft--;
		A.x += A.speed/Math.sqrt(2);
		A.y -= A.speed/Math.sqrt(2);
	}
}
//--------------------------------------------------------------------- Light2 ------------------------------------------------------//
//angel
var light2 = {
	x: -100,
	y: -200,
	width: 20,
	height: 20,
	width2: 32,
	height2: 32,
	frame: 0,
	timeLeft: 0,
	cd: 0,
	cdTop: 1800,
	speed: 6,
	onScreen: 0,
	dir: "",
	dirct: 0,
	slope: 1,
	closestSlope: 1,
	slopeIndex: 11,
	dirSwitch: false,
	destDir: "",
	arrownum: 2,
	shoot: function(){
		if(this.cd <= 0){
			fastbeepsHigh.currentTime=0;
			fastbeepsHigh.play();
			this.x = player.x;
			this.y = player.y;
			this.onScreen = 1;
			this.timeLeft = 450;
			this.width2 = 32;
			this.height2 = 32;
			this.frame = 0;
			this.cd = this.cdTop;
			
			light3.x = player.x-32;
			light3.y = player.y-32;
			light3.onScreen = 1;
			light3.timeLeft = 450;
			light3.width2 = 32;
			light3.height2 = 32;
			light3.frame = 0;
			
			light4.x = player.x+32;
			light4.y = player.y-32;
			light4.onScreen = 1;
			light4.timeLeft = 450;
			light4.width2 = 32;
			light4.height2 = 32;
			light4.frame = 0;
		}
	}
};
var light3 = {
	x: -100,
	y: -200,
	width: 20,
	height: 20,
	width2: 32,
	height2: 32,
	frame: 0,
	timeLeft: 0,
	speed: 4,
	onScreen: 0,
	dir: "",
	dirct: 0,
	slope: 1,
	closestSlope: 1,
	slopeIndex: 11,
	dirSwitch: false,
	destDir: "",
	arrownum: 3
};
var light4 = {
	x: -100,
	y: -200,
	width: 20,
	height: 20,
	width2: 32,
	height2: 32,
	frame: 0,
	timeLeft: 0,
	speed: 2,
	onScreen: 0,
	dir: "",
	dirct: 0,
	slope: 1,
	closestSlope: 1,
	slopeIndex: 11,
	dirSwitch: false,
	destDir: "",
	arrownum: 4
};
var AllLight2 = {1: light2, 2: light3, 3: light4};
function AllLightFns(L){
	if(L.cd > 0){
		L.cd -=1;
	}
	if(L.onScreen){
		if(L.dir == "A" || L.slope == "Vertical"){
			ctx.drawImage(AngelL1, L.x-L.width*0.5, L.y-L.height*0.5);
		}
		else{
			ctx.drawImage(AngelR1, L.x-L.width*0.5, L.y-L.height*0.5);
		}
		ctx.globalAlpha = Alpha*0.25;
		ctx.fillStyle = LightningColor;
		if(L.frame < 4){
			ctx.fillRect(L.x-L.width2*0.5, L.y-L.height2*0.5, L.width2, L.height2);
			L.width2 = L.width2 + 8 * L.frame;
			L.height2 = L.height2 + 8 * L.frame;
			L.frame++;
		}
		else if(L.frame < 8){
			ctx.fillRect(L.x-L.width2*0.5, L.y-L.height2*0.5, L.width2, L.height2);
			L.width2 = L.width2 - 8 * L.frame;
			L.height2 = L.height2 - 8 * L.frame;
			L.frame++;
		}
		ctx.globalAlpha = Alpha;
		if(L.timeLeft > 0){
			L.timeLeft--;
		}
		//if off screen, remove
		if(L.timeLeft <= 0){
			L.x = 9000;
			L.y = -400;
			L.width = 16;
			L.height = 16;
			L.dirct = 0;
			L.dir = "A";
			L.slope = 1;
			L.closestSlope = 1;
			L.slopeIndex = 11;
			L.onScreen = 0;
			L.dirct = 0;
			L.dirSwitch = false;
			L.destDir = "";
		}
		else{
			if(L.dirct > 0){
				L.found = true;
				L.dirct-=1;
			}
			//change direction
			if(Math.sqrt((player.x-L.x)*(player.x- L.x) + (player.y-L.y)*(player.y-L.y)) > 96){
				if(player.x-player.width*0.5 < L.x-L.width*0.5){
					if(L.dir != "A"){
						L.dirSwitch = true;
						L.destDir = "A";
					}
					var playerSlope = (L.y-player.y)/(L.x-player.x);
				}
				else if(player.x - player.width*0.5 == L.x - L.width*0.5){
					L.dir = L.dir;
				}
				else{
					if(L.dir != "D"){
						L.dirSwitch = true;
						L.destDir = "D";
					}
					var playerSlope = (player.y-L.y)/(player.x-L.x);
				}
				if(L.dirSwitch){
					if(L.slopeIndex <= 7){
						L.slopeIndex-=1;
						if(L.slopeIndex < 0){
							L.slopeIndex = 14;
							L.dir = L.destDir;
							L.dirSwitch = false;
						}
						L.slope = lightSlopes[L.slopeIndex];
					}
					else{
						L.slopeIndex+=1;
						if(L.slopeIndex > 14){
							L.slopeIndex = 0;
							L.dir = L.destDir;
							L.dirSwitch = false;
						}
						L.slope = lightSlopes[L.slopeIndex];
					}
				}
				else{
					//find ideal slope
					for(N in lightSlopes){
						if(Math.abs(lightSlopes[N] - playerSlope) < Math.abs(L.closestSlope - playerSlope)){
							L.closestSlope = lightSlopes[N];
						}
					}
					//change slope
					if(L.closestSlope > L.slope){
						if(L.closestSlope > 1 && L.slope < -1){
							L.slopeIndex-=1;
							L.slope = lightSlopes[L.slopeIndex];
							if(L.slopeIndex < 0){
								L.slopeIndex = 14;
								L.slope = lightSlopes[L.slopeIndex];
							}
						}
						else{
							L.slopeIndex+=1;
							L.slope = lightSlopes[L.slopeIndex];
						}
					}
					if(L.closestSlope < L.slope || L.slope == "Vertical"){
						if(L.closestSlope < -1 && L.slope > 1){
							L.slopeIndex+=1;
							L.slope = lightSlopes[L.slopeIndex];
							if(L.slopeIndex > 14){
								L.slopeIndex = 0;
								L.slope = lightSlopes[L.slopeIndex];
							}
						}
						else{
							L.slopeIndex-=1;
							L.slope = lightSlopes[L.slopeIndex];
						}
					}
					//consider verticals
					if(L.x >= player.x - player.width*0.5 && L.x <= player.x + player.width*0.5){
						if(L.y-L.height*0.5 > player.y - player.height*0.5){
							L.dir = "A";
						}
						else{
							L.dir = "D";
						}
						L.slope = "Vertical";
						L.slopeIndex = 15;
					}
				}
			}
		}
		if(L.dir == "D"){
			if(L.slope == "Vertical"){
				var ymove = L.speed;
				L.y+=ymove;
				L.y = Math.floor(L.y);
			}
			else if(L.slope > 0 && L.slope < 1){
				var xmove = Math.sqrt((L.speed*L.speed)/(L.slope*L.slope+1));
				var ymove = xmove*L.slope;
				L.x+=xmove;
				L.y+=ymove;
				L.x = Math.ceil(L.x);
				L.y = Math.floor(L.y);
			}
			else if(L.slope >= 0){
				//get x distance, speed = total diag distance
				var xmove = Math.sqrt((L.speed*L.speed)/(L.slope*L.slope+1));
				var ymove = xmove*L.slope;
				L.x+=xmove;
				L.y+=ymove;
				L.x = Math.ceil(L.x);
				L.y = Math.floor(L.y);
			}
			else if(L.slope <= -1){
				var xmove = Math.sqrt((L.speed*L.speed)/(L.slope*L.slope+1));
				var ymove = xmove*L.slope;
				L.x+=xmove;
				L.y+=ymove;
				L.x = Math.ceil(L.x);
				L.y = Math.ceil(L.y);
			}
			else{
				var xmove = Math.sqrt((L.speed*L.speed)/(L.slope*L.slope+1));
				var ymove = xmove*L.slope;
				L.x+=xmove;
				L.y+=ymove;
			}
		}
		else{
			if(L.slope == "Vertical"){
				var ymove = L.speed;
				L.y-=ymove;
				L.y = Math.floor(L.y);
			}
			else if(L.slope > 0 && L.slope < 1){
				var xmove = Math.sqrt((L.speed*L.speed)/(L.slope*L.slope+1));
				var ymove = xmove*L.slope;
				L.x-=xmove;
				L.y-=ymove;
				L.x = Math.floor(L.x);
				L.y = Math.ceil(L.y);
			}
			else if(L.slope >= 0){
				//get x distance, speed = total diag distance
				var xmove = Math.sqrt((L.speed*L.speed)/(L.slope*L.slope+1));
				var ymove = xmove*L.slope;
				L.x-=xmove;
				L.y-=ymove;
				L.x = Math.ceil(L.x);
				L.y = Math.floor(L.y);
			}
			else if(L.slope <= -1){
				var xmove = Math.sqrt((L.speed*L.speed)/(L.slope*L.slope+1));
				var ymove = xmove*L.slope;
				L.x-=xmove;
				L.y-=ymove;
				L.x = Math.floor(L.x);
				L.y = Math.ceil(L.y);
			}
			else{
				var xmove = Math.sqrt((L.speed*L.speed)/(L.slope*L.slope+1));
				var ymove = xmove*L.slope;
				L.x-=xmove;
				L.y-=ymove;
				L.x = Math.ceil(L.x);
				L.y = Math.floor(L.y);
			}
		}
		var shoots = Math.floor(Math.random() * 4);
		if(shoots > 2){
			if(!Light2Arrows[L.arrownum-1].timeLeft){
				for(E in AllEnemies){
					if(AllEnemies[E].onScreen){
						var tempEnemy = {x: AllEnemies[E].x,
										 y: AllEnemies[E].y,
										 width: AllEnemies[E].width,
										 height: AllEnemies[E].height,
										 speed: AllEnemies[E].speed,
										 movement: AllEnemies[E].movement,
										 onScreen: AllEnemies[E].onScreen,
										 dir: AllEnemies[E].dir};
						var tempArrow = {x: L.x,
										 y: L.y,
										 timeLeft: 60,
										 speed: 16,
										 width: 16,
										 height: 16,
										 dir: "W",
										 active: false};
						while(tempArrow.y > 0){
							moveArrow(tempArrow);
							move(tempEnemy);
							if(tempArrow.timeLeft == 0){
								Light2Arrows[L.arrownum-1].x = L.x;
								Light2Arrows[L.arrownum-1].y = L.y;
								Light2Arrows[L.arrownum-1].timeLeft = 60;
								Light2Arrows[L.arrownum-1].dir = tempArrow.dir;
								Beam.currentTime = 0;
								Beam.play();
								return;
							}
						}
						tempArrow.x = L.x;
						tempArrow.y = L.y;
						tempArrow.timeLeft = 60;
						tempArrow.dir = "A";
						while(tempArrow.x > 0){
							moveArrow(tempArrow);
							move(tempEnemy);
							if(tempArrow.timeLeft == 0){
								Light2Arrows[L.arrownum-1].x = L.x;
								Light2Arrows[L.arrownum-1].y = L.y;
								Light2Arrows[L.arrownum-1].timeLeft = 60;
								Light2Arrows[L.arrownum-1].dir = tempArrow.dir;
								Beam.currentTime = 0;
								Beam.play();
								return;
							}
						}
						tempArrow.x = L.x;
						tempArrow.y = L.y;
						tempArrow.timeLeft = 60;
						tempArrow.dir = "S";
						while(tempArrow.y < 576){
							if(tempArrow.timeLeft == 0){
								Light2Arrows[L.arrownum-1].x = L.x;
								Light2Arrows[L.arrownum-1].y = L.y;
								Light2Arrows[L.arrownum-1].timeLeft = 60;
								Light2Arrows[L.arrownum-1].dir = tempArrow.dir;
								Beam.currentTime = 0;
								Beam.play();
								return;
							}
							moveArrow(tempArrow);
							move(tempEnemy);
						}
						tempArrow.x = L.x;
						tempArrow.y = L.y;
						tempArrow.timeLeft = 60;
						tempArrow.dir = "D";
						while(tempArrow.x < 800){
							if(tempArrow.timeLeft == 0){
								Light2Arrows[L.arrownum-1].x = L.x;
								Light2Arrows[L.arrownum-1].y = L.y;
								Light2Arrows[L.arrownum-1].timeLeft = 60;
								Light2Arrows[L.arrownum-1].dir = tempArrow.dir;
								Beam.currentTime = 0;
								Beam.play();
								return;
							}
							moveArrow(tempArrow);
							move(tempEnemy);
						}
						tempArrow.x = L.x;
						tempArrow.y = L.y;
						tempArrow.timeLeft = 60;
						tempArrow.dir = "WD";
						while(tempArrow.x < 800 && tempArrow.y > 0){
							moveArrow(tempArrow);
							move(tempEnemy);
							if(tempArrow.timeLeft == 0){
								Light2Arrows[L.arrownum-1].x = L.x;
								Light2Arrows[L.arrownum-1].y = L.y;
								Light2Arrows[L.arrownum-1].timeLeft = 60;
								Light2Arrows[L.arrownum-1].dir = tempArrow.dir;
								Beam.currentTime = 0;
								Beam.play();
								return;
							}
						}
						tempArrow.x = L.x;
						tempArrow.y = L.y;
						tempArrow.timeLeft = 60;
						tempArrow.dir = "SD";
						while(tempArrow.x < 800 && tempArrow.y < 576){
							if(tempArrow.timeLeft == 0){
								Light2Arrows[L.arrownum-1].x = L.x;
								Light2Arrows[L.arrownum-1].y = L.y;
								Light2Arrows[L.arrownum-1].timeLeft = 60;
								Light2Arrows[L.arrownum-1].dir = tempArrow.dir;
								Beam.currentTime = 0;
								Beam.play();
								return;
							}
							moveArrow(tempArrow);
							move(tempEnemy);
						}
						tempArrow.x = L.x;
						tempArrow.y = L.y;
						tempArrow.timeLeft = 60;
						tempArrow.dir = "AS";
						while(tempArrow.x > 0 && tempArrow.y < 576){
							moveArrow(tempArrow);
							move(tempEnemy);
							if(tempArrow.timeLeft == 0){
								Light2Arrows[L.arrownum-1].x = L.x;
								Light2Arrows[L.arrownum-1].y = L.y;
								Light2Arrows[L.arrownum-1].timeLeft = 60;
								Light2Arrows[L.arrownum-1].dir = tempArrow.dir;
								Beam.currentTime = 0;
								Beam.play();
								return;
							}
						}
						tempArrow.x = L.x;
						tempArrow.y = L.y;
						tempArrow.timeLeft = 60;
						tempArrow.dir = "WA";
						while(tempArrow.x > 0 && tempArrow.y > 0){
							moveArrow(tempArrow);
							move(tempEnemy);
							if(tempArrow.timeLeft == 0){
								Light2Arrows[L.arrownum-1].x = L.x;
								Light2Arrows[L.arrownum-1].y = L.y;
								Light2Arrows[L.arrownum-1].timeLeft = 60;
								Light2Arrows[L.arrownum-1].dir = tempArrow.dir;
								Beam.currentTime = 0;
								Beam.play();
								return;
							}
						}
					}
				}
			}
		}
	}
}