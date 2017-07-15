//----------------------------------- Setup -----------------------------------------------------------------------------------------//
var VersionNumb = "0.9.8.6 ";
var upDate = "July 15 2017";
// Canvas, Frames per Second, KeysDown, Global vars
var canvas = document.createElement("canvas");
canvas.width = 800;
canvas.height = 576;
canvas.tabIndex = 1;
document.getElementById('canvas_wrapper').appendChild(canvas);
var ctx = canvas.getContext("2d");
var cX = new Number();
var cY = new Number();
var hX = new Number();
var hY = new Number();
var STATE = 0;
var GODMODE = false;
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
var spell1Fade = 0;
var spell2Fade = 0;
var spell = "N/A";
var spell1pic = "N/A";
var spell2pic = "N/A";
//S*
var ErrorLogs = "Error Count: 0";
var Error = Aes.Ctr.encrypt("0", ErrorLogs, 256);
var staticm = 1;
var multtimer = 0;
var penalty = 1;
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
var levelSelectSwamp = false;
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
var AList = {0: true, 1: false, 2: false, 3: false, 4: false, 5: false, 6: false, 7: false};
var maxAchiev = 7;
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

//multiplayer
var refresh = 0;

//graveyard
var GraveNight = 0;
var GraveNum = 0;
var dayShift = 0;
var nightShift = 0;
var nightTimer = 900;
var dayone = 1;
//------------------------------------------------------- Graphics ------------------------------------------------------------------//
//---------------------------------------------------- Menu Graphics ----------------------------------------------------------------//
//menu
var menuBack = new Image();
menuBack.src = "grafix/menu/menu.png";
menuBack.onload = LoadingBar;
var GraveyardSheet = new Image();
GraveyardSheet.src = "grafix/background/graveyard.png";
GraveyardSheet.onload = LoadingBar;
var Title = new Image();
Title.src = "grafix/menu/mobilemenu.png";
Title.onload = LoadingBar;
var TitleReal = new Image();
TitleReal.src = "grafix/menu/title-real.png";
TitleReal.onload = LoadingBar;
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
var levelmenu = new Image();
levelmenu.src = "grafix/menu/mainmenu.compressed/levelselect.png";
levelmenu.onload = LoadingBar;
var creditsScreen = new Image();
creditsScreen.src = "grafix/menu/creditsScreen.png";
creditsScreen.onload = LoadingBar;
var glasses3d = new Image();
glasses3d.src = "grafix/menu/3dglass.png";
glasses3d.onload = LoadingBar;
var multCoin = new Image();
multCoin.src = "grafix/objects/coin/red.1.png";
multCoin.onload = LoadingBar;
//high scores
var highscoreBack = new Image();
highscoreBack.src = "grafix/menu/scores/bkg.png";
highscoreBack.onload = LoadingBar;
var levelSelectBkg = new Image();
levelSelectBkg.src = "grafix/menu/scores/bkgmapselect.png";
levelSelectBkg.onload = LoadingBar;
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
//letters
var letterSheet = new Image();
letterSheet.src = "grafix/menu/scores/name/name.png";
letterSheet.onload = LoadingBar;
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
var heartUp_sheet = new Image();
heartUp_sheet.src = "grafix/powers/heartup.png";
heartUp_sheet.onload = LoadingBar;
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
var GraveMap = new Image();
GraveMap.src = "grafix/menu/scores/map/3.graveyard.png";
GraveMap.onload = LoadingBar;
var MapBkg = new Image();
MapBkg.src = "grafix/menu/scores/map/mapbkg.png";
MapBkg.onload = LoadingBar;
//levelselect dumbles
var grassdumble = new Image();
grassdumble.src = "grafix/menu/scores/map/dumbles/grass.png";
grassdumble.onload = LoadingBar;
var firedumble = new Image();
firedumble.src = "grafix/menu/scores/map/dumbles/fire.png";
firedumble.onload = LoadingBar;
var jungledumble = new Image();
jungledumble.src = "grafix/menu/scores/map/dumbles/jungle.png";
jungledumble.onload = LoadingBar;
var swampdumble = new Image();
swampdumble.src = "grafix/menu/scores/map/dumbles/swamp.png";
swampdumble.onload = LoadingBar;
var desertdumble = new Image();
desertdumble.src = "grafix/menu/scores/map/dumbles/desert.png";
desertdumble.onload = LoadingBar;
var gravedumble = new Image();
gravedumble.src = "grafix/menu/scores/map/dumbles/graveyard.png";
gravedumble.onload = LoadingBar;
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
var FireGrave = new Image();
FireGrave.src = "grafix/menu/scores/map/path.self/2.fire-graveyard.png";
FireGrave.onload = LoadingBar;
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
var FireGraveH = new Image();
FireGraveH.src = "grafix/menu/scores/map/path.highlight/2.fire-graveyard.png";
FireGraveH.onload = LoadingBar;
//multiplayer
var logospinSheet = new Image();
logospinSheet.src = "grafix/connecting/logospin.png";
logospinSheet.onload = LoadingBar;
var textWait = new Image();
textWait.src = "grafix/connecting/text.players.png";
textWait.onload = LoadingBar;
var textFull = new Image();
textFull.src = "grafix/connecting/text.FULL.png";
textFull.onload = LoadingBar;
var textPlayers = new Image();
textPlayers.src = "grafix/connecting/text.wait.png";
textPlayers.onload = LoadingBar;
//score highlight hover
var scoreHighlightHover = new Image();
scoreHighlightHover.src = "grafix/menu/scores/highlight.png";
scoreHighlightHover.onload = LoadingBar;
var Ele_Bursts = new Image();
Ele_Bursts.src = "grafix/menu/HUD/eleburst.png";
Ele_Bursts.onload = LoadingBar;
//------------------------------------------------- Meadow Graphics/UI --------------------------------------------------------------//
//dumble
var Wiz_Sheet = new Image();
Wiz_Sheet.src = "grafix/wizzurds/wizbiz.png";
Wiz_Sheet.onload = LoadingBar;
//HUD
//Tootorial
var WizardStaff = new Image();
WizardStaff.src = "grafix/objects/staff.png";
WizardStaff.onload = LoadingBar;
var TutorialSheet = new Image();
TutorialSheet.src = "grafix/menu/tutorial/tutorialsheet.png";
TutorialSheet.onload = LoadingBar;
var PickupArrow1 = new Image();
PickupArrow1.src = "grafix/menu/tutorial/pickuparrow.1.png";
PickupArrow1.onload = LoadingBar;
var PickupArrow2 = new Image();
PickupArrow2.src = "grafix/menu/tutorial/pickuparrow.2.png";
PickupArrow2.onload = LoadingBar;
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
var SpellUISheet = new Image();//End: 290
SpellUISheet.src = "grafix/menu/HUD/SPELLS/spellsui.png";
SpellUISheet.onload = LoadingBar;
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
var HPGraphicSheet = new Image();
HPGraphicSheet.src = "grafix/menu/HUD/HEALTH/healthbar.png";
HPGraphicSheet.onload = LoadingBar;
//Score stuff
var ScoreUISheet = new Image();
ScoreUISheet.src = "grafix/menu/HUD/SCORE/scoreui.png";
ScoreUISheet.onload = LoadingBar;
//Environment
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
var Tree = new Image();
Tree.src = "grafix/objects/tree/health.3.png";
Tree.onload = LoadingBar;
var Tree2 = new Image();
Tree2.src = "grafix/objects/tree/health.2.png";
Tree2.onload = LoadingBar;
var Tree3 = new Image();
Tree3.src = "grafix/objects/tree/health.1.png";
Tree3.onload = LoadingBar; 
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
var FlowerSheet = new Image();
FlowerSheet.src = "grafix/creatures/pikkit/pikkit.png";
FlowerSheet.onload = LoadingBar;
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
//fall in
var FbossEntrance = new Image();
FbossEntrance.src = "grafix/creatures/dearyrocks/intro/intro.sheet.png";
FbossEntrance.onload = LoadingBar;
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
//Traps
var trapSheet = new Image();
trapSheet.src = "grafix/objects/traps.png";
trapSheet.onload = LoadingBar;
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
//darkwater
var darkwaterSheet = new Image();
darkwaterSheet.src = "grafix/objects/darksheild/darksheild.png";
darkwaterSheet.onload = LoadingBar;
//dumblebeam
var BeamSheet = new Image();
BeamSheet.src = "grafix/effects/beam/beam.png";
BeamSheet.onload = LoadingBar;
//powerups
var Pickup_Elements = new Image();
Pickup_Elements.src = "grafix/powers/elements.png";
Pickup_Elements.onload = LoadingBar;
var HUD_Elements = new Image();
HUD_Elements.src = "grafix/menu/HUD/ELEMENTS/hud.elements.png";
HUD_Elements.onload = LoadingBar;
var FireIcon = new Image();
FireIcon.src = "grafix/powers/fire/fire.icon.png";
FireIcon.onload = LoadingBar;
//Ice powerup
var IceIcon = new Image();
IceIcon.src = "grafix/powers/ice/ice.icon.png";
IceIcon.onload = LoadingBar;
//Earth powerup
var EarthIcon = new Image();
EarthIcon.src = "grafix/powers/earth/earth.icon.png";
EarthIcon.onload = LoadingBar;
//lightning powerup
var LightningIcon = new Image();
LightningIcon.src = "grafix/powers/zap/zap.icon.png";
LightningIcon.onload = LoadingBar;
//Air powerup
var AirIcon = new Image();
AirIcon.src = "grafix/powers/air/air.icon.png";
AirIcon.onload = LoadingBar;
//Mystic powerup
var MysticIcon = new Image();
MysticIcon.src = "grafix/powers/mystic/mystic.icon.png";
MysticIcon.onload = LoadingBar;
//Water powerup
var WaterIcon = new Image();
WaterIcon.src = "grafix/powers/water/water.icon.png";
WaterIcon.onload = LoadingBar;
//Dark powerup
var DarkIcon = new Image();
DarkIcon.src = "grafix/powers/dark/dark.icon.png";
DarkIcon.onload = LoadingBar;
//Light powerup
var LightIcon = new Image();
LightIcon.src = "grafix/powers/light/light.icon.png";
LightIcon.onload = LoadingBar;
// Particle
var particleSheet = new Image();
particleSheet.src = "grafix/effects/hpup/hpup.png";
particleSheet.onload = LoadingBar;
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
var SplavamanSheet = new Image();
SplavamanSheet.src = "grafix/creatures/winamp/winamp.png";
SplavamanSheet.onload = LoadingBar;
var SplavamanCast = {1: 1, 2: 1, 3: 1, 4: 1, 5: 1, 6: 1, 7: 1, 8: 2, 9: 2,
						10: 2, 11: 3, 12: 3, 13: 3, 14: 3, 15: 4, 16: 4, 17: 4,
						18: 4, 19: 5, 20: 5, 21: 5, 22: 5, 23: 5, 24: 5,
						25: 5, 26: 6, 27: 6};
