//-------------------------------------------------- HUD and Spell Calculation ------------------------------------------------------//
var NASpellList = {'N/A': 'N/A', 'Fire': 'Fire', 'Ice': 'Ice', 'Earth': 'Earth Heal', 'Lightning': 'Lightning', 'Air': 'Dash',
					'Mystic': 'Teleport', 'Water': 'Bubble Ring', 'Dark': 'Traps', 'Light': 'Angel'};
var FireSpellList = {'N/A': 'Fire', 'Fire': 'Inferno', 'Ice': 'Frozen Fireball', 'Earth': 'Fire+Heal', 'Lightning': 'Ragnarok', 'Air': 'Fire Wave',
					'Mystic': 'Explosive Beam', 'Water': 'Explosive Ring', 'Dark': 'Flame Trap', 'Light': 'Fire Elemental'};
var IceSpellList = {'N/A': 'Ice', 'Fire': 'Frozen Fireball', 'Ice': 'Absolute Zero', 'Earth': 'Ice+Heal', 'Lightning': 'Frozen Web', 'Air': 'Maelstrom',
					'Mystic': 'Ice Beam', 'Water': 'Frozen Ring', 'Dark': 'Ice Trap', 'Light': 'Ice Elemental'};
var EarthSpellList = {'N/A': 'Earth Heal', 'Fire': 'Fire+Heal', 'Ice': 'Ice+Heal', 'Earth': 'Synthesis', 'Lightning': 'Lightning+Heal', 'Air': 'Dash+Heal',
					'Mystic': 'Teleport+Heal', 'Water': 'Bubble+Heal', 'Dark': 'Moonlight', 'Light': 'Sunlight'};
var LightningSpellList = {'N/A': 'Lightning', 'Fire': 'Ragnarok', 'Ice': 'Frozen Web', 'Earth': 'Lightning+Heal', 'Lightning': 'Chain Lightning', 'Air': 'Thunderstorm',
					'Mystic': 'Conductive Beam', 'Water': 'Zap Trap', 'Dark': 'Static Field', 'Light': 'Spark Elemental'};
var AirSpellList = {'N/A': 'Dash', 'Fire': 'Fire Wave', 'Ice': 'Maelstrom', 'Earth': 'Dash+Heal', 'Lightning': 'Thunderstorm', 'Air': 'Twister',
					'Mystic': 'Homing Beam', 'Water': 'Bubble Blast', 'Dark': 'Boosters', 'Light': 'Air Elemental'};
var MysticSpellList = {'N/A': 'Teleport', 'Fire': 'Explosive Beam', 'Ice': 'Ice Beam', 'Earth': 'Teleport+Heal', 'Lightning': 'Conductive Beam', 'Air': 'Homing Beam',
					'Mystic': 'Mirage', 'Water': 'Bubblebeam', 'Dark': 'Piercing Beam', 'Light': 'Light Beam'};
var WaterSpellList = {'N/A': 'Bubble Ring', 'Fire': 'Explosive Ring', 'Ice': 'Frozen Ring', 'Earth': 'Bubble+Heal', 'Lightning': 'Zap Trap', 'Air': 'Bubble Blast',
					'Mystic': 'Bubblebeam', 'Water': 'Max Bubble Ring', 'Dark': 'Shadow Cloak', 'Light': 'Water Elemental'};
var DarkSpellList = {'N/A': 'Traps', 'Fire': 'Flame Trap', 'Ice': 'Ice Trap', 'Earth': 'Moonlight', 'Lightning': 'Static Field', 'Air': 'Boosters',
					'Mystic': 'Piercing Beam', 'Water': 'Shadow Cloak', 'Dark': 'Deathbound', 'Light': 'Fallen Angel'};
var LightSpellList = {'N/A': 'Angel', 'Fire': 'Fire Elemental', 'Ice': 'Ice Elemental', 'Earth': 'Sunlight', 'Lightning': 'Spark Elemental', 'Air': 'Air Elemental',
					'Mystic': 'Light Beam', 'Water': 'Water Elemental', 'Dark': 'Fallen Angel', 'Light': 'Army of God'};
var SpellList = {'Fire': FireSpellList, 'Ice': IceSpellList, 'Lightning': LightningSpellList, 'Earth': EarthSpellList, 'Air': AirSpellList, 'Water': WaterSpellList,
				'Mystic': MysticSpellList, 'Dark': DarkSpellList, 'Light': LightSpellList, 'N/A': NASpellList};
					
