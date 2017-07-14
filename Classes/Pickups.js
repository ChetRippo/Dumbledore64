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
	faded: false,
	fadeCounter: 0,	
	arrowIndex: 1,
	draw: function(){
		if(this.timeLeft > 0){
			if(this.timeLeft < 46 && this.timeLeft*0.1 == Math.round(this.timeLeft*0.1)){
				this.faded = true;
				this.fadeCounter = 5;
			}
			if(this.faded == true){
				ctx.globalAlpha = Alpha*0.25;
				this.fadeCounter--;
				if(this.fadeCounter <= 0){
					this.faded = false;
				}
			}
			if(STATE == "Tutorial" && (spell1 == "N/A" || spell2 == "N/A")){
				if(this.arrowIndex < 6){
					ctx.drawImage(PickupArrow1, this.x-this.width*0.5, this.y-this.height*0.5 - 36);
				}
				else{
					ctx.drawImage(PickupArrow2, this.x-this.width*0.5, this.y-this.height*0.5 - 36);
				}
				this.arrowIndex++;
				if(this.arrowIndex >= 11){
					this.arrowIndex = 1;
				}
			}
			ctx.drawImage(Pickup_Elements, (Math.floor((this.index-1)*0.5))*32, 0, 32, 32, this.x-this.width*0.5, this.y-this.height*0.5, 32, 32);
			ctx.globalAlpha = Alpha;
			if(STATE != "Tutorial"){
				this.timeLeft-=1;
			}
			this.index++;
			if(this.index == 11){
				this.index = 1;
			}
		}
		else{
			this.x = -100;
			this.y = -200;
			this.timeLeft = 0;
			this.faded = false;
			this.fadeCounter = 0;
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
	faded: false,
	fadeCounter: 0,
	draw: function(){
		if(this.timeLeft > 0){
			if(this.timeLeft < 46 && this.timeLeft*0.1 == Math.round(this.timeLeft*0.1)){
				this.faded = true;
				this.fadeCounter = 5;
			}
			if(this.faded == true){
				ctx.globalAlpha = Alpha*0.25;
				this.fadeCounter--;
				if(this.fadeCounter <= 0){
					this.faded = false;
				}
			}
			ctx.drawImage(Pickup_Elements, (Math.floor((this.index-1)*0.5))*32, 32, 32, 32, this.x-this.width*0.5, this.y-this.height*0.5, 32, 32);
			ctx.globalAlpha = Alpha;
			this.timeLeft-=1;
				this.index++;
			if(this.index == 11){
				this.index = 1;
			}
		}
		else{
			this.x = -100;
			this.y = -200;
			this.timeLeft = 0;
			this.faded = false;
			this.fadeCounter = 0;
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
	faded: false,
	fadeCounter: 0,
	draw: function(){
		if(this.timeLeft > 0){
			if(this.timeLeft < 46 && this.timeLeft*0.1 == Math.round(this.timeLeft*0.1)){
				this.faded = true;
				this.fadeCounter = 5;
			}
			if(this.faded == true){
				ctx.globalAlpha = Alpha*0.25;
				this.fadeCounter--;
				if(this.fadeCounter <= 0){
					this.faded = false;
				}
			}
			ctx.drawImage(Pickup_Elements, (Math.floor((this.index-1)*0.5))*32, 64, 32, 32, this.x-this.width*0.5, this.y-this.height*0.5, 32, 32);
			ctx.globalAlpha = Alpha;
			this.timeLeft-=1;
				this.index++;
			if(this.index == 11){
				this.index = 1;
			}
		}
		else{
			this.x = -100;
			this.y = -200;
			this.timeLeft = 0;
			this.faded = false;
			this.fadeCounter = 0;
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
	faded: false,
	fadeCounter: 0,
	arrowIndex: 1,
	draw: function(){
		if(this.timeLeft > 0){
			if(this.timeLeft < 46 && this.timeLeft*0.1 == Math.round(this.timeLeft*0.1)){
				this.faded = true;
				this.fadeCounter = 5;
			}
			if(this.faded == true){
				ctx.globalAlpha = Alpha*0.25;
				this.fadeCounter--;
				if(this.fadeCounter <= 0){
					this.faded = false;
				}
			}
			if(STATE == "Tutorial"){
				if(this.arrowIndex < 6){
					ctx.drawImage(PickupArrow1, this.x-this.width*0.5, this.y-this.height*0.5 - 36);
				}
				else{
					ctx.drawImage(PickupArrow2, this.x-this.width*0.5, this.y-this.height*0.5 - 36);
				}
				this.arrowIndex++;
				if(this.arrowIndex >= 11){
					this.arrowIndex = 1;
				}
			}
			ctx.drawImage(Pickup_Elements, (Math.floor((this.index-1)*0.5))*32, 96, 32, 32, this.x-this.width*0.5, this.y-this.height*0.5, 32, 32);
			ctx.globalAlpha = Alpha;
			this.timeLeft-=1;
			this.index++;
			if(this.index == 11){
				this.index = 1;
			}
		}
		else{
			this.x = -100;
			this.y = -200;
			this.timeLeft = 0;
			this.faded = false;
			this.fadeCounter = 0;
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
	faded: false,
	fadeCounter: 0,
	arrowIndex: 1,
	draw: function(){
		if(this.timeLeft > 0){
			if(this.timeLeft < 46 && this.timeLeft*0.1 == Math.round(this.timeLeft*0.1)){
				this.faded = true;
				this.fadeCounter = 5;
			}
			if(this.faded == true){
				ctx.globalAlpha = Alpha*0.25;
				this.fadeCounter--;
				if(this.fadeCounter <= 0){
					this.faded = false;
				}
			}
			if(STATE == "Tutorial" && (spell1 == "N/A" || spell2 == "N/A")){
				if(this.arrowIndex < 6){
					ctx.drawImage(PickupArrow1, this.x-this.width*0.5, this.y-this.height*0.5 - 36);
				}
				else{
					ctx.drawImage(PickupArrow2, this.x-this.width*0.5, this.y-this.height*0.5 - 36);
				}
				this.arrowIndex++;
				if(this.arrowIndex >= 11){
					this.arrowIndex = 1;
				}
			}
			ctx.drawImage(Pickup_Elements, (Math.floor((this.index-1)*0.5))*32, 192, 32, 32, this.x-this.width*0.5, this.y-this.height*0.5, 32, 32);
			ctx.globalAlpha = Alpha;
			
			if(STATE != "Tutorial"){
				this.timeLeft-=1;
			}
			
				this.index++;
			if(this.index == 11){
				this.index = 1;
			}
		}
		else{
			this.x = -100;
			this.y = -200;
			this.timeLeft = 0;
			this.faded = false;
			this.fadeCounter = 0;
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
	faded: false,
	fadeCounter: 0,
	draw: function(){
		if(this.timeLeft > 0){
			if(this.timeLeft < 46 && this.timeLeft*0.1 == Math.round(this.timeLeft*0.1)){
				this.faded = true;
				this.fadeCounter = 5;
			}
			if(this.faded == true){
				ctx.globalAlpha = Alpha*0.25;
				this.fadeCounter--;
				if(this.fadeCounter <= 0){
					this.faded = false;
				}
			}
			ctx.drawImage(Pickup_Elements, (Math.floor((this.index-1)*0.5))*32, 128, 32, 32, this.x-this.width*0.5, this.y-this.height*0.5, 32, 32);
			ctx.globalAlpha = Alpha;
			this.timeLeft-=1;
				this.index++;
			if(this.index == 11){
				this.index = 1;
			}
		}
		else{
			this.x = -100;
			this.y = -200;
			this.timeLeft = 0;
			this.faded = false;
			this.fadeCounter = 0;
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
	faded: false,
	fadeCounter: 0,
	arrowIndex: 0,
	draw: function(){
		if(this.timeLeft > 0){
			if(this.timeLeft < 46 && this.timeLeft*0.1 == Math.round(this.timeLeft*0.1)){
				this.faded = true;
				this.fadeCounter = 5;
			}
			if(this.faded == true){
				ctx.globalAlpha = Alpha*0.25;
				this.fadeCounter--;
				if(this.fadeCounter <= 0){
					this.faded = false;
				}
			}
			if(STATE == "Tutorial" && (spell1 == "N/A" || spell2 == "N/A")){
				if(this.arrowIndex < 6){
					ctx.drawImage(PickupArrow1, this.x-this.width*0.5, this.y-this.height*0.5 - 36);
				}
				else{
					ctx.drawImage(PickupArrow2, this.x-this.width*0.5, this.y-this.height*0.5 - 36);
				}
				this.arrowIndex++;
				if(this.arrowIndex >= 11){
					this.arrowIndex = 1;
				}
			}
			ctx.drawImage(Pickup_Elements, (Math.floor((this.index-1)*0.5))*32, 160, 32, 32, this.x-this.width*0.5, this.y-this.height*0.5, 32, 32);
			ctx.globalAlpha = Alpha;
			this.timeLeft-=1;
				this.index++;
			if(this.index == 11){
				this.index = 1;
			}
		}
		else{
			this.x = -100;
			this.y = -200;
			this.timeLeft = 0;
			this.faded = false;
			this.fadeCounter = 0;
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
// Dark drop
var blackCube = {
	type: 1,
	x: -100,
	y: -200,
	width: 32,
	height: 32,
	timeLeft: 0,
	index: 1,
	stage: "up",
	faded: false,
	fadeCounter: 0,
	draw: function(){
		if(this.timeLeft > 0){
			if(this.timeLeft < 46 && this.timeLeft*0.1 == Math.round(this.timeLeft*0.1)){
				this.faded = true;
				this.fadeCounter = 5;
			}
			if(this.faded == true){
				ctx.globalAlpha = Alpha*0.25;
				this.fadeCounter--;
				if(this.fadeCounter <= 0){
					this.faded = false;
				}
			}
			ctx.drawImage(Pickup_Elements, (Math.floor((this.index-1)*0.5))*32, 224, 32, 32, this.x-this.width*0.5, this.y-this.height*0.5, 32, 32);
			ctx.globalAlpha = Alpha;
			this.timeLeft-=1;
				this.index++;
			if(this.index == 11){
				this.index = 1;
			}
		}
		else{
			this.x = -100;
			this.y = -200;
			this.timeLeft = 0;
			this.faded = false;
			this.fadeCounter = 0;
		}
	},
	onHit: function(){
		if(spell1 == "N/A"){
			spell1 = "Dark";
			if(typemarker.x != -100 && typemarker2.x != -100){
				typemarker3.text = "+ Dark";
				typemarker3.x = player.x-player.width*2;
				typemarker3.y = player.y;
				typemarker3.timeLeft = 20;
			}
			else if(typemarker.x != -100){
				typemarker2.text = "+ Dark";
				typemarker2.x = player.x-player.width*2;
				typemarker2.y = player.y;
				typemarker2.timeLeft = 20;
			}
			else{
				typemarker.text = "+ Dark";
				typemarker.x = player.x-player.width*2;
				typemarker.y = player.y;
				typemarker.timeLeft = 20;
			}
		}
		else if(spell2 == "N/A"){
			spell2 = "Dark";
			if(typemarker.x != -100 && typemarker2.x != -100){
				typemarker3.text = "+ Dark";
				typemarker3.x = player.x-player.width*2;
				typemarker3.y = player.y;
				typemarker3.timeLeft = 20;
			}
			else if(typemarker.x != -100){
				typemarker2.text = "+ Dark";
				typemarker2.x = player.x-player.width*2;
				typemarker2.y = player.y;
				typemarker2.timeLeft = 20;
			}
			else{
				typemarker.text = "+ Dark";
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

// light drop
var whiteCube = {
	type: 1,
	x: -100,
	y: -200,
	width: 32,
	height: 32,
	timeLeft: 0,
	index: 1,
	stage: "up",
	faded: false,
	fadeCounter: 0,
	arrowIndex: 1,
	draw: function(){
		if(this.timeLeft > 0){
			if(this.timeLeft < 46 && this.timeLeft*0.1 == Math.round(this.timeLeft*0.1)){
				this.faded = true;
				this.fadeCounter = 5;
			}
			if(this.faded == true){
				ctx.globalAlpha = Alpha*0.25;
				this.fadeCounter--;
				if(this.fadeCounter <= 0){
					this.faded = false;
				}
			}
			ctx.drawImage(Pickup_Elements, (Math.floor((this.index-1)*0.5))*32, 256, 32, 32, this.x-this.width*0.5, this.y-this.height*0.5, 32, 32);
			ctx.globalAlpha = Alpha;
			this.timeLeft-=1;
				this.index++;
			if(this.index == 11){
				this.index = 1;
			}
		}
		else{
			this.x = -100;
			this.y = -200;
			this.timeLeft = 0;
			this.faded = false;
			this.fadeCounter = 0;
		}
	},
	onHit: function(){
		if(spell1 == "N/A"){
			spell1 = "Light";
			if(typemarker.x != -100 && typemarker2.x != -100){
				typemarker3.text = "+ Light";
				typemarker3.x = player.x-player.width*2;
				typemarker3.y = player.y;
				typemarker3.timeLeft = 20;
			}
			else if(typemarker.x != -100){
				typemarker2.text = "+ Light";
				typemarker2.x = player.x-player.width*2;
				typemarker2.y = player.y;
				typemarker2.timeLeft = 20;
			}
			else{
				typemarker.text = "+ Light";
				typemarker.x = player.x-player.width*2;
				typemarker.y = player.y;
				typemarker.timeLeft = 20;
			}
		}
		else if(spell2 == "N/A"){
			spell2 = "Light";
			if(typemarker.x != -100 && typemarker2.x != -100){
				typemarker3.text = "+ Light";
				typemarker3.x = player.x-player.width*2;
				typemarker3.y = player.y;
				typemarker3.timeLeft = 20;
			}
			else if(typemarker.x != -100){
				typemarker2.text = "+ Light";
				typemarker2.x = player.x-player.width*2;
				typemarker2.y = player.y;
				typemarker2.timeLeft = 20;
			}
			else{
				typemarker.text = "+ Light";
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

var allEleCubes = {1: redCube, 2: tealCube, 3: greenCube, 4: yellowCube, 5: greyCube, 6: purpleCube, 7: blueCube, 8: blackCube, 9: whiteCube};
// Random drop
var RandomCube = {
	type: 1,
	x: -100,
	y: -200,
	width: 32,
	height: 32,
	timeLeft: 0,
	index: 1,
	index2: 1,
	stage: "up",
	Elem: {1: "Fire", 2: "Water", 3: "Earth", 4: "Lightning", 5: "Air", 6: "Ice", 7: "Mystic", 8: "Dark", 9: "Light"},
	faded: false,
	fadeCounter: 0,
	draw: function(){
		if(this.timeLeft > 0){
			if(this.timeLeft < 46 && this.timeLeft*0.1 == Math.round(this.timeLeft*0.1)){
				this.faded = true;
				this.fadeCounter = 5;
			}
			if(this.faded == true){
				ctx.globalAlpha = Alpha*0.25;
				this.fadeCounter--;
				if(this.fadeCounter <= 0){
					this.faded = false;
				}
			}
			ctx.drawImage(Pickup_Elements, 32*(this.index2-1), 32*(this.index-1), 32, 32, this.x-this.width*0.5, this.y-this.height*0.5, 32, 32);
			ctx.globalAlpha = Alpha;
			this.timeLeft-=1;
			this.index++;
			if(this.stage == "up"){
				this.index2++;
			}
			else{
				this.index2-=1;
			}
			if(this.index2 == 6){
				this.index2 = 5;
				this.stage = "down";
			}
			else if(this.index2 == 0){
				this.index2 = 1;
				this.stage = "up";
			}
			if(this.index > 9){
				this.index = 1;
			}
		}
		else{
			this.x = -100;
			this.y = -200;
			this.timeLeft = 0;
			this.faded = false;
			this.fadeCounter = 0;
		}
	},
	onHit: function(){
		if(spell1 == "N/A"){
			if(STATE == 1){
				spell1 = this.Elem[Math.floor(Math.random() * 3) + 1];
			}else if(STATE == "Scorched" || STATE == "Jungle"){
				spell1 = this.Elem[Math.floor(Math.random() * 6) + 1];
			}else{
				spell1 = this.Elem[Math.floor(Math.random() * 9) + 1];
			}
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
			if(STATE == 1){
				spell2 = this.Elem[Math.floor(Math.random() * 3) + 1];
			}else if(STATE == "Scorched" || STATE == "Jungle"){
				spell2 = this.Elem[Math.floor(Math.random() * 6) + 1];
			}else{
				spell2 = this.Elem[Math.floor(Math.random() * 9) + 1];
			}
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
	color: "#FF00FF",
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
			ctx.globalAlpha = Alpha*0.25;
			if(this.used == 0){
				fastbeepsHigh.currentTime=0;
				fastbeepsHigh.play();
				this.used = 1;
			}
			if(this.frame < 4){
				ctx.fillRect(this.x-this.width*0.5, this.y-this.height*0.5, this.width, this.height);
				this.width = this.width + 8 * this.frame;
				this.height = this.height + 8 * this.frame;
				this.frame++;
			}
			else if(this.frame < 8){
				ctx.fillRect(this.x-this.width*0.5, this.y-this.height*0.5, this.width, this.height);
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
			ctx.globalAlpha = Alpha;
		}
	}
};
// Random drop
var RandomCube2 = {
	type: 1,
	x: -100,
	y: -200,
	width: 32,
	height: 32,
	timeLeft: 0,
	index: 1,
	index2: 1,
	stage: "up",
	Elem: {1: "Fire", 2: "Water", 3: "Earth", 4: "Lightning", 5: "Air", 6: "Ice", 7: "Mystic", 8: "Dark", 9: "Light"},
	faded: false,
	fadeCounter: 0,
	draw: function(){
		if(this.timeLeft > 0){
			if(this.timeLeft < 46 && this.timeLeft*0.1 == Math.round(this.timeLeft*0.1)){
				this.faded = true;
				this.fadeCounter = 5;
			}
			if(this.faded == true){
				ctx.globalAlpha = Alpha*0.25;
				this.fadeCounter--;
				if(this.fadeCounter <= 0){
					this.faded = false;
				}
			}
			ctx.drawImage(Pickup_Elements, 32*(this.index2-1), 32*(this.index-1), 32, 32, this.x-this.width*0.5, this.y-this.height*0.5, 32, 32);
			ctx.globalAlpha = Alpha;
			this.timeLeft-=1;
			this.index++;
			if(this.stage == "up"){
				this.index2++;
			}
			else{
				this.index2-=1;
			}
			if(this.index2 == 6){
				this.index2 = 5;
				this.stage = "down";
			}
			else if(this.index2 == 0){
				this.index2 = 1;
				this.stage = "up";
			}
			if(this.index > 9){
				this.index = 1;
			}
		}
		else{
			this.x = -100;
			this.y = -200;
			this.timeLeft = 0;
			this.faded = false;
			this.fadeCounter = 0;
		}
	},
	onHit: function(){
		if(spell1 == "N/A"){
			if(STATE == 1){
				spell1 = this.Elem[Math.floor(Math.random() * 3) + 1];
			}else if(STATE == "Scorched" || STATE == "Jungle"){
				spell1 = this.Elem[Math.floor(Math.random() * 6) + 1];
			}else{
				spell1 = this.Elem[Math.floor(Math.random() * 9) + 1];
			}
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
			if(STATE == 1){
				spell2 = this.Elem[Math.floor(Math.random() * 3) + 1];
			}else if(STATE == "Scorched" || STATE == "Jungle"){
				spell2 = this.Elem[Math.floor(Math.random() * 6) + 1];
			}else{
				spell2 = this.Elem[Math.floor(Math.random() * 9) + 1];
			}
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
var RandEffect2 = {
	color: "#FF00FF",
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
			ctx.globalAlpha = Alpha*0.25;
			if(this.used == 0){
				fastbeepsHigh.currentTime=0;
				fastbeepsHigh.play();
				this.used = 1;
			}
			if(this.frame < 4){
				ctx.fillRect(this.x-this.width*0.5, this.y-this.height*0.5, this.width, this.height);
				this.width = this.width + 8 * this.frame;
				this.height = this.height + 8 * this.frame;
				this.frame++;
			}
			else if(this.frame < 8){
				ctx.fillRect(this.x-this.width*0.5, this.y-this.height*0.5, this.width, this.height);
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
			ctx.globalAlpha = Alpha;
		}
	}
};
// Random drop
var RandomCube3 = {
	type: 1,
	x: -100,
	y: -200,
	width: 32,
	height: 32,
	timeLeft: 0,
	index: 1,
	index2: 1,
	stage: "up",
	Elem: {1: "Fire", 2: "Water", 3: "Earth", 4: "Lightning", 5: "Air", 6: "Ice", 7: "Mystic", 8: "Dark", 9: "Light"},
	faded: false,
	fadeCounter: 0,
	draw: function(){
		if(this.timeLeft > 0){
			if(this.timeLeft < 46 && this.timeLeft*0.1 == Math.round(this.timeLeft*0.1)){
				this.faded = true;
				this.fadeCounter = 5;
			}
			if(this.faded == true){
				ctx.globalAlpha = Alpha*0.25;
				this.fadeCounter--;
				if(this.fadeCounter <= 0){
					this.faded = false;
				}
			}
			ctx.drawImage(Pickup_Elements, 32*(this.index2-1), 32*(this.index-1), 32, 32, this.x-this.width*0.5, this.y-this.height*0.5, 32, 32);
			ctx.globalAlpha = Alpha;
			this.timeLeft-=1;
			this.index++;
			if(this.stage == "up"){
				this.index2++;
			}
			else{
				this.index2-=1;
			}
			if(this.index2 == 6){
				this.index2 = 5;
				this.stage = "down";
			}
			else if(this.index2 == 0){
				this.index2 = 1;
				this.stage = "up";
			}
			if(this.index > 9){
				this.index = 1;
			}
		}
		else{
			this.x = -100;
			this.y = -200;
			this.timeLeft = 0;
			this.faded = false;
			this.fadeCounter = 0;
		}
	},
	onHit: function(){
		if(spell1 == "N/A"){
			if(STATE == 1){
				spell1 = this.Elem[Math.floor(Math.random() * 3) + 1];
			}else if(STATE == "Scorched" || STATE == "Jungle"){
				spell1 = this.Elem[Math.floor(Math.random() * 6) + 1];
			}else{
				spell1 = this.Elem[Math.floor(Math.random() * 9) + 1];
			}
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
			if(STATE == 1){
				spell2 = this.Elem[Math.floor(Math.random() * 3) + 1];
			}else if(STATE == "Scorched" || STATE == "Jungle"){
				spell2 = this.Elem[Math.floor(Math.random() * 6) + 1];
			}else{
				spell2 = this.Elem[Math.floor(Math.random() * 9) + 1];
			}
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
var RandEffect3 = {
	color: "#FF00FF",
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
			ctx.globalAlpha = Alpha*0.25;
			if(this.used == 0){
				fastbeepsHigh.currentTime=0;
				fastbeepsHigh.play();
				this.used = 1;
			}
			if(this.frame < 4){
				ctx.fillRect(this.x-this.width*0.5, this.y-this.height*0.5, this.width, this.height);
				this.width = this.width + 8 * this.frame;
				this.height = this.height + 8 * this.frame;
				this.frame++;
			}
			else if(this.frame < 8){
				ctx.fillRect(this.x-this.width*0.5, this.y-this.height*0.5, this.width, this.height);
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
			ctx.globalAlpha = Alpha;
		}
	}
};
// Random drop
var RandomCube4 = {
	type: 1,
	x: -100,
	y: -200,
	width: 32,
	height: 32,
	timeLeft: 0,
	index: 1,
	index2: 1,
	stage: "up",
	Elem: {1: "Fire", 2: "Water", 3: "Earth", 4: "Lightning", 5: "Air", 6: "Ice", 7: "Mystic", 8: "Dark", 9: "Light"},
	faded: false,
	fadeCounter: 0,
	draw: function(){
		if(this.timeLeft > 0){
			if(this.timeLeft < 46 && this.timeLeft*0.1 == Math.round(this.timeLeft*0.1)){
				this.faded = true;
				this.fadeCounter = 5;
			}
			if(this.faded == true){
				ctx.globalAlpha = Alpha*0.25;
				this.fadeCounter--;
				if(this.fadeCounter <= 0){
					this.faded = false;
				}
			}
			ctx.drawImage(Pickup_Elements, 32*(this.index2-1), 32*(this.index-1), 32, 32, this.x-this.width*0.5, this.y-this.height*0.5, 32, 32);
			ctx.globalAlpha = Alpha;
			this.timeLeft-=1;
			this.index++;
			if(this.stage == "up"){
				this.index2++;
			}
			else{
				this.index2-=1;
			}
			if(this.index2 == 6){
				this.index2 = 5;
				this.stage = "down";
			}
			else if(this.index2 == 0){
				this.index2 = 1;
				this.stage = "up";
			}
			if(this.index > 9){
				this.index = 1;
			}
		}
		else{
			this.x = -100;
			this.y = -200;
			this.timeLeft = 0;
			this.faded = false;
			this.fadeCounter = 0;
		}
	},
	onHit: function(){
		if(spell1 == "N/A"){
			if(STATE == 1){
				spell1 = this.Elem[Math.floor(Math.random() * 3) + 1];
			}else if(STATE == "Scorched" || STATE == "Jungle"){
				spell1 = this.Elem[Math.floor(Math.random() * 6) + 1];
			}else{
				spell1 = this.Elem[Math.floor(Math.random() * 9) + 1];
			}
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
			if(STATE == 1){
				spell2 = this.Elem[Math.floor(Math.random() * 3) + 1];
			}else if(STATE == "Scorched" || STATE == "Jungle"){
				spell2 = this.Elem[Math.floor(Math.random() * 6) + 1];
			}else{
				spell2 = this.Elem[Math.floor(Math.random() * 9) + 1];
			}
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
var RandEffect4 = {
	color: "#FF00FF",
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
			ctx.globalAlpha = Alpha*0.25;
			if(this.used == 0){
				fastbeepsHigh.currentTime=0;
				fastbeepsHigh.play();
				this.used = 1;
			}
			if(this.frame < 4){
				ctx.fillRect(this.x-this.width*0.5, this.y-this.height*0.5, this.width, this.height);
				this.width = this.width + 8 * this.frame;
				this.height = this.height + 8 * this.frame;
				this.frame++;
			}
			else if(this.frame < 8){
				ctx.fillRect(this.x-this.width*0.5, this.y-this.height*0.5, this.width, this.height);
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
			ctx.globalAlpha = Alpha;
		}
	}
};
// Random drop
var RandomCube5 = {
	type: 1,
	x: -100,
	y: -200,
	width: 32,
	height: 32,
	timeLeft: 0,
	index: 1,
	index2: 1,
	stage: "up",
	Elem: {1: "Fire", 2: "Water", 3: "Earth", 4: "Lightning", 5: "Air", 6: "Ice", 7: "Mystic", 8: "Dark", 9: "Light"},
	faded: false,
	fadeCounter: 0,
	draw: function(){
		if(this.timeLeft > 0){
			if(this.timeLeft < 46 && this.timeLeft*0.1 == Math.round(this.timeLeft*0.1)){
				this.faded = true;
				this.fadeCounter = 5;
			}
			if(this.faded == true){
				ctx.globalAlpha = Alpha*0.25;
				this.fadeCounter--;
				if(this.fadeCounter <= 0){
					this.faded = false;
				}
			}
			ctx.drawImage(Pickup_Elements, 32*(this.index2-1), 32*(this.index-1), 32, 32, this.x-this.width*0.5, this.y-this.height*0.5, 32, 32);
			ctx.globalAlpha = Alpha;
			this.timeLeft-=1;
			this.index++;
			if(this.stage == "up"){
				this.index2++;
			}
			else{
				this.index2-=1;
			}
			if(this.index2 == 6){
				this.index2 = 5;
				this.stage = "down";
			}
			else if(this.index2 == 0){
				this.index2 = 1;
				this.stage = "up";
			}
			if(this.index > 9){
				this.index = 1;
			}
		}
		else{
			this.x = -100;
			this.y = -200;
			this.timeLeft = 0;
			this.faded = false;
			this.fadeCounter = 0;
		}
	},
	onHit: function(){
		if(spell1 == "N/A"){
			if(STATE == 1){
				spell1 = this.Elem[Math.floor(Math.random() * 3) + 1];
			}else if(STATE == "Scorched" || STATE == "Jungle"){
				spell1 = this.Elem[Math.floor(Math.random() * 6) + 1];
			}else{
				spell1 = this.Elem[Math.floor(Math.random() * 9) + 1];
			}
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
			if(STATE == 1){
				spell2 = this.Elem[Math.floor(Math.random() * 3) + 1];
			}else if(STATE == "Scorched" || STATE == "Jungle"){
				spell2 = this.Elem[Math.floor(Math.random() * 6) + 1];
			}else{
				spell2 = this.Elem[Math.floor(Math.random() * 9) + 1];
			}
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
var RandEffect5 = {
	color: "#FF00FF",
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
			ctx.globalAlpha = Alpha*0.25;
			if(this.used == 0){
				fastbeepsHigh.currentTime=0;
				fastbeepsHigh.play();
				this.used = 1;
			}
			if(this.frame < 4){
				ctx.fillRect(this.x-this.width*0.5, this.y-this.height*0.5, this.width, this.height);
				this.width = this.width + 8 * this.frame;
				this.height = this.height + 8 * this.frame;
				this.frame++;
			}
			else if(this.frame < 8){
				ctx.fillRect(this.x-this.width*0.5, this.y-this.height*0.5, this.width, this.height);
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
			ctx.globalAlpha = Alpha;
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
			ctx.drawImage(heartUp_sheet, 32, 0, 32, 32, this.x - this.width * 0.5, this.y - this.height * 0.5, 32, 32);
		}
		else if(this.boss == "Dragon"){
			ctx.drawImage(heartUp_sheet, 0, 0, 32, 32, this.x - this.width * 0.5, this.y - this.height * 0.5, 32, 32);
		}
		else if(this.boss == "MasterThief"){
			ctx.drawImage(heartUp_sheet, 96, 0, 32, 32, this.x - this.width * 0.5, this.y - this.height * 0.5, 32, 32);
		}
		else if(this.boss == "Genie"){
			ctx.drawImage(heartUp_sheet, 64, 0, 32, 32, this.x - this.width * 0.5, this.y - this.height * 0.5, 32, 32);
		}
		else if(this.boss == "FireGhost"){
			ctx.drawImage(heartUp_sheet, 128, 0, 32, 32, this.x - this.width * 0.5, this.y - this.height * 0.5, 32, 32);
		}
	},
	onHit: function(){
		StateTimer = 0;
		if(typemarker.x != -100 && typemarker2.x != -100){
			if(this.boss == "treeW" || this.boss == "FireGhost"){
				typemarker3.text = "+ Max Hp";
			}
			else if(this.boss == "Dragon"){
				typemarker3.text = "+ Damage";
			}
			else if(this.boss == "MasterThief"){
				typemarker3.text = "+ Luck";
			}
			else if(this.boss == "Genie"){
				typemarker3.text = "+ Regen";
			}
			typemarker3.x = player.x-player.width*2;
			typemarker3.y = player.y;
			typemarker3.speed = 2;
			typemarker3.timeLeft = 90;
		}
		else if(typemarker.x != -100){
			if(this.boss == "treeW" || this.boss == "FireGhost"){
				typemarker2.text = "+ Max Hp";
			}
			else if(this.boss == "Dragon"){
				typemarker2.text = "+ Damage";
			}
			else if(this.boss == "MasterThief"){
				typemarker2.text = "+ Luck";
			}
			else if(this.boss == "Genie"){
				typemarker2.text = "+ Regen";
			}
			typemarker2.x = player.x-player.width*2;
			typemarker2.y = player.y;
			typemarker2.speed = 2;
			typemarker2.timeLeft = 90;
		}
		else{
			if(this.boss == "treeW" || this.boss == "FireGhost"){
				typemarker.text = "+ Max Hp";
			}
			else if(this.boss == "Dragon"){
				typemarker.text = "+ Damage";
			}
			else if(this.boss == "MasterThief"){
				typemarker.text = "+ Luck";
			}
			else if(this.boss == "Genie"){
				typemarker.text = "+ Regen";
			}
			typemarker.x = player.x-player.width*2;
			typemarker.y = player.y;
			typemarker.speed = 2;
			typemarker.timeLeft = 90;
		}
		if(this.boss == "treeW" || this.boss == "FireGhost"){
			player.maxhp+=3;
			player.hp = player.maxhp;
		}
		else if(this.boss == "Dragon"){
			player.hp = player.maxhp;
			player.power+=1;
		}
		else if(this.boss == "MasterThief"){
			player.hp = player.maxhp;
			player.lucky=true;
		}
		else if(this.boss == "Genie"){
			player.regen=true;
			player.hp = player.maxhp;
		}
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
		counter = 0;
		if(this.boss == "treeW"){
			TwizEffect.x = 500;
			TwizEffect.y = -400;
			TwizEffect.width = 0;
			TwizEffect.height = 0;
			TwizEffect.onScreen = 0;
			TwizEffect.frame = 0;
			Alpha = 0.15;
		}
		if(this.boss == "Dragon"){
			DragonEffect2.x = 500;
			DragonEffect2.y = -400;
			DragonEffect2.width = 0;
			DragonEffect2.height = 0;
			DragonEffect2.onScreen = 0;
			DragonEffect2.frame = 0;
			Alpha = 0.15;
		}
		if(this.boss == "FireGhost"){
			FireGhostEffect.x = 500;
			FireGhostEffect.y = -400;
			FireGhostEffect.width = 0;
			FireGhostEffect.height = 0;
			FireGhostEffect.onScreen = 0;
			FireGhostEffect.frame = 0;
			Alpha = 0.15;
		}
		if(this.boss == "MasterThief"){
			MasterTEffect.x = 500;
			MasterTEffect.y = -400;
			MasterTEffect.width = 0;
			MasterTEffect.height = 0;
			MasterTEffect.onScreen = 0;
			MasterTEffect.frame = 0;
			Enemy.width = 80;
			Enemy.height = 60;
			EnemyB.width = 80;
			EnemyB.height = 60;
			Alpha = 0.15;
			if(vol == 2){
				rainsound.currentTime = 0;
				rainsound.pause();
			}
			if(levelSelectSwamp){
				levelSelectSwamp = false;
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
				STATE = "Swamp";
			}
		}
		if(this.boss == "Genie"){
			GenieEffect.x = 500;
			GenieEffect.y = -400;
			GenieEffect.width = 0;
			GenieEffect.height = 0;
			GenieEffect.onScreen = 0;
			GenieEffect.frame = 0;
			Alpha = 0.15;
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
			ctx.drawImage(particleSheet, 16*(this.index-1),0,16,16, this.x - this.width * 0.5, this.y - this.height * 0.5,16,16);
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
			this.dirct = 30;
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
			ctx.drawImage(particleSheet, 16*(this.index-1),0,16,16, this.x - this.width * 0.5, this.y - this.height * 0.5,16,16);
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
			this.dirct = 30;
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
			ctx.drawImage(particleSheet, 16*(this.index-1),0,16,16, this.x - this.width * 0.5, this.y - this.height * 0.5,16,16);
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
			this.dirct = 30;
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
			ctx.drawImage(particleSheet, 16*(this.index-1),0,16,16, this.x - this.width * 0.5, this.y - this.height * 0.5,16,16);
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
			this.dirct = 30;
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
			ctx.drawImage(particleSheet, 16*(this.index-1),0,16,16, this.x - this.width * 0.5, this.y - this.height * 0.5,16,16);
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
			this.dirct = 30;
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
			ctx.drawImage(particleSheet, 16*(this.index-1),0,16,16, this.x - this.width * 0.5, this.y - this.height * 0.5,16,16);
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
			this.dirct = 30;
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
			ctx.drawImage(particleSheet, 16*(this.index-1),0,16,16, this.x - this.width * 0.5, this.y - this.height * 0.5,16,16);
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
			this.dirct = 30;
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
			ctx.drawImage(particleSheet, 16*(this.index-1),0,16,16, this.x - this.width * 0.5, this.y - this.height * 0.5,16,16);
			this.index++;
			if(this.index > 8){
				this.index = 1;
			}
		}
	},
	onHit: function(){
		if(this.x != -100 && this.dirct > 0){
			ctx.globalAlpha = Alpha*0.1;
			for(H in hpParticles){
				hpParticles[H].speed = this.speed2;
			}
		}
		else if(this.x != -100 && this.dirct == 0){
			ctx.globalAlpha = Alpha;
			for(H in hpParticles){
				hpParticles[H].speed = this.speed2 * 3;
			}
		}
		if(counter == 8){
			Alpha = 1;
			player.speed = player.speed2*4;
			if(hpUp.boss == "treeW"){
				jungleAni = true;
				radiofailure.currentTime=0;
				radiofailure.play();
			}
			if(hpUp.boss == "MasterThief"){
				for(O in obstacle1){
					obstacle1[O].board = true;
				}
				swampFront= true;
				radiofailure.currentTime=0;
				radiofailure.play();
			}
			counter = 0;
		}
		if(collision(this.dir, this, player) && this.dirct == 0){
			this.x = -100;
			this.y = -200;
			this.dir = "SD";
			this.dirct = 30;
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
function p2HpAi(E){
	if(E.dirct == 0 && E.x != -100){
		var xdiff = player2.x - E.x;
		var ydiff = player2.y - E.y;
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
var Boxes = {1: redCube, 2: tealCube, 3: greenCube, 4: yellowCube, 5: greyCube, 6: purpleCube, 7: blueCube, 8: hpUp, 9: RandomCube, 10: blackCube, 11: RandomCube2, 12: RandomCube3, 13: RandomCube4, 14: RandomCube5, 15: whiteCube};
var hpParticles = {1: hpParticleW, 2: hpParticleA, 3: hpParticleS, 4: hpParticleD, 5: hpParticleWA, 6: hpParticleWD, 7: hpParticleAS, 8: hpParticleSD};
// If you pick it up
function pickup(C){
	if(STATE != "Tutorial" || (STATE == "Tutorial" && (spell1 == "N/A" || spell2 == "N/A"))){
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
					Error = Aes.Ctr.encrypt(parseInt(Aes.Ctr.decrypt(Error, ErrorLogs, 256))+50 + "", ErrorLogs, 256);
				}
				else{
					if(prevSpellRC[1] == "N/A"){
						prevSpellRC[1] = spell;
					}
					else if(prevSpellRC[2] == "N/A"){
						prevSpellRC[2] = spell;
					}
					else if(prevSpellRC[3] == "N/A"){
						prevSpellRC[3] = spell;
					}
					else if(prevSpellRC[4] == "N/A"){
						prevSpellRC[4] = spell;
					}
					else if(prevSpellRC[5] == "N/A"){
						prevSpellRC[5] = spell;
					}
					else if(prevSpellRC[6] == "N/A"){
						prevSpellRC[6] = spell;
					}
					else if(prevSpellRC[7] == "N/A"){
						prevSpellRC[7] = spell;
					}
					else if(prevSpellRC[8] == "N/A"){
						prevSpellRC[8] = spell;
					}
					for(P in pickup_particles){
						if(!pickup_particles[P].onScreen){
							pickup_particles[P].x = player.x;
							pickup_particles[P].y = player.y;
							pickup_particles[P].onScreen = 1;
							pickup_particles[P].speed = 20;
							if(spell1 == "N/A"){
								pickup_particles[P].num = 1;
							}else{
								pickup_particles[P].num = 2;
							}
							break;
						}
					}
				}
			}
			Pickup.currentTime=0;
			Pickup.play();
			C.onHit();
		}
	}
}

var pickup_particle = {
	x: -50,
	y: 0,
	width:4,
	height:4,
	dirct:0,
	dir:"A",
	slope:1,
	closestSlope:1,
	slopeIndex:11,
	dirct:0,
	dirSwitch:false,
	destDir:"",
	speed:20,
	num: 1,
	onScreen: 0
};
var pickup_particle3 = {
	x: -50,
	y: 0,
	width:4,
	height:4,
	dirct:0,
	dir:"A",
	slope:1,
	closestSlope:1,
	slopeIndex:11,
	dirct:0,
	dirSwitch:false,
	destDir:"",
	speed:20,
	num: 1,
	onScreen: 0
};
var pickup_particle2 = {
	x: -50,
	y: 0,
	width:4,
	height:4,
	dirct:0,
	dir:"A",
	slope:1,
	closestSlope:1,
	slopeIndex:11,
	dirct:0,
	dirSwitch:false,
	destDir:"",
	speed:20,
	num: 1,
	onScreen: 0
};
var spell1Fade = 0;
var spell2Fade = 0;
var pickup_particles = {1: pickup_particle, 2: pickup_particle2, 3: pickup_particle3};
function draw_pickup_particles(p){
	if(p.onScreen){
		p.speed+=1;
		if(p.x <= -50){
			element = {x: -50, y: 0, width: 1, height: 1};
			if(p.num == 1){
				ctx.drawImage(HUD_Elements, 0, 0, 52, 52, 20, 464, 52, 52);
				spell1Fade++;
			}else{
				ctx.drawImage(HUD_Elements, 0, 0, 52, 52, 72, 504, 52, 52);
				spell2Fade++;
			}
			p.onScreen = 0;
		}
		else if(p.num == 1){
			var element = {x: 48, y: 488, width: 32, height: 32};
		}else if(p.num == 2){
			var element = {x: 96, y: 528, width: 32, height: 32};
		}
		if(p.dirct > 0){
			p.dirct-=1;
		}
		//change direction
		if(Math.sqrt((element.x-p.x)*(element.x- p.x) + (element.y-p.y)*(element.y-p.y)) > 30){
			if(element.x-element.width*0.5 < p.x-p.width*0.5){
				if(p.dir != "A"){
					p.dirSwitch = true;
					p.destDir = "A";
				}
				var playerSlope = (p.y-element.y)/(p.x-element.x);
			}
			else if(element.x - element.width*0.5 == p.x - p.width*0.5){
				p.dir = p.dir;
			}
			else{
				if(p.dir != "D"){
					p.dirSwitch = true;
					p.destDir = "D";
				}
				var playerSlope = (element.y-p.y)/(element.x-p.x);
			}
			if(p.dirSwitch){
				if(p.slopeIndex <= 7){
					p.slopeIndex-=1;
					if(p.slopeIndex < 0){
						p.slopeIndex = 14;
						p.dir = p.destDir;
						p.dirSwitch = false;
					}
					p.slope = lightSlopes[p.slopeIndex];
				}
				else{
					p.slopeIndex+=1;
					if(p.slopeIndex > 14){
						p.slopeIndex = 0;
						p.dir = p.destDir;
						p.dirSwitch = false;
					}
					p.slope = lightSlopes[p.slopeIndex];
				}
			}
			else{
				//find ideal slope
				for(N in lightSlopes){
					if(Math.abs(lightSlopes[N] - playerSlope) < Math.abs(p.closestSlope - playerSlope)){
						p.closestSlope = lightSlopes[N];
					}
				}
				//change slope
				if(p.closestSlope > p.slope){
					if(p.closestSlope > 1 && p.slope < -1){
						p.slopeIndex-=1;
						p.slope = lightSlopes[p.slopeIndex];
						if(p.slopeIndex < 0){
							p.slopeIndex = 14;
							p.slope = lightSlopes[p.slopeIndex];
						}
					}
					else{
						p.slopeIndex+=1;
						p.slope = lightSlopes[p.slopeIndex];
					}
				}
				if(p.closestSlope < p.slope || p.slope == "Vertical"){
					if(p.closestSlope < -1 && p.slope > 1){
						p.slopeIndex+=1;
						p.slope = lightSlopes[p.slopeIndex];
						if(p.slopeIndex > 14){
							p.slopeIndex = 0;
							p.slope = lightSlopes[p.slopeIndex];
						}
					}
					else{
						p.slopeIndex-=1;
						p.slope = lightSlopes[p.slopeIndex];
					}
				}
				//consider verticals
				if(p.x >= element.x - element.width*0.5 && p.x <= element.x + element.width*0.5){
					if(p.y-p.height*0.5 > element.y - element.height*0.5){
						p.dir = "A";
					}
					else{
						p.dir = "D";
					}
					p.slope = "Vertical";
					p.slopeIndex = 15;
				}
			}
		}else{
			p.x = -98;
			p.y = 0;
		}
		move_particle_AI(p);
		if(p.num == 1){
			var sp = spell1;
		}else if(p.num == 2){
			var sp = spell2;
		}
		if(sp == "Fire"){
			ctx.drawImage(Pickup_Elements,0, 304, 20, 24, p.x-p.width*0.5,p.y-p.height*0.5, 20, 24);
		}else if(sp == "Ice"){
			ctx.drawImage(Pickup_Elements,20, 304, 20, 24, p.x-p.width*0.5,p.y-p.height*0.5, 20, 24);
		}else if(sp == "Earth"){
			ctx.drawImage(Pickup_Elements,40, 304, 20, 24, p.x-p.width*0.5,p.y-p.height*0.5, 20, 24);
		}else if(sp == "Lightning"){
			ctx.drawImage(Pickup_Elements,60, 304, 20, 24, p.x-p.width*0.5,p.y-p.height*0.5, 20, 24);
		}else if(sp == "Mystic"){
			ctx.drawImage(Pickup_Elements,80, 304, 20, 24, p.x-p.width*0.5,p.y-p.height*0.5, 20, 24);
		}else if(sp == "Water"){
			ctx.drawImage(Pickup_Elements,100, 304, 20, 24, p.x-p.width*0.5,p.y-p.height*0.5, 20, 24);
		}else if(sp == "Air"){
			ctx.drawImage(Pickup_Elements,120, 304, 20, 24, p.x-p.width*0.5,p.y-p.height*0.5, 20, 24);
		}else if(sp == "Dark"){
			ctx.drawImage(Pickup_Elements,140, 304, 20, 24, p.x-p.width*0.5,p.y-p.height*0.5, 20, 24);
		}else{
			ctx.drawImage(Pickup_Elements,160, 304, 20, 24, p.x-p.width*0.5,p.y-p.height*0.5, 20, 24);
		}
	}
}

function move_particle_AI(P){
	if(P.dir == "D"){
		if(P.slope == "Vertical"){
			var ymove = P.speed;
			P.y+=ymove;
			P.y = Math.floor(P.y);
		}
		else if(P.slope > 0 && P.slope < 1){
			var xmove = Math.sqrt((P.speed*P.speed)/(P.slope*P.slope+1));
			var ymove = xmove*P.slope;
			P.x+=xmove;
			P.y+=ymove;
			P.x = Math.ceil(P.x);
			P.y = Math.floor(P.y);
		}
		else if(P.slope >= 0){
			//get x distance, speed = total diag distance
			var xmove = Math.sqrt((P.speed*P.speed)/(P.slope*P.slope+1));
			var ymove = xmove*P.slope;
			P.x+=xmove;
			P.y+=ymove;
			P.x = Math.ceil(P.x);
			P.y = Math.floor(P.y);
		}
		else if(P.slope <= -1){
			var xmove = Math.sqrt((P.speed*P.speed)/(P.slope*P.slope+1));
			var ymove = xmove*P.slope;
			P.x+=xmove;
			P.y+=ymove;
			P.x = Math.ceil(P.x);
			P.y = Math.ceil(P.y);
		}
		else{
			var xmove = Math.sqrt((P.speed*P.speed)/(P.slope*P.slope+1));
			var ymove = xmove*P.slope;
			P.x+=xmove;
			P.y+=ymove;
		}
	}
	else{
		if(P.slope == "Vertical"){
			var ymove = P.speed;
			P.y-=ymove;
			P.y = Math.floor(P.y);
		}
		else if(P.slope > 0 && P.slope < 1){
			var xmove = Math.sqrt((P.speed*P.speed)/(P.slope*P.slope+1));
			var ymove = xmove*P.slope;
			P.x-=xmove;
			P.y-=ymove;
			P.x = Math.floor(P.x);
			P.y = Math.ceil(P.y);
		}
		else if(P.slope >= 0){
			//get x distance, speed = total diag distance
			var xmove = Math.sqrt((P.speed*P.speed)/(P.slope*P.slope+1));
			var ymove = xmove*P.slope;
			P.x-=xmove;
			P.y-=ymove;
			P.x = Math.ceil(P.x);
			P.y = Math.floor(P.y);
		}
		else if(P.slope <= -1){
			var xmove = Math.sqrt((P.speed*P.speed)/(P.slope*P.slope+1));
			var ymove = xmove*P.slope;
			P.x-=xmove;
			P.y-=ymove;
			P.x = Math.floor(P.x);
			P.y = Math.ceil(P.y);
		}
		else{
			var xmove = Math.sqrt((P.speed*P.speed)/(P.slope*P.slope+1));
			var ymove = xmove*P.slope;
			P.x-=xmove;
			P.y-=ymove;
			P.x = Math.ceil(P.x);
			P.y = Math.floor(P.y);
		}
	}
}