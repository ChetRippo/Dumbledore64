function SpellShoot(s1, s2, p){
	if(p == player){
		if(s1 != "N/A" && s2 == "N/A"){
			if(s1 == "Fire"){
				fire.shoot();
			}
			else if(s1 == "Ice"){
				ice.shoot();
			}
			else if(s1 == "Earth"){
				earth.shoot();
			}
			else if(s1 == "Lightning"){
				lightning.shoot();
			}
			else if(s1 == "Air"){
				air.shoot();
			}
			else if(s1 == "Mystic"){
				mystic.shoot();
			}
			else if(s1 == "Water"){
				water.shoot();
			}
			else if(s1 == "Dark"){
				dark.shoot();
			}
			else if(s1 == "Light"){
				light.shoot();
			}
		}
		else if(s2 != "N/A" && s1 == "N/A"){
			if(s2 == "Fire"){
				fire.shoot();
			}
			else if(s2 == "Ice"){
				ice.shoot();
			}
			else if(s2 == "Earth"){
				earth.shoot();
			}
			else if(s2 == "Lightning"){
				lightning.shoot();
			}
			else if(s2 == "Air"){
				air.shoot();
			}
			else if(s2 == "Mystic"){
				mystic.shoot();
			}
			else if(s2 == "Water"){
				water.shoot();
			}
			else if(s2 == "Dark"){
				dark.shoot();
			}
			else if(s2 == "Light"){
				light.shoot();
			}
		}
		else{
			if(s1 == "Fire" && s2 == "Fire"){
				fire2.shoot();
			}
			else if((s1 == "Ice" && s2 == "Fire") || (s1 == "Fire" && s2 == "Ice")){
				fireice.shoot();
			}
			else if(s1 == "Ice" && s2 == "Ice"){
				ice2.shoot();
			}
			else if(s1 == "Earth" && s2 == "Earth"){
				earth2.shoot();
			}
			else if((s1 == "Earth" && s2 == "Ice") || (s2 == "Earth" && s1 == "Ice")){
				iceheal.shoot();
			}
			else if((s1 == "Fire" && s2 == "Earth") || (s2 == "Fire" && s1 == "Earth")){
				fireheal.shoot();
			}
			else if(s1 == "Lightning" && s2 == "Lightning"){
				lightning2.shoot();
			}
			else if((s1 == "Fire" && s2 == "Lightning") || (s2 == "Fire" && s1 == "Lightning")){
				firelightning.shoot();
			}
			else if((s1 == "Ice" && s2 == "Lightning") || (s2 == "Ice" && s1 == "Lightning")){
				icelightning.shoot();
			}
			else if((s1 == "Earth" && s2 == "Lightning") || (s2 == "Earth" && s1 == "Lightning")){
				lightningheal.shoot();
			}
			else if(s1 == "Air" && s2 == "Air"){
				air2.shoot();
			}
			else if((s1 == "Air" && s2 == "Fire") || (s2 == "Air" && s1 == "Fire")){
				airfire.shoot();
			}
			else if((s1 == "Air" && s2 == "Ice") || (s2 == "Air" && s1 == "Ice")){
				airice.shoot();
			}
			else if((s1 == "Air" && s2 == "Lightning") || (s2 == "Air" && s1 == "Lightning")){
				airlightning.shoot();
			}
			else if((s1 == "Air" && s2 == "Earth") || (s2 == "Air" && s1 == "Earth")){
				airearth.shoot();
			}
			else if(s1 == "Mystic" && s2 == "Mystic"){
				mystic2.shoot();
			}
			else if((s1 == "Mystic" && s2 == "Earth") || (s2 == "Mystic" && s1 == "Earth")){
				mysticearth.shoot();
			}
			else if((s1 == "Mystic" && s2 == "Fire") || (s2 == "Mystic" && s1 == "Fire")){
				mystic.shoot();
			}
			else if((s1 == "Mystic" && s2 == "Ice") || (s2 == "Mystic" && s1 == "Ice")){
				mystic.shoot();
			}
			else if((s1 == "Mystic" && s2 == "Lightning") || (s2 == "Mystic" && s1 == "Lightning")){
				mystic.shoot();
			}
			else if((s1 == "Mystic" && s2 == "Air") || (s2 == "Mystic" && s1 == "Air")){
				mystic.shoot();
			}
			else if(s1 == "Water" && s2 == "Water"){
				water.shoot();
			}
			else if((s1 == "Water" && s2 == "Earth") || (s2 == "Water" && s1 == "Earth")){
				waterearth.shoot();
			}
			else if((s1 == "Water" && s2 == "Fire") || (s2 == "Water" && s1 == "Fire")){
				waterfire.shoot();
			}
			else if((s1 == "Water" && s2 == "Ice") || (s2 == "Water" && s1 == "Ice")){
				waterfire.shoot();
			}
			else if((s1 == "Water" && s2 == "Lightning") || (s2 == "Water" && s1 == "Lightning")){
				waterlightning.shoot();
			}
			else if((s1 == "Water" && s2 == "Air") || (s2 == "Water" && s1 == "Air")){
				waterair.shoot();
			}
			else if((s1 == "Water" && s2 == "Mystic") || (s2 == "Water" && s1 == "Mystic")){
				mystic.shoot();
			}
			else if(s1 == "Dark" && s2 == "Dark"){
				dark2.shoot();
			}
			else if((s1 == "Dark" && s2 == "Earth") || (s2 == "Dark" && s1 == "Earth")){
				darkearth.shoot();
			}
			else if((s1 == "Dark" && s2 == "Fire") || (s2 == "Dark" && s1 == "Fire")){
				darkfire.shoot();
			}
			else if((s1 == "Dark" && s2 == "Ice") || (s2 == "Dark" && s1 == "Ice")){
				darkice.shoot();
			}
			else if((s1 == "Dark" && s2 == "Lightning") || (s2 == "Dark" && s1 == "Lightning")){
				darklightning.shoot();
			}
			else if((s1 == "Dark" && s2 == "Air") || (s2 == "Dark" && s1 == "Air")){
				darkair.shoot();
			}
			else if((s1 == "Dark" && s2 == "Mystic") || (s2 == "Dark" && s1 == "Mystic")){
				mystic.shoot();
			}
			else if((s1 == "Dark" && s2 == "Water") || (s2 == "Dark" && s1 == "Water")){
				darkwater.shoot();
			}
			else if(s1 == "Light" && s2 == "Light"){
				light2.shoot();
			}
			else if((s1 == "Light" && s2 == "Fire") || (s2 == "Light" && s1 == "Fire")){
				lightfire.shoot();
			}
			else if((s1 == "Light" && s2 == "Ice") || (s2 == "Light" && s1 == "Ice")){
				lightice.shoot();
			}
			else if((s1 == "Light" && s2 == "Earth") || (s2 == "Light" && s1 == "Earth")){
				lightearth.shoot();
			}
			else if((s1 == "Light" && s2 == "Lightning") || (s2 == "Light" && s1 == "Lightning")){
				lightlightning.shoot();
			}
			else if((s1 == "Light" && s2 == "Air") || (s2 == "Light" && s1 == "Air")){
				lightair.shoot();
			}
			else if((s1 == "Light" && s2 == "Mystic") || (s2 == "Light" && s1 == "Mystic")){
				mystic.shoot();
			}
			else if((s1 == "Light" && s2 == "Water") || (s2 == "Light" && s1 == "Water")){
				lightwater.shoot();
			}
			else if((s1 == "Light" && s2 == "Dark") || (s2 == "Light" && s1 == "Dark")){
				lightdark.shoot();
			}
		}
	}
	else{
		/*if(s1 != "N/A" && s2 == "N/A"){
			if(s1 == "Fire"){
				p2fire.shoot();
			}
			if(s1 == "Ice"){
				p2ice.shoot();
			}
			if(s1 == "Earth"){
				p2earth.shoot();
			}
			if(s1 == "Lightning"){
				p2lightning.shoot();
			}
			if(s1 == "Air"){
				p2air.shoot();
			}
			if(s1 == "Mystic"){
				p2mystic.shoot();
			}
			if(s1 == "Water"){
				p2water.shoot();
			}
			if(s1 == "Dark"){
				p2dark.shoot();
			}
			if(s1 == "Light"){
				p2light.shoot();
			}
		}
		else if(s2 != "N/A" && s1 == "N/A"){
			if(s2 == "Fire"){
				p2fire.shoot();
			}
			if(s2 == "Ice"){
				p2ice.shoot();
			}
			if(s2 == "Earth"){
				p2earth.shoot();
			}
			if(s2 == "Lightning"){
				p2lightning.shoot();
			}
			if(s2 == "Air"){
				p2air.shoot();
			}
			if(s2 == "Mystic"){
				p2mystic.shoot();
			}
			if(s2 == "Water"){
				p2water.shoot();
			}
			if(s2 == "Dark"){
				p2dark.shoot();
			}
			if(s2 == "Light"){
				p2light.shoot();
			}
		}
		else{
			if(s1 == "Fire" && s2 == "Fire"){
				p2fire2.shoot();
			}
			if((s1 == "Ice" && s2 == "Fire") || (s1 == "Fire" && s2 == "Ice")){
				p2fireice.shoot();
			}
			if(s1 == "Ice" && s2 == "Ice"){
				p2ice2.shoot();
			}
			if(s1 == "Earth" && s2 == "Earth"){
				p2earth2.shoot();
			}
			if((s1 == "Earth" && s2 == "Ice") || (s2 == "Earth" && s1 == "Ice")){
				p2iceheal.shoot();
			}
			if((s1 == "Fire" && s2 == "Earth") || (s2 == "Fire" && s1 == "Earth")){
				p2fireheal.shoot();
			}
			if(s1 == "Lightning" && s2 == "Lightning"){
				p2lightning2.shoot();
			}
			if((s1 == "Fire" && s2 == "Lightning") || (s2 == "Fire" && s1 == "Lightning")){
				p2firelightning.shoot();
			}
			if((s1 == "Ice" && s2 == "Lightning") || (s2 == "Ice" && s1 == "Lightning")){
				p2icelightning.shoot();
			}
			if((s1 == "Earth" && s2 == "Lightning") || (s2 == "Earth" && s1 == "Lightning")){
				p2lightningheal.shoot();
			}
			if(s1 == "Air" && s2 == "Air"){
				p2air2.shoot();
			}
			if((s1 == "Air" && s2 == "Fire") || (s2 == "Air" && s1 == "Fire")){
				p2airfire.shoot();
			}
			if((s1 == "Air" && s2 == "Ice") || (s2 == "Air" && s1 == "Ice")){
				p2airice.shoot();
			}
			if((s1 == "Air" && s2 == "Lightning") || (s2 == "Air" && s1 == "Lightning")){
				p2airlightning.shoot();
			}
			if((s1 == "Air" && s2 == "Earth") || (s2 == "Air" && s1 == "Earth")){
				p2airearth.shoot();
			}
			if(s1 == "Mystic" && s2 == "Mystic"){
				p2mystic2.shoot();
			}
			if((s1 == "Mystic" && s2 == "Earth") || (s2 == "Mystic" && s1 == "Earth")){
				p2mysticearth.shoot();
			}
			if((s1 == "Mystic" && s2 == "Fire") || (s2 == "Mystic" && s1 == "Fire")){
				p2mystic.shoot();
			}
			if((s1 == "Mystic" && s2 == "Ice") || (s2 == "Mystic" && s1 == "Ice")){
				p2mystic.shoot();
			}
			if((s1 == "Mystic" && s2 == "Lightning") || (s2 == "Mystic" && s1 == "Lightning")){
				p2mystic.shoot();
			}
			if((s1 == "Mystic" && s2 == "Air") || (s2 == "Mystic" && s1 == "Air")){
				p2mystic.shoot();
			}
			if(s1 == "Water" && s2 == "Water"){
				p2water.shoot();
			}
			if((s1 == "Water" && s2 == "Earth") || (s2 == "Water" && s1 == "Earth")){
				p2waterearth.shoot();
			}
			if((s1 == "Water" && s2 == "Fire") || (s2 == "Water" && s1 == "Fire")){
				p2waterfire.shoot();
			}
			if((s1 == "Water" && s2 == "Ice") || (s2 == "Water" && s1 == "Ice")){
				p2waterfire.shoot();
			}
			if((s1 == "Water" && s2 == "Lightning") || (s2 == "Water" && s1 == "Lightning")){
				p2waterlightning.shoot();
			}
			if((s1 == "Water" && s2 == "Air") || (s2 == "Water" && s1 == "Air")){
				p2waterair.shoot();
			}
			if((s1 == "Water" && s2 == "Mystic") || (s2 == "Water" && s1 == "Mystic")){
				p2mystic.shoot();
			}
			if(s1 == "Dark" && s2 == "Dark"){
				p2dark2.shoot();
			}
			if((s1 == "Dark" && s2 == "Earth") || (s2 == "Dark" && s1 == "Earth")){
				p2darkearth.shoot();
			}
			if((s1 == "Dark" && s2 == "Fire") || (s2 == "Dark" && s1 == "Fire")){
				p2darkfire.shoot();
			}
			if((s1 == "Dark" && s2 == "Ice") || (s2 == "Dark" && s1 == "Ice")){
				p2darkice.shoot();
			}
			if((s1 == "Dark" && s2 == "Lightning") || (s2 == "Dark" && s1 == "Lightning")){
				p2darklightning.shoot();
			}
			if((s1 == "Dark" && s2 == "Air") || (s2 == "Dark" && s1 == "Air")){
				p2darkair.shoot();
			}
			if((s1 == "Dark" && s2 == "Mystic") || (s2 == "Dark" && s1 == "Mystic")){
				p2mystic.shoot();
			}
			if((s1 == "Dark" && s2 == "Water") || (s2 == "Dark" && s1 == "Water")){
				p2darkwater.shoot();
			}
			if(s1 == "Light" && s2 == "Light"){
				p2light2.shoot();
			}
			if((s1 == "Light" && s2 == "Fire") || (s2 == "Light" && s1 == "Fire")){
				p2lightfire.shoot();
			}
			if((s1 == "Light" && s2 == "Ice") || (s2 == "Light" && s1 == "Ice")){
				p2lightice.shoot();
			}
			if((s1 == "Light" && s2 == "Earth") || (s2 == "Light" && s1 == "Earth")){
				p2lightearth.shoot();
			}
			if((s1 == "Light" && s2 == "Lightning") || (s2 == "Light" && s1 == "Lightning")){
				p2lightlightning.shoot();
			}
			if((s1 == "Light" && s2 == "Air") || (s2 == "Light" && s1 == "Air")){
				p2lightair.shoot();
			}
			if((s1 == "Light" && s2 == "Mystic") || (s2 == "Light" && s1 == "Mystic")){
				p2mystic.shoot();
			}
			if((s1 == "Light" && s2 == "Water") || (s2 == "Light" && s1 == "Water")){
				p2lightwater.shoot();
			}
			if((s1 == "Light" && s2 == "Dark") || (s2 == "Light" && s1 == "Dark")){
				p2lightdark.shoot();
			}
		}*/
	}
}