// Lightning: Creates a small web of lightning
var lightning = {
	timeLeft: 0,
	vwidth: 32,
	vheight: 800,
	hwidth: 800,
	hheight: 32,
	hx: 400,
	hy: -2000,
	vx: -2000,
	vy: 288,
	hstate: 0,
	vstate: 0,
	cd: 0,
	onScreen: 0,
	cast: 0,
	used: 0,
	
	draw: function(){
		if(this.onScreen == 1 && this.cast == 0){
			if(this.used == 0){
				Thunder.currentTime=0;
				Thunder.play();
				this.used = 1;
			}
			if(this.hstate == 0){
				ctx.drawImage(hlightning1, this.hx - this.hwidth/2, this.hy);
				this.hstate+=1;
			}
			else if(this.hstate == 1){
				ctx.drawImage(hlightning2, this.hx - this.hwidth/2, this.hy);
				this.hstate+=1;
			}
			else if(this.hstate == 2){
				ctx.drawImage(hlightning3, this.hx - this.hwidth/2, this.hy);
				this.hstate=0;
			}
			if(this.vx != -2000){
				if(this.vstate == 0){
					ctx.drawImage(vlightning1, this.vx, this.vy - this.vheight/2);
					this.vstate+=1;
				}
				else if(this.vstate == 1){
					ctx.drawImage(vlightning2, this.vx, this.vy - this.vheight/2);
					this.vstate+=1;
				}
				else if(this.vstate == 2){
					ctx.drawImage(vlightning3, this.vx, this.vy - this.vheight/2);
					this.vstate=0;
				}
			}
		}
	},
	effect: function(){
		if(this.cd > 0){
			this.cd-=1;
		}
		if(this.cast > 0){
			this.cast-=1;
		}
		if(this.onScreen == 1 && this.cast == 0){
			if(this.timeLeft <= 0){
				this.onScreen = 0;
				this.vx = -2000;
				this.hy = -2000
			}
			else{
				this.timeLeft-=1;
			}
			if(this.vx != -2000){
				for (E in AllEnemies){
					if(AllEnemies[E].x >= this.vx && AllEnemies[E].x <= this.vx + this.vwidth && AllEnemies[E].onScreen == 1){
						if(lightning12.hy == -2000){
							lightning12.hy = AllEnemies[E].y;
							lightning12.shoot();
						}
						onHit(AllEnemies[E]);
					}
				}
			}
			
			if(this.hy != -2000){
				for (E in AllEnemies){
					if(AllEnemies[E].y <= this.hy + this.hheight && AllEnemies[E].y >= this.hy && AllEnemies[E].onScreen == 1){
						if(this.vx == -2000){
							this.vx = AllEnemies[E].x
						}
						onHit(AllEnemies[E]);
					}
				}			
			}
		}
	},
	// Spawn
	shoot: function(){
	if(this.cd == 0){
		this.hx = 400;
		this.vx = -2000;
		this.hy = player.y;
		this.cd = 300;
		this.onScreen = 1;
		this.timeLeft = 120;
		this.used = 0;
	}
	}
	
};

