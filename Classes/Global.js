//----------------------------------- Setup -----------------------------------------------------------------------------------------//
var VersionNumb = "0.9.3.Santa ";
var upDate = "Nov 22 2012";
// Canvas, Frames per Second, KeysDown, Global vars
var canvas = document.createElement("canvas");
canvas.width = 800;
canvas.height = 576;
canvas.tabIndex = 1;
document.body.appendChild(canvas);
var ctx = canvas.getContext("2d");
var cX = new Number();
var cY = new Number();
var hX = new Number();
var hY = new Number();
var STATE = 0;
//Pause menu
var preSTATE = 0;
var keytimer = 0;
//high scores
var nu = 0;
var hs = 0;
// Mouse listeners
canvas.addEventListener("mousedown", getPosition, false);
canvas.addEventListener("mousemove", getPositionhover, false);
var FPS = 30;
var keysDown = {};
var cd = 0;
var cdTop = 20;
var hptimer = 0;
var spell1 = "N/A";
var spell2 = "N/A";
var spell = "N/A";
var spell1pic = "N/A";
var spell2pic = "N/A";
//S*
var ErrorLogs = "Error Count: 0";
var Error = Aes.Ctr.encrypt("0", ErrorLogs, 256);
var staticm = 1;
var multtimer = 0;
//colors
var colorz = {1: "#D0D0D0", 2: "#CC0000", 3: "#00FFFF", 4: "yellow", 5: "#33FF00", 6: "#663399"};
var colorNum = 1;
//elecolors
var FireColor = "#bd2023";
var IceColor = "#5ea89f";
var EarthColor = "#267332";
var LightningColor = "#e8da39";
var AirColor = "#94abb0";
var MysticColor = "#663399";
var WaterColor = "#325dd9";
var DarkColor = "#05121a";
var DevvColor = "#bfe3b6";
var LightColor = "#F5ECCE";
//for ui
var emptyColor = "#495080";
var chargeColor = "#f76c5f";
var fullColor = "#d5331e";
var prevSpellRC = {1: "N/A", 2: "N/A", 3: "N/A", 4: "N/A", 5: "N/A", 6: "N/A", 7: "N/A", 8: "N/A"};
// Key Listeners
addEventListener("keydown", function (e) {keysDown[e.keyCode] = true;
											if(e.keyCode == 40 || e.keyCode == 38 || e.keyCode == 8 || e.keyCode == 32 || e.keyCode == 13){
												e.preventDefault();}}, false);
addEventListener("keyup", function (e) {delete keysDown[e.keyCode];}, false);
// Environment
var planted = false;
var jungleAni = false;
//put fallen trees on top
var treeFall = 1;
// Alpha
var Alpha = 1;
//StateTimer: for staying in levels with no boss
var StateTimer = 0;
//End of game pause
var deathTimer = -1;
//swampindex
var Swindex = 0;
var swampFront =false;
var swampIndex = 0;
var swampBoardindex = 0;
//forest bkg index
var forestIndex = 1;
var firebkgIndex = 1;
//keep track of fog # in jungle
var fogNum = 1;
//Achievements: 3D, 
var AList = {0: true, 1: false, 2: false, 3: false, 4: false, 5: false};
var maxAchiev = 5;
var Achiev = 0;
//Tutorial
var moved = false;
var shot = false;
var TutKill1 = false;
var TutKill2 = false;
var TutFadeIndex = 0;
var FadeIn = false;
//path for map
var levelorder = 0;
//------------------------------------------------------- Graphics ------------------------------------------------------------------//
//---------------------------------------------------- Menu Graphics ----------------------------------------------------------------//
//menu
//not menu SANTA
var santaL = new Image();
santaL.src = "grafix/effects/santhat/sant.l.png";
santaL.onload = LoadingBar;
var santaR = new Image();
santaR.src = "grafix/effects/santhat/sant.r.png";
santaR.onload = LoadingBar;
var menuBack = new Image();
menuBack.src = "grafix/menu/festive/xmas.bkg.png";
menuBack.onload = LoadingBar;
var Title = new Image();
Title.src = "grafix/menu/festive/xmas.title.png";
Title.onload = LoadingBar;
var festivehatTitle = new Image();
festivehatTitle.src = "grafix/menu/festive/xmas.newgamehat.png";
festivehatTitle.onload = LoadingBar;
var creditsmenu = new Image();
creditsmenu.src = "grafix/menu/mainmenu.compressed/credits.png";
creditsmenu.onload = LoadingBar;
var helpmenu = new Image();
helpmenu.src = "grafix/menu/mainmenu.compressed/help.png";
helpmenu.onload = LoadingBar;
var newgamemenu = new Image();
newgamemenu.src = "grafix/menu/mainmenu.compressed/newgame.png";
newgamemenu.onload = LoadingBar;
var noselectmenu = new Image();
noselectmenu.src = "grafix/menu/mainmenu.compressed/noneselect.png";
noselectmenu.onload = LoadingBar;
var optionsmenu = new Image();
optionsmenu.src = "grafix/menu/mainmenu.compressed/options.png";
optionsmenu.onload = LoadingBar;
var scoremenu = new Image();
scoremenu.src = "grafix/menu/mainmenu.compressed/score.png";
scoremenu.onload = LoadingBar;
var glasses3d = new Image();
glasses3d.src = "grafix/menu/3dglass.png";
glasses3d.onload = LoadingBar;
//high scores
//bkg
var highscoreBack = new Image();
highscoreBack.src = "grafix/menu/scores/bkg.png";
highscoreBack.onload = LoadingBar;
//ranks
var rank15 = new Image();
rank15.src = "grafix/menu/scores/rank.15.png";
rank15.onload = LoadingBar;
var rank610 = new Image();
rank610.src = "grafix/menu/scores/rank.610.png";
rank610.onload = LoadingBar;
//titles
var HighScoreTitle = new Image();
HighScoreTitle.src = "grafix/menu/scores/highscores.title.png";
HighScoreTitle.onload = LoadingBar;
var EnterName = new Image();
EnterName.src = "grafix/menu/scores/enter.name.png";
EnterName.onload = LoadingBar;
var PopupBlocker = new Image();
PopupBlocker.src = "grafix/menu/scores/popup.png";
PopupBlocker.onload = LoadingBar;
//letters
var letterA = new Image();
letterA.src = "grafix/menu/scores/name/a.png";
letterA.onload = LoadingBar;
var letterB = new Image();
letterB.src = "grafix/menu/scores/name/b.png";
letterB.onload = LoadingBar;
var letterC = new Image();
letterC.src = "grafix/menu/scores/name/c.png";
letterC.onload = LoadingBar;
var letterD = new Image();
letterD.src = "grafix/menu/scores/name/d.png";
letterD.onload = LoadingBar;
var letterE = new Image();
letterE.src = "grafix/menu/scores/name/e.png";
letterE.onload = LoadingBar;
var letterF = new Image();
letterF.src = "grafix/menu/scores/name/f.png";
letterF.onload = LoadingBar;
var letterG = new Image();
letterG.src = "grafix/menu/scores/name/g.png";
letterG.onload = LoadingBar;
var letterH = new Image();
letterH.src = "grafix/menu/scores/name/h.png";
letterH.onload = LoadingBar;
var letterI = new Image();
letterI.src = "grafix/menu/scores/name/i.png";
letterI.onload = LoadingBar;
var letterJ = new Image();
letterJ.src = "grafix/menu/scores/name/j.png";
letterJ.onload = LoadingBar;
var letterK = new Image();
letterK.src = "grafix/menu/scores/name/k.png";
letterK.onload = LoadingBar;
var letterL = new Image();
letterL.src = "grafix/menu/scores/name/l.png";
letterL.onload = LoadingBar;
var letterM = new Image();
letterM.src = "grafix/menu/scores/name/m.png";
letterM.onload = LoadingBar;
var letterN = new Image();
letterN.src = "grafix/menu/scores/name/n.png";
letterN.onload = LoadingBar;
var letterO = new Image();
letterO.src = "grafix/menu/scores/name/o.png";
letterO.onload = LoadingBar;
var letterP = new Image();
letterP.src = "grafix/menu/scores/name/p.png";
letterP.onload = LoadingBar;
var letterQ = new Image();
letterQ.src = "grafix/menu/scores/name/q.png";
letterQ.onload = LoadingBar;
var letterR = new Image();
letterR.src = "grafix/menu/scores/name/r.png";
letterR.onload = LoadingBar;
var letterS = new Image();
letterS.src = "grafix/menu/scores/name/s.png";
letterS.onload = LoadingBar;
var letterT = new Image();
letterT.src = "grafix/menu/scores/name/t.png";
letterT.onload = LoadingBar;
var letterU = new Image();
letterU.src = "grafix/menu/scores/name/u.png";
letterU.onload = LoadingBar;
var letterV = new Image();
letterV.src = "grafix/menu/scores/name/v.png";
letterV.onload = LoadingBar;
var letterW = new Image();
letterW.src = "grafix/menu/scores/name/w.png";
letterW.onload = LoadingBar;
var letterX = new Image();
letterX.src = "grafix/menu/scores/name/x.png";
letterX.onload = LoadingBar;
var letterY = new Image();
letterY.src = "grafix/menu/scores/name/y.png";
letterY.onload = LoadingBar;
var letterZ = new Image();
letterZ.src = "grafix/menu/scores/name/z.png";
letterZ.onload = LoadingBar;
var letterCursor = new Image();
letterCursor.src = "grafix/menu/scores/name/cursor.png";
letterCursor.onload = LoadingBar;
//title scores
var titlescoreZeroT = new Image();
titlescoreZeroT.src = "grafix/menu/scores/titlescore/0.hold.png";
titlescoreZeroT.onload = LoadingBar;
var titlescoreZero = new Image();
titlescoreZero.src = "grafix/menu/scores/titlescore/0.png";
titlescoreZero.onload = LoadingBar;
var titlescoreOne = new Image();
titlescoreOne.src = "grafix/menu/scores/titlescore/1.png";
titlescoreOne.onload = LoadingBar;
var titlescoreTwo = new Image();
titlescoreTwo.src = "grafix/menu/scores/titlescore/2.png";
titlescoreTwo.onload = LoadingBar;
var titlescoreThree = new Image();
titlescoreThree.src = "grafix/menu/scores/titlescore/3.png";
titlescoreThree.onload = LoadingBar;
var titlescoreFour = new Image();
titlescoreFour.src = "grafix/menu/scores/titlescore/4.png";
titlescoreFour.onload = LoadingBar;
var titlescoreFive = new Image();
titlescoreFive.src = "grafix/menu/scores/titlescore/5.png";
titlescoreFive.onload = LoadingBar;
var titlescoreSix = new Image();
titlescoreSix.src = "grafix/menu/scores/titlescore/6.png";
titlescoreSix.onload = LoadingBar;
var titlescoreSeven = new Image();
titlescoreSeven.src = "grafix/menu/scores/titlescore/7.png";
titlescoreSeven.onload = LoadingBar;
var titlescoreEight = new Image();
titlescoreEight.src = "grafix/menu/scores/titlescore/8.png";
titlescoreEight.onload = LoadingBar;
var titlescoreNine = new Image();
titlescoreNine.src = "grafix/menu/scores/titlescore/9.png";
titlescoreNine.onload = LoadingBar;
//achiev scroller
var AScroller1 = new Image();
AScroller1.src = "grafix/menu/scores/indicate.l1.png";
AScroller1.onload = LoadingBar;
var AScroller2 = new Image();
AScroller2.src = "grafix/menu/scores/indicate.l2.png";
AScroller2.onload = LoadingBar;
//high score scrollers
var HScrollD = new Image();
HScrollD.src = "grafix/menu/scores/scroll.d.png";
HScrollD.onload = LoadingBar;
var HScrollU = new Image();
HScrollU.src = "grafix/menu/scores/scroll.u.png";
HScrollU.onload = LoadingBar;
//high score indicator
var HSStripe1 = new Image();
HSStripe1.src = "grafix/menu/scores/stripes/1.png";
HSStripe1.onload = LoadingBar;
var HSStripe2 = new Image();
HSStripe2.src = "grafix/menu/scores/stripes/2.png";
HSStripe2.onload = LoadingBar;
var HSStripe3 = new Image();
HSStripe3.src = "grafix/menu/scores/stripes/3.png";
HSStripe3.onload = LoadingBar;
var HSStripe4 = new Image();
HSStripe4.src = "grafix/menu/scores/stripes/4.png";
HSStripe4.onload = LoadingBar;
var HSStripe5 = new Image();
HSStripe5.src = "grafix/menu/scores/stripes/5.png";
HSStripe5.onload = LoadingBar;
var HSStripe6 = new Image();
HSStripe6.src = "grafix/menu/scores/stripes/6.png";
HSStripe6.onload = LoadingBar;
var HSStripe7 = new Image();
HSStripe7.src = "grafix/menu/scores/stripes/7.png";
HSStripe7.onload = LoadingBar;
var HSStripe8 = new Image();
HSStripe8.src = "grafix/menu/scores/stripes/8.png";
HSStripe8.onload = LoadingBar;
var HSStripes = {1: HSStripe1, 2: HSStripe2, 3: HSStripe3, 4: HSStripe4, 5: HSStripe5, 6: HSStripe6, 7: HSStripe7, 8: HSStripe8};
//back and submit
var HSback = new Image();
HSback.src = "grafix/menu/scores/back.png";
HSback.onload = LoadingBar;
var HSbackArrow = new Image();
HSbackArrow.src = "grafix/menu/scores/backarrow.1.png";
HSbackArrow.onload = LoadingBar;
var HSsubmit = new Image();
HSsubmit.src = "grafix/menu/scores/submit.png";
HSsubmit.onload = LoadingBar;
var HSsubmitArrow = new Image();
HSsubmitArrow.src = "grafix/menu/scores/submitarrow.1.png";
HSsubmitArrow.onload = LoadingBar;
//Hp up
var maxUP = new Image();
maxUP.src = "grafix/powers/heartup/treeheart.png";
maxUP.onload = LoadingBar;
var DragonmaxUP = new Image();
DragonmaxUP.src = "grafix/powers/heartup/fireheart.png";
DragonmaxUP.onload = LoadingBar;
var ThiefLuckUP = new Image();
ThiefLuckUP.src = "grafix/powers/heartup/thiefheart.png";
ThiefLuckUP.onload = LoadingBar;
var GenieUp = new Image();
GenieUp.src = "grafix/powers/heartup/genieheart.png";
GenieUp.onload = LoadingBar;
//Map Graphics
var MeadowMap = new Image();
MeadowMap.src = "grafix/menu/scores/map/1.grass.png";
MeadowMap.onload = LoadingBar;
var JungleMap = new Image();
JungleMap.src = "grafix/menu/scores/map/2.jungle.png";
JungleMap.onload = LoadingBar;
var FireMap = new Image();
FireMap.src = "grafix/menu/scores/map/2.fire.png";
FireMap.onload = LoadingBar;
var SwampMap = new Image();
SwampMap.src = "grafix/menu/scores/map/3.swamp.png";
SwampMap.onload = LoadingBar;
var DesertMap = new Image();
DesertMap.src = "grafix/menu/scores/map/3.desert.png";
DesertMap.onload = LoadingBar;
var MapBkg = new Image();
MapBkg.src = "grafix/menu/scores/map/mapbkg.png";
MapBkg.onload = LoadingBar;
//paths
var GrassFire = new Image();
GrassFire.src = "grafix/menu/scores/map/path.self/1.grass-fire.png";
GrassFire.onload = LoadingBar;
var GrassJungle = new Image();
GrassJungle.src = "grafix/menu/scores/map/path.self/1.grass-jungle.png";
GrassJungle.onload = LoadingBar;
var JungleSwamp = new Image();
JungleSwamp.src = "grafix/menu/scores/map/path.self/2.jungle-swamp.png";
JungleSwamp.onload = LoadingBar;
var FireDesert = new Image();
FireDesert.src = "grafix/menu/scores/map/path.self/2.fire-desert.png";
FireDesert.onload = LoadingBar;
//highlights
var GrassFireH = new Image();
GrassFireH.src = "grafix/menu/scores/map/path.highlight/1.grass-fire.png";
GrassFireH.onload = LoadingBar;
var GrassJungleH = new Image();
GrassJungleH.src = "grafix/menu/scores/map/path.highlight/1.grass-jungle.png";
GrassJungleH.onload = LoadingBar;
var JungleSwampH = new Image();
JungleSwampH.src = "grafix/menu/scores/map/path.highlight/2.jungle-swamp.png";
JungleSwampH.onload = LoadingBar;
var FireDesertH = new Image();
FireDesertH.src = "grafix/menu/scores/map/path.highlight/2.fire-desert.png";
FireDesertH.onload = LoadingBar;
//score highlight hover
var scoreHighlightHover = new Image();
scoreHighlightHover.src = "grafix/menu/scores/highlight.png";
scoreHighlightHover.onload = LoadingBar;
var YScoreBurst0 = new Image();
YScoreBurst0.src = "grafix/menu/HUD/SCOREBURSTS/1 yellow/0.png";
YScoreBurst0.onload = LoadingBar;
var YScoreBurst1 = new Image();
YScoreBurst1.src = "grafix/menu/HUD/SCOREBURSTS/1 yellow/1.png";
YScoreBurst1.onload = LoadingBar;
var YScoreBurst2 = new Image();
YScoreBurst2.src = "grafix/menu/HUD/SCOREBURSTS/1 yellow/2.png";
YScoreBurst2.onload = LoadingBar;
var YScoreBurst3 = new Image();
YScoreBurst3.src = "grafix/menu/HUD/SCOREBURSTS/1 yellow/3.png";
YScoreBurst3.onload = LoadingBar;
var YScoreBurst4 = new Image();
YScoreBurst4.src = "grafix/menu/HUD/SCOREBURSTS/1 yellow/4.png";
YScoreBurst4.onload = LoadingBar;
var YScoreBurst5 = new Image();
YScoreBurst5.src = "grafix/menu/HUD/SCOREBURSTS/1 yellow/5.png";
YScoreBurst5.onload = LoadingBar;
var YScoreBurst6 = new Image();
YScoreBurst6.src = "grafix/menu/HUD/SCOREBURSTS/1 yellow/6.png";
YScoreBurst6.onload = LoadingBar;
var YScoreBurst7 = new Image();
YScoreBurst7.src = "grafix/menu/HUD/SCOREBURSTS/1 yellow/7.png";
YScoreBurst7.onload = LoadingBar;
var YScoreBurst8 = new Image();
YScoreBurst8.src = "grafix/menu/HUD/SCOREBURSTS/1 yellow/8.png";
YScoreBurst8.onload = LoadingBar;
var YScoreBurst9 = new Image();
YScoreBurst9.src = "grafix/menu/HUD/SCOREBURSTS/1 yellow/9.png";
YScoreBurst9.onload = LoadingBar;
var YellowScore = {0: YScoreBurst0, 1: YScoreBurst1, 2: YScoreBurst2, 3: YScoreBurst3, 4: YScoreBurst4, 5: YScoreBurst5, 6: YScoreBurst6, 7: YScoreBurst7, 8: YScoreBurst8, 9: YScoreBurst9};
var OScoreBurst0 = new Image();
OScoreBurst0.src = "grafix/menu/HUD/SCOREBURSTS/2 orange/0.png";
OScoreBurst0.onload = LoadingBar;
var OScoreBurst1 = new Image();
OScoreBurst1.src = "grafix/menu/HUD/SCOREBURSTS/2 orange/1.png";
OScoreBurst1.onload = LoadingBar;
var OScoreBurst2 = new Image();
OScoreBurst2.src = "grafix/menu/HUD/SCOREBURSTS/2 orange/2.png";
OScoreBurst2.onload = LoadingBar;
var OScoreBurst3 = new Image();
OScoreBurst3.src = "grafix/menu/HUD/SCOREBURSTS/2 orange/3.png";
OScoreBurst3.onload = LoadingBar;
var OScoreBurst4 = new Image();
OScoreBurst4.src = "grafix/menu/HUD/SCOREBURSTS/2 orange/4.png";
OScoreBurst4.onload = LoadingBar;
var OScoreBurst5 = new Image();
OScoreBurst5.src = "grafix/menu/HUD/SCOREBURSTS/2 orange/5.png";
OScoreBurst5.onload = LoadingBar;
var OScoreBurst6 = new Image();
OScoreBurst6.src = "grafix/menu/HUD/SCOREBURSTS/2 orange/6.png";
OScoreBurst6.onload = LoadingBar;
var OScoreBurst7 = new Image();
OScoreBurst7.src = "grafix/menu/HUD/SCOREBURSTS/2 orange/7.png";
OScoreBurst7.onload = LoadingBar;
var OScoreBurst8 = new Image();
OScoreBurst8.src = "grafix/menu/HUD/SCOREBURSTS/2 orange/8.png";
OScoreBurst8.onload = LoadingBar;
var OScoreBurst9 = new Image();
OScoreBurst9.src = "grafix/menu/HUD/SCOREBURSTS/2 orange/9.png";
OScoreBurst9.onload = LoadingBar;
var OrangeScore = {0: OScoreBurst0, 1: OScoreBurst1, 2: OScoreBurst2, 3: OScoreBurst3, 4: OScoreBurst4, 5: OScoreBurst5, 6: OScoreBurst6, 7: OScoreBurst7, 8: OScoreBurst8, 9: OScoreBurst9};
var RScoreBurst0 = new Image();
RScoreBurst0.src = "grafix/menu/HUD/SCOREBURSTS/3 red/0.png";
RScoreBurst0.onload = LoadingBar;
var RScoreBurst1 = new Image();
RScoreBurst1.src = "grafix/menu/HUD/SCOREBURSTS/3 red/1.png";
RScoreBurst1.onload = LoadingBar;
var RScoreBurst2 = new Image();
RScoreBurst2.src = "grafix/menu/HUD/SCOREBURSTS/3 red/2.png";
RScoreBurst2.onload = LoadingBar;
var RScoreBurst3 = new Image();
RScoreBurst3.src = "grafix/menu/HUD/SCOREBURSTS/3 red/3.png";
RScoreBurst3.onload = LoadingBar;
var RScoreBurst4 = new Image();
RScoreBurst4.src = "grafix/menu/HUD/SCOREBURSTS/3 red/4.png";
RScoreBurst4.onload = LoadingBar;
var RScoreBurst5 = new Image();
RScoreBurst5.src = "grafix/menu/HUD/SCOREBURSTS/3 red/5.png";
RScoreBurst5.onload = LoadingBar;
var RScoreBurst6 = new Image();
RScoreBurst6.src = "grafix/menu/HUD/SCOREBURSTS/3 red/6.png";
RScoreBurst6.onload = LoadingBar;
var RScoreBurst7 = new Image();
RScoreBurst7.src = "grafix/menu/HUD/SCOREBURSTS/3 red/7.png";
RScoreBurst7.onload = LoadingBar;
var RScoreBurst8 = new Image();
RScoreBurst8.src = "grafix/menu/HUD/SCOREBURSTS/3 red/8.png";
RScoreBurst8.onload = LoadingBar;
var RScoreBurst9 = new Image();
RScoreBurst9.src = "grafix/menu/HUD/SCOREBURSTS/3 red/9.png";
RScoreBurst9.onload = LoadingBar;
var RScoreBurstEx = new Image();
RScoreBurstEx.src = "grafix/menu/HUD/SCOREBURSTS/3 red/!.png";
RScoreBurstEx.onload = LoadingBar;
var RedScore = {0: RScoreBurst0, 1: RScoreBurst1, 2: RScoreBurst2, 3: RScoreBurst3, 4: RScoreBurst4, 5: RScoreBurst5, 6: RScoreBurst6, 7: RScoreBurst7, 8: RScoreBurst8, 9: RScoreBurst9};
//------------------------------------------------- Meadow Graphics/UI --------------------------------------------------------------//
//dumble -- festive
var WizzurdL = new Image();
WizzurdL.src = "grafix/wizzurds/festive.wizard/wiz.l.png";
WizzurdL.onload = LoadingBar;
var WizzurdR = new Image();
WizzurdR.src = "grafix/wizzurds/festive.wizard/wiz.r.png";
WizzurdR.onload = LoadingBar;
//Ondmg
var Wizzurd2 = new Image();
Wizzurd2.src = "grafix/wizzurds/effects.wizard/nega.wiz.l1.png";
Wizzurd2.onload = LoadingBar;
var Wizzurd2R = new Image();
Wizzurd2R.src = "grafix/wizzurds/effects.wizard/nega.wiz.r1.png";
Wizzurd2R.onload = LoadingBar;
//HUD
//Tootorial
var MoveShoot = new Image();
MoveShoot.src = "grafix/menu/tutorial/move.shoot.active.png";
MoveShoot.onload = LoadingBar;
var WPress = new Image();
WPress.src = "grafix/menu/tutorial/m.w.press.png";
WPress.onload = LoadingBar;
var APress = new Image();
APress.src = "grafix/menu/tutorial/m.a.press.png";
APress.onload = LoadingBar;
var SPress = new Image();
SPress.src = "grafix/menu/tutorial/m.s.press.png";
SPress.onload = LoadingBar;
var DPress = new Image();
DPress.src = "grafix/menu/tutorial/m.d.press.png";
DPress.onload = LoadingBar;
var WShootTut = new Image();
WShootTut.src = "grafix/menu/tutorial/s.u.press.png";
WShootTut.onload = LoadingBar;
var AShootTut = new Image();
AShootTut.src = "grafix/menu/tutorial/s.l.press.png";
AShootTut.onload = LoadingBar;
var SShootTut = new Image();
SShootTut.src = "grafix/menu/tutorial/s.d.press.png";
SShootTut.onload = LoadingBar;
var DShootTut = new Image();
DShootTut.src = "grafix/menu/tutorial/s.r.press.png";
DShootTut.onload = LoadingBar;
var WAShootTut = new Image();
WAShootTut.src = "grafix/menu/tutorial/s.ul.press.png";
WAShootTut.onload = LoadingBar;
var ASShootTut = new Image();
ASShootTut.src = "grafix/menu/tutorial/s.dl.press.png";
ASShootTut.onload = LoadingBar;
var SDShootTut = new Image();
SDShootTut.src = "grafix/menu/tutorial/s.dr.press.png";
SDShootTut.onload = LoadingBar;
var WDShootTut = new Image();
WDShootTut.src = "grafix/menu/tutorial/s.ur.press.png";
WDShootTut.onload = LoadingBar;
var PickupArrow1 = new Image();
PickupArrow1.src = "grafix/menu/tutorial/pickuparrow.1.png";
PickupArrow1.onload = LoadingBar;
var PickupArrow2 = new Image();
PickupArrow2.src = "grafix/menu/tutorial/pickuparrow.2.png";
PickupArrow2.onload = LoadingBar;
var SpaceKey = new Image();
SpaceKey.src = "grafix/menu/tutorial/space.png";
SpaceKey.onload = LoadingBar;
var SpaceKeyPress = new Image();
SpaceKeyPress.src = "grafix/menu/tutorial/space.press.png";
SpaceKeyPress.onload = LoadingBar;
var DropQ1 = new Image();
DropQ1.src = "grafix/menu/tutorial/drop.q.1.png";
DropQ1.onload = LoadingBar;
var DropQ2 = new Image();
DropQ2.src = "grafix/menu/tutorial/drop.q.2.png";
DropQ2.onload = LoadingBar;
var DropE1 = new Image();
DropE1.src = "grafix/menu/tutorial/drop.e.1.png";
DropE1.onload = LoadingBar;
var DropE2 = new Image();
DropE2.src = "grafix/menu/tutorial/drop.e.2.png";
DropE2.onload = LoadingBar;
var EnterSkip = new Image();
EnterSkip.src = "grafix/menu/tutorial/skip.png";
EnterSkip.onload = LoadingBar;
var EnterSkipPress = new Image();
EnterSkipPress.src = "grafix/menu/tutorial/skip.press.png";
EnterSkipPress.onload = LoadingBar;
//slots
var eleSlots = new Image();
eleSlots.src = "grafix/menu/HUD/elesockets.png";
eleSlots.onload = LoadingBar;
//extra cooldowns
var CoolDown11 = new Image();
CoolDown11.src = "grafix/menu/HUD/COOLD/1.1.png";
CoolDown11.onload = LoadingBar;
var CoolDown12 = new Image();
CoolDown12.src = "grafix/menu/HUD/COOLD/1.2.png";
CoolDown12.onload = LoadingBar;
var CoolDown21 = new Image();
CoolDown21.src = "grafix/menu/HUD/COOLD/2.1.png";
CoolDown21.onload = LoadingBar;
var CoolDown22 = new Image();
CoolDown22.src = "grafix/menu/HUD/COOLD/2.2.png";
CoolDown22.onload = LoadingBar;
var CoolDown31 = new Image();
CoolDown31.src = "grafix/menu/HUD/COOLD/3.1.png";
CoolDown31.onload = LoadingBar;
var CoolDown32 = new Image();
CoolDown32.src = "grafix/menu/HUD/COOLD/3.2.png";
CoolDown32.onload = LoadingBar;
//indicate if it is a cast spell
var CastRings = new Image();
CastRings.src = "grafix/menu/HUD/elesockets.cast.png";
CastRings.onload = LoadingBar;
//spells WIDTH SUBTRACT 138
var dumblebar = new Image();//End: 290
dumblebar.src = "grafix/menu/HUD/SPELLS/dumblebeam.png";
dumblebar.onload = LoadingBar;
var firebar = new Image();//End: 110
firebar.src = "grafix/menu/HUD/SPELLS/fire.png";
firebar.onload = LoadingBar;
var fire2bar = new Image();//End: 198
fire2bar.src = "grafix/menu/HUD/SPELLS/inferno.png";
fire2bar.onload = LoadingBar;
var icebar = new Image();//82
icebar.src = "grafix/menu/HUD/SPELLS/ice.png";
icebar.onload = LoadingBar;
var ice2bar = new Image();//366
ice2bar.src = "grafix/menu/HUD/SPELLS/absolute.zero.png";
ice2bar.onload = LoadingBar;
var fireicebar = new Image();//422
fireicebar.src = "grafix/menu/HUD/SPELLS/frozen.fireball.png";
fireicebar.onload = LoadingBar;
var earthbar = new Image();//282
earthbar.src = "grafix/menu/HUD/SPELLS/earth.heal.png";
earthbar.onload = LoadingBar;
var earth2bar = new Image();//254
earth2bar.src = "grafix/menu/HUD/SPELLS/synthesis.png";
earth2bar.onload = LoadingBar;
var fireearthbar = new Image();//254
fireearthbar.src = "grafix/menu/HUD/SPELLS/fire.heal.png";
fireearthbar.onload = LoadingBar;
var iceearthbar = new Image();//230
iceearthbar.src = "grafix/menu/HUD/SPELLS/ice.heal.png";
iceearthbar.onload = LoadingBar;
var lightningbar = new Image();//254
lightningbar.src = "grafix/menu/HUD/SPELLS/lightning.png";
lightningbar.onload = LoadingBar;
var lightning2bar = new Image();//422
lightning2bar.src = "grafix/menu/HUD/SPELLS/chain.lightning.png";
lightning2bar.onload = LoadingBar;
var firelightningbar = new Image();//228
firelightningbar.src = "grafix/menu/HUD/SPELLS/ragnarok.png";
firelightningbar.onload = LoadingBar;
var icelightningbar = new Image();//286
icelightningbar.src = "grafix/menu/HUD/SPELLS/frozen.web.png";
icelightningbar.onload = LoadingBar;
var earthlightningbar = new Image();//396
earthlightningbar.src = "grafix/menu/HUD/SPELLS/lightning.heal.png";
earthlightningbar.onload = LoadingBar;
var airbar = new Image();//110
airbar.src = "grafix/menu/HUD/SPELLS/dash.png";
airbar.onload = LoadingBar;
var air2bar = new Image();//198
air2bar.src = "grafix/menu/HUD/SPELLS/twister.png";
air2bar.onload = LoadingBar;
var fireairbar = new Image();//258
fireairbar.src = "grafix/menu/HUD/SPELLS/fire.wave.png";
fireairbar.onload = LoadingBar;
var iceairbar = new Image();//262
iceairbar.src = "grafix/menu/HUD/SPELLS/maelstrom.png";
iceairbar.onload = LoadingBar;
var earthairbar = new Image();//254
earthairbar.src = "grafix/menu/HUD/SPELLS/dash.heal.png";
earthairbar.onload = LoadingBar;
var lightningairbar = new Image();//342
lightningairbar.src = "grafix/menu/HUD/SPELLS/thunderstorm.png";
lightningairbar.onload = LoadingBar;
var mysticbar = new Image();//228
mysticbar.src = "grafix/menu/HUD/SPELLS/teleport.png";
mysticbar.onload = LoadingBar;
var mystic2bar = new Image();//170
mystic2bar.src = "grafix/menu/HUD/SPELLS/mirage.png";
mystic2bar.onload = LoadingBar;
var firemysticbar = new Image();//398
firemysticbar.src = "grafix/menu/HUD/SPELLS/explosive.beam.png";
firemysticbar.onload = LoadingBar;
var icemysticbar = new Image();//230
icemysticbar.src = "grafix/menu/HUD/SPELLS/ice.beam.png";
icemysticbar.onload = LoadingBar;
var earthmysticbar = new Image();//366
earthmysticbar.src = "grafix/menu/HUD/SPELLS/teleport.heal.png";
earthmysticbar.onload = LoadingBar;
var lightningmysticbar = new Image();//426
lightningmysticbar.src = "grafix/menu/HUD/SPELLS/conductive.beam.png";
lightningmysticbar.onload = LoadingBar;
var airmysticbar = new Image();//318
airmysticbar.src = "grafix/menu/HUD/SPELLS/homing.beam.png";
airmysticbar.onload = LoadingBar;
var waterbar = new Image();//310
waterbar.src = "grafix/menu/HUD/SPELLS/bubble.ring.png";
waterbar.onload = LoadingBar;
var water2bar = new Image();//426
water2bar.src = "grafix/menu/HUD/SPELLS/max.bubble.ring.png";
water2bar.onload = LoadingBar;
var firewaterbar = new Image();//394
firewaterbar.src = "grafix/menu/HUD/SPELLS/explosive.ring.png";
firewaterbar.onload = LoadingBar;
var icewaterbar = new Image();//310
icewaterbar.src = "grafix/menu/HUD/SPELLS/frozen.ring.png";
icewaterbar.onload = LoadingBar;
var earthwaterbar = new Image();//310
earthwaterbar.src = "grafix/menu/HUD/SPELLS/bubble.heal.png";
earthwaterbar.onload = LoadingBar;
var lightningwaterbar = new Image();//226
lightningwaterbar.src = "grafix/menu/HUD/SPELLS/zap.trap.png";
lightningwaterbar.onload = LoadingBar;
var airwaterbar = new Image();//338
airwaterbar.src = "grafix/menu/HUD/SPELLS/bubble.blast.png";
airwaterbar.onload = LoadingBar;
var mysticwaterbar = new Image();//286
mysticwaterbar.src = "grafix/menu/HUD/SPELLS/bubble.beam.png";
mysticwaterbar.onload = LoadingBar;
var darkbar = new Image();//138
darkbar.src = "grafix/menu/HUD/SPELLS/traps.png";
darkbar.onload = LoadingBar;
var dark2bar = new Image();//282
dark2bar.src = "grafix/menu/HUD/SPELLS/deathbound.png";
dark2bar.onload = LoadingBar;
var firedarkbar = new Image();//286
firedarkbar.src = "grafix/menu/HUD/SPELLS/flame.trap.png";
firedarkbar.onload = LoadingBar;
var icedarkbar = new Image();//226
icedarkbar.src = "grafix/menu/HUD/SPELLS/ice.trap.png";
icedarkbar.onload = LoadingBar;
var earthdarkbar = new Image();//258
earthdarkbar.src = "grafix/menu/HUD/SPELLS/moonlight.png";
earthdarkbar.onload = LoadingBar;
var lightningdarkbar = new Image();//338
lightningdarkbar.src = "grafix/menu/HUD/SPELLS/static.field.png";
lightningdarkbar.onload = LoadingBar;
var airdarkbar = new Image();//226
airdarkbar.src = "grafix/menu/HUD/SPELLS/boosters.png";
airdarkbar.onload = LoadingBar;
var mysticdarkbar = new Image();//370
mysticdarkbar.src = "grafix/menu/HUD/SPELLS/piercing.beam.png";
mysticdarkbar.onload = LoadingBar;
var waterdarkbar = new Image();//342
waterdarkbar.src = "grafix/menu/HUD/SPELLS/shadow.cloak.png";
waterdarkbar.onload = LoadingBar;
var waterdarkbar2 = new Image();//340
waterdarkbar2.src = "grafix/menu/HUD/SPELLS/cloak.charge.png";
waterdarkbar2.onload = LoadingBar;
var lightbar = new Image();//340
lightbar.src = "grafix/menu/HUD/SPELLS/angel.png";
lightbar.onload = LoadingBar;
var light2bar = new Image();//340
light2bar.src = "grafix/menu/HUD/SPELLS/army.of.god.png";
light2bar.onload = LoadingBar;
var firelightbar = new Image();//340
firelightbar.src = "grafix/menu/HUD/SPELLS/fire.elemental.png";
firelightbar.onload = LoadingBar;
var icelightbar = new Image();//340
icelightbar.src = "grafix/menu/HUD/SPELLS/ice.elemental.png";
icelightbar.onload = LoadingBar;
var earthlightbar = new Image();//340
earthlightbar.src = "grafix/menu/HUD/SPELLS/sunlight.png";
earthlightbar.onload = LoadingBar;
var lightninglightbar = new Image();//340
lightninglightbar.src = "grafix/menu/HUD/SPELLS/spark.elemental.png";
lightninglightbar.onload = LoadingBar;
var airlightbar = new Image();//340
airlightbar.src = "grafix/menu/HUD/SPELLS/air.elemental.png";
airlightbar.onload = LoadingBar;
var mysticlightbar = new Image();//340
mysticlightbar.src = "grafix/menu/HUD/SPELLS/light.beam.png";
mysticlightbar.onload = LoadingBar;
var waterlightbar = new Image();//340
waterlightbar.src = "grafix/menu/HUD/SPELLS/water.elemental.png";
waterlightbar.onload = LoadingBar;
var darklightbar = new Image();//340
darklightbar.src = "grafix/menu/HUD/SPELLS/fallen.angel.png";
darklightbar.onload = LoadingBar;
//EleSymbolsforUI
var FireSlot = new Image();
FireSlot.src = "grafix/menu/HUD/ELEMENTS/fire.png";
FireSlot.onload = LoadingBar;
var IceSlot = new Image();
IceSlot.src = "grafix/menu/HUD/ELEMENTS/ice.png";
IceSlot.onload = LoadingBar;
var EarthSlot = new Image();
EarthSlot.src = "grafix/menu/HUD/ELEMENTS/earth.png";
EarthSlot.onload = LoadingBar;
var ThunderSlot = new Image();
ThunderSlot.src = "grafix/menu/HUD/ELEMENTS/lightning.png";
ThunderSlot.onload = LoadingBar;
var WindSlot = new Image();
WindSlot.src = "grafix/menu/HUD/ELEMENTS/air.png";
WindSlot.onload = LoadingBar;
var MysticSlot = new Image();
MysticSlot.src = "grafix/menu/HUD/ELEMENTS/mystic.png";
MysticSlot.onload = LoadingBar;
var WaterSlot = new Image();
WaterSlot.src = "grafix/menu/HUD/ELEMENTS/water.png";
WaterSlot.onload = LoadingBar;
var DarkSlot = new Image();
DarkSlot.src = "grafix/menu/HUD/ELEMENTS/dark.png";
DarkSlot.onload = LoadingBar;
var LightSlot = new Image();
LightSlot.src = "grafix/menu/HUD/ELEMENTS/light.png";
LightSlot.onload = LoadingBar;
//Traps HUD
var Trap1HUD = new Image();
Trap1HUD.src = "grafix/menu/HUD/TRAPS/1.png";
Trap1HUD.onload = LoadingBar;
var Trap2HUD = new Image();
Trap2HUD.src = "grafix/menu/HUD/TRAPS/2.png";
Trap2HUD.onload = LoadingBar;
var Trap3HUD = new Image();
Trap3HUD.src = "grafix/menu/HUD/TRAPS/3.png";
Trap3HUD.onload = LoadingBar;
var Trap4HUD = new Image();
Trap4HUD.src = "grafix/menu/HUD/TRAPS/4.png";
Trap4HUD.onload = LoadingBar;
var Trap5HUD = new Image();
Trap5HUD.src = "grafix/menu/HUD/TRAPS/5.png";
Trap5HUD.onload = LoadingBar;
var Trap6HUD = new Image();
Trap6HUD.src = "grafix/menu/HUD/TRAPS/6.png";
Trap6HUD.onload = LoadingBar;
var Trap7HUD = new Image();
Trap7HUD.src = "grafix/menu/HUD/TRAPS/7.png";
Trap7HUD.onload = LoadingBar;
var TrapHUDs = {1: Trap1HUD, 2: Trap2HUD, 3: Trap3HUD, 4: Trap4HUD, 5: Trap5HUD, 6: Trap6HUD, 7: Trap7HUD};
//HP
var HPGraphic1 = new Image();
HPGraphic1.src = "grafix/menu/HUD/HEALTH/1.png";
HPGraphic1.onload = LoadingBar;
var HPGraphic2 = new Image();
HPGraphic2.src = "grafix/menu/HUD/HEALTH/2.png";
HPGraphic2.onload = LoadingBar;
var HPGraphic3 = new Image();
HPGraphic3.src = "grafix/menu/HUD/HEALTH/3.png";
HPGraphic3.onload = LoadingBar;
var HPGraphic4 = new Image();
HPGraphic4.src = "grafix/menu/HUD/HEALTH/4.png";
HPGraphic4.onload = LoadingBar;
var HPGraphic5 = new Image();
HPGraphic5.src = "grafix/menu/HUD/HEALTH/5.png";
HPGraphic5.onload = LoadingBar;
var HPGraphic6 = new Image();
HPGraphic6.src = "grafix/menu/HUD/HEALTH/6.png";
HPGraphic6.onload = LoadingBar;
var HPGraphic7 = new Image();
HPGraphic7.src = "grafix/menu/HUD/HEALTH/7.png";
HPGraphic7.onload = LoadingBar;
var HPGraphic8 = new Image();
HPGraphic8.src = "grafix/menu/HUD/HEALTH/8.png";
HPGraphic8.onload = LoadingBar;
var HPGraphic9 = new Image();
HPGraphic9.src = "grafix/menu/HUD/HEALTH/9.png";
HPGraphic9.onload = LoadingBar;
var HPGraphic10 = new Image();
HPGraphic10.src = "grafix/menu/HUD/HEALTH/10.png";
HPGraphic10.onload = LoadingBar;
var HPGraphic11 = new Image();
HPGraphic11.src = "grafix/menu/HUD/HEALTH/11.png";
HPGraphic11.onload = LoadingBar;
var HPGraphic12 = new Image();
HPGraphic12.src = "grafix/menu/HUD/HEALTH/12.png";
HPGraphic12.onload = LoadingBar;
var HPGraphic13 = new Image();
HPGraphic13.src = "grafix/menu/HUD/HEALTH/13.png";
HPGraphic13.onload = LoadingBar;
var HPGraphic14 = new Image();
HPGraphic14.src = "grafix/menu/HUD/HEALTH/14.png";
HPGraphic14.onload = LoadingBar;
var HPGraphic15 = new Image();
HPGraphic15.src = "grafix/menu/HUD/HEALTH/15.png";
HPGraphic15.onload = LoadingBar;
var hpBarGraphics = {1: HPGraphic1, 2: HPGraphic2, 3: HPGraphic3, 4: HPGraphic4, 5: HPGraphic5, 6: HPGraphic6, 7: HPGraphic7, 8: HPGraphic8,
					9: HPGraphic9, 10: HPGraphic10, 11: HPGraphic11, 12: HPGraphic12, 13: HPGraphic13, 14: HPGraphic14, 15: HPGraphic15};
