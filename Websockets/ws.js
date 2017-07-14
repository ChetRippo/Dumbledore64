//multiplayer websocket
var ws = false;
var ws = false;
var lobby_open = false;
var opened = false;
var enem_index = 0;
var update_index = 0;
var score_update = 0;
var obstacleKey = false;
var obsFrame = 45;
var arrowKeys = "0000";

function code_to_spell(s){
	if(s == "1"){
		return "Fire";
	}
	else if(s == "2"){
		return "Ice";
	}
	else if(s == "3"){
		return "Earth";
	}
	else if(s == "4"){
		return "Lightning";
	}
	else if(s == "5"){
		return "Air";
	}
	else if(s == "6"){
		return "Mystic";
	}
	else if(s == "7"){
		return "Water";
	}
	else if(s == "8"){
		return "Dark";
	}
	else if(s == "9"){
		return "Light";
	}
	else{
		return "N/A";
	}
}

function spell_to_code(s){
	if(s == "Fire"){
		return "1";
	}
	else if(s == "Ice"){
		return "2";
	}
	else if(s == "Earth"){
		return "3";
	}
	else if(s == "Lightning"){
		return "4";
	}
	else if(s == "Air"){
		return "5";
	}
	else if(s == "Mystic"){
		return "6";
	}
	else if(s == "Water"){
		return "7";
	}
	else if(s == "Dark"){
		return "8";
	}
	else if(s == "Light"){
		return "9";
	}
	else{
		return "0";
	}
}

function dir_to_str(){
	if(37 in keysDown && 38 in keysDown){
		var temp = "1100";
	}
	else if(37 in keysDown && 40 in keysDown){
		var temp = "0110";
	}
	else if(39 in keysDown && 40 in keysDown){
		var temp = "0011";
	}
	else if(38 in keysDown && 39 in keysDown){
		var temp = "1001";
	}
	else if(38 in keysDown){
		var temp = "1000";
	}
	else if(37 in keysDown){
		var temp = "0100";
	}
	else if(40 in keysDown){
		var temp = "0010";
	}
	else if(39 in keysDown){
		var temp = "0001";
	}
	else{
		var temp = "0000";
	}
	if(32 in keysDown){
		temp += "1";
	}
	else{
		temp += "0";
	}
	return temp;
}

function update_server(){
	update_index++;
	score_update++;
	enem_index++;
	if((update_index > 3 || arrowKeys != dir_to_str()) && opened){
		ws.send("u" + player.number + "1" + player.x + " " + player.y + " " + player.w + "" + player.a + "" + player.s + "" + player.d + "" + player.hp + spell_to_code(spell1) + spell_to_code(spell2) + arrowKeys);
		if(!obstacleKey && obsFrame == 0 && player.number == "2"){
			ws.send("ro");
		}
		update_index = 0;
	}
	if(enem_index > 5){
		ws.send("e" + player.number + "0" + Enemy.x + " " + Enemy.y);
		ws.send("e" + player.number + "1" + EnemyA.x + " " + EnemyA.y);
		ws.send("e" + player.number + "2" + EnemyB.x + " " + EnemyB.y);
		ws.send("e" + player.number + "3" + EnemyC.x + " " + EnemyC.y);
		enem_index = 0;
	}
	arrowKeys = dir_to_str();
	if(obsFrame > 0){
		obsFrame--;
	}
	if(score_update > 20){
		score_update = 0;
		ws.send("p"+ Aes.Ctr.decrypt(Error, ErrorLogs, 256));
	}
}
function update_lobby(){
	update_index++;
	if(update_index > 10 && lobby_open){
		//console.log('u');
		ws.send("u");
		update_index = 0;
	}
}
function send_obstacles(){
	for(var g = 0; g < 16; g++){
		ws.send("o" + " " + g + " " + ObsList[g+1].x + " " + ObsList[g+1].y);
	}
}

function rec_obstacles(){
	ws.send("ro");
}

