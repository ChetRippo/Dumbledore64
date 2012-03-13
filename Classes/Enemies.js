//--------------------------------------------- Enemies -----------------------------------------------------------------------------//

// Enemy 1
var Enemy = {
	x: 500,
	y: -400,
	width: 32,
	height: 32,
	speed: 4,
	speed2: 2,
	dirct: 0,
	respawn: 1,
	rp: 100,
	onScreen: 0,
	movement: false,
	// Draws the enemy on the canvas when called
	draw: function(){
		ctx.drawImage(Lavaman, this.x - this.width / 2, this.y - this.height / 2);
	}
};

// Enemy 2
var EnemyA = {
	color: "red",
	x: -500,
	y: -500,
	width: 32,
	height: 32,
	dirct: 0,
	speed: 4,
	speed2: 2,
	respawn: 250,
	rp: 100,
	onScreen: 0,
	movement: false,
	// Draws the enemy on the canvas when called
	draw: function(){
		ctx.drawImage(Lavaman, this.x - this.width / 2, this.y - this.height / 2);
	}
};

// Enemy 3
var EnemyB = {
	color: "red",
	x: -500,
	y: -500,
	width: 32,
	height: 32,
	dirct: 0,
	speed: 4,
	speed2: 2,
	respawn: 125,
	rp: 100,
	onScreen: 0,
	movement: false,
	// Draws the enemy on the canvas when called
	draw: function(){
		ctx.drawImage(Lavaman, this.x - this.width / 2, this.y - this.height / 2);
	}
};

// Enemy 4
var EnemyC = {
	color: "red",
	x: -500,
	y: -500,
	width: 32,
	height: 32,
	dirct: 0,
	speed: 4,
	speed2: 2,
	respawn: 300,
	rp: 100,
	onScreen: 0,
	movement: false,
	// Draws the enemy on the canvas when called
	draw: function(){
		ctx.drawImage(Lavaman, this.x - this.width / 2, this.y - this.height / 2);
	}
};

// Triangle Enemy 1
var Tenemy = {
	color: "00FFFF",
	x: 2000,
	y: 0,
	width: 32,
	height: 32,
	speed: 8,
	speed2: 4,
	dirct: 0,
	respawn: 600,
	rp: 300,
	onScreen: 0,
	movement: false,
	// Draws the enemy on the canvas when called
	draw: function(){
		ctx.drawImage(Robo, this.x - this.width / 2, this.y - this.height / 2);
	}
};

// Triangle Enemy 2
var TenemyA = {
	color: "00FFFF",
	x: 2000,
	y: 0,
	width: 32,
	height: 32,
	speed: 8,
	speed2: 4,
	dirct: 0,
	respawn: 1200,
	rp: 300,
	onScreen: 0,
	movement: false,
	// Draws the enemy on the canvas when called
	draw: function(){
		ctx.drawImage(Robo, this.x - this.width / 2, this.y - this.height / 2);
	}
};

// Triangle Enemy 3
var TenemyB = {
	color: "00FFFF",
	x: 2000,
	y: 0,
	width: 32,
	height: 32,
	speed: 8,
	speed2: 4,
	dirct: 0,
	respawn: 1800,
	rp: 300,
	onScreen: 0,
	movement: false,
	// Draws the enemy on the canvas when called
	draw: function(){
		ctx.drawImage(Robo, this.x - this.width / 2, this.y - this.height / 2);
	}
};