//Score stuff
var ScoreLeft = new Image();
ScoreLeft.src = "grafix/menu/HUD/SCORE/cap.l.png";
ScoreLeft.onload = LoadingBar;
var ScoreRight = new Image();
ScoreRight.src = "grafix/menu/HUD/SCORE/cap.r.png";
ScoreRight.onload = LoadingBar;
var Scorezero = new Image();
Scorezero.src = "grafix/menu/HUD/SCORE/0.png";
Scorezero.onload = LoadingBar;
var Scoreone = new Image();
Scoreone.src = "grafix/menu/HUD/SCORE/1.png";
Scoreone.onload = LoadingBar;
var Scoretwo = new Image();
Scoretwo.src = "grafix/menu/HUD/SCORE/2.png";
Scoretwo.onload = LoadingBar;
var Scorethree = new Image();
Scorethree.src = "grafix/menu/HUD/SCORE/3.png";
Scorethree.onload = LoadingBar;
var Scorefour = new Image();
Scorefour.src = "grafix/menu/HUD/SCORE/4.png";
Scorefour.onload = LoadingBar;
var Scorefive = new Image();
Scorefive.src = "grafix/menu/HUD/SCORE/5.png";
Scorefive.onload = LoadingBar;
var Scoresix = new Image();
Scoresix.src = "grafix/menu/HUD/SCORE/6.png";
Scoresix.onload = LoadingBar;
var Scoreseven = new Image();
Scoreseven.src = "grafix/menu/HUD/SCORE/7.png";
Scoreseven.onload = LoadingBar;
var Scoreeight = new Image();
Scoreeight.src = "grafix/menu/HUD/SCORE/8.png";
Scoreeight.onload = LoadingBar;
var Scorenine = new Image();
Scorenine.src = "grafix/menu/HUD/SCORE/9.png";
Scorenine.onload = LoadingBar;
//Environment
var Tree = new Image();
Tree.src = "grafix/objects/tree/health.3.png";
Tree.onload = LoadingBar;
var Tree2 = new Image();
Tree2.src = "grafix/objects/tree/health.2.png";
Tree2.onload = LoadingBar;
var Tree3 = new Image();
Tree3.src = "grafix/objects/tree/health.1.png";
Tree3.onload = LoadingBar;
//forest bkg
var backGround1 = new Image();
backGround1.src = "grafix/background/grass/grass.1.png";
backGround1.onload = LoadingBar;
var backGround12 = new Image();
backGround12.src = "grafix/background/grass/grass.2.png";
backGround12.onload = LoadingBar;
var backGround13 = new Image();
backGround13.src = "grafix/background/grass/grass.3.png";
backGround13.onload = LoadingBar;
var backGround14 = new Image();
backGround14.src = "grafix/background/grass/grass.4.png";
backGround14.onload = LoadingBar;
var backGround15 = new Image();
backGround15.src = "grafix/background/grass/grass.5.png";
backGround15.onload = LoadingBar;
var backGround16 = new Image();
backGround16.src = "grafix/background/grass/grass.6.png";
backGround16.onload = LoadingBar;
var backGround17 = new Image();
backGround17.src = "grafix/background/grass/grass.7.png";
backGround17.onload = LoadingBar;
var backGround18 = new Image();
backGround18.src = "grafix/background/grass/grass.8.png";
backGround18.onload = LoadingBar;
var forestbkgs = {1: backGround1, 2: backGround12, 3: backGround13, 4: backGround14, 5: backGround15, 6: backGround16, 7: backGround17, 8: backGround18};
//Wizard Zap Trap
var WizzurdElecL1 = new Image();
WizzurdElecL1.src = "grafix/wizzurds/effects.wizard/wizzurd32.elec.l1.png";
WizzurdElecL1.onload = LoadingBar;
var WizzurdElecL2 = new Image();
WizzurdElecL2.src = "grafix/wizzurds/effects.wizard/wizzurd32.elec.l2.png";
WizzurdElecL2.onload = LoadingBar;
var WizzurdElecL3 = new Image();
WizzurdElecL3.src = "grafix/wizzurds/effects.wizard/wizzurd32.elec.l3.png";
WizzurdElecL3.onload = LoadingBar;
var WizzurdElecL4 = new Image();
WizzurdElecL4.src = "grafix/wizzurds/effects.wizard/wizzurd32.elec.l4.png";
WizzurdElecL4.onload = LoadingBar;
var WizzurdElecL5 = new Image();
WizzurdElecL5.src = "grafix/wizzurds/effects.wizard/wizzurd32.elec.l5.png";
WizzurdElecL5.onload = LoadingBar;
var ZapTrapL = {1: WizzurdElecL1, 2: WizzurdElecL2, 3: WizzurdElecL3, 4: WizzurdElecL4, 5: WizzurdElecL5}; 
var WizzurdElecR1 = new Image();
WizzurdElecR1.src = "grafix/wizzurds/effects.wizard/wizzurd32.elec.r1.png";
WizzurdElecR1.onload = LoadingBar;
var WizzurdElecR2 = new Image();
WizzurdElecR2.src = "grafix/wizzurds/effects.wizard/wizzurd32.elec.r2.png";
WizzurdElecR2.onload = LoadingBar;
var WizzurdElecR3 = new Image();
WizzurdElecR3.src = "grafix/wizzurds/effects.wizard/wizzurd32.elec.r3.png";
WizzurdElecR3.onload = LoadingBar;
var WizzurdElecR4 = new Image();
WizzurdElecR4.src = "grafix/wizzurds/effects.wizard/wizzurd32.elec.r4.png";
WizzurdElecR4.onload = LoadingBar;
var WizzurdElecR5 = new Image();
WizzurdElecR5.src = "grafix/wizzurds/effects.wizard/wizzurd32.elec.r5.png";
WizzurdElecR5.onload = LoadingBar;
var ZapTrapR = {1: WizzurdElecR1, 2: WizzurdElecR2, 3: WizzurdElecR3, 4: WizzurdElecR4, 5: WizzurdElecR5}; 
//Bees
var BeeL1 = new Image();
BeeL1.src = "grafix/creatures/bee/bee.l1.png";
BeeL1.onload = LoadingBar;
var BeeL2 = new Image();
BeeL2.src = "grafix/creatures/bee/bee.l2.png";
BeeL2.onload = LoadingBar;
var BeeR1 = new Image();
BeeR1.src = "grafix/creatures/bee/bee.r1.png";
BeeR1.onload = LoadingBar;
var BeeR2 = new Image();
BeeR2.src = "grafix/creatures/bee/bee.r2.png";
BeeR2.onload = LoadingBar;
var YBeeL1 = new Image();
YBeeL1.src = "grafix/creatures/bee/eeb.l1.png";
YBeeL1.onload = LoadingBar;
var YBeeL2 = new Image();
YBeeL2.src = "grafix/creatures/bee/eeb.l2.png";
YBeeL2.onload = LoadingBar;
var YBeeR1 = new Image();
YBeeR1.src = "grafix/creatures/bee/eeb.r1.png";
YBeeR1.onload = LoadingBar;
var YBeeR2 = new Image();
YBeeR2.src = "grafix/creatures/bee/eeb.r2.png";
YBeeR2.onload = LoadingBar;
//Flowers
var BFlowerL = new Image();
BFlowerL.src = "grafix/creatures/pikkit/blue/blue.l1.png";
BFlowerL.onload = LoadingBar;
var BFlowerR = new Image();
BFlowerR.src = "grafix/creatures/pikkit/blue/blue.r1.png";
BFlowerR.onload = LoadingBar;
var BFlowerGrow1 = new Image();
BFlowerGrow1.src = "grafix/creatures/pikkit/blue/bgrow.1.png";
BFlowerGrow1.onload = LoadingBar;
var BFlowerGrow2 = new Image();
BFlowerGrow2.src = "grafix/creatures/pikkit/blue/bgrow.2.png";
BFlowerGrow2.onload = LoadingBar;
var BFlowerGrow3 = new Image();
BFlowerGrow3.src = "grafix/creatures/pikkit/blue/bgrow.3.png";
BFlowerGrow3.onload = LoadingBar;
var BFlowerGrow4 = new Image();
BFlowerGrow4.src = "grafix/creatures/pikkit/blue/bgrow.4.png";
BFlowerGrow4.onload = LoadingBar;
var RFlowerL = new Image();
RFlowerL.src = "grafix/creatures/pikkit/red/red.l1.png";
RFlowerL.onload = LoadingBar;
var RFlowerR = new Image();
RFlowerR.src = "grafix/creatures/pikkit/red/red.r1.png";
RFlowerR.onload = LoadingBar;
var RFlowerGrow1 = new Image();
RFlowerGrow1.src = "grafix/creatures/pikkit/red/rgrow.1.png";
RFlowerGrow1.onload = LoadingBar;
var RFlowerGrow2 = new Image();
RFlowerGrow2.src = "grafix/creatures/pikkit/red/rgrow.2.png";
RFlowerGrow2.onload = LoadingBar;
var RFlowerGrow3 = new Image();
RFlowerGrow3.src = "grafix/creatures/pikkit/red/rgrow.3.png";
RFlowerGrow3.onload = LoadingBar;
var RFlowerGrow4 = new Image();
RFlowerGrow4.src = "grafix/creatures/pikkit/red/rgrow.4.png";
RFlowerGrow4.onload = LoadingBar;
var YFlowerL = new Image();
YFlowerL.src = "grafix/creatures/pikkit/yolo/yolo.l1.png";
YFlowerL.onload = LoadingBar;
var YFlowerR = new Image();
YFlowerR.src = "grafix/creatures/pikkit/yolo/yolo.r1.png";
YFlowerR.onload = LoadingBar;
var YFlowerGrow1 = new Image();
YFlowerGrow1.src = "grafix/creatures/pikkit/yolo/ygrow.1.png";
YFlowerGrow1.onload = LoadingBar;
var YFlowerGrow2 = new Image();
YFlowerGrow2.src = "grafix/creatures/pikkit/yolo/ygrow.2.png";
YFlowerGrow2.onload = LoadingBar;
var YFlowerGrow3 = new Image();
YFlowerGrow3.src = "grafix/creatures/pikkit/yolo/ygrow.3.png";
YFlowerGrow3.onload = LoadingBar;
var YFlowerGrow4 = new Image();
YFlowerGrow4.src = "grafix/creatures/pikkit/yolo/ygrow.4.png";
YFlowerGrow4.onload = LoadingBar;
var YGrowArray = {1: YFlowerGrow1, 2: YFlowerGrow2, 3: YFlowerGrow3, 4: YFlowerGrow4};
var RGrowArray = {1: RFlowerGrow1, 2: RFlowerGrow2, 3: RFlowerGrow3, 4: RFlowerGrow4};
var BGrowArray = {1: BFlowerGrow1, 2: BFlowerGrow2, 3: BFlowerGrow3, 4: BFlowerGrow4};
//Evil Wizzurd
var Sorcerorpng = new Image();
Sorcerorpng.src = "grafix/wizzurds/poison.wizard/poison.wiz.l1.png";
Sorcerorpng.onload = LoadingBar;
//Tree Wizzurd
var TWizzurdL1 = new Image();
TWizzurdL1.src = "grafix/creatures/treeson/tson.l1.png";
TWizzurdL1.onload = LoadingBar;
var TWizzurdR1 = new Image();
TWizzurdR1.src = "grafix/creatures/treeson/tson.r1.png";
TWizzurdR1.onload = LoadingBar;
//Fire Demon Boss
var FbossIdle = new Image();
FbossIdle.src = "grafix/creatures/dearyrocks/drocks.idle.png";
FbossIdle.onload = LoadingBar;
var FbossTotemU = new Image();
FbossTotemU.src = "grafix/creatures/dearyrocks/tote.u.png";
FbossTotemU.onload = LoadingBar;
var FbossTotemD = new Image();
FbossTotemD.src = "grafix/creatures/dearyrocks/tote.d.png";
FbossTotemD.onload = LoadingBar;
//Meteor
var MeteorF0 = new Image();
MeteorF0.src = "grafix/effects/meteor/meteor.fire0.png";
MeteorF0.onload = LoadingBar;
var MeteorF15d = new Image();
MeteorF15d.src = "grafix/effects/meteor/meteor.fire15d.png";
MeteorF15d.onload = LoadingBar;
var MeteorF15u = new Image();
MeteorF15u.src = "grafix/effects/meteor/meteor.fire15u.png";
MeteorF15u.onload = LoadingBar;
var MeteorF30d = new Image();
MeteorF30d.src = "grafix/effects/meteor/meteor.fire30d.png";
MeteorF30d.onload = LoadingBar;
var MeteorF30u = new Image();
MeteorF30u.src = "grafix/effects/meteor/meteor.fire30u.png";
MeteorF30u.onload = LoadingBar;
var MeteorF45d = new Image();
MeteorF45d.src = "grafix/effects/meteor/meteor.fire45d.png";
MeteorF45d.onload = LoadingBar;
var MeteorF45u = new Image();
MeteorF45u.src = "grafix/effects/meteor/meteor.fire45u.png";
MeteorF45u.onload = LoadingBar;
var BigMeteorF0 = new Image();
BigMeteorF0.src = "grafix/effects/meteor/meteor.fire0.big.png";
BigMeteorF0.onload = LoadingBar;
var BigMeteorF15d = new Image();
BigMeteorF15d.src = "grafix/effects/meteor/meteor.fire15d.big.png";
BigMeteorF15d.onload = LoadingBar;
var BigMeteorF15u = new Image();
BigMeteorF15u.src = "grafix/effects/meteor/meteor.fire15u.big.png";
BigMeteorF15u.onload = LoadingBar;
var BigMeteorF30d = new Image();
BigMeteorF30d.src = "grafix/effects/meteor/meteor.fire30d.big.png";
BigMeteorF30d.onload = LoadingBar;
var BigMeteorF30u = new Image();
BigMeteorF30u.src = "grafix/effects/meteor/meteor.fire30u.big.png";
BigMeteorF30u.onload = LoadingBar;
var BigMeteorF45d = new Image();
BigMeteorF45d.src = "grafix/effects/meteor/meteor.fire45d.big.png";
BigMeteorF45d.onload = LoadingBar;
var BigMeteorF45u = new Image();
BigMeteorF45u.src = "grafix/effects/meteor/meteor.fire45u.big.png";
BigMeteorF45u.onload = LoadingBar;
//hlightning
var hlightning1 = new Image();
hlightning1.src = "grafix/effects/lightning.self/hor.1.png";
hlightning1.onload = LoadingBar;
var hlightning2 = new Image();
hlightning2.src = "grafix/effects/lightning.self/hor.2.png";
hlightning2.onload = LoadingBar;
var hlightning3 = new Image();
hlightning3.src = "grafix/effects/lightning.self/hor.3.png";
hlightning3.onload = LoadingBar;
var hLightnings = {0: hlightning1, 1: hlightning2, 2: hlightning3};
//vlightning
var vlightning1 = new Image();
vlightning1.src = "grafix/effects/lightning.self/ver.1.png";
vlightning1.onload = LoadingBar;
var vlightning2 = new Image();
vlightning2.src = "grafix/effects/lightning.self/ver.2.png";
vlightning2.onload = LoadingBar;
var vlightning3 = new Image();
vlightning3.src = "grafix/effects/lightning.self/ver.3.png";
vlightning3.onload = LoadingBar;
var vLightnings = {0: vlightning1, 1: vlightning2, 2: vlightning3};
//ehlightning
var ehlightning1 = new Image();
ehlightning1.src = "grafix/effects/lightning.enemy/hor.1.png";
ehlightning1.onload = LoadingBar;
var ehlightning2 = new Image();
ehlightning2.src = "grafix/effects/lightning.enemy/hor.2.png";
ehlightning2.onload = LoadingBar;
var ehlightning3 = new Image();
ehlightning3.src = "grafix/effects/lightning.enemy/hor.3.png";
ehlightning3.onload = LoadingBar;
//evlightning
var evlightning1 = new Image();
evlightning1.src = "grafix/effects/lightning.enemy/ver.1.png";
evlightning1.onload = LoadingBar;
var evlightning2 = new Image();
evlightning2.src = "grafix/effects/lightning.enemy/ver.2.png";
evlightning2.onload = LoadingBar;
var evlightning3 = new Image();
evlightning3.src = "grafix/effects/lightning.enemy/ver.3.png";
evlightning3.onload = LoadingBar;
//Traps
//Dark1
var darkTrap = new Image();
darkTrap.src = "grafix/objects/darktrap/darktrap.png";
darkTrap.onload = LoadingBar;
var darkTrapPoof1 = new Image();
darkTrapPoof1.src = "grafix/objects/darktrap/darktrap.poof.1.png";
darkTrapPoof1.onload = LoadingBar;
var darkTrapPoof2 = new Image();
darkTrapPoof2.src = "grafix/objects/darktrap/darktrap.poof.2.png";
darkTrapPoof2.onload = LoadingBar;
var darkTrapPoof3 = new Image();
darkTrapPoof3.src = "grafix/objects/darktrap/darktrap.poof.3.png";
darkTrapPoof3.onload = LoadingBar;
var darkTrapPoof4 = new Image();
darkTrapPoof4.src = "grafix/objects/darktrap/darktrap.poof.4.png";
darkTrapPoof4.onload = LoadingBar;
var darkTrapActive = {1: darkTrapPoof4, 2: darkTrapPoof3, 3: darkTrapPoof2, 4: darkTrapPoof1};
//Dark2
var dark2spike1 = new Image();
dark2spike1.src = "grafix/objects/spikes/spike.01.png";
dark2spike1.onload = LoadingBar;
var dark2spike2 = new Image();
dark2spike2.src = "grafix/objects/spikes/spike.02.png";
dark2spike2.onload = LoadingBar;
var dark2spike3 = new Image();
dark2spike3.src = "grafix/objects/spikes/spike.03.png";
dark2spike3.onload = LoadingBar;
var dark2spike4 = new Image();
dark2spike4.src = "grafix/objects/spikes/spike.04.png";
dark2spike4.onload = LoadingBar;
var dark2spike5 = new Image();
dark2spike5.src = "grafix/objects/spikes/spike.05.png";
dark2spike5.onload = LoadingBar;
var dark2img = {1: dark2spike1, 2: dark2spike2, 3: dark2spike3, 4: dark2spike4, 5: dark2spike5};
//darkfire
var darkfireimg1 = new Image();
darkfireimg1.src = "grafix/objects/firetrap/firetrap.01.png";
darkfireimg1.onload = LoadingBar;
var darkfireimg2 = new Image();
darkfireimg2.src = "grafix/objects/firetrap/firetrap.02.png";
darkfireimg2.onload = LoadingBar;
var darkfireimg3 = new Image();
darkfireimg3.src = "grafix/objects/firetrap/firetrap.03.png";
darkfireimg3.onload = LoadingBar;
var darkfireimg4 = new Image();
darkfireimg4.src = "grafix/objects/firetrap/firetrap.04.png";
darkfireimg4.onload = LoadingBar;
var darkfireimg = {0: darkfireimg1, 1: darkfireimg2, 2: darkfireimg3, 3: darkfireimg4};
//darkice
var darkiceimg1 = new Image();
darkiceimg1.src = "grafix/objects/icetrap/icetrap.01.png";
darkiceimg1.onload = LoadingBar;
var darkiceimg2 = new Image();
darkiceimg2.src = "grafix/objects/icetrap/icetrap.02.png";
darkiceimg2.onload = LoadingBar;
var darkiceimg3 = new Image();
darkiceimg3.src = "grafix/objects/icetrap/icetrap.03.png";
darkiceimg3.onload = LoadingBar;
var darkiceimg4 = new Image();
darkiceimg4.src = "grafix/objects/icetrap/icetrap.04.png";
darkiceimg4.onload = LoadingBar;
var darkiceimg5 = new Image();
darkiceimg5.src = "grafix/objects/icetrap/icetrap.05.png";
darkiceimg5.onload = LoadingBar;
var darkiceimg6 = new Image();
darkiceimg6.src = "grafix/objects/icetrap/icetrap.06.png";
darkiceimg6.onload = LoadingBar;
var darkiceimg = {0: darkiceimg1, 1: darkiceimg2, 2: darkiceimg3, 3: darkiceimg4, 4: darkiceimg5, 5: darkiceimg6};
//darklightning
var darklightningimg1 = new Image();
darklightningimg1.src = "grafix/objects/zaptrap/zaptrap.01.png";
darklightningimg1.onload = LoadingBar;
var darklightningimg2 = new Image();
darklightningimg2.src = "grafix/objects/zaptrap/zaptrap.02.png";
darklightningimg2.onload = LoadingBar;
var darklightningimg3 = new Image();
darklightningimg3.src = "grafix/objects/zaptrap/zaptrap.03.png";
darklightningimg3.onload = LoadingBar;
var darklightningimg = {0: darklightningimg1, 1: darklightningimg2, 2: darklightningimg3};
//darkair
var darkairimg1 = new Image();
darkairimg1.src = "grafix/objects/booster/booster.01.png";
darkairimg1.onload = LoadingBar;
var darkairimg2 = new Image();
darkairimg2.src = "grafix/objects/booster/booster.02.png";
darkairimg2.onload = LoadingBar;
var darkairimg3 = new Image();
darkairimg3.src = "grafix/objects/booster/booster.03.png";
darkairimg3.onload = LoadingBar;
var darkairimg4 = new Image();
darkairimg4.src = "grafix/objects/booster/booster.04.png";
darkairimg4.onload = LoadingBar;
var darkairimg = {1: darkairimg1, 2: darkairimg2, 3: darkairimg3, 4: darkairimg4};
//darkwater
var darkwater1img1 = new Image();
darkwater1img1.src = "grafix/objects/darksheild/darksheild1.01.png";
darkwater1img1.onload = LoadingBar;
var darkwater1img2 = new Image();
darkwater1img2.src = "grafix/objects/darksheild/darksheild1.02.png";
darkwater1img2.onload = LoadingBar;
var darkwater1img3 = new Image();
darkwater1img3.src = "grafix/objects/darksheild/darksheild1.03.png";
darkwater1img3.onload = LoadingBar;
var darkwater1img4 = new Image();
darkwater1img4.src = "grafix/objects/darksheild/darksheild1.04.png";
darkwater1img4.onload = LoadingBar;
var darksheildimg1 = {1: darkwater1img1, 2: darkwater1img2, 3: darkwater1img3, 4: darkwater1img4};
var darkwater2img1 = new Image();
darkwater2img1.src = "grafix/objects/darksheild/darksheild2.01.png";
darkwater2img1.onload = LoadingBar;
var darkwater2img2 = new Image();
darkwater2img2.src = "grafix/objects/darksheild/darksheild2.02.png";
darkwater2img2.onload = LoadingBar;
var darkwater2img3 = new Image();
darkwater2img3.src = "grafix/objects/darksheild/darksheild2.03.png";
darkwater2img3.onload = LoadingBar;
var darkwater2img4 = new Image();
darkwater2img4.src = "grafix/objects/darksheild/darksheild2.04.png";
darkwater2img4.onload = LoadingBar;
var darksheildimg2 = {1: darkwater2img1, 2: darkwater2img2, 3: darkwater2img3, 4: darkwater2img4};
var darkwater3img1 = new Image();
darkwater3img1.src = "grafix/objects/darksheild/darksheild3.01.png";
darkwater3img1.onload = LoadingBar;
var darkwater3img2 = new Image();
darkwater3img2.src = "grafix/objects/darksheild/darksheild3.02.png";
darkwater3img2.onload = LoadingBar;
var darkwater3img3 = new Image();
darkwater3img3.src = "grafix/objects/darksheild/darksheild3.03.png";
darkwater3img3.onload = LoadingBar;
var darkwater3img4 = new Image();
darkwater3img4.src = "grafix/objects/darksheild/darksheild3.04.png";
darkwater3img4.onload = LoadingBar;
var darksheildimg3 = {1: darkwater3img1, 2: darkwater3img2, 3: darkwater3img3, 4: darkwater3img4};
//Monochrome Wizzurd
var MonoWizzurd = new Image();
MonoWizzurd.src = "grafix/wizzurds/effects.wizard/bw.wiz.l1.png";
MonoWizzurd.onload = LoadingBar;
//dumblebeam
var DBeamH = new Image();
DBeamH.src = "grafix/effects/beam/santa/beam.hor.png";
DBeamH.onload = LoadingBar;
var DBeamV = new Image();
DBeamV.src = "grafix/effects/beam/santa/beam.ver.png";
DBeamV.onload = LoadingBar;
var DBeamWD = new Image();
DBeamWD.src = "grafix/effects/beam/santa/beam.wd.png";
DBeamWD.onload = LoadingBar;
var DBeamWA = new Image();
DBeamWA.src = "grafix/effects/beam/santa/beam.wa.png";
DBeamWA.onload = LoadingBar;
var RDBeamH = new Image();
RDBeamH.src = "grafix/effects/beam/red/beam.hor.png";
RDBeamH.onload = LoadingBar;
var RDBeamV = new Image();
RDBeamV.src = "grafix/effects/beam/red/beam.ver.png";
RDBeamV.onload = LoadingBar;
var RDBeamWD = new Image();
RDBeamWD.src = "grafix/effects/beam/red/beam.wd.png";
RDBeamWD.onload = LoadingBar;
var RDBeamWA = new Image();
RDBeamWA.src = "grafix/effects/beam/red/beam.wa.png";
RDBeamWA.onload = LoadingBar;
var TDBeamH = new Image();
TDBeamH.src = "grafix/effects/beam/teal/beam.hor.png";
TDBeamH.onload = LoadingBar;
var TDBeamV = new Image();
TDBeamV.src = "grafix/effects/beam/teal/beam.ver.png";
TDBeamV.onload = LoadingBar;
var TDBeamWD = new Image();
TDBeamWD.src = "grafix/effects/beam/teal/beam.wd.png";
TDBeamWD.onload = LoadingBar;
var TDBeamWA = new Image();
TDBeamWA.src = "grafix/effects/beam/teal/beam.wa.png";
TDBeamWA.onload = LoadingBar;
var YDBeamW = new Image();
YDBeamW.src = "grafix/effects/beam/yellow/beam.w.png";
YDBeamW.onload = LoadingBar;
var YDBeamA = new Image();
YDBeamA.src = "grafix/effects/beam/yellow/beam.a.png";
YDBeamA.onload = LoadingBar;
var YDBeamS = new Image();
YDBeamS.src = "grafix/effects/beam/yellow/beam.s.png";
YDBeamS.onload = LoadingBar;
var YDBeamD = new Image();
YDBeamD.src = "grafix/effects/beam/yellow/beam.d.png";
YDBeamD.onload = LoadingBar;
var YDBeamWA = new Image();
YDBeamWA.src = "grafix/effects/beam/yellow/beam.wa.png";
YDBeamWA.onload = LoadingBar;
var YDBeamWD = new Image();
YDBeamWD.src = "grafix/effects/beam/yellow/beam.wd.png";
YDBeamWD.onload = LoadingBar;
var YDBeamAS = new Image();
YDBeamAS.src = "grafix/effects/beam/yellow/beam.as.png";
YDBeamAS.onload = LoadingBar;
var YDBeamSD = new Image();
YDBeamSD.src = "grafix/effects/beam/yellow/beam.sd.png";
YDBeamSD.onload = LoadingBar;
var PDBeamH = new Image();
PDBeamH.src = "grafix/effects/beam/purple/beam.hor.png";
PDBeamH.onload = LoadingBar;
var PDBeamV = new Image();
PDBeamV.src = "grafix/effects/beam/purple/beam.ver.png";
PDBeamV.onload = LoadingBar;
var PDBeamWD = new Image();
PDBeamWD.src = "grafix/effects/beam/purple/beam.wd.png";
PDBeamWD.onload = LoadingBar;
var PDBeamWA = new Image();
PDBeamWA.src = "grafix/effects/beam/purple/beam.wa.png";
PDBeamWA.onload = LoadingBar;
var BDBeamH = new Image();
BDBeamH.src = "grafix/effects/beam/black/beam.hor.png";
BDBeamH.onload = LoadingBar;
var BDBeamV = new Image();
BDBeamV.src = "grafix/effects/beam/black/beam.ver.png";
BDBeamV.onload = LoadingBar;
var BDBeamWD = new Image();
BDBeamWD.src = "grafix/effects/beam/black/beam.wd.png";
BDBeamWD.onload = LoadingBar;
var BDBeamWA = new Image();
BDBeamWA.src = "grafix/effects/beam/black/beam.wa.png";
BDBeamWA.onload = LoadingBar;
var WDBeamW = new Image();
WDBeamW.src = "grafix/effects/beam/white/beam.w.png";
WDBeamW.onload = LoadingBar;
var WDBeamA = new Image();
WDBeamA.src = "grafix/effects/beam/white/beam.a.png";
WDBeamA.onload = LoadingBar;
var WDBeamS = new Image();
WDBeamS.src = "grafix/effects/beam/white/beam.s.png";
WDBeamS.onload = LoadingBar;
var WDBeamD = new Image();
WDBeamD.src = "grafix/effects/beam/white/beam.d.png";
WDBeamD.onload = LoadingBar;
var WDBeamWA = new Image();
WDBeamWA.src = "grafix/effects/beam/white/beam.wa.png";
WDBeamWA.onload = LoadingBar;
var WDBeamWD = new Image();
WDBeamWD.src = "grafix/effects/beam/white/beam.wd.png";
WDBeamWD.onload = LoadingBar;
var WDBeamAS = new Image();
WDBeamAS.src = "grafix/effects/beam/white/beam.as.png";
WDBeamAS.onload = LoadingBar;
var WDBeamSD = new Image();
WDBeamSD.src = "grafix/effects/beam/white/beam.sd.png";
WDBeamSD.onload = LoadingBar;
//Fire powerup
var Firebox = new Image();
Firebox.src = "grafix/powers/fire/fire1.png";
Firebox.onload = LoadingBar;
var Firebox2 = new Image();
Firebox2.src = "grafix/powers/fire/fire2.png";
Firebox2.onload = LoadingBar;
var Firebox3 = new Image();
Firebox3.src = "grafix/powers/fire/fire3.png";
Firebox3.onload = LoadingBar;
var Firebox4 = new Image();
Firebox4.src = "grafix/powers/fire/fire4.png";
Firebox4.onload = LoadingBar;
var Firebox5 = new Image();
Firebox5.src = "grafix/powers/fire/fire5.png";
Firebox5.onload = LoadingBar;
var FireIcon = new Image();
FireIcon.src = "grafix/powers/fire/fire.icon.png";
FireIcon.onload = LoadingBar;
var Fires = {1: Firebox, 2: Firebox2, 3: Firebox3, 4: Firebox4, 5: Firebox5};
//Ice powerup
var Icebox = new Image();
Icebox.src = "grafix/powers/ice/ice1.png";
Icebox.onload = LoadingBar;
var Icebox2 = new Image();
Icebox2.src = "grafix/powers/ice/ice2.png";
Icebox2.onload = LoadingBar;
var Icebox3 = new Image();
Icebox3.src = "grafix/powers/ice/ice3.png";
Icebox3.onload = LoadingBar;
var Icebox4 = new Image();
Icebox4.src = "grafix/powers/ice/ice4.png";
Icebox4.onload = LoadingBar;
var Icebox5 = new Image();
Icebox5.src = "grafix/powers/ice/ice5.png";
Icebox5.onload = LoadingBar;
var IceIcon = new Image();
IceIcon.src = "grafix/powers/ice/ice.icon.png";
IceIcon.onload = LoadingBar;
var Ices = {1: Icebox, 2: Icebox2, 3: Icebox3, 4: Icebox4, 5: Icebox5};
//Earth powerup
var Earthbox = new Image();
Earthbox.src = "grafix/powers/earth/earth1.png";
Earthbox.onload = LoadingBar;
var Earthbox2 = new Image();
Earthbox2.src = "grafix/powers/earth/earth2.png";
Earthbox2.onload = LoadingBar;
var Earthbox3 = new Image();
Earthbox3.src = "grafix/powers/earth/earth3.png";
Earthbox3.onload = LoadingBar;
var Earthbox4 = new Image();
Earthbox4.src = "grafix/powers/earth/earth4.png";
Earthbox4.onload = LoadingBar;
var Earthbox5 = new Image();
Earthbox5.src = "grafix/powers/earth/earth5.png";
Earthbox5.onload = LoadingBar;
var EarthIcon = new Image();
EarthIcon.src = "grafix/powers/earth/earth.icon.png";
EarthIcon.onload = LoadingBar;
var Earths = {1: Earthbox, 2: Earthbox2, 3: Earthbox3, 4: Earthbox4, 5: Earthbox5};
//lightning powerup
var Thunderbox = new Image();
Thunderbox.src = "grafix/powers/zap/zap1.png";
Thunderbox.onload = LoadingBar;
var Thunderbox2 = new Image();
Thunderbox2.src = "grafix/powers/zap/zap2.png";
Thunderbox2.onload = LoadingBar;
var Thunderbox3 = new Image();
Thunderbox3.src = "grafix/powers/zap/zap3.png";
Thunderbox3.onload = LoadingBar;
var Thunderbox4 = new Image();
Thunderbox4.src = "grafix/powers/zap/zap4.png";
Thunderbox4.onload = LoadingBar;
var Thunderbox5 = new Image();
Thunderbox5.src = "grafix/powers/zap/zap5.png";
Thunderbox5.onload = LoadingBar;
var LightningIcon = new Image();
LightningIcon.src = "grafix/powers/zap/zap.icon.png";
LightningIcon.onload = LoadingBar;
var Thunders = {1: Thunderbox, 2: Thunderbox2, 3: Thunderbox3, 4: Thunderbox4, 5: Thunderbox5};
//Air powerup
var Windbox = new Image();
Windbox.src = "grafix/powers/air/air1.png";
Windbox.onload = LoadingBar;
var Windbox2 = new Image();
Windbox2.src = "grafix/powers/air/air2.png";
Windbox2.onload = LoadingBar;
var Windbox3 = new Image();
Windbox3.src = "grafix/powers/air/air3.png";
Windbox3.onload = LoadingBar;
var Windbox4 = new Image();
Windbox4.src = "grafix/powers/air/air4.png";
Windbox4.onload = LoadingBar;
var Windbox5 = new Image();
Windbox5.src = "grafix/powers/air/air5.png";
Windbox5.onload = LoadingBar;
var AirIcon = new Image();
AirIcon.src = "grafix/powers/air/air.icon.png";
AirIcon.onload = LoadingBar;
var Winds = {1: Windbox, 2: Windbox2, 3: Windbox3, 4: Windbox4, 5: Windbox5};
//Mystic powerup
var Mysticbox = new Image();
Mysticbox.src = "grafix/powers/mystic/mystic1.png";
Mysticbox.onload = LoadingBar;
var Mysticbox2 = new Image();
Mysticbox2.src = "grafix/powers/mystic/mystic2.png";
Mysticbox2.onload = LoadingBar;
var Mysticbox3 = new Image();
Mysticbox3.src = "grafix/powers/mystic/mystic3.png";
Mysticbox3.onload = LoadingBar;
var Mysticbox4 = new Image();
Mysticbox4.src = "grafix/powers/mystic/mystic4.png";
Mysticbox4.onload = LoadingBar;
var Mysticbox5 = new Image();
Mysticbox5.src = "grafix/powers/mystic/mystic5.png";
Mysticbox5.onload = LoadingBar;
var MysticIcon = new Image();
MysticIcon.src = "grafix/powers/mystic/mystic.icon.png";
MysticIcon.onload = LoadingBar;
var Mystics = {1: Mysticbox, 2: Mysticbox2, 3: Mysticbox3, 4: Mysticbox4, 5: Mysticbox5};
//Water powerup
var Waterbox = new Image();
Waterbox.src = "grafix/powers/water/water1.png";
Waterbox.onload = LoadingBar;
var Waterbox2 = new Image();
Waterbox2.src = "grafix/powers/water/water2.png";
Waterbox2.onload = LoadingBar;
var Waterbox3 = new Image();
Waterbox3.src = "grafix/powers/water/water3.png";
Waterbox3.onload = LoadingBar;
var Waterbox4 = new Image();
Waterbox4.src = "grafix/powers/water/water4.png";
Waterbox4.onload = LoadingBar;
var Waterbox5 = new Image();
Waterbox5.src = "grafix/powers/water/water5.png";
Waterbox5.onload = LoadingBar;
var WaterIcon = new Image();
WaterIcon.src = "grafix/powers/water/water.icon.png";
WaterIcon.onload = LoadingBar;
var Waters = {1: Waterbox, 2: Waterbox2, 3: Waterbox3, 4: Waterbox4, 5: Waterbox5};
//Dark powerup
var Darkbox = new Image();
Darkbox.src = "grafix/powers/dark/dark1.png";
Darkbox.onload = LoadingBar;
var Darkbox2 = new Image();
Darkbox2.src = "grafix/powers/dark/dark2.png";
Darkbox2.onload = LoadingBar;
var Darkbox3 = new Image();
Darkbox3.src = "grafix/powers/dark/dark3.png";
Darkbox3.onload = LoadingBar;
var Darkbox4 = new Image();
Darkbox4.src = "grafix/powers/dark/dark4.png";
Darkbox4.onload = LoadingBar;
var Darkbox5 = new Image();
Darkbox5.src = "grafix/powers/dark/dark5.png";
Darkbox5.onload = LoadingBar;
var DarkIcon = new Image();
DarkIcon.src = "grafix/powers/dark/dark.icon.png";
DarkIcon.onload = LoadingBar;
var Darks = {1: Darkbox, 2: Darkbox2, 3: Darkbox3, 4: Darkbox4, 5: Darkbox5};
//Light powerup
var Lightbox = new Image();
Lightbox.src = "grafix/powers/light/light1.png";
Lightbox.onload = LoadingBar;
var Lightbox2 = new Image();
Lightbox2.src = "grafix/powers/light/light2.png";
Lightbox2.onload = LoadingBar;
var Lightbox3 = new Image();
Lightbox3.src = "grafix/powers/light/light3.png";
Lightbox3.onload = LoadingBar;
var Lightbox4 = new Image();
Lightbox4.src = "grafix/powers/light/light4.png";
Lightbox4.onload = LoadingBar;
var Lightbox5 = new Image();
Lightbox5.src = "grafix/powers/light/light5.png";
Lightbox5.onload = LoadingBar;
var LightIcon = new Image();
LightIcon.src = "grafix/powers/light/light.icon.png";
LightIcon.onload = LoadingBar;
var Lights = {1: Lightbox, 2: Lightbox2, 3: Lightbox3, 4: Lightbox4, 5: Lightbox5};
// Particle
var particle1 = new Image();
particle1.src = "grafix/effects/hpup/hpup1.png";
particle1.onload = LoadingBar;
var particle2 = new Image();
particle2.src = "grafix/effects/hpup/hpup2.png";
particle2.onload = LoadingBar;
var particle3 = new Image();
particle3.src = "grafix/effects/hpup/hpup3.png";
particle3.onload = LoadingBar;
var particle4 = new Image();
particle4.src = "grafix/effects/hpup/hpup4.png";
particle4.onload = LoadingBar;
var particle5 = new Image();
particle5.src = "grafix/effects/hpup/hpup5.png";
particle5.onload = LoadingBar;
var particle6 = new Image();
particle6.src = "grafix/effects/hpup/hpup6.png";
particle6.onload = LoadingBar;
var particle7 = new Image();
particle7.src = "grafix/effects/hpup/hpup7.png";
particle7.onload = LoadingBar;
var particle8 = new Image();
particle8.src = "grafix/effects/hpup/hpup8.png";
particle8.onload = LoadingBar;
var colorParticles = {1: particle1, 2: particle2, 3: particle3, 4: particle4, 5: particle5, 6: particle6, 7: particle7, 8: particle8};
//Bubble
var Bubble = new Image();
Bubble.src = "grafix/effects/bubble/bubble.png";
Bubble.onload = LoadingBar;
var FireBubble = new Image();
FireBubble.src = "grafix/effects/bubble/firebubble.1.png";
FireBubble.onload = LoadingBar;
var FireBubble2 = new Image();
FireBubble2.src = "grafix/effects/bubble/firebubble.2.png";
FireBubble2.onload = LoadingBar;
var IceBubble = new Image();
IceBubble.src = "grafix/effects/bubble/icebubble.1.png";
IceBubble.onload = LoadingBar;
var IceBubble2 = new Image();
IceBubble2.src = "grafix/effects/bubble/icebubble.2.png";
IceBubble2.onload = LoadingBar;
var IceBubble3 = new Image();
IceBubble3.src = "grafix/effects/bubble/icebubble.3.png";
IceBubble3.onload = LoadingBar;
var iceBpics = {0: IceBubble, 1: IceBubble2, 2: IceBubble3};
var MysticBubble = new Image();
MysticBubble.src = "grafix/effects/bubble/mysticbubble.1.png";
MysticBubble.onload = LoadingBar;
var MysticBubble2 = new Image();
MysticBubble2.src = "grafix/effects/bubble/mysticbubble.2.png";
MysticBubble2.onload = LoadingBar;
//summons
var AngelR1 = new Image();
AngelR1.src = "grafix/creatures/minion/angel.r1.png";
AngelR1.onload = LoadingBar;
var AngelL1 = new Image();
AngelL1.src = "grafix/creatures/minion/angel.l1.png";
AngelL1.onload = LoadingBar;
var DarkAngelR1 = new Image();
DarkAngelR1.src = "grafix/creatures/minion/darkangel.r1.png";
DarkAngelR1.onload = LoadingBar;
var DarkAngelL1 = new Image();
DarkAngelL1.src = "grafix/creatures/minion/darkangel.l1.png";
DarkAngelL1.onload = LoadingBar;
var FirehogR1 = new Image();
FirehogR1.src = "grafix/creatures/minion/firehog.r1.png";
FirehogR1.onload = LoadingBar;
var FirehogL1 = new Image();
FirehogL1.src = "grafix/creatures/minion/firehog.l1.png";
FirehogL1.onload = LoadingBar;
var FirehogFR1 = new Image();
FirehogFR1.src = "grafix/creatures/minion/firehog.flame.r1.png";
FirehogFR1.onload = LoadingBar;
var FirehogFL1 = new Image();
FirehogFL1.src = "grafix/creatures/minion/firehog.flame.l1.png";
FirehogFL1.onload = LoadingBar;
var IceMinionL1 = new Image();
IceMinionL1.src = "grafix/creatures/minion/pikkit.l1.png";
IceMinionL1.onload = LoadingBar;
//--------------------------------------------------------- Jungle Graphics ---------------------------------------------------------//
//Shadow wizz
var shadeWizzL = new Image();
shadeWizzL.src = "grafix/wizzurds/effects.wizard/wiz.shadow.l.png";
shadeWizzL.onload = LoadingBar;
var shadeWizzR = new Image();
shadeWizzR.src = "grafix/wizzurds/effects.wizard/wiz.shadow.r.png";
shadeWizzR.onload = LoadingBar;
//bkg
var backGround2 = new Image();
backGround2.src = "grafix/background/jungle1.png";
backGround2.onload = LoadingBar;
//Jungle trees
var Jtree1 = new Image();
Jtree1.src = "grafix/objects/jungle.tree/sprout1.png";
Jtree1.onload = LoadingBar;
var Jtree2 = new Image();
Jtree2.src = "grafix/objects/jungle.tree/grow1.png";
Jtree2.onload = LoadingBar;
var Jtree3 = new Image();
Jtree3.src = "grafix/objects/jungle.tree/grow2.png";
Jtree3.onload = LoadingBar;
var Jtree4 = new Image();
Jtree4.src = "grafix/objects/jungle.tree/grow3.png";
Jtree4.onload = LoadingBar;
var Jtree5 = new Image();
Jtree5.src = "grafix/objects/jungle.tree/grow4.png";
Jtree5.onload = LoadingBar;
var Jtree6 = new Image();
Jtree6.src = "grafix/objects/jungle.tree/grow5.png";
Jtree6.onload = LoadingBar;
var Jtree7 = new Image();
Jtree7.src = "grafix/objects/jungle.tree/trunk.png";
Jtree7.onload = LoadingBar;
var JungleTrees = {0: Jtree1, 1: Jtree2, 2: Jtree3, 3: Jtree4, 4: Jtree5, 5: Jtree6, 6: Jtree7}; 
var jungleIndex = 0;
var shakeTL = new Image();
shakeTL.src = "grafix/objects/jungle.tree/shake.l.png";
shakeTL.onload = LoadingBar;
var shakeTR = new Image();
shakeTR.src = "grafix/objects/jungle.tree/shake.r.png";
shakeTR.onload = LoadingBar;
var FallR1 = new Image();
FallR1.src = "grafix/objects/jungle.tree/fall.r1.png";
FallR1.onload = LoadingBar;
var FallR2 = new Image();
FallR2.src = "grafix/objects/jungle.tree/fall.r2.png";
FallR2.onload = LoadingBar;
var FallR3 = new Image();
FallR3.src = "grafix/objects/jungle.tree/fall.r3.png";
FallR3.onload = LoadingBar;
var FallR4 = new Image();
FallR4.src = "grafix/objects/jungle.tree/fall.r4.png";
FallR4.onload = LoadingBar;
var FallR5 = new Image();
FallR5.src = "grafix/objects/jungle.tree/fall.r5.png";
FallR5.onload = LoadingBar;
var FallR6 = new Image();
FallR6.src = "grafix/objects/jungle.tree/fall.r6.png";
FallR6.onload = LoadingBar;
var FallR7 = new Image();
FallR7.src = "grafix/objects/jungle.tree/fall.r7.png";
FallR7.onload = LoadingBar;
var FallR8 = new Image();
FallR8.src = "grafix/objects/jungle.tree/fall.r8.png";
FallR8.onload = LoadingBar;
var FallR9 = new Image();
FallR9.src = "grafix/objects/jungle.tree/fall.r9.png";
FallR9.onload = LoadingBar;
var FallR10 = new Image();
FallR10.src = "grafix/objects/jungle.tree/fall.r10.png";
FallR10.onload = LoadingBar;
var FallR11 = new Image();
FallR11.src = "grafix/objects/jungle.tree/fall.r11.png";
FallR11.onload = LoadingBar;
var FallR12 = new Image();
FallR12.src = "grafix/objects/jungle.tree/fall.r12.png";
FallR12.onload = LoadingBar;
var FallR13 = new Image();
FallR13.src = "grafix/objects/jungle.tree/fall.r13.png";
FallR13.onload = LoadingBar;
var FallR14 = new Image();
FallR14.src = "grafix/objects/jungle.tree/fall.r14.png";
FallR14.onload = LoadingBar;
var FallR15 = new Image();
FallR15.src = "grafix/objects/jungle.tree/fall.r15.png";
FallR15.onload = LoadingBar;
var FallR16 = new Image();
FallR16.src = "grafix/objects/jungle.tree/fall.rdown.png";
FallR16.onload = LoadingBar;
//vibrate: 1 frame per side (2 loop) for 15frames,  then 3 until 1 secs up
var FallingTreesR = {1: shakeTR, 2: shakeTL, 3: shakeTR, 4: shakeTL, 5: shakeTR, 6: shakeTL, 7: shakeTR, 8: shakeTL, 9: shakeTR, 10: shakeTL, 11: shakeTR, 12: shakeTL,
					13: shakeTR, 14: shakeTL, 15: shakeTR, 16: shakeTL, 17: shakeTL, 18: shakeTL, 19: shakeTR, 20: shakeTR, 21: shakeTR, 22: shakeTL, 23: shakeTL, 24: shakeTL, 
					25: shakeTR, 26: shakeTR, 27: shakeTR, 28: shakeTL, 29: shakeTL, 30: shakeTL, 31: FallR1, 32: FallR2, 33: FallR3, 34: FallR4, 35: FallR5, 36: FallR6, 37: FallR7,
					38: FallR8, 39: FallR9, 40: FallR10, 41: FallR11, 42: FallR12, 43: FallR13, 44: FallR14, 45: FallR15, 46: FallR16}; 
