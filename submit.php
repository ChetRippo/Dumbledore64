<?php
echo "<title>Submitting High Scores</title>";
echo "Submitting High Scores...\n";

(string) $name=$_GET["name"];
(int) $score=$_GET["score"];
(string) $hash=$_GET["hash"];
(string) $scorestring=$score;
(int) $achievement=$_GET["achievement"];
(int) $path=$_GET["path"];

if(md5($scorestring) === $hash){
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
	(string) $name2 = fgets($namedoc);
	(string) $name3 = fgets($namedoc);
	(string) $name4 = fgets($namedoc);
	(string) $name5 = fgets($namedoc);
	(string) $name6 = fgets($namedoc);
	(string) $name7 = fgets($namedoc);
	(string) $name8 = fgets($namedoc);
	(string) $name9 = fgets($namedoc);
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
	
	if ($score10<$score){
		if ($score9<$score){
			if ($score8<$score){
				if ($score7<$score){
					if ($score6<$score){
						if ($score5<$score){
							if ($score4<$score){
								if ($score3<$score){
									if ($score2<$score){
										if ($score1<$score){
											$score10=$score9;
											$score9=$score8;
											$score8=$score7;
											$score7=$score6;
											$score6=$score5;
											$score5=$score4;
											$score4=$score3;
											$score3=$score2;
											$score2=$score1;
											$score1=$score;
											$name10=$name9;
											$name9=$name8;
											$name8=$name7;	
											$name7=$name6;
											$name6=$name5;
											$name5=$name4;
											$name4=$name3;
											$name3=$name2;	
											$name2=$name1;
											$name1=$name;
											$achievement10=$achievement9;
											$achievement9=$achievement8;
											$achievement8=$achievement7;	
											$achievement7=$achievement6;
											$achievement6=$achievement5;
											$achievement5=$achievement4;
											$achievement4=$achievement3;
											$achievement3=$achievement2;	
											$achievement2=$achievement1;
											$achievement1=$achievement;
											$path10=$path9;
											$path9=$path8;
											$path8=$path7;	
											$path7=$path6;
											$path6=$path5;
											$path5=$path4;
											$path4=$path3;
											$path3=$path2;	
											$path2=$path1;
											$path1=$path;
										}
										else{
											$score10=$score9;
											$score9=$score8;
											$score8=$score7;
											$score7=$score6;
											$score6=$score5;
											$score5=$score4;
											$score4=$score3;
											$score3=$score2;
											$score2=$score;
											$name10=$name9;
											$name9=$name8;
											$name8=$name7;	
											$name7=$name6;
											$name6=$name5;
											$name5=$name4;
											$name4=$name3;	
											$name3=$name2;
											$name2=$name;
											$achievement10=$achievement9;
											$achievement9=$achievement8;
											$achievement8=$achievement7;	
											$achievement7=$achievement6;
											$achievement6=$achievement5;
											$achievement5=$achievement4;
											$achievement4=$achievement3;	
											$achievement3=$achievement2;
											$achievement2=$achievement;
											$path10=$path9;
											$path9=$path8;
											$path8=$path7;	
											$path7=$path6;
											$path6=$path5;
											$path5=$path4;
											$path4=$path3;
											$path3=$path2;	
											$path2=$path;
										}
									}			
									else{
										$score10=$score9;
										$score9=$score8;
										$score8=$score7;
										$score7=$score6;
										$score6=$score5;
										$score5=$score4;
										$score4=$score3;
										$score3=$score;
										$name10=$name9;
										$name9=$name8;
										$name8=$name7;	
										$name7=$name6;
										$name6=$name5;
										$name5=$name4;
										$name4=$name3;
										$name3=$name;
										$achievement10=$achievement9;
										$achievement9=$achievement8;
										$achievement8=$achievement7;	
										$achievement7=$achievement6;
										$achievement6=$achievement5;
										$achievement5=$achievement4;
										$achievement4=$achievement3;
										$achievement3=$achievement;
										$path10=$path9;
										$path9=$path8;
										$path8=$path7;	
										$path7=$path6;
										$path6=$path5;
										$path5=$path4;
										$path4=$path3;
										$path3=$path;
									}
								}		
								else{
									$score10=$score9;
									$score9=$score8;
									$score8=$score7;
									$score7=$score6;
									$score6=$score5;
									$score5=$score4;
									$score4=$score;
									$name10=$name9;
									$name9=$name8;
									$name8=$name7;	
									$name7=$name6;
									$name6=$name5;
									$name5=$name4;
									$name4=$name;
									$achievement10=$achievement9;
									$achievement9=$achievement8;
									$achievement8=$achievement7;	
									$achievement7=$achievement6;
									$achievement6=$achievement5;
									$achievement5=$achievement4;
									$achievement4=$achievement;
									$path10=$path9;
									$path9=$path8;
									$path8=$path7;	
									$path7=$path6;
									$path6=$path5;
									$path5=$path4;
									$path4=$path;
								}
							}
							else{
								$score10=$score9;
								$score9=$score8;
								$score8=$score7;
								$score7=$score6;
								$score6=$score5;
								$score5=$score;
								$name10=$name9;
								$name9=$name8;
								$name8=$name7;	
								$name7=$name6;
								$name6=$name5;
								$name5=$name;
								$achievement10=$achievement9;
								$achievement9=$achievement8;
								$achievement8=$achievement7;	
								$achievement7=$achievement6;
								$achievement6=$achievement5;
								$achievement5=$achievement;
								$path10=$path9;
								$path9=$path8;
								$path8=$path7;	
								$path7=$path6;
								$path6=$path5;
								$path5=$path;
							}
						}
						else{
							$score10=$score9;
							$score9=$score8;
							$score8=$score7;
							$score7=$score6;
							$score6=$score;
							$name10=$name9;
							$name9=$name8;
							$name8=$name7;	
							$name7=$name6;
							$name6=$name;
							$achievement10=$achievement9;
							$achievement9=$achievement8;
							$achievement8=$achievement7;	
							$achievement7=$achievement6;
							$achievement6=$achievement;
							$path10=$path9;
							$path9=$path8;
							$path8=$path7;	
							$path7=$path6;
							$path6=$path;
						}
					}
					else{
						$score10=$score9;
						$score9=$score8;
						$score8=$score7;
						$score7=$score;
						$name10=$name9;
						$name9=$name8;
						$name8=$name7;	
						$name7=$name;
						$achievement10=$achievement9;
						$achievement9=$achievement8;
						$achievement8=$achievement7;	
						$achievement7=$achievement;
						$path10=$path9;
						$path9=$path8;
						$path8=$path7;	
						$path7=$path;
					}
				}
				else{
					$score10=$score9;
					$score9=$score8;
					$score8=$score;
					$name10=$name9;
					$name9=$name8;
					$name8=$name;
					$achievement10=$achievement9;
					$achievement9=$achievement8;
					$achievement8=$achievement;	
					$path10=$path9;
					$path9=$path8;
					$path8=$path;
				}
			}
			else{
				$score10=$score9;
				$score9=$score;
				$name10=$name9;
				$name9=$name;
				$achievement10=$achievement9;
				$achievement9=$achievement;
				$path10=$path9;
				$path9=$path;
			}
		}
		else{
			$score10=$score;
			$name10=$name;
			$achievement10=$achievement;
			$path10=$path;
		}
	}
	$scoresave = fopen("HighScores.txt", "w") or die("Error: HighScores.txt could not be opened");
	(string) $stringData = (int) $score1 . "\n";
	fwrite($scoresave, $stringData);
	(string) $stringData = (int) $score2 . "\n";
	fwrite($scoresave, $stringData);
	(string) $stringData = (int) $score3 . "\n";
	fwrite($scoresave, $stringData);
	(string) $stringData = (int) $score4 . "\n";
	fwrite($scoresave, $stringData);
	(string) $stringData = (int) $score5 . "\n";
	fwrite($scoresave, $stringData);
	(string) $stringData = (int) $score6 . "\n";
	fwrite($scoresave, $stringData);
	(string) $stringData = (int) $score7 . "\n";
	fwrite($scoresave, $stringData);
	(string) $stringData = (int) $score8 . "\n";
	fwrite($scoresave, $stringData);
	(string) $stringData = (int) $score9 . "\n";
	fwrite($scoresave, $stringData);
	(string) $stringData = (int) $score10;
	fwrite($scoresave, $stringData);
	fclose($scoresave);

	$namesave = fopen("Names.txt", "w") or die("Error: Names.txt could not be opened");
	(string) $stringData = (string) $name1;
	$stringData = str_replace("\n",'',$stringData);
	$stringData = $stringData . "\n";
	fwrite($namesave, $stringData);
	(string) $stringData = (string) $name2;
	$stringData = str_replace("\n",'',$stringData);
	$stringData = $stringData . "\n";
	fwrite($namesave, $stringData);
	(string) $stringData = (string) $name3;
	$stringData = str_replace("\n",'',$stringData);
	$stringData = $stringData . "\n";
	fwrite($namesave, $stringData);
	(string) $stringData = (string) $name4;
	$stringData = str_replace("\n",'',$stringData);
	$stringData = $stringData . "\n";
	fwrite($namesave, $stringData);
	(string) $stringData = (string) $name5;
	$stringData = str_replace("\n",'',$stringData);
	$stringData = $stringData . "\n";
	fwrite($namesave, $stringData);
	(string) $stringData = (string) $name6;
	$stringData = str_replace("\n",'',$stringData);
	$stringData = $stringData . "\n";
	fwrite($namesave, $stringData);
	(string) $stringData = (string) $name7;
	$stringData = str_replace("\n",'',$stringData);
	$stringData = $stringData . "\n";
	fwrite($namesave, $stringData);
	(string) $stringData = (string) $name8;
	$stringData = str_replace("\n",'',$stringData);
	$stringData = $stringData . "\n";
	fwrite($namesave, $stringData);
	(string) $stringData = (string) $name9;
	$stringData = str_replace("\n",'',$stringData);
	$stringData = $stringData . "\n";
	fwrite($namesave, $stringData);
	(string) $stringData = (string) $name10;
	$stringData = str_replace("\n",'',$stringData);
	fwrite($namesave, $stringData);
	fclose($namesave);
	
	$achievementsave = fopen("achievements.txt", "w") or die("Error: achievements.txt could not be opened");
	(string) $stringData = (int) $achievement1 . "\n";
	fwrite($achievementsave, $stringData);
	(string) $stringData = (int) $achievement2 . "\n";
	fwrite($achievementsave, $stringData);
	(string) $stringData = (int) $achievement3 . "\n";
	fwrite($achievementsave, $stringData);
	(string) $stringData = (int) $achievement4 . "\n";
	fwrite($achievementsave, $stringData);
	(string) $stringData = (int) $achievement5 . "\n";
	fwrite($achievementsave, $stringData);
	(string) $stringData = (int) $achievement6 . "\n";
	fwrite($achievementsave, $stringData);
	(string) $stringData = (int) $achievement7 . "\n";
	fwrite($achievementsave, $stringData);
	(string) $stringData = (int) $achievement8 . "\n";
	fwrite($achievementsave, $stringData);
	(string) $stringData = (int) $achievement9 . "\n";
	fwrite($achievementsave, $stringData);
	(string) $stringData = (int) $achievement10;
	fwrite($achievementsave, $stringData);
	fclose($achievementsave);
	
	$pathsave = fopen("paths.txt", "w") or die("Error: paths.txt could not be opened");
	(string) $stringData = (int) $path1 . "\n";
	fwrite($pathsave, $stringData);
	(string) $stringData = (int) $path2 . "\n";
	fwrite($pathsave, $stringData);
	(string) $stringData = (int) $path3 . "\n";
	fwrite($pathsave, $stringData);
	(string) $stringData = (int) $path4 . "\n";
	fwrite($pathsave, $stringData);
	(string) $stringData = (int) $path5 . "\n";
	fwrite($pathsave, $stringData);
	(string) $stringData = (int) $path6 . "\n";
	fwrite($pathsave, $stringData);
	(string) $stringData = (int) $path7 . "\n";
	fwrite($pathsave, $stringData);
	(string) $stringData = (int) $path8 . "\n";
	fwrite($pathsave, $stringData);
	(string) $stringData = (int) $path9 . "\n";
	fwrite($pathsave, $stringData);
	(string) $stringData = (int) $path10;
	fwrite($pathsave, $stringData);
	fclose($pathsave);
	echo "Submission complete";
}
else{
	echo "FATAL ERROR: CHEATING DETECTED. VIRUS DOWNLOADED.";
}
?>