// Sorceror
var Sorceror = {
	x: 2000,
	y: 0,
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
	cd: 0,
	rp: 900,
	onScreen: 0,
	// Draws the enemy on the canvas when called
	draw: function(){
		if (this.hptimer/2 != Math.round(this.hptimer/2)){
			ctx.drawImage(Wizzurd2, this.x - this.width / 2, this.y - this.height / 2);
		}
		else{
			ctx.drawImage(Sorcerorpng, this.x - this.width / 2, this.y - this.height / 2);
		}
		ctx.fillStyle = "red";
		if(this.hp == 3){
			ctx.fillRect(this.x - this.width/2 + 4, this.y - this.height/2 - this.height/4, this.width/4, this.height/4);
			ctx.fillRect(this.x - (this.width/2 - this.width/4)+5, this.y - this.height/2 - this.height/4, this.width/4, this.height/4);
			ctx.fillRect(this.x - (this.width/2 - this.width/2) + 6, this.y - this.height/2 - this.height/4, this.width/4, this.height/4);
		}
		else if(this.hp == 2){
			ctx.fillRect(this.x - this.width/2 + 4, this.y - this.height/2 - this.height/4, this.width/4, this.height/4);
			ctx.fillRect(this.x - (this.width/2 - this.width/4)+5, this.y - this.height/2 - this.height/4, this.width/4, this.height/4);
		}
		else{
			ctx.fillRect(this.x - this.width/2 + 4, this.y - this.height/2 - this.height/4, this.width/4, this.height/4);
		}
	},
	onHit: function(){
		if(!(this.hptimer > 0)){
			this.hp-=1;
			this.hptimer = 30;
			if(this.hp < 1){
				this.onScreen = 0;
				if(((Math.floor(Math.random() * 10) + 1) == 7) && redCube.x == -100){
					redCube.x = this.x;
					redCube.y = this.y;
					redCube.timeLeft = 90;
				}
				else if(((Math.floor(Math.random() * 10) + 1) == 7) && tealCube.x == -100){
					tealCube.x = this.x;
					tealCube.y = this.y;
					tealCube.timeLeft = 90;
				}
				else if(((Math.floor(Math.random() * 10) + 1) == 7) && greenCube.x == -100){
					greenCube.x = this.x;
					greenCube.y = this.y;
					greenCube.timeLeft = 90;
				}
				else if(((Math.floor(Math.random() * 10) + 1) == 7) && blueCube.x == -100){
					blueCube.x = this.x;
					blueCube.y = this.y;
					blueCube.timeLeft = 90;
				}
				if(marker.x != -100 && marker2.x != -100 && marker3.x != -100){
					marker4.points = "100";
					marker4.mult = multiplier;
					marker4.x = this.x;
					marker4.y = this.y;
					marker4.timeLeft = 20;
				}
				else if(marker.x != -100 && marker2.x != -100){
					marker3.points = "100";
					marker3.mult = multiplier;
					marker3.x = this.x;
					marker3.y = this.y;
					marker3.timeLeft = 20;
				}
				else if(marker.x != -100){
					marker2.points = "100";
					marker2.mult = multiplier;
					marker2.x = this.x;
					marker2.y = this.y;
					marker2.timeLeft = 20;
				}
				else{
					marker.points = "100";
					marker.mult = multiplier;
					marker.x = this.x;
					marker.y = this.y;
					marker.timeLeft = 20;
				}
				this.x = -500;
				this.y = -500;
				this.respawn = 2400;
				this.movement = false;
				score+=(100 * multiplier);
				currpts = "100";
				multiplier++;
				multtimer = 50;
			}
		}
	},
	cast: function(){
		if(this.spell == "Ice"){
			sIce.shoot();
		}
		else if(this.spell == "Fire"){
			sFire.shoot();
		}
		else if(this.spell == "Lightning"){
			sLightning.shoot();
		}
		this.cd = 300;
	},
	spawn: function(){
		if(this.respawn == 0){
			this.movement = true;
			this.hp = 3;
			this.onScreen = 1;
			this.cd = 0;
			if((Math.floor(Math.random() * 3) + 1) == 1){
				this.spell = "Fire";
			}
			else if((Math.floor(Math.random() * 3) + 1) == 2){
				this.spell = "Ice";
			}
			else{
				this.spell = "Lightning";
			}
			var spawnPoint = Math.floor(Math.random() * 8) + 1;
			if(spawnPoint == 1){
				this.x = 0;
				this.y = 0;
				this.respawn-=1;
			}
			else if(spawnPoint == 2){
				this.x = 400;
				this.y = 0;
				this.respawn-=1;
			}
			else if(spawnPoint == 3){
				this.x = 800;
				this.y = 0;
				this.respawn-=1;
			}
			else if(spawnPoint == 4){
				this.x = 0;
				this.y = 288;
				this.respawn-=1;
			}
			else if(spawnPoint == 5){
				this.x = 800;
				this.y = 288;
				this.respawn-=1;
			}
			else if(spawnPoint == 6){
				this.x = 0;
				this.y = 576;
				this.respawn-=1;
			}
			else if(spawnPoint == 7){
				this.x = 400;
				this.y = 576;
				this.respawn-=1;
			}
			else{
				this.x = 800;
				this.y = 576;
				this.respawn-=1;
			}			
		}
		else{
			this.respawn-=1;
		}
	},
	AI: function(){
		if(this.hptimer > 0){
			this.hptimer-=1;
		}
		var xdiff = player.x - this.x;
		var ydiff = player.y - this.y;
		if(this.spell == "Ice"){
			if(this.x > 0 && this.y > 0 && this.cd <=0){
				this.cast();
			}
			else if(!(this.cd <=0)){
				this.cd-=1;
			}
		}
		else if(this.spell == "Fire"){
			if((Math.abs(xdiff) < 128) && (Math.abs(ydiff) < 128) && this.cd <= 0){
				this.cast();
			}
			else if(!(this.cd <= 0)){
				this.cd-=1;
			}
		}
		else if(this.spell == "Lightning"){
			if(this.y <= player.y + sLightning.hheight/2 && this.y >= player.y){
				this.cast();
			}
			else if(!(this.cd <= 0)){
				this.cd-=1;
			}
		}
		if(collision(this.dir, this, obstacle) || collision(this.dir, this, obstacleA) || collision(this.dir, this, obstacleB)){
			if(this.dir == "W"){
				this.dir = "D";
				this.dirct = 20;
				this.y-=this.speed;
			}
			else if(this.dir == "A"){
				this.dir = "W";
				this.dirct = 20;
				this.x+=this.speed;
			}
			else if(this.dir == "S"){
				this.dir = "A";
				this.dirct = 20;
				this.y+=this.speed;
			}
			else if(this.dir == "D"){
				this.dir = "S";
				this.dirct = 20;
				this.x-=this.speed;
			}
			else if(this.dir == "WD"){
				this.dir = "W";
				this.dirct = 20;
				this.x+=this.speed;
				this.y-=this.speed;
			}
			else if(this.dir == "WA"){
				this.dir = "A";
				this.dirct = 20;
				this.x-=this.speed;
				this.y-=this.speed;
			}
			else if(this.dir == "AS"){
				this.dir = "S";
				this.dirct = 20;
				this.x-=this.speed;
				this.y+=this.speed;
			}
			else if(this.dir == "SD"){
				this.dir = "D";
				this.dirct = 20;
				this.x+=this.speed;
				this.y+=this.speed;
			}
		}
		else if(this.dirct == 0){
			if(xdiff < 4 && ydiff < 4){
				this.dir = "SD";
			}
			else if(xdiff < 4 && ydiff > 4){
				this.dir = "WD";
			}
			else if(xdiff > 4 && ydiff < 4){
				this.dir = "AS";
			}
			else if (xdiff > 4 && ydiff > 4){
				this.dir = "WA";
			}
			else if (xdiff == 4 && ydiff > 4){
				this.dir = "S";
			}
			else if(xdiff == 4 && ydiff < 4){
				this.dir = "W";
			}
			else if(xdiff < 4 && ydiff == 4){
				this.dir = "A";
			}
			else{
				this.dir = "D";
			}
		}
		else{
			this.dirct-=1;
		}
	}
};

