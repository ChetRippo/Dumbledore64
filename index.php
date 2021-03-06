<!DOCTYPE html>
<html>
<head>

<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Glass Knuckle - Dumbledore64 Wizard Simulation</title>
<link href="../CSS/main.css" rel="stylesheet" type="text/css" />
<link rel="shortcut icon" href="../Global/Images/icon.ico" type="image/x-icon" />

</head>

<body style="text-align:center;">

<div style="text-align:left">
	<? include '../Global/Include/header.php'; ?>
</div>

<div class="body_frame" style="text-align:center; margin-top:-16px;">
	<link rel="icon" type="image/ico" href="grafix/iconwiz.ico" />
	<center style="display:inline-block !important"><p><a href='../Dumble/press'>Dumbledore64</a> is now available on iOS and Android!</p></center>
	<center><a href="#" onClick="fullScreen()" ><span style="display:inline-block !important" class="fs-sprite ui-state-default ui-corner-all" title=".ui-icon-arrow-4-diag"><span class="ui-icon ui-icon-arrow-4-diag"></span></span></a></center>
	<style>
		@font-face {
    		font-family: 'acknowledge';
    		src: url('grafix/acknowtt.ttf');
		}
		.prefont {
    	position: absolute;
    	visibility: hidden;
    	font-family: acknowledge;
    	font-weight: 300;
		}
	</style>
	<div class="prefont">.</div>
	<script>
	//LoadingBar
	var loadbar1 = new Image();
	loadbar1.src = "grafix/menu/loading/load.1.png";
	var loadbar2 = new Image();
	loadbar2.src = "grafix/menu/loading/load.2.png";
	var loadbar3 = new Image();
	loadbar3.src = "grafix/menu/loading/load.3.png";
	var loadbar4 = new Image();
	loadbar4.src = "grafix/menu/loading/load.4.png";
	var loadbar5 = new Image();
	loadbar5.src = "grafix/menu/loading/load.5.png";
	var loadbar6 = new Image();
	loadbar6.src = "grafix/menu/loading/load.6.png";
	var loadbar7 = new Image();
	loadbar7.src = "grafix/menu/loading/load.7.png";
	var loadbar8 = new Image();
	loadbar8.src = "grafix/menu/loading/load.8.png";
	var loadbar9 = new Image();
	loadbar9.src = "grafix/menu/loading/load.9.png";
	var loadbar10 = new Image();
	loadbar10.src = "grafix/menu/loading/load.10.png";
	var LoadPics = {1: loadbar1, 2: loadbar2, 3: loadbar3, 4: loadbar4, 5: loadbar5, 6: loadbar6, 7: loadbar7, 8: loadbar8, 9: loadbar9, 10: loadbar10};
	//Loading Progress, update with every asset
	var numLoaded = 0;
	var maxLoaded = 350;
	var gameReady = false;
	function LoadingBar(){
		numLoaded++;
		if(numLoaded == maxLoaded){
			gameReady = true;
		}
	}
	</script>
	<audio <!--oncanplay="LoadingBar()"-->>
		<source src="Sounds/beeplow.ogg" type="audio/ogg" />
		<source src="Sounds/beeplow.mp3" type="audio/mpeg" />
	</audio>
	<audio <!--oncanplay="LoadingBar()"-->>
		<source src="Sounds/shortzaplow.ogg" type="audio/ogg"/>
		<source src="Sounds/shortzaplow.mp3" type="audio/mpeg"/>
	</audio>
	<audio <!--oncanplay="LoadingBar()"-->>
		<source src="Sounds/beepboop.ogg" type="audio/ogg" />
		<source src="Sounds/beepboop.mp3" type="audio/mpeg" />
	</audio>
	<audio <!--oncanplay="LoadingBar()"-->>
		<source src="Sounds/divebombsuperlow.ogg" type="audio/ogg" />
		<source src="Sounds/divebombsuperlow.mp3" type="audio/mpeg" />
	</audio>
	<audio <!--oncanplay="LoadingBar()"-->>
		<source src="Sounds/pulsebeam.ogg" type="audio/ogg" />
		<source src="Sounds/pulsebeam.mp3" type="audio/mpeg" />
	</audio>
	<audio <!--oncanplay="LoadingBar()"-->>
		<source src="Sounds/divebombmid.ogg" type="audio/ogg" />
		<source src="Sounds/divebombmid.mp3" type="audio/mpeg" />
	</audio>
	<audio <!--oncanplay="LoadingBar()"-->>
		<source src="Sounds/hardlaser.ogg" type="audio/ogg" />
		<source src="Sounds/hardlaser.mp3" type="audio/mpeg" />
	</audio>
	<audio <!--oncanplay="LoadingBar()"-->>
		<source src="Sounds/divebomblow.ogg" type="audio/ogg" />
		<source src="Sounds/divebomblow.mp3" type="audio/mpeg" />
	</audio>
	<audio <!--oncanplay="LoadingBar()"-->>
		<source src="Sounds/shortzap.ogg" type="audio/ogg" />
		<source src="Sounds/shortzap.mp3" type="audio/mpeg" />
	</audio>
	<audio <!--oncanplay="LoadingBar()"-->>
		<source src="Sounds/beepbooplow.ogg" type="audio/ogg" />
		<source src="Sounds/beepbooplow.mp3" type="audio/mpeg" />
	</audio>
	<audio <!--oncanplay="LoadingBar()"-->>
		<source src="Sounds/zaplaser.ogg" type="audio/ogg" />
		<source src="Sounds/zaplaser.mp3" type="audio/mpeg" />
	</audio>
	<audio <!--oncanplay="LoadingBar()"-->>
		<source src="Sounds/plucky.ogg" type="audio/ogg" />
		<source src="Sounds/plucky.mp3" type="audio/mpeg" />
	</audio>
	<audio <!--oncanplay="LoadingBar()"-->>
		<source src="Sounds/multilaser.ogg" type="audio/ogg" />
		<source src="Sounds/multilaser.mp3" type="audio/mpeg" />
	</audio>
	<audio <!--oncanplay="LoadingBar()"-->>
		<source src="Sounds/midboop.ogg" type="audio/ogg" />
		<source src="Sounds/midboop.mp3" type="audio/mpeg" />
	</audio>
	<audio <!--oncanplay="LoadingBar()"-->>
		<source src="Sounds/lowdouble.ogg" type="audio/ogg" />
		<source src="Sounds/lowdouble.mp3" type="audio/mpeg" />
	</audio>
	<audio <!--oncanplay="LoadingBar()"-->>
		<source src="Sounds/lowbomb.ogg" type="audio/ogg" />
		<source src="Sounds/lowbomb.mp3" type="audio/mpeg" />
	</audio>
	<audio <!--oncanplay="LoadingBar()"-->>
		<source src="Sounds/highdouble.ogg" type="audio/ogg" />
		<source src="Sounds/highdouble.mp3" type="audio/mpeg" />
	</audio>
	<audio <!--oncanplay="LoadingBar()"-->>
		<source src="Sounds/flatboop.ogg" type="audio/ogg" />
		<source src="Sounds/flatboop.mp3" type="audio/mpeg" />
	</audio>
	<audio <!--oncanplay="LoadingBar()"-->>
		<source src="Sounds/fastbeepslow.ogg" type="audio/ogg" />
		<source src="Sounds/fastbeepslow.mp3" type="audio/mpeg" />
	</audio>
	<audio <!--oncanplay="LoadingBar()"-->>
		<source src="Sounds/fastbeepshigh.ogg" type="audio/ogg" />
		<source src="Sounds/fastbeepshigh.mp3" type="audio/mpeg" />
	</audio>
	<audio <!--oncanplay="LoadingBar()"-->>
		<source src="Sounds/hum.ogg" type="audio/ogg" />
		<source src="Sounds/hum.mp3" type="audio/mpeg" />
	</audio>
	<audio <!--oncanplay="LoadingBar()"-->>
		<source src="Sounds/longfuzz.ogg" type="audio/ogg" />
		<source src="Sounds/longfuzz.mp3" type="audio/mpeg" />
	</audio>
	<audio <!--oncanplay="LoadingBar()"-->>
		<source src="Sounds/longlaser.ogg" type="audio/ogg" />
		<source src="Sounds/longlaser.mp3" type="audio/mpeg" />
	</audio>
	<audio <!--oncanplay="LoadingBar()"-->>
		<source src="Sounds/longpew.ogg" type="audio/ogg" />
		<source src="Sounds/longpew.mp3" type="audio/mpeg" />
	</audio>
	<audio <!--oncanplay="LoadingBar()"-->>
		<source src="Sounds/longpulse.ogg" type="audio/ogg" />
		<source src="Sounds/longpulse.mp3" type="audio/mpeg" />
	</audio>
	<audio <!--oncanplay="LoadingBar()"-->>
		<source src="Sounds/lowpulse.ogg" type="audio/ogg" />
		<source src="Sounds/lowpulse.mp3" type="audio/mpeg" />
	</audio>
	<audio <!--oncanplay="LoadingBar()"-->>
		<source src="Sounds/radiofailure.ogg" type="audio/ogg" />
		<source src="Sounds/radiofailure.mp3" type="audio/mpeg" />
	</audio>
	<audio <!--oncanplay="LoadingBar()"-->>
		<source src="Sounds/trailingbeeps.ogg" type="audio/ogg" />
		<source src="Sounds/trailingbeeps.mp3" type="audio/mpeg" />
	</audio>
	<audio <!--oncanplay="LoadingBar()"-->>
		<source src="Sounds/Fangs.ogg" type="audio/ogg" />
		<source src="Sounds/Fangs.mp3" type="audio/mpeg" />
	</audio>
	<audio <!--oncanplay="LoadingBar()"-->>
		<source src="Sounds/OverwhelmedByGoblins.ogg" type="audio/ogg" />
		<source src="Sounds/OverwhelmedByGoblins.mp3" type="audio/mpeg" />
	</audio>
	<audio <!--oncanplay="LoadingBar()"-->>
		<source src="Sounds/BadWizards.ogg" type="audio/ogg" />
		<source src="Sounds/BadWizards.mp3" type="audio/mpeg" />
	</audio>
	<audio <!--oncanplay="LoadingBar()"-->>
		<source src="Sounds/DumblebeatsNormal.ogg" type="audio/ogg" />
		<source src="Sounds/DumblebeatsNormal.mp3" type="audio/mpeg" />
	</audio>
	<audio <!--oncanplay="LoadingBar()"-->>
		<source src="Sounds/caseysquest.ogg" type="audio/ogg" />
		<source src="Sounds/caseysquest.mp3" type="audio/mpeg" />
	</audio>
	<audio <!--oncanplay="LoadingBar()"-->>
		<source src="Sounds/rain.ogg" type="audio/ogg" />
		<source src="Sounds/rain.mp3" type="audio/mpeg" />
	</audio>
	<audio <!--oncanplay="LoadingBar()"-->>
		<source src="Sounds/swamp.ogg" type="audio/ogg" />
		<source src="Sounds/swamp.mp3" type="audio/mpeg" />
	</audio>
	<audio <!--oncanplay="LoadingBar()"-->>
		<source src="Sounds/ACowboyLevel.ogg" type="audio/ogg" />
		<source src="Sounds/ACowboyLevel.mp3" type="audio/mpeg" />
	</audio>
	<audio <!--oncanplay="LoadingBar()"-->>
		<source src="Sounds/modLaser.ogg" type="audio/ogg" />
		<source src="Sounds/modLaser.mp3" type="audio/mpeg" />
	</audio>
	<audio <!--oncanplay="LoadingBar()"-->>
		<source src="Sounds/basslessDubstep.ogg" type="audio/ogg" />
		<source src="Sounds/basslessDubstep.mp3" type="audio/mpeg" />
	</audio>
	<audio <!--oncanplay="LoadingBar()"-->>
		<source src="Sounds/grit.ogg" type="audio/ogg" />
		<source src="Sounds/grit.mp3" type="audio/mpeg" />
	</audio>
	<audio <!--oncanplay="LoadingBar()"-->>
		<source src="Sounds/gritlong.ogg" type="audio/ogg" />
		<source src="Sounds/gritlong.mp3" type="audio/mpeg" />
	</audio>
	<audio <!--oncanplay="LoadingBar()"-->>
		<source src="Sounds/soothe.ogg" type="audio/ogg" />
		<source src="Sounds/soothe.mp3" type="audio/mpeg" />
	</audio>
	<audio <!--oncanplay="LoadingBar()"-->>
		<source src="Sounds/intro2.ogg" type="audio/ogg" />
		<source src="Sounds/intro2.mp3" type="audio/mpeg" />
	</audio>
	<audio <!--oncanplay="LoadingBar()"-->>
		<source src="Sounds/sunlight.ogg" type="audio/ogg" />
		<source src="Sounds/sunlight.mp3" type="audio/mpeg" />
	</audio>
	<audio <!--oncanplay="LoadingBar()"-->>
		<source src="Sounds/divorce.ogg" type="audio/ogg" />
		<source src="Sounds/divorce.mp3" type="audio/mpeg" />
	</audio>
	<audio <!--oncanplay="LoadingBar()"-->>
	<source src="Sounds/Kurloz.ogg" type="audio/ogg" />
	<source src="Sounds/Kurloz.mp3" type="audio/mpeg" />
