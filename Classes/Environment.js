//------------------------------------------------- Map -----------------------------------------------------------------------------//
// Obstacle 1: 64 by 128, at 512 352
var obstacle11 = {
	x: 512,
	y: 352,
	ox: 512,
	oy: 352,
	width: 32,
	height: 32,
	hp: 3,
	hptimer: 0,
	index: 1,
	growTimer: Math.floor(Math.random() * 60)
};
var obstacle12 = {
	x: 544,
	y: 352,
	ox: 544,
	oy: 352,
	width: 32,
	height: 32,
	hp: 3,
	hptimer: 0,
	index: 1,
	growTimer: Math.floor(Math.random() * 60)
};
var obstacle13 = {
	x: 512,
	y: 384,
	ox: 512,
	oy: 384,
	width: 32,
	height: 32,
	hp: 3,
	hptimer: 0,
	index: 1,
	growTimer: Math.floor(Math.random() * 60)
};
var obstacle14 = {
	x: 544,
	y: 384,
	ox: 544,
	oy: 384,
	width: 32,
	height: 32,
	hp: 3,
	hptimer: 0,
	index: 1,
	growTimer: Math.floor(Math.random() * 60)
};
var obstacle15 = {
	x: 512,
	y: 416,
	ox: 512,
	oy: 416,
	width: 32,
	height: 32,
	hp: 3,
	hptimer: 0,
	index: 1,
	growTimer: Math.floor(Math.random() * 60)
};
var obstacle16 = {
	x: 544,
	y: 416,
	ox: 544,
	oy: 416,
	width: 32,
	height: 32,
	hp: 3,
	hptimer: 0,
	index: 1,
	growTimer: Math.floor(Math.random() * 60)
};
var obstacle17 = {
	x: 512,
	y: 448,
	ox: 512,
	oy: 448,
	width: 32,
	height: 32,
	hp: 3,
	hptimer: 0,
	index: 1,
	growTimer: Math.floor(Math.random() * 60)
};
var obstacle18 = {
	x: 544,
	y: 448,
	ox: 544,
	oy: 448,
	width: 32,
	height: 32,
	hp: 3,
	hptimer: 0,
	index: 1,
	growTimer: Math.floor(Math.random() * 60)
};
// Obstacle 2: 128 by 64, at 256 128
var obstacle21 = {
	x: 256,
	y: 128,
	ox: 256,
	oy: 128,
	width: 32,
	height: 32,
	hp: 3,
	hptimer: 0,
	index: 1
};
var obstacle22 = {
	x: 288,
	y: 128,
	ox: 288,
	oy: 128,
	width: 32,
	height: 32,
	hp: 3,
	hptimer: 0,
	index: 1
};
var obstacle23 = {
	x: 320,
	y: 128,
	ox: 320,
	oy: 128,
	width: 32,
	height: 32,
	hp: 3,
	hptimer: 0,
	index: 1
};
var obstacle24 = {
	x: 352,
	y: 128,
	ox: 352,
	oy: 128,
	width: 32,
	height: 32,
	hp: 3,
	hptimer: 0,
	index: 1
};
// Obstacle 3: 32 by 128, at 704 256
var obstacle31 = {
	x: 704,
	y: 256,
	ox: 704,
	oy: 256,
	width: 32,
	height: 32,
	hp: 3,
	hptimer: 0,
	index: 1
};
var obstacle32 = {
	x: 704,
	y: 288,
	ox: 704,
	oy: 288,
	width: 32,
	height: 32,
	hp: 3,
	hptimer: 0,
	index: 1
};
var obstacle33 = {
	x: 704,
	y: 320,
	ox: 704,
	oy: 320,
	width: 32,
	height: 32,
	hp: 3,
	hptimer: 0,
	index: 1
};
var obstacle34 = {
	x: 704,
	y: 352,
	ox: 704,
	oy: 352,
	width: 32,
	height: 32,
	hp: 3,
	hptimer: 0,
	index: 1
};
var obstacle1 = {1: obstacle11, 2: obstacle12, 3: obstacle13, 4: obstacle14, 5: obstacle15, 6: obstacle16, 7: obstacle17, 8: obstacle18};
var obstacle2 = {1: obstacle21, 2: obstacle22, 3: obstacle23, 4: obstacle24};
var obstacle3 = {1: obstacle31, 2: obstacle32, 3: obstacle33, 4: obstacle34};
var ObsList = {1: obstacle11, 2: obstacle12, 3: obstacle13, 4: obstacle14, 5: obstacle15, 6: obstacle16, 7: obstacle17, 8: obstacle18,
				9: obstacle21, 10: obstacle22, 11: obstacle23, 12: obstacle24, 13: obstacle31, 14: obstacle32, 15: obstacle33, 16: obstacle34};
