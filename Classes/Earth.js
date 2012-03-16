// Earth: Heals player hp by 1
var earth = {
	color: "33CC00",
	timeLeft: 0,
	x: -100,
	y: -200,
	cd: 0,
	speed: 4,

	draw: function(){
		if(this.timeLeft == 0){
			this.x = -100;
			this.y = -200;
		}
		else{
			ctx.fillStyle = this.color;
			ctx.font = "18pt Arial";
			ctx.fillText("+1", this.x, this.y);
		}	
	},
	
	move: function(){
		if(this.cd > 0){
			this.cd-=1;
		}
		if(this.timeLeft > 0){
			this.y -= this.speed;
			this.timeLeft--;}
	},
	// Spawn
	shoot: function(){
	if(this.cd == 0){
		Pickup.play();
		this.x = player.x;
		this.y = player.y;
		this.cd = 1020;
		this.timeLeft = 15;
		if(player.hp < 3){
			player.hp+=1;
		}
	}
	else{
		return 0;
	}
	}	
};
// Earth2: Heals player hp by 2
var earth2 = {
	color: "33CC00",
	timeLeft: 0,
	x: -100,
	y: -200,
	cd: 0,
	speed: 4,

	draw: function(){
		if(this.timeLeft == 0){
			this.x = -100;
			this.y = -200;
		}
		else{
			ctx.fillStyle = this.color;
			ctx.font = "18pt Arial";
			ctx.fillText("+2", this.x, this.y);
		}	
	},
	
	move: function(){
		if(this.cd > 0){
			this.cd-=1;
		}
		if(this.timeLeft > 0){
			this.y -= this.speed;
			this.timeLeft--;}
	},
	// Spawn
	shoot: function(){
	if(this.cd == 0){
		Pickup.play();
		this.x = player.x;
		this.y = player.y;
		this.cd = 1020;
		this.timeLeft = 15;
		if(player.hp < 2){
			player.hp+=2;
		}
		else if(player.hp < 3){
			player.hp+=1;
		}
	}
	else{
		return 0;
	}
	}	
};