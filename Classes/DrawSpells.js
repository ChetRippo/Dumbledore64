//draws all spells that occur in every level in a linear order. darkearth and some others are done separately
function drawSpells(){
	if(STATE != "Tutorial" || Tutorial.shooting){
		for(B in Bullets){
			drawBullet(Bullets[B]);
			Bulletmove(Bullets[B]);
		}
	}else{
		for(B in Bullets){
			Bullets[B].timeLeft = 0;
		}
	}
	
	/*if(player2.x != 9000){
		for(B in p2Bullets){
			drawp2Bullet(p2Bullets[B]);
			p2Bulletmove(p2Bullets[B]);
		}
		for(F in p2AllFire){
			p2AllFire[F].draw();
			p2AllFire[F].move();
		}
		p2light.draw();
		p2light.Move_AI();
		p2arrow.draw();
		moveArrow(p2arrow);
	
		for(A in p2AllLight2){
			p2AllLightFns(p2AllLight2[A]);
		}
		for(A in p2Light2Arrows){
			p2Light2Arrows[A].draw();
			moveArrow(p2Light2Arrows[A]);
		}
		p2lightfire.draw();
		p2SummonMovementRand(p2lightfire);
		p2lightice.draw();
		p2SummonMovementRand(p2lightice);
		p2lightair.draw();
		p2SummonMovementRand(p2lightair);
		p2lightearth.draw();
		p2lightlightning.draw();
		p2lightlightning.Move_AI();
		p2lightwater.draw();
		p2lightwater.Move_AI();
		p2movelwBubbles();
		p2lightdark.draw();
		p2lightdark.Move_AI();
		p2ice.draw();
		p2ice.move();
		p2ice.effect();
		p2ice2.draw();
		p2ice2.move();
		p2ice2.effect();
		p2lightning.draw();
		p2lightning.effect();
		p2lightning12.draw();
		p2lightning12.effect();
		p2lightning2.draw();
		p2lightning2.effect();
		p2lightning22.draw();
		p2lightning22.effect();
		p2lightning23.draw();
		p2lightning23.effect();
		p2firelightning.draw();
		p2firelightning.effect();
		p2earth.draw();
		p2earth.move();
		for(R in p2earth2roots1){
			drawRoots(p2earth2roots1[R]);
		}
		for(R in p2earth3roots1){
			drawRoots(p2earth3roots1[R]);
		}
		p2earth2rootStrike.draw();
		p2earth2Move(p2earth2rootStrike);
		p2earth2AI(p2earth2rootStrike);
		p2earth2rootStrike2.draw();
		p2earth2Move(p2earth2rootStrike2);
		p2earth2AI(p2earth2rootStrike2);
		p2earth2rootStrike3.draw();
		p2earth2Move(p2earth2rootStrike3);
		p2earth2AI(p2earth2rootStrike3);
		p2earth2rootStrike4.draw();
		p2earth2Move(p2earth2rootStrike4);
		p2earth2AI(p2earth2rootStrike4);
		p2earth2rootStrike5.draw();
		p2earth2Move(p2earth2rootStrike5);
		p2earth2AI(p2earth2rootStrike5);
		p2earth2rootStrike6.draw();
		p2earth2Move(p2earth2rootStrike6);
		p2earth2AI(p2earth2rootStrike6);
		p2earth2rootStrike7.draw();
		p2earth2Move(p2earth2rootStrike7);
		p2earth2AI(p2earth2rootStrike7);
		p2earth2rootStrike8.draw();
		p2earth2Move(p2earth2rootStrike8);
		p2earth2AI(p2earth2rootStrike8);
		p2earth2.tick();
	
		p2icelightning.effect();
		for(H in p2webhoril){
			p2horilDraw(p2webhoril[H]);
		}
		for(V in p2webvertil){
			p2vertilDraw(p2webvertil[V]);
		}
		p2air.draw();
		p2air.effect();
		p2air2.draw();
		p2air2.effect();
		p2airfire.draw();
		p2airfire.effect();
		p2airfire12.draw();
		p2airfire12.effect();
		p2airfire13.draw();
		p2airfire13.effect();
		p2airice.draw();
		p2airice.effect();
		p2airlightning.draw();
		p2airlightning.effect();
		p2mystic.move();
		p2mystic.draw();
		p2Mice.draw();
		p2Mice.move();
		p2Mice2.draw();
		p2Mice2.move();
		p2Mice3.draw();
		p2Mice3.move();
		p2Mice4.draw();
		p2Mice4.move();
		p2mystic2.draw();
		p2mystic2.move();
		p2Illusion.draw();
		p2Illusion.shoot();
		p2IllusionBlast.draw();
		p2IllusionBlast.move();
		
		for(W in p2bubbleRotate){
			p2bubbleRotate[W].draw();
			p2bubbleRotate[W].effect();
		}
		for(W in p2waterFires){
			p2waterFires[W].draw();
			p2waterFires[W].effect();
		}
		for(W in p2WFires){
			p2WFires[W].draw();
			p2WFires[W].move();
		}
		for(I in p2IBubbles){
			p2IBubbles[I].draw();
			p2IBubbles[I].move();
		}
		p2waterair.draw();
		for(W in p2wairParticles){
			p2wairParticles[W].draw();
			p2wairParticles[W].onHit();
			p2HpAi(p2wairParticles[W]);
			HpMove(p2wairParticles[W]);
		}
		for(S in p2darkSpikes){
			p2spikeDraw(p2darkSpikes[S]);
			p2spikeMove(p2darkSpikes[S]);
		}
		for(S in p2dark2Spikes){
			p2spikeDraw(p2dark2Spikes[S]);
			p2spikeMove(p2dark2Spikes[S]);
		}
		for(S in p2darkfireSpikes){
			p2spikeDraw(p2darkfireSpikes[S]);
			p2firespikeMove(p2darkfireSpikes[S]);
		}
		for(S in p2darkfireExplosions){
			p2darkfireExplosions[S].draw();
			p2darkfireExplosions[S].move();
		}
		for(S in p2darkiceSpikes){
			p2spikeDraw(p2darkiceSpikes[S]);
			p2firespikeMove(p2darkiceSpikes[S]);
		}
		for(S in p2darkiceEffects){
			p2darkiceEffects[S].draw();
		}
		for(S in p2darklightningSpikes){
			p2spikeDraw(p2darklightningSpikes[S]);
			p2firespikeMove(p2darklightningSpikes[S]);
		}
		for(S in p2darklightningExplosions){
			p2darklightningExplosions[S].draw();
			p2darklightningExplosions[S].move();
		}
		p2darkwater.draw();
		p2darkwater.effect();
		p2darkair.draw();
		p2darkair.effect();
	}*/
	
	for(F in AllFire){
		AllFire[F].draw();
		AllFire[F].move();
	}
	//fireParticles.run();
	
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
	/*sIce.draw();
	sIce.move();
	sIce.effect();*/

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