//--------------------------------------------- Bullet Stuff -----------------------------------------------------------------------------//
// Bullet: A basic attack
var bullet = {
	color: "blue",
	x: -100,
	y: -200,
	timeLeft: 0,
	speed: 16,
	width: 8,
	height: 6,
	dir: "A",
	splitTimer: 0,
	// pick which dumblebeam to shoot
	shoot: function(dir, h, w){	
	if(cd == 0 && (spell == "Conductive Beam" || (bullet81.x == -100 && bullet81.y == -200
		&& bullet82.x == -100 && bullet82.y == -200))
		&& bullet8.x == -100 && bullet8.y == -200){
		bullet8.shoot(dir, h, w);
	}
	else if(cd == 0	&& (spell == "Conductive Beam" || (bullet71.x == -100 && bullet71.y == -200
		&& bullet72.x == -100 && bullet72.y == -200))
		&& bullet7.x == -100 && bullet7.y == -200){
		bullet7.shoot(dir, h, w);
	}
	else if(cd == 0 && (spell == "Conductive Beam" || (bullet61.x == -100 && bullet61.y == -200
		&& bullet62.x == -100 && bullet62.y == -200))
		&& bullet6.x == -100 && bullet6.y == -200){
		bullet6.shoot(dir, h, w);
	}
	else if(cd == 0 && (spell == "Conductive Beam" || (bullet51.x == -100 && bullet51.y == -200
		&& bullet52.x == -100 && bullet52.y == -200))
		&& bullet5.x == -100 && bullet5.y == -200){
		bullet5.shoot(dir, h, w);
	}
	else if(cd == 0	&& (spell == "Conductive Beam" || (bullet41.x == -100 && bullet41.y == -200
		&& bullet42.x == -100 && bullet42.y == -200))
		&& bullet4.x == -100 && bullet4.y == -200){
		bullet4.shoot(dir, h, w);
	}
	else if(cd == 0	&& (spell == "Conductive Beam" || (bullet31.x == -100 && bullet31.y == -200
		&& bullet32.x == -100 && bullet32.y == -200))
		&& bullet3.x == -100 && bullet3.y == -200){
		bullet3.shoot(dir, h, w);
	}
	else if(cd == 0 && (spell == "Conductive Beam" || (bullet21.x == -100 && bullet21.y == -200
		&& bullet22.x == -100 && bullet22.y == -200))
		&& bullet2.x == -100 && bullet2.y == -200){
		bullet2.shoot(dir, h, w);
	}
	else if(cd == 0){
		Beam.currentTime=0;
		Beam.play();
		this.dir = dir;
		this.timeLeft = 60;
		this.height = h;
		this.width = w;
		this.x = player.x;
		this.y = player.y;
		if(spell == "Homing Beam"){
			cd = 35;
		}
		else if(spell == "Bubblebeam"){
			cd = cdTop;
			this.height = 16;
			this.width = 16;
			bullet11.dir = "D" + this.dir;
			bullet11.timeLeft = 60;
			bullet11.height = 16;
			bullet11.width = 16;
			bullet11.x = player.x;
			bullet11.y = player.y;
			bullet12.dir = "D2" + this.dir;
			bullet12.timeLeft = 60;
			bullet12.height = 16;
			bullet12.width = 16;
			bullet12.x = player.x;
			bullet12.y = player.y;
		}
		else{
			cd = cdTop;
		}
	}
	}
};
// Bullet: A basic attack
var bullet2 = {
	color: "blue",
	x: -100,
	y: -200,
	timeLeft: 0,
	speed: 16,
	width: 8,
	height: 6,
	dir: "A",
	splitTimer: 0,
	// Spawn
	shoot: function(dir, h, w){
		if(cd == 0){
			Beam.currentTime=0;
			Beam.play();
			this.dir = dir;
			this.timeLeft = 60;
			this.height = h;
			this.width = w;
			this.x = player.x;
			this.y = player.y;
			if(spell == "Homing Beam"){
				cd = 35;
			}
			else if(spell == "Bubblebeam"){
				cd = cdTop;
				this.height = 16;
				this.width = 16;
				bullet21.dir = "D" + this.dir;
				bullet21.timeLeft = 60;
				bullet21.height = 16;
				bullet21.width = 16;
				bullet21.x = player.x;
				bullet21.y = player.y;
				bullet22.dir = "D2" + this.dir;
				bullet22.timeLeft = 60;
				bullet22.height = 16;
				bullet22.width = 16;
				bullet22.x = player.x;
				bullet22.y = player.y;
			}
			else{
				cd = cdTop;
			}
		}
	}
};
// Bullet: A basic attack
var bullet3 = {
	color: "blue",
	x: -100,
	y: -200,
	timeLeft: 0,
	speed: 16,
	width: 8,
	height: 6,
	dir: "A",
	splitTimer: 0,
	shoot: function(dir, h, w){
		if(cd == 0){
			Beam.currentTime=0;
			Beam.play();
			this.dir = dir;
			this.timeLeft = 60;
			this.height = h;
			this.width = w;
			this.x = player.x;
			this.y = player.y;
			if(spell == "Homing Beam"){
				cd = 35;
			}
			else if(spell == "Bubblebeam"){
				cd = cdTop;
				this.height = 16;
				this.width = 16;
				bullet31.dir = "D" + this.dir;
				bullet31.timeLeft = 60;
				bullet31.height = 16;
				bullet31.width = 16;
				bullet31.x = player.x;
				bullet31.y = player.y;
				bullet32.dir = "D2" + this.dir;
				bullet32.timeLeft = 60;
				bullet32.height = 16;
				bullet32.width = 16;
				bullet32.x = player.x;
				bullet32.y = player.y;
			}
			else{
				cd = cdTop;
			}
		}
	}
};
// Bullet: A basic attack
var bullet4 = {
	color: "blue",
	x: -100,
	y: -200,
	timeLeft: 0,
	speed: 16,
	width: 8,
	height: 6,
	dir: "A",
	splitTimer: 0,
	// Spawn
	shoot: function(dir, h, w){
	if(cd == 0){
		Beam.currentTime=0;
		Beam.play();
		this.dir = dir;
		this.timeLeft = 60;
		this.height = h;
		this.width = w;
		this.x = player.x;
		this.y = player.y;
		if(spell == "Homing Beam"){
			cd = 35;
		}
		else if(spell == "Bubblebeam"){
			cd = cdTop;
			this.height = 16;
			this.width = 16;
			bullet41.dir = "D" + this.dir;
			bullet41.timeLeft = 60;
			bullet41.height = 16;
			bullet41.width = 16;
			bullet41.x = player.x;
			bullet41.y = player.y;
			bullet42.dir = "D2" + this.dir;
			bullet42.timeLeft = 60;
			bullet42.height = 16;
			bullet42.width = 16;
			bullet42.x = player.x;
			bullet42.y = player.y;
		}
		else{
			cd = cdTop;
		}
	}
	}
	
};
var bullet5 = {
	color: "blue",
	x: -100,
	y: -200,
	timeLeft: 0,
	speed: 16,
	width: 8,
	height: 6,
	dir: "A",
	splitTimer: 0,
	// Spawn
	shoot: function(dir, h, w){
	if(cd == 0){
		Beam.currentTime=0;
		Beam.play();
		this.dir = dir;
		this.timeLeft = 60;
		this.height = h;
		this.width = w;
		this.x = player.x;
		this.y = player.y;
		if(spell == "Homing Beam"){
			cd = 35;
		}
		else if(spell == "Bubblebeam"){
			cd = cdTop;
			this.height = 16;
			this.width = 16;
			bullet51.dir = "D" + this.dir;
			bullet51.timeLeft = 60;
			bullet51.height = 16;
			bullet51.width = 16;
			bullet51.x = player.x;
			bullet51.y = player.y;
			bullet52.dir = "D2" + this.dir;
			bullet52.timeLeft = 60;
			bullet52.height = 16;
			bullet52.width = 16;
			bullet52.x = player.x;
			bullet52.y = player.y;
		}
		else{
			cd = cdTop;
		}
	}
	}
	
};
var bullet6 = {
	color: "blue",
	x: -100,
	y: -200,
	timeLeft: 0,
	speed: 16,
	width: 8,
	height: 6,
	dir: "A",
	splitTimer: 0,
	// Spawn
	shoot: function(dir, h, w){
	if(cd == 0){
		Beam.currentTime=0;
		Beam.play();
		this.dir = dir;
		this.timeLeft = 60;
		this.height = h;
		this.width = w;
		this.x = player.x;
		this.y = player.y;
		if(spell == "Homing Beam"){
			cd = 35;
		}
		else if(spell == "Bubblebeam"){
			cd = cdTop;
			this.height = 16;
			this.width = 16;
			bullet61.dir = "D" + this.dir;
			bullet61.timeLeft = 60;
			bullet61.height = 16;
			bullet61.width = 16;
			bullet61.x = player.x;
			bullet61.y = player.y;
			bullet62.dir = "D2" + this.dir;
			bullet62.timeLeft = 60;
			bullet62.height = 16;
			bullet62.width = 16;
			bullet62.x = player.x;
			bullet62.y = player.y;
		}
		else{
			cd = cdTop;
		}
	}
	}
	
};
var bullet7 = {
	color: "blue",
	x: -100,
	y: -200,
	timeLeft: 0,
	speed: 16,
	width: 8,
	height: 6,
	dir: "A",
	splitTimer: 0,
	// Spawn
	shoot: function(dir, h, w){
	if(cd == 0){
		Beam.currentTime=0;
		Beam.play();
		this.dir = dir;
		this.timeLeft = 60;
		this.height = h;
		this.width = w;
		this.x = player.x;
		this.y = player.y;
		if(spell == "Homing Beam"){
			cd = 35;
		}
		else if(spell == "Bubblebeam"){
			cd = cdTop;
			this.height = 16;
			this.width = 16;
			bullet71.dir = "D" + this.dir;
			bullet71.timeLeft = 60;
			bullet71.height = 16;
			bullet71.width = 16;
			bullet71.x = player.x;
			bullet71.y = player.y;
			bullet72.dir = "D2" + this.dir;
			bullet72.timeLeft = 60;
			bullet72.height = 16;
			bullet72.width = 16;
			bullet72.x = player.x;
			bullet72.y = player.y;
		}
		else{
			cd = cdTop;
		}
	}
	}
	
};
var bullet8 = {
	color: "blue",
	x: -100,
	y: -200,
	timeLeft: 0,
	speed: 16,
	width: 8,
	height: 6,
	dir: "A",
	splitTimer: 0,
	// Spawn
	shoot: function(dir, h, w){
	if(cd == 0){
		Beam.currentTime=0;
		Beam.play();
		this.dir = dir;
		this.timeLeft = 60;
		this.height = h;
		this.width = w;
		this.x = player.x;
		this.y = player.y;
		if(spell == "Homing Beam"){
			cd = 35;
		}
		else if(spell == "Bubblebeam"){
			cd = cdTop;
			this.height = 16;
			this.width = 16;
			bullet81.dir = "D" + this.dir;
			bullet81.timeLeft = 60;
			bullet81.height = 16;
			bullet81.width = 16;
			bullet81.x = player.x;
			bullet81.y = player.y;
			bullet82.dir = "D2" + this.dir;
			bullet82.timeLeft = 60;
			bullet82.height = 16;
			bullet82.width = 16;
			bullet82.x = player.x;
			bullet82.y = player.y;
		}
		else{
			cd = cdTop;
		}
	}
	}
};
var bullet11 = {
	x: -100,
	y: -200,
	timeLeft: 0,
	speed: 16,
	width: 16,
	height: 16,
	dir: "A",
	splitTimer: 0
};
var bullet12 = {
	x: -100,
	y: -200,
	timeLeft: 0,
	speed: 16,
	width: 16,
	height: 16,
	dir: "A",
	splitTimer: 0
};
var bullet21 = {
	x: -100,
	y: -200,
	timeLeft: 0,
	speed: 16,
	width: 16,
	height: 16,
	dir: "A",
	splitTimer: 0
};
var bullet22 = {
	x: -100,
	y: -200,
	timeLeft: 0,
	speed: 16,
	width: 16,
	height: 16,
	dir: "A",
	splitTimer: 0
};
var bullet31 = {
	x: -100,
	y: -200,
	timeLeft: 0,
	speed: 16,
	width: 16,
	height: 16,
	dir: "A",
	splitTimer: 0
};
var bullet32 = {
	x: -100,
	y: -200,
	timeLeft: 0,
	speed: 16,
	width: 16,
	height: 16,
	dir: "A",
	splitTimer: 0
};
var bullet41 = {
	x: -100,
	y: -200,
	timeLeft: 0,
	speed: 16,
	width: 16,
	height: 16,
	dir: "A",
	splitTimer: 0
};
var bullet42 = {
	x: -100,
	y: -200,
	timeLeft: 0,
	speed: 16,
	width: 16,
	height: 16,
	dir: "A",
	splitTimer: 0
};
var bullet51 = {
	x: -100,
	y: -200,
	timeLeft: 0,
	speed: 16,
	width: 16,
	height: 16,
	dir: "A",
	splitTimer: 0
};
var bullet52 = {
	x: -100,
	y: -200,
	timeLeft: 0,
	speed: 16,
	width: 16,
	height: 16,
	dir: "A",
	splitTimer: 0
};
var bullet61 = {
	x: -100,
	y: -200,
	timeLeft: 0,
	speed: 16,
	width: 16,
	height: 16,
	dir: "A",
	splitTimer: 0
};
var bullet62 = {
	x: -100,
	y: -200,
	timeLeft: 0,
	speed: 16,
	width: 16,
	height: 16,
	dir: "A",
	splitTimer: 0
};
var bullet71 = {
	x: -100,
	y: -200,
	timeLeft: 0,
	speed: 16,
	width: 16,
	height: 16,
	dir: "A",
	splitTimer: 0
};
var bullet72 = {
	x: -100,
	y: -200,
	timeLeft: 0,
	speed: 16,
	width: 16,
	height: 16,
	dir: "A",
	splitTimer: 0
};
var bullet81 = {
	x: -100,
	y: -200,
	timeLeft: 0,
	speed: 16,
	width: 16,
	height: 16,
	dir: "A",
	splitTimer: 0
};
var bullet82 = {
	x: -100,
	y: -200,
	timeLeft: 0,
	speed: 16,
	width: 16,
	height: 16,
	dir: "A",
	splitTimer: 0
};
//used in conductive shots for cloning. also in mystic shots
var ConductiveShots = {1: bullet11, 2: bullet12, 3: bullet21, 4: bullet22, 5: bullet31, 6: bullet32, 7: bullet41, 8: bullet42, 9: bullet51, 10: bullet52, 11: bullet61, 12: bullet62,
				13: bullet71, 14: bullet72, 15: bullet81, 16: bullet82};
var Bullets = {1: bullet, 2: bullet2, 3: bullet3, 4: bullet4, 5: bullet5, 6: bullet6, 7: bullet7, 8: bullet8, 9: bullet11, 10: bullet12,
				11: bullet21, 12: bullet22, 13: bullet31, 14: bullet32, 15: bullet41, 16: bullet42, 17: bullet51, 18: bullet52, 19: bullet61, 20: bullet62,
				21: bullet71, 22: bullet72, 23: bullet81, 24: bullet82};