var FallL1 = new Image();
FallL1.src = "grafix/objects/jungle.tree/fall.l1.png";
FallL1.onload = LoadingBar;
var FallL2 = new Image();
FallL2.src = "grafix/objects/jungle.tree/fall.l2.png";
FallL2.onload = LoadingBar;
var FallL3 = new Image();
FallL3.src = "grafix/objects/jungle.tree/fall.l3.png";
FallL3.onload = LoadingBar;
var FallL4 = new Image();
FallL4.src = "grafix/objects/jungle.tree/fall.l4.png";
FallL4.onload = LoadingBar;
var FallL5 = new Image();
FallL5.src = "grafix/objects/jungle.tree/fall.l5.png";
FallL5.onload = LoadingBar;
var FallL6 = new Image();
FallL6.src = "grafix/objects/jungle.tree/fall.l6.png";
FallL6.onload = LoadingBar;
var FallL7 = new Image();
FallL7.src = "grafix/objects/jungle.tree/fall.l7.png";
FallL7.onload = LoadingBar;
var FallL8 = new Image();
FallL8.src = "grafix/objects/jungle.tree/fall.l8.png";
FallL8.onload = LoadingBar;
var FallL9 = new Image();
FallL9.src = "grafix/objects/jungle.tree/fall.l9.png";
FallL9.onload = LoadingBar;
var FallL10 = new Image();
FallL10.src = "grafix/objects/jungle.tree/fall.l10.png";
FallL10.onload = LoadingBar;
var FallL11 = new Image();
FallL11.src = "grafix/objects/jungle.tree/fall.l11.png";
FallL11.onload = LoadingBar;
var FallL12 = new Image();
FallL12.src = "grafix/objects/jungle.tree/fall.l12.png";
FallL12.onload = LoadingBar;
var FallL13 = new Image();
FallL13.src = "grafix/objects/jungle.tree/fall.l13.png";
FallL13.onload = LoadingBar;
var FallL14 = new Image();
FallL14.src = "grafix/objects/jungle.tree/fall.l14.png";
FallL14.onload = LoadingBar;
var FallL15 = new Image();
FallL15.src = "grafix/objects/jungle.tree/fall.l15.png";
FallL15.onload = LoadingBar;
var FallL16 = new Image();
FallL16.src = "grafix/objects/jungle.tree/fall.ldown.png";
FallL16.onload = LoadingBar;
var FallingTreesL = {1: shakeTL, 2: shakeTR, 3: shakeTL, 4: shakeTR, 5: shakeTL, 6: shakeTR, 7: shakeTL, 8: shakeTR, 9: shakeTL, 10: shakeTR, 11: shakeTL, 12: shakeTR,
					13: shakeTL, 14: shakeTR, 15: shakeTL, 16: shakeTR, 17: shakeTR, 18: shakeTR, 19: shakeTL, 20: shakeTL, 21: shakeTL, 22: shakeTR, 23: shakeTR, 24: shakeTR, 
					25: shakeTL, 26: shakeTL, 27: shakeTL, 28: shakeTR, 29: shakeTR, 30: shakeTR, 31: FallL1, 32: FallL2, 33: FallL3, 34: FallL4, 35: FallL5, 36: FallL6, 37: FallL7,
					38: FallL8, 39: FallL9, 40: FallL10, 41: FallL11, 42: FallL12, 43: FallL13, 44: FallL14, 45: FallL15, 46: FallL16}; 
