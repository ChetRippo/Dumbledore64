//---------------------------------------------- Pickups ----------------------------------------------------------------------------//
// Fire drop
var redCube = {
	type: 1,
	x: -100,
	y: -200,
	width: 32,
	height: 32,
	timeLeft: 0,
	
	index: 1,
	stage: "up",
	
	draw: function(){
		if(this.timeLeft > 0){
			ctx.drawImage(Fires[this.index], this.x-this.width/2, this.y-this.height/2);
			this.timeLeft-=1;
			if(this.stage == "up"){
				this.index++;
			}
			else{
				this.index-=1;
			}
			if(this.index == 6){
				this.index = 5;
				this.stage = "down";
			}
			else if(this.index == 0){
				this.index = 1;
				this.stage = "up";
			}
		}
		else{
			this.x = -100;
			this.y = -200;
			this.timeLeft = 0;
		}
	},
	onHit: function(){
		if(spell1 == "N/A"){
			spell1 = "Fire";
			if(typemarker.x != -100 && typemarker2.x != -100){
				typemarker3.text = "+ Fire";
				typemarker3.x = player.x-player.width*2;
				typemarker3.y = player.y;
				typemarker3.timeLeft = 20;
			}
			else if(typemarker.x != -100){
				typemarker2.text = "+ Fire";
				typemarker2.x = player.x-player.width*2;
				typemarker2.y = player.y;
				typemarker2.timeLeft = 20;
			}
			else{
				typemarker.text = "+ Fire";
				typemarker.x = player.x-player.width*2;
				typemarker.y = player.y;
				typemarker.timeLeft = 20;
			}
		}
		else if(spell2 == "N/A"){
			spell2 = "Fire";
			if(typemarker.x != -100 && typemarker2.x != -100){
				typemarker3.text = "+ Fire";
				typemarker3.x = player.x-player.width*2;
				typemarker3.y = player.y;
				typemarker3.timeLeft = 20;
			}
			else if(typemarker.x != -100){
				typemarker2.text = "+ Fire";
				typemarker2.x = player.x-player.width*2;
				typemarker2.y = player.y;
				typemarker2.timeLeft = 20;
			}
			else{
				typemarker.text = "+ Fire";
				typemarker.x = player.x-player.width*2;
				typemarker.y = player.y;
				typemarker.timeLeft = 20;
			}
		}
		this.x = -100;
		this.y = -200;
		this.timeLeft = 0;
	}
};

// Ice drop
var tealCube = {
	type: 1,
	x: -100,
	y: -200,
	width: 32,
	height: 32,
	timeLeft: 0,
	index: 1,
	stage: "up",
	
	draw: function(){
		if(this.timeLeft > 0){
			ctx.drawImage(Ices[this.index], this.x-this.width/2, this.y-this.height/2);
			this.timeLeft-=1;
			if(this.stage == "up"){
				this.index++;
			}
			else{
				this.index-=1;
			}
			if(this.index == 6){
				this.index = 5;
				this.stage = "down";
			}
			else if(this.index == 0){
				this.index = 1;
				this.stage = "up";
			}
		}
		else{
			this.x = -100;
			this.y = -200;
			this.timeLeft = 0;
		}
	},
	onHit: function(){
		if(spell1 == "N/A"){
			spell1 = "Ice";
			if(typemarker.x != -100 && typemarker2.x != -100){
				typemarker3.text = "+ Ice";
				typemarker3.x = player.x-player.width*2;
				typemarker3.y = player.y;
				typemarker3.timeLeft = 20;
			}
			else if(typemarker.x != -100){
				typemarker2.text = "+ Ice";
				typemarker2.x = player.x-player.width*2;
				typemarker2.y = player.y;
				typemarker2.timeLeft = 20;
			}
			else{
				typemarker.text = "+ Ice";
				typemarker.x = player.x-player.width*2;
				typemarker.y = player.y;
				typemarker.timeLeft = 20;
			}
		}
		else if(spell2 == "N/A"){
			spell2 = "Ice";
			if(typemarker.x != -100 && typemarker2.x != -100){
				typemarker3.text = "+ Ice";
				typemarker3.x = player.x-player.width*2;
				typemarker3.y = player.y;
				typemarker3.timeLeft = 20;
			}
			else if(typemarker.x != -100){
				typemarker2.text = "+ Ice";
				typemarker2.x = player.x-player.width*2;
				typemarker2.y = player.y;
				typemarker2.timeLeft = 20;
			}
			else{
				typemarker.text = "+ Ice";
				typemarker.x = player.x-player.width*2;
				typemarker.y = player.y;
				typemarker.timeLeft = 20;
			}
		}
		this.x = -100;
		this.y = -200;
		this.timeLeft = 0;
	}
};

