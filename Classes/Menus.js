//------------------------------------------------- Menu ----------------------------------------------------------------------------//
var Menu = {
	x: canvas.width/2,
	y: canvas.height/2,
	width: 150,
	height: 30,
	index: 1,
	loadIndex: 1,
	loadUsed1: false,
	loadUsed2: false,
	loadUsed3: false,
	loadUsed4: false,
	loadUsed5: false,
	loadUsed6: false,
	loadUsed7: false,
	loadUsed8: false,
	loadUsed9: false,
	ready: false,
	newgameSelect: false,
	howtoplaySelect: false,
	optionsSelect: false,
	scoreSelect: false,
	creditSelect: false,
	draw: function(){
		//loading bar
		if(!gameReady || !this.ready){
			if(this.loadIndex == 10){
				this.ready = true;
			}
			ctx.drawImage(LoadPics[this.loadIndex], 0, 0);
			if((numLoaded*100)/maxLoaded >= 10 && !this.loadUsed1){
				this.loadIndex++;
				this.loadUsed1 = true;
			}
			else if((numLoaded*100)/maxLoaded >= 20 && !this.loadUsed2){
				this.loadIndex++;
				this.loadUsed2 = true;
			}
			else if((numLoaded*100)/maxLoaded >= 30 && !this.loadUsed3){
				this.loadIndex++;
				this.loadUsed3 = true;
			}
			else if((numLoaded*100)/maxLoaded >= 40 && !this.loadUsed4){
				this.loadIndex++;
				this.loadUsed4 = true;
			}
			else if((numLoaded*100)/maxLoaded >= 50 && !this.loadUsed5){
				this.loadIndex++;
				this.loadUsed5 = true;
			}
			else if((numLoaded*100)/maxLoaded >= 60 && !this.loadUsed6){
				this.loadIndex++;
				this.loadUsed6 = true;
			}
			else if((numLoaded*100)/maxLoaded >= 70 && !this.loadUsed7){
				this.loadIndex++;
				this.loadUsed7 = true;
			}
			else if((numLoaded*100)/maxLoaded >= 80 && !this.loadUsed8){
				this.loadIndex++;
				this.loadUsed8 = true;
			}
			else if((numLoaded*100)/maxLoaded >= 90 && !this.loadUsed9){
				this.loadIndex++;
				this.loadUsed9 = true;
			}
		}
		else{
			var select = false;
			ctx.fillStyle = "white";
			ctx.font = "18pt Arial";
			ctx.strokeStyle = "white";
			ctx.drawImage(Title, 0, 0);
			//Temp rainbow
			ctx.fillStyle = colorz[this.index];
			this.index++;
			if(this.index > 6){
				this.index = 1;
			}
			//message thing/wiki button
			ctx.fillText("DD64 Wiki is up!",  this.x-this.width*2.25,this.y);
			ctx.fillStyle = "white";
			//Version Info (Just a pop up not a menu)this.x-3*this.width/3, this.y+8.75*this.height
			ctx.fillText("Version " + VersionNumb + "Alpha: " + upDate, this.x-3*this.width/3, this.y+8.75*this.height);
			if(hX >= this.x-3*this.width/3 && hX <=this.x-this.width/3 + 256 && hY <= this.y+7.75*this.height+35 && hY>=this.y+7.75*this.height+10){
				ctx.strokeRect(this.x-3*this.width/3 - 40, this.y+8.75*this.height - 25, this.width * 3, this.height+10);
			}		
			if(cX >= this.x-3*this.width/3 && cX <=this.x-this.width/3 + 256 && cY <= this.y+7.75*this.height+35 && cY>=this.y+7.75*this.height+10){
				fastbeepsLow.currentTime=0;
				fastbeepsLow.play();
				cX = 0;
				cY = 0;
				window.open("VersionInfo.htm");
			}
			//wikibutt
			if(hX >= this.x-this.width*2.25 && hX <=this.x-this.width*2.25+180 && hY <= this.y+10 && hY>=this.y-20){
				ctx.strokeRect(this.x-this.width*2.25 - 20, this.y - 25, this.width * 1.5, this.height+10);
			}		
			if(cX >= this.x-this.width*2.25 && cX <=this.x-this.width*2.25+180 && cY <= this.y+10 && cY>=this.y-20){
				fastbeepsLow.currentTime=0;
				fastbeepsLow.play();
				cX = 0;
				cY = 0;
				window.open("http://dumbledore64.wikia.com/wiki/Dumbledore64_Wiki");
			}
			//Menu controls, keys is never called so copy pasted
			if(keytimer > 0){
				keytimer-=1;
			}
			//newgame
			if((hX >= this.x-this.width*4/5 && hX <=this.x + this.width && hY <= this.y + 1.75*this.height && hY>=this.y-this.height*7/6 + 2*this.height) || this.newgameSelect){
				select = true;
				this.newgameSelect = true;
				this.howtoplaySelect = false;
				this.optionsSelect = false;
				this.scoreSelect = false;
				this.creditSelect = false;
				ctx.drawImage(newgamemenu, 0, 0);
			}		
			if((cX >= this.x-this.width*4/5 && cX <=this.x + this.width && cY <= this.y + 1.75*this.height && cY>=this.y-this.height*7/6 + 2*this.height) || ((13 in keysDown || 32 in keysDown) && this.newgameSelect)){
				fastbeepsLow.currentTime=0;
				fastbeepsLow.play();
				cX = 0;
				cY = 0;
				STATE = 1;
			}
			//How to Play
			if((hX >= this.x-this.width*4/5 && hX <=this.x + this.width/2 && hY <= this.y + 6*this.height && hY>=this.y-this.height*7/6 + 6*this.height) || this.howtoplaySelect){
				select = true;
				this.newgameSelect = false;
				this.howtoplaySelect = true;
				this.optionsSelect = false;
				this.scoreSelect = false;
				this.creditSelect = false;
				ctx.drawImage(helpmenu, 0, 0);
			}		
			if((cX >= this.x-this.width*4/5 && cX <=this.x + this.width/2 && cY <= this.y + 6*this.height && cY>=this.y-this.height*7/6 + 6*this.height) || (this.howtoplaySelect && (13 in keysDown || 32 in keysDown) && keytimer <=0)){
				fastbeepsLow.currentTime=0;
				fastbeepsLow.play();
				cX = 0;
				cY = 0;
				STATE = 2;
				keytimer = 8;
			}
			//Score
			if((hX >= this.x-this.width*4/5 && hX <=this.x + this.width*3/4 && hY <= this.y + 3.25*this.height && hY>=this.y-this.height*7/5 + 3.25*this.height) || this.scoreSelect){
				select = true;
				this.newgameSelect = false;
				this.howtoplaySelect = false;
				this.optionsSelect = false;
				this.scoreSelect = true;
				this.creditSelect = false;
				ctx.drawImage(scoremenu, 0, 0);
			}		
			if((cX >= this.x-this.width*4/5 && cX <=this.x + this.width*3/4 && cY <= this.y + 3.25*this.height && cY>=this.y-this.height*7/5 + 3.25*this.height) || (this.scoreSelect && (13 in keysDown || 32 in keysDown) && keytimer <= 0)){
				fastbeepsLow.currentTime=0;
				fastbeepsLow.play();
				cX = 0;
				cY = 0;
				STATE = 5;
				wait = 8;
			}
			//Options
			if((hX >= this.x-this.width*3/5 && hX <=this.x + this.width*3/4 && hY <= this.y + 4.5*this.height && hY>=this.y-this.height*7/6 + 4.5*this.height) || this.optionsSelect){
				select = true;
				this.newgameSelect = false;
				this.howtoplaySelect = false;
				this.optionsSelect = true;
				this.scoreSelect = false;
				this.creditSelect = false;
				ctx.drawImage(optionsmenu, 0, 0);
			}		
			if((cX >= this.x-this.width*3/5 && cX <=this.x + this.width*3/4 && cY <= this.y + 4.5*this.height&& cY>=this.y-this.height*7/6 + 4.5*this.height) || (this.optionsSelect && (13 in keysDown || 32 in keysDown) && keytimer <= 0)){
				fastbeepsLow.currentTime=0;
				fastbeepsLow.play();
				cX = 0;
				cY = 0;
				STATE = 6;
				keytimer = 8;
			}
			//Credits
			if((hX >= this.x-this.width*3/5 && hX <=this.x + this.width*3/4 && hY <= this.y + 7.25*this.height && hY>=this.y-this.height*7/6 + 7.25*this.height) || this.creditSelect){
				select = true;
				this.newgameSelect = false;
				this.howtoplaySelect = false;
				this.optionsSelect = false;
				this.scoreSelect = false;
				this.creditSelect = true;
				ctx.drawImage(creditsmenu, 0, 0);
			}		
			if((cX >= this.x-this.width*3/5 && cX <=this.x + this.width*3/4 && cY <= this.y + 7.25*this.height&& cY>=this.y-this.height*7/6 + 7.25*this.height) || (this.creditSelect && (13 in keysDown || 32 in keysDown) && keytimer <= 0)){
				fastbeepsLow.currentTime=0;
				fastbeepsLow.play();
				cX = 0;
				cY = 0;
				STATE = 3;
				keytimer = 8;
			}
			//keys in menu, 40 down 38 up
			//init
			if(keytimer == 0 && !this.newgameSelect && !this.howtoplaySelect && !this.optionsSelect && !this.scoreSelect && !this.creditSelect && (38 in keysDown || 40 in keysDown)){
				keytimer = 4;
				select = true;
				this.newgameSelect = true;
			}
			//full down
			else if(keytimer == 0 && !this.howtoplaySelect && !this.optionsSelect && !this.scoreSelect && !this.creditSelect && (40 in keysDown)){
				keytimer = 4;
				select = true;
				this.newgameSelect = false;
				this.scoreSelect = true;
			}
			else if(keytimer == 0 && !this.howtoplaySelect && !this.optionsSelect && !this.creditSelect && (40 in keysDown)){
				keytimer = 4;
				select = true;
				this.scoreSelect = false;
				this.optionsSelect = true;
			}
			else if(keytimer == 0 && !this.howtoplaySelect && !this.creditSelect && (40 in keysDown)){
				keytimer = 4;
				select = true;
				this.optionsSelect = false;
				this.howtoplaySelect = true;
			}
			else if(keytimer == 0 && !this.creditSelect && (40 in keysDown)){
				keytimer = 4;
				select = true;
				this.howtoplaySelect = false;
				this.creditSelect = true;
			}
			if(keytimer == 0 && this.creditSelect && (40 in keysDown)){
				keytimer = 4;
				select = true;
				this.creditSelect = false;
				this.newgameSelect = true;
			}
			//full up
			else if(keytimer == 0 && this.creditSelect && (38 in keysDown)){
				keytimer = 4;
				select = true;
				this.creditSelect = false;
				this.howtoplaySelect = true;
			}
			else if(keytimer == 0 && this.howtoplaySelect && (38 in keysDown)){
				keytimer = 4;
				select = true;
				this.howtoplaySelect = false;
				this.optionsSelect = true;
			}
			else if(keytimer == 0 && this.optionsSelect && (38 in keysDown)){
				keytimer = 4;
				select = true;
				this.optionsSelect = false;
				this.scoreSelect = true;
			}
			else if(keytimer == 0 && this.scoreSelect && (38 in keysDown)){
				keytimer = 4;
				select = true;
				this.scoreSelect = false;
				this.newgameSelect = true;
			}
			else if(keytimer == 0 && this.newgameSelect && (38 in keysDown)){
				keytimer = 4;
				select = true;
				this.newgameSelect = false;
				this.creditSelect = true;
			}
			if(select == false){
				ctx.drawImage(noselectmenu, 0, 0);
			}
		}
	}
};
var Info = {
	x: canvas.width/25,
	y: canvas.height/11,
	width: 20,
	height: 20,
	bx: 696,
	by: 560,
	draw: function(){
		if(keytimer > 0){
			keytimer-=1;
		}
		ctx.fillStyle = "white";
		ctx.font = "13pt Arial";
		ctx.strokeStyle = "white";
		ctx.fillText("Have you ever wanted to be a wizard?", this.x-this.width/2, this.y-this.height/2); 
		ctx.fillText("Well now you can with this AMAZING wizard simulator!", this.x-this.width/2, this.y+2*this.height/2);
		ctx.fillText("Cast spells! Combine elements! Access many unique levels!", this.x-this.width/2, this.y+5*this.height/2);
		ctx.fillText("With over 40 unique spells, Dumbledore64 is by far the best wizard simulator!",  this.x-this.width/2, this.y+8*this.height/2);
		ctx.fillStyle = "red";
		ctx.fillText("Controls:", this.x-this.width/2, this.y+11*this.height/2);
		ctx.fillStyle = "white";
		ctx.fillText("W: Move up", this.x-this.width/2, this.y+14*this.height/2);
		ctx.fillText("A: Move left", this.x-this.width/2, this.y+17*this.height/2);
		ctx.fillText("S: Move down", this.x-this.width/2, this.y+20*this.height/2);
		ctx.fillText("D: move right", this.x-this.width/2, this.y+23*this.height/2);
		ctx.fillText("Arrow keys: Shoot Dumblebeam (Can be shot diagonally)", this.x-this.width/2, this.y+26*this.height/2);
		ctx.fillText("Spacebar: Use spell", this.x-this.width/2, this.y+29*this.height/2);
		ctx.fillText("Q: Drop Element 1", this.x-this.width/2, this.y+32*this.height/2);
		ctx.fillText("E: Drop Element 2", this.x-this.width/2, this.y+35*this.height/2);
		ctx.fillText("P: Pause game", this.x-this.width/2, this.y+38*this.height/2);
		ctx.fillStyle = "red";
		ctx.fillText("Reviews: ", this.x-this.width/2, this.y+41*this.height/2);
		ctx.fillStyle = "white";
		ctx.fillText("'10/10 I <3 WIZARDS' ~GameStoop", this.x-this.width/2, this.y+44*this.height/2);
		ctx.fillText("'DD64 cast a spell on me!' ~IGM", this.x-this.width/2, this.y+47*this.height/2);
		ctx.fillText("'This game is great!' ~That guy from destructoid everyone hates", this.x-this.width/2, this.y+50*this.height/2);
		ctx.font = "16pt Arial";
		ctx.fillText("Back", this.bx, this.by);
		if(hX >= this.bx-10 && hX <=this.bx + 50 && hY <= this.by && hY>=this.by-this.height*7/6){
			ctx.strokeRect(this.bx-10, this.by-this.height*7/6, this.width * 3 + 10, this.height+10);
		}		
		if((cX >= this.bx-10 && cX <=this.bx + 50 && cY <= this.by && cY>=this.by-this.height*7/6) || ((13 in keysDown || 32 in keysDown) && keytimer <= 0)){
			fastbeepsLow.currentTime=0;
			fastbeepsLow.play();
			cX = 0;
			cY = 0;
			keytimer = 8;
			STATE = 0;
		}
}
};
var Credits = {
	x: 300,
	y: canvas.height/8,
	width: 20,
	height: 20,
	bx: 400-50,
	by: 560,
	draw: function(){
		if(keytimer > 0){
			keytimer-=1;
		}
		ctx.fillStyle = "white";
		ctx.font = "18pt Arial";
		ctx.strokeStyle = "white";
		ctx.fillText("Credits", this.x, this.y-this.height/2); 
		ctx.font = "16pt Arial";
		ctx.fillText("Creator/Developer:", this.x-this.width/2, this.y+4*this.height/2);
		ctx.fillText("Brett Davis", this.x-this.width/2, this.y+7*this.height/2);
		ctx.fillText("Art:",  this.x-this.width/2, this.y+12*this.height/2);
		ctx.fillText("Kyle Fleischer", this.x-this.width/2, this.y+15*this.height/2);
		ctx.fillText("Music and Sound:", this.x-this.width/2, this.y+20*this.height/2);
		ctx.fillText("Dave Gedarovich", this.x-this.width/2, this.y+23*this.height/2);
		ctx.fillText("Jack Van Oudenaren a.k.a. ABSRDST", this.x-this.width*3, this.y+26*this.height/2);
		ctx.fillText("Back", this.bx, this.by);
		if(hX >= this.bx-10 && hX <=this.bx + 50 && hY <= this.by && hY>=this.by-this.height*7/6){
			ctx.strokeRect(this.bx-10, this.by-this.height*7/6, this.width * 3 + 10, this.height+10);
		}		
		if((cX >= this.bx-10 && cX <=this.bx + 50 && cY <= this.by && cY>=this.by-this.height*7/6) || ((13 in keysDown || 32 in keysDown) && keytimer <= 0)){
			fastbeepsLow.currentTime=0;
			fastbeepsLow.play();
			STATE = 0;
			cX = 0;
			cY = 0;
			keytimer = 8;
		}
}
};
var Pause = {
	x: canvas.width/2,
	y: canvas.height/2,
	width: 800,
	height: 576,
	draw: function(){
		ctx.globalAlpha = 1;
		ctx.fillStyle = "white";
		ctx.font = "18pt Arial";
		ctx.drawImage(menuBack, this.x-this.width/2, this.y-this.height/2);
		ctx.fillText("-Paused-", this.x-64, this.y-32);
		for(S in AllSounds){
			AllSounds[S].pause();
		}
		for(S in AllMusic){
			AllMusic[S].pause();
		}
	}
};

