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
	fclose($scoredoc);

	$namedoc = fopen("Names.txt", "r") or die("Error: Names.txt could not be opened");
	(string) $name1 = fgets($namedoc);
	(string) $name2 = fgets($namedoc);
	(string) $name3 = fgets($namedoc);
	(string) $name4 = fgets($namedoc);
	(string) $name5 = fgets($namedoc);
	fclose($namedoc);

	if ($score5<$score){
		if ($score4<$score){
			if ($score3<$score){
				if ($score2<$score){
					if ($score1<$score){
						$score5=$score4;
						$score4=$score3;
						$score3=$score2;
						$score2=$score1;
						$score1=$score;
						$name5=$name4;
						$name4=$name3;
						$name3=$name2;	
						$name2=$name1;
						$name1=$name;
					}
					else{
						$score5=$score4;
						$score4=$score3;
						$score3=$score2;
						$score2=$score;
						$name5=$name4;
						$name4=$name3;	
						$name3=$name2;
						$name2=$name;
					}
				}			
				else{
					$score5=$score4;
					$score4=$score3;
					$score3=$score;
					$name5=$name4;
					$name4=$name3;
					$name3=$name;
				}
			}		
			else{
				$score5=$score4;
				$score4=$score;
				$name5=$name4;
				$name4=$name;
			}
		}
		else{
			$score5=$score;
			$name5=$name;
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
	(string) $stringData = (int) $score5;
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
	fwrite($namesave, $stringData);
	fclose($namesave);
	echo "Submission complete";
}
else{
	echo "FATAL ERROR: CHEATING DETECTED. VIRUS DOWNLOADED.";
}
?>