var mystIndex = 1;
function drawBullet(B){
	if (B.timeLeft > 0){
		if(spell == "Bubblebeam"){
			if(mystIndex < 5){
				ctx.drawImage(MysticBubble, B.x-B.width*0.5, B.y-B.height*0.5);
				mystIndex++;
			}
			else{
				ctx.drawImage(MysticBubble2, B.x-B.width*0.5, B.y-B.height*0.5);
				mystIndex++;
				if(mystIndex > 10){
					mystIndex = 1;
				}
			}
		}
		else if(spell == "Explosive Beam"){
			if(B.dir == "W" || B.dir == "S"){
				ctx.drawImage(BeamSheet,36, 0, 4, 32, B.x - B.width * 0.5, B.y - B.height * 0.5, 4, 32);
			}
			else if(B.dir == "A" || B.dir == "D"){
				ctx.drawImage(BeamSheet,0, 4, 32, 4, B.x - B.width * 0.5, B.y - B.height * 0.5, 32, 4);
			}
			else if(B.dir == "WA" || B.dir == "SD"){
				ctx.drawImage(BeamSheet, 32, 36, 32, 32, B.x - 16, B.y - 16, 32, 32);
			}
			else if(B.dir == "WD" || B.dir == "AS"){
				ctx.drawImage(BeamSheet, 32, 64, 32, 32, B.x - 16, B.y - 16, 32, 32);
			}
		}
		else if(spell == "Ice Beam"){
			if(B.dir == "W" || B.dir == "S"){
				ctx.drawImage(BeamSheet,40, 0, 4, 32, B.x - B.width * 0.5, B.y - B.height * 0.5, 4, 32);
			}
			else if(B.dir == "A" || B.dir == "D"){
				ctx.drawImage(BeamSheet,0, 8, 32, 4, B.x - B.width * 0.5, B.y - B.height * 0.5, 32, 4);
			}
			else if(B.dir == "WA" || B.dir == "SD"){
				ctx.drawImage(BeamSheet, 64, 36, 32, 32, B.x - 16, B.y - 16, 32, 32);
			}
			else if(B.dir == "WD" || B.dir == "AS"){
				ctx.drawImage(BeamSheet, 64, 64, 32, 32, B.x - 16, B.y - 16, 32, 32);
			}
		}
		else if(spell == "Conductive Beam"){
			if(B.dir == "W"){
				ctx.drawImage(BeamSheet, 92, 0, 4, 32, B.x - B.width * 0.5, B.y - B.height * 0.5, 4, 32);
			}
			else if(B.dir == "S"){
				ctx.drawImage(BeamSheet, 96, 0, 4, 32, B.x - B.width * 0.5, B.y - B.height * 0.5, 4, 32);
			}
			else if(B.dir == "A"){
				ctx.drawImage(BeamSheet, 60, 0, 32, 4, B.x - B.width * 0.5, B.y - B.height * 0.5, 32, 4);
			}
			else if(B.dir == "D"){
				ctx.drawImage(BeamSheet, 60, 4, 32, 4, B.x - B.width * 0.5, B.y - B.height * 0.5, 32, 4);
			}
			else if(B.dir == "WA"){
				ctx.drawImage(BeamSheet, 108, 0, 32, 32, B.x - 16, B.y - 16, 32, 32);
			}
			else if(B.dir == "SD"){
				ctx.drawImage(BeamSheet, 172, 0, 32, 32, B.x - 16, B.y - 16, 32, 32);
			}
			else if(B.dir == "AS"){
				ctx.drawImage(BeamSheet, 140, 0, 32, 32, B.x - 16, B.y - 16, 32, 32);
			}
			else if(B.dir == "WD"){
				ctx.drawImage(BeamSheet, 204, 0, 32, 32, B.x - 16, B.y - 16, 32, 32);
			}
		}
		else if(spell == "Light Beam"){
			if(B.dir == "W"){
				ctx.drawImage(BeamSheet, 100, 0, 4, 32, B.x - B.width * 0.5, B.y - B.height * 0.5, 4, 32);
			}
			else if(B.dir == "S"){
				ctx.drawImage(BeamSheet, 104, 0, 4, 32, B.x - B.width * 0.5, B.y - B.height * 0.5, 4, 32);
			}
			else if(B.dir == "A"){
				ctx.drawImage(BeamSheet, 60, 8, 32, 4, B.x - B.width * 0.5, B.y - B.height * 0.5, 32, 4);
			}
			else if(B.dir == "D"){
				ctx.drawImage(BeamSheet, 60, 12, 32, 4, B.x - B.width * 0.5, B.y - B.height * 0.5, 32, 4);
			}
			else if(B.dir == "WA"){
				ctx.drawImage(BeamSheet, 236, 0, 32, 32, B.x - 16, B.y - 16, 32, 32);
			}
			else if(B.dir == "SD"){
				ctx.drawImage(BeamSheet, 236, 32, 32, 32, B.x - 16, B.y - 16, 32, 32);
			}
			else if(B.dir == "AS"){
				ctx.drawImage(BeamSheet, 268, 0, 32, 32, B.x - 16, B.y - 16, 32, 32);
			}
			else if(B.dir == "WD"){
				ctx.drawImage(BeamSheet, 268, 32, 32, 32, B.x - 16, B.y - 16, 32, 32);
			}
		}
		else if(spell == "Homing Beam" || spell == "Confusion Beam"){
			if(B.dir == "W" || B.dir == "S"){
				ctx.drawImage(BeamSheet,48, 0, 4, 32, B.x - B.width * 0.5, B.y - B.height * 0.5, 4, 32);
			}
			else if(B.dir == "A" || B.dir == "D"){
				ctx.drawImage(BeamSheet,0, 16, 32, 4, B.x - B.width * 0.5, B.y - B.height * 0.5, 32, 4);
			}
			else if(B.dir == "WA" || B.dir == "SD"){
				ctx.drawImage(BeamSheet, 128, 36, 32, 32, B.x - 16, B.y - 16, 32, 32);
			}
			else if(B.dir == "WD" || B.dir == "AS"){
				ctx.drawImage(BeamSheet, 128, 64, 32, 32, B.x - 16, B.y - 16, 32, 32);
			}
		}
		else if(spell == "Piercing Beam"){
			if(B.dir == "W" || B.dir == "S"){
				ctx.drawImage(BeamSheet,52, 0, 4, 32, B.x - B.width * 0.5, B.y - B.height * 0.5, 4, 32);
			}
			else if(B.dir == "A" || B.dir == "D"){
				ctx.drawImage(BeamSheet,0, 20, 32, 4, B.x - B.width * 0.5, B.y - B.height * 0.5, 32, 4);
			}
			else if(B.dir == "WA" || B.dir == "SD"){
				ctx.drawImage(BeamSheet, 160, 36, 32, 32, B.x - 16, B.y - 16, 32, 32);
			}
			else if(B.dir == "WD" || B.dir == "AS"){
				ctx.drawImage(BeamSheet, 160, 64, 32, 32, B.x - 16, B.y - 16, 32, 32);
			}
		}
		else{
			if(B.dir == "W" || B.dir == "S"){
				ctx.drawImage(BeamSheet,32, 0, 4, 32, B.x - B.width * 0.5, B.y - B.height * 0.5, 4, 32);
			}
			else if(B.dir == "A" || B.dir == "D"){
				ctx.drawImage(BeamSheet,0, 0, 32, 4, B.x - B.width * 0.5, B.y - B.height * 0.5, 32, 4);
			}
			else if(B.dir == "WA" || B.dir == "SD"){
				ctx.drawImage(BeamSheet, 0, 36, 32, 32, B.x - 16, B.y - 16, 32, 32);
			}
			else if(B.dir == "WD" || B.dir == "AS"){
				ctx.drawImage(BeamSheet, 0, 64, 32, 32, B.x - 16, B.y - 16, 32, 32);
			}
		}
	}
	else{
		B.x = -100;
		B.y = -200;
	}
}
// Increment
function Bulletmove(B){
	if(B.splitTimer > 0){
		B.splitTimer-=1;
	}
	if(spell == "Homing Beam"){
		//Fix snapping
		B.x = Math.floor(B.x);
		B.y = Math.floor(B.y);
		if(Math.round(B.x*0.25) != B.x*0.25 && B.speed*0.25 == Math.round(B.speed*0.25)){
			B.x+=1;
		}
		if(Math.round(B.y*0.25) != B.y*0.25 && B.speed*0.25 == Math.round(B.speed*0.25)){
			B.y+=1;
		}
		var closest = "";
		var cdist = 2000;
		for (E in AllEnemies){
			if(AllEnemies[E].onTree == 0 && (STATE != "Graveyard" || GraveNight)){
				var distance = Math.sqrt(((B.x - AllEnemies[E].x)*(B.x - AllEnemies[E].x)) + ((B.y - AllEnemies[E].y)*(B.y - AllEnemies[E].y)));
				if(distance < cdist){
					cdist = distance;
					closest = AllEnemies[E];
				}
			}
		}
		var xdifference = closest.x - B.x;
		var ydifference = closest.y - B.y;
		if(closest.x < 8 || closest.y < 8 || closest.x > 792 || closest.y > 568){
			B.dir = B.dir;
		}
		else{
			if (xdifference <= closest.width*0.5  && xdifference >= 0 && ydifference > closest.height*0.5){
				B.dir = "S";
				B.width = 4;
				B.height = 32;
			}
			else if(xdifference <= closest.width*0.5  && xdifference >= 0 && ydifference < closest.height*0.5){
				B.dir = "W";
				B.width = 4;
				B.height = 32;
			}
			else if(xdifference < closest.width*0.5 && ydifference <= closest.height*0.5  && ydifference >= 0){
				B.dir = "A";
				B.width = 32;
				B.height = 4;
			}
			else if(xdifference > closest.width*0.5 && ydifference <= closest.height*0.5 && ydifference >= 0){
				B.dir = "D";
				B.width = 32;
				B.height = 4;
			}
			else if(xdifference < 0 && ydifference < 0){
				B.dir = "WA";
				B.width = 4;
				B.height = 4;
			}
			else if(xdifference < 0 && ydifference > 0){
				B.dir = "AS";
				B.width = 4;
				B.height = 4;
			}
			else if(xdifference > 0 && ydifference < 0){
				B.dir = "WD";
				B.width = 4;
				B.height = 4;
			}
			else if (xdifference > 0 && ydifference > 0){
				B.dir = "SD";
				B.width = 4;
				B.height = 4;
			}
			
		}
	}
	if((spell != "Homing Beam" || STATE == "Graveyard") && STATE != "Swamp"){
		for(O in obstacle1){
			if(obstacle1[O].fallIndex != 46){
				if(collision(B.dir, B, obstacle1[O])){
					if(spell == "Piercing Beam"){
						player.currpower = player.power;
						player.power+=1;
					}
					obsHit(obstacle1[O]);
					if(spell == "Piercing Beam"){
						player.power = player.currpower;
					}
					if(spell == "Explosive Beam"){
						if(Mfire.onScreen == 0){
							Mfire.onScreen = 1;
							Mfire.frame = 0;
							Mfire.x = B.x;
							Mfire.y = B.y;
						}
						else if(Mfire2.onScreen == 0){
							Mfire2.onScreen = 1;
							Mfire2.frame = 0;
							Mfire2.x = B.x;
							Mfire2.y = B.y;
						}
						else if(Mfire3.onScreen == 0){
							Mfire3.onScreen = 1;
							Mfire3.frame = 0;
							Mfire3.x = B.x;
							Mfire3.y = B.y;
						}
						else if(Mfire4.onScreen == 0){
							Mfire4.onScreen = 1;
							Mfire4.frame = 0;
							Mfire4.x = B.x;
							Mfire4.y = B.y;
						}
					}
					else if(spell == "Ice Beam"){
						if(Mice.onScreen == 0){
							Mice.onScreen = 1;
							Mice.frame = 0;
							Mice.x = B.x;
							Mice.y = B.y;
						}
						else if(Mice2.onScreen == 0){
							Mice2.onScreen = 1;
							Mice2.frame = 0;
							Mice2.x = B.x;
							Mice2.y = B.y;
						}
						else if(Mice3.onScreen == 0){
							Mice3.onScreen = 1;
							Mice3.frame = 0;
							Mice3.x = B.x;
							Mice3.y = B.y;
						}
						else if(Mice4.onScreen == 0){
							Mice4.onScreen = 1;
							Mice4.frame = 0;
							Mice4.x = B.x;
							Mice4.y = B.y;
						}
					}
					if(spell == "Conductive Beam"){
						if(!B.splitTimer){
							B.splitTimer = 3;
							if(B.dir == "W" || B.dir == "S"){
								B.width = 32;
								B.height = 4;
								B.dir = "A";
								for(S in ConductiveShots){
									if(ConductiveShots[S].timeLeft == 0){
										ConductiveShots[S].dir = "D";
										ConductiveShots[S].height = 4;
										ConductiveShots[S].width = 32;
										ConductiveShots[S].x = B.x;
										ConductiveShots[S].y = B.y;
										ConductiveShots[S].timeLeft = B.timeLeft;
										ConductiveShots[S].splitTimer = 3;
										break;
									}
								}
							}
							else if(B.dir == "A" || B.dir == "D"){
								B.width = 4;
								B.height = 32;
								B.dir = "W";
								for(S in ConductiveShots){
									if(ConductiveShots[S].timeLeft == 0){
										ConductiveShots[S].dir = "S";
										ConductiveShots[S].height = 32;
										ConductiveShots[S].width = 4;
										ConductiveShots[S].x = B.x;
										ConductiveShots[S].y = B.y;
										ConductiveShots[S].timeLeft = B.timeLeft;
										ConductiveShots[S].splitTimer = 3;
										break;
									}
								}
							}
							else if(B.dir == "WD" || B.dir == "AS"){
								B.width = 4;
								B.height = 4;
								B.dir = "WA";
								for(S in ConductiveShots){
									if(ConductiveShots[S].timeLeft == 0 && ConductiveShots[S].x == -100 && ConductiveShots[S].y == -200){
										ConductiveShots[S].dir = "SD";
										ConductiveShots[S].height = 4;
										ConductiveShots[S].width = 4;
										ConductiveShots[S].x = B.x+4;
										ConductiveShots[S].y = B.y+4;
										ConductiveShots[S].timeLeft = B.timeLeft;
										ConductiveShots[S].splitTimer = 3;
										break;
									}
								}
								B.y-=4;
								B.x-=4;
							}
							else if(B.dir == "WA" || B.dir == "SD"){
								B.width = 4;
								B.height = 4;
								B.dir = "WD";
								for(S in ConductiveShots){
									if(ConductiveShots[S].timeLeft == 0 && ConductiveShots[S].x == -100 && ConductiveShots[S].y == -200){
										ConductiveShots[S].dir = "AS";
										ConductiveShots[S].height = 4;
										ConductiveShots[S].width = 4;
										ConductiveShots[S].x = B.x-4;
										ConductiveShots[S].y = B.y+4;
										ConductiveShots[S].timeLeft = B.timeLeft;
										ConductiveShots[S].splitTimer = 3;
										break;
									}
								}
								B.x+=4;
								B.y-=4;
							}
						}
					}
					else if(spell != "Light Beam"){
						B.timeLeft = 0;
					}
				}
			}
		}
		for(O in obstacle2){
			if(collision(B.dir, B, obstacle2[O])){
				if(spell == "Piercing Beam"){
					player.currpower = player.power;
					player.power+=1;
				}
				obsHit(obstacle2[O]);
				if(spell == "Piercing Beam"){
					player.power = player.currpower;
				}
				if(spell == "Explosive Beam"){
					if(Mfire.onScreen == 0){
						Mfire.onScreen = 1;
						Mfire.frame = 0;
						Mfire.x = B.x;
						Mfire.y = B.y;
					}
					else if(Mfire2.onScreen == 0){
						Mfire2.onScreen = 1;
						Mfire2.frame = 0;
						Mfire2.x = B.x;
						Mfire2.y = B.y;
					}
					else if(Mfire3.onScreen == 0){
						Mfire3.onScreen = 1;
						Mfire3.frame = 0;
						Mfire3.x = B.x;
						Mfire3.y = B.y;
					}
					else if(Mfire4.onScreen == 0){
						Mfire4.onScreen = 1;
						Mfire4.frame = 0;
						Mfire4.x = B.x;
						Mfire4.y = B.y;
					}
				}
				else if(spell == "Ice Beam"){
					if(Mice.onScreen == 0){
						Mice.onScreen = 1;
						Mice.frame = 0;
						Mice.x = B.x;
						Mice.y = B.y;
					}
					else if(Mice2.onScreen == 0){
						Mice2.onScreen = 1;
						Mice2.frame = 0;
						Mice2.x = B.x;
						Mice2.y = B.y;
					}
					else if(Mice3.onScreen == 0){
						Mice3.onScreen = 1;
						Mice3.frame = 0;
						Mice3.x = B.x;
						Mice3.y = B.y;
					}
					else if(Mice4.onScreen == 0){
						Mice4.onScreen = 1;
						Mice4.frame = 0;
						Mice4.x = B.x;
						Mice4.y = B.y;
					}
				}
				if(spell == "Conductive Beam"){
					if(!B.splitTimer){
						B.splitTimer = 3;
						if(B.dir == "W" || B.dir == "S"){
							B.width = 32;
							B.height = 4;
							B.dir = "A";
							for(S in ConductiveShots){
								if(ConductiveShots[S].timeLeft == 0){
									ConductiveShots[S].dir = "D";
									ConductiveShots[S].height = 4;
									ConductiveShots[S].width = 32;
									ConductiveShots[S].x = B.x;
									ConductiveShots[S].y = B.y;
									ConductiveShots[S].timeLeft = B.timeLeft;
									ConductiveShots[S].splitTimer = 3;
									break;
								}
							}
						}
						else if(B.dir == "A" || B.dir == "D"){
							B.width = 4;
							B.height = 32;
							B.dir = "W";
							for(S in ConductiveShots){
								if(ConductiveShots[S].timeLeft == 0){
									ConductiveShots[S].dir = "S";
									ConductiveShots[S].height = 32;
									ConductiveShots[S].width = 4;
									ConductiveShots[S].x = B.x;
									ConductiveShots[S].y = B.y;
									ConductiveShots[S].timeLeft = B.timeLeft;
									ConductiveShots[S].splitTimer = 3;
									break;
								}
							}
						}
						else if(B.dir == "WD" || B.dir == "AS"){
							B.width = 4;
							B.height = 4;
							B.dir = "WA";
							for(S in ConductiveShots){
								if(ConductiveShots[S].timeLeft == 0 && ConductiveShots[S].x == -100 && ConductiveShots[S].y == -200){
									ConductiveShots[S].dir = "SD";
									ConductiveShots[S].height = 4;
									ConductiveShots[S].width = 4;
									ConductiveShots[S].x = B.x+4;
									ConductiveShots[S].y = B.y+4;
									ConductiveShots[S].timeLeft = B.timeLeft;
									ConductiveShots[S].splitTimer = 3;
									break;
								}
							}
							B.y-=4;
							B.x-=4;
						}
						else if(B.dir == "WA" || B.dir == "SD"){
							B.width = 4;
							B.height = 4;
							B.dir = "WD";
							for(S in ConductiveShots){
								if(ConductiveShots[S].timeLeft == 0 && ConductiveShots[S].x == -100 && ConductiveShots[S].y == -200){
									ConductiveShots[S].dir = "AS";
									ConductiveShots[S].height = 4;
									ConductiveShots[S].width = 4;
									ConductiveShots[S].x = B.x-4;
									ConductiveShots[S].y = B.y+4;
									ConductiveShots[S].timeLeft = B.timeLeft;
									ConductiveShots[S].splitTimer = 3;
									break;
								}
							}
							B.x+=4;
							B.y-=4;
						}
					}
				}
				else if(spell != "Light Beam"){
					B.timeLeft = 0;
				}
			}
		}
		for(O in obstacle3){
			if(collision(B.dir, B, obstacle3[O])){
				if(spell == "Piercing Beam"){
					player.currpower = player.power;
					player.power+=1;
				}
				obsHit(obstacle3[O]);
				if(spell == "Piercing Beam"){
					player.power = player.currpower;
				}
				if(spell == "Explosive Beam"){
					if(Mfire.onScreen == 0){
						Mfire.onScreen = 1;
						Mfire.frame = 0;
						Mfire.x = B.x;
						Mfire.y = B.y;
					}
					else if(Mfire2.onScreen == 0){
						Mfire2.onScreen = 1;
						Mfire2.frame = 0;
						Mfire2.x = B.x;
						Mfire2.y = B.y;
					}
					else if(Mfire3.onScreen == 0){
						Mfire3.onScreen = 1;
						Mfire3.frame = 0;
						Mfire3.x = B.x;
						Mfire3.y = B.y;
					}
					else if(Mfire4.onScreen == 0){
						Mfire4.onScreen = 1;
						Mfire4.frame = 0;
						Mfire4.x = B.x;
						Mfire4.y = B.y;
					}
				}
				else if(spell == "Ice Beam"){
					if(Mice.onScreen == 0){
						Mice.onScreen = 1;
						Mice.frame = 0;
						Mice.x = B.x;
						Mice.y = B.y;
					}
					else if(Mice2.onScreen == 0){
						Mice2.onScreen = 1;
						Mice2.frame = 0;
						Mice2.x = B.x;
						Mice2.y = B.y;
					}
					else if(Mice3.onScreen == 0){
						Mice3.onScreen = 1;
						Mice3.frame = 0;
						Mice3.x = B.x;
						Mice3.y = B.y;
					}
					else if(Mice4.onScreen == 0){
						Mice4.onScreen = 1;
						Mice4.frame = 0;
						Mice4.x = B.x;
						Mice4.y = B.y;
					}
				}
				if(spell == "Conductive Beam"){
					if(!B.splitTimer){
						B.splitTimer = 3;
						if(B.dir == "W" || B.dir == "S"){
							B.width = 32;
							B.height = 4;
							B.dir = "A";
							for(S in ConductiveShots){
								if(ConductiveShots[S].timeLeft == 0){
									ConductiveShots[S].dir = "D";
									ConductiveShots[S].height = 4;
									ConductiveShots[S].width = 32;
									ConductiveShots[S].x = B.x;
									ConductiveShots[S].y = B.y;
									ConductiveShots[S].timeLeft = B.timeLeft;
									ConductiveShots[S].splitTimer = 3;
									break;
								}
							}
						}
						else if(B.dir == "A" || B.dir == "D"){
							B.width = 4;
							B.height = 32;
							B.dir = "W";
							for(S in ConductiveShots){
								if(ConductiveShots[S].timeLeft == 0){
									ConductiveShots[S].dir = "S";
									ConductiveShots[S].height = 32;
									ConductiveShots[S].width = 4;
									ConductiveShots[S].x = B.x;
									ConductiveShots[S].y = B.y;
									ConductiveShots[S].timeLeft = B.timeLeft;
									ConductiveShots[S].splitTimer = 3;
									break;
								}
							}
						}
						else if(B.dir == "WD" || B.dir == "AS"){
							B.width = 4;
							B.height = 4;
							B.dir = "WA";
							for(S in ConductiveShots){
								if(ConductiveShots[S].timeLeft == 0 && ConductiveShots[S].x == -100 && ConductiveShots[S].y == -200){
									ConductiveShots[S].dir = "SD";
									ConductiveShots[S].height = 4;
									ConductiveShots[S].width = 4;
									ConductiveShots[S].x = B.x+4;
									ConductiveShots[S].y = B.y+4;
									ConductiveShots[S].timeLeft = B.timeLeft;
									ConductiveShots[S].splitTimer = 3;
									break;
								}
							}
							B.y-=4;
							B.x-=4;
						}
						else if(B.dir == "WA" || B.dir == "SD"){
							B.width = 4;
							B.height = 4;
							B.dir = "WD";
							for(S in ConductiveShots){
								if(ConductiveShots[S].timeLeft == 0 && ConductiveShots[S].x == -100 && ConductiveShots[S].y == -200){
									ConductiveShots[S].dir = "AS";
									ConductiveShots[S].height = 4;
									ConductiveShots[S].width = 4;
									ConductiveShots[S].x = B.x-4;
									ConductiveShots[S].y = B.y+4;
									ConductiveShots[S].timeLeft = B.timeLeft;
									ConductiveShots[S].splitTimer = 3;
									break;
								}
							}
							B.x+=4;
							B.y-=4;
						}
					}
				}
				else if(spell != "Light Beam"){
					B.timeLeft = 0;
				}
			}
		}
	}
	for (E in AllEnemies){
		if(collision(B.dir, B, AllEnemies[E]) && AllEnemies[E].onTree == 0){
			if(!(spell == "Light Beam") && !(spell1 == "Mystic" && spell2 != "Mystic" && spell2 != "N/A" && spell2 != "Earth") && !(spell2 == "Mystic" && spell1 != "Mystic" && spell1 != "Earth" && spell1 != "N/A")){
				createBlood(B);
			}
			if(spell == "Piercing Beam"){
				player.currpower = player.power;
				player.power+=1;
			}
			if(spell == "Explosive Beam"){
				if(Mfire.onScreen == 0){
					Mfire.onScreen = 1;
					Mfire.frame = 0;
					Mfire.x = B.x;
					Mfire.y = B.y;
				}
				else if(Mfire2.onScreen == 0){
					Mfire2.onScreen = 1;
					Mfire2.frame = 0;
					Mfire2.x = B.x;
					Mfire2.y = B.y;
				}
				else if(Mfire3.onScreen == 0){
					Mfire3.onScreen = 1;
					Mfire3.frame = 0;
					Mfire3.x = B.x;
					Mfire3.y = B.y;
				}
				else if(Mfire4.onScreen == 0){
					Mfire4.onScreen = 1;
					Mfire4.frame = 0;
					Mfire4.x = B.x;
					Mfire4.y = B.y;
				}
				B.timeLeft = 0;
			}
			else if(spell == "Ice Beam"){
				if(Mice.onScreen == 0){
					Mice.onScreen = 1;
					Mice.frame = 0;
					Mice.x = B.x;
					Mice.y = B.y;
				}
				else if(Mice2.onScreen == 0){
					Mice2.onScreen = 1;
					Mice2.frame = 0;
					Mice2.x = B.x;
					Mice2.y = B.y;
				}
				else if(Mice3.onScreen == 0){
					Mice3.onScreen = 1;
					Mice3.frame = 0;
					Mice3.x = B.x;
					Mice3.y = B.y;
				}
				else if(Mice4.onScreen == 0){
					Mice4.onScreen = 1;
					Mice4.frame = 0;
					Mice4.x = B.x;
					Mice4.y = B.y;
				}
				B.timeLeft = 0;
			}
			else if(spell == "Conductive Beam"){
				if(!B.splitTimer){
					B.splitTimer = 3;
					if(B.dir == "W" || B.dir == "S"){
						B.width = 32;
						B.height = 4;
						B.dir = "A";
						for(S in ConductiveShots){
							if(ConductiveShots[S].timeLeft == 0){
								ConductiveShots[S].dir = "D";
								ConductiveShots[S].height = 4;
								ConductiveShots[S].width = 32;
								ConductiveShots[S].x = B.x;
								ConductiveShots[S].y = B.y;
								ConductiveShots[S].timeLeft = B.timeLeft;
								ConductiveShots[S].splitTimer = 3;
								break;
							}
						}
					}
					else if(B.dir == "A" || B.dir == "D"){
						B.width = 4;
						B.height = 32;
						B.dir = "W";
						for(S in ConductiveShots){
							if(ConductiveShots[S].timeLeft == 0){
								ConductiveShots[S].dir = "S";
								ConductiveShots[S].height = 32;
								ConductiveShots[S].width = 4;
								ConductiveShots[S].x = B.x;
								ConductiveShots[S].y = B.y;
								ConductiveShots[S].timeLeft = B.timeLeft;
								ConductiveShots[S].splitTimer = 3;
								break;
							}
						}
					}
					else if(B.dir == "WD" || B.dir == "AS"){
						B.width = 4;
						B.height = 4;
						B.dir = "WA";
						for(S in ConductiveShots){
							if(ConductiveShots[S].timeLeft == 0 && ConductiveShots[S].x == -100 && ConductiveShots[S].y == -200){
								ConductiveShots[S].dir = "SD";
								ConductiveShots[S].height = 4;
								ConductiveShots[S].width = 4;
								ConductiveShots[S].x = B.x+4;
								ConductiveShots[S].y = B.y+4;
								ConductiveShots[S].timeLeft = B.timeLeft;
								ConductiveShots[S].splitTimer = 3;
								break;
							}
						}
						B.y-=4;
						B.x-=4;
					}
					else if(B.dir == "WA" || B.dir == "SD"){
						B.width = 4;
						B.height = 4;
						B.dir = "WD";
						for(S in ConductiveShots){
							if(ConductiveShots[S].timeLeft == 0 && ConductiveShots[S].x == -100 && ConductiveShots[S].y == -200){
								ConductiveShots[S].dir = "AS";
								ConductiveShots[S].height = 4;
								ConductiveShots[S].width = 4;
								ConductiveShots[S].x = B.x-4;
								ConductiveShots[S].y = B.y+4;
								ConductiveShots[S].timeLeft = B.timeLeft;
								ConductiveShots[S].splitTimer = 3;
								break;
							}
						}
						B.x+=4;
						B.y-=4;
					}
				}
			}
			else if(AllEnemies[E].type != "Genie" && spell != "Light Beam"){
				B.timeLeft = 0;
			}
			if(spell == "Confusion Beam"){
				if(!AllEnemies[E].good){
					if(!AllEnemies[E].goodNum){
						AllEnemies[E].goodNum = 0;
					}
					AllEnemies[E].good = true;
					AllEnemies[E].goodTimer = 60-20*AllEnemies[E].goodNum;
					if(AllEnemies[E].goodTimer <= 0){
						AllEnemies[E].goodTimer = 5;
					}
					AllEnemies[E].goodTimerMax = AllEnemies[E].goodTimer;
					AllEnemies[E].goodNum++;
				}
			}
			else{
				onHit(AllEnemies[E]);
			}
			if(spell == "Piercing Beam"){
				player.power = player.currpower;
			}
		}
	}
	if (B.timeLeft > 0 && B.dir == "W"){
		B.timeLeft--;
		B.y -= B.speed;
	}
	else if (B.timeLeft > 0 && B.dir == "A"){
		B.timeLeft--;
		B.x -= B.speed;
	}
	else if (B.timeLeft > 0 && B.dir == "S"){
		B.timeLeft--;
		B.y += B.speed;
	}
	else if (B.timeLeft > 0 && B.dir == "D"){
		B.timeLeft--;
		B.x += B.speed;
	}
	else if (B.timeLeft > 0 && B.dir == "WA"){
		B.timeLeft--;
		B.x -= B.speed/Math.sqrt(2);
		B.y -= B.speed/Math.sqrt(2);
	}
	else if (B.timeLeft > 0 && B.dir == "AS"){
		B.timeLeft--;
		B.x -= B.speed/Math.sqrt(2);
		B.y += B.speed/Math.sqrt(2);
	}
	else if (B.timeLeft > 0 && B.dir == "SD"){
		B.timeLeft--;
		B.x += B.speed/Math.sqrt(2);
		B.y += B.speed/Math.sqrt(2);
	}
	else if (B.timeLeft > 0 && B.dir == "WD"){
		B.timeLeft--;
		B.x += B.speed/Math.sqrt(2);
		B.y -= B.speed/Math.sqrt(2);
	}
	else if (B.timeLeft > 0 && B.dir == "DW"){
		B.timeLeft--;
		B.x -= B.speed/2/Math.sqrt(2);
		B.y -= B.speed/Math.sqrt(2);
	}
	else if (B.timeLeft > 0 && B.dir == "D2W"){
		B.timeLeft--;
		B.x += B.speed/2/Math.sqrt(2);
		B.y -= B.speed/Math.sqrt(2);
	}
	else if (B.timeLeft > 0 && B.dir == "DA"){
		B.timeLeft--;
		B.x -= B.speed/Math.sqrt(2);
		B.y -= B.speed/2/Math.sqrt(2);
	}
	else if (B.timeLeft > 0 && B.dir == "D2A"){
		B.timeLeft--;
		B.x -= B.speed/Math.sqrt(2);
		B.y += B.speed/2/Math.sqrt(2);
	}
	else if (B.timeLeft > 0 && B.dir == "DS"){
		B.timeLeft--;
		B.x -= B.speed/2/Math.sqrt(2);
		B.y += B.speed/Math.sqrt(2);
	}
	else if (B.timeLeft > 0 && B.dir == "D2S"){
		B.timeLeft--;
		B.x += B.speed/2/Math.sqrt(2);
		B.y += B.speed/Math.sqrt(2);
	}
	else if (B.timeLeft > 0 && B.dir == "DD"){
		B.timeLeft--;
		B.x += B.speed/Math.sqrt(2);
		B.y -= B.speed/2/Math.sqrt(2);
	}
	else if (B.timeLeft > 0 && B.dir == "D2D"){
		B.timeLeft--;
		B.x += B.speed/Math.sqrt(2);
		B.y += B.speed/2/Math.sqrt(2);
	}
	else if (B.timeLeft > 0 && B.dir == "DWD"){
		B.timeLeft--;
		B.x += B.speed/Math.sqrt(2);
		B.y -= B.speed/2/Math.sqrt(2);
	}
	else if (B.timeLeft > 0 && B.dir == "D2WD"){
		B.timeLeft--;
		B.x += B.speed/2/Math.sqrt(2);
		B.y -= B.speed/Math.sqrt(2);
	}
	else if (B.timeLeft > 0 && B.dir == "DWA"){
		B.timeLeft--;
		B.x -= B.speed/Math.sqrt(2);
		B.y -= B.speed/2/Math.sqrt(2);
	}
	else if (B.timeLeft > 0 && B.dir == "D2WA"){
		B.timeLeft--;
		B.x -= B.speed/2/Math.sqrt(2);
		B.y -= B.speed/Math.sqrt(2);
	}
	else if (B.timeLeft > 0 && B.dir == "DSD"){
		B.timeLeft--;
		B.x += B.speed/Math.sqrt(2);
		B.y += B.speed/2/Math.sqrt(2);
	}
	else if (B.timeLeft > 0 && B.dir == "D2SD"){
		B.timeLeft--;
		B.x += B.speed/2/Math.sqrt(2);
		B.y += B.speed/Math.sqrt(2);
	}
	else if (B.timeLeft > 0 && B.dir == "DAS"){
		B.timeLeft--;
		B.x -= B.speed/Math.sqrt(2);
		B.y += B.speed/2/Math.sqrt(2);
	}
	else if (B.timeLeft > 0 && B.dir == "D2AS"){
		B.timeLeft--;
		B.x -= B.speed/2/Math.sqrt(2);
		B.y += B.speed/Math.sqrt(2);
	}
}
// ------------------------------------------------------ Spell Combos ---------------------------------------------------------------//
// Frozen Fireball: Fires a projectile. On hitting an obstacle or wall it explodes forming an ice field.
var fireice = {
	color1: "#FF6600",
	color2: "#00CCFF",
	color: "#FF6600",
	state: 0,
	x: -1000,
	y: -200,
	width: 32,
	height: 32,
	frame: 0,
	cd: 0,
	cdTop: 60,
	onScreen: 0,
	dir: "W",
	speed: 16,
	flicker: 600,
	draw: function(){
		if(this.onScreen == 1){
			if(this.state == 0){
				if(this.flicker*0.5 != Math.round(this.flicker*0.5)){
					ctx.globalAlpha = Alpha*0.5;
					ctx.fillStyle = this.color2;
					ctx.fillRect(this.x - this.width * 0.5,
					this.y - this.height * 0.5,
					this.width, this.height);
					ctx.globalAlpha = Alpha;
					this.flicker-=1;
				}
				else{
					ctx.globalAlpha = Alpha*0.5;
					ctx.fillStyle = this.color1;
					ctx.fillRect(this.x - this.width * 0.5,
					this.y - this.height * 0.5,
					this.width, this.height);
					ctx.globalAlpha = Alpha;
					this.flicker-=1;
				}	
			}
			else{
			ctx.globalAlpha = Alpha;
			ctx.globalAlpha = Alpha*0.5;
			ctx.fillStyle = this.color;
			ctx.fillRect(this.x - this.width * 0.5,
			this.y - this.height * 0.5,
			this.width, this.height);
			ctx.globalAlpha = Alpha;
			}
		}
	},
	
	move: function(){
		if(this.cd > 0){
			this.cd-=1;
		}
		if(this.state == 1){		
			if(this.frame <= 10){
				this.color = this.color2;
				this.width = this.width + 8*this.frame;
				this.height = this.height + 8*this.frame;
				this.frame++;
				for (E in AllEnemies){
					if(collision(AllEnemies[E].dir, AllEnemies[E], this) || contained(this, AllEnemies[E])){
						AllEnemies[E].speed = AllEnemies[E].speed2;
					}
				}
			}
			else{
				this.frame++;
				for (E in AllEnemies){
					if(collision(AllEnemies[E].dir, AllEnemies[E], this) || contained(this, AllEnemies[E])){
						AllEnemies[E].speed = AllEnemies[E].speed2;
					}
				}
			}
			if(this.frame == 90){
				for (E in AllEnemies){
					AllEnemies[E].speed = AllEnemies[E].speed2 * 2;
				}
				this.onScreen = 0;
				this.state = 0;
				this.frame = 0;
			}
		}
		else if(this.onScreen == 1 && this.state == 0){
			if(obsCollision(obstacle1, this, this.dir) || (obsCollision(obstacle2, this, this.dir)) || (obsCollision(obstacle3, this, this.dir)
				|| this.x <= 32 || this.x >= 768 || this.y <= 32 || this.y >= 544)){
				this.state = 1;
				Fwave.currentTime=0;
				Fwave.play();
			}
			for(O in obstacle1){
				if(collision(this.dir, this, obstacle1[O])){
					obsHit(obstacle1[O]);
				}
			}
			for(O in obstacle2){
				if(collision(this.dir, this, obstacle2[O])){
					obsHit(obstacle2[O]);
				}
			}
			for(O in obstacle3){
				if(collision(this.dir, this, obstacle3[O])){
					obsHit(obstacle3[O]);
				}
			}
			for (E in AllEnemies){
				if(collision(AllEnemies[E].dir, AllEnemies[E], this)){
					onHit(AllEnemies[E]);
				}
			}
			if (this.dir == "W"){
				this.y -= this.speed;
			}
			if (this.dir == "A"){
				this.x -= this.speed;
			}
			if (this.dir == "S"){
				this.y += this.speed;
			}
			if (this.dir == "D"){
				this.x += this.speed;
			}
			if (this.dir == "WA"){
				this.x -= this.speed;
				this.y -= this.speed;
			}
			if (this.dir == "AS"){
				this.x -= this.speed;
				this.y += this.speed;
			}
			if (this.dir == "SD"){
				this.x += this.speed;
				this.y += this.speed;
			}
			if (this.dir == "WD"){
				this.x += this.speed;
				this.y -= this.speed;
			}
		}
	},
		
	// Spawn
	shoot: function(){
		if(this.cd == 0){
			if(this.onScreen == 1){
				fireice2.shoot();
				this.cd = this.cdTop;
			}
			else{
				Frozen.currentTime=0;
				Frozen.play();
				this.height = 32;
				this.width = 32;
				this.x = player.x;
				this.y = player.y;
				this.dir = player.dir;
				this.cd = this.cdTop;
				this.frame = 0;
				this.onScreen = 1;
				this.color = this.color1;
				this.state = 0;
			}
		}
	}
};
//second one because low rc
var fireice2 = {
	color1: "#FF6600",
	color2: "#00CCFF",
	color: "#FF6600",
	state: 0,
	x: -1000,
	y: -200,
	width: 32,
	height: 32,
	frame: 0,
	onScreen: 0,
	dir: "W",
	speed: 16,
	flicker: 600,
	draw: function(){
		if(this.onScreen == 1){
			if(this.state == 0){
				if(this.flicker*0.5 != Math.round(this.flicker*0.5)){
					ctx.globalAlpha = Alpha*0.5;
					ctx.fillStyle = this.color2;
					ctx.fillRect(this.x - this.width * 0.5,
					this.y - this.height * 0.5,
					this.width, this.height);
					ctx.globalAlpha = Alpha;
					this.flicker-=1;
				}
				else{
					ctx.globalAlpha = Alpha*0.5;
					ctx.fillStyle = this.color1;
					ctx.fillRect(this.x - this.width * 0.5,
					this.y - this.height * 0.5,
					this.width, this.height);
					ctx.globalAlpha = Alpha;
					this.flicker-=1;
				}	
			}
			else{
			ctx.globalAlpha = Alpha;
			ctx.globalAlpha = Alpha*0.5;
			ctx.fillStyle = this.color;
			ctx.fillRect(this.x - this.width * 0.5,
			this.y - this.height * 0.5,
			this.width, this.height);
			ctx.globalAlpha = Alpha;
			}
		}
	},
	
	move: function(){
		if(this.state == 1){		
			if(this.frame <= 10){
				this.color = this.color2;
				this.width = this.width + 8*this.frame;
				this.height = this.height + 8*this.frame;
				this.frame++;
				for (E in AllEnemies){
					if(collision(AllEnemies[E].dir, AllEnemies[E], this) || contained(this, AllEnemies[E])){
						AllEnemies[E].speed = AllEnemies[E].speed2;
					}
				}
			}
			else{
				this.frame++;
				for (E in AllEnemies){
					if(collision(AllEnemies[E].dir, AllEnemies[E], this) || contained(this, AllEnemies[E])){
						AllEnemies[E].speed = AllEnemies[E].speed2;
					}
				}
			}
			if(this.frame == 90){
				for (E in AllEnemies){
					AllEnemies[E].speed = AllEnemies[E].speed2 * 2;
				}
				this.onScreen = 0;
				this.state = 0;
				this.frame = 0;
			}
		}
		else if(this.onScreen == 1 && this.state == 0){
			if(obsCollision(obstacle1, this, this.dir) || (obsCollision(obstacle2, this, this.dir)) || (obsCollision(obstacle3, this, this.dir)
				|| this.x <= 32 || this.x >= 768 || this.y <= 32 || this.y >= 544)){
				this.state = 1;
				Fwave.currentTime=0;
				Fwave.play();
			}
			for(O in obstacle1){
				if(collision(this.dir, this, obstacle1[O])){
					obsHit(obstacle1[O]);
				}
			}
			for(O in obstacle2){
				if(collision(this.dir, this, obstacle2[O])){
					obsHit(obstacle2[O]);
				}
			}
			for(O in obstacle3){
				if(collision(this.dir, this, obstacle3[O])){
					obsHit(obstacle3[O]);
				}
			}
			for (E in AllEnemies){
				if(collision(AllEnemies[E].dir, AllEnemies[E], this)){
					onHit(AllEnemies[E]);
				}
			}
			if (this.dir == "W"){
				this.y -= this.speed;
			}
			if (this.dir == "A"){
				this.x -= this.speed;
			}
			if (this.dir == "S"){
				this.y += this.speed;
			}
			if (this.dir == "D"){
				this.x += this.speed;
			}
			if (this.dir == "WA"){
				this.x -= this.speed;
				this.y -= this.speed;
			}
			if (this.dir == "AS"){
				this.x -= this.speed;
				this.y += this.speed;
			}
			if (this.dir == "SD"){
				this.x += this.speed;
				this.y += this.speed;
			}
			if (this.dir == "WD"){
				this.x += this.speed;
				this.y -= this.speed;
			}
		}
	},
		
	// Spawn
	shoot: function(){
		Frozen.currentTime=0;
		Frozen.play();
		this.height = 32;
		this.width = 32;
		this.x = player.x;
		this.y = player.y;
		this.dir = player.dir;
		this.frame = 0;
		this.onScreen = 1;
		this.color = this.color1;
		this.state = 0;
	}
	
};
// Fire+Heal: Heals user by 1 and casts Fire
var fireheal = {
	cd: 0,
	cdTop: 450,
	tick: function(){
		if(this.cd > 0){
			this.cd-=1;
		}
	},
	shoot: function(){
		if(this.cd == 0){
			this.cd = this.cdTop;
			var currentEarthcd = earth.cd;
			var currentFirecd = fire.cd;
			fire.cd = 0;
			earth.cd = 0;
			fire.shoot();
			earth.shoot();
			fire.cd = currentFirecd;
			earth.cd = currentEarthcd;
			fire.cast = 20;
		}
	}	
};

// Ice+Heal: Heals user by 1 and casts Ice
var iceheal = {
	cd: 0,
	cdTop: 450,
	tick: function(){
		if(this.cd > 0){
			this.cd-=1;
		}
	},
	shoot: function(){
		if(this.cd == 0){
			var currentEarthcd = earth.cd;
			var currentIcecd = ice.cd;
			this.cd = this.cdTop;
			ice.cd = 0;
			earth.cd = 0;
			ice.shoot();
			earth.shoot();
			ice.cd = currentIcecd;
			earth.cd = currentEarthcd;
			ice.cast = 20;
		}
	}	
};

// Lightning+Heal: Heals user by 1 and casts Lightning
var lightningheal = {
	cd: 0,
	cdTop: 600,
	tick: function(){
		if(this.cd > 0){
			this.cd-=1;
		}
	},
	shoot: function(){
		if(this.cd == 0){
			var currentEarthcd = earth.cd;
			var currentLightningcd = lightning.cd;
			this.cd = this.cdTop;
			lightning.cd = 0;
			earth.cd = 0;
			lightning.shoot();
			earth.shoot();
			lightning.cd = currentLightningcd;
			earth.cd = currentEarthcd;
			lightning.cast = 20;
		}
	}	
};

// Ragnarok: Creates a cross of lightning for x seconds. Any enemy that hits it explodes
var firelightning = {
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
	cdTop: 900,
	onScreen: 0,
	cast: 0,
	used: 0,
	framecd: 0,
	draw: function(){
		if(this.onScreen == 1){
			if(this.used == 0){
				Thunder.currentTime=0;
				Thunder.play();
				this.used = 1;
			}
			if(this.hstate == 0){
				ctx.drawImage(hlightning1, this.hx - this.hwidth*0.5, player.y - this.hheight*0.5);
				this.hstate+=1;
			}
			else if(this.hstate == 1){
				ctx.drawImage(hlightning2, this.hx - this.hwidth*0.5, player.y - this.hheight*0.5);
				this.hstate+=1;
			}
			else if(this.hstate == 2){
				ctx.drawImage(hlightning3, this.hx - this.hwidth*0.5, player.y - this.hheight*0.5);
				this.hstate=0;
			}
			if(this.vstate == 0){
					ctx.drawImage(vlightning1, player.x-this.vwidth*0.5, this.vy - this.vheight*0.5);
					this.vstate+=1;
			}
			else if(this.vstate == 1){
					ctx.drawImage(vlightning2, player.x-this.vwidth*0.5, this.vy - this.vheight*0.5);
					this.vstate+=1;
			}
			else if(this.vstate == 2){
					ctx.drawImage(vlightning3, player.x-this.vwidth*0.5, this.vy - this.vheight*0.5);
					this.vstate=0;
			}
		}
	},
	effect: function(){
		if(this.cd > 0){
			this.cd-=1;
			this.vx = player.x;
		}
		if(this.timeLeft > 0 && this.cast == 0 && deathTimer == -1){
			this.onScreen = 1;
		}
		if(this.cast > 0){
			this.cast-=1;
		}
		if(this.framecd > 0){
			this.framecd-=1;
		}
		else if(this.onScreen == 1){
			if(this.timeLeft <= 0){
				this.onScreen = 0;
				this.vx = -2000;
				this.hy = -2000
			}
			else{
				this.timeLeft-=1;
			}
			for (E in AllEnemies){
				if(this.framecd <= 0 && AllEnemies[E].x >= player.x && AllEnemies[E].x <= player.x + this.vwidth && AllEnemies[E].onScreen == 1
					|| (player.x >= AllEnemies[E].x - AllEnemies[E].width*0.5 && player.x <= AllEnemies[E].x + AllEnemies[E].width*0.5)){
					if(firelightningf1.x == -1000){
						firelightningf1.x = AllEnemies[E].x;
						firelightningf1.y = AllEnemies[E].y;
						firelightningf1.shoot();
						this.framecd = 10;
					}
					else if(firelightningf2.x == -1000){
						firelightningf2.x = AllEnemies[E].x;
						firelightningf2.y = AllEnemies[E].y;
						firelightningf2.shoot();
						this.framecd = 10;
					}
					else if(firelightningf3.x == -1000){
						firelightningf3.x = AllEnemies[E].x;
						firelightningf3.y = AllEnemies[E].y;
						firelightningf3.shoot();
						this.framecd = 10;
					}
					else if(firelightningf4.x == -1000){
						firelightningf4.x = AllEnemies[E].x;
						firelightningf4.y = AllEnemies[E].y;
						firelightningf4.shoot();
						this.framecd = 10;
					}
				}
			}			
			for (E in AllEnemies){
				if(this.framecd <= 0 && AllEnemies[E].y <= player.y + this.hheight && AllEnemies[E].y >= player.y && AllEnemies[E].onScreen == 1
					|| (player.y >= AllEnemies[E].y - AllEnemies[E].height*0.5 && player.y <= AllEnemies[E].y + AllEnemies[E].height*0.5)){
					if(firelightningf1.x == -1000){
						firelightningf1.x = AllEnemies[E].x;
						firelightningf1.y = AllEnemies[E].y;
						firelightningf1.shoot();
						this.framecd = 10;
					}
					else if(firelightningf2.x == -1000){
						firelightningf2.x = AllEnemies[E].x;
						firelightningf2.y = AllEnemies[E].y;
						firelightningf2.shoot();
						this.framecd = 10;
					}
					else if(firelightningf3.x == -1000){
						firelightningf3.x = AllEnemies[E].x;
						firelightningf3.y = AllEnemies[E].y;
						firelightningf3.shoot();
						this.framecd = 10;
					}
					else if(firelightningf4.x == -1000){
						firelightningf4.x = AllEnemies[E].x;
						firelightningf4.y = AllEnemies[E].y;
						firelightningf4.shoot();
						this.framecd = 10;
					}
				}
			}			
		}
	},
	// Spawn
	shoot: function(){
	if(this.cd == 0){
		this.hx = 400;
		this.vx = player.x;
		this.hy = player.y;
		this.cd = this.cdTop;
		this.timeLeft = 150;
		this.cast = 20;
		cd = 20;
		castingBar.onScreen = 1;
		castingBar.cast = 20;
		castingBar.castmax = 20;
		this.used = 0;
	}
	}
	
};
var firelightningf1 = {
	color: "#FF6600",
	x: -1000,
	y: -200,
	timeLeft: 0,
	width: 32,
	height: 32,
	frame: 0,
	onScreen: 0,
	
	draw: function(){
		if(this.onScreen == 1){
			ctx.globalAlpha = Alpha*0.5;
			if(this.frame*0.5 != Math.round(this.frame*0.5)){
				ctx.fillStyle = "#CC0000";
			}
			else{
				ctx.fillStyle = this.color;
			}
			ctx.fillRect(this.x - this.width * 0.5,
			this.y - this.height * 0.5,
			this.width, this.height);
			ctx.globalAlpha = Alpha;
		}
	},
	
	move: function(){
		if(this.frame == 20){
			this.x = -1000;
			this.y = -200;
			this.width = 32;
			this.height = 32;
			this.onScreen = 0;
		}
		else{
			this.width = 32 + (16*this.frame);
			this.height = 32 + (16*this.frame);
			this.frame++;
			for (E in AllEnemies){
				if(contained(AllEnemies[E], this)){
					onHit(AllEnemies[E]);
				}
			}
			for (O in obstacle1){
				if(contained(obstacle1[O], this)){
					obsHit(obstacle1[O]);
				}
			}
			for (O in obstacle2){
				if(contained(obstacle2[O], this)){
					obsHit(obstacle2[O]);
				}
			}
			for (O in obstacle3){
				if(contained(obstacle3[O], this)){
					obsHit(obstacle3[O]);
				}
			}
		}
	},
		
	// Spawn
	shoot: function(){
		Explosion.currentTime=0;
		Explosion.play();
		this.height = 32;
		this.width = 32;
		this.frame = 0;
		this.onScreen = 1;
	}
	
};
var firelightningf2 = {
	color: "#FF6600",
	x: -1000,
	y: -200,
	timeLeft: 0,
	width: 32,
	height: 32,
	frame: 0,
	onScreen: 0,
	
	draw: function(){
		if(this.onScreen == 1){
			ctx.globalAlpha = Alpha*0.5;
			if(this.frame*0.5 != Math.round(this.frame*0.5)){
				ctx.fillStyle = "#CC0000";
			}
			else{
				ctx.fillStyle = this.color;
			}
			ctx.fillRect(this.x - this.width * 0.5,
			this.y - this.height * 0.5,
			this.width, this.height);
			ctx.globalAlpha = Alpha;
		}
	},
	
	move: function(){
		if(this.frame == 20){
			this.x = -1000;
			this.y = -200;
			this.width = 32;
			this.height = 32;
			this.onScreen = 0;
		}
		else{
			this.width = 32 + (16*this.frame);
			this.height = 32 + (16*this.frame);
			this.frame++;
			for (E in AllEnemies){
				if(contained(AllEnemies[E], this)){
					onHit(AllEnemies[E]);
				}
			}
			for (O in obstacle1){
				if(contained(obstacle1[O], this)){
					obsHit(obstacle1[O]);
				}
			}
			for (O in obstacle2){
				if(contained(obstacle2[O], this)){
					obsHit(obstacle2[O]);
				}
			}
			for (O in obstacle3){
				if(contained(obstacle3[O], this)){
					obsHit(obstacle3[O]);
				}
			}
		}
	},
		
	// Spawn
	shoot: function(){
		Explosion.currentTime=0;
		Explosion.play();
		this.height = 32;
		this.width = 32;
		this.frame = 0;
		this.onScreen = 1;
	}
	
	
};
var firelightningf3 = {
	color: "#FF6600",
	x: -1000,
	y: -200,
	timeLeft: 0,
	width: 32,
	height: 32,
	frame: 0,
	onScreen: 0,
	
	draw: function(){
		if(this.onScreen == 1){
			ctx.globalAlpha = Alpha*0.5;
			if(this.frame*0.5 != Math.round(this.frame*0.5)){
				ctx.fillStyle = "#CC0000";
			}
			else{
				ctx.fillStyle = this.color;
			}
			ctx.fillRect(this.x - this.width * 0.5,
			this.y - this.height * 0.5,
			this.width, this.height);
			ctx.globalAlpha = Alpha;
		}
	},
	
	move: function(){
		if(this.frame == 20){
			this.x = -1000;
			this.y = -200;
			this.width = 32;
			this.height = 32;
			this.onScreen = 0;
		}
		else{
			this.width = 32 + (16*this.frame);
			this.height = 32 + (16*this.frame);
			this.frame++;
			for (E in AllEnemies){
				if(contained(AllEnemies[E], this)){
					onHit(AllEnemies[E]);
				}
			}
			for (O in obstacle1){
				if(contained(obstacle1[O], this)){
					obsHit(obstacle1[O]);
				}
			}
			for (O in obstacle2){
				if(contained(obstacle2[O], this)){
					obsHit(obstacle2[O]);
				}
			}
			for (O in obstacle3){
				if(contained(obstacle3[O], this)){
					obsHit(obstacle3[O]);
				}
			}
		}
	},
		
	// Spawn
	shoot: function(){
		Explosion.currentTime=0;
		Explosion.play();
		this.height = 32;
		this.width = 32;
		this.frame = 0;
		this.onScreen = 1;
	}
	
};
var firelightningf4 = {
	color: "#FF6600",
	x: -1000,
	y: -200,
	timeLeft: 0,
	width: 32,
	height: 32,
	frame: 0,
	onScreen: 0,
	
	draw: function(){
		if(this.onScreen == 1){
			ctx.globalAlpha = Alpha*0.5;
			if(this.frame*0.5 != Math.round(this.frame*0.5)){
				ctx.fillStyle = "#CC0000";
			}
			else{
				ctx.fillStyle = this.color;
			}
			ctx.fillRect(this.x - this.width * 0.5,
			this.y - this.height * 0.5,
			this.width, this.height);
			ctx.globalAlpha = Alpha;
		}
	},
	
	move: function(){
		if(this.frame == 20){
			this.x = -1000;
			this.y = -200;
			this.width = 32;
			this.height = 32;
			this.onScreen = 0;
		}
		else{
			this.width = 32 + (16*this.frame);
			this.height = 32 + (16*this.frame);
			this.frame++;
			for (E in AllEnemies){
				if(contained(AllEnemies[E], this)){
					onHit(AllEnemies[E]);
				}
			}
			for (O in obstacle1){
				if(contained(obstacle1[O], this)){
					obsHit(obstacle1[O]);
				}
			}
			for (O in obstacle2){
				if(contained(obstacle2[O], this)){
					obsHit(obstacle2[O]);
				}
			}
			for (O in obstacle3){
				if(contained(obstacle3[O], this)){
					obsHit(obstacle3[O]);
				}
			}
		}
	},
	// Spawn
	shoot: function(){
		Explosion.currentTime=0;
		Explosion.play();
		this.height = 32;
		this.width = 32;
		this.frame = 0;
		this.onScreen = 1;
	}
};
var fireLightnings = {1: firelightningf1, 2: firelightningf2, 3: firelightningf3, 4: firelightningf4};
// Frozen Web: Creates a web of ice that stops all enemies in its tracks
var vertil = {
	color: "#00CCFF",
	timeLeft: 0,
	width: 16,
	height: 16,
	x: -2000,
	y: -2000,
	frame: 0,
	onScreen: 0,
	split: 0
};
var vertil2 = {
	color: "#00CCFF",
	timeLeft: 0,
	width: 16,
	height: 16,
	x: -2000,
	y: -2000,
	frame: 0,
	onScreen: 0,
	split: 0
};
var vertil3 = {
	color: "#00CCFF",
	timeLeft: 0,
	width: 16,
	height: 16,
	x: -2000,
	y: -2000,
	frame: 0,
	onScreen: 0,
	split: 0
};
var vertil4 = {
	color: "#00CCFF",
	timeLeft: 0,
	width: 16,
	height: 16,
	x: -2000,
	y: -2000,
	frame: 0,
	onScreen: 0,
	split: 0
};
var vertil5 = {
	color: "#00CCFF",
	timeLeft: 0,
	width: 16,
	height: 16,
	x: -2000,
	y: -2000,
	frame: 0,
	onScreen: 0,
	split: 0	
};
var horil = {
	color: "#00CCFF",
	timeLeft: 0,
	width: 16,
	height: 16,
	x: -2000,
	y: -2000,
	frame: 0,
	onScreen: 0,
	split: 0
};
var horil2 = {
	color: "#00CCFF",
	timeLeft: 0,
	width: 16,
	height: 16,
	x: -2000,
	y: -2000,
	frame: 0,
	onScreen: 0,
	split: 0
};
var horil3 = {
	color: "#00CCFF",
	timeLeft: 0,
	width: 16,
	height: 16,
	x: -2000,
	y: -2000,
	frame: 0,
	onScreen: 0,
	split: 0
};
var horil4 = {
	color: "#00CCFF",
	timeLeft: 0,
	width: 16,
	height: 16,
	x: -2000,
	y: -2000,
	frame: 0,
	onScreen: 0,
	split: 0
};
var horil5 = {
	color: "#00CCFF",
	timeLeft: 0,
	width: 16,
	height: 16,
	x: -2000,
	y: -2000,
	frame: 0,
	onScreen: 0,
	split: 0
};
//Draw/increment vertical bars
function vertilDraw(V){
	if(V.onScreen == 1){
		ctx.globalAlpha = Alpha*0.25;
		ctx.fillStyle = V.color;
		ctx.fillRect(V.x - V.width * 0.5, V.y - V.height * 0.5,	V.width, V.height);
		ctx.globalAlpha = Alpha;
		V.height = V.height + (32*V.frame);
		V.frame++;
		for(E in AllEnemies){
			if(collision(AllEnemies[E].dir, AllEnemies[E], V) && AllEnemies[E].type != "Meteor" && AllEnemies[E].type != -2 && AllEnemies[E].type != -3 && AllEnemies[E].type != -4 && AllEnemies[E].type != -5){
				AllEnemies[E].speed = 0;
				AllEnemies[E].iced = true;
			}
		}
	}
}
//Draw/increment horizontal bars
function horilDraw(H){
	if(H.onScreen == 1){
		ctx.globalAlpha = Alpha*0.25;
		ctx.fillStyle = H.color;
		ctx.fillRect(H.x - H.width * 0.5, H.y - H.height * 0.5,	H.width, H.height);
		ctx.globalAlpha = Alpha;
		H.width = H.width + (32*H.frame);
		H.frame++;
		for(E in AllEnemies){
			if(collision(AllEnemies[E].dir, AllEnemies[E], H) && AllEnemies[E].type != "Meteor" && AllEnemies[E].type != -2 && AllEnemies[E].type != -3 && AllEnemies[E].type != -4 && AllEnemies[E].type != -5){
				AllEnemies[E].speed = 0;
				AllEnemies[E].iced = true;
			}
		}
	}
}
var webhoril = {1: horil5, 2: horil4, 3: horil3, 4: horil2, 5: horil};
var webvertil = {1: vertil5, 2: vertil4, 3: vertil3, 4: vertil2, 5: vertil};
var icelightning = {
	color: "#00CCFF",
	cd: 0,
	cdTop: 900,
	timeLeft: 0,
	end: false,
	AllEnemiesil: AllEnemies,
	tick: function(){
		if(this.cd>0){
			this.cd-=1;
		}
		if(this.timeLeft > 0){
			this.timeLeft-=1;
			if(this.timeLeft == 0){
				this.end = true;
			}
		}
		else if(this.timeLeft<=0 && this.end == true){
			for(H in webhoril){
				webhoril[H].split = 0;
				webhoril[H].frame = 0;
				webhoril[H].onScreen = 0;
				webhoril[H].x = -2000;
				webhoril[H].y = -2000;
				webhoril[H].width = 16;
				webhoril[H].height = 16;
			}
			for(V in webvertil){
				webvertil[V].split = 0;
				webvertil[V].frame = 0;
				webvertil[V].onScreen = 0;
				webvertil[V].x = -2000;
				webvertil[V].y = -2000;
				webvertil[V].width = 16;
				webvertil[V].height = 16;
			}
			this.end = false;
			for (E in AllEnemies){
				if(AllEnemies[E].iced){
					AllEnemies[E].speed = AllEnemies[E].speed2*2;
				}
				AllEnemies[E].iced = false;
			}
			this.AllEnemiesil = AllEnemies;
		}
	},
	// Slow all enemies in radius
	effect: function(){
		if(this.timeLeft>0){
			for(A in webvertil){
				for(E in this.AllEnemiesil){
					if(this.AllEnemiesil[E].type != "Meteor"  && this.AllEnemiesil[E].type != -2 && this.AllEnemiesil[E].type != -3 && this.AllEnemiesil[E].type != -4 && this.AllEnemiesil[E].type != -5){
						if(collision(this.AllEnemiesil[E].dir, this.AllEnemiesil[E], webvertil[A])){
							//Spawn more webs
							if(horil2.onScreen == 0 && horil2.split == 0){
								horil2.x = this.AllEnemiesil[E].x;
								horil2.y = this.AllEnemiesil[E].y;
								horil2.frame = 0;
								horil2.onScreen = 1;
								horil2.split = 1;
								delete this.AllEnemiesil[E];
							}
							else if(horil3.onScreen == 0 && horil3.split == 0){
								horil3.x = this.AllEnemiesil[E].x;
								horil3.y = this.AllEnemiesil[E].y;
								horil3.frame = 0;
								horil3.onScreen = 1;
								horil3.split = 1;
								delete this.AllEnemiesil[E];
							}
							else if(horil4.onScreen == 0 && horil4.split == 0){
								horil4.x = this.AllEnemiesil[E].x;
								horil4.y = this.AllEnemiesil[E].y;
								horil4.frame = 0;
								horil4.onScreen = 1;
								horil4.split = 1;
								delete this.AllEnemiesil[E];
							}
							else if(horil5.onScreen == 0 && horil5.split == 0){
								horil5.x = this.AllEnemiesil[E].x;
								horil5.y = this.AllEnemiesil[E].y;
								horil5.frame = 0;
								horil5.onScreen = 1;
								horil5.split = 1;
								delete this.AllEnemiesil[E];
							}
						}
					}
				}
			}
			for(A in webhoril){
				for(E in this.AllEnemiesil){
					if(this.AllEnemiesil[E].type != "Meteor"  && this.AllEnemiesil[E].type != -2 && this.AllEnemiesil[E].type != -3 && this.AllEnemiesil[E].type != -4 && this.AllEnemiesil[E].type != -5){
						if(collision(this.AllEnemiesil[E].dir, this.AllEnemiesil[E], webhoril[A])){
							//Spawn more webs
							if(vertil2.onScreen == 0 && vertil2.split == 0){
								vertil2.x = this.AllEnemiesil[E].x;
								vertil2.y = this.AllEnemiesil[E].y;
								vertil2.frame = 0;
								vertil2.onScreen = 1;
								vertil2.split = 1;
								delete this.AllEnemiesil[E];
							}
							else if(vertil3.onScreen == 0 && vertil3.split == 0){
								vertil3.x = this.AllEnemiesil[E].x;
								vertil3.y = this.AllEnemiesil[E].y;
								vertil3.frame = 0;
								vertil3.onScreen = 1;
								vertil3.split = 1;
								delete this.AllEnemiesil[E];
							}
							else if(vertil4.onScreen == 0 && vertil4.split == 0){
								vertil4.x = this.AllEnemiesil[E].x;
								vertil4.y = this.AllEnemiesil[E].y;
								vertil4.frame = 0;
								vertil4.onScreen = 1;
								vertil4.split = 1;
								delete this.AllEnemiesil[E];
							}
							else if(vertil5.onScreen == 0 && vertil5.split == 0){
								vertil5.x = this.AllEnemiesil[E].x;
								vertil5.y = this.AllEnemiesil[E].y;
								vertil5.frame = 0;
								vertil5.onScreen = 1;
								vertil5.split = 1;
								delete this.AllEnemiesil[E];
							}
						}
					}
				}
			}
		}
	},
		
	// Spawn
	shoot: function(){
		if(this.cd == 0){
			Fwave.currentTime=0;
			Fwave.play();
			vertil.x = player.x
			vertil.y = player.y
			vertil.frame = 0;
			vertil.onScreen = 1;
			horil.x = player.x
			horil.y = player.y
			horil.frame = 0;
			horil.onScreen = 1;
			this.cd = this.cdTop;
			this.timeLeft = 300;
			this.AllEnemiesil = AllEnemies;
		}
	}
};