var Enemies = {1: Enemy, 2: EnemyA, 3: EnemyB, 4: EnemyC, 5: Tenemy, 6: TenemyA, 7: TenemyB};
var AllEnemies = {1: Enemy, 2: EnemyA, 3: EnemyB, 4: EnemyC, 5: Tenemy, 6: TenemyA, 7: TenemyB, 8: Sorceror};

// onHit: Paramaterized
// Hit by bullet
function onHit(E, rs){
	E.onScreen = 0;
	if(((Math.floor(Math.random() * 10) + 1) == 7) && redCube.x == -100){
		redCube.x = E.x;
		redCube.y = E.y;
		redCube.timeLeft = 90;
	}
	else if(((Math.floor(Math.random() * 10) + 1) == 7) && tealCube.x == -100){
		tealCube.x = E.x;
		tealCube.y = E.y;
		tealCube.timeLeft = 90;
	}
	else if(((Math.floor(Math.random() * 10) + 1) == 7) && greenCube.x == -100){
		greenCube.x = E.x;
		greenCube.y = E.y;
		greenCube.timeLeft = 90;
	}
	else if(((Math.floor(Math.random() * 10) + 1) == 7) && blueCube.x == -100){
		blueCube.x = E.x;
		blueCube.y = E.y;
		blueCube.timeLeft = 90;
	}
	if(marker.x != -100 && marker2.x != -100 && marker3.x != -100){
		marker4.points = "50";
		marker4.mult = multiplier;
		marker4.x = E.x;
		marker4.y = E.y;
		marker4.timeLeft = 20;
	}
	else if(marker.x != -100 && marker2.x != -100){
		marker3.points = "50";
		marker3.mult = multiplier;
		marker3.x = E.x;
		marker3.y = E.y;
		marker3.timeLeft = 20;
	}
	else if(marker.x != -100){
		marker2.points = "50";
		marker2.mult = multiplier;
		marker2.x = E.x;
		marker2.y = E.y;
		marker2.timeLeft = 20;
	}
	else{
		marker.points = "50";
		marker.mult = multiplier;
		marker.x = E.x;
		marker.y = E.y;
		marker.timeLeft = 20;
	}
	E.x = -500;
	E.y = -500;
	E.respawn = rs;
	E.movement = false;
	score+=(50 * multiplier);
	currpts = "50";
	multiplier++;
	multtimer = 50;
}

