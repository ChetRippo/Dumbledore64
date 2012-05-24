//------------------------------------------------- Map -----------------------------------------------------------------------------//
// Obstacle 1: 64 by 128, at 512 352
var obstacle11 = {
	x: 512,
	y: 352,
	width: 32,
	height: 32,
	hp: 3,
	hptimer: 0,
	index: 1,
	growTimer: Math.floor(Math.random() * 60),
	falling: false,
	fallIndex: 1,
	relocated: false,
	board: false,
	LR: "",
	swampBoardindex: 0
};
var obstacle12 = {
	x: 544,
	y: 352,
	width: 32,
	height: 32,
	hp: 3,
	hptimer: 0,
	index: 1,
	growTimer: Math.floor(Math.random() * 60),
	falling: false,
	fallIndex: 1,
	relocated: false,
	board: false,
	LR: "",
	swampBoardindex: 0
};
var obstacle13 = {
	x: 512,
	y: 384,
	width: 32,
	height: 32,
	hp: 3,
	hptimer: 0,
	index: 1,
	growTimer: Math.floor(Math.random() * 60),
	falling: false,
	fallIndex: 1,
	relocated: false,
	board: false,
	LR: "",
	swampBoardindex: 0
};
var obstacle14 = {
	x: 544,
	y: 384,
	width: 32,
	height: 32,
	hp: 3,
	hptimer: 0,
	index: 1,
	growTimer: Math.floor(Math.random() * 60),
	falling: false,
	fallIndex: 1,
	relocated: false,
	board: false,
	LR: "",
	swampBoardindex: 0
};
var obstacle15 = {
	x: 512,
	y: 416,
	width: 32,
	height: 32,
	hp: 3,
	hptimer: 0,
	index: 1,
	growTimer: Math.floor(Math.random() * 60),
	falling: false,
	fallIndex: 1,
	relocated: false,
	board: false,
	LR: "",
	swampBoardindex: 0
};
var obstacle16 = {
	x: 544,
	y: 416,
	width: 32,
	height: 32,
	hp: 3,
	hptimer: 0,
	index: 1,
	growTimer: Math.floor(Math.random() * 60),
	falling: false,
	fallIndex: 1,
	relocated: false,
	board: false,
	LR: "",
	swampBoardindex: 0
};
var obstacle17 = {
	x: 512,
	y: 448,
	width: 32,
	height: 32,
	hp: 3,
	hptimer: 0,
	index: 1,
	growTimer: Math.floor(Math.random() * 60),
	falling: false,
	fallIndex: 1,
	relocated: false,
	board: false,
	LR: "",
	swampBoardindex: 0
};
var obstacle18 = {
	x: 544,
	y: 448,
	width: 32,
	height: 32,
	hp: 3,
	hptimer: 0,
	index: 1,
	growTimer: Math.floor(Math.random() * 60),
	falling: false,
	fallIndex: 1,
	relocated: false,
	board: false,
	LR: "",
	swampBoardindex: 0
};
// Obstacle 2: 128 by 64, at 256 128
var obstacle21 = {
	x: 256,
	y: 128,
	width: 32,
	height: 32,
	hp: 3,
	hptimer: 0,
	index: 1,
	main: 0,
	base: 0,
	cells: 0,
	swampBoardindex: 0
};
var obstacle22 = {
	x: 288,
	y: 128,
	width: 32,
	height: 32,
	hp: 3,
	hptimer: 0,
	index: 1,
	main: 0,
	base: 0,
	cells: 0,
	swampBoardindex: 0
};
var obstacle23 = {
	x: 320,
	y: 128,
	width: 32,
	height: 32,
	hp: 3,
	hptimer: 0,
	index: 1,
	main: 0,
	base: 0,
	cells: 0,
	swampBoardindex: 0
};
var obstacle24 = {
	x: 352,
	y: 128,
	width: 32,
	height: 32,
	hp: 3,
	hptimer: 0,
	index: 1,
	main: 0,
	base: 0,
	cells: 0,
	swampBoardindex: 0
};
// Obstacle 3: 32 by 128, at 704 256
var obstacle31 = {
	x: 704,
	y: 256,
	width: 32,
	height: 32,
	hp: 3,
	hptimer: 0,
	index: 1
};
var obstacle32 = {
	x: 704,
	y: 288,
	width: 32,
	height: 32,
	hp: 3,
	hptimer: 0,
	index: 1
};
var obstacle33 = {
	x: 704,
	y: 320,
	width: 32,
	height: 32,
	hp: 3,
	hptimer: 0,
	index: 1
};
var obstacle34 = {
	x: 704,
	y: 352,
	width: 32,
	height: 32,
	hp: 3,
	hptimer: 0,
	index: 1
};
var vertBoardSpawn = false;
var obstacle1 = {1: obstacle11, 2: obstacle12, 3: obstacle13, 4: obstacle14, 5: obstacle15, 6: obstacle16, 7: obstacle17, 8: obstacle18};
var obstacle2 = {1: obstacle21, 2: obstacle22, 3: obstacle23, 4: obstacle24};
var obstacle3 = {1: obstacle31, 2: obstacle32, 3: obstacle33, 4: obstacle34};
var ObsList = {1: obstacle11, 2: obstacle12, 3: obstacle13, 4: obstacle14, 5: obstacle15, 6: obstacle16, 7: obstacle17, 8: obstacle18,
				9: obstacle21, 10: obstacle22, 11: obstacle23, 12: obstacle24, 13: obstacle31, 14: obstacle32, 15: obstacle33, 16: obstacle34};