//fog
var fog1 = new Image();
fog1.src = "grafix/objects/fog/top1200.png";
fog1.onload = LoadingBar;
var fog2 = new Image();
fog2.src = "grafix/objects/fog/mid1200.png";
fog2.onload = LoadingBar;
var fog3 = new Image();
fog3.src = "grafix/objects/fog/bot1360.png";
fog3.onload = LoadingBar;	
//tall grass
var tallG = new Image();
tallG.src = "grafix/objects/tall.grass/tgrass.1.png";
tallG.onload = LoadingBar;
//vines
var Vines = new Image();
Vines.src = "grafix/objects/jungle.tree/vines.png";
Vines.onload = LoadingBar;
//rain
var rain1 = new Image();
rain1.src = "grafix/background/rain/rain.1.png";
rain1.onload = LoadingBar;
var rain2 = new Image();
rain2.src = "grafix/background/rain/rain.2.png";
rain2.onload = LoadingBar;
var rain3 = new Image();
rain3.src = "grafix/background/rain/rain.3.png";
rain3.onload = LoadingBar;
var rain4 = new Image();
rain4.src = "grafix/background/rain/rain.4.png";
rain4.onload = LoadingBar;
var rain5 = new Image();
rain5.src = "grafix/background/rain/rain.5.png";
rain5.onload = LoadingBar;
var rain6 = new Image();
rain6.src = "grafix/background/rain/rain.6.png";
rain6.onload = LoadingBar;
var rain7 = new Image();
rain7.src = "grafix/background/rain/rain.7.png";
rain7.onload = LoadingBar;
var rain8 = new Image();
rain8.src = "grafix/background/rain/rain.8.png";
rain8.onload = LoadingBar;
var rain9 = new Image();
rain9.src = "grafix/background/rain/rain.9.png";
rain9.onload = LoadingBar;
var rain10 = new Image();
rain10.src = "grafix/background/rain/rain.10.png";
rain10.onload = LoadingBar;
var RainPics = {1: rain1, 2: rain2, 3: rain3, 4: rain4, 5: rain5, 6: rain6, 7: rain7, 8: rain8, 9: rain9, 10: rain10};
var rainIndex = 1;
//Hudge snake
var HudgeL1 = new Image();
HudgeL1.src = "grafix/creatures/hudge/hudge.l1.png";
HudgeL1.onload = LoadingBar;
var HudgeL2 = new Image();
HudgeL2.src = "grafix/creatures/hudge/hudge.l2.png";
HudgeL2.onload = LoadingBar;
var HudgeL3 = new Image();
HudgeL3.src = "grafix/creatures/hudge/hudge.l3.png";
HudgeL3.onload = LoadingBar;
var HudgeL4 = new Image();
HudgeL4.src = "grafix/creatures/hudge/hudge.l4.png";
HudgeL4.onload = LoadingBar;
var HudgeLs = {1: HudgeL1, 2: HudgeL2, 3: HudgeL3, 4: HudgeL4};
var HudgeR1 = new Image();
HudgeR1.src = "grafix/creatures/hudge/hudge.r1.png";
HudgeR1.onload = LoadingBar;
var HudgeR2 = new Image();
HudgeR2.src = "grafix/creatures/hudge/hudge.r2.png";
HudgeR2.onload = LoadingBar;
var HudgeR3 = new Image();
HudgeR3.src = "grafix/creatures/hudge/hudge.r3.png";
HudgeR3.onload = LoadingBar;
var HudgeR4 = new Image();
HudgeR4.src = "grafix/creatures/hudge/hudge.r4.png";
HudgeR4.onload = LoadingBar;
var HudgeRs = {1: HudgeR1, 2: HudgeR2, 3: HudgeR3, 4: HudgeR4};
//Enemy2
var humpDumpr1 = new Image();
humpDumpr1.src = "grafix/creatures/humpdump/humpdump.r1.png";
humpDumpr1.onload = LoadingBar;
var humpDumpr2 = new Image();
humpDumpr2.src = "grafix/creatures/humpdump/humpdump.r2.png";
humpDumpr2.onload = LoadingBar;
var humpDumpr3 = new Image();
humpDumpr3.src = "grafix/creatures/humpdump/humpdump.r3.png";
humpDumpr3.onload = LoadingBar;
var humpDumpl1 = new Image();
humpDumpl1.src = "grafix/creatures/humpdump/humpdump.l1.png";
humpDumpl1.onload = LoadingBar;
var humpDumpl2 = new Image();
humpDumpl2.src = "grafix/creatures/humpdump/humpdump.l2.png";
humpDumpl2.onload = LoadingBar;
var humpDumpl3 = new Image();
humpDumpl3.src = "grafix/creatures/humpdump/humpdump.l3.png";
humpDumpl3.onload = LoadingBar;
var humprList = {1: humpDumpr1, 2: humpDumpr2, 3: humpDumpr3};
var humplList = {1: humpDumpl1, 2: humpDumpl2, 3: humpDumpl3};
var humpDumpd1 = new Image();
humpDumpd1.src = "grafix/creatures/humpdump/humpdump.d1.png";
humpDumpd1.onload = LoadingBar;
var humpDumpd2 = new Image();
humpDumpd2.src = "grafix/creatures/humpdump/humpdump.d2.png";
humpDumpd2.onload = LoadingBar;
var humpdList = {1: humpDumpd1, 2: humpDumpd2};
//Thief
var thiefPeekL = new Image();
thiefPeekL.src = "grafix/creatures/sneak/peek.l1.png";
thiefPeekL.onload = LoadingBar;
var thiefSneakL = new Image();
thiefSneakL.src = "grafix/creatures/sneak/hidden.l1.png";
thiefSneakL.onload = LoadingBar;
var thiefVisL = new Image();
thiefVisL.src = "grafix/creatures/sneak/visible.l1.png";
thiefVisL.onload = LoadingBar;
var ThievesL = {1: thiefPeekL, 2: thiefSneakL, 3: thiefVisL};
var thiefPeekR = new Image();
thiefPeekR.src = "grafix/creatures/sneak/peek.r1.png";
thiefPeekR.onload = LoadingBar;
var thiefSneakR = new Image();
thiefSneakR.src = "grafix/creatures/sneak/hidden.r1.png";
thiefSneakR.onload = LoadingBar;
var thiefVisR = new Image();
thiefVisR.src = "grafix/creatures/sneak/visible.r1.png";
thiefVisR.onload = LoadingBar;
var ThievesR = {1: thiefPeekR, 2: thiefSneakR, 3: thiefVisR};
//Master Thief
var ThiefBossPicL = new Image();
ThiefBossPicL.src = "grafix/creatures/raoulfdatheifbaus/raoulff.l1.png";
ThiefBossPicL.onload = LoadingBar;
var ThiefBossPicR = new Image();
ThiefBossPicR.src = "grafix/creatures/raoulfdatheifbaus/raoulff.r1.png";
ThiefBossPicR.onload = LoadingBar;
var ThiefBossDashL = new Image();
ThiefBossDashL.src = "grafix/creatures/raoulfdatheifbaus/dash.l1.png";
ThiefBossDashL.onload = LoadingBar;
var ThiefBossDashR = new Image();
ThiefBossDashR.src = "grafix/creatures/raoulfdatheifbaus/dash.r1.png";
ThiefBossDashR.onload = LoadingBar;
var ThiefBossPrintL = new Image();
ThiefBossPrintL.src = "grafix/creatures/raoulfdatheifbaus/footprint.l1.png";
ThiefBossPrintL.onload = LoadingBar;
var ThiefBossPrintR = new Image();
ThiefBossPrintR.src = "grafix/creatures/raoulfdatheifbaus/footprint.r1.png";
ThiefBossPrintR.onload = LoadingBar;
var ThiefBossFlashPrintL = new Image();
ThiefBossFlashPrintL.src = "grafix/creatures/raoulfdatheifbaus/flashprint.l1.png";
ThiefBossFlashPrintL.onload = LoadingBar;
var ThiefBossFlashPrintR = new Image();
ThiefBossFlashPrintR.src = "grafix/creatures/raoulfdatheifbaus/flashprint.r1.png";
ThiefBossFlashPrintR.onload = LoadingBar;
//------------------------------------------------ Fire Level -----------------------------------------------------------------------//
//bkg
var FireBackGround1 = new Image();
FireBackGround1.src = "grafix/background/lava/lava.1.png";
FireBackGround1.onload = LoadingBar;
var FireBackGround2 = new Image();
FireBackGround2.src = "grafix/background/lava/lava.2.png";
FireBackGround2.onload = LoadingBar;
var FireBackGround3 = new Image();
FireBackGround3.src = "grafix/background/lava/lava.3.png";
FireBackGround3.onload = LoadingBar;
var FireBackGround4 = new Image();
FireBackGround4.src = "grafix/background/lava/lava.4.png";
FireBackGround4.onload = LoadingBar;
var FireBackGrounds = {1: FireBackGround1, 2: FireBackGround2, 3: FireBackGround3, 4: FireBackGround4};
//Lavaman
var LavamanpicL = new Image();
LavamanpicL.src = "grafix/creatures/firesprite/firesprite.l1.png";
LavamanpicL.onload = LoadingBar;
var LavamanpicR = new Image();
LavamanpicR.src = "grafix/creatures/firesprite/firesprite.r1.png";
LavamanpicR.onload = LoadingBar;
//Mudge (Magma Hudge)
var MudgeL1 = new Image();
MudgeL1.src = "grafix/creatures/mudge/mudge.l1.png";
MudgeL1.onload = LoadingBar;
var MudgeL2 = new Image();
MudgeL2.src = "grafix/creatures/mudge/mudge.l2.png";
MudgeL2.onload = LoadingBar;
var MudgeL3 = new Image();
MudgeL3.src = "grafix/creatures/mudge/mudge.l3.png";
MudgeL3.onload = LoadingBar;
var MudgeR1 = new Image();
MudgeR1.src = "grafix/creatures/mudge/mudge.r1.png";
MudgeR1.onload = LoadingBar;
var MudgeR2 = new Image();
MudgeR2.src = "grafix/creatures/mudge/mudge.r2.png";
MudgeR2.onload = LoadingBar;
var MudgeR3 = new Image();
MudgeR3.src = "grafix/creatures/mudge/mudge.r3.png";
MudgeR3.onload = LoadingBar;
var MudgeL = {1: MudgeL1, 2: MudgeL2, 3: MudgeL3};
var MudgeR = {1: MudgeR1, 2: MudgeR2, 3: MudgeR3};
//Tenemy
var GlobblyR1 = new Image();
GlobblyR1.src = "grafix/creatures/globbly/globbly.r1.png";
GlobblyR1.onload = LoadingBar;
var GlobblyR2 = new Image();
GlobblyR2.src = "grafix/creatures/globbly/globbly.r2.png";
GlobblyR2.onload = LoadingBar;
var GlobblyR3 = new Image();
GlobblyR3.src = "grafix/creatures/globbly/globbly.r3.png";
GlobblyR3.onload = LoadingBar;
var GlobblyL1 = new Image();
GlobblyL1.src = "grafix/creatures/globbly/globbly.l1.png";
GlobblyL1.onload = LoadingBar;
var GlobblyL2 = new Image();
GlobblyL2.src = "grafix/creatures/globbly/globbly.l2.png";
GlobblyL2.onload = LoadingBar;
var GlobblyL3 = new Image();
GlobblyL3.src = "grafix/creatures/globbly/globbly.l3.png";
GlobblyL3.onload = LoadingBar;
var GlobblyR = {1: GlobblyR1, 2: GlobblyR2, 3: GlobblyR3};
var GlobblyL = {1: GlobblyL1, 2: GlobblyL2, 3: GlobblyL3};
//Spawner
var SplavamanL1 = new Image();
SplavamanL1.src = "grafix/creatures/winamp/winamp.l1.png";
SplavamanL1.onload = LoadingBar;
var SplavamanL2 = new Image();
SplavamanL2.src = "grafix/creatures/winamp/winamp.l2.png";
SplavamanL2.onload = LoadingBar;
var SplavamanL3 = new Image();
SplavamanL3.src = "grafix/creatures/winamp/winamp.l3.png";
SplavamanL3.onload = LoadingBar;
var SplavamanL4 = new Image();
SplavamanL4.src = "grafix/creatures/winamp/winamp.l4.png";
SplavamanL4.onload = LoadingBar;
var SplavamanR1 = new Image();
SplavamanR1.src = "grafix/creatures/winamp/winamp.r1.png";
SplavamanR1.onload = LoadingBar;
var SplavamanR2 = new Image();
SplavamanR2.src = "grafix/creatures/winamp/winamp.r2.png";
SplavamanR2.onload = LoadingBar;
var SplavamanR3 = new Image();
SplavamanR3.src = "grafix/creatures/winamp/winamp.r3.png";
SplavamanR3.onload = LoadingBar;
var SplavamanR4 = new Image();
SplavamanR4.src = "grafix/creatures/winamp/winamp.r4.png";
SplavamanR4.onload = LoadingBar;
var SplavamanCastL1 = new Image();
SplavamanCastL1.src = "grafix/creatures/winamp/cast.l1.png";
SplavamanCastL1.onload = LoadingBar;
var SplavamanCastL2 = new Image();
SplavamanCastL2.src = "grafix/creatures/winamp/cast.l2.png";
SplavamanCastL2.onload = LoadingBar;
var SplavamanCastL3 = new Image();
SplavamanCastL3.src = "grafix/creatures/winamp/cast.l3.png";
SplavamanCastL3.onload = LoadingBar;
var SplavamanCastL4 = new Image();
SplavamanCastL4.src = "grafix/creatures/winamp/cast.l4.png";
SplavamanCastL4.onload = LoadingBar;
var SplavamanCastL5 = new Image();
SplavamanCastL5.src = "grafix/creatures/winamp/cast.l5.png";
SplavamanCastL5.onload = LoadingBar;
var SplavamanCastL6 = new Image();
SplavamanCastL6.src = "grafix/creatures/winamp/cast.l6.png";
SplavamanCastL6.onload = LoadingBar;
var SplavamanCastR1 = new Image();
SplavamanCastR1.src = "grafix/creatures/winamp/cast.r1.png";
SplavamanCastR1.onload = LoadingBar;
var SplavamanCastR2 = new Image();
SplavamanCastR2.src = "grafix/creatures/winamp/cast.r2.png";
SplavamanCastR2.onload = LoadingBar;
var SplavamanCastR3 = new Image();
SplavamanCastR3.src = "grafix/creatures/winamp/cast.r3.png";
SplavamanCastR3.onload = LoadingBar;
var SplavamanCastR4 = new Image();
SplavamanCastR4.src = "grafix/creatures/winamp/cast.r4.png";
SplavamanCastR4.onload = LoadingBar;
var SplavamanCastR5 = new Image();
SplavamanCastR5.src = "grafix/creatures/winamp/cast.r5.png";
SplavamanCastR5.onload = LoadingBar;
var SplavamanCastR6 = new Image();
SplavamanCastR6.src = "grafix/creatures/winamp/cast.r6.png";
SplavamanCastR6.onload = LoadingBar;
var SplavamanSpawnL1 = new Image();
SplavamanSpawnL1.src = "grafix/creatures/winamp/spawn.l1.png";
SplavamanSpawnL1.onload = LoadingBar;
var SplavamanSpawnL2 = new Image();
SplavamanSpawnL2.src = "grafix/creatures/winamp/spawn.l2.png";
SplavamanSpawnL2.onload = LoadingBar;
var SplavamanSpawnL3 = new Image();
SplavamanSpawnL3.src = "grafix/creatures/winamp/spawn.l3.png";
SplavamanSpawnL3.onload = LoadingBar;
var SplavamanSpawnL4 = new Image();
SplavamanSpawnL4.src = "grafix/creatures/winamp/spawn.l4.png";
SplavamanSpawnL4.onload = LoadingBar;
var SplavamanSpawnL5 = new Image();
SplavamanSpawnL5.src = "grafix/creatures/winamp/spawn.l5.png";
SplavamanSpawnL5.onload = LoadingBar;
var SplavamanSpawnL6 = new Image();
SplavamanSpawnL6.src = "grafix/creatures/winamp/spawn.l6.png";
SplavamanSpawnL6.onload = LoadingBar;
var SplavamanSpawnR1 = new Image();
SplavamanSpawnR1.src = "grafix/creatures/winamp/spawn.r1.png";
SplavamanSpawnR1.onload = LoadingBar;
var SplavamanSpawnR2 = new Image();
SplavamanSpawnR2.src = "grafix/creatures/winamp/spawn.r2.png";
SplavamanSpawnR2.onload = LoadingBar;
var SplavamanSpawnR3 = new Image();
SplavamanSpawnR3.src = "grafix/creatures/winamp/spawn.r3.png";
SplavamanSpawnR3.onload = LoadingBar;
var SplavamanSpawnR4 = new Image();
SplavamanSpawnR4.src = "grafix/creatures/winamp/spawn.r4.png";
SplavamanSpawnR4.onload = LoadingBar;
var SplavamanSpawnR5 = new Image();
SplavamanSpawnR5.src = "grafix/creatures/winamp/spawn.r5.png";
SplavamanSpawnR5.onload = LoadingBar;
var SplavamanSpawnR6 = new Image();
SplavamanSpawnR6.src = "grafix/creatures/winamp/spawn.r6.png";
SplavamanSpawnR6.onload = LoadingBar;
var SplavamanLWalk = {1: SplavamanL1, 2: SplavamanL2, 3: SplavamanL3, 4: SplavamanL4};
var SplavamanRWalk = {1: SplavamanR1, 2: SplavamanR2, 3: SplavamanR3, 4: SplavamanR4};
var SplavamanLCast = {1: SplavamanCastL1, 2: SplavamanCastL1, 3: SplavamanCastL1, 4: SplavamanCastL1, 5: SplavamanCastL1, 6: SplavamanCastL1, 7: SplavamanCastL1, 8: SplavamanCastL2, 9: SplavamanCastL2,
						10: SplavamanCastL2, 11: SplavamanCastL3, 12: SplavamanCastL3, 13: SplavamanCastL3, 14: SplavamanCastL3, 15: SplavamanCastL4, 16: SplavamanCastL4, 17: SplavamanCastL4,
						18: SplavamanCastL4, 19: SplavamanCastL5, 20: SplavamanCastL5, 21: SplavamanCastL5, 22: SplavamanCastL5, 23: SplavamanCastL5, 24: SplavamanCastL5,
						25: SplavamanCastL5, 26: SplavamanCastL6, 27: SplavamanCastL6};