// Earth drop
var greenCube = {
	type: 1,
	x: -100,
	y: -200,
	width: 32,
	height: 32,
	timeLeft: 0,
	index: 1,
	stage: "up",
	
	draw: function(){
		if(this.timeLeft > 0){
			ctx.drawImage(Earths[this.index], this.x-this.width/2, this.y-this.height/2);
			this.timeLeft-=1;
			if(this.stage == "up"){
				this.index++;
			}
			else{
				this.index-=1;
			}
			if(this.index == 6){
				this.index = 5;
				this.stage = "down";
			}
			else if(this.index == 0){
				this.index = 1;
				this.stage = "up";
			}
		}
		else{
			this.x = -100;
			this.y = -200;
			this.timeLeft = 0;
		}
	},
	onHit: function(){
		if(spell1 == "N/A"){
			spell1 = "Earth";
			if(typemarker.x != -100 && typemarker2.x != -100){
				typemarker3.text = "+ Earth";
				typemarker3.x = player.x-player.width*2;
				typemarker3.y = player.y;
				typemarker3.timeLeft = 20;
			}
			else if(typemarker.x != -100){
				typemarker2.text = "+ Earth";
				typemarker2.x = player.x-player.width*2;
				typemarker2.y = player.y;
				typemarker2.timeLeft = 20;
			}
			else{
				typemarker.text = "+ Earth";
				typemarker.x = player.x-player.width*2;
				typemarker.y = player.y;
				typemarker.timeLeft = 20;
			}
		}
		else if(spell2 == "N/A"){
			spell2 = "Earth";
			if(typemarker.x != -100 && typemarker2.x != -100){
				typemarker3.text = "+ Earth";
				typemarker3.x = player.x-player.width*2;
				typemarker3.y = player.y;
				typemarker3.timeLeft = 20;
			}
			else if(typemarker.x != -100){
				typemarker2.text = "+ Earth";
				typemarker2.x = player.x-player.width*2;
				typemarker2.y = player.y;
				typemarker2.timeLeft = 20;
			}
			else{
				typemarker.text = "+ Earth";
				typemarker.x = player.x-player.width*2;
				typemarker.y = player.y;
				typemarker.timeLeft = 20;
			}
		}
		this.x = -100;
		this.y = -200;
		this.timeLeft = 0;
	}
};