var SplavamanSpawn = {1: 1, 2: 1, 3: 1, 4: 1, 5: 1, 6: 1, 7: 1, 8: 1, 9: 2,
						10: 2, 11: 3, 12: 3, 13: 4, 14: 4, 15: 4, 16: 4, 17: 4,
						18: 4, 19: 5, 20: 6, 21: 6};
//Genie
var GenieSheet = new Image();
GenieSheet.src = "grafix/creatures/ortizgenie/genie.png";
GenieSheet.onload = LoadingBar;
var GenieSpawn = {1: 1, 2: 1, 3: 2, 4: 2, 5: 2, 6: 3, 7: 3, 8: 4, 9: 4,
					10: 4, 11: 4, 12: 5, 13: 5, 14: 5, 15: 6, 16: 6, 17: 6, 18: 6,
					19: 6, 20: 7, 21: 8, 22: 8, 23: 9, 24: 9, 25: 9, 26: 10, 27: 11, 
					28: 12, 29: 13, 30: 14, 31: 14, 32: 15, 33: 15, 34: 16, 35: 17, 36: 17};
var LaserArray = {1: 1, 2: 1, 3: 1, 4: 2, 5: 2, 6: 3, 7: 3, 8: 4, 9: 5,
				10: 6, 11: 7, 12: 8, 13: 8, 14: 9, 15: 9, 16: 9};
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
var MeteorSheet = new Image();
MeteorSheet.src = "grafix/objects/rock/meteorsheet.png";
MeteorSheet.onload = LoadingBar;
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
// ghost
var GhostWalkSheet = new Image();
GhostWalkSheet.src = "grafix/creatures/goats/goatwalk.png";
GhostWalkSheet.onload = LoadingBar;
var GhostGroundSheet = new Image();
GhostGroundSheet.src = "grafix/creatures/goats/goatground.png";
GhostGroundSheet.onload = LoadingBar;
var GhostGroundAnimation = {1: 0, 2: 0, 3: 1, 4: 1, 5: 1, 6: 1, 7: 1, 8: 2, 9: 2, 10: 3, 11: 3, 12: 4, 13: 4, 14: 4, 15: 5, 16: 6, 17: 6, 18: 7, 19: 8, 20: 9, 21: 10, 22: 11, 23: 12}; 
var GhostSpawn = {1: 0, 2: 0, 3: 0, 4: 1, 5: 1, 6: 1, 7: 2, 8: 2, 9: 2, 10: 3, 11: 3, 12: 3, 13: 3, 14: 3, 15: 4, 16: 5, 17: 6, 18: 6, 19: 6, 20: 7, 21: 7, 22: 7, 23: 8, 24: 8, 25: 9, 26: 9, 27: 10, 28: 10, 29: 11, 30: 11, 31: 11, 32: 12, 33: 12, 34: 12, 35: 13, 36: 13, 37: 14}; 
var GhostRingSheet = new Image();
GhostRingSheet.src = "grafix/creatures/goats/goatring.png";
GhostRingSheet.onload = LoadingBar;
var GhostRingEntrance = {1: 0, 2: 0, 3: 1, 4: 1, 5: 2, 6: 0, 7: 0, 8: 1, 9: 1, 10: 2, 11: 2, 12: 2}; 
var GhostRingExit = {1: 0, 2: 0, 3: 0, 4: 0, 5: 1, 6: 1, 7: 2}; 
var GhostFlameWall = new Image();
GhostFlameWall.src = "grafix/creatures/goats/flamewall.png";
GhostFlameWall.onload = LoadingBar;
var GhostArrow = new Image();
GhostArrow.src = "grafix/creatures/goats/goatarrow.png";
GhostArrow.onload = LoadingBar;
var GhostLight = new Image();
GhostLight.src = "grafix/creatures/goats/lightray.png";
GhostLight.onload = LoadingBar;
//------------------------------------------------------- Swamp Level ---------------------------------------------------------------//
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
var boardSheet = new Image();
boardSheet.src = "grafix/objects/walkway/walkway.png";
boardSheet.onload = LoadingBar;
//Swudge
var SwudgeSheet = new Image();
SwudgeSheet.src = "grafix/creatures/swudge/swudge.png";
SwudgeSheet.onload = LoadingBar;
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
var DesertBackground = new Image();
DesertBackground.src = "grafix/background/sand.png";
DesertBackground.onload = LoadingBar;
//Scorps
var ScorpSheet = new Image();
ScorpSheet.src = "grafix/creatures/scopion/scopion.png";
ScorpSheet.onload = LoadingBar;
var ScorpStab = {1: 1, 2: 2, 3: 2, 4: 3, 5: 3, 6: 3, 7: 3, 8: 3, 9: 3, 10: 3, 11: 3, 12: 4, 13: 5, 14: 5,
					15: 5, 16: 5, 17: 6};