</audio>
	<?php
	$scoredoc = fopen("HighScores.txt", "r") or die("Error: HighScores.txt could not be opened");
	$score1 = intval(fgets($scoredoc));
	$score2 = intval(fgets($scoredoc));
	$score3 = intval(fgets($scoredoc));
	$score4 = intval(fgets($scoredoc));
	$score5 = intval(fgets($scoredoc));
	$score6 = intval(fgets($scoredoc));
	$score7 = intval(fgets($scoredoc));
	$score8 = intval(fgets($scoredoc));
	$score9 = intval(fgets($scoredoc));
	$score10 = intval(fgets($scoredoc));
	fclose($scoredoc);

	$namedoc = fopen("Names.txt", "r") or die("Error: Names.txt could not be opened");
	(string) $name1 = fgets($namedoc);
	$name1 = str_replace("\n",'',$name1);
	(string) $name2 = fgets($namedoc);
	$name2 = str_replace("\n",'',$name2);
	(string) $name3 = fgets($namedoc);
	$name3 = str_replace("\n",'',$name3);
	(string) $name4 = fgets($namedoc);
	$name4 = str_replace("\n",'',$name4);
	(string) $name5 = fgets($namedoc);
	$name5 = str_replace("\n",'',$name5);
	(string) $name6 = fgets($namedoc);
	$name6 = str_replace("\n",'',$name6);
	(string) $name7 = fgets($namedoc);
	$name7 = str_replace("\n",'',$name7);
	(string) $name8 = fgets($namedoc);
	$name8 = str_replace("\n",'',$name8);
	(string) $name9 = fgets($namedoc);
	$name9 = str_replace("\n",'',$name9);
	(string) $name10 = fgets($namedoc);
	fclose($namedoc);

	$achievementdoc = fopen("achievements.txt", "r") or die("Error: achievements.txt could not be opened");
	$achievement1 = intval(fgets($achievementdoc));
	$achievement2 = intval(fgets($achievementdoc));
	$achievement3 = intval(fgets($achievementdoc));
	$achievement4 = intval(fgets($achievementdoc));
	$achievement5 = intval(fgets($achievementdoc));
	$achievement6 = intval(fgets($achievementdoc));
	$achievement7 = intval(fgets($achievementdoc));
	$achievement8 = intval(fgets($achievementdoc));
	$achievement9 = intval(fgets($achievementdoc));
	$achievement10 = intval(fgets($achievementdoc));
	fclose($achievementdoc);

	$pathdoc = fopen("paths.txt", "r") or die("Error: paths.txt could not be opened");
	$path1 = intval(fgets($pathdoc));
	$path2 = intval(fgets($pathdoc));
	$path3 = intval(fgets($pathdoc));
	$path4 = intval(fgets($pathdoc));
	$path5 = intval(fgets($pathdoc));
	$path6 = intval(fgets($pathdoc));
	$path7 = intval(fgets($pathdoc));
	$path8 = intval(fgets($pathdoc));
	$path9 = intval(fgets($pathdoc));
	$path10 = intval(fgets($pathdoc));
	fclose($pathdoc);
	?>
	<script language="JavaScript">
	var gscore1 = "<?php echo($score1);?>";
	var gscore2 = "<?php echo($score2);?>";
	var gscore3 = "<?php echo($score3);?>";
	var gscore4 = "<?php echo($score4);?>";
	var gscore5 = "<?php echo($score5);?>";
	var gscore6 = "<?php echo($score6);?>";
	var gscore7 = "<?php echo($score7);?>";
	var gscore8 = "<?php echo($score8);?>";
	var gscore9 = "<?php echo($score9);?>";
	var gscore10 = "<?php echo($score10);?>";
	var gname1 = "<?php echo($name1);?>";
	var gname2 = "<?php echo($name2);?>";
	var gname3 = "<?php echo($name3);?>";
	var gname4 = "<?php echo($name4);?>";
	var gname5 = "<?php echo($name5);?>";
	var gname6 = "<?php echo($name6);?>";
	var gname7 = "<?php echo($name7);?>";
	var gname8 = "<?php echo($name8);?>";
	var gname9 = "<?php echo($name9);?>";
	var gname10 = "<?php echo($name10);?>";
	var gachievement1 = "<?php echo($achievement1);?>";
	var gachievement2 = "<?php echo($achievement2);?>";
	var gachievement3 = "<?php echo($achievement3);?>";
	var gachievement4 = "<?php echo($achievement4);?>";
	var gachievement5 = "<?php echo($achievement5);?>";
	var gachievement6 = "<?php echo($achievement6);?>";
	var gachievement7 = "<?php echo($achievement7);?>";
	var gachievement8 = "<?php echo($achievement8);?>";
	var gachievement9 = "<?php echo($achievement9);?>";
	var gachievement10 = "<?php echo($achievement10);?>";
	var gpath1 = "<?php echo($path1);?>";
	var gpath2 = "<?php echo($path2);?>";
	var gpath3 = "<?php echo($path3);?>";
	var gpath4 = "<?php echo($path4);?>";
	var gpath5 = "<?php echo($path5);?>";
	var gpath6 = "<?php echo($path6);?>";
	var gpath7 = "<?php echo($path7);?>";
	var gpath8 = "<?php echo($path8);?>";
	var gpath9 = "<?php echo($path9);?>";
	var gpath10 = "<?php echo($path10);?>";
	var isFakeFS = true;

	</script>
	<div id="canvas_wrapper">
	<script src="Classes/Stacktrace.js"></script>
	<script src="libraries/ErrorLog.js"></script>
	<script src="Classes/Global.js"></script>
	<script src="Classes/Menus.js"></script>
	<script src="Classes/ui.js"></script>
	<script src="Classes/Environment.js"></script>
	<script src="Classes/EnemyAttacks.js"></script>
	<script src="Classes/Tier3EnemyAttacks.js"></script>
	<script src="Classes/Tier3Enemies.js"></script>
	<script src="Classes/Enemies.js"></script>
	<script src="Classes/Fire.js"></script>
	<script src="Classes/Ice.js"></script>
	<script src="Classes/Earth.js"></script>
	<script src="Classes/Lightning.js"></script>
	<script src="Classes/Air.js"></script>
	<script src="Classes/Weapons.js"></script>
	<script src="Classes/SpellShoot.js"></script>
	<script src="Classes/Water.js"></script>
	<script src="Classes/Dark.js"></script>
	<script type="text/javascript" src="Dumbledore64.js"></script>
	<script src="Classes/Pickups.js"></script>
	<script src="Classes/Mystic.js"></script>
	<script src="Classes/Light.js"></script>
	<script src="Classes/DrawSpells.js"></script>
	<script src="Classes/Reset.js"></script>
	<script>
		canvas.style.width= '1024px';
	</script>
	</div>
</div>
<div align="center">
	<a href="http://www.indiedb.com/games/dumble" title="View Dumbledore64 on Indie DB" target="_blank"><img src="http://button.indiedb.com/rating/medium/games/20380.png" alt="Dumble" /></a>
</div>
<script>
</script>
<script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-50294899-1', 'glassknuckle.com');
  ga('send', 'pageview');

</script>
</body>

</html>
