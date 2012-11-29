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
			if((STATE == 1 || STATE == "Tutorial") && treeFall == 2){
				if (O[Z].hptimer*0.5 != Math.round(O[Z].hptimer*0.5)){
					ctx.fillStyle = "white";
					ctx.fillRect(O[Z].x - O[Z].width * 0.5, O[Z].y - O[Z].height * 0.5, O[Z].width, O[Z].height);
				}
				else{
					if(O[Z].hp == 3){
						ctx.drawImage(Tree, O[Z].x - O[Z].width*0.5, O[Z].y - O[Z].height*0.5);
					}
					else if(O[Z].hp == 2){
						ctx.drawImage(Tree2, O[Z].x - O[Z].width*0.5, O[Z].y - O[Z].height*0.5);
					}
					else if(O[Z].hp == 1){
						ctx.drawImage(Tree3, O[Z].x - O[Z].width*0.5, O[Z].y - O[Z].height*0.5);
					}
				}
			}
			if((STATE == "Jungle" || STATE == "Swamp") && treeFall == 2){
				if(O[Z].falling){
					if(O[Z].fallIndex < 46){
						if(O[Z].LR == "Left"){
							if(FallingTreesL[O[Z].fallIndex] == shakeTR || FallingTreesL[O[Z].fallIndex] == shakeTL){
								ctx.drawImage(FallingTreesL[O[Z].fallIndex], O[Z].x - O[Z].width*0.5 - 16, O[Z].y - 564);
							}
							else{
								ctx.drawImage(FallingTreesL[O[Z].fallIndex], O[Z].x - 760, O[Z].y - 564);
							}
						}
						else{
							if(FallingTreesR[O[Z].fallIndex] == shakeTR || FallingTreesR[O[Z].fallIndex] == shakeTL){
								ctx.drawImage(FallingTreesR[O[Z].fallIndex], O[Z].x - O[Z].width*0.5 - 18, O[Z].y - 564);
							}
							else{
								ctx.drawImage(FallingTreesR[O[Z].fallIndex], O[Z].x-42, O[Z].y - 564);
							}
						}
						if(fogNum == 3 || STATE == "Swamp"){
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
									else if(TreeFallExplosion4.onScreen != 1){
										TreeFallExplosion4.x = O[Z].x - 384;
										TreeFallExplosion4.y = O[Z].y - 32;
										TreeFallExplosion4.shoot();
									}
									else if(TreeFallExplosion5.onScreen != 1){
										TreeFallExplosion5.x = O[Z].x - 384;
										TreeFallExplosion5.y = O[Z].y - 32;
										TreeFallExplosion5.shoot();
									}
									else if(TreeFallExplosion6.onScreen != 1){
										TreeFallExplosion6.x = O[Z].x - 384;
										TreeFallExplosion6.y = O[Z].y - 32;
										TreeFallExplosion6.shoot();
									}
									else if(TreeFallExplosion7.onScreen != 1){
										TreeFallExplosion7.x = O[Z].x - 384;
										TreeFallExplosion7.y = O[Z].y - 32;
										TreeFallExplosion7.shoot();
									}
									else{
										TreeFallExplosion8.x = O[Z].x - 384;
										TreeFallExplosion8.y = O[Z].y - 32;
										TreeFallExplosion8.shoot();
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
									else if(TreeFallExplosion4.onScreen != 1){
										TreeFallExplosion4.x = O[Z].x+320;
										TreeFallExplosion4.y = O[Z].y - 32;
										TreeFallExplosion4.shoot();
									}
									else if(TreeFallExplosion5.onScreen != 1){
										TreeFallExplosion5.x = O[Z].x+320;
										TreeFallExplosion5.y = O[Z].y - 32;
										TreeFallExplosion5.shoot();
									}
									else if(TreeFallExplosion6.onScreen != 1){
										TreeFallExplosion6.x = O[Z].x+320;
										TreeFallExplosion6.y = O[Z].y - 32;
										TreeFallExplosion6.shoot();
									}
									else if(TreeFallExplosion7.onScreen != 1){
										TreeFallExplosion7.x = O[Z].x+320;
										TreeFallExplosion7.y = O[Z].y - 32;
										TreeFallExplosion7.shoot();
									}
									else{
										TreeFallExplosion8.x = O[Z].x+320;
										TreeFallExplosion8.y = O[Z].y - 32;
										TreeFallExplosion8.shoot();
									}
								}
							}
						}
					}
				}
				else if(STATE == "Jungle" && ((O[Z].y >= EnvFog1.y && O[Z].y < EnvFog2.y && fogNum == 1) || (O[Z].y >= EnvFog2.y && O[Z].y < EnvFog3.y && fogNum == 2) || (O[Z].y >= EnvFog3.y && fogNum == 3))){
					//fix dimensions before growth
					if(O[Z].index < 2){
						ctx.drawImage(JungleTrees[Math.floor(O[Z].index*0.5)], O[Z].x - 48, O[Z].y - 556);
						O[Z].height = 8;
						O[Z].width = 16;
					}
					else{
						ctx.drawImage(JungleTrees[Math.floor(O[Z].index*0.5)], O[Z].x - O[Z].width*0.5 - 16, O[Z].y - 564);
						O[Z].height = 32;
						O[Z].width = 72;
					}
					if(O[Z].index == 12){
						ctx.drawImage(Vines, O[Z].x-O[Z].width*0.5 - 32, 0);
					}
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
								O[Z].height = 36;
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
								O[Z].height = 36;
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
							ctx.drawImage(FallingTreesL[O[Z].fallIndex], O[Z].x - 760, O[Z].y - 564);
						}
						else{
							ctx.drawImage(FallingTreesR[O[Z].fallIndex], O[Z].x-42, O[Z].y - 564);
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
				if (O[Z].hptimer*0.5 != Math.round(O[Z].hptimer*0.5)){
					ctx.fillStyle = "white";
					ctx.fillRect(O[Z].x - O[Z].width*0.5 - 16, O[Z].y - O[Z].height*0.5 - 2, 68, 44);
				}
				if(O[Z] == Lamp.target){
					ctx.drawImage(MeteorGlows[Math.ceil(Lamp.glowIndex*0.25)], O[Z].x - O[Z].width*0.5 - 36, O[Z].y - O[Z].height*0.5 - 54);
					Lamp.glowIndex++;
					if(Lamp.glowIndex>16){
						Lamp.glowIndex = 1;
					}
				}
				else{
					ctx.drawImage(Meteorcold, O[Z].x - O[Z].width*0.5 - 16, O[Z].y - O[Z].height*0.5 - 2);
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
		O.hptimer = 0;
		//reset meteors
		if(STATE == "Scorched"){
			var EMeteorFound = false;
			for(E in EMeteors){
				if(EMeteors[E].x == -9000 && EMeteors[E] != EMeteor13 && EMeteors[E] != EMeteor14 && EMeteors[E] != EMeteor15 && EMeteors[E] != EMeteor16){
					var Target = EMeteors[E];
					EMeteorFound = true;
				}
			}
			if(EMeteorFound){
				Target.timer = Math.floor(Math.random() * 90) + 15;
				//dont pick this target for next damaged meteor
				Target.x += 1;
			}
		}
	}
}
function rePlant(){
	if((STATE == 1 || STATE == "Tutorial") && planted == false){
		for(Z in obstacle1){
			obstacle1[Z].width = 32;
			if(STATE == "Tutorial"){
				obstacle1[Z].x = (Math.floor(Math.random() * 16) + 6)*32;
				obstacle1[Z].y = (Math.floor(Math.random() * 7) + 6)*32;
			}
			else{
				obstacle1[Z].x = (Math.floor(Math.random() * 18) + 4)*32;
				obstacle1[Z].y = (Math.floor(Math.random() * 12) + 4)*32;
			}
			obstacle1[Z].hp = 3;
			if(obstacle1[Z].x >= 336 && obstacle1[Z].x <= 464 && obstacle1[Z].y >= 192 && obstacle1[Z].y <= 320){
				obstacle1[Z].x = 2000;
				obstacle1[Z].y = 2000;
			}
		}
		if(STATE == 1){
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
		}
		else{
			for(Z in obstacle2){
				obstacle2[Z].x = 2000;
				obstacle2[Z].y = 2000;
			}
			for(Z in obstacle3){
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
			obstacle1[Z].width = 72;
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
		//place grass
		for(G in tallGrasses){
			tallGrasses[G].x = (Math.floor(Math.random() * 9) + 2)*64;
			tallGrasses[G].y = (Math.floor(Math.random() * 7) + 2)*64;
			for(O in obstacle1){
				if(obstacle1[O].x == tallGrasses[G].x && obstacle1[O].y >= tallGrasses[G].y){
					tallGrasses[G].x = -1000;
					tallGrasses[G].y = -1000;
				}
			}
		}
		planted = true;
	}
	if((STATE == "Scorched" || STATE == "Desert") && planted == false){
		for(Z in obstacle1){
			obstacle1[Z].x = 2000;
			obstacle1[Z].y = 2000;
			obstacle1[Z].hp = 3;
			obstacle1[Z].width = 48;
			obstacle1[Z].height = 24;
		}
		for(Z in obstacle2){
			obstacle2[Z].x = 2000;
			obstacle2[Z].y = 2000;
			obstacle2[Z].hp = 3;
			obstacle2[Z].width = 48;
			obstacle2[Z].height = 24;
		}
		for(Z in obstacle3){
			obstacle3[Z].x = 2000;
			obstacle3[Z].y = 2000;
			obstacle3[Z].hp = 3;
			obstacle3[Z].width = 48;
			obstacle3[Z].height = 24;
		}
		planted = true;
	}
}
//-------------------------------------------------------- Jungle Level Fog ---------------------------------------------------------//
var EnvFog1 = {
	x: -1600,
	y: -104
};
var EnvFog2 = {
	x: -1600,
	y: 154
};
var EnvFog3 = {
	x: -1920,
	y: 416
};
//------------------------------------------------------ Jungle Level Grass ---------------------------------------------------------//
var TGrass1 = {
	x: -1000,
	y: -1000,
	width: 36,
	height: 12
};
var TGrass2 = {
	x: -1000,
	y: -1000,
	width: 36,
	height: 12
};
var TGrass3 = {
	x: -1000,
	y: -1000,
	width: 36,
	height: 12
};
var TGrass4 = {
	x: -1000,
	y: -1000,
	width: 36,
	height: 12
};
var TGrass5 = {
	x: -1000,
	y: -1000,
	width: 36,
	height: 12
};
var TGrass6 = {
	x: -1000,
	y: -1000,
	width: 36,
	height: 12
};
var TGrass7 = {
	x: -1000,
	y: -1000,
	width: 36,
	height: 12
};
var TGrass8 = {
	x: -1000,
	y: -1000,
	width: 36,
	height: 12
};
var TGrass9 = {
	x: -1000,
	y: -1000,
	width: 36,
	height: 12
};
var TGrass10 = {
	x: -1000,
	y: -1000,
	width: 36,
	height: 12
};
var tallGrasses = {1: TGrass1, 2: TGrass2, 3: TGrass3, 4: TGrass4, 5: TGrass5, 6: TGrass6, 7: TGrass7, 8: TGrass8, 9: TGrass9, 10: TGrass10};
//-------------------------------------------------------- Fire Level Steam ---------------------------------------------------------//
var EnvSteam1 = {
	x: -100,
	y: -100,
	cd: -1,
	frame: 1,
	onScreen: 0
};
var EnvSteam2 = {
	x: -100,
	y: -100,
	cd: -1,
	frame: 1,
	onScreen: 0
};
var EnvSteam3 = {
	x: -100,
	y: -100,
	cd: -1,
	frame: 1,
	onScreen: 0
};
//lava stream locations
var SteamSpot1 = {x: 236, y: 104};
var SteamSpot2 = {x: 370, y: 106};
var SteamSpot3 = {x: 514, y: 92};
var SteamSpot4 = {x: 736, y: 112};
var SteamSpot5 = {x: 758, y: 214};
var SteamSpot6 = {x: 584, y: 214};
var SteamSpot7 = {x: 604, y: 190};
var SteamSpot8 = {x: 512, y: 460};
var SteamSpot9 = {x: 380, y: 480};
var SteamSpot10 = {x: 430, y: 414};
var SteamSpot11 = {x: 10, y: 458};
var SteamSpot12 = {x: 122, y: 448};
var Steams = {1: EnvSteam1, 2: EnvSteam2, 3: EnvSteam3};
var SteamPointArray = {1: SteamSpot1, 2: SteamSpot2, 3: SteamSpot3, 4: SteamSpot4, 5: SteamSpot5, 6: SteamSpot6, 7: SteamSpot7,
						8: SteamSpot8, 9: SteamSpot9, 10: SteamSpot10, 11: SteamSpot11, 12: SteamSpot12};
function drawSteam(S){
	if(S.cd > 0){
		S.cd-=1;
	}
	else if(S.cd == 0){
		var location = SteamPointArray[Math.floor(Math.random() * 12) + 1];
		var spawnable = true;
		for(E in Steams){
			if(location.x == Steams[E].x && location.y == Steams[E].y){
				spawnable = false;
			}
		}
		if(spawnable){
			S.onScreen = 1;
			S.x = location.x;
			S.y = location.y;
			S.cd-=1;
			S.frame = 1;
		}
	}
	else if(S.onScreen == 1){
		ctx.drawImage(SteamLoop[Math.ceil(S.frame*0.25)], S.x-36, S.y-48);
		S.frame++;
		if(S.frame > 24){
			S.onScreen = 0;
			S.x = -100;
			S.y = -100;
			S.cd = Math.floor(Math.random() * 15) + 75;
		}
	}
}
//------------------------------------------------------ Desert Level Sandpit -------------------------------------------------------//
var Sandpit1 = {
	x: -9000,
	y: -9000,
	width: 244,
	height: 156,
	frame: 1,
	headFrame: 1,
	onScreen: 0,
	Mummy: false
};
var Sandpit2 = {
	x: -9000,
	y: -9000,
	width: 244,
	height: 156,
	frame: 1,
	headFrame: 1,
	onScreen: 0,
	Mummy: false
};
var Sandpit3 = {
	x: -9000,
	y: -9000,
	width: 244,
	height: 156,
	frame: 1,
	headFrame: 1,
	onScreen: 0,
	Mummy: false
};
var Sandpits = {1: Sandpit1, 2: Sandpit2, 3: Sandpit3};
function drawSandpit(S, Part){
	if(S.onScreen){
		if(Part == "Head"){
			if(S.Mummy && MegaMummy.spawnTimer > 16){
				if(S.frame > 5){
					ctx.drawImage(SandpitHead[Math.ceil(S.headFrame*0.05)], S.x-S.width*0.5, S.y-S.height*0.5);
				}
				else{
					ctx.drawImage(SandpitGlowHead[Math.ceil(S.headFrame*0.05)], S.x-S.width*0.5, S.y-S.height*0.5);
				}
				S.headFrame++;
				if(S.headFrame > 40){
					S.headFrame = 1;
				}
			}
		}
		else{
			ctx.drawImage(SandpitPull[Math.ceil(S.frame*0.5)], S.x-S.width*0.5, S.y-S.height*0.5);
			S.frame++;
			if(S.frame > 10){
				S.frame = 1;
			}
		}
	}
}
var SandStorm = {
	dir: "",
	timeLeft: 0,
	maxtimeLeft: 300,
	onScreen: 0,
	lightIndex: 1,
	darkIndex: 1,
	sandIndex: 1,
	frame: 0,
	y: 12,
	//speck dark light
	draw: function(){
		if(this.timeLeft == this.maxtimeLeft){
			//reset multiplier
			staticm=1;
			for(A in Anubises){
				Anubises[A].x-=9000;
				Anubises[A].y-=9000;
				if(Anubises[A].x + 9000 > player.x){
					Anubises[A].LR = "Left";
					Anubises[A].dir = "A";
				}
				else{
					Anubises[A].LR = "Right";
					Anubises[A].dir = "D";
				}
			}
			for(S in Sandpits){
				Sandpits[S].x = -9000;
				Sandpits[S].y = -9000;
				Sandpits[S].onScreen = 0;
				Sandpits[S].Mummy = false;
			}
			obstacle11.x = Anubis1.x+9000;
			obstacle11.y = Anubis1.y+9000;
			obstacle11.width = Anubis1.width;
			obstacle11.height = Anubis1.height;
			obstacle11.onScreen = 1;
			obstacle12.x = Anubis2.x+9000;
			obstacle12.y = Anubis2.y+9000;
			obstacle12.width = Anubis2.width;
			obstacle12.height = Anubis2.height;
			obstacle12.onScreen = 1;
			for(S in ScorpsArray){
				ScorpsArray[S].movement = false;
				ScorpsArray[S].rollIndex = Math.round(Math.random() * 10)+1;
			}
		}
		if(this.timeLeft > 0){
			this.timeLeft-=1;
		}
		if(this.timeLeft == 1){
			this.onScreen = 0;
			this.frame = 0;
			this.darkIndex = 1;
			this.lightIndex = 1;
			this.sandIndex = 1;
			this.y = 12;
			Anubis1.Statue = false;
			Anubis2.Statue = false;
			Anubis1.x+=9000;
			Anubis1.y+=9000;
			Anubis2.x+=9000;
			Anubis2.y+=9000;
			obstacle11.x = 2000;
			obstacle11.y = 2000;
			obstacle11.onScreen = 0;
			obstacle12.x = 2000;
			obstacle12.y = 2000;
			obstacle12.onScreen = 0;
			for(S in ScorpsArray){
				if(ScorpsArray[S].onScreen){
					ScorpsArray[S].movement = true;
					ScorpsArray[S].respawn = -1;
					ScorpsArray[S].speed = ScorpsArray[S].speed2*2;					
				}
			}
		}
		if(this.onScreen){
			rainsound.play();
			for(A in Anubises){
				Anubises[A].Statue = true;
				Anubises[A].speed = 4;
				Anubises[A].casting = false;
				Anubises[A].dirct = 0;
				Anubises[A].onScreen = 1;
				Anubises[A].hp = 8;
				Anubises[A].movement = false;
				Anubises[A].hptimer = 0;
				Anubises[A].deadIndex = 0;
				Anubises[A].respawn = -1;
				Anubises[A].castIndex = 1;
				Anubises[A].deadIndex = 0;
				Anubises[A].moveTime = 0;
				Anubises[A].waitTime = 0;
			}
			this.frame++;
			//draw sandz
			if(this.frame < 5){
				ctx.globalAlpha = Alpha*0.1;
			}
			else if(this.frame < 10){
				ctx.globalAlpha = Alpha*0.3;
			}
			else if(this.frame < 15){
				ctx.globalAlpha = Alpha*0.5;
			}
			else if(this.frame < 20){
				ctx.globalAlpha = Alpha*0.7;
			}
			else if(this.frame < 29){
				ctx.globalAlpha = Alpha*0.8;
			}
			else{
				if(this.maxtimeLeft - this.frame <= 29){
					if(this.maxtimeLeft - this.frame < 5){
						ctx.globalAlpha = Alpha*0.1;
					}
					else if(this.maxtimeLeft - this.frame < 10){
						ctx.globalAlpha = Alpha*0.3;
					}
					else if(this.maxtimeLeft - this.frame < 15){
						ctx.globalAlpha = Alpha*0.5;
					}
					else if(this.maxtimeLeft - this.frame < 20){
						ctx.globalAlpha = Alpha*0.7;
					}
					else if(this.maxtimeLeft - this.frame <= 29){
						ctx.globalAlpha = Alpha*0.8;
					}
				}
				else{
					ctx.globalAlpha = Alpha;
				}
			}
			if(this.dir == "D"){
				ctx.drawImage(SandStormSpecksR[Math.ceil(this.sandIndex*0.5)], 0, 0);
			}
			else{
				ctx.drawImage(SandStormSpecksL[Math.ceil(this.sandIndex*0.5)], 0, 0);
			}
			this.sandIndex++;
			if(this.sandIndex > 24){
				this.sandIndex = 1;
			}
			//dark
			if(this.frame >= 22 && this.frame < 58){
				if(this.frame < 30){
					ctx.globalAlpha = Alpha*0.1;
					this.y = 10;
				}
				else if(this.frame < 35){
					ctx.globalAlpha = Alpha*0.3;
					this.y = 8;
				}
				else if(this.frame < 40){
					ctx.globalAlpha = Alpha*0.5;
					this.y = 6;
				}
				else if(this.frame < 50){
					ctx.globalAlpha = Alpha*0.6;
					this.y = 4;
				}
				else if(this.frame < 58){
					ctx.globalAlpha = Alpha*0.7;
					this.y = 2;
				}
			}
			else{
				this.y = 0;
				if(this.maxtimeLeft - this.frame <= 29){
					if(this.maxtimeLeft - this.frame < 5){
						ctx.globalAlpha = Alpha*0.1;
					}
					else if(this.maxtimeLeft - this.frame < 10){
						ctx.globalAlpha = Alpha*0.3;
					}
					else if(this.maxtimeLeft - this.frame < 15){
						ctx.globalAlpha = Alpha*0.5;
					}
					else if(this.maxtimeLeft - this.frame < 20){
						ctx.globalAlpha = Alpha*0.6;
					}
					else if(this.maxtimeLeft - this.frame <= 29){
						ctx.globalAlpha = Alpha*0.7;
					}
				}
				else{
					ctx.globalAlpha = Alpha*0.8;
				}
			}
			if(this.dir == "D"){
				ctx.drawImage(SandStormDarkR[Math.ceil(this.darkIndex*0.5)], 0, this.y);
				ctx.drawImage(SandStormLightR[Math.ceil(this.lightIndex*0.5)], 0, this.y);
			}
			else{
				ctx.drawImage(SandStormDarkL[Math.ceil(this.darkIndex*0.5)], 0, this.y);
				ctx.drawImage(SandStormLightL[Math.ceil(this.lightIndex*0.5)], 0, this.y);
			}
			this.darkIndex++;
			this.lightIndex++;
			if(this.darkIndex > 18){
				this.darkIndex = 1;
			}
			if(this.lightIndex > 12){
				this.lightIndex = 1;
			}
			if(this.dir == "A" && player.x > 16){
				player.x-=4;
				for(W in bubbleRotate){
					if(bubbleRotate[W].onScreen == 1){
						bubbleRotate[W].x-=4;
					}
				}
			}
			else if(player.x < 782 && this.dir == "D"){
				player.x+=4;
				for(W in bubbleRotate){
					if(bubbleRotate[W].onScreen == 1){
						bubbleRotate[W].x+=4;
					}
				}
			}
			//move/spawn scorpions
			for(S in ScorpsArray){
				if(ScorpsArray[S].x < 8 && this.dir == "A"){
					ScorpsArray[S].onScreen = 0;
				}
				else if(ScorpsArray[S].x > 792 && this.dir == "D"){
					ScorpsArray[S].onScreen = 0;
				}
				if(ScorpsArray[S].onScreen){
					if(this.dir == "A"){
						ScorpsArray[S].x-=16;
						ScorpsArray[S].dir = "A";
					}
					else{
						ScorpsArray[S].x+=16;
						ScorpsArray[S].dir = "D";
					}
				}
				else{
					ScorpsArray[S].onScreen = 1;
					ScorpsArray[S].y = (Math.round(Math.random() * 14) + 3)*32;
					if(this.dir == "A"){
						ScorpsArray[S].x = 792+Math.round(Math.random() * 12)*32;
					}
					else{
						ScorpsArray[S].x = 8-Math.round(Math.random() * 12)*32;
					}
				}
			}
			ctx.globalAlpha = Alpha;
		}
		else{
			rainsound.currentTime = 0;
			rainsound.pause();
		}
	}
};