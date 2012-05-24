<?php
echo "<title>Submitting High Scores</title>";
echo "Submitting High Scores...\n";

(string) $name=$_GET["name"];
(int) $score=$_GET["score"];
(string) $hash=$_GET["hash"];
(string) $scorestring=$score;

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
					}
				}
				else{
					$score10=$score9;
					$score9=$score8;
					$score8=$score;
					$name10=$name9;
					$name9=$name8;
					$name8=$name;	
				}
			}
			else{
				$score10=$score9;
				$score9=$score;
				$name10=$name9;
				$name9=$name;
			}
		}
		else{
			$score10=$score;
			$name10=$name;
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
	echo "Submission complete";
}
else{
	echo "FATAL ERROR: CHEATING DETECTED. VIRUS DOWNLOADED.";
}
?>