var allObs = {1: obstacle1, 2: obstacle2, 3: obstacle3};
function drawObstacle(O){
	for(Z in O){
		if(O[Z].hp > 0){
			if(STATE == 1 && treeFall == 2){
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
			if((STATE == "Jungle" || STATE == "Swamp") && treeFall == 2){
				if(O[Z].falling){
					if(O[Z].fallIndex < 46){
						if(O[Z].LR == "Left"){
							if(FallingTreesL[O[Z].fallIndex] == shakeTR || FallingTreesL[O[Z].fallIndex] == shakeTL){
								ctx.drawImage(FallingTreesL[O[Z].fallIndex], O[Z].x - O[Z].width/2 - 16, O[Z].y - 576);
							}
							else{
								ctx.drawImage(FallingTreesL[O[Z].fallIndex], O[Z].x - 744, O[Z].y - 576);
							}
						}
						else{
							if(FallingTreesR[O[Z].fallIndex] == shakeTR || FallingTreesR[O[Z].fallIndex] == shakeTL){
								ctx.drawImage(FallingTreesR[O[Z].fallIndex], O[Z].x - O[Z].width/2 - 16, O[Z].y - 576);
							}
							else{
								ctx.drawImage(FallingTreesR[O[Z].fallIndex], O[Z].x-40, O[Z].y - 576);
							}
						}
						O[Z].fallIndex++;
						if(O[Z].fallIndex == 46){
							if(O[Z].LR == "Left"){
								if(TreeFallExplosion.onScreen != 1){
									TreeFallExplosion.x = O[Z].x - 384;
									TreeFallExplosion.y = O[Z].y - 32;
									TreeFallExplosion.shoot();
								}
								else if(TreeFallExplosion2.onScreen != 1){
									TreeFallExplosion2.x = O[Z].x - 384;
									TreeFallExplosion2.y = O[Z].y - 32;
									TreeFallExplosion2.shoot();
								}
								else if(TreeFallExplosion3.onScreen != 1){
									TreeFallExplosion3.x = O[Z].x - 384;
									TreeFallExplosion3.y = O[Z].y - 32;
									TreeFallExplosion3.shoot();
								}
								else{
									TreeFallExplosion4.x = O[Z].x - 384;
									TreeFallExplosion4.y = O[Z].y - 32;
									TreeFallExplosion4.shoot();
								}
							}
							else{
								if(TreeFallExplosion.onScreen != 1){
									TreeFallExplosion.x = O[Z].x+320;
									TreeFallExplosion.y = O[Z].y - 32;
									TreeFallExplosion.shoot();
								}
								else if(TreeFallExplosion2.onScreen != 1){
									TreeFallExplosion2.x = O[Z].x+320;
									TreeFallExplosion2.y = O[Z].y - 32;
									TreeFallExplosion2.shoot();
								}
								else if(TreeFallExplosion3.onScreen != 1){
									TreeFallExplosion3.x = O[Z].x+320;
									TreeFallExplosion3.y = O[Z].y - 32;
									TreeFallExplosion3.shoot();
								}
								else{
									TreeFallExplosion4.x = O[Z].x+320;
									TreeFallExplosion4.y = O[Z].y - 32;
									TreeFallExplosion4.shoot();
								}
							}
						}
					}
				}
				else if(STATE == "Jungle"){
					ctx.drawImage(JungleTrees[Math.floor(O[Z].index/2)], O[Z].x - O[Z].width/2 - 16, O[Z].y - 576);
				}
			}
			if((STATE == "Jungle" || STATE == "Swamp") && treeFall == 1){
				if(O[Z].base > 0){
					if(O[Z].swampBoardindex<102){
						O[Z].swampBoardindex++;
					}
					if(O[Z].swampBoardindex == 90){
						fastbeepsHigh.play();
					}
					if(O[Z].swampBoardindex >=90){
						//Vert boardwalk collision detection for corners
						var collided = false;
						for(G in obstacle1){
							if(obstacle1[G].LR == "Right"){
								if(O[Z].x >= obstacle1[G].x-128 && O[Z].x <= obstacle1[G].x+576 && O[Z].y>=obstacle1[G].y-88 && O[Z].y<=obstacle1[G].y-56){
									collided = true;
								}
							}
							else{
								if(O[Z].x <= obstacle1[G].x+64 && O[Z].x >= obstacle1[G].x-640 && O[Z].y>=obstacle1[G].y-88 && O[Z].y<=obstacle1[G].y-56){
									collided = true;
								}
							}
						}
						if(collided){
							ctx.drawImage(SqBoards[Math.floor((O[Z].swampBoardindex-90)/2)], O[Z].x, O[Z].y);
						}
						else{
							ctx.drawImage(vertBoards[Math.floor((O[Z].swampBoardindex-90)/2)], O[Z].x, O[Z].y);
						}
						var collided = false;
						for(G in obstacle1){
							if(obstacle1[G].LR == "Right"){
								if(O[Z].x >= obstacle1[G].x-128 && O[Z].x <= obstacle1[G].x+576 && O[Z].y+64>=obstacle1[G].y-88 && O[Z].y+64<=obstacle1[G].y-56){
									collided = true;
								}
							}
							else{
								if(O[Z].x <= obstacle1[G].x+64 && O[Z].x >= obstacle1[G].x-640 && O[Z].y+64>=obstacle1[G].y-88 && O[Z].y+64<=obstacle1[G].y-56){
									collided = true;
								}
							}
						}
						if(collided){
							ctx.drawImage(SqBoards[Math.floor((O[Z].swampBoardindex-90)/2)], O[Z].x, O[Z].y+64);
						}
						else{
							ctx.drawImage(vertBoards[Math.floor((O[Z].swampBoardindex-90)/2)], O[Z].x, O[Z].y+64);
						}
						if(O[Z].cells > 2){
							var collided = false;
							for(G in obstacle1){
								if(obstacle1[G].LR == "Right"){
									if(O[Z].x >= obstacle1[G].x-128 && O[Z].x <= obstacle1[G].x+576 && O[Z].y+128>=obstacle1[G].y-88 && O[Z].y+128<=obstacle1[G].y-56){
										collided = true;
									}
								}
								else{
									if(O[Z].x <= obstacle1[G].x+64 && O[Z].x >= obstacle1[G].x-640 && O[Z].y+128>=obstacle1[G].y-88 && O[Z].y+128<=obstacle1[G].y-56){
										collided = true;
									}
								}
							}
							if(collided){
								ctx.drawImage(SqBoards[Math.floor((O[Z].swampBoardindex-90)/2)], O[Z].x, O[Z].y+128);
							}
							else{
								ctx.drawImage(vertBoards[Math.floor((O[Z].swampBoardindex-90)/2)], O[Z].x, O[Z].y+128);
							}
						}
						if(O[Z].cells > 3){
							var collided = false;
							for(G in obstacle1){
								if(obstacle1[G].LR == "Right"){
									if(O[Z].x >= obstacle1[G].x-128 && O[Z].x <= obstacle1[G].x+576 && O[Z].y+192>=obstacle1[G].y-88 && O[Z].y+192<=obstacle1[G].y-56){
										collided = true;
									}
								}
								else{
									if(O[Z].x <= obstacle1[G].x+64 && O[Z].x >= obstacle1[G].x-640 && O[Z].y+192>=obstacle1[G].y-88 && O[Z].y+192<=obstacle1[G].y-56){
										collided = true;
									}
								}
							}
							if(collided){
								ctx.drawImage(SqBoards[Math.floor((O[Z].swampBoardindex-90)/2)], O[Z].x, O[Z].y+192);
							}
							else{
								ctx.drawImage(vertBoards[Math.floor((O[Z].swampBoardindex-90)/2)], O[Z].x, O[Z].y+192);
							}
						}
					}
				}
				else if(O[Z].falling && O[Z].fallIndex == 46){
					if(O[Z].board){
						if(O[Z].swampBoardindex<102){
							O[Z].swampBoardindex++;
						}
						//if the verts arent spawned, make them
						if(!vertBoardSpawn){
							vertBoardSpawn = true;
							for(X in obstacle2){
								obstacle2[X].cells = Math.floor(Math.random() * 4) + 2;
								obstacle2[X].main = obstacle1[Math.floor(Math.random() * 8) + 1];
								obstacle2[X].hp = 999999;
								if(obstacle2[X].main.x == 2000){
									obstacle2[X].main = obstacle1[Math.floor(Math.random() * 8) + 1];
								}
								if(obstacle2[X].main.x == 2000){
									obstacle2[X].main = obstacle1[Math.floor(Math.random() * 8) + 1];
								}
								obstacle2[X].width = 64;
								obstacle2[X].height = 64*obstacle2[X].cells;
								obstacle2[X].base = Math.floor(Math.random() * 9) + 2;
								if(obstacle2[X].main.LR == "Right"){
									obstacle2[X].x = obstacle2[X].main.x-128+(64*obstacle2[X].base);
									//rand from 0 to 4
									obstacle2[X].y = (obstacle2[X].main.y-88) - ((Math.floor(Math.random() * obstacle2[X].cells)) * 64);
								}
								else{
									obstacle2[X].x = obstacle2[X].main.x-640+(64*obstacle2[X].base);
									//rand from 0 to 4
									obstacle2[X].y = (obstacle2[X].main.y-88) - ((Math.floor(Math.random() * obstacle2[X].cells)) * 64);
								}
							}
						}
						if(O[Z].swampBoardindex >=90){
							if(O[Z].LR == "Right"){
								O[Z].height = 32;
								ctx.drawImage(horBoards[Math.floor((O[Z].swampBoardindex-90)/2)], O[Z].x+512, O[Z].y-88);
								ctx.drawImage(horBoards[Math.floor((O[Z].swampBoardindex-90)/2)], O[Z].x+448, O[Z].y-88);
								ctx.drawImage(horBoards[Math.floor((O[Z].swampBoardindex-90)/2)], O[Z].x+384, O[Z].y-88);
								ctx.drawImage(horBoards[Math.floor((O[Z].swampBoardindex-90)/2)], O[Z].x+320, O[Z].y-88);
								ctx.drawImage(horBoards[Math.floor((O[Z].swampBoardindex-90)/2)], O[Z].x+256, O[Z].y-88);
								ctx.drawImage(horBoards[Math.floor((O[Z].swampBoardindex-90)/2)], O[Z].x+192, O[Z].y-88);
								ctx.drawImage(horBoards[Math.floor((O[Z].swampBoardindex-90)/2)], O[Z].x+128, O[Z].y-88);
								ctx.drawImage(horBoards[Math.floor((O[Z].swampBoardindex-90)/2)], O[Z].x+64, O[Z].y-88);
								ctx.drawImage(horBoards[Math.floor((O[Z].swampBoardindex-90)/2)], O[Z].x, O[Z].y-88);
								ctx.drawImage(horBoards[Math.floor((O[Z].swampBoardindex-90)/2)], O[Z].x-64, O[Z].y-88);
							}
							else{
								O[Z].height = 32;
								ctx.drawImage(horBoards[Math.floor((O[Z].swampBoardindex-90)/2)], O[Z].x-576, O[Z].y-88);
								ctx.drawImage(horBoards[Math.floor((O[Z].swampBoardindex-90)/2)], O[Z].x-512, O[Z].y-88);
								ctx.drawImage(horBoards[Math.floor((O[Z].swampBoardindex-90)/2)], O[Z].x-448, O[Z].y-88);
								ctx.drawImage(horBoards[Math.floor((O[Z].swampBoardindex-90)/2)], O[Z].x-384, O[Z].y-88);
								ctx.drawImage(horBoards[Math.floor((O[Z].swampBoardindex-90)/2)], O[Z].x-320, O[Z].y-88);
								ctx.drawImage(horBoards[Math.floor((O[Z].swampBoardindex-90)/2)], O[Z].x-256, O[Z].y-88);
								ctx.drawImage(horBoards[Math.floor((O[Z].swampBoardindex-90)/2)], O[Z].x-192, O[Z].y-88);
								ctx.drawImage(horBoards[Math.floor((O[Z].swampBoardindex-90)/2)], O[Z].x-128, O[Z].y-88);
								ctx.drawImage(horBoards[Math.floor((O[Z].swampBoardindex-90)/2)], O[Z].x-64, O[Z].y-88);
								ctx.drawImage(horBoards[Math.floor((O[Z].swampBoardindex-90)/2)], O[Z].x, O[Z].y-88);
							}
						}
					}
					if(!O[Z].board || (STATE == "Swamp" && O[Z].swampBoardindex<60)){
						if(O[Z].LR == "Left"){
							ctx.drawImage(FallingTreesL[O[Z].fallIndex], O[Z].x - 744, O[Z].y - 576);
						}
						else{
							ctx.drawImage(FallingTreesR[O[Z].fallIndex], O[Z].x-40, O[Z].y - 576);
						}
					}
					if(STATE == "Jungle"){
						O[Z].width = -6000;
						O[Z].height = -6000;
					}
					else if(!O[Z].relocated){
						O[Z].width = 576;
						O[Z].height = 64;
						O[Z].relocated = true;
					}
				}
			}
			if(STATE == "Scorched" && treeFall == 2){
				if (O[Z].hptimer/2 != Math.round(O[Z].hptimer/2)){
					ctx.fillStyle = "white";
					ctx.fillRect(O[Z].x - O[Z].width / 2, O[Z].y - O[Z].height / 2, O[Z].width, O[Z].height);
				}
				ctx.drawImage(EnvMeteor[O[Z].index], O[Z].x - O[Z].width/2, O[Z].y - O[Z].height/2, O[Z].width, O[Z].height);
				O[Z].index++;
				if(O[Z].index > 33){
					O[Z].index = 1;
				}
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
		if(STATE != "Jungle" && STATE != "Swamp"){
			Killed.currentTime=0;
			Killed.play();
		}
		O.hp-=1;
		if(O.hp < 0){
			O.hp = 0;
		}
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
				if((obstacle1[Z].x == obstacle1[A].x || obstacle1[Z].y == obstacle1[A].y) && obstacle1[A] != obstacle1[Z]){
					obstacle1[Z].x = (Math.floor(Math.random() * 9) + 2)*64;
					obstacle1[Z].y = (Math.floor(Math.random() * 7) + 2)*64;
					for(B in obstacle1){
						if((obstacle1[Z].x == obstacle1[B].x || obstacle1[Z].y == obstacle1[B].y) && obstacle1[B] != obstacle1[Z]){
							obstacle1[Z].x = 2000;
							obstacle1[Z].y = 2000;
						}
						if(obstacle1[Z].x >= player.x-64 && obstacle1[Z].x <= player.x+64 && obstacle1[Z].y >= player.y-64 && obstacle1[Z].y <= player.y+64){
							obstacle1[Z].x = 2000;
							obstacle1[Z].y = 2000;
						}
					}
				}
				if(obstacle1[Z].x >= player.x-64 && obstacle1[Z].x <= player.x+64 && obstacle1[Z].y >= player.y-64 && obstacle1[Z].y <= player.y+64){
					obstacle1[Z].x = (Math.floor(Math.random() * 9) + 2)*64;
					obstacle1[Z].y = (Math.floor(Math.random() * 7) + 2)*64;
					for(B in obstacle1){
						if((obstacle1[Z].x == obstacle1[B].x || obstacle1[Z].y == obstacle1[B].y) && obstacle1[B] != obstacle1[Z]){
							obstacle1[Z].x = 2000;
							obstacle1[Z].y = 2000;
						}
						if(obstacle1[Z].x >= player.x-64 && obstacle1[Z].x <= player.x+64 && obstacle1[Z].y >= player.y-64 && obstacle1[Z].y <= player.y+64){
							obstacle1[Z].x = 2000;
							obstacle1[Z].y = 2000;
						}
					}
				}
			}
			obstacle1[Z].width = 64;
			obstacle1[Z].hp = 9999;
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
	if(STATE == "Scorched" && planted == false){
		for(Z in obstacle1){
			obstacle1[Z].x = 2000;
			obstacle1[Z].y = 2000;
		}
		for(Z in obstacle2){
			obstacle2[Z].x = 2000;
			obstacle2[Z].y = 2000;
			obstacle2[Z].hp = 5;
			obstacle2[Z].index = Math.floor(Math.random() * 33) + 1;
		}
		for(Z in obstacle3){
			obstacle3[Z].x = 2000;
			obstacle3[Z].y = 2000;
			obstacle3[Z].hp = 5;
			obstacle3[Z].index = Math.floor(Math.random() * 33) + 1;
		}
		planted = true;
	}
}