// Lightning1-2: Creates a small web of lightning
var lightning12 = {
	timeLeft: 0,
	vwidth: 32,
	vheight: 800,
	hwidth: 800,
	hheight: 32,
	hstate: 0,
	vstate: 0,
	hx: 400,
	hy: -2000,
	vx: -2000,
	vy: 288,
	onScreen: 0,
	
	draw: function(){
		if(this.onScreen == 1){
			if(this.hstate == 0){
				ctx.drawImage(hlightning1, this.hx - this.hwidth/2, this.hy);
				this.hstate+=1;
			}
			else if(this.hstate == 1){
				ctx.drawImage(hlightning2, this.hx - this.hwidth/2, this.hy);
				this.hstate+=1;
			}
			else if(this.hstate == 2){
				ctx.drawImage(hlightning3, this.hx - this.hwidth/2, this.hy);
				this.hstate=0;
			}
			if(this.vx != -2000){
				if(this.vstate == 0){
					ctx.drawImage(vlightning1, this.vx, this.vy - this.vheight/2);
					this.vstate+=1;
				}
				else if(this.vstate == 1){
					ctx.drawImage(vlightning2, this.vx, this.vy - this.vheight/2);
					this.vstate+=1;
				}
				else if(this.vstate == 2){
					ctx.drawImage(vlightning3, this.vx, this.vy - this.vheight/2);
					this.vstate=0;
				}
			}
		}
	},
	effect: function(){
		if(this.onScreen == 1){
			if(this.timeLeft <= 0){
				this.onScreen = 0;
				this.vx = -2000;
				this.hy = -2000;
			}
			else{
				this.timeLeft-=1;
			}
			if(this.vx != -2000){
				for (E in AllEnemies){
					if(AllEnemies[E].x >= this.vx && AllEnemies[E].x <= this.vx + this.vwidth && AllEnemies[E].onScreen == 1){
						onHit(AllEnemies[E]);
					}
				}
			}
			if(this.hy != -2000){
				for (E in AllEnemies){
					if(AllEnemies[E].y <= this.hy + this.hheight && AllEnemies[E].y >= this.hy && AllEnemies[E].onScreen == 1){
						if(this.vx == -2000){
							this.vx = AllEnemies[E].x
						}
						onHit(AllEnemies[E]);
					}
				}			
			}
		}
	},
	// Spawn
	shoot: function(){
		Thunder.currentTime=0;
		Thunder.play();
		this.hx = 400;
		this.vx = -2000;
		this.onScreen = 1;
		this.timeLeft = 120;
	}
};
// Lightning2: Creates a large web of lightning
var lightning2 = {
	timeLeft: 0,
	vwidth: 32,
	vheight: 800,
	hwidth: 800,
	hheight: 32,
	hstate: 0,
	vstate: 0,
	hx: 400,
	hy: -2000,
	vx: -2000,
	vy: 288,
	cd: 0,
	onScreen: 0,
	
	draw: function(){
		if(this.onScreen == 1){
			if(this.hstate == 0){
				ctx.drawImage(hlightning1, this.hx - this.hwidth/2, this.hy);
				this.hstate+=1;
			}
			else if(this.hstate == 1){
				ctx.drawImage(hlightning2, this.hx - this.hwidth/2, this.hy);
				this.hstate+=1;
			}
			else if(this.hstate == 2){
				ctx.drawImage(hlightning3, this.hx - this.hwidth/2, this.hy);
				this.hstate=0;
			}
			if(this.vx != -2000){
				if(this.vstate == 0){
					ctx.drawImage(vlightning1, this.vx, this.vy - this.vheight/2);
					this.vstate+=1;
				}
				else if(this.vstate == 1){
					ctx.drawImage(vlightning2, this.vx, this.vy - this.vheight/2);
					this.vstate+=1;
				}
				else if(this.vstate == 2){
					ctx.drawImage(vlightning3, this.vx, this.vy - this.vheight/2);
					this.vstate=0;
				}
			}
		}
	},
	effect: function(){
		if(this.cd > 0){
			this.cd-=1;
		}
		if(this.onScreen == 1){
			if(this.timeLeft <= 0){
				this.onScreen = 0;
				this.vx = -2000;
				this.hy = -2000;
			}
			else{
				this.timeLeft-=1;
			}
			if(this.vx != -2000){
				for (E in AllEnemies){
					if(AllEnemies[E].x >= this.vx && AllEnemies[E].x <= this.vx + this.vwidth && AllEnemies[E].onScreen == 1){
						if(lightning22.hy == -2000){
							lightning22.hy = AllEnemies[E].y;
							lightning22.shoot();
						}
						onHit(AllEnemies[E]);
					}
				}
			}
			if(this.hy != -2000){
				for (E in AllEnemies){
					if(AllEnemies[E].y <= this.hy + this.hheight && AllEnemies[E].y >= this.hy && AllEnemies[E].onScreen == 1){
						if(this.vx == -2000){
							this.vx = AllEnemies[E].x
						}
						onHit(AllEnemies[E]);
					}
				}			
			}
		}
	},
	// Spawn
	shoot: function(){
	if(this.cd == 0){
		Thunder.currentTime=0;
		Thunder.play();
		this.hx = 400;
		this.vx = -2000;
		this.hy = player.y;
		this.cd = 1050;
		this.onScreen = 1;
		this.timeLeft = 240;
	}
	else{
		return 0;
	}
	}
	
};