//handle shadow cloak
function UI(){
	if(STATE != "Tutorial" || Tutorial.staff){
		if(Tutorial.staff && Tutorial.barIndex < 8){
			ctx.drawImage(TutorialSheet, 580*Math.floor(Tutorial.barIndex*0.5), 908, 580, 116, 8, 452, 580, 116);
			Tutorial.barIndex++;
		}else{
			if(player.x < 588 && player.y > 506){
				ctx.globalAlpha = 0.1*Alpha;
			}
			else{
				ctx.globalAlpha = 1;
			}
			ctx.drawImage(eleSlots, 0, 0);
			if(spell == "Earth Heal" || spell == "Lightning" || spell == "Synthesis" || spell == "Fire+Heal" ||
				spell == "Ice+Heal" || spell == "Chain Lightning" || spell == "Lightning+Heal" || spell == "Ragnarok" ||
				spell == "Maelstrom" || spell == "Dash+Heal" || spell == "Bubble+Heal" || spell == "Deathbound" || spell == "Cloak Charge" ||
				spell == "Shadow Cloak" || spell == "Sunlight"){
				ctx.drawImage(CastRings, 0, 0);
			}
			//Calculate spell
			spell = SpellList[spell1][spell2];
			if(!spell){
				console.log('spell calculation error');
			}
			if(spell == 'Shadow Cloak' && darkwater.onScreen){
				spell = 'Cloak Charge';
			}
			if(spell1 == "Fire"){
				spell1pic = FireSlot;
			}
			else if(spell1 == "Ice"){
				spell1pic = IceSlot;
			}
			else if(spell1 == "Earth"){
				spell1pic = EarthSlot;
			}
			else if(spell1 == "Lightning"){
				spell1pic = ThunderSlot;
			}
			else if(spell1 == "Air"){
				spell1pic = WindSlot;
			}
			else if(spell1 == "Mystic"){
				spell1pic = MysticSlot;
			}
			else if(spell1 == "Water"){
				spell1pic = WaterSlot;
			}
			else if(spell1 == "Dark"){
				spell1pic = DarkSlot;
			}
			else if(spell1 == "Light"){
				spell1pic = LightSlot;
			}	
			else{
				spell1pic = "N/A";
			}
			if(spell2 == "Fire"){
				spell2pic = FireSlot;
			}
			else if(spell2 == "Ice"){
				spell2pic = IceSlot;
			}
			else if(spell2 == "Earth"){
				spell2pic = EarthSlot;
			}
			else if(spell2 == "Lightning"){
				spell2pic = ThunderSlot;
			}
			else if(spell2 == "Air"){
				spell2pic = WindSlot;
			}
			else if(spell2 == "Mystic"){
				spell2pic = MysticSlot;
			}
			else if(spell2 == "Water"){
				spell2pic = WaterSlot;
			}
			else if(spell2 == "Dark"){
				spell2pic = DarkSlot;
			}
			else if(spell2 == "Light"){
				spell2pic = LightSlot;
			}
			else{
				spell2pic = "N/A";
			}
			// Text
			for(P in pickup_particles){
				if(pickup_particles[P].onScreen && pickup_particles[P].num == 1){
					spell1pic = "N/A";
				}else if(pickup_particles[P].onScreen && pickup_particles[P].num == 2){
					spell2pic = "N/A";
				}
			}
			if(spell1pic != "N/A"){
				ctx.drawImage(spell1pic, 20, 464);
			}
			if(spell2pic != "N/A"){
				ctx.drawImage(spell2pic, 72, 504);
			}
			// Recharge - width is hard coded as ender
			if(spell == "Fire"){
				var ender = 110;
				ctx.fillStyle = emptyColor;
				ctx.fillRect(138, 518, ender, 22);
				if(fire.cd <= 0){
					ctx.fillStyle = fullColor;
					ctx.fillRect(138, 518, ender, 22);
				}
				else{
					ctx.fillStyle = chargeColor;
					ctx.fillRect(138, 518, (ender*(fire.cdTop-fire.cd))/fire.cdTop, 22);
				}
				ctx.drawImage(SpellUISheet, 800, 0, 800, 576, 0, 0, 800, 576);
			}
			else if(spell == "Inferno"){
				var ender = 198;
				ctx.fillStyle = emptyColor;
				ctx.fillRect(138, 518, ender, 22);
				if(fire2.cd <= 0){
					ctx.fillStyle = fullColor;
					ctx.fillRect(138, 518, ender, 22);
				}
				else{
					ctx.fillStyle = chargeColor;
					ctx.fillRect(138, 518, (ender*(fire2.cdTop-fire2.cd))/fire2.cdTop, 22);
				}
				ctx.drawImage(SpellUISheet, 1600, 0, 800, 576, 0, 0, 800, 576);
			}
			else if(spell == "Frozen Fireball"){
				var ender = 422;
				ctx.fillStyle = emptyColor;
				ctx.fillRect(138, 518, ender, 22);
				if(fireice.cd <= 0 || fireice2.cd <= 0){
					ctx.fillStyle = fullColor;
					ctx.fillRect(138, 518, ender, 22);
				}
				else{
					ctx.fillStyle = chargeColor;
					ctx.fillRect(138, 518, (ender*(fireice.cdTop-fireice.cd))/fireice.cdTop, 22);
				}
				ctx.drawImage(SpellUISheet, 4000, 1, 800, 576, 0, 0, 800, 576);
			}
			else if(spell == "Ice"){
				var ender = 82;
				ctx.fillStyle = emptyColor;
				ctx.fillRect(138, 518, ender, 22);
				if(ice.cd <= 0){
					ctx.fillStyle = fullColor;
					ctx.fillRect(138, 518, ender, 22);
				}
				else{
					ctx.fillStyle = chargeColor;
					ctx.fillRect(138, 518, (ender*(ice.cdTop-ice.cd))/ice.cdTop, 22);
				}
				ctx.drawImage(SpellUISheet, 2400, 1, 800, 576, 0, 0, 800, 576);
			}
			else if(spell == "Absolute Zero"){
				var ender = 366;
				ctx.fillStyle = emptyColor;
				ctx.fillRect(138, 518, ender, 22);
				if(ice2.cd <= 0){
					ctx.fillStyle = fullColor;
					ctx.fillRect(138, 518, ender, 22);
				}
				else{
					ctx.fillStyle = chargeColor;
					ctx.fillRect(138, 518, (ender*(ice2.cdTop-ice2.cd))/ice2.cdTop, 22);
				}
				ctx.drawImage(SpellUISheet, 3200, 1, 800, 576, 0, 0, 800, 576);
			}
			else if(spell == "Earth Heal"){
				var ender = 282;
				ctx.fillStyle = emptyColor;
				ctx.fillRect(138, 518, ender, 22);
				if(earth.cd <= 0){
					ctx.fillStyle = fullColor;
					ctx.fillRect(138, 518, ender, 22);
				}
				else{
					ctx.fillStyle = chargeColor;
					ctx.fillRect(138, 518, (ender*(earth.cdTop-earth.cd))/earth.cdTop, 22);
				}
				ctx.drawImage(SpellUISheet, 4800, 1, 800, 576, 0, 0, 800, 576);
			}
			else if(spell == "Synthesis"){
				var ender = 254;
				ctx.fillStyle = emptyColor;
				ctx.fillRect(138, 518, ender, 22);
				if(earth2.cd <= 0){
					ctx.fillStyle = fullColor;
					ctx.fillRect(138, 518, ender, 22);
				}
				else{
					ctx.fillStyle = chargeColor;
					ctx.fillRect(138, 518, (ender*(earth2.cdTop-earth2.cd))/earth2.cdTop, 22);
				}
				ctx.drawImage(SpellUISheet, 1, 576, 800, 576, 0, 0, 800, 576);
			}
			else if(spell == "Fire+Heal"){
				var ender = 254;
				ctx.fillStyle = emptyColor;
				ctx.fillRect(138, 518, ender, 22);
				if(fireheal.cd <= 0){
					ctx.fillStyle = fullColor;
					ctx.fillRect(138, 518, ender, 22);
				}
				else{
					ctx.fillStyle = chargeColor;
					ctx.fillRect(138, 518, (ender*(fireheal.cdTop-fireheal.cd))/fireheal.cdTop, 22);
				}
				ctx.drawImage(SpellUISheet, 800, 576, 800, 576, 0, 0, 800, 576);
			}
			else if(spell == "Ice+Heal"){
				var ender = 230;
				ctx.fillStyle = emptyColor;
				ctx.fillRect(138, 518, ender, 22);
				if(iceheal.cd <= 0){
					ctx.fillStyle = fullColor;
					ctx.fillRect(138, 518, ender, 22);
				}
				else{
					ctx.fillStyle = chargeColor;
					ctx.fillRect(138, 518, (ender*(iceheal.cdTop-iceheal.cd))/iceheal.cdTop, 22);
				}
				ctx.drawImage(SpellUISheet, 1600, 576, 800, 576, 0, 0, 800, 576);
			}
			else if(spell == "Lightning"){
				var ender = 254;
				ctx.fillStyle = emptyColor;
				ctx.fillRect(138, 518, ender, 22);
				if(lightning.cd <= 0){
					ctx.fillStyle = fullColor;
					ctx.fillRect(138, 518, ender, 22);
				}
				else{
					ctx.fillStyle = chargeColor;
					ctx.fillRect(138, 518, (ender*(lightning.cdTop-lightning.cd))/lightning.cdTop, 22);
				}
				ctx.drawImage(SpellUISheet, 2400, 576, 800, 576, 0, 0, 800, 576);
			}
			else if(spell == "Chain Lightning"){
				var ender = 422;
				ctx.fillStyle = emptyColor;
				ctx.fillRect(138, 518, ender, 22);
				if(lightning2.cd <= 0){
					ctx.fillStyle = fullColor;
					ctx.fillRect(138, 518, ender, 22);
				}
				else{
					ctx.fillStyle = chargeColor;
					ctx.fillRect(138, 518, (ender*(lightning2.cdTop-lightning2.cd))/lightning2.cdTop, 22);
				}
				ctx.drawImage(SpellUISheet, 3200, 576, 800, 576, 0, 0, 800, 576);
			}
			else if(spell == "Frozen Web"){
				var ender = 286;
				ctx.fillStyle = emptyColor;
				ctx.fillRect(138, 518, ender, 22);
				if(icelightning.cd <= 0){
					ctx.fillStyle = fullColor;
					ctx.fillRect(138, 518, ender, 22);
				}
				else{
					ctx.fillStyle = chargeColor;
					ctx.fillRect(138, 518, (ender*(icelightning.cdTop-icelightning.cd))/icelightning.cdTop, 22);
				}
				ctx.drawImage(SpellUISheet, 4800, 576, 800, 576, 0, 0, 800, 576);
			}
			else if(spell == "Ragnarok"){
				var ender = 228;
				ctx.fillStyle = emptyColor;
				ctx.fillRect(138, 518, ender, 22);
				if(firelightning.cd <= 0){
					ctx.fillStyle = fullColor;
					ctx.fillRect(138, 518, ender, 22);
				}
				else{
					ctx.fillStyle = chargeColor;
					ctx.fillRect(138, 518, (ender*(firelightning.cdTop-firelightning.cd))/firelightning.cdTop, 22);
				}
				ctx.drawImage(SpellUISheet, 4000, 576, 800, 576, 0, 0, 800, 576);
			}
			else if(spell == "Lightning+Heal"){
				var ender = 396;
				ctx.fillStyle = emptyColor;
				ctx.fillRect(138, 518, ender, 22);
				if(lightningheal.cd <= 0){
					ctx.fillStyle = fullColor;
					ctx.fillRect(138, 518, ender, 22);
				}
				else{
					ctx.fillStyle = chargeColor;
					ctx.fillRect(138, 518, (ender*(lightningheal.cdTop-lightningheal.cd))/lightningheal.cdTop, 22);
				}
				ctx.drawImage(SpellUISheet, 1, 1152, 800, 576, 0, 0, 800, 576);
			}
			else if(spell == "Dash"){
				var ender = 110;
				ctx.fillStyle = emptyColor;
				ctx.fillRect(138, 518, ender, 22);
				if(air.cd <= 0){
					ctx.fillStyle = fullColor;
					ctx.fillRect(138, 518, ender, 22);
				}
				else{
					ctx.fillStyle = chargeColor;
					ctx.fillRect(138, 518, (ender*(air.cdTop-air.cd))/air.cdTop, 22);
				}
				ctx.drawImage(SpellUISheet, 800, 1152, 800, 576, 0, 0, 800, 576);
			}
			else if(spell == "Twister"){
				var ender = 198;
				ctx.fillStyle = emptyColor;
				ctx.fillRect(138, 518, ender, 22);
				if(air2.cd <= 0){
					ctx.fillStyle = fullColor;
					ctx.fillRect(138, 518, ender, 22);
				}
				else{
					ctx.fillStyle = chargeColor;
					ctx.fillRect(138, 518, (ender*(air2.cdTop-air2.cd))/air2.cdTop, 22);
				}
				ctx.drawImage(SpellUISheet, 1600, 1152, 800, 576, 0, 0, 800, 576);
			}
			else if(spell == "Fire Wave"){
				var ender = 258;
				ctx.fillStyle = emptyColor;
				ctx.fillRect(138, 518, ender, 22);
				if(airfire.cd <= 0){
					ctx.fillStyle = fullColor;
					ctx.fillRect(138, 518, ender, 22);
				}
				else{
					ctx.fillStyle = chargeColor;
					ctx.fillRect(138, 518, (ender*(airfire.cdTop-airfire.cd))/airfire.cdTop, 22);
				}
				ctx.drawImage(SpellUISheet, 2400, 1152, 800, 576, 0, 0, 800, 576);
			}
			else if(spell == "Maelstrom"){
				var ender = 262;
				ctx.fillStyle = emptyColor;
				ctx.fillRect(138, 518, ender, 22);
				if(airice.cd <= 0){
					ctx.fillStyle = fullColor;
					ctx.fillRect(138, 518, ender, 22);
				}
				else{
					ctx.fillStyle = chargeColor;
					ctx.fillRect(138, 518, (ender*(airice.cdTop-airice.cd))/airice.cdTop, 22);
				}
				ctx.drawImage(SpellUISheet, 3200, 1152, 800, 576, 0, 0, 800, 576);
			}
			else if(spell == "Dash+Heal"){
				var ender = 254;
				ctx.fillStyle = emptyColor;
				ctx.fillRect(138, 518, ender, 22);
				if(airearth.cd <= 0){
					ctx.fillStyle = fullColor;
					ctx.fillRect(138, 518, ender, 22);
				}
				else{
					ctx.fillStyle = chargeColor;
					ctx.fillRect(138, 518, (ender*(airearth.cdTop-airearth.cd))/airearth.cdTop, 22);
				}
				ctx.drawImage(SpellUISheet, 4000, 1152, 800, 576, 0, 0, 800, 576);
			}
			else if(spell == "Thunderstorm"){
				var ender = 342;
				ctx.fillStyle = emptyColor;
				ctx.fillRect(138, 518, ender, 22);
				if(airlightning.cd <= 0){
					ctx.fillStyle = fullColor;
					ctx.fillRect(138, 518, ender, 22);
				}
				else{
					ctx.fillStyle = chargeColor;
					ctx.fillRect(138, 518, (ender*(airlightning.cdTop-airlightning.cd))/airlightning.cdTop, 22);
				}
				ctx.drawImage(SpellUISheet, 4800, 1152, 800, 576, 0, 0, 800, 576);
			}
			else if(spell == "Teleport"){
				var ender = 228;
				ctx.fillStyle = emptyColor;
				ctx.fillRect(138, 518, ender, 22);
				if(mystic.cd <= 0){
					ctx.fillStyle = fullColor;
					ctx.fillRect(138, 518, ender, 22);
				}
				else{
					ctx.fillStyle = chargeColor;
					ctx.fillRect(138, 518, (ender*(mystic.cdTop-mystic.cd))/mystic.cdTop, 22);
				}
				ctx.drawImage(SpellUISheet, 1, 1728, 800, 576, 0, 0, 800, 576);
			}
			else if(spell == "Mirage"){
				var ender = 170;
				ctx.fillStyle = emptyColor;
				ctx.fillRect(138, 518, ender, 22);
				if(mystic2.cd <= 0){
					ctx.fillStyle = fullColor;
					ctx.fillRect(138, 518, ender, 22);
				}
				else{
					ctx.fillStyle = chargeColor;
					ctx.fillRect(138, 518, (ender*(mystic2.cdTop-mystic2.cd))/mystic2.cdTop, 22);
				}
				ctx.drawImage(SpellUISheet, 800, 1728, 800, 576, 0, 0, 800, 576);
			}
			else if(spell == "Teleport+Heal"){
				var ender = 366;
				ctx.fillStyle = emptyColor;
				ctx.fillRect(138, 518, ender, 22);
				if(mysticearth.cd <= 0){
					ctx.fillStyle = fullColor;
					ctx.fillRect(138, 518, ender, 22);
				}
				else{
					ctx.fillStyle = chargeColor;
					ctx.fillRect(138, 518, (ender*(mysticearth.cdTop-mysticearth.cd))/mysticearth.cdTop, 22);
				}
				ctx.drawImage(SpellUISheet, 3200, 1728, 800, 576, 0, 0, 800, 576);
			}
			else if(spell == "Explosive Beam"){
				var ender = 398;
				ctx.fillStyle = emptyColor;
				ctx.fillRect(138, 518, ender, 22);
				if(mystic.cd <= 0){
					ctx.fillStyle = fullColor;
					ctx.fillRect(138, 518, ender, 22);
				}
				else{
					ctx.fillStyle = chargeColor;
					ctx.fillRect(138, 518, (ender*(mystic.cdTop-mystic.cd))/mystic.cdTop, 22);
				}
				ctx.drawImage(SpellUISheet, 1600, 1728, 800, 576, 0, 0, 800, 576);
			}
			else if(spell == "Ice Beam"){
				var ender = 230;
				ctx.fillStyle = emptyColor;
				ctx.fillRect(138, 518, ender, 22);
				if(mystic.cd <= 0){
					ctx.fillStyle = fullColor;
					ctx.fillRect(138, 518, ender, 22);
				}
				else{
					ctx.fillStyle = chargeColor;
					ctx.fillRect(138, 518, (ender*(mystic.cdTop-mystic.cd))/mystic.cdTop, 22);
				}
				ctx.drawImage(SpellUISheet, 2400, 1728, 800, 576, 0, 0, 800, 576);
			}
			else if(spell == "Conductive Beam"){
				var ender = 426;
				ctx.fillStyle = emptyColor;
				ctx.fillRect(138, 518, ender, 22);
				if(mystic.cd <= 0){
					ctx.fillStyle = fullColor;
					ctx.fillRect(138, 518, ender, 22);
				}
				else{
					ctx.fillStyle = chargeColor;
					ctx.fillRect(138, 518, (ender*(mystic.cdTop-mystic.cd))/mystic.cdTop, 22);
				}
				ctx.drawImage(SpellUISheet, 4000, 1728, 800, 576, 0, 0, 800, 576);
			}
			else if(spell == "Homing Beam"){
				var ender = 318;
				ctx.fillStyle = emptyColor;
				ctx.fillRect(138, 518, ender, 22);
				if(mystic.cd <= 0){
					ctx.fillStyle = fullColor;
					ctx.fillRect(138, 518, ender, 22);
				}
				else{
					ctx.fillStyle = chargeColor;
					ctx.fillRect(138, 518, (ender*(mystic.cdTop-mystic.cd))/mystic.cdTop, 22);
				}
				ctx.drawImage(SpellUISheet, 4800, 1728, 800, 576, 0, 0, 800, 576);
			}
			else if(spell == "Bubble Ring"){
				var ender = 310;
				ctx.fillStyle = emptyColor;
				ctx.fillRect(138, 518, ender, 22);
				if(water.cd <= 0){
					ctx.fillStyle = fullColor;
					ctx.fillRect(138, 518, ender, 22);
				}
				else{
					ctx.fillStyle = chargeColor;
					ctx.fillRect(138, 518, (ender*(water.cdTop-water.cd))/water.cdTop, 22);
				}
				ctx.drawImage(SpellUISheet, 1, 2304, 800, 576, 0, 0, 800, 576);
			}
			else if(spell == "Max Bubble Ring"){
				var ender = 426;
				ctx.fillStyle = emptyColor;
				ctx.fillRect(138, 518, ender, 22);
				if(water.cd2 <= 0){
					ctx.fillStyle = fullColor;
					ctx.fillRect(138, 518, ender, 22);
				}
				else{
					ctx.fillStyle = chargeColor;
					ctx.fillRect(138, 518, (ender*(water.cd2Top-water.cd2))/water.cd2Top, 22);
				}
				ctx.drawImage(SpellUISheet, 800, 2304, 800, 576, 0, 0, 800, 576);
			}
			else if(spell == "Explosive Ring"){
				var ender = 394;
				ctx.fillStyle = emptyColor;
				ctx.fillRect(138, 518, ender, 22);
				if(waterfire.cd <= 0){
					ctx.fillStyle = fullColor;
					ctx.fillRect(138, 518, ender, 22);
				}
				else{
					ctx.fillStyle = chargeColor;
					ctx.fillRect(138, 518, (ender*(waterfire.cdTop-waterfire.cd))/waterfire.cdTop, 22);
				}
				ctx.drawImage(SpellUISheet, 1600, 2304, 800, 576, 0, 0, 800, 576);
			}
			else if(spell == "Frozen Ring"){
				var ender = 310;
				ctx.fillStyle = emptyColor;
				ctx.fillRect(138, 518, ender, 22);
				if(waterfire.cd2 <= 0){
					ctx.fillStyle = fullColor;
					ctx.fillRect(138, 518, ender, 22);
				}
				else{
					ctx.fillStyle = chargeColor;
					ctx.fillRect(138, 518, (ender*(waterfire.cd2Top-waterfire.cd2))/waterfire.cd2Top, 22);
				}
				ctx.drawImage(SpellUISheet, 2400, 2304, 800, 576, 0, 0, 800, 576);
			}
			else if(spell == "Bubble+Heal"){
				var ender = 310;
				ctx.fillStyle = emptyColor;
				ctx.fillRect(138, 518, ender, 22);
				if(waterearth.cd <= 0){
					ctx.fillStyle = fullColor;
					ctx.fillRect(138, 518, ender, 22);
				}
				else{
					ctx.fillStyle = chargeColor;
					ctx.fillRect(138, 518, (ender*(waterearth.cdTop-waterearth.cd))/waterearth.cdTop, 22);
				}
				ctx.drawImage(SpellUISheet, 3200, 2304, 800, 576, 0, 0, 800, 576);
			}
			else if(spell == "Zap Trap"){
				var ender = 226;
				ctx.fillStyle = emptyColor;
				ctx.fillRect(138, 518, ender, 22);
				if(waterlightning.cd <= 0){
					ctx.fillStyle = fullColor;
					ctx.fillRect(138, 518, ender, 22);
				}
				else{
					ctx.fillStyle = chargeColor;
					ctx.fillRect(138, 518, (ender*(waterlightning.cdTop-waterlightning.cd))/waterlightning.cdTop, 22);
				}
				if(waterlightning.inventory > 0){
					ctx.drawImage(TrapHUDs[1], 0, 0);
					if(waterlightning.inventory > 1){
						ctx.drawImage(TrapHUDs[2], 0, 0);
						if(waterlightning.inventory > 2){
							ctx.drawImage(TrapHUDs[3], 0, 0);
						}
					}
				}
				ctx.drawImage(SpellUISheet, 4000, 2304, 800, 576, 0, 0, 800, 576);
			}
			else if(spell == "Bubble Blast"){
				var ender = 338;
				ctx.fillStyle = emptyColor;
				ctx.fillRect(138, 518, ender, 22);
				if(waterair.cd <= 0){
					ctx.fillStyle = fullColor;
					ctx.fillRect(138, 518, ender, 22);
				}
				else{
					ctx.fillStyle = chargeColor;
					ctx.fillRect(138, 518, (ender*(waterair.cdTop-waterair.cd))/waterair.cdTop, 22);
				}
				ctx.drawImage(SpellUISheet, 4800, 2304, 800, 576, 0, 0, 800, 576);
			}
			else if(spell == "Bubblebeam"){
				var ender = 286;
				ctx.fillStyle = emptyColor;
				ctx.fillRect(138, 518, ender, 22);
				if(mystic.cd <= 0){
					ctx.fillStyle = fullColor;
					ctx.fillRect(138, 518, ender, 22);
				}
				else{
					ctx.fillStyle = chargeColor;
					ctx.fillRect(138, 518, (ender*(mystic.cdTop-mystic.cd))/mystic.cdTop, 22);
				}
				ctx.drawImage(SpellUISheet, 1, 2880, 800, 576, 0, 0, 800, 576);
			}
			else if(spell == "Traps"){
				var ender = 138;
				ctx.fillStyle = emptyColor;
				ctx.fillRect(138, 518, ender, 22);
				if(dark.cd <= 0){
					ctx.fillStyle = fullColor;
					ctx.fillRect(138, 518, ender, 22);
				}
				else{
					ctx.fillStyle = chargeColor;
					ctx.fillRect(138, 518, (ender*(dark.cdTop-dark.cd))/dark.cdTop, 22);
				}
				ctx.drawImage(SpellUISheet, 800, 2880, 800, 576, 0, 0, 800, 576);
				if(dark.inventory > 0){
					ctx.drawImage(TrapHUDs[1], 0, 0);
					if(dark.inventory > 1){
						ctx.drawImage(TrapHUDs[2], 0, 0);
						if(dark.inventory > 2){
							ctx.drawImage(TrapHUDs[3], 0, 0);
							if(dark.inventory > 3){
								ctx.drawImage(TrapHUDs[4], 0, 0);
								if(dark.inventory > 4){
									ctx.drawImage(TrapHUDs[5], 0, 0);
									if(dark.inventory > 5){
										ctx.drawImage(TrapHUDs[6], 0, 0);
										if(dark.inventory > 6){
											ctx.drawImage(TrapHUDs[7], 0, 0);
										}
									}
								}
							}
						}
					}
				}
			}
			else if(spell == "Deathbound"){
				var ender = 282;
				ctx.fillStyle = emptyColor;
				ctx.fillRect(138, 518, ender, 22);
				if(dark2.cd <= 0){
					ctx.fillStyle = fullColor;
					ctx.fillRect(138, 518, ender, 22);
				}
				else{
					ctx.fillStyle = chargeColor;
					ctx.fillRect(138, 518, (ender*(dark2.cdTop-dark2.cd))/dark2.cdTop, 22);
				}
				ctx.drawImage(SpellUISheet, 1600, 2880, 800, 576, 0, 0, 800, 576);
			}
			else if(spell == "Flame Trap"){
				var ender = 286;
				ctx.fillStyle = emptyColor;
				ctx.fillRect(138, 518, ender, 22);
				if(darkfire.cd <= 0){
					ctx.fillStyle = fullColor;
					ctx.fillRect(138, 518, ender, 22);
				}
				else{
					ctx.fillStyle = chargeColor;
					ctx.fillRect(138, 518, (ender*(darkfire.cdTop-darkfire.cd))/darkfire.cdTop, 22);
				}
				ctx.drawImage(SpellUISheet, 2400, 2880, 800, 576, 0, 0, 800, 576);
				if(darkfire.inventory > 0){
					ctx.drawImage(TrapHUDs[1], 0, 0);
					if(darkfire.inventory > 1){
						ctx.drawImage(TrapHUDs[2], 0, 0);
						if(darkfire.inventory > 2){
							ctx.drawImage(TrapHUDs[3], 0, 0);
							if(darkfire.inventory > 3){
								ctx.drawImage(TrapHUDs[4], 0, 0);
								if(darkfire.inventory > 4){
									ctx.drawImage(TrapHUDs[5], 0, 0);
								}
							}
						}
					}
				}
			}
			else if(spell == "Ice Trap"){
				var ender = 226;
				ctx.fillStyle = emptyColor;
				ctx.fillRect(138, 518, ender, 22);
				if(darkice.cd <= 0){
					ctx.fillStyle = fullColor;
					ctx.fillRect(138, 518, ender, 22);
				}
				else{
					ctx.fillStyle = chargeColor;
					ctx.fillRect(138, 518, (ender*(darkice.cdTop-darkice.cd))/darkice.cdTop, 22);
				}
				ctx.drawImage(SpellUISheet, 3200, 2880, 800, 576, 0, 0, 800, 576);
				if(darkice.inventory > 0){
					ctx.drawImage(TrapHUDs[1], 0, 0);
					if(darkice.inventory > 1){
						ctx.drawImage(TrapHUDs[2], 0, 0);
						if(darkice.inventory > 2){
							ctx.drawImage(TrapHUDs[3], 0, 0);
							if(darkice.inventory > 3){
								ctx.drawImage(TrapHUDs[4], 0, 0);
								if(darkice.inventory > 4){
									ctx.drawImage(TrapHUDs[5], 0, 0);
								}
							}
						}
					}
				}
			}
			else if(spell == "Moonlight"){
				var ender = 258;
				ctx.fillStyle = emptyColor;
				ctx.fillRect(138, 518, ender, 22);
				if(darkearth.cd <= 0){
					ctx.fillStyle = fullColor;
					ctx.fillRect(138, 518, ender, 22);
				}
				else{
					ctx.fillStyle = chargeColor;
					ctx.fillRect(138, 518, (ender*(darkearth.cdTop-darkearth.cd))/darkearth.cdTop, 22);
				}
				ctx.drawImage(SpellUISheet, 4000, 2880, 800, 576, 0, 0, 800, 576);
			}
			else if(spell == "Static Field"){
				var ender = 338;
				ctx.fillStyle = emptyColor;
				ctx.fillRect(138, 518, ender, 22);
				if(darklightning.cd <= 0){
					ctx.fillStyle = fullColor;
					ctx.fillRect(138, 518, ender, 22);
				}
				else{
					ctx.fillStyle = chargeColor;
					ctx.fillRect(138, 518, (ender*(darklightning.cdTop-darklightning.cd))/darklightning.cdTop, 22);
				}
				ctx.drawImage(SpellUISheet, 4800, 2880, 800, 576, 0, 0, 800, 576);
				if(darklightning.inventory > 0){
					ctx.drawImage(TrapHUDs[1], 0, 0);
					if(darklightning.inventory > 1){
						ctx.drawImage(TrapHUDs[2], 0, 0);
					}
				}
			}
			else if(spell == "Boosters"){
				var ender = 226;
				ctx.fillStyle = emptyColor;
				ctx.fillRect(138, 518, ender, 22);
				if(darkair.cd <= 0){
					ctx.fillStyle = fullColor;
					ctx.fillRect(138, 518, ender, 22);
				}
				else{
					ctx.fillStyle = chargeColor;
					ctx.fillRect(138, 518, (ender*(darkair.cdTop-darkair.cd))/darkair.cdTop, 22);
				}
				ctx.drawImage(SpellUISheet, 1, 3456, 800, 576, 0, 0, 800, 576);
				if(darkair.inventory > 0){
					ctx.drawImage(TrapHUDs[1], 0, 0);
					if(darkair.inventory > 1){
						ctx.drawImage(TrapHUDs[2], 0, 0);
						if(darkair.inventory > 2){
							ctx.drawImage(TrapHUDs[3], 0, 0);
							if(darkair.inventory > 3){
								ctx.drawImage(TrapHUDs[4], 0, 0);
								if(darkair.inventory > 4){
									ctx.drawImage(TrapHUDs[5], 0, 0);
								}
							}
						}
					}
				}
			}
			else if(spell == "Piercing Beam"){
				var ender = 370;
				ctx.fillStyle = emptyColor;
				ctx.fillRect(138, 518, ender, 22);
				if(mystic.cd <= 0){
					ctx.fillStyle = fullColor;
					ctx.fillRect(138, 518, ender, 22);
				}
				else{
					ctx.fillStyle = chargeColor;
					ctx.fillRect(138, 518, (ender*(mystic.cdTop-mystic.cd))/mystic.cdTop, 22);
				}
				ctx.drawImage(SpellUISheet, 800, 3456, 800, 576, 0, 0, 800, 576);
			}
			else if(spell == "Shadow Cloak" || spell == "Cloak Charge"){
				if(spell == "Shadow Cloak"){
					var ender = 342;
					ctx.fillStyle = emptyColor;
					ctx.fillRect(138, 518, ender, 22);
					if(darkwater.cd <= 0){
						ctx.fillStyle = fullColor;
						ctx.fillRect(138, 518, ender, 22);
					}
					else{
						ctx.fillStyle = chargeColor;
						ctx.fillRect(138, 518, (ender*(darkwater.cdTop-darkwater.cd))/darkwater.cdTop, 22);
					}
					ctx.drawImage(SpellUISheet, 1600, 3456, 800, 576, 0, 0, 800, 576);
				}
				else{
					var ender = 340;
					ctx.fillStyle = emptyColor;
					ctx.fillRect(138, 518, ender, 22);
					if(darkwater.cd <= 0){
						ctx.fillStyle = fullColor;
						ctx.fillRect(138, 518, ender, 22);
					}
					else{
						ctx.fillStyle = chargeColor;
						ctx.fillRect(138, 518, (ender*(darkwater.cdTop-darkwater.cd))/darkwater.cdTop, 22);
					}
					ctx.drawImage(SpellUISheet, 2400, 3456, 800, 576, 0, 0, 800, 576);
				}
			}
			else if(spell == "Angel"){
				var ender = 142;
				ctx.fillStyle = emptyColor;
				ctx.fillRect(138, 518, ender, 22);
				if(light.cd <= 0){
					ctx.fillStyle = fullColor;
					ctx.fillRect(138, 518, ender, 22);
				}
				else{
					ctx.fillStyle = chargeColor;
					ctx.fillRect(138, 518, (ender*(light.cdTop-light.cd))/light.cdTop, 22);
				}
				ctx.drawImage(SpellUISheet, 3200, 3456, 800, 576, 0, 0, 800, 576);
			}
			else if(spell == "Army of God"){
				var ender = 322;
				ctx.fillStyle = emptyColor;
				ctx.fillRect(138, 518, ender, 22);
				if(light2.cd <= 0){
					ctx.fillStyle = fullColor;
					ctx.fillRect(138, 518, ender, 22);
				}
				else{
					ctx.fillStyle = chargeColor;
					ctx.fillRect(138, 518, (ender*(light2.cdTop-light2.cd))/light2.cdTop, 22);
				}
				ctx.drawImage(SpellUISheet, 4000, 3456, 800, 576, 0, 0, 800, 576);
			}
			else if(spell == "Fire Elemental"){
				var ender = 406;
				ctx.fillStyle = emptyColor;
				ctx.fillRect(138, 518, ender, 22);
				if(lightfire.cd <= 0){
					ctx.fillStyle = fullColor;
					ctx.fillRect(138, 518, ender, 22);
				}
				else{
					ctx.fillStyle = chargeColor;
					ctx.fillRect(138, 518, (ender*(lightfire.cdTop-lightfire.cd))/lightfire.cdTop, 22);
				}
				ctx.drawImage(SpellUISheet, 4800, 3456, 800, 576, 0, 0, 800, 576);
			}
			else if(spell == "Ice Elemental"){
				var ender = 378;
				ctx.fillStyle = emptyColor;
				ctx.fillRect(138, 518, ender, 22);
				if(lightice.cd <= 0){
					ctx.fillStyle = fullColor;
					ctx.fillRect(138, 518, ender, 22);
				}
				else{
					ctx.fillStyle = chargeColor;
					ctx.fillRect(138, 518, (ender*(lightice.cdTop-lightice.cd))/lightice.cdTop, 22);
				}
				ctx.drawImage(SpellUISheet, 1, 4032, 800, 576, 0, 0, 800, 576);
			}
			else if(spell == "Sunlight"){
				var ender = 230;
				ctx.fillStyle = emptyColor;
				ctx.fillRect(138, 518, ender, 22);
				if(lightearth.cd <= 0){
					ctx.fillStyle = fullColor;
					ctx.fillRect(138, 518, ender, 22);
				}
				else{
					ctx.fillStyle = chargeColor;
					ctx.fillRect(138, 518, (ender*(lightearth.cdTop-lightearth.cd))/lightearth.cdTop, 22);
				}
				ctx.drawImage(SpellUISheet, 800, 4032, 800, 576, 0, 0, 800, 576);
			}
			else if(spell == "Spark Elemental"){
				var ender = 438;
				ctx.fillStyle = emptyColor;
				ctx.fillRect(138, 518, ender, 22);
				if(lightlightning.cd <= 0){
					ctx.fillStyle = fullColor;
					ctx.fillRect(138, 518, ender, 22);
				}
				else{
					ctx.fillStyle = chargeColor;
					ctx.fillRect(138, 518, (ender*(lightlightning.cdTop-lightlightning.cd))/lightlightning.cdTop, 22);
				}
				ctx.drawImage(SpellUISheet, 1600, 4032, 800, 576, 0, 0, 800, 576);
			}
			else if(spell == "Air Elemental"){
				var ender = 378;
				ctx.fillStyle = emptyColor;
				ctx.fillRect(138, 518, ender, 22);
				if(lightair.cd <= 0){
					ctx.fillStyle = fullColor;
					ctx.fillRect(138, 518, ender, 22);
				}
				else{
					ctx.fillStyle = chargeColor;
					ctx.fillRect(138, 518, (ender*(lightair.cdTop-lightair.cd))/lightair.cdTop, 22);
				}
				ctx.drawImage(SpellUISheet, 2400, 4032, 800, 576, 0, 0, 800, 576);
			}
			else if(spell == "Light Beam"){
				var ender = 290;
				ctx.fillStyle = emptyColor;
				ctx.fillRect(138, 518, ender, 22);
				if(mystic.cd <= 0){
					ctx.fillStyle = fullColor;
					ctx.fillRect(138, 518, ender, 22);
				}
				else{
					ctx.fillStyle = chargeColor;
					ctx.fillRect(138, 518, (ender*(mystic.cdTop-mystic.cd))/mystic.cdTop, 22);
				}
				ctx.drawImage(SpellUISheet, 3200, 4032, 800, 576, 0, 0, 800, 576);
			}
			else if(spell == "Water Elemental"){
				var ender = 442;
				ctx.fillStyle = emptyColor;
				ctx.fillRect(138, 518, ender, 22);
				if(lightwater.cd <= 0){
					ctx.fillStyle = fullColor;
					ctx.fillRect(138, 518, ender, 22);
				}
				else{
					ctx.fillStyle = chargeColor;
					ctx.fillRect(138, 518, (ender*(lightwater.cdTop-lightwater.cd))/lightwater.cdTop, 22);
				}
				ctx.drawImage(SpellUISheet, 4000, 4032, 800, 576, 0, 0, 800, 576);
			}
			else if(spell == "Fallen Angel"){
				var ender = 346;
				ctx.fillStyle = emptyColor;
				ctx.fillRect(138, 518, ender, 22);
				if(lightdark.cd <= 0){
					ctx.fillStyle = fullColor;
					ctx.fillRect(138, 518, ender, 22);
				}
				else{
					ctx.fillStyle = chargeColor;
					ctx.fillRect(138, 518, (ender*(lightdark.cdTop-lightdark.cd))/lightdark.cdTop, 22);
				}
				ctx.drawImage(SpellUISheet, 4800, 4032, 800, 576, 0, 0, 800, 576);
			}
			else{
				var ender = 290;
				ctx.fillStyle = emptyColor;
				ctx.fillRect(138, 518, ender, 22);
				if(cd <= 0){
					ctx.fillStyle = fullColor;
					ctx.fillRect(138, 518, ender, 22);
				}
				else{
					ctx.fillStyle = chargeColor;
					ctx.fillRect(138, 518, (ender*(cdTop-cd))/cdTop, 22);
				}
				ctx.drawImage(SpellUISheet, 1, 0, 800, 576, 0, 0, 800, 576);
			}
			//Extra Recharges
			var spellRCnums = 0;
			var numz1 = {1: "N/A", 2: "N/A", 3: "N/A"};
			var numz2 = {1: "N/A", 2: "N/A", 3: "N/A"};
			var numz3 = {1: "N/A", 2: "N/A", 3: "N/A"};
			var numz4 = {1: "N/A", 2: "N/A", 3: "N/A"};
			var numz5 = {1: "N/A", 2: "N/A", 3: "N/A"};
			var numz6 = {1: "N/A", 2: "N/A", 3: "N/A"};
			var numz7 = {1: "N/A", 2: "N/A", 3: "N/A"};
			var numz8 = {1: "N/A", 2: "N/A", 3: "N/A"};
			var numz = {1: numz1, 2: numz2, 3: numz3, 4: numz4, 5: numz5, 6: numz6, 7: numz7, 8: numz8};
			for(P in prevSpellRC){
				if(prevSpellRC[P] == spell){
					prevSpellRC[P] = "N/A";
				}
				else if(prevSpellRC[P] != "N/A"){
					if(prevSpellRC[P] == "Fire"){
						numz[P] = {1: fire, 2: FireColor, 3: FireColor};
						if(fire.cd == 0){
							prevSpellRC[P] = "N/A";
							numz[P] = {1: "N/A", 2: "N/A", 3: "N/A"};
						}
					}
					else if(prevSpellRC[P] == "Inferno"){
						numz[P] = {1: fire2, 2: FireColor, 3: FireColor};
						if(fire2.cd == 0){
							prevSpellRC[P] = "N/A";
							numz[P] = "N/A";
						}
					}
					else if(prevSpellRC[P] == "Ice"){
						numz[P] = {1: ice, 2: IceColor, 3: IceColor};
						if(ice.cd == 0){
							prevSpellRC[P] = "N/A";
							numz[P] = "N/A";
						}
					}
					else if(prevSpellRC[P] == "Absolute Zero"){
						numz[P] = {1: ice2, 2: IceColor, 3: IceColor};
						if(ice2.cd == 0){
							prevSpellRC[P] = "N/A";
							numz[P] = "N/A";
						}
					}
					else if(prevSpellRC[P] == "Frozen Fireball"){
						numz[P] = {1: fireice, 2: FireColor, 3: IceColor};
						if(fireice.cd == 0){
							prevSpellRC[P] = "N/A";
							numz[P] = "N/A";
						}
					}
					else if(prevSpellRC[P] == "Earth Heal"){
						numz[P] = {1: earth, 2: EarthColor, 3: EarthColor};
						if(earth.cd == 0){
							prevSpellRC[P] = "N/A";
							numz[P] = "N/A";
						}
					}
					else if(prevSpellRC[P] == "Synthesis"){
						numz[P] = {1: earth2, 2: EarthColor, 3: EarthColor};
						if(earth2.cd == 0){
							prevSpellRC[P] = "N/A";
							numz[P] = "N/A";
						}
					}
					else if(prevSpellRC[P] == "Fire+Heal"){
						numz[P] = {1: fireheal, 2: FireColor, 3: EarthColor};
						if(fireheal.cd == 0){
							prevSpellRC[P] = "N/A";
							numz[P] = "N/A";
						}
					}
					else if(prevSpellRC[P] == "Ice+Heal"){
						numz[P] = {1: iceheal, 2: IceColor, 3: EarthColor};
						if(iceheal.cd == 0){
							prevSpellRC[P] = "N/A";
							numz[P] = "N/A";
						}
					}
					else if(prevSpellRC[P] == "Lightning"){
						numz[P] = {1: lightning, 2: LightningColor, 3: LightningColor};
						if(lightning.cd == 0){
							prevSpellRC[P] = "N/A";
							numz[P] = "N/A";
						}
					}
					else if(prevSpellRC[P] == "Chain Lightning"){
						numz[P] = {1: lightning2, 2: LightningColor, 3: LightningColor};
						if(lightning2.cd == 0){
							prevSpellRC[P] = "N/A";
							numz[P] = "N/A";
						}
					}
					else if(prevSpellRC[P] == "Ragnarok"){
						numz[P] = {1: firelightning, 2: FireColor, 3: LightningColor};
						if(firelightning.cd == 0){
							prevSpellRC[P] = "N/A";
							numz[P] = "N/A";
						}
					}
					else if(prevSpellRC[P] == "Frozen Web"){
						numz[P] = {1: icelightning, 2: IceColor, 3: LightningColor};
						if(icelightning.cd == 0){
							prevSpellRC[P] = "N/A";
							numz[P] = "N/A";
						}
					}
					else if(prevSpellRC[P] == "Lightning+Heal"){
						numz[P] = {1: lightningheal, 2: EarthColor, 3: LightningColor};
						if(lightningheal.cd == 0){
							prevSpellRC[P] = "N/A";
							numz[P] = "N/A";
						}
					}
					else if(prevSpellRC[P] == "Dash"){
						numz[P] = {1: air, 2: AirColor, 3: AirColor};
						if(air.cd == 0){
							prevSpellRC[P] = "N/A";
							numz[P] = "N/A";
						}
					}
					else if(prevSpellRC[P] == "Twister"){
						numz[P] = {1: air2, 2: AirColor, 3: AirColor};
						if(air2.cd == 0){
							prevSpellRC[P] = "N/A";
							numz[P] = "N/A";
						}
					}
					else if(prevSpellRC[P] == "Fire Wave"){
						numz[P] = {1: airfire, 2: FireColor, 3: AirColor};
						if(airfire.cd == 0){
							prevSpellRC[P] = "N/A";
							numz[P] = "N/A";
						}
					}
					else if(prevSpellRC[P] == "Maelstrom"){
						numz[P] = {1: airice, 2: IceColor, 3: AirColor};
						if(airice.cd == 0){
							prevSpellRC[P] = "N/A";
							numz[P] = "N/A";
						}
					}
					else if(prevSpellRC[P] == "Dash+Heal"){
						numz[P] = {1: airearth, 2: EarthColor, 3: AirColor};
						if(airearth.cd == 0){
							prevSpellRC[P] = "N/A";
							numz[P] = "N/A";
						}
					}
					else if(prevSpellRC[P] == "Thunderstorm"){
						numz[P] = {1: airlightning, 2: LightningColor, 3: AirColor};
						if(airlightning.cd == 0){
							prevSpellRC[P] = "N/A";
							numz[P] = "N/A";
						}
					}
					else if(prevSpellRC[P] == "Teleport"){
						numz[P] = {1: mystic, 2: MysticColor, 3: MysticColor};
						if(mystic.cd == 0){
							prevSpellRC[P] = "N/A";
							numz[P] = "N/A";
						}
					}
					else if(prevSpellRC[P] == "Mirage"){
						numz[P] = {1: mystic2, 2: MysticColor, 3: MysticColor};
						if(mystic2.cd == 0){
							prevSpellRC[P] = "N/A";
							numz[P] = "N/A";
						}
					}
					else if(prevSpellRC[P] == "Explosive Beam"){
						numz[P] = {1: mystic, 2: FireColor, 3: MysticColor};
						if(mystic.cd == 0){
							prevSpellRC[P] = "N/A";
							numz[P] = "N/A";
						}
					}
					else if(prevSpellRC[P] == "Ice Beam"){
						numz[P] = {1: mystic, 2: IceColor, 3: MysticColor};
						if(mystic.cd == 0){
							prevSpellRC[P] = "N/A";
							numz[P] = "N/A";
						}
					}
					else if(prevSpellRC[P] == "Teleport+Heal"){
						numz[P] = {1: mysticearth, 2: EarthColor, 3: MysticColor};
						if(mysticearth.cd == 0){
							prevSpellRC[P] = "N/A";
							numz[P] = "N/A";
						}
					}
					else if(prevSpellRC[P] == "Conductive Beam"){
						numz[P] = {1: mystic, 2: LightningColor, 3: MysticColor};
						if(mystic.cd == 0){
							prevSpellRC[P] = "N/A";
							numz[P] = "N/A";
						}
					}
					else if(prevSpellRC[P] == "Homing Beam"){
						numz[P] = {1: mystic, 2: AirColor, 3: MysticColor};
						if(mystic.cd == 0){
							prevSpellRC[P] = "N/A";
							numz[P] = "N/A";
						}
					}
					else if(prevSpellRC[P] == "Bubble Ring"){
						numz[P] = {1: water, 2: WaterColor, 3: WaterColor};
						if(water.cd == 0){
							prevSpellRC[P] = "N/A";
							numz[P] = "N/A";
						}
					}
					else if(prevSpellRC[P] == "Max Bubble Ring"){
						numz[P] = {1: water, 2: WaterColor, 3: WaterColor};
						if(water.cd2 == 0){
							prevSpellRC[P] = "N/A";
							numz[P] = "N/A";
						}
					}
					else if(prevSpellRC[P] == "Explosive Ring"){
						numz[P] = {1: waterfire, 2: FireColor, 3: WaterColor};
						if(waterfire.cd == 0){
							prevSpellRC[P] = "N/A";
							numz[P] = "N/A";
						}
					}
					else if(prevSpellRC[P] == "Frozen Ring"){
						numz[P] = {1: waterfire, 2: IceColor, 3: WaterColor};
						if(waterfire.cd2 == 0){
							prevSpellRC[P] = "N/A";
							numz[P] = "N/A";
						}
					}
					else if(prevSpellRC[P] == "Bubble+Heal"){
						numz[P] = {1: waterearth, 2: EarthColor, 3: WaterColor};
						if(waterearth.cd == 0){
							prevSpellRC[P] = "N/A";
							numz[P] = "N/A";
						}
					}
					else if(prevSpellRC[P] == "Zap Trap"){
						numz[P] = {1: waterlightning, 2: LightningColor, 3: WaterColor};
						if(waterlightning.cd == 0){
							prevSpellRC[P] = "N/A";
							numz[P] = "N/A";
						}
					}
					else if(prevSpellRC[P] == "Bubble Blast"){
						numz[P] = {1: waterair, 2: AirColor, 3: WaterColor};
						if(waterair.cd == 0){
							prevSpellRC[P] = "N/A";
							numz[P] = "N/A";
						}
					}
					else if(prevSpellRC[P] == "Bubblebeam"){
						numz[P] = {1: mystic, 2: MysticColor, 3: WaterColor};
						if(mystic.cd == 0){
							prevSpellRC[P] = "N/A";
							numz[P] = "N/A";
						}
					}
					else if(prevSpellRC[P] == "Traps"){
						numz[P] = {1: dark, 2: DarkColor, 3: DarkColor};
						if(dark.cd == 0){
							prevSpellRC[P] = "N/A";
							numz[P] = "N/A";
						}
					}
					else if(prevSpellRC[P] == "Deathbound"){
						numz[P] = {1: dark2, 2: DarkColor, 3: DarkColor};
						if(dark2.cd == 0){
							prevSpellRC[P] = "N/A";
							numz[P] = "N/A";
						}
					}
					else if(prevSpellRC[P] == "Flame Trap"){
						numz[P] = {1: darkfire, 2: FireColor, 3: DarkColor};
						if(darkfire.cd == 0){
							prevSpellRC[P] = "N/A";
							numz[P] = "N/A";
						}
					}
					else if(prevSpellRC[P] == "Ice Trap"){
						numz[P] = {1: darkice, 2: IceColor, 3: DarkColor};
						if(darkice.cd == 0){
							prevSpellRC[P] = "N/A";
							numz[P] = "N/A";
						}
					}
					else if(prevSpellRC[P] == "Moonlight"){
						numz[P] = {1: darkearth, 2: EarthColor, 3: DarkColor};
						if(darkearth.cd == 0){
							prevSpellRC[P] = "N/A";
							numz[P] = "N/A";
						}
					}
					else if(prevSpellRC[P] == "Static Field"){
						numz[P] = {1: darklightning, 2: LightningColor, 3: DarkColor};
						if(darklightning.cd == 0){
							prevSpellRC[P] = "N/A";
							numz[P] = "N/A";
						}
					}
					else if(prevSpellRC[P] == "Boosters"){
						numz[P] = {1: darkair, 2: AirColor, 3: DarkColor};
						if(darkair.cd == 0){
							prevSpellRC[P] = "N/A";
							numz[P] = "N/A";
						}
					}
					else if(prevSpellRC[P] == "Piercing Beam"){
						numz[P] = {1: mystic, 2: MysticColor, 3: DarkColor};
						if(mystic.cd == 0){
							prevSpellRC[P] = "N/A";
							numz[P] = "N/A";
						}
					}
					else if(prevSpellRC[P] == "Shadow Cloak" || prevSpellRC[P] == "Cloak Charge"){
						numz[P] = {1: darkwater, 2: WaterColor, 3: DarkColor};
						if(darkwater.cd == 0){
							prevSpellRC[P] = "N/A";
							numz[P] = "N/A";
						}
					}
					else if(prevSpellRC[P] == "Angel"){
						numz[P] = {1: light, 2: LightColor, 3: LightColor};
						if(light.cd == 0){
							prevSpellRC[P] = "N/A";
							numz[P] = "N/A";
						}
					}
					else if(prevSpellRC[P] == "Army of God"){
						numz[P] = {1: light2, 2: LightColor, 3: LightColor};
						if(light2.cd == 0){
							prevSpellRC[P] = "N/A";
							numz[P] = "N/A";
						}
					}
					else if(prevSpellRC[P] == "Fire Elemental"){
						numz[P] = {1: lightfire, 2: LightColor, 3: FireColor};
						if(lightfire.cd == 0){
							prevSpellRC[P] = "N/A";
							numz[P] = "N/A";
						}
					}
					else if(prevSpellRC[P] == "Ice Elemental"){
						numz[P] = {1: lightice, 2: LightColor, 3: IceColor};
						if(lightice.cd == 0){
							prevSpellRC[P] = "N/A";
							numz[P] = "N/A";
						}
					}
					else if(prevSpellRC[P] == "Sunlight"){
						numz[P] = {1: lightearth, 2: LightColor, 3: EarthColor};
						if(lightearth.cd == 0){
							prevSpellRC[P] = "N/A";
							numz[P] = "N/A";
						}
					}
					else if(prevSpellRC[P] == "Spark Elemental"){
						numz[P] = {1: lightlightning, 2: LightColor, 3: LightningColor};
						if(lightlightning.cd == 0){
							prevSpellRC[P] = "N/A";
							numz[P] = "N/A";
						}
					}
					else if(prevSpellRC[P] == "Air Elemental"){
						numz[P] = {1: lightair, 2: LightColor, 3: AirColor};
						if(lightair.cd == 0){
							prevSpellRC[P] = "N/A";
							numz[P] = "N/A";
						}
					}
					else if(prevSpellRC[P] == "Light Beam"){
						numz[P] = {1: mystic, 2: MysticColor, 3: LightColor};
						if(mystic.cd == 0){
							prevSpellRC[P] = "N/A";
							numz[P] = "N/A";
						}
					}
					else if(prevSpellRC[P] == "Water Elemental"){
						numz[P] = {1: lightwater, 2: LightColor, 3: WaterColor};
						if(lightwater.cd == 0){
							prevSpellRC[P] = "N/A";
							numz[P] = "N/A";
						}
					}
					else if(prevSpellRC[P] == "Fallen Angel"){
						numz[P] = {1: lightdark, 2: LightColor, 3: DarkColor};
						if(lightdark.cd == 0){
							prevSpellRC[P] = "N/A";
							numz[P] = "N/A";
						}
					}
				}
			}
			if(prevSpellRC[1] != "N/A"){
				spellRCnums++;
				if(spellRCnums == 1){
					ctx.drawImage(CoolDown12, 0, 0);
					if(prevSpellRC[1] == "Max Bubble Ring"){
						ctx.fillStyle = WaterColor;
						ctx.fillRect(240, 548, 91*(water.cd2Top-water.cd2)/water.cd2Top, 8);
					}
					else if(prevSpellRC[1] == "Frozen Ring"){
						ctx.fillStyle = IceColor;
						ctx.fillRect(240, 548, 91*(waterfire.cd2Top-waterfire.cd2)/waterfire.cd2Top, 4);
						ctx.fillStyle = WaterColor;
						ctx.fillRect(240, 552, 91*(waterfire.cd2Top-waterfire.cd2)/waterfire.cd2Top, 4);
					}
					else{
						ctx.fillStyle = numz[1][2];
						ctx.fillRect(240, 548, 91*(numz[1][1].cdTop-numz[1][1].cd)/numz[1][1].cdTop, 4);
						ctx.fillStyle = numz[1][3];
						ctx.fillRect(240, 552, 91*(numz[1][1].cdTop-numz[1][1].cd)/numz[1][1].cdTop, 4);
					}
				}
				else if(spellRCnums == 2){
					ctx.drawImage(CoolDown22, 0, 0);
					if(prevSpellRC[1] == "Max Bubble Ring"){
						ctx.fillStyle = WaterColor;
						ctx.fillRect(356, 548, 91*(water.cd2Top-water.cd2)/water.cd2Top, 8);
					}
					else if(prevSpellRC[1] == "Frozen Ring"){
						ctx.fillStyle = IceColor;
						ctx.fillRect(356, 548, 91*(waterfire.cd2Top-waterfire.cd2)/waterfire.cd2Top, 4);
						ctx.fillStyle = WaterColor;
						ctx.fillRect(356, 552, 91*(waterfire.cd2Top-waterfire.cd2)/waterfire.cd2Top, 4);
					}
					else{
						ctx.fillStyle = numz[1][2];
						ctx.fillRect(356, 548, 91*(numz[1][1].cdTop-numz[1][1].cd)/numz[1][1].cdTop, 4);
						ctx.fillStyle = numz[1][3];
						ctx.fillRect(356, 552, 91*(numz[1][1].cdTop-numz[1][1].cd)/numz[1][1].cdTop, 4);
					}
				}
				else{
					ctx.drawImage(CoolDown32, 0, 0);
					if(prevSpellRC[1] == "Max Bubble Ring"){
						ctx.fillStyle = WaterColor;
						ctx.fillRect(472, 548, 91*(water.cd2Top-water.cd2)/water.cd2Top, 8);
					}
					else if(prevSpellRC[1] == "Frozen Ring"){
						ctx.fillStyle = IceColor;
						ctx.fillRect(472, 548, 91*(waterfire.cd2Top-waterfire.cd2)/waterfire.cd2Top, 4);
						ctx.fillStyle = WaterColor;
						ctx.fillRect(472, 552, 91*(waterfire.cd2Top-waterfire.cd2)/waterfire.cd2Top, 4);
					}
					else{
						ctx.fillStyle = numz[1][2];
						ctx.fillRect(472, 548, 91*(numz[1][1].cdTop-numz[1][1].cd)/numz[1][1].cdTop, 4);
						ctx.fillStyle = numz[1][3];
						ctx.fillRect(472, 552, 91*(numz[1][1].cdTop-numz[1][1].cd)/numz[1][1].cdTop, 4);
					}
				}
			}
			if(prevSpellRC[2] != "N/A"){
				spellRCnums++;
				if(spellRCnums == 1){
					ctx.drawImage(CoolDown12, 0, 0);
					if(prevSpellRC[2] == "Max Bubble Ring"){
						ctx.fillStyle = WaterColor;
						ctx.fillRect(240, 548, 91*(water.cd2Top-water.cd2)/water.cd2Top, 8);
					}
					else if(prevSpellRC[2] == "Frozen Ring"){
						ctx.fillStyle = IceColor;
						ctx.fillRect(240, 548, 91*(waterfire.cd2Top-waterfire.cd2)/waterfire.cd2Top, 4);
						ctx.fillStyle = WaterColor;
						ctx.fillRect(240, 552, 91*(waterfire.cd2Top-waterfire.cd2)/waterfire.cd2Top, 4);
					}
					else{
						ctx.fillStyle = numz[2][2];
						ctx.fillRect(240, 548, 91*(numz[2][1].cdTop-numz[2][1].cd)/numz[2][1].cdTop, 4);
						ctx.fillStyle = numz[2][3];
						ctx.fillRect(240, 552, 91*(numz[2][1].cdTop-numz[2][1].cd)/numz[2][1].cdTop, 4);
					}
				}
				else if(spellRCnums == 2){
					ctx.drawImage(CoolDown22, 0, 0);
					if(prevSpellRC[2] == "Max Bubble Ring"){
						ctx.fillStyle = WaterColor;
						ctx.fillRect(356, 548, 91*(water.cd2Top-water.cd2)/water.cd2Top, 8);
					}
					else if(prevSpellRC[2] == "Frozen Ring"){
						ctx.fillStyle = IceColor;
						ctx.fillRect(356, 548, 91*(waterfire.cd2Top-waterfire.cd2)/waterfire.cd2Top, 4);
						ctx.fillStyle = WaterColor;
						ctx.fillRect(356, 552, 91*(waterfire.cd2Top-waterfire.cd2)/waterfire.cd2Top, 4);
					}
					else{
						ctx.fillStyle = numz[2][2];
						ctx.fillRect(356, 548, 91*(numz[2][1].cdTop-numz[2][1].cd)/numz[2][1].cdTop, 4);
						ctx.fillStyle = numz[2][3];
						ctx.fillRect(356, 552, 91*(numz[2][1].cdTop-numz[2][1].cd)/numz[2][1].cdTop, 4);
					}
				}
				else{
					ctx.drawImage(CoolDown32, 0, 0);
					if(prevSpellRC[2] == "Max Bubble Ring"){
						ctx.fillStyle = WaterColor;
						ctx.fillRect(472, 548, 91*(water.cd2Top-water.cd2)/water.cd2Top, 8);
					}
					else if(prevSpellRC[2] == "Frozen Ring"){
						ctx.fillStyle = IceColor;
						ctx.fillRect(472, 548, 91*(waterfire.cd2Top-waterfire.cd2)/waterfire.cd2Top, 4);
						ctx.fillStyle = WaterColor;
						ctx.fillRect(472, 552, 91*(waterfire.cd2Top-waterfire.cd2)/waterfire.cd2Top, 4);
					}
					else{
						ctx.fillStyle = numz[2][2];
						ctx.fillRect(472, 548, 91*(numz[2][1].cdTop-numz[2][1].cd)/numz[2][1].cdTop, 4);
						ctx.fillStyle = numz[2][3];
						ctx.fillRect(472, 552, 91*(numz[2][1].cdTop-numz[2][1].cd)/numz[2][1].cdTop, 4);
					}
				}
			}
			if(prevSpellRC[3] != "N/A"){
				spellRCnums++;
				if(spellRCnums == 1){
					ctx.drawImage(CoolDown12, 0, 0);
					if(prevSpellRC[3] == "Max Bubble Ring"){
						ctx.fillStyle = WaterColor;
						ctx.fillRect(240, 548, 91*(water.cd2Top-water.cd2)/water.cd2Top, 8);
					}
					else if(prevSpellRC[3] == "Frozen Ring"){
						ctx.fillStyle = IceColor;
						ctx.fillRect(240, 548, 91*(waterfire.cd2Top-waterfire.cd2)/waterfire.cd2Top, 4);
						ctx.fillStyle = WaterColor;
						ctx.fillRect(240, 552, 91*(waterfire.cd2Top-waterfire.cd2)/waterfire.cd2Top, 4);
					}
					else{
						ctx.fillStyle = numz[3][2];
						ctx.fillRect(240, 548, 91*(numz[3][1].cdTop-numz[3][1].cd)/numz[3][1].cdTop, 4);
						ctx.fillStyle = numz[3][3];
						ctx.fillRect(240, 552, 91*(numz[3][1].cdTop-numz[3][1].cd)/numz[3][1].cdTop, 4);
					}
				}
				else if(spellRCnums == 2){
					ctx.drawImage(CoolDown22, 0, 0);
					if(prevSpellRC[3] == "Max Bubble Ring"){
						ctx.fillStyle = WaterColor;
						ctx.fillRect(356, 548, 91*(water.cd2Top-water.cd2)/water.cd2Top, 8);
					}
					else if(prevSpellRC[3] == "Frozen Ring"){
						ctx.fillStyle = IceColor;
						ctx.fillRect(356, 548, 91*(waterfire.cd2Top-waterfire.cd2)/waterfire.cd2Top, 4);
						ctx.fillStyle = WaterColor;
						ctx.fillRect(356, 552, 91*(waterfire.cd2Top-waterfire.cd2)/waterfire.cd2Top, 4);
					}
					else{
						ctx.fillStyle = numz[3][2];
						ctx.fillRect(356, 548, 91*(numz[3][1].cdTop-numz[3][1].cd)/numz[3][1].cdTop, 4);
						ctx.fillStyle = numz[3][3];
						ctx.fillRect(356, 552, 91*(numz[3][1].cdTop-numz[3][1].cd)/numz[3][1].cdTop, 4);
					}
				}
				else{
					ctx.drawImage(CoolDown32, 0, 0);
					if(prevSpellRC[3] == "Max Bubble Ring"){
						ctx.fillStyle = WaterColor;
						ctx.fillRect(472, 548, 91*(water.cd2Top-water.cd2)/water.cd2Top, 8);
					}
					else if(prevSpellRC[3] == "Frozen Ring"){
						ctx.fillStyle = IceColor;
						ctx.fillRect(472, 548, 91*(waterfire.cd2Top-waterfire.cd2)/waterfire.cd2Top, 4);
						ctx.fillStyle = WaterColor;
						ctx.fillRect(472, 552, 91*(waterfire.cd2Top-waterfire.cd2)/waterfire.cd2Top, 4);
					}
					else{
						ctx.fillStyle = numz[3][2];
						ctx.fillRect(472, 548, 91*(numz[3][1].cdTop-numz[3][1].cd)/numz[3][1].cdTop, 4);
						ctx.fillStyle = numz[3][3];
						ctx.fillRect(472, 552, 91*(numz[3][1].cdTop-numz[3][1].cd)/numz[3][1].cdTop, 4);
					}
				}
			}
			if(prevSpellRC[4] != "N/A" && spellRCnums < 3){
				spellRCnums++;
				if(spellRCnums == 1){
					ctx.drawImage(CoolDown12, 0, 0);
					if(prevSpellRC[4] == "Max Bubble Ring"){
						ctx.fillStyle = WaterColor;
						ctx.fillRect(240, 548, 91*(water.cd2Top-water.cd2)/water.cd2Top, 8);
					}
					else if(prevSpellRC[4] == "Frozen Ring"){
						ctx.fillStyle = IceColor;
						ctx.fillRect(240, 548, 91*(waterfire.cd2Top-waterfire.cd2)/waterfire.cd2Top, 4);
						ctx.fillStyle = WaterColor;
						ctx.fillRect(240, 552, 91*(waterfire.cd2Top-waterfire.cd2)/waterfire.cd2Top, 4);
					}
					else{
						ctx.fillStyle = numz[4][2];
						ctx.fillRect(240, 548, 91*(numz[4][1].cdTop-numz[4][1].cd)/numz[4][1].cdTop, 4);
						ctx.fillStyle = numz[4][3];
						ctx.fillRect(240, 552, 91*(numz[4][1].cdTop-numz[4][1].cd)/numz[4][1].cdTop, 4);
					}
				}
				else if(spellRCnums == 2){
					ctx.drawImage(CoolDown22, 0, 0);
					if(prevSpellRC[4] == "Max Bubble Ring"){
						ctx.fillStyle = WaterColor;
						ctx.fillRect(356, 548, 91*(water.cd2Top-water.cd2)/water.cd2Top, 8);
					}
					else if(prevSpellRC[4] == "Frozen Ring"){
						ctx.fillStyle = IceColor;
						ctx.fillRect(356, 548, 91*(waterfire.cd2Top-waterfire.cd2)/waterfire.cd2Top, 4);
						ctx.fillStyle = WaterColor;
						ctx.fillRect(356, 552, 91*(waterfire.cd2Top-waterfire.cd2)/waterfire.cd2Top, 4);
					}
					else{
						ctx.fillStyle = numz[4][2];
						ctx.fillRect(356, 548, 91*(numz[4][1].cdTop-numz[4][1].cd)/numz[4][1].cdTop, 4);
						ctx.fillStyle = numz[4][3];
						ctx.fillRect(356, 552, 91*(numz[4][1].cdTop-numz[4][1].cd)/numz[4][1].cdTop, 4);
					}
				}
				else{
					ctx.drawImage(CoolDown32, 0, 0);
					if(prevSpellRC[4] == "Max Bubble Ring"){
						ctx.fillStyle = WaterColor;
						ctx.fillRect(472, 548, 91*(water.cd2Top-water.cd2)/water.cd2Top, 8);
					}
					else if(prevSpellRC[4] == "Frozen Ring"){
						ctx.fillStyle = IceColor;
						ctx.fillRect(472, 548, 91*(waterfire.cd2Top-waterfire.cd2)/waterfire.cd2Top, 4);
						ctx.fillStyle = WaterColor;
						ctx.fillRect(472, 552, 91*(waterfire.cd2Top-waterfire.cd2)/waterfire.cd2Top, 4);
					}
					else{
						ctx.fillStyle = numz[4][2];
						ctx.fillRect(472, 548, 91*(numz[4][1].cdTop-numz[4][1].cd)/numz[4][1].cdTop, 4);
						ctx.fillStyle = numz[4][3];
						ctx.fillRect(472, 552, 91*(numz[4][1].cdTop-numz[4][1].cd)/numz[4][1].cdTop, 4);
					}
				}
			}
			if(prevSpellRC[5] != "N/A" && spellRCnums < 3){
				spellRCnums++;
				if(spellRCnums == 1){
					ctx.drawImage(CoolDown12, 0, 0);
					if(prevSpellRC[5] == "Max Bubble Ring"){
						ctx.fillStyle = WaterColor;
						ctx.fillRect(240, 548, 91*(water.cd2Top-water.cd2)/water.cd2Top, 8);
					}
					else if(prevSpellRC[5] == "Frozen Ring"){
						ctx.fillStyle = IceColor;
						ctx.fillRect(240, 548, 91*(waterfire.cd2Top-waterfire.cd2)/waterfire.cd2Top, 4);
						ctx.fillStyle = WaterColor;
						ctx.fillRect(240, 552, 91*(waterfire.cd2Top-waterfire.cd2)/waterfire.cd2Top, 4);
					}
					else{
						ctx.fillStyle = numz[5][2];
						ctx.fillRect(240, 548, 91*(numz[5][1].cdTop-numz[5][1].cd)/numz[5][1].cdTop, 4);
						ctx.fillStyle = numz[5][3];
						ctx.fillRect(240, 552, 91*(numz[5][1].cdTop-numz[5][1].cd)/numz[5][1].cdTop, 4);
					}
				}
				else if(spellRCnums == 2){
					ctx.drawImage(CoolDown22, 0, 0);
					if(prevSpellRC[5] == "Max Bubble Ring"){
						ctx.fillStyle = WaterColor;
						ctx.fillRect(356, 548, 91*(water.cd2Top-water.cd2)/water.cd2Top, 8);
					}
					else if(prevSpellRC[5] == "Frozen Ring"){
						ctx.fillStyle = IceColor;
						ctx.fillRect(356, 548, 91*(waterfire.cd2Top-waterfire.cd2)/waterfire.cd2Top, 4);
						ctx.fillStyle = WaterColor;
						ctx.fillRect(356, 552, 91*(waterfire.cd2Top-waterfire.cd2)/waterfire.cd2Top, 4);
					}
					else{
						ctx.fillStyle = numz[5][2];
						ctx.fillRect(356, 548, 91*(numz[5][1].cdTop-numz[5][1].cd)/numz[5][1].cdTop, 4);
						ctx.fillStyle = numz[5][3];
						ctx.fillRect(356, 552, 91*(numz[5][1].cdTop-numz[5][1].cd)/numz[5][1].cdTop, 4);
					}
				}
				else{
					ctx.drawImage(CoolDown32, 0, 0);
					if(prevSpellRC[5] == "Max Bubble Ring"){
						ctx.fillStyle = WaterColor;
						ctx.fillRect(472, 548, 91*(water.cd2Top-water.cd2)/water.cd2Top, 8);
					}
					else if(prevSpellRC[5] == "Frozen Ring"){
						ctx.fillStyle = IceColor;
						ctx.fillRect(472, 548, 91*(waterfire.cd2Top-waterfire.cd2)/waterfire.cd2Top, 4);
						ctx.fillStyle = WaterColor;
						ctx.fillRect(472, 552, 91*(waterfire.cd2Top-waterfire.cd2)/waterfire.cd2Top, 4);
					}
					else{
						ctx.fillStyle = numz[5][2];
						ctx.fillRect(472, 548, 91*(numz[5][1].cdTop-numz[5][1].cd)/numz[5][1].cdTop, 4);
						ctx.fillStyle = numz[5][3];
						ctx.fillRect(472, 552, 91*(numz[5][1].cdTop-numz[5][1].cd)/numz[5][1].cdTop, 4);
					}
				}
			}
			if(prevSpellRC[6] != "N/A" && spellRCnums < 3){
				spellRCnums++;
				if(spellRCnums == 1){
					ctx.drawImage(CoolDown12, 0, 0);
					if(prevSpellRC[6] == "Max Bubble Ring"){
						ctx.fillStyle = WaterColor;
						ctx.fillRect(240, 548, 91*(water.cd2Top-water.cd2)/water.cd2Top, 8);
					}
					else if(prevSpellRC[6] == "Frozen Ring"){
						ctx.fillStyle = IceColor;
						ctx.fillRect(240, 548, 91*(waterfire.cd2Top-waterfire.cd2)/waterfire.cd2Top, 4);
						ctx.fillStyle = WaterColor;
						ctx.fillRect(240, 552, 91*(waterfire.cd2Top-waterfire.cd2)/waterfire.cd2Top, 4);
					}
					else{
						ctx.fillStyle = numz[6][2];
						ctx.fillRect(240, 548, 91*(numz[6][1].cdTop-numz[6][1].cd)/numz[6][1].cdTop, 4);
						ctx.fillStyle = numz[6][3];
						ctx.fillRect(240, 552, 91*(numz[6][1].cdTop-numz[6][1].cd)/numz[6][1].cdTop, 4);
					}
				}
				else if(spellRCnums == 2){
					ctx.drawImage(CoolDown22, 0, 0);
					if(prevSpellRC[6] == "Max Bubble Ring"){
						ctx.fillStyle = WaterColor;
						ctx.fillRect(356, 548, 91*(water.cd2Top-water.cd2)/water.cd2Top, 8);
					}
					else if(prevSpellRC[6] == "Frozen Ring"){
						ctx.fillStyle = IceColor;
						ctx.fillRect(356, 548, 91*(waterfire.cd2Top-waterfire.cd2)/waterfire.cd2Top, 4);
						ctx.fillStyle = WaterColor;
						ctx.fillRect(356, 552, 91*(waterfire.cd2Top-waterfire.cd2)/waterfire.cd2Top, 4);
					}
					else{
						ctx.fillStyle = numz[6][2];
						ctx.fillRect(356, 548, 91*(numz[6][1].cdTop-numz[6][1].cd)/numz[6][1].cdTop, 4);
						ctx.fillStyle = numz[6][3];
						ctx.fillRect(356, 552, 91*(numz[6][1].cdTop-numz[6][1].cd)/numz[6][1].cdTop, 4);
					}
				}
				else{
					ctx.drawImage(CoolDown32, 0, 0);
					if(prevSpellRC[6] == "Max Bubble Ring"){
						ctx.fillStyle = WaterColor;
						ctx.fillRect(472, 548, 91*(water.cd2Top-water.cd2)/water.cd2Top, 8);
					}
					else if(prevSpellRC[6] == "Frozen Ring"){
						ctx.fillStyle = IceColor;
						ctx.fillRect(472, 548, 91*(waterfire.cd2Top-waterfire.cd2)/waterfire.cd2Top, 4);
						ctx.fillStyle = WaterColor;
						ctx.fillRect(472, 552, 91*(waterfire.cd2Top-waterfire.cd2)/waterfire.cd2Top, 4);
					}
					else{
						ctx.fillStyle = numz[6][2];
						ctx.fillRect(472, 548, 91*(numz[6][1].cdTop-numz[6][1].cd)/numz[6][1].cdTop, 4);
						ctx.fillStyle = numz[6][3];
						ctx.fillRect(472, 552, 91*(numz[6][1].cdTop-numz[6][1].cd)/numz[6][1].cdTop, 4);
					}
				}
			}
			if(prevSpellRC[7] != "N/A" && spellRCnums < 3){
				spellRCnums++;
				if(spellRCnums == 1){
					ctx.drawImage(CoolDown12, 0, 0);
					if(prevSpellRC[7] == "Max Bubble Ring"){
						ctx.fillStyle = WaterColor;
						ctx.fillRect(240, 548, 91*(water.cd2Top-water.cd2)/water.cd2Top, 8);
					}
					else if(prevSpellRC[7] == "Frozen Ring"){
						ctx.fillStyle = IceColor;
						ctx.fillRect(240, 548, 91*(waterfire.cd2Top-waterfire.cd2)/waterfire.cd2Top, 4);
						ctx.fillStyle = WaterColor;
						ctx.fillRect(240, 552, 91*(waterfire.cd2Top-waterfire.cd2)/waterfire.cd2Top, 4);
					}
					else{
						ctx.fillStyle = numz[7][2];
						ctx.fillRect(240, 548, 91*(numz[7][1].cdTop-numz[7][1].cd)/numz[7][1].cdTop, 4);
						ctx.fillStyle = numz[7][3];
						ctx.fillRect(240, 552, 91*(numz[7][1].cdTop-numz[7][1].cd)/numz[7][1].cdTop, 4);
					}
				}
				else if(spellRCnums == 2){
					ctx.drawImage(CoolDown22, 0, 0);
					if(prevSpellRC[7] == "Max Bubble Ring"){
						ctx.fillStyle = WaterColor;
						ctx.fillRect(356, 548, 91*(water.cd2Top-water.cd2)/water.cd2Top, 8);
					}
					else if(prevSpellRC[7] == "Frozen Ring"){
						ctx.fillStyle = IceColor;
						ctx.fillRect(356, 548, 91*(waterfire.cd2Top-waterfire.cd2)/waterfire.cd2Top, 4);
						ctx.fillStyle = WaterColor;
						ctx.fillRect(356, 552, 91*(waterfire.cd2Top-waterfire.cd2)/waterfire.cd2Top, 4);
					}
					else{
						ctx.fillStyle = numz[7][2];
						ctx.fillRect(356, 548, 91*(numz[7][1].cdTop-numz[7][1].cd)/numz[7][1].cdTop, 4);
						ctx.fillStyle = numz[7][3];
						ctx.fillRect(356, 552, 91*(numz[7][1].cdTop-numz[7][1].cd)/numz[7][1].cdTop, 4);
					}
				}
				else{
					ctx.drawImage(CoolDown32, 0, 0);
					if(prevSpellRC[7] == "Max Bubble Ring"){
						ctx.fillStyle = WaterColor;
						ctx.fillRect(472, 548, 91*(water.cd2Top-water.cd2)/water.cd2Top, 8);
					}
					else if(prevSpellRC[7] == "Frozen Ring"){
						ctx.fillStyle = IceColor;
						ctx.fillRect(472, 548, 91*(waterfire.cd2Top-waterfire.cd2)/waterfire.cd2Top, 4);
						ctx.fillStyle = WaterColor;
						ctx.fillRect(472, 552, 91*(waterfire.cd2Top-waterfire.cd2)/waterfire.cd2Top, 4);
					}
					else{
						ctx.fillStyle = numz[7][2];
						ctx.fillRect(472, 548, 91*(numz[7][1].cdTop-numz[7][1].cd)/numz[7][1].cdTop, 4);
						ctx.fillStyle = numz[7][3];
						ctx.fillRect(472, 552, 91*(numz[7][1].cdTop-numz[7][1].cd)/numz[7][1].cdTop, 4);
					}
				}
			}
			if(prevSpellRC[8] != "N/A" && spellRCnums < 3){
				spellRCnums++;
				if(spellRCnums == 1){
					ctx.drawImage(CoolDown12, 0, 0);
					if(prevSpellRC[8] == "Max Bubble Ring"){
						ctx.fillStyle = WaterColor;
						ctx.fillRect(240, 548, 91*(water.cd2Top-water.cd2)/water.cd2Top, 8);
					}
					else if(prevSpellRC[8] == "Frozen Ring"){
						ctx.fillStyle = IceColor;
						ctx.fillRect(240, 548, 91*(waterfire.cd2Top-waterfire.cd2)/waterfire.cd2Top, 4);
						ctx.fillStyle = WaterColor;
						ctx.fillRect(240, 552, 91*(waterfire.cd2Top-waterfire.cd2)/waterfire.cd2Top, 4);
					}
					else{
						ctx.fillStyle = numz[8][2];
						ctx.fillRect(240, 548, 91*(numz[7][1].cdTop-numz[7][1].cd)/numz[7][1].cdTop, 4);
						ctx.fillStyle = numz[8][3];
						ctx.fillRect(240, 552, 91*(numz[7][1].cdTop-numz[7][1].cd)/numz[7][1].cdTop, 4);
					}
				}
				else if(spellRCnums == 2){
					ctx.drawImage(CoolDown22, 0, 0);
					if(prevSpellRC[8] == "Max Bubble Ring"){
						ctx.fillStyle = WaterColor;
						ctx.fillRect(356, 548, 91*(water.cd2Top-water.cd2)/water.cd2Top, 8);
					}
					else if(prevSpellRC[8] == "Frozen Ring"){
						ctx.fillStyle = IceColor;
						ctx.fillRect(356, 548, 91*(waterfire.cd2Top-waterfire.cd2)/waterfire.cd2Top, 4);
						ctx.fillStyle = WaterColor;
						ctx.fillRect(356, 552, 91*(waterfire.cd2Top-waterfire.cd2)/waterfire.cd2Top, 4);
					}
					else{
						ctx.fillStyle = numz[8][2];
						ctx.fillRect(356, 548, 91*(numz[8][1].cdTop-numz[8][1].cd)/numz[8][1].cdTop, 4);
						ctx.fillStyle = numz[8][3];
						ctx.fillRect(356, 552, 91*(numz[8][1].cdTop-numz[8][1].cd)/numz[8][1].cdTop, 4);
					}
				}
				else{
					ctx.drawImage(CoolDown32, 0, 0);
					if(prevSpellRC[8] == "Max Bubble Ring"){
						ctx.fillStyle = WaterColor;
						ctx.fillRect(472, 548, 91*(water.cd2Top-water.cd2)/water.cd2Top, 8);
					}
					else if(prevSpellRC[8] == "Frozen Ring"){
						ctx.fillStyle = IceColor;
						ctx.fillRect(472, 548, 91*(waterfire.cd2Top-waterfire.cd2)/waterfire.cd2Top, 4);
						ctx.fillStyle = WaterColor;
						ctx.fillRect(472, 552, 91*(waterfire.cd2Top-waterfire.cd2)/waterfire.cd2Top, 4);
					}
					else{
						ctx.fillStyle = numz[8][2];
						ctx.fillRect(472, 548, 91*(numz[8][1].cdTop-numz[8][1].cd)/numz[8][1].cdTop, 4);
						ctx.fillStyle = numz[8][3];
						ctx.fillRect(472, 552, 91*(numz[8][1].cdTop-numz[8][1].cd)/numz[8][1].cdTop, 4);
					}
				}
			}
			ctx.globalAlpha = Alpha;
			for(P in pickup_particles){
				draw_pickup_particles(pickup_particles[P]);
			}
			if(spell1Fade){
				ctx.globalAlpha = Alpha / (Math.floor(spell1Fade*0.25));
				ctx.drawImage(HUD_Elements, 0, 0, 52, 52, 20, 464, 52, 52);
				spell1Fade++;
				if(spell1Fade > 15){
					spell1Fade = 0;
				}
				ctx.globalAlpha = Alpha;
			}
			if(spell2Fade){
				ctx.globalAlpha = Alpha / (Math.floor(spell2Fade*0.25));
				ctx.drawImage(HUD_Elements, 0, 0, 52, 52, 72, 504, 52, 52);
				spell2Fade++;
				if(spell2Fade > 15){
					spell2Fade = 0;
				}
				ctx.globalAlpha = Alpha;
			}
		}
	}
}