var SplavamanRCast = {1: SplavamanCastR1, 2: SplavamanCastR1, 3: SplavamanCastR1, 4: SplavamanCastR1, 5: SplavamanCastR1, 6: SplavamanCastR1, 7: SplavamanCastR1, 8: SplavamanCastR2, 9: SplavamanCastR2,
						10: SplavamanCastR2, 11: SplavamanCastR3, 12: SplavamanCastR3, 13: SplavamanCastR3, 14: SplavamanCastR3, 15: SplavamanCastR4, 16: SplavamanCastR4, 17: SplavamanCastR4,
						18: SplavamanCastR4, 19: SplavamanCastR5, 20: SplavamanCastR5, 21: SplavamanCastR5, 22: SplavamanCastR5, 23: SplavamanCastR5, 24: SplavamanCastR5,
						25: SplavamanCastR5, 26: SplavamanCastR6, 27: SplavamanCastR6};
var SplavamanLSpawn = {1: SplavamanSpawnL1, 2: SplavamanSpawnL1, 3: SplavamanSpawnL1, 4: SplavamanSpawnL1, 5: SplavamanSpawnL1, 6: SplavamanSpawnL1, 7: SplavamanSpawnL1, 8: SplavamanSpawnL1, 9: SplavamanSpawnL2,
						10: SplavamanSpawnL2, 11: SplavamanSpawnL3, 12: SplavamanSpawnL3, 13: SplavamanSpawnL4, 14: SplavamanSpawnL4, 15: SplavamanSpawnL4, 16: SplavamanSpawnL4, 17: SplavamanSpawnL4,
						18: SplavamanSpawnL4, 19: SplavamanSpawnL5, 20: SplavamanSpawnL6, 21: SplavamanSpawnL6};
var SplavamanRSpawn = {1: SplavamanSpawnR1, 2: SplavamanSpawnR1, 3: SplavamanSpawnR1, 4: SplavamanSpawnR1, 5: SplavamanSpawnR1, 6: SplavamanSpawnR1, 7: SplavamanSpawnR1, 8: SplavamanSpawnR1, 9: SplavamanSpawnR2,
						10: SplavamanSpawnR2, 11: SplavamanSpawnR3, 12: SplavamanSpawnR3, 13: SplavamanSpawnR4, 14: SplavamanSpawnR4, 15: SplavamanSpawnR4, 16: SplavamanSpawnR4, 17: SplavamanSpawnR4,
						18: SplavamanSpawnR4, 19: SplavamanSpawnR5, 20: SplavamanSpawnR6, 21: SplavamanSpawnR6};


//Genie
var GenieL = new Image();
GenieL.src = "grafix/creatures/ortizgenie/idle.l1.png";
GenieL.onload = LoadingBar;
var GenieR = new Image();
GenieR.src = "grafix/creatures/ortizgenie/idle.r1.png";
GenieR.onload = LoadingBar;
var GenieML3 = new Image();
GenieML3.src = "grafix/creatures/ortizgenie/mstrike.l3.png";
GenieML3.onload = LoadingBar;
var GenieMR3 = new Image();
GenieMR3.src = "grafix/creatures/ortizgenie/mstrike.r3.png";
GenieMR3.onload = LoadingBar;
var GenieRiseL3 = new Image();
GenieRiseL3.src = "grafix/creatures/ortizgenie/rise.l3.png";
GenieRiseL3.onload = LoadingBar;
var GenieRiseR3 = new Image();
GenieRiseR3.src = "grafix/creatures/ortizgenie/rise.r3.png";
GenieRiseR3.onload = LoadingBar;
var GenieSpawn1 = new Image();
GenieSpawn1.src = "grafix/creatures/ortizgenie/spawn/1.png";
GenieSpawn1.onload = LoadingBar;
var GenieSpawn2 = new Image();
GenieSpawn2.src = "grafix/creatures/ortizgenie/spawn/2.png";
GenieSpawn2.onload = LoadingBar;
var GenieSpawn3 = new Image();
GenieSpawn3.src = "grafix/creatures/ortizgenie/spawn/3.png";
GenieSpawn3.onload = LoadingBar;
var GenieSpawn4 = new Image();
GenieSpawn4.src = "grafix/creatures/ortizgenie/spawn/4.png";
GenieSpawn4.onload = LoadingBar;
var GenieSpawn5 = new Image();
GenieSpawn5.src = "grafix/creatures/ortizgenie/spawn/5.png";
GenieSpawn5.onload = LoadingBar;
var GenieSpawn6 = new Image();
GenieSpawn6.src = "grafix/creatures/ortizgenie/spawn/6.png";
GenieSpawn6.onload = LoadingBar;
var GenieSpawn7 = new Image();
GenieSpawn7.src = "grafix/creatures/ortizgenie/spawn/7.png";
GenieSpawn7.onload = LoadingBar;
var GenieSpawn8 = new Image();
GenieSpawn8.src = "grafix/creatures/ortizgenie/spawn/8.png";
GenieSpawn8.onload = LoadingBar;
var GenieSpawn9 = new Image();
GenieSpawn9.src = "grafix/creatures/ortizgenie/spawn/9.png";
GenieSpawn9.onload = LoadingBar;
var GenieSpawn10 = new Image();
GenieSpawn10.src = "grafix/creatures/ortizgenie/spawn/10.png";
GenieSpawn10.onload = LoadingBar;
var GenieSpawn11 = new Image();
GenieSpawn11.src = "grafix/creatures/ortizgenie/spawn/11.png";
GenieSpawn11.onload = LoadingBar;
var GenieSpawn12 = new Image();
GenieSpawn12.src = "grafix/creatures/ortizgenie/spawn/12.png";
GenieSpawn12.onload = LoadingBar;
var GenieSpawn13 = new Image();
GenieSpawn13.src = "grafix/creatures/ortizgenie/spawn/13.png";
GenieSpawn13.onload = LoadingBar;
var GenieSpawn14 = new Image();
GenieSpawn14.src = "grafix/creatures/ortizgenie/spawn/14.png";
GenieSpawn14.onload = LoadingBar;
var GenieSpawn15 = new Image();
GenieSpawn15.src = "grafix/creatures/ortizgenie/spawn/15.png";
GenieSpawn15.onload = LoadingBar;
var GenieSpawn16 = new Image();
GenieSpawn16.src = "grafix/creatures/ortizgenie/spawn/16.png";
GenieSpawn16.onload = LoadingBar;
var GenieSpawn17 = new Image();
GenieSpawn17.src = "grafix/creatures/ortizgenie/spawn/17.png";
GenieSpawn17.onload = LoadingBar;
var GenieSpawn = {1: GenieSpawn1, 2: GenieSpawn1, 3: GenieSpawn2, 4: GenieSpawn2, 5: GenieSpawn2, 6: GenieSpawn3, 7: GenieSpawn3, 8: GenieSpawn4, 9: GenieSpawn4,
					10: GenieSpawn4, 11: GenieSpawn4, 12: GenieSpawn5, 13: GenieSpawn5, 14: GenieSpawn5, 15: GenieSpawn6, 16: GenieSpawn6, 17: GenieSpawn6, 18: GenieSpawn6,
					19: GenieSpawn6, 20: GenieSpawn7, 21: GenieSpawn8, 22: GenieSpawn8, 23: GenieSpawn9, 24: GenieSpawn9, 25: GenieSpawn9, 26: GenieSpawn10, 27: GenieSpawn11, 
					28: GenieSpawn12, 29: GenieSpawn13, 30: GenieSpawn14, 31: GenieSpawn14, 32: GenieSpawn15, 33: GenieSpawn15, 34: GenieSpawn16, 35: GenieSpawn17, 36: GenieSpawn17};
var GenieLaserShootL1 = new Image();
GenieLaserShootL1.src = "grafix/creatures/ortizgenie/laser.l3.1.png";
GenieLaserShootL1.onload = LoadingBar;
var GenieLaserShootL2 = new Image();
GenieLaserShootL2.src = "grafix/creatures/ortizgenie/laser.l3.2.png";
GenieLaserShootL2.onload = LoadingBar;
var GenieLaserShootL3 = new Image();
GenieLaserShootL3.src = "grafix/creatures/ortizgenie/laser.l3.3.png";
GenieLaserShootL3.onload = LoadingBar;
var GenieLaserLoopL = {1: GenieLaserShootL1, 2: GenieLaserShootL2, 3: GenieLaserShootL3};
var GenieLaserShootR1 = new Image();
GenieLaserShootR1.src = "grafix/creatures/ortizgenie/laser.r3.1.png";
GenieLaserShootR1.onload = LoadingBar;
var GenieLaserShootR2 = new Image();
GenieLaserShootR2.src = "grafix/creatures/ortizgenie/laser.r3.2.png";
GenieLaserShootR2.onload = LoadingBar;
var GenieLaserShootR3 = new Image();
GenieLaserShootR3.src = "grafix/creatures/ortizgenie/laser.r3.3.png";
GenieLaserShootR3.onload = LoadingBar;
var GenieLaserLoopR = {1: GenieLaserShootR1, 2: GenieLaserShootR2, 3: GenieLaserShootR3};
//laser
var LaserUp1 = new Image();
LaserUp1.src = "grafix/creatures/ortizgenie/laser/up.l1.png";
LaserUp1.onload = LoadingBar;
var LaserUp2 = new Image();
LaserUp2.src = "grafix/creatures/ortizgenie/laser/up.l2.png";
LaserUp2.onload = LoadingBar;
var LaserUp3 = new Image();
LaserUp3.src = "grafix/creatures/ortizgenie/laser/up.l3.png";
LaserUp3.onload = LoadingBar;
var LaserUp4 = new Image();
LaserUp4.src = "grafix/creatures/ortizgenie/laser/up.l4.png";
LaserUp4.onload = LoadingBar;
var LaserUp5 = new Image();
LaserUp5.src = "grafix/creatures/ortizgenie/laser/up.l5.png";
LaserUp5.onload = LoadingBar;
var LaserUp6 = new Image();
LaserUp6.src = "grafix/creatures/ortizgenie/laser/up.l6.png";
LaserUp6.onload = LoadingBar;
var LaserUp7 = new Image();
LaserUp7.src = "grafix/creatures/ortizgenie/laser/up.l7.png";
LaserUp7.onload = LoadingBar;
var LaserUp8 = new Image();
LaserUp8.src = "grafix/creatures/ortizgenie/laser/up.l8.png";
LaserUp8.onload = LoadingBar;
var LaserUp9 = new Image();
LaserUp9.src = "grafix/creatures/ortizgenie/laser/up.l9.png";
LaserUp9.onload = LoadingBar;
var LaserUpsL = {1: LaserUp1, 2: LaserUp1, 3: LaserUp1, 4: LaserUp2, 5: LaserUp2, 6: LaserUp3, 7: LaserUp3, 8: LaserUp4, 9: LaserUp5,
				10: LaserUp6, 11: LaserUp7, 12: LaserUp8, 13: LaserUp8, 14: LaserUp9, 15: LaserUp9, 16: LaserUp9};
var LaserFdL1 = new Image();
LaserFdL1.src = "grafix/creatures/ortizgenie/laser/fwd.l1.png";
LaserFdL1.onload = LoadingBar;
var LaserFdL2 = new Image();
LaserFdL2.src = "grafix/creatures/ortizgenie/laser/fwd.l2.png";
LaserFdL2.onload = LoadingBar;
var LaserFdL3 = new Image();
LaserFdL3.src = "grafix/creatures/ortizgenie/laser/fwd.l3.png";
LaserFdL3.onload = LoadingBar;
var LaserFdL4 = new Image();
LaserFdL4.src = "grafix/creatures/ortizgenie/laser/fwd.l4.png";
LaserFdL4.onload = LoadingBar;
var LaserFdL5 = new Image();
LaserFdL5.src = "grafix/creatures/ortizgenie/laser/fwd.l5.png";
LaserFdL5.onload = LoadingBar;
var LaserFdL6 = new Image();
LaserFdL6.src = "grafix/creatures/ortizgenie/laser/fwd.l6.png";
LaserFdL6.onload = LoadingBar;
var LaserFdL7 = new Image();
LaserFdL7.src = "grafix/creatures/ortizgenie/laser/fwd.l7.png";
LaserFdL7.onload = LoadingBar;
var LaserFdL8 = new Image();
LaserFdL8.src = "grafix/creatures/ortizgenie/laser/fwd.l8.png";
LaserFdL8.onload = LoadingBar;
var LaserFdL9 = new Image();
LaserFdL9.src = "grafix/creatures/ortizgenie/laser/fwd.l9.png";
LaserFdL9.onload = LoadingBar;
var LaserFdsL = {1: LaserFdL1, 2: LaserFdL1, 3: LaserFdL1, 4: LaserFdL2, 5: LaserFdL2, 6: LaserFdL3, 7: LaserFdL3, 8: LaserFdL4, 9: LaserFdL5,
				10: LaserFdL6, 11: LaserFdL7, 12: LaserFdL8, 13: LaserFdL8, 14: LaserFdL9, 15: LaserFdL9, 16: LaserFdL9};
var LaserDL1 = new Image();
LaserDL1.src = "grafix/creatures/ortizgenie/laser/down.l1.png";
LaserDL1.onload = LoadingBar;
var LaserDL2 = new Image();
LaserDL2.src = "grafix/creatures/ortizgenie/laser/down.l2.png";
LaserDL2.onload = LoadingBar;
var LaserDL3 = new Image();
LaserDL3.src = "grafix/creatures/ortizgenie/laser/down.l3.png";
LaserDL3.onload = LoadingBar;
var LaserDL4 = new Image();
LaserDL4.src = "grafix/creatures/ortizgenie/laser/down.l4.png";
LaserDL4.onload = LoadingBar;
var LaserDL5 = new Image();
LaserDL5.src = "grafix/creatures/ortizgenie/laser/down.l5.png";
LaserDL5.onload = LoadingBar;
var LaserDL6 = new Image();
LaserDL6.src = "grafix/creatures/ortizgenie/laser/down.l6.png";
LaserDL6.onload = LoadingBar;
var LaserDL7 = new Image();
LaserDL7.src = "grafix/creatures/ortizgenie/laser/down.l7.png";
LaserDL7.onload = LoadingBar;
var LaserDL8 = new Image();
LaserDL8.src = "grafix/creatures/ortizgenie/laser/down.l8.png";
LaserDL8.onload = LoadingBar;
var LaserDL9 = new Image();
LaserDL9.src = "grafix/creatures/ortizgenie/laser/down.l9.png";
LaserDL9.onload = LoadingBar;
var LaserDsL = {1: LaserDL1, 2: LaserDL1, 3: LaserDL1, 4: LaserDL2, 5: LaserDL2, 6: LaserDL3, 7: LaserDL3, 8: LaserDL4, 9: LaserDL5,
				10: LaserDL6, 11: LaserDL7, 12: LaserDL8, 13: LaserDL8, 14: LaserDL9, 15: LaserDL9, 16: LaserDL9};
var LaserUpR1 = new Image();
LaserUpR1.src = "grafix/creatures/ortizgenie/laser/up.r1.png";
LaserUpR1.onload = LoadingBar;
var LaserUpR2 = new Image();
LaserUpR2.src = "grafix/creatures/ortizgenie/laser/up.r2.png";
LaserUpR2.onload = LoadingBar;
var LaserUpR3 = new Image();
LaserUpR3.src = "grafix/creatures/ortizgenie/laser/up.r3.png";
LaserUpR3.onload = LoadingBar;
var LaserUpR4 = new Image();
LaserUpR4.src = "grafix/creatures/ortizgenie/laser/up.r4.png";
LaserUpR4.onload = LoadingBar;
var LaserUpR5 = new Image();
LaserUpR5.src = "grafix/creatures/ortizgenie/laser/up.r5.png";
LaserUpR5.onload = LoadingBar;
var LaserUpR6 = new Image();
LaserUpR6.src = "grafix/creatures/ortizgenie/laser/up.r6.png";
LaserUpR6.onload = LoadingBar;
var LaserUpR7 = new Image();
LaserUpR7.src = "grafix/creatures/ortizgenie/laser/up.r7.png";
LaserUpR7.onload = LoadingBar;
var LaserUpR8 = new Image();
LaserUpR8.src = "grafix/creatures/ortizgenie/laser/up.r8.png";
LaserUpR8.onload = LoadingBar;
var LaserUpR9 = new Image();
LaserUpR9.src = "grafix/creatures/ortizgenie/laser/up.r9.png";
LaserUpR9.onload = LoadingBar;
var LaserUpsR = {1: LaserUpR1, 2: LaserUpR1, 3: LaserUpR1, 4: LaserUpR2, 5: LaserUpR2, 6: LaserUpR3, 7: LaserUpR3, 8: LaserUpR4, 9: LaserUpR5,
				10: LaserUpR6, 11: LaserUpR7, 12: LaserUpR8, 13: LaserUpR8, 14: LaserUpR9, 15: LaserUpR9, 16: LaserUpR9};
var LaserFdR1 = new Image();
LaserFdR1.src = "grafix/creatures/ortizgenie/laser/fwd.r1.png";
LaserFdR1.onload = LoadingBar;
var LaserFdR2 = new Image();
LaserFdR2.src = "grafix/creatures/ortizgenie/laser/fwd.r2.png";
LaserFdR2.onload = LoadingBar;
var LaserFdR3 = new Image();
LaserFdR3.src = "grafix/creatures/ortizgenie/laser/fwd.r3.png";
LaserFdR3.onload = LoadingBar;
var LaserFdR4 = new Image();
LaserFdR4.src = "grafix/creatures/ortizgenie/laser/fwd.r4.png";
LaserFdR4.onload = LoadingBar;
var LaserFdR5 = new Image();
LaserFdR5.src = "grafix/creatures/ortizgenie/laser/fwd.r5.png";
LaserFdR5.onload = LoadingBar;
var LaserFdR6 = new Image();
LaserFdR6.src = "grafix/creatures/ortizgenie/laser/fwd.r6.png";
LaserFdR6.onload = LoadingBar;
var LaserFdR7 = new Image();
LaserFdR7.src = "grafix/creatures/ortizgenie/laser/fwd.r7.png";
LaserFdR7.onload = LoadingBar;
var LaserFdR8 = new Image();
LaserFdR8.src = "grafix/creatures/ortizgenie/laser/fwd.r8.png";
LaserFdR8.onload = LoadingBar;
var LaserFdR9 = new Image();
LaserFdR9.src = "grafix/creatures/ortizgenie/laser/fwd.r9.png";
LaserFdR9.onload = LoadingBar;
var LaserFdsR = {1: LaserFdR1, 2: LaserFdR1, 3: LaserFdR1, 4: LaserFdR2, 5: LaserFdR2, 6: LaserFdR3, 7: LaserFdR3, 8: LaserFdR4, 9: LaserFdR5,
				10: LaserFdR6, 11: LaserFdR7, 12: LaserFdR8, 13: LaserFdR8, 14: LaserFdR9, 15: LaserFdR9, 16: LaserFdR9};
var LaserDR1 = new Image();
LaserDR1.src = "grafix/creatures/ortizgenie/laser/down.r1.png";
LaserDR1.onload = LoadingBar;
var LaserDR2 = new Image();
LaserDR2.src = "grafix/creatures/ortizgenie/laser/down.r2.png";
LaserDR2.onload = LoadingBar;
var LaserDR3 = new Image();
LaserDR3.src = "grafix/creatures/ortizgenie/laser/down.r3.png";
LaserDR3.onload = LoadingBar;
var LaserDR4 = new Image();
LaserDR4.src = "grafix/creatures/ortizgenie/laser/down.r4.png";
LaserDR4.onload = LoadingBar;
var LaserDR5 = new Image();
LaserDR5.src = "grafix/creatures/ortizgenie/laser/down.r5.png";
LaserDR5.onload = LoadingBar;
var LaserDR6 = new Image();
LaserDR6.src = "grafix/creatures/ortizgenie/laser/down.r6.png";
LaserDR6.onload = LoadingBar;
var LaserDR7 = new Image();
LaserDR7.src = "grafix/creatures/ortizgenie/laser/down.r7.png";
LaserDR7.onload = LoadingBar;
var LaserDR8 = new Image();
LaserDR8.src = "grafix/creatures/ortizgenie/laser/down.r8.png";
LaserDR8.onload = LoadingBar;
var LaserDR9 = new Image();
LaserDR9.src = "grafix/creatures/ortizgenie/laser/down.r9.png";
LaserDR9.onload = LoadingBar;
var LaserDsR = {1: LaserDR1, 2: LaserDR1, 3: LaserDR1, 4: LaserDR2, 5: LaserDR2, 6: LaserDR3, 7: LaserDR3, 8: LaserDR4, 9: LaserDR5,
				10: LaserDR6, 11: LaserDR7, 12: LaserDR8, 13: LaserDR8, 14: LaserDR9, 15: LaserDR9, 16: LaserDR9};				
//lamp
var Lampic = new Image();
Lampic.src = "grafix/objects/lamp/lamp.png";
Lampic.onload = LoadingBar;
var Lampoof1 = new Image();
Lampoof1.src = "grafix/objects/lamp/poof.1.png";
Lampoof1.onload = LoadingBar;
var Lampoof2 = new Image();
Lampoof2.src = "grafix/objects/lamp/poof.2.png";
Lampoof2.onload = LoadingBar;
var Lampoof3 = new Image();
Lampoof3.src = "grafix/objects/lamp/poof.3.png";
Lampoof3.onload = LoadingBar;
var Lampoof4 = new Image();
Lampoof4.src = "grafix/objects/lamp/poof.4.png";
Lampoof4.onload = LoadingBar;
var Lampoofs = {1: Lampoof1, 2: Lampoof2, 3: Lampoof2, 4: Lampoof2, 5: Lampoof3, 6: Lampoof3, 7: Lampoof3, 8: Lampoof4, 9: Lampoof4};
var LampEnt1 = new Image();
LampEnt1.src = "grafix/objects/lamp/spawn.1.png";
LampEnt1.onload = LoadingBar;
var LampEnt2 = new Image();
LampEnt2.src = "grafix/objects/lamp/spawn.2.png";
LampEnt2.onload = LoadingBar;
var LampEnt3 = new Image();
LampEnt3.src = "grafix/objects/lamp/spawn.3.png";
LampEnt3.onload = LoadingBar;
var LampEnt4 = new Image();
LampEnt4.src = "grafix/objects/lamp/spawn.4.png";
LampEnt4.onload = LoadingBar;
var LampEnt5 = new Image();
LampEnt5.src = "grafix/objects/lamp/spawn.5.png";
LampEnt5.onload = LoadingBar;
var LampEnt6 = new Image();
LampEnt6.src = "grafix/objects/lamp/spawn.6.png";
LampEnt6.onload = LoadingBar;
var LampEnt7 = new Image();
LampEnt7.src = "grafix/objects/lamp/spawn.7.png";
LampEnt7.onload = LoadingBar;
var LampEnt8 = new Image();
LampEnt8.src = "grafix/objects/lamp/spawn.8.png";
LampEnt8.onload = LoadingBar;
var LampEnt9 = new Image();
LampEnt9.src = "grafix/objects/lamp/spawn.9.png";
LampEnt9.onload = LoadingBar;
var LampEntrance = {1: LampEnt1, 2: LampEnt1, 3: LampEnt2, 4: LampEnt2, 5: LampEnt3, 6: LampEnt3, 7: LampEnt4, 8: LampEnt4, 9: LampEnt5,
					10: LampEnt5, 11: LampEnt5, 12: LampEnt5, 13: LampEnt5, 14: LampEnt5, 15: LampEnt6, 16: LampEnt7, 17: LampEnt8,
					18: LampEnt8, 19: LampEnt8, 20: LampEnt8, 21: LampEnt9, 22: LampEnt9, 23: LampEnt9};