// Enemy move paramaterized
function move(E){
	if(E.movement == true){
		if(E.dir == "W" && !(collision(E.dir, E, obstacle)) && !(collision(E.dir, E, obstacleA))
			&& !(collision(E.dir, E, obstacleB)) && !(collision(E.dir, E, player))){
			E.y-=E.speed;
		}
		if(E.dir == "A" && !(collision(E.dir, E, obstacle)) && !(collision(E.dir, E, obstacleA))
			&& !(collision(E.dir, E, obstacleB)) && !(collision(E.dir, E, player))){
			E.x-=E.speed;
		}
		if(E.dir == "S" && !(collision(E.dir, E, obstacle)) && !(collision(E.dir, E, obstacleA))
			&& !(collision(E.dir, E, obstacleB)) && !(collision(E.dir, E, player))){
			E.y+=E.speed;
		}
		if(E.dir == "D" && !(collision(E.dir, E, obstacle)) && !(collision(E.dir, E, obstacleA))
			&& !(collision(E.dir, E, obstacleB)) && !(collision(E.dir, E, player))){
			E.x+=E.speed;
		}
		if(E.dir == "AS" && !(collision(E.dir, E, obstacle)) && !(collision(E.dir, E, obstacleA))
			&& !(collision(E.dir, E, obstacleB)) && !(collision(E.dir, E, player))){
			E.y-=E.speed;
			E.x+=E.speed;
		}
		if(E.dir == "WA" && !(collision(E.dir, E, obstacle)) && !(collision(E.dir, E, obstacleA))
			&& !(collision(E.dir, E, obstacleB)) && !(collision(E.dir, E, player))){
			E.y+=E.speed;
			E.x+=E.speed;
		}
		if(E.dir == "WD" && !(collision(E.dir, E, obstacle)) && !(collision(E.dir, E, obstacleA))
			&& !(collision(E.dir, E, obstacleB)) && !(collision(E.dir, E, player))){
			E.y+=E.speed;
			E.x-=E.speed;
		}
		if(E.dir == "SD" && !(collision(E.dir, E, obstacle)) && !(collision(E.dir, E, obstacleA))
			&& !(collision(E.dir, E, obstacleB)) && !(collision(E.dir, E, player))){
			E.y-=E.speed;
			E.x-=E.speed;
		}
	}	
}

// Enemy AI
function AI(E){
		var xdiff = player.x - E.x;
		var ydiff = player.y - E.y;
		if(collision(E.dir, E, obstacle) || collision(E.dir, E, obstacleA) || collision(E.dir, E, obstacleB)){
			if(E.dir == "W"){
				E.dir = "D";
				E.dirct = 20;
				E.y-=E.speed;
			}
			else if(E.dir == "A"){
				E.dir = "W";
				E.dirct = 20;
				E.x+=E.speed;
			}
			else if(E.dir == "S"){
				E.dir = "A";
				E.dirct = 20;
				E.y+=E.speed;
			}
			else if(E.dir == "D"){
				E.dir = "S";
				E.dirct = 20;
				E.x-=E.speed;
			}
			else if(E.dir == "WD"){
				E.dir = "W";
				E.dirct = 20;
				E.x+=E.speed;
				E.y-=E.speed;
			}
			else if(E.dir == "WA"){
				E.dir = "A";
				E.dirct = 20;
				E.x-=E.speed;
				E.y-=E.speed;
			}
			else if(E.dir == "AS"){
				E.dir = "S";
				E.dirct = 20;
				E.x-=E.speed;
				E.y+=E.speed;
			}
			else if(E.dir == "SD"){
				E.dir = "D";
				E.dirct = 20;
				E.x+=E.speed;
				E.y+=E.speed;
			}
		}
		else if(E.dirct == 0){
			if(xdiff < 4 && ydiff < 4){
				E.dir = "SD";
			}
			else if(xdiff < 4 && ydiff > 4){
				E.dir = "WD";
			}
			else if(xdiff > 4 && ydiff < 4){
				E.dir = "AS";
			}
			else if (xdiff > 4 && ydiff > 4){
				E.dir = "WA";
			}
			else if (xdiff == 4 && ydiff > 4){
				E.dir = "S";
			}
			else if(xdiff == 4 && ydiff < 4){
				E.dir = "W";
			}
			else if(xdiff < 4 && ydiff == 4){
				E.dir = "A";
			}
			else{
				E.dir = "D";
			}
		}
		else{
			E.dirct-=1;
		}
}

function spawn(E){
	if(E.respawn == 0){
		E.movement = true;
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
	else{
		E.respawn-=1;
	}
}