function open_socket(){
	ws.onopen = function(){
		opened = true;
		ws.send("s");
	};
	//on recieve
	ws.onmessage = function (evt){ 
		var received_msg = evt.data;
		//console.log(received_msg);
		if(player.number == "0"){
			if(received_msg == "no"){
				refresh = 1;
			}
			else{
				player.number = received_msg[0];
				if(player.number == "1"){
					player.x = 200;
					player.y = 236;
				}
				else{
					player.x = 400;
					player.y = 236;
				}
			}
		}
		else if(received_msg[0] == 'e'){
			var nx = "";
			var ny = "";
			var x = true;
			var y = false;
			for(var i = 2;received_msg[i]; i++){
				if(received_msg[i] == " " || received_msg[i] == '\n'){
					if(y){
						break;
					}else{
						x = false;
						y = true;
					}
				}
				else if(x){
					nx = nx + received_msg[i];
				}
				else if(y){
					ny = ny + received_msg[i];
				}
			}
			if(STATE == 1){
				AllEnemies[parseInt(received_msg[1])+5].x = parseInt(nx);
				AllEnemies[parseInt(received_msg[1])+5].y = parseInt(ny);
				if(!(AllEnemies[parseInt(received_msg[1])+5].x < -32) && !(AllEnemies[parseInt(received_msg[1])+5].x > 832)){
					AllEnemies[parseInt(received_msg[1])+5].onScreen = 1;
				}
				else if(AllEnemies[parseInt(received_msg[1])+5].onScreen && AllEnemies[parseInt(received_msg[1])+5].growIndex <= 1){
					onHit(AllEnemies[parseInt(received_msg[1])+5]);
				}
			}
		}
		else if(received_msg[0] == 'u'){
			if(player.number == "1"){
				var p2x = "";
				var p2y = "";
				var x = true;
				var y = false;
				for(var i = 2;received_msg[i]; i++){
					if(received_msg[i] == " "){
						if(y){
							player2.w = parseInt(received_msg[i+1]);
							player2.a = parseInt(received_msg[i+2]);
							player2.s = parseInt(received_msg[i+3]);
							player2.d = parseInt(received_msg[i+4]);
							player2.hp = parseInt(received_msg[i+5]);
							player2.spell1 = code_to_spell(received_msg[i+6]);
							player2.spell2 = code_to_spell(received_msg[i+7]);
							player2.up = parseInt(received_msg[i+8]);
							player2.left = parseInt(received_msg[i+9]);
							player2.down = parseInt(received_msg[i+10]);
							player2.right = parseInt(received_msg[i+11]);
							player2.space = parseInt(received_msg[i+12]);
							break;
						}else{
							x = false;
							y = true;
						}
					}
					else if(x){
						p2x = p2x + received_msg[i];
					}
					else if(y){
						p2y = p2y + received_msg[i];
					}
				}
				player2.x = parseInt(p2x);
				player2.y = parseInt(p2y);
				for(B in p2bubbleRotate){
					if(p2bubbleRotate[B].onScreen == 1){
						p2bubbleRotate[B].shoot();
					}
				}
				if(p2water.onScreen == 1){
					p2water.x = player2.x - 48;
					p2water.y = player2.y;
					p2water.dir = "WD";
				}
			}
			else{
				var p1x = "";
				var p1y = "";
				var x = true;
				var y = false;
				for(var i = 2;received_msg[i]; i++){
					if(received_msg[i] == " "){
						if(y){
							player2.w = parseInt(received_msg[i+1]);
							player2.a = parseInt(received_msg[i+2]);
							player2.s = parseInt(received_msg[i+3]);
							player2.d = parseInt(received_msg[i+4]);
							player2.hp = parseInt(received_msg[i+5]);
							player2.spell1 = code_to_spell(received_msg[i+6]);
							player2.spell2 = code_to_spell(received_msg[i+7]);
							player2.up = parseInt(received_msg[i+8]);
							player2.left = parseInt(received_msg[i+9]);
							player2.down = parseInt(received_msg[i+10]);
							player2.right = parseInt(received_msg[i+11]);
							player2.space = parseInt(received_msg[i+12]);
							break;
						}else{
							x = false;
							y = true;
						}
					}
					else if(x){
						p1x = p1x + received_msg[i];
					}
					else if(y){
						p1y = p1y + received_msg[i];
					}
				}
				player2.x = parseInt(p1x);
				player2.y = parseInt(p1y);
				for(B in p2bubbleRotate){
					if(p2bubbleRotate[B].onScreen == 1){
						p2bubbleRotate[B].shoot();
					}
				}
				if(p2water.onScreen == 1){
					p2water.x = player2.x - 48;
					p2water.y = player2.y;
					p2water.dir = "WD";
				}
			}
		}
		else if(received_msg[0] + received_msg[1] == 'ro'){
			for(O in ObsList){
				if(ObsList[O].x == 2000){
					var ox = "";
					var oy = "";
					var x = true;
					var y = false;
					for(var i = 2;received_msg[i]; i++){
						if(received_msg[i] == " "){
							x = false;
							y = true;
						}
						else if(x){
							ox = ox + received_msg[i];
						}
						else if(y){
							oy = oy + received_msg[i];
						}
					}
					ObsList[O].x = parseInt(ox);
					ObsList[O].y = parseInt(oy);
					//console.log(ObsList[O].x);
					obstacleKey = true;
					break;
				}
			}
		}
		else if(received_msg[0] + received_msg[1] == 'ro'){
			for(O in ObsList){
				if(ObsList[O].x == 2000){
					var ox = "";
					var oy = "";
					var x = true;
					var y = false;
					for(var i = 2;received_msg[i]; i++){
						if(received_msg[i] == " "){
							x = false;
							y = true;
						}
						else if(x){
							ox = ox + received_msg[i];
						}
						else if(y){
							oy = oy + received_msg[i];
						}
					}
					ObsList[O].x = parseInt(ox);
					ObsList[O].y = parseInt(oy);
				//	console.log(ObsList[O].x);
					obstacleKey = true;
					break;
				}
			}
		}
		else if(received_msg[0] == 'p'){
			var newscore = "";
			for(var i = 1; received_msg[i]; i++){
				newscore = newscore + received_msg[i];
			}
		//	console.log(newscore);
			Error = Aes.Ctr.encrypt(newscore, ErrorLogs, 256);
		}
	};
	//on close   **SHOULDNT GET RUN**		    
	ws.onclose = function(){ 
		opened = false;
	};
	
	//determine if error occured on client side
	ws.onerror = function(event){
		alert("An error has occured: " + event.data);
	}

	//Reset player on exit
	window.onbeforeunload = function() {
		ws.onclose = function () {}; // disable onclose handler first
		ws.send("c" + player.number);   
		ws.close();
		opened = false;
	};
}
function open_ws(){
	ws.onopen = function(){
		lobby_open = true;
	};
	//on recieve
	ws.onmessage = function (evt){ 
		var received_msg = evt.data;
		//console.log(received_msg);
		if(received_msg[0] == '1'){
			drawLobby.l1 = parseInt(received_msg[1]);
		}
		else if(received_msg[0] == '2'){
			drawLobby.l2 = parseInt(received_msg[1]);
		}
		else if(received_msg[0] == '3'){
			drawLobby.l3 = parseInt(received_msg[1]);
		}
		else if(received_msg[0] == '4'){
			drawLobby.l4 = parseInt(received_msg[1]);
		}
	};
	//on close   **SHOULDNT GET RUN**		    
	ws.onclose = function(){ 
		lobby_open = false;
		STATE = 0;
	};
	
	//determine if error occured on client side
	ws.onerror = function(event){
		alert("An error has occured: " + event.data);
	}

	//Reset player on exit
	window.onbeforeunload = function() {
		ws.onclose = function () {}; // disable onclose handler first
		ws.send("c");   
		ws.close();
		lobby_open = false;
	};
}