//glowmeteors
var MeteorGlow1 = new Image();
MeteorGlow1.src = "grafix/objects/rock/glow.1.png";
MeteorGlow1.onload = LoadingBar;
var MeteorGlow2 = new Image();
MeteorGlow2.src = "grafix/objects/rock/glow.2.png";
MeteorGlow2.onload = LoadingBar;
var MeteorGlow3 = new Image();
MeteorGlow3.src = "grafix/objects/rock/glow.3.png";
MeteorGlow3.onload = LoadingBar;
var MeteorGlow4 = new Image();
MeteorGlow4.src = "grafix/objects/rock/glow.4.png";
MeteorGlow4.onload = LoadingBar;
var MeteorGlows = {1: MeteorGlow1, 2: MeteorGlow2, 3: MeteorGlow3, 4: MeteorGlow4};
//mummy from boss
var BossMumSpawnL1 = new Image();
BossMumSpawnL1.src = "grafix/creatures/minimumy/spawn.l1.png";
BossMumSpawnL1.onload = LoadingBar;
var BossMumSpawnL2 = new Image();
BossMumSpawnL2.src = "grafix/creatures/minimumy/spawn.l2.png";
BossMumSpawnL2.onload = LoadingBar;
var BossMumSpawnL3 = new Image();
BossMumSpawnL3.src = "grafix/creatures/minimumy/spawn.l3.png";
BossMumSpawnL3.onload = LoadingBar;
var BossMumSpawnL4 = new Image();
BossMumSpawnL4.src = "grafix/creatures/minimumy/spawn.l4.png";
BossMumSpawnL4.onload = LoadingBar;
var BossMumSpawnL5 = new Image();
BossMumSpawnL5.src = "grafix/creatures/minimumy/spawn.l5.png";
BossMumSpawnL5.onload = LoadingBar;
var BossMumSpawnL6 = new Image();
BossMumSpawnL6.src = "grafix/creatures/minimumy/spawn.l6.png";
BossMumSpawnL6.onload = LoadingBar;
var BossMumSpawnL7 = new Image();
BossMumSpawnL7.src = "grafix/creatures/minimumy/spawn.l7.png";
BossMumSpawnL7.onload = LoadingBar;
var BossMummySpawnL = {1: BossMumSpawnL1, 2: BossMumSpawnL2, 3: BossMumSpawnL3, 4: BossMumSpawnL4, 5: BossMumSpawnL5, 6: BossMumSpawnL6, 7: BossMumSpawnL7};
var BossMumSpawnR1 = new Image();
BossMumSpawnR1.src = "grafix/creatures/minimumy/spawn.r1.png";
BossMumSpawnR1.onload = LoadingBar;
var BossMumSpawnR2 = new Image();
BossMumSpawnR2.src = "grafix/creatures/minimumy/spawn.r2.png";
BossMumSpawnR2.onload = LoadingBar;
var BossMumSpawnR3 = new Image();
BossMumSpawnR3.src = "grafix/creatures/minimumy/spawn.r3.png";
BossMumSpawnR3.onload = LoadingBar;
var BossMumSpawnR4 = new Image();
BossMumSpawnR4.src = "grafix/creatures/minimumy/spawn.r4.png";
BossMumSpawnR4.onload = LoadingBar;
var BossMumSpawnR5 = new Image();
BossMumSpawnR5.src = "grafix/creatures/minimumy/spawn.r5.png";
BossMumSpawnR5.onload = LoadingBar;
var BossMumSpawnR6 = new Image();
BossMumSpawnR6.src = "grafix/creatures/minimumy/spawn.r6.png";
BossMumSpawnR6.onload = LoadingBar;
var BossMumSpawnR7 = new Image();
BossMumSpawnR7.src = "grafix/creatures/minimumy/spawn.r7.png";
BossMumSpawnR7.onload = LoadingBar;
var BossMummySpawnR = {1: BossMumSpawnR1, 2: BossMumSpawnR2, 3: BossMumSpawnR3, 4: BossMumSpawnR4, 5: BossMumSpawnR5, 6: BossMumSpawnR6, 7: BossMumSpawnR7};
var BossMumL = new Image();
BossMumL.src = "grafix/creatures/minimumy/mini.l1.png";
BossMumL.onload = LoadingBar;
var BossMumR = new Image();
BossMumR.src = "grafix/creatures/minimumy/mini.r1.png";
BossMumR.onload = LoadingBar;
//Meteor env
var Meteorcold = new Image();
Meteorcold.src = "grafix/objects/rock/rock.1.png";
Meteorcold.onload = LoadingBar;
var MeteorFallL1 = new Image();
MeteorFallL1.src = "grafix/objects/meator/l.1.png";
MeteorFallL1.onload = LoadingBar;
var MeteorFallL2 = new Image();
MeteorFallL2.src = "grafix/objects/meator/l.2.png";
MeteorFallL2.onload = LoadingBar;
var MeteorFallL3 = new Image();
MeteorFallL3.src = "grafix/objects/meator/l.3.png";
MeteorFallL3.onload = LoadingBar;
var MeteorFallL4 = new Image();
MeteorFallL4.src = "grafix/objects/meator/l.4.png";
MeteorFallL4.onload = LoadingBar;
var MeteorFallL5 = new Image();
MeteorFallL5.src = "grafix/objects/meator/l.5.png";
MeteorFallL5.onload = LoadingBar;
var MeteorFallL6 = new Image();
MeteorFallL6.src = "grafix/objects/meator/l.6.png";
MeteorFallL6.onload = LoadingBar;
var MeteorFallL7 = new Image();
MeteorFallL7.src = "grafix/objects/meator/l.7.png";
MeteorFallL7.onload = LoadingBar;
var MeteorFallL8 = new Image();
MeteorFallL8.src = "grafix/objects/meator/l.8.png";
MeteorFallL8.onload = LoadingBar;
var MeteorFallL9 = new Image();
MeteorFallL9.src = "grafix/objects/meator/l.9.png";
MeteorFallL9.onload = LoadingBar;
var MeteorFallL10 = new Image();
MeteorFallL10.src = "grafix/objects/meator/l.10.png";
MeteorFallL10.onload = LoadingBar;
var MeteorFallL11 = new Image();
MeteorFallL11.src = "grafix/objects/meator/l.11.png";
MeteorFallL11.onload = LoadingBar;
var MeteorFallL12 = new Image();
MeteorFallL12.src = "grafix/objects/meator/l.12.png";
MeteorFallL12.onload = LoadingBar;
var MeteorFallR1 = new Image();
MeteorFallR1.src = "grafix/objects/meator/r.1.png";
MeteorFallR1.onload = LoadingBar;
var MeteorFallR2 = new Image();
MeteorFallR2.src = "grafix/objects/meator/r.2.png";
MeteorFallR2.onload = LoadingBar;
var MeteorFallR3 = new Image();
MeteorFallR3.src = "grafix/objects/meator/r.3.png";
MeteorFallR3.onload = LoadingBar;
var MeteorFallR4 = new Image();
MeteorFallR4.src = "grafix/objects/meator/r.4.png";
MeteorFallR4.onload = LoadingBar;
var MeteorFallR5 = new Image();
MeteorFallR5.src = "grafix/objects/meator/r.5.png";
MeteorFallR5.onload = LoadingBar;
var MeteorFallR6 = new Image();
MeteorFallR6.src = "grafix/objects/meator/r.6.png";
MeteorFallR6.onload = LoadingBar;
var MeteorFallR7 = new Image();
MeteorFallR7.src = "grafix/objects/meator/r.7.png";
MeteorFallR7.onload = LoadingBar;
var MeteorFallR8 = new Image();
MeteorFallR8.src = "grafix/objects/meator/r.8.png";
MeteorFallR8.onload = LoadingBar;
var MeteorFallR9 = new Image();
MeteorFallR9.src = "grafix/objects/meator/r.9.png";
MeteorFallR9.onload = LoadingBar;
var MeteorFallR10 = new Image();
MeteorFallR10.src = "grafix/objects/meator/r.10.png";
MeteorFallR10.onload = LoadingBar;
var MeteorFallR11 = new Image();
MeteorFallR11.src = "grafix/objects/meator/r.11.png";
MeteorFallR11.onload = LoadingBar;
var MeteorFallR12 = new Image();
MeteorFallR12.src = "grafix/objects/meator/r.12.png";
MeteorFallR12.onload = LoadingBar;
var FallingMeteorsL = {1: MeteorFallL1, 2: MeteorFallL2, 3: MeteorFallL3, 4: MeteorFallL4, 5: MeteorFallL5, 6: MeteorFallL6, 7: MeteorFallL7, 8: MeteorFallL8,
					9: MeteorFallL9, 10: MeteorFallL10, 11: MeteorFallL11, 12: MeteorFallL12};
var FallingMeteorsR = {1: MeteorFallR1, 2: MeteorFallR2, 3: MeteorFallR3, 4: MeteorFallR4, 5: MeteorFallR5, 6: MeteorFallR6, 7: MeteorFallR7, 8: MeteorFallR8,
					9: MeteorFallR9, 10: MeteorFallR10, 11: MeteorFallR11, 12: MeteorFallR12}; 
//steam in the fire level
var Steam1 = new Image();
Steam1.src = "grafix/objects/steam/1.png";
Steam1.onload = LoadingBar;
var Steam2 = new Image();
Steam2.src = "grafix/objects/steam/2.png";
Steam2.onload = LoadingBar;
var Steam3 = new Image();
Steam3.src = "grafix/objects/steam/3.png";
Steam3.onload = LoadingBar;
var Steam4 = new Image();
Steam4.src = "grafix/objects/steam/4.png";
Steam4.onload = LoadingBar;
var Steam5 = new Image();
Steam5.src = "grafix/objects/steam/5.png";
Steam5.onload = LoadingBar;
var Steam6 = new Image();
Steam6.src = "grafix/objects/steam/6.png";
Steam6.onload = LoadingBar;
var SteamLoop = {1: Steam1, 2: Steam2, 3: Steam3, 4: Steam4, 5: Steam5, 6: Steam6};
//------------------------------------------------------- Swamp Level ---------------------------------------------------------------//
//Swimwizz
var swimWizzL = new Image();
swimWizzL.src = "grafix/wizzurds/effects.wizard/wiz.pizz.l.png";
swimWizzL.onload = LoadingBar;
var swimWizzR = new Image();
swimWizzR.src = "grafix/wizzurds/effects.wizard/wiz.pizz.r.png";
swimWizzR.onload = LoadingBar;
//swamp bkg
var swampbkg1 = new Image();
swampbkg1.src = "grafix/background/swampwater1.png";
swampbkg1.onload = LoadingBar;
var swampbkg2 = new Image();
swampbkg2.src = "grafix/background/swampwater2.png";
swampbkg2.onload = LoadingBar;
var swampbkg3 = new Image();
swampbkg3.src = "grafix/background/swampwater3.png";
swampbkg3.onload = LoadingBar;
var swampbkg4 = new Image();
swampbkg4.src = "grafix/background/swampwater4.png";
swampbkg4.onload = LoadingBar;
//Swamp Terrain
var boardSq = new Image();
boardSq.src = "grafix/objects/walkway/connect.sq.png";
boardSq.onload = LoadingBar;
var boardSq1 = new Image();
boardSq1.src = "grafix/objects/walkway/connect.1.png";
boardSq1.onload = LoadingBar;
var boardSq2 = new Image();
boardSq2.src = "grafix/objects/walkway/connect.2.png";
boardSq2.onload = LoadingBar;
var boardSq3 = new Image();
boardSq3.src = "grafix/objects/walkway/connect.3.png";
boardSq3.onload = LoadingBar;
var boardSq4 = new Image();
boardSq4.src = "grafix/objects/walkway/connect.4.png";
boardSq4.onload = LoadingBar;
var boardSq5 = new Image();
boardSq5.src = "grafix/objects/walkway/connect.5.png";
boardSq5.onload = LoadingBar;
var boardSq6 = new Image();
boardSq6.src = "grafix/objects/walkway/connect.6.png";
boardSq6.onload = LoadingBar;
var SqBoards = {0: boardSq1, 1: boardSq2, 2: boardSq3, 3: boardSq4, 4: boardSq5, 5: boardSq6, 6: boardSq};
var boardH = new Image();
boardH.src = "grafix/objects/walkway/hor.sq.png";
boardH.onload = LoadingBar;
var boardV = new Image();
boardV.src = "grafix/objects/walkway/vert.sq.png";
boardV.onload = LoadingBar;
var boardV1 = new Image();
boardV1.src = "grafix/objects/walkway/vert.1.png";
boardV1.onload = LoadingBar;
var boardV2 = new Image();
boardV2.src = "grafix/objects/walkway/vert.2.png";
boardV2.onload = LoadingBar;
var boardV3 = new Image();
boardV3.src = "grafix/objects/walkway/vert.3.png";
boardV3.onload = LoadingBar;
var boardV4 = new Image();
boardV4.src = "grafix/objects/walkway/vert.4.png";
boardV4.onload = LoadingBar;
var boardV5 = new Image();
boardV5.src = "grafix/objects/walkway/vert.5.png";
boardV5.onload = LoadingBar;
var boardV6 = new Image();
boardV6.src = "grafix/objects/walkway/vert.6.png";
boardV6.onload = LoadingBar;
var vertBoards = {0: boardV1, 1: boardV2, 2: boardV3, 3: boardV4, 4: boardV5, 5: boardV6, 6: boardV};
var boardH1 = new Image();
boardH1.src = "grafix/objects/walkway/hor.1.png";
boardH1.onload = LoadingBar;
var boardH2 = new Image();
boardH2.src = "grafix/objects/walkway/hor.2.png";
boardH2.onload = LoadingBar;
var boardH3 = new Image();
boardH3.src = "grafix/objects/walkway/hor.3.png";
boardH3.onload = LoadingBar;
var boardH4 = new Image();
boardH4.src = "grafix/objects/walkway/hor.4.png";
boardH4.onload = LoadingBar;
var boardH5 = new Image();
boardH5.src = "grafix/objects/walkway/hor.5.png";
boardH5.onload = LoadingBar;
var boardH6 = new Image();
boardH6.src = "grafix/objects/walkway/hor.6.png";
boardH6.onload = LoadingBar;
var horBoards = {0: boardH1, 1: boardH2, 2: boardH3, 3: boardH4, 4: boardH5, 5: boardH6, 6: boardH};
//Swudge
var swudgeL = new Image();
swudgeL.src = "grafix/creatures/swudge/swudge.l1.png";
swudgeL.onload = LoadingBar;
var swudgeR = new Image();
swudgeR.src = "grafix/creatures/swudge/swudge.r1.png";
swudgeR.onload = LoadingBar;
var SwimswudgeL = new Image();
SwimswudgeL.src = "grafix/creatures/swudge/swudge.swim.l1.png";
SwimswudgeL.onload = LoadingBar;
var SwimswudgeR = new Image();
SwimswudgeR.src = "grafix/creatures/swudge/swudge.swim.r1.png";
SwimswudgeR.onload = LoadingBar;
var BoomswudgeL1 = new Image();
BoomswudgeL1.src = "grafix/creatures/swudge/swudge.boom.l1.png";
BoomswudgeL1.onload = LoadingBar;
var BoomswudgeL2 = new Image();
BoomswudgeL2.src = "grafix/creatures/swudge/swudge.boom.l2.png";
BoomswudgeL2.onload = LoadingBar;
var BoomswudgeL3 = new Image();
BoomswudgeL3.src = "grafix/creatures/swudge/swudge.boom.l3.png";
BoomswudgeL3.onload = LoadingBar;
var BoomswudgeL = {1: BoomswudgeL1, 2: BoomswudgeL2, 3: BoomswudgeL3};
var BoomswudgeR1 = new Image();
BoomswudgeR1.src = "grafix/creatures/swudge/swudge.boom.r1.png";
BoomswudgeR1.onload = LoadingBar;
var BoomswudgeR2 = new Image();
BoomswudgeR2.src = "grafix/creatures/swudge/swudge.boom.r2.png";
BoomswudgeR2.onload = LoadingBar;
var BoomswudgeR3 = new Image();
BoomswudgeR3.src = "grafix/creatures/swudge/swudge.boom.r3.png";
BoomswudgeR3.onload = LoadingBar;
var BoomswudgeR = {1: BoomswudgeR1, 2: BoomswudgeR2, 3: BoomswudgeR3};
//Crocodile
var crocclosel1 = new Image();
crocclosel1.src = "grafix/creatures/crawk/close.l1.png";
crocclosel1.onload = LoadingBar;
var croccloser1 = new Image();
croccloser1.src = "grafix/creatures/crawk/close.r1.png";
croccloser1.onload = LoadingBar;
var croceyesl1 = new Image();
croceyesl1.src = "grafix/creatures/crawk/eyes.l1.png";
croceyesl1.onload = LoadingBar;
var croceyesr1 = new Image();
croceyesr1.src = "grafix/creatures/crawk/eyes.r1.png";
croceyesr1.onload = LoadingBar;
var crocopenl1 = new Image();
crocopenl1.src = "grafix/creatures/crawk/open.l1.png";
crocopenl1.onload = LoadingBar;
var crocopenr1 = new Image();
crocopenr1.src = "grafix/creatures/crawk/open.r1.png";
crocopenr1.onload = LoadingBar;
var crocswimr1 = new Image();
crocswimr1.src = "grafix/creatures/crawk/swim.r1.png";
crocswimr1.onload = LoadingBar;
var crocswiml1 = new Image();
crocswiml1.src = "grafix/creatures/crawk/swim.l1.png";
crocswiml1.onload = LoadingBar;
//Mosquito
var bugL1 = new Image();
bugL1.src = "grafix/creatures/mosspeetoe/flight.l1.png";
bugL1.onload = LoadingBar;
var bugL2 = new Image();
bugL2.src = "grafix/creatures/mosspeetoe/flight.l2.png";
bugL2.onload = LoadingBar;
var bugR1 = new Image();
bugR1.src = "grafix/creatures/mosspeetoe/flight.r1.png";
bugR1.onload = LoadingBar;
var bugR2 = new Image();
bugR2.src = "grafix/creatures/mosspeetoe/flight.r2.png";
bugR2.onload = LoadingBar;
//---------------------------------------------------------------- Desert Level -----------------------------------------------------//
//desert bkg
var DesertBackground = new Image();
DesertBackground.src = "grafix/background/sand.png";
DesertBackground.onload = LoadingBar;
//Scorps
var ScorpWalkL1 = new Image();
ScorpWalkL1.src = "grafix/creatures/scopion/walk.l1.png";
ScorpWalkL1.onload = LoadingBar;
var ScorpWalkL2 = new Image();
ScorpWalkL2.src = "grafix/creatures/scopion/walk.l2.png";
ScorpWalkL2.onload = LoadingBar;
var ScorpWalkL3 = new Image();
ScorpWalkL3.src = "grafix/creatures/scopion/walk.l3.png";
ScorpWalkL3.onload = LoadingBar;
var ScorpWalkL4 = new Image();
ScorpWalkL4.src = "grafix/creatures/scopion/walk.l4.png";
ScorpWalkL4.onload = LoadingBar;
var ScorpWalkL5 = new Image();
ScorpWalkL5.src = "grafix/creatures/scopion/walk.l5.png";
ScorpWalkL5.onload = LoadingBar;
var ScorpWalkL6 = new Image();
ScorpWalkL6.src = "grafix/creatures/scopion/walk.l6.png";
ScorpWalkL6.onload = LoadingBar;
var ScorpWalkL = {1: ScorpWalkL1, 2: ScorpWalkL2, 3: ScorpWalkL3, 4: ScorpWalkL4, 5: ScorpWalkL5, 6: ScorpWalkL6};
var ScorpWalkR1 = new Image();
ScorpWalkR1.src = "grafix/creatures/scopion/walk.r1.png";
ScorpWalkR1.onload = LoadingBar;
var ScorpWalkR2 = new Image();
ScorpWalkR2.src = "grafix/creatures/scopion/walk.r2.png";
ScorpWalkR2.onload = LoadingBar;
var ScorpWalkR3 = new Image();
ScorpWalkR3.src = "grafix/creatures/scopion/walk.r3.png";
ScorpWalkR3.onload = LoadingBar;
var ScorpWalkR4 = new Image();
ScorpWalkR4.src = "grafix/creatures/scopion/walk.r4.png";
ScorpWalkR4.onload = LoadingBar;
var ScorpWalkR5 = new Image();
ScorpWalkR5.src = "grafix/creatures/scopion/walk.r5.png";
ScorpWalkR5.onload = LoadingBar;
var ScorpWalkR6 = new Image();
ScorpWalkR6.src = "grafix/creatures/scopion/walk.r6.png";
ScorpWalkR6.onload = LoadingBar;
var ScorpWalkR = {1: ScorpWalkR1, 2: ScorpWalkR2, 3: ScorpWalkR3, 4: ScorpWalkR4, 5: ScorpWalkR5, 6: ScorpWalkR6};
var ScorpStabL1 = new Image();
ScorpStabL1.src = "grafix/creatures/scopion/stab.l1.png";
ScorpStabL1.onload = LoadingBar;
var ScorpStabL2 = new Image();
ScorpStabL2.src = "grafix/creatures/scopion/stab.l2.png";
ScorpStabL2.onload = LoadingBar;
var ScorpStabL3 = new Image();
ScorpStabL3.src = "grafix/creatures/scopion/stab.l3.png";
ScorpStabL3.onload = LoadingBar;
var ScorpStabL4 = new Image();
ScorpStabL4.src = "grafix/creatures/scopion/stab.l4.png";
ScorpStabL4.onload = LoadingBar;
var ScorpStabL5 = new Image();
ScorpStabL5.src = "grafix/creatures/scopion/stab.l5.png";
ScorpStabL5.onload = LoadingBar;
var ScorpStabL6 = new Image();
ScorpStabL6.src = "grafix/creatures/scopion/stab.l6.png";
ScorpStabL6.onload = LoadingBar;
var ScorpStabL = {1: ScorpStabL1, 2: ScorpStabL2, 3: ScorpStabL2, 4: ScorpStabL3, 5: ScorpStabL3, 6: ScorpStabL3, 7: ScorpStabL3,
					8: ScorpStabL3, 9: ScorpStabL3, 10: ScorpStabL3, 11: ScorpStabL3, 12: ScorpStabL4, 13: ScorpStabL5, 14: ScorpStabL5,
					15: ScorpStabL5, 16: ScorpStabL5, 17: ScorpStabL6};
var ScorpStabR1 = new Image();
ScorpStabR1.src = "grafix/creatures/scopion/stab.r1.png";
ScorpStabR1.onload = LoadingBar;
var ScorpStabR2 = new Image();
ScorpStabR2.src = "grafix/creatures/scopion/stab.r2.png";
ScorpStabR2.onload = LoadingBar;
var ScorpStabR3 = new Image();
ScorpStabR3.src = "grafix/creatures/scopion/stab.r3.png";
ScorpStabR3.onload = LoadingBar;
var ScorpStabR4 = new Image();
ScorpStabR4.src = "grafix/creatures/scopion/stab.r4.png";
ScorpStabR4.onload = LoadingBar;
var ScorpStabR5 = new Image();
ScorpStabR5.src = "grafix/creatures/scopion/stab.r5.png";
ScorpStabR5.onload = LoadingBar;
var ScorpStabR6 = new Image();
ScorpStabR6.src = "grafix/creatures/scopion/stab.r6.png";
ScorpStabR6.onload = LoadingBar;
var ScorpStabR = {1: ScorpStabR1, 2: ScorpStabR2, 3: ScorpStabR2, 4: ScorpStabR3, 5: ScorpStabR3, 6: ScorpStabR3, 7: ScorpStabR3,
					8: ScorpStabR3, 9: ScorpStabR3, 10: ScorpStabR3, 11: ScorpStabR3, 12: ScorpStabR4, 13: ScorpStabR5, 14: ScorpStabR5,
					15: ScorpStabR5, 16: ScorpStabR5, 17: ScorpStabR6};
var ScorpRollR1 = new Image();
ScorpRollR1.src = "grafix/creatures/scopion/tumble.r1.png";
ScorpRollR1.onload = LoadingBar;
var ScorpRollR2 = new Image();
ScorpRollR2.src = "grafix/creatures/scopion/tumble.r2.png";
ScorpRollR2.onload = LoadingBar;
var ScorpRollR3 = new Image();
ScorpRollR3.src = "grafix/creatures/scopion/tumble.r3.png";
ScorpRollR3.onload = LoadingBar;
var ScorpRollR4 = new Image();
ScorpRollR4.src = "grafix/creatures/scopion/tumble.r4.png";
ScorpRollR4.onload = LoadingBar;
var ScorpRollR = {1: ScorpRollR1, 2: ScorpRollR2, 3: ScorpRollR3, 4: ScorpRollR4};
var ScorpRollL1 = new Image();
ScorpRollL1.src = "grafix/creatures/scopion/tumble.l1.png";
ScorpRollL1.onload = LoadingBar;
var ScorpRollL2 = new Image();
ScorpRollL2.src = "grafix/creatures/scopion/tumble.l2.png";
ScorpRollL2.onload = LoadingBar;
var ScorpRollL3 = new Image();
ScorpRollL3.src = "grafix/creatures/scopion/tumble.l3.png";
ScorpRollL3.onload = LoadingBar;
var ScorpRollL4 = new Image();
ScorpRollL4.src = "grafix/creatures/scopion/tumble.l4.png";
ScorpRollL4.onload = LoadingBar;
var ScorpRollL = {1: ScorpRollL1, 2: ScorpRollL2, 3: ScorpRollL3, 4: ScorpRollL4};
//anubis
var AnubisStandL = new Image();
AnubisStandL.src = "grafix/creatures/anewbus/stand.l1.png";
AnubisStandL.onload = LoadingBar;
var AnubisStandR = new Image();
AnubisStandR.src = "grafix/creatures/anewbus/stand.r1.png";
AnubisStandR.onload = LoadingBar;
var AnubisWalkL1 = new Image();
AnubisWalkL1.src = "grafix/creatures/anewbus/walk.l1.png";
AnubisWalkL1.onload = LoadingBar;
var AnubisWalkL2 = new Image();
AnubisWalkL2.src = "grafix/creatures/anewbus/walk.l2.png";
AnubisWalkL2.onload = LoadingBar;
var AnubisWalkL3 = new Image();
AnubisWalkL3.src = "grafix/creatures/anewbus/walk.l3.png";
AnubisWalkL3.onload = LoadingBar;
var AnubisWalkL4 = new Image();
AnubisWalkL4.src = "grafix/creatures/anewbus/walk.l4.png";
AnubisWalkL4.onload = LoadingBar;
var AnubisWalkL5 = new Image();
AnubisWalkL5.src = "grafix/creatures/anewbus/walk.l5.png";
AnubisWalkL5.onload = LoadingBar;
var AnubisWalkL = {1: AnubisWalkL1, 2: AnubisWalkL2, 3: AnubisWalkL3, 4: AnubisWalkL4, 5: AnubisWalkL5};
var AnubisWalkR1 = new Image();
AnubisWalkR1.src = "grafix/creatures/anewbus/walk.r1.png";
AnubisWalkR1.onload = LoadingBar;
var AnubisWalkR2 = new Image();
AnubisWalkR2.src = "grafix/creatures/anewbus/walk.r2.png";
AnubisWalkR2.onload = LoadingBar;
var AnubisWalkR3 = new Image();
AnubisWalkR3.src = "grafix/creatures/anewbus/walk.r3.png";
AnubisWalkR3.onload = LoadingBar;
var AnubisWalkR4 = new Image();
AnubisWalkR4.src = "grafix/creatures/anewbus/walk.r4.png";
AnubisWalkR4.onload = LoadingBar;
var AnubisWalkR5 = new Image();
AnubisWalkR5.src = "grafix/creatures/anewbus/walk.r5.png";
AnubisWalkR5.onload = LoadingBar;
var AnubisWalkR = {1: AnubisWalkR1, 2: AnubisWalkR2, 3: AnubisWalkR3, 4: AnubisWalkR4, 5: AnubisWalkR5};
//AnubisAttacks
var AnubisAttackL1 = new Image();
AnubisAttackL1.src = "grafix/creatures/anewbus/cast/cast.l1.png";
AnubisAttackL1.onload = LoadingBar;
var AnubisAttackL2 = new Image();
AnubisAttackL2.src = "grafix/creatures/anewbus/cast/cast.l2.png";
AnubisAttackL2.onload = LoadingBar;
var AnubisAttackL3 = new Image();
AnubisAttackL3.src = "grafix/creatures/anewbus/cast/cast.l3.png";
AnubisAttackL3.onload = LoadingBar;
var AnubisAttackL4 = new Image();
AnubisAttackL4.src = "grafix/creatures/anewbus/cast/cast.l4.png";
AnubisAttackL4.onload = LoadingBar;
var AnubisAttackL5 = new Image();
AnubisAttackL5.src = "grafix/creatures/anewbus/cast/cast.l5.png";
AnubisAttackL5.onload = LoadingBar;
var AnubisAttackL6 = new Image();
AnubisAttackL6.src = "grafix/creatures/anewbus/cast/cast.l6.png";
AnubisAttackL6.onload = LoadingBar;
var AnubisAttackL7 = new Image();
AnubisAttackL7.src = "grafix/creatures/anewbus/cast/cast.l7.png";
AnubisAttackL7.onload = LoadingBar;
var AnubisAttackL8 = new Image();
AnubisAttackL8.src = "grafix/creatures/anewbus/cast/cast.l8.png";
AnubisAttackL8.onload = LoadingBar;
var AnubisAttackL9 = new Image();
AnubisAttackL9.src = "grafix/creatures/anewbus/cast/cast.l9.png";
AnubisAttackL9.onload = LoadingBar;
var AnubisAttackL10 = new Image();
AnubisAttackL10.src = "grafix/creatures/anewbus/cast/cast.l10.png";
AnubisAttackL10.onload = LoadingBar;
var AnubisAttackL11 = new Image();
AnubisAttackL11.src = "grafix/creatures/anewbus/cast/cast.l11.png";
AnubisAttackL11.onload = LoadingBar;
var AnubisAttacksL = {1: AnubisAttackL1, 2: AnubisAttackL1, 3: AnubisAttackL1, 4: AnubisAttackL1, 5: AnubisAttackL1, 6: AnubisAttackL1,
						7: AnubisAttackL2, 8: AnubisAttackL2, 9: AnubisAttackL2, 10: AnubisAttackL2, 11: AnubisAttackL2, 
						12: AnubisAttackL2, 13: AnubisAttackL2, 14: AnubisAttackL2, 15: AnubisAttackL2, 16: AnubisAttackL3, 17: AnubisAttackL3,
						18: AnubisAttackL4, 19: AnubisAttackL4, 20: AnubisAttackL5, 21: AnubisAttackL5, 22: AnubisAttackL6,
						23: AnubisAttackL7, 24: AnubisAttackL7, 25: AnubisAttackL7, 26: AnubisAttackL7, 27: AnubisAttackL7, 28: AnubisAttackL8,
						29: AnubisAttackL8, 30: AnubisAttackL8, 31: AnubisAttackL8, 32: AnubisAttackL8, 33: AnubisAttackL9, 
						34: AnubisAttackL9, 35: AnubisAttackL9, 36: AnubisAttackL9, 37: AnubisAttackL9, 38: AnubisAttackL10, 39: AnubisAttackL11,
						40: AnubisAttackL11, 41: AnubisAttackL11, 42: AnubisAttackL11, 43: AnubisAttackL11, 44: AnubisAttackL11, 45: AnubisAttackL11, 46: AnubisAttackL11};