// Thunder drop
var yellowCube = {
	type: 1,
	x: -100,
	y: -200,
	width: 32,
	height: 32,
	timeLeft: 0,
	index: 1,
	stage: "up",
	
	draw: function(){
		if(this.timeLeft > 0){
			ctx.drawImage(Thunders[this.index], this.x-this.width/2, this.y-this.height/2);
			this.timeLeft-=1;
			if(this.stage == "up"){
				this.index++;
			}
			else{
				this.index-=1;
			}
			if(this.index == 6){
				this.index = 5;
				this.stage = "down";
			}
			else if(this.index == 0){
				this.index = 1;
				this.stage = "up";
			}
		}
		else{
			this.x = -100;
			this.y = -200;
			this.timeLeft = 0;
		}
	},
	onHit: function(){
		if(spell1 == "N/A"){
			spell1 = "Lightning";
			if(typemarker.x != -100 && typemarker2.x != -100){
				typemarker3.text = "+ Lightning";
				typemarker3.x = player.x-player.width*2;
				typemarker3.y = player.y;
				typemarker3.timeLeft = 20;
			}
			else if(typemarker.x != -100){
				typemarker2.text = "+ Lightning";
				typemarker2.x = player.x-player.width*2;
				typemarker2.y = player.y;
				typemarker2.timeLeft = 20;
			}
			else{
				typemarker.text = "+ Lightning";
				typemarker.x = player.x-player.width*2;
				typemarker.y = player.y;
				typemarker.timeLeft = 20;
			}
		}
		else if(spell2 == "N/A"){
			spell2 = "Lightning";
			if(typemarker.x != -100 && typemarker2.x != -100){
				typemarker3.text = "+ Lightning";
				typemarker3.x = player.x-player.width*2;
				typemarker3.y = player.y;
				typemarker3.timeLeft = 20;
			}
			else if(typemarker.x != -100){
				typemarker2.text = "+ Lightning";
				typemarker2.x = player.x-player.width*2;
				typemarker2.y = player.y;
				typemarker2.timeLeft = 20;
			}
			else{
				typemarker.text = "+ Lightning";
				typemarker.x = player.x-player.width*2;
				typemarker.y = player.y;
				typemarker.timeLeft = 20;
			}
		}
		this.x = -100;
		this.y = -200;
		this.timeLeft = 0;
	}
};

// Wind drop
var greyCube = {
	type: 1,
	x: -100,
	y: -200,
	width: 32,
	height: 32,
	timeLeft: 0,
	index: 1,
	stage: "up",
	
	draw: function(){
		if(this.timeLeft > 0){
			ctx.drawImage(Winds[this.index], this.x-this.width/2, this.y-this.height/2);
			this.timeLeft-=1;
			if(this.stage == "up"){
				this.index++;
			}
			else{
				this.index-=1;
			}
			if(this.index == 6){
				this.index = 5;
				this.stage = "down";
			}
			else if(this.index == 0){
				this.index = 1;
				this.stage = "up";
			}
		}
		else{
			this.x = -100;
			this.y = -200;
			this.timeLeft = 0;
		}
	},
	onHit: function(){
		if(spell1 == "N/A"){
			spell1 = "Air";
			if(typemarker.x != -100 && typemarker2.x != -100){
				typemarker3.text = "+ Air";
				typemarker3.x = player.x-player.width*2;
				typemarker3.y = player.y;
				typemarker3.timeLeft = 20;
			}
			else if(typemarker.x != -100){
				typemarker2.text = "+ Air";
				typemarker2.x = player.x-player.width*2;
				typemarker2.y = player.y;
				typemarker2.timeLeft = 20;
			}
			else{
				typemarker.text = "+ Air";
				typemarker.x = player.x-player.width*2;
				typemarker.y = player.y;
				typemarker.timeLeft = 20;
			}
		}
		else if(spell2 == "N/A"){
			spell2 = "Air";
			if(typemarker.x != -100 && typemarker2.x != -100){
				typemarker3.text = "+ Air";
				typemarker3.x = player.x-player.width*2;
				typemarker3.y = player.y;
				typemarker3.timeLeft = 20;
			}
			else if(typemarker.x != -100){
				typemarker2.text = "+ Air";
				typemarker2.x = player.x-player.width*2;
				typemarker2.y = player.y;
				typemarker2.timeLeft = 20;
			}
			else{
				typemarker.text = "+ Air";
				typemarker.x = player.x-player.width*2;
				typemarker.y = player.y;
				typemarker.timeLeft = 20;
			}
		}
		this.x = -100;
		this.y = -200;
		this.timeLeft = 0;
	}
};