//anubis
var AnubisSheet = new Image();
AnubisSheet.src = "grafix/creatures/anewbus/anubis.png";
AnubisSheet.onload = LoadingBar;
var AnubisAttacks = {1: 1, 2: 1, 3: 1, 4: 1, 5: 1, 6: 1, 7: 2, 8: 2, 9: 2, 10: 2, 11: 2, 
						12: 2, 13: 2, 14: 2, 15: 2, 16: 3, 17: 3, 18: 4, 19: 4, 20: 5, 21: 5, 22: 6,
						23: 7, 24: 7, 25: 7, 26: 7, 27: 7, 28: 8, 29: 8, 30: 8, 31: 8, 32: 8, 33: 9, 
						34: 9, 35: 9, 36: 9, 37: 9, 38: 10, 39: 11, 40: 11, 41: 11, 42: 11, 43: 11, 44: 11, 45: 11, 46: 11};
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


//MegaMummy
var MegaMummySheet = new Image();
MegaMummySheet.src = "grafix/creatures/mummibus/mummibus.png";
MegaMummySheet.onload = LoadingBar;
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
//Achievement pics
var APics = {0: "N/A", 1: glasses3d, 2: 32, 3: 0, 4: 96, 5: 64, 6: multCoin, 7: 128};
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
// title spell
var Spells = document.getElementsByTagName("audio")[28];
var OverwhelmedByGoblins = document.getElementsByTagName("audio")[29];
var BadWizards = document.getElementsByTagName("audio")[30];
var DumblebeatsNormal = document.getElementsByTagName("audio")[31];
var CaseysQuest = document.getElementsByTagName("audio")[32];
var swampSong = document.getElementsByTagName("audio")[34];
var DesertSong = document.getElementsByTagName("audio")[35];
var SoothingSound = document.getElementsByTagName("audio")[40];
var GraveNightSong = document.getElementsByTagName("audio")[44];
var GraveDaySong = document.getElementsByTagName("audio")[43];

