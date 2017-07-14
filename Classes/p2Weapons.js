//--------------------------------------------- p2bullet Stuff -----------------------------------------------------------------------------//
/*
// p2bullet: A basic attack
var p2bullet = {
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
	if(player2.cd == 0 && (((player2.spell1 == "Lightning" && player2.spell2 == "Mystic") || (player2.spell1 == "Mystic" && player2.spell2 == "Lightning")) || (p2bullet81.x == -100 && p2bullet81.y == -200
		&& p2bullet82.x == -100 && p2bullet82.y == -200))
		&& p2bullet8.x == -100 && p2bullet8.y == -200){
		p2bullet8.shoot(dir, h, w);
	}
	else if(player2.cd == 0	&& (((player2.spell1 == "Lightning" && player2.spell2 == "Mystic") || (player2.spell1 == "Mystic" && player2.spell2 == "Lightning")) || (p2bullet71.x == -100 && p2bullet71.y == -200
		&& p2bullet72.x == -100 && p2bullet72.y == -200))
		&& p2bullet7.x == -100 && p2bullet7.y == -200){
		p2bullet7.shoot(dir, h, w);
	}
	else if(player2.cd == 0 && (((player2.spell1 == "Lightning" && player2.spell2 == "Mystic") || (player2.spell1 == "Mystic" && player2.spell2 == "Lightning")) || (p2bullet61.x == -100 && p2bullet61.y == -200
		&& p2bullet62.x == -100 && p2bullet62.y == -200))
		&& p2bullet6.x == -100 && p2bullet6.y == -200){
		p2bullet6.shoot(dir, h, w);
	}
	else if(player2.cd == 0 && (((player2.spell1 == "Lightning" && player2.spell2 == "Mystic") || (player2.spell1 == "Mystic" && player2.spell2 == "Lightning")) || (p2bullet51.x == -100 && p2bullet51.y == -200
		&& p2bullet52.x == -100 && p2bullet52.y == -200))
		&& p2bullet5.x == -100 && p2bullet5.y == -200){
		p2bullet5.shoot(dir, h, w);
	}
	else if(player2.cd == 0	&& (((player2.spell1 == "Lightning" && player2.spell2 == "Mystic") || (player2.spell1 == "Mystic" && player2.spell2 == "Lightning")) || (p2bullet41.x == -100 && p2bullet41.y == -200
		&& p2bullet42.x == -100 && p2bullet42.y == -200))
		&& p2bullet4.x == -100 && p2bullet4.y == -200){
		p2bullet4.shoot(dir, h, w);
	}
	else if(player2.cd == 0	&& (((player2.spell1 == "Lightning" && player2.spell2 == "Mystic") || (player2.spell1 == "Mystic" && player2.spell2 == "Lightning")) || (p2bullet31.x == -100 && p2bullet31.y == -200
		&& p2bullet32.x == -100 && p2bullet32.y == -200))
		&& p2bullet3.x == -100 && p2bullet3.y == -200){
		p2bullet3.shoot(dir, h, w);
	}
	else if(player2.cd == 0 && (((player2.spell1 == "Lightning" && player2.spell2 == "Mystic") || (player2.spell1 == "Mystic" && player2.spell2 == "Lightning")) || (p2bullet21.x == -100 && p2bullet21.y == -200
		&& p2bullet22.x == -100 && p2bullet22.y == -200))
		&& p2bullet2.x == -100 && p2bullet2.y == -200){
		p2bullet2.shoot(dir, h, w);
	}
	else if(player2.cd == 0){
		Beam.currentTime=0;
		Beam.play();
		this.dir = dir;
		this.timeLeft = 60;
		this.height = h;
		this.width = w;
		this.x = player2.x;
		this.y = player2.y;
		if(spell == "Homing Beam"){
			player2.cd = 35;
		}
		else if(((player2.spell1 == "Water" && player2.spell2 == "Mystic") || (player2.spell1 == "Mystic" && player2.spell2 == "Water"))){
			player2.cd = cdTop;
			this.height = 16;
			this.width = 16;
			p2bullet11.dir = "D" + this.dir;
			p2bullet11.timeLeft = 60;
			p2bullet11.height = 16;
			p2bullet11.width = 16;
			p2bullet11.x = player2.x;
			p2bullet11.y = player2.y;
			p2bullet12.dir = "D2" + this.dir;
			p2bullet12.timeLeft = 60;
			p2bullet12.height = 16;
			p2bullet12.width = 16;
			p2bullet12.x = player2.x;
			p2bullet12.y = player2.y;
		}
		else{
			player2.cd = cdTop;
		}
	}
	}
};
// p2bullet: A basic attack
var p2bullet2 = {
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
		if(player2.cd == 0){
			Beam.currentTime=0;
			Beam.play();
			this.dir = dir;
			this.timeLeft = 60;
			this.height = h;
			this.width = w;
			this.x = player2.x;
			this.y = player2.y;
			if(spell == "Homing Beam"){
				player2.cd = 35;
			}
			else if(((player2.spell1 == "Water" && player2.spell2 == "Mystic") || (player2.spell1 == "Mystic" && player2.spell2 == "Water"))){
				player2.cd = cdTop;
				this.height = 16;
				this.width = 16;
				p2bullet21.dir = "D" + this.dir;
				p2bullet21.timeLeft = 60;
				p2bullet21.height = 16;
				p2bullet21.width = 16;
				p2bullet21.x = player2.x;
				p2bullet21.y = player2.y;
				p2bullet22.dir = "D2" + this.dir;
				p2bullet22.timeLeft = 60;
				p2bullet22.height = 16;
				p2bullet22.width = 16;
				p2bullet22.x = player2.x;
				p2bullet22.y = player2.y;
			}
			else{
				player2.cd = cdTop;
			}
		}
	}
};
// p2bullet: A basic attack
var p2bullet3 = {
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
		if(player2.cd == 0){
			Beam.currentTime=0;
			Beam.play();
			this.dir = dir;
			this.timeLeft = 60;
			this.height = h;
			this.width = w;
			this.x = player2.x;
			this.y = player2.y;
			if(spell == "Homing Beam"){
				player2.cd = 35;
			}
			else if(((player2.spell1 == "Water" && player2.spell2 == "Mystic") || (player2.spell1 == "Mystic" && player2.spell2 == "Water"))){
				player2.cd = cdTop;
				this.height = 16;
				this.width = 16;
				p2bullet31.dir = "D" + this.dir;
				p2bullet31.timeLeft = 60;
				p2bullet31.height = 16;
				p2bullet31.width = 16;
				p2bullet31.x = player2.x;
				p2bullet31.y = player2.y;
				p2bullet32.dir = "D2" + this.dir;
				p2bullet32.timeLeft = 60;
				p2bullet32.height = 16;
				p2bullet32.width = 16;
				p2bullet32.x = player2.x;
				p2bullet32.y = player2.y;
			}
			else{
				player2.cd = cdTop;
			}
		}
	}
};
// p2bullet: A basic attack
var p2bullet4 = {
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
	if(player2.cd == 0){
		Beam.currentTime=0;
		Beam.play();
		this.dir = dir;
		this.timeLeft = 60;
		this.height = h;
		this.width = w;
		this.x = player2.x;
		this.y = player2.y;
		if(spell == "Homing Beam"){
			player2.cd = 35;
		}
		else if(((player2.spell1 == "Water" && player2.spell2 == "Mystic") || (player2.spell1 == "Mystic" && player2.spell2 == "Water"))){
			player2.cd = cdTop;
			this.height = 16;
			this.width = 16;
			p2bullet41.dir = "D" + this.dir;
			p2bullet41.timeLeft = 60;
			p2bullet41.height = 16;
			p2bullet41.width = 16;
			p2bullet41.x = player2.x;
			p2bullet41.y = player2.y;
			p2bullet42.dir = "D2" + this.dir;
			p2bullet42.timeLeft = 60;
			p2bullet42.height = 16;
			p2bullet42.width = 16;
			p2bullet42.x = player2.x;
			p2bullet42.y = player2.y;
		}
		else{
			player2.cd = cdTop;
		}
	}
	}
	
};
var p2bullet5 = {
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
	if(player2.cd == 0){
		Beam.currentTime=0;
		Beam.play();
		this.dir = dir;
		this.timeLeft = 60;
		this.height = h;
		this.width = w;
		this.x = player2.x;
		this.y = player2.y;
		if(spell == "Homing Beam"){
			player2.cd = 35;
		}
		else if(((player2.spell1 == "Water" && player2.spell2 == "Mystic") || (player2.spell1 == "Mystic" && player2.spell2 == "Water"))){
			player2.cd = cdTop;
			this.height = 16;
			this.width = 16;
			p2bullet51.dir = "D" + this.dir;
			p2bullet51.timeLeft = 60;
			p2bullet51.height = 16;
			p2bullet51.width = 16;
			p2bullet51.x = player2.x;
			p2bullet51.y = player2.y;
			p2bullet52.dir = "D2" + this.dir;
			p2bullet52.timeLeft = 60;
			p2bullet52.height = 16;
			p2bullet52.width = 16;
			p2bullet52.x = player2.x;
			p2bullet52.y = player2.y;
		}
		else{
			player2.cd = cdTop;
		}
	}
	}
	
};
var p2bullet6 = {
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
	if(player2.cd == 0){
		Beam.currentTime=0;
		Beam.play();
		this.dir = dir;
		this.timeLeft = 60;
		this.height = h;
		this.width = w;
		this.x = player2.x;
		this.y = player2.y;
		if(spell == "Homing Beam"){
			player2.cd = 35;
		}
		else if(((player2.spell1 == "Water" && player2.spell2 == "Mystic") || (player2.spell1 == "Mystic" && player2.spell2 == "Water"))){
			player2.cd = cdTop;
			this.height = 16;
			this.width = 16;
			p2bullet61.dir = "D" + this.dir;
			p2bullet61.timeLeft = 60;
			p2bullet61.height = 16;
			p2bullet61.width = 16;
			p2bullet61.x = player2.x;
			p2bullet61.y = player2.y;
			p2bullet62.dir = "D2" + this.dir;
			p2bullet62.timeLeft = 60;
			p2bullet62.height = 16;
			p2bullet62.width = 16;
			p2bullet62.x = player2.x;
			p2bullet62.y = player2.y;
		}
		else{
			player2.cd = cdTop;
		}
	}
	}
	
};
var p2bullet7 = {
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
	if(player2.cd == 0){
		Beam.currentTime=0;
		Beam.play();
		this.dir = dir;
		this.timeLeft = 60;
		this.height = h;
		this.width = w;
		this.x = player2.x;
		this.y = player2.y;
		if(spell == "Homing Beam"){
			player2.cd = 35;
		}
		else if(((player2.spell1 == "Water" && player2.spell2 == "Mystic") || (player2.spell1 == "Mystic" && player2.spell2 == "Water"))){
			player2.cd = cdTop;
			this.height = 16;
			this.width = 16;
			p2bullet71.dir = "D" + this.dir;
			p2bullet71.timeLeft = 60;
			p2bullet71.height = 16;
			p2bullet71.width = 16;
			p2bullet71.x = player2.x;
			p2bullet71.y = player2.y;
			p2bullet72.dir = "D2" + this.dir;
			p2bullet72.timeLeft = 60;
			p2bullet72.height = 16;
			p2bullet72.width = 16;
			p2bullet72.x = player2.x;
			p2bullet72.y = player2.y;
		}
		else{
			player2.cd = cdTop;
		}
	}
	}
	
};
var p2bullet8 = {
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
	if(player2.cd == 0){
		Beam.currentTime=0;
		Beam.play();
		this.dir = dir;
		this.timeLeft = 60;
		this.height = h;
		this.width = w;
		this.x = player2.x;
		this.y = player2.y;
		if(spell == "Homing Beam"){
			player2.cd = 35;
		}
		else if(((player2.spell1 == "Water" && player2.spell2 == "Mystic") || (player2.spell1 == "Mystic" && player2.spell2 == "Water"))){
			player2.cd = cdTop;
			this.height = 16;
			this.width = 16;
			p2bullet81.dir = "D" + this.dir;
			p2bullet81.timeLeft = 60;
			p2bullet81.height = 16;
			p2bullet81.width = 16;
			p2bullet81.x = player2.x;
			p2bullet81.y = player2.y;
			p2bullet82.dir = "D2" + this.dir;
			p2bullet82.timeLeft = 60;
			p2bullet82.height = 16;
			p2bullet82.width = 16;
			p2bullet82.x = player2.x;
			p2bullet82.y = player2.y;
		}
		else{
			player2.cd = cdTop;
		}
	}
	}
};
var p2bullet11 = {
	x: -100,
	y: -200,
	timeLeft: 0,
	speed: 16,
	width: 16,
	height: 16,
	dir: "A",
	splitTimer: 0
};
var p2bullet12 = {
	x: -100,
	y: -200,
	timeLeft: 0,
	speed: 16,
	width: 16,
	height: 16,
	dir: "A",
	splitTimer: 0
};
var p2bullet21 = {
	x: -100,
	y: -200,
	timeLeft: 0,
	speed: 16,
	width: 16,
	height: 16,
	dir: "A",
	splitTimer: 0
};
var p2bullet22 = {
	x: -100,
	y: -200,
	timeLeft: 0,
	speed: 16,
	width: 16,
	height: 16,
	dir: "A",
	splitTimer: 0
};
var p2bullet31 = {
	x: -100,
	y: -200,
	timeLeft: 0,
	speed: 16,
	width: 16,
	height: 16,
	dir: "A",
	splitTimer: 0
};
var p2bullet32 = {
	x: -100,
	y: -200,
	timeLeft: 0,
	speed: 16,
	width: 16,
	height: 16,
	dir: "A",
	splitTimer: 0
};
var p2bullet41 = {
	x: -100,
	y: -200,
	timeLeft: 0,
	speed: 16,
	width: 16,
	height: 16,
	dir: "A",
	splitTimer: 0
};
var p2bullet42 = {
	x: -100,
	y: -200,
	timeLeft: 0,
	speed: 16,
	width: 16,
	height: 16,
	dir: "A",
	splitTimer: 0
};
var p2bullet51 = {
	x: -100,
	y: -200,
	timeLeft: 0,
	speed: 16,
	width: 16,
	height: 16,
	dir: "A",
	splitTimer: 0
};
var p2bullet52 = {
	x: -100,
	y: -200,
	timeLeft: 0,
	speed: 16,
	width: 16,
	height: 16,
	dir: "A",
	splitTimer: 0
};
var p2bullet61 = {
	x: -100,
	y: -200,
	timeLeft: 0,
	speed: 16,
	width: 16,
	height: 16,
	dir: "A",
	splitTimer: 0
};
var p2bullet62 = {
	x: -100,
	y: -200,
	timeLeft: 0,
	speed: 16,
	width: 16,
	height: 16,
	dir: "A",
	splitTimer: 0
};
var p2bullet71 = {
	x: -100,
	y: -200,
	timeLeft: 0,
	speed: 16,
	width: 16,
	height: 16,
	dir: "A",
	splitTimer: 0
};
var p2bullet72 = {
	x: -100,
	y: -200,
	timeLeft: 0,
	speed: 16,
	width: 16,
	height: 16,
	dir: "A",
	splitTimer: 0
};
var p2bullet81 = {
	x: -100,
	y: -200,
	timeLeft: 0,
	speed: 16,
	width: 16,
	height: 16,
	dir: "A",
	splitTimer: 0
};
var p2bullet82 = {
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
var p2ConductiveShots = {1: p2bullet11, 2: p2bullet12, 3: p2bullet21, 4: p2bullet22, 5: p2bullet31, 6: p2bullet32, 7: p2bullet41, 8: p2bullet42, 9: p2bullet51, 10: p2bullet52, 11: p2bullet61, 12: p2bullet62,
				13: p2bullet71, 14: p2bullet72, 15: p2bullet81, 16: p2bullet82};
var p2Bullets = {1: p2bullet, 2: p2bullet2, 3: p2bullet3, 4: p2bullet4, 5: p2bullet5, 6: p2bullet6, 7: p2bullet7, 8: p2bullet8, 9: p2bullet11, 10: p2bullet12,
				11: p2bullet21, 12: p2bullet22, 13: p2bullet31, 14: p2bullet32, 15: p2bullet41, 16: p2bullet42, 17: p2bullet51, 18: p2bullet52, 19: p2bullet61, 20: p2bullet62,
				21: p2bullet71, 22: p2bullet72, 23: p2bullet81, 24: p2bullet82};
var mystIndex = 1;
function drawp2Bullet(B){
	if (B.timeLeft > 0){
		if(((player2.spell1 == "Water" && player2.spell2 == "Mystic") || (player2.spell1 == "Mystic" && player2.spell2 == "Water"))){
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
		else if(((player2.spell1 == "Fire" && player2.spell2 == "Mystic") || (player2.spell1 == "Mystic" && player2.spell2 == "Fire"))){
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
				ctx.drawImage(BeamSheet, 32, 68, 32, 32, B.x - 16, B.y - 16, 32, 32);
			}
		}
		else if(((player2.spell1 == "Ice" && player2.spell2 == "Mystic") || (player2.spell1 == "Mystic" && player2.spell2 == "Ice"))){
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
				ctx.drawImage(BeamSheet, 64, 68, 32, 32, B.x - 16, B.y - 16, 32, 32);
			}
		}
		else if(((player2.spell1 == "Lightning" && player2.spell2 == "Mystic") || (player2.spell1 == "Mystic" && player2.spell2 == "Lightning"))){
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
		else if(((player2.spell1 == "Light" && player2.spell2 == "Mystic") || (player2.spell1 == "Mystic" && player2.spell2 == "Light"))){
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
		else if(((player2.spell1 == "Air" && player2.spell2 == "Mystic") || (player2.spell1 == "Mystic" && player2.spell2 == "Air"))){
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
				ctx.drawImage(BeamSheet, 128, 68, 32, 32, B.x - 16, B.y - 16, 32, 32);
			}
		}
		else if(((player2.spell1 == "Dark" && player2.spell2 == "Mystic") || (player2.spell1 == "Mystic" && player2.spell2 == "Dark"))){
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
				ctx.drawImage(BeamSheet, 160, 68, 32, 32, B.x - 16, B.y - 16, 32, 32);
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
				ctx.drawImage(BeamSheet, 0, 68, 32, 32, B.x - 16, B.y - 16, 32, 32);
			}
		}
	}
	else{
		B.x = -100;
		B.y = -200;
	}
}
// Increment
function p2Bulletmove(B){
	if(B.splitTimer > 0){
		B.splitTimer-=1;
	}
	if(((player2.spell1 == "Air" && player2.spell2 == "Mystic") || (player2.spell1 == "Mystic" && player2.spell2 == "Air"))){
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
			if(AllEnemies[E].onTree == 0){
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
	else if(STATE != "Swamp"){
		for(O in obstacle1){
			if(obstacle1[O].fallIndex != 46){
				if(collision(B.dir, B, obstacle1[O])){
					if(((player2.spell1 == "Dark" && player2.spell2 == "Mystic") || (player2.spell1 == "Mystic" && player2.spell2 == "Dark"))){
						player2.currpower = player2.power;
						player2.power+=1;
					}
					obsHit(obstacle1[O]);
					if(((player2.spell1 == "Dark" && player2.spell2 == "Mystic") || (player2.spell1 == "Mystic" && player2.spell2 == "Dark"))){
						player2.power = player2.currpower;
					}
					if(((player2.spell1 == "Fire" && player2.spell2 == "Mystic") || (player2.spell1 == "Mystic" && player2.spell2 == "Fire"))){
						if(p2Mfire.onScreen == 0){
							p2Mfire.onScreen = 1;
							p2Mfire.frame = 0;
							p2Mfire.x = B.x;
							p2Mfire.y = B.y;
						}
						else if(p2Mfire2.onScreen == 0){
							p2Mfire2.onScreen = 1;
							p2Mfire2.frame = 0;
							p2Mfire2.x = B.x;
							p2Mfire2.y = B.y;
						}
						else if(p2Mfire3.onScreen == 0){
							p2Mfire3.onScreen = 1;
							p2Mfire3.frame = 0;
							p2Mfire3.x = B.x;
							p2Mfire3.y = B.y;
						}
						else if(p2Mfire4.onScreen == 0){
							p2Mfire4.onScreen = 1;
							p2Mfire4.frame = 0;
							p2Mfire4.x = B.x;
							p2Mfire4.y = B.y;
						}
					}
					else if(((player2.spell1 == "Ice" && player2.spell2 == "Mystic") || (player2.spell1 == "Mystic" && player2.spell2 == "Ice"))){
						if(p2Mice.onScreen == 0){
							p2Mice.onScreen = 1;
							p2Mice.frame = 0;
							p2Mice.x = B.x;
							p2Mice.y = B.y;
						}
						else if(p2Mice2.onScreen == 0){
							p2Mice2.onScreen = 1;
							p2Mice2.frame = 0;
							p2Mice2.x = B.x;
							p2Mice2.y = B.y;
						}
						else if(p2Mice3.onScreen == 0){
							p2Mice3.onScreen = 1;
							p2Mice3.frame = 0;
							p2Mice3.x = B.x;
							p2Mice3.y = B.y;
						}
						else if(p2Mice4.onScreen == 0){
							p2Mice4.onScreen = 1;
							p2Mice4.frame = 0;
							p2Mice4.x = B.x;
							p2Mice4.y = B.y;
						}
					}
					if(((player2.spell1 == "Lightning" && player2.spell2 == "Mystic") || (player2.spell1 == "Mystic" && player2.spell2 == "Lightning"))){
						if(!B.splitTimer){
							B.splitTimer = 3;
							if(B.dir == "W" || B.dir == "S"){
								B.width = 32;
								B.height = 4;
								B.dir = "A";
								for(S in p2ConductiveShots){
									if(p2ConductiveShots[S].timeLeft == 0){
										p2ConductiveShots[S].dir = "D";
										p2ConductiveShots[S].height = 4;
										p2ConductiveShots[S].width = 32;
										p2ConductiveShots[S].x = B.x;
										p2ConductiveShots[S].y = B.y;
										p2ConductiveShots[S].timeLeft = B.timeLeft;
										p2ConductiveShots[S].splitTimer = 3;
										break;
									}
								}
							}
							else if(B.dir == "A" || B.dir == "D"){
								B.width = 4;
								B.height = 32;
								B.dir = "W";
								for(S in p2ConductiveShots){
									if(p2ConductiveShots[S].timeLeft == 0){
										p2ConductiveShots[S].dir = "S";
										p2ConductiveShots[S].height = 32;
										p2ConductiveShots[S].width = 4;
										p2ConductiveShots[S].x = B.x;
										p2ConductiveShots[S].y = B.y;
										p2ConductiveShots[S].timeLeft = B.timeLeft;
										p2ConductiveShots[S].splitTimer = 3;
										break;
									}
								}
							}
							else if(B.dir == "WD" || B.dir == "AS"){
								B.width = 4;
								B.height = 4;
								B.dir = "WA";
								for(S in p2ConductiveShots){
									if(p2ConductiveShots[S].timeLeft == 0 && p2ConductiveShots[S].x == -100 && p2ConductiveShots[S].y == -200){
										p2ConductiveShots[S].dir = "SD";
										p2ConductiveShots[S].height = 4;
										p2ConductiveShots[S].width = 4;
										p2ConductiveShots[S].x = B.x+4;
										p2ConductiveShots[S].y = B.y+4;
										p2ConductiveShots[S].timeLeft = B.timeLeft;
										p2ConductiveShots[S].splitTimer = 3;
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
								for(S in p2ConductiveShots){
									if(p2ConductiveShots[S].timeLeft == 0 && p2ConductiveShots[S].x == -100 && p2ConductiveShots[S].y == -200){
										p2ConductiveShots[S].dir = "AS";
										p2ConductiveShots[S].height = 4;
										p2ConductiveShots[S].width = 4;
										p2ConductiveShots[S].x = B.x-4;
										p2ConductiveShots[S].y = B.y+4;
										p2ConductiveShots[S].timeLeft = B.timeLeft;
										p2ConductiveShots[S].splitTimer = 3;
										break;
									}
								}
								B.x+=4;
								B.y-=4;
							}
						}
					}
					else if((!(player2.spell1 == "Light" && player2.spell2 == "Mystic") && !(player2.spell1 == "Mystic" && player2.spell2 == "Light"))){
						B.timeLeft = 0;
					}
				}
			}
		}
		for(O in obstacle2){
			if(collision(B.dir, B, obstacle2[O])){
				if(((player2.spell1 == "Dark" && player2.spell2 == "Mystic") || (player2.spell1 == "Mystic" && player2.spell2 == "Dark"))){
					player2.currpower = player2.power;
					player2.power+=1;
				}
				obsHit(obstacle2[O]);
				if(((player2.spell1 == "Dark" && player2.spell2 == "Mystic") || (player2.spell1 == "Mystic" && player2.spell2 == "Dark"))){
					player2.power = player2.currpower;
				}
				if(((player2.spell1 == "Fire" && player2.spell2 == "Mystic") || (player2.spell1 == "Mystic" && player2.spell2 == "Fire"))){
					if(p2Mfire.onScreen == 0){
						p2Mfire.onScreen = 1;
						p2Mfire.frame = 0;
						p2Mfire.x = B.x;
						p2Mfire.y = B.y;
					}
					else if(p2Mfire2.onScreen == 0){
						p2Mfire2.onScreen = 1;
						p2Mfire2.frame = 0;
						p2Mfire2.x = B.x;
						p2Mfire2.y = B.y;
					}
					else if(p2Mfire3.onScreen == 0){
						p2Mfire3.onScreen = 1;
						p2Mfire3.frame = 0;
						p2Mfire3.x = B.x;
						p2Mfire3.y = B.y;
					}
					else if(p2Mfire4.onScreen == 0){
						p2Mfire4.onScreen = 1;
						p2Mfire4.frame = 0;
						p2Mfire4.x = B.x;
						p2Mfire4.y = B.y;
					}
				}
				else if(((player2.spell1 == "Ice" && player2.spell2 == "Mystic") || (player2.spell1 == "Mystic" && player2.spell2 == "Ice"))){
					if(p2Mice.onScreen == 0){
						p2Mice.onScreen = 1;
						p2Mice.frame = 0;
						p2Mice.x = B.x;
						p2Mice.y = B.y;
					}
					else if(p2Mice2.onScreen == 0){
						p2Mice2.onScreen = 1;
						p2Mice2.frame = 0;
						p2Mice2.x = B.x;
						p2Mice2.y = B.y;
					}
					else if(p2Mice3.onScreen == 0){
						p2Mice3.onScreen = 1;
						p2Mice3.frame = 0;
						p2Mice3.x = B.x;
						p2Mice3.y = B.y;
					}
					else if(p2Mice4.onScreen == 0){
						p2Mice4.onScreen = 1;
						p2Mice4.frame = 0;
						p2Mice4.x = B.x;
						p2Mice4.y = B.y;
					}
				}
				if(((player2.spell1 == "Lightning" && player2.spell2 == "Mystic") || (player2.spell1 == "Mystic" && player2.spell2 == "Lightning"))){
					if(!B.splitTimer){
						B.splitTimer = 3;
						if(B.dir == "W" || B.dir == "S"){
							B.width = 32;
							B.height = 4;
							B.dir = "A";
							for(S in p2ConductiveShots){
								if(p2ConductiveShots[S].timeLeft == 0){
									p2ConductiveShots[S].dir = "D";
									p2ConductiveShots[S].height = 4;
									p2ConductiveShots[S].width = 32;
									p2ConductiveShots[S].x = B.x;
									p2ConductiveShots[S].y = B.y;
									p2ConductiveShots[S].timeLeft = B.timeLeft;
									p2ConductiveShots[S].splitTimer = 3;
									break;
								}
							}
						}
						else if(B.dir == "A" || B.dir == "D"){
							B.width = 4;
							B.height = 32;
							B.dir = "W";
							for(S in p2ConductiveShots){
								if(p2ConductiveShots[S].timeLeft == 0){
									p2ConductiveShots[S].dir = "S";
									p2ConductiveShots[S].height = 32;
									p2ConductiveShots[S].width = 4;
									p2ConductiveShots[S].x = B.x;
									p2ConductiveShots[S].y = B.y;
									p2ConductiveShots[S].timeLeft = B.timeLeft;
									p2ConductiveShots[S].splitTimer = 3;
									break;
								}
							}
						}
						else if(B.dir == "WD" || B.dir == "AS"){
							B.width = 4;
							B.height = 4;
							B.dir = "WA";
							for(S in p2ConductiveShots){
								if(p2ConductiveShots[S].timeLeft == 0 && p2ConductiveShots[S].x == -100 && p2ConductiveShots[S].y == -200){
									p2ConductiveShots[S].dir = "SD";
									p2ConductiveShots[S].height = 4;
									p2ConductiveShots[S].width = 4;
									p2ConductiveShots[S].x = B.x+4;
									p2ConductiveShots[S].y = B.y+4;
									p2ConductiveShots[S].timeLeft = B.timeLeft;
									p2ConductiveShots[S].splitTimer = 3;
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
							for(S in p2ConductiveShots){
								if(p2ConductiveShots[S].timeLeft == 0 && p2ConductiveShots[S].x == -100 && p2ConductiveShots[S].y == -200){
									p2ConductiveShots[S].dir = "AS";
									p2ConductiveShots[S].height = 4;
									p2ConductiveShots[S].width = 4;
									p2ConductiveShots[S].x = B.x-4;
									p2ConductiveShots[S].y = B.y+4;
									p2ConductiveShots[S].timeLeft = B.timeLeft;
									p2ConductiveShots[S].splitTimer = 3;
									break;
								}
							}
							B.x+=4;
							B.y-=4;
						}
					}
				}
				else if((!(player2.spell1 == "Light" && player2.spell2 == "Mystic") && !(player2.spell1 == "Mystic" && player2.spell2 == "Light"))){
					B.timeLeft = 0;
				}
			}
		}
		for(O in obstacle3){
			if(collision(B.dir, B, obstacle3[O])){
				if(((player2.spell1 == "Dark" && player2.spell2 == "Mystic") || (player2.spell1 == "Mystic" && player2.spell2 == "Dark"))){
					player2.currpower = player2.power;
					player2.power+=1;
				}
				obsHit(obstacle3[O]);
				if(((player2.spell1 == "Dark" && player2.spell2 == "Mystic") || (player2.spell1 == "Mystic" && player2.spell2 == "Dark"))){
					player2.power = player2.currpower;
				}
				if(((player2.spell1 == "Fire" && player2.spell2 == "Mystic") || (player2.spell1 == "Mystic" && player2.spell2 == "Fire"))){
					if(p2Mfire.onScreen == 0){
						p2Mfire.onScreen = 1;
						p2Mfire.frame = 0;
						p2Mfire.x = B.x;
						p2Mfire.y = B.y;
					}
					else if(p2Mfire2.onScreen == 0){
						p2Mfire2.onScreen = 1;
						p2Mfire2.frame = 0;
						p2Mfire2.x = B.x;
						p2Mfire2.y = B.y;
					}
					else if(p2Mfire3.onScreen == 0){
						p2Mfire3.onScreen = 1;
						p2Mfire3.frame = 0;
						p2Mfire3.x = B.x;
						p2Mfire3.y = B.y;
					}
					else if(p2Mfire4.onScreen == 0){
						p2Mfire4.onScreen = 1;
						p2Mfire4.frame = 0;
						p2Mfire4.x = B.x;
						p2Mfire4.y = B.y;
					}
				}
				else if(((player2.spell1 == "Ice" && player2.spell2 == "Mystic") || (player2.spell1 == "Mystic" && player2.spell2 == "Ice"))){
					if(p2Mice.onScreen == 0){
						p2Mice.onScreen = 1;
						p2Mice.frame = 0;
						p2Mice.x = B.x;
						p2Mice.y = B.y;
					}
					else if(p2Mice2.onScreen == 0){
						p2Mice2.onScreen = 1;
						p2Mice2.frame = 0;
						p2Mice2.x = B.x;
						p2Mice2.y = B.y;
					}
					else if(p2Mice3.onScreen == 0){
						p2Mice3.onScreen = 1;
						p2Mice3.frame = 0;
						p2Mice3.x = B.x;
						p2Mice3.y = B.y;
					}
					else if(p2Mice4.onScreen == 0){
						p2Mice4.onScreen = 1;
						p2Mice4.frame = 0;
						p2Mice4.x = B.x;
						p2Mice4.y = B.y;
					}
				}
				if(((player2.spell1 == "Lightning" && player2.spell2 == "Mystic") || (player2.spell1 == "Mystic" && player2.spell2 == "Lightning"))){
					if(!B.splitTimer){
						B.splitTimer = 3;
						if(B.dir == "W" || B.dir == "S"){
							B.width = 32;
							B.height = 4;
							B.dir = "A";
							for(S in p2ConductiveShots){
								if(p2ConductiveShots[S].timeLeft == 0){
									p2ConductiveShots[S].dir = "D";
									p2ConductiveShots[S].height = 4;
									p2ConductiveShots[S].width = 32;
									p2ConductiveShots[S].x = B.x;
									p2ConductiveShots[S].y = B.y;
									p2ConductiveShots[S].timeLeft = B.timeLeft;
									p2ConductiveShots[S].splitTimer = 3;
									break;
								}
							}
						}
						else if(B.dir == "A" || B.dir == "D"){
							B.width = 4;
							B.height = 32;
							B.dir = "W";
							for(S in p2ConductiveShots){
								if(p2ConductiveShots[S].timeLeft == 0){
									p2ConductiveShots[S].dir = "S";
									p2ConductiveShots[S].height = 32;
									p2ConductiveShots[S].width = 4;
									p2ConductiveShots[S].x = B.x;
									p2ConductiveShots[S].y = B.y;
									p2ConductiveShots[S].timeLeft = B.timeLeft;
									p2ConductiveShots[S].splitTimer = 3;
									break;
								}
							}
						}
						else if(B.dir == "WD" || B.dir == "AS"){
							B.width = 4;
							B.height = 4;
							B.dir = "WA";
							for(S in p2ConductiveShots){
								if(p2ConductiveShots[S].timeLeft == 0 && p2ConductiveShots[S].x == -100 && p2ConductiveShots[S].y == -200){
									p2ConductiveShots[S].dir = "SD";
									p2ConductiveShots[S].height = 4;
									p2ConductiveShots[S].width = 4;
									p2ConductiveShots[S].x = B.x+4;
									p2ConductiveShots[S].y = B.y+4;
									p2ConductiveShots[S].timeLeft = B.timeLeft;
									p2ConductiveShots[S].splitTimer = 3;
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
							for(S in p2ConductiveShots){
								if(p2ConductiveShots[S].timeLeft == 0 && p2ConductiveShots[S].x == -100 && p2ConductiveShots[S].y == -200){
									p2ConductiveShots[S].dir = "AS";
									p2ConductiveShots[S].height = 4;
									p2ConductiveShots[S].width = 4;
									p2ConductiveShots[S].x = B.x-4;
									p2ConductiveShots[S].y = B.y+4;
									p2ConductiveShots[S].timeLeft = B.timeLeft;
									p2ConductiveShots[S].splitTimer = 3;
									break;
								}
							}
							B.x+=4;
							B.y-=4;
						}
					}
				}
				else if((!(player2.spell1 == "Light" && player2.spell2 == "Mystic") && !(player2.spell1 == "Mystic" && player2.spell2 == "Light"))){
					B.timeLeft = 0;
				}
			}
		}
	}
	for (E in AllEnemies){
		if(collision(B.dir, B, AllEnemies[E]) && AllEnemies[E].onTree == 0){
			if(!(((player2.spell1 == "Light" && player2.spell2 == "Mystic") || (player2.spell1 == "Mystic" && player2.spell2 == "Light"))) && !(player2.spell1 == "Mystic" && player2.spell2 != "Mystic" && player2.spell2 != "N/A" && player2.spell2 != "Earth") && !(player2.spell2 == "Mystic" && player2.spell1 != "Mystic" && player2.spell1 != "Earth" && player2.spell1 != "N/A")){
				createBlood(B);
			}
			if(((player2.spell1 == "Dark" && player2.spell2 == "Mystic") || (player2.spell1 == "Mystic" && player2.spell2 == "Dark"))){
				player2.currpower = player2.power;
				player2.power+=1;
			}
			if(((player2.spell1 == "Fire" && player2.spell2 == "Mystic") || (player2.spell1 == "Mystic" && player2.spell2 == "Fire"))){
				if(p2Mfire.onScreen == 0){
					p2Mfire.onScreen = 1;
					p2Mfire.frame = 0;
					p2Mfire.x = B.x;
					p2Mfire.y = B.y;
				}
				else if(p2Mfire2.onScreen == 0){
					p2Mfire2.onScreen = 1;
					p2Mfire2.frame = 0;
					p2Mfire2.x = B.x;
					p2Mfire2.y = B.y;
				}
				else if(p2Mfire3.onScreen == 0){
					p2Mfire3.onScreen = 1;
					p2Mfire3.frame = 0;
					p2Mfire3.x = B.x;
					p2Mfire3.y = B.y;
				}
				else if(p2Mfire4.onScreen == 0){
					p2Mfire4.onScreen = 1;
					p2Mfire4.frame = 0;
					p2Mfire4.x = B.x;
					p2Mfire4.y = B.y;
				}
				B.timeLeft = 0;
			}
			else if(((player2.spell1 == "Ice" && player2.spell2 == "Mystic") || (player2.spell1 == "Mystic" && player2.spell2 == "Ice"))){
				if(p2Mice.onScreen == 0){
					p2Mice.onScreen = 1;
					p2Mice.frame = 0;
					p2Mice.x = B.x;
					p2Mice.y = B.y;
				}
				else if(p2Mice2.onScreen == 0){
					p2Mice2.onScreen = 1;
					p2Mice2.frame = 0;
					p2Mice2.x = B.x;
					p2Mice2.y = B.y;
				}
				else if(p2Mice3.onScreen == 0){
					p2Mice3.onScreen = 1;
					p2Mice3.frame = 0;
					p2Mice3.x = B.x;
					p2Mice3.y = B.y;
				}
				else if(p2Mice4.onScreen == 0){
					p2Mice4.onScreen = 1;
					p2Mice4.frame = 0;
					p2Mice4.x = B.x;
					p2Mice4.y = B.y;
				}
				B.timeLeft = 0;
			}
			else if(((player2.spell1 == "Lightning" && player2.spell2 == "Mystic") || (player2.spell1 == "Mystic" && player2.spell2 == "Lightning"))){
				if(!B.splitTimer){
					B.splitTimer = 3;
					if(B.dir == "W" || B.dir == "S"){
						B.width = 32;
						B.height = 4;
						B.dir = "A";
						for(S in p2ConductiveShots){
							if(p2ConductiveShots[S].timeLeft == 0){
								p2ConductiveShots[S].dir = "D";
								p2ConductiveShots[S].height = 4;
								p2ConductiveShots[S].width = 32;
								p2ConductiveShots[S].x = B.x;
								p2ConductiveShots[S].y = B.y;
								p2ConductiveShots[S].timeLeft = B.timeLeft;
								p2ConductiveShots[S].splitTimer = 3;
								break;
							}
						}
					}
					else if(B.dir == "A" || B.dir == "D"){
						B.width = 4;
						B.height = 32;
						B.dir = "W";
						for(S in p2ConductiveShots){
							if(p2ConductiveShots[S].timeLeft == 0){
								p2ConductiveShots[S].dir = "S";
								p2ConductiveShots[S].height = 32;
								p2ConductiveShots[S].width = 4;
								p2ConductiveShots[S].x = B.x;
								p2ConductiveShots[S].y = B.y;
								p2ConductiveShots[S].timeLeft = B.timeLeft;
								p2ConductiveShots[S].splitTimer = 3;
								break;
							}
						}
					}
					else if(B.dir == "WD" || B.dir == "AS"){
						B.width = 4;
						B.height = 4;
						B.dir = "WA";
						for(S in p2ConductiveShots){
							if(p2ConductiveShots[S].timeLeft == 0 && p2ConductiveShots[S].x == -100 && p2ConductiveShots[S].y == -200){
								p2ConductiveShots[S].dir = "SD";
								p2ConductiveShots[S].height = 4;
								p2ConductiveShots[S].width = 4;
								p2ConductiveShots[S].x = B.x+4;
								p2ConductiveShots[S].y = B.y+4;
								p2ConductiveShots[S].timeLeft = B.timeLeft;
								p2ConductiveShots[S].splitTimer = 3;
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
						for(S in p2ConductiveShots){
							if(p2ConductiveShots[S].timeLeft == 0 && p2ConductiveShots[S].x == -100 && p2ConductiveShots[S].y == -200){
								p2ConductiveShots[S].dir = "AS";
								p2ConductiveShots[S].height = 4;
								p2ConductiveShots[S].width = 4;
								p2ConductiveShots[S].x = B.x-4;
								p2ConductiveShots[S].y = B.y+4;
								p2ConductiveShots[S].timeLeft = B.timeLeft;
								p2ConductiveShots[S].splitTimer = 3;
								break;
							}
						}
						B.x+=4;
						B.y-=4;
					}
				}
			}
			else if(AllEnemies[E].type != "Genie" && (!(player2.spell1 == "Light" && player2.spell2 == "Mystic") && !(player2.spell1 == "Mystic" && player2.spell2 == "Light"))){
				B.timeLeft = 0;
			}
			onHit(AllEnemies[E]);
			if(((player2.spell1 == "Dark" && player2.spell2 == "Mystic") || (player2.spell1 == "Mystic" && player2.spell2 == "Dark"))){
				player2.power = player2.currpower;
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
// Fire: Damages all enemies in radius
var p2fire = {
	color: "#FF6600",
	x: -100,
	y: -200,
	timeLeft: 0,
	width: 32,
	height: 32,
	frame: 0,
	cd: 0,
	cdTop: 150,
	onScreen: 0,
	cast: 0,
	used: 0,
	
	draw: function(){
		if(this.onScreen == 1 && this.cast == 0){
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
		if(this.cd > 0){
			this.cd-=1;
		}
		if(this.cast > 0){
			this.cast-=1;
		}
		if(this.frame == 20){
			this.x = -100;
			this.y = -200;
			this.width = 32;
			this.height = 32;
			this.onScreen = 0;
		}
		else if(this.onScreen ==1 && this.cast == 0){
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
	if(this.cd == 0){
		this.height = 32;
		this.width = 32;
		this.x = player2.x;
		this.y = player2.y;
		this.cd = this.cdTop;
		this.frame = 0;
		this.onScreen = 1;
		this.used = 0;
		if(this.cast <0){
			this.cast = 0;
		}
	}
	}
};

// Fire2: Damages all enemies in radius
var p2fire2 = {
	color: "#FF6600",
	x: -1000,
	y: -200,
	timeLeft: 0,
	width: 32,
	height: 32,
	frame: 0,
	cd: 0,
	cdTop: 300,
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
		if(this.cd > 0){
			this.cd-=1;
		}
		if(this.frame == 20){
			this.x = -100;
			this.y = -200;
			this.width = 32;
			this.height = 32;
			this.onScreen = 0;
		}
		else{
			this.width = 32 + (32*this.frame);
			this.height = 32 + (32*this.frame);
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
	if(this.cd == 0){
		Explosion.currentTime=0;
		Explosion.play();
		this.height = 32;
		this.width = 32;
		this.x = player2.x;
		this.y = player2.y;
		this.cd = this.cdTop;
		this.frame = 0;
		this.onScreen = 1;
	}
	}
};
//------------------------------------- Mystic Fire powerup explosions --------------------------------------------------------------//
// Fire: Damages all enemies in radius
var p2Mfire = {
	color: "#FF6600",
	x: -100,
	y: -200,
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
			this.x = -100;
			this.y = -200;
			this.width = 32;
			this.height = 32;
			this.onScreen = 0;
			this.frame = 0;
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
	}
};
// Fire: Damages all enemies in radius
var p2Mfire2 = {
	color: "#FF6600",
	x: -100,
	y: -200,
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
			this.x = -100;
			this.y = -200;
			this.width = 32;
			this.height = 32;
			this.frame = 0;
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
	}
};
// Fire: Damages all enemies in radius
var p2Mfire3 = {
	color: "#FF6600",
	x: -100,
	y: -200,
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
			this.x = -100;
			this.y = -200;
			this.width = 32;
			this.height = 32;
			this.onScreen = 0;
			this.frame = 0;
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
	}
};
// Fire: Damages all enemies in radius
var p2Mfire4 = {
	color: "#FF6600",
	x: -100,
	y: -200,
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
			this.x = -100;
			this.y = -200;
			this.width = 32;
			this.height = 32;
			this.onScreen = 0;
			this.frame = 0;
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
	}
};
// Ice: Slows all enemies by halving their speed
var p2ice = {
	color: "#00CCFF",
	timeLeft: 0,
	width: 32,
	height: 32,
	x: -100,
	y: -200,
	frame: 0,
	cd: 0,
	cdTop: 450,
	onScreen: 0,
	end: false,
	cast: 0,
	used: 0,
	
	draw: function(){
		if(this.onScreen == 1 && this.cast ==0){
			if(this.used == 0){
				Frozen.currentTime=0;
				Frozen.play();
				this.used = 1;
			}
			Alpha = 0.15;
			ctx.fillStyle = this.color;
			ctx.fillRect(this.x - this.width * 0.5, this.y - this.height * 0.5,	this.width, this.height);
		}
	},
	
	move: function(){
		if(this.cd > 0){
			this.cd-=1;
		}
		if(this.cast > 0){
			this.cast-=1;
		}
		if(this.frame == 150 && this.onScreen == 1){
			this.width = 32;
			this.height = 32;
			this.x = -200;
			this.y = -100;
			this.onScreen = 0;
			this.end = true;
			Alpha = 1;
		}
		else if(this.onScreen == 1 && this.cast == 0){
			this.width = this.width + (32*this.frame);
			this.height = this.height + (32*this.frame);
			this.frame++;
		}
	},
	// Slow all enemies in radius
	effect: function(){
		if(this.onScreen == 1 && this.cast == 0){
			for (E in AllEnemies){
				AllEnemies[E].speed = AllEnemies[E].speed2;
			}
		}
		else if(this.end == true){
			for (E in AllEnemies){
				AllEnemies[E].speed = AllEnemies[E].speed*2;
			}
			this.frame = 0;
			this.end = false;
		}
	},
		
	// Spawn
	shoot: function(){
	if(this.cd == 0){
		this.height = 32;
		this.width = 32;
		this.x = player2.x;
		this.y = player2.y;
		this.cd = this.cdTop;
		this.frame = 0;
		this.onScreen = 1;
		this.used = 0;
		if(this.cast <0){
			this.cast = 0;
		}
	}
	}
};

// Ice2: Slows all enemies by halving their speed
var p2ice2 = {
	color: "#00CCFF",
	timeLeft: 0,
	width: 32,
	height: 32,
	x: -100,
	y: -200,
	frame: 0,
	cd: 0,
	cdTop: 450,
	onScreen: 0,
	end: false,
	
	draw: function(){
		if(this.onScreen == 1){
			Alpha = 0.15;
			ctx.fillStyle = this.color;
			ctx.fillRect(this.x - this.width * 0.5, this.y - this.height * 0.5,	this.width, this.height);
		}
	},
	
	move: function(){
		if(this.cd > 0){
			this.cd-=1;
		}
		if(this.frame == 300 && this.onScreen == 1){
			this.width = 32;
			this.height = 32;
			this.x = -200;
			this.y = -100;
			this.onScreen = 0;
			this.end = true;
			Alpha = 1;
		}
		else if(this.onScreen == 1){
			this.width = this.width + (32*this.frame);
			this.height = this.height + (32*this.frame);
			this.frame++;
		}
	},
	// Slow all enemies in radius
	effect: function(){
		if(this.onScreen == 1){
			for (E in AllEnemies){
				AllEnemies[E].speed = AllEnemies[E].speed2;
			}
		}
		else if(this.end == true){
			for (E in AllEnemies){
				AllEnemies[E].speed = AllEnemies[E].speed*2;
			}
			this.frame = 0;
			this.end = false;
		}
	},
		
	// Spawn
	shoot: function(){
		if(this.cd == 0){
			Frozen.currentTime=0;
			Frozen.play();
			this.height = 32;
			this.width = 32;
			this.x = player2.x;
			this.y = player2.y;
			this.cd = this.cdTop;
			this.frame = 0;
			this.onScreen = 1;
		}
	}
	
};
//----------------------------------------------------------- Mystic Ice Beam ------------------------------------------------------//
var p2Mice = {
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
		else if(this.frame < 45 && this.onScreen == 1){
			this.frame++;
			for (E in AllEnemies){
				if(collision(AllEnemies[E].dir, AllEnemies[E], this) || contained(this, AllEnemies[E])){
					AllEnemies[E].speed = AllEnemies[E].speed2;
				}
			}
		}
		if(this.frame >= 45 && this.onScreen == 1){
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
var p2Mice2 = {
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
		else if(this.frame < 45 && this.onScreen == 1){
			this.frame++;
			for (E in AllEnemies){
				if(collision(AllEnemies[E].dir, AllEnemies[E], this) || contained(this, AllEnemies[E])){
					AllEnemies[E].speed = AllEnemies[E].speed2;
				}
			}
		}
		if(this.frame >= 45 && this.onScreen == 1){
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
var p2Mice3 = {
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
		else if(this.frame < 45 && this.onScreen == 1){
			this.frame++;
			for (E in AllEnemies){
				if(collision(AllEnemies[E].dir, AllEnemies[E], this) || contained(this, AllEnemies[E])){
					AllEnemies[E].speed = AllEnemies[E].speed2;
				}
			}
		}
		if(this.frame >= 45 && this.onScreen == 1){
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
var p2Mice4 = {
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
		else if(this.frame < 45 && this.onScreen == 1){
			this.frame++;
			for (E in AllEnemies){
				if(collision(AllEnemies[E].dir, AllEnemies[E], this) || contained(this, AllEnemies[E])){
					AllEnemies[E].speed = AllEnemies[E].speed2;
				}
			}
		}
		if(this.frame >= 45 && this.onScreen == 1){
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
// Lightning: Creates a small web of lightning
var p2lightning = {
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
	cdTop: 450,
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
				ctx.drawImage(hlightning1, this.hx - this.hwidth*0.5, this.hy);
				this.hstate+=1;
			}
			else if(this.hstate == 1){
				ctx.drawImage(hlightning2, this.hx - this.hwidth*0.5, this.hy);
				this.hstate+=1;
			}
			else if(this.hstate == 2){
				ctx.drawImage(hlightning3, this.hx - this.hwidth*0.5, this.hy);
				this.hstate=0;
			}
			if(this.vx != -2000){
				if(this.vstate == 0){
					ctx.drawImage(vlightning1, this.vx, this.vy - this.vheight*0.5);
					this.vstate+=1;
				}
				else if(this.vstate == 1){
					ctx.drawImage(vlightning2, this.vx, this.vy - this.vheight*0.5);
					this.vstate+=1;
				}
				else if(this.vstate == 2){
					ctx.drawImage(vlightning3, this.vx, this.vy - this.vheight*0.5);
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
					if(!AllEnemies[E].hptimer){
						if(AllEnemies[E].onScreen == 1 && ((AllEnemies[E].x >= this.vx && AllEnemies[E].x <= this.vx + this.vwidth)
							|| (this.vx >= AllEnemies[E].x - AllEnemies[E].width*0.5 && this.vx <= AllEnemies[E].x + AllEnemies[E].width*0.5))){
							if(lightning12.hy == -2000){
								lightning12.hy = AllEnemies[E].y;
								lightning12.shoot();
							}
							onHit(AllEnemies[E]);
						}
					}
				}
			}
			
			if(this.hy != -2000){
				for (E in AllEnemies){
					if(!AllEnemies[E].hptimer){
						if(AllEnemies[E].onScreen == 1 && ((AllEnemies[E].y <= this.hy + this.hheight && AllEnemies[E].y >= this.hy)
							|| (this.hy >= AllEnemies[E].y-AllEnemies[E].height*0.5 && this.hy <= AllEnemies[E].y + AllEnemies[E].height*0.5))){
							if(this.vx == -2000){
								this.vx = AllEnemies[E].x
							}
							onHit(AllEnemies[E]);
						}
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
			this.hy = player2.y;
			this.cd = this.cdTop;
			this.onScreen = 1;
			this.timeLeft = 120;
			this.used = 0;
			this.cast = 30;
			p2castingBar.onScreen = 1;
			p2castingBar.cast = 30;
			p2castingBar.castmax = 30;
		}
	}
	
};

// Lightning1-2: Creates a small web of lightning
var p2lightning12 = {
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
				ctx.drawImage(hlightning1, this.hx - this.hwidth*0.5, this.hy);
				this.hstate+=1;
			}
			else if(this.hstate == 1){
				ctx.drawImage(hlightning2, this.hx - this.hwidth*0.5, this.hy);
				this.hstate+=1;
			}
			else if(this.hstate == 2){
				ctx.drawImage(hlightning3, this.hx - this.hwidth*0.5, this.hy);
				this.hstate=0;
			}
			if(this.vx != -2000){
				if(this.vstate == 0){
					ctx.drawImage(vlightning1, this.vx, this.vy - this.vheight*0.5);
					this.vstate+=1;
				}
				else if(this.vstate == 1){
					ctx.drawImage(vlightning2, this.vx, this.vy - this.vheight*0.5);
					this.vstate+=1;
				}
				else if(this.vstate == 2){
					ctx.drawImage(vlightning3, this.vx, this.vy - this.vheight*0.5);
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
					if(!AllEnemies[E].hptimer){
						if(AllEnemies[E].onScreen == 1 && ((AllEnemies[E].x >= this.vx && AllEnemies[E].x <= this.vx + this.vwidth)
							|| (this.vx >= AllEnemies[E].x - AllEnemies[E].width*0.5 && this.vx <= AllEnemies[E].x + AllEnemies[E].width*0.5))){
							onHit(AllEnemies[E]);
						}
					}
				}
			}
			if(this.hy != -2000){
				for (E in AllEnemies){
					if(!AllEnemies[E].hptimer){
						if(AllEnemies[E].onScreen == 1 && ((AllEnemies[E].y <= this.hy + this.hheight && AllEnemies[E].y >= this.hy)
							|| (this.hy >= AllEnemies[E].y-AllEnemies[E].height*0.5 && this.hy <= AllEnemies[E].y + AllEnemies[E].height*0.5))){
							if(this.vx == -2000){
								this.vx = AllEnemies[E].x
							}
							onHit(AllEnemies[E]);
						}
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
var p2lightning2 = {
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
	cdTop: 1050,
	onScreen: 0,
	
	draw: function(){
		if(this.onScreen == 1 && this.cast == 0){
			if(this.used == 0){
				Thunder.currentTime=0;
				Thunder.play();
				this.used = 1;
			}
			if(this.hstate == 0){
				ctx.drawImage(hlightning1, this.hx - this.hwidth*0.5, this.hy);
				this.hstate+=1;
			}
			else if(this.hstate == 1){
				ctx.drawImage(hlightning2, this.hx - this.hwidth*0.5, this.hy);
				this.hstate+=1;
			}
			else if(this.hstate == 2){
				ctx.drawImage(hlightning3, this.hx - this.hwidth*0.5, this.hy);
				this.hstate=0;
			}
			if(this.vx != -2000){
				if(this.vstate == 0){
					ctx.drawImage(vlightning1, this.vx, this.vy - this.vheight*0.5);
					this.vstate+=1;
				}
				else if(this.vstate == 1){
					ctx.drawImage(vlightning2, this.vx, this.vy - this.vheight*0.5);
					this.vstate+=1;
				}
				else if(this.vstate == 2){
					ctx.drawImage(vlightning3, this.vx, this.vy - this.vheight*0.5);
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
				this.hy = -2000;
			}
			else{
				this.timeLeft-=1;
			}
			if(this.vx != -2000){
				for (E in AllEnemies){
					if(!AllEnemies[E].hptimer){
						if(AllEnemies[E].onScreen == 1 && ((AllEnemies[E].x >= this.vx && AllEnemies[E].x <= this.vx + this.vwidth)
							|| (this.vx >= AllEnemies[E].x - AllEnemies[E].width*0.5 && this.vx <= AllEnemies[E].x + AllEnemies[E].width*0.5))){
							if(lightning22.hy == -2000){
								lightning22.hy = AllEnemies[E].y;
								lightning22.shoot();
							}
							onHit(AllEnemies[E]);
						}
					}
				}
			}
			if(this.hy != -2000){
				for (E in AllEnemies){
					if(!AllEnemies[E].hptimer){
						if(AllEnemies[E].onScreen == 1 && ((AllEnemies[E].y <= this.hy + this.hheight && AllEnemies[E].y >= this.hy)
							|| (this.hy >= AllEnemies[E].y-AllEnemies[E].height*0.5 && this.hy <= AllEnemies[E].y + AllEnemies[E].height*0.5))){
							if(this.vx == -2000){
								this.vx = AllEnemies[E].x
							}
							onHit(AllEnemies[E]);
						}
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
			this.hy = player2.y;
			this.cd = this.cdTop;
			this.onScreen = 1;
			this.timeLeft = 240;
			this.cast = 30;
			p2castingBar.onScreen = 1;
			p2castingBar.cast = 30;
			p2castingBar.castmax = 30;
		}
	}
	
};

// Lightning2-2: Creates a small web of lightning
var p2lightning22 = {
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
				ctx.drawImage(hlightning1, this.hx - this.hwidth*0.5, this.hy);
				this.hstate+=1;
			}
			else if(this.hstate == 1){
				ctx.drawImage(hlightning2, this.hx - this.hwidth*0.5, this.hy);
				this.hstate+=1;
			}
			else if(this.hstate == 2){
				ctx.drawImage(hlightning3, this.hx - this.hwidth*0.5, this.hy);
				this.hstate=0;
			}
			if(this.vx != -2000){
				if(this.vstate == 0){
					ctx.drawImage(vlightning1, this.vx, this.vy - this.vheight*0.5);
					this.vstate+=1;
				}
				else if(this.vstate == 1){
					ctx.drawImage(vlightning2, this.vx, this.vy - this.vheight*0.5);
					this.vstate+=1;
				}
				else if(this.vstate == 2){
					ctx.drawImage(vlightning3, this.vx, this.vy - this.vheight*0.5);
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
					if(!AllEnemies[E].hptimer){
						if(AllEnemies[E].onScreen == 1 && ((AllEnemies[E].x >= this.vx && AllEnemies[E].x <= this.vx + this.vwidth)
							|| (this.vx >= AllEnemies[E].x - AllEnemies[E].width*0.5 && this.vx <= AllEnemies[E].x + AllEnemies[E].width*0.5))){
							if(lightning23.hy == -2000){
								lightning23.hy = AllEnemies[E].y;
								lightning23.shoot();
							}
							onHit(AllEnemies[E]);
						}
					}
				}
			}
			if(this.hy != -2000){
				for (E in AllEnemies){
					if(!AllEnemies[E].hptimer){
						if(AllEnemies[E].onScreen == 1 && ((AllEnemies[E].y <= this.hy + this.hheight && AllEnemies[E].y >= this.hy)
							|| (this.hy >= AllEnemies[E].y-AllEnemies[E].height*0.5 && this.hy <= AllEnemies[E].y + AllEnemies[E].height*0.5))){
							if(this.vx == -2000){
								this.vx = AllEnemies[E].x
							}
							onHit(AllEnemies[E]);
						}
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
var p2lightning23 = {
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
				ctx.drawImage(hlightning1, this.hx - this.hwidth*0.5, this.hy);
				this.hstate+=1;
			}
			else if(this.hstate == 1){
				ctx.drawImage(hlightning2, this.hx - this.hwidth*0.5, this.hy);
				this.hstate+=1;
			}
			else if(this.hstate == 2){
				ctx.drawImage(hlightning3, this.hx - this.hwidth*0.5, this.hy);
				this.hstate=0;
			}
			if(this.vx != -2000){
				if(this.vstate == 0){
					ctx.drawImage(vlightning1, this.vx, this.vy - this.vheight*0.5);
					this.vstate+=1;
				}
				else if(this.vstate == 1){
					ctx.drawImage(vlightning2, this.vx, this.vy - this.vheight*0.5);
					this.vstate+=1;
				}
				else if(this.vstate == 2){
					ctx.drawImage(vlightning3, this.vx, this.vy - this.vheight*0.5);
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
					if(AllEnemies[E].onScreen == 1 && ((AllEnemies[E].x >= this.vx && AllEnemies[E].x <= this.vx + this.vwidth)
						|| (this.vx >= AllEnemies[E].x - AllEnemies[E].width*0.5 && this.vx <= AllEnemies[E].x + AllEnemies[E].width*0.5))){
						onHit(AllEnemies[E]);
					}
				}
			}
			if(this.hy != -2000){
				for (E in AllEnemies){
					if(!AllEnemies[E].hptimer){
						if(AllEnemies[E].onScreen == 1 && ((AllEnemies[E].y <= this.hy + this.hheight && AllEnemies[E].y >= this.hy)
							|| (this.hy >= AllEnemies[E].y-AllEnemies[E].height*0.5 && this.hy <= AllEnemies[E].y + AllEnemies[E].height*0.5))){
							if(this.vx == -2000){
								this.vx = AllEnemies[E].x
							}
							onHit(AllEnemies[E]);
						}
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

// Earth: Heals player hp by 1
var p2earth = {
	color: "#33CC00",
	timeLeft: 0,
	x: -100,
	y: -200,
	cd: 0,
	cdTop: 600,
	speed: 4,
	cast: 0,
	used: 0,

	draw: function(){
		if(this.timeLeft == 0){
			this.x = -100;
			this.y = -200;
		}
		if(this.cast > 0){
			this.cast-=1;
		}
		if(this.cast == 0 && this.timeLeft > 0 && deathTimer == -1){
			ctx.fillStyle = this.color;
			ctx.font = "18pt Arial";
			ctx.fillText("+1", this.x, this.y);
		}	
	},
	
	move: function(){
		if(this.cd > 0){
			this.cd-=1;
		}
		if(this.timeLeft > 0 && this.cast == 0 && deathTimer == -1){
			this.y -= this.speed;
			this.timeLeft--;
			if(this.used == 0){
				if(player2.hp < player2.maxhp){
					player2.hp+=1;
				}
				this.used = 1;
				Pickup.currentTime=0;
				Pickup.play();
			}
		}
			
	},
	// Spawn
	shoot: function(){
	if(this.cd == 0){
		this.x = player2.x;
		this.y = player2.y;
		this.cd = this.cdTop;
		this.cast = 20;
		this.timeLeft = 15;
		p2castingBar.onScreen = 1;
		p2castingBar.cast = 20;
		p2castingBar.castmax = 20;
		this.used = 0;
	}
	}	
};
//earth2: Heals 1 hp every 3 seconds for 6 seconds. Every 3 seconds a rootstrike is launched. You are immobile.
var p2earth2 = {
	cd: 0,
	cdTop: 600,
	cast: 0,
	used: 0,
	timeLeft: -1,
	tick: function(){
		if(this.cd > 0){
			this.cd-=1;
		}
		if(this.cast > 0){
			this.cast-=1;
		}
		if(this.timeLeft >= 0){
			this.timeLeft-=1;
		}
		if(this.timeLeft == 45 && deathTimer == -1){
			Fwave.currentTime=0;
			Fwave.play();
			p2earth2rootStrike5.x = player2.x + 32;
			p2earth2rootStrike5.y = player2.y + 32;
			p2earth2rootStrike5.onScreen = 1;
			p2earth2rootStrike5.movement = true;
			p2earth2rootStrike6.x = player2.x-32;
			p2earth2rootStrike6.y = player2.y+32;
			p2earth2rootStrike6.onScreen = 1;
			p2earth2rootStrike6.movement = true;
			p2earth2rootStrike7.x = player2.x+32;
			p2earth2rootStrike7.y = player2.y-32;
			p2earth2rootStrike7.onScreen = 1;
			p2earth2rootStrike7.movement = true;
			p2earth2rootStrike8.x = player2.x-32;
			p2earth2rootStrike8.y = player2.y-32;
			p2earth2rootStrike8.onScreen = 1;
			p2earth2rootStrike8.movement = true;
			var currentEarthcd = earth.cd;
			p2earth.cd = 0;
			p2earth.shoot();
			p2earth.cast = 0;
			p2castingBar.onScreen = 1;
			p2castingBar.cast = 45;
			p2castingBar.castmax = 90;
			p2earth.cd = currentEarthcd;
		}
		if(this.timeLeft == 0 && deathTimer == -1){
			p2earth2rootStrike.x = -100;
			p2earth2rootStrike.y = -200;
			p2earth2rootStrike.onScreen = 0;
			p2earth2rootStrike.movement = false;
			p2earth2rootStrike.dirct = 0;
			p2earth2rootStrike2.x = -100;
			p2earth2rootStrike2.y = -200;
			p2earth2rootStrike2.onScreen = 0;
			p2earth2rootStrike2.movement = false;
			p2earth2rootStrike2.dirct = 0;
			p2earth2rootStrike3.x = -100;
			p2earth2rootStrike3.y = -200;
			p2earth2rootStrike3.onScreen = 0;
			p2earth2rootStrike3.movement = false;
			p2earth2rootStrike3.dirct = 0;
			p2earth2rootStrike4.x = -100;
			p2earth2rootStrike4.y = -200;
			p2earth2rootStrike4.onScreen = 0;
			p2earth2rootStrike4.movement = false;
			p2earth2rootStrike4.dirct = 0;
			p2earth2rootStrike5.x = -100;
			p2earth2rootStrike5.y = -200;
			p2earth2rootStrike5.onScreen = 0;
			p2earth2rootStrike5.movement = false;
			p2earth2rootStrike5.dirct = 0;
			p2earth2rootStrike6.x = -100;
			p2earth2rootStrike6.y = -200;
			p2earth2rootStrike6.onScreen = 0;
			p2earth2rootStrike6.movement = false;
			p2earth2rootStrike6.dirct = 0;
			p2earth2rootStrike7.x = -100;
			p2earth2rootStrike7.y = -200;
			p2earth2rootStrike7.onScreen = 0;
			p2earth2rootStrike7.movement = false;
			p2earth2rootStrike7.dirct = 0;
			p2earth2rootStrike8.x = -100;
			p2earth2rootStrike8.y = -200;
			p2earth2rootStrike8.onScreen = 0;
			p2earth2rootStrike8.movement = false;
			p2earth2rootStrike8.dirct = 0;
			var currentEarthcd = p2earth.cd;
			p2earth.cd = 0;
			p2earth.shoot();
			p2earth.cast = 0;
			p2castingBar.onScreen = 1;
			p2castingBar.cast = 0;
			p2castingBar.castmax = 90;
			p2earth.cd = currentEarthcd;
			for(R in p2earth2roots1){
				p2earth2roots1[R].onScreen = 0;
				p2earth2roots1[R].x = -500;
				p2earth2roots1[R].y = -500;
			}
			for(R in p2earth3roots1){
				p2earth3roots1[R].onScreen = 0;
				p2earth3roots1[R].x = -500;
				p2earth3roots1[R].y = -500;
			}
		}
		else if(deathTimer == -1){
			for(R in p2earth2roots1){
				for(E in AllEnemies){
					if(collision(AllEnemies[E].dir, AllEnemies[E], p2earth2roots1[R])){
						onHit(AllEnemies[E]);
					}
				}
			}
			for(R in p2earth3roots1){
				for(E in AllEnemies){
					if(collision(AllEnemies[E].dir, AllEnemies[E], p2earth3roots1[R])){
						onHit(AllEnemies[E]);
					}
				}
			}
		}
	},
	shoot: function(){
		if(this.cast == -1){
			this.cast = 0;
		}
		if(this.cd == 0 && this.cast == 0 && deathTimer == -1){
			Fwave.currentTime=0;
			Fwave.play();
			p2earth2rootStrike.x = player2.x;
			p2earth2rootStrike.y = player2.y - 64;
			p2earth2rootStrike.onScreen = 1;
			p2earth2rootStrike.movement = true;
			p2earth2rootStrike2.x = player2.x;
			p2earth2rootStrike2.y = player2.y + 64;
			p2earth2rootStrike2.onScreen = 1;
			p2earth2rootStrike2.movement = true;
			p2earth2rootStrike3.x = player2.x - 64;
			p2earth2rootStrike3.y = player2.y;
			p2earth2rootStrike3.onScreen = 1;
			p2earth2rootStrike3.movement = true;
			p2earth2rootStrike4.x = player2.x + 64;
			p2earth2rootStrike4.y = player2.y;
			p2earth2rootStrike4.onScreen = 1;
			p2earth2rootStrike4.movement = true;
			this.cd = this.cdTop;
			this.cast = 90;
			this.timeLeft = 90;
			p2castingBar.onScreen = 1;
			p2castingBar.cast = 90;
			p2castingBar.castmax = 90;
			this.used = 0;
		}
	}
};

//All root drawing is in EnemyAttacks.js: drawRoots
var p2earth2rootstr = new earthxrootstry();
var p2earth2rootstr2 = new earthxrootstry();
var p2earth2rootstr3 = new earthxrootstry();
var p2earth2rootstr4 = new earthxrootstry();
var p2earth2rootstr5 = new earthxrootstry();
var p2earth2rootstr6 = new earthxrootstry();
var p2earth2rootstr7 = new earthxrootstry();
var p2earth2rootstr8 = new earthxrootstry();
var p2earth2rootstr9 = new earthxrootstry();
var p2earth2rootstr10 = new earthxrootstry();
var p2earth2rootstr11 = new earthxrootstry();
var p2earth2rootstr12 = new earthxrootstry();
var p2earth2rootstr13 = new earthxrootstry();
var p2earth2rootstr14 = new earthxrootstry();
var p2earth2rootstr15 = new earthxrootstry();
var p2earth2rootstr21 = new earthxrootstry();
var p2earth2rootstr22 = new earthxrootstry();
var p2earth2rootstr23 = new earthxrootstry();
var p2earth2rootstr24 = new earthxrootstry();
var p2earth2rootstr25 = new earthxrootstry();
var p2earth2rootstr26 = new earthxrootstry();
var p2earth2rootstr27 = new earthxrootstry();
var p2earth2rootstr28 = new earthxrootstry();
var p2earth2rootstr29 = new earthxrootstry();
var p2earth2rootstr210 = new earthxrootstry();
var p2earth2rootstr211 = new earthxrootstry();
var p2earth2rootstr212 = new earthxrootstry();
var p2earth2rootstr213 = new earthxrootstry();
var p2earth2rootstr214 = new earthxrootstry();
var p2earth2rootstr215 = new earthxrootstry();
var p2earth2rootstr31 = new earthxrootstry();
var p2earth2rootstr32 = new earthxrootstry();
var p2earth2rootstr33 = new earthxrootstry();
var p2earth2rootstr34 = new earthxrootstry();
var p2earth2rootstr35 = new earthxrootstry();
var p2earth2rootstr36 = new earthxrootstry();
var p2earth2rootstr37 = new earthxrootstry();
var p2earth2rootstr38 = new earthxrootstry();
var p2earth2rootstr39 = new earthxrootstry();
var p2earth2rootstr310 = new earthxrootstry();
var p2earth2rootstr311 = new earthxrootstry();
var p2earth2rootstr312 = new earthxrootstry();
var p2earth2rootstr313 = new earthxrootstry();
var p2earth2rootstr314 = new earthxrootstry();
var p2earth2rootstr315 = new earthxrootstry();
var p2earth2rootstr41 = new earthxrootstry();
var p2earth2rootstr42 = new earthxrootstry();
var p2earth2rootstr43 = new earthxrootstry();
var p2earth2rootstr44 = new earthxrootstry();
var p2earth2rootstr45 = new earthxrootstry();
var p2earth2rootstr46 = new earthxrootstry();
var p2earth2rootstr47 = new earthxrootstry();
var p2earth2rootstr48 = new earthxrootstry();
var p2earth2rootstr49 = new earthxrootstry();
var p2earth2rootstr410 = new earthxrootstry();
var p2earth2rootstr411 = new earthxrootstry();
var p2earth2rootstr412 = new earthxrootstry();
var p2earth2rootstr413 = new earthxrootstry();
var p2earth2rootstr414 = new earthxrootstry();
var p2earth2rootstr415 = new earthxrootstry();
var p2earth3rootstr = new earthxrootstry();
var p2earth3rootstr2 = new earthxrootstry();
var p2earth3rootstr3 = new earthxrootstry();
var p2earth3rootstr4 = new earthxrootstry();
var p2earth3rootstr5 = new earthxrootstry();
var p2earth3rootstr6 = new earthxrootstry();
var p2earth3rootstr7 = new earthxrootstry();
var p2earth3rootstr8 = new earthxrootstry();
var p2earth3rootstr9 = new earthxrootstry();
var p2earth3rootstr10 = new earthxrootstry();
var p2earth3rootstr11 = new earthxrootstry();
var p2earth3rootstr12 = new earthxrootstry();
var p2earth3rootstr13 = new earthxrootstry();
var p2earth3rootstr14 = new earthxrootstry();
var p2earth3rootstr15 = new earthxrootstry();
var p2earth3rootstr21 = new earthxrootstry();
var p2earth3rootstr22 = new earthxrootstry();
var p2earth3rootstr23 = new earthxrootstry();
var p2earth3rootstr24 = new earthxrootstry();
var p2earth3rootstr25 = new earthxrootstry();
var p2earth3rootstr26 = new earthxrootstry();
var p2earth3rootstr27 = new earthxrootstry();
var p2earth3rootstr28 = new earthxrootstry();
var p2earth3rootstr29 = new earthxrootstry();
var p2earth3rootstr210 = new earthxrootstry();
var p2earth3rootstr211 = new earthxrootstry();
var p2earth3rootstr212 = new earthxrootstry();
var p2earth3rootstr213 = new earthxrootstry();
var p2earth3rootstr214 = new earthxrootstry();
var p2earth3rootstr215 = new earthxrootstry();
var p2earth3rootstr31 = new earthxrootstry();
var p2earth3rootstr32 = new earthxrootstry();
var p2earth3rootstr33 = new earthxrootstry();
var p2earth3rootstr34 = new earthxrootstry();
var p2earth3rootstr35 = new earthxrootstry();
var p2earth3rootstr36 = new earthxrootstry();
var p2earth3rootstr37 = new earthxrootstry();
var p2earth3rootstr38 = new earthxrootstry();
var p2earth3rootstr39 = new earthxrootstry();
var p2earth3rootstr310 = new earthxrootstry();
var p2earth3rootstr311 = new earthxrootstry();
var p2earth3rootstr312 = new earthxrootstry();
var p2earth3rootstr313 = new earthxrootstry();
var p2earth3rootstr314 = new earthxrootstry();
var p2earth3rootstr315 = new earthxrootstry();
var p2earth3rootstr41 = new earthxrootstry();
var p2earth3rootstr42 = new earthxrootstry();
var p2earth3rootstr43 = new earthxrootstry();
var p2earth3rootstr44 = new earthxrootstry();
var p2earth3rootstr45 = new earthxrootstry();
var p2earth3rootstr46 = new earthxrootstry();
var p2earth3rootstr47 = new earthxrootstry();
var p2earth3rootstr48 = new earthxrootstry();
var p2earth3rootstr49 = new earthxrootstry();
var p2earth3rootstr410 = new earthxrootstry();
var p2earth3rootstr411 = new earthxrootstry();
var p2earth3rootstr412 = new earthxrootstry();
var p2earth3rootstr413 = new earthxrootstry();
var p2earth3rootstr414 = new earthxrootstry();
var p2earth3rootstr415 = new earthxrootstry();
var p2earth2roots1 = {1: p2earth2rootstr, 2: p2earth2rootstr2, 3: p2earth2rootstr3, 4: p2earth2rootstr4, 5: p2earth2rootstr5, 6: p2earth2rootstr6, 7: p2earth2rootstr7, 8: p2earth2rootstr8, 9: p2earth2rootstr9, 10: p2earth2rootstr10,
			11: p2earth2rootstr11, 12: p2earth2rootstr12, 13: p2earth2rootstr13, 14: p2earth2rootstr14, 15: p2earth2rootstr15, 16: p2earth2rootstr21, 17: p2earth2rootstr22, 18: p2earth2rootstr23, 19: p2earth2rootstr24,
			20: p2earth2rootstr25, 21: p2earth2rootstr26, 22: p2earth2rootstr27, 23: p2earth2rootstr28, 24: p2earth2rootstr29, 25: p2earth2rootstr210, 26: p2earth2rootstr211, 27: p2earth2rootstr212, 28: p2earth2rootstr213, 29: p2earth2rootstr214, 30: p2earth2rootstr215,
			31: p2earth2rootstr31, 32: p2earth2rootstr32, 33: p2earth2rootstr33, 34: p2earth2rootstr34,	35: p2earth2rootstr35, 36: p2earth2rootstr36, 37: p2earth2rootstr37, 38: p2earth2rootstr38, 39: p2earth2rootstr39, 40: p2earth2rootstr310, 41: p2earth2rootstr311, 42: p2earth2rootstr312,
			43: p2earth2rootstr313, 44: p2earth2rootstr314, 45: p2earth2rootstr315, 46: p2earth2rootstr41, 47: p2earth2rootstr42, 48: p2earth2rootstr43, 49: p2earth2rootstr44,	50: p2earth2rootstr45, 51: p2earth2rootstr46, 52: p2earth2rootstr47, 53: p2earth2rootstr48,
			54: p2earth2rootstr49, 55: p2earth2rootstr410, 56: p2earth2rootstr411, 57: p2earth2rootstr412, 58: p2earth2rootstr413, 59: p2earth2rootstr414, 60: p2earth2rootstr415};
var p2earth2roots11 = {1: p2earth2rootstr, 2: p2earth2rootstr2, 3: p2earth2rootstr3, 4: p2earth2rootstr4, 5: p2earth2rootstr5, 6: p2earth2rootstr6, 7: p2earth2rootstr7, 8: p2earth2rootstr8, 9: p2earth2rootstr9, 10: p2earth2rootstr10,
			11: p2earth2rootstr11, 12: p2earth2rootstr12, 13: p2earth2rootstr13, 14: p2earth2rootstr14, 15: p2earth2rootstr15};
var p2earth2roots12 = {1: p2earth2rootstr21, 2: p2earth2rootstr22, 3: p2earth2rootstr23, 4: p2earth2rootstr24, 5: p2earth2rootstr25, 6: p2earth2rootstr26, 7: p2earth2rootstr27, 8: p2earth2rootstr28, 9: p2earth2rootstr29, 10: p2earth2rootstr210, 11: p2earth2rootstr211,
			12: p2earth2rootstr212, 13: p2earth2rootstr213, 14: p2earth2rootstr214, 15: p2earth2rootstr215};
var p2earth2roots13 = {1: p2earth2rootstr31, 2: p2earth2rootstr32, 3: p2earth2rootstr33, 4: p2earth2rootstr34,	5: p2earth2rootstr35, 6: p2earth2rootstr36, 7: p2earth2rootstr37, 8: p2earth2rootstr38, 9: p2earth2rootstr39, 10: p2earth2rootstr310,
			11: p2earth2rootstr311, 12: p2earth2rootstr312,	13: p2earth2rootstr313, 14: p2earth2rootstr314, 15: p2earth2rootstr315};
var p2earth2roots14 = {1: p2earth2rootstr41, 2: p2earth2rootstr42, 3: p2earth2rootstr43, 4: p2earth2rootstr44,	5: p2earth2rootstr45, 6: p2earth2rootstr46, 7: p2earth2rootstr47, 8: p2earth2rootstr48, 9: p2earth2rootstr49, 10: p2earth2rootstr410,
			11: p2earth2rootstr411, 12: p2earth2rootstr412,	13: p2earth2rootstr413, 14: p2earth2rootstr414, 15: p2earth2rootstr415};
var p2earth3roots1 = {1: p2earth3rootstr, 2: p2earth3rootstr2, 3: p2earth3rootstr3, 4: p2earth3rootstr4, 5: p2earth3rootstr5, 6: p2earth3rootstr6, 7: p2earth3rootstr7, 8: p2earth3rootstr8, 9: p2earth3rootstr9, 10: p2earth3rootstr10,
			11: p2earth3rootstr11, 12: p2earth3rootstr12, 13: p2earth3rootstr13, 14: p2earth3rootstr14, 15: p2earth3rootstr15, 16: p2earth3rootstr21, 17: p2earth3rootstr22, 18: p2earth3rootstr23, 19: p2earth3rootstr24,
			20: p2earth3rootstr25, 21: p2earth3rootstr26, 22: p2earth3rootstr27, 23: p2earth3rootstr28, 24: p2earth3rootstr29, 25: p2earth3rootstr210, 26: p2earth3rootstr211, 27: p2earth3rootstr212, 28: p2earth3rootstr213, 29: p2earth3rootstr214, 30: p2earth3rootstr215,
			31: p2earth3rootstr31, 32: p2earth3rootstr32, 33: p2earth3rootstr33, 34: p2earth3rootstr34,	35: p2earth3rootstr35, 36: p2earth3rootstr36, 37: p2earth3rootstr37, 38: p2earth3rootstr38, 39: p2earth3rootstr39, 40: p2earth3rootstr310, 41: p2earth3rootstr311, 42: p2earth3rootstr312,
			43: p2earth3rootstr313, 44: p2earth3rootstr314, 45: p2earth3rootstr315, 46: p2earth3rootstr41, 47: p2earth3rootstr42, 48: p2earth3rootstr43, 49: p2earth3rootstr44,	50: p2earth3rootstr45, 51: p2earth3rootstr46, 52: p2earth3rootstr47, 53: p2earth3rootstr48,
			54: p2earth3rootstr49, 55: p2earth3rootstr410, 56: p2earth3rootstr411, 57: p2earth3rootstr412, 58: p2earth3rootstr413, 59: p2earth3rootstr414, 60: p2earth3rootstr415};
var p2earth3roots11 = {1: p2earth3rootstr, 2: p2earth3rootstr2, 3: p2earth3rootstr3, 4: p2earth3rootstr4, 5: p2earth3rootstr5, 6: p2earth3rootstr6, 7: p2earth3rootstr7, 8: p2earth3rootstr8, 9: p2earth3rootstr9, 10: p2earth3rootstr10,
			11: p2earth3rootstr11, 12: p2earth3rootstr12, 13: p2earth3rootstr13, 14: p2earth3rootstr14, 15: p2earth3rootstr15};
var p2earth3roots12 = {1: p2earth3rootstr21, 2: p2earth3rootstr22, 3: p2earth3rootstr23, 4: p2earth3rootstr24, 5: p2earth3rootstr25, 6: p2earth3rootstr26, 7: p2earth3rootstr27, 8: p2earth3rootstr28, 9: p2earth3rootstr29, 10: p2earth3rootstr210, 11: p2earth3rootstr211,
			12: p2earth3rootstr212, 13: p2earth3rootstr213, 14: p2earth3rootstr214, 15: p2earth3rootstr215};
var p2earth3roots13 = {1: p2earth3rootstr31, 2: p2earth3rootstr32, 3: p2earth3rootstr33, 4: p2earth3rootstr34,	5: p2earth3rootstr35, 6: p2earth3rootstr36, 7: p2earth3rootstr37, 8: p2earth3rootstr38, 9: p2earth3rootstr39, 10: p2earth3rootstr310,
			11: p2earth3rootstr311, 12: p2earth3rootstr312,	13: p2earth3rootstr313, 14: p2earth3rootstr314, 15: p2earth3rootstr315};
var p2earth3roots14 = {1: p2earth3rootstr41, 2: p2earth3rootstr42, 3: p2earth3rootstr43, 4: p2earth3rootstr44,	5: p2earth3rootstr45, 6: p2earth3rootstr46, 7: p2earth3rootstr47, 8: p2earth3rootstr48, 9: p2earth3rootstr49, 10: p2earth3rootstr410,
			11: p2earth3rootstr411, 12: p2earth3rootstr412,	13: p2earth3rootstr413, 14: p2earth3rootstr414, 15: p2earth3rootstr415};
var p2earth2rootStrike = {
	type: -2,
	x: -500,
	y: -500,
	onTree: 0,
	width: 16,
	height: 16,
	dirct: 0,
	speed: 8,
	speed2: 4,
	respawn: -1,
	pts: 0,
	hp: 2,
	hptimer: 0,
	dir: "W",
	rp: -1,
	index: 0,
	frame: 0,
	onScreen: 0,
	movement: false,
	draw: function(){
	if(this.onScreen == 1){
		if(this.hptimer > 0){
			this.hptimer-=1;
		}
		ctx.globalAlpha = Alpha*0.5;
		if(this.hptimer*0.5 != Math.round(this.hptimer*0.5)){
			ctx.fillStyle = "white";
		}
		else{
			ctx.fillStyle = "#330000";
		}
		ctx.fillRect(this.x - this.width * 0.5, this.y - this.height * 0.5, this.width, this.height);
		ctx.globalAlpha = Alpha;
		this.frame++;
		if(this.dirct <= 0){
			for(R in p2earth2roots12){
				if(collision(this.dir, this, p2earth2roots12[R])){
					this.dir = DiffDir(this.dir);
					this.dirct = 5;
				}
			}
			for(R in p2earth2roots13){
				if(collision(this.dir, this, p2earth2roots13[R])){
					this.dir = DiffDir(this.dir);
					this.dirct = 5;
				}
			}
			for(R in p2earth2roots14){
				if(collision(this.dir, this, p2earth2roots14[R])){
					this.dir = DiffDir(this.dir);
					this.dirct = 5;
				}
			}
		}
		if(this.frame*0.5 == Math.round(this.frame*0.5)){
			if(p2earth2rootstr.onScreen == 0){
				p2earth2rootstr.onScreen = 1;
				p2earth2rootstr.x = this.x;
				p2earth2rootstr.y = this.y;
			}
			else if(p2earth2rootstr2.onScreen == 0){
				p2earth2rootstr2.onScreen = 1;
				p2earth2rootstr2.x = this.x;
				p2earth2rootstr2.y = this.y;
			}
			else if(p2earth2rootstr3.onScreen == 0){
				p2earth2rootstr3.onScreen = 1;
				p2earth2rootstr3.x = this.x;
				p2earth2rootstr3.y = this.y;
			}
			else if(p2earth2rootstr4.onScreen == 0){
				p2earth2rootstr4.onScreen = 1;
				p2earth2rootstr4.x = this.x;
				p2earth2rootstr4.y = this.y;
			}
			else if(p2earth2rootstr5.onScreen == 0){
				p2earth2rootstr5.onScreen = 1;
				p2earth2rootstr5.x = this.x;
				p2earth2rootstr5.y = this.y;
			}
			else if(p2earth2rootstr6.onScreen == 0){
				p2earth2rootstr6.onScreen = 1;
				p2earth2rootstr6.x = this.x;
				p2earth2rootstr6.y = this.y;
			}
			else if(p2earth2rootstr7.onScreen == 0){
				p2earth2rootstr7.onScreen = 1;
				p2earth2rootstr7.x = this.x;
				p2earth2rootstr7.y = this.y;
			}
			else if(p2earth2rootstr8.onScreen == 0){
				p2earth2rootstr8.onScreen = 1;
				p2earth2rootstr8.x = this.x;
				p2earth2rootstr8.y = this.y;
			}
			else if(p2earth2rootstr9.onScreen == 0){
				p2earth2rootstr9.onScreen = 1;
				p2earth2rootstr9.x = this.x;
				p2earth2rootstr9.y = this.y;
			}
			else if(p2earth2rootstr10.onScreen == 0){
				p2earth2rootstr10.onScreen = 1;
				p2earth2rootstr10.x = this.x;
				p2earth2rootstr10.y = this.y;
			}
			else if(p2earth2rootstr11.onScreen == 0){
				p2earth2rootstr11.onScreen = 1;
				p2earth2rootstr11.x = this.x;
				p2earth2rootstr11.y = this.y;
			}
			else if(p2earth2rootstr12.onScreen == 0){
				p2earth2rootstr12.onScreen = 1;
				p2earth2rootstr12.x = this.x;
				p2earth2rootstr12.y = this.y;
			}
			else if(p2earth2rootstr13.onScreen == 0){
				p2earth2rootstr13.onScreen = 1;
				p2earth2rootstr13.x = this.x;
				p2earth2rootstr13.y = this.y;
			}
			else if(p2earth2rootstr14.onScreen == 0){
				p2earth2rootstr14.onScreen = 1;
				p2earth2rootstr14.x = this.x;
				p2earth2rootstr14.y = this.y;
			}
			else if(p2earth2rootstr15.onScreen == 0){
				p2earth2rootstr15.onScreen = 1;
				p2earth2rootstr15.x = this.x;
				p2earth2rootstr15.y = this.y;
			}
			else{
				this.movement = false;
				this.frame = 0;
			}
		}
	}
	}
};
var p2earth2rootStrike2 = {
	type: -3,
	x: -500,
	y: -500,
	onTree: 0,
	width: 16,
	height: 16,
	dirct: 0,
	speed: 8,
	speed2: 4,
	respawn: -1,
	pts: 0,
	hp: 2,
	hptimer: 0,
	dir: "W",
	rp: -1,
	index: 0,
	frame: 0,
	onScreen: 0,
	movement: false,
	// Draws the enemy on the canvas when called
	draw: function(){
	if(this.onScreen == 1){
		if(this.hptimer > 0){
			this.hptimer-=1;
		}
		ctx.globalAlpha = Alpha*0.5;
		if(this.hptimer*0.5 != Math.round(this.hptimer*0.5)){
			ctx.fillStyle = "white";
		}
		else{
			ctx.fillStyle = "#330000";
		}
		ctx.fillRect(this.x - this.width * 0.5, this.y - this.height * 0.5, this.width, this.height);
		ctx.globalAlpha = Alpha;
		this.frame++;
		if(this.dirct <= 0){
			for(R in p2earth2roots11){
				if(collision(this.dir, this, p2earth2roots11[R])){
					this.dir = DiffDir(this.dir);
					this.dirct = 5;
				}
			}
			for(R in p2earth2roots13){
				if(collision(this.dir, this, p2earth2roots13[R])){
					this.dir = DiffDir(this.dir);
					this.dirct = 5;
				}
			}
			for(R in p2earth2roots14){
				if(collision(this.dir, this, p2earth2roots14[R])){
					this.dir = DiffDir(this.dir);
					this.dirct = 5;
				}
			}
		}
		if(this.frame*0.5 == Math.round(this.frame*0.5)){
			if(p2earth2rootstr21.onScreen == 0){
				p2earth2rootstr21.onScreen = 1;
				p2earth2rootstr21.x = this.x;
				p2earth2rootstr21.y = this.y;
			}
			else if(p2earth2rootstr22.onScreen == 0){
				p2earth2rootstr22.onScreen = 1;
				p2earth2rootstr22.x = this.x;
				p2earth2rootstr22.y = this.y;
			}
			else if(p2earth2rootstr23.onScreen == 0){
				p2earth2rootstr23.onScreen = 1;
				p2earth2rootstr23.x = this.x;
				p2earth2rootstr23.y = this.y;
			}
			else if(p2earth2rootstr24.onScreen == 0){
				p2earth2rootstr24.onScreen = 1;
				p2earth2rootstr24.x = this.x;
				p2earth2rootstr24.y = this.y;
			}
			else if(p2earth2rootstr25.onScreen == 0){
				p2earth2rootstr25.onScreen = 1;
				p2earth2rootstr25.x = this.x;
				p2earth2rootstr25.y = this.y;
			}
			else if(p2earth2rootstr26.onScreen == 0){
				p2earth2rootstr26.onScreen = 1;
				p2earth2rootstr26.x = this.x;
				p2earth2rootstr26.y = this.y;
			}
			else if(p2earth2rootstr27.onScreen == 0){
				p2earth2rootstr27.onScreen = 1;
				p2earth2rootstr27.x = this.x;
				p2earth2rootstr27.y = this.y;
			}
			else if(p2earth2rootstr28.onScreen == 0){
				p2earth2rootstr28.onScreen = 1;
				p2earth2rootstr28.x = this.x;
				p2earth2rootstr28.y = this.y;
			}
			else if(p2earth2rootstr29.onScreen == 0){
				p2earth2rootstr29.onScreen = 1;
				p2earth2rootstr29.x = this.x;
				p2earth2rootstr29.y = this.y;
			}
			else if(p2earth2rootstr210.onScreen == 0){
				p2earth2rootstr210.onScreen = 1;
				p2earth2rootstr210.x = this.x;
				p2earth2rootstr210.y = this.y;
			}
			else if(p2earth2rootstr211.onScreen == 0){
				p2earth2rootstr211.onScreen = 1;
				p2earth2rootstr211.x = this.x;
				p2earth2rootstr211.y = this.y;
			}
			else if(p2earth2rootstr212.onScreen == 0){
				p2earth2rootstr212.onScreen = 1;
				p2earth2rootstr212.x = this.x;
				p2earth2rootstr212.y = this.y;
			}
			else if(p2earth2rootstr213.onScreen == 0){
				p2earth2rootstr213.onScreen = 1;
				p2earth2rootstr213.x = this.x;
				p2earth2rootstr213.y = this.y;
			}
			else if(p2earth2rootstr214.onScreen == 0){
				p2earth2rootstr214.onScreen = 1;
				p2earth2rootstr214.x = this.x;
				p2earth2rootstr214.y = this.y;
			}
			else if(p2earth2rootstr215.onScreen == 0){
				p2earth2rootstr215.onScreen = 1;
				p2earth2rootstr215.x = this.x;
				p2earth2rootstr215.y = this.y;
			}
			else{
				this.movement = false;
				this.frame = 0;
			}
		}
	}
	}
};
var p2earth2rootStrike3 = {
	type: -4,
	x: -500,
	y: -500,
	onTree: 0,
	width: 16,
	height: 16,
	dirct: 0,
	speed: 8,
	speed2: 4,
	respawn: -1,
	pts: 0,
	hp: 2,
	hptimer: 0,
	dir: "W",
	rp: -1,
	index: 0,
	frame: 0,
	onScreen: 0,
	movement: false,
	// Draws the enemy on the canvas when called
	draw: function(){
	if(this.onScreen == 1){
		if(this.hptimer > 0){
			this.hptimer-=1;
		}
		ctx.globalAlpha = Alpha*0.5;
		if(this.hptimer*0.5 != Math.round(this.hptimer*0.5)){
			ctx.fillStyle = "white";
		}
		else{
			ctx.fillStyle = "#330000";
		}
		ctx.fillRect(this.x - this.width * 0.5, this.y - this.height * 0.5, this.width, this.height);
		ctx.globalAlpha = Alpha;
		this.frame++;
		if(this.dirct <= 0){
			for(R in p2earth2roots12){
				if(collision(this.dir, this, p2earth2roots12[R])){
					this.dir = DiffDir(this.dir);
					this.dirct = 5;
				}
			}
			for(R in p2earth2roots11){
				if(collision(this.dir, this, p2earth2roots11[R])){
					this.dir = DiffDir(this.dir);
					this.dirct = 5;
				}
			}
			for(R in p2earth2roots14){
				if(collision(this.dir, this, p2earth2roots14[R])){
					this.dir = DiffDir(this.dir);
					this.dirct = 5;
				}
			}
		}
		if(this.frame*0.5 == Math.round(this.frame*0.5)){
			if(p2earth2rootstr31.onScreen == 0){
				p2earth2rootstr31.onScreen = 1;
				p2earth2rootstr31.x = this.x;
				p2earth2rootstr31.y = this.y;
			}
			else if(p2earth2rootstr32.onScreen == 0){
				p2earth2rootstr32.onScreen = 1;
				p2earth2rootstr32.x = this.x;
				p2earth2rootstr32.y = this.y;
			}
			else if(p2earth2rootstr33.onScreen == 0){
				p2earth2rootstr33.onScreen = 1;
				p2earth2rootstr33.x = this.x;
				p2earth2rootstr33.y = this.y;
			}
			else if(p2earth2rootstr34.onScreen == 0){
				p2earth2rootstr34.onScreen = 1;
				p2earth2rootstr34.x = this.x;
				p2earth2rootstr34.y = this.y;
			}
			else if(p2earth2rootstr35.onScreen == 0){
				p2earth2rootstr35.onScreen = 1;
				p2earth2rootstr35.x = this.x;
				p2earth2rootstr35.y = this.y;
			}
			else if(p2earth2rootstr36.onScreen == 0){
				p2earth2rootstr36.onScreen = 1;
				p2earth2rootstr36.x = this.x;
				p2earth2rootstr36.y = this.y;
			}
			else if(p2earth2rootstr37.onScreen == 0){
				p2earth2rootstr37.onScreen = 1;
				p2earth2rootstr37.x = this.x;
				p2earth2rootstr37.y = this.y;
			}
			else if(p2earth2rootstr38.onScreen == 0){
				p2earth2rootstr38.onScreen = 1;
				p2earth2rootstr38.x = this.x;
				p2earth2rootstr38.y = this.y;
			}
			else if(p2earth2rootstr39.onScreen == 0){
				p2earth2rootstr39.onScreen = 1;
				p2earth2rootstr39.x = this.x;
				p2earth2rootstr39.y = this.y;
			}
			else if(p2earth2rootstr310.onScreen == 0){
				p2earth2rootstr310.onScreen = 1;
				p2earth2rootstr310.x = this.x;
				p2earth2rootstr310.y = this.y;
			}
			else if(p2earth2rootstr311.onScreen == 0){
				p2earth2rootstr311.onScreen = 1;
				p2earth2rootstr311.x = this.x;
				p2earth2rootstr311.y = this.y;
			}
			else if(p2earth2rootstr312.onScreen == 0){
				p2earth2rootstr312.onScreen = 1;
				p2earth2rootstr312.x = this.x;
				p2earth2rootstr312.y = this.y;
			}
			else if(p2earth2rootstr313.onScreen == 0){
				p2earth2rootstr313.onScreen = 1;
				p2earth2rootstr313.x = this.x;
				p2earth2rootstr313.y = this.y;
			}
			else if(p2earth2rootstr314.onScreen == 0){
				p2earth2rootstr314.onScreen = 1;
				p2earth2rootstr314.x = this.x;
				p2earth2rootstr314.y = this.y;
			}
			else if(p2earth2rootstr315.onScreen == 0){
				p2earth2rootstr315.onScreen = 1;
				p2earth2rootstr315.x = this.x;
				p2earth2rootstr315.y = this.y;
			}
			else{
				this.movement = false;
				this.frame = 0;
			}
		}
	}
	}
};
var p2earth2rootStrike4 = {
	type: -5,
	x: -500,
	y: -500,
	width: 16,
	onTree: 0,
	height: 16,
	dirct: 0,
	speed: 8,
	speed2: 4,
	respawn: -1,
	pts: 0,
	hp: 2,
	hptimer: 0,
	dir: "W",
	rp: -1,
	index: 0,
	frame: 0,
	onScreen: 0,
	movement: false,
	// Draws the enemy on the canvas when called
	draw: function(){
	if(this.onScreen == 1){
		if(this.hptimer > 0){
			this.hptimer-=1;
		}
		ctx.globalAlpha = Alpha*0.5;
		if(this.hptimer*0.5 != Math.round(this.hptimer*0.5)){
			ctx.fillStyle = "white";
		}
		else{
			ctx.fillStyle = "#330000";
		}
		ctx.fillRect(this.x - this.width * 0.5, this.y - this.height * 0.5, this.width, this.height);
		ctx.globalAlpha = Alpha;
		this.frame++;
		if(this.dirct <= 0){
			for(R in p2earth2roots12){
				if(collision(this.dir, this, p2earth2roots12[R])){
					this.dir = DiffDir(this.dir);
					this.dirct = 5;
				}
			}
			for(R in p2earth2roots13){
				if(collision(this.dir, this, p2earth2roots13[R])){
					this.dir = DiffDir(this.dir);
					this.dirct = 5;
				}
			}
			for(R in p2earth2roots11){
				if(collision(this.dir, this, p2earth2roots11[R])){
					this.dir = DiffDir(this.dir);
					this.dirct = 5;
				}
			}
		}
		if(this.frame*0.5 == Math.round(this.frame*0.5)){
			if(p2earth2rootstr41.onScreen == 0){
				p2earth2rootstr41.onScreen = 1;
				p2earth2rootstr41.x = this.x;
				p2earth2rootstr41.y = this.y;
			}
			else if(p2earth2rootstr42.onScreen == 0){
				p2earth2rootstr42.onScreen = 1;
				p2earth2rootstr42.x = this.x;
				p2earth2rootstr42.y = this.y;
			}
			else if(p2earth2rootstr43.onScreen == 0){
				p2earth2rootstr43.onScreen = 1;
				p2earth2rootstr43.x = this.x;
				p2earth2rootstr43.y = this.y;
			}
			else if(p2earth2rootstr44.onScreen == 0){
				p2earth2rootstr44.onScreen = 1;
				p2earth2rootstr44.x = this.x;
				p2earth2rootstr44.y = this.y;
			}
			else if(p2earth2rootstr45.onScreen == 0){
				p2earth2rootstr45.onScreen = 1;
				p2earth2rootstr45.x = this.x;
				p2earth2rootstr45.y = this.y;
			}
			else if(p2earth2rootstr46.onScreen == 0){
				p2earth2rootstr46.onScreen = 1;
				p2earth2rootstr46.x = this.x;
				p2earth2rootstr46.y = this.y;
			}
			else if(p2earth2rootstr47.onScreen == 0){
				p2earth2rootstr47.onScreen = 1;
				p2earth2rootstr47.x = this.x;
				p2earth2rootstr47.y = this.y;
			}
			else if(p2earth2rootstr48.onScreen == 0){
				p2earth2rootstr48.onScreen = 1;
				p2earth2rootstr48.x = this.x;
				p2earth2rootstr48.y = this.y;
			}
			else if(p2earth2rootstr49.onScreen == 0){
				p2earth2rootstr49.onScreen = 1;
				p2earth2rootstr49.x = this.x;
				p2earth2rootstr49.y = this.y;
			}
			else if(p2earth2rootstr410.onScreen == 0){
				p2earth2rootstr410.onScreen = 1;
				p2earth2rootstr410.x = this.x;
				p2earth2rootstr410.y = this.y;
			}
			else if(p2earth2rootstr411.onScreen == 0){
				p2earth2rootstr411.onScreen = 1;
				p2earth2rootstr411.x = this.x;
				p2earth2rootstr411.y = this.y;
			}
			else if(p2earth2rootstr412.onScreen == 0){
				p2earth2rootstr412.onScreen = 1;
				p2earth2rootstr412.x = this.x;
				p2earth2rootstr412.y = this.y;
			}
			else if(p2earth2rootstr413.onScreen == 0){
				p2earth2rootstr413.onScreen = 1;
				p2earth2rootstr413.x = this.x;
				p2earth2rootstr413.y = this.y;
			}
			else if(p2earth2rootstr414.onScreen == 0){
				p2earth2rootstr414.onScreen = 1;
				p2earth2rootstr414.x = this.x;
				p2earth2rootstr414.y = this.y;
			}
			else if(p2earth2rootstr415.onScreen == 0){
				p2earth2rootstr415.onScreen = 1;
				p2earth2rootstr415.x = this.x;
				p2earth2rootstr415.y = this.y;
			}
			else{
				this.movement = false;
				this.frame = 0;
			}
		}
	}
	}
};
var p2earth2rootStrike5 = {
	type: -2,
	x: -500,
	y: -500,
	onTree: 0,
	width: 16,
	height: 16,
	dirct: 0,
	speed: 8,
	speed2: 4,
	respawn: -1,
	pts: 0,
	hp: 2,
	hptimer: 0,
	dir: "W",
	rp: -1,
	index: 0,
	frame: 0,
	onScreen: 0,
	movement: false,
	draw: function(){
	if(this.onScreen == 1){
		if(this.hptimer > 0){
			this.hptimer-=1;
		}
		ctx.globalAlpha = Alpha*0.5;
		if(this.hptimer*0.5 != Math.round(this.hptimer*0.5)){
			ctx.fillStyle = "white";
		}
		else{
			ctx.fillStyle = "#330000";
		}
		ctx.fillRect(this.x - this.width * 0.5, this.y - this.height * 0.5, this.width, this.height);
		ctx.globalAlpha = Alpha;
		this.frame++;
		if(this.dirct <= 0){
			for(R in p2earth3roots12){
				if(collision(this.dir, this, p2earth3roots12[R])){
					this.dir = DiffDir(this.dir);
					this.dirct = 5;
				}
			}
			for(R in p2earth3roots13){
				if(collision(this.dir, this, p2earth3roots13[R])){
					this.dir = DiffDir(this.dir);
					this.dirct = 5;
				}
			}
			for(R in p2earth3roots14){
				if(collision(this.dir, this, p2earth3roots14[R])){
					this.dir = DiffDir(this.dir);
					this.dirct = 5;
				}
			}
		}
		if(this.frame*0.5 == Math.round(this.frame*0.5)){
			if(p2earth3rootstr.onScreen == 0){
				p2earth3rootstr.onScreen = 1;
				p2earth3rootstr.x = this.x;
				p2earth3rootstr.y = this.y;
			}
			else if(p2earth3rootstr2.onScreen == 0){
				p2earth3rootstr2.onScreen = 1;
				p2earth3rootstr2.x = this.x;
				p2earth3rootstr2.y = this.y;
			}
			else if(p2earth3rootstr3.onScreen == 0){
				p2earth3rootstr3.onScreen = 1;
				p2earth3rootstr3.x = this.x;
				p2earth3rootstr3.y = this.y;
			}
			else if(p2earth3rootstr4.onScreen == 0){
				p2earth3rootstr4.onScreen = 1;
				p2earth3rootstr4.x = this.x;
				p2earth3rootstr4.y = this.y;
			}
			else if(p2earth3rootstr5.onScreen == 0){
				p2earth3rootstr5.onScreen = 1;
				p2earth3rootstr5.x = this.x;
				p2earth3rootstr5.y = this.y;
			}
			else if(p2earth3rootstr6.onScreen == 0){
				p2earth3rootstr6.onScreen = 1;
				p2earth3rootstr6.x = this.x;
				p2earth3rootstr6.y = this.y;
			}
			else if(p2earth3rootstr7.onScreen == 0){
				p2earth3rootstr7.onScreen = 1;
				p2earth3rootstr7.x = this.x;
				p2earth3rootstr7.y = this.y;
			}
			else if(p2earth3rootstr8.onScreen == 0){
				p2earth3rootstr8.onScreen = 1;
				p2earth3rootstr8.x = this.x;
				p2earth3rootstr8.y = this.y;
			}
			else if(p2earth3rootstr9.onScreen == 0){
				p2earth3rootstr9.onScreen = 1;
				p2earth3rootstr9.x = this.x;
				p2earth3rootstr9.y = this.y;
			}
			else if(p2earth3rootstr10.onScreen == 0){
				p2earth3rootstr10.onScreen = 1;
				p2earth3rootstr10.x = this.x;
				p2earth3rootstr10.y = this.y;
			}
			else if(p2earth3rootstr11.onScreen == 0){
				p2earth3rootstr11.onScreen = 1;
				p2earth3rootstr11.x = this.x;
				p2earth3rootstr11.y = this.y;
			}
			else if(p2earth3rootstr12.onScreen == 0){
				p2earth3rootstr12.onScreen = 1;
				p2earth3rootstr12.x = this.x;
				p2earth3rootstr12.y = this.y;
			}
			else if(p2earth3rootstr13.onScreen == 0){
				p2earth3rootstr13.onScreen = 1;
				p2earth3rootstr13.x = this.x;
				p2earth3rootstr13.y = this.y;
			}
			else if(p2earth3rootstr14.onScreen == 0){
				p2earth3rootstr14.onScreen = 1;
				p2earth3rootstr14.x = this.x;
				p2earth3rootstr14.y = this.y;
			}
			else if(p2earth3rootstr15.onScreen == 0){
				p2earth3rootstr15.onScreen = 1;
				p2earth3rootstr15.x = this.x;
				p2earth3rootstr15.y = this.y;
			}
			else{
				this.movement = false;
				this.frame = 0;
			}
		}
	}
	}
};
var p2earth2rootStrike6 = {
	type: -3,
	x: -500,
	y: -500,
	onTree: 0,
	width: 16,
	height: 16,
	dirct: 0,
	speed: 8,
	speed2: 4,
	respawn: -1,
	pts: 0,
	hp: 2,
	hptimer: 0,
	dir: "W",
	rp: -1,
	index: 0,
	frame: 0,
	onScreen: 0,
	movement: false,
	// Draws the enemy on the canvas when called
	draw: function(){
	if(this.onScreen == 1){
		if(this.hptimer > 0){
			this.hptimer-=1;
		}
		ctx.globalAlpha = Alpha*0.5;
		if(this.hptimer*0.5 != Math.round(this.hptimer*0.5)){
			ctx.fillStyle = "white";
		}
		else{
			ctx.fillStyle = "#330000";
		}
		ctx.fillRect(this.x - this.width * 0.5, this.y - this.height * 0.5, this.width, this.height);
		ctx.globalAlpha = Alpha;
		this.frame++;
		if(this.dirct <= 0){
			for(R in p2earth3roots11){
				if(collision(this.dir, this, p2earth3roots11[R])){
					this.dir = DiffDir(this.dir);
					this.dirct = 5;
				}
			}
			for(R in p2earth3roots13){
				if(collision(this.dir, this, p2earth3roots13[R])){
					this.dir = DiffDir(this.dir);
					this.dirct = 5;
				}
			}
			for(R in p2earth3roots14){
				if(collision(this.dir, this, p2earth3roots14[R])){
					this.dir = DiffDir(this.dir);
					this.dirct = 5;
				}
			}
		}
		if(this.frame*0.5 == Math.round(this.frame*0.5)){
			if(p2earth3rootstr21.onScreen == 0){
				p2earth3rootstr21.onScreen = 1;
				p2earth3rootstr21.x = this.x;
				p2earth3rootstr21.y = this.y;
			}
			else if(p2earth3rootstr22.onScreen == 0){
				p2earth3rootstr22.onScreen = 1;
				p2earth3rootstr22.x = this.x;
				p2earth3rootstr22.y = this.y;
			}
			else if(p2earth3rootstr23.onScreen == 0){
				p2earth3rootstr23.onScreen = 1;
				p2earth3rootstr23.x = this.x;
				p2earth3rootstr23.y = this.y;
			}
			else if(p2earth3rootstr24.onScreen == 0){
				p2earth3rootstr24.onScreen = 1;
				p2earth3rootstr24.x = this.x;
				p2earth3rootstr24.y = this.y;
			}
			else if(p2earth3rootstr25.onScreen == 0){
				p2earth3rootstr25.onScreen = 1;
				p2earth3rootstr25.x = this.x;
				p2earth3rootstr25.y = this.y;
			}
			else if(p2earth3rootstr26.onScreen == 0){
				p2earth3rootstr26.onScreen = 1;
				p2earth3rootstr26.x = this.x;
				p2earth3rootstr26.y = this.y;
			}
			else if(p2earth3rootstr27.onScreen == 0){
				p2earth3rootstr27.onScreen = 1;
				p2earth3rootstr27.x = this.x;
				p2earth3rootstr27.y = this.y;
			}
			else if(p2earth3rootstr28.onScreen == 0){
				p2earth3rootstr28.onScreen = 1;
				p2earth3rootstr28.x = this.x;
				p2earth3rootstr28.y = this.y;
			}
			else if(p2earth3rootstr29.onScreen == 0){
				p2earth3rootstr29.onScreen = 1;
				p2earth3rootstr29.x = this.x;
				p2earth3rootstr29.y = this.y;
			}
			else if(p2earth3rootstr210.onScreen == 0){
				p2earth3rootstr210.onScreen = 1;
				p2earth3rootstr210.x = this.x;
				p2earth3rootstr210.y = this.y;
			}
			else if(p2earth3rootstr211.onScreen == 0){
				p2earth3rootstr211.onScreen = 1;
				p2earth3rootstr211.x = this.x;
				p2earth3rootstr211.y = this.y;
			}
			else if(p2earth3rootstr212.onScreen == 0){
				p2earth3rootstr212.onScreen = 1;
				p2earth3rootstr212.x = this.x;
				p2earth3rootstr212.y = this.y;
			}
			else if(p2earth3rootstr213.onScreen == 0){
				p2earth3rootstr213.onScreen = 1;
				p2earth3rootstr213.x = this.x;
				p2earth3rootstr213.y = this.y;
			}
			else if(p2earth3rootstr214.onScreen == 0){
				p2earth3rootstr214.onScreen = 1;
				p2earth3rootstr214.x = this.x;
				p2earth3rootstr214.y = this.y;
			}
			else if(p2earth3rootstr215.onScreen == 0){
				p2earth3rootstr215.onScreen = 1;
				p2earth3rootstr215.x = this.x;
				p2earth3rootstr215.y = this.y;
			}
			else{
				this.movement = false;
				this.frame = 0;
			}
		}
	}
	}
};
var p2earth2rootStrike7 = {
	type: -4,
	x: -500,
	y: -500,
	onTree: 0,
	width: 16,
	height: 16,
	dirct: 0,
	speed: 8,
	speed2: 4,
	respawn: -1,
	pts: 0,
	hp: 2,
	hptimer: 0,
	dir: "W",
	rp: -1,
	index: 0,
	frame: 0,
	onScreen: 0,
	movement: false,
	// Draws the enemy on the canvas when called
	draw: function(){
	if(this.onScreen == 1){
		if(this.hptimer > 0){
			this.hptimer-=1;
		}
		ctx.globalAlpha = Alpha*0.5;
		if(this.hptimer*0.5 != Math.round(this.hptimer*0.5)){
			ctx.fillStyle = "white";
		}
		else{
			ctx.fillStyle = "#330000";
		}
		ctx.fillRect(this.x - this.width * 0.5, this.y - this.height * 0.5, this.width, this.height);
		ctx.globalAlpha = Alpha;
		this.frame++;
		if(this.dirct <= 0){
			for(R in p2earth3roots12){
				if(collision(this.dir, this, p2earth3roots12[R])){
					this.dir = DiffDir(this.dir);
					this.dirct = 5;
				}
			}
			for(R in p2earth3roots14){
				if(collision(this.dir, this, p2earth3roots14[R])){
					this.dir = DiffDir(this.dir);
					this.dirct = 5;
				}
			}
			for(R in p2earth3roots11){
				if(collision(this.dir, this, p2earth3roots11[R])){
					this.dir = DiffDir(this.dir);
					this.dirct = 5;
				}
			}
		}
		if(this.frame*0.5 == Math.round(this.frame*0.5)){
			if(p2earth3rootstr31.onScreen == 0){
				p2earth3rootstr31.onScreen = 1;
				p2earth3rootstr31.x = this.x;
				p2earth3rootstr31.y = this.y;
			}
			else if(p2earth3rootstr32.onScreen == 0){
				p2earth3rootstr32.onScreen = 1;
				p2earth3rootstr32.x = this.x;
				p2earth3rootstr32.y = this.y;
			}
			else if(p2earth3rootstr33.onScreen == 0){
				p2earth3rootstr33.onScreen = 1;
				p2earth3rootstr33.x = this.x;
				p2earth3rootstr33.y = this.y;
			}
			else if(p2earth3rootstr34.onScreen == 0){
				p2earth3rootstr34.onScreen = 1;
				p2earth3rootstr34.x = this.x;
				p2earth3rootstr34.y = this.y;
			}
			else if(p2earth3rootstr35.onScreen == 0){
				p2earth3rootstr35.onScreen = 1;
				p2earth3rootstr35.x = this.x;
				p2earth3rootstr35.y = this.y;
			}
			else if(p2earth3rootstr36.onScreen == 0){
				p2earth3rootstr36.onScreen = 1;
				p2earth3rootstr36.x = this.x;
				p2earth3rootstr36.y = this.y;
			}
			else if(p2earth3rootstr37.onScreen == 0){
				p2earth3rootstr37.onScreen = 1;
				p2earth3rootstr37.x = this.x;
				p2earth3rootstr37.y = this.y;
			}
			else if(p2earth3rootstr38.onScreen == 0){
				p2earth3rootstr38.onScreen = 1;
				p2earth3rootstr38.x = this.x;
				p2earth3rootstr38.y = this.y;
			}
			else if(p2earth3rootstr39.onScreen == 0){
				p2earth3rootstr39.onScreen = 1;
				p2earth3rootstr39.x = this.x;
				p2earth3rootstr39.y = this.y;
			}
			else if(p2earth3rootstr310.onScreen == 0){
				p2earth3rootstr310.onScreen = 1;
				p2earth3rootstr310.x = this.x;
				p2earth3rootstr310.y = this.y;
			}
			else if(p2earth3rootstr311.onScreen == 0){
				p2earth3rootstr311.onScreen = 1;
				p2earth3rootstr311.x = this.x;
				p2earth3rootstr311.y = this.y;
			}
			else if(p2earth3rootstr312.onScreen == 0){
				p2earth3rootstr312.onScreen = 1;
				p2earth3rootstr312.x = this.x;
				p2earth3rootstr312.y = this.y;
			}
			else if(p2earth3rootstr313.onScreen == 0){
				p2earth3rootstr313.onScreen = 1;
				p2earth3rootstr313.x = this.x;
				p2earth3rootstr313.y = this.y;
			}
			else if(p2earth3rootstr314.onScreen == 0){
				p2earth3rootstr314.onScreen = 1;
				p2earth3rootstr314.x = this.x;
				p2earth3rootstr314.y = this.y;
			}
			else if(p2earth3rootstr315.onScreen == 0){
				p2earth3rootstr315.onScreen = 1;
				p2earth3rootstr315.x = this.x;
				p2earth3rootstr315.y = this.y;
			}
			else{
				this.movement = false;
				this.frame = 0;
			}
		}
	}
	}
};
var p2earth2rootStrike8 = {
	type: -5,
	x: -500,
	y: -500,
	width: 16,
	onTree: 0,
	height: 16,
	dirct: 0,
	speed: 8,
	speed2: 4,
	respawn: -1,
	pts: 0,
	hp: 2,
	hptimer: 0,
	dir: "W",
	rp: -1,
	index: 0,
	frame: 0,
	onScreen: 0,
	movement: false,
	// Draws the enemy on the canvas when called
	draw: function(){
	if(this.onScreen == 1){
		if(this.hptimer > 0){
			this.hptimer-=1;
		}
		ctx.globalAlpha = Alpha*0.5;
		if(this.hptimer*0.5 != Math.round(this.hptimer*0.5)){
			ctx.fillStyle = "white";
		}
		else{
			ctx.fillStyle = "#330000";
		}
		ctx.fillRect(this.x - this.width * 0.5, this.y - this.height * 0.5, this.width, this.height);
		ctx.globalAlpha = Alpha;
		this.frame++;
		if(this.dirct <= 0){
			for(R in p2earth3roots12){
				if(collision(this.dir, this, p2earth3roots12[R])){
					this.dir = DiffDir(this.dir);
					this.dirct = 5;
				}
			}
			for(R in p2earth3roots13){
				if(collision(this.dir, this, p2earth3roots13[R])){
					this.dir = DiffDir(this.dir);
					this.dirct = 5;
				}
			}
			for(R in p2earth3roots11){
				if(collision(this.dir, this, p2earth3roots11[R])){
					this.dir = DiffDir(this.dir);
					this.dirct = 5;
				}
			}
		}
		if(this.frame*0.5 == Math.round(this.frame*0.5)){
			if(p2earth3rootstr41.onScreen == 0){
				p2earth3rootstr41.onScreen = 1;
				p2earth3rootstr41.x = this.x;
				p2earth3rootstr41.y = this.y;
			}
			else if(p2earth3rootstr42.onScreen == 0){
				p2earth3rootstr42.onScreen = 1;
				p2earth3rootstr42.x = this.x;
				p2earth3rootstr42.y = this.y;
			}
			else if(p2earth3rootstr43.onScreen == 0){
				p2earth3rootstr43.onScreen = 1;
				p2earth3rootstr43.x = this.x;
				p2earth3rootstr43.y = this.y;
			}
			else if(p2earth3rootstr44.onScreen == 0){
				p2earth3rootstr44.onScreen = 1;
				p2earth3rootstr44.x = this.x;
				p2earth3rootstr44.y = this.y;
			}
			else if(p2earth3rootstr45.onScreen == 0){
				p2earth3rootstr45.onScreen = 1;
				p2earth3rootstr45.x = this.x;
				p2earth3rootstr45.y = this.y;
			}
			else if(p2earth3rootstr46.onScreen == 0){
				p2earth3rootstr46.onScreen = 1;
				p2earth3rootstr46.x = this.x;
				p2earth3rootstr46.y = this.y;
			}
			else if(p2earth3rootstr47.onScreen == 0){
				p2earth3rootstr47.onScreen = 1;
				p2earth3rootstr47.x = this.x;
				p2earth3rootstr47.y = this.y;
			}
			else if(p2earth3rootstr48.onScreen == 0){
				p2earth3rootstr48.onScreen = 1;
				p2earth3rootstr48.x = this.x;
				p2earth3rootstr48.y = this.y;
			}
			else if(p2earth3rootstr49.onScreen == 0){
				p2earth3rootstr49.onScreen = 1;
				p2earth3rootstr49.x = this.x;
				p2earth3rootstr49.y = this.y;
			}
			else if(p2earth3rootstr410.onScreen == 0){
				p2earth3rootstr410.onScreen = 1;
				p2earth3rootstr410.x = this.x;
				p2earth3rootstr410.y = this.y;
			}
			else if(p2earth3rootstr411.onScreen == 0){
				p2earth3rootstr411.onScreen = 1;
				p2earth3rootstr411.x = this.x;
				p2earth3rootstr411.y = this.y;
			}
			else if(p2earth3rootstr412.onScreen == 0){
				p2earth3rootstr412.onScreen = 1;
				p2earth3rootstr412.x = this.x;
				p2earth3rootstr412.y = this.y;
			}
			else if(p2earth3rootstr413.onScreen == 0){
				p2earth3rootstr413.onScreen = 1;
				p2earth3rootstr413.x = this.x;
				p2earth3rootstr413.y = this.y;
			}
			else if(p2earth3rootstr414.onScreen == 0){
				p2earth3rootstr414.onScreen = 1;
				p2earth3rootstr414.x = this.x;
				p2earth3rootstr414.y = this.y;
			}
			else if(p2earth3rootstr415.onScreen == 0){
				p2earth3rootstr415.onScreen = 1;
				p2earth3rootstr415.x = this.x;
				p2earth3rootstr415.y = this.y;
			}
			else{
				this.movement = false;
				this.frame = 0;
			}
		}
	}
	}
};
function p2earth2AI(B){
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
	else if(B.dirct <=0){
		if(xdifference < 4 && ydifference < 4){
			B.dir = "WA";
		}
		else if(xdifference < 4 && ydifference > 4){
			B.dir = "AS";
		}
		else if(xdifference > 4 && ydifference < 4){
			B.dir = "WD";
		}
		else if (xdifference > 4 && ydifference > 4){
			B.dir = "SD";
		}
		else if (xdifference == 4 && ydifference > 4){
			B.dir = "S";
		}
		else if(xdifference == 4 && ydifference < 4){
			B.dir = "W";
		}
		else if(xdifference < 4 && ydifference == 4){
			B.dir = "A";
		}
		else{
			B.dir = "D";
		}
	}
	else if(B.dirct > 0){
		B.dirct-=1;
	}
}
function p2earth2Move(B){
	if(B.movement){
		if (B.dir == "W"){
			B.y -= B.speed;
		}
		else if (B.dir == "A"){
			B.x -= B.speed;
		}
		else if (B.dir == "S"){
			B.y += B.speed;
		}
		else if (B.dir == "D"){
			B.x += B.speed;
		}
		else if (B.dir == "WA"){
			B.x -= B.speed/Math.sqrt(2);
			B.y -= B.speed/Math.sqrt(2);
		}
		else if (B.dir == "AS"){
			B.x -= B.speed/Math.sqrt(2);
			B.y += B.speed/Math.sqrt(2);
		}
		else if (B.dir == "SD"){
			B.x += B.speed/Math.sqrt(2);
			B.y += B.speed/Math.sqrt(2);
		}
		else if (B.dir == "WD"){
			B.x += B.speed/Math.sqrt(2);
			B.y -= B.speed/Math.sqrt(2);
		}
		for(E in AllEnemies){
			if(collision(B.dir, B, AllEnemies[E])){
				onHit(AllEnemies[E]);
			}
		}
	}
}
// Air: Blows back all enemies in front of player
var p2air = {
	timeLeft: 0,
	cd: 0,
	cdTop: 120,
	speed: 16,
	onScreen: 0,
	cast: 0,
	used: 0,
	isdark: false,
	
	draw: function(){
		if(this.onScreen == 1 && this.cast == 0){
			if(player2.w){
				ctx.globalAlpha = Alpha*0.5;
				ctx.drawImage(Wiz_Sheet, 0, 32, 32, 32, player2.x - player2.width * 0.5, player2.y - player2.height * 0.5 + 8, 32, 32);
				ctx.globalAlpha = Alpha*0.5;
				ctx.drawImage(Wiz_Sheet, 0, 32, 32, 32, player2.x - player2.width * 0.5, player2.y - player2.height * 0.5 + 24, 32, 32);
				ctx.globalAlpha = Alpha*0.25;
				ctx.drawImage(Wiz_Sheet, 0, 32, 32, 32, player2.x - player2.width * 0.5, player2.y - player2.height * 0.5 + 40, 32, 32);
				ctx.globalAlpha = Alpha*0.25;
				ctx.drawImage(Wiz_Sheet, 0, 32, 32, 32, player2.x - player2.width * 0.5, player2.y - player2.height * 0.5 + 56, 32, 32);
				ctx.globalAlpha = Alpha/6;
				ctx.drawImage(Wiz_Sheet, 0, 32, 32, 32, player2.x - player2.width * 0.5, player2.y - player2.height * 0.5 + 72, 32, 32);
				ctx.globalAlpha = Alpha/6;
				ctx.drawImage(Wiz_Sheet, 0, 32, 32, 32, player2.x - player2.width * 0.5, player2.y - player2.height * 0.5 + 88, 32, 32);
			}
			if(player2.s){
				ctx.globalAlpha = Alpha*0.5;
				ctx.drawImage(Wiz_Sheet, 0, 0, 32, 32, player2.x - player2.width * 0.5, player2.y - player2.height * 0.5 - 8, 32, 32);
				ctx.globalAlpha = Alpha*0.5;
				ctx.drawImage(Wiz_Sheet, 0, 0, 32, 32, player2.x - player2.width * 0.5, player2.y - player2.height * 0.5 - 24, 32, 32);
				ctx.globalAlpha = Alpha*0.25;
				ctx.drawImage(Wiz_Sheet, 0, 0, 32, 32, player2.x - player2.width * 0.5, player2.y - player2.height * 0.5 - 40, 32, 32);
				ctx.globalAlpha = Alpha*0.25;
				ctx.drawImage(Wiz_Sheet, 0, 0, 32, 32, player2.x - player2.width * 0.5, player2.y - player2.height * 0.5 - 56, 32, 32);
				ctx.globalAlpha = Alpha/6;
				ctx.drawImage(Wiz_Sheet, 0, 0, 32, 32, player2.x - player2.width * 0.5, player2.y - player2.height * 0.5 - 72, 32, 32);
				ctx.globalAlpha = Alpha/6;
				ctx.drawImage(Wiz_Sheet, 0, 0, 32, 32, player2.x - player2.width * 0.5, player2.y - player2.height * 0.5 - 88, 32, 32);
			}
			if(player2.a){
				ctx.globalAlpha = Alpha*0.5;
				ctx.drawImage(Wiz_Sheet, 0, 0, 32, 32, player2.x - player2.width * 0.5 + 8, player2.y - player2.height * 0.5, 32, 32);
				ctx.globalAlpha = Alpha*0.5;
				ctx.drawImage(Wiz_Sheet, 0, 0, 32, 32, player2.x - player2.width * 0.5 + 24, player2.y - player2.height * 0.5, 32, 32);
				ctx.globalAlpha = Alpha*0.25;
				ctx.drawImage(Wiz_Sheet, 0, 0, 32, 32, player2.x - player2.width * 0.5 + 40, player2.y - player2.height * 0.5, 32, 32);
				ctx.globalAlpha = Alpha*0.25;
				ctx.drawImage(Wiz_Sheet, 0, 0, 32, 32, player2.x - player2.width * 0.5 + 56, player2.y - player2.height * 0.5, 32, 32);
				ctx.globalAlpha = Alpha/6;
				ctx.drawImage(Wiz_Sheet, 0, 0, 32, 32, player2.x - player2.width * 0.5 + 72, player2.y - player2.height * 0.5, 32, 32);
				ctx.globalAlpha = Alpha/6;
				ctx.drawImage(Wiz_Sheet, 0, 0, 32, 32, player2.x - player2.width * 0.5 + 88, player2.y - player2.height * 0.5, 32, 32);
			}
			if(player2.d){
				ctx.globalAlpha = Alpha*0.5;
				ctx.drawImage(Wiz_Sheet, 0, 32, 32, 32, player2.x - player2.width * 0.5 - 8, player2.y - player2.height * 0.5, 32, 32);
				ctx.globalAlpha = Alpha*0.5;
				ctx.drawImage(Wiz_Sheet, 0, 32, 32, 32, player2.x - player2.width * 0.5 - 24, player2.y - player2.height * 0.5, 32, 32);
				ctx.globalAlpha = Alpha*0.25;
				ctx.drawImage(Wiz_Sheet, 0, 32, 32, 32, player2.x - player2.width * 0.5 - 40, player2.y - player2.height * 0.5, 32, 32);
				ctx.globalAlpha = Alpha*0.25;
				ctx.drawImage(Wiz_Sheet, 0, 32, 32, 32, player2.x - player2.width * 0.5 - 56, player2.y - player2.height * 0.5, 32, 32);
				ctx.globalAlpha = Alpha/6;
				ctx.drawImage(Wiz_Sheet, 0, 32, 32, 32, player2.x - player2.width * 0.5 - 72, player2.y - player2.height * 0.5, 32, 32);
				ctx.globalAlpha = Alpha/6;
				ctx.drawImage(Wiz_Sheet, 0, 32, 32, 32, player2.x - player2.width * 0.5 - 88, player2.y - player2.height * 0.5, 32, 32);
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
		if(this.timeLeft > 0 && this.cast <= 0){
			this.timeLeft-=1;
		}
		if(this.onScreen == 1 && this.cast == 0){
			for(E in AllEnemies){
				if(collision(player2.dir, player2, AllEnemies[E])){
					onHit(AllEnemies[E]);
				}
			}
			for(O in ObsList){
				if(collision(player2.dir, player2, ObsList[O])){
					obsHit(ObsList[O]);
				}
			}
		}
		if(this.onScreen == 1 && this.cast == 0 && this.used == 0){
			this.used = 1;
			Wind.currentTime = 0;
			Wind.play();
		}
		if(this.timeLeft <=0 && this.onScreen == 1){
			this.onScreen = 0;
			this.isdark = false;
		}
	},
	// Spawn
	shoot: function(){
	if(this.cd == 0){
		this.cd = this.cdTop;
		this.timeLeft = 15;
		this.onScreen = 1;
		this.used = 0;
		if(this.cast <0){
			this.cast = 0;
		}
	}
	}
};
// air2: Blow away all nearby enemies
var p2air2 = {
	timeLeft: 0,
	cd: 0,
	cdTop: 300,
	speed: 16,
	onScreen: 0,
	cast: 0,
	num: 0,
	used: 0,
	maxNum: 4,
	
	draw: function(){
		if(this.onScreen == 1 && this.cast == 0){
			if(player2.w){
				ctx.globalAlpha = Alpha*0.5;
				ctx.drawImage(Wiz_Sheet, 0, 32, 32, 32, player2.x - player2.width * 0.5, player2.y - player2.height * 0.5 + 8, 32, 32);
				ctx.globalAlpha = Alpha*0.5;
				ctx.drawImage(Wiz_Sheet, 0, 32, 32, 32, player2.x - player2.width * 0.5, player2.y - player2.height * 0.5 + 24, 32, 32);
				ctx.globalAlpha = Alpha*0.25;
				ctx.drawImage(Wiz_Sheet, 0, 32, 32, 32, player2.x - player2.width * 0.5, player2.y - player2.height * 0.5 + 40, 32, 32);
				ctx.globalAlpha = Alpha*0.25;
				ctx.drawImage(Wiz_Sheet, 0, 32, 32, 32, player2.x - player2.width * 0.5, player2.y - player2.height * 0.5 + 56, 32, 32);
				ctx.globalAlpha = Alpha/6;
				ctx.drawImage(Wiz_Sheet, 0, 32, 32, 32, player2.x - player2.width * 0.5, player2.y - player2.height * 0.5 + 72, 32, 32);
				ctx.globalAlpha = Alpha/6;
				ctx.drawImage(Wiz_Sheet, 0, 32, 32, 32, player2.x - player2.width * 0.5, player2.y - player2.height * 0.5 + 88, 32, 32);
			}
			if(player2.s){
				ctx.globalAlpha = Alpha*0.5;
				ctx.drawImage(Wiz_Sheet, 0, 0, 32, 32, player2.x - player2.width * 0.5, player2.y - player2.height * 0.5 - 8, 32, 32);
				ctx.globalAlpha = Alpha*0.5;
				ctx.drawImage(Wiz_Sheet, 0, 0, 32, 32, player2.x - player2.width * 0.5, player2.y - player2.height * 0.5 - 24, 32, 32);
				ctx.globalAlpha = Alpha*0.25;
				ctx.drawImage(Wiz_Sheet, 0, 0, 32, 32, player2.x - player2.width * 0.5, player2.y - player2.height * 0.5 - 40, 32, 32);
				ctx.globalAlpha = Alpha*0.25;
				ctx.drawImage(Wiz_Sheet, 0, 0, 32, 32, player2.x - player2.width * 0.5, player2.y - player2.height * 0.5 - 56, 32, 32);
				ctx.globalAlpha = Alpha/6;
				ctx.drawImage(Wiz_Sheet, 0, 0, 32, 32, player2.x - player2.width * 0.5, player2.y - player2.height * 0.5 - 72, 32, 32);
				ctx.globalAlpha = Alpha/6;
				ctx.drawImage(Wiz_Sheet, 0, 0, 32, 32, player2.x - player2.width * 0.5, player2.y - player2.height * 0.5 - 88, 32, 32);
			}
			if(player2.a){
				ctx.globalAlpha = Alpha*0.5;
				ctx.drawImage(Wiz_Sheet, 0, 0, 32, 32, player2.x - player2.width * 0.5 + 8, player2.y - player2.height * 0.5, 32, 32);
				ctx.globalAlpha = Alpha*0.5;
				ctx.drawImage(Wiz_Sheet, 0, 0, 32, 32, player2.x - player2.width * 0.5 + 24, player2.y - player2.height * 0.5, 32, 32);
				ctx.globalAlpha = Alpha*0.25;
				ctx.drawImage(Wiz_Sheet, 0, 0, 32, 32, player2.x - player2.width * 0.5 + 40, player2.y - player2.height * 0.5, 32, 32);
				ctx.globalAlpha = Alpha*0.25;
				ctx.drawImage(Wiz_Sheet, 0, 0, 32, 32, player2.x - player2.width * 0.5 + 56, player2.y - player2.height * 0.5, 32, 32);
				ctx.globalAlpha = Alpha/6;
				ctx.drawImage(Wiz_Sheet, 0, 0, 32, 32, player2.x - player2.width * 0.5 + 72, player2.y - player2.height * 0.5, 32, 32);
				ctx.globalAlpha = Alpha/6;
				ctx.drawImage(Wiz_Sheet, 0, 0, 32, 32, player2.x - player2.width * 0.5 + 88, player2.y - player2.height * 0.5, 32, 32);
			}
			if(player2.d){
				ctx.globalAlpha = Alpha*0.5;
				ctx.drawImage(Wiz_Sheet, 0, 32, 32, 32, player2.x - player2.width * 0.5 - 8, player2.y - player2.height * 0.5, 32, 32);
				ctx.globalAlpha = Alpha*0.5;
				ctx.drawImage(Wiz_Sheet, 0, 32, 32, 32, player2.x - player2.width * 0.5 - 24, player2.y - player2.height * 0.5, 32, 32);
				ctx.globalAlpha = Alpha*0.25;
				ctx.drawImage(Wiz_Sheet, 0, 32, 32, 32, player2.x - player2.width * 0.5 - 40, player2.y - player2.height * 0.5, 32, 32);
				ctx.globalAlpha = Alpha*0.25;
				ctx.drawImage(Wiz_Sheet, 0, 32, 32, 32, player2.x - player2.width * 0.5 - 56, player2.y - player2.height * 0.5, 32, 32);
				ctx.globalAlpha = Alpha/6;
				ctx.drawImage(Wiz_Sheet, 0, 32, 32, 32, player2.x - player2.width * 0.5 - 72, player2.y - player2.height * 0.5, 32, 32);
				ctx.globalAlpha = Alpha/6;
				ctx.drawImage(Wiz_Sheet, 0, 32, 32, 32, player2.x - player2.width * 0.5 - 88, player2.y - player2.height * 0.5, 32, 32);
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
		if(this.timeLeft > 0){
			this.timeLeft-=1;
		}
		if(this.onScreen == 1 && this.cast == 0){
			for(E in AllEnemies){
				if(collision(player2.dir, player2, AllEnemies[E])){
					onHit(AllEnemies[E]);
					if(this.maxNum < 9){
						this.maxNum+=1;
						if(typemarker5.x != -100 && typemarker6.x != -100){
							typemarker4.text = "+ Time";
							typemarker4.x = player2.x-player2.width*2;
							typemarker4.y = player2.y;
							typemarker4.timeLeft = 20;
						}
						else if(typemarker6.x != -100){
							typemarker5.text = "+ Time";
							typemarker5.x = player2.x-player2.width*2;
							typemarker5.y = player2.y;
							typemarker5.timeLeft = 20;
						}
						else{
							typemarker6.text = "+ Time";
							typemarker6.x = player2.x-player2.width*2;
							typemarker6.y = player2.y;
							typemarker6.timeLeft = 20;
						}
					}
				}
			}
			for(O in ObsList){
				if(collision(player2.dir, player2, ObsList[O])){
					obsHit(ObsList[O]);
				}
			}
		}
		if(this.onScreen == 1 && this.cast == 0 && this.used == 0){
			this.used = 1;
			Wind.currentTime = 0;
			Wind.play();
		}
		if(this.timeLeft <=0 && this.onScreen == 1){
			if(this.num >= this.maxNum){
				this.onScreen = 0;
				this.num = 0;
			}
			else{
				this.num++;
				this.timeLeft = 10;				
			}
		}
	},
	// Spawn
	shoot: function(){
	if(this.cd == 0){
		this.cd = this.cdTop;
		this.timeLeft = 10;
		this.onScreen = 1;
		this.used = 0;
		this.maxNum = 4;
	}
	}
};
//Teleport
var p2mystic = {
	color: "#FF00FF",
	width: 32,
	height: 32,
	x: 0,
	y: 0,
	x1: 0,
	y1: 0,
	cd: 0,
	cdTop: 90,
	onScreen: 0,
	cast: 0,
	mult: 6,
	mult2: 0,
	loop: 0,
	draaw: 0,
	frame: 0,
	cast: 0,
	used: 0,
	
	draw: function(){
		if(this.draaw == 1 && this.cast <= 0){
			ctx.fillStyle = this.color;
			ctx.globalAlpha = Alpha*0.25;
			if(this.used == 0){
				fastbeepsHigh.currentTime=0;
				fastbeepsHigh.play();
				this.used = 1;
			}
			if(this.frame < 4){
				//ctx.fillRect(this.x1-this.width*0.5, this.y1-this.height*0.5, this.width, this.height);
				//ctx.fillRect(player.x-this.width*0.5, player.y-this.height*0.5, this.width, this.height);
				player2.width-=8;
				this.width = this.width + 8 * this.frame;
				this.height = this.height + 8 * this.frame;
				this.frame++;
			}
			else if(this.frame < 8){
				//ctx.fillRect(this.x1-this.width*0.5, this.y1-this.height*0.5, this.width, this.height);
				//ctx.fillRect(player.x-this.width*0.5, player.y-this.height*0.5, this.width, this.height);
				this.width = this.width - 8 * this.frame;
				this.height = this.height - 8 * this.frame;
				player2.width+=8;
				this.frame++;
			}
			else{
				this.frame = 0;
				this.draaw = 0;
				this.width = 32;
				this.height = 32;
				player2.width = 32;
			}
			ctx.globalAlpha = Alpha;
		}
	},
	
	move: function(){
	if(this.cd > 0){
		this.cd -=1;
	}
	if(this.cast > 0){
		this.cast-=1;
	}
	if(this.onScreen == 1 && this.cast <=0 && this.frame >= 4){
		this.x1 = player2.x;
		this.y1 = player2.y;
		if(player2.w){
			this.x = player2.x;
			this.y = player2.y - 32*this.mult;
			if(STATE != "Swamp"){
				for(Z in obstacle1){
					if(contained(this, obstacle1[Z])){
						this.mult2 +=1;
					}
				}
				for(Z in obstacle2){
					if(contained(this, obstacle2[Z])){
						this.mult2 +=1;
					}
				}
				for(Z in obstacle3){
					if(contained(this, obstacle3[Z])){
						this.mult2 +=1;
					}
				}
			}
			this.y = this.y - 32*this.mult2;			
		}
		else if(player2.a){
			this.x = player2.x-32*this.mult;
			this.y = player2.y;
			if(STATE != "Swamp"){
				for(Z in obstacle1){
					if(contained(this, obstacle1[Z])){
						this.mult2 +=1;
					}
				}
				for(Z in obstacle2){
					if(contained(this, obstacle2[Z])){
						this.mult2 +=1;
					}
				}
				for(Z in obstacle3){
					if(contained(this, obstacle3[Z])){
						this.mult2 +=1;
					}
				}
			}
			this.x = this.x - 32*this.mult2;			
		}
		else if(player2.s){
			this.x = player2.x;
			this.y = player2.y + 32*this.mult;
			if(STATE != "Swamp"){
				for(Z in obstacle1){
					if(contained(this, obstacle1[Z])){
						this.mult2 +=1;
					}
				}
				for(Z in obstacle2){
					if(contained(this, obstacle2[Z])){
						this.mult2 +=1;
					}
				}
				for(Z in obstacle3){
					if(contained(this, obstacle3[Z])){
						this.mult2 +=1;
					}
				}
			}
			this.y = this.y + 32*this.mult2;			
		}
		else if(player2.d){
			this.x = player2.x+32*this.mult;
			this.y = player2.y;
			if(STATE != "Swamp"){
				for(Z in obstacle1){
					if(contained(this, obstacle1[Z])){
						this.mult2 +=1;
					}
				}
				for(Z in obstacle2){
					if(contained(this, obstacle2[Z])){
						this.mult2 +=1;
					}
				}
				for(Z in obstacle3){
					if(contained(this, obstacle3[Z])){
						this.mult2 +=1;
					}
				}
			}
			this.x = this.x + 32*this.mult2;	
		}
		if(this.loop > 0){
			this.loop -= 1;
			this.move();
		}
		this.mult2 = 0;
		if(this.x < 8){
			this.x = 8;
		}
		if(this.y < 8){
			this.y = 8;
		}
		if(this.x > 792){
			this.x = 792;
		}
		if(this.y > 568){
			this.y = 568;
		}
		player2.x = this.x;
		player2.y = this.y;
		this.onScreen = 0;
		}
	},
	// Spawn
	shoot: function(){
	if(this.cd == 0){
		this.height = 32;
		this.width = 32;
		this.draaw = 1;
		this.x = player2.x;
		this.y = player2.y;
		this.cd = this.cdTop;
		this.loop = 2;
		this.onScreen = 1;
		this.used = 0;
	}
	}
};
//Mirage
var p2mystic2 = {
	color: "#FF00FF",
	width: 32,
	height: 32,
	x: 0,
	y: 0,
	x1: 0,
	y1: 0,
	cd: 0,
	cdTop: 450,
	onScreen: 0,
	cast: 0,
	mult: 6,
	mult2: 0,
	loop: 0,
	draaw: 0,
	frame: 0,
	cast: 0,
	
	draw: function(){
		if(this.draaw == 1 && this.cast <= 0){
			ctx.fillStyle = this.color;
			ctx.globalAlpha = Alpha*0.25;
			if(this.frame < 4){
				ctx.fillRect(this.x1-this.width*0.5, this.y1-this.height*0.5, this.width, this.height);
				ctx.fillRect(player2.x-this.width*0.5, player2.y-this.height*0.5, this.width, this.height);
				this.width = this.width + 8 * this.frame;
				this.height = this.height + 8 * this.frame;
				this.frame++;
			}
			else if(this.frame < 8){
				ctx.fillRect(this.x1-this.width*0.5, this.y1-this.height*0.5, this.width, this.height);
				ctx.fillRect(player2.x-this.width*0.5, player2.y-this.height*0.5, this.width, this.height);
				this.width = this.width - 8 * this.frame;
				this.height = this.height - 8 * this.frame;
				this.frame++;
			}
			else{
				this.frame = 0;
				this.draaw = 0;
				this.width = 32;
				this.height = 32;
			}
			ctx.globalAlpha = Alpha;
		}
	},
	
	move: function(){
	if(this.cd > 0){
		this.cd -=1;
	}
	if(this.cast > 0){
		this.cast-=1;
	}
	if(this.onScreen == 1 && this.cast <=0){
		this.x1 = player2.x;
		this.y1 = player2.y;
		if(player2.w){
			this.x = player2.x;
			this.y = player2.y - 32*this.mult;
			for(Z in obstacle1){
				if(contained(this, obstacle1[Z])){
					this.mult2 +=1;
				}
			}
			for(Z in obstacle2){
				if(contained(this, obstacle2[Z])){
					this.mult2 +=1;
				}
			}
			for(Z in obstacle3){
				if(contained(this, obstacle3[Z])){
					this.mult2 +=1;
				}
			}
			this.y = this.y - 32*this.mult2;			
		}
		else if(player2.a){
			this.x = player2.x-32*this.mult;
			this.y = player2.y;
			for(Z in obstacle1){
				if(contained(this, obstacle1[Z])){
					this.mult2 +=1;
				}
			}
			for(Z in obstacle2){
				if(contained(this, obstacle2[Z])){
					this.mult2 +=1;
				}
			}
			for(Z in obstacle3){
				if(contained(this, obstacle3[Z])){
					this.mult2 +=1;
				}
			}
			this.x = this.x - 32*this.mult2;			
		}
		else if(player2.s){
			this.x = player2.x;
			this.y = player2.y + 32*this.mult;
			for(Z in obstacle1){
				if(contained(this, obstacle1[Z])){
					this.mult2 +=1;
				}
			}
			for(Z in obstacle2){
				if(contained(this, obstacle2[Z])){
					this.mult2 +=1;
				}
			}
			for(Z in obstacle3){
				if(contained(this, obstacle3[Z])){
					this.mult2 +=1;
				}
			}
			this.y = this.y + 32*this.mult2;			
		}
		else if(player2.d){
			this.x = player2.x+32*this.mult;
			this.y = player2.y;
			for(Z in obstacle1){
				if(contained(this, obstacle1[Z])){
					this.mult2 +=1;
				}
			}
			for(Z in obstacle2){
				if(contained(this, obstacle2[Z])){
					this.mult2 +=1;
				}
			}
			for(Z in obstacle3){
				if(contained(this, obstacle3[Z])){
					this.mult2 +=1;
				}
			}
			this.x = this.x + 32*this.mult2;	
		}
		if(this.loop > 0){
			this.loop -= 1;
			this.move();
		}
		this.mult2 = 0;
		if(this.x < 8){
			this.x = 8;
		}
		if(this.y < 8){
			this.y = 8;
		}
		if(this.x > 792){
			this.x = 792;
		}
		if(this.y > 568){
			this.y = 568;
		}
		player2.x = this.x;
		player2.y = this.y;
		this.onScreen = 0;
		if(p2Illusion.onScreen == 0 && this.loop == 0){
			p2Illusion.onScreen = 1;
			p2Illusion.x = this.x1;
			p2Illusion.y = this.y1;
			p2Illusion.cd = 90;
		}
	}
	},
		
	shoot: function(){
	if(this.cd == 0){
		fastbeepsHigh.currentTime=0;
		fastbeepsHigh.play();
		this.height = 32;
		this.width = 32;
		this.draaw = 1;
		this.x = player2.x;
		this.y = player2.y;
		this.cd = this.cdTop;
		this.loop = 2;
		this.onScreen = 1;
	}
	}
};
var p2Illusion = {
	width: 32,
	height: 32,
	width2: 32,
	height2: 32,
	x: -100,
	y: 200,
	cd: 0,
	onScreen: 0,
	frame: 0,
	
	draw: function(){
	if(this.onScreen == 1){
		ctx.drawImage(Wiz_Sheet, 0, 256, 32, 32, this.x - this.width * 0.5, this.y - this.height * 0.5, this.width, this.height);
		ctx.drawImage(Wiz_Sheet, 0, 256, 32, 32, this.x-16, this.y-16, 32, 32);
		this.frame++;
		if(this.frame<=5){
			this.width=32-this.frame*2;
			this.height=32-this.frame*2;
		}
		else if(this.frame<=10){
			this.width=32+this.frame*2;
			this.height=32+this.frame*2;
		}		
		else{
			this.frame = 0;
			this.width = 32;
			this.height = 32;
		}
	}
	},
	shoot: function(){
		if(this.cd > 0 && this.onScreen == 1){
			this.cd-=1;
		}
		else if(this.onScreen == 1){
			p2IllusionBlast.x = this.x;
			p2IllusionBlast.y = this.y;
			p2IllusionBlast.shoot();
			p2IllusionBlast.onScreen = 1;
			this.onScreen = 0;
			this.x = -200;
			this.y = 100;
			this.frame = 0;
		}
	}
};
// IllusionBlast
var p2IllusionBlast = {
	color: "#FF00FF",
	x: -100,
	y: -200,
	timeLeft: 0,
	width: 32,
	height: 32,
	frame: 0,
	onScreen: 0,
	
	draw: function(){
		if(this.onScreen == 1){
			ctx.globalAlpha = Alpha*0.25;
			if(this.frame*0.5 != Math.round(this.frame*0.5)){
				ctx.fillStyle = "#660099";
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
		if(this.onScreen == 1 && this.frame < 20){
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
		else if(this.frame <= 30 && this.onScreen == 1){
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
		else if(this.frame <= 50 && this.onScreen == 1){
			this.height = 32;
			this.width = 32;
			this.onScreen = 0;
			this.frame = 0;
			this.x = 2000;
			this.y = 2000;
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
var p2water = {
	x: -100,
	y: -200,
	width: 16,
	height: 16,
	timeLeft: 0,
	cd: 0,
	cdTop: 1020,
	cd2: 0,
	cd2Top: 1020,
	speed: 4,
	onScreen: 0,
	cast: 0,
	used: 0,
	dir: "",
	
	draw: function(){
		if(this.onScreen == 1 && this.cast == 0){
			if(this.used == 0){
				midBoop.currentTime=0;
				midBoop.play();
				this.used = 1;
			}
			ctx.drawImage(Bubble, this.x-this.width*0.5, this.y-this.height*0.5);
		}
	},
	effect: function(){
		if(this.cd > 0){
			this.cd-=1;
		}
		if(this.cd2 > 0){
			this.cd2-=1;
		}
		if(this.timeLeft > 0){
			this.timeLeft-=1;
		}
		if(this.timeLeft == 0){
			for(B in p2bubbleRotate){
				p2bubbleRotate[B].onScreen = 0;
				p2bubbleRotate[B].x = -100;
				p2bubbleRotate[B].y = -200;
				p2bubbleRotate[B].used = 0;
			}
		}
		if(this.cast > 0){
			this.cast-=1;
		}
		if(this.cast == 0 && this.onScreen == 1 && p2water12.used == 0 && p2water13.used == 0 && p2water14.used == 0){
			p2water12.shoot();
			p2water13.shoot();
			p2water14.shoot();
			if(player2.spell1 == "Water" && player2.spell2 == "Water" && p2water21.used == 0 && p2water22.used == 0 && p2water23.used == 0 && p2water24.used == 0){
				p2water21.shoot();
				p2water22.shoot();
				p2water23.shoot();
				p2water24.shoot();
			}
		}
		if(this.onScreen == 1 && this.cast == 0){
			HpMove(this);
			if(this.x == player2.x - 48 && this.y == player2.y){
				this.dir = "WD";
			}
			else if(this.x == player2.x && this.y == player2.y - 48){
				this.dir = "SD";
			}
			else if(this.x == player2.x + 48 && this.y == player2.y){
				this.dir = "AS";
			}
			else if(this.x == player2.x && this.y == player2.y + 48){
				this.dir = "WA";
			}
			for(E in AllEnemies){
				if(collision(this.dir, this, AllEnemies[E]) || collision(AllEnemies[E].dir, AllEnemies[E], this)){
					onHit(AllEnemies[E]);
					this.x = -100;
					this.y = -200;
					this.onScreen = 0;
				}
			}
		}
	},
	// Spawn
	shoot: function(){
		if(this.cd == 0 && ((player2.spell1 == "Water" && player2.spell2 != "Water") || (player2.spell2 == "Water" && player2.spell1 != "Water"))){
			for(B in p2bubbleRotate){
				p2bubbleRotate[B].onScreen = 0;
				p2bubbleRotate[B].x = -100;
				p2bubbleRotate[B].y = -200;
				p2bubbleRotate[B].used = 0;
			}
			this.x = player2.x - 48;
			this.y = player2.y;
			this.dir = "WD";
			this.cd = this.cdTop;
			this.onScreen = 1;
			this.used = 0;
			this.timeLeft = 600;
			if(this.cast <0){
				this.cast = 0;
			}
		}
		else if(this.cd2 == 0 && player2.spell1 == "Water" && player2.spell2 == "Water"){
			for(B in p2bubbleRotate){
				p2bubbleRotate[B].onScreen = 0;
				p2bubbleRotate[B].x = -100;
				p2bubbleRotate[B].y = -200;
				p2bubbleRotate[B].used = 0;
			}
			this.x = player2.x - 48;
			this.y = player2.y;
			this.dir = "WD";
			this.cd2 = this.cd2Top;
			this.onScreen = 1;
			this.used = 0;
			this.timeLeft = 600;
			if(this.cast <0){
				this.cast = 0;
			}
		}
	}
};
var p2water12 = {
	x: -100,
	y: -200,
	width: 16,
	height: 16,
	speed: 4,
	onScreen: 0,
	used: 0,
	dir: "",
	
	draw: function(){
		if(this.onScreen == 1){
			if(this.used == 0){
				this.used = 1;
			}
			ctx.drawImage(Bubble, this.x-this.width*0.5, this.y-this.height*0.5);
		}
	},
	effect: function(){
		if(this.onScreen == 1){
			HpMove(this);
			if(this.x == player2.x - 48 && this.y == player2.y){
				this.dir = "WD";
			}
			else if(this.x == player2.x && this.y == player2.y - 48){
				this.dir = "SD";
			}
			else if(this.x == player2.x + 48 && this.y == player2.y){
				this.dir = "AS";
			}
			else if(this.x == player2.x && this.y == player2.y + 48){
				this.dir = "WA";
			}
			for(E in AllEnemies){
				if(collision(this.dir, this, AllEnemies[E]) || collision(AllEnemies[E].dir, AllEnemies[E], this)){
					onHit(AllEnemies[E]);
					this.x = -100;
					this.y = -200;
					this.onScreen = 0;
				}
			}
		}
	},
	// Spawn
	shoot: function(){
		this.x = player2.x;
		this.y = player2.y - 48;
		this.dir = "SD";
		this.onScreen = 1;
		this.used = 0;
	}
};
var p2water13 = {
	x: -100,
	y: -200,
	width: 16,
	height: 16,
	speed: 4,
	onScreen: 0,
	used: 0,
	dir: "",
	
	draw: function(){
		if(this.onScreen == 1){
			if(this.used == 0){
				this.used = 1;
			}
			ctx.drawImage(Bubble, this.x-this.width*0.5, this.y-this.height*0.5);
		}
	},
	effect: function(){
		if(this.onScreen == 1){
			HpMove(this);
			if(this.x == player2.x - 48 && this.y == player2.y){
				this.dir = "WD";
			}
			else if(this.x == player2.x && this.y == player2.y - 48){
				this.dir = "SD";
			}
			else if(this.x == player2.x + 48 && this.y == player2.y){
				this.dir = "AS";
			}
			else if(this.x == player2.x && this.y == player2.y + 48){
				this.dir = "WA";
			}
			for(E in AllEnemies){
				if(collision(this.dir, this, AllEnemies[E]) || collision(AllEnemies[E].dir, AllEnemies[E], this)){
					onHit(AllEnemies[E]);
					this.x = -100;
					this.y = -200;
					this.onScreen = 0;
				}
			}
		}
	},
	// Spawn
	shoot: function(){
		this.x = player2.x + 48;
		this.y = player2.y;
		this.dir = "AS";
		this.onScreen = 1;
		this.used = 0;
	}
};
var p2water14 = {
	x: -100,
	y: -200,
	width: 16,
	height: 16,
	speed: 4,
	onScreen: 0,
	used: 0,
	dir: "",
	
	draw: function(){
		if(this.onScreen == 1){
			if(this.used == 0){
				this.used = 1;
			}
			ctx.drawImage(Bubble, this.x-this.width*0.5, this.y-this.height*0.5);
		}
	},
	effect: function(){
		if(this.onScreen == 1){
			HpMove(this);
			if(this.x == player2.x - 48 && this.y == player2.y){
				this.dir = "WD";
			}
			else if(this.x == player2.x && this.y == player2.y - 48){
				this.dir = "SD";
			}
			else if(this.x == player2.x + 48 && this.y == player2.y){
				this.dir = "AS";
			}
			else if(this.x == player2.x && this.y == player2.y + 48){
				this.dir = "WA";
			}
			for(E in AllEnemies){
				if(collision(this.dir, this, AllEnemies[E]) || collision(AllEnemies[E].dir, AllEnemies[E], this)){
					onHit(AllEnemies[E]);
					this.x = -100;
					this.y = -200;
					this.onScreen = 0;
				}
			}
		}
	},
	// Spawn
	shoot: function(){
		this.x = player2.x;
		this.y = player2.y + 48;
		this.dir = "WA";
		this.onScreen = 1;
		this.used = 0;
	}
};
var p2water21 = {
	x: -100,
	y: -200,
	width: 16,
	height: 16,
	speed: 4,
	onScreen: 0,
	used: 0,
	dir: "",
	
	draw: function(){
		if(this.onScreen == 1){
			if(this.used == 0){
				this.used = 1;
			}
			ctx.drawImage(Bubble, this.x-this.width*0.5, this.y-this.height*0.5);
		}
	},
	effect: function(){
		if(this.onScreen == 1){
			HpMove(this);
			if(this.x == player2.x - 48 && this.y == player2.y){
				this.dir = "WD";
			}
			else if(this.x == player2.x && this.y == player2.y - 48){
				this.dir = "SD";
			}
			else if(this.x == player2.x + 48 && this.y == player2.y){
				this.dir = "AS";
			}
			else if(this.x == player2.x && this.y == player2.y + 48){
				this.dir = "WA";
			}
			for(E in AllEnemies){
				if(collision(this.dir, this, AllEnemies[E]) || collision(AllEnemies[E].dir, AllEnemies[E], this)){
					onHit(AllEnemies[E]);
					this.x = -100;
					this.y = -200;
					this.onScreen = 0;
				}
			}
		}
	},
	// Spawn
	shoot: function(){
		this.x = player2.x + 24;
		this.y = player2.y + 24;
		this.dir = "AS";
		this.onScreen = 1;
		this.used = 0;
	}
};
var p2water22 = {
	x: -100,
	y: -200,
	width: 16,
	height: 16,
	speed: 4,
	onScreen: 0,
	used: 0,
	dir: "",
	
	draw: function(){
		if(this.onScreen == 1){
			if(this.used == 0){
				this.used = 1;
			}
			ctx.drawImage(Bubble, this.x-this.width*0.5, this.y-this.height*0.5);
		}
	},
	effect: function(){
		if(this.onScreen == 1){
			HpMove(this);
			if(this.x == player2.x - 48 && this.y == player2.y){
				this.dir = "WD";
			}
			else if(this.x == player2.x && this.y == player2.y - 48){
				this.dir = "SD";
			}
			else if(this.x == player2.x + 48 && this.y == player2.y){
				this.dir = "AS";
			}
			else if(this.x == player2.x && this.y == player2.y + 48){
				this.dir = "WA";
			}
			for(E in AllEnemies){
				if(collision(this.dir, this, AllEnemies[E]) || collision(AllEnemies[E].dir, AllEnemies[E], this)){
					onHit(AllEnemies[E]);
					this.x = -100;
					this.y = -200;
					this.onScreen = 0;
				}
			}
		}
	},
	// Spawn
	shoot: function(){
		this.x = player2.x - 24;
		this.y = player2.y + 24;
		this.dir = "WA";
		this.onScreen = 1;
		this.used = 0;
	}
};
var p2water23 = {
	x: -100,
	y: -200,
	width: 16,
	height: 16,
	speed: 4,
	onScreen: 0,
	used: 0,
	dir: "",
	
	draw: function(){
		if(this.onScreen == 1){
			if(this.used == 0){
				this.used = 1;
			}
			ctx.drawImage(Bubble, this.x-this.width*0.5, this.y-this.height*0.5);
		}
	},
	effect: function(){
		if(this.onScreen == 1){
			HpMove(this);
			if(this.x == player2.x - 48 && this.y == player2.y){
				this.dir = "WD";
			}
			else if(this.x == player2.x && this.y == player2.y - 48){
				this.dir = "SD";
			}
			else if(this.x == player2.x + 48 && this.y == player2.y){
				this.dir = "AS";
			}
			else if(this.x == player2.x && this.y == player2.y + 48){
				this.dir = "WA";
			}
			for(E in AllEnemies){
				if(collision(this.dir, this, AllEnemies[E]) || collision(AllEnemies[E].dir, AllEnemies[E], this)){
					onHit(AllEnemies[E]);
					this.x = -100;
					this.y = -200;
					this.onScreen = 0;
				}
			}
		}
	},
	// Spawn
	shoot: function(){
		this.x = player2.x + 24;
		this.y = player2.y - 24;
		this.dir = "SD";
		this.onScreen = 1;
		this.used = 0;
	}
};
var p2water24 = {
	x: -100,
	y: -200,
	width: 16,
	height: 16,
	speed: 4,
	onScreen: 0,
	used: 0,
	dir: "",
	
	draw: function(){
		if(this.onScreen == 1){
			if(this.used == 0){
				this.used = 1;
			}
			ctx.drawImage(Bubble, this.x-this.width*0.5, this.y-this.height*0.5);
		}
	},
	effect: function(){
		if(this.onScreen == 1){
			HpMove(this);
			if(this.x == player2.x - 48 && this.y == player2.y){
				this.dir = "WD";
			}
			else if(this.x == player2.x && this.y == player2.y - 48){
				this.dir = "SD";
			}
			else if(this.x == player2.x + 48 && this.y == player2.y){
				this.dir = "AS";
			}
			else if(this.x == player2.x && this.y == player2.y + 48){
				this.dir = "WA";
			}
			for(E in AllEnemies){
				if(collision(this.dir, this, AllEnemies[E]) || collision(AllEnemies[E].dir, AllEnemies[E], this)){
					onHit(AllEnemies[E]);
					this.x = -100;
					this.y = -200;
					this.onScreen = 0;
				}
			}
		}
	},
	// Spawn
	shoot: function(){
		this.x = player2.x - 24;
		this.y = player2.y - 24;
		this.dir = "WD";
		this.onScreen = 1;
		this.used = 0;
	}
};
var p2bubbleRotate = {1: p2water, 2: p2water12, 3: p2water13, 4: p2water14, 5: p2water21, 6: p2water22, 7: p2water23, 8: p2water24};
// Dark: Drops a 2 dmg trap on player's location
var p2dark = {
	x: -100,
	y: -200,
	width: 32,
	height: 32,
	cd: 0,
	cdTop: 30,
	onScreen: 0,
	used: 0,
	inventory: 7,
	dark1: true,
	active: false,
	timeLeft: -1,
	shoot: function(){
		if(this.cd == 0 && this.inventory > 0){
			this.inventory-=1;
			if(this.onScreen == 0){
				this.x = player2.x;
				this.y = player2.y;
				this.cd = this.cdTop;
				this.onScreen = 1;
				this.used = 0;
			}
			else if(p2dark12.onScreen == 0){
				p2dark12.x = player2.x;
				p2dark12.y = player2.y;
				this.cd = this.cdTop;
				p2dark12.onScreen = 1;
				p2dark12.used = 0;
			}
			else if(p2dark13.onScreen == 0){
				p2dark13.x = player2.x;
				p2dark13.y = player2.y;
				this.cd = this.cdTop;
				p2dark13.onScreen = 1;
				p2dark13.used = 0;
			}
			else if(p2dark14.onScreen == 0){
				p2dark14.x = player2.x;
				p2dark14.y = player2.y;
				this.cd = this.cdTop;
				p2dark14.onScreen = 1;
				p2dark14.used = 0;
			}
			else if(p2dark15.onScreen == 0){
				p2dark15.x = player2.x;
				p2dark15.y = player2.y;
				this.cd = this.cdTop;
				p2dark15.onScreen = 1;
				p2dark15.used = 0;
			}
			else if(p2dark16.onScreen == 0){
				p2dark16.x = player2.x;
				p2dark16.y = player2.y;
				this.cd = this.cdTop;
				p2dark16.onScreen = 1;
				p2dark16.used = 0;
			}
			else if(p2dark17.onScreen == 0){
				p2dark17.x = player2.x;
				p2dark17.y = player2.y;
				this.cd = this.cdTop;
				p2dark17.onScreen = 1;
				p2dark17.used = 0;
			}
		}
	}
};
var p2dark12 = {
	x: -100,
	y: -200,
	width: 32,
	height: 32,
	onScreen: 0,
	used: 0,
	dark1: true,
	active: false,
	timeLeft: -1
}	
var p2dark13 = {
	x: -100,
	y: -200,
	width: 32,
	height: 32,
	onScreen: 0,
	used: 0,
	dark1: true,
	active: false,
	timeLeft: -1
}
var p2dark14 = {
	x: -100,
	y: -200,
	width: 32,
	height: 32,
	onScreen: 0,
	used: 0,
	dark1: true,
	active: false,
	timeLeft: -1
}
var p2dark15 = {
	x: -100,
	y: -200,
	width: 32,
	height: 32,
	onScreen: 0,
	used: 0,
	dark1: true,
	active: false,
	timeLeft: -1
}
var p2dark16 = {
	x: -100,
	y: -200,
	width: 32,
	height: 32,
	cd: 0,
	onScreen: 0,
	used: 0,
	dark1: true,
	active: false,
	timeLeft: -1
}
var p2dark17 = {
	x: -100,
	y: -200,
	width: 32,
	height: 32,
	cd: 0,
	onScreen: 0,
	used: 0,
	dark1: true,
	active: false,
	timeLeft: -1
}
// DeathBound: Creates a bunch of spikes around you that go up and disappear.
var p2dark2 = {
	x: -100,
	y: -200,
	width: 32,
	height: 32,
	cd: 0,
	cdTop: 210,
	onScreen: 0,
	frame: 0,
	arrIndex: 1,
	dir: "S",
	cast: -1,
	tick: function(){
		if(this.cast > -1){
			this.cast-=1;
		}
		if(this.onScreen == 0 && this.cast == 0 && deathTimer == -1){
			hum.currentTime = 0;
			hum.play();			
			this.x = player2.x;
			this.y = player2.y + 48;
			this.onScreen = 1;
			this.used = 0;
			p2dark22.x = player2.x;
			p2dark22.y = player2.y - 48;
			p2dark22.onScreen = 1;
			p2dark22.used = 0;
			p2dark23.x = player2.x + 48;
			p2dark23.y = player2.y;
			p2dark23.onScreen = 1;
			p2dark23.used = 0;
			p2dark24.x = player2.x - 48;
			p2dark24.y = player2.y;
			p2dark24.onScreen = 1;
			p2dark24.used = 0;
			p2dark25.x = player2.x+32;
			p2dark25.y = player2.y+32;
			p2dark25.onScreen = 1;
			p2dark25.used = 0;
			p2dark26.x = player2.x-32;
			p2dark26.y = player2.y-32;
			p2dark26.onScreen = 1;
			p2dark26.used = 0;
			p2dark27.x = player2.x+32;
			p2dark27.y = player2.y-32;
			p2dark27.onScreen = 1;
			p2dark27.used = 0;
			p2dark28.x = player2.x-32;
			p2dark28.y = player2.y+32;
			p2dark28.onScreen = 1;
			p2dark28.used = 0;
		}
	},
	shoot: function(){
		if(this.cd == 0){
			p2castingBar.onScreen = 1;
			p2castingBar.cast = 30;
			p2castingBar.castmax = 30;
			this.cast = 30;
			this.cd = this.cdTop;
		}
	}
};
var p2dark22 = {
	x: -100,
	y: -200,
	width: 32,
	height: 32,
	onScreen: 0,
	frame: 0,
	arrIndex: 2,
	dir: "W"
}	
var p2dark23 = {
	x: -100,
	y: -200,
	width: 32,
	height: 32,
	onScreen: 0,
	frame: 0,
	arrIndex: 3,
	dir: "D"
}
var p2dark24 = {
	x: -100,
	y: -200,
	width: 32,
	height: 32,
	onScreen: 0,
	frame: 0,
	arrIndex: 4,
	dir: "A"
}
var p2dark25 = {
	x: -100,
	y: -200,
	width: 32,
	height: 32,
	onScreen: 0,
	frame: 0,
	arrIndex: 5,
	dir: "SD"
}
var p2dark26 = {
	x: -100,
	y: -200,
	width: 32,
	height: 32,
	onScreen: 0,
	frame: 0,
	arrIndex: 6,
	dir: "WA"
}
var p2dark27 = {
	x: -100,
	y: -200,
	width: 32,
	height: 32,
	onScreen: 0,
	frame: 0,
	arrIndex: 7,
	dir: "WD"
}
var p2dark28 = {
	x: -100,
	y: -200,
	width: 32,
	height: 32,
	onScreen: 0,
	frame: 0,
	arrIndex: 8,
	dir: "AS"
}
var p2dark29 = {
	x: -100,
	y: -200,
	width: 32,
	height: 32,
	onScreen: 0,
	frame: 0,
	arrIndex: 1,
	dir: "S"
}
var p2dark210 = {
	x: -100,
	y: -200,
	width: 32,
	height: 32,
	onScreen: 0,
	frame: 0,
	arrIndex: 2,
	dir: "W"
}
var p2dark211 = {
	x: -100,
	y: -200,
	width: 32,
	height: 32,
	onScreen: 0,
	frame: 0,
	arrIndex: 3,
	dir: "D"
}
var p2dark212 = {
	x: -100,
	y: -200,
	width: 32,
	height: 32,
	onScreen: 0,
	frame: 0,
	arrIndex: 4,
	dir: "A"
}
var p2dark213 = {
	x: -100,
	y: -200,
	width: 32,
	height: 32,
	onScreen: 0,
	frame: 0,
	arrIndex: 5,
	dir: "SD"
}
var p2dark214 = {
	x: -100,
	y: -200,
	width: 32,
	height: 32,
	onScreen: 0,
	frame: 0,
	arrIndex: 6,
	dir: "WA"
}
var p2dark215 = {
	x: -100,
	y: -200,
	width: 32,
	height: 32,
	onScreen: 0,
	frame: 0,
	arrIndex: 7,
	dir: "WD"
}
var p2dark216 = {
	x: -100,
	y: -200,
	width: 32,
	height: 32,
	onScreen: 0,
	frame: 0,
	arrIndex: 8,
	dir: "AS"
}
var p2dark217 = {
	x: -100,
	y: -200,
	width: 32,
	height: 32,
	onScreen: 0,
	frame: 0,
	arrIndex: 1,
	dir: "S"
}
var p2dark218 = {
	x: -100,
	y: -200,
	width: 32,
	height: 32,
	onScreen: 0,
	frame: 0,
	arrIndex: 2,
	dir: "W"
}
var p2dark219 = {
	x: -100,
	y: -200,
	width: 32,
	height: 32,
	onScreen: 0,
	frame: 0,
	arrIndex: 3,
	dir: "D"
}
var p2dark220 = {
	x: -100,
	y: -200,
	width: 32,
	height: 32,
	onScreen: 0,
	frame: 0,
	arrIndex: 4,
	dir: "A"
}
var p2dark221 = {
	x: -100,
	y: -200,
	width: 32,
	height: 32,
	onScreen: 0,
	frame: 0,
	arrIndex: 5,
	dir: "SD"
}
var p2dark222 = {
	x: -100,
	y: -200,
	width: 32,
	height: 32,
	onScreen: 0,
	frame: 0,
	arrIndex: 6,
	dir: "WA"
}
var p2dark223 = {
	x: -100,
	y: -200,
	width: 32,
	height: 32,
	onScreen: 0,
	frame: 0,
	arrIndex: 7,
	dir: "WD"
}
var p2dark224 = {
	x: -100,
	y: -200,
	width: 32,
	height: 32,
	onScreen: 0,
	frame: 0,
	arrIndex: 8,
	dir: "AS"
}
var p2dark225 = {
	x: -100,
	y: -200,
	width: 32,
	height: 32,
	onScreen: 0,
	frame: 0,
	arrIndex: 1,
	dir: "S"
}
var p2dark226 = {
	x: -100,
	y: -200,
	width: 32,
	height: 32,
	onScreen: 0,
	frame: 0,
	arrIndex: 2,
	dir: "W"
}
var p2dark227 = {
	x: -100,
	y: -200,
	width: 32,
	height: 32,
	onScreen: 0,
	frame: 0,
	arrIndex: 3,
	dir: "D"
}
var p2dark228 = {
	x: -100,
	y: -200,
	width: 32,
	height: 32,
	onScreen: 0,
	frame: 0,
	arrIndex: 4,
	dir: "A"
}
var p2dark229 = {
	x: -100,
	y: -200,
	width: 32,
	height: 32,
	onScreen: 0,
	frame: 0,
	arrIndex: 5,
	dir: "SD"
}
var p2dark230 = {
	x: -100,
	y: -200,
	width: 32,
	height: 32,
	onScreen: 0,
	frame: 0,
	arrIndex: 6,
	dir: "WA"
}
var p2dark231 = {
	x: -100,
	y: -200,
	width: 32,
	height: 32,
	onScreen: 0,
	frame: 0,
	arrIndex: 7,
	dir: "WD"
}
var p2dark232 = {
	x: -100,
	y: -200,
	width: 32,
	height: 32,
	onScreen: 0,
	frame: 0,
	arrIndex: 8,
	dir: "AS"
}
var p2dark233 = {
	x: -100,
	y: -200,
	width: 32,
	height: 32,
	onScreen: 0,
	frame: 0,
	arrIndex: 1,
	dir: "S"
}	
var p2dark234 = {
	x: -100,
	y: -200,
	width: 32,
	height: 32,
	onScreen: 0,
	frame: 0,
	arrIndex: 2,
	dir: "W"
}
var p2dark235 = {
	x: -100,
	y: -200,
	width: 32,
	height: 32,
	onScreen: 0,
	frame: 0,
	arrIndex: 3,
	dir: "D"
}
var p2dark236 = {
	x: -100,
	y: -200,
	width: 32,
	height: 32,
	onScreen: 0,
	frame: 0,
	arrIndex: 4,
	dir: "A"
}
var p2dark237 = {
	x: -100,
	y: -200,
	width: 32,
	height: 32,
	onScreen: 0,
	frame: 0,
	arrIndex: 5,
	dir: "SD"
}
var p2dark238 = {
	x: -100,
	y: -200,
	width: 32,
	height: 32,
	onScreen: 0,
	frame: 0,
	arrIndex: 6,
	dir: "WA"
}
var p2dark239 = {
	x: -100,
	y: -200,
	width: 32,
	height: 32,
	onScreen: 0,
	frame: 0,
	arrIndex: 7,
	dir: "WD"
}
var p2dark240 = {
	x: -100,
	y: -200,
	width: 32,
	height: 32,
	onScreen: 0,
	frame: 0,
	arrIndex: 8,
	dir: "AS"
}	
var p2dark241 = {
	x: -100,
	y: -200,
	width: 32,
	height: 32,
	onScreen: 0,
	frame: 0,
	arrIndex: 1,
	dir: "S"
}
var p2dark242 = {
	x: -100,
	y: -200,
	width: 32,
	height: 32,
	onScreen: 0,
	frame: 0,
	arrIndex: 2,
	dir: "W"
}
var p2dark243 = {
	x: -100,
	y: -200,
	width: 32,
	height: 32,
	onScreen: 0,
	frame: 0,
	arrIndex: 3,
	dir: "D"
}
var p2dark244 = {
	x: -100,
	y: -200,
	width: 32,
	height: 32,
	onScreen: 0,
	frame: 0,
	arrIndex: 4,
	dir: "A"
}
var p2dark245 = {
	x: -100,
	y: -200,
	width: 32,
	height: 32,
	onScreen: 0,
	frame: 0,
	arrIndex: 5,
	dir: "SD"
}
var p2dark246 = {
	x: -100,
	y: -200,
	width: 32,
	height: 32,
	onScreen: 0,
	frame: 0,
	arrIndex: 6,
	dir: "WA"
}
var p2dark247 = {
	x: -100,
	y: -200,
	width: 32,
	height: 32,
	onScreen: 0,
	frame: 0,
	arrIndex: 7,
	dir: "WD"
}
var p2dark248 = {
	x: -100,
	y: -200,
	width: 32,
	height: 32,
	onScreen: 0,
	frame: 0,
	arrIndex: 8,
	dir: "AS"
}
var p2dark2Spikes1 = {1: p2dark2, 2: p2dark22, 3: p2dark23, 4: p2dark24, 5: p2dark25, 6: p2dark26, 7: p2dark27, 8: p2dark28};
var p2dark2Spikes2 = {1: p2dark29, 2: p2dark210, 3: p2dark211, 4: p2dark212, 5: p2dark213, 6: p2dark214, 7: p2dark215, 8: p2dark216};
var p2dark2Spikes3 = {1: p2dark217, 2: p2dark218, 3: p2dark219, 4: p2dark220, 5: p2dark221, 6: p2dark222, 7: p2dark223, 8: p2dark224};
var p2dark2Spikes4 = {1: p2dark225, 2: p2dark226, 3: p2dark227, 4: p2dark228, 5: p2dark229, 6: p2dark230, 7: p2dark231, 8: p2dark232};
var p2dark2Spikes5 = {1: p2dark233, 2: p2dark234, 3: p2dark235, 4: p2dark236, 5: p2dark237, 6: p2dark238, 7: p2dark239, 8: p2dark240};
var p2dark2Spikes6 = {1: p2dark241, 2: p2dark242, 3: p2dark243, 4: p2dark244, 5: p2dark245, 6: p2dark246, 7: p2dark247, 8: p2dark248};
var p2dark2Spikes = {1: p2dark2, 2: p2dark22, 3: p2dark23, 4: p2dark24, 5: p2dark25, 6: p2dark26, 7: p2dark27, 8: p2dark28,
				9: p2dark29, 10: p2dark210, 11: p2dark211, 12: p2dark212, 13: p2dark213, 14: p2dark214, 15: p2dark215, 16: p2dark216,
				17: p2dark217, 18: p2dark218, 19: p2dark219, 20: p2dark220, 21: p2dark221, 22: p2dark222, 23: p2dark223, 24: p2dark224,
				25: p2dark225, 26: p2dark226, 27: p2dark227, 28: p2dark228, 29: p2dark229, 30: p2dark230, 31: p2dark231, 32: p2dark232,
				33: p2dark233, 34: p2dark234, 35: p2dark235, 36: p2dark236, 37: p2dark237, 38: p2dark238, 39: p2dark239, 40: p2dark240,
				41: p2dark241, 42: p2dark242, 43: p2dark243, 44: p2dark244, 45: p2dark245, 46: p2dark246, 47: p2dark247, 48: p2dark248};
function p2spikeDraw(S){
	if(S.onScreen == 1){
		if(S.used == 0 && (!S.arrIndex)){
			flatBoop.currentTime=0;
			flatBoop.play();
			S.used = 1;
		}
		if(S.dark1){
			if(S.active){
				ctx.drawImage(trapSheet, 160-(Math.ceil((S.timeLeft/30)*4))*32,0,32,64, S.x-S.width*0.5, S.y-S.height*0.5 - 16,32,64);
			}
			else{
				ctx.drawImage(trapSheet, 0,0,32,64,S.x-S.width*0.5, S.y-S.height*0.5 - 16,32,64);
			}
		}
		else if(S.arrIndex){
			if(S.frame < 4){
				ctx.drawImage(trapSheet, 0, 192, 32, 32, S.x-S.width*0.5, S.y-S.height*0.5, 32, 32);
			}
			else if(S.frame < 7){
				ctx.drawImage(trapSheet, 32, 192, 32, 32, S.x-S.width*0.5, S.y-S.height*0.5, 32, 32);
			}
			else if(S.frame < 10){
				ctx.drawImage(trapSheet, 64, 192, 32, 32, S.x-S.width*0.5, S.y-S.height*0.5, 32, 32);
			}
			else if(S.frame < 13){
				ctx.drawImage(trapSheet, 96, 192, 32, 32, S.x-S.width*0.5, S.y-S.height*0.5, 32, 32);
			}
			else{
				ctx.drawImage(trapSheet, 128, 192, 32, 32, S.x-S.width*0.5, S.y-S.height*0.5, 32, 32);
			}
		}
		else if(!S.ice && !S.light){
			ctx.drawImage(trapSheet, 32*(Math.floor(S.index*0.5)),64,32,64, S.x-S.width*0.5, S.y-S.height*0.5,32,64);
			S.index++;
			if(S.index > 7){
				S.index = 0;
			}
		}
		else if(S.ice){
			ctx.drawImage(trapSheet, 32*(Math.floor(S.index*0.5)), 128,32,64,S.x-S.width*0.5, S.y-S.height*0.5,32,64);
			S.index++;
			if(S.index > 10){
				S.index = 0;
			}
		}
		else if(S.light){
			ctx.drawImage(darklightningimg[Math.floor(S.index*0.5)], S.x-S.width*0.5, S.y-S.height*0.5);
			S.index++;
			if(S.index > 5){
				S.index = 0;
			}
		}
	}
	if(S.light){
		if(S.timeLeft > 0){
			S.timeLeft-=1;
		}
		if(S.timeLeft == 0){
			S.timeLeft-=1;
			S.x = -100;
			S.y = -200;
			S.onScreen = 0;
			p2darklightning.inventory+=1;
			S.active = false;
		}
	}	
}
function p2spikeMove(S){
	if(S.cd > 0){
		S.cd-=1;
	}
	if(S.onScreen == 1){
		for(D in p2dark2Spikes){
			if(S == p2dark2Spikes[D]){
				S.frame++;
				if(S.frame == 15){
					S.onScreen = 0;
					S.x = -100;
					S.y = -200;
					S.frame = 0;
				}
				if(S.frame == 7){
					if(S == p2dark2Spikes1[S.arrIndex]){
						if(S.dir == "W"){
							p2dark2Spikes2[S.arrIndex].x = S.x;
							p2dark2Spikes2[S.arrIndex].y = S.y - 48;
							p2dark2Spikes2[S.arrIndex].onScreen = 1;
						}
						if(S.dir == "A"){
							p2dark2Spikes2[S.arrIndex].x = S.x - 48;
							p2dark2Spikes2[S.arrIndex].y = S.y;
							p2dark2Spikes2[S.arrIndex].onScreen = 1;
						}
						if(S.dir == "S"){
							p2dark2Spikes2[S.arrIndex].x = S.x;
							p2dark2Spikes2[S.arrIndex].y = S.y + 48;
							p2dark2Spikes2[S.arrIndex].onScreen = 1;
						}
						if(S.dir == "D"){
							p2dark2Spikes2[S.arrIndex].x = S.x + 48;
							p2dark2Spikes2[S.arrIndex].y = S.y;
							p2dark2Spikes2[S.arrIndex].onScreen = 1;
						}
						if(S.dir == "WD"){
							p2dark2Spikes2[S.arrIndex].x = S.x + 32;
							p2dark2Spikes2[S.arrIndex].y = S.y - 32;
							p2dark2Spikes2[S.arrIndex].onScreen = 1;
						}
						if(S.dir == "WA"){
							p2dark2Spikes2[S.arrIndex].x = S.x - 32;
							p2dark2Spikes2[S.arrIndex].y = S.y - 32;
							p2dark2Spikes2[S.arrIndex].onScreen = 1;
						}
						if(S.dir == "AS"){
							p2dark2Spikes2[S.arrIndex].x = S.x - 32;
							p2dark2Spikes2[S.arrIndex].y = S.y + 32;
							p2dark2Spikes2[S.arrIndex].onScreen = 1;
						}
						if(S.dir == "SD"){
							p2dark2Spikes2[S.arrIndex].x = S.x + 32;
							p2dark2Spikes2[S.arrIndex].y = S.y + 32;
							p2dark2Spikes2[S.arrIndex].onScreen = 1;
						}
					}
					if(S == p2dark2Spikes2[S.arrIndex]){
						if(S.dir == "W"){
							p2dark2Spikes3[S.arrIndex].x = S.x;
							p2dark2Spikes3[S.arrIndex].y = S.y - 48;
							p2dark2Spikes3[S.arrIndex].onScreen = 1;
						}
						if(S.dir == "A"){
							p2dark2Spikes3[S.arrIndex].x = S.x - 48;
							p2dark2Spikes3[S.arrIndex].y = S.y;
							p2dark2Spikes3[S.arrIndex].onScreen = 1;
						}
						if(S.dir == "S"){
							p2dark2Spikes3[S.arrIndex].x = S.x;
							p2dark2Spikes3[S.arrIndex].y = S.y + 48;
							p2dark2Spikes3[S.arrIndex].onScreen = 1;
						}
						if(S.dir == "D"){
							p2dark2Spikes3[S.arrIndex].x = S.x + 48;
							p2dark2Spikes3[S.arrIndex].y = S.y;
							p2dark2Spikes3[S.arrIndex].onScreen = 1;
						}
						if(S.dir == "WD"){
							p2dark2Spikes3[S.arrIndex].x = S.x + 32;
							p2dark2Spikes3[S.arrIndex].y = S.y - 32;
							p2dark2Spikes3[S.arrIndex].onScreen = 1;
						}
						if(S.dir == "WA"){
							p2dark2Spikes3[S.arrIndex].x = S.x - 32;
							p2dark2Spikes3[S.arrIndex].y = S.y - 32;
							p2dark2Spikes3[S.arrIndex].onScreen = 1;
						}
						if(S.dir == "AS"){
							p2dark2Spikes3[S.arrIndex].x = S.x - 32;
							p2dark2Spikes3[S.arrIndex].y = S.y + 32;
							p2dark2Spikes3[S.arrIndex].onScreen = 1;
						}
						if(S.dir == "SD"){
							p2dark2Spikes3[S.arrIndex].x = S.x + 32;
							p2dark2Spikes3[S.arrIndex].y = S.y + 32;
							p2dark2Spikes3[S.arrIndex].onScreen = 1;
						}
					}
					if(S == p2dark2Spikes3[S.arrIndex]){
						if(S.dir == "W"){
							p2dark2Spikes4[S.arrIndex].x = S.x;
							p2dark2Spikes4[S.arrIndex].y = S.y - 48;
							p2dark2Spikes4[S.arrIndex].onScreen = 1;
						}
						if(S.dir == "A"){
							p2dark2Spikes4[S.arrIndex].x = S.x - 48;
							p2dark2Spikes4[S.arrIndex].y = S.y;
							p2dark2Spikes4[S.arrIndex].onScreen = 1;
						}
						if(S.dir == "S"){
							p2dark2Spikes4[S.arrIndex].x = S.x;
							p2dark2Spikes4[S.arrIndex].y = S.y + 48;
							p2dark2Spikes4[S.arrIndex].onScreen = 1;
						}
						if(S.dir == "D"){
							p2dark2Spikes4[S.arrIndex].x = S.x + 48;
							p2dark2Spikes4[S.arrIndex].y = S.y;
							p2dark2Spikes4[S.arrIndex].onScreen = 1;
						}
						if(S.dir == "WD"){
							p2dark2Spikes4[S.arrIndex].x = S.x + 32;
							p2dark2Spikes4[S.arrIndex].y = S.y - 32;
							p2dark2Spikes4[S.arrIndex].onScreen = 1;
						}
						if(S.dir == "WA"){
							p2dark2Spikes4[S.arrIndex].x = S.x - 32;
							p2dark2Spikes4[S.arrIndex].y = S.y - 32;
							p2dark2Spikes4[S.arrIndex].onScreen = 1;
						}
						if(S.dir == "AS"){
							p2dark2Spikes4[S.arrIndex].x = S.x - 32;
							p2dark2Spikes4[S.arrIndex].y = S.y + 32;
							p2dark2Spikes4[S.arrIndex].onScreen = 1;
						}
						if(S.dir == "SD"){
							p2dark2Spikes4[S.arrIndex].x = S.x + 32;
							p2dark2Spikes4[S.arrIndex].y = S.y + 32;
							p2dark2Spikes4[S.arrIndex].onScreen = 1;
						}
					}
					if(S == p2dark2Spikes4[S.arrIndex]){
						if(S.dir == "W"){
							p2dark2Spikes5[S.arrIndex].x = S.x;
							p2dark2Spikes5[S.arrIndex].y = S.y - 48;
							p2dark2Spikes5[S.arrIndex].onScreen = 1;
						}
						if(S.dir == "A"){
							p2dark2Spikes5[S.arrIndex].x = S.x - 48;
							p2dark2Spikes5[S.arrIndex].y = S.y;
							p2dark2Spikes5[S.arrIndex].onScreen = 1;
						}
						if(S.dir == "S"){
							p2dark2Spikes5[S.arrIndex].x = S.x;
							p2dark2Spikes5[S.arrIndex].y = S.y + 48;
							p2dark2Spikes5[S.arrIndex].onScreen = 1;
						}
						if(S.dir == "D"){
							p2dark2Spikes5[S.arrIndex].x = S.x + 48;
							p2dark2Spikes5[S.arrIndex].y = S.y;
							p2dark2Spikes5[S.arrIndex].onScreen = 1;
						}
						if(S.dir == "WD"){
							p2dark2Spikes5[S.arrIndex].x = S.x + 32;
							p2dark2Spikes5[S.arrIndex].y = S.y - 32;
							p2dark2Spikes5[S.arrIndex].onScreen = 1;
						}
						if(S.dir == "WA"){
							p2dark2Spikes5[S.arrIndex].x = S.x - 32;
							p2dark2Spikes5[S.arrIndex].y = S.y - 32;
							p2dark2Spikes5[S.arrIndex].onScreen = 1;
						}
						if(S.dir == "AS"){
							p2dark2Spikes5[S.arrIndex].x = S.x - 32;
							p2dark2Spikes5[S.arrIndex].y = S.y + 32;
							p2dark2Spikes5[S.arrIndex].onScreen = 1;
						}
						if(S.dir == "SD"){
							p2dark2Spikes5[S.arrIndex].x = S.x + 32;
							p2dark2Spikes5[S.arrIndex].y = S.y + 32;
							p2dark2Spikes5[S.arrIndex].onScreen = 1;
						}
					}
					if(S == p2dark2Spikes5[S.arrIndex]){
						if(S.dir == "W"){
							p2dark2Spikes6[S.arrIndex].x = S.x;
							p2dark2Spikes6[S.arrIndex].y = S.y - 48;
							p2dark2Spikes6[S.arrIndex].onScreen = 1;
						}
						if(S.dir == "A"){
							p2dark2Spikes6[S.arrIndex].x = S.x - 48;
							p2dark2Spikes6[S.arrIndex].y = S.y;
							p2dark2Spikes6[S.arrIndex].onScreen = 1;
						}
						if(S.dir == "S"){
							p2dark2Spikes6[S.arrIndex].x = S.x;
							p2dark2Spikes6[S.arrIndex].y = S.y + 48;
							p2dark2Spikes6[S.arrIndex].onScreen = 1;
						}
						if(S.dir == "D"){
							p2dark2Spikes6[S.arrIndex].x = S.x + 48;
							p2dark2Spikes6[S.arrIndex].y = S.y;
							p2dark2Spikes6[S.arrIndex].onScreen = 1;
						}
						if(S.dir == "WD"){
							p2dark2Spikes6[S.arrIndex].x = S.x + 32;
							p2dark2Spikes6[S.arrIndex].y = S.y - 32;
							p2dark2Spikes6[S.arrIndex].onScreen = 1;
						}
						if(S.dir == "WA"){
							p2dark2Spikes6[S.arrIndex].x = S.x - 32;
							p2dark2Spikes6[S.arrIndex].y = S.y - 32;
							p2dark2Spikes6[S.arrIndex].onScreen = 1;
						}
						if(S.dir == "AS"){
							p2dark2Spikes6[S.arrIndex].x = S.x - 32;
							p2dark2Spikes6[S.arrIndex].y = S.y + 32;
							p2dark2Spikes6[S.arrIndex].onScreen = 1;
						}
						if(S.dir == "SD"){
							p2dark2Spikes6[S.arrIndex].x = S.x + 32;
							p2dark2Spikes6[S.arrIndex].y = S.y + 32;
							p2dark2Spikes6[S.arrIndex].onScreen = 1;
						}
					}
				}
			}
		}
		for(D in p2darkSpikes){
			if(S == p2darkSpikes[D] && S.active){
				if(S.timeLeft > -1){
					S.timeLeft-=1;
				}
				if(S.timeLeft == 0){
					S.timeLeft-=1;
					S.onScreen = 0;
					S.x = -100;
					S.y = -200;
					S.active = false;
					p2dark.inventory+=1;
				}
			}
		}
		for (E in AllEnemies){
			if(collision(AllEnemies[E].dir, AllEnemies[E], S) && AllEnemies[E].onTree == 0){
				player2.currpower = player2.power;
				if(S.arrIndex){
					player2.power = player2.maxhp-player2.hp + 1;
				}
				else{
					player2.power+=1;
				}
				onHit(AllEnemies[E]);
				player2.power = player2.currpower;
				for(D in p2darkSpikes){
					if(S == p2darkSpikes[D] && !S.active && AllEnemies[E].onTree == 0){
						S.active = true;
						S.timeLeft = 30;
						Explosion.currentTime = 0;
						Explosion.play();
						
					}
				}
			}
		}
	}
}
//attack
var p2arrow = {
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
var p2arrow2 = {
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
var p2arrow3 = {
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
var p2arrow4 = {
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
var p2Light2Arrows = {1: p2arrow2, 2: p2arrow3, 3: p2arrow4};
//angel
var p2light = {
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
				if(Math.sqrt((player2.x-this.x)*(player2.x- this.x) + (player2.y-this.y)*(player2.y-this.y)) > 96){
					if(player2.x-player2.width*0.5 < this.x-this.width*0.5){
						if(this.dir != "A"){
							this.dirSwitch = true;
							this.destDir = "A";
						}
						var playerSlope = (this.y-player2.y)/(this.x-player2.x);
					}
					else if(player2.x - player2.width*0.5 == this.x - this.width*0.5){
						this.dir = this.dir;
					}
					else{
						if(this.dir != "D"){
							this.dirSwitch = true;
							this.destDir = "D";
						}
						var playerSlope = (player2.y-this.y)/(player2.x-this.x);
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
						if(this.x >= player2.x - player2.width*0.5 && this.x <= player2.x + player2.width*0.5){
							if(this.y-this.height*0.5 > player2.y - player2.height*0.5){
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
			if(!p2arrow.timeLeft){
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
								p2arrow.x = this.x;
								p2arrow.y = this.y;
								p2arrow.timeLeft = 60;
								p2arrow.dir = tempArrow.dir;
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
								p2arrow.x = this.x;
								p2arrow.y = this.y;
								p2arrow.timeLeft = 60;
								p2arrow.dir = tempArrow.dir;
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
								p2arrow.x = this.x;
								p2arrow.y = this.y;
								p2arrow.timeLeft = 60;
								p2arrow.dir = tempArrow.dir;
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
								p2arrow.x = this.x;
								p2arrow.y = this.y;
								p2arrow.timeLeft = 60;
								p2arrow.dir = tempArrow.dir;
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
								p2arrow.x = this.x;
								p2arrow.y = this.y;
								p2arrow.timeLeft = 60;
								p2arrow.dir = tempArrow.dir;
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
								p2arrow.x = this.x;
								p2arrow.y = this.y;
								p2arrow.timeLeft = 60;
								p2arrow.dir = tempArrow.dir;
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
								p2arrow.x = this.x;
								p2arrow.y = this.y;
								p2arrow.timeLeft = 60;
								p2arrow.dir = temparrow.dir;
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
								p2arrow.x = this.x;
								p2arrow.y = this.y;
								p2arrow.timeLeft = 60;
								p2arrow.dir = tempArrow.dir;
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
			this.x = player2.x;
			this.y = player2.y;
			this.onScreen = 1;
			this.timeLeft = 450;
			this.width2 = 32;
			this.height2 = 32;
			this.frame = 0;
			this.cd = this.cdTop;
		}
	}
};

//--------------------------------------------------------------------- Light2 ------------------------------------------------------//
//angel
var p2light2 = {
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
			this.x = player2.x;
			this.y = player2.y;
			this.onScreen = 1;
			this.timeLeft = 450;
			this.width2 = 32;
			this.height2 = 32;
			this.frame = 0;
			this.cd = this.cdTop;
			
			p2light3.x = player2.x-32;
			p2light3.y = player2.y-32;
			p2light3.onScreen = 1;
			p2light3.timeLeft = 450;
			p2light3.width2 = 32;
			p2light3.height2 = 32;
			p2light3.frame = 0;
			
			p2light4.x = player2.x+32;
			p2light4.y = player2.y-32;
			p2light4.onScreen = 1;
			p2light4.timeLeft = 450;
			p2light4.width2 = 32;
			p2light4.height2 = 32;
			p2light4.frame = 0;
		}
	}
};
var p2light3 = {
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
var p2light4 = {
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
var p2AllLight2 = {1: p2light2, 2: p2light3, 3: p2light4};
function p2AllLightFns(L){
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
			if(Math.sqrt((player2.x-L.x)*(player2.x- L.x) + (player2.y-L.y)*(player2.y-L.y)) > 96){
				if(player2.x-player2.width*0.5 < L.x-L.width*0.5){
					if(L.dir != "A"){
						L.dirSwitch = true;
						L.destDir = "A";
					}
					var playerSlope = (L.y-player2.y)/(L.x-player2.x);
				}
				else if(player2.x - player2.width*0.5 == L.x - L.width*0.5){
					L.dir = L.dir;
				}
				else{
					if(L.dir != "D"){
						L.dirSwitch = true;
						L.destDir = "D";
					}
					var playerSlope = (player2.y-L.y)/(player2.x-L.x);
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
					if(L.x >= player2.x - player2.width*0.5 && L.x <= player2.x + player2.width*0.5){
						if(L.y-L.height*0.5 > player2.y - player2.height*0.5){
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
var p2fireice = {
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
				this.x = player2.x;
				this.y = player2.y;
				if(player2.w){
					this.dir = "W";
				}
				if(player2.a){
					this.dir = "A";
				}
				if(player2.s){
					this.dir = "S";
				}
				if(player2.d){
					this.dir = "D";
				}
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
var p2fireice2 = {
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
		this.x = player2.x;
		this.y = player2.y;
		if(player2.w){
			this.dir = "W";
		}
		if(player2.a){
			this.dir = "A";
		}
		if(player2.s){
			this.dir = "S";
		}
		else{
			this.dir = "D";
		}
		this.frame = 0;
		this.onScreen = 1;
		this.color = this.color1;
		this.state = 0;
	}
	
};
var p2fireheal = {
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
			var currentEarthcd = p2earth.cd;
			var currentFirecd = p2fire.cd;
			p2fire.cd = 0;
			p2earth.cd = 0;
			p2fire.shoot();
			p2earth.shoot();
			p2fire.cd = currentFirecd;
			p2earth.cd = currentEarthcd;
			p2fire.cast = 20;
		}
	}	
};
// Ice+Heal: Heals user by 1 and casts Ice
var p2iceheal = {
	cd: 0,
	cdTop: 450,
	tick: function(){
		if(this.cd > 0){
			this.cd-=1;
		}
	},
	shoot: function(){
		if(this.cd == 0){
			var currentEarthcd = p2earth.cd;
			var currentIcecd = p2ice.cd;
			this.cd = this.cdTop;
			p2ice.cd = 0;
			p2earth.cd = 0;
			p2ice.shoot();
			p2earth.shoot();
			p2ice.cd = currentIcecd;
			p2earth.cd = currentEarthcd;
			p2ice.cast = 20;
		}
	}	
};
var p2firelightning = {
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
				ctx.drawImage(hlightning1, this.hx - this.hwidth*0.5, player2.y - this.hheight*0.5);
				this.hstate+=1;
			}
			else if(this.hstate == 1){
				ctx.drawImage(hlightning2, this.hx - this.hwidth*0.5, player2.y - this.hheight*0.5);
				this.hstate+=1;
			}
			else if(this.hstate == 2){
				ctx.drawImage(hlightning3, this.hx - this.hwidth*0.5, player2.y - this.hheight*0.5);
				this.hstate=0;
			}
			if(this.vstate == 0){
					ctx.drawImage(vlightning1, player2.x-this.vwidth*0.5, this.vy - this.vheight*0.5);
					this.vstate+=1;
			}
			else if(this.vstate == 1){
					ctx.drawImage(vlightning2, player2.x-this.vwidth*0.5, this.vy - this.vheight*0.5);
					this.vstate+=1;
			}
			else if(this.vstate == 2){
					ctx.drawImage(vlightning3, player2.x-this.vwidth*0.5, this.vy - this.vheight*0.5);
					this.vstate=0;
			}
		}
	},
	effect: function(){
		if(this.cd > 0){
			this.cd-=1;
			this.vx = player2.x;
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
				if(this.framecd <= 0 && AllEnemies[E].x >= player2.x && AllEnemies[E].x <= player2.x + this.vwidth && AllEnemies[E].onScreen == 1
					|| (player2.x >= AllEnemies[E].x - AllEnemies[E].width*0.5 && player2.x <= AllEnemies[E].x + AllEnemies[E].width*0.5)){
					if(p2firelightningf1.x == -1000){
						p2firelightningf1.x = AllEnemies[E].x;
						p2firelightningf1.y = AllEnemies[E].y;
						p2firelightningf1.shoot();
						this.framecd = 10;
					}
					else if(p2firelightningf2.x == -1000){
						p2firelightningf2.x = AllEnemies[E].x;
						p2firelightningf2.y = AllEnemies[E].y;
						p2firelightningf2.shoot();
						this.framecd = 10;
					}
					else if(p2firelightningf3.x == -1000){
						p2firelightningf3.x = AllEnemies[E].x;
						p2firelightningf3.y = AllEnemies[E].y;
						p2firelightningf3.shoot();
						this.framecd = 10;
					}
					else if(p2firelightningf4.x == -1000){
						p2firelightningf4.x = AllEnemies[E].x;
						p2firelightningf4.y = AllEnemies[E].y;
						p2firelightningf4.shoot();
						this.framecd = 10;
					}
				}
			}			
			for (E in AllEnemies){
				if(this.framecd <= 0 && AllEnemies[E].y <= player2.y + this.hheight && AllEnemies[E].y >= player2.y && AllEnemies[E].onScreen == 1
					|| (player2.y >= AllEnemies[E].y - AllEnemies[E].height*0.5 && player2.y <= AllEnemies[E].y + AllEnemies[E].height*0.5)){
					if(p2firelightningf1.x == -1000){
						p2firelightningf1.x = AllEnemies[E].x;
						p2firelightningf1.y = AllEnemies[E].y;
						p2firelightningf1.shoot();
						this.framecd = 10;
					}
					else if(p2firelightningf2.x == -1000){
						p2firelightningf2.x = AllEnemies[E].x;
						p2firelightningf2.y = AllEnemies[E].y;
						p2firelightningf2.shoot();
						this.framecd = 10;
					}
					else if(p2firelightningf3.x == -1000){
						p2firelightningf3.x = AllEnemies[E].x;
						p2firelightningf3.y = AllEnemies[E].y;
						p2firelightningf3.shoot();
						this.framecd = 10;
					}
					else if(p2firelightningf4.x == -1000){
						p2firelightningf4.x = AllEnemies[E].x;
						p2firelightningf4.y = AllEnemies[E].y;
						p2firelightningf4.shoot();
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
		this.vx = player2.x;
		this.hy = player2.y;
		this.cd = this.cdTop;
		this.timeLeft = 150;
		this.cast = 20;
		p2castingBar.onScreen = 1;
		p2castingBar.cast = 20;
		p2castingBar.castmax = 20;
		this.used = 0;
	}
	}
	
};
var p2firelightningf1 = {
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
var p2firelightningf2 = {
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
var p2firelightningf3 = {
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
var p2firelightningf4 = {
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
var p2fireLightnings = {1: p2firelightningf1, 2: p2firelightningf2, 3: p2firelightningf3, 4: p2firelightningf4};
var p2vertil = {
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
var p2vertil2 = {
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
var p2vertil3 = {
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
var p2vertil4 = {
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
var p2vertil5 = {
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
var p2horil = {
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
var p2horil2 = {
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
var p2horil3 = {
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
var p2horil4 = {
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
var p2horil5 = {
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
function p2vertilDraw(V){
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
function p2horilDraw(H){
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
var p2webhoril = {1: p2horil5, 2: p2horil4, 3: p2horil3, 4: p2horil2, 5: p2horil};
var p2webvertil = {1: p2vertil5, 2: p2vertil4, 3: p2vertil3, 4: p2vertil2, 5: p2vertil};
var p2icelightning = {
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
			for(H in p2webhoril){
				p2webhoril[H].split = 0;
				p2webhoril[H].frame = 0;
				p2webhoril[H].onScreen = 0;
				p2webhoril[H].x = -2000;
				p2webhoril[H].y = -2000;
				p2webhoril[H].width = 16;
				p2webhoril[H].height = 16;
			}
			for(V in p2webvertil){
				p2webvertil[V].split = 0;
				p2webvertil[V].frame = 0;
				p2webvertil[V].onScreen = 0;
				p2webvertil[V].x = -2000;
				p2webvertil[V].y = -2000;
				p2webvertil[V].width = 16;
				p2webvertil[V].height = 16;
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
			for(A in p2webvertil){
				for(E in this.AllEnemiesil){
					if(this.AllEnemiesil[E].type != "Meteor"  && this.AllEnemiesil[E].type != -2 && this.AllEnemiesil[E].type != -3 && this.AllEnemiesil[E].type != -4 && this.AllEnemiesil[E].type != -5){
						if(collision(this.AllEnemiesil[E].dir, this.AllEnemiesil[E], p2webvertil[A])){
							//Spawn more webs
							if(p2horil2.onScreen == 0 && p2horil2.split == 0){
								p2horil2.x = this.AllEnemiesil[E].x;
								p2horil2.y = this.AllEnemiesil[E].y;
								p2horil2.frame = 0;
								p2horil2.onScreen = 1;
								p2horil2.split = 1;
								delete this.AllEnemiesil[E];
							}
							else if(p2horil3.onScreen == 0 && p2horil3.split == 0){
								p2horil3.x = this.AllEnemiesil[E].x;
								p2horil3.y = this.AllEnemiesil[E].y;
								p2horil3.frame = 0;
								p2horil3.onScreen = 1;
								p2horil3.split = 1;
								delete this.AllEnemiesil[E];
							}
							else if(p2horil4.onScreen == 0 && p2horil4.split == 0){
								p2horil4.x = this.AllEnemiesil[E].x;
								p2horil4.y = this.AllEnemiesil[E].y;
								p2horil4.frame = 0;
								p2horil4.onScreen = 1;
								p2horil4.split = 1;
								delete this.AllEnemiesil[E];
							}
							else if(p2horil5.onScreen == 0 && p2horil5.split == 0){
								p2horil5.x = this.AllEnemiesil[E].x;
								p2horil5.y = this.AllEnemiesil[E].y;
								p2horil5.frame = 0;
								p2horil5.onScreen = 1;
								p2horil5.split = 1;
								delete this.AllEnemiesil[E];
							}
						}
					}
				}
			}
			for(A in p2webhoril){
				for(E in this.AllEnemiesil){
					if(this.AllEnemiesil[E].type != "Meteor"  && this.AllEnemiesil[E].type != -2 && this.AllEnemiesil[E].type != -3 && this.AllEnemiesil[E].type != -4 && this.AllEnemiesil[E].type != -5){
						if(collision(this.AllEnemiesil[E].dir, this.AllEnemiesil[E], p2webhoril[A])){
							//Spawn more webs
							if(p2vertil2.onScreen == 0 && p2vertil2.split == 0){
								p2vertil2.x = this.AllEnemiesil[E].x;
								p2vertil2.y = this.AllEnemiesil[E].y;
								p2vertil2.frame = 0;
								p2vertil2.onScreen = 1;
								p2vertil2.split = 1;
								delete this.AllEnemiesil[E];
							}
							else if(p2vertil3.onScreen == 0 && p2vertil3.split == 0){
								p2vertil3.x = this.AllEnemiesil[E].x;
								p2vertil3.y = this.AllEnemiesil[E].y;
								p2vertil3.frame = 0;
								p2vertil3.onScreen = 1;
								p2vertil3.split = 1;
								delete this.AllEnemiesil[E];
							}
							else if(p2vertil4.onScreen == 0 && p2vertil4.split == 0){
								p2vertil4.x = this.AllEnemiesil[E].x;
								p2vertil4.y = this.AllEnemiesil[E].y;
								p2vertil4.frame = 0;
								p2vertil4.onScreen = 1;
								p2vertil4.split = 1;
								delete this.AllEnemiesil[E];
							}
							else if(p2vertil5.onScreen == 0 && p2vertil5.split == 0){
								p2vertil5.x = this.AllEnemiesil[E].x;
								p2vertil5.y = this.AllEnemiesil[E].y;
								p2vertil5.frame = 0;
								p2vertil5.onScreen = 1;
								p2vertil5.split = 1;
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
			p2vertil.x = player2.x
			p2vertil.y = player2.y
			p2vertil.frame = 0;
			p2vertil.onScreen = 1;
			p2horil.x = player2.x
			p2horil.y = player2.y
			p2horil.frame = 0;
			p2horil.onScreen = 1;
			this.cd = this.cdTop;
			this.timeLeft = 300;
			this.AllEnemiesil = AllEnemies;
		}
	}
};
// Lightning+Heal: Heals user by 1 and casts Lightning
var p2lightningheal = {
	cd: 0,
	cdTop: 600,
	tick: function(){
		if(this.cd > 0){
			this.cd-=1;
		}
	},
	shoot: function(){
		if(this.cd == 0){
			var currentEarthcd = p2earth.cd;
			var currentLightningcd = p2lightning.cd;
			this.cd = this.cdTop;
			p2lightning.cd = 0;
			p2earth.cd = 0;
			p2lightning.shoot();
			p2earth.shoot();
			p2lightning.cd = currentLightningcd;
			p2earth.cd = currentEarthcd;
			p2lightning.cast = 20;
		}
	}	
};
var p2airfire = {
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
			ctx.fillRect(this.ox - player2.width * 0.5,
				this.oy - player2.height * 0.5,
				player2.width, player2.height);
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
			p2airfire12.x = this.ox;
			p2airfire12.y = this.oy;
			p2airfire12.shoot();
		}
		if(this.frame == 10){
			p2airfire13.x = this.ox;
			p2airfire13.y = this.oy;
			p2airfire13.shoot();
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
		this.x = player2.x;
		this.y = player2.y;
		this.ox = player2.x;
		this.oy = player2.y;
		if(player2.w){
			this.dir = "W";
		}
		else if(player2.a){
			this.dir = "A";
		}
		else if(player2.s){
			this.dir = "S";
		}
		else{
			this.dir = "D";
		}
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
var p2airfire12 = {
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
		this.dir = p2airfire.dir;
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

var p2airfire13 = {
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
		this.dir = p2airfire.dir;
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
var p2airice = {
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
			this.x = player2.x;
			this.y = player2.y;
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
		this.x = player2.x;
		this.y = player2.y;
		this.cd = this.cdTop;
		this.width = 64;
		this.height = 64;
		this.onScreen = 1;
		this.timeLeft = 150;
		p2castingBar.onScreen = 1;
		p2castingBar.cast = 30;
		p2castingBar.castmax = 30;
		this.cast = 30;
		p2ice.cd = 0;
		p2ice.cast = 30;
		p2ice.shoot();
		this.used = 0;
	}
	}
};
var p2airearth = {
	cd: 0,
	cdTop: 300,
	tick: function(){
		if(this.cd > 0){
			this.cd-=1;
		}
	},
	shoot: function(){
		if(this.cd == 0){
			var currentEarthcd = p2earth.cd;
			var currentAircd = p2air.cd;
			this.cd = this.cdTop;
			p2air.cd = 0;
			p2earth.cd = 0;
			p2air.shoot();
			p2earth.shoot();
			p2air.cd = currentAircd;
			p2earth.cd = currentEarthcd;
			p2air.cast = 20;
		}
	}	
};
var p2airlightning = {
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
		if(!(player2.spell1 == "Air" && player2.spell2 == "Lightning") && !(player2.spell1 == "Lightning" && player2.spell2 == "Air")){
			this.onScreen = 0;
		}
		if(this.onScreen == 1 && ((player2.spell1 == "Air" && player2.spell2 == "Lightning") || (player2.spell1 == "Lightning" && player2.spell2 == "Air"))){
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
		p2air.cd = 0;
		p2air.shoot();
		p2air.cd = 0;
	}
	}
	
};
var p2mysticearth = {
	cd: 0,
	cdTop: 300,
	tick: function(){
		if(this.cd > 0){
			this.cd-=1;
		}
	},
	shoot: function(){
		if(this.cd == 0){
			var currentEarthcd = p2earth.cd;
			var currentMysticcd = p2mystic.cd;
			var prevCd = cd;
			this.cd = this.cdTop;
			p2mystic.cd = 0;
			p2earth.cd = 0;
			p2mystic.shoot();
			p2earth.shoot();
			p2earth.cast = 0;
			p2castingBar.onScreen = 0;
			p2castingBar.cast = -1;
			p2mystic.cd = currentMysticcd;
			p2earth.cd = currentEarthcd;
		}
	}	
};
var p2waterfire = {
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
			if(((player2.spell1 == "Water" && player2.spell2 == "Fire") || (player2.spell1 == "Fire" && player2.spell2 == "Water"))){
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
			if(((player2.spell1 == "Water" && player2.spell2 == "Ice") || (player2.spell1 == "Ice" && player2.spell2 == "Water"))){
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
					if(((player2.spell1 == "Water" && player2.spell2 == "Fire") || (player2.spell1 == "Fire" && player2.spell2 == "Water"))){
						p2Wfire.x = this.x;
						p2Wfire.y = this.y;
						p2Wfire.onScreen = 1;
						p2Wfire.shoot();
					}	
					else if(((player2.spell1 == "Water" && player2.spell2 == "Ice") || (player2.spell1 == "Ice" && player2.spell2 == "Water"))){
						p2IBubble.x = this.x;
						p2IBubble.y = this.y;
						p2IBubble.onScreen = 1;
						p2IBubble.frame = 0;
					}
					this.onScreen = 0;
				}
			}
			if(obsCollision(obstacle1, this, this.dir) || obsCollision(obstacle2, this, this.dir) || obsCollision(obstacle3, this, this.dir)
				|| this.x < 8 || this.y < 8 || this.x > 792 || this.y > 568){
				if(((player2.spell1 == "Water" && player2.spell2 == "Fire") || (player2.spell1 == "Fire" && player2.spell2 == "Water"))){
					p2Wfire.x = this.x;
					p2Wfire.y = this.y;
					p2Wfire.onScreen = 1;
					p2Wfire.shoot();
				}
				else if(((player2.spell1 == "Water" && player2.spell2 == "Ice") || (player2.spell1 == "Ice" && player2.spell2 == "Water"))){
					p2IBubble.x = this.x;
					p2IBubble.y = this.y;
					p2IBubble.onScreen = 1;
					p2IBubble.frame = 0;
				}
				this.x = -100;
				this.y = -200;
				this.onScreen = 0;
			}
		}
	},
	// Spawn
	shoot: function(){
	if(((player2.spell1 == "Water" && player2.spell2 == "Fire") || (player2.spell1 == "Fire" && player2.spell2 == "Water"))){
		if(this.cd == 0){
			this.x = player2.x;
			this.y = player2.y;
			this.dir = "W";
			this.cd = this.cdTop;
			this.onScreen = 1;
			this.played=0;
			for(W in p2waterFires){
				p2waterFires[W].used = 0;
			}
			p2waterfire2.shoot();
			p2waterfire3.shoot();
			p2waterfire4.shoot();
			p2waterfire5.shoot();
			p2waterfire6.shoot();
			p2waterfire7.shoot();
			p2waterfire8.shoot();
		}
	}
	else if(((player2.spell1 == "Water" && player2.spell2 == "Ice") || (player2.spell1 == "Ice" && player2.spell2 == "Water"))){
		if(this.cd2 == 0){
			this.x = player2.x;
			this.y = player2.y;
			this.dir = "W";
			this.played=0;
			this.cd2 = this.cd2Top;
			this.onScreen = 1;
			for(W in p2waterFires){
				p2waterFires[W].used = 0;
			}
			p2waterfire2.shoot();
			p2waterfire3.shoot();
			p2waterfire4.shoot();
			p2waterfire5.shoot();
			p2waterfire6.shoot();
			p2waterfire7.shoot();
			p2waterfire8.shoot();
		}
	}
	}
};
var p2waterfire2 = {
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
			if(((player2.spell1 == "Water" && player2.spell2 == "Fire") || (player2.spell1 == "Fire" && player2.spell2 == "Water"))){
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
			if(((player2.spell1 == "Water" && player2.spell2 == "Ice") || (player2.spell1 == "Ice" && player2.spell2 == "Water"))){
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
					if(((player2.spell1 == "Water" && player2.spell2 == "Fire") || (player2.spell1 == "Fire" && player2.spell2 == "Water"))){
						p2Wfire2.x = this.x;
						p2Wfire2.y = this.y;
						p2Wfire2.onScreen = 1;
						p2Wfire2.shoot();
					}	
					else if(((player2.spell1 == "Water" && player2.spell2 == "Ice") || (player2.spell1 == "Ice" && player2.spell2 == "Water"))){
						p2IBubble2.x = this.x;
						p2IBubble2.y = this.y;
						p2IBubble2.onScreen = 1;
						p2IBubble2.frame = 0;
					}
					this.onScreen = 0;
				}
			}
			if(obsCollision(obstacle1, this, this.dir) || obsCollision(obstacle2, this, this.dir) || obsCollision(obstacle3, this, this.dir)
				|| this.x < 8 || this.y < 8 || this.x > 792 || this.y > 568){
				if(((player2.spell1 == "Water" && player2.spell2 == "Fire") || (player2.spell1 == "Fire" && player2.spell2 == "Water"))){
					p2Wfire2.x = this.x;
					p2Wfire2.y = this.y;
					p2Wfire2.onScreen = 1;
					p2Wfire2.shoot();
				}
				else if(((player2.spell1 == "Water" && player2.spell2 == "Ice") || (player2.spell1 == "Ice" && player2.spell2 == "Water"))){
					p2IBubble2.x = this.x;
					p2IBubble2.y = this.y;
					p2IBubble2.onScreen = 1;
					p2IBubble2.frame = 0;
				}
				this.x = -100;
				this.y = -200;
				this.onScreen = 0;
			}
		}
	},
	// Spawn
	shoot: function(){
		this.x = player2.x;
		this.y = player2.y;
		this.dir = "A";
		this.onScreen = 1;
		this.used = 0;
	}
};
var p2waterfire3 = {
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
			if(((player2.spell1 == "Water" && player2.spell2 == "Fire") || (player2.spell1 == "Fire" && player2.spell2 == "Water"))){
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
			if(((player2.spell1 == "Water" && player2.spell2 == "Ice") || (player2.spell1 == "Ice" && player2.spell2 == "Water"))){
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
					if(((player2.spell1 == "Water" && player2.spell2 == "Fire") || (player2.spell1 == "Fire" && player2.spell2 == "Water"))){
						p2Wfire3.x = this.x;
						p2Wfire3.y = this.y;
						p2Wfire3.onScreen = 1;
						p2Wfire3.shoot();
					}	
					else if(((player2.spell1 == "Water" && player2.spell2 == "Ice") || (player2.spell1 == "Ice" && player2.spell2 == "Water"))){
						p2IBubble3.x = this.x;
						p2IBubble3.y = this.y;
						p2IBubble3.onScreen = 1;
						p2IBubble3.frame = 0;
					}
					this.onScreen = 0;
				}
			}
			if(obsCollision(obstacle1, this, this.dir) || obsCollision(obstacle2, this, this.dir) || obsCollision(obstacle3, this, this.dir)
				|| this.x < 8 || this.y < 8 || this.x > 792 || this.y > 568){
				if(((player2.spell1 == "Water" && player2.spell2 == "Fire") || (player2.spell1 == "Fire" && player2.spell2 == "Water"))){
					p2Wfire3.x = this.x;
					p2Wfire3.y = this.y;
					p2Wfire3.onScreen = 1;
					p2Wfire3.shoot();
				}
				else if(((player2.spell1 == "Water" && player2.spell2 == "Ice") || (player2.spell1 == "Ice" && player2.spell2 == "Water"))){
					p2IBubble3.x = this.x;
					p2IBubble3.y = this.y;
					p2IBubble3.onScreen = 1;
					p2IBubble3.frame = 0;
				}
				this.x = -100;
				this.y = -200;
				this.onScreen = 0;
			}
		}
	},
	// Spawn
	shoot: function(){
		this.x = player2.x;
		this.y = player2.y;
		this.dir = "S";
		this.onScreen = 1;
		this.used = 0;
	}
};
var p2waterfire4 = {
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
			if(((player2.spell1 == "Water" && player2.spell2 == "Fire") || (player2.spell1 == "Fire" && player2.spell2 == "Water"))){
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
			if(((player2.spell1 == "Water" && player2.spell2 == "Ice") || (player2.spell1 == "Ice" && player2.spell2 == "Water"))){
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
					if(((player2.spell1 == "Water" && player2.spell2 == "Fire") || (player2.spell1 == "Fire" && player2.spell2 == "Water"))){
						p2Wfire4.x = this.x;
						p2Wfire4.y = this.y;
						p2Wfire4.onScreen = 1;
						p2Wfire4.shoot();
					}	
					else if(((player2.spell1 == "Water" && player2.spell2 == "Ice") || (player2.spell1 == "Ice" && player2.spell2 == "Water"))){
						p2IBubble4.x = this.x;
						p2IBubble4.y = this.y;
						p2IBubble4.onScreen = 1;
						p2IBubble4.frame = 0;
					}
					this.onScreen = 0;
				}
			}
			if(obsCollision(obstacle1, this, this.dir) || obsCollision(obstacle2, this, this.dir) || obsCollision(obstacle3, this, this.dir)
				|| this.x < 8 || this.y < 8 || this.x > 792 || this.y > 568){
				if(((player2.spell1 == "Water" && player2.spell2 == "Fire") || (player2.spell1 == "Fire" && player2.spell2 == "Water"))){
					p2Wfire4.x = this.x;
					p2Wfire4.y = this.y;
					p2Wfire4.onScreen = 1;
					p2Wfire4.shoot();
				}
				else if(((player2.spell1 == "Water" && player2.spell2 == "Ice") || (player2.spell1 == "Ice" && player2.spell2 == "Water"))){
					p2IBubble4.x = this.x;
					p2IBubble4.y = this.y;
					p2IBubble4.onScreen = 1;
					p2IBubble4.frame = 0;
				}
				this.x = -100;
				this.y = -200;
				this.onScreen = 0;
			}
		}
	},
	// Spawn
	shoot: function(){
		this.x = player2.x;
		this.y = player2.y;
		this.dir = "D";
		this.onScreen = 1;
		this.used = 0;
	}
};
var p2waterfire5 = {
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
			if(((player2.spell1 == "Water" && player2.spell2 == "Fire") || (player2.spell1 == "Fire" && player2.spell2 == "Water"))){
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
			if(((player2.spell1 == "Water" && player2.spell2 == "Ice") || (player2.spell1 == "Ice" && player2.spell2 == "Water"))){
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
					if(((player2.spell1 == "Water" && player2.spell2 == "Fire") || (player2.spell1 == "Fire" && player2.spell2 == "Water"))){
						p2Wfire5.x = this.x;
						p2Wfire5.y = this.y;
						p2Wfire5.onScreen = 1;
						p2Wfire5.shoot();
					}	
					else if(((player2.spell1 == "Water" && player2.spell2 == "Ice") || (player2.spell1 == "Ice" && player2.spell2 == "Water"))){
						p2IBubble5.x = this.x;
						p2IBubble5.y = this.y;
						p2IBubble5.onScreen = 1;
						p2IBubble5.frame = 0;
					}
					this.onScreen = 0;
				}
			}
			if(obsCollision(obstacle1, this, this.dir) || obsCollision(obstacle2, this, this.dir) || obsCollision(obstacle3, this, this.dir)
				|| this.x < 8 || this.y < 8 || this.x > 792 || this.y > 568){
				if(((player2.spell1 == "Water" && player2.spell2 == "Fire") || (player2.spell1 == "Fire" && player2.spell2 == "Water"))){
					p2Wfire5.x = this.x;
					p2Wfire5.y = this.y;
					p2Wfire5.onScreen = 1;
					p2Wfire5.shoot();
				}
				else if(((player2.spell1 == "Water" && player2.spell2 == "Ice") || (player2.spell1 == "Ice" && player2.spell2 == "Water"))){
					p2IBubble5.x = this.x;
					p2IBubble5.y = this.y;
					p2IBubble5.onScreen = 1;
					p2IBubble5.frame = 0;
				}
				this.x = -100;
				this.y = -200;
				this.onScreen = 0;
			}
		}
	},
	// Spawn
	shoot: function(){
		this.x = player2.x;
		this.y = player2.y;
		this.dir = "WD";
		this.onScreen = 1;
		this.used = 0;
	}
};
var p2waterfire6 = {
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
			if(((player2.spell1 == "Water" && player2.spell2 == "Fire") || (player2.spell1 == "Fire" && player2.spell2 == "Water"))){
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
			if(((player2.spell1 == "Water" && player2.spell2 == "Ice") || (player2.spell1 == "Ice" && player2.spell2 == "Water"))){
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
					if(((player2.spell1 == "Water" && player2.spell2 == "Fire") || (player2.spell1 == "Fire" && player2.spell2 == "Water"))){
						p2Wfire6.x = this.x;
						p2Wfire6.y = this.y;
						p2Wfire6.onScreen = 1;
						p2Wfire6.shoot();
					}	
					else if(((player2.spell1 == "Water" && player2.spell2 == "Ice") || (player2.spell1 == "Ice" && player2.spell2 == "Water"))){
						p2IBubble6.x = this.x;
						p2IBubble6.y = this.y;
						p2IBubble6.onScreen = 1;
						p2IBubble6.frame = 0;
					}
					this.onScreen = 0;
				}
			}
			if(obsCollision(obstacle1, this, this.dir) || obsCollision(obstacle2, this, this.dir) || obsCollision(obstacle3, this, this.dir)
				|| this.x < 8 || this.y < 8 || this.x > 792 || this.y > 568){
				if(((player2.spell1 == "Water" && player2.spell2 == "Fire") || (player2.spell1 == "Fire" && player2.spell2 == "Water"))){
					p2Wfire6.x = this.x;
					p2Wfire6.y = this.y;
					p2Wfire6.onScreen = 1;
					p2Wfire6.shoot();
				}
				else if(((player2.spell1 == "Water" && player2.spell2 == "Ice") || (player2.spell1 == "Ice" && player2.spell2 == "Water"))){
					p2IBubble6.x = this.x;
					p2IBubble6.y = this.y;
					p2IBubble6.onScreen = 1;
					p2IBubble6.frame = 0;
				}
				this.x = -100;
				this.y = -200;
				this.onScreen = 0;
			}
		}
	},
	// Spawn
	shoot: function(){
		this.x = player2.x;
		this.y = player2.y;
		this.dir = "WA";
		this.onScreen = 1;
		this.used = 0;
	}
};
var p2waterfire7 = {
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
			if(((player2.spell1 == "Water" && player2.spell2 == "Fire") || (player2.spell1 == "Fire" && player2.spell2 == "Water"))){
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
			if(((player2.spell1 == "Water" && player2.spell2 == "Ice") || (player2.spell1 == "Ice" && player2.spell2 == "Water"))){
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
					if(((player2.spell1 == "Water" && player2.spell2 == "Fire") || (player2.spell1 == "Fire" && player2.spell2 == "Water"))){
						p2Wfire7.x = this.x;
						p2Wfire7.y = this.y;
						p2Wfire7.onScreen = 1;
						p2Wfire7.shoot();
					}	
					else if(((player2.spell1 == "Water" && player2.spell2 == "Ice") || (player2.spell1 == "Ice" && player2.spell2 == "Water"))){
						p2IBubble7.x = this.x;
						p2IBubble7.y = this.y;
						p2IBubble7.onScreen = 1;
						p2IBubble7.frame = 0;
					}
					this.onScreen = 0;
				}
			}
			if(obsCollision(obstacle1, this, this.dir) || obsCollision(obstacle2, this, this.dir) || obsCollision(obstacle3, this, this.dir)
				|| this.x < 8 || this.y < 8 || this.x > 792 || this.y > 568){
				if(((player2.spell1 == "Water" && player2.spell2 == "Fire") || (player2.spell1 == "Fire" && player2.spell2 == "Water"))){
					p2Wfire7.x = this.x;
					p2Wfire7.y = this.y;
					p2Wfire7.onScreen = 1;
					p2Wfire7.shoot();
				}
				else if(((player2.spell1 == "Water" && player2.spell2 == "Ice") || (player2.spell1 == "Ice" && player2.spell2 == "Water"))){
					p2IBubble7.x = this.x;
					p2IBubble7.y = this.y;
					p2IBubble7.onScreen = 1;
					p2IBubble7.frame = 0;
				}
				this.x = -100;
				this.y = -200;
				this.onScreen = 0;
			}
		}
	},
	// Spawn
	shoot: function(){
		this.x = player2.x;
		this.y = player2.y;
		this.dir = "AS";
		this.onScreen = 1;
		this.used = 0;
	}
};
var p2waterfire8 = {
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
			if(((player2.spell1 == "Water" && player2.spell2 == "Fire") || (player2.spell1 == "Fire" && player2.spell2 == "Water"))){
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
			if(((player2.spell1 == "Water" && player2.spell2 == "Ice") || (player2.spell1 == "Ice" && player2.spell2 == "Water"))){
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
					if(((player2.spell1 == "Water" && player2.spell2 == "Fire") || (player2.spell1 == "Fire" && player2.spell2 == "Water"))){
						p2Wfire8.x = this.x;
						p2Wfire8.y = this.y;
						p2Wfire8.onScreen = 1;
						p2Wfire8.shoot();
					}	
					else if(((player2.spell1 == "Water" && player2.spell2 == "Ice") || (player2.spell1 == "Ice" && player2.spell2 == "Water"))){
						p2IBubble8.x = this.x;
						p2IBubble8.y = this.y;
						p2IBubble8.onScreen = 1;
						p2IBubble8.frame = 0;
					}
					this.onScreen = 0;
				}
			}
			if(obsCollision(obstacle1, this, this.dir) || obsCollision(obstacle2, this, this.dir) || obsCollision(obstacle3, this, this.dir)
				|| this.x < 8 || this.y < 8 || this.x > 792 || this.y > 568){
				if(((player2.spell1 == "Fire" && player2.spell2 == "Water") || (player2.spell1 == "Water" && player2.spell2 == "Fire"))){
					p2Wfire8.x = this.x;
					p2Wfire8.y = this.y;
					p2Wfire8.onScreen = 1;
					p2Wfire8.shoot();
				}
				else if(((player2.spell1 == "Water" && player2.spell2 == "Ice") || (player2.spell1 == "Ice" && player2.spell2 == "Water"))){
					p2IBubble8.x = this.x;
					p2IBubble8.y = this.y;
					p2IBubble8.onScreen = 1;
					p2IBubble8.frame = 0;
				}
				this.x = -100;
				this.y = -200;
				this.onScreen = 0;
			}
		}
	},
	// Spawn
	shoot: function(){
		this.x = player2.x;
		this.y = player2.y;
		this.dir = "SD";
		this.onScreen = 1;
		this.used = 0;
	}
};
var p2Wfire = {
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
var p2Wfire2 = {
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
var p2Wfire3 = {
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
var p2Wfire4 = {
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
var p2Wfire5 = {
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
var p2Wfire6 = {
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
var p2Wfire7 = {
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
var p2Wfire8 = {
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
var p2waterFires = {1: p2waterfire, 2: p2waterfire2, 3: p2waterfire3, 4: p2waterfire4, 5: p2waterfire5, 6: p2waterfire6, 7: p2waterfire7, 8: p2waterfire8};
var p2WFires = {1: p2Wfire, 2: p2Wfire2, 3: p2Wfire3, 4: p2Wfire4, 5: p2Wfire5, 6: p2Wfire6, 7: p2Wfire7, 8: p2Wfire8};

var p2IBubble = {
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
var p2IBubble2 = {
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
var p2IBubble3 = {
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
var p2IBubble4 = {
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
var p2IBubble5 = {
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
var p2IBubble6 = {
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
var p2IBubble7 = {
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
var p2IBubble8 = {
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
var p2IBubbles = {1: p2IBubble, 2: p2IBubble2, 3: p2IBubble3, 4: p2IBubble4, 5: p2IBubble5, 6: p2IBubble6, 7: p2IBubble7, 8: p2IBubble8};
var p2waterearth = {
	cd: 0,
	cdTop: 1020,
	tick: function(){
		if(this.cd > 0){
			this.cd-=1;
		}
	},
	shoot: function(){
		if(this.cd == 0){
			var currentEarthcd = p2earth.cd;
			var currentWatercd = p2water.cd;
			this.cd = this.cdTop;
			p2water.cd = 0;
			p2earth.cd = 0;
			p2water.shoot();
			p2earth.shoot();
			p2water.cd = currentWatercd;
			p2earth.cd = currentEarthcd;
			p2water.cast = 20;
		}
	}	
};
var p2waterair = {
	x: -100,
	y: -200,
	cd: 0,
	cdTop: 150,
	onScreen: 0,
	frame: 0,
	mode: 0,
	
	draw: function(){
		this.x = player2.x;
		this.y = player2.y;
		if(this.cd > 0){
			this.cd-=1;
		}
	},
	shoot: function(){
		if(this.cd == 0){
			for(W in p2wairParticles){
				p2wairParticles[W].onScreen = 1;
				p2wairParticles[W].x = this.x;
				p2wairParticles[W].y = this.y;
				p2wairParticles[W].dir = p2wairParticles[W].mdir;
			}
			this.cd = this.cdTop;
			this.frame = 0;
			this.onScreen = 1;
			longpew.currentTime=0;
			longpew.play();
		}
	}
};	
var p2wairParticleW = {
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
		if(collision(this.dir, this, player2) && this.dirct == 0){
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
var p2wairParticleA = {
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
		if(collision(this.dir, this, player2) && this.dirct == 0){
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
var p2wairParticleS = {
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
		if(collision(this.dir, this, player2) && this.dirct == 0){
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
var p2wairParticleD = {
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
		if(collision(this.dir, this, player2) && this.dirct == 0){
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
var p2wairParticleWA = {
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
		if(collision(this.dir, this, player2) && this.dirct == 0){
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
var p2wairParticleWD = {
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
		if(collision(this.dir, this, player2) && this.dirct == 0){
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
var p2wairParticleAS = {
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
		if(collision(this.dir, this, player2) && this.dirct == 0){
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
var p2wairParticleSD = {
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
		if(collision(this.dir, this, player2) && this.dirct == 0){
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
var p2wairParticles = {1: p2wairParticleW, 2: p2wairParticleA, 3: p2wairParticleS, 4: p2wairParticleD, 5: p2wairParticleWA, 6: p2wairParticleWD, 7: p2wairParticleAS, 8: p2wairParticleSD};
var p2waterlightning = {
	onScreen: 0,
	cd: 0,
	cdTop: 750,
	tick: function(){
		if(this.cd > 0){
			this.cd-=1;
		}
		if(!p2Wpool.onScreen && !p2Wpool2.onScreen && !p2Wpool3.onScreen && !p2Wpool4.onScreen && !p2Wpool5.onScreen
		&& !p2Wpool6.onScreen && !p2Wpool7.onScreen){
			this.onScreen = 0;
			for(w in p2Wpools){
				p2Wpools[w].used = false;
			}
		}
		if(this.onScreen){
			for(w in p2Wpools){
				p2wpool_draw(p2Wpools[w]);
				p2wpool_move(p2Wpools[w]);
			}
		}
	},
	shoot: function(){
		if(this.cd == 0){
			this.onScreen = 1;
			if(!p2Wpool.onScreen && !p2Wpool.used){
				SpawnerSpawn.currentTime=0;
				SpawnerSpawn.play();
				p2Wpool.onScreen = 1;
				p2Wpool.timeLeft = 210;
				p2Wpool.x = player2.x;
				p2Wpool.y = player2.y;
				p2Wpool.used = true;
			}
			this.cd = this.cdTop;
		}
	}
};
var p2Wpool = {
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
var p2Wpool2 = {
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
var p2Wpool3 = {
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
var p2Wpool4 = {
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
var p2Wpool5 = {
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
var p2Wpool6 = {
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
var p2Wpool7 = {
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
function p2wpool_draw(p){
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
function p2wpool_move(p){
	if(contained(player2, p)){
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
					if(!p2Wpool2.onScreen && !p2Wpool2.used){
						SpawnerSpawn.currentTime=0;
						SpawnerSpawn.play();
						p2Wpool2.onScreen = 1;
						p2Wpool2.timeLeft = 210;
						p2Wpool2.used = true;
						p2Wpool2.x = AllEnemies[E].x;
						p2Wpool2.y = AllEnemies[E].y;
					}
					else if(!p2Wpool3.onScreen && !p2Wpool3.used){
						SpawnerSpawn.currentTime=0;
						SpawnerSpawn.play();
						p2Wpool3.onScreen = 1;
						p2Wpool3.timeLeft = 210;
						p2Wpool3.used = true;
						p2Wpool3.x = AllEnemies[E].x;
						p2Wpool3.y = AllEnemies[E].y;
					}
					else if(!p2Wpool4.onScreen && !p2Wpool4.used){
						SpawnerSpawn.currentTime=0;
						SpawnerSpawn.play();
						p2Wpool4.onScreen = 1;
						p2Wpool4.timeLeft = 210;
						p2Wpool4.used = true;
						p2Wpool4.x = AllEnemies[E].x;
						p2Wpool4.y = AllEnemies[E].y;
					}
					else if(!p2Wpool5.onScreen && !p2Wpool5.used){
						SpawnerSpawn.currentTime=0;
						SpawnerSpawn.play();
						p2Wpool5.onScreen = 1;
						p2Wpool5.timeLeft = 210;
						p2Wpool5.used = true;
						p2Wpool5.x = AllEnemies[E].x;
						p2Wpool5.y = AllEnemies[E].y;
					}
					else if(!p2Wpool6.onScreen && !p2Wpool6.used){
						SpawnerSpawn.currentTime=0;
						SpawnerSpawn.play();
						p2Wpool6.onScreen = 1;
						p2Wpool6.timeLeft = 210;
						p2Wpool6.used = true;
						p2Wpool6.x = AllEnemies[E].x;
						p2Wpool6.y = AllEnemies[E].y;
					}
					else if(!p2Wpool7.onScreen && !p2Wpool7.used){
						SpawnerSpawn.currentTime=0;
						SpawnerSpawn.play();
						p2Wpool7.onScreen = 1;
						p2Wpool7.timeLeft = 210;
						p2Wpool7.used = true;
						p2Wpool7.x = AllEnemies[E].x;
						p2Wpool7.y = AllEnemies[E].y;
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
var p2Wpools = {1: p2Wpool, 2: p2Wpool2, 3: p2Wpool3, 4: p2Wpool4, 5: p2Wpool5, 6: p2Wpool6, 7: p2Wpool7};
var p2darkearth = {
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
			ctx.fillRect(player2.x-this.width*0.5, player2.y-this.height-64, this.width, this.height);
			ctx.fillRect(player2.x-this.width*0.5, player2.y+64, this.width, this.height);
			ctx.fillRect(player2.x-this.height-64, player2.y-this.width*0.5, this.height, this.width);
			ctx.fillRect(player2.x+64, player2.y-this.width*0.5, this.height, this.width);
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
				player2.hp = player2.maxhp;
				this.used = 1;
				radiofailure.currentTime=0;
				radiofailure.play();
			}
		}		
	},
	shoot: function(){
		if(this.cd == 0){
			this.x = player2.x;
			this.y = player2.y;
			this.cd = this.cdTop;
			this.timeLeft = 15;
			this.used = 0;
			this.HealAmount = player2.maxhp - player2.hp;
			this.blackTimer = 150;
		}
	}	
};
var p2darkfire = {
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
				this.x = player2.x;
				this.y = player2.y;
				this.cd = this.cdTop;
				this.onScreen = 1;
				this.used = 0;
			}
			else if(p2darkfire12.onScreen == 0){
				p2darkfire12.x = player2.x;
				p2darkfire12.y = player2.y;
				this.cd = this.cdTop;
				p2darkfire12.onScreen = 1;
				p2darkfire12.used = 0;
			}
			else if(p2darkfire13.onScreen == 0){
				p2darkfire13.x = player2.x;
				p2darkfire13.y = player2.y;
				this.cd = this.cdTop;
				p2darkfire13.onScreen = 1;
				p2darkfire13.used = 0;
			}
			else if(p2darkfire14.onScreen == 0){
				p2darkfire14.x = player2.x;
				p2darkfire14.y = player2.y;
				this.cd = this.cdTop;
				p2darkfire14.onScreen = 1;
				p2darkfire14.used = 0;
			}
			else if(p2darkfire15.onScreen == 0){
				p2darkfire15.x = player2.x;
				p2darkfire15.y = player2.y;
				this.cd = this.cdTop;
				p2darkfire15.onScreen = 1;
				p2darkfire15.used = 0;
			}
		}
	}
};
var p2darkfire12 = {
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
var p2darkfire13 = {
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
var p2darkfire14 = {
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
var p2darkfire15 = {
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
var p2darkfireExplosion = {
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
var p2darkfireExplosion2 = {
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
var p2darkfireExplosion3 = {
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
var p2darkfireExplosion4 = {
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
var p2darkfireExplosion5 = {
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
var p2darkfireSpikes = {1: p2darkfire, 2: p2darkfire12, 3: p2darkfire13, 4: p2darkfire14, 5: p2darkfire15};
var p2darkfireExplosions = {1: p2darkfireExplosion, 2: p2darkfireExplosion2, 3: p2darkfireExplosion3, 4: p2darkfireExplosion4, 5: p2darkfireExplosion5};
//moves fire and ice
function p2firespikeMove(S){
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
					if(p2darkfireExplosion.onScreen == 0){
						p2darkfireExplosion.x = S.x;
						p2darkfireExplosion.y = S.y;
						p2darkfireExplosion.shoot();
					}
					else if(p2darkfireExplosion2.onScreen == 0){
						p2darkfireExplosion2.x = S.x;
						p2darkfireExplosion2.y = S.y;
						p2darkfireExplosion2.shoot();
					}
					else if(p2darkfireExplosion3.onScreen == 0){
						p2darkfireExplosion3.x = S.x;
						p2darkfireExplosion3.y = S.y;
						p2darkfireExplosion3.shoot();
					}
					else if(p2darkfireExplosion4.onScreen == 0){
						p2darkfireExplosion4.x = S.x;
						p2darkfireExplosion4.y = S.y;
						p2darkfireExplosion4.shoot();
					}
					else if(p2darkfireExplosion5.onScreen == 0){
						p2darkfireExplosion5.x = S.x;
						p2darkfireExplosion5.y = S.y;
						p2darkfireExplosion5.shoot();
					}
					S.onScreen = 0;
					S.x = -100;
					S.y = -200;
					p2darkfire.inventory+=1;
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
					if(S == p2darklightning){
						p2darklightningExplosion.x = S.x;
						p2darklightningExplosion.y = S.y;
						p2darklightningExplosion.shoot();
					}
					else if(S == p2darklightning12){
						p2darklightningExplosion6.x = S.x;
						p2darklightningExplosion6.y = S.y;
						p2darklightningExplosion6.shoot();
					}
					S.timeLeft = 300;
					S.active = true;
				}
				else if(S.ice){
					if(p2darkiceEffect1.onScreen == 0){
						p2darkiceEffect1.x = S.x;
						p2darkiceEffect1.y = S.y;
						p2darkiceEffect1.target = AllEnemies[E];
						p2darkiceEffect1.shoot();
					}
					else if(p2darkiceEffect2.onScreen == 0){
						p2darkiceEffect2.x = S.x;
						p2darkiceEffect2.y = S.y;
						p2darkiceEffect2.target = AllEnemies[E];
						p2darkiceEffect2.shoot();
					}
					else if(p2darkiceEffect3.onScreen == 0){
						p2darkiceEffect3.x = S.x;
						p2darkiceEffect3.y = S.y;
						p2darkiceEffect3.target = AllEnemies[E];
						p2darkiceEffect3.shoot();
					}
					else if(p2darkiceEffect4.onScreen == 0){
						p2darkiceEffect4.x = S.x;
						p2darkiceEffect4.y = S.y;
						p2darkiceEffect4.target = AllEnemies[E];
						p2darkiceEffect4.shoot();
					}
					else if(p2darkiceEffect5.onScreen == 0){
						p2darkiceEffect5.x = S.x;
						p2darkiceEffect5.y = S.y;
						p2darkiceEffect5.target = AllEnemies[E];
						p2darkiceEffect5.shoot();
					}
					S.onScreen = 0;
					S.x = -100;
					S.y = -200;
					p2darkice.inventory+=1;
				}
			}
		}
	}
}
// Ice Trap: Drops an ice trap on the player's location. Freezes first enemy to touch it for x seconds
var p2darkice = {
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
				this.x = player2.x;
				this.y = player2.y;
				this.cd = this.cdTop;
				this.onScreen = 1;
				this.used = 0;
			}
			else if(p2darkice12.onScreen == 0){
				p2darkice12.x = player2.x;
				p2darkice12.y = player2.y;
				this.cd = this.cdTop;
				p2darkice12.onScreen = 1;
				p2darkice12.used = 0;
			}
			else if(p2darkice13.onScreen == 0){
				p2darkice13.x = player2.x;
				p2darkice13.y = player2.y;
				this.cd = this.cdTop;
				p2darkice13.onScreen = 1;
				p2darkice13.used = 0;
			}
			else if(p2darkice14.onScreen == 0){
				p2darkice14.x = player2.x;
				p2darkice14.y = player2.y;
				this.cd = this.cdTop;
				p2darkice14.onScreen = 1;
				p2darkice14.used = 0;
			}
			else if(p2darkice15.onScreen == 0){
				p2darkice15.x = player2.x;
				p2darkice15.y = player2.y;
				this.cd = this.cdTop;
				p2darkice15.onScreen = 1;
				p2darkice15.used = 0;
			}
		}
	}
};
var p2darkice12 = {
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
var p2darkice13 = {
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
var p2darkice14 = {
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
var p2darkice15 = {
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
var p2darkiceEffect1 = {
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
var p2darkiceEffect2 = {
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
var p2darkiceEffect3 = {
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
var p2darkiceEffect4 = {
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
var p2darkiceEffect5 = {
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
var p2darkiceSpikes = {1: p2darkice, 2: p2darkice12, 3: p2darkice13, 4: p2darkice14, 5: p2darkice15};
var p2darkiceEffects = {1: p2darkiceEffect1, 2: p2darkiceEffect2, 3: p2darkiceEffect3, 4: p2darkiceEffect4, 5: p2darkiceEffect5};
var p2darklightning = {
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
				this.x = player2.x;
				this.y = player2.y;
				this.cd = this.cdTop;
				this.onScreen = 1;
				this.used = 0;
			}
			else if(p2darklightning12.onScreen == 0){
				p2darklightning12.x = player2.x;
				p2darklightning12.y = player2.y;
				this.cd = this.cdTop;
				p2darklightning12.onScreen = 1;
				p2darklightning12.used = 0;
			}
		}
	}
};
var p2darklightning12 = {
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
var p2darklightningExplosion = {
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
						p2darklightningExplosion2.x = AllEnemies[E].x;
						p2darklightningExplosion2.y = AllEnemies[E].y;
						p2darklightningExplosion2.shoot();
						this.chained = 1;
						p2darklightning.timeLeft = 300;
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
var p2darklightningExplosion2 = {
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
						p2darklightningExplosion3.x = AllEnemies[E].x;
						p2darklightningExplosion3.y = AllEnemies[E].y;
						p2darklightningExplosion3.shoot();
						this.chained = 1;
						p2darklightning.timeLeft = 300;
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
var p2darklightningExplosion3 = {
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
						p2darklightningExplosion4.x = AllEnemies[E].x;
						p2darklightningExplosion4.y = AllEnemies[E].y;
						p2darklightningExplosion4.shoot();
						this.chained = 1;
						p2darklightning.timeLeft = 300;
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
var p2darklightningExplosion4 = {
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
						p2darklightningExplosion5.x = AllEnemies[E].x;
						p2darklightningExplosion5.y = AllEnemies[E].y;
						p2darklightningExplosion5.shoot();
						this.chained = 1;
						p2darklightning.timeLeft = 300;
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
var p2darklightningExplosion5 = {
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
var p2darklightningExplosion6 = {
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
						p2darklightningExplosion7.x = AllEnemies[E].x;
						p2darklightningExplosion7.y = AllEnemies[E].y;
						p2darklightningExplosion7.shoot();
						this.chained = 1;
						p2darklightning12.timeLeft = 300;
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
var p2darklightningExplosion7 = {
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
						p2darklightningExplosion8.x = AllEnemies[E].x;
						p2darklightningExplosion8.y = AllEnemies[E].y;
						p2darklightningExplosion8.shoot();
						this.chained = 1;
						p2darklightning12.timeLeft = 300;
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
var p2darklightningExplosion8 = {
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
						p2darklightningExplosion9.x = AllEnemies[E].x;
						p2darklightningExplosion9.y = AllEnemies[E].y;
						p2darklightningExplosion9.shoot();
						this.chained = 1;
						p2darklightning12.timeLeft = 300;
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
var p2darklightningExplosion9 = {
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
						p2darklightningExplosion10.x = AllEnemies[E].x;
						p2darklightningExplosion10.y = AllEnemies[E].y;
						p2darklightningExplosion10.shoot();
						this.chained = 1;
						p2darklightning12.timeLeft = 300;
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
var p2darklightningExplosion10 = {
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
var p2darklightningSpikes = {1: p2darklightning, 2: p2darklightning12};
var p2darklightningExplosions = {1: p2darklightningExplosion, 2: p2darklightningExplosion2, 3: p2darklightningExplosion3, 4: p2darklightningExplosion4, 5: p2darklightningExplosion5,
								6: p2darklightningExplosion6, 7: p2darklightningExplosion7, 8: p2darklightningExplosion8, 9: p2darklightningExplosion9, 10: p2darklightningExplosion10};
var p2darkair = {
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
			if(this.onScreen == 0 && !(collision(player2.dir, player2, p2darkair2) || collision(player2.dir, player2, p2darkair3) || collision(player2.dir, player2, p2darkair4) || collision(player2.dir, player2, p2darkair5))){
				this.x = player2.x;
				this.y = player2.y;
				this.cd = this.cdTop;
				this.onScreen = 1;
				this.used = 0;
				this.timer = 5;
				this.timeLeft = 600;
				this.inventory-=1;
				flatBoop.currentTime=0;
				flatBoop.play();
			}
			else if(p2darkair2.onScreen == 0 && !(collision(player2.dir, player2, this) || collision(player2.dir, player2, p2darkair3) || collision(player2.dir, player2, p2darkair4) || collision(player2.dir, player2, p2darkair5))){
				p2darkair2.x = player2.x;
				p2darkair2.y = player2.y;
				this.cd = this.cdTop;
				p2darkair2.onScreen = 1;
				p2darkair2.used = 0;
				p2darkair2.timer = 5;
				p2darkair2.timeLeft = 600;
				this.inventory-=1;
				flatBoop.currentTime=0;
				flatBoop.play();
			}
			else if(p2darkair3.onScreen == 0 && !(collision(player2.dir, player2, p2darkair2) || collision(player2.dir, player2, this) || collision(player2.dir, player2, p2darkair4) || collision(player2.dir, player2, p2darkair5))){
				p2darkair3.x = player2.x;
				p2darkair3.y = player2.y;
				this.cd = this.cdTop;
				p2darkair3.onScreen = 1;
				p2darkair3.used = 0;
				p2darkair3.timer = 5;
				p2darkair3.timeLeft = 600;
				this.inventory-=1;
				flatBoop.currentTime=0;
				flatBoop.play();
			}
			else if(p2darkair4.onScreen == 0 && !(collision(player2.dir, player2, p2darkair2) || collision(player2.dir, player2, p2darkair3) || collision(player2.dir, player2, this) || collision(player2.dir, player2, p2darkair5))){
				p2darkair4.x = player2.x;
				p2darkair4.y = player2.y;
				this.cd = this.cdTop;
				p2darkair4.onScreen = 1;
				p2darkair4.used = 0;
				p2darkair4.timer = 5;
				p2darkair4.timeLeft = 600;
				this.inventory-=1;
				flatBoop.currentTime=0;
				flatBoop.play();
			}
			else if(p2darkair5.onScreen == 0 && !(collision(player2.dir, player2, p2darkair2) || collision(player2.dir, player2, p2darkair3) || collision(player2.dir, player2, p2darkair4) || collision(player2.dir, player2, this))){
				p2darkair5.x = player2.x;
				p2darkair5.y = player2.y;
				this.cd = this.cdTop;
				p2darkair5.onScreen = 1;
				p2darkair5.used = 0;
				p2darkair5.timer = 5;
				p2darkair5.timeLeft = 600;
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
		if(p2darkair2.onScreen == 1){
			ctx.drawImage(trapSheet, 32*p2darkair2.index - 32,224,32,32, p2darkair2.x-p2darkair2.width*0.5, p2darkair2.y-p2darkair2.height*0.5, 32, 32);
			p2darkair2.index++;
			if(p2darkair2.index > 4){
				p2darkair2.index = 1;
			}
		}
		if(p2darkair3.onScreen == 1){
			ctx.drawImage(trapSheet, 32*p2darkair3.index - 32,224,32,32, p2darkair3.x-p2darkair3.width*0.5, p2darkair3.y-p2darkair3.height*0.5, 32, 32);
			p2darkair3.index++;
			if(p2darkair3.index > 4){
				p2darkair3.index = 1;
			}
		}
		if(p2darkair4.onScreen == 1){
			ctx.drawImage(trapSheet, 32*p2darkair4.index - 32,224,32,32, p2darkair4.x-p2darkair4.width*0.5, p2darkair4.y-p2darkair4.height*0.5, 32, 32);
			p2darkair4.index++;
			if(p2darkair4.index > 4){
				p2darkair4.index = 1;
			}
		}
		if(p2darkair5.onScreen == 1){
			ctx.drawImage(trapSheet, 32*p2darkair5.index - 32,224,32,32, p2darkair5.x-p2darkair5.width*0.5, p2darkair5.y-p2darkair5.height*0.5, 32, 32);
			p2darkair5.index++;
			if(p2darkair5.index > 4){
				p2darkair5.index = 1;
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
		if(p2darkair2.timeLeft > 0){
			p2darkair2.timeLeft-=1;
			if(p2darkair2.timeLeft == 0){
				p2darkair2.x = -100;
				p2darkair2.y = -200;
				p2darkair2.onScreen = 0;
				p2darkair2.used = 0;
				this.inventory+=1;
			}
		}
		if(p2darkair3.timeLeft > 0){
			p2darkair3.timeLeft-=1;
			if(p2darkair3.timeLeft == 0){
				p2darkair3.x = -100;
				p2darkair3.y = -200;
				p2darkair3.onScreen = 0;
				p2darkair3.used = 0;
				this.inventory+=1;
			}
		}
		if(p2darkair4.timeLeft > 0){
			p2darkair4.timeLeft-=1;
			if(p2darkair4.timeLeft == 0){
				p2darkair4.x = -100;
				p2darkair4.y = -200;
				p2darkair4.onScreen = 0;
				p2darkair4.used = 0;
				this.inventory+=1;
			}
		}
		if(p2darkair5.timeLeft > 0){
			p2darkair5.timeLeft-=1;
			if(p2darkair5.timeLeft == 0){
				p2darkair5.x = -100;
				p2darkair5.y = -200;
				p2darkair5.onScreen = 0;
				p2darkair5.used = 0;
				this.inventory+=1;
			}
		}
		if(this.onScreen == 1){
			if(this.timer > 0){
				this.timer-=1;
			}
			else if(this.ccd <= 0 && (collision(player2.dir, player2, this) || contained(player2, this))){
				var currAircd = p2air.cd;
				p2air.cd = 0;
				p2air.isdark = true;
				p2air.shoot();
				p2air.cd = currAircd;
				this.timer = 5;
				this.ccd = 3;
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
		if(p2darkair2.onScreen == 1){
			if(p2darkair2.timer > 0){
				p2darkair2.timer-=1;
			}
			else if(this.ccd <= 0 && (collision(player2.dir, player2, p2darkair2) || contained(player2, p2darkair2))){
				var currAircd = p2air.cd;
				p2air.cd = 0;
				p2air.isdark = true;
				p2air.shoot();
				p2air.cd = currAircd;
				p2darkair2.timer = 5;
				this.ccd = 3;
			}
			else if(this.ccd <= 0 && (collision(player.dir, player, p2darkair2) || contained(player, p2darkair2))){
				var currAircd = air.cd;
				air.cd = 0;
				air.isdark = true;
				air.shoot();
				air.cd = currAircd;
				p2darkair2.timer = 5;
				this.ccd = 3;
			}
		}
		if(p2darkair3.onScreen == 1){
			if(p2darkair3.timer > 0){
				p2darkair3.timer-=1;
			}
			else if(this.ccd <= 0 && (collision(player2.dir, player2, p2darkair3) || contained(player2, p2darkair3))){
				var currAircd = p2air.cd;
				p2air.cd = 0;
				p2air.isdark = true;
				p2air.shoot();
				p2air.cd = currAircd;
				p2darkair3.timer = 5;
				this.ccd = 3;
			}
			else if(this.ccd <= 0 && (collision(player.dir, player, p2darkair3) || contained(player, p2darkair3))){
				var currAircd = air.cd;
				air.cd = 0;
				air.isdark = true;
				air.shoot();
				air.cd = currAircd;
				p2darkair3.timer = 5;
				this.ccd = 3;
			}
		}
		if(p2darkair4.onScreen == 1){
			if(p2darkair4.timer > 0){
				p2darkair4.timer-=1;
			}
			else if(this.ccd <= 0 && (collision(player2.dir, player2, p2darkair4) || contained(player2, p2darkair4))){
				var currAircd = p2air.cd;
				p2air.cd = 0;
				p2air.isdark = true;
				p2air.shoot();
				p2air.cd = currAircd;
				p2darkair4.timer = 5;
				this.ccd = 3;
			}
			else if(this.ccd <= 0 && (collision(player.dir, player, p2darkair4) || contained(player, p2darkair4))){
				var currAircd = air.cd;
				air.cd = 0;
				air.isdark = true;
				air.shoot();
				air.cd = currAircd;
				p2darkair4.timer = 5;
				this.ccd = 3;
			}
		}
		if(p2darkair5.onScreen == 1){
			if(p2darkair5.timer > 0){
				p2darkair5.timer-=1;
			}
			else if(this.ccd <= 0 && (collision(player2.dir, player2, p2darkair5) || contained(player2, p2darkair5))){
				var currAircd = p2air.cd;
				p2air.cd = 0;
				p2air.isdark = true;
				p2air.shoot();
				p2air.cd = currAircd;
				p2darkair5.timer = 5;
				this.ccd = 3;
			}
			else if(this.ccd <= 0 && (collision(player.dir, player, p2darkair5) || contained(player, p2darkair5))){
				var currAircd = air.cd;
				air.cd = 0;
				air.isdark = true;
				air.shoot();
				air.cd = currAircd;
				p2darkair5.timer = 5;
				this.ccd = 3;
			}
		}
	}
};
var p2darkair2 = {
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
var p2darkair3 = {
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
var p2darkair4 = {
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
var p2darkair5 = {
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
var p2darkwater = {
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
				ctx.fillRect(player2.x-this.width*0.5, player2.y-this.height*0.5, this.width, this.height);
			}
			else{
				if(this.hp == 1){
					ctx.drawImage(darkwaterSheet, (this.index-1)*48, 0, 48, 48, player2.x-this.width*0.5, player2.y-this.height*0.5, 48, 48);
				}
				else if(this.hp == 2){
					ctx.drawImage(darkwaterSheet, (this.index-1)*64, 48, 64, 64, player2.x-this.width*0.5, player2.y-this.height*0.5, 64, 64);
				}
				else if(this.hp == 3){
					ctx.drawImage(darkwaterSheet, (this.index-1)*80, 112, 80, 80, player2.x-this.width*0.5, player2.y-this.height*0.5, 80, 80);
				}
				this.index++;
				if(this.index > 4){
					this.index=1;
				}
			}
			ctx.globalAlpha = Alpha;
			ctx.fillStyle = "#00FFCC";
			if(this.hp == 3){
				ctx.fillRect(player2.x - player2.width*0.5, player2.y - player2.height*0.5 - player2.height*0.5, player2.width*0.25, player2.height*0.25);
				ctx.fillRect(player2.x - (player2.width*0.5)+13, player2.y - player2.height*0.5 - player2.height*0.5, player2.width*0.25, player2.height*0.25);
				ctx.fillRect(player2.x - (player2.width*0.5) + 26, player2.y - player2.height*0.5 - player2.height*0.5, player2.width*0.25, player2.height*0.25);
			}
			else if(this.hp == 2){
				ctx.fillRect(player2.x - player2.width*0.5, player2.y - player2.height*0.5 - player2.height*0.5, player2.width*0.25, player2.height*0.25);
				ctx.fillRect(player2.x - (player2.width*0.5)+13, player2.y - player2.height*0.5 - player2.height*0.5, player2.width*0.25, player2.height*0.25);
			}
			else if(this.hp == 1){
				ctx.fillRect(player2.x - player2.width*0.5, player2.y - player2.height*0.5 - player2.height*0.5, player2.width*0.25, player2.height*0.25);
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
				typemarker3.x = player2.x-player2.width*0.5;
				typemarker3.y = player2.y;
				typemarker3.timeLeft = 20;
			}
			else if(typemarker.x != -100){
				typemarker2.text = "+1";
				typemarker2.x = player2.x-player2.width*0.5;
				typemarker2.y = player2.y;
				typemarker2.timeLeft = 20;
			}
			else{
				typemarker.text = "+1";
				typemarker.x = player2.x-player2.width*0.5;
				typemarker.y = player2.y;
				typemarker.timeLeft = 20;
			}
		}
		if(this.onScreen == 1){
			this.width = 32 + 16*this.hp;
			this.height = 32 + 16*this.hp;
			this.x = player2.x;
			this.y = player2.y;
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
				p2castingBar.onScreen = 1;
				p2castingBar.cast = 15+this.hp*30;
				p2castingBar.castmax = 15+this.hp*30;
				this.cast = 15 + this.hp*30;
			}
		}
	}
};
var p2flameBreath1 = {
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
			this.x = -100;
			this.y = -200;
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
var p2flameBreath2 = {
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
			this.x = -100;
			this.y = -200;
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
var p2flameBreath3 = {
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
			this.x = -100;
			this.y = -200;
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
var p2flameBreath4 = {
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
			this.x = -100;
			this.y = -200;
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
var p2flameBreath5 = {
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
			this.x = -100;
			this.y = -200;
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
var p2lightfire = {
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
			if(!p2flameBreath1.timeLeft){
				p2flameBreath1.timeLeft = 35;
				p2flameBreath1.x = this.x;
				p2flameBreath1.y = this.y;
				if(this.LR == "Left"){
					p2flameBreath1.dir = "A";
				}
				else{
					p2flameBreath1.dir = "D";
				}
				this.breathcd = 5;				
			}
			else if(!p2flameBreath2.timeLeft){
				p2flameBreath2.timeLeft = 35;
				p2flameBreath2.x = this.x;
				p2flameBreath2.y = this.y;
				if(this.LR == "Left"){
					p2flameBreath2.dir = "A";
				}
				else{
					p2flameBreath2.dir = "D";
				}
				this.breathcd = 5;
			}
			else if(!p2flameBreath3.timeLeft){
				p2flameBreath3.timeLeft = 35;
				p2flameBreath3.x = this.x;
				p2flameBreath3.y = this.y;
				if(this.LR == "Left"){
					p2flameBreath3.dir = "A";
				}
				else{
					p2flameBreath3.dir = "D";
				}
				this.breathcd = 5;
			}
			else if(!p2flameBreath4.timeLeft){
				p2flameBreath4.timeLeft = 35;
				p2flameBreath4.x = this.x;
				p2flameBreath4.y = this.y;
				if(this.LR == "Left"){
					p2flameBreath4.dir = "A";
				}
				else{
					p2flameBreath4.dir = "D";
				}
				this.breathcd = 5;
			}
			else if(!p2flameBreath5.timeLeft){
				p2flameBreath5.timeLeft = 35;
				p2flameBreath5.x = this.x;
				p2flameBreath5.y = this.y;
				if(this.LR == "Left"){
					p2flameBreath5.dir = "A";
				}
				else{
					p2flameBreath5.dir = "D";
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
			this.x = player2.x;
			this.y = player2.y;
			this.onScreen = 1;
			this.timeLeft = 900;
			this.width2 = 32;
			this.height2 = 32;
			this.frame = 0;
			this.cd = this.cdTop;
		}
	}
};
var p2lightair = {
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
			this.x = player2.x;
			this.y = player2.y;
			this.onScreen = 1;
			this.timeLeft = 600;
			this.width2 = 32;
			this.height2 = 32;
			this.frame = 0;
			this.cd = this.cdTop;
		}
	}
};
var p2IceTrail1 = {
	x: -100,
	y: -200,
	width: 48,
	height: 32,
	frame: 0,
	onScreen: 0
};

var p2IceTrail2 = {
	x: -100,
	y: -200,
	width: 48,
	height: 32,
	frame: 0,
	onScreen: 0
};

var p2IceTrail3 = {
	x: -100,
	y: -200,
	width: 48,
	height: 32,
	frame: 0,
	onScreen: 0
};

var p2IceTrail4 = {
	x: -100,
	y: -200,
	width: 48,
	height: 32,
	frame: 0,
	onScreen: 0
};

var p2IceTrail5 = {
	x: -100,
	y: -200,
	width: 48,
	height: 32,
	frame: 0,
	onScreen: 0
};

var p2IceTrail6 = {
	x: -100,
	y: -200,
	width: 48,
	height: 32,
	frame: 0,
	onScreen: 0
};

var p2IceTrail7 = {
	x: -100,
	y: -200,
	width: 48,
	height: 32,
	frame: 0,
	onScreen: 0
};

var p2IceTrail8 = {
	x: -100,
	y: -200,
	width: 48,
	height: 32,
	frame: 0,
	onScreen: 0
};

var p2IceTrail9 = {
	x: -100,
	y: -200,
	width: 48,
	height: 32,
	frame: 0,
	onScreen: 0
};

var p2IceTrail10 = {
	x: -100,
	y: -200,
	width: 48,
	height: 32,
	frame: 0,
	onScreen: 0
};
var p2IceTrails = {1: p2IceTrail1, 2: p2IceTrail2, 3: p2IceTrail3, 4: p2IceTrail4, 5: p2IceTrail5, 6: p2IceTrail6, 7: p2IceTrail7, 8: p2IceTrail8, 9: p2IceTrail9, 10: p2IceTrail10};

var p2lightice = {
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
			for(I in p2IceTrails){
				if(p2IceTrails[I].onScreen){
					ctx.fillRect(p2IceTrails[I].x-p2IceTrails[I].width*0.5, p2IceTrails[I].y-p2IceTrails[I].height*0.5, p2IceTrails[I].width, p2IceTrails[I].height);
					MoveIceTrail(p2IceTrails[I]);
				}
			}
			ctx.globalAlpha = Alpha;
		}
	},
	Shoot_AI: function(){
		if(this.onScreen && this.breathcd <=0){
			for(I in p2IceTrails){
				if(!p2IceTrails[I].frame){
					p2IceTrails[I].x = this.x;
					p2IceTrails[I].y = this.y;
					p2IceTrails[I].width = 32;
					p2IceTrails[I].height = 32;
					p2IceTrails[I].onScreen = 1;
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
			this.x = player2.x;
			this.y = player2.y;
			this.onScreen = 1;
			this.timeLeft = 900;
			this.width2 = 32;
			this.height2 = 32;
			this.frame = 0;
			this.cd = this.cdTop;
		}
	}
};
function p2SummonMovementRand(S){
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
			if(S == p2lightair){
				S.width = 32;
			}	
			else if(S == p2lightice){
				S.width = 32;
				S.height = 48;
				for(I in p2IceTrails){
					p2IceTrails[I].onScreen = 0;
					p2IceTrails[I].frame = 0;
					p2IceTrails[I].width = 32;
					p2IceTrails[I].height = 32;
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
			if(S != p2lightair){
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
		if(S.dir == "W" && (S == p2lightair || (!(obsCollision(obstacle1, S, S.dir)) && !(obsCollision(obstacle2, S, S.dir))
			&& !(obsCollision(obstacle3, S, S.dir))))){
			Math.floor(S.y-=S.speed);
		}
		if(S.dir == "A" && (S == p2lightair || (!(obsCollision(obstacle1, S, S.dir)) && !(obsCollision(obstacle2, S, S.dir))
			&& !(obsCollision(obstacle3, S, S.dir))))){
			Math.floor(S.x-=S.speed);
			S.LR = "Left";
		}
		if(S.dir == "S" && (S == p2lightair || (!(obsCollision(obstacle1, S, S.dir)) && !(obsCollision(obstacle2, S, S.dir))
			&& !(obsCollision(obstacle3, S, S.dir))))){
			Math.floor(S.y+=S.speed);
		}
		if(S.dir == "D" && (S == p2lightair || (!(obsCollision(obstacle1, S, S.dir)) && !(obsCollision(obstacle2, S, S.dir))
			&& !(obsCollision(obstacle3, S, S.dir))))){
			Math.floor(S.x+=S.speed);
			S.LR = "Right";
		}
		if(S.dir == "AS" && (S == p2lightair || (!(obsCollision(obstacle1, S, S.dir)) && !(obsCollision(obstacle2, S, S.dir))
			&& !(obsCollision(obstacle3, S, S.dir))))){
			Math.floor(S.y+=S.speed);
			Math.floor(S.x-=S.speed);
			S.LR = "Left";
		}
		if(S.dir == "WA" && (S == p2lightair || ((!(obsCollision(obstacle1, S, S.dir)) && !(obsCollision(obstacle2, S, S.dir))
			&& !(obsCollision(obstacle3, S, S.dir)))))){
			Math.floor(S.y-=S.speed);
			Math.floor(S.x-=S.speed);
			S.LR = "Left";
		}
		if(S.dir == "WD" && (S == p2lightair || ((!(obsCollision(obstacle1, S, S.dir)) && !(obsCollision(obstacle2, S, S.dir))
			&& !(obsCollision(obstacle3, S, S.dir)))))){
			Math.floor(S.y-=S.speed);
			Math.floor(S.x+=S.speed);
			S.LR = "Right";
		}
		if(S.dir == "SD" && (S == p2lightair || (!(obsCollision(obstacle1, S, S.dir)) && !(obsCollision(obstacle2, S, S.dir))
			&& !(obsCollision(obstacle3, S, S.dir))))){
			Math.floor(S.y+=S.speed);
			Math.floor(S.x+=S.speed);
			S.LR = "Right";
		}
		S.Shoot_AI();
	}
}
var p2lightearth = {
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
			if(this.cast == 30){
				this.prevEarthcd = p2earth.cd;
				p2earth.cd = 0;
				p2earth.shoot();
				p2castingBar.cast = 30;
				p2castingBar.castmax = 60;
			}
			if(!this.cast){
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
			this.normAlpha = Alpha;
			p2castingBar.onScreen = 1;
			p2castingBar.cast = 60;
			p2castingBar.castmax = 60;
		}
	}	
};
var p2lightlightning = {
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
				if(Math.sqrt((player2.x-this.x)*(player2.x- this.x) + (player2.y-this.y)*(player2.y-this.y)) > 96){
					if(player2.x-player2.width*0.5 < this.x-this.width*0.5){
						if(this.dir != "A"){
							this.dirSwitch = true;
							this.destDir = "A";
						}
						var playerSlope = (this.y-player2.y)/(this.x-player2.x);
					}
					else if(player2.x - player2.width*0.5 == this.x - this.width*0.5){
						this.dir = this.dir;
					}
					else{
						if(this.dir != "D"){
							this.dirSwitch = true;
							this.destDir = "D";
						}
						var playerSlope = (player2.y-this.y)/(player2.x-this.x);
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
						if(this.x >= player2.x - player2.width*0.5 && this.x <= player2.x + player2.width*0.5){
							if(this.y-this.height*0.5 > player2.y - player2.height*0.5){
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
			this.x = player2.x;
			this.y = player2.y;
			this.onScreen = 1;
			this.timeLeft = 300;
			this.width2 = 32;
			this.height2 = 32;
			this.frame = 0;
			this.cd = this.cdTop;
		}
	}
};
var p2lightwaterBubble1 = {
	x: -100,
	y: -200,
	width: 16,
	height: 16,
	dir: "W",
	speed: 16,
	timeLeft: 0
};
var p2lightwaterBubble2 = {
	x: -100,
	y: -200,
	width: 16,
	height: 16,
	dir: "A",
	speed: 16,
	timeLeft: 0
};
var p2lightwaterBubble3 = {
	x: -100,
	y: -200,
	width: 16,
	height: 16,
	dir: "S",
	speed: 16,
	timeLeft: 0
};
var p2lightwaterBubble4 = {
	x: -100,
	y: -200,
	width: 16,
	height: 16,
	dir: "D",
	speed: 16,
	timeLeft: 0
};
var p2lightwaterBubble5 = {
	x: -100,
	y: -200,
	width: 16,
	height: 16,
	dir: "WD",
	speed: 16,
	timeLeft: 0
};
var p2lightwaterBubble6 = {
	x: -100,
	y: -200,
	width: 16,
	height: 16,
	dir: "WA",
	speed: 16,
	timeLeft: 0
};
var p2lightwaterBubble7 = {
	x: -100,
	y: -200,
	width: 16,
	height: 16,
	dir: "AS",
	speed: 16,
	timeLeft: 0
};
var p2lightwaterBubble8 = {
	x: -100,
	y: -200,
	width: 16,
	height: 16,
	dir: "SD",
	speed: 16,
	timeLeft: 0
};

function p2movelwBubbles(){
	for(W in p2lightwaterBubbles1){
		if(p2lightwaterBubbles1[W].timeLeft > 0){
			p2lightwaterBubbles1[W].timeLeft--;
			if(p2lightwaterBubbles1[W].timeLeft <= 0){
				p2lightwaterBubbles1[W].x = -100;
				p2lightwaterBubbles1[W].y = -200;
			}
			for(E in AllEnemies){
				if(collision(p2lightwaterBubbles1[W].dir, p2lightwaterBubbles1[W], AllEnemies[E]) || collision(AllEnemies[E].dir, AllEnemies[E], p2lightwaterBubbles1[W])){
					onHit(AllEnemies[E]);
					p2lightwaterBubbles1[W].timeLeft = 0;
				}
			}
			if(p2lightwaterBubbles1[W].dir == "W"){
				p2lightwaterBubbles1[W].y-=p2lightwaterBubbles1[W].speed;
			}
			else if(p2lightwaterBubbles1[W].dir == "A"){
				p2lightwaterBubbles1[W].x-=p2lightwaterBubbles1[W].speed;
			}
			else if(p2lightwaterBubbles1[W].dir == "S"){
				p2lightwaterBubbles1[W].y+=p2lightwaterBubbles1[W].speed;
			}
			else if(p2lightwaterBubbles1[W].dir == "D"){
				p2lightwaterBubbles1[W].x+=p2lightwaterBubbles1[W].speed;
			}
			else if(p2lightwaterBubbles1[W].dir == "WA"){
				p2lightwaterBubbles1[W].x-=p2lightwaterBubbles1[W].speed/Math.sqrt(2);
				p2lightwaterBubbles1[W].y-=p2lightwaterBubbles1[W].speed/Math.sqrt(2);
			}
			else if(p2lightwaterBubbles1[W].dir == "WD"){
				p2lightwaterBubbles1[W].x+=p2lightwaterBubbles1[W].speed/Math.sqrt(2);
				p2lightwaterBubbles1[W].y-=p2lightwaterBubbles1[W].speed/Math.sqrt(2);
			}
			else if(p2lightwaterBubbles1[W].dir == "AS"){
				p2lightwaterBubbles1[W].x-=p2lightwaterBubbles1[W].speed/Math.sqrt(2);
				p2lightwaterBubbles1[W].y+=p2lightwaterBubbles1[W].speed/Math.sqrt(2);
			}
			else if(p2lightwaterBubbles1[W].dir == "SD"){
				p2lightwaterBubbles1[W].x+=p2lightwaterBubbles1[W].speed/Math.sqrt(2);
				p2lightwaterBubbles1[W].y+=p2lightwaterBubbles1[W].speed/Math.sqrt(2);
			}
			ctx.drawImage(Bubble, p2lightwaterBubbles1[W].x-p2lightwaterBubbles1[W].width*0.5, p2lightwaterBubbles1[W].y-p2lightwaterBubbles1[W].height*0.5);
		}
	}
	for(W in p2lightwaterBubbles2){
		if(p2lightwaterBubbles2[W].timeLeft > 0){
			p2lightwaterBubbles2[W].timeLeft--;
			if(p2lightwaterBubbles2[W].timeLeft <= 0){
				p2lightwaterBubbles2[W].x = -100;
				p2lightwaterBubbles2[W].y = -200;
			}
			for(E in AllEnemies){
				if(collision(p2lightwaterBubbles2[W].dir, p2lightwaterBubbles2[W], AllEnemies[E]) || collision(AllEnemies[E].dir, AllEnemies[E], p2lightwaterBubbles2[W])){
					onHit(AllEnemies[E]);
					p2lightwaterBubbles2[W].timeLeft = 0;
				}
			}
			if(p2lightwaterBubbles2[W].dir == "W"){
				p2lightwaterBubbles2[W].y-=p2lightwaterBubbles2[W].speed;
			}
			else if(p2lightwaterBubbles2[W].dir == "A"){
				p2lightwaterBubbles2[W].x-=p2lightwaterBubbles2[W].speed;
			}
			else if(p2lightwaterBubbles2[W].dir == "S"){
				p2lightwaterBubbles2[W].y+=p2lightwaterBubbles2[W].speed;
			}
			else if(p2lightwaterBubbles2[W].dir == "D"){
				p2lightwaterBubbles2[W].x+=p2lightwaterBubbles2[W].speed;
			}
			else if(p2lightwaterBubbles2[W].dir == "WA"){
				p2lightwaterBubbles2[W].x-=p2lightwaterBubbles2[W].speed/Math.sqrt(2);
				p2lightwaterBubbles2[W].y-=p2lightwaterBubbles2[W].speed/Math.sqrt(2);
			}
			else if(p2lightwaterBubbles2[W].dir == "WD"){
				p2lightwaterBubbles2[W].x+=p2lightwaterBubbles2[W].speed/Math.sqrt(2);
				p2lightwaterBubbles2[W].y-=p2lightwaterBubbles2[W].speed/Math.sqrt(2);
			}
			else if(p2lightwaterBubbles2[W].dir == "AS"){
				p2lightwaterBubbles2[W].x-=p2lightwaterBubbles2[W].speed/Math.sqrt(2);
				p2lightwaterBubbles2[W].y+=p2lightwaterBubbles2[W].speed/Math.sqrt(2);
			}
			else if(p2lightwaterBubbles2[W].dir == "SD"){
				p2lightwaterBubbles2[W].x+=p2lightwaterBubbles2[W].speed/Math.sqrt(2);
				p2lightwaterBubbles2[W].y+=p2lightwaterBubbles2[W].speed/Math.sqrt(2);
			}
			ctx.drawImage(Bubble, p2lightwaterBubbles2[W].x-p2lightwaterBubbles2[W].width*0.5, p2lightwaterBubbles2[W].y-p2lightwaterBubbles2[W].height*0.5);
		}
	}
}
var p2lightwaterBubbles1 = {1: p2lightwaterBubble1, 2: p2lightwaterBubble2, 3: p2lightwaterBubble3, 4: p2lightwaterBubble4};
var p2lightwaterBubbles2 = {1: p2lightwaterBubble5, 2: p2lightwaterBubble6, 3: p2lightwaterBubble7, 4: p2lightwaterBubble8};
var p2lightwater = {
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
				if(Math.sqrt((player2.x-this.x)*(player2.x- this.x) + (player2.y-this.y)*(player2.y-this.y)) > 96){
					if(player2.x-player2.width*0.5 < this.x-this.width*0.5){
						if(this.dir != "A"){
							this.dirSwitch = true;
							this.destDir = "A";
						}
						var playerSlope = (this.y-player2.y)/(this.x-player2.x);
					}
					else if(player2.x - player2.width*0.5 == this.x - this.width*0.5){
						this.dir = this.dir;
					}
					else{
						if(this.dir != "D"){
							this.dirSwitch = true;
							this.destDir = "D";
						}
						var playerSlope = (player2.y-this.y)/(player2.x-this.x);
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
						if(this.x >= player2.x - player2.width*0.5 && this.x <= player2.x + player2.width*0.5){
							if(this.y-this.height*0.5 > player2.y - player2.height*0.5){
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
		if(this.breathcd <=0){
			this.breathcd = 45;
			Beam.currentTime = 0;
			Beam.play();
			if(this.shotNum == 1){
				for(W in p2lightwaterBubbles1){
					p2lightwaterBubbles1[W].x = this.x;
					p2lightwaterBubbles1[W].y = this.y;
					p2lightwaterBubbles1[W].timeLeft = 60;
				}
				this.shotNum++;
			}
			else{
				for(W in p2lightwaterBubbles2){
					p2lightwaterBubbles2[W].x = this.x;
					p2lightwaterBubbles2[W].y = this.y;
					p2lightwaterBubbles2[W].timeLeft = 60;
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
			this.x = player2.x;
			this.y = player2.y;
			this.onScreen = 1;
			this.timeLeft = 450;
			this.width2 = 32;
			this.height2 = 32;
			this.frame = 0;
			this.cd = this.cdTop;
		}
	}
};
var p2AngelTrap1 = {
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
var p2AngelTrap2 = {
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
var p2AngelTrap3 = {
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
var p2AngelTrap4 = {
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

var p2lightdark = {
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
				if(Math.sqrt((player2.x-this.x)*(player2.x- this.x) + (player2.y-this.y)*(player2.y-this.y)) > 96){
					if(player2.x-player2.width*0.5 < this.x-this.width*0.5){
						if(this.dir != "A"){
							this.dirSwitch = true;
							this.destDir = "A";
						}
						var playerSlope = (this.y-player2.y)/(this.x-player2.x);
					}
					else if(player2.x - player2.width*0.5 == this.x - this.width*0.5){
						this.dir = this.dir;
					}
					else{
						if(this.dir != "D"){
							this.dirSwitch = true;
							this.destDir = "D";
						}
						var playerSlope = (player2.y-this.y)/(player2.x-this.x);
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
						if(this.x >= player2.x - player2.width*0.5 && this.x <= player2.x + player2.width*0.5){
							if(this.y-this.height*0.5 > player2.y - player2.height*0.5){
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
		if(this.breathcd <=0){
			this.breathcd = 45;
			if(!p2AngelTrap1.onScreen){
				p2AngelTrap1.x = this.x;
				p2AngelTrap1.y = this.y;
				p2AngelTrap1.onScreen = 1;
				p2AngelTrap1.used = 0;
				flatBoop.currentTime=0;
				flatBoop.play();
			}
			else if(!p2AngelTrap2.onScreen){
				p2AngelTrap2.x = this.x;
				p2AngelTrap2.y = this.y;
				p2AngelTrap2.onScreen = 1;
				p2AngelTrap2.used = 0;
				flatBoop.currentTime=0;
				flatBoop.play();
			}
			else if(!p2AngelTrap3.onScreen){
				p2AngelTrap3.x = this.x;
				p2AngelTrap3.y = this.y;
				p2AngelTrap3.onScreen = 1;
				p2AngelTrap3.used = 0;
				flatBoop.currentTime=0;
				flatBoop.play();
			}
			else if(!p2AngelTrap4.onScreen){
				p2AngelTrap4.x = this.x;
				p2AngelTrap4.y = this.y;
				p2AngelTrap4.onScreen = 1;
				p2AngelTrap4.used = 0;
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
			this.x = player2.x;
			this.y = player2.y;
			this.onScreen = 1;
			this.timeLeft = 600;
			this.width2 = 32;
			this.height2 = 32;
			this.frame = 0;
			this.cd = this.cdTop;
		}
	}
};
var p2AllFire = {1: p2fire, 2: p2fire2, 3: p2Mfire, 4: p2Mfire2, 5: p2Mfire3, 6: p2Mfire4, 7: p2fireice, 8: p2fireice2, 9: p2firelightningf1, 10: p2firelightningf2, 11: p2firelightningf3, 12: p2firelightningf4, 13: p2flameBreath1, 14: p2flameBreath2, 15: p2flameBreath3, 16: p2flameBreath4,
				17: p2flameBreath5};
var p2darkSpikes = {1: p2dark, 2: p2dark12, 3: p2dark13, 4: p2dark14, 5: p2dark15, 6: p2dark16, 7: p2dark17, 8: p2AngelTrap1, 9: p2AngelTrap2, 10: p2AngelTrap3, 11: p2AngelTrap4};*/