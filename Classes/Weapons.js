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
	
	// Spawn
	shoot: function(dir, h, w){	
	if(!(this.x == -100) && !(this.y == -200) && cd == 0
		&& !(bullet2.x == -100) && !(bullet2.y == -200)
		&& !(bullet3.x == -100) && !(bullet3.y == -200)
		&& !(bullet4.x == -100) && !(bullet4.y == -200)
		&& !(bullet5.x == -100) && !(bullet5.y == -200)
		&& !(bullet6.x == -100) && !(bullet6.y == -200)
		&& !(bullet7.x == -100) && !(bullet7.y == -200)){
		bullet8.shoot(dir, h, w);
	}
	else if(!(this.x == -100) && !(this.y == -200) && cd == 0
		&& !(bullet2.x == -100) && !(bullet2.y == -200)
		&& !(bullet3.x == -100) && !(bullet3.y == -200)
		&& !(bullet4.x == -100) && !(bullet4.y == -200)
		&& !(bullet5.x == -100) && !(bullet5.y == -200)
		&& !(bullet6.x == -100) && !(bullet6.y == -200)){
		bullet7.shoot(dir, h, w);
	}
	else if(!(this.x == -100) && !(this.y == -200) && cd == 0
		&& !(bullet2.x == -100) && !(bullet2.y == -200)
		&& !(bullet3.x == -100) && !(bullet3.y == -200)
		&& !(bullet4.x == -100) && !(bullet4.y == -200)
		&& !(bullet5.x == -100) && !(bullet5.y == -200)){
		bullet6.shoot(dir, h, w);
	}
	else if(!(this.x == -100) && !(this.y == -200) && cd == 0
		&& !(bullet2.x == -100) && !(bullet2.y == -200)
		&& !(bullet3.x == -100) && !(bullet3.y == -200)
		&& !(bullet4.x == -100) && !(bullet4.y == -200)){
		bullet5.shoot(dir, h, w);
	}
	else if(!(this.x == -100) && !(this.y == -200) && cd == 0
		&& !(bullet2.x == -100) && !(bullet2.y == -200)
		&& !(bullet3.x == -100) && !(bullet3.y == -200)){
		bullet4.shoot(dir, h, w);
	}
	else if(!(this.x == -100) && !(this.y == -200) && cd == 0
		&& !(bullet2.x == -100) && !(bullet2.y == -200)){
		bullet3.shoot(dir, h, w);
	}
	else if(!(this.x == -100) && !(this.y == -200) && cd == 0){
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
		if(spell == "Homing Shots"){
			cd = 40;
		}
		if(spell == "Bubblebeam"){
			cd = 20;
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
			cd = 20;
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
		if(spell == "Homing Shots"){
			cd = 40;
		}
		else if(spell == "Bubblebeam"){
			cd = 20;
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
			cd = 20;
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
		if(spell == "Homing Shots"){
			cd = 40;
		}
		else if(spell == "Bubblebeam"){
			cd = 20;
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
			cd = 20;
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
		if(spell == "Homing Shots"){
			cd = 40;
		}
		else if(spell == "Bubblebeam"){
			cd = 20;
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
			cd = 20;
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
		if(spell == "Homing Shots"){
			cd = 40;
		}
		else if(spell == "Bubblebeam"){
			cd = 20;
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
			cd = 20;
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
		if(spell == "Homing Shots"){
			cd = 40;
		}
		else if(spell == "Bubblebeam"){
			cd = 20;
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
			cd = 20;
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
		if(spell == "Homing Shots"){
			cd = 40;
		}
		else if(spell == "Bubblebeam"){
			cd = 20;
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
			cd = 20;
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
		if(spell == "Homing Shots"){
			cd = 40;
		}
		else if(spell == "Bubblebeam"){
			cd = 20;
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
			cd = 20;
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
	dir: "A"
};
var bullet12 = {
	x: -100,
	y: -200,
	timeLeft: 0,
	speed: 16,
	width: 16,
	height: 16,
	dir: "A"
};
var bullet21 = {
	x: -100,
	y: -200,
	timeLeft: 0,
	speed: 16,
	width: 16,
	height: 16,
	dir: "A"
};
var bullet22 = {
	x: -100,
	y: -200,
	timeLeft: 0,
	speed: 16,
	width: 16,
	height: 16,
	dir: "A"
};
var bullet31 = {
	x: -100,
	y: -200,
	timeLeft: 0,
	speed: 16,
	width: 16,
	height: 16,
	dir: "A"
};
var bullet32 = {
	x: -100,
	y: -200,
	timeLeft: 0,
	speed: 16,
	width: 16,
	height: 16,
	dir: "A"
};
var bullet41 = {
	x: -100,
	y: -200,
	timeLeft: 0,
	speed: 16,
	width: 16,
	height: 16,
	dir: "A"
};
var bullet42 = {
	x: -100,
	y: -200,
	timeLeft: 0,
	speed: 16,
	width: 16,
	height: 16,
	dir: "A"
};
var bullet51 = {
	x: -100,
	y: -200,
	timeLeft: 0,
	speed: 16,
	width: 16,
	height: 16,
	dir: "A"
};
var bullet52 = {
	x: -100,
	y: -200,
	timeLeft: 0,
	speed: 16,
	width: 16,
	height: 16,
	dir: "A"
};
var bullet61 = {
	x: -100,
	y: -200,
	timeLeft: 0,
	speed: 16,
	width: 16,
	height: 16,
	dir: "A"
};
var bullet62 = {
	x: -100,
	y: -200,
	timeLeft: 0,
	speed: 16,
	width: 16,
	height: 16,
	dir: "A"
};
var bullet71 = {
	x: -100,
	y: -200,
	timeLeft: 0,
	speed: 16,
	width: 16,
	height: 16,
	dir: "A"
};
var bullet72 = {
	x: -100,
	y: -200,
	timeLeft: 0,
	speed: 16,
	width: 16,
	height: 16,
	dir: "A"
};
var bullet81 = {
	x: -100,
	y: -200,
	timeLeft: 0,
	speed: 16,
	width: 16,
	height: 16,
	dir: "A"
};
var bullet82 = {
	x: -100,
	y: -200,
	timeLeft: 0,
	speed: 16,
	width: 16,
	height: 16,
	dir: "A"
};
var Bullets = {1: bullet, 2: bullet2, 3: bullet3, 4: bullet4, 5: bullet5, 6: bullet6, 7: bullet7, 8: bullet8, 9: bullet11, 10: bullet12,
				11: bullet21, 12: bullet22, 13: bullet31, 14: bullet32, 15: bullet41, 16: bullet42, 17: bullet51, 18: bullet52, 19: bullet61, 20: bullet62,
				21: bullet71, 22: bullet72, 23: bullet81, 24: bullet82};
function drawBullet(B){
	if (B.timeLeft > 0){
		if(spell == "Explosive Shots"){
			ctx.fillStyle = "CC0000";
		}
		else if(spell == "Ice Shots"){
			ctx.fillStyle = "66CCFF";
		}
		else if(spell == "Conductive Shots"){
			ctx.fillStyle = "FFFF00";
		}
		else if(spell == "Homing Shots"){
			ctx.fillStyle = "FF00FF";
		}
		else if(spell != "Bubblebeam"){
			ctx.fillStyle = B.color;
		}
		if(spell == "Bubblebeam"){
			ctx.drawImage(MysticBubble, B.x-B.width/2, B.y-B.height/2);
		}
		else{
			if(B.dir == "W" || B.dir == "A" || B.dir == "S" || B.dir == "D"){
				ctx.fillRect(B.x - B.width / 2,
				B.y - B.height / 2,
				B.width, B.height);
			}
			else if(B.dir == "WA" || B.dir == "SD"){
					ctx.fillRect(B.x - B.width / 2,
					B.y - B.height / 2,
					B.width, B.height);
				ctx.fillRect(B.x + B.width / 2, B.y + B.height / 2, B.width, B.height);
				ctx.fillRect(B.x + B.width / 2 + B.width, B.y + B.height / 2 + B.height, B.width, B.height);
				ctx.fillRect(B.x + B.width / 2 + B.width + B.width,
					B.y + B.height / 2 + B.height + B.height, B.width, B.height);
				ctx.fillRect(B.x + B.width / 2 + B.width + B.width + B.width,
					B.y + B.height / 2 + B.height + B.height + B.height, B.width, B.height);
			}
			else if(B.dir == "WD" || B.dir == "AS"){
					ctx.fillRect(B.x,
					B.y - B.height / 2,
					B.width, B.height);
				ctx.fillRect(B.x + B.width, B.y - B.height - B.height / 2, B.width, B.height);
				ctx.fillRect(B.x + B.width + B.width, B.y - B.height - B.height - B.height / 2, B.width, B.height);
				ctx.fillRect(B.x + B.width + B.width + B.width,
					B.y - B.height - B.height - B.height - B.height / 2, B.width, B.height);
				ctx.fillRect(B.x + B.width + B.width + B.width + B.width,
					B.y - B.height - B.height - B.height - B.height - B.height / 2, B.width, B.height);
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
	if(spell == "Homing Shots"){
		var closest = "";
		var cdist = 2000;
		for (E in AllEnemies){
			var distance = Math.sqrt(((B.x - AllEnemies[E].x)*(B.x - AllEnemies[E].x)) + ((B.y - AllEnemies[E].y)*(B.y - AllEnemies[E].y)));
			if(distance < cdist){
				cdist = distance;
				closest = AllEnemies[E];
			}
		}
		var xdifference = closest.x - B.x;
		var ydifference = closest.y - B.y;
		if(closest.x < 8 || closest.y < 8 || closest.x > 792 || closest.y > 568){
			B.dir = B.dir;
		}
		else{
			if(xdifference < 4 && ydifference < 4){
				B.dir = "WA";
				B.width = 4;
				B.height = 4;
			}
			else if(xdifference < 4 && ydifference > 4){
				B.dir = "AS";
				B.width = 4;
				B.height = 4;
			}
			else if(xdifference > 4 && ydifference < 4){
				B.dir = "WD";
				B.width = 4;
				B.height = 4;
			}
			else if (xdifference > 4 && ydifference > 4){
				B.dir = "SD";
				B.width = 4;
				B.height = 4;
			}
			else if (xdifference == 4 && ydifference > 4){
				B.dir = "S";
				B.width = 4;
				B.height = 32;
			}
			else if(xdifference == 4 && ydifference < 4){
				B.dir = "W";
				B.width = 4;
				B.height = 32;
			}
			else if(xdifference < 4 && ydifference == 4){
				B.dir = "A";
				B.width = 32;
				B.height = 4;
			}
			else{
				B.dir = "D";
				B.width = 32;
				B.height = 4;
			}
		}
	}
	if(spell != "Homing Shots"){
		for(O in obstacle1){
			if(collision(B.dir, B, obstacle1[O])){
				obsHit(obstacle1[O]);
				if(spell == "Explosive Shots"){
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
				else if(spell == "Ice Shots"){
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
				if(spell == "Conductive Shots"){
					if(B.dir == "W" || B.dir == "S"){
						B.width = 32;
						B.height = 4;
						if(Math.floor(Math.random() * 2) + 1 == 2){
							B.dir = "A";
						}
						else{
							B.dir = "D";
						}
					}
					else if(B.dir == "A" || B.dir == "D"){
						B.width = 4;
						B.height = 32;
						if(Math.floor(Math.random() * 2) + 1 == 2){
							B.dir = "W";
						}
						else{
							B.dir = "S";
						}
					}
					else if(B.dir == "WD" || B.dir == "AS"){
						B.width = 4;
						B.height = 4;
						if(Math.floor(Math.random() * 2) + 1 == 2){
							B.dir = "WA";
						}
						else{
							B.dir = "SD";
						}
					}
					else if(B.dir == "WA" || B.dir == "SD"){
						B.width = 4;
						B.height = 4;
						if(Math.floor(Math.random() * 2) + 1 == 2){
							B.dir = "WD";
						}
						else{
							B.dir = "AS";
						}
					}
				}
				else{
					B.timeLeft = 0;
				}
			}
		}
		for(O in obstacle2){
			if(collision(B.dir, B, obstacle2[O])){
				obsHit(obstacle2[O]);
				if(spell == "Explosive Shots"){
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
				else if(spell == "Ice Shots"){
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
				if(spell == "Conductive Shots"){
					if(B.dir == "W" || B.dir == "S"){
						B.width = 32;
						B.height = 4;
						if(Math.floor(Math.random() * 2) + 1 == 2){
							B.dir = "A";
						}
						else{
							B.dir = "D";
						}
					}
					else if(B.dir == "A" || B.dir == "D"){
						B.width = 4;
						B.height = 32;
						if(Math.floor(Math.random() * 2) + 1 == 2){
							B.dir = "W";
						}
						else{
							B.dir = "S";
						}
					}
					else if(B.dir == "WD" || B.dir == "AS"){
						B.width = 4;
						B.height = 4;
						if(Math.floor(Math.random() * 2) + 1 == 2){
							B.dir = "WA";
						}
						else{
							B.dir = "SD";
						}
					}
					else if(B.dir == "WA" || B.dir == "SD"){
						B.width = 4;
						B.height = 4;
						if(Math.floor(Math.random() * 2) + 1 == 2){
							B.dir = "WD";
						}
						else{
							B.dir = "AS";
						}
					}
				}
				else{
					B.timeLeft = 0;
				}
			}
		}
		for(O in obstacle3){
			if(collision(B.dir, B, obstacle3[O])){
				obsHit(obstacle3[O]);
				if(spell == "Explosive Shots"){
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
				else if(spell == "Ice Shots"){
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
				if(spell == "Conductive Shots"){
					if(B.dir == "W" || B.dir == "S"){
						B.width = 32;
						B.height = 4;
						if(Math.floor(Math.random() * 2) + 1 == 2){
							B.dir = "A";
						}
						else{
							B.dir = "D";
						}
					}
					else if(B.dir == "A" || B.dir == "D"){
						B.width = 4;
						B.height = 32;
						if(Math.floor(Math.random() * 2) + 1 == 2){
							B.dir = "W";
						}
						else{
							B.dir = "S";
						}
					}
					else if(B.dir == "WD" || B.dir == "AS"){
						B.width = 4;
						B.height = 4;
						if(Math.floor(Math.random() * 2) + 1 == 2){
							B.dir = "WA";
						}
						else{
							B.dir = "SD";
						}
					}
					else if(B.dir == "WA" || B.dir == "SD"){
						B.width = 4;
						B.height = 4;
						if(Math.floor(Math.random() * 2) + 1 == 2){
							B.dir = "WD";
						}
						else{
							B.dir = "AS";
						}
					}
				}
				else{
					B.timeLeft = 0;
				}
			}
		}
	}
	for (E in AllEnemies){
		if(collision(B.dir, B, AllEnemies[E])){
			if(spell == "Explosive Shots"){
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
			else if(spell == "Ice Shots"){
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
			else if(spell == "Conductive Shots"){
				if(B.dir == "W" || B.dir == "S"){
					B.width = 32;
					B.height = 4;
					if(Math.floor(Math.random() * 2) + 1 == 2){
						B.dir = "A";
					}
					else{
						B.dir = "D";
					}
				}
				else if(B.dir == "A" || B.dir == "D"){
					B.width = 4;
					B.height = 32;
					if(Math.floor(Math.random() * 2) + 1 == 2){
						B.dir = "W";
					}
					else{
						B.dir = "S";
					}
				}
				else if(B.dir == "WD" || B.dir == "AS"){
					B.width = 4;
					B.height = 4;
					if(Math.floor(Math.random() * 2) + 1 == 2){
						B.dir = "WA";
					}
					else{
						B.dir = "SD";
					}
				}
				else if(B.dir == "WA" || B.dir == "SD"){
					B.width = 4;
					B.height = 4;
					if(Math.floor(Math.random() * 2) + 1 == 2){
						B.dir = "WD";
					}
					else{
						B.dir = "AS";
					}
				}
			}
			else{
				B.timeLeft = 0;
			}
			onHit(AllEnemies[E]);
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
		B.x -= B.speed;
		B.y -= B.speed;
	}
	else if (B.timeLeft > 0 && B.dir == "AS"){
		B.timeLeft--;
		B.x -= B.speed;
		B.y += B.speed;
	}
	else if (B.timeLeft > 0 && B.dir == "SD"){
		B.timeLeft--;
		B.x += B.speed;
		B.y += B.speed;
	}
	else if (B.timeLeft > 0 && B.dir == "WD"){
		B.timeLeft--;
		B.x += B.speed;
		B.y -= B.speed;
	}
	else if (B.timeLeft > 0 && B.dir == "DW"){
		B.timeLeft--;
		B.x -= B.speed/2;
		B.y -= B.speed;
	}
	else if (B.timeLeft > 0 && B.dir == "D2W"){
		B.timeLeft--;
		B.x += B.speed/2;
		B.y -= B.speed;
	}
	else if (B.timeLeft > 0 && B.dir == "DA"){
		B.timeLeft--;
		B.x -= B.speed;
		B.y -= B.speed/2;
	}
	else if (B.timeLeft > 0 && B.dir == "D2A"){
		B.timeLeft--;
		B.x -= B.speed;
		B.y += B.speed/2;
	}
	else if (B.timeLeft > 0 && B.dir == "DS"){
		B.timeLeft--;
		B.x -= B.speed/2;
		B.y += B.speed;
	}
	else if (B.timeLeft > 0 && B.dir == "D2S"){
		B.timeLeft--;
		B.x += B.speed/2;
		B.y += B.speed;
	}
	else if (B.timeLeft > 0 && B.dir == "DD"){
		B.timeLeft--;
		B.x += B.speed;
		B.y -= B.speed/2;
	}
	else if (B.timeLeft > 0 && B.dir == "D2D"){
		B.timeLeft--;
		B.x += B.speed;
		B.y += B.speed/2;
	}
	else if (B.timeLeft > 0 && B.dir == "DWD"){
		B.timeLeft--;
		B.x += B.speed/2;
		B.y -= B.speed/4;
	}
	else if (B.timeLeft > 0 && B.dir == "D2WD"){
		B.timeLeft--;
		B.x += B.speed/4;
		B.y -= B.speed/2;
	}
	else if (B.timeLeft > 0 && B.dir == "DWA"){
		B.timeLeft--;
		B.x -= B.speed/2;
		B.y -= B.speed/4;
	}
	else if (B.timeLeft > 0 && B.dir == "D2WA"){
		B.timeLeft--;
		B.x -= B.speed/4;
		B.y -= B.speed/2;
	}
	else if (B.timeLeft > 0 && B.dir == "DSD"){
		B.timeLeft--;
		B.x += B.speed/2;
		B.y += B.speed/4;
	}
	else if (B.timeLeft > 0 && B.dir == "D2SD"){
		B.timeLeft--;
		B.x += B.speed/4;
		B.y += B.speed/2;
	}
	else if (B.timeLeft > 0 && B.dir == "DAS"){
		B.timeLeft--;
		B.x -= B.speed/2;
		B.y += B.speed/4;
	}
	else if (B.timeLeft > 0 && B.dir == "D2AS"){
		B.timeLeft--;
		B.x -= B.speed/4;
		B.y += B.speed/2;
	}
}
// ------------------------------------------------------ Spell Combos ---------------------------------------------------------------//
// Frozen Fireball: Fires a projectile. On hitting an obstacle or wall it explodes forming an ice field.
var fireice = {
	color1: "FF6600",
	color2: "00CCFF",
	color: "FF6600",
	state: 0,
	x: -1000,
	y: -200,
	width: 32,
	height: 32,
	frame: 0,
	cd: 0,
	onScreen: 0,
	dir: "W",
	speed: 16,
	flicker: 600,
	draw: function(){
		if(this.onScreen == 1){
			if(this.state == 0){
				if(this.flicker/2 != Math.round(this.flicker/2)){
					ctx.globalAlpha = 0.5;
					ctx.fillStyle = this.color2;
					ctx.fillRect(this.x - this.width / 2,
					this.y - this.height / 2,
					this.width, this.height);
					ctx.globalAlpha = 1;
					this.flicker-=1;
				}
				else{
					ctx.globalAlpha = 0.5;
					ctx.fillStyle = this.color1;
					ctx.fillRect(this.x - this.width / 2,
					this.y - this.height / 2,
					this.width, this.height);
					ctx.globalAlpha = 1;
					this.flicker-=1;
				}	
			}
			else{
			ctx.globalAlpha = 1;
			ctx.globalAlpha = 0.5;
			ctx.fillStyle = this.color;
			ctx.fillRect(this.x - this.width / 2,
			this.y - this.height / 2,
			this.width, this.height);
			ctx.globalAlpha = 1;
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
			if(this.frame == 60){
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
		Frozen.currentTime=0;
		Frozen.play();
		this.height = 32;
		this.width = 32;
		this.x = player.x;
		this.y = player.y;
		this.dir = player.dir;
		this.cd = 120;
		this.frame = 0;
		this.onScreen = 1;
		this.color = this.color1;
		this.state = 0;
	}
	else{
		return 0;
	}
	}
	
};

// Fire and Heal: Heals user by 1 and casts Fire
var fireheal = {
	cd: 0,
	tick: function(){
		if(this.cd > 0){
			this.cd-=1;
		}
	},
	shoot: function(){
		if(this.cd == 0){
			this.cd = 600;
			fire.cd = 0;
			earth.cd = 0;
			fire.shoot();
			earth.shoot();
			fire.cd = 0;
			earth.cd = 0;
			fire.cast = 30;
		}
		else{
			return 0;
		}
	}	
};

// Ice and Heal: Heals user by 1 and casts Ice
var iceheal = {
	cd: 0,
	tick: function(){
		if(this.cd > 0){
			this.cd-=1;
		}
	},
	shoot: function(){
		if(this.cd == 0){
			this.cd = 600;
			ice.cd = 0;
			earth.cd = 0;
			ice.shoot();
			earth.shoot();
			ice.cd = 0;
			earth.cd = 0;
			ice.cast = 30;
		}
		else{
			return 0;
		}
	}	
};

// Lightning and Heal: Heals user by 1 and casts Lightning
var lightningheal = {
	cd: 0,
	tick: function(){
		if(this.cd > 0){
			this.cd-=1;
		}
	},
	shoot: function(){
		if(this.cd == 0){
			this.cd = 600;
			lightning.cd = 0;
			earth.cd = 0;
			lightning.shoot();
			earth.shoot();
			lightning.cd = 0;
			earth.cd = 0;
			lightning.cast = 30;
		}
		else{
			return 0;
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
	onScreen: 0,
	cast: 0,
	used: 0,
	draw: function(){
		if(this.onScreen == 1){
			if(this.used == 0){
				Thunder.currentTime=0;
				Thunder.play();
				this.used = 1;
			}
			if(this.hstate == 0){
				ctx.drawImage(hlightning1, this.hx - this.hwidth/2, player.y - this.hheight/2);
				this.hstate+=1;
			}
			else if(this.hstate == 1){
				ctx.drawImage(hlightning2, this.hx - this.hwidth/2, player.y - this.hheight/2);
				this.hstate+=1;
			}
			else if(this.hstate == 2){
				ctx.drawImage(hlightning3, this.hx - this.hwidth/2, player.y - this.hheight/2);
				this.hstate=0;
			}
			if(this.vstate == 0){
					ctx.drawImage(vlightning1, player.x-this.vwidth/2, this.vy - this.vheight/2);
					this.vstate+=1;
			}
			else if(this.vstate == 1){
					ctx.drawImage(vlightning2, player.x-this.vwidth/2, this.vy - this.vheight/2);
					this.vstate+=1;
			}
			else if(this.vstate == 2){
					ctx.drawImage(vlightning3, player.x-this.vwidth/2, this.vy - this.vheight/2);
					this.vstate=0;
			}
		}
	},
	effect: function(){
		if(this.cd > 0){
			this.cd-=1;
			this.vx = player.x;
		}
		if(this.timeLeft > 0 && this.cast == 0){
			this.onScreen = 1;
		}
		if(this.cast > 0){
			this.cast-=1;
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
				if(AllEnemies[E].x >= player.x && AllEnemies[E].x <= player.x + this.vwidth && AllEnemies[E].onScreen == 1){
					if(firelightningf1.x == -1000){
						firelightningf1.x = AllEnemies[E].x;
						firelightningf1.y = AllEnemies[E].y;
						firelightningf1.shoot();
					}
					else if(firelightningf2.x == -1000){
						firelightningf2.x = AllEnemies[E].x;
						firelightningf2.y = AllEnemies[E].y;
						firelightningf2.shoot();
					}
					else if(firelightningf3.x == -1000){
						firelightningf3.x = AllEnemies[E].x;
						firelightningf3.y = AllEnemies[E].y;
						firelightningf3.shoot();
					}
					else if(firelightningf4.x == -1000){
						firelightningf4.x = AllEnemies[E].x;
						firelightningf4.y = AllEnemies[E].y;
						firelightningf4.shoot();
					}
				}
			}			
			for (E in AllEnemies){
				if(AllEnemies[E].y <= player.y + this.hheight && AllEnemies[E].y >= player.y && AllEnemies[E].onScreen == 1){
					if(firelightningf1.x == -1000){
						firelightningf1.x = AllEnemies[E].x;
						firelightningf1.y = AllEnemies[E].y;
						firelightningf1.shoot();
					}
					else if(firelightningf2.x == -1000){
						firelightningf2.x = AllEnemies[E].x;
						firelightningf2.y = AllEnemies[E].y;
						firelightningf2.shoot();
					}
					else if(firelightningf3.x == -1000){
						firelightningf3.x = AllEnemies[E].x;
						firelightningf3.y = AllEnemies[E].y;
						firelightningf3.shoot();
					}
					else if(firelightningf4.x == -1000){
						firelightningf4.x = AllEnemies[E].x;
						firelightningf4.y = AllEnemies[E].y;
						firelightningf4.shoot();
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
		this.cd = 900;
		this.timeLeft = 210;
		this.cast = 45;
		castingBar.onScreen = 1;
		castingBar.cast = 45;
		castingBar.castmax = 45;
		this.used = 0;
	}
	}
	
};
var firelightningf1 = {
	color: "FF6600",
	x: -1000,
	y: -200,
	timeLeft: 0,
	width: 32,
	height: 32,
	frame: 0,
	onScreen: 0,
	
	draw: function(){
		if(this.onScreen == 1){
			ctx.globalAlpha = 0.5;
			ctx.fillStyle = this.color;
			ctx.fillRect(this.x - this.width / 2,
			this.y - this.height / 2,
			this.width, this.height);
			ctx.globalAlpha = 1;
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
		Explosion.currentTime=0;
		Explosion.play();
		this.height = 32;
		this.width = 32;
		this.frame = 0;
		this.onScreen = 1;
	}
	
};
var firelightningf2 = {
	color: "FF6600",
	x: -1000,
	y: -200,
	timeLeft: 0,
	width: 32,
	height: 32,
	frame: 0,
	onScreen: 0,
	
	draw: function(){
		if(this.onScreen == 1){
			ctx.globalAlpha = 0.5;
			ctx.fillStyle = this.color;
			ctx.fillRect(this.x - this.width / 2,
			this.y - this.height / 2,
			this.width, this.height);
			ctx.globalAlpha = 1;
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
		Explosion.currentTime=0;
		Explosion.play();
		this.height = 32;
		this.width = 32;
		this.frame = 0;
		this.onScreen = 1;
	}
	
	
};
var firelightningf3 = {
	color: "FF6600",
	x: -1000,
	y: -200,
	timeLeft: 0,
	width: 32,
	height: 32,
	frame: 0,
	onScreen: 0,
	
	draw: function(){
		if(this.onScreen == 1){
			ctx.globalAlpha = 0.5;
			ctx.fillStyle = this.color;
			ctx.fillRect(this.x - this.width / 2,
			this.y - this.height / 2,
			this.width, this.height);
			ctx.globalAlpha = 1;
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
		Explosion.currentTime=0;
		Explosion.play();
		this.height = 32;
		this.width = 32;
		this.frame = 0;
		this.onScreen = 1;
	}
	
};
var firelightningf4 = {
	color: "FF6600",
	x: -1000,
	y: -200,
	timeLeft: 0,
	width: 32,
	height: 32,
	frame: 0,
	onScreen: 0,
	
	draw: function(){
		if(this.onScreen == 1){
			ctx.globalAlpha = 0.5;
			ctx.fillStyle = this.color;
			ctx.fillRect(this.x - this.width / 2,
			this.y - this.height / 2,
			this.width, this.height);
			ctx.globalAlpha = 1;
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
		Explosion.currentTime=0;
		Explosion.play();
		this.height = 32;
		this.width = 32;
		this.frame = 0;
		this.onScreen = 1;
	}
};

// Frozen Web: Creates a web of ice that stops all enemies in its tracks
var vertil = {
	color: "00CCFF",
	timeLeft: 0,
	width: 16,
	height: 16,
	x: -2000,
	y: -2000,
	frame: 0,
	onScreen: 0,
	split: 0,
	draw: function(){
		if(this.frame == 240){
			for (E in AllEnemies){
				if(collision(AllEnemies[E].dir, AllEnemies[E], this)){
					AllEnemies[E].speed = AllEnemies[E].speed2*2;
				}
			}
			this.frame = 0;
			this.onScreen = 0;
			this.x = -2000;
			this.y = -2000;
			this.width = 16;
			this.height = 16;
		}
		if(this.onScreen == 1){
			ctx.globalAlpha = 0.25;
			ctx.fillStyle = this.color;
			ctx.fillRect(this.x - this.width / 2, this.y - this.height / 2,	this.width, this.height);
			ctx.globalAlpha = 1;
			this.height = this.height + (32*this.frame);
			this.frame++;
			for(E in AllEnemies){
				if(collision(AllEnemies[E].dir, AllEnemies[E], this)){
					AllEnemies[E].speed = 0;
				}
			}
		}
	}	
};
var vertil2 = {
	color: "00CCFF",
	timeLeft: 0,
	width: 16,
	height: 16,
	x: -2000,
	y: -2000,
	frame: 0,
	onScreen: 0,
	split: 0,
	draw: function(){
		if(this.frame == 240){
			for (E in AllEnemies){
				if(collision(AllEnemies[E].dir, AllEnemies[E], this)){
					AllEnemies[E].speed = AllEnemies[E].speed2*2;
				}
			}
			this.frame = 0;
			this.onScreen = 0;
			this.x = -2000;
			this.y = -2000;
			this.width = 16;
			this.height = 16;
		}
		if(this.onScreen == 1){
			ctx.globalAlpha = 0.25;
			ctx.fillStyle = this.color;
			ctx.fillRect(this.x - this.width / 2, this.y - this.height / 2,	this.width, this.height);
			ctx.globalAlpha = 1;
			this.height = this.height + (32*this.frame);
			this.frame++;
			for(E in AllEnemies){
				if(collision(AllEnemies[E].dir, AllEnemies[E], this)){
					AllEnemies[E].speed = 0;
				}
			}
		}
	}	
};
var vertil3 = {
	color: "00CCFF",
	timeLeft: 0,
	width: 16,
	height: 16,
	x: -2000,
	y: -2000,
	frame: 0,
	onScreen: 0,
	split: 0,
	draw: function(){
		if(this.frame == 240){
			for (E in AllEnemies){
				if(collision(AllEnemies[E].dir, AllEnemies[E], this)){
					AllEnemies[E].speed = AllEnemies[E].speed2*2;
				}
			}
			this.frame = 0;
			this.onScreen = 0;
			this.x = -2000;
			this.y = -2000;
			this.width = 16;
			this.height = 16;
		}
		if(this.onScreen == 1){
			ctx.globalAlpha = 0.25;
			ctx.fillStyle = this.color;
			ctx.fillRect(this.x - this.width / 2, this.y - this.height / 2,	this.width, this.height);
			ctx.globalAlpha = 1;
			this.height = this.height + (32*this.frame);
			this.frame++;
			for(E in AllEnemies){
				if(collision(AllEnemies[E].dir, AllEnemies[E], this)){
					AllEnemies[E].speed = 0;
				}
			}
		}
	}	
};
var vertil4 = {
	color: "00CCFF",
	timeLeft: 0,
	width: 16,
	height: 16,
	x: -2000,
	y: -2000,
	frame: 0,
	onScreen: 0,
	split: 0,
	draw: function(){
		if(this.frame == 240){
			for (E in AllEnemies){
				if(collision(AllEnemies[E].dir, AllEnemies[E], this)){
					AllEnemies[E].speed = AllEnemies[E].speed2*2;
				}
			}
			this.frame = 0;
			this.onScreen = 0;
			this.x = -2000;
			this.y = -2000;
			this.width = 16;
			this.height = 16;
		}
		if(this.onScreen == 1){
			ctx.globalAlpha = 0.25;
			ctx.fillStyle = this.color;
			ctx.fillRect(this.x - this.width / 2, this.y - this.height / 2,	this.width, this.height);
			ctx.globalAlpha = 1;
			this.height = this.height + (32*this.frame);
			this.frame++;
			for(E in AllEnemies){
				if(collision(AllEnemies[E].dir, AllEnemies[E], this)){
					AllEnemies[E].speed = 0;
				}
			}
		}
	}	
};
var vertil5 = {
	color: "00CCFF",
	timeLeft: 0,
	width: 16,
	height: 16,
	x: -2000,
	y: -2000,
	frame: 0,
	onScreen: 0,
	split: 0,
	draw: function(){
		if(this.frame == 240){
			for (E in AllEnemies){
				if(collision(AllEnemies[E].dir, AllEnemies[E], this)){
					AllEnemies[E].speed = AllEnemies[E].speed2*2;
				}
			}
			this.frame = 0;
			this.onScreen = 0;
			this.x = -2000;
			this.y = -2000;
			this.width = 16;
			this.height = 16;
		}
		if(this.onScreen == 1){
			ctx.globalAlpha = 0.25;
			ctx.fillStyle = this.color;
			ctx.fillRect(this.x - this.width / 2, this.y - this.height / 2,	this.width, this.height);
			ctx.globalAlpha = 1;
			this.height = this.height + (32*this.frame);
			this.frame++;
			for(E in AllEnemies){
				if(collision(AllEnemies[E].dir, AllEnemies[E], this)){
					AllEnemies[E].speed = 0;
				}
			}
		}
	}	
};
var horil = {
	color: "00CCFF",
	timeLeft: 0,
	width: 16,
	height: 16,
	x: -2000,
	y: -2000,
	frame: 0,
	onScreen: 0,
	split: 0,
	draw: function(){
		if(this.frame == 240){
			for (E in AllEnemies){
				if(collision(AllEnemies[E].dir, AllEnemies[E], this)){
					AllEnemies[E].speed = AllEnemies[E].speed2*2;
				}
			}
			this.frame = 0;
			this.onScreen = 0;
			this.x = -2000;
			this.y = -2000;
			this.width = 16;
			this.height = 16;
		}
		if(this.onScreen == 1){
			ctx.globalAlpha = 0.25;
			ctx.fillStyle = this.color;
			ctx.fillRect(this.x - this.width / 2, this.y - this.height / 2,	this.width, this.height);
			ctx.globalAlpha = 1;
			this.width = this.width + (32*this.frame);
			this.frame++;
			for(E in AllEnemies){
				if(collision(AllEnemies[E].dir, AllEnemies[E], this)){
					AllEnemies[E].speed = 0;
				}
			}
		}
	}	
};
var horil2 = {
	color: "00CCFF",
	timeLeft: 0,
	width: 16,
	height: 16,
	x: -2000,
	y: -2000,
	frame: 0,
	onScreen: 0,
	split: 0,
	draw: function(){
		if(this.frame == 240){
			for (E in AllEnemies){
				if(collision(AllEnemies[E].dir, AllEnemies[E], this)){
					AllEnemies[E].speed = AllEnemies[E].speed2*2;
				}
			}
			this.frame = 0;
			this.onScreen = 0;
			this.x = -2000;
			this.y = -2000;
			this.width = 16;
			this.height = 16;
		}
		if(this.onScreen == 1){
			ctx.globalAlpha = 0.25;
			ctx.fillStyle = this.color;
			ctx.fillRect(this.x - this.width / 2, this.y - this.height / 2,	this.width, this.height);
			ctx.globalAlpha = 1;
			this.width = this.width + (32*this.frame);
			this.frame++;
			for(E in AllEnemies){
				if(collision(AllEnemies[E].dir, AllEnemies[E], this)){
					AllEnemies[E].speed = 0;
				}
			}
		}
	}	
};
var horil3 = {
	color: "00CCFF",
	timeLeft: 0,
	width: 16,
	height: 16,
	x: -2000,
	y: -2000,
	frame: 0,
	onScreen: 0,
	split: 0,
	draw: function(){
		if(this.frame == 240){
			for (E in AllEnemies){
				if(collision(AllEnemies[E].dir, AllEnemies[E], this)){
					AllEnemies[E].speed = AllEnemies[E].speed2*2;
				}
			}
			this.frame = 0;
			this.onScreen = 0;
			this.x = -2000;
			this.y = -2000;
			this.width = 16;
			this.height = 16;
		}
		if(this.onScreen == 1){
			ctx.globalAlpha = 0.25;
			ctx.fillStyle = this.color;
			ctx.fillRect(this.x - this.width / 2, this.y - this.height / 2,	this.width, this.height);
			ctx.globalAlpha = 1;
			this.width = this.width + (32*this.frame);
			this.frame++;
			for(E in AllEnemies){
				if(collision(AllEnemies[E].dir, AllEnemies[E], this)){
					AllEnemies[E].speed = 0;
				}
			}
		}
	}	
};
var horil4 = {
	color: "00CCFF",
	timeLeft: 0,
	width: 16,
	height: 16,
	x: -2000,
	y: -2000,
	frame: 0,
	onScreen: 0,
	split: 0,
	draw: function(){
		if(this.frame == 240){
			for (E in AllEnemies){
				if(collision(AllEnemies[E].dir, AllEnemies[E], this)){
					AllEnemies[E].speed = AllEnemies[E].speed2*2;
				}
			}
			this.frame = 0;
			this.onScreen = 0;
			this.x = -2000;
			this.y = -2000;
			this.width = 16;
			this.height = 16;
		}
		if(this.onScreen == 1){
			ctx.globalAlpha = 0.25;
			ctx.fillStyle = this.color;
			ctx.fillRect(this.x - this.width / 2, this.y - this.height / 2,	this.width, this.height);
			ctx.globalAlpha = 1;
			this.width = this.width + (32*this.frame);
			this.frame++;
			for(E in AllEnemies){
				if(collision(AllEnemies[E].dir, AllEnemies[E], this)){
					AllEnemies[E].speed = 0;
				}
			}
		}
	}	
};
var horil5 = {
	color: "00CCFF",
	timeLeft: 0,
	width: 16,
	height: 16,
	x: -2000,
	y: -2000,
	frame: 0,
	onScreen: 0,
	split: 0,
	draw: function(){
		if(this.frame == 240){
			for (E in AllEnemies){
				if(collision(AllEnemies[E].dir, AllEnemies[E], this)){
					AllEnemies[E].speed = AllEnemies[E].speed2*2;
				}
			}
			this.frame = 0;
			this.onScreen = 0;
			this.x = -2000;
			this.y = -2000;
			this.width = 16;
			this.height = 16;
		}
		if(this.onScreen == 1){
			ctx.globalAlpha = 0.25;
			ctx.fillStyle = this.color;
			ctx.fillRect(this.x - this.width / 2, this.y - this.height / 2,	this.width, this.height);
			ctx.globalAlpha = 1;
			this.width = this.width + (32*this.frame);
			this.frame++;
			for(E in AllEnemies){
				if(collision(AllEnemies[E].dir, AllEnemies[E], this)){
					AllEnemies[E].speed = 0;
				}
			}
		}
	}	
};
var webhoril = {1: horil5, 2: horil4, 3: horil3, 4: horil2, 5: horil};
var webvertil = {1: vertil5, 2: vertil4, 3: vertil3, 4: vertil2, 5: vertil};
var icelightning = {
	color: "00CCFF",
	cd: 0,
	timeLeft: 0,
	end: false,
	AllEnemiesil: {1: Enemy, 2: EnemyA, 3: EnemyB, 4: EnemyC, 5: Tenemy, 6: TenemyA, 7: TenemyB, 8: Sorceror, 9: Lavaman, 10: Lavaman2, 11: Lavaman3, 12: Lavaman4, 13: Spawner},
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
			horil.split = 0;
			horil2.split = 0;
			horil3.split = 0;
			horil4.split = 0;
			horil5.split = 0;
			vertil.split = 0;
			vertil2.split = 0;
			vertil3.split = 0;
			vertil4.split = 0;
			vertil5.split = 0;
			horil.onScreen = 0;
			horil2.onScreen = 0;
			horil3.onScreen = 0;
			horil4.onScreen = 0;
			horil5.onScreen = 0;
			vertil.onScreen = 0;
			vertil2.onScreen = 0;
			vertil3.onScreen = 0;
			vertil4.onScreen = 0;
			vertil5.onScreen = 0;
			horil.frame = 240;
			horil2.frame = 240;
			horil3.frame = 240;
			horil4.frame = 240;
			horil5.frame = 240;
			vertil.frame = 240;
			vertil2.frame = 240;
			vertil3.frame = 240;
			vertil4.frame = 240;
			vertil5.frame = 240;
			this.end = false;
			for (E in AllEnemies){
				if(AllEnemies[E].speed == 0){
					AllEnemies[E].speed = AllEnemies[E].speed2*2;
				}
			}
			this.AllEnemiesil = {1: Enemy, 2: EnemyA, 3: EnemyB, 4: EnemyC, 5: Tenemy, 6: TenemyA, 7: TenemyB, 8: Sorceror, 9: Lavaman, 10: Lavaman2, 11: Lavaman3, 12: Lavaman4, 13: Spawner};
		}
	},
	// Slow all enemies in radius
	effect: function(){
	if(this.timeLeft>0){
		for(A in webvertil){
			for(E in this.AllEnemiesil){
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
		for(A in webhoril){
			for(E in this.AllEnemiesil){
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
		this.cd = 450;
		this.timeLeft = 300;
		this.AllEnemiesil = {1: Enemy, 2: EnemyA, 3: EnemyB, 4: EnemyC, 5: Tenemy, 6: TenemyA, 7: TenemyB, 8: Sorceror, 9: Lavaman, 10: Lavaman2, 11: Lavaman3, 12: Lavaman4, 13: Spawner};
	}
	}
	
};

// Fire Wave: Damages all enemies in front of the player
var airfire = {
	color1: "FF6600",
	color2: "990000",
	x: -100,
	y: -200,
	ox: -100,
	oy: -200,
	width: 32,
	height: 8,
	hwidth: 8,
	hheight: 32,
	frame: 0,
	cd: 0,
	speed: 16,
	onScreen: 0,
	
	draw: function(){
		if(this.onScreen == 1){
			if(this.frame/2 == Math.round(this.frame/2)){
				ctx.fillStyle = this.color1;
			}
			else{
				ctx.fillStyle = this.color2;
			}
			ctx.fillRect(this.ox - player.width / 2,
				this.oy - player.height / 2,
				player.width, player.height);
			if(this.dir == "W" || this.dir == "S"){
				ctx.fillRect(this.x - this.width / 2,
				this.y - this.height / 2,
				this.width, this.height);
			}
			else if(this.dir == "A" || this.dir == "D"){
				ctx.fillRect(this.x - this.hwidth / 2,
				this.y - this.hheight / 2,
				this.hwidth, this.hheight);
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
			this.hwidth = 8;
			this.frame = 0;
			this.hheight = 32;
		}
		else if(this.onScreen ==1){
			if(this.dir == "S" || this.dir == "W"){
				this.width = 32 + (4*this.frame);
			}
			else if(this.dir == "A" || this.dir == "D"){
				this.hheight = 32 + (4*this.frame);
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
		this.width = 32;
		this.x = player.x;
		this.y = player.y;
		this.ox = player.x;
		this.oy = player.y;
		this.dir = player.dir;
		this.cd = 60;
		this.frame = 0;
		this.onScreen = 1;
	}
	else{
		return 0;
	}
	}
};
var airfire12 = {
	color1: "FF6600",
	color2: "990000",
	x: -100,
	y: -200,
	width: 32,
	height: 8,
	hwidth: 8,
	hheight: 32,
	frame: 0,
	speed: 16,
	onScreen: 0,
	
	draw: function(){
		if(this.onScreen == 1){
			if(this.frame/2 == Math.round(this.frame/2)){
				ctx.fillStyle = this.color1;
			}
			else{
				ctx.fillStyle = this.color2;
			}
			if(this.dir == "W" || this.dir == "S"){
				ctx.fillRect(this.x - this.width / 2,
				this.y - this.height / 2,
				this.width, this.height);
			}
			else if(this.dir == "A" || this.dir == "D"){
				ctx.fillRect(this.x - this.hwidth / 2,
				this.y - this.hheight / 2,
				this.hwidth, this.hheight);
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
			this.hwidth = 8;
			this.hheight = 32;
			this.frame = 0;
			for(E in AllEnemies){
				AllEnemies[E].speed = AllEnemies[E].speed2*2;
			}
		}
		else if(this.onScreen ==1){
			if(this.dir == "S" || this.dir == "W"){
				this.width = 32 + (4*this.frame);
			}
			else if(this.dir == "A" || this.dir == "D"){
				this.hheight = 32 + (4*this.frame);
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
		this.width = 32;
		this.dir = airfire.dir;
		this.frame = 0;
		this.onScreen = 1;
	}
};

var airfire13 = {
	color1: "FF6600",
	color2: "990000",
	x: -100,
	y: -200,
	width: 32,
	height: 8,
	hwidth: 8,
	hheight: 32,
	frame: 0,
	speed: 16,
	onScreen: 0,
	
	draw: function(){
		if(this.onScreen == 1){
			if(this.frame/2 == Math.round(this.frame/2)){
				ctx.fillStyle = this.color1;
			}
			else{
				ctx.fillStyle = this.color2;
			}
			if(this.dir == "W" || this.dir == "S"){
				ctx.fillRect(this.x - this.width / 2,
				this.y - this.height / 2,
				this.width, this.height);
			}
			else if(this.dir == "A" || this.dir == "D"){
				ctx.fillRect(this.x - this.hwidth / 2,
				this.y - this.hheight / 2,
				this.hwidth, this.hheight);
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
			this.hwidth = 8;
			this.hheight = 32;
			this.frame = 0;
			for(E in AllEnemies){
				AllEnemies[E].speed = AllEnemies[E].speed2*2;
			}
		}
		else if(this.onScreen ==1){
			if(this.dir == "S" || this.dir == "W"){
				this.width = 32 + (4*this.frame);
			}
			else if(this.dir == "A" || this.dir == "D"){
				this.hheight = 32 + (4*this.frame);
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
		this.width = 32;
		this.dir = airfire.dir;
		this.frame = 0;
		this.onScreen = 1;
	}
};

// Maelstrom: Slows all enemies on screen and creates a storm around the player
var airice = {
	color1: "3300CC",
	color2: "33CCCC",
	x: -100,
	y: -200,
	timeLeft: 0,
	width: 64,
	height: 64,
	cd: 0,
	onScreen: 0,
	cast: 0,
	used: 0,
	
	draw: function(){
		if(this.onScreen == 1 && this.cast == 0){
			if(this.used == 0){
				Fwave.currentTime=0;
				Fwave.play();
				Frozen.currentTime=0;
				Frozen.play();
				this.used = 1;
			}
			ctx.globalAlpha = 0.25;
			if(this.timeLeft/2 != Math.round(this.timeLeft/2)){
				ctx.fillStyle = this.color1;
			}
			else{
				ctx.fillStyle = this.color2;
			}
			ctx.fillRect(this.x - this.width / 2,
			this.y - this.height / 2,
			this.width, this.height);
		}
	},
	
	effect: function(){
		if(this.cd > 0){
			this.cd-=1;
		}
		if(this.cast > 0){
			this.cast-=1;
		}
		if(this.timeLeft == 0 && this.onScreen == 1){
			this.onScreen = 0;
			ice.cd = 0;
			ctx.globalAlpha = 1;
		}
		else if(this.timeLeft<=30 && this.cast == 0){
			this.height+=4;
			this.width+=4;
		}
		else if(this.timeLeft<=60 && this.cast == 0){
			this.height-=4;
			this.width-=4;
		}
		else if(this.timeLeft<=90 && this.cast == 0){
			this.height+=4;
			this.width+=4;
		}
		else if(this.timeLeft <= 120 && this.cast == 0){
			this.height-=4;
			this.width-=4;
		}
		else if(this.cast == 0){
			this.height+=4;
			this.width+=4;
		}
		if(this.timeLeft != 0 && this.cast == 0){
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
		this.cd = 450;
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
		ice.shoot();
		this.used = 0;
	}
	}
};
// Gust and Heal: Heals user by 1 and casts Gust
var airearth = {
	cd: 0,
	tick: function(){
		if(this.cd > 0){
			this.cd-=1;
		}
	},
	shoot: function(){
		if(this.cd == 0){
			this.cd = 450;
			air.cd = 0;
			earth.cd = 0;
			air.shoot();
			earth.shoot();
			air.cd = 0;
			earth.cd = 0;
			air.cast = 30;
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
	onScreen: 0,
	LonScreen: 0,
	frame: 0,
	
	draw: function(){
		if(this.LonScreen == 1){
			Thunder.currentTime=0;
			Thunder.play();
			this.LonScreen = 0;
			ctx.drawImage(hlightning1, this.hx - this.hwidth/2, this.hy - this.hheight/2);
			ctx.drawImage(vlightning1, this.vx-this.vwidth/2, this.vy - this.vheight/2);
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
				if(AllEnemies[E].x >= this.vx && AllEnemies[E].x <= this.vx + this.vwidth && AllEnemies[E].onScreen == 1){
					onHit(AllEnemies[E]);
				}
			}			
			for (E in AllEnemies){
				if(AllEnemies[E].y <= this.hy + this.hheight && AllEnemies[E].y >= this.hy && AllEnemies[E].onScreen == 1){
					onHit(AllEnemies[E]);
				}
			}			
		}
	},
	// Spawn
	shoot: function(){
	if(this.cd == 0){
		this.cd = 60;
		this.onScreen = 1;
		this.timeLeft = 360;
		this.frame = 0;
		air.cd = 0;
		air.shoot();
		air.cd = 0;
	}
	}
	
};
// Teleport and Heal: Heals user by 1 and casts Ice
var mysticearth = {
	cd: 0,
	tick: function(){
		if(this.cd > 0){
			this.cd-=1;
		}
	},
	shoot: function(){
		if(this.cd == 0){
			this.cd = 300;
			mystic.cd = 0;
			earth.cd = 0;
			mystic.shoot();
			earth.shoot();
			mystic.cd = 0;
			earth.cd = 0;
			mystic.cast = 30;
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
	cd2: 0,
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
			if(spell == "Explosive Orbs"){
				ctx.drawImage(FireBubble, this.x-this.width/2, this.y-this.height/2);
			}
			if(spell == "Frozen Orbs"){
				ctx.drawImage(IceBubble, this.x-this.width/2, this.y-this.height/2);
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
					if(spell == "Explosive Orbs"){
						Wfire.x = this.x;
						Wfire.y = this.y;
						Wfire.onScreen = 1;
						Wfire.shoot();
					}	
					else if(spell == "Frozen Orbs"){
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
				if(spell == "Explosive Orbs"){
					Wfire.x = this.x;
					Wfire.y = this.y;
					Wfire.onScreen = 1;
					Wfire.shoot();
				}
				else if(spell == "Frozen Orbs"){
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
	if(spell == "Explosive Orbs"){
		if(this.cd == 0){
			this.x = player.x;
			this.y = player.y;
			this.dir = "W";
			this.cd = 600;
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
	else if(spell == "Frozen Orbs"){
		if(this.cd2 == 0){
			this.x = player.x;
			this.y = player.y;
			this.dir = "W";
			this.played=0;
			this.cd2 = 360;
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
	onScreen: 0,
	used: 0,
	dir: "",
	
	draw: function(){
		if(this.onScreen == 1){
			if(spell == "Explosive Orbs"){
				ctx.drawImage(FireBubble, this.x-this.width/2, this.y-this.height/2);
			}
			if(spell == "Frozen Orbs"){
				ctx.drawImage(IceBubble, this.x-this.width/2, this.y-this.height/2);
			}
		}
	},
	effect: function(){
		if(this.onScreen == 1){
			HpMove(this);
			for(E in AllEnemies){
				if(collision(this.dir, this, AllEnemies[E]) || collision(AllEnemies[E].dir, AllEnemies[E], this)){
					onHit(AllEnemies[E]);
					if(spell == "Explosive Orbs"){
						Wfire2.x = this.x;
						Wfire2.y = this.y;
						Wfire2.onScreen = 1;
						Wfire2.shoot();
					}	
					else if(spell == "Frozen Orbs"){
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
				if(spell == "Explosive Orbs"){
					Wfire2.x = this.x;
					Wfire2.y = this.y;
					Wfire2.onScreen = 1;
					Wfire2.shoot();
				}
				else if(spell == "Frozen Orbs"){
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
	used: 0,
	dir: "",
	
	draw: function(){
		if(this.onScreen == 1){
			if(spell == "Explosive Orbs"){
				ctx.drawImage(FireBubble, this.x-this.width/2, this.y-this.height/2);
			}
			if(spell == "Frozen Orbs"){
				ctx.drawImage(IceBubble, this.x-this.width/2, this.y-this.height/2);
			}
		}
	},
	effect: function(){
		if(this.onScreen == 1){
			HpMove(this);
			for(E in AllEnemies){
				if(collision(this.dir, this, AllEnemies[E]) || collision(AllEnemies[E].dir, AllEnemies[E], this)){
					onHit(AllEnemies[E]);
					if(spell == "Explosive Orbs"){
						Wfire3.x = this.x;
						Wfire3.y = this.y;
						Wfire3.onScreen = 1;
						Wfire3.shoot();
					}	
					else if(spell == "Frozen Orbs"){
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
				if(spell == "Explosive Orbs"){
					Wfire3.x = this.x;
					Wfire3.y = this.y;
					Wfire3.onScreen = 1;
					Wfire3.shoot();
				}
				else if(spell == "Frozen Orbs"){
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
	dir: "",
	
	draw: function(){
		if(this.onScreen == 1){
			if(spell == "Explosive Orbs"){
				ctx.drawImage(FireBubble, this.x-this.width/2, this.y-this.height/2);
			}
			if(spell == "Frozen Orbs"){
				ctx.drawImage(IceBubble, this.x-this.width/2, this.y-this.height/2);
			}
		}
	},
	effect: function(){
		if(this.onScreen == 1){
			HpMove(this);
			for(E in AllEnemies){
				if(collision(this.dir, this, AllEnemies[E]) || collision(AllEnemies[E].dir, AllEnemies[E], this)){
					onHit(AllEnemies[E]);
					if(spell == "Explosive Orbs"){
						Wfire4.x = this.x;
						Wfire4.y = this.y;
						Wfire4.onScreen = 1;
						Wfire4.shoot();
					}	
					else if(spell == "Frozen Orbs"){
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
				if(spell == "Explosive Orbs"){
					Wfire4.x = this.x;
					Wfire4.y = this.y;
					Wfire4.onScreen = 1;
					Wfire4.shoot();
				}
				else if(spell == "Frozen Orbs"){
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
	used: 0,
	dir: "",
	
	draw: function(){
		if(this.onScreen == 1){
			if(spell == "Explosive Orbs"){
				ctx.drawImage(FireBubble, this.x-this.width/2, this.y-this.height/2);
			}
			if(spell == "Frozen Orbs"){
				ctx.drawImage(IceBubble, this.x-this.width/2, this.y-this.height/2);
			}
		}
	},
	effect: function(){
		if(this.onScreen == 1){
			HpMove(this);
			for(E in AllEnemies){
				if(collision(this.dir, this, AllEnemies[E]) || collision(AllEnemies[E].dir, AllEnemies[E], this)){
					onHit(AllEnemies[E]);
					if(spell == "Explosive Orbs"){
						Wfire5.x = this.x;
						Wfire5.y = this.y;
						Wfire5.onScreen = 1;
						Wfire5.shoot();
					}	
					else if(spell == "Frozen Orbs"){
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
				if(spell == "Explosive Orbs"){
					Wfire5.x = this.x;
					Wfire5.y = this.y;
					Wfire5.onScreen = 1;
					Wfire5.shoot();
				}
				else if(spell == "Frozen Orbs"){
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
	dir: "",
	
	draw: function(){
		if(this.onScreen == 1){
			if(spell == "Explosive Orbs"){
				ctx.drawImage(FireBubble, this.x-this.width/2, this.y-this.height/2);
			}
			if(spell == "Frozen Orbs"){
				ctx.drawImage(IceBubble, this.x-this.width/2, this.y-this.height/2);
			}
		}
	},
	effect: function(){
		if(this.onScreen == 1){
			HpMove(this);
			for(E in AllEnemies){
				if(collision(this.dir, this, AllEnemies[E]) || collision(AllEnemies[E].dir, AllEnemies[E], this)){
					onHit(AllEnemies[E]);
					if(spell == "Explosive Orbs"){
						Wfire6.x = this.x;
						Wfire6.y = this.y;
						Wfire6.onScreen = 1;
						Wfire6.shoot();
					}	
					else if(spell == "Frozen Orbs"){
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
				if(spell == "Explosive Orbs"){
					Wfire6.x = this.x;
					Wfire6.y = this.y;
					Wfire6.onScreen = 1;
					Wfire6.shoot();
				}
				else if(spell == "Frozen Orbs"){
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
	dir: "",
	
	draw: function(){
		if(this.onScreen == 1){
			if(spell == "Explosive Orbs"){
				ctx.drawImage(FireBubble, this.x-this.width/2, this.y-this.height/2);
			}
			if(spell == "Frozen Orbs"){
				ctx.drawImage(IceBubble, this.x-this.width/2, this.y-this.height/2);
			}
		}
	},
	effect: function(){
		if(this.onScreen == 1){
			HpMove(this);
			for(E in AllEnemies){
				if(collision(this.dir, this, AllEnemies[E]) || collision(AllEnemies[E].dir, AllEnemies[E], this)){
					onHit(AllEnemies[E]);
					if(spell == "Explosive Orbs"){
						Wfire7.x = this.x;
						Wfire7.y = this.y;
						Wfire7.onScreen = 1;
						Wfire7.shoot();
					}	
					else if(spell == "Frozen Orbs"){
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
				if(spell == "Explosive Orbs"){
					Wfire7.x = this.x;
					Wfire7.y = this.y;
					Wfire7.onScreen = 1;
					Wfire7.shoot();
				}
				else if(spell == "Frozen Orbs"){
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
	dir: "",
	
	draw: function(){
		if(this.onScreen == 1){
			if(spell == "Explosive Orbs"){
				ctx.drawImage(FireBubble, this.x-this.width/2, this.y-this.height/2);
			}
			if(spell == "Frozen Orbs"){
				ctx.drawImage(IceBubble, this.x-this.width/2, this.y-this.height/2);
			}
		}
	},
	effect: function(){
		if(this.onScreen == 1){
			HpMove(this);
			for(E in AllEnemies){
				if(collision(this.dir, this, AllEnemies[E]) || collision(AllEnemies[E].dir, AllEnemies[E], this)){
					onHit(AllEnemies[E]);
					if(spell == "Explosive Orbs"){
						Wfire8.x = this.x;
						Wfire8.y = this.y;
						Wfire8.onScreen = 1;
						Wfire8.shoot();
					}	
					else if(spell == "Frozen Orbs"){
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
				if(spell == "Explosive Orbs"){
					Wfire8.x = this.x;
					Wfire8.y = this.y;
					Wfire8.onScreen = 1;
					Wfire8.shoot();
				}
				else if(spell == "Frozen Orbs"){
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
	color: "FF6600",
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
			ctx.globalAlpha = 0.5;
			if(this.frame/2 != Math.round(this.frame/2)){
				ctx.fillStyle = "CC0000";
			}
			else{
				ctx.fillStyle = this.color;
			}
			ctx.fillRect(this.x - this.width / 2,
			this.y - this.height / 2,
			this.width, this.height);
			ctx.globalAlpha = 1;
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
	color: "FF6600",
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
			ctx.globalAlpha = 0.5;
			if(this.frame/2 != Math.round(this.frame/2)){
				ctx.fillStyle = "CC0000";
			}
			else{
				ctx.fillStyle = this.color;
			}
			ctx.fillRect(this.x - this.width / 2,
			this.y - this.height / 2,
			this.width, this.height);
			ctx.globalAlpha = 1;
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
	color: "FF6600",
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
			ctx.globalAlpha = 0.5;
			if(this.frame/2 != Math.round(this.frame/2)){
				ctx.fillStyle = "CC0000";
			}
			else{
				ctx.fillStyle = this.color;
			}
			ctx.fillRect(this.x - this.width / 2,
			this.y - this.height / 2,
			this.width, this.height);
			ctx.globalAlpha = 1;
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
	color: "FF6600",
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
			ctx.globalAlpha = 0.5;
			if(this.frame/2 != Math.round(this.frame/2)){
				ctx.fillStyle = "CC0000";
			}
			else{
				ctx.fillStyle = this.color;
			}
			ctx.fillRect(this.x - this.width / 2,
			this.y - this.height / 2,
			this.width, this.height);
			ctx.globalAlpha = 1;
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
	color: "FF6600",
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
			ctx.globalAlpha = 0.5;
			if(this.frame/2 != Math.round(this.frame/2)){
				ctx.fillStyle = "CC0000";
			}
			else{
				ctx.fillStyle = this.color;
			}
			ctx.fillRect(this.x - this.width / 2,
			this.y - this.height / 2,
			this.width, this.height);
			ctx.globalAlpha = 1;
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
	color: "FF6600",
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
			ctx.globalAlpha = 0.5;
			if(this.frame/2 != Math.round(this.frame/2)){
				ctx.fillStyle = "CC0000";
			}
			else{
				ctx.fillStyle = this.color;
			}
			ctx.fillRect(this.x - this.width / 2,
			this.y - this.height / 2,
			this.width, this.height);
			ctx.globalAlpha = 1;
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
	color: "FF6600",
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
			ctx.globalAlpha = 0.5;
			if(this.frame/2 != Math.round(this.frame/2)){
				ctx.fillStyle = "CC0000";
			}
			else{
				ctx.fillStyle = this.color;
			}
			ctx.fillRect(this.x - this.width / 2,
			this.y - this.height / 2,
			this.width, this.height);
			ctx.globalAlpha = 1;
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
	color: "FF6600",
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
			ctx.globalAlpha = 0.5;
			if(this.frame/2 != Math.round(this.frame/2)){
				ctx.fillStyle = "CC0000";
			}
			else{
				ctx.fillStyle = this.color;
			}
			ctx.fillRect(this.x - this.width / 2,
			this.y - this.height / 2,
			this.width, this.height);
			ctx.globalAlpha = 1;
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
	color: "00CCFF",
	timeLeft: 0,
	width: 32,
	height: 32,
	x: -100,
	y: -200,
	frame: 0,
	onScreen: 0,
	
	draw: function(){
		if(this.onScreen == 1){
			ctx.globalAlpha = 0.25;
			ctx.fillStyle = this.color;
			ctx.fillRect(this.x - this.width / 2, this.y - this.height / 2,	this.width, this.height);
			ctx.globalAlpha = 1;
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
	color: "00CCFF",
	timeLeft: 0,
	width: 32,
	height: 32,
	x: -100,
	y: -200,
	frame: 0,
	onScreen: 0,
	
	draw: function(){
		if(this.onScreen == 1){
			ctx.globalAlpha = 0.25;
			ctx.fillStyle = this.color;
			ctx.fillRect(this.x - this.width / 2, this.y - this.height / 2,	this.width, this.height);
			ctx.globalAlpha = 1;
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
	color: "00CCFF",
	timeLeft: 0,
	width: 32,
	height: 32,
	x: -100,
	y: -200,
	frame: 0,
	onScreen: 0,
	
	draw: function(){
		if(this.onScreen == 1){
			ctx.globalAlpha = 0.25;
			ctx.fillStyle = this.color;
			ctx.fillRect(this.x - this.width / 2, this.y - this.height / 2,	this.width, this.height);
			ctx.globalAlpha = 1;
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
	color: "00CCFF",
	timeLeft: 0,
	width: 32,
	height: 32,
	x: -100,
	y: -200,
	frame: 0,
	onScreen: 0,
	
	draw: function(){
		if(this.onScreen == 1){
			ctx.globalAlpha = 0.25;
			ctx.fillStyle = this.color;
			ctx.fillRect(this.x - this.width / 2, this.y - this.height / 2,	this.width, this.height);
			ctx.globalAlpha = 1;
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
	color: "00CCFF",
	timeLeft: 0,
	width: 32,
	height: 32,
	x: -100,
	y: -200,
	frame: 0,
	onScreen: 0,
	
	draw: function(){
		if(this.onScreen == 1){
			ctx.globalAlpha = 0.25;
			ctx.fillStyle = this.color;
			ctx.fillRect(this.x - this.width / 2, this.y - this.height / 2,	this.width, this.height);
			ctx.globalAlpha = 1;
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
	color: "00CCFF",
	timeLeft: 0,
	width: 32,
	height: 32,
	x: -100,
	y: -200,
	frame: 0,
	onScreen: 0,
	
	draw: function(){
		if(this.onScreen == 1){
			ctx.globalAlpha = 0.25;
			ctx.fillStyle = this.color;
			ctx.fillRect(this.x - this.width / 2, this.y - this.height / 2,	this.width, this.height);
			ctx.globalAlpha = 1;
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
	color: "00CCFF",
	timeLeft: 0,
	width: 32,
	height: 32,
	x: -100,
	y: -200,
	frame: 0,
	onScreen: 0,
	
	draw: function(){
		if(this.onScreen == 1){
			ctx.globalAlpha = 0.25;
			ctx.fillStyle = this.color;
			ctx.fillRect(this.x - this.width / 2, this.y - this.height / 2,	this.width, this.height);
			ctx.globalAlpha = 1;
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
	color: "00CCFF",
	timeLeft: 0,
	width: 32,
	height: 32,
	x: -100,
	y: -200,
	frame: 0,
	onScreen: 0,
	
	draw: function(){
		if(this.onScreen == 1){
			ctx.globalAlpha = 0.25;
			ctx.fillStyle = this.color;
			ctx.fillRect(this.x - this.width / 2, this.y - this.height / 2,	this.width, this.height);
			ctx.globalAlpha = 1;
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
// Shield and Heal: Heals user by 1 and casts Bubble Shield
var waterearth = {
	cd: 0,
	tick: function(){
		if(this.cd > 0){
			this.cd-=1;
		}
	},
	shoot: function(){
		if(this.cd == 0){
			this.cd = 1020;
			water.cd = 0;
			earth.cd = 0;
			water.shoot();
			earth.shoot();
			water.cd = 0;
			earth.cd = 0;
			water.cast = 30;
		}
	}	
};
// Water Blast: Shoots out an array of bubbles that damage enemies. They return to the caster.
var waterair = {
	x: -100,
	y: -200,
	cd: 0,
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
			this.cd = 150;
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
			ctx.drawImage(Bubble, this.x - this.width / 2, this.y - this.height / 2);
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
			ctx.drawImage(Bubble, this.x - this.width / 2, this.y - this.height / 2);
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
			ctx.drawImage(Bubble, this.x - this.width / 2, this.y - this.height / 2);
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
			ctx.drawImage(Bubble, this.x - this.width / 2, this.y - this.height / 2);
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
			ctx.drawImage(Bubble, this.x - this.width / 2, this.y - this.height / 2);
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
			ctx.drawImage(Bubble, this.x - this.width / 2, this.y - this.height / 2);
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
			ctx.drawImage(Bubble, this.x - this.width / 2, this.y - this.height / 2);
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
			ctx.drawImage(Bubble, this.x - this.width / 2, this.y - this.height / 2);
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
	frame: 0,
	tick: function(){
		if(this.cd > 0){
			this.cd-=1;
		}
		if(this.onScreen == 1){
			this.frame++;
			if(this.frame == 1){
				SpawnerSpawn.crrentTime=0;
				SpawnerSpawn.play();
				Wpool.onScreen = 1;
				Wpool.timeLeft = 300;
				Wpool.x = player.x;
				Wpool.y = player.y;
			}
			if(this.frame == 60){
				SpawnerSpawn.crrentTime=0;
				SpawnerSpawn.play();
				Wpool2.onScreen = 1;
				Wpool2.timeLeft = 300;
				Wpool2.x = player.x;
				Wpool2.y = player.y;
			}
			if(this.frame == 90){
				SpawnerSpawn.crrentTime=0;
				SpawnerSpawn.play();
				Wpool3.onScreen = 1;
				Wpool3.timeLeft = 300;
				Wpool3.x = player.x;
				Wpool3.y = player.y;
			}
			if(this.frame == 120){
				SpawnerSpawn.crrentTime=0;
				SpawnerSpawn.play();
				Wpool4.onScreen = 1;
				Wpool4.timeLeft = 300;
				Wpool4.x = player.x;
				Wpool4.y = player.y;
			}
			if(this.frame == 150){
				SpawnerSpawn.crrentTime=0;
				SpawnerSpawn.play();
				Wpool5.onScreen = 1;
				Wpool5.timeLeft = 300;
				Wpool5.x = player.x;
				Wpool5.y = player.y;
			}
			if(Wpool.onScreen == 0 && Wpool2.onScreen == 0 && Wpool3.onScreen == 0 && Wpool4.onScreen == 0 && Wpool5.onScreen == 0){
				this.onScreen = 0;
			}
		}
	},
	shoot: function(){
		if(this.cd == 0){
			this.onScreen = 1;
			this.cd = 1200;
			this.frame = 0;
		}
	}
};
var Wpool = {
	color: "0000FF",
	color2: "FFFF00",
	timeLeft: 0,
	width: 32,
	height: 32,
	x: -100,
	y: -200,
	frame: 0,
	onScreen: 0,
	charged: 0,
	draw: function(){
		if(this.onScreen == 1){
			if(this.charged == 1){
				if(this.frame/2 != Math.round(this.frame/2)){
					ctx.fillStyle = this.color2;
				}
				else{
					ctx.fillStyle = this.color;
				}
			}
			else{
				ctx.fillStyle = this.color;
			}
			ctx.globalAlpha = 0.25;
			ctx.fillRect(this.x - this.width / 2, this.y - this.height / 2,	this.width, this.height);
			ctx.globalAlpha = 1;
		}
	},
	move: function(){
		if(contained(player, this)){
			this.charged = 1;
			longlaser.play();
		}
		else{
			this.charged = 0;
		}
		if(this.frame <= 10 && this.onScreen == 1){
			this.width = this.width + 2*this.frame;
			this.height = this.height + 2*this.frame;
			this.frame++;
			if(this.charged == 1){
				for (E in AllEnemies){
					if(collision(AllEnemies[E].dir, AllEnemies[E], this) || contained(this, AllEnemies[E])){
						onHit(AllEnemies[E]);
					}
				}
			}
		}
		else if(this.frame < 300 && this.onScreen == 1){
			this.frame++;
			if(this.charged == 1){
				for (E in AllEnemies){
					if(collision(AllEnemies[E].dir, AllEnemies[E], this) || contained(this, AllEnemies[E])){
						onHit(AllEnemies[E]);
					}
				}
			}
		}
		if(this.frame >= 300 && this.onScreen == 1){
			this.onScreen = 0;
			this.frame = 0;
			this.width = 32;
			this.height = 32;
			this.charged = 0;
		}
	}
};
var Wpool2 = {
	color: "0000FF",
	color2: "FFFF00",
	timeLeft: 0,
	width: 32,
	height: 32,
	x: -100,
	y: -200,
	frame: 0,
	onScreen: 0,
	charged: 0,
	draw: function(){
		if(this.onScreen == 1){
			if(this.charged == 1){
				if(this.frame/2 != Math.round(this.frame/2)){
					ctx.fillStyle = this.color2;
				}
				else{
					ctx.fillStyle = this.color;
				}
			}
			else{
				ctx.fillStyle = this.color;
			}
			ctx.globalAlpha = 0.25;
			ctx.fillRect(this.x - this.width / 2, this.y - this.height / 2,	this.width, this.height);
			ctx.globalAlpha = 1;
		}
	},
	move: function(){
		if(contained(player, this)){
			this.charged = 1;
			longlaser.play();
		}
		else{
			this.charged = 0;
		}
		if(this.frame <= 10 && this.onScreen == 1){
			this.width = this.width + 2*this.frame;
			this.height = this.height + 2*this.frame;
			this.frame++;
			if(this.charged == 1){
				for (E in AllEnemies){
					if(collision(AllEnemies[E].dir, AllEnemies[E], this) || contained(this, AllEnemies[E])){
						onHit(AllEnemies[E]);
					}
				}
			}
		}
		else if(this.frame < 300 && this.onScreen == 1){
			this.frame++;
			if(this.charged == 1){
				for (E in AllEnemies){
					if(collision(AllEnemies[E].dir, AllEnemies[E], this) || contained(this, AllEnemies[E])){
						onHit(AllEnemies[E]);
					}
				}
			}
		}
		if(this.frame >= 300 && this.onScreen == 1){
			this.onScreen = 0;
			this.frame = 0;
			this.width = 32;
			this.height = 32;
			this.charged = 0;
		}
	}
};
var Wpool3 = {
	color: "0000FF",
	color2: "FFFF00",
	timeLeft: 0,
	width: 32,
	height: 32,
	x: -100,
	y: -200,
	frame: 0,
	onScreen: 0,
	charged: 0,
	draw: function(){
		if(this.onScreen == 1){
			if(this.charged == 1){
				if(this.frame/2 != Math.round(this.frame/2)){
					ctx.fillStyle = this.color2;
				}
				else{
					ctx.fillStyle = this.color;
				}
			}
			else{
				ctx.fillStyle = this.color;
			}
			ctx.globalAlpha = 0.25;
			ctx.fillRect(this.x - this.width / 2, this.y - this.height / 2,	this.width, this.height);
			ctx.globalAlpha = 1;
		}
	},
	move: function(){
		if(contained(player, this)){
			this.charged = 1;
			longlaser.play();
		}
		else{
			this.charged = 0;
		}
		if(this.frame <= 10 && this.onScreen == 1){
			this.width = this.width + 2*this.frame;
			this.height = this.height + 2*this.frame;
			this.frame++;
			if(this.charged == 1){
				for (E in AllEnemies){
					if(collision(AllEnemies[E].dir, AllEnemies[E], this) || contained(this, AllEnemies[E])){
						onHit(AllEnemies[E]);
					}
				}
			}
		}
		else if(this.frame < 300 && this.onScreen == 1){
			this.frame++;
			if(this.charged == 1){
				for (E in AllEnemies){
					if(collision(AllEnemies[E].dir, AllEnemies[E], this) || contained(this, AllEnemies[E])){
						onHit(AllEnemies[E]);
					}
				}
			}
		}
		if(this.frame >= 300 && this.onScreen == 1){
			this.onScreen = 0;
			this.frame = 0;
			this.width = 32;
			this.height = 32;
			this.charged = 0;
		}
	}
};
var Wpool4 = {
	color: "0000FF",
	color2: "FFFF00",
	timeLeft: 0,
	width: 32,
	height: 32,
	x: -100,
	y: -200,
	frame: 0,
	onScreen: 0,
	charged: 0,
	draw: function(){
		if(this.onScreen == 1){
			if(this.charged == 1){
				if(this.frame/2 != Math.round(this.frame/2)){
					ctx.fillStyle = this.color2;
				}
				else{
					ctx.fillStyle = this.color;
				}
			}
			else{
				ctx.fillStyle = this.color;
			}
			ctx.globalAlpha = 0.25;
			ctx.fillRect(this.x - this.width / 2, this.y - this.height / 2,	this.width, this.height);
			ctx.globalAlpha = 1;
		}
	},
	move: function(){
		if(contained(player, this)){
			this.charged = 1;
			longlaser.play();
		}
		else{
			this.charged = 0;
		}
		if(this.frame <= 10 && this.onScreen == 1){
			this.width = this.width + 2*this.frame;
			this.height = this.height + 2*this.frame;
			this.frame++;
			if(this.charged == 1){
				for (E in AllEnemies){
					if(collision(AllEnemies[E].dir, AllEnemies[E], this) || contained(this, AllEnemies[E])){
						onHit(AllEnemies[E]);
					}
				}
			}
		}
		else if(this.frame < 300 && this.onScreen == 1){
			this.frame++;
			if(this.charged == 1){
				for (E in AllEnemies){
					if(collision(AllEnemies[E].dir, AllEnemies[E], this) || contained(this, AllEnemies[E])){
						onHit(AllEnemies[E]);
					}
				}
			}
		}
		if(this.frame >= 300 && this.onScreen == 1){
			this.onScreen = 0;
			this.frame = 0;
			this.width = 32;
			this.height = 32;
			this.charged = 0;
		}
	}
};
var Wpool5 = {
	color: "0000FF",
	color2: "FFFF00",
	timeLeft: 0,
	width: 32,
	height: 32,
	x: -100,
	y: -200,
	frame: 0,
	onScreen: 0,
	charged: 0,
	draw: function(){
		if(this.onScreen == 1){
			if(this.charged == 1){
				if(this.frame/2 != Math.round(this.frame/2)){
					ctx.fillStyle = this.color2;
				}
				else{
					ctx.fillStyle = this.color;
				}
			}
			else{
				ctx.fillStyle = this.color;
			}
			ctx.globalAlpha = 0.25;
			ctx.fillRect(this.x - this.width / 2, this.y - this.height / 2,	this.width, this.height);
			ctx.globalAlpha = 1;
		}
	},
	move: function(){
		if(contained(player, this)){
			this.charged = 1;
			longlaser.play();
		}
		else{
			this.charged = 0;
		}
		if(this.frame <= 10 && this.onScreen == 1){
			this.width = this.width + 2*this.frame;
			this.height = this.height + 2*this.frame;
			this.frame++;
			if(this.charged == 1){
				for (E in AllEnemies){
					if(collision(AllEnemies[E].dir, AllEnemies[E], this) || contained(this, AllEnemies[E])){
						onHit(AllEnemies[E]);
					}
				}
			}
		}
		else if(this.frame < 300 && this.onScreen == 1){
			this.frame++;
			if(this.charged == 1){
				for (E in AllEnemies){
					if(collision(AllEnemies[E].dir, AllEnemies[E], this) || contained(this, AllEnemies[E])){
						onHit(AllEnemies[E]);
					}
				}
			}
		}
		if(this.frame >= 300 && this.onScreen == 1){
			this.onScreen = 0;
			this.frame = 0;
			this.width = 32;
			this.height = 32;
			this.charged = 0;
		}
	}
};
var Wpools = {1: Wpool, 2: Wpool2, 3: Wpool3, 4: Wpool4, 5: Wpool5};
//--------------------------------------------------------------- Spell Array -------------------------------------------------------//
var Weapons = {1: bullet, 2: bullet2, 3: bullet3, 4: bullet4, 5: fire, 6: fire2, 7: ice, 8: ice2, 9: fireice, 10: earth, 
				11: earth2, 12: lightning, 13: lightning2, 14: icelightning, 15: firelightning, 16: sFire, 17: sIce, 18: sLightning, 19: air,
				20: air2, 21: airfire, 22: airice, 23: airlightning/*, 24: mystic, 25: mystic2, 26: mysticfire, 27: mysticice, 28: mysticearth,
				29: mysticlightning, 30: mysticair, 31: Water, 32: waterfire*/};