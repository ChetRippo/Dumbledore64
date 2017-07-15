//----------------------------------------------------- Menu ------------------------------------------------------------------------//
var Menu = {
	x: canvas.width*0.5,
	y: canvas.height*0.5,
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
	levelSelect: false,
	godmode: "",
	godmodeWait: false,
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
			ctx.drawImage(TitleReal, 0, 0);
			if (this.godmodeWait && Object.keys(keysDown).length == 0) {
				this.godmodeWait = false;
			}else if (54 in keysDown && !this.godmodeWait && Object.keys(keysDown).length == 1) {
				this.godmode += "6";
				if (this.godmode == "666") {
					GODMODE = !GODMODE;
					fastbeepsLow.currentTime=0;
					fastbeepsLow.play();
					this.godmode = "";
					this.godmodeWait = false;
				}
				this.godmodeWait = true;
			} else if (Object.keys(keysDown).length > 0 && !(54 in keysDown && Object.keys(keysDown).length == 1)) {
				this.godmode = "";
				this.godmodeWait = false;
			}
			//Version Info (Just a pop up not a menu)this.x-3*this.width/3, this.y+8.75*this.height
		//	ctx.fillText("v"+ VersionNumb + " " + upDate, this.x-2*this.width/3, this.y+8.75*this.height);
		//	if(hX >= this.x-3*this.width/3 && hX <=this.x-this.width/3 + 256 && hY <= this.y+7.75*this.height+35 && hY>=this.y+7.75*this.height+10){
	//			ctx.strokeRect(this.x-3*this.width/3 - 40, this.y+8.75*this.height - 25, this.width * 3, this.height+10);
	//		}		
	//		if(cX >= this.x-3*this.width/3 && cX <=this.x-this.width/3 + 256 && cY <= this.y+7.75*this.height+35 && cY>=this.y+7.75*this.height+10){
	//			fastbeepsLow.currentTime=0;
	//			fastbeepsLow.play();
	//			cX = 0;
	//			cY = 0;
	//			window.open("VersionInfo.htm");
	//		}
			//Classic mode
			/*ctx.fillText("Play Classic Mode!", this.x+this.width+16,this.y+64);
			if(hX >= this.x+this.width+16 && hX <=this.x+this.width+196 && hY <= this.y+74 && hY>=this.y+44){
				ctx.strokeRect(this.x+this.width+6, this.y + 39, this.width*1.5, this.height+10);
			}		
			if(cX >= this.x+this.width+16 && cX <=this.x+this.width+196 && cY <= this.y+74 && cY>=this.y+44){
				fastbeepsLow.currentTime=0;
				fastbeepsLow.play();
				cX = 0;
				cY = 0;
				window.open("http://glassknuckle.com/Dumbledore64/chamberofsecrets/classic/Dumbledore64.html");
			}
			//multiplayer
			ctx.fillText("Online Coop **Alpha**", 20,400);
			if(hX >= 20 && hX <=256 && hY <= 400 && hY>=370){
				ctx.strokeRect(20, 375, 236, 30);
			}		
			if(cX >= 20 && cX <=256 && cY <= 400 && cY>=370){
				fastbeepsLow.currentTime=0;
				fastbeepsLow.play();
				cX = 0;
				cY = 0;
				STATE="Mult";
				AList[6] = true;
				if(typeof(MozWebSocket) != "undefined") {
					//ws = new MozWebSocket("ws://69.175.126.130/Dumbledore64/chamberofsecrets/dev_multiplayer/Websockets/Lobby");
					//open_ws();
					ws = new MozWebSocket("ws://69.175.126.130/Dumbledore64/Websockets/Lobby1/DD64COOP");
					open_socket();
				}
				else if (typeof(WebSocket) != "undefined") {
					//ws = new WebSocket("ws://69.175.126.130/Dumbledore64/chamberofsecrets/dev_multiplayer/Websockets/Lobby");
					//open_ws();
					ws = new WebSocket("ws://69.175.126.130/Dumbledore64/Websockets/Lobby1/DD64COOP");
					open_socket();
				}
				else{
					alert("Websockets not supported on this browser!");
				}
			}*/
			//Menu controls, keys is never called so copy pasted
			if(keytimer > 0){
				keytimer-=1;
			}
			//newgame
			if((hX >= 256 && hX <=542 && hY < 300 && hY>=250) || this.newgameSelect){
				select = true;
				this.newgameSelect = true;
				this.howtoplaySelect = false;
				this.optionsSelect = false;
				this.scoreSelect = false;
				this.creditSelect = false;
				this.levelSelect = false;
			}		
			if((cX >= 256 && cX <=542 && cY < 300 && cY>=250) || ((13 in keysDown || 32 in keysDown) && this.newgameSelect)){
				fastbeepsLow.currentTime=0;
				fastbeepsLow.play();
				cX = 0;
				cY = 0;
				if(dispCntrls == 2){
					STATE = "Tutorial";
				}
				else{
					STATE = 1;
				}
				keytimer = 15;
			}
			//levelselect
			if((hX >= 236 && hX <=558 && hY <330  && hY>=300) || this.levelSelect){
				select = true;
				this.newgameSelect = false;
				this.howtoplaySelect = false;
				this.optionsSelect = false;
				this.scoreSelect = false;
				this.creditSelect = false;
				this.levelSelect = true;
			}		
			if((cX >= 236 && cX <=558 && cY < 330 && cY>=300) || ((13 in keysDown || 32 in keysDown) && this.levelSelect && keytimer <=0)){
				fastbeepsLow.currentTime=0;
				fastbeepsLow.play();
				cX = 0;
				cY = 0;
				STATE = 7;
				keytimer = 15;
			}
			//How to Play
			if((hX >= 256 && hX <= 542 && hY < 446 && hY>=406) || this.howtoplaySelect){
				select = true;
				this.newgameSelect = false;
				this.howtoplaySelect = true;
				this.optionsSelect = false;
				this.scoreSelect = false;
				this.creditSelect = false;
				this.levelSelect = false;
			}		
			if((cX >= 256 && cX <= 542 && cY < 446 && cY>=406) || (this.howtoplaySelect && (13 in keysDown || 32 in keysDown) && keytimer <=0)){
				fastbeepsLow.currentTime=0;
				fastbeepsLow.play();
				cX = 0;
				cY = 0;
				STATE = 2;
				keytimer = 8;
			}
			//Score
			if((hX >= 256 && hX <=542 && hY < 366 && hY>=330) || this.scoreSelect){
				select = true;
				this.newgameSelect = false;
				this.howtoplaySelect = false;
				this.optionsSelect = false;
				this.scoreSelect = true;
				this.creditSelect = false;
				this.levelSelect = false;
			}		
			if((cX >= 256 && cX <=542 && cY < 366 && cY>=330) || (this.scoreSelect && (13 in keysDown || 32 in keysDown) && keytimer <= 0)){
				fastbeepsLow.currentTime=0;
				fastbeepsLow.play();
				cX = 0;
				cY = 0;
				STATE = 5;
				wait = 8;
			}
			//Options
			if((hX >= 256 && hX <=542 && hY < 406 && hY>=366) || this.optionsSelect){
				select = true;
				this.newgameSelect = false;
				this.howtoplaySelect = false;
				this.optionsSelect = true;
				this.scoreSelect = false;
				this.creditSelect = false;
				this.levelSelect = false;
			}		
			if((cX >= 256 && cX <=542 && cY < 406 && cY>=366) || (this.optionsSelect && (13 in keysDown || 32 in keysDown) && keytimer <= 0)){
				fastbeepsLow.currentTime=0;
				fastbeepsLow.play();
				cX = 0;
				cY = 0;
				STATE = 6;
				keytimer = 8;
			}
			//Credits
			if((hX >= 256 && hX <=542 && hY < 486 && hY>=446) || this.creditSelect){
				select = true;
				this.newgameSelect = false;
				this.howtoplaySelect = false;
				this.optionsSelect = false;
				this.scoreSelect = false;
				this.creditSelect = true;
				this.levelSelect = false;
			}		
			if((cX >= 256 && cX <=542 && cY < 486 && cY>=446) || (this.creditSelect && (13 in keysDown || 32 in keysDown) && keytimer <= 0)){
				fastbeepsLow.currentTime=0;
				fastbeepsLow.play();
				cX = 0;
				cY = 0;
				STATE = 3;
				keytimer = 8;
			}
			//keys in menu, 40 down 38 up
			//init
			if(keytimer == 0 && !this.newgameSelect && !this.howtoplaySelect && !this.optionsSelect && !this.scoreSelect && !this.creditSelect && !this.levelSelect && (38 in keysDown || 40 in keysDown)){
				keytimer = 4;
				select = true;
				this.newgameSelect = true;
			}
			//full down
			else if(keytimer == 0 && !this.howtoplaySelect && !this.optionsSelect && !this.scoreSelect && !this.creditSelect && !this.levelSelect && (40 in keysDown)){
				keytimer = 4;
				select = true;
				this.newgameSelect = false;
				this.levelSelect = true;
			}
			else if(keytimer == 0 && !this.howtoplaySelect && !this.optionsSelect && !this.creditSelect && !this.scoreSelect && (40 in keysDown)){
				keytimer = 4;
				select = true;
				this.levelSelect = false;
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
				this.levelSelect = true;
			}
			else if(keytimer == 0 && this.levelSelect && (38 in keysDown)){
				keytimer = 4;
				select = true;
				this.levelSelect = false;
				this.newgameSelect = true;
			}
			else if(keytimer == 0 && this.newgameSelect && (38 in keysDown)){
				keytimer = 4;
				select = true;
				this.newgameSelect = false;
				this.creditSelect = true;
			}
			if(this.newgameSelect){
				ctx.drawImage(newgamemenu, 0, 0);
			}
			else if(this.levelSelect){
				ctx.drawImage(levelmenu, 0, 0);
			}
			else if(this.optionsSelect){
				ctx.drawImage(optionsmenu, 0, 0);
			}
			else if(this.scoreSelect){
				ctx.drawImage(scoremenu, 0, 0);
			}
			else if(this.creditSelect){
				ctx.drawImage(creditsmenu, 0, 0);
			}
			else if(this.howtoplaySelect){
				ctx.drawImage(helpmenu, 0, 0);
			}
			else if(select == false){
				ctx.drawImage(noselectmenu, 0, 0);
			}
			//xmas
			//ctx.drawImage(festivehatTitle, 0, -36);
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
		ctx.font = "28pt acknowledge";
		ctx.strokeStyle = "white";
		ctx.fillText("FOLLOW DUMBLEDORE ON A VIRTUOUS QUEST!", this.x-this.width*0.5, this.y-this.height*0.5);
		ctx.fillText("CAST SPELLS! COMBINE ELEMENTS!", this.x-this.width*0.5, this.y+2*this.height*0.5);
		ctx.fillText("BEAT UP SOME HANDSOME MONSTERS!", this.x-this.width*0.5, this.y+5*this.height*0.5);
		ctx.fillStyle = "red";
		ctx.fillText("CONTROLS :", this.x-this.width*0.5, this.y+11*this.height*0.5);
		ctx.fillStyle = "white";
		ctx.fillText("WASD: MOVE", this.x-this.width*0.5, this.y+14*this.height*0.5);
		ctx.fillText("ARROWS: DUMBLEBEAM", this.x-this.width*0.5, this.y+17*this.height*0.5);
		ctx.fillText("SPACE: CAST SPELL", this.x-this.width*0.5, this.y+20*this.height*0.5);
		ctx.fillText("Q: DROP 1", this.x-this.width*0.5, this.y+23*this.height*0.5);
		ctx.fillText("E: DROP 2", this.x-this.width*0.5, this.y+26*this.height*0.5);
		ctx.fillText("P: PAUSE", this.x-this.width*0.5, this.y+29*this.height*0.5);
		//ctx.fillStyle = "red";
		/*ctx.fillText("Reviews: ", this.x-this.width*0.5, this.y+35*this.height*0.5);
		ctx.fillStyle = "white";
		ctx.fillText("'10/10 I <3 WIZARDS' ~GameStoop", this.x-this.width*0.5, this.y+38*this.height*0.5);
		ctx.fillText("'DD64 cast a spell on me!' ~IGM", this.x-this.width*0.5, this.y+41*this.height*0.5);
		ctx.fillText("'This game is great!' ~That guy from destructoid everyone hates", this.x-this.width*0.5, this.y+44*this.height*0.5);
		*/ctx.font = "28pt acknowledge";
		ctx.fillText("BACK", this.bx, this.by);
		if(hX >= this.bx-10 && hX <=this.bx + 80 && hY <= this.by && hY>=this.by-this.height*14/6){
			ctx.strokeRect(this.bx-10, this.by-this.height*7/6, this.width * 3 + 40, this.height+10);
		}
		if((cX >= this.bx-10 && cX <=this.bx + 80 && cY <= this.by && cY>=this.by-this.height*14/6) || ((13 in keysDown || 32 in keysDown) && keytimer <= 0)){
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
		ctx.drawImage(creditsScreen, 0, 0, 800, 576, 0, 0, 800, 576);
		if((hX >= 0 && hX <= 150 && hY <= 576 && hY>=500)){
			ctx.strokeRect(this.bx-322, this.by-this.height*7/6 + 2, this.width * 3 + 50, this.height+10);
		}	
		if((cX >= 0 && cX <= 150 && cY <= 576 && cY>=500) || ((13 in keysDown || 32 in keysDown) && keytimer <= 0)){
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
	x: canvas.width*0.5,
	y: canvas.height*0.5,
	width: 800,
	height: 576,
	draw: function(){
		ctx.globalAlpha = 1;
		ctx.drawImage(menuBack, 0, 0);
		ctx.drawImage(Ele_Bursts, 0, 608, 208, 32, this.x-64, this.y-32, 208, 32);
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
		ctx.font = "28pt acknowledge";
		ctx.strokeStyle = "white";
		ctx.fillText("Options", this.x, this.y-this.height*0.5); 
		ctx.font = "28pt acknowledge";
		if(hX >= this.x-20 && hX <=this.x + this.width*4 && hY <= this.y+5*this.height*0.5 && hY>=this.y+this.height*0.5){
			ctx.strokeRect(this.x-20, this.y + this.height, this.width * 6, this.height+10);
		}		
		if(cX >= this.x-20 && cX <=this.x + this.width*4 && cY <= this.y+5*this.height*0.5 && cY>=this.y+this.height*0.5){
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
			ctx.fillText("Sound: On", this.x-this.width*0.5, this.y+4*this.height*0.5);
			for(S in AllSounds){
				AllSounds[S].volume=0.8;
			}
		}
		if(vol == 1){
			ctx.fillText("Sound: Off", this.x-this.width*0.5, this.y+4*this.height*0.5);
			for(S in AllSounds){
				AllSounds[S].volume=0;
			}
		}
		if(hX >= this.x-20 && hX <=this.x + this.width*5 && hY <= this.y+7*this.height*0.5 && hY>=this.y+4*this.height*0.5){
			ctx.strokeRect(this.x-20, this.y + 2.5*this.height, this.width * 6, this.height+10);
		}		
		if(cX >= this.x-20 && cX <=this.x + this.width*5 && cY <= this.y+7*this.height*0.5 && cY>=this.y+4*this.height*0.5){
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
			ctx.fillText("Music: On", this.x-this.width*0.5, this.y+7*this.height*0.5);
			for(M in AllMusic){
				AllMusic[M].volume = 0.5;
			}
			DumblebeatsNormal.volume = 0.4;
			swampSong.volume = 0.3;
			DesertSong.volume = 0.4;
		}
		if(Music == 1){
			ctx.fillText("Music: Off", this.x-this.width*0.5, this.y+7*this.height*0.5);
			for(M in AllMusic){
				AllMusic[M].volume=0;
			}
		}
		if(hX >= this.x-20 && hX <=this.x + this.width*6 && hY <= this.y+10*this.height*0.5 && hY>=this.y+7*this.height*0.5){
			ctx.strokeRect(this.x-20, this.y + 4*this.height, this.width * 8.5, this.height+10);
		}		
		if(cX >= this.x-20 && cX <=this.x + this.width*6 && cY <= this.y+10*this.height*0.5 && cY>=this.y+7*this.height*0.5){
			fastbeepsLow.currentTime=0;
			fastbeepsLow.play();
			if(dispCntrls == 1){
				dispCntrls = 2;
				$.jStorage.set("tutor",dispCntrls);
				cX = 0;
				cY = 0;
			}
			else if(dispCntrls == 2){
				dispCntrls = 1;
				$.jStorage.set("tutor",dispCntrls);
				cX = 0;
				cY = 0;
			}
		}
		if(dispCntrls == 2){
			ctx.fillText("Tutorial: On", this.x-this.width*0.5, this.y+10*this.height*0.5);
		}
		if(dispCntrls == 1){
			ctx.fillText("Tutorial: Off", this.x-this.width*0.5, this.y+10*this.height*0.5);
		}
		if(hX >= this.x-20 && hX <=this.x + this.width*7 && hY <= this.y+13*this.height*0.5 && hY>=this.y+10*this.height*0.5){
			ctx.strokeRect(this.x-20, this.y + 5.5*this.height, this.width * 8, this.height+10);
		}		
		if(cX >= this.x-20 && cX <=this.x + this.width*7 && cY <= this.y+13*this.height*0.5 && cY>=this.y+10*this.height*0.5){
			fastbeepsLow.currentTime=0;
			fastbeepsLow.play();
			if(dim == 1){
				dim = 2;
				AList[1] = true;
				$.jStorage.set("dim",dim);
				cX = 0;
				cY = 0;
			}
			else if(dim == 2){
				dim = 1;
				AList[1] = false;
				$.jStorage.set("dim",dim);
				cX = 0;
				cY = 0;
			}
		}
		if(dim == 2){
			ctx.fillText("3D Mode:", this.x-this.width*0.5, this.y+13*this.height*0.5);
			ctx.drawImage(glasses3d, this.x+this.width*9, this.y+13*this.height*0.5-14);
		}
		if(dim == 1){
			ctx.fillText("3D Mode:", this.x-this.width*0.5, this.y+13*this.height*0.5);
			ctx.globalAlpha = 0.2;
			ctx.drawImage(glasses3d, this.x+this.width*9, this.y+13*this.height*0.5-14);
			ctx.globalAlpha = 1;
		}
		ctx.fillText("Back", this.bx, this.by);
		if(hX >= this.bx-10 && hX <=this.bx + 80 && hY <= this.by && hY>=this.by-this.height*14/6){
			ctx.strokeRect(this.bx-10, this.by-this.height*7/6, this.width * 3 + 30, this.height+10);
		}		
		if((cX >= this.bx-10 && cX <=this.bx + 80 && cY <= this.by && cY>=this.by-this.height*14/6) || ((13 in keysDown || 32 in keysDown) && keytimer <= 0)){
			fastbeepsLow.currentTime=0;
			fastbeepsLow.play();
			keytimer = 8;
			cX = 0;
			cY = 0;
			STATE = 0;
		}
}
};
//level select
function levelSelect(){
	if(keytimer > 0){
		keytimer-=1;
	}
	ctx.drawImage(levelSelectBkg, 0, 0);
	ctx.drawImage(MapBkg, 0, 0);
	ctx.drawImage(HSback, 0, 0);
	if((hX > 335 && hX < 480 && hY > 515 && hY < 672)){
		ctx.drawImage(HSbackArrow, 0, 0);
	}
	if((cX > 335 && cX < 480 && cY > 515 && cY < 672) || ((13 in keysDown || 32 in keysDown) && keytimer <= 0)){
		cX=0;
		cY=0;
		hX = 0;
		hY = 0;
		//wait = 15;
		keytimer = 15;
		fastbeepsLow.currentTime=0;
		fastbeepsLow.play();
		STATE = 0;
		Menu.levelSelect = true;
	} 
	if(wait > 0){
		wait--;
	}	
	if(SeenSwamp){
		ctx.drawImage(SwampMap, 0, 0);
	}
	if(SeenDesert){
		ctx.drawImage(DesertMap, 0, 0);
	}
	if(SeenGraveyard){
		ctx.drawImage(GraveMap, 0, 0);
	}
	if(SeenJungle){
		ctx.drawImage(JungleMap, 0, 0);
	}
	if(SeenFire){
		ctx.drawImage(FireMap, 0, 0);
	}
	ctx.drawImage(MeadowMap, 0, 0);
	//med
	if((hX > 188 && hX < 616 && hY > 452 && hY < 524)){
		ctx.drawImage(grassdumble, 0, 0);
	}
	if(cX > 188 && cX < 616 && cY > 452 && cY < 524){
		cX=0;
		cY=0;
		hX = 0;
		hY = 0;
		fastbeepsLow.currentTime=0;
		fastbeepsLow.play();
		STATE = 1;
	} 
	//fire
	if(SeenFire && (hX > 188 && hX < 384 && hY > 376 && hY < 436)){
		ctx.drawImage(firedumble, 0, 0);
	}
	if(SeenFire && cX > 188 && cX < 384 && cY > 376 && cY < 436){
		cX=0;
		cY=0;
		hX = 0;
		hY = 0;
		fastbeepsLow.currentTime=0;
		fastbeepsLow.play();
		STATE = "Scorched";
		player.power = 2;
		for(E in EMeteors){
			if(EMeteors[E] != EMeteor13 && EMeteors[E] != EMeteor14 && EMeteors[E] != EMeteor15 && EMeteors[E] != EMeteor16){
				EMeteors[E].timer = (Math.floor(Math.random() * 60));
			}
		}
		planted = false;
		rePlant();
		//place steams
		for(S in Steams){
			Steams[S].cd = Math.floor(Math.random() * 15) + 75;
		}
		penalty = 0.5;
	} 
	//jungle
	if(SeenJungle && (hX > 384 && hX < 616 && hY > 388 && hY < 436)){
		ctx.drawImage(jungledumble, 0, 0);
	}
	if(SeenJungle && cX > 384 && cX < 616 && cY > 388 && cY < 436){
		cX=0;
		cY=0;
		hX = 0;
		hY = 0;
		fastbeepsLow.currentTime=0;
		fastbeepsLow.play();
		STATE = "Jungle";
		player.maxhp = 9;
		player.hp = 9;
		jungleAni = true;
		radiofailure.currentTime=0;
		radiofailure.play();
		penalty = 0.5;
	}
	//swamp
	if(SeenSwamp && (hX > 444 && hX < 612 && hY > 276 && hY < 384)){
		ctx.drawImage(swampdumble, 0, 0);
	}
	if(SeenSwamp && cX > 444 && cX < 612 && cY > 276 && cY < 384){
		cX=0;
		cY=0;
		hX = 0;
		hY = 0;
		fastbeepsLow.currentTime=0;
		fastbeepsLow.play();
		STATE = "Jungle";
		jungleAni = true;
		levelSelectSwamp = true;
		Enemy.respawn = 60;
		EnemyB.respawn = 60;
		hpUp.x = 400;
		hpUp.y = 256;
		hpUp.boss = "MasterThief";
		MasterTEffect.x = 400;
		MasterTEffect.y = 256;
		MasterTEffect.played = 0;
		MasterTEffect.onScreen = 1;
		penalty = 0.25;
		
		player.maxhp = 9;
		player.hp = 9;
		player.lucky = true;
	}
	//des
	if(SeenDesert && (hX > 188 && hX < 360 && hY > 272 && hY < 376)){
		ctx.drawImage(desertdumble, 0, 0);
	}
	if(SeenDesert && cX > 188 && cX < 360 && cY > 272 && cY < 376){
		cX=0;
		cY=0;
		hX = 0;
		hY = 0;
		fastbeepsLow.currentTime=0;
		fastbeepsLow.play();
		STATE = "Desert";
		player.power = 2;
		player.regen = true;
		penalty = 0.25;
	}
	if(SeenGraveyard && (hX >= 360 && hX <= 444 && hY > 272 && hY < 376)){
		ctx.drawImage(gravedumble, 0, 0);
	}
	if(SeenGraveyard && cX >= 360 && cX <= 444 && cY > 272 && cY < 376){
		cX=0;
		cY=0;
		hX = 0;
		hY = 0;
		fastbeepsLow.currentTime=0;
		fastbeepsLow.play();
		STATE = "Graveyard";
		player.maxhp = 9;
		player.hp = 9;
		player.power = 2;
		penalty = 0.25;
		rePlant();
	}
}
//-------------------------------------------------------------- Game Over ----------------------------------------------------------//
//array of init
var inits = {1: "_", 2: "_", 3: "_", 4: "_", 5: "_", 6: "_"};
var init = "_____";
var initsInd = 1;
var hsColor = 1;
var hsNum = 0;
var wait = 0;
var lowestScore = highscore10;
var AchScrollPic = 1;
var LocalState = 1;
var GlobalState = 1;
var cursorIndex = 1;
var indicatorIndex = 1;
function gameOver(){
	ctx.globalAlpha = 1;
	var bx = 350;
	var by = 560;
	var width = 20;
	var height = 20;
	var score = Math.floor(parseInt(Aes.Ctr.decrypt(Error, ErrorLogs, 256))*penalty);
	init = inits[1] + inits[2] + inits[3] + inits[4] + inits[5] + inits[6];
	staticm = 1;
	if(wait > 0){
		wait-=1;
	}
	//draw indicator for high score
	ctx.globalAlpha = Alpha*0.5;
	if((hsNum == 1 && LocalState == 1) || (hsNum == 6 && LocalState == 2)){
		ctx.drawImage(HSStripes[Math.ceil(indicatorIndex*0.5)], 0, 136);
		indicatorIndex++;
		if(indicatorIndex > 16){
			indicatorIndex = 1;
		}
	}
	if((hsNum == 2 && LocalState == 1) || (hsNum == 7 && LocalState == 2)){
		ctx.drawImage(HSStripes[Math.ceil(indicatorIndex*0.5)], 0, 216);
		indicatorIndex++;
		if(indicatorIndex > 16){
			indicatorIndex = 1;
		}
	}
	if((hsNum == 3 && LocalState == 1) || (hsNum == 8 && LocalState == 2)){
		ctx.drawImage(HSStripes[Math.ceil(indicatorIndex*0.5)], 0, 300);
		indicatorIndex++;
		if(indicatorIndex > 16){
			indicatorIndex = 1;
		}
	}
	if((hsNum == 4 && LocalState == 1) || (hsNum == 9 && LocalState == 2)){
		ctx.drawImage(HSStripes[Math.ceil(indicatorIndex*0.5)], 0, 380);
		indicatorIndex++;
		if(indicatorIndex > 16){
			indicatorIndex = 1;
		}
	}
	if((hsNum == 5 && LocalState == 1) || (hsNum == 10 && LocalState == 2)){
		ctx.drawImage(HSStripes[Math.ceil(indicatorIndex*0.5)], 0, 460);
		indicatorIndex++;
		if(indicatorIndex > 16){
			indicatorIndex = 1;
		}
	}
	ctx.globalAlpha = Alpha;
	//Draw map
	ctx.drawImage(MapBkg, 0, 0);
	if(STATE == 4 && score > lowestScore){
		ctx.drawImage(EnterName, 0, 0);
	}
	
	if(SeenSwamp){
		ctx.drawImage(SwampMap, 0, 0);
	}
	if(SeenDesert){
		ctx.drawImage(DesertMap, 0, 0);
	}
	if(SeenGraveyard){
		ctx.drawImage(GraveMap, 0, 0);
	}
	if(SeenJungle){
		ctx.drawImage(JungleMap, 0, 0);
	}
	if(SeenFire){
		ctx.drawImage(FireMap, 0, 0);
	}
	ctx.drawImage(MeadowMap, 0, 0);
	//draw player's path
	if(levelorder == 21 || levelorder == 11){
		ctx.drawImage(GrassJungle, 0, 0);
	}
	if(levelorder == 21){
		ctx.drawImage(JungleSwamp, 0, 0);
	}
	if(levelorder == 12 || levelorder == 22 || levelorder == 23){
		ctx.drawImage(GrassFire, 0, 0);
	}
	if(levelorder == 22){
		ctx.drawImage(FireDesert, 0, 0);
	}
	if(levelorder == 23){
		ctx.drawImage(FireGrave, 0, 0);
	}
	//local path hovering
	if(hX > 12 && hX < 178){
		if(hY > 143 && hY < 196){
			ctx.drawImage(scoreHighlightHover, 4, 144);
			if(LocalState == 1){
				var pathNum = path1;
			}
			else{
				var pathNum = path6;
			}
			if(pathNum == 21 || pathNum == 11){
				ctx.drawImage(GrassJungleH, 0, 0);
			}
			if(pathNum == 21){
				ctx.drawImage(JungleSwampH, 0, 0);
			}
			if(pathNum == 12 || pathNum == 22 || pathNum == 23){
				ctx.drawImage(GrassFireH, 0, 0);
			}
			if(pathNum == 22){
				ctx.drawImage(FireDesertH, 0, 0);
			}
			if(pathNum == 23){
				ctx.drawImage(FireGraveH, 0, 0);
			}
		}
		else if(hY > 224 && hY < 276){
			ctx.drawImage(scoreHighlightHover, 4, 224);
			if(LocalState == 1){
				var pathNum = path2;
			}
			else{
				var pathNum = path7;
			}
			if(pathNum == 21 || pathNum == 11){
				ctx.drawImage(GrassJungleH, 0, 0);
			}
			if(pathNum == 21){
				ctx.drawImage(JungleSwampH, 0, 0);
			}
			if(pathNum == 12 || pathNum == 22 || pathNum == 23){
				ctx.drawImage(GrassFireH, 0, 0);
			}
			if(pathNum == 22){
				ctx.drawImage(FireDesertH, 0, 0);
			}
			if(pathNum == 23){
				ctx.drawImage(FireGraveH, 0, 0);
			}
		}
		else if(hY > 307 && hY < 360){
			ctx.drawImage(scoreHighlightHover, 4, 308);
			if(LocalState == 1){
				var pathNum = path3;
			}
			else{
				var pathNum = path8;
			}
			if(pathNum == 21 || pathNum == 11){
				ctx.drawImage(GrassJungleH, 0, 0);
			}
			if(pathNum == 21){
				ctx.drawImage(JungleSwampH, 0, 0);
			}
			if(pathNum == 12 || pathNum == 22 || pathNum == 23){
				ctx.drawImage(GrassFireH, 0, 0);
			}
			if(pathNum == 22){
				ctx.drawImage(FireDesertH, 0, 0);
			}
			if(pathNum == 23){
				ctx.drawImage(FireGraveH, 0, 0);
			}
		}
		else if(hY > 388 && hY < 440){
			ctx.drawImage(scoreHighlightHover, 4, 388);
			if(LocalState == 1){
				var pathNum = path4;
			}
			else{
				var pathNum = path9;
			}
			if(pathNum == 21 || pathNum == 11){
				ctx.drawImage(GrassJungleH, 0, 0);
			}
			if(pathNum == 21){
				ctx.drawImage(JungleSwampH, 0, 0);
			}
			if(pathNum == 12 || pathNum == 22 || pathNum == 23){
				ctx.drawImage(GrassFireH, 0, 0);
			}
			if(pathNum == 22){
				ctx.drawImage(FireDesertH, 0, 0);
			}
			if(pathNum == 23){
				ctx.drawImage(FireGraveH, 0, 0);
			}
		}
		else if(hY > 466 && hY < 520){
			ctx.drawImage(scoreHighlightHover, 4, 468);
			if(LocalState == 1){
				var pathNum = path5;
			}
			else{
				var pathNum = path10;
			}
			if(pathNum == 21 || pathNum == 11){
				ctx.drawImage(GrassJungleH, 0, 0);
			}
			if(pathNum == 21){
				ctx.drawImage(JungleSwampH, 0, 0);
			}
			if(pathNum == 12 || pathNum == 22 || pathNum == 23){
				ctx.drawImage(GrassFireH, 0, 0);
			}
			if(pathNum == 22){
				ctx.drawImage(FireDesertH, 0, 0);
			}
			if(pathNum == 23){
				ctx.drawImage(FireGraveH, 0, 0);
			}
		}
	}
	//global path hovering
	if(hX > 632 && hX < 798){
		if(hY > 143 && hY < 196){
			ctx.drawImage(scoreHighlightHover, 624, 144);
			if(GlobalState == 1){
				var pathNum = gpath1;
			}
			else{
				var pathNum = gpath6;
			}
			if(pathNum == 21 || pathNum == 11){
				ctx.drawImage(GrassJungleH, 0, 0);
			}
			if(pathNum == 21){
				ctx.drawImage(JungleSwampH, 0, 0);
			}
			if(pathNum == 12 || pathNum == 22 || pathNum == 23){
				ctx.drawImage(GrassFireH, 0, 0);
			}
			if(pathNum == 22){
				ctx.drawImage(FireDesertH, 0, 0);
			}
			if(pathNum == 23){
				ctx.drawImage(FireGraveH, 0, 0);
			}
		}
		else if(hY > 224 && hY < 276){
			ctx.drawImage(scoreHighlightHover, 624, 224);
			if(GlobalState == 1){
				var pathNum = gpath2;
			}
			else{
				var pathNum = gpath7;
			}
			if(pathNum == 21 || pathNum == 11){
				ctx.drawImage(GrassJungleH, 0, 0);
			}
			if(pathNum == 21){
				ctx.drawImage(JungleSwampH, 0, 0);
			}
			if(pathNum == 12 || pathNum == 22 || pathNum == 23){
				ctx.drawImage(GrassFireH, 0, 0);
			}
			if(pathNum == 22){
				ctx.drawImage(FireDesertH, 0, 0);
			}
			if(pathNum == 23){
				ctx.drawImage(FireGraveH, 0, 0);
			}
		}
		else if(hY > 307 && hY < 360){
			ctx.drawImage(scoreHighlightHover, 624, 308);
			if(GlobalState == 1){
				var pathNum = gpath3;
			}
			else{
				var pathNum = gpath8;
			}
			if(pathNum == 21 || pathNum == 11){
				ctx.drawImage(GrassJungleH, 0, 0);
			}
			if(pathNum == 21){
				ctx.drawImage(JungleSwampH, 0, 0);
			}
			if(pathNum == 12 || pathNum == 22 || pathNum == 23){
				ctx.drawImage(GrassFireH, 0, 0);
			}
			if(pathNum == 22){
				ctx.drawImage(FireDesertH, 0, 0);
			}
			if(pathNum == 23){
				ctx.drawImage(FireGraveH, 0, 0);
			}
		}
		else if(hY > 388 && hY < 440){
			ctx.drawImage(scoreHighlightHover, 624, 388);
			if(GlobalState == 1){
				var pathNum = gpath4;
			}
			else{
				var pathNum = gpath9;
			}
			if(pathNum == 21 || pathNum == 11){
				ctx.drawImage(GrassJungleH, 0, 0);
			}
			if(pathNum == 21){
				ctx.drawImage(JungleSwampH, 0, 0);
			}
			if(pathNum == 12 || pathNum == 22 || pathNum == 23){
				ctx.drawImage(GrassFireH, 0, 0);
			}
			if(pathNum == 22){
				ctx.drawImage(FireDesertH, 0, 0);
			}
			if(pathNum == 23){
				ctx.drawImage(FireGraveH, 0, 0);
			}
		}
		else if(hY > 466 && hY < 520){
			ctx.drawImage(scoreHighlightHover, 624, 468);
			if(GlobalState == 1){
				var pathNum = gpath5;
			}
			else{
				var pathNum = gpath10;
			}
			if(pathNum == 21 || pathNum == 11){
				ctx.drawImage(GrassJungleH, 0, 0);
			}
			if(pathNum == 21){
				ctx.drawImage(JungleSwampH, 0, 0);
			}
			if(pathNum == 12 || pathNum == 22 || pathNum == 23){
				ctx.drawImage(GrassFireH, 0, 0);
			}
			if(pathNum == 22){
				ctx.drawImage(FireDesertH, 0, 0);
			}
			if(pathNum == 23){
				ctx.drawImage(FireGraveH, 0, 0);
			}
		}
	}
	//draw ranks
	if(LocalState == 1){
		ctx.drawImage(rank15, 12, 150);
		ctx.drawImage(HScrollD, 12, 532);
		if((cX > 12 && cX < 164 && cY > 532 && cY < 564) || 40 in keysDown){
			cX = 0;
			cY = 0;
			LocalState = 2;
		}
	}
	else{
		ctx.drawImage(rank610, 12, 150);
		ctx.drawImage(HScrollU, 12, 100);
		if((cX > 12 && cX < 164 && cY > 100 && cY < 132) || 38 in keysDown){
			cX = 0;
			cY = 0;
			LocalState = 1;
		}
	}
	if(GlobalState == 1){
		ctx.drawImage(rank15, 632, 150);
		ctx.drawImage(HScrollD, 632, 532);
		if((cX > 632 && cX < 784 && cY > 532 && cY < 564) || 40 in keysDown){
			cX = 0;
			cY = 0;
			GlobalState = 2;
		}
	}
	else{
		ctx.drawImage(rank610, 632, 150);
		ctx.drawImage(HScrollU, 632, 100);
		if((cX > 632 && cX < 784 && cY > 100 && cY < 132) || 38 in keysDown){
			cX = 0;
			cY = 0;
			GlobalState = 1;
		}
	}
	if(STATE == 5){
		ctx.drawImage(HighScoreTitle, 0, 0);
	}
	//typing
	else{
		printScores(score + "", 268, 7, "Title");
		if(score > lowestScore){
			if(initsInd <= 6 && wait <= 0){
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
				initsInd = 7;
			}
			if(8 in keysDown && wait <= 0){
				initsInd--;
				if(initsInd < 1){
					initsInd = 1;
				}
				inits[initsInd] = "_";
				wait = 4;
			}
			if(37 in keysDown && wait <= 0){
				if(AList[Achiev-1]){
					Achiev--;
				}
				else if(Achiev-1 < 0){
					Achiev = maxAchiev;
					while(!AList[Achiev]){
						Achiev--;
					}
				}
				else{
					Achiev--;
					while(Achiev>0 && !AList[Achiev]){
						Achiev--;
					}
				}
				wait = 5;
			}
			if(39 in keysDown && wait <= 0){
				if(AList[Achiev+1]){
					Achiev++;
				}
				else if(Achiev+1 > maxAchiev){
					Achiev = 0;
				}
				else{
					Achiev++;
					while(Achiev<=maxAchiev && !AList[Achiev]){
						Achiev++;
					}
					if((Achiev == maxAchiev && !AList[maxAchiev]) || (Achiev > maxAchiev)){
						Achiev = 0;
					}
				}
				wait = 5;
			}
			//increment cursor blinking
			cursorIndex++;
			if(cursorIndex > 10){
				cursorIndex = 1;
			}
		}
		else{
			var init = " ";
		}
	}
	//calc best achievement
	if(nu == 1){
		Achiev = maxAchiev;
		while(Achiev > 0 && !AList[Achiev]){
			Achiev--;
		}
	}	
	//set scores and names
	if(highscore1 < score && nu == 1){
		highscore10 = highscore9;
		hs10init = hs9init;
		achievement10 = achievement9;
		path10 = path9;
		$.jStorage.set("v98path10",path9);
		$.jStorage.set("v98achievement10",achievement9);
		$.jStorage.set("v98highscore10",highscore9);
		$.jStorage.set("v98hs10init",hs9init);
		highscore9 = highscore8;
		hs9init = hs8init;
		achievement9 = achievement8;
		path9 = path8;
		$.jStorage.set("v98path9",path8);
		$.jStorage.set("v98achievement9",achievement8);
		$.jStorage.set("v98highscore9",highscore8);
		$.jStorage.set("v98hs9init",hs8init);
		highscore8 = highscore7;
		hs8init = hs7init;
		achievement8 = achievement7;
		path8 = path7;
		$.jStorage.set("v98path8",path7);
		$.jStorage.set("v98achievement8",achievement7);
		$.jStorage.set("v98highscore8",highscore7);
		$.jStorage.set("v98hs8init",hs7init);
		highscore7 = highscore6;
		hs7init = hs6init;
		achievement7 = achievement6;
		path7 = path6;
		$.jStorage.set("v98path7",path6);
		$.jStorage.set("v98achievement7",achievement6);
		$.jStorage.set("v98highscore7",highscore6);
		$.jStorage.set("v98hs7init",hs6init);
		highscore6 = highscore5;
		hs6init = hs5init;
		achievement6 = achievement5;
		path6 = path5;
		$.jStorage.set("v98path6",path5);
		$.jStorage.set("v98achievement6",achievement5);
		$.jStorage.set("v98highscore6",highscore5);
		$.jStorage.set("v98hs6init",hs5init);
		highscore5 = highscore4;
		hs5init = hs4init;
		achievement5 = achievement4;
		path5 = path4;
		$.jStorage.set("v98path5",path4);
		$.jStorage.set("v98achievement5",achievement4);
		$.jStorage.set("v98highscore5",highscore4);
		$.jStorage.set("v98hs5init",hs4init);
		highscore4 = highscore3;
		hs4init = hs3init;
		achievement4 = achievement3;
		path4 = path3;
		$.jStorage.set("v98path4",path3);
		$.jStorage.set("v98achievement4",achievement3);
		$.jStorage.set("v98highscore4",highscore3);
		$.jStorage.set("v98hs4init",hs3init);
		highscore3 = highscore2;
		hs3init = hs2init;
		achievement3 = achievement2;
		path3 = path2;
		$.jStorage.set("v98path3",path2);
		$.jStorage.set("v98achievement3",achievement2);
		$.jStorage.set("v98highscore3",highscore2);
		$.jStorage.set("v98hs3init",hs2init);
		highscore2 = highscore1;
		hs2init = hs1init;
		achievement2 = achievement1;
		path2 = path1;
		$.jStorage.set("v98path2",path1);
		$.jStorage.set("v98achievement2",achievement1);
		$.jStorage.set("v98highscore2",highscore1);
		$.jStorage.set("v98hs2init",hs1init);
		path1 = levelorder;
		$.jStorage.set("v98path1",levelorder);
		highscore1 = score;
		$.jStorage.set("v98highscore1",score);
		hs = 1;
		LocalState = 1;
		nu = 0;
		hsNum = 1;
	}
	else if(highscore2 < score && nu == 1){
		highscore10 = highscore9;
		hs10init = hs9init;
		achievement10 = achievement9;
		path10 = path9;
		$.jStorage.set("v98path10",path9);
		$.jStorage.set("v98achievement10",achievement9);
		$.jStorage.set("v98highscore10",highscore9);
		$.jStorage.set("v98hs10init",hs9init);
		highscore9 = highscore8;
		hs9init = hs8init;
		achievement9 = achievement8;
		path9 = path8;
		$.jStorage.set("v98path9",path8);
		$.jStorage.set("v98achievement9",achievement8);
		$.jStorage.set("v98highscore9",highscore8);
		$.jStorage.set("v98hs9init",hs8init);
		highscore8 = highscore7;
		hs8init = hs7init;
		achievement8 = achievement7;
		path8 = path7;
		$.jStorage.set("v98path8",path7);
		$.jStorage.set("v98achievement8",achievement7);
		$.jStorage.set("v98highscore8",highscore7);
		$.jStorage.set("v98hs8init",hs7init);
		highscore7 = highscore6;
		hs7init = hs6init;
		achievement7 = achievement6;
		path7 = path6;
		$.jStorage.set("v98path7",path6);
		$.jStorage.set("v98achievement7",achievement6);
		$.jStorage.set("v98highscore7",highscore6);
		$.jStorage.set("v98hs7init",hs6init);
		highscore6 = highscore5;
		hs6init = hs5init;
		achievement6 = achievement5;
		path6 = path5;
		$.jStorage.set("v98path6",path5);
		$.jStorage.set("v98achievement6",achievement5);
		$.jStorage.set("v98highscore6",highscore5);
		$.jStorage.set("v98hs6init",hs5init);
		highscore5 = highscore4;
		hs5init = hs4init;
		achievement5 = achievement4;
		path5 = path4;
		$.jStorage.set("v98path5",path4);
		$.jStorage.set("v98achievement5",achievement4);
		$.jStorage.set("v98highscore5",highscore4);
		$.jStorage.set("v98hs5init",hs4init);
		highscore4 = highscore3;
		hs4init = hs3init;
		achievement4 = achievement3;
		path4 = path3;
		$.jStorage.set("v98path4",path3);
		$.jStorage.set("v98achievement4",achievement3);
		$.jStorage.set("v98highscore4",highscore3);
		$.jStorage.set("v98hs4init",hs3init);
		highscore3 = highscore2;
		hs3init = hs2init;
		achievement3 = achievement2;
		path3 = path2;
		$.jStorage.set("v98path3",path2);
		$.jStorage.set("v98achievement3",achievement2);
		$.jStorage.set("v98highscore3",highscore2);
		$.jStorage.set("v98hs3init",hs2init);
		highscore2 = score;
		path2 = levelorder;
		$.jStorage.set("v98path2",levelorder);
		$.jStorage.set("v98highscore2",score);
		hs = 1;
		LocalState = 1;
		nu = 0;
		hsNum = 2;
	}
	else if(highscore3 < score && nu == 1){
		highscore10 = highscore9;
		hs10init = hs9init;
		achievement10 = achievement9;
		path10 = path9;
		$.jStorage.set("v98path10",path9);
		$.jStorage.set("v98achievement10",achievement9);
		$.jStorage.set("v98highscore10",highscore9);
		$.jStorage.set("v98hs10init",hs9init);
		highscore9 = highscore8;
		hs9init = hs8init;
		achievement9 = achievement8;
		path9 = path8;
		$.jStorage.set("v98path9",path8);
		$.jStorage.set("v98achievement9",achievement8);
		$.jStorage.set("v98highscore9",highscore8);
		$.jStorage.set("v98hs9init",hs8init);
		highscore8 = highscore7;
		hs8init = hs7init;
		achievement8 = achievement7;
		path8 = path7;
		$.jStorage.set("v98path8",path7);
		$.jStorage.set("v98achievement8",achievement7);
		$.jStorage.set("v98highscore8",highscore7);
		$.jStorage.set("v98hs8init",hs7init);
		highscore7 = highscore6;
		hs7init = hs6init;
		achievement7 = achievement6;
		path7 = path6;
		$.jStorage.set("v98path7",path6);
		$.jStorage.set("v98achievement7",achievement6);
		$.jStorage.set("v98highscore7",highscore6);
		$.jStorage.set("v98hs7init",hs6init);
		highscore6 = highscore5;
		hs6init = hs5init;
		achievement6 = achievement5;
		path6 = path5;
		$.jStorage.set("v98path6",path5);
		$.jStorage.set("v98achievement6",achievement5);
		$.jStorage.set("v98highscore6",highscore5);
		$.jStorage.set("v98hs6init",hs5init);
		highscore5 = highscore4;
		hs5init = hs4init;
		achievement5 = achievement4;
		path5 = path4;
		$.jStorage.set("v98path5",path4);
		$.jStorage.set("v98achievement5",achievement4);
		$.jStorage.set("v98highscore5",highscore4);
		$.jStorage.set("v98hs5init",hs4init);
		highscore4 = highscore3;
		hs4init = hs3init;
		achievement4 = achievement3;
		path4 = path3;
		$.jStorage.set("v98path4",path3);
		$.jStorage.set("v98achievement4",achievement3);
		$.jStorage.set("v98highscore4",highscore3);
		$.jStorage.set("v98hs4init",hs3init);
		highscore3 = score;
		path3 = levelorder;
		$.jStorage.set("v98path3",levelorder);
		$.jStorage.set("v98highscore3",score);
		hs = 1;
		LocalState = 1;
		nu = 0;
		hsNum = 3;
	}
	else if(highscore4 < score && nu == 1){
		highscore10 = highscore9;
		hs10init = hs9init;
		achievement10 = achievement9;
		path10 = path9;
		$.jStorage.set("v98path10",path9);
		$.jStorage.set("v98achievement10",achievement9);
		$.jStorage.set("v98highscore10",highscore9);
		$.jStorage.set("v98hs10init",hs9init);
		highscore9 = highscore8;
		hs9init = hs8init;
		achievement9 = achievement8;
		path9 = path8;
		$.jStorage.set("v98path9",path8);
		$.jStorage.set("v98achievement9",achievement8);
		$.jStorage.set("v98highscore9",highscore8);
		$.jStorage.set("v98hs9init",hs8init);
		highscore8 = highscore7;
		hs8init = hs7init;
		achievement8 = achievement7;
		path8 = path7;
		$.jStorage.set("v98path8",path7);
		$.jStorage.set("v98achievement8",achievement7);
		$.jStorage.set("v98highscore8",highscore7);
		$.jStorage.set("v98hs8init",hs7init);
		highscore7 = highscore6;
		hs7init = hs6init;
		achievement7 = achievement6;
		path7 = path6;
		$.jStorage.set("v98path7",path6);
		$.jStorage.set("v98achievement7",achievement6);
		$.jStorage.set("v98highscore7",highscore6);
		$.jStorage.set("v98hs7init",hs6init);
		highscore6 = highscore5;
		hs6init = hs5init;
		achievement6 = achievement5;
		path6 = path5;
		$.jStorage.set("v98path6",path5);
		$.jStorage.set("v98achievement6",achievement5);
		$.jStorage.set("v98highscore6",highscore5);
		$.jStorage.set("v98hs6init",hs5init);
		highscore5 = highscore4;
		hs5init = hs4init;
		achievement5 = achievement4;
		path5 = path4;
		$.jStorage.set("v98path5",path4);
		$.jStorage.set("v98achievement5",achievement4);
		$.jStorage.set("v98highscore5",highscore4);
		$.jStorage.set("v98hs5init",hs4init);
		highscore4 = score;
		path4 = levelorder;
		$.jStorage.set("v98path4",levelorder);
		$.jStorage.set("v98highscore4",score);
		hs = 1;
		LocalState = 1;
		nu = 0;
		hsNum = 4;
	}
	else if(highscore5 < score && nu == 1){
		highscore10 = highscore9;
		hs10init = hs9init;
		achievement10 = achievement9;
		path10 = path9;
		$.jStorage.set("v98path10",path9);
		$.jStorage.set("v98achievement10",achievement9);
		$.jStorage.set("v98highscore10",highscore9);
		$.jStorage.set("v98hs10init",hs9init);
		highscore9 = highscore8;
		hs9init = hs8init;
		achievement9 = achievement8;
		path9 = path8;
		$.jStorage.set("v98path9",path8);
		$.jStorage.set("v98achievement9",achievement8);
		$.jStorage.set("v98highscore9",highscore8);
		$.jStorage.set("v98hs9init",hs8init);
		highscore8 = highscore7;
		hs8init = hs7init;
		achievement8 = achievement7;
		path8 = path7;
		$.jStorage.set("v98path8",path7);
		$.jStorage.set("v98achievement8",achievement7);
		$.jStorage.set("v98highscore8",highscore7);
		$.jStorage.set("v98hs8init",hs7init);
		highscore7 = highscore6;
		hs7init = hs6init;
		achievement7 = achievement6;
		path7 = path6;
		$.jStorage.set("v98path7",path6);
		$.jStorage.set("v98achievement7",achievement6);
		$.jStorage.set("v98highscore7",highscore6);
		$.jStorage.set("v98hs7init",hs6init);
		highscore6 = highscore5;
		hs6init = hs5init;
		achievement6 = achievement5;
		path6 = path5;
		$.jStorage.set("v98path6",path5);
		$.jStorage.set("v98achievement6",achievement5);
		$.jStorage.set("v98highscore6",highscore5);
		$.jStorage.set("v98hs6init",hs5init);
		highscore5 = score;
		path5 = levelorder;
		$.jStorage.set("v98path5",levelorder);
		$.jStorage.set("v98highscore5",score);
		hs = 1;
		LocalState = 1;
		nu = 0;
		hsNum = 5;
	}
	else if(highscore6 < score && nu == 1){
		highscore10 = highscore9;
		hs10init = hs9init;
		achievement10 = achievement9;
		path10 = path9;
		$.jStorage.set("v98path10",path9);
		$.jStorage.set("v98achievement10",achievement9);
		$.jStorage.set("v98highscore10",highscore9);
		$.jStorage.set("v98hs10init",hs9init);
		highscore9 = highscore8;
		hs9init = hs8init;
		achievement9 = achievement8;
		path9 = path8;
		$.jStorage.set("v98path9",path8);
		$.jStorage.set("v98achievement9",achievement8);
		$.jStorage.set("v98highscore9",highscore8);
		$.jStorage.set("v98hs9init",hs8init);
		highscore8 = highscore7;
		hs8init = hs7init;
		achievement8 = achievement7;
		path8 = path7;
		$.jStorage.set("v98path8",path7);
		$.jStorage.set("v98achievement8",achievement7);
		$.jStorage.set("v98highscore8",highscore7);
		$.jStorage.set("v98hs8init",hs7init);
		highscore7 = highscore6;
		hs7init = hs6init;
		achievement7 = achievement6;
		path7 = path6;
		$.jStorage.set("v98path7",path6);
		$.jStorage.set("v98achievement7",achievement6);
		$.jStorage.set("v98highscore7",highscore6);
		$.jStorage.set("v98hs7init",hs6init);
		highscore6 = score;
		path6 = levelorder;
		$.jStorage.set("v98path6",levelorder);
		$.jStorage.set("v98highscore6",score);
		hs = 1;
		LocalState = 2;
		nu = 0;
		hsNum = 6;
	}
	else if(highscore7 < score && nu == 1){
		highscore10 = highscore9;
		hs10init = hs9init;
		achievement10 = achievement9;
		path10 = path9;
		$.jStorage.set("v98path10",path9);
		$.jStorage.set("v98achievement10",achievement9);
		$.jStorage.set("v98highscore10",highscore9);
		$.jStorage.set("v98hs10init",hs9init);
		highscore9 = highscore8;
		hs9init = hs8init;
		achievement9 = achievement8;
		path9 = path8;
		$.jStorage.set("v98path9",path8);
		$.jStorage.set("v98achievement9",achievement8);
		$.jStorage.set("v98highscore9",highscore8);
		$.jStorage.set("v98hs9init",hs8init);
		highscore8 = highscore7;
		hs8init = hs7init;
		achievement8 = achievement7;
		path8 = path7;
		$.jStorage.set("v98path8",path7);
		$.jStorage.set("v98achievement8",achievement7);
		$.jStorage.set("v98highscore8",highscore7);
		$.jStorage.set("v98hs8init",hs7init);
		highscore7 = score;
		path7 = levelorder;
		$.jStorage.set("v98path7",levelorder);
		$.jStorage.set("v98highscore7",score);
		hs = 1;
		LocalState = 2;
		nu = 0;
		hsNum = 7;
	}
	else if(highscore8 < score && nu == 1){
		highscore10 = highscore9;
		hs10init = hs9init;
		achievement10 = achievement9;
		path10 = path9;
		$.jStorage.set("v98path10",path9);
		$.jStorage.set("v98achievement10",achievement9);
		$.jStorage.set("v98highscore10",highscore9);
		$.jStorage.set("v98hs10init",hs9init);
		highscore9 = highscore8;
		hs9init = hs8init;
		achievement9 = achievement8;
		path9 = path8;
		$.jStorage.set("v98path9",path8);
		$.jStorage.set("v98achievement9",achievement8);
		$.jStorage.set("v98highscore9",highscore8);
		$.jStorage.set("v98hs9init",hs8init);
		highscore8 = score;
		path8 = levelorder;
		$.jStorage.set("v98path8",levelorder);
		$.jStorage.set("v98highscore8",score);
		hs = 1;
		LocalState = 2;
		nu = 0;
		hsNum = 8;
	}
	else if(highscore9 < score && nu == 1){
		highscore10 = highscore9;
		hs10init = hs9init;
		achievement10 = achievement9;
		path10 = path9;
		$.jStorage.set("v98path10",path9);
		$.jStorage.set("v98achievement10",achievement9);
		$.jStorage.set("v98highscore10",highscore9);
		$.jStorage.set("v98hs10init",hs9init);
		highscore9 = score;
		path9 = levelorder;
		$.jStorage.set("v98path9",levelorder);
		$.jStorage.set("v98highscore9",score);
		hs = 1;
		LocalState = 2;
		nu = 0;
		hsNum = 9;
	}
	else if(highscore10 < score && nu == 1){
		highscore10 = score;
		path10 = levelorder;
		$.jStorage.set("v98path10",levelorder);
		$.jStorage.set("v98highscore10",score);
		hs = 1;
		LocalState = 2;
		nu = 0;
		hsNum = 10;
	}
	//calc achievement amount to determine if arrows
	var ii = 0;
	for(A in AList){
		if(AList[A]){
			ii++;
		}
	}
	//set achievements
	if(hsNum == 1){
		$.jStorage.set("v98hs1init",init);
		hs1init = init;
		$.jStorage.set("v98achievement1",Achiev);
		achievement1 = Achiev;
		if(LocalState == 1){
			if(ii > 1){
				if(AchScrollPic < 6){
					ctx.drawImage(AScroller1, 188, 148);
					AchScrollPic++;
				}
				else{
					ctx.drawImage(AScroller2, 188, 148);
					AchScrollPic++;
					if(AchScrollPic == 10){
						AchScrollPic = 1;
					}
				}
			}
			//draw cursor
			if(initsInd <= 6 && cursorIndex < 6){
				ctx.drawImage(letterSheet,72, 40, 12, 20, 44+16*(initsInd-1), 148, 12, 20);
			}
		}
	}
	if(hsNum == 2){
		$.jStorage.set("v98hs2init",init);
		hs2init = init;
		$.jStorage.set("v98achievement2",Achiev);
		achievement2 = Achiev;
		if(LocalState == 1){
			if(ii > 1){
				if(AchScrollPic < 6){
					ctx.drawImage(AScroller1, 188, 228);
					AchScrollPic++;
				}
				else{
					ctx.drawImage(AScroller2, 188, 228);
					AchScrollPic++;
					if(AchScrollPic == 10){
						AchScrollPic = 1;
					}
				}
			}
			//draw cursor
			if(initsInd <= 6 && cursorIndex < 6){
				ctx.drawImage(letterSheet,72, 40, 12, 20, 44+16*(initsInd-1), 228, 12, 20);
			}
		}
	}
	if(hsNum == 3){
		$.jStorage.set("v98hs3init",init);
		hs3init = init;
		$.jStorage.set("v98achievement3",Achiev);
		achievement3 = Achiev;
		if(LocalState == 1){
			if(ii > 1){
				if(AchScrollPic < 6){
					ctx.drawImage(AScroller1, 188, 312);
					AchScrollPic++;
				}
				else{
					ctx.drawImage(AScroller2, 188, 312);
					AchScrollPic++;
					if(AchScrollPic == 10){
						AchScrollPic = 1;
					}
				}
			}
			//draw cursor
			if(initsInd <= 6 && cursorIndex < 6){
				ctx.drawImage(letterSheet,72, 40, 12, 20, 44+16*(initsInd-1), 312, 12, 20);
			}
		}
	}
	if(hsNum == 4){
		$.jStorage.set("v98hs4init",init);
		hs4init = init;
		$.jStorage.set("v98achievement4",Achiev);
		achievement4 = Achiev;
		if(LocalState == 1){
			if(ii > 1){
				if(AchScrollPic < 6){
					ctx.drawImage(AScroller1, 188, 392);
					AchScrollPic++;
				}
				else{
					ctx.drawImage(AScroller2, 188, 392);
					AchScrollPic++;
					if(AchScrollPic == 10){
						AchScrollPic = 1;
					}
				}
			}
			//draw cursor
			if(initsInd <= 6 && cursorIndex < 6){
				ctx.drawImage(letterSheet,72, 40, 12, 20, 44+16*(initsInd-1), 392, 12, 20);
			}
		}
	}
	if(hsNum == 5){
		$.jStorage.set("v98hs5init",init);
		hs5init = init;
		$.jStorage.set("v98achievement5",Achiev);
		achievement5 = Achiev;
		if(LocalState == 1){
			if(ii > 1){
				if(AchScrollPic < 6){
					ctx.drawImage(AScroller1, 188, 472);
					AchScrollPic++;
				}
				else{
					ctx.drawImage(AScroller2, 188, 472);
					AchScrollPic++;
					if(AchScrollPic == 10){
						AchScrollPic = 1;
					}
				}
			}
			//draw cursor
			if(initsInd <= 6 && cursorIndex < 6){
				ctx.drawImage(letterSheet,72, 40, 12, 20, 44+16*(initsInd-1), 472, 12, 20);
			}
		}
	}
	if(hsNum == 6){
		$.jStorage.set("v98hs6init",init);
		hs6init = init;
		$.jStorage.set("v98achievement6",Achiev);
		achievement6 = Achiev;
		if(LocalState == 2){
			if(ii > 1){
				if(AchScrollPic < 6){
					ctx.drawImage(AScroller1, 188, 148);
					AchScrollPic++;
				}
				else{
					ctx.drawImage(AScroller2, 188, 148);
					AchScrollPic++;
					if(AchScrollPic == 10){
						AchScrollPic = 1;
					}
				}
			}
			//draw cursor
			if(initsInd <= 6 && cursorIndex < 6){
				ctx.drawImage(letterSheet,72, 40, 12, 20, 44+16*(initsInd-1), 148, 12, 20);
			}
		}
	}
	if(hsNum == 7){
		$.jStorage.set("v98hs7init",init);
		hs7init = init;
		$.jStorage.set("v98achievement7",Achiev);
		achievement7 = Achiev;
		if(LocalState == 2){
			if(ii > 1){
				if(AchScrollPic < 6){
					ctx.drawImage(AScroller1, 188, 228);
					AchScrollPic++;
				}
				else{
					ctx.drawImage(AScroller2, 188, 228);
					AchScrollPic++;
					if(AchScrollPic == 10){
						AchScrollPic = 1;
					}
				}
			}
			//draw cursor
			if(initsInd <= 6 && cursorIndex < 6){
				ctx.drawImage(letterSheet,72, 40, 12, 20, 44+16*(initsInd-1), 228, 12, 20);
			}
		}
	}
	if(hsNum == 8){
		$.jStorage.set("v98hs8init",init);
		hs8init = init;
		$.jStorage.set("v98achievement8",Achiev);
		achievement8 = Achiev;
		if(LocalState == 2){
			if(ii > 1){
				if(AchScrollPic < 6){
					ctx.drawImage(AScroller1, 188, 312);
					AchScrollPic++;
				}
				else{
					ctx.drawImage(AScroller2, 188, 312);
					AchScrollPic++;
					if(AchScrollPic == 10){
						AchScrollPic = 1;
					}
				}
			}
			//draw cursor
			if(initsInd <= 6 && cursorIndex < 6){
				ctx.drawImage(letterSheet,72, 40, 12, 20, 44+16*(initsInd-1), 312, 12, 20);
			}
		}
	}
	if(hsNum == 9){
		$.jStorage.set("v98hs9init",init);
		hs9init = init;
		$.jStorage.set("v98achievement9",Achiev);
		achievement9 = Achiev;
		if(LocalState == 2){
			if(ii > 1){
				if(AchScrollPic < 6){
					ctx.drawImage(AScroller1, 188, 392);
					AchScrollPic++;
				}
				else{
					ctx.drawImage(AScroller2, 188, 392);
					AchScrollPic++;
					if(AchScrollPic == 10){
						AchScrollPic = 1;
					}
				}
			}
			//draw cursor
			if(initsInd <= 6 && cursorIndex < 6){
				ctx.drawImage(letterSheet,72, 40, 12, 20, 44+16*(initsInd-1), 392, 12, 20);
			}
		}
	}
	if(hsNum == 10){
		$.jStorage.set("v98hs10init",init);
		hs10init = init;
		$.jStorage.set("v98achievement10",Achiev);
		achievement10 = Achiev;
		if(LocalState == 2){
			if(ii > 1){
				if(AchScrollPic < 6){
					ctx.drawImage(AScroller1, 188, 472);
					AchScrollPic++;
				}
				else{
					ctx.drawImage(AScroller2, 188, 472);
					AchScrollPic++;
					if(AchScrollPic == 10){
						AchScrollPic = 1;
					}
				}
			}
			//draw cursor
			if(initsInd <= 6 && cursorIndex < 6){
				ctx.drawImage(letterSheet,72, 40, 12, 20, 44+16*(initsInd-1), 472, 12, 20);
			}
		}
	}
	//draw achievement pic and score and name
	if(LocalState == 1){
		//draw scores
		printScores(highscore1 + "", 40, 176, "Score");
		printScores(highscore2 + "", 40, 256, "Score");
		printScores(highscore3 + "", 40, 340, "Score");
		printScores(highscore4 + "", 40, 420, "Score");
		printScores(highscore5 + "", 40, 500, "Score");
		printScores(hs1init, 44, 148, "Init");
		printScores(hs2init, 44, 228, "Init");
		printScores(hs3init, 44, 312, "Init");
		printScores(hs4init, 44, 392, "Init");
		printScores(hs5init, 44, 472, "Init");
		if(achievement1!=0){
			if(typeof(APics[achievement1]) == "object"){
				ctx.drawImage(APics[achievement1], 144, 140);
			}else{
				ctx.drawImage(heartUp_sheet, APics[achievement1], 0, 32, 32, 144, 140, 32, 32);
			}
		}
		if(achievement2!=0){
			if(typeof(APics[achievement2]) == "object"){
				ctx.drawImage(APics[achievement2], 144, 220);
			}else{
				ctx.drawImage(heartUp_sheet, APics[achievement2], 0, 32, 32, 144, 220, 32, 32);
			}
		}
		if(achievement3!=0){
			if(typeof(APics[achievement3]) == "object"){
				ctx.drawImage(APics[achievement3], 144, 300);
			}else{
				ctx.drawImage(heartUp_sheet, APics[achievement3], 0, 32, 32, 144, 300, 32, 32);
			}
		}
		if(achievement4!=0){
			if(typeof(APics[achievement4]) == "object"){
				ctx.drawImage(APics[achievement4], 144, 384);
			}else{
				ctx.drawImage(heartUp_sheet, APics[achievement4], 0, 32, 32, 144, 384, 32, 32);
			}
		}
		if(achievement5!=0){
			if(typeof(APics[achievement5]) == "object"){
				ctx.drawImage(APics[achievement5], 144, 464);
			}else{
				ctx.drawImage(heartUp_sheet, APics[achievement5], 0, 32, 32, 144, 464, 32, 32);
			}
		}
	}
	else{
		printScores(highscore6 + "", 40, 176, "Score");
		printScores(highscore7 + "", 40, 256, "Score");
		printScores(highscore8 + "", 40, 340, "Score");
		printScores(highscore9 + "", 40, 420, "Score");
		printScores(highscore10 + "", 40, 500, "Score");
		printScores(hs6init, 44, 148, "Init");
		printScores(hs7init, 44, 228, "Init");
		printScores(hs8init, 44, 312, "Init");
		printScores(hs9init, 44, 392, "Init");
		printScores(hs10init, 44, 472, "Init");
		if(achievement6!=0){
			if(typeof(APics[achievement6]) == "object"){
				ctx.drawImage(APics[achievement6], 144, 140);
			}else{
				ctx.drawImage(heartUp_sheet, APics[achievement6], 0, 32, 32, 144, 140, 32, 32);
			}
		}
		if(achievement7!=0){
			if(typeof(APics[achievement7]) == "object"){
				ctx.drawImage(APics[achievement7], 144, 220);
			}else{
				ctx.drawImage(heartUp_sheet, APics[achievement7], 0, 32, 32, 144, 220, 32, 32);
			}
		}
		if(achievement8!=0){
			if(typeof(APics[achievement8]) == "object"){
				ctx.drawImage(APics[achievement8], 144, 300);
			}else{
				ctx.drawImage(heartUp_sheet, APics[achievement8], 0, 32, 32, 144, 300, 32, 32);
			}
		}
		if(achievement9!=0){
			if(typeof(APics[achievement9]) == "object"){
				ctx.drawImage(APics[achievement9], 144, 384);
			}else{
				ctx.drawImage(heartUp_sheet, APics[achievement9], 0, 32, 32, 144, 384, 32, 32);
			}
		}
		if(achievement10!=0){
			if(typeof(APics[achievement10]) == "object"){
				ctx.drawImage(APics[achievement10], 144, 464);
			}else{
				ctx.drawImage(heartUp_sheet, APics[achievement10], 0, 32, 32, 144, 464, 32, 32);
			}
		}
	}
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
	if(GlobalState == 1){
		printScores(gscore1 + "", 660, 176, "Score");
		printScores(gscore2 + "", 660, 256, "Score");
		printScores(gscore3 + "", 660, 340, "Score");
		printScores(gscore4 + "", 660, 420, "Score");
		printScores(gscore5 + "", 660, 500, "Score");
		printScores(gname1, 664, 148, "Init");
		printScores(gname2, 664, 228, "Init");
		printScores(gname3, 664, 312, "Init");
		printScores(gname4, 664, 392, "Init");
		printScores(gname5, 664, 472, "Init");
		if(gachievement1 !=0){
			if(typeof(APics[gachievement1]) == "object"){
				ctx.drawImage(APics[gachievement1], 764, 140);
			}else{
				ctx.drawImage(heartUp_sheet, APics[gachievement1], 0, 32, 32, 764, 140, 32, 32);
			}
		}
		if(gachievement2 !=0){
			if(typeof(APics[gachievement2]) == "object"){
				ctx.drawImage(APics[gachievement2], 764, 220);
			}else{
				ctx.drawImage(heartUp_sheet, APics[gachievement2], 0, 32, 32, 764, 220, 32, 32);
			}
		}
		if(gachievement3 !=0){
			if(typeof(APics[gachievement3]) == "object"){
				ctx.drawImage(APics[gachievement3], 764, 300);
			}else{
				ctx.drawImage(heartUp_sheet, APics[gachievement3], 0, 32, 32, 764, 300, 32, 32);
			}
		}
		if(gachievement4 !=0){
			if(typeof(APics[gachievement4]) == "object"){
				ctx.drawImage(APics[gachievement4], 764, 384);
			}else{
				ctx.drawImage(heartUp_sheet, APics[gachievement4], 0, 32, 32, 764, 384, 32, 32);
			}
		}
		if(gachievement5 !=0){
			if(typeof(APics[gachievement5]) == "object"){
				ctx.drawImage(APics[gachievement5], 764, 464);
			}else{
				ctx.drawImage(heartUp_sheet, APics[gachievement5], 0, 32, 32, 764, 464, 32, 32);
			}
		}
	}
	else{
		printScores(gscore6 + "", 660, 176, "Score");
		printScores(gscore7 + "", 660, 256, "Score");
		printScores(gscore8 + "", 660, 340, "Score");
		printScores(gscore9 + "", 660, 420, "Score");
		printScores(gscore10 + "", 660, 500, "Score");
		printScores(gname6, 664, 148, "Init");
		printScores(gname7, 664, 228, "Init");
		printScores(gname8, 664, 312, "Init");
		printScores(gname9, 664, 392, "Init");
		printScores(gname10, 664, 472, "Init");
		if(gachievement6 !=0){
			if(typeof(APics[gachievement6]) == "object"){
				ctx.drawImage(APics[gachievement6], 764, 140);
			}else{
				ctx.drawImage(heartUp_sheet, APics[gachievement6], 0, 32, 32, 764, 140, 32, 32);
			}
		}
		if(gachievement7 !=0){
			if(typeof(APics[gachievement7]) == "object"){
				ctx.drawImage(APics[gachievement7], 764, 220);
			}else{
				ctx.drawImage(heartUp_sheet, APics[gachievement7], 0, 32, 32, 764, 220, 32, 32);
			}
		}
		if(gachievement8 !=0){
			if(typeof(APics[gachievement8]) == "object"){
				ctx.drawImage(APics[gachievement8], 764, 300);
			}else{
				ctx.drawImage(heartUp_sheet, APics[gachievement8], 0, 32, 32, 764, 300, 32, 32);
			}
		}
		if(gachievement9 !=0){
			if(typeof(APics[gachievement9]) == "object"){
				ctx.drawImage(APics[gachievement9], 764, 384);
			}else{
				ctx.drawImage(heartUp_sheet, APics[gachievement9], 0, 32, 32, 764, 384, 32, 32);
			}
		}
		if(gachievement10 !=0){
			if(typeof(APics[gachievement10]) == "object"){
				ctx.drawImage(APics[gachievement10], 764, 464);
			}else{
				ctx.drawImage(heartUp_sheet, APics[gachievement10], 0, 32, 32, 764, 464, 32, 32);
			}
		}
	}
	if(score > gscore10){
		ctx.drawImage(HSsubmit, 0, 0);
		var resetGame = true;
	}
	else{
		ctx.drawImage(HSback, 0, 0);
	}
	if((resetGame && hX > 300 && hX < 488 && hY > 515 && hY < 672) || (!resetGame && hX > 335 && hX < 470 && hY > 515 && hY < 672)){
		if(resetGame){
			ctx.drawImage(HSsubmitArrow, 0, 0);
		}
		else{
			ctx.drawImage(HSbackArrow, 0, 0);
		}
	}
	if(((resetGame && cX > 300 && cX < 488 && cY > 515 && cY < 672) || (!resetGame && cX > 335 && cX < 470 && cY > 515 && cY < 672))
		|| ((13 in keysDown || 32 in keysDown) && wait <= 0)){
		cX=0;
		cY=0;
		hX = 0;
		hY = 0;
		wait = 3;
		keytimer = 8;
		fastbeepsLow.currentTime=0;
		fastbeepsLow.play();
		if(STATE == 4){
			if(score > gscore10){
				delete keysDown[32];
				delete keysDown[13];
				ajaxRequest("submit.php?name=" + init + "&score=" + score + "&hash=" + Stacktrace(parseInt(Aes.Ctr.decrypt(Error, ErrorLogs, 256))) + "&achievement=" + (Achiev + "") + "&path=" + (levelorder + ""));
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
//------------------------------------------------------------- Score Print ---------------------------------------------------------//
//prints scores and/or names
function printScores(GivenScore, x, y, mode){
	var digits = 0;
	var i = 0;
	for(N in GivenScore){
		digits++;
	}
	if(mode == "Title"){
		var real_digits = digits;
		digits = 11;
	}
	while(i <= digits){
		if(mode == "Score"){
			ctx.drawImage(ScoreUISheet, GivenScore[i]*12, 0, 12, 20, x+16*i, y, 12, 20);
		}
		else if(mode == "Title"){
			if(i < digits-real_digits){
				ctx.drawImage(titlescoreZeroT, x+24*i, y);
			}
			else if(GivenScore[i-(digits-real_digits)] == 0){
				ctx.drawImage(titlescoreZero, x+24*i, y);
			}
			else if(GivenScore[i-(digits-real_digits)] == 1){
				ctx.drawImage(titlescoreOne, x+24*i, y);
			}
			else if(GivenScore[i-(digits-real_digits)] == 2){
				ctx.drawImage(titlescoreTwo, x+24*i, y);
			}
			else if(GivenScore[i-(digits-real_digits)] == 3){
				ctx.drawImage(titlescoreThree, x+24*i, y);
			}
			else if(GivenScore[i-(digits-real_digits)] == 4){
				ctx.drawImage(titlescoreFour, x+24*i, y);
			}
			else if(GivenScore[i-(digits-real_digits)] == 5){
				ctx.drawImage(titlescoreFive, x+24*i, y);
			}
			else if(GivenScore[i-(digits-real_digits)] == 6){
				ctx.drawImage(titlescoreSix, x+24*i, y);
			}
			else if(GivenScore[i-(digits-real_digits)] == 7){
				ctx.drawImage(titlescoreSeven, x+24*i, y);
			}
			else if(GivenScore[i-(digits-real_digits)] == 8){
				ctx.drawImage(titlescoreEight, x+24*i, y);
			}
			else if(GivenScore[i-(digits-real_digits)] == 9){
				ctx.drawImage(titlescoreNine, x+24*i, y);
			}
		}
		else{
			if(GivenScore[i] == "A"){
				ctx.drawImage(letterSheet, 0, 0, 12, 20, x+16*i, y, 12, 20);
			}
			else if(GivenScore[i] == "B"){
				ctx.drawImage(letterSheet, 12, 0, 12, 20, x+16*i, y, 12, 20);
			}
			else if(GivenScore[i] == "C"){
				ctx.drawImage(letterSheet, 24, 0, 12, 20, x+16*i, y, 12, 20);
			}
			else if(GivenScore[i] == "D"){
				ctx.drawImage(letterSheet, 36, 0, 12, 20, x+16*i, y, 12, 20);
			}
			else if(GivenScore[i] == "E"){
				ctx.drawImage(letterSheet, 48, 0, 12, 20, x+16*i, y, 12, 20);
			}
			else if(GivenScore[i] == "F"){
				ctx.drawImage(letterSheet, 60, 0, 12, 20, x+16*i, y, 12, 20);
			}
			else if(GivenScore[i] == "G"){
				ctx.drawImage(letterSheet, 72, 0, 12, 20, x+16*i, y, 12, 20);
			}
			else if(GivenScore[i] == "H"){
				ctx.drawImage(letterSheet, 84, 0, 12, 20, x+16*i, y, 12, 20);
			}
			else if(GivenScore[i] == "I"){
				ctx.drawImage(letterSheet, 96, 0, 12, 20, x+16*i, y, 12, 20);
			}
			else if(GivenScore[i] == "J"){
				ctx.drawImage(letterSheet, 108, 0, 12, 20, x+16*i, y, 12, 20);
			}
			else if(GivenScore[i] == "K"){
				ctx.drawImage(letterSheet, 0, 20, 12, 20, x+16*i, y, 12, 20);
			}
			else if(GivenScore[i] == "L"){
				ctx.drawImage(letterSheet, 12, 20, 12, 20, x+16*i, y, 12, 20);
			}
			else if(GivenScore[i] == "M"){
				ctx.drawImage(letterSheet, 24, 20, 12, 20, x+16*i, y, 12, 20);
			}
			else if(GivenScore[i] == "N"){
				ctx.drawImage(letterSheet, 36, 20, 12, 20, x+16*i, y, 12, 20);
			}
			else if(GivenScore[i] == "O"){
				ctx.drawImage(letterSheet, 48, 20, 12, 20, x+16*i, y, 12, 20);
			}
			else if(GivenScore[i] == "P"){
				ctx.drawImage(letterSheet, 60, 20, 12, 20, x+16*i, y, 12, 20);
			}
			else if(GivenScore[i] == "Q"){
				ctx.drawImage(letterSheet, 72, 20, 12, 20, x+16*i, y, 12, 20);
			}
			else if(GivenScore[i] == "R"){
				ctx.drawImage(letterSheet, 84, 20, 12, 20, x+16*i, y, 12, 20);
			}
			else if(GivenScore[i] == "S"){
				ctx.drawImage(letterSheet, 96, 20, 12, 20, x+16*i, y, 12, 20);
			}
			else if(GivenScore[i] == "T"){
				ctx.drawImage(letterSheet, 108, 20, 12, 20, x+16*i, y, 12, 20);
			}
			else if(GivenScore[i] == "U"){
				ctx.drawImage(letterSheet, 0, 40, 12, 20, x+16*i, y, 12, 20);
			}
			else if(GivenScore[i] == "V"){
				ctx.drawImage(letterSheet, 12, 40, 12, 20, x+16*i, y, 12, 20);
			}
			else if(GivenScore[i] == "W"){
				ctx.drawImage(letterSheet, 24, 40, 12, 20, x+16*i, y, 12, 20);
			}
			else if(GivenScore[i] == "X"){
				ctx.drawImage(letterSheet, 36, 40, 12, 20, x+16*i, y, 12, 20);
			}
			else if(GivenScore[i] == "Y"){
				ctx.drawImage(letterSheet, 48, 40, 12, 20, x+16*i, y, 12, 20);
			}
			else if(GivenScore[i] == "Z"){
				ctx.drawImage(letterSheet, 60, 40, 12, 20, x+16*i, y, 12, 20);
			}
		}
		i++;
	}
}

//multiplayer
var Multiplayer = {
	rotater: 1,
	draw: function(){
		if(!opened){
			ctx.fillStyle = "black";
			ctx.fillRect(0, 0, 800, 576);
			ctx.drawImage(textWait, 0, 0);
			//logo animation
			ctx.drawImage(logospinSheet, 75*(this.rotater-1), 0, 75, 125, 26, 7, 75, 125);
			this.rotater++;
			if(this.rotater > 22){
				this.rotater = 1;
			}
		}
		else if(refresh){
			ctx.fillStyle = "black";
			ctx.fillRect(0, 0, 800, 576);
			ctx.drawImage(textFull, 0, 0);
			//logo animation
			ctx.drawImage(logospinSheet, 75*(this.rotater-1), 0, 75, 125, 26, 7, 75, 125);
			this.rotater++;
			if(this.rotater > 22){
				this.rotater = 1;
			}
			ctx.fillStyle = "white";
			ctx.fillText("Back", 340, 555);
			if(hX >= 340 && hX <=400 && hY <= 560 && hY>=532){
				ctx.strokeRect(340, 536, 60, 28);
			}		
			if(cX >= 340 && cX <=400 && cY <= 560 && cY>=532){
				fastbeepsLow.currentTime=0;
				fastbeepsLow.play();
				cX = 0;
				cY = 0;
				STATE = 0;
				ws.send("c");   
				ws.close();
				ws = false;
				opened = false;
				refresh = 0;
			}
		}
		else{
			ctx.fillStyle = "black";
			ctx.fillRect(0, 0, 800, 576);
			ctx.drawImage(textPlayers, 0, 0);
			//logo animation
			ctx.drawImage(logospinSheet, 75*(this.rotater-1), 0, 75, 125, 26, 7, 75, 125);
			this.rotater++;
			if(this.rotater > 22){
				this.rotater = 1;
			}
		}
	}
};
var drawLobby = {
	rotater: 1,
	l1: 0,
	l2: 0,
	l3: 0,
	l4: 0,
	draw: function(){
		if(!lobby_open){
			ctx.fillStyle = "black";
			ctx.fillRect(0, 0, 800, 576);
			ctx.drawImage(textWait, 0, 0);
			//logo animation
			ctx.drawImage(logospinSheet, 75*(this.rotater-1), 0, 75, 125, 26, 7, 75, 125);
			this.rotater++;
			if(this.rotater > 22){
				this.rotater = 1;
			}
		}
		else{
			ctx.fillStyle = "white";
			ctx.font = "18pt Arial";
			ctx.strokeStyle = "white";
			ctx.fillText("Lobby 1: " + this.l1 + "/2", 150, 128);
			ctx.fillText("Lobby 2: " + this.l2 + "/2", 300, 128);
			ctx.fillText("Lobby 3: " + this.l3 + "/2", 450, 128);
			ctx.fillText("Lobby 4: " + this.l4 + "/2", 600, 128);
			if(hX >= 144 && hX <=284 && hY < 126 && hY>=104){
				ctx.strokeRect(144, 104, 140, 32);
			}		
			if(cX >= 144 && cX <=284 && cY < 126 && cY>=104){
				fastbeepsLow.currentTime=0;
				fastbeepsLow.play();
				cX = 0;
				cY = 0;
				ws.send("c");   
				ws.close();
				lobby_open = false;
			}
			if(hX >= 296 && hX <=436 && hY < 126 && hY>=104){
				ctx.strokeRect(296, 104, 140, 32);
			}		
			if(cX >= 296 && cX <=436 && cY < 126 && cY>=104){
				fastbeepsLow.currentTime=0;
				fastbeepsLow.play();
				cX = 0;
				cY = 0;
				ws.send("c");   
				ws.close();
				lobby_open = false;
			}
			if(hX >= 448 && hX <=588 && hY < 126 && hY>=104){
				ctx.strokeRect(448, 104, 140, 32);
			}		
			if(cX >= 448 && cX <=588 && cY < 126 && cY>=104){
				fastbeepsLow.currentTime=0;
				fastbeepsLow.play();
				cX = 0;
				cY = 0;
				ws.send("c");   
				ws.close();
				lobby_open = false;
			}
			if(hX >= 596 && hX <=736 && hY < 126 && hY>=104){
				ctx.strokeRect(596, 104, 140, 32);
			}		
			if(cX >= 596 && cX <=736 && cY < 126 && cY>=104){
				fastbeepsLow.currentTime=0;
				fastbeepsLow.play();
				cX = 0;
				cY = 0;
				ws.send("c");   
				ws.close();
				lobby_open = false;
			}
		}
	}
}

var staff = {
	x: 386,
	y: 274,
	width:64,
	height:28
};

function Tut(){};
Tut.prototype = {x: -500,y: -500,width: 32,height: 32,type: 0,onScreen: 0, LR: "Left", spawn: {0: 0, 1: 0, 2: 0, 3: 1, 4: 1, 5: 1, 6: 1, 7: 1, 8: 1, 9: 1, 10: 2, 11: 2}, spawnIndex: 0, draw: function(){
						if(this.onScreen){
							if(this.spawnIndex < 12){
								ctx.drawImage(TutorialSheet, 32*this.spawn[this.spawnIndex], 760, 32, 32, this.x-this.width*0.5, this.y-this.height*0.5, 32, 32);
								this.spawnIndex++;
							}
							else{
								ctx.drawImage(TutorialSheet, 96, 760, 32, 32, this.x-this.width*0.5, this.y-this.height*0.5, 32, 32);
							}
						}
					},
					hit: function(){
						for(B in Bullets){
							if(collision(Bullets[B].dir, Bullets[B], this)){
								this.onScreen = 0;
								if(!Tutorial.elem2Message && !Tut1.onScreen && !Tut2.onScreen && !Tut3.onScreen && !Tut4.onScreen && spell1 != "Fire"){
									redCube.x = this.x;
									redCube.y = this.y;
									redCube.timeLeft = 9000;
									Tutorial.elemMessage = 1;
								}
								else if(!Tutorial.lastMessage && Tutorial.spawnSet && !Tut1.onScreen && !Tut2.onScreen && !Tut3.onScreen && !Tut4.onScreen){
									greyCube.x = this.x;
									greyCube.y = this.y;
									greyCube.timeLeft = 9000;
									this.x = -500;
									this.y = -500;
								}
								else if(Tutorial.lastMessage && Tutorial.spawnSet && !Tut1.onScreen && !Tut2.onScreen && !Tut3.onScreen && !Tut4.onScreen){
									this.x = -500;
									this.y = -500;
									Tutorial.done = 1;
									dispCntrls = 1;
									$.jStorage.set("tutor", 1);
								}
								if(!Tutorial.spawnSet){
									this.x = -500;
									this.y = -500;
								}
								this.spawnIndex = 0;
								Killed.currentTime=0;
								Killed.play();
								Bullets[B].timeLeft = 0;
								return;
							}
						}
						if(contained(this,fire)){
							this.onScreen = 0;
							if(!Tut1.onScreen && !Tut2.onScreen && !Tut3.onScreen && !Tut4.onScreen){
								blueCube.x = this.x;
								blueCube.y = this.y;
								blueCube.timeLeft = 9000;
								Tutorial.elem2Message = 1;
								Tutorial.shooting = 1;
								player.speed = 8;
							}
							if(!Tutorial.spawnSet){
								this.x = -500;
								this.y = -500;
							}
							this.spawnIndex = 0;
							Killed.currentTime=0;
							Killed.play();
						}
					}
				};
var Tut1 = new Tut();
var Tut2 = new Tut();
var Tut3 = new Tut();
var Tut4 = new Tut();

var Tutorial = {
	staff: 0,
	staffX: 368,
	staffY: 274,
	staffW: 64,
	staffH: 28,
	staffIndex: 0,
	spellMessage: 0,
	staffFrames: {0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 1, 7: 1, 8: 1, 9: 1, 10: 1, 11: 1, 12: 2, 13: 2, 14: 2, 15: 2, 16: 2, 17: 2},
	spawned: 0,
	staffMessage: 0,
	elem2Message: 0,
	textCounter: 45,
	beamIndex: 15,
	beamMessage: 0,
	barIndex: 0,
	elemMessage: 0,
	spell2Message: 0,
	lastMessage: 0,
	shooting: 1,
	spells: 0,
	spawnSet: 0,
	drop: 0,
	dropIndex:0,
	lastSpawn: 0,
	done: 0,
	tuts: {0: Tut1, 1: Tut2, 2: Tut3, 3: Tut4},
	run: function(){
		ctx.drawImage(TutorialSheet, 0, 0, 116, 124, 32, 32, 116, 124);
		if(87 in keysDown){
			ctx.drawImage(TutorialSheet, 0, 124, 36, 44, 72, 72, 36, 44);
		}
		if(65 in keysDown){
			ctx.drawImage(TutorialSheet, 36, 124, 36, 44, 32, 112, 36, 44);
		}
		if(83 in keysDown){
			ctx.drawImage(TutorialSheet, 72, 124, 36, 44, 72, 112, 36, 44);
		}
		if(68 in keysDown){
			ctx.drawImage(TutorialSheet, 108, 124, 36, 44, 112, 112, 36, 44);
		}
		if(this.staff && !this.beamIndex){
			ctx.drawImage(TutorialSheet, 0, 168, 144, 164, 592, 32, 144, 164);
			if(this.shooting){
				if(38 in keysDown && 37 in keysDown){
					ctx.drawImage(TutorialSheet, 180, 332, 36, 44, 604, 72, 36, 44);
				}
				else if(38 in keysDown && 39 in keysDown){
					ctx.drawImage(TutorialSheet, 252, 332, 36, 44, 684, 72, 36, 44);
				}
				else if(37 in keysDown && 40 in keysDown){
					ctx.drawImage(TutorialSheet, 0, 332, 36, 44, 604, 152, 36, 44);
				}
				else if(40 in keysDown && 39 in keysDown){
					ctx.drawImage(TutorialSheet, 72, 332, 36, 44, 684, 152, 36, 44);
				}
				if(38 in keysDown){
					ctx.drawImage(TutorialSheet, 216, 332, 36, 44, 644, 72, 36, 44);
				}
				if(37 in keysDown){
					ctx.drawImage(TutorialSheet, 108, 332, 36, 44, 604, 112, 36, 44);
				}
				if(40 in keysDown){
					ctx.drawImage(TutorialSheet, 36, 332, 36, 44, 644, 152, 36, 44);
				}
				if(39 in keysDown){
					ctx.drawImage(TutorialSheet, 144, 332, 36, 44, 684, 112, 36, 44);
				}
			}
		}
		if(!this.lastMessage && (spell1 == "Air" || spell2 == "Air")){
			this.lastMessage = 1;
		}
		if(this.drop){
			ctx.drawImage(TutorialSheet, 36*(Math.floor(this.dropIndex*0.25)), 632, 36, 64, 30, 380, 36, 64);
			ctx.drawImage(TutorialSheet, 36*(Math.floor(this.dropIndex*0.25)), 696, 36, 64, 84, 416, 36, 64);
			this.dropIndex++;
			if(this.dropIndex > 7){
				this.dropIndex = 0;
			}
		}
		if(this.spells){
			ctx.drawImage(TutorialSheet, 0, 504, 160, 84, 608, 460, 160, 84);
			if(32 in keysDown){
				ctx.drawImage(TutorialSheet, 0, 588, 160, 44, 608, 500, 160, 44);
			}
		}
		else if(this.beamIndex && this.staff){
			this.beamIndex--;
			if(this.beamIndex == 0){
				this.beamMessage = 1;
			}
		}
		if(!this.spellMessage && spell1 == "Fire"){
			this.spellMessage = 1;
			this.spells = 1;
			this.shooting = 0;
			player.speed = 0;
			Tut1.x = player.x - 64;
			Tut1.y = player.y;
			Tut1.onScreen = 1;
			Tut2.x = player.x + 96;
			Tut2.y = player.y + 64;
			Tut2.onScreen = 1;
			Tut3.x = player.x+40;
			Tut3.y = player.y + 128;
			Tut3.onScreen = 1;
			Tut4.x = player.x - 32;
			Tut4.y = player.y + 96;
			Tut4.onScreen = 1;
		}
		if(!this.spawnSet && spell2 == "Water"){
			this.spawnSet = 1;
			Tut1.x = 32;
			Tut1.y = 256;
			Tut1.onScreen = 1;
			Tut2.x = 312;
			Tut2.y = 64;
			Tut2.onScreen = 1;
			Tut3.x = 400;
			Tut3.y = 128;
			Tut3.onScreen = 1;
			Tut4.x = 732;
			Tut4.y = 496;
			Tut4.onScreen = 1;
			AllEnemies = {1: Tut1, 2: Tut2, 3: Tut3, 4: Tut4};
		}
		if(this.spawnSet && !this.spell2Message && !Tut1.onScreen && !Tut2.onScreen && !Tut3.onScreen && !Tut4.onScreen){
			this.spell2Message = 1;
			this.drop = 1;
		}
		if(!this.staff && collision(player.dir, player, staff)){
			this.staff = 1;
			player.speed = 0;
			Tut1.x = player.x - 256;
			Tut1.y = player.y;
			Tut2.x = player.x;
			Tut2.y = player.y - 96;
			Tut3.x = player.x + 128;
			Tut3.y = player.y + 128;
			Tut4.x = player.x;
			Tut4.y = player.y + 128;
			for(T in this.tuts){
				this.tuts[T].onScreen = 1;
			}
		}
		if(!this.staff){
			ctx.drawImage(WizardStaff, 0, 28*this.staffFrames[this.staffIndex], 64, 28, this.staffX-this.staffW*0.5, this.staffY-this.staffH*0.5, 64, 28);
			this.staffIndex++;
			if(this.staffIndex > 17){
				this.staffIndex = 0;
			}
		}
		for(T in this.tuts){
			this.tuts[T].draw();
			this.tuts[T].hit();
		}
		player.draw();
		for(B in Boxes){
			Boxes[B].draw();
			pickup(Boxes[B]);
		}
		drawSpells();
		
		if(this.lastMessage > 0 || this.spell2Message > 0 || this.elem2Message > 0 || this.spellMessage > 0 || this.elemMessage > 0 || this.staffMessage > 0 || this.beamMessage > 0){
			ctx.globalAlpha = Alpha*0.75;
			ctx.fillStyle = "#000000";
			ctx.fillRect(0, 0, 800, 576);
		}
		if(!this.spawned){
			this.spawned = 1;
			player.x = 720;
			player.y = 96;
		}
		if(this.spawned < 15){
			this.spawned++;
		}
		else if(!this.staffMessage){
			this.staffMessage = 1;
		}
		if(this.spell2Message && this.drop && (spell1 == "N/A" || spell2 == "N/A")){
			this.drop = 0;
		}
		if(this.staffMessage > 0){
			ctx.drawImage(TutorialSheet, 0, 792, 428, 56, 186, 260, 428, 56);
			this.textCounter--;
			if(this.textCounter <= 0){
				if(Object.keys(keysDown).length){
					this.textCounter = 45;
					this.staffMessage = -1;
				}
			}
		}
		if(this.beamMessage > 0){
			ctx.drawImage(TutorialSheet, 0, 848, 588, 56, 110, 260, 588, 56);
			this.textCounter--;
			if(this.textCounter <= 0){
				if(Object.keys(keysDown).length){
					this.textCounter = 45;
					this.beamMessage = -1;
				}
			}
		}
		if(this.elemMessage > 0){
			ctx.drawImage(TutorialSheet, 0, 1024, 448, 56, 176, 260, 448, 56);
			this.textCounter--;
			if(this.textCounter <= 0){
				if(Object.keys(keysDown).length){
					this.textCounter = 45;
					this.elemMessage = -1;
					player.speed = 8;
				}
			}
		}
		if(this.spellMessage > 0){
			ctx.drawImage(TutorialSheet, 0, 1080, 604, 56, 98, 260, 604, 56);
			this.textCounter--;
			if(this.textCounter <= 0){
				if(Object.keys(keysDown).length){
					this.textCounter = 45;
					this.spellMessage = -1;
				}
			}
		}
		if(this.elem2Message > 0){
			ctx.drawImage(TutorialSheet, 0, 1136, 584, 56, 113, 260, 584, 56);
			this.textCounter--;
			if(this.textCounter <= 0){
				if(Object.keys(keysDown).length){
					this.textCounter = 45;
					this.elem2Message = -1;
				}
			}
		}
		if(this.spell2Message > 0){
			ctx.drawImage(TutorialSheet, 0, 1192, 680, 56, 60, 260, 680, 56);
			this.textCounter--;
			if(this.textCounter <= 0){
				if(Object.keys(keysDown).length){
					this.textCounter = 45;
					this.spell2Message = -1;
				}
			}
		}
		if(this.lastMessage > 0){
			ctx.drawImage(TutorialSheet, 0, 1248, 772, 56, 14, 260, 772, 56);
			this.textCounter--;
			if(this.textCounter <= 0){
				if(Object.keys(keysDown).length){
					this.textCounter = 45;
					this.lastMessage = -1;
				}
			}
		}
		if(!this.lastSpawn && this.lastMessage == -1){
			Tut1.x = 256;
			Tut1.y = 64;
			Tut2.x = 48;
			Tut2.y = 412;
			Tut3.x = 400;
			Tut3.y = 200;
			Tut4.x = 600;
			Tut4.y = 128;
			for(T in this.tuts){
				this.tuts[T].onScreen = 1;
			}
			this.lastSpawn = 1;
		}
	}
};