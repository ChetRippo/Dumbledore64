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
	hptimer: 0
};
var obstacle12 = {
	x: 544,
	y: 352,
	ox: 544,
	oy: 352,
	width: 32,
	height: 32,
	hp: 3,
	hptimer: 0
};
var obstacle13 = {
	x: 512,
	y: 384,
	ox: 512,
	oy: 384,
	width: 32,
	height: 32,
	hp: 3,
	hptimer: 0
};
var obstacle14 = {
	x: 544,
	y: 384,
	ox: 544,
	oy: 384,
	width: 32,
	height: 32,
	hp: 3,
	hptimer: 0
};
var obstacle15 = {
	x: 512,
	y: 416,
	ox: 512,
	oy: 416,
	width: 32,
	height: 32,
	hp: 3,
	hptimer: 0
};
var obstacle16 = {
	x: 544,
	y: 416,
	ox: 544,
	oy: 416,
	width: 32,
	height: 32,
	hp: 3,
	hptimer: 0
};
var obstacle17 = {
	x: 512,
	y: 448,
	ox: 512,
	oy: 448,
	width: 32,
	height: 32,
	hp: 3,
	hptimer: 0
};
var obstacle18 = {
	x: 544,
	y: 448,
	ox: 544,
	oy: 448,
	width: 32,
	height: 32,
	hp: 3,
	hptimer: 0
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
	hptimer: 0
};
var obstacle22 = {
	x: 288,
	y: 128,
	ox: 288,
	oy: 128,
	width: 32,
	height: 32,
	hp: 3,
	hptimer: 0
};
var obstacle23 = {
	x: 320,
	y: 128,
	ox: 320,
	oy: 128,
	width: 32,
	height: 32,
	hp: 3,
	hptimer: 0
};
var obstacle24 = {
	x: 352,
	y: 128,
	ox: 352,
	oy: 128,
	width: 32,
	height: 32,
	hp: 3,
	hptimer: 0
};
var obstacle25 = {
	x: 256,
	y: 160,
	ox: 256,
	oy: 160,
	width: 32,
	height: 32,
	hp: 3,
	hptimer: 0
};
var obstacle26 = {
	x: 288,
	y: 160,
	ox: 288,
	oy: 160,
	width: 32,
	height: 32,
	hp: 3,
	hptimer: 0
};
var obstacle27 = {
	x: 320,
	y: 160,
	ox: 320,
	oy: 160,
	width: 32,
	height: 32,
	hp: 3,
	hptimer: 0
};
var obstacle28 = {
	x: 352,
	y: 160,
	ox: 352,
	oy: 160,
	width: 32,
	height: 32,
	hp: 3,
	hptimer: 0
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
	hptimer: 0
};
var obstacle32 = {
	x: 704,
	y: 288,
	ox: 704,
	oy: 288,
	width: 32,
	height: 32,
	hp: 3,
	hptimer: 0
};
var obstacle33 = {
	x: 704,
	y: 320,
	ox: 704,
	oy: 320,
	width: 32,
	height: 32,
	hp: 3,
	hptimer: 0
};
var obstacle34 = {
	x: 704,
	y: 352,
	ox: 704,
	oy: 352,
	width: 32,
	height: 32,
	hp: 3,
	hptimer: 0
};
var obstacle1 = {1: obstacle11, 2: obstacle12, 3: obstacle13, 4: obstacle14, 5: obstacle15, 6: obstacle16, 7: obstacle17, 8: obstacle18};
var obstacle2 = {1: obstacle21, 2: obstacle22, 3: obstacle23, 4: obstacle24, 5: obstacle25, 6: obstacle26, 7: obstacle27, 8: obstacle28};
var obstacle3 = {1: obstacle31, 2: obstacle32, 3: obstacle33, 4: obstacle34};
function drawObstacle(O){
	for(Z in O){
		if(O[Z].hp > 0){
			if (O[Z].hptimer/2 != Math.round(O[Z].hptimer/2)){
				ctx.fillStyle = "white";
				ctx.fillRect(O[Z].x - O[Z].width / 2, O[Z].y - O[Z].height / 2, O[Z].width, O[Z].height);
			}
			else{
				ctx.drawImage(Tree, O[Z].x - O[Z].width/2, O[Z].y - O[Z].height/2);
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
		O.hp-=1;
		O.hptimer = 30;
	}
	if(O.hp == 0){
		O.x = 2000;
		O.y = 2000;
	}
}
function rePlant(){
	for(Z in obstacle1){
		obstacle1[Z].x = obstacle1[Z].ox;
		obstacle1[Z].y = obstacle1[Z].oy;
		obstacle1[Z].hp = 3;
	}
	for(Z in obstacle2){
		obstacle2[Z].x = obstacle2[Z].ox;
		obstacle2[Z].y = obstacle2[Z].oy;
		obstacle2[Z].hp = 3;
	}
	for(Z in obstacle3){
		obstacle3[Z].x = obstacle3[Z].ox;
		obstacle3[Z].y = obstacle3[Z].oy;
		obstacle3[Z].hp = 3;
	}
}