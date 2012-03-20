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
	
	draw: function(){
		if(this.onScreen == 1 && this.cast == 0){
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
				for (E in Enemies){
					if(Enemies[E].x >= this.vx && Enemies[E].x <= this.vx + this.vwidth && Enemies[E].onScreen == 1){
						if(lightning12.hy == -2000){
							lightning12.hy = Enemies[E].y;
							lightning12.shoot();
						}
						onHit(Enemies[E], Enemies[E].rp);
					}
					if(Sorceror.x >= this.vx && Sorceror.x <= this.vx + this.vwidth && Sorceror.onScreen == 1){
						if(lightning12.hy == -2000){
							lightning12.hy = Sorceror.y;
							lightning12.shoot();
						}
						Sorceror.onHit();
					}
					if(Spawner.x >= this.vx && Spawner.x <= this.vx + this.vwidth && Spawner.onScreen == 1){
						if(lightning12.hy == -2000){
							lightning12.hy = Spawner.y;
							lightning12.shoot();
						}
						Spawner.onHit();
					}
				}
			}
			
			if(this.hy != -2000){
				for (E in Enemies){
					if(Enemies[E].y <= this.hy + this.hheight && Enemies[E].y >= this.hy && Enemies[E].onScreen == 1){
						if(this.vx == -2000){
							this.vx = Enemies[E].x
						}
						onHit(Enemies[E], Enemies[E].rp);
					}
					if(Sorceror.y <= this.hy + this.hheight && Sorceror.y >= this.hy && Sorceror.onScreen == 1){
						if(this.vx == -2000){
							this.vx = Sorceror.x
						}
						Sorceror.onHit();
					}
					if(Spawner.y <= this.hy + this.hheight && Spawner.y >= this.hy && Spawner.onScreen == 1){
						if(this.vx == -2000){
							this.vx = Spawner.x
						}
						Spawner.onHit();
					}
				}			
			}
		}
	},
	// Spawn
	shoot: function(){
	if(this.cd == 0){
		Thunder.play();
		this.hx = 400;
		this.vx = -2000;
		this.hy = player.y;
		this.cd = 300;
		this.onScreen = 1;
		this.timeLeft = 120;
	}
	else{
		return 0;
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
				for (E in Enemies){
					if(Enemies[E].x >= this.vx && Enemies[E].x <= this.vx + this.vwidth && Enemies[E].onScreen == 1){
						onHit(Enemies[E], Enemies[E].rp);
					}
					if(Sorceror.x >= this.vx && Sorceror.x <= this.vx + this.vwidth && Sorceror.onScreen == 1){
						Sorceror.onHit();
					}
					if(Spawner.x >= this.vx && Spawner.x <= this.vx + this.vwidth && Spawner.onScreen == 1){
						Spawner.onHit();
					}
				}
			}
			
			if(this.hy != -2000){
				for (E in Enemies){
					if(Enemies[E].y <= this.hy + this.hheight && Enemies[E].y >= this.hy && Enemies[E].onScreen == 1){
						if(this.vx == -2000){
							this.vx = Enemies[E].x
						}
						onHit(Enemies[E], Enemies[E].rp);
					}
					if(Sorceror.y <= this.hy + this.hheight && Sorceror.y >= this.hy && Sorceror.onScreen == 1){
						if(this.vx == -2000){
							this.vx = Sorceror.x
						}
						Sorceror.onHit();
					}
					if(Spawner.y <= this.hy + this.hheight && Spawner.y >= this.hy && Spawner.onScreen == 1){
						if(this.vx == -2000){
							this.vx = Spawner.x
						}
						Spawner.onHit();
					}
				}			
			}
		}
	},
	// Spawn
	shoot: function(){
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
				for (E in Enemies){
					if(Enemies[E].x >= this.vx && Enemies[E].x <= this.vx + this.vwidth && Enemies[E].onScreen == 1){
						if(lightning22.hy == -2000){
							lightning22.hy = Enemies[E].y;
							lightning22.shoot();
						}
						onHit(Enemies[E], Enemies[E].rp);
					}
					if(Sorceror.x >= this.vx && Sorceror.x <= this.vx + this.vwidth && Sorceror.onScreen == 1){
						if(lightning22.hy == -2000){
							lightning22.hy = Sorceror.y;
							lightning22.shoot();
						}
						Sorceror.onHit();
					}
					if(Spawner.x >= this.vx && Spawner.x <= this.vx + this.vwidth && Spawner.onScreen == 1){
						if(lightning22.hy == -2000){
							lightning22.hy = Spawner.y;
							lightning22.shoot();
						}
						Spawner.onHit();
					}
				}
			}
			
			if(this.hy != -2000){
				for (E in Enemies){
					if(Enemies[E].y <= this.hy + this.hheight && Enemies[E].y >= this.hy && Enemies[E].onScreen == 1){
						if(this.vx == -2000){
							this.vx = Enemies[E].x
						}
						onHit(Enemies[E], Enemies[E].rp);
					}
					if(Sorceror.y <= this.hy + this.hheight && Sorceror.y >= this.hy && Sorceror.onScreen == 1){
						if(this.vx == -2000){
							this.vx = Sorceror.x
						}
						Sorceror.onHit();
					}
					if(Spawner.y <= this.hy + this.hheight && Spawner.y >= this.hy && Spawner.onScreen == 1){
						if(this.vx == -2000){
							this.vx = Spawner.x
						}
						Spawner.onHit();
					}
				}			
			}
		}
	},
	// Spawn
	shoot: function(){
	if(this.cd == 0){
		Thunder.play();
		this.hx = 400;
		this.vx = -2000;
		this.hy = player.y;
		this.cd = 600;
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
				for (E in Enemies){
					if(Enemies[E].x >= this.vx && Enemies[E].x <= this.vx + this.vwidth && Enemies[E].onScreen == 1){
						if(lightning23.hy == -2000){
							lightning23.hy = Enemies[E].y;
							lightning23.shoot();
						}
						onHit(Enemies[E], Enemies[E].rp);
					}
					if(Sorceror.x >= this.vx && Sorceror.x <= this.vx + this.vwidth && Sorceror.onScreen == 1){
						if(lightning23.hy == -2000){
							lightning23.hy = Sorceror.y;
							lightning23.shoot();
						}
						Sorceror.onHit();
					}
					if(Spawner.x >= this.vx && Spawner.x <= this.vx + this.vwidth && Spawner.onScreen == 1){
						if(lightning23.hy == -2000){
							lightning23.hy = Spawner.y;
							lightning23.shoot();
						}
						Spawner.onHit();
					}
				}
			}
			
			if(this.hy != -2000){
				for (E in Enemies){
					if(Enemies[E].y <= this.hy + this.hheight && Enemies[E].y >= this.hy && Enemies[E].onScreen == 1){
						if(this.vx == -2000){
							this.vx = Enemies[E].x
						}
						onHit(Enemies[E], Enemies[E].rp);
					}
					if(Sorceror.y <= this.hy + this.hheight && Sorceror.y >= this.hy && Sorceror.onScreen == 1){
						if(this.vx == -2000){
							this.vx = Sorceror.x
						}
						Sorceror.onHit();
					}
					if(Spawner.y <= this.hy + this.hheight && Spawner.y >= this.hy && Spawner.onScreen == 1){
						if(this.vx == -2000){
							this.vx = Spawner.x
						}
						Spawner.onHit();
					}
				}			
			}
		}
	},
	// Spawn
	shoot: function(){
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
				for (E in Enemies){
					if(Enemies[E].x >= this.vx && Enemies[E].x <= this.vx + this.vwidth && Enemies[E].onScreen == 1){
						onHit(Enemies[E], Enemies[E].rp);
					}
					if(Sorceror.x >= this.vx && Sorceror.x <= this.vx + this.vwidth && Sorceror.onScreen == 1){
						Sorceror.onHit();
					}
					if(Spawner.x >= this.vx && Spawner.x <= this.vx + this.vwidth && Spawner.onScreen == 1){
						Spawner.onHit();
					}
				}
			}
			
			if(this.hy != -2000){
				for (E in Enemies){
					if(Enemies[E].y <= this.hy + this.hheight && Enemies[E].y >= this.hy && Enemies[E].onScreen == 1){
						if(this.vx == -2000){
							this.vx = Enemies[E].x
						}
						onHit(Enemies[E], Enemies[E].rp);
					}
					if(Sorceror.y <= this.hy + this.hheight && Sorceror.y >= this.hy && Sorceror.onScreen == 1){
						if(this.vx == -2000){
							this.vx = Sorceror.x
						}
						Sorceror.onHit();
					}
					if(Spawner.y <= this.hy + this.hheight && Spawner.y >= this.hy && Spawner.onScreen == 1){
						if(this.vx == -2000){
							this.vx = Spawner.x
						}
						Spawner.onHit();
					}
				}			
			}
		}
	},
	// Spawn
	shoot: function(){
		Thunder.play();
		this.hx = 400;
		this.vx = -2000;
		this.onScreen = 1;
		this.timeLeft = 240;
	}
};