// Fire Wave: Damages all enemies in front of the player
var airfire = {
	color1: "#FF6600",
	color2: "#990000",
	x: -100,
	y: -200,
	ox: -100,
	oy: -200,
	width: 32,
	height: 8,
	frame: 0,
	cd: 0,
	cdTop: 60,
	speed: 16,
	onScreen: 0,
	
	draw: function(){
		if(this.onScreen == 1){
			if(this.frame*0.5 == Math.round(this.frame*0.5)){
				ctx.fillStyle = this.color1;
			}
			else{
				ctx.fillStyle = this.color2;
			}
			ctx.fillRect(this.ox - player.width * 0.5,
				this.oy - player.height * 0.5,
				player.width, player.height);
			if(this.dir == "W" || this.dir == "S"){
				ctx.fillRect(this.x - this.width * 0.5,
				this.y - this.height * 0.5,
				this.width, this.height);
			}
			else if(this.dir == "A" || this.dir == "D"){
				ctx.fillRect(this.x - this.width * 0.5,
				this.y - this.height * 0.5,
				this.width, this.height);
			}
		}
	},
	effect: function(){
		if(this.cd > 0){
			this.cd-=1;
		}
		if(this.frame == 5){
			airfire12.x = this.ox;
			airfire12.y = this.oy;
			airfire12.shoot();
		}
		if(this.frame == 10){
			airfire13.x = this.ox;
			airfire13.y = this.oy;
			airfire13.shoot();
		}
		if(this.frame == 30){
			this.x = -100;
			this.y = -200;
			this.width = 32;
			this.onScreen = 0;
			this.height = 8;
			this.frame = 0;
		}
		else if(this.onScreen ==1){
			if(this.dir == "S" || this.dir == "W"){
				this.width = 32 + (4*this.frame);
			}
			else if(this.dir == "A" || this.dir == "D"){
				this.height = 32 + (4*this.frame);
			}
			this.frame++;
			if (this.dir == "W"){
				this.y -= this.speed;
			}
			else if (this.dir == "A"){
				this.x -= this.speed;
			}
			else if (this.dir == "S"){
				this.y += this.speed;
			}
			else if (this.dir == "D"){
				this.x += this.speed;
			}
			for (E in AllEnemies){
				if(collision(AllEnemies[E].dir, AllEnemies[E], this)){
					onHit(AllEnemies[E]);
				}
			}
			for (O in obstacle1){
				if(collision(this.dir, this, obstacle1[O])){
					obsHit(obstacle1[O]);
				}
			}
			for (O in obstacle2){
				if(collision(this.dir, this, obstacle2[O])){
					obsHit(obstacle2[O]);
				}
			}
			for (O in obstacle3){
				if(collision(this.dir, this, obstacle3[O])){
					obsHit(obstacle3[O]);
				}
			}
		}
	},
	// Spawn
	shoot: function(){
	if(this.cd == 0){
		Fwave.currentTime=0;
		Fwave.play();
		this.x = player.x;
		this.y = player.y;
		this.ox = player.x;
		this.oy = player.y;
		this.dir = player.dir;
		this.cd = this.cdTop;
		this.frame = 0;
		this.onScreen = 1;
		if(this.dir == "S" || this.dir == "W"){
			this.width = 32;
			this.height = 8;
		}
		else if(this.dir == "A" || this.dir == "D"){
			this.width = 8;
			this.height = 32;
		}
	}
	}
};
var airfire12 = {
	color1: "#FF6600",
	color2: "#990000",
	x: -100,
	y: -200,
	width: 32,
	height: 8,
	frame: 0,
	speed: 16,
	onScreen: 0,
	
	draw: function(){
		if(this.onScreen == 1){
			if(this.frame*0.5 == Math.round(this.frame*0.5)){
				ctx.fillStyle = this.color1;
			}
			else{
				ctx.fillStyle = this.color2;
			}
			if(this.dir == "W" || this.dir == "S"){
				ctx.fillRect(this.x - this.width * 0.5,
				this.y - this.height * 0.5,
				this.width, this.height);
			}
			else if(this.dir == "A" || this.dir == "D"){
				ctx.fillRect(this.x - this.width * 0.5,
				this.y - this.height * 0.5,
				this.width, this.height);
			}
		}
	},
	effect: function(){
		if(this.frame == 30){
			this.x = -100;
			this.y = -200;
			this.width = 32;
			this.onScreen = 0;
			this.height = 8;
			this.frame = 0;
		}
		else if(this.onScreen ==1){
			if(this.dir == "S" || this.dir == "W"){
				this.width = 32 + (4*this.frame);
			}
			else if(this.dir == "A" || this.dir == "D"){
				this.height = 32 + (4*this.frame);
			}
			this.frame++;
			if (this.dir == "W"){
				this.y -= this.speed;
			}
			else if (this.dir == "A"){
				this.x -= this.speed;
			}
			else if (this.dir == "S"){
				this.y += this.speed;
			}
			else if (this.dir == "D"){
				this.x += this.speed;
			}
			for (E in AllEnemies){
				if(collision(AllEnemies[E].dir, AllEnemies[E], this)){
					onHit(AllEnemies[E]);
				}
			}
			for (O in obstacle1){
				if(collision(this.dir, this, obstacle1[O])){
					obsHit(obstacle1[O]);
				}
			}
			for (O in obstacle2){
				if(collision(this.dir, this, obstacle2[O])){
					obsHit(obstacle2[O]);
				}
			}
			for (O in obstacle3){
				if(collision(this.dir, this, obstacle3[O])){
					obsHit(obstacle3[O]);
				}
			}
		}
	},
	// Spawn
	shoot: function(){
		this.dir = airfire.dir;
		this.frame = 0;
		this.onScreen = 1;
		if(this.dir == "S" || this.dir == "W"){
			this.width = 32;
			this.height = 8;
		}
		else if(this.dir == "A" || this.dir == "D"){
			this.width = 8;
			this.height = 32;
		}
	}
};

var airfire13 = {
	color1: "#FF6600",
	color2: "#990000",
	x: -100,
	y: -200,
	width: 32,
	height: 8,
	frame: 0,
	speed: 16,
	onScreen: 0,
	
	draw: function(){
		if(this.onScreen == 1){
			if(this.frame*0.5 == Math.round(this.frame*0.5)){
				ctx.fillStyle = this.color1;
			}
			else{
				ctx.fillStyle = this.color2;
			}
			if(this.dir == "W" || this.dir == "S"){
				ctx.fillRect(this.x - this.width * 0.5,
				this.y - this.height * 0.5,
				this.width, this.height);
			}
			else if(this.dir == "A" || this.dir == "D"){
				ctx.fillRect(this.x - this.width * 0.5,
				this.y - this.height * 0.5,
				this.width, this.height);
			}
		}
	},
	effect: function(){
		if(this.frame == 30){
			this.x = -100;
			this.y = -200;
			this.width = 32;
			this.onScreen = 0;
			this.height = 8;
			this.frame = 0;
		}
		else if(this.onScreen ==1){
			if(this.dir == "S" || this.dir == "W"){
				this.width = 32 + (4*this.frame);
			}
			else if(this.dir == "A" || this.dir == "D"){
				this.height = 32 + (4*this.frame);
			}
			this.frame++;
			if (this.dir == "W"){
				this.y -= this.speed;
			}
			else if (this.dir == "A"){
				this.x -= this.speed;
			}
			else if (this.dir == "S"){
				this.y += this.speed;
			}
			else if (this.dir == "D"){
				this.x += this.speed;
			}
			for (E in AllEnemies){
				if(collision(AllEnemies[E].dir, AllEnemies[E], this)){
					onHit(AllEnemies[E]);
				}
			}
			for (O in obstacle1){
				if(collision(this.dir, this, obstacle1[O])){
					obsHit(obstacle1[O]);
				}
			}
			for (O in obstacle2){
				if(collision(this.dir, this, obstacle2[O])){
					obsHit(obstacle2[O]);
				}
			}
			for (O in obstacle3){
				if(collision(this.dir, this, obstacle3[O])){
					obsHit(obstacle3[O]);
				}
			}
		}
	},
	// Spawn
	shoot: function(){
		this.dir = airfire.dir;
		this.frame = 0;
		this.onScreen = 1;
		if(this.dir == "S" || this.dir == "W"){
			this.width = 32;
			this.height = 8;
		}
		else if(this.dir == "A" || this.dir == "D"){
			this.width = 8;
			this.height = 32;
		}
	}
};