var AnubisAttackR1 = new Image();
AnubisAttackR1.src = "grafix/creatures/anewbus/cast/cast.r1.png";
AnubisAttackR1.onload = LoadingBar;
var AnubisAttackR2 = new Image();
AnubisAttackR2.src = "grafix/creatures/anewbus/cast/cast.r2.png";
AnubisAttackR2.onload = LoadingBar;
var AnubisAttackR3 = new Image();
AnubisAttackR3.src = "grafix/creatures/anewbus/cast/cast.r3.png";
AnubisAttackR3.onload = LoadingBar;
var AnubisAttackR4 = new Image();
AnubisAttackR4.src = "grafix/creatures/anewbus/cast/cast.r4.png";
AnubisAttackR4.onload = LoadingBar;
var AnubisAttackR5 = new Image();
AnubisAttackR5.src = "grafix/creatures/anewbus/cast/cast.r5.png";
AnubisAttackR5.onload = LoadingBar;
var AnubisAttackR6 = new Image();
AnubisAttackR6.src = "grafix/creatures/anewbus/cast/cast.r6.png";
AnubisAttackR6.onload = LoadingBar;
var AnubisAttackR7 = new Image();
AnubisAttackR7.src = "grafix/creatures/anewbus/cast/cast.r7.png";
AnubisAttackR7.onload = LoadingBar;
var AnubisAttackR8 = new Image();
AnubisAttackR8.src = "grafix/creatures/anewbus/cast/cast.r8.png";
AnubisAttackR8.onload = LoadingBar;
var AnubisAttackR9 = new Image();
AnubisAttackR9.src = "grafix/creatures/anewbus/cast/cast.r9.png";
AnubisAttackR9.onload = LoadingBar;
var AnubisAttackR10 = new Image();
AnubisAttackR10.src = "grafix/creatures/anewbus/cast/cast.r10.png";
AnubisAttackR10.onload = LoadingBar;
var AnubisAttackR11 = new Image();
AnubisAttackR11.src = "grafix/creatures/anewbus/cast/cast.r11.png";
AnubisAttackR11.onload = LoadingBar;
var AnubisAttacksR = {1: AnubisAttackR1, 2: AnubisAttackR1, 3: AnubisAttackR1, 4: AnubisAttackR1, 5: AnubisAttackR1, 6: AnubisAttackR1,
						7: AnubisAttackR2, 8: AnubisAttackR2, 9: AnubisAttackR2, 10: AnubisAttackR2, 11: AnubisAttackR2, 
						12: AnubisAttackR2, 13: AnubisAttackR2, 14: AnubisAttackR2, 15: AnubisAttackR2, 16: AnubisAttackR3, 17: AnubisAttackR3,
						18: AnubisAttackR4, 19: AnubisAttackR4, 20: AnubisAttackR5, 21: AnubisAttackR5, 22: AnubisAttackR6,
						23: AnubisAttackR7, 24: AnubisAttackR7, 25: AnubisAttackR7, 26: AnubisAttackR7, 27: AnubisAttackR7, 28: AnubisAttackR8,
						29: AnubisAttackR8, 30: AnubisAttackR8, 31: AnubisAttackR8, 32: AnubisAttackR8, 33: AnubisAttackR9, 
						34: AnubisAttackR9, 35: AnubisAttackR9, 36: AnubisAttackR9, 37: AnubisAttackR9, 38: AnubisAttackR10, 39: AnubisAttackR11,
						40: AnubisAttackR11, 41: AnubisAttackR11, 42: AnubisAttackR11, 43: AnubisAttackR11, 44: AnubisAttackR11, 45: AnubisAttackR11, 46: AnubisAttackR11};
//death/sandpit
var AnubisDeath1 = new Image();
AnubisDeath1.src = "grafix/objects/sandpit/spawn/spawn.1.png";
AnubisDeath1.onload = LoadingBar;
var AnubisDeath2 = new Image();
AnubisDeath2.src = "grafix/objects/sandpit/spawn/spawn.2.png";
AnubisDeath2.onload = LoadingBar;
var AnubisDeath3 = new Image();
AnubisDeath3.src = "grafix/objects/sandpit/spawn/spawn.3.png";
AnubisDeath3.onload = LoadingBar;
var AnubisDeath4 = new Image();
AnubisDeath4.src = "grafix/objects/sandpit/spawn/spawn.4.png";
AnubisDeath4.onload = LoadingBar;
var AnubisDeath5 = new Image();
AnubisDeath5.src = "grafix/objects/sandpit/spawn/spawn.5.png";
AnubisDeath5.onload = LoadingBar;
var AnubisDeath6 = new Image();
AnubisDeath6.src = "grafix/objects/sandpit/spawn/spawn.6.png";
AnubisDeath6.onload = LoadingBar;
var AnubisDeath7 = new Image();
AnubisDeath7.src = "grafix/objects/sandpit/spawn/spawn.7.png";
AnubisDeath7.onload = LoadingBar;
var AnubisDeath8 = new Image();
AnubisDeath8.src = "grafix/objects/sandpit/spawn/spawn.8.png";
AnubisDeath8.onload = LoadingBar;
var AnubisDeath9 = new Image();
AnubisDeath9.src = "grafix/objects/sandpit/spawn/spawn.9.png";
AnubisDeath9.onload = LoadingBar;
var AnubisDeath10 = new Image();
AnubisDeath10.src = "grafix/objects/sandpit/spawn/spawn.10.png";
AnubisDeath10.onload = LoadingBar;
var AnubisDeath11 = new Image();
AnubisDeath11.src = "grafix/objects/sandpit/spawn/spawn.11.png";
AnubisDeath11.onload = LoadingBar;
var AnubisDeath = {1: AnubisDeath1, 2: AnubisDeath1, 3: AnubisDeath2, 4: AnubisDeath2, 5: AnubisDeath3, 6: AnubisDeath3,
					7: AnubisDeath4, 8: AnubisDeath4, 9: AnubisDeath5, 10: AnubisDeath5, 11: AnubisDeath6, 12: AnubisDeath6, 
					13: AnubisDeath7, 14: AnubisDeath7, 15: AnubisDeath8, 16: AnubisDeath8, 17: AnubisDeath9,
					18: AnubisDeath9, 19: AnubisDeath10, 20: AnubisDeath10, 21: AnubisDeath11, 22: AnubisDeath11};
var AnubisNoMaskDeath1 = new Image();
AnubisNoMaskDeath1.src = "grafix/objects/sandpit/spawn/spawn.nomask1.png";
AnubisNoMaskDeath1.onload = LoadingBar;
var AnubisNoMaskDeath2 = new Image();
AnubisNoMaskDeath2.src = "grafix/objects/sandpit/spawn/spawn.nomask2.png";
AnubisNoMaskDeath2.onload = LoadingBar;
var AnubisNoMaskDeath3 = new Image();
AnubisNoMaskDeath3.src = "grafix/objects/sandpit/spawn/spawn.nomask3.png";
AnubisNoMaskDeath3.onload = LoadingBar;
var AnubisNoMaskDeath4 = new Image();
AnubisNoMaskDeath4.src = "grafix/objects/sandpit/spawn/spawn.nomask4.png";
AnubisNoMaskDeath4.onload = LoadingBar;
var AnubisNoMaskDeath5 = new Image();
AnubisNoMaskDeath5.src = "grafix/objects/sandpit/spawn/spawn.nomask5.png";
AnubisNoMaskDeath5.onload = LoadingBar;
var AnubisNoMaskDeath6 = new Image();
AnubisNoMaskDeath6.src = "grafix/objects/sandpit/spawn/spawn.nomask6.png";
AnubisNoMaskDeath6.onload = LoadingBar;
var AnubisNoMaskDeath7 = new Image();
AnubisNoMaskDeath7.src = "grafix/objects/sandpit/spawn/spawn.nomask7.png";
AnubisNoMaskDeath7.onload = LoadingBar;
var AnubisNoMaskDeath8 = new Image();
AnubisNoMaskDeath8.src = "grafix/objects/sandpit/spawn/spawn.nomask8.png";
AnubisNoMaskDeath8.onload = LoadingBar;
var AnubisNoMaskDeath9 = new Image();
AnubisNoMaskDeath9.src = "grafix/objects/sandpit/spawn/spawn.nomask9.png";
AnubisNoMaskDeath9.onload = LoadingBar;
var AnubisNoMaskDeath10 = new Image();
AnubisNoMaskDeath10.src = "grafix/objects/sandpit/spawn/spawn.nomask10.png";
AnubisNoMaskDeath10.onload = LoadingBar;
var AnubisNoMaskDeath11 = new Image();
AnubisNoMaskDeath11.src = "grafix/objects/sandpit/spawn/spawn.nomask11.png";
AnubisNoMaskDeath11.onload = LoadingBar;
var AnubisDeath2 = {1: AnubisNoMaskDeath1, 2: AnubisNoMaskDeath1, 3: AnubisNoMaskDeath2, 4: AnubisNoMaskDeath2, 5: AnubisNoMaskDeath3, 6: AnubisNoMaskDeath3,
					7: AnubisNoMaskDeath4, 8: AnubisNoMaskDeath4, 9: AnubisNoMaskDeath5, 10: AnubisNoMaskDeath5, 11: AnubisNoMaskDeath6, 12: AnubisNoMaskDeath6, 
					13: AnubisNoMaskDeath7, 14: AnubisNoMaskDeath7, 15: AnubisNoMaskDeath8, 16: AnubisNoMaskDeath8, 17: AnubisNoMaskDeath9,
					18: AnubisNoMaskDeath9, 19: AnubisNoMaskDeath10, 20: AnubisNoMaskDeath10, 21: AnubisNoMaskDeath11, 22: AnubisNoMaskDeath11};
var AnubisStatueL1 = new Image();
AnubisStatueL1.src = "grafix/creatures/anewbus/statue.l1.png";
AnubisStatueL1.onload = LoadingBar;
var AnubisStatueR1 = new Image();
AnubisStatueR1.src = "grafix/creatures/anewbus/statue.r1.png";
AnubisStatueR1.onload = LoadingBar;
var AnubisStatueL2 = new Image();
AnubisStatueL2.src = "grafix/creatures/anewbus/statue.l2.png";
AnubisStatueL2.onload = LoadingBar;
var AnubisStatueR2 = new Image();
AnubisStatueR2.src = "grafix/creatures/anewbus/statue.r2.png";
AnubisStatueR2.onload = LoadingBar;		
var SandpitPull1 = new Image();
SandpitPull1.src = "grafix/objects/sandpit/pull.1.png";
SandpitPull1.onload = LoadingBar;
var SandpitPull2 = new Image();
SandpitPull2.src = "grafix/objects/sandpit/pull.2.png";
SandpitPull2.onload = LoadingBar;
var SandpitPull3 = new Image();
SandpitPull3.src = "grafix/objects/sandpit/pull.3.png";
SandpitPull3.onload = LoadingBar;
var SandpitPull4 = new Image();
SandpitPull4.src = "grafix/objects/sandpit/pull.4.png";
SandpitPull4.onload = LoadingBar;
var SandpitPull5 = new Image();
SandpitPull5.src = "grafix/objects/sandpit/pull.5.png";
SandpitPull5.onload = LoadingBar;
var SandpitPull = {1: SandpitPull1, 2: SandpitPull2, 3: SandpitPull3, 4: SandpitPull4, 5: SandpitPull5};
var SandpitHead1 = new Image();
SandpitHead1.src = "grafix/objects/sandpit/headloop.1.png";
SandpitHead1.onload = LoadingBar;
var SandpitHead2 = new Image();
SandpitHead2.src = "grafix/objects/sandpit/headloop.2.png";
SandpitHead2.onload = LoadingBar;
var SandpitGlowHead1 = new Image();
SandpitGlowHead1.src = "grafix/objects/sandpit/headloop.glow1.png";
SandpitGlowHead1.onload = LoadingBar;
var SandpitGlowHead2 = new Image();
SandpitGlowHead2.src = "grafix/objects/sandpit/headloop.glow2.png";
SandpitGlowHead2.onload = LoadingBar;
var SandpitHead = {1: SandpitHead1, 2: SandpitHead2};
var SandpitGlowHead = {1: SandpitGlowHead1, 2: SandpitGlowHead2};
var SandStormDarkL1 = new Image();
SandStormDarkL1.src = "grafix/effects/sandstorm/front.dark.l1.png";
SandStormDarkL1.onload = LoadingBar;
var SandStormDarkL2 = new Image();
SandStormDarkL2.src = "grafix/effects/sandstorm/front.dark.l2.png";
SandStormDarkL2.onload = LoadingBar;
var SandStormDarkL3 = new Image();
SandStormDarkL3.src = "grafix/effects/sandstorm/front.dark.l3.png";
SandStormDarkL3.onload = LoadingBar;
var SandStormDarkL4 = new Image();
SandStormDarkL4.src = "grafix/effects/sandstorm/front.dark.l4.png";
SandStormDarkL4.onload = LoadingBar;
var SandStormDarkL5 = new Image();
SandStormDarkL5.src = "grafix/effects/sandstorm/front.dark.l5.png";
SandStormDarkL5.onload = LoadingBar;
var SandStormDarkL6 = new Image();
SandStormDarkL6.src = "grafix/effects/sandstorm/front.dark.l6.png";
SandStormDarkL6.onload = LoadingBar;
var SandStormDarkL7 = new Image();
SandStormDarkL7.src = "grafix/effects/sandstorm/front.dark.l7.png";
SandStormDarkL7.onload = LoadingBar;
var SandStormDarkL8 = new Image();
SandStormDarkL8.src = "grafix/effects/sandstorm/front.dark.l8.png";
SandStormDarkL8.onload = LoadingBar;
var SandStormDarkL9 = new Image();
SandStormDarkL9.src = "grafix/effects/sandstorm/front.dark.l9.png";
SandStormDarkL9.onload = LoadingBar;
var SandStormDarkL = {1: SandStormDarkL1, 2: SandStormDarkL2, 3: SandStormDarkL3, 4: SandStormDarkL4, 5: SandStormDarkL5,
						6: SandStormDarkL6, 7: SandStormDarkL7, 8: SandStormDarkL8, 9: SandStormDarkL9};
var SandStormDarkR1 = new Image();
SandStormDarkR1.src = "grafix/effects/sandstorm/front.dark.r1.png";
SandStormDarkR1.onload = LoadingBar;
var SandStormDarkR2 = new Image();
SandStormDarkR2.src = "grafix/effects/sandstorm/front.dark.r2.png";
SandStormDarkR2.onload = LoadingBar;
var SandStormDarkR3 = new Image();
SandStormDarkR3.src = "grafix/effects/sandstorm/front.dark.r3.png";
SandStormDarkR3.onload = LoadingBar;
var SandStormDarkR4 = new Image();
SandStormDarkR4.src = "grafix/effects/sandstorm/front.dark.r4.png";
SandStormDarkR4.onload = LoadingBar;
var SandStormDarkR5 = new Image();
SandStormDarkR5.src = "grafix/effects/sandstorm/front.dark.r5.png";
SandStormDarkR5.onload = LoadingBar;
var SandStormDarkR6 = new Image();
SandStormDarkR6.src = "grafix/effects/sandstorm/front.dark.r6.png";
SandStormDarkR6.onload = LoadingBar;
var SandStormDarkR7 = new Image();
SandStormDarkR7.src = "grafix/effects/sandstorm/front.dark.r7.png";
SandStormDarkR7.onload = LoadingBar;
var SandStormDarkR8 = new Image();
SandStormDarkR8.src = "grafix/effects/sandstorm/front.dark.r8.png";
SandStormDarkR8.onload = LoadingBar;
var SandStormDarkR9 = new Image();
SandStormDarkR9.src = "grafix/effects/sandstorm/front.dark.r9.png";
SandStormDarkR9.onload = LoadingBar;
var SandStormDarkR = {1: SandStormDarkR1, 2: SandStormDarkR2, 3: SandStormDarkR3, 4: SandStormDarkR4, 5: SandStormDarkR5,
						6: SandStormDarkR6, 7: SandStormDarkR7, 8: SandStormDarkR8, 9: SandStormDarkR9};
var SandStormLightL1 = new Image();
SandStormLightL1.src = "grafix/effects/sandstorm/front.light.l1.png";
SandStormLightL1.onload = LoadingBar;
var SandStormLightL2 = new Image();
SandStormLightL2.src = "grafix/effects/sandstorm/front.light.l2.png";
SandStormLightL2.onload = LoadingBar;
var SandStormLightL3 = new Image();
SandStormLightL3.src = "grafix/effects/sandstorm/front.light.l3.png";
SandStormLightL3.onload = LoadingBar;
var SandStormLightL4 = new Image();
SandStormLightL4.src = "grafix/effects/sandstorm/front.light.l4.png";
SandStormLightL4.onload = LoadingBar;
var SandStormLightL5 = new Image();
SandStormLightL5.src = "grafix/effects/sandstorm/front.light.l5.png";
SandStormLightL5.onload = LoadingBar;
var SandStormLightL6 = new Image();
SandStormLightL6.src = "grafix/effects/sandstorm/front.light.l6.png";
SandStormLightL6.onload = LoadingBar;
var SandStormLightL = {1: SandStormLightL1, 2: SandStormLightL2, 3: SandStormLightL3, 4: SandStormLightL4, 5: SandStormLightL5,
						6: SandStormLightL6};
var SandStormLightR1 = new Image();
SandStormLightR1.src = "grafix/effects/sandstorm/front.light.r1.png";
SandStormLightR1.onload = LoadingBar;
var SandStormLightR2 = new Image();
SandStormLightR2.src = "grafix/effects/sandstorm/front.light.r2.png";
SandStormLightR2.onload = LoadingBar;
var SandStormLightR3 = new Image();
SandStormLightR3.src = "grafix/effects/sandstorm/front.light.r3.png";
SandStormLightR3.onload = LoadingBar;
var SandStormLightR4 = new Image();
SandStormLightR4.src = "grafix/effects/sandstorm/front.light.r4.png";
SandStormLightR4.onload = LoadingBar;
var SandStormLightR5 = new Image();
SandStormLightR5.src = "grafix/effects/sandstorm/front.light.r5.png";
SandStormLightR5.onload = LoadingBar;
var SandStormLightR6 = new Image();
SandStormLightR6.src = "grafix/effects/sandstorm/front.light.r6.png";
SandStormLightR6.onload = LoadingBar;
var SandStormLightR = {1: SandStormLightR1, 2: SandStormLightR2, 3: SandStormLightR3, 4: SandStormLightR4, 5: SandStormLightR5,
						6: SandStormLightR6};
var SandStormSpecksR1 = new Image();
SandStormSpecksR1.src = "grafix/effects/sandstorm/specks.r1.png";
SandStormSpecksR1.onload = LoadingBar;
var SandStormSpecksR2 = new Image();
SandStormSpecksR2.src = "grafix/effects/sandstorm/specks.r2.png";
SandStormSpecksR2.onload = LoadingBar;
var SandStormSpecksR3 = new Image();
SandStormSpecksR3.src = "grafix/effects/sandstorm/specks.r3.png";
SandStormSpecksR3.onload = LoadingBar;
var SandStormSpecksR4 = new Image();
SandStormSpecksR4.src = "grafix/effects/sandstorm/specks.r4.png";
SandStormSpecksR4.onload = LoadingBar;
var SandStormSpecksR5 = new Image();
SandStormSpecksR5.src = "grafix/effects/sandstorm/specks.r5.png";
SandStormSpecksR5.onload = LoadingBar;
var SandStormSpecksR6 = new Image();
SandStormSpecksR6.src = "grafix/effects/sandstorm/specks.r6.png";
SandStormSpecksR6.onload = LoadingBar;
var SandStormSpecksR7 = new Image();
SandStormSpecksR7.src = "grafix/effects/sandstorm/specks.r7.png";
SandStormSpecksR7.onload = LoadingBar;
var SandStormSpecksR8 = new Image();
SandStormSpecksR8.src = "grafix/effects/sandstorm/specks.r8.png";
SandStormSpecksR8.onload = LoadingBar;
var SandStormSpecksR9 = new Image();
SandStormSpecksR9.src = "grafix/effects/sandstorm/specks.r9.png";
SandStormSpecksR9.onload = LoadingBar;
var SandStormSpecksR10 = new Image();
SandStormSpecksR10.src = "grafix/effects/sandstorm/specks.r10.png";
SandStormSpecksR10.onload = LoadingBar;
var SandStormSpecksR11 = new Image();
SandStormSpecksR11.src = "grafix/effects/sandstorm/specks.r11.png";
SandStormSpecksR11.onload = LoadingBar;
var SandStormSpecksR12 = new Image();
SandStormSpecksR12.src = "grafix/effects/sandstorm/specks.r12.png";
SandStormSpecksR12.onload = LoadingBar;
var SandStormSpecksR = {1: SandStormSpecksR1, 2: SandStormSpecksR2, 3: SandStormSpecksR3, 4: SandStormSpecksR4, 5: SandStormSpecksR5,
						6: SandStormSpecksR6, 7: SandStormSpecksR7, 8: SandStormSpecksR8, 9: SandStormSpecksR9, 10: SandStormSpecksR10, 11: SandStormSpecksR11, 12:SandStormSpecksR12};
var SandStormSpecksL1 = new Image();
SandStormSpecksL1.src = "grafix/effects/sandstorm/specks.l1.png";
SandStormSpecksL1.onload = LoadingBar;
var SandStormSpecksL2 = new Image();
SandStormSpecksL2.src = "grafix/effects/sandstorm/specks.l2.png";
SandStormSpecksL2.onload = LoadingBar;
var SandStormSpecksL3 = new Image();
SandStormSpecksL3.src = "grafix/effects/sandstorm/specks.l3.png";
SandStormSpecksL3.onload = LoadingBar;
var SandStormSpecksL4 = new Image();
SandStormSpecksL4.src = "grafix/effects/sandstorm/specks.l4.png";
SandStormSpecksL4.onload = LoadingBar;
var SandStormSpecksL5 = new Image();
SandStormSpecksL5.src = "grafix/effects/sandstorm/specks.l5.png";
SandStormSpecksL5.onload = LoadingBar;
var SandStormSpecksL6 = new Image();
SandStormSpecksL6.src = "grafix/effects/sandstorm/specks.l6.png";
SandStormSpecksL6.onload = LoadingBar;
var SandStormSpecksL7 = new Image();
SandStormSpecksL7.src = "grafix/effects/sandstorm/specks.l7.png";
SandStormSpecksL7.onload = LoadingBar;
var SandStormSpecksL8 = new Image();
SandStormSpecksL8.src = "grafix/effects/sandstorm/specks.l8.png";
SandStormSpecksL8.onload = LoadingBar;
var SandStormSpecksL9 = new Image();
SandStormSpecksL9.src = "grafix/effects/sandstorm/specks.l9.png";
SandStormSpecksL9.onload = LoadingBar;
var SandStormSpecksL10 = new Image();
SandStormSpecksL10.src = "grafix/effects/sandstorm/specks.l10.png";
SandStormSpecksL10.onload = LoadingBar;
var SandStormSpecksL11 = new Image();
SandStormSpecksL11.src = "grafix/effects/sandstorm/specks.l11.png";
SandStormSpecksL11.onload = LoadingBar;
var SandStormSpecksL12 = new Image();
SandStormSpecksL12.src = "grafix/effects/sandstorm/specks.l12.png";
SandStormSpecksL12.onload = LoadingBar;
var SandStormSpecksL = {1: SandStormSpecksL1, 2: SandStormSpecksL2, 3: SandStormSpecksL3, 4: SandStormSpecksL4, 5: SandStormSpecksL5,
						6: SandStormSpecksL6, 7: SandStormSpecksL7, 8: SandStormSpecksL8, 9: SandStormSpecksL9, 10: SandStormSpecksL10, 11: SandStormSpecksL11, 12:SandStormSpecksL12};