var Options = {
	x: 300,
	y: canvas.height/8,
	width: 20,
	height: 20,
	bx: 400-50,
	by: 560,
	draw: function(){
		if(keytimer > 0){
			keytimer-=1;
		}
		ctx.fillStyle = "white";
		ctx.font = "18pt Arial";
		ctx.strokeStyle = "white";
		ctx.fillText("Options", this.x, this.y-this.height/2); 
		ctx.font = "16pt Arial";
		if(hX >= this.x-20 && hX <=this.x + this.width*4 && hY <= this.y+5*this.height/2 && hY>=this.y+this.height/2){
			ctx.strokeRect(this.x-20, this.y + this.height, this.width * 6, this.height+10);
		}		
		if(cX >= this.x-20 && cX <=this.x + this.width*4 && cY <= this.y+5*this.height/2 && cY>=this.y+this.height/2){
			fastbeepsLow.currentTime=0;
			fastbeepsLow.play();
			if(vol == 1){
				vol = 2;
				$.jStorage.set("vol",vol);
				cX = 0;
				cY = 0;
			}
			else if(vol == 2){
				vol = 1;
				$.jStorage.set("vol",vol);
				cX = 0;
				cY = 0;
			}
		}
		if(vol == 2){
			ctx.fillText("Sound: On", this.x-this.width/2, this.y+4*this.height/2);
			for(S in AllSounds){
				AllSounds[S].volume=0.8;
			}
		}
		if(vol == 1){
			ctx.fillText("Sound: Off", this.x-this.width/2, this.y+4*this.height/2);
			for(S in AllSounds){
				AllSounds[S].volume=0;
			}
		}
		if(hX >= this.x-20 && hX <=this.x + this.width*5 && hY <= this.y+7*this.height/2 && hY>=this.y+4*this.height/2){
			ctx.strokeRect(this.x-20, this.y + 2.5*this.height, this.width * 6, this.height+10);
		}		
		if(cX >= this.x-20 && cX <=this.x + this.width*5 && cY <= this.y+7*this.height/2 && cY>=this.y+4*this.height/2){
			fastbeepsLow.currentTime=0;
			fastbeepsLow.play();
			if(Music == 1){
				Music = 2;
				$.jStorage.set("Music",Music);
				cX = 0;
				cY = 0;
			}
			else if(Music == 2){
				Music = 1;
				$.jStorage.set("Music",Music);
				cX = 0;
				cY = 0;
			}
		}
		if(Music == 2){
			ctx.fillText("Music: On", this.x-this.width/2, this.y+7*this.height/2);
			for(M in AllMusic){
				AllMusic[M].volume = 0.5;
			}
			DumblebeatsNormal.volume = 0.4;
			CaseysQuest.volume = 0.4;
		}
		if(Music == 1){
			ctx.fillText("Music: Off", this.x-this.width/2, this.y+7*this.height/2);
			for(M in AllMusic){
				AllMusic[M].volume=0;
			}
		}
		if(hX >= this.x-20 && hX <=this.x + this.width*10 && hY <= this.y+10*this.height/2 && hY>=this.y+7*this.height/2){
			ctx.strokeRect(this.x-20, this.y + 4*this.height, this.width * 12, this.height+10);
		}		
		if(cX >= this.x-20 && cX <=this.x + this.width*10 && cY <= this.y+10*this.height/2 && cY>=this.y+7*this.height/2){
			fastbeepsLow.currentTime=0;
			fastbeepsLow.play();
			if(dispCntrls == 1){
				dispCntrls = 2;
				$.jStorage.set("cntrls",dispCntrls);
				cX = 0;
				cY = 0;
			}
			else if(dispCntrls == 2){
				dispCntrls = 1;
				$.jStorage.set("cntrls",dispCntrls);
				cX = 0;
				cY = 0;
			}
		}
		if(dispCntrls == 2){
			ctx.fillText("Display Controls: Yes", this.x-this.width/2, this.y+10*this.height/2);
		}
		if(dispCntrls == 1){
			ctx.fillText("Display Controls: No", this.x-this.width/2, this.y+10*this.height/2);
		}
		if(hX >= this.x-20 && hX <=this.x + this.width*7 && hY <= this.y+13*this.height/2 && hY>=this.y+10*this.height/2){
			ctx.strokeRect(this.x-20, this.y + 5.5*this.height, this.width * 9, this.height+10);
		}		
		if(cX >= this.x-20 && cX <=this.x + this.width*7 && cY <= this.y+13*this.height/2 && cY>=this.y+10*this.height/2){
			fastbeepsLow.currentTime=0;
			fastbeepsLow.play();
			if(dim == 1){
				dim = 2;
				$.jStorage.set("dim",dim);
				cX = 0;
				cY = 0;
			}
			else if(dim == 2){
				dim = 1;
				$.jStorage.set("dim",dim);
				cX = 0;
				cY = 0;
			}
		}
		if(dim == 2){
			ctx.fillText("3D Mode:", this.x-this.width/2, this.y+13*this.height/2);
			ctx.drawImage(glasses3d, this.x+this.width*4.5, this.y+13*this.height/2-14);
		}
		if(dim == 1){
			ctx.fillText("3D Mode:", this.x-this.width/2, this.y+13*this.height/2);
			ctx.globalAlpha = 0.2;
			ctx.drawImage(glasses3d, this.x+this.width*4.5, this.y+13*this.height/2-14);
			ctx.globalAlpha = 1;
		}
		ctx.fillText("Back", this.bx, this.by);
		if(hX >= this.bx-10 && hX <=this.bx + 50 && hY <= this.by && hY>=this.by-this.height*7/6){
			ctx.strokeRect(this.bx-10, this.by-this.height*7/6, this.width * 3 + 10, this.height+10);
		}		
		if((cX >= this.bx-10 && cX <=this.bx + 50 && cY <= this.by && cY>=this.by-this.height*7/6) || ((13 in keysDown || 32 in keysDown) && keytimer <= 0)){
			fastbeepsLow.currentTime=0;
			fastbeepsLow.play();
			keytimer = 8;
			cX = 0;
			cY = 0;
			STATE = 0;
		}
}
};
//-------------------------------------------------------------- Game Over ----------------------------------------------------------//
//array of init
var inits = {1: "_", 2: "_", 3: "_", 4: "_", 5: "_", 6: "_", 7: "_", 8: "_"};
var init = "_____";
var initsInd = 1;
var hsColor = 1;
var hsNum = 0;
var wait = 0;
var lowestScore = highscore10;
function gameOver(){
	ctx.fillStyle = "white";
	ctx.globalAlpha = 1;
	ctx.font = "14pt Arial";
	var bx = 350;
	var by = 560;
	var width = 20;
	var height = 20;
	var score = parseInt(Aes.Ctr.decrypt(Error, ErrorLogs, 256));
	init = inits[1] + inits[2] + inits[3] + inits[4] + inits[5] + inits[6] + inits[7] + inits[8];
	staticm = 1;
	if(wait > 0){
		wait-=1;
	}
	if(STATE != 5){
		ctx.fillText("Score: " + score, 320, 144);
		if(score > lowestScore){
			if(initsInd <= 8 && wait <= 0){
				inits[initsInd] = printAlphabet();
				if(inits[initsInd] != "_"){
					initsInd++;
					wait = 4;
				}
			}
			if(13 in keysDown){
				for(H in inits){
					if(inits[H] == "_"){
						inits[H] = " ";
					}
				}
				wait = 4;
				initsInd = 9;
			}
			if(8 in keysDown && wait <= 0){
				initsInd--;
				if(initsInd < 1){
					initsInd = 1;
				}
				inits[initsInd] = "_";
				wait = 4;
			}
		}
		else{
			var init = " ";
		}
	}
	if(highscore1 < score && nu == 1){
		highscore10 = highscore9;
		hs10init = hs9init;
		glasses10 = glasses9;
		$.jStorage.set("v80glasses10",glasses9);
		$.jStorage.set("v80highscore10",highscore9);
		$.jStorage.set("v80hs10init",hs9init);
		highscore9 = highscore8;
		hs9init = hs8init;
		glasses9 = glasses8;
		$.jStorage.set("v80glasses9",glasses8);
		$.jStorage.set("v80highscore9",highscore8);
		$.jStorage.set("v80hs9init",hs8init);
		highscore8 = highscore7;
		hs8init = hs7init;
		glasses8 = glasses7;
		$.jStorage.set("v80glasses8",glasses7);
		$.jStorage.set("v80highscore8",highscore7);
		$.jStorage.set("v80hs8init",hs7init);
		highscore7 = highscore6;
		hs7init = hs6init;
		glasses7 = glasses6;
		$.jStorage.set("v80glasses7",glasses6);
		$.jStorage.set("v80highscore7",highscore6);
		$.jStorage.set("v80hs7init",hs6init);
		highscore6 = highscore5;
		hs6init = hs5init;
		glasses6 = glasses5;
		$.jStorage.set("v80glasses6",glasses5);
		$.jStorage.set("v80highscore6",highscore5);
		$.jStorage.set("v80hs6init",hs5init);
		highscore5 = highscore4;
		hs5init = hs4init;
		glasses5 = glasses4;
		$.jStorage.set("v80glasses5",glasses4);
		$.jStorage.set("v80highscore5",highscore4);
		$.jStorage.set("v80hs5init",hs4init);
		highscore4 = highscore3;
		hs4init = hs3init;
		glasses4 = glasses3;
		$.jStorage.set("v80glasses4",glasses3);
		$.jStorage.set("v80highscore4",highscore3);
		$.jStorage.set("v80hs4init",hs3init);
		highscore3 = highscore2;
		hs3init = hs2init;
		glasses3 = glasses2;
		$.jStorage.set("v80glasses3",glasses2);
		$.jStorage.set("v80highscore3",highscore2);
		$.jStorage.set("v80hs3init",hs2init);
		highscore2 = highscore1;
		hs2init = hs1init;
		glasses2 = glasses1;
		$.jStorage.set("v80glasses2",glasses1);
		$.jStorage.set("v80highscore2",highscore1);
		$.jStorage.set("v80hs2init",hs1init);
		highscore1 = score;
		glasses1 = dim-1;
		$.jStorage.set("v80highscore1",score);
		$.jStorage.set("v80glasses1",dim-1);
		hs = 1;
		nu = 0;
		hsNum = 1;
	}
	else if(highscore2 < score && nu == 1){
		highscore10 = highscore9;
		hs10init = hs9init;
		glasses10 = glasses9;
		$.jStorage.set("v80glasses10",glasses9);
		$.jStorage.set("v80highscore10",highscore9);
		$.jStorage.set("v80hs10init",hs9init);
		highscore9 = highscore8;
		hs9init = hs8init;
		glasses9 = glasses8;
		$.jStorage.set("v80glasses9",glasses8);
		$.jStorage.set("v80highscore9",highscore8);
		$.jStorage.set("v80hs9init",hs8init);
		highscore8 = highscore7;
		hs8init = hs7init;
		glasses8 = glasses7;
		$.jStorage.set("v80glasses8",glasses7);
		$.jStorage.set("v80highscore8",highscore7);
		$.jStorage.set("v80hs8init",hs7init);
		highscore7 = highscore6;
		hs7init = hs6init;
		glasses7 = glasses6;
		$.jStorage.set("v80glasses7",glasses6);
		$.jStorage.set("v80highscore7",highscore6);
		$.jStorage.set("v80hs7init",hs6init);
		highscore6 = highscore5;
		hs6init = hs5init;
		glasses6 = glasses5;
		$.jStorage.set("v80glasses6",glasses5);
		$.jStorage.set("v80highscore6",highscore5);
		$.jStorage.set("v80hs6init",hs5init);
		highscore5 = highscore4;
		hs5init = hs4init;
		glasses5 = glasses4;
		$.jStorage.set("v80glasses5",glasses4);
		$.jStorage.set("v80highscore5",highscore4);
		$.jStorage.set("v80hs5init",hs4init);
		highscore4 = highscore3;
		hs4init = hs3init;
		glasses4 = glasses3;
		$.jStorage.set("v80glasses4",glasses3);
		$.jStorage.set("v80highscore4",highscore3);
		$.jStorage.set("v80hs4init",hs3init);
		highscore3 = highscore2;
		hs3init = hs2init;
		glasses3 = glasses2;
		$.jStorage.set("v80glasses3",glasses2);
		$.jStorage.set("v80highscore3",highscore2);
		$.jStorage.set("v80hs3init",hs2init);
		highscore2 = score;
		glasses2 = dim-1;
		$.jStorage.set("v80highscore2",score);
		$.jStorage.set("v80glasses2",dim-1);
		hs = 1;
		nu = 0;
		hsNum = 2;
	}
	else if(highscore3 < score && nu == 1){
		highscore10 = highscore9;
		hs10init = hs9init;
		glasses10 = glasses9;
		$.jStorage.set("v80glasses10",glasses9);
		$.jStorage.set("v80highscore10",highscore9);
		$.jStorage.set("v80hs10init",hs9init);
		highscore9 = highscore8;
		hs9init = hs8init;
		glasses9 = glasses8;
		$.jStorage.set("v80glasses9",glasses8);
		$.jStorage.set("v80highscore9",highscore8);
		$.jStorage.set("v80hs9init",hs8init);
		highscore8 = highscore7;
		hs8init = hs7init;
		glasses8 = glasses7;
		$.jStorage.set("v80glasses8",glasses7);
		$.jStorage.set("v80highscore8",highscore7);
		$.jStorage.set("v80hs8init",hs7init);
		highscore7 = highscore6;
		hs7init = hs6init;
		glasses7 = glasses6;
		$.jStorage.set("v80glasses7",glasses6);
		$.jStorage.set("v80highscore7",highscore6);
		$.jStorage.set("v80hs7init",hs6init);
		highscore6 = highscore5;
		hs6init = hs5init;
		glasses6 = glasses5;
		$.jStorage.set("v80glasses6",glasses5);
		$.jStorage.set("v80highscore6",highscore5);
		$.jStorage.set("v80hs6init",hs5init);
		highscore5 = highscore4;
		hs5init = hs4init;
		glasses5 = glasses4;
		$.jStorage.set("v80glasses5",glasses4);
		$.jStorage.set("v80highscore5",highscore4);
		$.jStorage.set("v80hs5init",hs4init);
		highscore4 = highscore3;
		hs4init = hs3init;
		glasses4 = glasses3;
		$.jStorage.set("v80glasses4",glasses3);
		$.jStorage.set("v80highscore4",highscore3);
		$.jStorage.set("v80hs4init",hs3init);
		highscore3 = score;
		glasses3 = dim-1;
		$.jStorage.set("v80highscore3",score);
		$.jStorage.set("v80glasses3",dim-1);
		hs = 1;
		nu = 0;
		hsNum = 3;
	}
	else if(highscore4 < score && nu == 1){
		highscore10 = highscore9;
		hs10init = hs9init;
		glasses10 = glasses9;
		$.jStorage.set("v80glasses10",glasses9);
		$.jStorage.set("v80highscore10",highscore9);
		$.jStorage.set("v80hs10init",hs9init);
		highscore9 = highscore8;
		hs9init = hs8init;
		glasses9 = glasses8;
		$.jStorage.set("v80glasses9",glasses8);
		$.jStorage.set("v80highscore9",highscore8);
		$.jStorage.set("v80hs9init",hs8init);
		highscore8 = highscore7;
		hs8init = hs7init;
		glasses8 = glasses7;
		$.jStorage.set("v80glasses8",glasses7);
		$.jStorage.set("v80highscore8",highscore7);
		$.jStorage.set("v80hs8init",hs7init);
		highscore7 = highscore6;
		hs7init = hs6init;
		glasses7 = glasses6;
		$.jStorage.set("v80glasses7",glasses6);
		$.jStorage.set("v80highscore7",highscore6);
		$.jStorage.set("v80hs7init",hs6init);
		highscore6 = highscore5;
		hs6init = hs5init;
		glasses6 = glasses5;
		$.jStorage.set("v80glasses6",glasses5);
		$.jStorage.set("v80highscore6",highscore5);
		$.jStorage.set("v80hs6init",hs5init);
		highscore5 = highscore4;
		hs5init = hs4init;
		glasses5 = glasses4;
		$.jStorage.set("v80glasses5",glasses4);
		$.jStorage.set("v80highscore5",highscore4);
		$.jStorage.set("v80hs5init",hs4init);
		highscore4 = score;
		glasses4 = dim-1;
		$.jStorage.set("v80highscore4",score);
		$.jStorage.set("v80glasses4",dim-1);
		hs = 1;
		nu = 0;
		hsNum = 4;
	}
	else if(highscore5 < score && nu == 1){
		highscore10 = highscore9;
		hs10init = hs9init;
		glasses10 = glasses9;
		$.jStorage.set("v80glasses10",glasses9);
		$.jStorage.set("v80highscore10",highscore9);
		$.jStorage.set("v80hs10init",hs9init);
		highscore9 = highscore8;
		hs9init = hs8init;
		glasses9 = glasses8;
		$.jStorage.set("v80glasses9",glasses8);
		$.jStorage.set("v80highscore9",highscore8);
		$.jStorage.set("v80hs9init",hs8init);
		highscore8 = highscore7;
		hs8init = hs7init;
		glasses8 = glasses7;
		$.jStorage.set("v80glasses8",glasses7);
		$.jStorage.set("v80highscore8",highscore7);
		$.jStorage.set("v80hs8init",hs7init);
		highscore7 = highscore6;
		hs7init = hs6init;
		glasses7 = glasses6;
		$.jStorage.set("v80glasses7",glasses6);
		$.jStorage.set("v80highscore7",highscore6);
		$.jStorage.set("v80hs7init",hs6init);
		highscore6 = highscore5;
		hs6init = hs5init;
		glasses6 = glasses5;
		$.jStorage.set("v80glasses6",glasses5);
		$.jStorage.set("v80highscore6",highscore5);
		$.jStorage.set("v80hs6init",hs5init);
		highscore5 = score;
		glasses5 = dim-1;
		$.jStorage.set("v80highscore5",score);
		$.jStorage.set("v80glasses5",dim-1);
		hs = 1;
		nu = 0;
		hsNum = 5;
	}
	else if(highscore6 < score && nu == 1){
		highscore10 = highscore9;
		hs10init = hs9init;
		glasses10 = glasses9;
		$.jStorage.set("v80glasses10",glasses9);
		$.jStorage.set("v80highscore10",highscore9);
		$.jStorage.set("v80hs10init",hs9init);
		highscore9 = highscore8;
		hs9init = hs8init;
		glasses9 = glasses8;
		$.jStorage.set("v80glasses9",glasses8);
		$.jStorage.set("v80highscore9",highscore8);
		$.jStorage.set("v80hs9init",hs8init);
		highscore8 = highscore7;
		hs8init = hs7init;
		glasses8 = glasses7;
		$.jStorage.set("v80glasses8",glasses7);
		$.jStorage.set("v80highscore8",highscore7);
		$.jStorage.set("v80hs8init",hs7init);
		highscore7 = highscore6;
		hs7init = hs6init;
		glasses7 = glasses6;
		$.jStorage.set("v80glasses7",glasses6);
		$.jStorage.set("v80highscore7",highscore6);
		$.jStorage.set("v80hs7init",hs6init);
		highscore6 = score;
		glasses6 = dim-1;
		$.jStorage.set("v80highscore6",score);
		$.jStorage.set("v80glasses6",dim-1);
		hs = 1;
		nu = 0;
		hsNum = 6;
	}
	else if(highscore7 < score && nu == 1){
		highscore10 = highscore9;
		hs10init = hs9init;
		glasses10 = glasses9;
		$.jStorage.set("v80glasses10",glasses9);
		$.jStorage.set("v80highscore10",highscore9);
		$.jStorage.set("v80hs10init",hs9init);
		highscore9 = highscore8;
		hs9init = hs8init;
		glasses9 = glasses8;
		$.jStorage.set("v80glasses9",glasses8);
		$.jStorage.set("v80highscore9",highscore8);
		$.jStorage.set("v80hs9init",hs8init);
		highscore8 = highscore7;
		hs8init = hs7init;
		glasses8 = glasses7;
		$.jStorage.set("v80glasses8",glasses7);
		$.jStorage.set("v80highscore8",highscore7);
		$.jStorage.set("v80hs8init",hs7init);
		highscore7 = score;
		glasses7 = dim-1;
		$.jStorage.set("v80highscore7",score);
		$.jStorage.set("v80glasses7",dim-1);
		hs = 1;
		nu = 0;
		hsNum = 7;
	}
	else if(highscore8 < score && nu == 1){
		highscore10 = highscore9;
		hs10init = hs9init;
		glasses10 = glasses9;
		$.jStorage.set("v80glasses10",glasses9);
		$.jStorage.set("v80highscore10",highscore9);
		$.jStorage.set("v80hs10init",hs9init);
		highscore9 = highscore8;
		hs9init = hs8init;
		glasses9 = glasses8;
		$.jStorage.set("v80glasses9",glasses8);
		$.jStorage.set("v80highscore9",highscore8);
		$.jStorage.set("v80hs9init",hs8init);
		highscore8 = score;
		glasses8 = dim-1;
		$.jStorage.set("v80highscore8",score);
		$.jStorage.set("v80glasses8",dim-1);
		hs = 1;
		nu = 0;
		hsNum = 8;
	}
	else if(highscore9 < score && nu == 1){
		highscore10 = highscore9;
		hs10init = hs9init;
		glasses10 = glasses9;
		$.jStorage.set("v80glasses10",glasses9);
		$.jStorage.set("v80highscore10",highscore9);
		$.jStorage.set("v80hs10init",hs9init);
		highscore9 = score;
		glasses9 = dim-1;
		$.jStorage.set("v80highscore9",score);
		$.jStorage.set("v80glasses9",dim-1);
		hs = 1;
		nu = 0;
		hsNum = 9;
	}
	else if(highscore10 < score && nu == 1){
		highscore10 = score;
		glasses10 = dim-1;
		$.jStorage.set("v80highscore10",score);
		$.jStorage.set("v80glasses10",dim-1);
		hs = 1;
		nu = 0;
		hsNum = 10;
	}
	if(hsNum == 1){
		$.jStorage.set("v80hs1init",init);
		hs1init = init;
	}
	if(hsNum == 2){
		$.jStorage.set("v80hs2init",init);
		hs2init = init;
	}
	if(hsNum == 3){
		$.jStorage.set("v80hs3init",init);
		hs3init = init;
	}
	if(hsNum == 4){
		$.jStorage.set("v80hs4init",init);
		hs4init = init;
	}
	if(hsNum == 5){
		$.jStorage.set("v80hs5init",init);
		hs5init = init;
	}
	if(hsNum == 6){
		$.jStorage.set("v80hs6init",init);
		hs6init = init;
	}
	if(hsNum == 7){
		$.jStorage.set("v80hs7init",init);
		hs7init = init;
	}
	if(hsNum == 8){
		$.jStorage.set("v80hs8init",init);
		hs8init = init;
	}
	if(hsNum == 9){
		$.jStorage.set("v80hs9init",init);
		hs9init = init;
	}
	if(hsNum == 10){
		$.jStorage.set("v80hs10init",init);
		hs10init = init;
	}
	if(hs == 1){
		ctx.fillStyle = colorz[hsColor];
		hsColor++;
		if(hsColor > 6){
			hsColor = 1;
		}
		ctx.font = "18pt Arial";
		if(!(score > gscore10)){
			ctx.fillText("New High Score! Please Enter Your Name!", 176, 64);
		}
		else{
			ctx.fillText("New Global High Score!", 240, 32);
			ctx.fillText("Enter Your Name and Submit! DISABLE POPUP BLOCKER!!!", 64, 64);
		}
	}
	ctx.fillStyle = "white";
	ctx.strokeStyle = "white";
	ctx.font = "18pt Arial";
	ctx.fillText("Version " + VersionNumb + "Alpha: " + upDate, 244, 96);
	ctx.fillText("Personal High Scores:", 128, 208);
	ctx.fillText("Global High Scores:", 450, 208);
	ctx.font = "16pt Arial";
	if(hsNum == 1){
		ctx.fillStyle = colorz[hsColor];
	}
	if(glasses1==1){
		ctx.drawImage(glasses3d, 80, 224);
	}
	ctx.fillText("1st: " + highscore1 + "    " + hs1init, 128, 240);
	ctx.fillStyle = "white";
	if(hsNum == 2){
		ctx.fillStyle = colorz[hsColor];
	}
	if(glasses2==1){
		ctx.drawImage(glasses3d, 80, 256);
	}
	ctx.fillText("2nd: " + highscore2 + "    " + hs2init, 128, 272);
	ctx.fillStyle = "white";
	if(hsNum == 3){
		ctx.fillStyle = colorz[hsColor];
	}
	if(glasses3==1){
		ctx.drawImage(glasses3d, 80, 288);
	}
	ctx.fillText("3rd: " + highscore3 + "    " + hs3init, 128, 304);
	ctx.fillStyle = "white";
	if(hsNum == 4){
		ctx.fillStyle = colorz[hsColor];
	}
	if(glasses4==1){
		ctx.drawImage(glasses3d, 80, 320);
	}
	ctx.fillText("4th: " + highscore4 + "    " + hs4init, 128, 336);
	ctx.fillStyle = "white";
	if(hsNum == 5){
		ctx.fillStyle = colorz[hsColor];
	}
	if(glasses5==1){
		ctx.drawImage(glasses3d, 80, 352);
	}
	ctx.fillText("5th: " + highscore5 + "    " + hs5init, 128, 368);
	ctx.fillStyle = "white";
	if(hsNum == 6){
		ctx.fillStyle = colorz[hsColor];
	}
	if(glasses6==1){
		ctx.drawImage(glasses3d, 80, 384);
	}
	ctx.fillText("6th: " + highscore6 + "    " + hs6init, 128, 400);
	ctx.fillStyle = "white";
	if(hsNum == 7){
		ctx.fillStyle = colorz[hsColor];
	}
	if(glasses7==1){
		ctx.drawImage(glasses3d, 80, 416);
	}
	ctx.fillText("7th: " + highscore7 + "    " + hs7init, 128, 432);
	ctx.fillStyle = "white";
	if(hsNum == 8){
		ctx.fillStyle = colorz[hsColor];
	}
	if(glasses8==1){
		ctx.drawImage(glasses3d, 80, 448);
	}
	ctx.fillText("8th: " + highscore8 + "    " + hs8init, 128, 464);
	ctx.fillStyle = "white";
	if(hsNum == 9){
		ctx.fillStyle = colorz[hsColor];
	}
	if(glasses9==1){
		ctx.drawImage(glasses3d, 80, 480);
	}
	ctx.fillText("9th: " + highscore9 + "    " + hs9init, 128, 496);
	ctx.fillStyle = "white";
	if(hsNum == 10){
		ctx.fillStyle = colorz[hsColor];
	}
	if(glasses10==1){
		ctx.drawImage(glasses3d, 80, 512);
	}
	ctx.fillText("10th: " + highscore10 + "    " + hs10init, 128, 528);
	//Global scores
	//remove underscores
	var gnamez1 = gname1.split('');
	for(H in gnamez1){
		if(gnamez1[H] == "_"){
			gnamez1[H] = " ";
		}
	}
	gname1 = gnamez1[0] + gnamez1[1] + gnamez1[2] + gnamez1[3] + gnamez1[4] + gnamez1[5] + gnamez1[6] + gnamez1[7];
	var gnamez2 = gname2.split('');
	for(H in gnamez2){
		if(gnamez2[H] == "_"){
			gnamez2[H] = " ";
		}
	}
	gname2 = gnamez2[0] + gnamez2[1] + gnamez2[2] + gnamez2[3] + gnamez2[4] + gnamez2[5] + gnamez2[6] + gnamez2[7];
	var gnamez3 = gname3.split('');
	for(H in gnamez3){
		if(gnamez3[H] == "_"){
			gnamez3[H] = " ";
		}
	}
	gname3 = gnamez3[0] + gnamez3[1] + gnamez3[2] + gnamez3[3] + gnamez3[4] + gnamez3[5] + gnamez3[6] + gnamez3[7];
	var gnamez4 = gname4.split('');
	for(H in gnamez4){
		if(gnamez4[H] == "_"){
			gnamez4[H] = " ";
		}
	}
	gname4 = gnamez4[0] + gnamez4[1] + gnamez4[2] + gnamez4[3] + gnamez4[4] + gnamez4[5] + gnamez4[6] + gnamez4[7];
	var gnamez5 = gname5.split('');
	for(H in gnamez5){
		if(gnamez5[H] == "_"){
			gnamez5[H] = " ";
		}
	}
	gname5 = gnamez5[0] + gnamez5[1] + gnamez5[2] + gnamez5[3] + gnamez5[4] + gnamez5[5] + gnamez5[6] + gnamez5[7];
	var gnamez6 = gname6.split('');
	for(H in gnamez6){
		if(gnamez6[H] == "_"){
			gnamez6[H] = " ";
		}
	}
	gname6 = gnamez6[0] + gnamez6[1] + gnamez6[2] + gnamez6[3] + gnamez6[4] + gnamez6[5] + gnamez6[6] + gnamez6[7];
	var gnamez7 = gname7.split('');
	for(H in gnamez7){
		if(gnamez7[H] == "_"){
			gnamez7[H] = " ";
		}
	}
	gname7 = gnamez7[0] + gnamez7[1] + gnamez7[2] + gnamez7[3] + gnamez7[4] + gnamez7[5] + gnamez7[6] + gnamez7[7];
	var gnamez8 = gname8.split('');
	for(H in gnamez8){
		if(gnamez8[H] == "_"){
			gnamez8[H] = " ";
		}
	}
	gname8 = gnamez8[0] + gnamez8[1] + gnamez8[2] + gnamez8[3] + gnamez8[4] + gnamez8[5] + gnamez8[6] + gnamez8[7];
	var gnamez9 = gname9.split('');
	for(H in gnamez9){
		if(gnamez9[H] == "_"){
			gnamez9[H] = " ";
		}
	}
	gname9 = gnamez9[0] + gnamez9[1] + gnamez9[2] + gnamez9[3] + gnamez9[4] + gnamez9[5] + gnamez9[6] + gnamez9[7];
	var gnamez10 = gname10.split('');
	for(H in gnamez10){
		if(gnamez10[H] == "_"){
			gnamez10[H] = " ";
		}
	}
	gname10 = gnamez10[0] + gnamez10[1] + gnamez10[2] + gnamez10[3] + gnamez10[4] + gnamez10[5] + gnamez10[6] + gnamez10[7];
	ctx.fillStyle = "white";
	ctx.fillText("1st: " + gscore1 + "    " + gname1, 450, 240);
	ctx.fillText("2nd: " + gscore2 + "    " + gname2, 450, 272);
	ctx.fillText("3rd: " + gscore3 + "    " + gname3, 450, 304);
	ctx.fillText("4th: " + gscore4 + "    " + gname4, 450, 336);
	ctx.fillText("5th: " + gscore5 + "    " + gname5, 450, 368);
	ctx.fillText("6th: " + gscore6 + "    " + gname6, 450, 400);
	ctx.fillText("7th: " + gscore7 + "    " + gname7, 450, 432);
	ctx.fillText("8th: " + gscore8 + "    " + gname8, 450, 464);
	ctx.fillText("9th: " + gscore9 + "    " + gname9, 450, 498);
	ctx.fillText("10th: " + gscore10 + "    " + gname10, 450, 528);
	if(gglass1 == 1){
		ctx.drawImage(glasses3d, 402, 224);
	}
	if(gglass2 == 1){
		ctx.drawImage(glasses3d, 402, 256);
	}
	if(gglass3 == 1){
		ctx.drawImage(glasses3d, 402, 288);
	}
	if(gglass4 == 1){
		ctx.drawImage(glasses3d, 402, 320);
	}
	if(gglass5 == 1){
		ctx.drawImage(glasses3d, 402, 352);
	}
	if(gglass6 == 1){
		ctx.drawImage(glasses3d, 402, 384);
	}
	if(gglass7 == 1){
		ctx.drawImage(glasses3d, 402, 416);
	}
	if(gglass8 == 1){
		ctx.drawImage(glasses3d, 402, 448);
	}
	if(gglass9 == 1){
		ctx.drawImage(glasses3d, 402, 480);
	}
	if(gglass10 == 1){
		ctx.drawImage(glasses3d, 402, 512);
	}
	ctx.fillStyle = "white";
	ctx.font = "16pt Arial";
	if(score > gscore10){
		ctx.fillStyle = colorz[hsColor];
		ctx.fillText("Submit", bx-8, by);
	}
	else{
		ctx.fillText("Back", bx, by);
	}
	if(hX >= bx-10 && hX <=bx + 50 && hY <= by && hY>=by-height*7/6){
		ctx.strokeRect(bx-10, by-height*7/6, width * 3 + 10, height+10);
	}
	if((cX >= bx-10 && cX <=bx + 50 && cY <= by && cY>=by-height*7/6) || ((13 in keysDown || 32 in keysDown) && wait <= 0)){
		cX=0;
		cY=0;
		wait = 3;
		keytimer = 8;
		fastbeepsLow.currentTime=0;
		fastbeepsLow.play();
		if(STATE == 4){
			if(score > gscore10){
				delete keysDown[32];
				delete keysDown[13];
				phpwindow = window.open("submit.php?name=" + init + "&score=" + score + "&hash=" + Stacktrace(parseInt(Aes.Ctr.decrypt(Error, ErrorLogs, 256))) + "&glass=" + (dim-1 + ""));
				setTimeout("phpwindow.close()",500);
			}
			reset();
		}
		else{
			STATE = 0;
		}
		Menu.scoreSelect = true;
	} 
}
//---------------------------------------------------------- Alphabet Print ---------------------------------------------------------//
function printAlphabet(){
	if(65 in keysDown){
		return "A";
	}
	else if(66 in keysDown){
		return "B";
	}
	else if(67 in keysDown){
		return "C";
	}
	else if(68 in keysDown){
		return "D";
	}
	else if(69 in keysDown){
		return "E";
	}
	else if(70 in keysDown){
		return "F";
	}
	else if(71 in keysDown){
		return "G";
	}
	else if(72 in keysDown){
		return "H";
	}
	else if(73 in keysDown){
		return "I";
	}
	else if(74 in keysDown){
		return "J";
	}
	else if(75 in keysDown){
		return "K";
	}
	else if(76 in keysDown){
		return "L";
	}
	else if(77 in keysDown){
		return "M";
	}
	else if(78 in keysDown){
		return "N";
	}
	else if(79 in keysDown){
		return "O";
	}
	else if(80 in keysDown){
		return "P";
	}
	else if(81 in keysDown){
		return "Q";
	}
	else if(82 in keysDown){
		return "R";
	}
	else if(83 in keysDown){
		return "S";
	}
	else if(84 in keysDown){
		return "T";
	}
	else if(85 in keysDown){
		return "U";
	}
	else if(86 in keysDown){
		return "V";
	}
	else if(87 in keysDown){
		return "W";
	}
	else if(88 in keysDown){
		return "X";
	}
	else if(89 in keysDown){
		return "Y";
	}
	else if(90 in keysDown){
		return "Z";
	}
	else{
		return "_";
	}
}		