// Maelstrom: Slows all enemies on screen and creates a storm around the player
var airice = {
	color1: "#3300CC",
	color2: "#33CCCC",
	x: -100,
	y: -200,
	timeLeft: 0,
	width: 64,
	height: 64,
	cd: 0,
	cdTop: 450,
	onScreen: 0,
	cast: 0,
	used: 0,
	
	draw: function(){
		if(this.onScreen == 1 && this.cast == 0 && deathTimer == -1){
			if(this.used == 0){
				Fwave.currentTime=0;
				Fwave.play();
				Frozen.currentTime=0;
				Frozen.play();
				this.used = 1;
			}
			ctx.globalAlpha = Alpha * 2;
			if(this.timeLeft*0.5 != Math.round(this.timeLeft*0.5)){
				ctx.fillStyle = this.color1;
			}
			else{
				ctx.fillStyle = this.color2;
			}
			ctx.fillRect(this.x - this.width * 0.5,
			this.y - this.height * 0.5,
			this.width, this.height);
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
		if(this.timeLeft == 0 && this.onScreen == 1 && deathTimer == -1){
			this.onScreen = 0;
			ice.cd = 0;
			ctx.globalAlpha = Alpha;
		}
		else if(this.timeLeft<=30 && this.cast == 0 && deathTimer == -1){
			this.height+=4;
			this.width+=4;
		}
		else if(this.timeLeft<=60 && this.cast == 0 && deathTimer == -1){
			this.height-=4;
			this.width-=4;
		}
		else if(this.timeLeft<=90 && this.cast == 0 && deathTimer == -1){
			this.height+=4;
			this.width+=4;
		}
		else if(this.timeLeft <= 120 && this.cast == 0 && deathTimer == -1){
			this.height-=4;
			this.width-=4;
		}
		else if(this.cast == 0 && deathTimer == -1){
			this.height+=4;
			this.width+=4;
		}
		if(this.timeLeft != 0 && this.cast == 0 && deathTimer == -1){
			this.timeLeft-=1;
			this.x = player.x;
			this.y = player.y;
			for (E in AllEnemies){
				if(collision(AllEnemies[E].dir, AllEnemies[E], this)){
					onHit(AllEnemies[E]);
				}
			}
			for (O in obstacle1){
				if(contained(obstacle1[O], this)){
					obsHit(obstacle1[O]);
				}
			}
			for (O in obstacle2){
				if(contained(obstacle2[O], this)){
					obsHit(obstacle2[O]);
				}
			}
			for (O in obstacle3){
				if(contained(obstacle3[O], this)){
					obsHit(obstacle3[O]);
				}
			}
		}	
	},
		
	// Spawn
	shoot: function(){
	if(this.cd == 0){
		this.x = player.x;
		this.y = player.y;
		this.cd = this.cdTop;
		this.width = 64;
		this.height = 64;
		this.onScreen = 1;
		this.timeLeft = 150;
		castingBar.onScreen = 1;
		castingBar.cast = 30;
		castingBar.castmax = 30;
		this.cast = 30;
		ice.cd = 0;
		ice.cast = 30;
		cd = 30;
		ice.shoot();
		this.used = 0;
	}
	}
};
// Dash+Heal: Heals user by 1 and casts Dash
var airearth = {
	cd: 0,
	cdTop: 300,
	tick: function(){
		if(this.cd > 0){
			this.cd-=1;
		}
	},
	shoot: function(){
		if(this.cd == 0){
			var currentEarthcd = earth.cd;
			var currentAircd = air.cd;
			this.cd = this.cdTop;
			air.cd = 0;
			earth.cd = 0;
			air.shoot();
			earth.shoot();
			air.cd = currentAircd;
			earth.cd = currentEarthcd;
			air.cast = 20;
		}
	}	
};
// Thunderstorm: Creates a Thunderstorm on the map
var airlightning = {
	timeLeft: 0,
	vwidth: 32,
	vheight: 800,
	hwidth: 800,
	hheight: 32,
	hx: 400,
	hy: -2000,
	vx: -2000,
	vy: 288,
	cd: 0,
	cdTop: 120,
	onScreen: 0,
	LonScreen: 0,
	frame: 0,
	
	draw: function(){
		if(this.LonScreen == 1){
			this.LonScreen = 0;
			ctx.drawImage(hlightning1, this.hx - this.hwidth*0.5, this.hy - this.hheight*0.5);
			ctx.drawImage(vlightning1, this.vx-this.vwidth*0.5, this.vy - this.vheight*0.5);
		}
	},
	effect: function(){
		this.frame++;
		if(this.cd > 0){
			this.cd-=1;
		}
		if(spell != "Thunderstorm"){
			this.onScreen = 0;
		}
		if(this.onScreen == 1 && spell == "Thunderstorm"){
			if(this.frame/30 == Math.round(this.frame/30)){
				this.LonScreen = 1;
				this.timeLeft-=1;
				var STRIKEx = Math.floor(Math.random() * 736) + 64;
				var STRIKEy = Math.floor(Math.random() * 512) + 64;
				this.hy = STRIKEy;
				this.vx = STRIKEx;
			}
			else{
				this.vx = -2000;
				this.hy = -2000;
			}
			for (E in AllEnemies){
				if((AllEnemies[E].x >= this.vx-this.vwidth*0.5 && AllEnemies[E].x <= this.vx + this.vwidth*0.5 && AllEnemies[E].onScreen == 1)
					|| (this.vx >= AllEnemies[E].x - AllEnemies[E].width*0.5 && this.vx <= AllEnemies[E].x + AllEnemies[E].width*0.5 && AllEnemies[E].onScreen == 1)){
					onHit(AllEnemies[E]);
					Thunder.currentTime = 0;
					Thunder.play();
				}
			}			
			for (E in AllEnemies){
				if((AllEnemies[E].y <= this.hy + this.hheight*0.5 && AllEnemies[E].y >= this.hy-this.hheight*0.5 && AllEnemies[E].onScreen == 1)
					|| (this.hy >= AllEnemies[E].y - AllEnemies[E].height*0.5 && this.hy <= AllEnemies[E].y + AllEnemies[E].height*0.5 && AllEnemies[E].onScreen == 1)){
					onHit(AllEnemies[E]);
					Thunder.currentTime = 0;
					Thunder.play();
				}
			}			
		}
	},
	// Spawn
	shoot: function(){
	if(this.cd == 0){
		this.cd = this.cdTop;
		this.onScreen = 1;
		this.timeLeft = 360;
		this.frame = 0;
		air.cd = 0;
		air.shoot();
		air.cd = 0;
	}
	}
	
};
// Teleport+Heal: Heals user by 1 and casts Ice
var mysticearth = {
	cd: 0,
	cdTop: 300,
	tick: function(){
		if(this.cd > 0){
			this.cd-=1;
		}
	},
	shoot: function(){
		if(this.cd == 0){
			var currentEarthcd = earth.cd;
			var currentMysticcd = mystic.cd;
			var prevCd = cd;
			this.cd = this.cdTop;
			mystic.cd = 0;
			earth.cd = 0;
			mystic.shoot();
			earth.shoot();
			earth.cast = 0;
			cd = prevCd;
			castingBar.onScreen = 0;
			castingBar.cast = -1;
			mystic.cd = currentMysticcd;
			earth.cd = currentEarthcd;
		}
	}	
};
var waterfire = {
	x: -100,
	y: -200,
	width: 16,
	height: 16,
	timeLeft: 0,
	cd: 0,
	cdTop: 240,
	cd2: 0,
	cd2Top: 240,
	index: 1,
	Iindex: 0,
	speed: 12,
	onScreen: 0,
	used: 0,
	played: 0,
	dir: "",
	
	draw: function(){
		if(this.onScreen == 1){
			if(this.played == 0){
				longpulse.currentTime=0;
				longpulse.play();
				this.played = 1;
			}
			if(spell == "Explosive Ring"){
				if(this.index < 3){
					ctx.drawImage(FireBubble, this.x-this.width*0.5, this.y-this.height*0.5);
					this.index++;
				}
				else{
					ctx.drawImage(FireBubble2, this.x-this.width*0.5, this.y-this.height*0.5);
					this.index++;
					if(this.index >= 5){
						this.index = 1;
					}
				}
			}
			if(spell == "Frozen Ring"){
				ctx.drawImage(iceBpics[Math.floor(this.Iindex*0.5)], this.x-this.width*0.5, this.y-this.height*0.5);
				this.Iindex++;
				if(this.Iindex >= 6){
					this.Iindex = 0;
				}
			}
		}
	},
	effect: function(){
		if(this.cd > 0){
			this.cd-=1;
		}
		if(this.cd2 > 0){
			this.cd2-=1;
		}
		if(this.onScreen == 1){
			HpMove(this);
			for(E in AllEnemies){
				if(collision(this.dir, this, AllEnemies[E]) || collision(AllEnemies[E].dir, AllEnemies[E], this)){
					onHit(AllEnemies[E]);
					if(spell == "Explosive Ring"){
						Wfire.x = this.x;
						Wfire.y = this.y;
						Wfire.onScreen = 1;
						Wfire.shoot();
					}	
					else if(spell == "Frozen Ring"){
						IBubble.x = this.x;
						IBubble.y = this.y;
						IBubble.onScreen = 1;
						IBubble.frame = 0;
					}
					this.onScreen = 0;
				}
			}
			if(obsCollision(obstacle1, this, this.dir) || obsCollision(obstacle2, this, this.dir) || obsCollision(obstacle3, this, this.dir)
				|| this.x < 8 || this.y < 8 || this.x > 792 || this.y > 568){
				if(spell == "Explosive Ring"){
					Wfire.x = this.x;
					Wfire.y = this.y;
					Wfire.onScreen = 1;
					Wfire.shoot();
				}
				else if(spell == "Frozen Ring"){
					IBubble.x = this.x;
					IBubble.y = this.y;
					IBubble.onScreen = 1;
					IBubble.frame = 0;
				}
				this.x = -100;
				this.y = -200;
				this.onScreen = 0;
			}
		}
	},
	// Spawn
	shoot: function(){
	if(spell == "Explosive Ring"){
		if(this.cd == 0){
			this.x = player.x;
			this.y = player.y;
			this.dir = "W";
			this.cd = this.cdTop;
			this.onScreen = 1;
			this.played=0;
			for(W in waterFires){
				waterFires[W].used = 0;
			}
			waterfire2.shoot();
			waterfire3.shoot();
			waterfire4.shoot();
			waterfire5.shoot();
			waterfire6.shoot();
			waterfire7.shoot();
			waterfire8.shoot();
		}
	}
	else if(spell == "Frozen Ring"){
		if(this.cd2 == 0){
			this.x = player.x;
			this.y = player.y;
			this.dir = "W";
			this.played=0;
			this.cd2 = this.cd2Top;
			this.onScreen = 1;
			for(W in waterFires){
				waterFires[W].used = 0;
			}
			waterfire2.shoot();
			waterfire3.shoot();
			waterfire4.shoot();
			waterfire5.shoot();
			waterfire6.shoot();
			waterfire7.shoot();
			waterfire8.shoot();
		}
	}
	}
};
var waterfire2 = {
	x: -100,
	y: -200,
	width: 16,
	height: 16,
	speed: 12,
	index: 1,
	Iindex: 0,
	onScreen: 0,
	used: 0,
	dir: "",
	
	draw: function(){
		if(this.onScreen == 1){
			if(spell == "Explosive Ring"){
				if(this.index < 3){
					ctx.drawImage(FireBubble, this.x-this.width*0.5, this.y-this.height*0.5);
					this.index++;
				}
				else{
					ctx.drawImage(FireBubble2, this.x-this.width*0.5, this.y-this.height*0.5);
					this.index++;
					if(this.index >= 5){
						this.index = 1;
					}
				}
			}
			if(spell == "Frozen Ring"){
				ctx.drawImage(iceBpics[Math.floor(this.Iindex*0.5)], this.x-this.width*0.5, this.y-this.height*0.5);
				this.Iindex++;
				if(this.Iindex >= 6){
					this.Iindex = 0;
				}
			}
		}
	},
	effect: function(){
		if(this.onScreen == 1){
			HpMove(this);
			for(E in AllEnemies){
				if(collision(this.dir, this, AllEnemies[E]) || collision(AllEnemies[E].dir, AllEnemies[E], this)){
					onHit(AllEnemies[E]);
					if(spell == "Explosive Ring"){
						Wfire2.x = this.x;
						Wfire2.y = this.y;
						Wfire2.onScreen = 1;
						Wfire2.shoot();
					}	
					else if(spell == "Frozen Ring"){
						IBubble2.x = this.x;
						IBubble2.y = this.y;
						IBubble2.onScreen = 1;
						IBubble2.frame = 0;
					}
					this.onScreen = 0;
				}
			}
			if(obsCollision(obstacle1, this, this.dir) || obsCollision(obstacle2, this, this.dir) || obsCollision(obstacle3, this, this.dir)
				|| this.x < 8 || this.y < 8 || this.x > 792 || this.y > 568){
				if(spell == "Explosive Ring"){
					Wfire2.x = this.x;
					Wfire2.y = this.y;
					Wfire2.onScreen = 1;
					Wfire2.shoot();
				}
				else if(spell == "Frozen Ring"){
					IBubble2.x = this.x;
					IBubble2.y = this.y;
					IBubble2.onScreen = 1;
					IBubble2.frame = 0;
				}
				this.x = -100;
				this.y = -200;
				this.onScreen = 0;
			}
		}
	},
	// Spawn
	shoot: function(){
		this.x = player.x;
		this.y = player.y;
		this.dir = "A";
		this.onScreen = 1;
		this.used = 0;
	}
};
var waterfire3 = {
	x: -100,
	y: -200,
	width: 16,
	height: 16,
	speed: 12,
	onScreen: 0,
	index: 1,
	Iindex: 0,
	used: 0,
	dir: "",
	
	draw: function(){
		if(this.onScreen == 1){
			if(spell == "Explosive Ring"){
				if(this.index < 3){
					ctx.drawImage(FireBubble, this.x-this.width*0.5, this.y-this.height*0.5);
					this.index++;
				}
				else{
					ctx.drawImage(FireBubble2, this.x-this.width*0.5, this.y-this.height*0.5);
					this.index++;
					if(this.index >= 5){
						this.index = 1;
					}
				}
			}
			if(spell == "Frozen Ring"){
				ctx.drawImage(iceBpics[Math.floor(this.Iindex*0.5)], this.x-this.width*0.5, this.y-this.height*0.5);
				this.Iindex++;
				if(this.Iindex >= 6){
					this.Iindex = 0;
				}
			}
		}
	},
	effect: function(){
		if(this.onScreen == 1){
			HpMove(this);
			for(E in AllEnemies){
				if(collision(this.dir, this, AllEnemies[E]) || collision(AllEnemies[E].dir, AllEnemies[E], this)){
					onHit(AllEnemies[E]);
					if(spell == "Explosive Ring"){
						Wfire3.x = this.x;
						Wfire3.y = this.y;
						Wfire3.onScreen = 1;
						Wfire3.shoot();
					}	
					else if(spell == "Frozen Ring"){
						IBubble3.x = this.x;
						IBubble3.y = this.y;
						IBubble3.onScreen = 1;
						IBubble3.frame = 0;
					}
					this.onScreen = 0;
				}
			}
			if(obsCollision(obstacle1, this, this.dir) || obsCollision(obstacle2, this, this.dir) || obsCollision(obstacle3, this, this.dir)
				|| this.x < 8 || this.y < 8 || this.x > 792 || this.y > 568){
				if(spell == "Explosive Ring"){
					Wfire3.x = this.x;
					Wfire3.y = this.y;
					Wfire3.onScreen = 1;
					Wfire3.shoot();
				}
				else if(spell == "Frozen Ring"){
					IBubble3.x = this.x;
					IBubble3.y = this.y;
					IBubble3.onScreen = 1;
					IBubble3.frame = 0;
				}
				this.x = -100;
				this.y = -200;
				this.onScreen = 0;
			}
		}
	},
	// Spawn
	shoot: function(){
		this.x = player.x;
		this.y = player.y;
		this.dir = "S";
		this.onScreen = 1;
		this.used = 0;
	}
};
var waterfire4 = {
	x: -100,
	y: -200,
	width: 16,
	height: 16,
	speed: 12,
	onScreen: 0,
	used: 0,
	index: 1,
	Iindex: 0,
	dir: "",
	
	draw: function(){
		if(this.onScreen == 1){
			if(spell == "Explosive Ring"){
				if(this.index < 3){
					ctx.drawImage(FireBubble, this.x-this.width*0.5, this.y-this.height*0.5);
					this.index++;
				}
				else{
					ctx.drawImage(FireBubble2, this.x-this.width*0.5, this.y-this.height*0.5);
					this.index++;
					if(this.index >= 5){
						this.index = 1;
					}
				}
			}
			if(spell == "Frozen Ring"){
				ctx.drawImage(iceBpics[Math.floor(this.Iindex*0.5)], this.x-this.width*0.5, this.y-this.height*0.5);
				this.Iindex++;
				if(this.Iindex >= 6){
					this.Iindex = 0;
				}
			}
		}
	},
	effect: function(){
		if(this.onScreen == 1){
			HpMove(this);
			for(E in AllEnemies){
				if(collision(this.dir, this, AllEnemies[E]) || collision(AllEnemies[E].dir, AllEnemies[E], this)){
					onHit(AllEnemies[E]);
					if(spell == "Explosive Ring"){
						Wfire4.x = this.x;
						Wfire4.y = this.y;
						Wfire4.onScreen = 1;
						Wfire4.shoot();
					}	
					else if(spell == "Frozen Ring"){
						IBubble4.x = this.x;
						IBubble4.y = this.y;
						IBubble4.onScreen = 1;
						IBubble4.frame = 0;
					}
					this.onScreen = 0;
				}
			}
			if(obsCollision(obstacle1, this, this.dir) || obsCollision(obstacle2, this, this.dir) || obsCollision(obstacle3, this, this.dir)
				|| this.x < 8 || this.y < 8 || this.x > 792 || this.y > 568){
				if(spell == "Explosive Ring"){
					Wfire4.x = this.x;
					Wfire4.y = this.y;
					Wfire4.onScreen = 1;
					Wfire4.shoot();
				}
				else if(spell == "Frozen Ring"){
					IBubble4.x = this.x;
					IBubble4.y = this.y;
					IBubble4.onScreen = 1;
					IBubble4.frame = 0;
				}
				this.x = -100;
				this.y = -200;
				this.onScreen = 0;
			}
		}
	},
	// Spawn
	shoot: function(){
		this.x = player.x;
		this.y = player.y;
		this.dir = "D";
		this.onScreen = 1;
		this.used = 0;
	}
};
var waterfire5 = {
	x: -100,
	y: -200,
	width: 16,
	height: 16,
	speed: 12,
	onScreen: 0,
	index: 1,
	Iindex: 0,
	used: 0,
	dir: "",
	
	draw: function(){
		if(this.onScreen == 1){
			if(spell == "Explosive Ring"){
				if(this.index < 3){
					ctx.drawImage(FireBubble, this.x-this.width*0.5, this.y-this.height*0.5);
					this.index++;
				}
				else{
					ctx.drawImage(FireBubble2, this.x-this.width*0.5, this.y-this.height*0.5);
					this.index++;
					if(this.index >= 5){
						this.index = 1;
					}
				}
			}
			if(spell == "Frozen Ring"){
				ctx.drawImage(iceBpics[Math.floor(this.Iindex*0.5)], this.x-this.width*0.5, this.y-this.height*0.5);
				this.Iindex++;
				if(this.Iindex >= 6){
					this.Iindex = 0;
				}
			}
		}
	},
	effect: function(){
		if(this.onScreen == 1){
			HpMove(this);
			for(E in AllEnemies){
				if(collision(this.dir, this, AllEnemies[E]) || collision(AllEnemies[E].dir, AllEnemies[E], this)){
					onHit(AllEnemies[E]);
					if(spell == "Explosive Ring"){
						Wfire5.x = this.x;
						Wfire5.y = this.y;
						Wfire5.onScreen = 1;
						Wfire5.shoot();
					}	
					else if(spell == "Frozen Ring"){
						IBubble5.x = this.x;
						IBubble5.y = this.y;
						IBubble5.onScreen = 1;
						IBubble5.frame = 0;
					}
					this.onScreen = 0;
				}
			}
			if(obsCollision(obstacle1, this, this.dir) || obsCollision(obstacle2, this, this.dir) || obsCollision(obstacle3, this, this.dir)
				|| this.x < 8 || this.y < 8 || this.x > 792 || this.y > 568){
				if(spell == "Explosive Ring"){
					Wfire5.x = this.x;
					Wfire5.y = this.y;
					Wfire5.onScreen = 1;
					Wfire5.shoot();
				}
				else if(spell == "Frozen Ring"){
					IBubble5.x = this.x;
					IBubble5.y = this.y;
					IBubble5.onScreen = 1;
					IBubble5.frame = 0;
				}
				this.x = -100;
				this.y = -200;
				this.onScreen = 0;
			}
		}
	},
	// Spawn
	shoot: function(){
		this.x = player.x;
		this.y = player.y;
		this.dir = "WD";
		this.onScreen = 1;
		this.used = 0;
	}
};
var waterfire6 = {
	x: -100,
	y: -200,
	width: 16,
	height: 16,
	speed: 12,
	onScreen: 0,
	used: 0,
	index: 1,
	Iindex: 0,
	dir: "",
	
	draw: function(){
		if(this.onScreen == 1){
			if(spell == "Explosive Ring"){
				if(this.index < 3){
					ctx.drawImage(FireBubble, this.x-this.width*0.5, this.y-this.height*0.5);
					this.index++;
				}
				else{
					ctx.drawImage(FireBubble2, this.x-this.width*0.5, this.y-this.height*0.5);
					this.index++;
					if(this.index >= 5){
						this.index = 1;
					}
				}
			}
			if(spell == "Frozen Ring"){
				ctx.drawImage(iceBpics[Math.floor(this.Iindex*0.5)], this.x-this.width*0.5, this.y-this.height*0.5);
				this.Iindex++;
				if(this.Iindex >= 6){
					this.Iindex = 0;
				}
			}
		}
	},
	effect: function(){
		if(this.onScreen == 1){
			HpMove(this);
			for(E in AllEnemies){
				if(collision(this.dir, this, AllEnemies[E]) || collision(AllEnemies[E].dir, AllEnemies[E], this)){
					onHit(AllEnemies[E]);
					if(spell == "Explosive Ring"){
						Wfire6.x = this.x;
						Wfire6.y = this.y;
						Wfire6.onScreen = 1;
						Wfire6.shoot();
					}	
					else if(spell == "Frozen Ring"){
						IBubble6.x = this.x;
						IBubble6.y = this.y;
						IBubble6.onScreen = 1;
						IBubble6.frame = 0;
					}
					this.onScreen = 0;
				}
			}
			if(obsCollision(obstacle1, this, this.dir) || obsCollision(obstacle2, this, this.dir) || obsCollision(obstacle3, this, this.dir)
				|| this.x < 8 || this.y < 8 || this.x > 792 || this.y > 568){
				if(spell == "Explosive Ring"){
					Wfire6.x = this.x;
					Wfire6.y = this.y;
					Wfire6.onScreen = 1;
					Wfire6.shoot();
				}
				else if(spell == "Frozen Ring"){
					IBubble6.x = this.x;
					IBubble6.y = this.y;
					IBubble6.onScreen = 1;
					IBubble6.frame = 0;
				}
				this.x = -100;
				this.y = -200;
				this.onScreen = 0;
			}
		}
	},
	// Spawn
	shoot: function(){
		this.x = player.x;
		this.y = player.y;
		this.dir = "WA";
		this.onScreen = 1;
		this.used = 0;
	}
};
var waterfire7 = {
	x: -100,
	y: -200,
	width: 16,
	height: 16,
	speed: 12,
	onScreen: 0,
	used: 0,
	index: 1,
	Iindex: 0,
	dir: "",
	
	draw: function(){
		if(this.onScreen == 1){
			if(spell == "Explosive Ring"){
				if(this.index < 3){
					ctx.drawImage(FireBubble, this.x-this.width*0.5, this.y-this.height*0.5);
					this.index++;
				}
				else{
					ctx.drawImage(FireBubble2, this.x-this.width*0.5, this.y-this.height*0.5);
					this.index++;
					if(this.index >= 5){
						this.index = 1;
					}
				}
			}
			if(spell == "Frozen Ring"){
				ctx.drawImage(iceBpics[Math.floor(this.Iindex*0.5)], this.x-this.width*0.5, this.y-this.height*0.5);
				this.Iindex++;
				if(this.Iindex >= 6){
					this.Iindex = 0;
				}
			}
		}
	},
	effect: function(){
		if(this.onScreen == 1){
			HpMove(this);
			for(E in AllEnemies){
				if(collision(this.dir, this, AllEnemies[E]) || collision(AllEnemies[E].dir, AllEnemies[E], this)){
					onHit(AllEnemies[E]);
					if(spell == "Explosive Ring"){
						Wfire7.x = this.x;
						Wfire7.y = this.y;
						Wfire7.onScreen = 1;
						Wfire7.shoot();
					}	
					else if(spell == "Frozen Ring"){
						IBubble7.x = this.x;
						IBubble7.y = this.y;
						IBubble7.onScreen = 1;
						IBubble7.frame = 0;
					}
					this.onScreen = 0;
				}
			}
			if(obsCollision(obstacle1, this, this.dir) || obsCollision(obstacle2, this, this.dir) || obsCollision(obstacle3, this, this.dir)
				|| this.x < 8 || this.y < 8 || this.x > 792 || this.y > 568){
				if(spell == "Explosive Ring"){
					Wfire7.x = this.x;
					Wfire7.y = this.y;
					Wfire7.onScreen = 1;
					Wfire7.shoot();
				}
				else if(spell == "Frozen Ring"){
					IBubble7.x = this.x;
					IBubble7.y = this.y;
					IBubble7.onScreen = 1;
					IBubble7.frame = 0;
				}
				this.x = -100;
				this.y = -200;
				this.onScreen = 0;
			}
		}
	},
	// Spawn
	shoot: function(){
		this.x = player.x;
		this.y = player.y;
		this.dir = "AS";
		this.onScreen = 1;
		this.used = 0;
	}
};
var waterfire8 = {
	x: -100,
	y: -200,
	width: 16,
	height: 16,
	speed: 12,
	onScreen: 0,
	used: 0,
	index: 1,
	Iindex: 0,
	dir: "",
	
	draw: function(){
		if(this.onScreen == 1){
			if(spell == "Explosive Ring"){
				if(this.index < 3){
					ctx.drawImage(FireBubble, this.x-this.width*0.5, this.y-this.height*0.5);
					this.index++;
				}
				else{
					ctx.drawImage(FireBubble2, this.x-this.width*0.5, this.y-this.height*0.5);
					this.index++;
					if(this.index >= 5){
						this.index = 1;
					}
				}
			}
			if(spell == "Frozen Ring"){
				ctx.drawImage(iceBpics[Math.floor(this.Iindex*0.5)], this.x-this.width*0.5, this.y-this.height*0.5);
				this.Iindex++;
				if(this.Iindex >= 6){
					this.Iindex = 0;
				}
			}
		}
	},
	effect: function(){
		if(this.onScreen == 1){
			HpMove(this);
			for(E in AllEnemies){
				if(collision(this.dir, this, AllEnemies[E]) || collision(AllEnemies[E].dir, AllEnemies[E], this)){
					onHit(AllEnemies[E]);
					if(spell == "Explosive Ring"){
						Wfire8.x = this.x;
						Wfire8.y = this.y;
						Wfire8.onScreen = 1;
						Wfire8.shoot();
					}	
					else if(spell == "Frozen Ring"){
						IBubble8.x = this.x;
						IBubble8.y = this.y;
						IBubble8.onScreen = 1;
						IBubble8.frame = 0;
					}
					this.onScreen = 0;
				}
			}
			if(obsCollision(obstacle1, this, this.dir) || obsCollision(obstacle2, this, this.dir) || obsCollision(obstacle3, this, this.dir)
				|| this.x < 8 || this.y < 8 || this.x > 792 || this.y > 568){
				if(spell == "Explosive Ring"){
					Wfire8.x = this.x;
					Wfire8.y = this.y;
					Wfire8.onScreen = 1;
					Wfire8.shoot();
				}
				else if(spell == "Frozen Ring"){
					IBubble8.x = this.x;
					IBubble8.y = this.y;
					IBubble8.onScreen = 1;
					IBubble8.frame = 0;
				}
				this.x = -100;
				this.y = -200;
				this.onScreen = 0;
			}
		}
	},
	// Spawn
	shoot: function(){
		this.x = player.x;
		this.y = player.y;
		this.dir = "SD";
		this.onScreen = 1;
		this.used = 0;
	}
};
var Wfire = {
	color: "#FF6600",
	x: -100,
	y: -200,
	timeLeft: 0,
	width: 32,
	height: 32,
	frame: 0,
	cd: 0,
	onScreen: 0,
	used: 0,
	
	draw: function(){
		if(this.onScreen == 1){
			if(this.used == 0){
				Explosion.currentTime=0;
				Explosion.play();
				this.used = 1;
			}
			ctx.globalAlpha = Alpha*0.5;
			if(this.frame*0.5 != Math.round(this.frame*0.5)){
				ctx.fillStyle = "#CC0000";
			}
			else{
				ctx.fillStyle = this.color;
			}
			ctx.fillRect(this.x - this.width * 0.5,
			this.y - this.height * 0.5,
			this.width, this.height);
			ctx.globalAlpha = Alpha;
		}
	},
	move: function(){
		if(this.frame == 20){
			this.x = -100;
			this.y = -200;
			this.width = 32;
			this.height = 32;
			this.onScreen = 0;
		}
		else if(this.onScreen ==1){
			this.width = 32 + (8*this.frame);
			this.height = 32 + (8*this.frame);
			this.frame++;
			for (E in AllEnemies){
				if(contained(AllEnemies[E], this)){
					onHit(AllEnemies[E]);
				}
			}
			for (O in obstacle1){
				if(contained(obstacle1[O], this)){
					obsHit(obstacle1[O]);
				}
			}
			for (O in obstacle2){
				if(contained(obstacle2[O], this)){
					obsHit(obstacle2[O]);
				}
			}
			for (O in obstacle3){
				if(contained(obstacle3[O], this)){
					obsHit(obstacle3[O]);
				}
			}
		}
	},
	// Spawn
	shoot: function(){
		this.height = 32;
		this.width = 32;
		this.frame = 0;
		this.onScreen = 1;
		this.used = 0;
	}
};
var Wfire2 = {
	color: "#FF6600",
	x: -100,
	y: -200,
	timeLeft: 0,
	width: 32,
	height: 32,
	frame: 0,
	cd: 0,
	onScreen: 0,
	used: 0,
	
	draw: function(){
		if(this.onScreen == 1){
			if(this.used == 0){
				Explosion.currentTime=0;
				Explosion.play();
				this.used = 1;
			}
			ctx.globalAlpha = Alpha*0.5;
			if(this.frame*0.5 != Math.round(this.frame*0.5)){
				ctx.fillStyle = "#CC0000";
			}
			else{
				ctx.fillStyle = this.color;
			}
			ctx.fillRect(this.x - this.width * 0.5,
			this.y - this.height * 0.5,
			this.width, this.height);
			ctx.globalAlpha = Alpha;
		}
	},
	move: function(){
		if(this.frame == 20){
			this.x = -100;
			this.y = -200;
			this.width = 32;
			this.height = 32;
			this.onScreen = 0;
		}
		else if(this.onScreen ==1){
			this.width = 32 + (8*this.frame);
			this.height = 32 + (8*this.frame);
			this.frame++;
			for (E in AllEnemies){
				if(contained(AllEnemies[E], this)){
					onHit(AllEnemies[E]);
				}
			}
			for (O in obstacle1){
				if(contained(obstacle1[O], this)){
					obsHit(obstacle1[O]);
				}
			}
			for (O in obstacle2){
				if(contained(obstacle2[O], this)){
					obsHit(obstacle2[O]);
				}
			}
			for (O in obstacle3){
				if(contained(obstacle3[O], this)){
					obsHit(obstacle3[O]);
				}
			}
		}
	},
	// Spawn
	shoot: function(){
		this.height = 32;
		this.width = 32;
		this.frame = 0;
		this.onScreen = 1;
		this.used = 0;
	}
};
var Wfire3 = {
	color: "#FF6600",
	x: -100,
	y: -200,
	timeLeft: 0,
	width: 32,
	height: 32,
	frame: 0,
	cd: 0,
	onScreen: 0,
	used: 0,
	
	draw: function(){
		if(this.onScreen == 1){
			if(this.used == 0){
				Explosion.currentTime=0;
				Explosion.play();
				this.used = 1;
			}
			ctx.globalAlpha = Alpha*0.5;
			if(this.frame*0.5 != Math.round(this.frame*0.5)){
				ctx.fillStyle = "#CC0000";
			}
			else{
				ctx.fillStyle = this.color;
			}
			ctx.fillRect(this.x - this.width * 0.5,
			this.y - this.height * 0.5,
			this.width, this.height);
			ctx.globalAlpha = Alpha;
		}
	},
	move: function(){
		if(this.frame == 20){
			this.x = -100;
			this.y = -200;
			this.width = 32;
			this.height = 32;
			this.onScreen = 0;
		}
		else if(this.onScreen ==1){
			this.width = 32 + (8*this.frame);
			this.height = 32 + (8*this.frame);
			this.frame++;
			for (E in AllEnemies){
				if(contained(AllEnemies[E], this)){
					onHit(AllEnemies[E]);
				}
			}
			for (O in obstacle1){
				if(contained(obstacle1[O], this)){
					obsHit(obstacle1[O]);
				}
			}
			for (O in obstacle2){
				if(contained(obstacle2[O], this)){
					obsHit(obstacle2[O]);
				}
			}
			for (O in obstacle3){
				if(contained(obstacle3[O], this)){
					obsHit(obstacle3[O]);
				}
			}
		}
	},
	// Spawn
	shoot: function(){
		this.height = 32;
		this.width = 32;
		this.frame = 0;
		this.onScreen = 1;
		this.used = 0;
	}
};
var Wfire4 = {
	color: "#FF6600",
	x: -100,
	y: -200,
	timeLeft: 0,
	width: 32,
	height: 32,
	frame: 0,
	cd: 0,
	onScreen: 0,
	used: 0,
	
	draw: function(){
		if(this.onScreen == 1){
			if(this.used == 0){
				Explosion.currentTime=0;
				Explosion.play();
				this.used = 1;
			}
			ctx.globalAlpha = Alpha*0.5;
			if(this.frame*0.5 != Math.round(this.frame*0.5)){
				ctx.fillStyle = "#CC0000";
			}
			else{
				ctx.fillStyle = this.color;
			}
			ctx.fillRect(this.x - this.width * 0.5,
			this.y - this.height * 0.5,
			this.width, this.height);
			ctx.globalAlpha = Alpha;
		}
	},
	move: function(){
		if(this.frame == 20){
			this.x = -100;
			this.y = -200;
			this.width = 32;
			this.height = 32;
			this.onScreen = 0;
		}
		else if(this.onScreen ==1){
			this.width = 32 + (8*this.frame);
			this.height = 32 + (8*this.frame);
			this.frame++;
			for (E in AllEnemies){
				if(contained(AllEnemies[E], this)){
					onHit(AllEnemies[E]);
				}
			}
			for (O in obstacle1){
				if(contained(obstacle1[O], this)){
					obsHit(obstacle1[O]);
				}
			}
			for (O in obstacle2){
				if(contained(obstacle2[O], this)){
					obsHit(obstacle2[O]);
				}
			}
			for (O in obstacle3){
				if(contained(obstacle3[O], this)){
					obsHit(obstacle3[O]);
				}
			}
		}
	},
	// Spawn
	shoot: function(){
		this.height = 32;
		this.width = 32;
		this.frame = 0;
		this.onScreen = 1;
		this.used = 0;
	}
};
var Wfire5 = {
	color: "#FF6600",
	x: -100,
	y: -200,
	timeLeft: 0,
	width: 32,
	height: 32,
	frame: 0,
	cd: 0,
	onScreen: 0,
	used: 0,
	
	draw: function(){
		if(this.onScreen == 1){
			if(this.used == 0){
				Explosion.currentTime=0;
				Explosion.play();
				this.used = 1;
			}
			ctx.globalAlpha = Alpha*0.5;
			if(this.frame*0.5 != Math.round(this.frame*0.5)){
				ctx.fillStyle = "#CC0000";
			}
			else{
				ctx.fillStyle = this.color;
			}
			ctx.fillRect(this.x - this.width * 0.5,
			this.y - this.height * 0.5,
			this.width, this.height);
			ctx.globalAlpha = Alpha;
		}
	},
	move: function(){
		if(this.frame == 20){
			this.x = -100;
			this.y = -200;
			this.width = 32;
			this.height = 32;
			this.onScreen = 0;
		}
		else if(this.onScreen ==1){
			this.width = 32 + (8*this.frame);
			this.height = 32 + (8*this.frame);
			this.frame++;
			for (E in AllEnemies){
				if(contained(AllEnemies[E], this)){
					onHit(AllEnemies[E]);
				}
			}
			for (O in obstacle1){
				if(contained(obstacle1[O], this)){
					obsHit(obstacle1[O]);
				}
			}
			for (O in obstacle2){
				if(contained(obstacle2[O], this)){
					obsHit(obstacle2[O]);
				}
			}
			for (O in obstacle3){
				if(contained(obstacle3[O], this)){
					obsHit(obstacle3[O]);
				}
			}
		}
	},
	// Spawn
	shoot: function(){
		this.height = 32;
		this.width = 32;
		this.frame = 0;
		this.onScreen = 1;
		this.used = 0;
	}
};
var Wfire6 = {
	color: "#FF6600",
	x: -100,
	y: -200,
	timeLeft: 0,
	width: 32,
	height: 32,
	frame: 0,
	cd: 0,
	onScreen: 0,
	used: 0,
	
	draw: function(){
		if(this.onScreen == 1){
			if(this.used == 0){
				Explosion.currentTime=0;
				Explosion.play();
				this.used = 1;
			}
			ctx.globalAlpha = Alpha*0.5;
			if(this.frame*0.5 != Math.round(this.frame*0.5)){
				ctx.fillStyle = "#CC0000";
			}
			else{
				ctx.fillStyle = this.color;
			}
			ctx.fillRect(this.x - this.width * 0.5,
			this.y - this.height * 0.5,
			this.width, this.height);
			ctx.globalAlpha = Alpha;
		}
	},
	move: function(){
		if(this.frame == 20){
			this.x = -100;
			this.y = -200;
			this.width = 32;
			this.height = 32;
			this.onScreen = 0;
		}
		else if(this.onScreen ==1){
			this.width = 32 + (8*this.frame);
			this.height = 32 + (8*this.frame);
			this.frame++;
			for (E in AllEnemies){
				if(contained(AllEnemies[E], this)){
					onHit(AllEnemies[E]);
				}
			}
			for (O in obstacle1){
				if(contained(obstacle1[O], this)){
					obsHit(obstacle1[O]);
				}
			}
			for (O in obstacle2){
				if(contained(obstacle2[O], this)){
					obsHit(obstacle2[O]);
				}
			}
			for (O in obstacle3){
				if(contained(obstacle3[O], this)){
					obsHit(obstacle3[O]);
				}
			}
		}
	},
	// Spawn
	shoot: function(){
		this.height = 32;
		this.width = 32;
		this.frame = 0;
		this.onScreen = 1;
		this.used = 0;
	}
};
var Wfire7 = {
	color: "#FF6600",
	x: -100,
	y: -200,
	timeLeft: 0,
	width: 32,
	height: 32,
	frame: 0,
	cd: 0,
	onScreen: 0,
	used: 0,
	
	draw: function(){
		if(this.onScreen == 1){
			if(this.used == 0){
				Explosion.currentTime=0;
				Explosion.play();
				this.used = 1;
			}
			ctx.globalAlpha = Alpha*0.5;
			if(this.frame*0.5 != Math.round(this.frame*0.5)){
				ctx.fillStyle = "#CC0000";
			}
			else{
				ctx.fillStyle = this.color;
			}
			ctx.fillRect(this.x - this.width * 0.5,
			this.y - this.height * 0.5,
			this.width, this.height);
			ctx.globalAlpha = Alpha;
		}
	},
	move: function(){
		if(this.frame == 20){
			this.x = -100;
			this.y = -200;
			this.width = 32;
			this.height = 32;
			this.onScreen = 0;
		}
		else if(this.onScreen ==1){
			this.width = 32 + (8*this.frame);
			this.height = 32 + (8*this.frame);
			this.frame++;
			for (E in AllEnemies){
				if(contained(AllEnemies[E], this)){
					onHit(AllEnemies[E]);
				}
			}
			for (O in obstacle1){
				if(contained(obstacle1[O], this)){
					obsHit(obstacle1[O]);
				}
			}
			for (O in obstacle2){
				if(contained(obstacle2[O], this)){
					obsHit(obstacle2[O]);
				}
			}
			for (O in obstacle3){
				if(contained(obstacle3[O], this)){
					obsHit(obstacle3[O]);
				}
			}
		}
	},
	// Spawn
	shoot: function(){
		this.height = 32;
		this.width = 32;
		this.frame = 0;
		this.onScreen = 1;
		this.used = 0;
	}
};
var Wfire8 = {
	color: "#FF6600",
	x: -100,
	y: -200,
	timeLeft: 0,
	width: 32,
	height: 32,
	frame: 0,
	cd: 0,
	onScreen: 0,
	used: 0,
	
	draw: function(){
		if(this.onScreen == 1){
			if(this.used == 0){
				Explosion.currentTime=0;
				Explosion.play();
				this.used = 1;
			}
			ctx.globalAlpha = Alpha*0.5;
			if(this.frame*0.5 != Math.round(this.frame*0.5)){
				ctx.fillStyle = "#CC0000";
			}
			else{
				ctx.fillStyle = this.color;
			}
			ctx.fillRect(this.x - this.width * 0.5,
			this.y - this.height * 0.5,
			this.width, this.height);
			ctx.globalAlpha = Alpha;
		}
	},
	move: function(){
		if(this.frame == 20){
			this.x = -100;
			this.y = -200;
			this.width = 32;
			this.height = 32;
			this.onScreen = 0;
		}
		else if(this.onScreen ==1){
			this.width = 32 + (8*this.frame);
			this.height = 32 + (8*this.frame);
			this.frame++;
			for (E in AllEnemies){
				if(contained(AllEnemies[E], this)){
					onHit(AllEnemies[E]);
				}
			}
			for (O in obstacle1){
				if(contained(obstacle1[O], this)){
					obsHit(obstacle1[O]);
				}
			}
			for (O in obstacle2){
				if(contained(obstacle2[O], this)){
					obsHit(obstacle2[O]);
				}
			}
			for (O in obstacle3){
				if(contained(obstacle3[O], this)){
					obsHit(obstacle3[O]);
				}
			}
		}
	},
	// Spawn
	shoot: function(){
		this.height = 32;
		this.width = 32;
		this.frame = 0;
		this.onScreen = 1;
		this.used = 0;
	}
};
var waterFires = {1: waterfire, 2: waterfire2, 3: waterfire3, 4: waterfire4, 5: waterfire5, 6: waterfire6, 7: waterfire7, 8: waterfire8};
var WFires = {1: Wfire, 2: Wfire2, 3: Wfire3, 4: Wfire4, 5: Wfire5, 6: Wfire6, 7: Wfire7, 8: Wfire8};

var IBubble = {
	color: "#00CCFF",
	timeLeft: 0,
	width: 32,
	height: 32,
	x: -100,
	y: -200,
	frame: 0,
	onScreen: 0,
	
	draw: function(){
		if(this.onScreen == 1){
			ctx.globalAlpha = Alpha*0.25;
			ctx.fillStyle = this.color;
			ctx.fillRect(this.x - this.width * 0.5, this.y - this.height * 0.5,	this.width, this.height);
			ctx.globalAlpha = Alpha;
		}
	},
	
	move: function(){
		if(this.frame <= 10 && this.onScreen == 1){
			this.width = this.width + 2*this.frame;
			this.height = this.height + 2*this.frame;
			this.frame++;
			for (E in AllEnemies){
				if(collision(AllEnemies[E].dir, AllEnemies[E], this) || contained(this, AllEnemies[E])){
					AllEnemies[E].speed = AllEnemies[E].speed2;
				}
			}
		}
		else if(this.frame < 90 && this.onScreen == 1){
			this.frame++;
			for (E in AllEnemies){
				if(collision(AllEnemies[E].dir, AllEnemies[E], this) || contained(this, AllEnemies[E])){
					AllEnemies[E].speed = AllEnemies[E].speed2;
				}
			}
		}
		if(this.frame >= 90 && this.onScreen == 1){
			for (E in AllEnemies){
				AllEnemies[E].speed = AllEnemies[E].speed2 * 2;
			}
			this.onScreen = 0;
			this.frame = 0;
			this.width = 32;
			this.height = 32;
		}
	}
};
var IBubble2 = {
	color: "#00CCFF",
	timeLeft: 0,
	width: 32,
	height: 32,
	x: -100,
	y: -200,
	frame: 0,
	onScreen: 0,
	
	draw: function(){
		if(this.onScreen == 1){
			ctx.globalAlpha = Alpha*0.25;
			ctx.fillStyle = this.color;
			ctx.fillRect(this.x - this.width * 0.5, this.y - this.height * 0.5,	this.width, this.height);
			ctx.globalAlpha = Alpha;
		}
	},
	
	move: function(){
		if(this.frame <= 10 && this.onScreen == 1){
			this.width = this.width + 2*this.frame;
			this.height = this.height + 2*this.frame;
			this.frame++;
			for (E in AllEnemies){
				if(collision(AllEnemies[E].dir, AllEnemies[E], this) || contained(this, AllEnemies[E])){
					AllEnemies[E].speed = AllEnemies[E].speed2;
				}
			}
		}
		else if(this.frame < 90 && this.onScreen == 1){
			this.frame++;
			for (E in AllEnemies){
				if(collision(AllEnemies[E].dir, AllEnemies[E], this) || contained(this, AllEnemies[E])){
					AllEnemies[E].speed = AllEnemies[E].speed2;
				}
			}
		}
		if(this.frame >= 90 && this.onScreen == 1){
			for (E in AllEnemies){
				AllEnemies[E].speed = AllEnemies[E].speed2 * 2;
			}
			this.onScreen = 0;
			this.frame = 0;
			this.width = 32;
			this.height = 32;
		}
	}
};
var IBubble3 = {
	color: "#00CCFF",
	timeLeft: 0,
	width: 32,
	height: 32,
	x: -100,
	y: -200,
	frame: 0,
	onScreen: 0,
	
	draw: function(){
		if(this.onScreen == 1){
			ctx.globalAlpha = Alpha*0.25;
			ctx.fillStyle = this.color;
			ctx.fillRect(this.x - this.width * 0.5, this.y - this.height * 0.5,	this.width, this.height);
			ctx.globalAlpha = Alpha;
		}
	},
	
	move: function(){
		if(this.frame <= 10 && this.onScreen == 1){
			this.width = this.width + 2*this.frame;
			this.height = this.height + 2*this.frame;
			this.frame++;
			for (E in AllEnemies){
				if(collision(AllEnemies[E].dir, AllEnemies[E], this) || contained(this, AllEnemies[E])){
					AllEnemies[E].speed = AllEnemies[E].speed2;
				}
			}
		}
		else if(this.frame < 90 && this.onScreen == 1){
			this.frame++;
			for (E in AllEnemies){
				if(collision(AllEnemies[E].dir, AllEnemies[E], this) || contained(this, AllEnemies[E])){
					AllEnemies[E].speed = AllEnemies[E].speed2;
				}
			}
		}
		if(this.frame >= 90 && this.onScreen == 1){
			for (E in AllEnemies){
				AllEnemies[E].speed = AllEnemies[E].speed2 * 2;
			}
			this.onScreen = 0;
			this.frame = 0;
			this.width = 32;
			this.height = 32;
		}
	}
};
var IBubble4 = {
	color: "#00CCFF",
	timeLeft: 0,
	width: 32,
	height: 32,
	x: -100,
	y: -200,
	frame: 0,
	onScreen: 0,
	
	draw: function(){
		if(this.onScreen == 1){
			ctx.globalAlpha = Alpha*0.25;
			ctx.fillStyle = this.color;
			ctx.fillRect(this.x - this.width * 0.5, this.y - this.height * 0.5,	this.width, this.height);
			ctx.globalAlpha = Alpha;
		}
	},
	
	move: function(){
		if(this.frame <= 10 && this.onScreen == 1){
			this.width = this.width + 2*this.frame;
			this.height = this.height + 2*this.frame;
			this.frame++;
			for (E in AllEnemies){
				if(collision(AllEnemies[E].dir, AllEnemies[E], this) || contained(this, AllEnemies[E])){
					AllEnemies[E].speed = AllEnemies[E].speed2;
				}
			}
		}
		else if(this.frame < 90 && this.onScreen == 1){
			this.frame++;
			for (E in AllEnemies){
				if(collision(AllEnemies[E].dir, AllEnemies[E], this) || contained(this, AllEnemies[E])){
					AllEnemies[E].speed = AllEnemies[E].speed2;
				}
			}
		}
		if(this.frame >= 90 && this.onScreen == 1){
			for (E in AllEnemies){
				AllEnemies[E].speed = AllEnemies[E].speed2 * 2;
			}
			this.onScreen = 0;
			this.frame = 0;
			this.width = 32;
			this.height = 32;
		}
	}
};
var IBubble5 = {
	color: "#00CCFF",
	timeLeft: 0,
	width: 32,
	height: 32,
	x: -100,
	y: -200,
	frame: 0,
	onScreen: 0,
	
	draw: function(){
		if(this.onScreen == 1){
			ctx.globalAlpha = Alpha*0.25;
			ctx.fillStyle = this.color;
			ctx.fillRect(this.x - this.width * 0.5, this.y - this.height * 0.5,	this.width, this.height);
			ctx.globalAlpha = Alpha;
		}
	},
	
	move: function(){
		if(this.frame <= 10 && this.onScreen == 1){
			this.width = this.width + 2*this.frame;
			this.height = this.height + 2*this.frame;
			this.frame++;
			for (E in AllEnemies){
				if(collision(AllEnemies[E].dir, AllEnemies[E], this) || contained(this, AllEnemies[E])){
					AllEnemies[E].speed = AllEnemies[E].speed2;
				}
			}
		}
		else if(this.frame < 90 && this.onScreen == 1){
			this.frame++;
			for (E in AllEnemies){
				if(collision(AllEnemies[E].dir, AllEnemies[E], this) || contained(this, AllEnemies[E])){
					AllEnemies[E].speed = AllEnemies[E].speed2;
				}
			}
		}
		if(this.frame >= 90 && this.onScreen == 1){
			for (E in AllEnemies){
				AllEnemies[E].speed = AllEnemies[E].speed2 * 2;
			}
			this.onScreen = 0;
			this.frame = 0;
			this.width = 32;
			this.height = 32;
		}
	}
};
var IBubble6 = {
	color: "#00CCFF",
	timeLeft: 0,
	width: 32,
	height: 32,
	x: -100,
	y: -200,
	frame: 0,
	onScreen: 0,
	
	draw: function(){
		if(this.onScreen == 1){
			ctx.globalAlpha = Alpha*0.25;
			ctx.fillStyle = this.color;
			ctx.fillRect(this.x - this.width * 0.5, this.y - this.height * 0.5,	this.width, this.height);
			ctx.globalAlpha = Alpha;
		}
	},
	
	move: function(){
		if(this.frame <= 10 && this.onScreen == 1){
			this.width = this.width + 2*this.frame;
			this.height = this.height + 2*this.frame;
			this.frame++;
			for (E in AllEnemies){
				if(collision(AllEnemies[E].dir, AllEnemies[E], this) || contained(this, AllEnemies[E])){
					AllEnemies[E].speed = AllEnemies[E].speed2;
				}
			}
		}
		else if(this.frame < 90 && this.onScreen == 1){
			this.frame++;
			for (E in AllEnemies){
				if(collision(AllEnemies[E].dir, AllEnemies[E], this) || contained(this, AllEnemies[E])){
					AllEnemies[E].speed = AllEnemies[E].speed2;
				}
			}
		}
		if(this.frame >= 90 && this.onScreen == 1){
			for (E in AllEnemies){
				AllEnemies[E].speed = AllEnemies[E].speed2 * 2;
			}
			this.onScreen = 0;
			this.frame = 0;
			this.width = 32;
			this.height = 32;
		}
	}
};
var IBubble7 = {
	color: "#00CCFF",
	timeLeft: 0,
	width: 32,
	height: 32,
	x: -100,
	y: -200,
	frame: 0,
	onScreen: 0,
	
	draw: function(){
		if(this.onScreen == 1){
			ctx.globalAlpha = Alpha*0.25;
			ctx.fillStyle = this.color;
			ctx.fillRect(this.x - this.width * 0.5, this.y - this.height * 0.5,	this.width, this.height);
			ctx.globalAlpha = Alpha;
		}
	},
	
	move: function(){
		if(this.frame <= 10 && this.onScreen == 1){
			this.width = this.width + 2*this.frame;
			this.height = this.height + 2*this.frame;
			this.frame++;
			for (E in AllEnemies){
				if(collision(AllEnemies[E].dir, AllEnemies[E], this) || contained(this, AllEnemies[E])){
					AllEnemies[E].speed = AllEnemies[E].speed2;
				}
			}
		}
		else if(this.frame < 90 && this.onScreen == 1){
			this.frame++;
			for (E in AllEnemies){
				if(collision(AllEnemies[E].dir, AllEnemies[E], this) || contained(this, AllEnemies[E])){
					AllEnemies[E].speed = AllEnemies[E].speed2;
				}
			}
		}
		if(this.frame >= 90 && this.onScreen == 1){
			for (E in AllEnemies){
				AllEnemies[E].speed = AllEnemies[E].speed2 * 2;
			}
			this.onScreen = 0;
			this.frame = 0;
			this.width = 32;
			this.height = 32;
		}
	}
};
var IBubble8 = {
	color: "#00CCFF",
	timeLeft: 0,
	width: 32,
	height: 32,
	x: -100,
	y: -200,
	frame: 0,
	onScreen: 0,
	
	draw: function(){
		if(this.onScreen == 1){
			ctx.globalAlpha = Alpha*0.25;
			ctx.fillStyle = this.color;
			ctx.fillRect(this.x - this.width * 0.5, this.y - this.height * 0.5,	this.width, this.height);
			ctx.globalAlpha = Alpha;
		}
	},
	
	move: function(){
		if(this.frame <= 10 && this.onScreen == 1){
			this.width = this.width + 2*this.frame;
			this.height = this.height + 2*this.frame;
			this.frame++;
			for (E in AllEnemies){
				if(collision(AllEnemies[E].dir, AllEnemies[E], this) || contained(this, AllEnemies[E])){
					AllEnemies[E].speed = AllEnemies[E].speed2;
				}
			}
		}
		else if(this.frame < 90 && this.onScreen == 1){
			this.frame++;
			for (E in AllEnemies){
				if(collision(AllEnemies[E].dir, AllEnemies[E], this) || contained(this, AllEnemies[E])){
					AllEnemies[E].speed = AllEnemies[E].speed2;
				}
			}
		}
		if(this.frame >= 90 && this.onScreen == 1){
			for (E in AllEnemies){
				AllEnemies[E].speed = AllEnemies[E].speed2 * 2;
			}
			this.onScreen = 0;
			this.frame = 0;
			this.width = 32;
			this.height = 32;
		}
	}
};
var IBubbles = {1: IBubble, 2: IBubble2, 3: IBubble3, 4: IBubble4, 5: IBubble5, 6: IBubble6, 7: IBubble7, 8: IBubble8};
// Shield and Heal: Heals user by 1 and casts Bubble Ring
var waterearth = {
	cd: 0,
	cdTop: 1020,
	tick: function(){
		if(this.cd > 0){
			this.cd-=1;
		}
	},
	shoot: function(){
		if(this.cd == 0){
			var currentEarthcd = earth.cd;
			var currentWatercd = water.cd;
			this.cd = this.cdTop;
			water.cd = 0;
			earth.cd = 0;
			water.shoot();
			earth.shoot();
			water.cd = currentWatercd;
			earth.cd = currentEarthcd;
			water.cast = 20;
		}
	}	
};
// Water Blast: Shoots out an array of bubbles that damage enemies. They return to the caster.
var waterair = {
	x: -100,
	y: -200,
	cd: 0,
	cdTop: 150,
	onScreen: 0,
	frame: 0,
	mode: 0,
	
	draw: function(){
		this.x = player.x;
		this.y = player.y;
		if(this.cd > 0){
			this.cd-=1;
		}
	},
	shoot: function(){
		if(this.cd == 0){
			for(W in wairParticles){
				wairParticles[W].onScreen = 1;
				wairParticles[W].x = this.x;
				wairParticles[W].y = this.y;
				wairParticles[W].dir = wairParticles[W].mdir;
			}
			this.cd = this.cdTop;
			this.frame = 0;
			this.onScreen = 1;
			longpew.currentTime=0;
			longpew.play();
		}
	}
};	
var wairParticleW = {
	x: -100,
	y: -200,
	width: 32,
	height: 32,
	dir: "W",
	mdir: "W",
	speed: 12,
	dirct: 15,
	onScreen: 0,
	
	draw: function(){
		if(this.onScreen == 1){
			ctx.drawImage(Bubble, this.x - this.width * 0.5, this.y - this.height * 0.5);
		}
	},
	onHit: function(){
	if(this.onScreen == 1){
		if(collision(this.dir, this, player) && this.dirct == 0){
			this.x = -100;
			this.y = -200;
			this.dir = "W";
			this.dirct = 15;
			this.onScreen = 0;
		}
		for(E in AllEnemies){
			if(collision(this.dir, this, AllEnemies[E]) || collision(AllEnemies[E].dir, AllEnemies[E], this)){
				onHit(AllEnemies[E]);
			}
		}
		for(O in obstacle1){
			if(collision(this.dir, this, obstacle1[O])){
				obsHit(obstacle1[O]);
			}
		}
		for(O in obstacle2){
			if(collision(this.dir, this, obstacle2[O])){
				obsHit(obstacle2[O]);
			}
		}
		for(O in obstacle3){
			if(collision(this.dir, this, obstacle3[O])){
				obsHit(obstacle3[O]);
			}
		}
	}
	}
};	
var wairParticleA = {
	x: -100,
	y: -200,
	width: 32,
	height: 32,
	dir: "A",
	mdir: "A",
	speed: 12,
	dirct: 15,
	onScreen: 0,
	
	draw: function(){
		if(this.onScreen == 1){
			ctx.drawImage(Bubble, this.x - this.width * 0.5, this.y - this.height * 0.5);
		}
	},
	onHit: function(){
	if(this.onScreen == 1){
		if(collision(this.dir, this, player) && this.dirct == 0){
			this.x = -100;
			this.y = -200;
			this.dir = "A";
			this.dirct = 15;
			this.onScreen = 0;
		}
		for(E in AllEnemies){
			if(collision(this.dir, this, AllEnemies[E]) || collision(AllEnemies[E].dir, AllEnemies[E], this)){
				onHit(AllEnemies[E]);
			}
		}
		for(O in obstacle1){
			if(collision(this.dir, this, obstacle1[O])){
				obsHit(obstacle1[O]);
			}
		}
		for(O in obstacle2){
			if(collision(this.dir, this, obstacle2[O])){
				obsHit(obstacle2[O]);
			}
		}
		for(O in obstacle3){
			if(collision(this.dir, this, obstacle3[O])){
				obsHit(obstacle3[O]);
			}
		}
	}
	}
};	
var wairParticleS = {
	type: 0,
	x: -100,
	y: -200,
	width: 32,
	height: 32,
	dir: "S",
	mdir: "S",
	speed: 12,
	dirct: 15,
	onScreen: 0,
	
	draw: function(){
		if(this.onScreen == 1){
			ctx.drawImage(Bubble, this.x - this.width * 0.5, this.y - this.height * 0.5);
		}
	},
	onHit: function(){
	if(this.onScreen == 1){
		if(collision(this.dir, this, player) && this.dirct == 0){
			this.x = -100;
			this.y = -200;
			this.dir = "A";
			this.dirct = 15;
			this.onScreen = 0;
		}
		for(E in AllEnemies){
			if(collision(this.dir, this, AllEnemies[E]) || collision(AllEnemies[E].dir, AllEnemies[E], this)){
				onHit(AllEnemies[E]);
			}
		}
		for(O in obstacle1){
			if(collision(this.dir, this, obstacle1[O])){
				obsHit(obstacle1[O]);
			}
		}
		for(O in obstacle2){
			if(collision(this.dir, this, obstacle2[O])){
				obsHit(obstacle2[O]);
			}
		}
		for(O in obstacle3){
			if(collision(this.dir, this, obstacle3[O])){
				obsHit(obstacle3[O]);
			}
		}
	}
	}
};	
var wairParticleD = {
	type: 0,
	x: -100,
	y: -200,
	width: 32,
	height: 32,
	dir: "D",
	mdir: "D",
	speed: 12,
	dirct: 15,
	onScreen: 0,
	
	draw: function(){
		if(this.onScreen == 1){
			ctx.drawImage(Bubble, this.x - this.width * 0.5, this.y - this.height * 0.5);
		}
	},
	onHit: function(){
	if(this.onScreen == 1){
		if(collision(this.dir, this, player) && this.dirct == 0){
			this.x = -100;
			this.y = -200;
			this.dir = "A";
			this.dirct = 15;
			this.onScreen = 0;
		}
		for(E in AllEnemies){
			if(collision(this.dir, this, AllEnemies[E]) || collision(AllEnemies[E].dir, AllEnemies[E], this)){
				onHit(AllEnemies[E]);
			}
		}
		for(O in obstacle1){
			if(collision(this.dir, this, obstacle1[O])){
				obsHit(obstacle1[O]);
			}
		}
		for(O in obstacle2){
			if(collision(this.dir, this, obstacle2[O])){
				obsHit(obstacle2[O]);
			}
		}
		for(O in obstacle3){
			if(collision(this.dir, this, obstacle3[O])){
				obsHit(obstacle3[O]);
			}
		}
	}
	}
};	
var wairParticleWA = {
	type: 0,
	x: -100,
	y: -200,
	width: 32,
	height: 32,
	dir: "WA",
	mdir: "WA",
	speed: 12,
	dirct: 15,
	onScreen: 0,
	
	draw: function(){
		if(this.onScreen == 1){
			ctx.drawImage(Bubble, this.x - this.width * 0.5, this.y - this.height * 0.5);
		}
	},
	onHit: function(){
	if(this.onScreen == 1){
		if(collision(this.dir, this, player) && this.dirct == 0){
			this.x = -100;
			this.y = -200;
			this.dir = "A";
			this.dirct = 15;
			this.onScreen = 0;
		}
		for(E in AllEnemies){
			if(collision(this.dir, this, AllEnemies[E]) || collision(AllEnemies[E].dir, AllEnemies[E], this)){
				onHit(AllEnemies[E]);
			}
		}
		for(O in obstacle1){
			if(collision(this.dir, this, obstacle1[O])){
				obsHit(obstacle1[O]);
			}
		}
		for(O in obstacle2){
			if(collision(this.dir, this, obstacle2[O])){
				obsHit(obstacle2[O]);
			}
		}
		for(O in obstacle3){
			if(collision(this.dir, this, obstacle3[O])){
				obsHit(obstacle3[O]);
			}
		}
	}
	}
};	
var wairParticleWD = {
	type: 0,
	x: -100,
	y: -200,
	width: 32,
	height: 32,
	dir: "WD",
	mdir: "WD",
	speed: 12,
	dirct: 15,
	onScreen: 0,
	
	draw: function(){
		if(this.onScreen == 1){
			ctx.drawImage(Bubble, this.x - this.width * 0.5, this.y - this.height * 0.5);
		}
	},
	onHit: function(){
	if(this.onScreen == 1){
		if(collision(this.dir, this, player) && this.dirct == 0){
			this.x = -100;
			this.y = -200;
			this.dir = "A";
			this.dirct = 15;
			this.onScreen = 0;
		}
		for(E in AllEnemies){
			if(collision(this.dir, this, AllEnemies[E]) || collision(AllEnemies[E].dir, AllEnemies[E], this)){
				onHit(AllEnemies[E]);
			}
		}
		for(O in obstacle1){
			if(collision(this.dir, this, obstacle1[O])){
				obsHit(obstacle1[O]);
			}
		}
		for(O in obstacle2){
			if(collision(this.dir, this, obstacle2[O])){
				obsHit(obstacle2[O]);
			}
		}
		for(O in obstacle3){
			if(collision(this.dir, this, obstacle3[O])){
				obsHit(obstacle3[O]);
			}
		}
	}
	}
};	
var wairParticleAS = {
	type: 0,
	x: -100,
	y: -200,
	width: 32,
	height: 32,
	dir: "AS",
	mdir: "AS",
	speed: 12,
	dirct: 15,
	onScreen: 0,
	
	draw: function(){
		if(this.onScreen == 1){
			ctx.drawImage(Bubble, this.x - this.width * 0.5, this.y - this.height * 0.5);
		}
	},
	onHit: function(){
	if(this.onScreen == 1){
		if(collision(this.dir, this, player) && this.dirct == 0){
			this.x = -100;
			this.y = -200;
			this.dir = "A";
			this.dirct = 15;
			this.onScreen = 0;
		}
		for(E in AllEnemies){
			if(collision(this.dir, this, AllEnemies[E]) || collision(AllEnemies[E].dir, AllEnemies[E], this)){
				onHit(AllEnemies[E]);
			}
		}
		for(O in obstacle1){
			if(collision(this.dir, this, obstacle1[O])){
				obsHit(obstacle1[O]);
			}
		}
		for(O in obstacle2){
			if(collision(this.dir, this, obstacle2[O])){
				obsHit(obstacle2[O]);
			}
		}
		for(O in obstacle3){
			if(collision(this.dir, this, obstacle3[O])){
				obsHit(obstacle3[O]);
			}
		}
	}
	}
};	
var wairParticleSD = {
	type: 0,
	x: -100,
	y: -200,
	width: 32,
	height: 32,
	dir: "SD",
	mdir: "SD",
	speed: 12,
	dirct: 15,
	onScreen: 0,
	
	draw: function(){
		if(this.onScreen == 1){
			ctx.drawImage(Bubble, this.x - this.width * 0.5, this.y - this.height * 0.5);
		}
	},
	onHit: function(){
	if(this.onScreen == 1){
		if(collision(this.dir, this, player) && this.dirct == 0){
			this.x = -100;
			this.y = -200;
			this.dir = "A";
			this.dirct = 15;
			this.onScreen = 0;
		}
		for(E in AllEnemies){
			if(collision(this.dir, this, AllEnemies[E]) || collision(AllEnemies[E].dir, AllEnemies[E], this)){
				onHit(AllEnemies[E]);
			}
		}
		for(O in obstacle1){
			if(collision(this.dir, this, obstacle1[O])){
				obsHit(obstacle1[O]);
			}
		}
		for(O in obstacle2){
			if(collision(this.dir, this, obstacle2[O])){
				obsHit(obstacle2[O]);
			}
		}
		for(O in obstacle3){
			if(collision(this.dir, this, obstacle3[O])){
				obsHit(obstacle3[O]);
			}
		}
	}
	}
};	
var wairParticles = {1: wairParticleW, 2: wairParticleA, 3: wairParticleS, 4: wairParticleD, 5: wairParticleWA, 6: wairParticleWD, 7: wairParticleAS, 8: wairParticleSD};
var waterlightning = {
	onScreen: 0,
	cd: 0,
	cdTop: 750,
	tick: function(){
		if(this.cd > 0){
			this.cd-=1;
		}
		if(!Wpool.onScreen && !Wpool2.onScreen && !Wpool3.onScreen && !Wpool4.onScreen && !Wpool5.onScreen
		&& !Wpool6.onScreen && !Wpool7.onScreen){
			this.onScreen = 0;
			for(w in Wpools){
				Wpools[w].used = false;
			}
		}
		if(this.onScreen){
			for(w in Wpools){
				wpool_draw(Wpools[w]);
				wpool_move(Wpools[w]);
			}
		}
	},
	shoot: function(){
		if(this.cd == 0){
			this.onScreen = 1;
			if(!Wpool.onScreen && !Wpool.used){
				SpawnerSpawn.currentTime=0;
				SpawnerSpawn.play();
				Wpool.onScreen = 1;
				Wpool.timeLeft = 210;
				Wpool.x = player.x;
				Wpool.y = player.y;
				Wpool.used = true;
			}
			this.cd = this.cdTop;
		}
	}
};
var Wpool = {
	color: "#0000FF",
	color2: "#FFFF00",
	timeLeft: 0,
	width: 32,
	height: 32,
	x: -100,
	y: -200,
	frame: 0,
	used: false,
	onScreen: 0,
	charged: 0
};
var Wpool2 = {
	color: "#0000FF",
	color2: "#FFFF00",
	timeLeft: 0,
	width: 32,
	height: 32,
	x: -100,
	y: -200,
	frame: 0,
	used: false,
	onScreen: 0,
	charged: 0
};
var Wpool3 = {
	color: "#0000FF",
	color2: "#FFFF00",
	timeLeft: 0,
	width: 32,
	height: 32,
	x: -100,
	y: -200,
	frame: 0,
	used: false,
	onScreen: 0,
	charged: 0
};
var Wpool4 = {
	color: "#0000FF",
	color2: "#FFFF00",
	timeLeft: 0,
	width: 32,
	height: 32,
	x: -100,
	y: -200,
	frame: 0,
	used: false,
	onScreen: 0,
	charged: 0
};
var Wpool5 = {
	color: "#0000FF",
	color2: "#FFFF00",
	timeLeft: 0,
	width: 32,
	height: 32,
	x: -100,
	y: -200,
	frame: 0,
	used: false,
	onScreen: 0,
	charged: 0
};
var Wpool6 = {
	color: "#0000FF",
	color2: "#FFFF00",
	timeLeft: 0,
	width: 32,
	height: 32,
	x: -100,
	y: -200,
	frame: 0,
	used: false,
	onScreen: 0,
	charged: 0
};
var Wpool7 = {
	color: "#0000FF",
	color2: "#FFFF00",
	timeLeft: 0,
	width: 32,
	height: 32,
	x: -100,
	y: -200,
	frame: 0,
	used: false,
	onScreen: 0,
	charged: 0
};
//draw water pool
function wpool_draw(p){
	if(p.onScreen == 1){
		if(p.charged == 1){
			if(p.frame*0.5 != Math.round(p.frame*0.5)){
				ctx.fillStyle = p.color2;
			}
			else{
				ctx.fillStyle = p.color;
			}
		}
		else{
			ctx.fillStyle = p.color;
		}
		ctx.globalAlpha = Alpha*0.25;
		ctx.fillRect(p.x - p.width * 0.5, p.y - p.height * 0.5,	p.width, p.height);
		ctx.globalAlpha = Alpha;
	}
}
//increment/collisions for water pool
function wpool_move(p){
	if(contained(player, p)){
		p.charged = 1;
		longlaser.play();
	}
	else{
		p.charged = 0;
	}
	if((p.frame <= 10 || p.frame < 210) && p.onScreen == 1){
		if(p.frame<=10){
			p.width = p.width + 2*p.frame;
			p.height = p.height + 2*p.frame;
		}
		p.frame++;
		if(p.charged == 1){
			for (E in AllEnemies){
				if(collision(AllEnemies[E].dir, AllEnemies[E], p) || contained(p, AllEnemies[E])){
					if(!Wpool2.onScreen && !Wpool2.used){
						SpawnerSpawn.currentTime=0;
						SpawnerSpawn.play();
						Wpool2.onScreen = 1;
						Wpool2.timeLeft = 210;
						Wpool2.used = true;
						Wpool2.x = AllEnemies[E].x;
						Wpool2.y = AllEnemies[E].y;
					}
					else if(!Wpool3.onScreen && !Wpool3.used){
						SpawnerSpawn.currentTime=0;
						SpawnerSpawn.play();
						Wpool3.onScreen = 1;
						Wpool3.timeLeft = 210;
						Wpool3.used = true;
						Wpool3.x = AllEnemies[E].x;
						Wpool3.y = AllEnemies[E].y;
					}
					else if(!Wpool4.onScreen && !Wpool4.used){
						SpawnerSpawn.currentTime=0;
						SpawnerSpawn.play();
						Wpool4.onScreen = 1;
						Wpool4.timeLeft = 210;
						Wpool4.used = true;
						Wpool4.x = AllEnemies[E].x;
						Wpool4.y = AllEnemies[E].y;
					}
					else if(!Wpool5.onScreen && !Wpool5.used){
						SpawnerSpawn.currentTime=0;
						SpawnerSpawn.play();
						Wpool5.onScreen = 1;
						Wpool5.timeLeft = 210;
						Wpool5.used = true;
						Wpool5.x = AllEnemies[E].x;
						Wpool5.y = AllEnemies[E].y;
					}
					else if(!Wpool6.onScreen && !Wpool6.used){
						SpawnerSpawn.currentTime=0;
						SpawnerSpawn.play();
						Wpool6.onScreen = 1;
						Wpool6.timeLeft = 210;
						Wpool6.used = true;
						Wpool6.x = AllEnemies[E].x;
						Wpool6.y = AllEnemies[E].y;
					}
					else if(!Wpool7.onScreen && !Wpool7.used){
						SpawnerSpawn.currentTime=0;
						SpawnerSpawn.play();
						Wpool7.onScreen = 1;
						Wpool7.timeLeft = 210;
						Wpool7.used = true;
						Wpool7.x = AllEnemies[E].x;
						Wpool7.y = AllEnemies[E].y;
					}
					onHit(AllEnemies[E]);
				}
			}
		}
	}
	if(p.frame >= 210 && p.onScreen == 1){
		p.onScreen = 0;
		p.frame = 0;
		p.width = 32;
		p.height = 32;
		p.charged = 0;
		p.x = -200;
		p.y = -100;
	}
}
var Wpools = {1: Wpool, 2: Wpool2, 3: Wpool3, 4: Wpool4, 5: Wpool5, 6: Wpool6, 7: Wpool7};
// Flame Trap: Drops 2 dmg explosion trap on player's location
var darkfire = {
	x: -100,
	y: -200,
	width: 32,
	height: 32,
	cd: 0,
	cdTop: 30,
	onScreen: 0,
	used: 0,
	inventory: 5,
	index: 0,
	ice: false,
	light: false,
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
			else if(darkfire12.onScreen == 0){
				darkfire12.x = player.x;
				darkfire12.y = player.y;
				this.cd = this.cdTop;
				darkfire12.onScreen = 1;
				darkfire12.used = 0;
			}
			else if(darkfire13.onScreen == 0){
				darkfire13.x = player.x;
				darkfire13.y = player.y;
				this.cd = this.cdTop;
				darkfire13.onScreen = 1;
				darkfire13.used = 0;
			}
			else if(darkfire14.onScreen == 0){
				darkfire14.x = player.x;
				darkfire14.y = player.y;
				this.cd = this.cdTop;
				darkfire14.onScreen = 1;
				darkfire14.used = 0;
			}
			else if(darkfire15.onScreen == 0){
				darkfire15.x = player.x;
				darkfire15.y = player.y;
				this.cd = this.cdTop;
				darkfire15.onScreen = 1;
				darkfire15.used = 0;
			}
		}
	}
};
var darkfire12 = {
	x: -100,
	y: -200,
	width: 32,
	height: 32,
	onScreen: 0,
	used: 0,
	index: 0,
	ice: false,
	light: false
}	
var darkfire13 = {
	x: -100,
	y: -200,
	width: 32,
	height: 32,
	onScreen: 0,
	used: 0,
	index: 0,
	ice: false,
	light: false
}
var darkfire14 = {
	x: -100,
	y: -200,
	width: 32,
	height: 32,
	onScreen: 0,
	used: 0,
	index: 0,
	ice: false,
	light: false
}
var darkfire15 = {
	x: -100,
	y: -200,
	width: 32,
	height: 32,
	onScreen: 0,
	used: 0,
	index: 0,
	ice: false,
	light: false
}
var darkfireExplosion = {
	color: "#FF6600",
	x: -100,
	y: -200,
	timeLeft: 0,
	width: 32,
	height: 32,
	frame: 0,
	onScreen: 0,
	used: 0,
	
	draw: function(){
		if(this.onScreen == 1){
			if(this.used == 0){
				Explosion.currentTime=0;
				Explosion.play();
				this.used = 1;
			}
			ctx.globalAlpha = Alpha*0.5;
			if(this.frame*0.5 != Math.round(this.frame*0.5)){
				ctx.fillStyle = "#CC0000";
			}
			else{
				ctx.fillStyle = this.color;
			}
			ctx.fillRect(this.x - this.width * 0.5,
			this.y - this.height * 0.5,
			this.width, this.height);
			ctx.globalAlpha = Alpha;
		}
	},
	move: function(){
		if(this.frame == 20){
			this.x = -100;
			this.y = -200;
			this.width = 32;
			this.height = 32;
			this.onScreen = 0;
		}
		else if(this.onScreen ==1){
			this.width = 32 + (8*this.frame);
			this.height = 32 + (8*this.frame);
			this.frame++;
			for (E in AllEnemies){
				if(contained(AllEnemies[E], this)){
					player.currpower = player.power;
					player.power+=1;
					onHit(AllEnemies[E]);
					player.power = player.currpower;
				}
			}
			for (O in obstacle1){
				if(contained(obstacle1[O], this)){
					player.currpower = player.power;
					player.power+=1;
					obsHit(obstacle1[O]);
					player.power = player.currpower;
				}
			}
			for (O in obstacle2){
				if(contained(obstacle2[O], this)){
					player.currpower = player.power;
					player.power+=1;
					obsHit(obstacle2[O]);
					player.power = player.currpower;
				}
			}
			for (O in obstacle3){
				if(contained(obstacle3[O], this)){
					player.currpower = player.power;
					player.power+=1;
					obsHit(obstacle3[O]);
					player.power = player.currpower;
				}
			}
		}
	},
	// Spawn
	shoot: function(){
		this.height = 32;
		this.width = 32;
		this.frame = 0;
		this.onScreen = 1;
		this.used = 0;
	}
};
var darkfireExplosion2 = {
	color: "#FF6600",
	x: -100,
	y: -200,
	timeLeft: 0,
	width: 32,
	height: 32,
	frame: 0,
	onScreen: 0,
	used: 0,
	
	draw: function(){
		if(this.onScreen == 1){
			if(this.used == 0){
				Explosion.currentTime=0;
				Explosion.play();
				this.used = 1;
			}
			ctx.globalAlpha = Alpha*0.5;
			if(this.frame*0.5 != Math.round(this.frame*0.5)){
				ctx.fillStyle = "#CC0000";
			}
			else{
				ctx.fillStyle = this.color;
			}
			ctx.fillRect(this.x - this.width * 0.5,
			this.y - this.height * 0.5,
			this.width, this.height);
			ctx.globalAlpha = Alpha;
		}
	},
	move: function(){
		if(this.frame == 20){
			this.x = -100;
			this.y = -200;
			this.width = 32;
			this.height = 32;
			this.onScreen = 0;
		}
		else if(this.onScreen ==1){
			this.width = 32 + (8*this.frame);
			this.height = 32 + (8*this.frame);
			this.frame++;
			for (E in AllEnemies){
				if(contained(AllEnemies[E], this)){
					player.currpower = player.power;
					player.power+=1;
					onHit(AllEnemies[E]);
					player.power = player.currpower;
				}
			}
			for (O in obstacle1){
				if(contained(obstacle1[O], this)){
					player.currpower = player.power;
					player.power+=1;
					obsHit(obstacle1[O]);
					player.power = player.currpower;
				}
			}
			for (O in obstacle2){
				if(contained(obstacle2[O], this)){
					player.currpower = player.power;
					player.power+=1;
					obsHit(obstacle2[O]);
					player.power = player.currpower;
				}
			}
			for (O in obstacle3){
				if(contained(obstacle3[O], this)){
					player.currpower = player.power;
					player.power+=1;
					obsHit(obstacle3[O]);
					player.power = player.currpower;
				}
			}
		}
	},
	// Spawn
	shoot: function(){
		this.height = 32;
		this.width = 32;
		this.frame = 0;
		this.onScreen = 1;
		this.used = 0;
	}
};
var darkfireExplosion3 = {
	color: "#FF6600",
	x: -100,
	y: -200,
	timeLeft: 0,
	width: 32,
	height: 32,
	frame: 0,
	onScreen: 0,
	used: 0,
	
	draw: function(){
		if(this.onScreen == 1){
			if(this.used == 0){
				Explosion.currentTime=0;
				Explosion.play();
				this.used = 1;
			}
			ctx.globalAlpha = Alpha*0.5;
			if(this.frame*0.5 != Math.round(this.frame*0.5)){
				ctx.fillStyle = "#CC0000";
			}
			else{
				ctx.fillStyle = this.color;
			}
			ctx.fillRect(this.x - this.width * 0.5,
			this.y - this.height * 0.5,
			this.width, this.height);
			ctx.globalAlpha = Alpha;
		}
	},
	move: function(){
		if(this.frame == 20){
			this.x = -100;
			this.y = -200;
			this.width = 32;
			this.height = 32;
			this.onScreen = 0;
		}
		else if(this.onScreen ==1){
			this.width = 32 + (8*this.frame);
			this.height = 32 + (8*this.frame);
			this.frame++;
			for (E in AllEnemies){
				if(contained(AllEnemies[E], this)){
					player.currpower = player.power;
					player.power+=1;
					onHit(AllEnemies[E]);
					player.power = player.currpower;
				}
			}
			for (O in obstacle1){
				if(contained(obstacle1[O], this)){
					player.currpower = player.power;
					player.power+=1;
					obsHit(obstacle1[O]);
					player.power = player.currpower;
				}
			}
			for (O in obstacle2){
				if(contained(obstacle2[O], this)){
					player.currpower = player.power;
					player.power+=1;
					obsHit(obstacle2[O]);
					player.power = player.currpower;
				}
			}
			for (O in obstacle3){
				if(contained(obstacle3[O], this)){
					player.currpower = player.power;
					player.power+=1;
					obsHit(obstacle3[O]);
					player.power = player.currpower;
				}
			}
		}
	},
	// Spawn
	shoot: function(){
		this.height = 32;
		this.width = 32;
		this.frame = 0;
		this.onScreen = 1;
		this.used = 0;
	}
};
var darkfireExplosion4 = {
	color: "#FF6600",
	x: -100,
	y: -200,
	timeLeft: 0,
	width: 32,
	height: 32,
	frame: 0,
	onScreen: 0,
	used: 0,
	
	draw: function(){
		if(this.onScreen == 1){
			if(this.used == 0){
				Explosion.currentTime=0;
				Explosion.play();
				this.used = 1;
			}
			ctx.globalAlpha = Alpha*0.5;
			if(this.frame*0.5 != Math.round(this.frame*0.5)){
				ctx.fillStyle = "#CC0000";
			}
			else{
				ctx.fillStyle = this.color;
			}
			ctx.fillRect(this.x - this.width * 0.5,
			this.y - this.height * 0.5,
			this.width, this.height);
			ctx.globalAlpha = Alpha;
		}
	},
	move: function(){
		if(this.frame == 20){
			this.x = -100;
			this.y = -200;
			this.width = 32;
			this.height = 32;
			this.onScreen = 0;
		}
		else if(this.onScreen ==1){
			this.width = 32 + (8*this.frame);
			this.height = 32 + (8*this.frame);
			this.frame++;
			for (E in AllEnemies){
				if(contained(AllEnemies[E], this)){
					player.currpower = player.power;
					player.power+=1;
					onHit(AllEnemies[E]);
					player.power = player.currpower;
				}
			}
			for (O in obstacle1){
				if(contained(obstacle1[O], this)){
					player.currpower = player.power;
					player.power+=1;
					obsHit(obstacle1[O]);
					player.power = player.currpower;
				}
			}
			for (O in obstacle2){
				if(contained(obstacle2[O], this)){
					player.currpower = player.power;
					player.power+=1;
					obsHit(obstacle2[O]);
					player.power = player.currpower;
				}
			}
			for (O in obstacle3){
				if(contained(obstacle3[O], this)){
					player.currpower = player.power;
					player.power+=1;
					obsHit(obstacle3[O]);
					player.power = player.currpower;
				}
			}
		}
	},
	// Spawn
	shoot: function(){
		this.height = 32;
		this.width = 32;
		this.frame = 0;
		this.onScreen = 1;
		this.used = 0;
	}
};
var darkfireExplosion5 = {
	color: "#FF6600",
	x: -100,
	y: -200,
	timeLeft: 0,
	width: 32,
	height: 32,
	frame: 0,
	onScreen: 0,
	used: 0,
	
	draw: function(){
		if(this.onScreen == 1){
			if(this.used == 0){
				Explosion.currentTime=0;
				Explosion.play();
				this.used = 1;
			}
			ctx.globalAlpha = Alpha*0.5;
			if(this.frame*0.5 != Math.round(this.frame*0.5)){
				ctx.fillStyle = "#CC0000";
			}
			else{
				ctx.fillStyle = this.color;
			}
			ctx.fillRect(this.x - this.width * 0.5,
			this.y - this.height * 0.5,
			this.width, this.height);
			ctx.globalAlpha = Alpha;
		}
	},
	move: function(){
		if(this.frame == 20){
			this.x = -100;
			this.y = -200;
			this.width = 32;
			this.height = 32;
			this.onScreen = 0;
		}
		else if(this.onScreen ==1){
			this.width = 32 + (8*this.frame);
			this.height = 32 + (8*this.frame);
			this.frame++;
			for (E in AllEnemies){
				if(contained(AllEnemies[E], this)){
					player.currpower = player.power;
					player.power+=1;
					onHit(AllEnemies[E]);
					player.power = player.currpower;
				}
			}
			for (O in obstacle1){
				if(contained(obstacle1[O], this)){
					player.currpower = player.power;
					player.power+=1;
					obsHit(obstacle1[O]);
					player.power = player.currpower;
				}
			}
			for (O in obstacle2){
				if(contained(obstacle2[O], this)){
					player.currpower = player.power;
					player.power+=1;
					obsHit(obstacle2[O]);
					player.power = player.currpower;
				}
			}
			for (O in obstacle3){
				if(contained(obstacle3[O], this)){
					player.currpower = player.power;
					player.power+=1;
					obsHit(obstacle3[O]);
					player.power = player.currpower;
				}
			}
		}
	},
	// Spawn
	shoot: function(){
		this.height = 32;
		this.width = 32;
		this.frame = 0;
		this.onScreen = 1;
		this.used = 0;
	}
};
var darkfireSpikes = {1: darkfire, 2: darkfire12, 3: darkfire13, 4: darkfire14, 5: darkfire15};
var darkfireExplosions = {1: darkfireExplosion, 2: darkfireExplosion2, 3: darkfireExplosion3, 4: darkfireExplosion4, 5: darkfireExplosion5};
//moves fire and ice
function firespikeMove(S){
	if(S.cd > 0){
		S.cd-=1;
	}
	else if(S.onScreen == 1){
		for (E in AllEnemies){
			if(collision(AllEnemies[E].dir, AllEnemies[E], S) || contained(AllEnemies[E], S) && AllEnemies[E].onTree == 0){
				if(!S.ice && !S.light){
					player.currpower = player.power;
					player.power+=1;
					onHit(AllEnemies[E]);
					player.power = player.currpower;
					if(darkfireExplosion.onScreen == 0){
						darkfireExplosion.x = S.x;
						darkfireExplosion.y = S.y;
						darkfireExplosion.shoot();
					}
					else if(darkfireExplosion2.onScreen == 0){
						darkfireExplosion2.x = S.x;
						darkfireExplosion2.y = S.y;
						darkfireExplosion2.shoot();
					}
					else if(darkfireExplosion3.onScreen == 0){
						darkfireExplosion3.x = S.x;
						darkfireExplosion3.y = S.y;
						darkfireExplosion3.shoot();
					}
					else if(darkfireExplosion4.onScreen == 0){
						darkfireExplosion4.x = S.x;
						darkfireExplosion4.y = S.y;
						darkfireExplosion4.shoot();
					}
					else if(darkfireExplosion5.onScreen == 0){
						darkfireExplosion5.x = S.x;
						darkfireExplosion5.y = S.y;
						darkfireExplosion5.shoot();
					}
					S.onScreen = 0;
					S.x = -100;
					S.y = -200;
					darkfire.inventory+=1;
				}
				if(S.light && S.active){
					player.currpower = player.power;
					player.power+=1;
					onHit(AllEnemies[E]);
					player.power = player.currpower;
				}
				else if(S.light && !S.active){
					player.currpower = player.power;
					player.power+=1;
					onHit(AllEnemies[E]);
					player.power = player.currpower;
					if(S == darklightning){
						darklightningExplosion.x = S.x;
						darklightningExplosion.y = S.y;
						darklightningExplosion.shoot();
					}
					else if(S == darklightning12){
						darklightningExplosion6.x = S.x;
						darklightningExplosion6.y = S.y;
						darklightningExplosion6.shoot();
					}
					S.timeLeft = 300;
					S.active = true;
				}
				else if(S.ice){
					if(darkiceEffect1.onScreen == 0){
						darkiceEffect1.x = S.x;
						darkiceEffect1.y = S.y;
						darkiceEffect1.target = AllEnemies[E];
						darkiceEffect1.shoot();
					}
					else if(darkiceEffect2.onScreen == 0){
						darkiceEffect2.x = S.x;
						darkiceEffect2.y = S.y;
						darkiceEffect2.target = AllEnemies[E];
						darkiceEffect2.shoot();
					}
					else if(darkiceEffect3.onScreen == 0){
						darkiceEffect3.x = S.x;
						darkiceEffect3.y = S.y;
						darkiceEffect3.target = AllEnemies[E];
						darkiceEffect3.shoot();
					}
					else if(darkiceEffect4.onScreen == 0){
						darkiceEffect4.x = S.x;
						darkiceEffect4.y = S.y;
						darkiceEffect4.target = AllEnemies[E];
						darkiceEffect4.shoot();
					}
					else if(darkiceEffect5.onScreen == 0){
						darkiceEffect5.x = S.x;
						darkiceEffect5.y = S.y;
						darkiceEffect5.target = AllEnemies[E];
						darkiceEffect5.shoot();
					}
					S.onScreen = 0;
					S.x = -100;
					S.y = -200;
					darkice.inventory+=1;
				}
			}
		}
	}
}
// Ice Trap: Drops an ice trap on the player's location. Freezes first enemy to touch it for x seconds
var darkice = {
	x: -100,
	y: -200,
	width: 32,
	height: 32,
	cd: 0,
	cdTop: 30,
	onScreen: 0,
	used: 0,
	inventory: 5,
	index: 0,
	ice: true,
	light: false,
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
			else if(darkice12.onScreen == 0){
				darkice12.x = player.x;
				darkice12.y = player.y;
				this.cd = this.cdTop;
				darkice12.onScreen = 1;
				darkice12.used = 0;
			}
			else if(darkice13.onScreen == 0){
				darkice13.x = player.x;
				darkice13.y = player.y;
				this.cd = this.cdTop;
				darkice13.onScreen = 1;
				darkice13.used = 0;
			}
			else if(darkice14.onScreen == 0){
				darkice14.x = player.x;
				darkice14.y = player.y;
				this.cd = this.cdTop;
				darkice14.onScreen = 1;
				darkice14.used = 0;
			}
			else if(darkice15.onScreen == 0){
				darkice15.x = player.x;
				darkice15.y = player.y;
				this.cd = this.cdTop;
				darkice15.onScreen = 1;
				darkice15.used = 0;
			}
		}
	}
};
var darkice12 = {
	x: -100,
	y: -200,
	width: 32,
	height: 32,
	onScreen: 0,
	used: 0,
	index: 0,
	ice: true,
	light: false
}	
var darkice13 = {
	x: -100,
	y: -200,
	width: 32,
	height: 32,
	onScreen: 0,
	used: 0,
	index: 0,
	ice: true,
	light: false
}
var darkice14 = {
	x: -100,
	y: -200,
	width: 32,
	height: 32,
	onScreen: 0,
	used: 0,
	index: 0,
	ice: true,
	light: false
}
var darkice15 = {
	x: -100,
	y: -200,
	width: 32,
	height: 32,
	onScreen: 0,
	used: 0,
	index: 0,
	ice: true,
	light: false
}
var darkiceEffect1 = {
	color: "#00CCFF",
	x: -100,
	y: -200,
	timeLeft: 0,
	width: 32,
	height: 32,
	frame: 0,
	onScreen: 0,
	used: 0,
	target: "",
	prevSpeed: 0,
	
	draw: function(){
		if(this.onScreen == 1){
			ctx.fillStyle = this.color;
			ctx.globalAlpha = Alpha*0.25;
			if(this.used == 0){
				fastbeepsHigh.currentTime=0;
				fastbeepsHigh.play();
				this.used = 1;
				this.prevSpeed = this.target.speed;
			}
			if(this.frame < 4){
				ctx.fillRect(this.x-this.width*0.5, this.y-this.height*0.5, this.width, this.height);
				this.width = this.width + 8 * this.frame;
				this.height = this.height + 8 * this.frame;
				this.frame++;
				this.target.speed = 0;
			}
			else if(this.frame < 8){
				ctx.fillRect(this.x-this.width*0.5, this.y-this.height*0.5, this.width, this.height);
				this.width = this.width - 8 * this.frame;
				this.height = this.height - 8 * this.frame;
				this.frame++;
				this.target.speed = 0;
			}
			else if(this.frame < 150){
				this.frame++;
				this.target.speed = 0;
			}
			else{
				this.frame = 0;
				this.onScreen = 0;
				this.width = 32;
				this.height = 32;
				this.target.speed = this.prevSpeed;
			}
			ctx.globalAlpha = Alpha;
		}
	},
	// Spawn
	shoot: function(){
		this.height = 32;
		this.width = 32;
		this.frame = 0;
		this.onScreen = 1;
		this.used = 0;
	}
};
var darkiceEffect2 = {
	color: "#00CCFF",
	x: -100,
	y: -200,
	timeLeft: 0,
	width: 32,
	height: 32,
	frame: 0,
	onScreen: 0,
	used: 0,
	target: "",
	prevSpeed: 0,
	draw: function(){
		if(this.onScreen == 1){
			ctx.fillStyle = this.color;
			ctx.globalAlpha = Alpha*0.25;
			if(this.used == 0){
				fastbeepsHigh.currentTime=0;
				fastbeepsHigh.play();
				this.used = 1;
				this.prevSpeed = this.target.speed;
			}
			if(this.frame < 4){
				ctx.fillRect(this.x-this.width*0.5, this.y-this.height*0.5, this.width, this.height);
				this.width = this.width + 8 * this.frame;
				this.height = this.height + 8 * this.frame;
				this.frame++;
				this.target.speed = 0;
			}
			else if(this.frame < 8){
				ctx.fillRect(this.x-this.width*0.5, this.y-this.height*0.5, this.width, this.height);
				this.width = this.width - 8 * this.frame;
				this.height = this.height - 8 * this.frame;
				this.frame++;
				this.target.speed = 0;
			}
			else if(this.frame < 150){
				this.frame++;
				this.target.speed = 0;
			}
			else{
				this.frame = 0;
				this.onScreen = 0;
				this.width = 32;
				this.height = 32;
				this.target.speed = this.prevSpeed;
			}
			ctx.globalAlpha = Alpha;
		}
	},
	// Spawn
	shoot: function(){
		this.height = 32;
		this.width = 32;
		this.frame = 0;
		this.onScreen = 1;
		this.used = 0;
	}
};
var darkiceEffect3 = {
	color: "#00CCFF",
	x: -100,
	y: -200,
	timeLeft: 0,
	width: 32,
	height: 32,
	frame: 0,
	onScreen: 0,
	used: 0,
	target: "",
	prevSpeed: 0,
	draw: function(){
		if(this.onScreen == 1){
			ctx.fillStyle = this.color;
			ctx.globalAlpha = Alpha*0.25;
			if(this.used == 0){
				fastbeepsHigh.currentTime=0;
				fastbeepsHigh.play();
				this.used = 1;
				this.prevSpeed = this.target.speed;
			}
			if(this.frame < 4){
				ctx.fillRect(this.x-this.width*0.5, this.y-this.height*0.5, this.width, this.height);
				this.width = this.width + 8 * this.frame;
				this.height = this.height + 8 * this.frame;
				this.frame++;
				this.target.speed = 0;
			}
			else if(this.frame < 8){
				ctx.fillRect(this.x-this.width*0.5, this.y-this.height*0.5, this.width, this.height);
				this.width = this.width - 8 * this.frame;
				this.height = this.height - 8 * this.frame;
				this.frame++;
				this.target.speed = 0;
			}
			else if(this.frame < 150){
				this.frame++;
				this.target.speed = 0;
			}
			else{
				this.frame = 0;
				this.onScreen = 0;
				this.width = 32;
				this.height = 32;
				this.target.speed = this.prevSpeed;
			}
			ctx.globalAlpha = Alpha;
		}
	},
	// Spawn
	shoot: function(){
		this.height = 32;
		this.width = 32;
		this.frame = 0;
		this.onScreen = 1;
		this.used = 0;
	}
};
var darkiceEffect4 = {
	color: "#00CCFF",
	x: -100,
	y: -200,
	timeLeft: 0,
	width: 32,
	height: 32,
	frame: 0,
	onScreen: 0,
	used: 0,
	target: "",
	prevSpeed: 0,
	draw: function(){
		if(this.onScreen == 1){
			ctx.fillStyle = this.color;
			ctx.globalAlpha = Alpha*0.25;
			if(this.used == 0){
				fastbeepsHigh.currentTime=0;
				fastbeepsHigh.play();
				this.used = 1;
				this.prevSpeed = this.target.speed;
			}
			if(this.frame < 4){
				ctx.fillRect(this.x-this.width*0.5, this.y-this.height*0.5, this.width, this.height);
				this.width = this.width + 8 * this.frame;
				this.height = this.height + 8 * this.frame;
				this.frame++;
				this.target.speed = 0;
			}
			else if(this.frame < 8){
				ctx.fillRect(this.x-this.width*0.5, this.y-this.height*0.5, this.width, this.height);
				this.width = this.width - 8 * this.frame;
				this.height = this.height - 8 * this.frame;
				this.frame++;
				this.target.speed = 0;
			}
			else if(this.frame < 150){
				this.frame++;
				this.target.speed = 0;
			}
			else{
				this.frame = 0;
				this.onScreen = 0;
				this.width = 32;
				this.height = 32;
				this.target.speed = this.prevSpeed;
			}
			ctx.globalAlpha = Alpha;
		}
	},
	// Spawn
	shoot: function(){
		this.height = 32;
		this.width = 32;
		this.frame = 0;
		this.onScreen = 1;
		this.used = 0;
	}
};
var darkiceEffect5 = {
	color: "#00CCFF",
	x: -100,
	y: -200,
	timeLeft: 0,
	width: 32,
	height: 32,
	frame: 0,
	onScreen: 0,
	used: 0,
	target: "",
	prevSpeed: 0,
	draw: function(){
		if(this.onScreen == 1){
			ctx.fillStyle = this.color;
			ctx.globalAlpha = Alpha*0.25;
			if(this.used == 0){
				fastbeepsHigh.currentTime=0;
				fastbeepsHigh.play();
				this.used = 1;
				this.prevSpeed = this.target.speed;
			}
			if(this.frame < 4){
				ctx.fillRect(this.x-this.width*0.5, this.y-this.height*0.5, this.width, this.height);
				this.width = this.width + 8 * this.frame;
				this.height = this.height + 8 * this.frame;
				this.frame++;
				this.target.speed = 0;
			}
			else if(this.frame < 8){
				ctx.fillRect(this.x-this.width*0.5, this.y-this.height*0.5, this.width, this.height);
				this.width = this.width - 8 * this.frame;
				this.height = this.height - 8 * this.frame;
				this.frame++;
				this.target.speed = 0;
			}
			else if(this.frame < 150){
				this.frame++;
				this.target.speed = 0;
			}
			else{
				this.frame = 0;
				this.onScreen = 0;
				this.width = 32;
				this.height = 32;
				this.target.speed = this.prevSpeed;
			}
			ctx.globalAlpha = Alpha;
		}
	},
	// Spawn
	shoot: function(){
		this.height = 32;
		this.width = 32;
		this.frame = 0;
		this.onScreen = 1;
		this.used = 0;
	}
};
var darkiceSpikes = {1: darkice, 2: darkice12, 3: darkice13, 4: darkice14, 5: darkice15};
var darkiceEffects = {1: darkiceEffect1, 2: darkiceEffect2, 3: darkiceEffect3, 4: darkiceEffect4, 5: darkiceEffect5};
//Moonlight: Fully heals you but you can't see for x seconds
var darkearth = {
	color: "#33CC00",
	timeLeft: 0,
	x: -100,
	y: -200,
	width: 2400,
	height: 1000,
	cd: 0,
	cdTop: 360,
	speed: 4,
	used: 0,
	HealAmount: 0,
	blackTimer: 0,
	draw: function(){
		if(this.timeLeft == 0){
			this.x = -100;
			this.y = -200;
		}
		if(this.timeLeft > 0){
			ctx.fillStyle = this.color;
			ctx.font = "18pt Arial";
			ctx.fillText("+" + this.HealAmount, this.x, this.y);
		}	
	},
	blackDraw: function(){
		if(this.blackTimer > 0){
			this.blackTimer -=1;
			ctx.fillStyle = "black";
			ctx.fillRect(player.x-this.width*0.5, player.y-this.height-64, this.width, this.height);
			ctx.fillRect(player.x-this.width*0.5, player.y+64, this.width, this.height);
			ctx.fillRect(player.x-this.height-64, player.y-this.width*0.5, this.height, this.width);
			ctx.fillRect(player.x+64, player.y-this.width*0.5, this.height, this.width);
			ctx.globalAlpha = Alpha*0.75;
			ctx.fillStyle = "black";
			ctx.fillRect(0, 0, 800, 576);
			ctx.globalAlpha = Alpha;
		}	
	},
	move: function(){
		if(this.cd > 0){
			this.cd-=1;
		}
		if(this.timeLeft > 0){
			this.y -= this.speed;
			this.timeLeft--;
			if(this.used == 0){
				player.hp = player.maxhp;
				this.used = 1;
				radiofailure.currentTime=0;
				radiofailure.play();
			}
		}		
	},
	shoot: function(){
		if(this.cd == 0){
			this.x = player.x;
			this.y = player.y;
			this.cd = this.cdTop;
			this.timeLeft = 15;
			this.used = 0;
			this.HealAmount = player.maxhp - player.hp;
			this.blackTimer = 150;
		}
	}	
};
// staticm Field: Makes a staticm Trap, which chains up to 5 times
var darklightning = {
	x: -100,
	y: -200,
	width: 32,
	height: 32,
	cd: 0,
	cdTop: 30,
	onScreen: 0,
	timeLeft: -1,
	used: 0,
	inventory: 2,
	index: 0,
	active: false,
	ice: false,
	light: true,
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
			else if(darklightning12.onScreen == 0){
				darklightning12.x = player.x;
				darklightning12.y = player.y;
				this.cd = this.cdTop;
				darklightning12.onScreen = 1;
				darklightning12.used = 0;
			}
		}
	}
};
var darklightning12 = {
	x: -100,
	y: -200,
	width: 32,
	height: 32,
	onScreen: 0,
	timeLeft: -1,
	used: 0,
	index: 0,
	active: false,
	ice: false,
	light: true
}	
var darklightningExplosion = {
	color: "#FFFF00",
	x: -100,
	y: -200,
	timeLeft: 0,
	width: 128,
	height: 128,
	frame: 0,
	onScreen: 0,
	chained: 0,
	draw: function(){
		if(this.onScreen == 1 && this.timeLeft/30 == Math.round(this.timeLeft/30)){
			this.frame++;
			ctx.globalAlpha = Alpha*0.5;
			if(this.frame*0.5 != Math.round(this.frame*0.5)){
				ctx.fillStyle = "white";
			}
			else{
				ctx.fillStyle = this.color;
			}
			ctx.fillRect(this.x - this.width * 0.5,
			this.y - this.height * 0.5,
			this.width, this.height);
			ctx.globalAlpha = Alpha;
		}
	},
	move: function(){
		if(this.timeLeft > 0){
			this.timeLeft-=1;
		}
		if(this.timeLeft == 0){
			this.x = -100;
			this.y = -200;
			this.onScreen = 0;
			this.chained = 0;
		}
		else if(this.onScreen ==1 && this.timeLeft/30 == Math.round(this.timeLeft/30)){
			for (E in AllEnemies){
				if(contained(AllEnemies[E], this) || collision(AllEnemies[E].dir, AllEnemies[E], this) && AllEnemies[E].onTree == 0){
					if(this.chained == 0){
						darklightningExplosion2.x = AllEnemies[E].x;
						darklightningExplosion2.y = AllEnemies[E].y;
						darklightningExplosion2.shoot();
						this.chained = 1;
						darklightning.timeLeft = 300;
					}
					player.currpower = player.power;
					player.power+=1;
					onHit(AllEnemies[E]);
					player.power = player.currpower;
				}
			}
			for (O in obstacle1){
				if(contained(obstacle1[O], this)){
					player.currpower = player.power;
					player.power+=1;
					obsHit(obstacle1[O]);
					player.power = player.currpower;
				}
			}
			for (O in obstacle2){
				if(contained(obstacle2[O], this)){
					player.currpower = player.power;
					player.power+=1;
					obsHit(obstacle2[O]);
					player.power = player.currpower;
				}
			}
			for (O in obstacle3){
				if(contained(obstacle3[O], this)){
					player.currpower = player.power;
					player.power+=1;
					obsHit(obstacle3[O]);
					player.power = player.currpower;
				}
			}
		}
	},
	// Spawn
	shoot: function(){
		this.frame = 0;
		this.onScreen = 1;
		this.timeLeft = 300;
		this.chained = 0;
		longpew.currentTime = 0;
		longpew.play();
	}
};
var darklightningExplosion2 = {
	color: "#FFFF00",
	x: -100,
	y: -200,
	timeLeft: 0,
	width: 128,
	height: 128,
	frame: 0,
	onScreen: 0,
	chained: 0,
	draw: function(){
		if(this.onScreen == 1 && this.timeLeft/30 == Math.round(this.timeLeft/30)){
			this.frame++;
			ctx.globalAlpha = Alpha*0.5;
			ctx.fillStyle = this.color;
			ctx.fillRect(this.x - this.width * 0.5,
			this.y - this.height * 0.5,
			this.width, this.height);
			ctx.globalAlpha = Alpha;
		}
	},
	move: function(){
		if(this.timeLeft > 0){
			this.timeLeft-=1;
		}
		if(this.timeLeft == 0){
			this.x = -100;
			this.y = -200;
			this.onScreen = 0;
			this.chained = 0;
		}
		else if(this.onScreen ==1 && this.timeLeft/30 == Math.round(this.timeLeft/30)){
			for (E in AllEnemies){
				if(contained(AllEnemies[E], this) || collision(AllEnemies[E].dir, AllEnemies[E], this) && AllEnemies[E].onTree == 0){
					if(this.chained == 0){
						darklightningExplosion3.x = AllEnemies[E].x;
						darklightningExplosion3.y = AllEnemies[E].y;
						darklightningExplosion3.shoot();
						this.chained = 1;
						darklightning.timeLeft = 300;
					}
					player.currpower = player.power;
					player.power+=1;
					onHit(AllEnemies[E]);
					player.power = player.currpower;
				}
			}
			for (O in obstacle1){
				if(contained(obstacle1[O], this)){
					player.currpower = player.power;
					player.power+=1;
					obsHit(obstacle1[O]);
					player.power = player.currpower;
				}
			}
			for (O in obstacle2){
				if(contained(obstacle2[O], this)){
					player.currpower = player.power;
					player.power+=1;
					obsHit(obstacle2[O]);
					player.power = player.currpower;
				}
			}
			for (O in obstacle3){
				if(contained(obstacle3[O], this)){
					player.currpower = player.power;
					player.power+=1;
					obsHit(obstacle3[O]);
					player.power = player.currpower;
				}
			}
		}
	},
	// Spawn
	shoot: function(){
		this.frame = 0;
		this.onScreen = 1;
		this.timeLeft = 300;
		this.chained = 0;
		longpew.currentTime = 0;
		longpew.play();
	}
};
var darklightningExplosion3 = {
	color: "#FFFF00",
	x: -100,
	y: -200,
	timeLeft: 0,
	width: 128,
	height: 128,
	frame: 0,
	cd: 0,
	onScreen: 0,
	chained: 0,
	draw: function(){
		if(this.onScreen == 1 && this.timeLeft/30 == Math.round(this.timeLeft/30)){
			this.frame++;
			ctx.globalAlpha = Alpha*0.5;
			ctx.fillStyle = this.color;
			ctx.fillRect(this.x - this.width * 0.5,
			this.y - this.height * 0.5,
			this.width, this.height);
			ctx.globalAlpha = Alpha;
		}
	},
	move: function(){
		if(this.timeLeft > 0){
			this.timeLeft-=1;
		}
		if(this.timeLeft == 0){
			this.x = -100;
			this.y = -200;
			this.onScreen = 0;
			this.chained = 0;
		}
		else if(this.onScreen ==1 && this.timeLeft/30 == Math.round(this.timeLeft/30)){
			for (E in AllEnemies){
				if(contained(AllEnemies[E], this) || collision(AllEnemies[E].dir, AllEnemies[E], this) && AllEnemies[E].onTree == 0){
					if(this.chained == 0){
						darklightningExplosion4.x = AllEnemies[E].x;
						darklightningExplosion4.y = AllEnemies[E].y;
						darklightningExplosion4.shoot();
						this.chained = 1;
						darklightning.timeLeft = 300;
					}
					player.currpower = player.power;
					player.power+=1;
					onHit(AllEnemies[E]);
					player.power = player.currpower;
				}
			}
			for (O in obstacle1){
				if(contained(obstacle1[O], this)){
					player.currpower = player.power;
					player.power+=1;
					obsHit(obstacle1[O]);
					player.power = player.currpower;
				}
			}
			for (O in obstacle2){
				if(contained(obstacle2[O], this)){
					player.currpower = player.power;
					player.power+=1;
					obsHit(obstacle2[O]);
					player.power = player.currpower;
				}
			}
			for (O in obstacle3){
				if(contained(obstacle3[O], this)){
					player.currpower = player.power;
					player.power+=1;
					obsHit(obstacle3[O]);
					player.power = player.currpower;
				}
			}
		}
	},
	// Spawn
	shoot: function(){
		this.frame = 0;
		this.onScreen = 1;
		this.timeLeft = 300;
		this.chained = 0;
		longpew.currentTime = 0;
		longpew.play();
	}
};
var darklightningExplosion4 = {
	color: "#FFFF00",
	x: -100,
	y: -200,
	timeLeft: 0,
	width: 128,
	height: 128,
	frame: 0,
	cd: 0,
	onScreen: 0,
	chained: 0,
	draw: function(){
		if(this.onScreen == 1 && this.timeLeft/30 == Math.round(this.timeLeft/30)){
			this.frame++;
			ctx.globalAlpha = Alpha*0.5;
			ctx.fillStyle = this.color;
			ctx.fillRect(this.x - this.width * 0.5,
			this.y - this.height * 0.5,
			this.width, this.height);
			ctx.globalAlpha = Alpha;
		}
	},
	move: function(){
		if(this.timeLeft > 0){
			this.timeLeft-=1;
		}
		if(this.timeLeft == 0){
			this.x = -100;
			this.y = -200;
			this.onScreen = 0;
			this.chained = 0;
		}
		else if(this.onScreen ==1 && this.timeLeft/30 == Math.round(this.timeLeft/30)){
			for (E in AllEnemies){
				if(contained(AllEnemies[E], this) || collision(AllEnemies[E].dir, AllEnemies[E], this) && AllEnemies[E].onTree == 0){
					if(this.chained == 0){
						darklightningExplosion5.x = AllEnemies[E].x;
						darklightningExplosion5.y = AllEnemies[E].y;
						darklightningExplosion5.shoot();
						this.chained = 1;
						darklightning.timeLeft = 300;
					}
					player.currpower = player.power;
					player.power+=1;
					onHit(AllEnemies[E]);
					player.power = player.currpower;
				}
			}
			for (O in obstacle1){
				if(contained(obstacle1[O], this)){
					player.currpower = player.power;
					player.power+=1;
					obsHit(obstacle1[O]);
					player.power = player.currpower;
				}
			}
			for (O in obstacle2){
				if(contained(obstacle2[O], this)){
					player.currpower = player.power;
					player.power+=1;
					obsHit(obstacle2[O]);
					player.power = player.currpower;
				}
			}
			for (O in obstacle3){
				if(contained(obstacle3[O], this)){
					player.currpower = player.power;
					player.power+=1;
					obsHit(obstacle3[O]);
					player.power = player.currpower;
				}
			}
		}
	},
	// Spawn
	shoot: function(){
		this.frame = 0;
		this.onScreen = 1;
		this.timeLeft = 300;
		this.chained = 0;
		longpew.currentTime = 0;
		longpew.play();
	}
};
var darklightningExplosion5 = {
	color: "#FFFF00",
	x: -100,
	y: -200,
	timeLeft: 0,
	width: 128,
	height: 128,
	frame: 0,
	cd: 0,
	onScreen: 0,
	chained: 0,
	draw: function(){
		if(this.onScreen == 1 && this.timeLeft/30 == Math.round(this.timeLeft/30)){
			this.frame++;
			ctx.globalAlpha = Alpha*0.5;
			ctx.fillStyle = this.color;
			ctx.fillRect(this.x - this.width * 0.5,
			this.y - this.height * 0.5,
			this.width, this.height);
			ctx.globalAlpha = Alpha;
		}
	},
	move: function(){
		if(this.timeLeft > 0){
			this.timeLeft-=1;
		}
		if(this.timeLeft == 0){
			this.x = -100;
			this.y = -200;
			this.onScreen = 0;
			this.chained = 0;
		}
		else if(this.onScreen ==1 && this.timeLeft/30 == Math.round(this.timeLeft/30)){
			for (E in AllEnemies){
				if(contained(AllEnemies[E], this) || collision(AllEnemies[E].dir, AllEnemies[E], this) && AllEnemies[E].onTree == 0){
					player.currpower = player.power;
					player.power+=1;
					onHit(AllEnemies[E]);
					player.power = player.currpower;
				}
			}
			for (O in obstacle1){
				if(contained(obstacle1[O], this)){
					player.currpower = player.power;
					player.power+=1;
					obsHit(obstacle1[O]);
					player.power = player.currpower;
				}
			}
			for (O in obstacle2){
				if(contained(obstacle2[O], this)){
					player.currpower = player.power;
					player.power+=1;
					obsHit(obstacle2[O]);
					player.power = player.currpower;
				}
			}
			for (O in obstacle3){
				if(contained(obstacle3[O], this)){
					player.currpower = player.power;
					player.power+=1;
					obsHit(obstacle3[O]);
					player.power = player.currpower;
				}
			}
		}
	},
	// Spawn
	shoot: function(){
		this.frame = 0;
		this.onScreen = 1;
		this.timeLeft = 300;
		this.chained = 0;
		longpew.currentTime = 0;
		longpew.play();
	}
};
var darklightningExplosion6 = {
	color: "#FFFF00",
	x: -100,
	y: -200,
	timeLeft: 0,
	width: 128,
	height: 128,
	frame: 0,
	cd: 0,
	onScreen: 0,
	chained: 0,
	draw: function(){
		if(this.onScreen == 1 && this.timeLeft/30 == Math.round(this.timeLeft/30)){
			this.frame++;
			ctx.globalAlpha = Alpha*0.5;
			ctx.fillStyle = this.color;
			ctx.fillRect(this.x - this.width * 0.5,
			this.y - this.height * 0.5,
			this.width, this.height);
			ctx.globalAlpha = Alpha;
		}
	},
	move: function(){
		if(this.timeLeft > 0){
			this.timeLeft-=1;
		}
		if(this.timeLeft == 0){
			this.x = -100;
			this.y = -200;
			this.onScreen = 0;
			this.chained = 0;
		}
		else if(this.onScreen ==1 && this.timeLeft/30 == Math.round(this.timeLeft/30)){
			for (E in AllEnemies){
				if(contained(AllEnemies[E], this) || collision(AllEnemies[E].dir, AllEnemies[E], this) && AllEnemies[E].onTree == 0){
					if(this.chained == 0){
						darklightningExplosion7.x = AllEnemies[E].x;
						darklightningExplosion7.y = AllEnemies[E].y;
						darklightningExplosion7.shoot();
						this.chained = 1;
						darklightning12.timeLeft = 300;
					}
					player.currpower = player.power;
					player.power+=1;
					onHit(AllEnemies[E]);
					player.power = player.currpower;
				}
			}
			for (O in obstacle1){
				if(contained(obstacle1[O], this)){
					player.currpower = player.power;
					player.power+=1;
					obsHit(obstacle1[O]);
					player.power = player.currpower;
				}
			}
			for (O in obstacle2){
				if(contained(obstacle2[O], this)){
					player.currpower = player.power;
					player.power+=1;
					obsHit(obstacle2[O]);
					player.power = player.currpower;
				}
			}
			for (O in obstacle3){
				if(contained(obstacle3[O], this)){
					player.currpower = player.power;
					player.power+=1;
					obsHit(obstacle3[O]);
					player.power = player.currpower;
				}
			}
		}
	},
	// Spawn
	shoot: function(){
		this.frame = 0;
		this.onScreen = 1;
		this.timeLeft = 300;
		this.chained = 0;
		longpew.currentTime = 0;
		longpew.play();
	}
};
var darklightningExplosion7 = {
	color: "#FFFF00",
	x: -100,
	y: -200,
	timeLeft: 0,
	width: 128,
	height: 128,
	frame: 0,
	cd: 0,
	onScreen: 0,
	chained: 0,
	draw: function(){
		if(this.onScreen == 1 && this.timeLeft/30 == Math.round(this.timeLeft/30)){
			this.frame++;
			ctx.globalAlpha = Alpha*0.5;
			ctx.fillStyle = this.color;
			ctx.fillRect(this.x - this.width * 0.5,
			this.y - this.height * 0.5,
			this.width, this.height);
			ctx.globalAlpha = Alpha;
		}
	},
	move: function(){
		if(this.timeLeft > 0){
			this.timeLeft-=1;
		}
		if(this.timeLeft == 0){
			this.x = -100;
			this.y = -200;
			this.onScreen = 0;
			this.chained = 0;
		}
		else if(this.onScreen ==1 && this.timeLeft/30 == Math.round(this.timeLeft/30)){
			for (E in AllEnemies){
				if(contained(AllEnemies[E], this) || collision(AllEnemies[E].dir, AllEnemies[E], this) && AllEnemies[E].onTree == 0){
					if(this.chained == 0){
						darklightningExplosion8.x = AllEnemies[E].x;
						darklightningExplosion8.y = AllEnemies[E].y;
						darklightningExplosion8.shoot();
						this.chained = 1;
						darklightning12.timeLeft = 300;
					}
					player.currpower = player.power;
					player.power+=1;
					onHit(AllEnemies[E]);
					player.power = player.currpower;
				}
			}
			for (O in obstacle1){
				if(contained(obstacle1[O], this)){
					player.currpower = player.power;
					player.power+=1;
					obsHit(obstacle1[O]);
					player.power = player.currpower;
				}
			}
			for (O in obstacle2){
				if(contained(obstacle2[O], this)){
					player.currpower = player.power;
					player.power+=1;
					obsHit(obstacle2[O]);
					player.power = player.currpower;
				}
			}
			for (O in obstacle3){
				if(contained(obstacle3[O], this)){
					player.currpower = player.power;
					player.power+=1;
					obsHit(obstacle3[O]);
					player.power = player.currpower;
				}
			}
		}
	},
	// Spawn
	shoot: function(){
		this.frame = 0;
		this.onScreen = 1;
		this.timeLeft = 300;
		this.chained = 0;
		longpew.currentTime = 0;
		longpew.play();
	}
};
var darklightningExplosion8 = {
	color: "#FFFF00",
	x: -100,
	y: -200,
	timeLeft: 0,
	width: 128,
	height: 128,
	frame: 0,
	cd: 0,
	onScreen: 0,
	chained: 0,
	draw: function(){
		if(this.onScreen == 1 && this.timeLeft/30 == Math.round(this.timeLeft/30)){
			this.frame++;
			ctx.globalAlpha = Alpha*0.5;
			ctx.fillStyle = this.color;
			ctx.fillRect(this.x - this.width * 0.5,
			this.y - this.height * 0.5,
			this.width, this.height);
			ctx.globalAlpha = Alpha;
		}
	},
	move: function(){
		if(this.timeLeft > 0){
			this.timeLeft-=1;
		}
		if(this.timeLeft == 0){
			this.x = -100;
			this.y = -200;
			this.onScreen = 0;
			this.chained = 0;
		}
		else if(this.onScreen ==1 && this.timeLeft/30 == Math.round(this.timeLeft/30)){
			for (E in AllEnemies){
				if(contained(AllEnemies[E], this) || collision(AllEnemies[E].dir, AllEnemies[E], this) && AllEnemies[E].onTree == 0){
					if(this.chained == 0){
						darklightningExplosion9.x = AllEnemies[E].x;
						darklightningExplosion9.y = AllEnemies[E].y;
						darklightningExplosion9.shoot();
						this.chained = 1;
						darklightning12.timeLeft = 300;
					}
					player.currpower = player.power;
					player.power+=1;
					onHit(AllEnemies[E]);
					player.power = player.currpower;
				}
			}
			for (O in obstacle1){
				if(contained(obstacle1[O], this)){
					player.currpower = player.power;
					player.power+=1;
					obsHit(obstacle1[O]);
					player.power = player.currpower;
				}
			}
			for (O in obstacle2){
				if(contained(obstacle2[O], this)){
					player.currpower = player.power;
					player.power+=1;
					obsHit(obstacle2[O]);
					player.power = player.currpower;
				}
			}
			for (O in obstacle3){
				if(contained(obstacle3[O], this)){
					player.currpower = player.power;
					player.power+=1;
					obsHit(obstacle3[O]);
					player.power = player.currpower;
				}
			}
		}
	},
	// Spawn
	shoot: function(){
		this.frame = 0;
		this.onScreen = 1;
		this.timeLeft = 300;
		this.chained = 0;
		longpew.currentTime = 0;
		longpew.play();
	}
};
var darklightningExplosion9 = {
	color: "#FFFF00",
	x: -100,
	y: -200,
	timeLeft: 0,
	width: 128,
	height: 128,
	frame: 0,
	cd: 0,
	onScreen: 0,
	chained: 0,
	draw: function(){
		if(this.onScreen == 1 && this.timeLeft/30 == Math.round(this.timeLeft/30)){
			this.frame++;
			ctx.globalAlpha = Alpha*0.5;
			ctx.fillStyle = this.color;
			ctx.fillRect(this.x - this.width * 0.5,
			this.y - this.height * 0.5,
			this.width, this.height);
			ctx.globalAlpha = Alpha;
		}
	},
	move: function(){
		if(this.timeLeft > 0){
			this.timeLeft-=1;
		}
		if(this.timeLeft == 0){
			this.x = -100;
			this.y = -200;
			this.onScreen = 0;
			this.chained = 0;
		}
		else if(this.onScreen ==1 && this.timeLeft/30 == Math.round(this.timeLeft/30)){
			for (E in AllEnemies){
				if(contained(AllEnemies[E], this) || collision(AllEnemies[E].dir, AllEnemies[E], this) && AllEnemies[E].onTree == 0){
					if(this.chained == 0){
						darklightningExplosion10.x = AllEnemies[E].x;
						darklightningExplosion10.y = AllEnemies[E].y;
						darklightningExplosion10.shoot();
						this.chained = 1;
						darklightning12.timeLeft = 300;
					}
					player.currpower = player.power;
					player.power+=1;
					onHit(AllEnemies[E]);
					player.power = player.currpower;
				}
			}
			for (O in obstacle1){
				if(contained(obstacle1[O], this)){
					player.currpower = player.power;
					player.power+=1;
					obsHit(obstacle1[O]);
					player.power = player.currpower;
				}
			}
			for (O in obstacle2){
				if(contained(obstacle2[O], this)){
					player.currpower = player.power;
					player.power+=1;
					obsHit(obstacle2[O]);
					player.power = player.currpower;
				}
			}
			for (O in obstacle3){
				if(contained(obstacle3[O], this)){
					player.currpower = player.power;
					player.power+=1;
					obsHit(obstacle3[O]);
					player.power = player.currpower;
				}
			}
		}
	},
	// Spawn
	shoot: function(){
		this.frame = 0;
		this.onScreen = 1;
		this.timeLeft = 300;
		this.chained = 0;
		longpew.currentTime = 0;
		longpew.play();
	}
};
var darklightningExplosion10 = {
	color: "#FFFF00",
	x: -100,
	y: -200,
	timeLeft: 0,
	width: 128,
	height: 128,
	frame: 0,
	cd: 0,
	onScreen: 0,
	chained: 0,
	draw: function(){
		if(this.onScreen == 1 && this.timeLeft/30 == Math.round(this.timeLeft/30)){
			this.frame++;
			ctx.globalAlpha = Alpha*0.5;
			ctx.fillStyle = this.color;
			ctx.fillRect(this.x - this.width * 0.5,
			this.y - this.height * 0.5,
			this.width, this.height);
			ctx.globalAlpha = Alpha;
		}
	},
	move: function(){
		if(this.timeLeft > 0){
			this.timeLeft-=1;
		}
		if(this.timeLeft == 0){
			this.x = -100;
			this.y = -200;
			this.onScreen = 0;
			this.chained = 0;
		}
		else if(this.onScreen ==1 && this.timeLeft/30 == Math.round(this.timeLeft/30)){
			for (E in AllEnemies){
				if(contained(AllEnemies[E], this) || collision(AllEnemies[E].dir, AllEnemies[E], this) && AllEnemies[E].onTree == 0){
					player.currpower = player.power;
					player.power+=1;
					onHit(AllEnemies[E]);
					player.power = player.currpower;
				}
			}
			for (O in obstacle1){
				if(contained(obstacle1[O], this)){
					player.currpower = player.power;
					player.power+=1;
					obsHit(obstacle1[O]);
					player.power = player.currpower;
				}
			}
			for (O in obstacle2){
				if(contained(obstacle2[O], this)){
					player.currpower = player.power;
					player.power+=1;
					obsHit(obstacle2[O]);
					player.power = player.currpower;
				}
			}
			for (O in obstacle3){
				if(contained(obstacle3[O], this)){
					player.currpower = player.power;
					player.power+=1;
					obsHit(obstacle3[O]);
					player.power = player.currpower;
				}
			}
		}
	},
	// Spawn
	shoot: function(){
		this.frame = 0;
		this.onScreen = 1;
		this.timeLeft = 300;
		this.chained = 0;
		longpew.currentTime = 0;
		longpew.play();
	}
};
var darklightningSpikes = {1: darklightning, 2: darklightning12};
var darklightningExplosions = {1: darklightningExplosion, 2: darklightningExplosion2, 3: darklightningExplosion3, 4: darklightningExplosion4, 5: darklightningExplosion5,
								6: darklightningExplosion6, 7: darklightningExplosion7, 8: darklightningExplosion8, 9: darklightningExplosion9, 10: darklightningExplosion10};