var AllMusic = {1: Spells, 2: OverwhelmedByGoblins, 3: BadWizards, 4: DumblebeatsNormal, 5: CaseysQuest, 6: swampSong, 7: DesertSong, 8: SoothingSound, 9: GraveNightSong, 10: GraveDaySong};
for(M in AllMusic){
	AllMusic[M].volume = 0.5;
}
DumblebeatsNormal.volume = 0.4;
swampSong.volume = 0.2;
DesertSong.volume = 0.4;
//-------------------------------------------------------------- Library Storage ----------------------------------------------------//
//reset by changing the strings, change in gameover() too
var highscore1 = $.jStorage.get("v98highscore1");
if(!highscore1){
		var highscore1 = 0;
		$.jStorage.set("v98highscore1",highscore1);
}
var highscore2 = $.jStorage.get("v98highscore2");
if(!highscore2){
		var highscore2 = 0;
		$.jStorage.set("v98highscore2",highscore2);
}
var highscore3 = $.jStorage.get("v98highscore3");
if(!highscore3){
		var highscore3 = 0;
		$.jStorage.set("v98highscore3",highscore3);
}
var highscore4 = $.jStorage.get("v98highscore4");
if(!highscore4){
		var highscore4 = 0;
		$.jStorage.set("v98highscore4",highscore4);
}
var highscore5 = $.jStorage.get("v98highscore5");
if(!highscore5){
		var highscore5 = 0;
		$.jStorage.set("v98highscore5",highscore5);
}
var highscore6 = $.jStorage.get("v98highscore6");
if(!highscore6){
		var highscore6 = 0;
		$.jStorage.set("v98highscore6",highscore6);
}
var highscore7 = $.jStorage.get("v98highscore7");
if(!highscore7){
		var highscore7 = 0;
		$.jStorage.set("v98highscore7",highscore7);
}
var highscore8 = $.jStorage.get("v98highscore8");
if(!highscore8){
		var highscore8 = 0;
		$.jStorage.set("v98highscore8",highscore8);
}
var highscore9 = $.jStorage.get("v98highscore9");
if(!highscore9){
		var highscore9 = 0;
		$.jStorage.set("v98highscore9",highscore9);
}
var highscore10 = $.jStorage.get("v98highscore10");
if(!highscore10){
		var highscore10 = 0;
		$.jStorage.set("v98highscore10",highscore10);
}
//Get Initials
var hs1init = $.jStorage.get("v98hs1init");
if(!hs1init){
		var hs1init = "        ";
		$.jStorage.set("v98hs1init",hs1init);
}
var hs2init = $.jStorage.get("v98hs2init");
if(!hs2init){
		var hs2init = "        ";
		$.jStorage.set("v98hs2init",hs2init);
}
var hs3init = $.jStorage.get("v98hs3init");
if(!hs3init){
		var hs3init = "        ";
		$.jStorage.set("v98hs3init",hs3init);
}
var hs4init = $.jStorage.get("v98hs4init");
if(!hs4init){
		var hs4init = "        ";
		$.jStorage.set("v98hs4init",hs4init);
}
var hs5init = $.jStorage.get("v98hs5init");
if(!hs5init){
		var hs5init = "        ";
		$.jStorage.set("v98hs5init",hs5init);
}
var hs6init = $.jStorage.get("v98hs6init");
if(!hs6init){
		var hs6init = "        ";
		$.jStorage.set("v98hs6init",hs6init);
}
var hs7init = $.jStorage.get("v98hs7init");
if(!hs7init){
		var hs7init = "        ";
		$.jStorage.set("v98hs7init",hs7init);
}
var hs8init = $.jStorage.get("v98hs8init");
if(!hs8init){
		var hs8init = "        ";
		$.jStorage.set("v98hs8init",hs8init);
}
var hs9init = $.jStorage.get("v98hs9init");
if(!hs9init){
		var hs9init = "        ";
		$.jStorage.set("v98hs9init",hs9init);
}
var hs10init = $.jStorage.get("v98hs10init");
if(!hs10init){
		var hs10init = "        ";
		$.jStorage.set("v98hs10init",hs10init);
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
var achievement1 = $.jStorage.get("v98achievement1");
if(!achievement1){
		var achievement1 = 0;
		$.jStorage.set("v98achievement1",achievement1);
}
var achievement2 = $.jStorage.get("v98achievement2");
if(!achievement2){
		var achievement2 = 0;
		$.jStorage.set("v98achievement2",achievement2);
}
var achievement3 = $.jStorage.get("v98achievement3");
if(!achievement3){
		var achievement3 = 0;
		$.jStorage.set("v98achievement3",achievement3);
}
var achievement4 = $.jStorage.get("v98achievement4");
if(!achievement4){
		var achievement4 = 0;
		$.jStorage.set("v98achievement4",achievement4);
}
var achievement5 = $.jStorage.get("v98achievement5");
if(!achievement5){
		var achievement5 = 0;
		$.jStorage.set("v98achievement5",achievement5);
}
var achievement6 = $.jStorage.get("v98achievement6");
if(!achievement6){
		var achievement6 = 0;
		$.jStorage.set("v98achievement6",achievement6);
}
var achievement7 = $.jStorage.get("v98achievement7");
if(!achievement7){
		var achievement7 = 0;
		$.jStorage.set("v98achievement7",achievement7);
}
var achievement8 = $.jStorage.get("v98achievement8");
if(!achievement8){
		var achievement8 = 0;
		$.jStorage.set("v98achievement8",achievement8);
}
var achievement9 = $.jStorage.get("v98achievement9");
if(!achievement9){
		var achievement9 = 0;
		$.jStorage.set("v98achievement9",achievement9);
}
var achievement10 = $.jStorage.get("v98achievement10");
if(!achievement10){
		var achievement10 = 0;
		$.jStorage.set("v98achievement10",achievement10);
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
var SeenGraveyard = $.jStorage.get("SeenGraveyard");
if(!SeenGraveyard){
	var SeenGraveyard = 0;
	$.jStorage.set("SeenGraveyard", SeenGraveyard);
}
//map paths
var path1 = $.jStorage.get("v98path1");
if(!path1){
		var path1 = 0;
		$.jStorage.set("v98path1",path1);
}
var path2 = $.jStorage.get("v98path2");
if(!path2){
		var path2 = 0;
		$.jStorage.set("v98path2",path2);
}
var path3 = $.jStorage.get("v98path3");
if(!path3){
		var path3 = 0;
		$.jStorage.set("v98path3",path3);
}
var path4 = $.jStorage.get("v98path4");
if(!path4){
		var path4 = 0;
		$.jStorage.set("v98path4",path4);
}
var path5 = $.jStorage.get("v98path5");
if(!path5){
		var path5 = 0;
		$.jStorage.set("v98path5",path5);
}
var path6 = $.jStorage.get("v98path6");
if(!path6){
		var path6 = 0;
		$.jStorage.set("v98path6",path6);
}
var path7 = $.jStorage.get("v98path7");
if(!path7){
		var path7 = 0;
		$.jStorage.set("v98path7",path7);
}
var path8 = $.jStorage.get("v98path8");
if(!path8){
		var path8 = 0;
		$.jStorage.set("v98path8",path8);
}
var path9 = $.jStorage.get("v98path9");
if(!path9){
		var path9 = 0;
		$.jStorage.set("v98path9",path9);
}
var path10 = $.jStorage.get("v98path10");
if(!path10){
		var path10 = 0;
		$.jStorage.set("v98path10",path10);
}
SeenFire = 1;
SeenJungle = 1;
SeenSwamp = 1;
SeenDesert = 1;
SeenGraveyard = 1;
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
	if((typeof(document.webkitIsFullScreen) != "undefined" && document.webkitIsFullScreen) ||
		(typeof(document.mozFullScreen) != "undefined" && document.mozFullScreen) ||
		(typeof(document.fullScreen) != "undefined" && document.fullScreen)){
		cX = ((event.pageX - $(targ).offset().left)*canvas.width)/screen.width;
		cY = ((event.pageY - $(targ).offset().top)*canvas.height)/screen.height;
	}else if(isFakeFS && canvas.style.width == "1024px") {
		cX = (event.pageX - $(targ).offset().left)*800.00/1024.00;
		cY = (event.pageY - $(targ).offset().top)*576.00/765.00;
	}
	else{
		cX = event.pageX - $(targ).offset().left;
		cY = event.pageY - $(targ).offset().top;
	}
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
	if((typeof(document.webkitIsFullScreen) != "undefined" && document.webkitIsFullScreen) ||
		(typeof(document.mozFullScreen) != "undefined" && document.mozFullScreen) ||
		(typeof(document.fullScreen) != "undefined" && document.fullScreen)){
		
		hX = ((event.pageX - $(targ).offset().left)*canvas.width)/screen.width;
		hY = ((event.pageY - $(targ).offset().top)*canvas.height)/screen.height;
		}
	else if(isFakeFS && canvas.style.width == "1024px") {
		hX = (event.pageX - $(targ).offset().left)*800.00/1024.00;
		hY = (event.pageY - $(targ).offset().top)*576.00/765.00;
	}
	else{
		hX = event.pageX - $(targ).offset().left;
		hY = event.pageY - $(targ).offset().top;
	}
}