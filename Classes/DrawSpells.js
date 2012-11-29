//draws all spells that occur in every level in a linear order. darkearth and some others are done separately
function drawSpells(){
	for(B in Bullets){
		drawBullet(Bullets[B]);
		Bulletmove(Bullets[B]);
	}
	for(F in AllFire){
		AllFire[F].draw();
		AllFire[F].move();
	}
	
	light.draw();
	light.Move_AI();
	
	lightfire.draw();
	SummonMovementRand(lightfire);
	
	lightice.draw();
	SummonMovementRand(lightice);
	
	arrow.draw();
	moveArrow(arrow);
	
	for(A in AllLight2){
		AllLightFns(AllLight2[A]);
	}
	for(A in Light2Arrows){
		Light2Arrows[A].draw();
		moveArrow(Light2Arrows[A]);
	}
	
	lightlightning.draw();
	lightlightning.Move_AI();
	
	lightair.draw();
	SummonMovementRand(lightair);
	
	lightwater.draw();
	lightwater.Move_AI();
	movelwBubbles();
	
	lightdark.draw();
	lightdark.Move_AI();
	
	lightearth.draw();
	
	ice.draw();
	ice.move();
	ice.effect();
	ice2.draw();
	ice2.move();
	ice2.effect();
	sIce.draw();
	sIce.move();
	sIce.effect();

	earth.draw();
	earth.move();
	for(R in earth2roots1){
		drawRoots(earth2roots1[R]);
	}
	for(R in earth3roots1){
		drawRoots(earth3roots1[R]);
	}
	earth2rootStrike.draw();
	earth2Move(earth2rootStrike);
	earth2AI(earth2rootStrike);
	earth2rootStrike2.draw();
	earth2Move(earth2rootStrike2);
	earth2AI(earth2rootStrike2);
	earth2rootStrike3.draw();
	earth2Move(earth2rootStrike3);
	earth2AI(earth2rootStrike3);
	earth2rootStrike4.draw();
	earth2Move(earth2rootStrike4);
	earth2AI(earth2rootStrike4);
	earth2rootStrike5.draw();
	earth2Move(earth2rootStrike5);
	earth2AI(earth2rootStrike5);
	earth2rootStrike6.draw();
	earth2Move(earth2rootStrike6);
	earth2AI(earth2rootStrike6);
	earth2rootStrike7.draw();
	earth2Move(earth2rootStrike7);
	earth2AI(earth2rootStrike7);
	earth2rootStrike8.draw();
	earth2Move(earth2rootStrike8);
	earth2AI(earth2rootStrike8);
	earth2.tick();
	//All Tick spells, in mystic class do to imports
	for(T in Ticks){
		Ticks[T].tick();
	}		
	lightning.draw();
	lightning.effect();

	lightning12.draw();
	lightning12.effect();

	lightning2.draw();
	lightning2.effect();

	lightning22.draw();
	lightning22.effect();

	lightning23.draw();
	lightning23.effect();

	firelightning.draw();
	firelightning.effect();

	icelightning.effect();
	for(H in webhoril){
		horilDraw(webhoril[H]);
	}
	for(V in webvertil){
		vertilDraw(webvertil[V]);
	}
	air.draw();
	air.effect();
	air2.draw();
	air2.effect();
	airfire.draw();
	airfire.effect();
	airfire12.draw();
	airfire12.effect();
	airfire13.draw();
	airfire13.effect();
	
	airice.draw();
	airice.effect();
	
	airlightning.draw();
	airlightning.effect();
	
	mystic.move();
	mystic.draw();
	Mice.draw();
	Mice.move();
	Mice2.draw();
	Mice2.move();
	Mice3.draw();
	Mice3.move();
	Mice4.draw();
	Mice4.move();
	mystic2.draw();
	mystic2.move();
	Illusion.draw();
	Illusion.shoot();
	IllusionBlast.draw();
	IllusionBlast.move();
	
	for(W in bubbleRotate){
		bubbleRotate[W].draw();
		bubbleRotate[W].effect();
	}
	for(W in waterFires){
		waterFires[W].draw();
		waterFires[W].effect();
	}
	for(W in WFires){
		WFires[W].draw();
		WFires[W].move();
	}
	for(I in IBubbles){
		IBubbles[I].draw();
		IBubbles[I].move();
	}
	
	waterair.draw();
	for(W in wairParticles){
		wairParticles[W].draw();
		wairParticles[W].onHit();
		HpAi(wairParticles[W]);
		HpMove(wairParticles[W]);
	}
	for(S in darkSpikes){
		spikeDraw(darkSpikes[S]);
		spikeMove(darkSpikes[S]);
	}
	for(S in dark2Spikes){
		spikeDraw(dark2Spikes[S]);
		spikeMove(dark2Spikes[S]);
	}
	for(S in darkfireSpikes){
		spikeDraw(darkfireSpikes[S]);
		firespikeMove(darkfireSpikes[S]);
	}
	for(S in darkfireExplosions){
		darkfireExplosions[S].draw();
		darkfireExplosions[S].move();
	}
	for(S in darkiceSpikes){
		spikeDraw(darkiceSpikes[S]);
		firespikeMove(darkiceSpikes[S]);
	}
	for(S in darkiceEffects){
		darkiceEffects[S].draw();
	}
	for(S in darklightningSpikes){
		spikeDraw(darklightningSpikes[S]);
		firespikeMove(darklightningSpikes[S]);
	}
	for(S in darklightningExplosions){
		darklightningExplosions[S].draw();
		darklightningExplosions[S].move();
	}
	darkwater.draw();
	darkwater.effect();
	
	darkair.draw();
	darkair.effect();
}