// Booster: Drop a booster on player's location
var darkair = {
	x: -100,
	y: -200,
	width: 32,
	height: 32,
	cd: 0,
	cdTop: 30,
	onScreen: 0,
	used: 0,
	timer: 0,
	inventory: 5,
	timeLeft: 0,
	index: 1,
	ccd: 0,
	shoot: function(){
		if(this.cd == 0 && this.inventory > 0){
			if(this.onScreen == 0 && !(collision(player.dir, player, darkair2) || collision(player.dir, player, darkair3) || collision(player.dir, player, darkair4) || collision(player.dir, player, darkair5))){
				this.x = player.x;
				this.y = player.y;
				this.cd = this.cdTop;
				this.onScreen = 1;
				this.used = 0;
				this.timer = 5;
				this.timeLeft = 600;
				this.inventory-=1;
				flatBoop.currentTime=0;
				flatBoop.play();
			}
			else if(darkair2.onScreen == 0 && !(collision(player.dir, player, this) || collision(player.dir, player, darkair3) || collision(player.dir, player, darkair4) || collision(player.dir, player, darkair5))){
				darkair2.x = player.x;
				darkair2.y = player.y;
				this.cd = this.cdTop;
				darkair2.onScreen = 1;
				darkair2.used = 0;
				darkair2.timer = 5;
				darkair2.timeLeft = 600;
				this.inventory-=1;
				flatBoop.currentTime=0;
				flatBoop.play();
			}
			else if(darkair3.onScreen == 0 && !(collision(player.dir, player, darkair2) || collision(player.dir, player, this) || collision(player.dir, player, darkair4) || collision(player.dir, player, darkair5))){
				darkair3.x = player.x;
				darkair3.y = player.y;
				this.cd = this.cdTop;
				darkair3.onScreen = 1;
				darkair3.used = 0;
				darkair3.timer = 5;
				darkair3.timeLeft = 600;
				this.inventory-=1;
				flatBoop.currentTime=0;
				flatBoop.play();
			}
			else if(darkair4.onScreen == 0 && !(collision(player.dir, player, darkair2) || collision(player.dir, player, darkair3) || collision(player.dir, player, this) || collision(player.dir, player, darkair5))){
				darkair4.x = player.x;
				darkair4.y = player.y;
				this.cd = this.cdTop;
				darkair4.onScreen = 1;
				darkair4.used = 0;
				darkair4.timer = 5;
				darkair4.timeLeft = 600;
				this.inventory-=1;
				flatBoop.currentTime=0;
				flatBoop.play();
			}
			else if(darkair5.onScreen == 0 && !(collision(player.dir, player, darkair2) || collision(player.dir, player, darkair3) || collision(player.dir, player, darkair4) || collision(player.dir, player, this))){
				darkair5.x = player.x;
				darkair5.y = player.y;
				this.cd = this.cdTop;
				darkair5.onScreen = 1;
				darkair5.used = 0;
				darkair5.timer = 5;
				darkair5.timeLeft = 600;
				this.inventory-=1;
				flatBoop.currentTime=0;
				flatBoop.play();
			}
		}
	},
	draw: function(){
		if(this.onScreen == 1){
			ctx.drawImage(trapSheet, 32*this.index - 32, 224, 32, 32, this.x-this.width*0.5, this.y-this.height*0.5, 32, 32);
			this.index++;
			if(this.index > 4){
				this.index = 1;
			}
		}
		if(darkair2.onScreen == 1){
			ctx.drawImage(trapSheet, 32*darkair2.index - 32,224,32,32, darkair2.x-darkair2.width*0.5, darkair2.y-darkair2.height*0.5, 32, 32);
			darkair2.index++;
			if(darkair2.index > 4){
				darkair2.index = 1;
			}
		}
		if(darkair3.onScreen == 1){
			ctx.drawImage(trapSheet, 32*darkair3.index - 32,224,32,32, darkair3.x-darkair3.width*0.5, darkair3.y-darkair3.height*0.5, 32, 32);
			darkair3.index++;
			if(darkair3.index > 4){
				darkair3.index = 1;
			}
		}
		if(darkair4.onScreen == 1){
			ctx.drawImage(trapSheet, 32*darkair4.index - 32,224,32,32, darkair4.x-darkair4.width*0.5, darkair4.y-darkair4.height*0.5, 32, 32);
			darkair4.index++;
			if(darkair4.index > 4){
				darkair4.index = 1;
			}
		}
		if(darkair5.onScreen == 1){
			ctx.drawImage(trapSheet, 32*darkair5.index - 32,224,32,32, darkair5.x-darkair5.width*0.5, darkair5.y-darkair5.height*0.5, 32, 32);
			darkair5.index++;
			if(darkair5.index > 4){
				darkair5.index = 1;
			}
		}
	},
	effect: function(){
		if(this.cd > 0){
			this.cd-=1;
		}
		if(this.ccd > 0){
			this.ccd-=1;
		}
		if(this.timeLeft > 0){
			this.timeLeft-=1;
			if(this.timeLeft == 0){
				this.x = -100;
				this.y = -200;
				this.onScreen = 0;
				this.used = 0;
				this.inventory+=1;
			}
		}
		if(darkair2.timeLeft > 0){
			darkair2.timeLeft-=1;
			if(darkair2.timeLeft == 0){
				darkair2.x = -100;
				darkair2.y = -200;
				darkair2.onScreen = 0;
				darkair2.used = 0;
				this.inventory+=1;
			}
		}
		if(darkair3.timeLeft > 0){
			darkair3.timeLeft-=1;
			if(darkair3.timeLeft == 0){
				darkair3.x = -100;
				darkair3.y = -200;
				darkair3.onScreen = 0;
				darkair3.used = 0;
				this.inventory+=1;
			}
		}
		if(darkair4.timeLeft > 0){
			darkair4.timeLeft-=1;
			if(darkair4.timeLeft == 0){
				darkair4.x = -100;
				darkair4.y = -200;
				darkair4.onScreen = 0;
				darkair4.used = 0;
				this.inventory+=1;
			}
		}
		if(darkair5.timeLeft > 0){
			darkair5.timeLeft-=1;
			if(darkair5.timeLeft == 0){
				darkair5.x = -100;
				darkair5.y = -200;
				darkair5.onScreen = 0;
				darkair5.used = 0;
				this.inventory+=1;
			}
		}
		if(this.onScreen == 1){
			if(this.timer > 0){
				this.timer-=1;
			}
			else if(this.ccd <= 0 && (collision(player.dir, player, this) || contained(player, this))){
				var currAircd = air.cd;
				air.cd = 0;
				air.isdark = true;
				air.shoot();
				air.cd = currAircd;
				this.timer = 5;
				this.ccd = 3;
			}			
		}
		if(darkair2.onScreen == 1){
			if(darkair2.timer > 0){
				darkair2.timer-=1;
			}
			else if(this.ccd <= 0 && (collision(player.dir, player, darkair2) || contained(player, darkair2))){
				var currAircd = air.cd;
				air.cd = 0;
				air.isdark = true;
				air.shoot();
				air.cd = currAircd;
				darkair2.timer = 5;
				this.ccd = 3;
			}
		}
		if(darkair3.onScreen == 1){
			if(darkair3.timer > 0){
				darkair3.timer-=1;
			}
			else if(this.ccd <= 0 && (collision(player.dir, player, darkair3) || contained(player, darkair3))){
				var currAircd = air.cd;
				air.cd = 0;
				air.isdark = true;
				air.shoot();
				air.cd = currAircd;
				darkair3.timer = 5;
				this.ccd = 3;
			}
		}
		if(darkair4.onScreen == 1){
			if(darkair4.timer > 0){
				darkair4.timer-=1;
			}
			else if(this.ccd <= 0 && (collision(player.dir, player, darkair4) || contained(player, darkair4))){
				var currAircd = air.cd;
				air.cd = 0;
				air.isdark = true;
				air.shoot();
				air.cd = currAircd;
				darkair4.timer = 5;
				this.ccd = 3;
			}
		}
		if(darkair5.onScreen == 1){
			if(darkair5.timer > 0){
				darkair5.timer-=1;
			}
			else if(this.ccd <= 0 && (collision(player.dir, player, darkair5) || contained(player, darkair5))){
				var currAircd = air.cd;
				air.cd = 0;
				air.isdark = true;
				air.shoot();
				air.cd = currAircd;
				darkair5.timer = 5;
				this.ccd = 3;
			}
		}
	}
};
var darkair2 = {
	x: -100,
	y: -200,
	width: 32,
	height: 32,
	onScreen: 0,
	used: 0,
	timer: 0,
	index: 1,
	timeLeft: 0
}	
var darkair3 = {
	x: -100,
	y: -200,
	width: 32,
	height: 32,
	onScreen: 0,
	used: 0,
	timer: 0,
	index: 1,
	timeLeft: 0
}
var darkair4 = {
	x: -100,
	y: -200,
	width: 32,
	height: 32,
	onScreen: 0,
	used: 0,
	timer: 0,
	index: 1,
	timeLeft: 0
}
var darkair5 = {
	x: -100,
	y: -200,
	width: 32,
	height: 32,
	onScreen: 0,
	used: 0,
	timer: 0,
	index: 1,
	timeLeft: 0
}
// Shadow Cloak
var darkwater = {
	x: -100,
	y: -200,
	width: 32,
	height: 32,
	cd: 0,
	onScreen: 0,
	hp: 0,
	cdTop: 15+this.hp*30,
	cast: -1,
	index: 1,
	hptimer: 0,
	draw: function(){
		if(this.onScreen == 1){
			ctx.globalAlpha = Alpha*0.75;
			if(this.hptimer*0.5 != Math.round(this.hptimer*0.5)){
				ctx.fillStyle = "white";
				ctx.fillRect(player.x-this.width*0.5, player.y-this.height*0.5, this.width, this.height);
			}
			else{
				if(this.hp == 1){
					ctx.drawImage(darkwaterSheet, (this.index-1)*48, 0, 48, 48, player.x-this.width*0.5, player.y-this.height*0.5, 48, 48);
				}
				else if(this.hp == 2){
					ctx.drawImage(darkwaterSheet, (this.index-1)*64, 48, 64, 64, player.x-this.width*0.5, player.y-this.height*0.5, 64, 64);
				}
				else if(this.hp == 3){
					ctx.drawImage(darkwaterSheet, (this.index-1)*80, 112, 80, 80, player.x-this.width*0.5, player.y-this.height*0.5, 80, 80);
				}
				this.index++;
				if(this.index > 4){
					this.index=1;
				}
			}
			ctx.globalAlpha = Alpha;
			ctx.fillStyle = "#00FFCC";
			if(this.hp == 3){
				ctx.fillRect(player.x - player.width*0.5, player.y - player.height*0.5 - player.height*0.5, player.width*0.25, player.height*0.25);
				ctx.fillRect(player.x - (player.width*0.5)+13, player.y - player.height*0.5 - player.height*0.5, player.width*0.25, player.height*0.25);
				ctx.fillRect(player.x - (player.width*0.5) + 26, player.y - player.height*0.5 - player.height*0.5, player.width*0.25, player.height*0.25);
			}
			else if(this.hp == 2){
				ctx.fillRect(player.x - player.width*0.5, player.y - player.height*0.5 - player.height*0.5, player.width*0.25, player.height*0.25);
				ctx.fillRect(player.x - (player.width*0.5)+13, player.y - player.height*0.5 - player.height*0.5, player.width*0.25, player.height*0.25);
			}
			else if(this.hp == 1){
				ctx.fillRect(player.x - player.width*0.5, player.y - player.height*0.5 - player.height*0.5, player.width*0.25, player.height*0.25);
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
		if(this.hp < 0){
			this.hp = 0;
		}
		if(this.hptimer == 20){
			lowBomb.currentTime = 0;
			lowBomb.play();
		}
		if(this.hptimer > 0){
			this.hptimer-=1;
		}
		if(this.cast == 0){
			this.hp+=1;
			this.cast-=1;
			this.onScreen = 1;
			Pickup.currentTime = 0;
			Pickup.play();
			if(typemarker.x != -100 && typemarker2.x != -100){
				typemarker3.text = "+1";
				typemarker3.x = player.x-player.width*0.5;
				typemarker3.y = player.y;
				typemarker3.timeLeft = 20;
			}
			else if(typemarker.x != -100){
				typemarker2.text = "+1";
				typemarker2.x = player.x-player.width*0.5;
				typemarker2.y = player.y;
				typemarker2.timeLeft = 20;
			}
			else{
				typemarker.text = "+1";
				typemarker.x = player.x-player.width*0.5;
				typemarker.y = player.y;
				typemarker.timeLeft = 20;
			}
		}
		if(this.onScreen == 1){
			this.width = 32 + 16*this.hp;
			this.height = 32 + 16*this.hp;
			this.x = player.x;
			this.y = player.y;
		}
		if(this.hp == 0 && this.onScreen == 1){
			this.onScreen = 0;
		}
	},
	// Spawn
	shoot: function(){
		if(this.cd == 0){
			if(this.hp < 3){
				this.cd = 15+this.hp*30;
				this.cdTop = 15+this.hp*30;
				castingBar.onScreen = 1;
				castingBar.cast = 15+this.hp*30;
				castingBar.castmax = 15+this.hp*30;
				this.cast = 15 + this.hp*30;
				cd = 15+this.hp*30;
			}
		}
	}
};
//light+fire:summon fire duder
//attack
var flameBreath1 = {
	color: "#FF6600",
	x: -100,
	y: -200,
	timeLeft: 0,
	width: 16,
	height: 16,
	frame: 0,
	dir: "A",
	draw: function(){
		if(this.timeLeft){
			if(this.used == 0){
				Explosion.currentTime=0;
				Explosion.play();
				this.used = 1;
			}
			ctx.globalAlpha = Alpha*0.5;
			if(this.frame*0.5 != Math.round(this.frame*0.5)){
				ctx.fillStyle = "#CC0000";
			}
			else{
				ctx.fillStyle = this.color;
			}
			ctx.fillRect(this.x - this.width * 0.5,
			this.y - this.height * 0.5,
			this.width, this.height);
			ctx.globalAlpha = Alpha;
		}
	},
	move: function(){
		if(this.timeLeft > 0){
			this.timeLeft--;
			this.frame++;
			this.width+=5;
			this.height+=5;
			for (E in AllEnemies){
				if(contained(AllEnemies[E], this)){
					onHit(AllEnemies[E]);
				}
			}
			for (O in obstacle1){
				if(contained(obstacle1[O], this)){
					obsHit(obstacle1[O]);
				}
			}
			for (O in obstacle2){
				if(contained(obstacle2[O], this)){
					obsHit(obstacle2[O]);
				}
			}
			for (O in obstacle3){
				if(contained(obstacle3[O], this)){
					obsHit(obstacle3[O]);
				}
			}
		}
		if(this.timeLeft == 0){
			this.x = -9000;
			this.y = -400;
			this.width = 16;
			this.height = 16;
			this.frame = 0;
		}
		if(this.timeLeft){
			if(this.dir == "A"){
				this.x-=8;
			}
			else{
				this.x+=8;
			}
		}
	}
};
var flameBreath2 = {
	color: "#FF6600",
	x: -100,
	y: -200,
	timeLeft: 0,
	width: 16,
	height: 16,
	frame: 0,
	dir: "A",
	draw: function(){
		if(this.timeLeft){
			if(this.used == 0){
				Explosion.currentTime=0;
				Explosion.play();
				this.used = 1;
			}
			ctx.globalAlpha = Alpha*0.5;
			if(this.frame*0.5 != Math.round(this.frame*0.5)){
				ctx.fillStyle = "#CC0000";
			}
			else{
				ctx.fillStyle = this.color;
			}
			ctx.fillRect(this.x - this.width * 0.5,
			this.y - this.height * 0.5,
			this.width, this.height);
			ctx.globalAlpha = Alpha;
		}
	},
	move: function(){
		if(this.timeLeft > 0){
			this.timeLeft--;
			this.frame++;
			this.width+=5;
			this.height+=5;
			for (E in AllEnemies){
				if(contained(AllEnemies[E], this)){
					onHit(AllEnemies[E]);
				}
			}
			for (O in obstacle1){
				if(contained(obstacle1[O], this)){
					obsHit(obstacle1[O]);
				}
			}
			for (O in obstacle2){
				if(contained(obstacle2[O], this)){
					obsHit(obstacle2[O]);
				}
			}
			for (O in obstacle3){
				if(contained(obstacle3[O], this)){
					obsHit(obstacle3[O]);
				}
			}
		}
		if(this.timeLeft == 0){
			this.x = -9000;
			this.y = -400;
			this.width = 16;
			this.height = 16;
			this.frame = 0;
		}
		if(this.timeLeft){
			if(this.dir == "A"){
				this.x-=8;
			}
			else{
				this.x+=8;
			}
		}
	}
};
var flameBreath3 = {
	color: "#FF6600",
	x: -100,
	y: -200,
	timeLeft: 0,
	width: 16,
	height: 16,
	frame: 0,
	dir: "A",
	draw: function(){
		if(this.timeLeft){
			if(this.used == 0){
				Explosion.currentTime=0;
				Explosion.play();
				this.used = 1;
			}
			ctx.globalAlpha = Alpha*0.5;
			if(this.frame*0.5 != Math.round(this.frame*0.5)){
				ctx.fillStyle = "#CC0000";
			}
			else{
				ctx.fillStyle = this.color;
			}
			ctx.fillRect(this.x - this.width * 0.5,
			this.y - this.height * 0.5,
			this.width, this.height);
			ctx.globalAlpha = Alpha;
		}
	},
	move: function(){
		if(this.timeLeft > 0){
			this.timeLeft--;
			this.frame++;
			this.width+=5;
			this.height+=5;
			for (E in AllEnemies){
				if(contained(AllEnemies[E], this)){
					onHit(AllEnemies[E]);
				}
			}
			for (O in obstacle1){
				if(contained(obstacle1[O], this)){
					obsHit(obstacle1[O]);
				}
			}
			for (O in obstacle2){
				if(contained(obstacle2[O], this)){
					obsHit(obstacle2[O]);
				}
			}
			for (O in obstacle3){
				if(contained(obstacle3[O], this)){
					obsHit(obstacle3[O]);
				}
			}
		}
		if(this.timeLeft == 0){
			this.x = -9000;
			this.y = -400;
			this.width = 16;
			this.height = 16;
			this.frame = 0;
		}
		if(this.timeLeft){
			if(this.dir == "A"){
				this.x-=8;
			}
			else{
				this.x+=8;
			}
		}
	}
};
var flameBreath4 = {
	color: "#FF6600",
	x: -100,
	y: -200,
	timeLeft: 0,
	width: 16,
	height: 16,
	frame: 0,
	dir: "A",
	draw: function(){
		if(this.timeLeft){
			if(this.used == 0){
				Explosion.currentTime=0;
				Explosion.play();
				this.used = 1;
			}
			ctx.globalAlpha = Alpha*0.5;
			if(this.frame*0.5 != Math.round(this.frame*0.5)){
				ctx.fillStyle = "#CC0000";
			}
			else{
				ctx.fillStyle = this.color;
			}
			ctx.fillRect(this.x - this.width * 0.5,
			this.y - this.height * 0.5,
			this.width, this.height);
			ctx.globalAlpha = Alpha;
		}
	},
	move: function(){
		if(this.timeLeft > 0){
			this.timeLeft--;
			this.frame++;
			this.width+=5;
			this.height+=5;
			for (E in AllEnemies){
				if(contained(AllEnemies[E], this)){
					onHit(AllEnemies[E]);
				}
			}
			for (O in obstacle1){
				if(contained(obstacle1[O], this)){
					obsHit(obstacle1[O]);
				}
			}
			for (O in obstacle2){
				if(contained(obstacle2[O], this)){
					obsHit(obstacle2[O]);
				}
			}
			for (O in obstacle3){
				if(contained(obstacle3[O], this)){
					obsHit(obstacle3[O]);
				}
			}
		}
		if(this.timeLeft == 0){
			this.x = -9000;
			this.y = -400;
			this.width = 16;
			this.height = 16;
			this.frame = 0;
		}
		if(this.timeLeft){
			if(this.dir == "A"){
				this.x-=8;
			}
			else{
				this.x+=8;
			}
		}
	}
};
var flameBreath5 = {
	color: "#FF6600",
	x: -100,
	y: -200,
	timeLeft: 0,
	width: 16,
	height: 16,
	frame: 0,
	dir: "A",
	draw: function(){
		if(this.timeLeft){
			if(this.used == 0){
				Explosion.currentTime=0;
				Explosion.play();
				this.used = 1;
			}
			ctx.globalAlpha = Alpha*0.5;
			if(this.frame*0.5 != Math.round(this.frame*0.5)){
				ctx.fillStyle = "#CC0000";
			}
			else{
				ctx.fillStyle = this.color;
			}
			ctx.fillRect(this.x - this.width * 0.5,
			this.y - this.height * 0.5,
			this.width, this.height);
			ctx.globalAlpha = Alpha;
		}
	},
	move: function(){
		if(this.timeLeft > 0){
			this.timeLeft--;
			this.frame++;
			this.width+=5;
			this.height+=5;
			for (E in AllEnemies){
				if(contained(AllEnemies[E], this)){
					onHit(AllEnemies[E]);
				}
			}
			for (O in obstacle1){
				if(contained(obstacle1[O], this)){
					obsHit(obstacle1[O]);
				}
			}
			for (O in obstacle2){
				if(contained(obstacle2[O], this)){
					obsHit(obstacle2[O]);
				}
			}
			for (O in obstacle3){
				if(contained(obstacle3[O], this)){
					obsHit(obstacle3[O]);
				}
			}
		}
		if(this.timeLeft == 0){
			this.x = -9000;
			this.y = -400;
			this.width = 16;
			this.height = 16;
			this.frame = 0;
		}
		if(this.timeLeft){
			if(this.dir == "A"){
				this.x-=8;
			}
			else{
				this.x+=8;
			}
		}
	}
};

//angel
var lightfire = {
	x: -100,
	y: -200,
	width: 48,
	height: 32,
	width2: 32,
	height2: 32,
	frame: 0,
	timeLeft: 0,
	cd: 0,
	cdTop: 1200,
	breathcd: 90,
	speed: 2,
	onScreen: 0,
	dir: "",
	LR: "Left",
	dirct: 0,
	casting: false,
	draw: function(){
		if(this.onScreen){
			if(this.casting){
				if(this.LR == "Left"){
					ctx.drawImage(FirehogFL1, this.x-this.width*0.5, this.y-this.height*0.5);
				}
				else{
					ctx.drawImage(FirehogFR1, this.x-this.width*0.5, this.y-this.height*0.5);
				}
			}
			else{
				if(this.LR == "Left"){
					ctx.drawImage(FirehogL1, this.x-this.width*0.5, this.y-this.height*0.5);
				}
				else{
					ctx.drawImage(FirehogR1, this.x-this.width*0.5, this.y-this.height*0.5);
				}
			}
			ctx.globalAlpha = Alpha*0.25;
			ctx.fillStyle = FireColor;
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
	Shoot_AI: function(){
		if(this.onScreen && this.breathcd <=0){
			this.speed = 0;
			this.casting = true;
			Explosion.play();
			if(!flameBreath1.timeLeft){
				flameBreath1.timeLeft = 35;
				flameBreath1.x = this.x;
				flameBreath1.y = this.y;
				if(this.LR == "Left"){
					flameBreath1.dir = "A";
				}
				else{
					flameBreath1.dir = "D";
				}
				this.breathcd = 5;				
			}
			else if(!flameBreath2.timeLeft){
				flameBreath2.timeLeft = 35;
				flameBreath2.x = this.x;
				flameBreath2.y = this.y;
				if(this.LR == "Left"){
					flameBreath2.dir = "A";
				}
				else{
					flameBreath2.dir = "D";
				}
				this.breathcd = 5;
			}
			else if(!flameBreath3.timeLeft){
				flameBreath3.timeLeft = 35;
				flameBreath3.x = this.x;
				flameBreath3.y = this.y;
				if(this.LR == "Left"){
					flameBreath3.dir = "A";
				}
				else{
					flameBreath3.dir = "D";
				}
				this.breathcd = 5;
			}
			else if(!flameBreath4.timeLeft){
				flameBreath4.timeLeft = 35;
				flameBreath4.x = this.x;
				flameBreath4.y = this.y;
				if(this.LR == "Left"){
					flameBreath4.dir = "A";
				}
				else{
					flameBreath4.dir = "D";
				}
				this.breathcd = 5;
			}
			else if(!flameBreath5.timeLeft){
				flameBreath5.timeLeft = 35;
				flameBreath5.x = this.x;
				flameBreath5.y = this.y;
				if(this.LR == "Left"){
					flameBreath5.dir = "A";
				}
				else{
					flameBreath5.dir = "D";
				}
				this.breathcd = 60;
				this.casting = false;
			}
		}
		else if(this.breathcd > 0){
			this.breathcd-=1;
			this.speed = 2;
		}
	},
	shoot: function(){
		if(this.cd <= 0){
			fastbeepsHigh.currentTime=0;
			fastbeepsHigh.play();
			this.x = player.x;
			this.y = player.y;
			this.onScreen = 1;
			this.timeLeft = 900;
			this.width2 = 32;
			this.height2 = 32;
			this.frame = 0;
			this.cd = this.cdTop;
		}
	}
};

var IceTrail1 = {
	x: -100,
	y: -200,
	width: 48,
	height: 32,
	frame: 0,
	onScreen: 0
};

var IceTrail2 = {
	x: -100,
	y: -200,
	width: 48,
	height: 32,
	frame: 0,
	onScreen: 0
};

var IceTrail3 = {
	x: -100,
	y: -200,
	width: 48,
	height: 32,
	frame: 0,
	onScreen: 0
};

var IceTrail4 = {
	x: -100,
	y: -200,
	width: 48,
	height: 32,
	frame: 0,
	onScreen: 0
};

var IceTrail5 = {
	x: -100,
	y: -200,
	width: 48,
	height: 32,
	frame: 0,
	onScreen: 0
};

var IceTrail6 = {
	x: -100,
	y: -200,
	width: 48,
	height: 32,
	frame: 0,
	onScreen: 0
};

var IceTrail7 = {
	x: -100,
	y: -200,
	width: 48,
	height: 32,
	frame: 0,
	onScreen: 0
};

var IceTrail8 = {
	x: -100,
	y: -200,
	width: 48,
	height: 32,
	frame: 0,
	onScreen: 0
};

var IceTrail9 = {
	x: -100,
	y: -200,
	width: 48,
	height: 32,
	frame: 0,
	onScreen: 0
};

var IceTrail10 = {
	x: -100,
	y: -200,
	width: 48,
	height: 32,
	frame: 0,
	onScreen: 0
};
var IceTrails = {1: IceTrail1, 2: IceTrail2, 3: IceTrail3, 4: IceTrail4, 5: IceTrail5, 6: IceTrail6, 7: IceTrail7, 8: IceTrail8, 9: IceTrail9, 10: IceTrail10};

function MoveIceTrail(I){
	if(I.frame <= 10 && I.onScreen){
		I.width = I.width + 2*I.frame;
		I.height = I.height + 2*I.frame;
		I.frame++;
		for (E in AllEnemies){
			if(collision(AllEnemies[E].dir, AllEnemies[E], I) || contained(I, AllEnemies[E])){
				AllEnemies[E].speed = AllEnemies[E].speed2;
			}
		}
	}
	else if(I.frame < 150 && I.onScreen){
		I.frame++;
		for (E in AllEnemies){
			if(collision(AllEnemies[E].dir, AllEnemies[E], I) || contained(I, AllEnemies[E])){
				AllEnemies[E].speed = AllEnemies[E].speed2;
			}
		}
	}
	if(I.frame >= 150 && I.onScreen){
		for (E in AllEnemies){
			AllEnemies[E].speed = AllEnemies[E].speed2 * 2;
		}
		I.onScreen = 0;
		I.frame = 0;
		I.width = 32;
		I.height = 32;
	}
}

var lightice = {
	x: -100,
	y: -200,
	width: 32,
	height: 32,
	width2: 32,
	height2: 32,
	frame: 0,
	timeLeft: 0,
	cd: 0,
	cdTop: 1200,
	breathcd: 45,
	speed: 2,
	onScreen: 0,
	dir: "",
	LR: "Left",
	dirct: 0,
	draw: function(){
		if(this.onScreen){
			ctx.fillStyle = IceColor;
			/*if(this.LR == "Left"){
				ctx.fillRect(this.x-this.width*0.5, this.y-this.height*0.5, this.width, this.height);
			}
			else{
				ctx.fillRect(this.x-this.width*0.5, this.y-this.height*0.5, this.width, this.height);
			}*/
			ctx.drawImage(IceMinionL1, this.x-this.width*0.5, this.y-this.height*0.5, this.width, this.height);
			ctx.globalAlpha = Alpha*0.25;
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
			for(I in IceTrails){
				if(IceTrails[I].onScreen){
					ctx.fillRect(IceTrails[I].x-IceTrails[I].width*0.5, IceTrails[I].y-IceTrails[I].height*0.5, IceTrails[I].width, IceTrails[I].height);
					MoveIceTrail(IceTrails[I]);
				}
			}
			ctx.globalAlpha = Alpha;
		}
	},
	Shoot_AI: function(){
		if(this.onScreen && this.breathcd <=0){
			for(I in IceTrails){
				if(!IceTrails[I].frame){
					IceTrails[I].x = this.x;
					IceTrails[I].y = this.y;
					IceTrails[I].width = 32;
					IceTrails[I].height = 32;
					IceTrails[I].onScreen = 1;
					this.breathcd = 45;
					SpawnerSpawn.currentTime = 0;
					SpawnerSpawn.play();
					break;
				}
			}
		}
		else if(this.breathcd > 0){
			this.breathcd-=1;
		}
	},
	shoot: function(){
		if(this.cd <= 0){
			fastbeepsHigh.currentTime=0;
			fastbeepsHigh.play();
			this.x = player.x;
			this.y = player.y;
			this.onScreen = 1;
			this.timeLeft = 900;
			this.width2 = 32;
			this.height2 = 32;
			this.frame = 0;
			this.cd = this.cdTop;
		}
	}
};

//Moonlight: Fully heals you but you can't see for x seconds
var lightearth = {
	onScreen: 0,
	cd: 0,
	cdTop: 600,
	cast: 0,
	used: 0,
	normAlpha: 0,
	prevEarthcd: 0,
	draw: function(){
		if(this.onScreen){
			if(this.used == 0){
				Sunlight.currentTime=0;
				Sunlight.play();
				this.used = 1;
			}
			Alpha *= 0.95;
			ctx.globalAlpha = 1 - Alpha;
			ctx.fillStyle = "white";
			ctx.fillRect(-4, -4, 804, 580);
			ctx.globalAlpha = Alpha;
			if(this.cast == 30){
				this.prevEarthcd = earth.cd;
				earth.cd = 0;
				earth.shoot();
				castingBar.cast = 30;
				castingBar.castmax = 60;
			}
			if(!this.cast){
				Alpha = this.normAlpha;
				this.onScreen = 0;
				for(E in AllEnemies){
					if(AllEnemies[E].onScreen){
						onHit(AllEnemies[E]);
					}
				}
				Fwave.currentTime = 0;
				Fwave.play();
				earth.cd = this.prevEarthcd;
			}
		}
		if(this.cd > 0){
			this.cd-=1;
		}
		if(this.cast > 0){
			this.cast-=1;
		}
	},
	shoot: function(){
		if(this.cd == 0){
			this.onScreen = 1;
			this.cd = this.cdTop;
			this.used = 0;
			this.cast = 60;
			cd = 60;
			this.normAlpha = Alpha;
			castingBar.onScreen = 1;
			castingBar.cast = 60;
			castingBar.castmax = 60;
		}
	}	
};

var lightlightning = {
	x: -100,
	y: -200,
	width: 16,
	height: 16,
	width2: 32,
	height2: 32,
	frame: 0,
	timeLeft: 0,
	cd: 0,
	cdTop: 1800,
	breathcd: 0,
	speed: 4,
	onScreen: 0,
	dir: "",
	LR: "Left",
	dirct: 0,
	spell: false,
	slope: 1,
	closestSlope: 1,
	slopeIndex: 11,
	dirSwitch: false,
	destDir: "",
	movement: true,
	index: 0,
	draw: function(){
		if(this.onScreen){
			ctx.fillStyle = LightningColor;
			ctx.drawImage(darklightningimg[Math.floor(this.index*0.5)], this.x-this.width*0.5, this.y-this.height*0.5, this.width, this.height);
			this.index++;
			if(this.index > 5){
				this.index = 0;
			}
			ctx.globalAlpha = Alpha*0.25;
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
			if(this.spell == "H"){
				ctx.drawImage(hLightnings[this.breathcd % 3], 0, this.y-this.height*0.5);
			}
			else if(this.spell == "V"){
				ctx.drawImage(vLightnings[this.breathcd % 3], this.x-this.width*0.5, 0);
			}
			if(!this.breathcd){
				this.spell = false;
				this.movement = true;
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
				this.spell = false;
				this.breathcd = 0;
				this.movement = true;
			}
			else{
				if(this.dirct > 0){
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
			if(this.movement){
				move_particle_AI(this);
			}
			this.Shoot_AI();
		}
	},
	Shoot_AI: function(){
		if(this.onScreen && this.breathcd <=0){
			for(E in AllEnemies){
				if(AllEnemies[E].onScreen){
					if(AllEnemies[E].x <= this.x + this.width*0.5 && AllEnemies[E].x >= this.x - this.width*0.5){
						this.breathcd = 9;
						this.spell = "V";
						this.y = AllEnemies[E].y;
						onHit(AllEnemies[E]);
						this.movement = false;
						break;
					}
					else if(AllEnemies[E].y <= this.y + this.height*0.5 && AllEnemies[E].y >= this.y - this.height*0.5){
						this.breathcd = 9;
						this.spell = "H";
						this.x = AllEnemies[E].x;
						onHit(AllEnemies[E]);
						this.movement = false;
						break;
					}
				}
			}
		}
		else if(this.breathcd > 0){
			this.breathcd-=1;
		}
	},
	shoot: function(){
		if(this.cd <= 0){
			fastbeepsHigh.currentTime=0;
			fastbeepsHigh.play();
			this.x = player.x;
			this.y = player.y;
			this.onScreen = 1;
			this.timeLeft = 300;
			this.width2 = 32;
			this.height2 = 32;
			this.frame = 0;
			this.cd = this.cdTop;
		}
	}
};

var lightair = {
	x: -100,
	y: -200,
	width: 32,
	height: 32,
	width2: 32,
	height2: 32,
	frame: 0,
	timeLeft: 0,
	cd: 0,
	cdTop: 1200,
	speed: 16,
	onScreen: 0,
	dir: "",
	LR: "Left",
	dirct: 0,
	index: 1,
	draw: function(){
		if(this.onScreen){
			ctx.fillStyle = AirColor;
			if(this.dir == "W"){
				if(this.LR == "Left"){
					ctx.drawImage(trapSheet, 32*(Math.ceil(this.index*0.5) - 1), 224, 32, 32, this.x-this.width*0.5, this.y-this.height*0.5, this.width, this.height);
					ctx.globalAlpha = Alpha*0.5;
					ctx.drawImage(trapSheet, 32*(Math.ceil(this.index*0.5) - 1), 224, 32, 32, this.x-this.width*0.5, this.y-this.height*0.5 + 8, this.width, this.height);
					ctx.globalAlpha = Alpha*0.5;
					ctx.drawImage(trapSheet, 32*(Math.ceil(this.index*0.5) - 1), 224, 32, 32, this.x-this.width*0.5, this.y-this.height*0.5 + 24, this.width, this.height);
					ctx.globalAlpha = Alpha*0.25;
					ctx.drawImage(trapSheet, 32*(Math.ceil(this.index*0.5) - 1), 224, 32, 32, this.x-this.width*0.5, this.y-this.height*0.5 + 40, this.width, this.height);
					ctx.globalAlpha = Alpha*0.25;
					ctx.drawImage(trapSheet, 32*(Math.ceil(this.index*0.5) - 1), 224, 32, 32, this.x-this.width*0.5, this.y-this.height*0.5 + 56, this.width, this.height);
					ctx.globalAlpha = Alpha/6;
					ctx.drawImage(trapSheet, 32*(Math.ceil(this.index*0.5) - 1), 224, 32, 32, this.x-this.width*0.5, this.y-this.height*0.5 + 72, this.width, this.height);
					ctx.globalAlpha = Alpha/6;
					ctx.drawImage(trapSheet, 32*(Math.ceil(this.index*0.5) - 1), 224, 32, 32, this.x-this.width*0.5, this.y-this.height*0.5 + 88, this.width, this.height);
				}
				else{
					ctx.drawImage(trapSheet, 32*(Math.ceil(this.index*0.5) - 1), 224, 32, 32, this.x-this.width*0.5, this.y-this.height*0.5, this.width, this.height);
					ctx.globalAlpha = Alpha*0.5;
					ctx.drawImage(trapSheet, 32*(Math.ceil(this.index*0.5) - 1), 224, 32, 32, this.x-this.width*0.5, this.y-this.height*0.5 + 8, this.width, this.height);
					ctx.globalAlpha = Alpha*0.5;
					ctx.drawImage(trapSheet, 32*(Math.ceil(this.index*0.5) - 1), 224, 32, 32, this.x-this.width*0.5, this.y-this.height*0.5 + 24, this.width, this.height);
					ctx.globalAlpha = Alpha*0.25;
					ctx.drawImage(trapSheet, 32*(Math.ceil(this.index*0.5) - 1), 224, 32, 32, this.x-this.width*0.5, this.y-this.height*0.5 + 40, this.width, this.height);
					ctx.globalAlpha = Alpha*0.25;
					ctx.drawImage(trapSheet, 32*(Math.ceil(this.index*0.5) - 1), 224, 32, 32, this.x-this.width*0.5, this.y-this.height*0.5 + 56, this.width, this.height);
					ctx.globalAlpha = Alpha/6;
					ctx.drawImage(trapSheet, 32*(Math.ceil(this.index*0.5) - 1), 224, 32, 32, this.x-this.width*0.5, this.y-this.height*0.5 + 72, this.width, this.height);
					ctx.globalAlpha = Alpha/6;
					ctx.drawImage(trapSheet, 32*(Math.ceil(this.index*0.5) - 1), 224, 32, 32, this.x-this.width*0.5, this.y-this.height*0.5 + 88, this.width, this.height);
				}
			}
			else if(this.dir == "S"){
				if(this.LR == "Left"){
					ctx.drawImage(trapSheet, 32*(Math.ceil(this.index*0.5) - 1), 224, 32, 32, this.x-this.width*0.5, this.y-this.height*0.5, this.width, this.height);
					ctx.globalAlpha = Alpha*0.5;
					ctx.drawImage(trapSheet, 32*(Math.ceil(this.index*0.5) - 1), 224, 32, 32, this.x-this.width*0.5, this.y-this.height*0.5 - 8, this.width, this.height);
					ctx.globalAlpha = Alpha*0.5;
					ctx.drawImage(trapSheet, 32*(Math.ceil(this.index*0.5) - 1), 224, 32, 32, this.x-this.width*0.5, this.y-this.height*0.5 - 24, this.width, this.height);
					ctx.globalAlpha = Alpha*0.25;
					ctx.drawImage(trapSheet, 32*(Math.ceil(this.index*0.5) - 1), 224, 32, 32, this.x-this.width*0.5, this.y-this.height*0.5 - 40, this.width, this.height);
					ctx.globalAlpha = Alpha*0.25;
					ctx.drawImage(trapSheet, 32*(Math.ceil(this.index*0.5) - 1), 224, 32, 32, this.x-this.width*0.5, this.y-this.height*0.5 - 56, this.width, this.height);
					ctx.globalAlpha = Alpha/6;
					ctx.drawImage(trapSheet, 32*(Math.ceil(this.index*0.5) - 1), 224, 32, 32, this.x-this.width*0.5, this.y-this.height*0.5 - 72, this.width, this.height);
					ctx.globalAlpha = Alpha/6;
					ctx.drawImage(trapSheet, 32*(Math.ceil(this.index*0.5) - 1), 224, 32, 32, this.x-this.width*0.5, this.y-this.height*0.5 - 88, this.width, this.height);
				}
				else{
					ctx.drawImage(trapSheet, 32*(Math.ceil(this.index*0.5) - 1), 224, 32, 32, this.x-this.width*0.5, this.y-this.height*0.5, this.width, this.height);
					ctx.globalAlpha = Alpha*0.5;
					ctx.drawImage(trapSheet, 32*(Math.ceil(this.index*0.5) - 1), 224, 32, 32, this.x-this.width*0.5, this.y-this.height*0.5 - 8, this.width, this.height);
					ctx.globalAlpha = Alpha*0.5;
					ctx.drawImage(trapSheet, 32*(Math.ceil(this.index*0.5) - 1), 224, 32, 32, this.x-this.width*0.5, this.y-this.height*0.5 - 24, this.width, this.height);
					ctx.globalAlpha = Alpha*0.25;
					ctx.drawImage(trapSheet, 32*(Math.ceil(this.index*0.5) - 1), 224, 32, 32, this.x-this.width*0.5, this.y-this.height*0.5 - 40, this.width, this.height);
					ctx.globalAlpha = Alpha*0.25;
					ctx.drawImage(trapSheet, 32*(Math.ceil(this.index*0.5) - 1), 224, 32, 32, this.x-this.width*0.5, this.y-this.height*0.5 - 56, this.width, this.height);
					ctx.globalAlpha = Alpha/6;
					ctx.drawImage(trapSheet, 32*(Math.ceil(this.index*0.5) - 1), 224, 32, 32, this.x-this.width*0.5, this.y-this.height*0.5 - 72, this.width, this.height);
					ctx.globalAlpha = Alpha/6;
					ctx.drawImage(trapSheet, 32*(Math.ceil(this.index*0.5) - 1), 224, 32, 32, this.x-this.width*0.5, this.y-this.height*0.5 - 88, this.width, this.height);
				}
			}
			else if(this.dir == "A"){
				ctx.drawImage(trapSheet, 32*(Math.ceil(this.index*0.5) - 1), 224, 32, 32, this.x-this.width*0.5, this.y-this.height*0.5, this.width, this.height);
				ctx.globalAlpha = Alpha*0.5;
				ctx.drawImage(trapSheet, 32*(Math.ceil(this.index*0.5) - 1), 224, 32, 32, this.x-this.width*0.5 + 8, this.y-this.height*0.5, this.width, this.height);
				ctx.globalAlpha = Alpha*0.5;
				ctx.drawImage(trapSheet, 32*(Math.ceil(this.index*0.5) - 1), 224, 32, 32, this.x-this.width*0.5 + 24, this.y-this.height*0.5, this.width, this.height);
				ctx.globalAlpha = Alpha*0.25;
				ctx.drawImage(trapSheet, 32*(Math.ceil(this.index*0.5) - 1), 224, 32, 32, this.x-this.width*0.5 + 40, this.y-this.height*0.5, this.width, this.height);
				ctx.globalAlpha = Alpha*0.25;
				ctx.drawImage(trapSheet, 32*(Math.ceil(this.index*0.5) - 1), 224, 32, 32, this.x-this.width*0.5 + 56, this.y-this.height*0.5, this.width, this.height);
				ctx.globalAlpha = Alpha/6;
				ctx.drawImage(trapSheet, 32*(Math.ceil(this.index*0.5) - 1), 224, 32, 32, this.x-this.width*0.5 + 72, this.y-this.height*0.5, this.width, this.height);
				ctx.globalAlpha = Alpha/6;
				ctx.drawImage(trapSheet, 32*(Math.ceil(this.index*0.5) - 1), 224, 32, 32, this.x-this.width*0.5 + 88, this.y-this.height*0.5, this.width, this.height);
			}
			else if(this.dir == "D"){
				ctx.drawImage(trapSheet, 32*(Math.ceil(this.index*0.5) - 1), 224, 32, 32, this.x-this.width*0.5, this.y-this.height*0.5, this.width, this.height);
				ctx.globalAlpha = Alpha*0.5;
				ctx.drawImage(trapSheet, 32*(Math.ceil(this.index*0.5) - 1), 224, 32, 32, this.x-this.width*0.5 - 8, this.y-this.height*0.5, this.width, this.height);
				ctx.globalAlpha = Alpha*0.5;
				ctx.drawImage(trapSheet, 32*(Math.ceil(this.index*0.5) - 1), 224, 32, 32, this.x-this.width*0.5 - 24, this.y-this.height*0.5, this.width, this.height);
				ctx.globalAlpha = Alpha*0.25;
				ctx.drawImage(trapSheet, 32*(Math.ceil(this.index*0.5) - 1), 224, 32, 32, this.x-this.width*0.5 - 40, this.y-this.height*0.5, this.width, this.height);
				ctx.globalAlpha = Alpha*0.25;
				ctx.drawImage(trapSheet, 32*(Math.ceil(this.index*0.5) - 1), 224, 32, 32, this.x-this.width*0.5 - 56, this.y-this.height*0.5, this.width, this.height);
				ctx.globalAlpha = Alpha/6;
				ctx.drawImage(trapSheet, 32*(Math.ceil(this.index*0.5) - 1), 224, 32, 32, this.x-this.width*0.5 - 72, this.y-this.height*0.5, this.width, this.height);
				ctx.globalAlpha = Alpha/6;
				ctx.drawImage(trapSheet, 32*(Math.ceil(this.index*0.5) - 1), 224, 32, 32, this.x-this.width*0.5 - 88, this.y-this.height*0.5, this.width, this.height);
			}
			else if(this.dir == "WA"){
				ctx.drawImage(trapSheet, 32*(Math.ceil(this.index*0.5) - 1), 224, 32, 32, this.x-this.width*0.5, this.y-this.height*0.5, this.width, this.height);
				ctx.globalAlpha = Alpha*0.5;
				ctx.drawImage(trapSheet, 32*(Math.ceil(this.index*0.5) - 1), 224, 32, 32, this.x-this.width*0.5 + 4, this.y-this.height*0.5 + 4, this.width, this.height);
				ctx.globalAlpha = Alpha*0.5;
				ctx.drawImage(trapSheet, 32*(Math.ceil(this.index*0.5) - 1), 224, 32, 32, this.x-this.width*0.5 + 12, this.y-this.height*0.5 + 12, this.width, this.height);
				ctx.globalAlpha = Alpha*0.25;
				ctx.drawImage(trapSheet, 32*(Math.ceil(this.index*0.5) - 1), 224, 32, 32, this.x-this.width*0.5 + 20, this.y-this.height*0.5 + 20, this.width, this.height);
				ctx.globalAlpha = Alpha*0.25;
				ctx.drawImage(trapSheet, 32*(Math.ceil(this.index*0.5) - 1), 224, 32, 32, this.x-this.width*0.5 + 28, this.y-this.height*0.5 + 28, this.width, this.height);
				ctx.globalAlpha = Alpha/6;
				ctx.drawImage(trapSheet, 32*(Math.ceil(this.index*0.5) - 1), 224, 32, 32, this.x-this.width*0.5 + 36, this.y-this.height*0.5 + 36, this.width, this.height);
				ctx.globalAlpha = Alpha/6;
				ctx.drawImage(trapSheet, 32*(Math.ceil(this.index*0.5) - 1), 224, 32, 32, this.x-this.width*0.5 + 44, this.y-this.height*0.5 + 44, this.width, this.height);
			}
			else if(this.dir == "WD"){
				ctx.drawImage(trapSheet, 32*(Math.ceil(this.index*0.5) - 1), 224, 32, 32, this.x-this.width*0.5, this.y-this.height*0.5, this.width, this.height);
				ctx.globalAlpha = Alpha*0.5;
				ctx.drawImage(trapSheet, 32*(Math.ceil(this.index*0.5) - 1), 224, 32, 32, this.x-this.width*0.5 - 4, this.y-this.height*0.5 + 4, this.width, this.height);
				ctx.globalAlpha = Alpha*0.5;
				ctx.drawImage(trapSheet, 32*(Math.ceil(this.index*0.5) - 1), 224, 32, 32, this.x-this.width*0.5 - 12, this.y-this.height*0.5 + 12, this.width, this.height);
				ctx.globalAlpha = Alpha*0.25;
				ctx.drawImage(trapSheet, 32*(Math.ceil(this.index*0.5) - 1), 224, 32, 32, this.x-this.width*0.5 - 20, this.y-this.height*0.5 + 20, this.width, this.height);
				ctx.globalAlpha = Alpha*0.25;
				ctx.drawImage(trapSheet, 32*(Math.ceil(this.index*0.5) - 1), 224, 32, 32, this.x-this.width*0.5 - 28, this.y-this.height*0.5 + 28, this.width, this.height);
				ctx.globalAlpha = Alpha/6;
				ctx.drawImage(trapSheet, 32*(Math.ceil(this.index*0.5) - 1), 224, 32, 32, this.x-this.width*0.5 - 36, this.y-this.height*0.5 + 36, this.width, this.height);
				ctx.globalAlpha = Alpha/6;
				ctx.drawImage(trapSheet, 32*(Math.ceil(this.index*0.5) - 1), 224, 32, 32, this.x-this.width*0.5 - 44, this.y-this.height*0.5 + 44, this.width, this.height);
			}
			else if(this.dir == "AS"){
				ctx.drawImage(trapSheet, 32*(Math.ceil(this.index*0.5) - 1), 224, 32, 32, this.x-this.width*0.5, this.y-this.height*0.5, this.width, this.height);
				ctx.globalAlpha = Alpha*0.5;
				ctx.drawImage(trapSheet, 32*(Math.ceil(this.index*0.5) - 1), 224, 32, 32, this.x-this.width*0.5 + 4, this.y-this.height*0.5 - 4, this.width, this.height);
				ctx.globalAlpha = Alpha*0.5;
				ctx.drawImage(trapSheet, 32*(Math.ceil(this.index*0.5) - 1), 224, 32, 32, this.x-this.width*0.5 + 12, this.y-this.height*0.5 - 12, this.width, this.height);
				ctx.globalAlpha = Alpha*0.25;
				ctx.drawImage(trapSheet, 32*(Math.ceil(this.index*0.5) - 1), 224, 32, 32, this.x-this.width*0.5 + 20, this.y-this.height*0.5 - 20, this.width, this.height);
				ctx.globalAlpha = Alpha*0.25;
				ctx.drawImage(trapSheet, 32*(Math.ceil(this.index*0.5) - 1), 224, 32, 32, this.x-this.width*0.5 + 28, this.y-this.height*0.5 - 28, this.width, this.height);
				ctx.globalAlpha = Alpha/6;
				ctx.drawImage(trapSheet, 32*(Math.ceil(this.index*0.5) - 1), 224, 32, 32, this.x-this.width*0.5 + 36, this.y-this.height*0.5 - 36, this.width, this.height);
				ctx.globalAlpha = Alpha/6;
				ctx.drawImage(trapSheet, 32*(Math.ceil(this.index*0.5) - 1), 224, 32, 32, this.x-this.width*0.5 + 44, this.y-this.height*0.5 - 44, this.width, this.height);
			}
			else if(this.dir == "SD"){
				ctx.drawImage(trapSheet, 32*(Math.ceil(this.index*0.5) - 1), 224, 32, 32, this.x-this.width*0.5, this.y-this.height*0.5, this.width, this.height);
				ctx.globalAlpha = Alpha*0.5;
				ctx.drawImage(trapSheet, 32*(Math.ceil(this.index*0.5) - 1), 224, 32, 32, this.x-this.width*0.5 - 4, this.y-this.height*0.5 - 4, this.width, this.height);
				ctx.globalAlpha = Alpha*0.5;
				ctx.drawImage(trapSheet, 32*(Math.ceil(this.index*0.5) - 1), 224, 32, 32, this.x-this.width*0.5 - 12, this.y-this.height*0.5 - 12, this.width, this.height);
				ctx.globalAlpha = Alpha*0.25;
				ctx.drawImage(trapSheet, 32*(Math.ceil(this.index*0.5) - 1), 224, 32, 32, this.x-this.width*0.5 - 20, this.y-this.height*0.5 - 20, this.width, this.height);
				ctx.globalAlpha = Alpha*0.25;
				ctx.drawImage(trapSheet, 32*(Math.ceil(this.index*0.5) - 1), 224, 32, 32, this.x-this.width*0.5 - 28, this.y-this.height*0.5 - 28, this.width, this.height);
				ctx.globalAlpha = Alpha/6;
				ctx.drawImage(trapSheet, 32*(Math.ceil(this.index*0.5) - 1), 224, 32, 32, this.x-this.width*0.5 - 36, this.y-this.height*0.5 - 36, this.width, this.height);
				ctx.globalAlpha = Alpha/6;
				ctx.drawImage(trapSheet, 32*(Math.ceil(this.index*0.5) - 1), 224, 32, 32, this.x-this.width*0.5 - 44, this.y-this.height*0.5 - 44, this.width, this.height);
			}
			this.index++;
			if(this.index > 8){
				this.index = 1;
			}
			ctx.globalAlpha = Alpha*0.25;
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
	Shoot_AI: function(){
		for(E in AllEnemies){
			if(collision(this.dir, this, AllEnemies[E])){
				onHit(AllEnemies[E]);
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
			this.timeLeft = 600;
			this.width2 = 32;
			this.height2 = 32;
			this.frame = 0;
			this.cd = this.cdTop;
		}
	}
};

var lightwaterBubble1 = {
	x: -100,
	y: -200,
	width: 16,
	height: 16,
	dir: "W",
	speed: 16,
	timeLeft: 0
};
var lightwaterBubble2 = {
	x: -100,
	y: -200,
	width: 16,
	height: 16,
	dir: "A",
	speed: 16,
	timeLeft: 0
};
var lightwaterBubble3 = {
	x: -100,
	y: -200,
	width: 16,
	height: 16,
	dir: "S",
	speed: 16,
	timeLeft: 0
};
var lightwaterBubble4 = {
	x: -100,
	y: -200,
	width: 16,
	height: 16,
	dir: "D",
	speed: 16,
	timeLeft: 0
};
var lightwaterBubble5 = {
	x: -100,
	y: -200,
	width: 16,
	height: 16,
	dir: "WD",
	speed: 16,
	timeLeft: 0
};
var lightwaterBubble6 = {
	x: -100,
	y: -200,
	width: 16,
	height: 16,
	dir: "WA",
	speed: 16,
	timeLeft: 0
};
var lightwaterBubble7 = {
	x: -100,
	y: -200,
	width: 16,
	height: 16,
	dir: "AS",
	speed: 16,
	timeLeft: 0
};
var lightwaterBubble8 = {
	x: -100,
	y: -200,
	width: 16,
	height: 16,
	dir: "SD",
	speed: 16,
	timeLeft: 0
};

function movelwBubbles(){
	for(W in lightwaterBubbles1){
		if(lightwaterBubbles1[W].timeLeft > 0){
			lightwaterBubbles1[W].timeLeft--;
			if(lightwaterBubbles1[W].timeLeft <= 0){
				lightwaterBubbles1[W].x = -100;
				lightwaterBubbles1[W].y = -200;
			}
			for(E in AllEnemies){
				if(collision(lightwaterBubbles1[W].dir, lightwaterBubbles1[W], AllEnemies[E]) || collision(AllEnemies[E].dir, AllEnemies[E], lightwaterBubbles1[W])){
					onHit(AllEnemies[E]);
					lightwaterBubbles1[W].timeLeft = 0;
				}
			}
			if(lightwaterBubbles1[W].dir == "W"){
				lightwaterBubbles1[W].y-=lightwaterBubbles1[W].speed;
			}
			else if(lightwaterBubbles1[W].dir == "A"){
				lightwaterBubbles1[W].x-=lightwaterBubbles1[W].speed;
			}
			else if(lightwaterBubbles1[W].dir == "S"){
				lightwaterBubbles1[W].y+=lightwaterBubbles1[W].speed;
			}
			else if(lightwaterBubbles1[W].dir == "D"){
				lightwaterBubbles1[W].x+=lightwaterBubbles1[W].speed;
			}
			else if(lightwaterBubbles1[W].dir == "WA"){
				lightwaterBubbles1[W].x-=lightwaterBubbles1[W].speed/Math.sqrt(2);
				lightwaterBubbles1[W].y-=lightwaterBubbles1[W].speed/Math.sqrt(2);
			}
			else if(lightwaterBubbles1[W].dir == "WD"){
				lightwaterBubbles1[W].x+=lightwaterBubbles1[W].speed/Math.sqrt(2);
				lightwaterBubbles1[W].y-=lightwaterBubbles1[W].speed/Math.sqrt(2);
			}
			else if(lightwaterBubbles1[W].dir == "AS"){
				lightwaterBubbles1[W].x-=lightwaterBubbles1[W].speed/Math.sqrt(2);
				lightwaterBubbles1[W].y+=lightwaterBubbles1[W].speed/Math.sqrt(2);
			}
			else if(lightwaterBubbles1[W].dir == "SD"){
				lightwaterBubbles1[W].x+=lightwaterBubbles1[W].speed/Math.sqrt(2);
				lightwaterBubbles1[W].y+=lightwaterBubbles1[W].speed/Math.sqrt(2);
			}
			ctx.drawImage(Bubble, lightwaterBubbles1[W].x-lightwaterBubbles1[W].width*0.5, lightwaterBubbles1[W].y-lightwaterBubbles1[W].height*0.5);
		}
	}
	for(W in lightwaterBubbles2){
		if(lightwaterBubbles2[W].timeLeft > 0){
			lightwaterBubbles2[W].timeLeft--;
			if(lightwaterBubbles2[W].timeLeft <= 0){
				lightwaterBubbles2[W].x = -100;
				lightwaterBubbles2[W].y = -200;
			}
			for(E in AllEnemies){
				if(collision(lightwaterBubbles2[W].dir, lightwaterBubbles2[W], AllEnemies[E]) || collision(AllEnemies[E].dir, AllEnemies[E], lightwaterBubbles2[W])){
					onHit(AllEnemies[E]);
					lightwaterBubbles2[W].timeLeft = 0;
				}
			}
			if(lightwaterBubbles2[W].dir == "W"){
				lightwaterBubbles2[W].y-=lightwaterBubbles2[W].speed;
			}
			else if(lightwaterBubbles2[W].dir == "A"){
				lightwaterBubbles2[W].x-=lightwaterBubbles2[W].speed;
			}
			else if(lightwaterBubbles2[W].dir == "S"){
				lightwaterBubbles2[W].y+=lightwaterBubbles2[W].speed;
			}
			else if(lightwaterBubbles2[W].dir == "D"){
				lightwaterBubbles2[W].x+=lightwaterBubbles2[W].speed;
			}
			else if(lightwaterBubbles2[W].dir == "WA"){
				lightwaterBubbles2[W].x-=lightwaterBubbles2[W].speed/Math.sqrt(2);
				lightwaterBubbles2[W].y-=lightwaterBubbles2[W].speed/Math.sqrt(2);
			}
			else if(lightwaterBubbles2[W].dir == "WD"){
				lightwaterBubbles2[W].x+=lightwaterBubbles2[W].speed/Math.sqrt(2);
				lightwaterBubbles2[W].y-=lightwaterBubbles2[W].speed/Math.sqrt(2);
			}
			else if(lightwaterBubbles2[W].dir == "AS"){
				lightwaterBubbles2[W].x-=lightwaterBubbles2[W].speed/Math.sqrt(2);
				lightwaterBubbles2[W].y+=lightwaterBubbles2[W].speed/Math.sqrt(2);
			}
			else if(lightwaterBubbles2[W].dir == "SD"){
				lightwaterBubbles2[W].x+=lightwaterBubbles2[W].speed/Math.sqrt(2);
				lightwaterBubbles2[W].y+=lightwaterBubbles2[W].speed/Math.sqrt(2);
			}
			ctx.drawImage(Bubble, lightwaterBubbles2[W].x-lightwaterBubbles2[W].width*0.5, lightwaterBubbles2[W].y-lightwaterBubbles2[W].height*0.5);
		}
	}
}
var lightwaterBubbles1 = {1: lightwaterBubble1, 2: lightwaterBubble2, 3: lightwaterBubble3, 4: lightwaterBubble4};
var lightwaterBubbles2 = {1: lightwaterBubble5, 2: lightwaterBubble6, 3: lightwaterBubble7, 4: lightwaterBubble8};
var lightwater = {
	x: -100,
	y: -200,
	width: 16,
	height: 16,
	width2: 32,
	height2: 32,
	frame: 0,
	timeLeft: 0,
	cd: 0,
	cdTop: 1500,
	breathcd: 0,
	speed: 6,
	onScreen: 0,
	dir: "",
	LR: "Left",
	dirct: 0,
	spell: false,
	slope: 1,
	closestSlope: 1,
	slopeIndex: 11,
	dirSwitch: false,
	destDir: "",
	size: "grow",
	shotNum: 1,
	draw: function(){
		if(this.onScreen){
			ctx.fillStyle = WaterColor;
			ctx.drawImage(Bubble, this.x-this.width*0.5, this.y-this.height*0.5, this.width, this.height);
			ctx.globalAlpha = Alpha*0.25;
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
			if(this.size == "grow"){
				this.width+=2;
				this.height+=2;
				if(this.width >= 64){
					this.size = "shrink";
				}
			}
			else if(this.size == "shrink"){
				this.width-=2;
				this.height-=2;
				if(this.width <= 32){
					this.size = "grow";
				}
			}
			//if off screen, remove
			if(this.timeLeft <= 0){
				this.x = -9000;
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
				this.breathcd = 0;
			}
			else{
				if(this.dirct > 0){
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
			move_particle_AI(this);
			this.Shoot_AI();
		}
	},
	Shoot_AI: function(){
		if(this.breathcd <=0){
			this.breathcd = 45;
			Beam.currentTime = 0;
			Beam.play();
			if(this.shotNum == 1){
				for(W in lightwaterBubbles1){
					lightwaterBubbles1[W].x = this.x;
					lightwaterBubbles1[W].y = this.y;
					lightwaterBubbles1[W].timeLeft = 60;
				}
				this.shotNum++;
			}
			else{
				for(W in lightwaterBubbles2){
					lightwaterBubbles2[W].x = this.x;
					lightwaterBubbles2[W].y = this.y;
					lightwaterBubbles2[W].timeLeft = 60;
				}
				this.shotNum--;
			}
		}
		else if(this.breathcd > 0){
			this.breathcd-=1;
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

var AngelTrap1 = {
	x: -100,
	y: -200,
	width: 32,
	height: 32,
	onScreen: 0,
	used: 0,
	dark1: true,
	active: false,
	timeLeft: -1
};
var AngelTrap2 = {
	x: -100,
	y: -200,
	width: 32,
	height: 32,
	onScreen: 0,
	used: 0,
	dark1: true,
	active: false,
	timeLeft: -1
};
var AngelTrap3 = {
	x: -100,
	y: -200,
	width: 32,
	height: 32,
	onScreen: 0,
	used: 0,
	dark1: true,
	active: false,
	timeLeft: -1
};
var AngelTrap4 = {
	x: -100,
	y: -200,
	width: 32,
	height: 32,
	onScreen: 0,
	used: 0,
	dark1: true,
	active: false,
	timeLeft: -1
};

var lightdark = {
	x: -100,
	y: -200,
	width: 16,
	height: 16,
	width2: 32,
	height2: 32,
	frame: 0,
	timeLeft: 0,
	cd: 0,
	cdTop: 1500,
	breathcd: 0,
	speed: 6,
	onScreen: 0,
	dir: "",
	LR: "Left",
	dirct: 0,
	spell: false,
	slope: 1,
	closestSlope: 1,
	slopeIndex: 11,
	dirSwitch: false,
	destDir: "",
	inventory: 4,
	draw: function(){
		if(this.onScreen){
			ctx.fillStyle = DarkColor;
			if(this.dir == "A"){
				ctx.drawImage(DarkAngelL1, this.x-this.width*0.5, this.y-this.height*0.5, this.width, this.height);
			}
			else{
				ctx.drawImage(DarkAngelR1, this.x-this.width*0.5, this.y-this.height*0.5, this.width, this.height);
			}
			ctx.globalAlpha = Alpha*0.25;
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
				this.breathcd = 0;
			}
			else{
				if(this.dirct > 0){
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
			move_particle_AI(this);
			this.Shoot_AI();
		}
	},
	Shoot_AI: function(){
		if(this.breathcd <=0){
			this.breathcd = 45;
			if(!AngelTrap1.onScreen){
				AngelTrap1.x = this.x;
				AngelTrap1.y = this.y;
				AngelTrap1.onScreen = 1;
				AngelTrap1.used = 0;
				flatBoop.currentTime=0;
				flatBoop.play();
			}
			else if(!AngelTrap2.onScreen){
				AngelTrap2.x = this.x;
				AngelTrap2.y = this.y;
				AngelTrap2.onScreen = 1;
				AngelTrap2.used = 0;
				flatBoop.currentTime=0;
				flatBoop.play();
			}
			else if(!AngelTrap3.onScreen){
				AngelTrap3.x = this.x;
				AngelTrap3.y = this.y;
				AngelTrap3.onScreen = 1;
				AngelTrap3.used = 0;
				flatBoop.currentTime=0;
				flatBoop.play();
			}
			else if(!AngelTrap4.onScreen){
				AngelTrap4.x = this.x;
				AngelTrap4.y = this.y;
				AngelTrap4.onScreen = 1;
				AngelTrap4.used = 0;
				flatBoop.currentTime=0;
				flatBoop.play();
			}
		}
		else if(this.breathcd > 0){
			this.breathcd-=1;
		}
	},
	shoot: function(){
		if(this.cd <= 0){
			fastbeepsHigh.currentTime=0;
			fastbeepsHigh.play();
			this.x = player.x;
			this.y = player.y;
			this.onScreen = 1;
			this.timeLeft = 600;
			this.width2 = 32;
			this.height2 = 32;
			this.frame = 0;
			this.cd = this.cdTop;
		}
	}
};
function SummonMovementRand(S){
	if(S.cd > 0){
		S.cd -=1;
	}
	if(S.onScreen){
		if(S.timeLeft > 0){
			S.timeLeft--;
		}
		//if off screen, remove
		if(S.timeLeft <= 0){
			S.x = 9000;
			S.y = -400;
			S.width = 48;
			S.height = 32;
			S.dirct = 0;
			S.dir = "A";
			S.slope = 1;
			S.closestSlope = 1;
			S.slopeIndex = 11;
			S.onScreen = 0;
			S.dirct = 0;
			S.dirSwitch = false;
			S.destDir = "";
			if(S == lightair){
				S.width = 32;
			}	
			else if(S == lightice){
				S.width = 32;
				S.height = 48;
				for(I in IceTrails){
					IceTrails[I].onScreen = 0;
					IceTrails[I].frame = 0;
					IceTrails[I].width = 32;
					IceTrails[I].height = 32;
				}
				for (E in AllEnemies){
					AllEnemies[E].speed = AllEnemies[E].speed2 * 2;
				}
			}
		}
		else{
			if(S.dirct > 0){
				S.dirct-=1;
			}
			if(S != lightair){
				if(obsCollision(obstacle1, S, S.dir) || obsCollision(obstacle2, S, S.dir) || obsCollision(obstacle3, S, S.dir)){
					if(S.dir == "W"){
						S.dirct = 20;
						S.y+=2*S.speed;
						S.dir = "D";
						S.LR = "Right";
					}
					else if(S.dir == "A"){
						S.dirct = 20;
						S.x+=S.speed;
						S.dir = "W";
					}
					else if(S.dir == "S"){
						S.dirct = 20;
						S.y-=2*S.speed;
						S.dir = "A";
						S.LR = "Left";
					}
					else if(S.dir == "D"){
						S.dirct = 20;
						S.x-=S.speed;
						S.dir = "S";
					}
					else if(S.dir == "WD"){
						S.dirct = 20;
						S.x+=S.speed;
						S.y-=S.speed;
						S.dir = "W";
					}
					else if(S.dir == "WA"){
						S.dirct = 20;
						S.x-=S.speed;
						S.y-=S.speed;
						S.dir = "A";
						S.LR = "Left";
					}
					else if(S.dir == "AS"){
						S.dirct = 20;
						S.x-=S.speed;
						S.y+=S.speed;
						S.dir = "S";
					}
					else if(S.dir == "SD"){
						S.dirct = 20;
						S.x+=S.speed;
						S.y+=S.speed;
						S.dir = "D";
						S.LR = "Right";
					}
				}
			}
			if(S.x < 8){
				S.dir = "D";
				S.dirct = 2;
			}
			else if(S.x > 792){
				S.dir = "A";
				S.dirct = 2;
			}
			else if(S.y < 0){
				S.dir = "S";
				S.dirct = 2;
			}
			else if(S.y > 566){
				S.dir = "W";
				S.dirct = 2;
			}
			if(S.dirct <=0){
				var quadrant = 0;
				var q1dir = {1: "S", 2: "D", 3: "SD"};
				var q2dir = {1: "S", 2: "A", 3: "AS"};
				var q3dir = {1: "W", 2: "D", 3: "WD"};
				var q4dir = {1: "W", 2: "A", 3: "WA"};
				var alldir = {1: "W", 2: "A", 3: "S", 4: "D", 5: "WA", 6: "WD", 7: "AS", 8: "SD"};
				S.dirct = 20;
				var numbz = Math.floor(Math.random() * 3) + 1;
				var allnumbz = Math.floor(Math.random() * 8) + 1;
				if(S.x > 224 && S.x < 576 && S.y > 128 && S.y < 348){
					quadrant = 5;
				}
				else if(S.x <= 400 && S.y <= 238){
					quadrant = 1;
				}
				else if(S.x > 400 && S.y <= 238){
					quadrant = 2;
				}
				else if(S.x <= 400 && S.y > 238){
					quadrant = 3;
				}
				else if(S.x > 400 && S.y > 238){
					quadrant = 4;
				}
				if(quadrant == 1){
					S.dir = q1dir[numbz];
				}
				else if(quadrant == 2){
					S.dir = q2dir[numbz];
				}
				else if(quadrant == 3){
					S.dir = q3dir[numbz];
				}
				else if(quadrant == 4){
					S.dir = q4dir[numbz];
				}
				else if(quadrant == 5){
					S.dir = alldir[allnumbz];
				}
			}
		}
		if(S.dir == "W" && (S == lightair || (!(obsCollision(obstacle1, S, S.dir)) && !(obsCollision(obstacle2, S, S.dir))
			&& !(obsCollision(obstacle3, S, S.dir))))){
			Math.floor(S.y-=S.speed);
		}
		if(S.dir == "A" && (S == lightair || (!(obsCollision(obstacle1, S, S.dir)) && !(obsCollision(obstacle2, S, S.dir))
			&& !(obsCollision(obstacle3, S, S.dir))))){
			Math.floor(S.x-=S.speed);
			S.LR = "Left";
		}
		if(S.dir == "S" && (S == lightair || (!(obsCollision(obstacle1, S, S.dir)) && !(obsCollision(obstacle2, S, S.dir))
			&& !(obsCollision(obstacle3, S, S.dir))))){
			Math.floor(S.y+=S.speed);
		}
		if(S.dir == "D" && (S == lightair || (!(obsCollision(obstacle1, S, S.dir)) && !(obsCollision(obstacle2, S, S.dir))
			&& !(obsCollision(obstacle3, S, S.dir))))){
			Math.floor(S.x+=S.speed);
			S.LR = "Right";
		}
		if(S.dir == "AS" && (S == lightair || (!(obsCollision(obstacle1, S, S.dir)) && !(obsCollision(obstacle2, S, S.dir))
			&& !(obsCollision(obstacle3, S, S.dir))))){
			Math.floor(S.y+=S.speed);
			Math.floor(S.x-=S.speed);
			S.LR = "Left";
		}
		if(S.dir == "WA" && (S == lightair || ((!(obsCollision(obstacle1, S, S.dir)) && !(obsCollision(obstacle2, S, S.dir))
			&& !(obsCollision(obstacle3, S, S.dir)))))){
			Math.floor(S.y-=S.speed);
			Math.floor(S.x-=S.speed);
			S.LR = "Left";
		}
		if(S.dir == "WD" && (S == lightair || ((!(obsCollision(obstacle1, S, S.dir)) && !(obsCollision(obstacle2, S, S.dir))
			&& !(obsCollision(obstacle3, S, S.dir)))))){
			Math.floor(S.y-=S.speed);
			Math.floor(S.x+=S.speed);
			S.LR = "Right";
		}
		if(S.dir == "SD" && (S == lightair || (!(obsCollision(obstacle1, S, S.dir)) && !(obsCollision(obstacle2, S, S.dir))
			&& !(obsCollision(obstacle3, S, S.dir))))){
			Math.floor(S.y+=S.speed);
			Math.floor(S.x+=S.speed);
			S.LR = "Right";
		}
		S.Shoot_AI();
	}
}

//--------------------------------------------------------------- Spell Array -------------------------------------------------------//
var AllFire = {1: fire, 2: fire2, 3: fireice, 4: firelightningf1, 5: firelightningf2, 6: firelightningf3, 7: firelightningf4,
				8: Mfire, 9: Mfire2, 10: Mfire3, 11: Mfire4, 12: fireice2, 13: flameBreath1, 14: flameBreath2, 15: flameBreath3, 16: flameBreath4,
				17: flameBreath5};