var allObs = {1: obstacle1, 2: obstacle2, 3: obstacle3};
function drawObstacle(O){
	for(Z in O){
		if(O[Z].hp > 0){
			if(STATE == 1){
				if (O[Z].hptimer/2 != Math.round(O[Z].hptimer/2)){
					ctx.fillStyle = "white";
					ctx.fillRect(O[Z].x - O[Z].width / 2, O[Z].y - O[Z].height / 2, O[Z].width, O[Z].height);
				}
				else{
					if(O[Z].hp == 3){
						ctx.drawImage(Tree, O[Z].x - O[Z].width/2, O[Z].y - O[Z].height/2);
					}
					else if(O[Z].hp == 2){
						ctx.drawImage(Tree2, O[Z].x - O[Z].width/2, O[Z].y - O[Z].height/2);
					}
					else if(O[Z].hp == 1){
						ctx.drawImage(Tree3, O[Z].x - O[Z].width/2, O[Z].y - O[Z].height/2);
					}
				}
			}
			if(STATE == "Jungle"){
				ctx.drawImage(JungleTrees[Math.floor(O[Z].index/2)], O[Z].x - O[Z].width/2, O[Z].y - 576);
			}
		}
	}
}
function obsCollision(O, E, dir){
	var col = false;
	for(Z in O){
		if(O[Z].hp > 0){
			if(collision(dir, E, O[Z])){
				col = true;
			}
		}
	}
	return col;
}
function obsTick(O){
	for(Z in O){
		if(O[Z].hptimer > 0){
			O[Z].hptimer-=1;
		}
	}
}
function obsHit(O){
	if(O.hptimer <= 0){
		if(STATE != "Jungle"){
			Killed.currentTime=0;
			Killed.play();
		}
		O.hp-=1;
		O.hptimer = 20;
	}
	if(O.hp == 0){
		O.x = 2000;
		O.y = 2000;
	}
}
function rePlant(){
	if(STATE == 1 && planted == false){
		for(Z in obstacle1){
			obstacle1[Z].width = 32;
			obstacle1[Z].x = (Math.floor(Math.random() * 18) + 4)*32;
			obstacle1[Z].y = (Math.floor(Math.random() * 12) + 4)*32;
			obstacle1[Z].hp = 3;
			if(obstacle1[Z].x >= 336 && obstacle1[Z].x <= 464 && obstacle1[Z].y >= 192 && obstacle1[Z].y <= 320){
				obstacle1[Z].x = 2000;
				obstacle1[Z].y = 2000;
			}
		}
		for(Z in obstacle2){
			obstacle2[Z].width = 32;
			obstacle2[Z].x = (Math.floor(Math.random() * 18) + 4)*32;
			obstacle2[Z].y = (Math.floor(Math.random() * 12) + 4)*32;
			obstacle2[Z].hp = 3;
			if(obstacle2[Z].x >= 336 && obstacle2[Z].x <= 464 && obstacle2[Z].y >= 192 && obstacle2[Z].y <= 320){
				obstacle2[Z].x = 2000;
				obstacle2[Z].y = 2000;
			}
		}
		for(Z in obstacle3){
			obstacle3[Z].width = 32;
			obstacle3[Z].x = (Math.floor(Math.random() * 18) + 4)*32;
			obstacle3[Z].y = (Math.floor(Math.random() * 12) + 4)*32;
			obstacle3[Z].hp = 3;
			if(obstacle3[Z].x >= 336 && obstacle3[Z].x <= 464 && obstacle3[Z].y >= 192 && obstacle3[Z].y <= 320){
				obstacle3[Z].x = 2000;
				obstacle3[Z].y = 2000;
			}
		}
		planted = true;
	}
	if(STATE == "Jungle" && planted == false){
		for(Z in obstacle1){
			obstacle1[Z].x = (Math.floor(Math.random() * 9) + 2)*64;
			obstacle1[Z].y = (Math.floor(Math.random() * 7) + 2)*64;
			for(A in obstacle1){
				if(obstacle1[Z].x == obstacle1[A].x && obstacle1[Z].y != obstacle1[A].y){
					obstacle1[Z].x = 2000;
					obstacle1[Z].y = 2000;
				}
				if(obstacle1[Z].x >= player.x-64 && obstacle1[Z].x <= player.x+64 && obstacle1[Z].y >= player.y-64 && obstacle1[Z].y <= player.y+64){
					obstacle1[Z].x = 2000;
					obstacle1[Z].y = 2000;
				}
			}
			obstacle1[Z].width = 64;
			obstacle1[Z].hp = 999;
		}
		for(Z in obstacle2){
			obstacle2[Z].x = 2000;
			obstacle2[Z].y = 2000;
		}
		for(Z in obstacle3){
			obstacle3[Z].x = 2000;
			obstacle3[Z].y = 2000;
		}
		planted = true;
	}
}