//Anubis proj
var AnubisProjBlue = new Image();
AnubisProjBlue.src = "grafix/creatures/anewbus/orb/1.png";
AnubisProjBlue.onload = LoadingBar;
var AnubisProjRed = new Image();
AnubisProjRed.src = "grafix/creatures/anewbus/orb/2.png";
AnubisProjRed.onload = LoadingBar;
var AnubisProjWhite = new Image();
AnubisProjWhite.src = "grafix/creatures/anewbus/orb/3.png";
AnubisProjWhite.onload = LoadingBar;
var AnubisProjLoop = {1: AnubisProjBlue, 2: AnubisProjRed, 3: AnubisProjWhite};
//MegaMummy
var MegaMummy1L1 = new Image();
MegaMummy1L1.src = "grafix/creatures/mummibus/stage1/walk.l1.png";
MegaMummy1L1.onload = LoadingBar;
var MegaMummy1L2 = new Image();
MegaMummy1L2.src = "grafix/creatures/mummibus/stage1/walk.l2.png";
MegaMummy1L2.onload = LoadingBar;
var MegaMummy1L3 = new Image();
MegaMummy1L3.src = "grafix/creatures/mummibus/stage1/walk.l3.png";
MegaMummy1L3.onload = LoadingBar;
var MegaMummy1L4 = new Image();
MegaMummy1L4.src = "grafix/creatures/mummibus/stage1/walk.l4.png";
MegaMummy1L4.onload = LoadingBar;
var MegaMummy1L5 = new Image();
MegaMummy1L5.src = "grafix/creatures/mummibus/stage1/walk.l5.png";
MegaMummy1L5.onload = LoadingBar;
var MegaMummy1L6 = new Image();
MegaMummy1L6.src = "grafix/creatures/mummibus/stage1/walk.l6.png";
MegaMummy1L6.onload = LoadingBar;
var MegaMummy1L = {1: MegaMummy1L1, 2: MegaMummy1L2, 3: MegaMummy1L3, 4: MegaMummy1L4, 5: MegaMummy1L5, 6: MegaMummy1L6};
var MegaMummy1R1 = new Image();
MegaMummy1R1.src = "grafix/creatures/mummibus/stage1/walk.r1.png";
MegaMummy1R1.onload = LoadingBar;
var MegaMummy1R2 = new Image();
MegaMummy1R2.src = "grafix/creatures/mummibus/stage1/walk.r2.png";
MegaMummy1R2.onload = LoadingBar;
var MegaMummy1R3 = new Image();
MegaMummy1R3.src = "grafix/creatures/mummibus/stage1/walk.r3.png";
MegaMummy1R3.onload = LoadingBar;
var MegaMummy1R4 = new Image();
MegaMummy1R4.src = "grafix/creatures/mummibus/stage1/walk.r4.png";
MegaMummy1R4.onload = LoadingBar;
var MegaMummy1R5 = new Image();
MegaMummy1R5.src = "grafix/creatures/mummibus/stage1/walk.r5.png";
MegaMummy1R5.onload = LoadingBar;
var MegaMummy1R6 = new Image();
MegaMummy1R6.src = "grafix/creatures/mummibus/stage1/walk.r6.png";
MegaMummy1R6.onload = LoadingBar;
var MegaMummy1R = {1: MegaMummy1R1, 2: MegaMummy1R2, 3: MegaMummy1R3, 4: MegaMummy1R4, 5: MegaMummy1R5, 6: MegaMummy1R6};
var MegaMummy2L1 = new Image();
MegaMummy2L1.src = "grafix/creatures/mummibus/stage2/walk.l1.png";
MegaMummy2L1.onload = LoadingBar;
var MegaMummy2L2 = new Image();
MegaMummy2L2.src = "grafix/creatures/mummibus/stage2/walk.l2.png";
MegaMummy2L2.onload = LoadingBar;
var MegaMummy2L3 = new Image();
MegaMummy2L3.src = "grafix/creatures/mummibus/stage2/walk.l3.png";
MegaMummy2L3.onload = LoadingBar;
var MegaMummy2L4 = new Image();
MegaMummy2L4.src = "grafix/creatures/mummibus/stage2/walk.l4.png";
MegaMummy2L4.onload = LoadingBar;
var MegaMummy2L5 = new Image();
MegaMummy2L5.src = "grafix/creatures/mummibus/stage2/walk.l5.png";
MegaMummy2L5.onload = LoadingBar;
var MegaMummy2L6 = new Image();
MegaMummy2L6.src = "grafix/creatures/mummibus/stage2/walk.l6.png";
MegaMummy2L6.onload = LoadingBar;
var MegaMummy2L = {1: MegaMummy2L1, 2: MegaMummy2L2, 3: MegaMummy2L3, 4: MegaMummy2L4, 5: MegaMummy2L5, 6: MegaMummy2L6};
var MegaMummy2R1 = new Image();
MegaMummy2R1.src = "grafix/creatures/mummibus/stage2/walk.r1.png";
MegaMummy2R1.onload = LoadingBar;
var MegaMummy2R2 = new Image();
MegaMummy2R2.src = "grafix/creatures/mummibus/stage2/walk.r2.png";
MegaMummy2R2.onload = LoadingBar;
var MegaMummy2R3 = new Image();
MegaMummy2R3.src = "grafix/creatures/mummibus/stage2/walk.r3.png";
MegaMummy2R3.onload = LoadingBar;
var MegaMummy2R4 = new Image();
MegaMummy2R4.src = "grafix/creatures/mummibus/stage2/walk.r4.png";
MegaMummy2R4.onload = LoadingBar;
var MegaMummy2R5 = new Image();
MegaMummy2R5.src = "grafix/creatures/mummibus/stage2/walk.r5.png";
MegaMummy2R5.onload = LoadingBar;
var MegaMummy2R6 = new Image();
MegaMummy2R6.src = "grafix/creatures/mummibus/stage2/walk.r6.png";
MegaMummy2R6.onload = LoadingBar;
var MegaMummy2R = {1: MegaMummy2R1, 2: MegaMummy2R2, 3: MegaMummy2R3, 4: MegaMummy2R4, 5: MegaMummy2R5, 6: MegaMummy2R6};
var MegaMummy3L1 = new Image();
MegaMummy3L1.src = "grafix/creatures/mummibus/stage3/walk.l1.png";
MegaMummy3L1.onload = LoadingBar;
var MegaMummy3L2 = new Image();
MegaMummy3L2.src = "grafix/creatures/mummibus/stage3/walk.l2.png";
MegaMummy3L2.onload = LoadingBar;
var MegaMummy3L3 = new Image();
MegaMummy3L3.src = "grafix/creatures/mummibus/stage3/walk.l3.png";
MegaMummy3L3.onload = LoadingBar;
var MegaMummy3L4 = new Image();
MegaMummy3L4.src = "grafix/creatures/mummibus/stage3/walk.l4.png";
MegaMummy3L4.onload = LoadingBar;
var MegaMummy3L5 = new Image();
MegaMummy3L5.src = "grafix/creatures/mummibus/stage3/walk.l5.png";
MegaMummy3L5.onload = LoadingBar;
var MegaMummy3L6 = new Image();
MegaMummy3L6.src = "grafix/creatures/mummibus/stage3/walk.l6.png";
MegaMummy3L6.onload = LoadingBar;
var MegaMummy3L = {1: MegaMummy3L1, 2: MegaMummy3L2, 3: MegaMummy3L3, 4: MegaMummy3L4, 5: MegaMummy3L5, 6: MegaMummy3L6};
var MegaMummy3R1 = new Image();
MegaMummy3R1.src = "grafix/creatures/mummibus/stage3/walk.r1.png";
MegaMummy3R1.onload = LoadingBar;
var MegaMummy3R2 = new Image();
MegaMummy3R2.src = "grafix/creatures/mummibus/stage3/walk.r2.png";
MegaMummy3R2.onload = LoadingBar;
var MegaMummy3R3 = new Image();
MegaMummy3R3.src = "grafix/creatures/mummibus/stage3/walk.r3.png";
MegaMummy3R3.onload = LoadingBar;
var MegaMummy3R4 = new Image();
MegaMummy3R4.src = "grafix/creatures/mummibus/stage3/walk.r4.png";
MegaMummy3R4.onload = LoadingBar;
var MegaMummy3R5 = new Image();
MegaMummy3R5.src = "grafix/creatures/mummibus/stage3/walk.r5.png";
MegaMummy3R5.onload = LoadingBar;
var MegaMummy3R6 = new Image();
MegaMummy3R6.src = "grafix/creatures/mummibus/stage3/walk.r6.png";
MegaMummy3R6.onload = LoadingBar;
var MegaMummy3R = {1: MegaMummy3R1, 2: MegaMummy3R2, 3: MegaMummy3R3, 4: MegaMummy3R4, 5: MegaMummy3R5, 6: MegaMummy3R6};
var MegaMummy4L1 = new Image();
MegaMummy4L1.src = "grafix/creatures/mummibus/stage4/walk.l1.png";
MegaMummy4L1.onload = LoadingBar;
var MegaMummy4L2 = new Image();
MegaMummy4L2.src = "grafix/creatures/mummibus/stage4/walk.l2.png";
MegaMummy4L2.onload = LoadingBar;
var MegaMummy4L3 = new Image();
MegaMummy4L3.src = "grafix/creatures/mummibus/stage4/walk.l3.png";
MegaMummy4L3.onload = LoadingBar;
var MegaMummy4L4 = new Image();
MegaMummy4L4.src = "grafix/creatures/mummibus/stage4/walk.l4.png";
MegaMummy4L4.onload = LoadingBar;
var MegaMummy4L5 = new Image();
MegaMummy4L5.src = "grafix/creatures/mummibus/stage4/walk.l5.png";
MegaMummy4L5.onload = LoadingBar;
var MegaMummy4L6 = new Image();
MegaMummy4L6.src = "grafix/creatures/mummibus/stage4/walk.l6.png";
MegaMummy4L6.onload = LoadingBar;
var MegaMummy4L7 = new Image();
MegaMummy4L7.src = "grafix/creatures/mummibus/stage4/walk.l7.png";
MegaMummy4L7.onload = LoadingBar;
var MegaMummy4L8 = new Image();
MegaMummy4L8.src = "grafix/creatures/mummibus/stage4/walk.l8.png";
MegaMummy4L8.onload = LoadingBar;
var MegaMummy4L = {1: MegaMummy4L1, 2: MegaMummy4L2, 3: MegaMummy4L3, 4: MegaMummy4L4, 5: MegaMummy4L5, 6: MegaMummy4L6, 7: MegaMummy4L7, 8: MegaMummy4L8};
var MegaMummy4R1 = new Image();
MegaMummy4R1.src = "grafix/creatures/mummibus/stage4/walk.r1.png";
MegaMummy4R1.onload = LoadingBar;
var MegaMummy4R2 = new Image();
MegaMummy4R2.src = "grafix/creatures/mummibus/stage4/walk.r2.png";
MegaMummy4R2.onload = LoadingBar;
var MegaMummy4R3 = new Image();
MegaMummy4R3.src = "grafix/creatures/mummibus/stage4/walk.r3.png";
MegaMummy4R3.onload = LoadingBar;
var MegaMummy4R4 = new Image();
MegaMummy4R4.src = "grafix/creatures/mummibus/stage4/walk.r4.png";
MegaMummy4R4.onload = LoadingBar;
var MegaMummy4R5 = new Image();
MegaMummy4R5.src = "grafix/creatures/mummibus/stage4/walk.r5.png";
MegaMummy4R5.onload = LoadingBar;
var MegaMummy4R6 = new Image();
MegaMummy4R6.src = "grafix/creatures/mummibus/stage4/walk.r6.png";
MegaMummy4R6.onload = LoadingBar;
var MegaMummy4R7 = new Image();
MegaMummy4R7.src = "grafix/creatures/mummibus/stage4/walk.r7.png";
MegaMummy4R7.onload = LoadingBar;
var MegaMummy4R8 = new Image();
MegaMummy4R8.src = "grafix/creatures/mummibus/stage4/walk.r8.png";
MegaMummy4R8.onload = LoadingBar;
var MegaMummy4R = {1: MegaMummy4R1, 2: MegaMummy4R2, 3: MegaMummy4R3, 4: MegaMummy4R4, 5: MegaMummy4R5, 6: MegaMummy4R6, 7: MegaMummy4R7, 8: MegaMummy4R8};
var MegaMummySpawn1 = new Image();
MegaMummySpawn1.src = "grafix/objects/sandpit/mummy.spawn/1.png";
MegaMummySpawn1.onload = LoadingBar;
var MegaMummySpawn2 = new Image();
MegaMummySpawn2.src = "grafix/objects/sandpit/mummy.spawn/2.png";
MegaMummySpawn2.onload = LoadingBar;
var MegaMummySpawn3 = new Image();
MegaMummySpawn3.src = "grafix/objects/sandpit/mummy.spawn/3.png";
MegaMummySpawn3.onload = LoadingBar;
var MegaMummySpawn4 = new Image();
MegaMummySpawn4.src = "grafix/objects/sandpit/mummy.spawn/4.png";
MegaMummySpawn4.onload = LoadingBar;
var MegaMummySpawn5 = new Image();
MegaMummySpawn5.src = "grafix/objects/sandpit/mummy.spawn/5.png";
MegaMummySpawn5.onload = LoadingBar;
var MegaMummySpawn6 = new Image();
MegaMummySpawn6.src = "grafix/objects/sandpit/mummy.spawn/6.png";
MegaMummySpawn6.onload = LoadingBar;
var MegaMummySpawn7 = new Image();
MegaMummySpawn7.src = "grafix/objects/sandpit/mummy.spawn/7.png";
MegaMummySpawn7.onload = LoadingBar;
var MegaMummySpawn8 = new Image();
MegaMummySpawn8.src = "grafix/objects/sandpit/mummy.spawn/8.png";
MegaMummySpawn8.onload = LoadingBar;
var MegaMummySpawn = {1: MegaMummySpawn1, 2: MegaMummySpawn1, 3: MegaMummySpawn2, 4: MegaMummySpawn2, 5: MegaMummySpawn2, 6: MegaMummySpawn2, 7: MegaMummySpawn2, 8: MegaMummySpawn3,
						9: MegaMummySpawn3, 10: MegaMummySpawn3, 11: MegaMummySpawn4, 12: MegaMummySpawn4, 13: MegaMummySpawn4, 14: MegaMummySpawn4, 15: MegaMummySpawn5, 16: MegaMummySpawn5,
						17: MegaMummySpawn5, 18: MegaMummySpawn5, 19: MegaMummySpawn5, 20: MegaMummySpawn6, 21: MegaMummySpawn6, 22: MegaMummySpawn6, 23: MegaMummySpawn7, 24: MegaMummySpawn7,
						25: MegaMummySpawn7, 26: MegaMummySpawn8, 27: MegaMummySpawn8, 28: MegaMummySpawn8, 29: MegaMummySpawn8, 30: MegaMummySpawn8};
var MegaMummyBandagel1 = new Image();
MegaMummyBandagel1.src = "grafix/creatures/mummibus/bandages/fall.l1.png";
MegaMummyBandagel1.onload = LoadingBar;
var MegaMummyBandagel2 = new Image();
MegaMummyBandagel2.src = "grafix/creatures/mummibus/bandages/fall.l2.png";
MegaMummyBandagel2.onload = LoadingBar;
var MegaMummyBandagel3 = new Image();
MegaMummyBandagel3.src = "grafix/creatures/mummibus/bandages/fall.l3.png";
MegaMummyBandagel3.onload = LoadingBar;
var BandagesL = {1: MegaMummyBandagel1, 2: MegaMummyBandagel2, 3: MegaMummyBandagel3};
var MegaMummyBandager1 = new Image();
MegaMummyBandager1.src = "grafix/creatures/mummibus/bandages/fall.r1.png";
MegaMummyBandager1.onload = LoadingBar;
var MegaMummyBandager2 = new Image();
MegaMummyBandager2.src = "grafix/creatures/mummibus/bandages/fall.r2.png";
MegaMummyBandager2.onload = LoadingBar;
var MegaMummyBandager3 = new Image();
MegaMummyBandager3.src = "grafix/creatures/mummibus/bandages/fall.r3.png";
MegaMummyBandager3.onload = LoadingBar;
var BandagesR = {1: MegaMummyBandager1, 2: MegaMummyBandager2, 3: MegaMummyBandager3};
//Achievement pics
var APics = {0: "N/A", 1: glasses3d, 2: maxUP, 3: DragonmaxUP, 4: ThiefLuckUP, 5: GenieUp};
//--------------------------------------------------- Sounds ------------------------------------------------------------------------//
var Beam = document.getElementsByTagName("audio")[0];
var Killed = document.getElementsByTagName("audio")[1];
var Pickup = document.getElementsByTagName("audio")[2];
var Explosion = document.getElementsByTagName("audio")[3];
var Frozen = document.getElementsByTagName("audio")[4];
var Fwave = document.getElementsByTagName("audio")[5];
var Thunder = document.getElementsByTagName("audio")[6];
var Wind = document.getElementsByTagName("audio")[7];
var onDmg = document.getElementsByTagName("audio")[8];
var SpawnerSpawn = document.getElementsByTagName("audio")[9];
var zapLaser = document.getElementsByTagName("audio")[10];
var Plucky = document.getElementsByTagName("audio")[11];
var multiLaser = document.getElementsByTagName("audio")[12];
var midBoop = document.getElementsByTagName("audio")[13];
var lowDouble = document.getElementsByTagName("audio")[14];
var lowBomb = document.getElementsByTagName("audio")[15];
var highDouble = document.getElementsByTagName("audio")[16];
var flatBoop = document.getElementsByTagName("audio")[17];
var fastbeepsLow = document.getElementsByTagName("audio")[18];
var fastbeepsHigh = document.getElementsByTagName("audio")[19];
var grit = document.getElementsByTagName("audio")[38];
var gritlong = document.getElementsByTagName("audio")[39];
var gritlong2 = document.getElementsByTagName("audio")[39];
var gritlong3 = document.getElementsByTagName("audio")[39];
grit.volume = 1;
gritlong.volume = 1;
gritlong2.volume = 1;
gritlong3.volume = 1;
Plucky.volume = 0.3;
//Longsounds
var hum = document.getElementsByTagName("audio")[20];
var longfuzz = document.getElementsByTagName("audio")[21];
var longlaser = document.getElementsByTagName("audio")[22];
var longpew = document.getElementsByTagName("audio")[23];
var longpulse = document.getElementsByTagName("audio")[24];
var lowpulse = document.getElementsByTagName("audio")[25];
var radiofailure = document.getElementsByTagName("audio")[26];
var trailingbeeps = document.getElementsByTagName("audio")[27];
var rainsound = document.getElementsByTagName("audio")[33];
var GenieLaserSound = document.getElementsByTagName("audio")[36];
var GenieSpawnSound = document.getElementsByTagName("audio")[37];
var Sunlight = document.getElementsByTagName("audio")[42];
var AllSounds = {1: Beam, 2: Killed, 3: Pickup, 4: Explosion, 5: Frozen, 6: Fwave, 7: Thunder, 8: Wind, 9: onDmg, 10: SpawnerSpawn,
				11: zapLaser, 12: Plucky, 13: multiLaser, 14: midBoop, 15: lowDouble, 16: lowBomb, 17: highDouble, 18: flatBoop, 19: fastbeepsLow, 20: fastbeepsHigh,
				21: hum, 22: longfuzz, 23: longlaser, 24: longpew, 25: longpulse, 26: lowpulse, 27: radiofailure, 28: trailingbeeps, 29: rainsound, 30: GenieLaserSound, 31: GenieSpawnSound, 32: grit,
				33: gritlong, 34: gritlong2, 35: gritlong3, 36: Sunlight};
//Music
//randomize title spell
var titlesongrand = Math.round(Math.random() * 4) + 1;
if(titlesongrand < 3){
	var Spells = document.getElementsByTagName("audio")[28];
}
else{
	var Spells = document.getElementsByTagName("audio")[41];
}
var OverwhelmedByGoblins = document.getElementsByTagName("audio")[29];
var BadWizards = document.getElementsByTagName("audio")[30];
var DumblebeatsNormal = document.getElementsByTagName("audio")[31];
var CaseysQuest = document.getElementsByTagName("audio")[32];
var swampSong = document.getElementsByTagName("audio")[34];
var DesertSong = document.getElementsByTagName("audio")[35];
var SoothingSound = document.getElementsByTagName("audio")[40];
var AllMusic = {1: Spells, 2: OverwhelmedByGoblins, 3: BadWizards, 4: DumblebeatsNormal, 5: CaseysQuest, 6: swampSong, 7: DesertSong, 8: SoothingSound};
for(M in AllMusic){
	AllMusic[M].volume = 0.5;
}
if(titlesongrand == 2){
	Spells.volume = 0.3;
}
DumblebeatsNormal.volume = 0.4;
swampSong.volume = 0.2;
DesertSong.volume = 0.4;
//-------------------------------------------------------------- Library Storage ----------------------------------------------------//
//reset by changing the strings, change in gameover() too
var highscore1 = $.jStorage.get("v92test2highscore1");
if(!highscore1){
		var highscore1 = 0;
		$.jStorage.set("v92test2highscore1",highscore1);
}
var highscore2 = $.jStorage.get("v92test2highscore2");
if(!highscore2){
		var highscore2 = 0;
		$.jStorage.set("v92test2highscore2",highscore2);
}
var highscore3 = $.jStorage.get("v92test2highscore3");
if(!highscore3){
		var highscore3 = 0;
		$.jStorage.set("v92test2highscore3",highscore3);
}
var highscore4 = $.jStorage.get("v92test2highscore4");
if(!highscore4){
		var highscore4 = 0;
		$.jStorage.set("v92test2highscore4",highscore4);
}
var highscore5 = $.jStorage.get("v92test2highscore5");
if(!highscore5){
		var highscore5 = 0;
		$.jStorage.set("v92test2highscore5",highscore5);
}
var highscore6 = $.jStorage.get("v92test2highscore6");
if(!highscore6){
		var highscore6 = 0;
		$.jStorage.set("v92test2highscore6",highscore6);
}
var highscore7 = $.jStorage.get("v92test2highscore7");
if(!highscore7){
		var highscore7 = 0;
		$.jStorage.set("v92test2highscore7",highscore7);
}
var highscore8 = $.jStorage.get("v92test2highscore8");
if(!highscore8){
		var highscore8 = 0;
		$.jStorage.set("v92test2highscore8",highscore8);
}
var highscore9 = $.jStorage.get("v92test2highscore9");
if(!highscore9){
		var highscore9 = 0;
		$.jStorage.set("v92test2highscore9",highscore9);
}
var highscore10 = $.jStorage.get("v92test2highscore10");
if(!highscore10){
		var highscore10 = 0;
		$.jStorage.set("v92test2highscore10",highscore10);
}
//Get Initials
var hs1init = $.jStorage.get("v92test2hs1init");
if(!hs1init){
		var hs1init = "        ";
		$.jStorage.set("v92test2hs1init",hs1init);
}
var hs2init = $.jStorage.get("v92test2hs2init");
if(!hs2init){
		var hs2init = "        ";
		$.jStorage.set("v92test2hs2init",hs2init);
}
var hs3init = $.jStorage.get("v92test2hs3init");
if(!hs3init){
		var hs3init = "        ";
		$.jStorage.set("v92test2hs3init",hs3init);
}
var hs4init = $.jStorage.get("v92test2hs4init");
if(!hs4init){
		var hs4init = "        ";
		$.jStorage.set("v92test2hs4init",hs4init);
}
var hs5init = $.jStorage.get("v92test2hs5init");
if(!hs5init){
		var hs5init = "        ";
		$.jStorage.set("v92test2hs5init",hs5init);
}
var hs6init = $.jStorage.get("v92test2hs6init");
if(!hs6init){
		var hs6init = "        ";
		$.jStorage.set("v92test2hs6init",hs6init);
}
var hs7init = $.jStorage.get("v92test2hs7init");
if(!hs7init){
		var hs7init = "        ";
		$.jStorage.set("v92test2hs7init",hs7init);
}
var hs8init = $.jStorage.get("v92test2hs8init");
if(!hs8init){
		var hs8init = "        ";
		$.jStorage.set("v92test2hs8init",hs8init);
}
var hs9init = $.jStorage.get("v92test2hs9init");
if(!hs9init){
		var hs9init = "        ";
		$.jStorage.set("v92test2hs9init",hs9init);
}
var hs10init = $.jStorage.get("v92test2hs10init");
if(!hs10init){
		var hs10init = "        ";
		$.jStorage.set("v92test2hs10init",hs10init);
}
//Remove _ in initials
var chars = hs1init.split('');
for(C in chars){
	if(chars[C] == "_"){
		chars[C] = " ";
	}
}
hs1init = chars[0] + chars[1] + chars[2] + chars[3] + chars[4] + chars[5] + chars[6] + chars[7];
var chars = hs2init.split('');
for(C in chars){
	if(chars[C] == "_"){
		chars[C] = " ";
	}
}
hs2init = chars[0] + chars[1] + chars[2] + chars[3] + chars[4] + chars[5] + chars[6] + chars[7];
var chars = hs3init.split('');
for(C in chars){
	if(chars[C] == "_"){
		chars[C] = " ";
	}
}
hs3init = chars[0] + chars[1] + chars[2] + chars[3] + chars[4] + chars[5] + chars[6] + chars[7];
var chars = hs4init.split('');
for(C in chars){
	if(chars[C] == "_"){
		chars[C] = " ";
	}
}
hs4init = chars[0] + chars[1] + chars[2] + chars[3] + chars[4] + chars[5] + chars[6] + chars[7];
var chars = hs5init.split('');
for(C in chars){
	if(chars[C] == "_"){
		chars[C] = " ";
	}
}
hs5init = chars[0] + chars[1] + chars[2] + chars[3] + chars[4] + chars[5] + chars[6] + chars[7];
var chars = hs6init.split('');
for(C in chars){
	if(chars[C] == "_"){
		chars[C] = " ";
	}
}
hs6init = chars[0] + chars[1] + chars[2] + chars[3] + chars[4] + chars[5] + chars[6] + chars[7];
var chars = hs7init.split('');
for(C in chars){
	if(chars[C] == "_"){
		chars[C] = " ";
	}
}
hs7init = chars[0] + chars[1] + chars[2] + chars[3] + chars[4] + chars[5] + chars[6] + chars[7];
var chars = hs8init.split('');
for(C in chars){
	if(chars[C] == "_"){
		chars[C] = " ";
	}
}
hs8init = chars[0] + chars[1] + chars[2] + chars[3] + chars[4] + chars[5] + chars[6] + chars[7];
var chars = hs9init.split('');
for(C in chars){
	if(chars[C] == "_"){
		chars[C] = " ";
	}
}
hs9init = chars[0] + chars[1] + chars[2] + chars[3] + chars[4] + chars[5] + chars[6] + chars[7];
var chars = hs10init.split('');
for(C in chars){
	if(chars[C] == "_"){
		chars[C] = " ";
	}
}
hs10init = chars[0] + chars[1] + chars[2] + chars[3] + chars[4] + chars[5] + chars[6] + chars[7];
//3d glasses
var achievement1 = $.jStorage.get("v92test2achievement1");
if(!achievement1){
		var achievement1 = 0;
		$.jStorage.set("v92test2achievement1",achievement1);
}
var achievement2 = $.jStorage.get("v92test2achievement2");
if(!achievement2){
		var achievement2 = 0;
		$.jStorage.set("v92test2achievement2",achievement2);
}
var achievement3 = $.jStorage.get("v92test2achievement3");
if(!achievement3){
		var achievement3 = 0;
		$.jStorage.set("v92test2achievement3",achievement3);
}
var achievement4 = $.jStorage.get("v92test2achievement4");
if(!achievement4){
		var achievement4 = 0;
		$.jStorage.set("v92test2achievement4",achievement4);
}
var achievement5 = $.jStorage.get("v92test2achievement5");
if(!achievement5){
		var achievement5 = 0;
		$.jStorage.set("v92test2achievement5",achievement5);
}
var achievement6 = $.jStorage.get("v92test2achievement6");
if(!achievement6){
		var achievement6 = 0;
		$.jStorage.set("v92test2achievement6",achievement6);
}
var achievement7 = $.jStorage.get("v92test2achievement7");
if(!achievement7){
		var achievement7 = 0;
		$.jStorage.set("v92test2achievement7",achievement7);
}
var achievement8 = $.jStorage.get("v92test2achievement8");
if(!achievement8){
		var achievement8 = 0;
		$.jStorage.set("v92test2achievement8",achievement8);
}
var achievement9 = $.jStorage.get("v92test2achievement9");
if(!achievement9){
		var achievement9 = 0;
		$.jStorage.set("v92test2achievement9",achievement9);
}
var achievement10 = $.jStorage.get("v92test2achievement10");
if(!achievement10){
		var achievement10 = 0;
		$.jStorage.set("v92test2achievement10",achievement10);
}
//Get options
var dispCntrls = $.jStorage.get("tutor");
if(!dispCntrls){
	var dispCntrls = 2;
	$.jStorage.set("tutor", dispCntrls);
}
var vol = $.jStorage.get("vol");
if(!vol){
	var vol = 2;
	$.jStorage.set("vol", vol);
}
var Music = $.jStorage.get("Music");
if(!Music){
	var Music = 2;
	$.jStorage.set("Music", Music);
}
if(vol == 1){
	for(S in AllSounds){
		AllSounds[S].volume=0;
	}
}
if(Music == 1){
	for(M in AllMusic){
		AllMusic[M].volume=0;
	}
}
var dim = $.jStorage.get("dim");
if(!dim){
	var dim = 1;
	$.jStorage.set("dim", dim);
}
if(dim != 1){
	AList[1] = true;
}
//map stuff
var SeenFire = $.jStorage.get("SeenFire");
if(!SeenFire){
	var SeenFire = 0;
	$.jStorage.set("SeenFire", SeenFire);
}
var SeenJungle = $.jStorage.get("SeenJungle");
if(!SeenJungle){
	var SeenJungle = 0;
	$.jStorage.set("SeenJungle", SeenJungle);
}
var SeenSwamp = $.jStorage.get("SeenSwamp");
if(!SeenSwamp){
	var SeenSwamp = 0;
	$.jStorage.set("SeenSwamp", SeenSwamp);
}
var SeenDesert = $.jStorage.get("SeenDesert");
if(!SeenDesert){
	var SeenDesert = 0;
	$.jStorage.set("SeenDesert", SeenDesert);
}
//map paths
var path1 = $.jStorage.get("v92test2path1");
if(!path1){
		var path1 = 0;
		$.jStorage.set("v92test2path1",path1);
}
var path2 = $.jStorage.get("v92test2path2");
if(!path2){
		var path2 = 0;
		$.jStorage.set("v92test2path2",path2);
}
var path3 = $.jStorage.get("v92test2path3");
if(!path3){
		var path3 = 0;
		$.jStorage.set("v92test2path3",path3);
}
var path4 = $.jStorage.get("v92test2path4");
if(!path4){
		var path4 = 0;
		$.jStorage.set("v92test2path4",path4);
}
var path5 = $.jStorage.get("v92test2path5");
if(!path5){
		var path5 = 0;
		$.jStorage.set("v92test2path5",path5);
}
var path6 = $.jStorage.get("v92test2path6");
if(!path6){
		var path6 = 0;
		$.jStorage.set("v92test2path6",path6);
}
var path7 = $.jStorage.get("v92test2path7");
if(!path7){
		var path7 = 0;
		$.jStorage.set("v92test2path7",path7);
}
var path8 = $.jStorage.get("v92test2path8");
if(!path8){
		var path8 = 0;
		$.jStorage.set("v92test2path8",path8);
}
var path9 = $.jStorage.get("v92test2path9");
if(!path9){
		var path9 = 0;
		$.jStorage.set("v92test2path9",path9);
}
var path10 = $.jStorage.get("v92test2path10");
if(!path10){
		var path10 = 0;
		$.jStorage.set("v92test2path10",path10);
}
//---------------------------------------------------------------- Mouse Posn -------------------------------------------------------//
function getPosition(event){
    var targ;
    if (!event){
        event = window.event;
	}
    if (event.target){
        targ = event.target;
	}
    else if (event.srcElement){
        targ = event.srcElement;
	}
    if (targ.nodeType == 3){ // defeat Safari bug
        targ = targ.parentNode;
	}
    // jQuery normalizes the pageX and pageY
    // pageX,Y are the mouse positions relative to the document
    // offset() returns the position of the element relative to the document
	cX = event.pageX - $(targ).offset().left;
    cY = event.pageY - $(targ).offset().top;
}
function getPositionhover(event){
	var targ;
    if (!event){
        event = window.event;
	}
    if (event.target){
        targ = event.target;
	}
    else if (event.srcElement){
        targ = event.srcElement;
	}
    if (targ.nodeType == 3){ // defeat Safari bug
        targ = targ.parentNode;
	}
    // jQuery normalizes the pageX and pageY
    // pageX,Y are the mouse positions relative to the document
    // offset() returns the position of the element relative to the document
	hX = event.pageX - $(targ).offset().left;
    hY = event.pageY - $(targ).offset().top;
}