// Lightning2-2: Creates a small web of lightning
var lightning22 = {
	timeLeft: 0,
	vwidth: 32,
	vheight: 800,
	hwidth: 800,
	hheight: 32,
	hstate: 0,
	vstate: 0,
	hx: 400,
	hy: -2000,
	vx: -2000,
	vy: 288,
	onScreen: 0,
	
	draw: function(){
		if(this.onScreen == 1){
			if(this.hstate == 0){
				ctx.drawImage(hlightning1, this.hx - this.hwidth/2, this.hy);
				this.hstate+=1;
			}
			else if(this.hstate == 1){
				ctx.drawImage(hlightning2, this.hx - this.hwidth/2, this.hy);
				this.hstate+=1;
			}
			else if(this.hstate == 2){
				ctx.drawImage(hlightning3, this.hx - this.hwidth/2, this.hy);
				this.hstate=0;
			}
			if(this.vx != -2000){
				if(this.vstate == 0){
					ctx.drawImage(vlightning1, this.vx, this.vy - this.vheight/2);
					this.vstate+=1;
				}
				else if(this.vstate == 1){
					ctx.drawImage(vlightning2, this.vx, this.vy - this.vheight/2);
					this.vstate+=1;
				}
				else if(this.vstate == 2){
					ctx.drawImage(vlightning3, this.vx, this.vy - this.vheight/2);
					this.vstate=0;
				}
			}
		}
	},
	effect: function(){
		if(this.onScreen == 1){
			if(this.timeLeft <= 0){
				this.onScreen = 0;
				this.vx = -2000;
				this.hy = -2000;
			}
			else{
				this.timeLeft-=1;
			}
			if(this.vx != -2000){
				for (E in AllEnemies){
					if(AllEnemies[E].x >= this.vx && AllEnemies[E].x <= this.vx + this.vwidth && AllEnemies[E].onScreen == 1){
						if(lightning23.hy == -2000){
							lightning23.hy = AllEnemies[E].y;
							lightning23.shoot();
						}
						onHit(AllEnemies[E]);
					}
				}
			}
			if(this.hy != -2000){
				for (E in AllEnemies){
					if(AllEnemies[E].y <= this.hy + this.hheight && AllEnemies[E].y >= this.hy && AllEnemies[E].onScreen == 1){
						if(this.vx == -2000){
							this.vx = AllEnemies[E].x
						}
						onHit(AllEnemies[E]);
					}
				}			
			}
		}
	},
	// Spawn
	shoot: function(){
		Thunder.currentTime=0;
		Thunder.play();
		this.hx = 400;
		this.vx = -2000;
		this.onScreen = 1;
		this.timeLeft = 240;
	}
};
// Lightning2-3: Creates a small web of lightning
var lightning23 = {
	timeLeft: 0,
	vwidth: 32,
	vheight: 800,
	hwidth: 800,
	hheight: 32,
	htime: 0,
	hstate: 0,
	vstate: 0,
	hx: 400,
	hy: -2000,
	vx: -2000,
	vy: 288,
	onScreen: 0,
	
	draw: function(){
		if(this.onScreen == 1){
			if(this.hstate == 0){
				ctx.drawImage(hlightning1, this.hx - this.hwidth/2, this.hy);
				this.hstate+=1;
			}
			else if(this.hstate == 1){
				ctx.drawImage(hlightning2, this.hx - this.hwidth/2, this.hy);
				this.hstate+=1;
			}
			else if(this.hstate == 2){
				ctx.drawImage(hlightning3, this.hx - this.hwidth/2, this.hy);
				this.hstate=0;
			}
			if(this.vx != -2000){
				if(this.vstate == 0){
					ctx.drawImage(vlightning1, this.vx, this.vy - this.vheight/2);
					this.vstate+=1;
				}
				else if(this.vstate == 1){
					ctx.drawImage(vlightning2, this.vx, this.vy - this.vheight/2);
					this.vstate+=1;
				}
				else if(this.vstate == 2){
					ctx.drawImage(vlightning3, this.vx, this.vy - this.vheight/2);
					this.vstate=0;
				}
			}
		}
	},
	effect: function(){
		if(this.onScreen == 1){
			if(this.timeLeft <= 0){
				this.onScreen = 0;
				this.vx = -2000;
				this.hy = -2000;
			}
			else{
				this.timeLeft-=1;
			}
			if(this.vx != -2000){
				for (E in AllEnemies){
					if(AllEnemies[E].x >= this.vx && AllEnemies[E].x <= this.vx + this.vwidth && AllEnemies[E].onScreen == 1){
						onHit(AllEnemies[E]);
					}
				}
			}
			if(this.hy != -2000){
				for (E in AllEnemies){
					if(AllEnemies[E].y <= this.hy + this.hheight && AllEnemies[E].y >= this.hy && AllEnemies[E].onScreen == 1){
						if(this.vx == -2000){
							this.vx = AllEnemies[E].x
						}
						onHit(AllEnemies[E]);
					}
				}			
			}
		}
	},
	// Spawn
	shoot: function(){
		Thunder.currentTime=0;
		Thunder.play();
		this.hx = 400;
		this.vx = -2000;
		this.onScreen = 1;
		this.timeLeft = 240;
	}
};