// Mystic drop
var purpleCube = {
	type: 1,
	x: -100,
	y: -200,
	width: 32,
	height: 32,
	timeLeft: 0,
	index: 1,
	stage: "up",
	
	draw: function(){
		if(this.timeLeft > 0){
			ctx.drawImage(Mystics[this.index], this.x-this.width/2, this.y-this.height/2);
			this.timeLeft-=1;
			if(this.stage == "up"){
				this.index++;
			}
			else{
				this.index-=1;
			}
			if(this.index == 6){
				this.index = 5;
				this.stage = "down";
			}
			else if(this.index == 0){
				this.index = 1;
				this.stage = "up";
			}
		}
		else{
			this.x = -100;
			this.y = -200;
			this.timeLeft = 0;
		}
	},
	onHit: function(){
		if(spell1 == "N/A"){
			spell1 = "Mystic";
			if(typemarker.x != -100 && typemarker2.x != -100){
				typemarker3.text = "+ Mystic";
				typemarker3.x = player.x-player.width*2;
				typemarker3.y = player.y;
				typemarker3.timeLeft = 20;
			}
			else if(typemarker.x != -100){
				typemarker2.text = "+ Mystic";
				typemarker2.x = player.x-player.width*2;
				typemarker2.y = player.y;
				typemarker2.timeLeft = 20;
			}
			else{
				typemarker.text = "+ Mystic";
				typemarker.x = player.x-player.width*2;
				typemarker.y = player.y;
				typemarker.timeLeft = 20;
			}
		}
		else if(spell2 == "N/A"){
			spell2 = "Mystic";
			if(typemarker.x != -100 && typemarker2.x != -100){
				typemarker3.text = "+ Mystic";
				typemarker3.x = player.x-player.width*2;
				typemarker3.y = player.y;
				typemarker3.timeLeft = 20;
			}
			else if(typemarker.x != -100){
				typemarker2.text = "+ Mystic";
				typemarker2.x = player.x-player.width*2;
				typemarker2.y = player.y;
				typemarker2.timeLeft = 20;
			}
			else{
				typemarker.text = "+ Mystic";
				typemarker.x = player.x-player.width*2;
				typemarker.y = player.y;
				typemarker.timeLeft = 20;
			}
		}
		this.x = -100;
		this.y = -200;
		this.timeLeft = 0;
	}
};
// Water drop
var blueCube = {
	type: 1,
	x: -100,
	y: -200,
	width: 32,
	height: 32,
	timeLeft: 0,
	index: 1,
	stage: "up",
	
	draw: function(){
		if(this.timeLeft > 0){
			ctx.drawImage(Waters[this.index], this.x-this.width/2, this.y-this.height/2);
			this.timeLeft-=1;
			if(this.stage == "up"){
				this.index++;
			}
			else{
				this.index-=1;
			}
			if(this.index == 6){
				this.index = 5;
				this.stage = "down";
			}
			else if(this.index == 0){
				this.index = 1;
				this.stage = "up";
			}
		}
		else{
			this.x = -100;
			this.y = -200;
			this.timeLeft = 0;
		}
	},
	onHit: function(){
		if(spell1 == "N/A"){
			spell1 = "Water";
			if(typemarker.x != -100 && typemarker2.x != -100){
				typemarker3.text = "+ Water";
				typemarker3.x = player.x-player.width*2;
				typemarker3.y = player.y;
				typemarker3.timeLeft = 20;
			}
			else if(typemarker.x != -100){
				typemarker2.text = "+ Water";
				typemarker2.x = player.x-player.width*2;
				typemarker2.y = player.y;
				typemarker2.timeLeft = 20;
			}
			else{
				typemarker.text = "+ Water";
				typemarker.x = player.x-player.width*2;
				typemarker.y = player.y;
				typemarker.timeLeft = 20;
			}
		}
		else if(spell2 == "N/A"){
			spell2 = "Water";
			if(typemarker.x != -100 && typemarker2.x != -100){
				typemarker3.text = "+ Water";
				typemarker3.x = player.x-player.width*2;
				typemarker3.y = player.y;
				typemarker3.timeLeft = 20;
			}
			else if(typemarker.x != -100){
				typemarker2.text = "+ Water";
				typemarker2.x = player.x-player.width*2;
				typemarker2.y = player.y;
				typemarker2.timeLeft = 20;
			}
			else{
				typemarker.text = "+ Water";
				typemarker.x = player.x-player.width*2;
				typemarker.y = player.y;
				typemarker.timeLeft = 20;
			}
		}
		this.x = -100;
		this.y = -200;
		this.timeLeft = 0;
	}
};
// Random drop
var RandomCube = {
	type: 1,
	x: -100,
	y: -200,
	width: 32,
	height: 32,
	timeLeft: 0,
	index: 1,
	stage: "up",
	Loop: {1: Fires, 2: Ices, 3: Earths, 4: Thunders, 5: Winds, 6: Mystics, 7: Waters},
	Elem: {1: "Fire", 2: "Ice", 3: "Earth", 4: "Lightning", 5: "Air", 6: "Mystic", 7: "Water"},
	draw: function(){
		if(this.timeLeft > 0){
			ctx.drawImage(this.Loop[this.index][this.index], this.x-this.width/2, this.y-this.height/2);
			this.timeLeft-=1;
			if(this.stage == "up"){
				this.index++;
			}
			else{
				this.index-=1;
			}
			if(this.index == 6){
				this.index = 5;
				this.stage = "down";
			}
			else if(this.index == 0){
				this.index = 1;
				this.stage = "up";
			}
		}
		else{
			this.x = -100;
			this.y = -200;
			this.timeLeft = 0;
		}
	},
	onHit: function(){
		if(spell1 == "N/A"){
			spell1 = this.Elem[Math.floor(Math.random() * 7) + 1];
			if(typemarker.x != -100 && typemarker2.x != -100){
				typemarker3.text = "+ " + spell1;
				typemarker3.x = player.x-player.width*2;
				typemarker3.y = player.y;
				typemarker3.timeLeft = 20;
			}
			else if(typemarker.x != -100){
				typemarker2.text = "+ " + spell1;
				typemarker2.x = player.x-player.width*2;
				typemarker2.y = player.y;
				typemarker2.timeLeft = 20;
			}
			else{
				typemarker.text = "+ " + spell1;
				typemarker.x = player.x-player.width*2;
				typemarker.y = player.y;
				typemarker.timeLeft = 20;
			}
		}
		else if(spell2 == "N/A"){
			spell2 = this.Elem[Math.floor(Math.random() * 7) + 1];
			if(typemarker.x != -100 && typemarker2.x != -100){
				typemarker3.text = "+ " + spell2;
				typemarker3.x = player.x-player.width*2;
				typemarker3.y = player.y;
				typemarker3.timeLeft = 20;
			}
			else if(typemarker.x != -100){
				typemarker2.text = "+ " + spell2;
				typemarker2.x = player.x-player.width*2;
				typemarker2.y = player.y;
				typemarker2.timeLeft = 20;
			}
			else{
				typemarker.text = "+ " + spell2;
				typemarker.x = player.x-player.width*2;
				typemarker.y = player.y;
				typemarker.timeLeft = 20;
			}
		}
		this.x = -100;
		this.y = -200;
		this.timeLeft = 0;
	}
};
var RandEffect = {
	color: "FF00FF",
	width: 32,
	height: 32,
	x: -100,
	y: -200,
	onScreen: 0,
	frame: 0,
	used: 0,
	draw: function(){
		if(this.onScreen == 1){
			ctx.fillStyle = this.color;
			ctx.globalAlpha = 0.25;
			if(this.used == 0){
				fastbeepsHigh.currentTime=0;
				fastbeepsHigh.play();
				this.used = 1;
			}
			if(this.frame < 4){
				ctx.fillRect(this.x-this.width/2, this.y-this.height/2, this.width, this.height);
				this.width = this.width + 8 * this.frame;
				this.height = this.height + 8 * this.frame;
				this.frame++;
			}
			else if(this.frame < 8){
				ctx.fillRect(this.x-this.width/2, this.y-this.height/2, this.width, this.height);
				this.width = this.width - 8 * this.frame;
				this.height = this.height - 8 * this.frame;
				this.frame++;
			}
			else{
				this.frame = 0;
				this.onScreen = 0;
				this.width = 32;
				this.height = 32;
			}
			ctx.globalAlpha = 1;
		}
	}
};
// hpUp drop
var hpUp = {
	type: 0,
	x: -100,
	y: -200,
	width: 32,
	height: 32,
	boss: "treeW",
	
	draw: function(){
		if(this.boss == "treeW"){
			ctx.drawImage(maxUP, this.x - this.width / 2, this.y - this.height / 2);
		}
		if(this.boss == "Dragon"){
			ctx.drawImage(DragonmaxUP, this.x - this.width / 2, this.y - this.height / 2);
		}
	},
	onHit: function(){
		if(typemarker.x != -100 && typemarker2.x != -100){
			typemarker3.text = "+ Max Hp";
			typemarker3.x = player.x-player.width*2;
			typemarker3.y = player.y;
			typemarker3.speed = 2;
			typemarker3.timeLeft = 90;
		}
		else if(typemarker.x != -100){
			typemarker2.text = "+ Max Hp";
			typemarker2.x = player.x-player.width*2;
			typemarker2.y = player.y;
			typemarker2.speed = 2;
			typemarker2.timeLeft = 90;
		}
		else{
			typemarker.text = "+ Max Hp";
			typemarker.x = player.x-player.width*2;
			typemarker.y = player.y;
			typemarker.speed = 2;
			typemarker.timeLeft = 90;
		}
		player.maxhp+=1;
		player.hp = player.maxhp;
		Frozen.currentTime=0;
		Frozen.play();
		hpParticleW.x = this.x;
		hpParticleW.y = this.y- 20;
		hpParticleA.x = this.x-20;
		hpParticleA.y = this.y;
		hpParticleS.x = this.x;
		hpParticleS.y = this.y+20;
		hpParticleD.x = this.x+20;
		hpParticleD.y = this.y;
		hpParticleWA.x = this.x-16;
		hpParticleWA.y = this.y-16;
		hpParticleWD.x = this.x+16;
		hpParticleWD.y = this.y-16;
		hpParticleAS.x = this.x-16;
		hpParticleAS.y = this.y+16;
		hpParticleSD.x = this.x+16;
		hpParticleSD.y = this.y+16;
		if(this.boss == "treeW"){
			TwizEffect.x = 500;
			TwizEffect.y = -400;
			TwizEffect.width = 0;
			TwizEffect.height = 0;
			TwizEffect.onScreen = 0;
			TwizEffect.frame = 0;
		}
		this.x = -100;
		this.y = -200;
	}
};	
var counter = 0;
// hpUp drop
var hpParticleW = {
	type: 0,
	x: -100,
	y: -200,
	width: 32,
	height: 32,
	dir: "W",
	speed: 8,
	dirct: 30,
	index: 1,
	
	draw: function(){
		if(this.x != -100){
			ctx.drawImage(colorParticles[this.index], this.x - this.width / 2, this.y - this.height / 2);
			this.index++;
			if(this.index > 8){
				this.index = 1;
			}
		}
	},
	onHit: function(){
		if(collision(this.dir, this, player) && this.dirct == 0){
			this.x = -100;
			this.y = -200;
			this.dir = "W";
			this.dirct = 10;
			this.index = 1;
			counter++;
		}
	}
};	
// hpUp drop
var hpParticleA = {
	type: 0,
	x: -100,
	y: -200,
	width: 32,
	height: 32,
	dir: "A",
	speed: 8,
	dirct: 30,
	index: 2,
	
	draw: function(){
		if(this.x != -100){
			ctx.drawImage(colorParticles[this.index], this.x - this.width / 2, this.y - this.height / 2);
			this.index++;
			if(this.index > 8){
				this.index = 1;
			}
		}
	},
	onHit: function(){
		if(collision(this.dir, this, player) && this.dirct == 0){
			this.x = -100;
			this.y = -200;
			this.dir = "A";
			this.dirct = 10;
			this.index = 2;
			counter++;
		}
	}
};	
// hpUp drop
var hpParticleS = {
	type: 0,
	x: -100,
	y: -200,
	width: 32,
	height: 32,
	dir: "S",
	speed: 8,
	dirct: 30,
	index: 3,
	
	draw: function(){
		if(this.x != -100){
			ctx.drawImage(colorParticles[this.index], this.x - this.width / 2, this.y - this.height / 2);
			this.index++;
			if(this.index > 8){
				this.index = 1;
			}
		}
	},
	onHit: function(){
		if(collision(this.dir, this, player) && this.dirct == 0){
			this.x = -100;
			this.y = -200;
			this.dir = "S";
			this.dirct = 10;
			this.index = 3;
			counter++;
		}
	}
};	
// hpUp drop
var hpParticleD = {
	type: 0,
	x: -100,
	y: -200,
	width: 32,
	height: 32,
	dir: "D",
	speed: 8,
	dirct: 30,
	index: 4,
	
	draw: function(){
		if(this.x != -100){
			ctx.drawImage(colorParticles[this.index], this.x - this.width / 2, this.y - this.height / 2);
			this.index++;
			if(this.index > 8){
				this.index = 1;
			}
		}
	},
	onHit: function(){
		if(collision(this.dir, this, player) && this.dirct == 0){
			this.x = -100;
			this.y = -200;
			this.dir = "D";
			this.dirct = 10;
			this.index = 4;
			counter++;
		}
	}
};	
// hpUp drop
var hpParticleWA = {
	type: 0,
	x: -100,
	y: -200,
	width: 32,
	height: 32,
	dir: "WA",
	speed: 8,
	dirct: 30,
	index: 5,
	
	draw: function(){
		if(this.x != -100){
			ctx.drawImage(colorParticles[this.index], this.x - this.width / 2, this.y - this.height / 2);
			this.index++;
			if(this.index > 8){
				this.index = 1;
			}
		}
	},
	onHit: function(){
		if(collision(this.dir, this, player) && this.dirct == 0){
			this.x = -100;
			this.y = -200;
			this.dir = "WA";
			this.dirct = 10;
			this.index = 5;
			counter++;
		}
	}
};
// hpUp drop
var hpParticleWD = {
	type: 0,
	x: -100,
	y: -200,
	width: 32,
	height: 32,
	dir: "WD",
	speed: 8,
	dirct: 30,
	index: 6,
	
	draw: function(){
		if(this.x != -100){
			ctx.drawImage(colorParticles[this.index], this.x - this.width / 2, this.y - this.height / 2);
			this.index++;
			if(this.index > 8){
				this.index = 1;
			}
		}
	},
	onHit: function(){
		if(collision(this.dir, this, player) && this.dirct == 0){
			this.x = -100;
			this.y = -200;
			this.dir = "WD";
			this.dirct = 10;
			this.index = 6;
			counter++;
		}
	}
};
// hpUp drop
var hpParticleAS = {
	type: 0,
	x: -100,
	y: -200,
	width: 32,
	height: 32,
	dir: "AS",
	speed: 8,
	dirct: 30,
	index: 7,
	
	draw: function(){
		if(this.x != -100){
			ctx.drawImage(colorParticles[this.index], this.x - this.width / 2, this.y - this.height / 2);
			this.index++;
			if(this.index > 8){
				this.index = 1;
			}
		}
	},
	onHit: function(){
		if(collision(this.dir, this, player) && this.dirct == 0){
			this.x = -100;
			this.y = -200;
			this.dir = "AS";
			this.dirct = 10;
			this.index = 7;
			counter++;
		}
	}
};
// hpUp drop
var hpParticleSD = {
	type: 0,
	x: -100,
	y: -200,
	width: 32,
	height: 32,
	dir: "SD",
	speed: 8,
	speed2: 4,
	dirct: 30,
	index: 8,
	
	draw: function(){
		if(this.x != -100){
			player.speed = player.speed2;
			ctx.drawImage(colorParticles[this.index], this.x - this.width / 2, this.y - this.height / 2);
			this.index++;
			if(this.index > 8){
				this.index = 1;
			}
		}
	},
	onHit: function(){
		if(this.x != -100 && this.dirct > 0){
			ctx.globalAlpha = 0.1;
			for(H in hpParticles){
				hpParticles[H].speed = this.speed2;
			}
		}
		else if(this.x != -100 && this.dirct == 0){
			ctx.globalAlpha = 1;
			for(H in hpParticles){
				hpParticles[H].speed = this.speed2 * 3;
			}
		}
		if(counter == 8){
			ctx.globalAlpha = 1;
			player.speed = player.speed2*4;
			if(hpUp.boss == "treeW"){
				jungleAni = true;
				radiofailure.currentTime=0;
				radiofailure.play();
			}
			counter = 0;
		}
		if(collision(this.dir, this, player) && this.dirct == 0){
			this.x = -100;
			this.y = -200;
			this.dir = "SD";
			this.dirct = 10;
			this.index = 8;
			counter++;
		}
	}
};
function HpMove(E){
	if(E.x != -100){
		if(E.dir == "W"){
			E.y-=E.speed;
		}
		if(E.dir == "A"){
			E.x-=E.speed;
		}
		if(E.dir == "S"){
			E.y+=E.speed;
		}
		if(E.dir == "D"){
			E.x+=E.speed;
		}
		if(E.dir == "AS"){
			E.y+=E.speed;
			E.x-=E.speed;
		}
		if(E.dir == "WA"){
			E.y-=E.speed;
			E.x-=E.speed;
		}
		if(E.dir == "WD"){
			E.y-=E.speed;
			E.x+=E.speed;
		}
		if(E.dir == "SD"){
			E.y+=E.speed;
			E.x+=E.speed;
		}
	}	
}
function HpAi(E){
	if(E.dirct == 0 && E.x != -100){
		var xdiff = player.x - E.x;
		var ydiff = player.y - E.y;
		if(xdiff < 4 && ydiff < 4){
			E.dir = "WA";
		}
		else if(xdiff < 4 && ydiff > 4){
			E.dir = "AS";
		}
		else if(xdiff > 4 && ydiff < 4){
			E.dir = "WD";
		}
		else if (xdiff > 4 && ydiff > 4){
			E.dir = "SD";
		}
		else if (xdiff <= 4 && ydiff > 4){
			E.dir = "S";
		}
		else if(xdiff <= 4 && ydiff < 4){
			E.dir = "W";
		}
		else if(xdiff < 4 && ydiff <= 4){
			E.dir = "A";
		}
		else{
			E.dir = "D";
		}
	}
	else if(E.dirct>=0 && E.x != -100){
		E.dirct-=1;
	}
}
var Boxes = {1: redCube, 2: tealCube, 3: greenCube, 4: yellowCube, 5: greyCube, 6: purpleCube, 7: blueCube, 8: hpUp, 9: RandomCube};
var hpParticles = {1: hpParticleW, 2: hpParticleA, 3: hpParticleS, 4: hpParticleD, 5: hpParticleWA, 6: hpParticleWD, 7: hpParticleAS, 8: hpParticleSD};
// If you pick it up
function pickup(C){
	if(collision(player.dir, player, C)){
		if(C.type != 0){
			if((spell1 != "N/A") && (spell2 != "N/A")){
				if(marker.x != -100 && marker2.x != -100 && marker3.x != -100){
					marker4.points = "50";
					marker4.mult = 1;
					marker4.x = player.x;
					marker4.y = player.y;
					marker4.timeLeft = 20;
				}
				else if(marker.x != -100 && marker2.x != -100){
					marker3.points = "50";
					marker3.mult = 1;
					marker3.x = player.x;
					marker3.y = player.y;
					marker3.timeLeft = 20;
				}
				else if(marker.x != -100){
					marker2.points = "50";
					marker2.mult = 1;
					marker2.x = player.x;
					marker2.y = player.y;
					marker2.timeLeft = 20;
				}
				else{
					marker.points = "50";
					marker.mult = 1;
					marker.x = player.x;
					marker.y = player.y;
					marker.timeLeft = 20;
				}
				score+=50;
			}
		}
		Pickup.currentTime=0;
		Pickup.play();
		C.onHit();
	}
}