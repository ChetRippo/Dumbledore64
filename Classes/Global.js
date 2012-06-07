//----------------------------------- Setup -----------------------------------------------------------------------------------------//
var VersionNumb = "0.8.0 ";
var upDate = "June 7 2012";
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
var LightningColor = "e8da39";
var AirColor = "#94abb0";
var MysticColor = "#663399";
var WaterColor = "#325dd9";
var DarkColor = "#05121a";
var DevvColor = "#bfe3b6";
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
//------------------------------------------------------- Graphics ------------------------------------------------------------------//
//Girraffix
var WizzurdL = new Image();
WizzurdL.src = "grafix/wizzurds/wizard/wiz.l.png";
WizzurdL.onload = LoadingBar;
var WizzurdR = new Image();
WizzurdR.src = "grafix/wizzurds/wizard/wiz.r.png";
WizzurdR.onload = LoadingBar;
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
//Ondmg
var Wizzurd2 = new Image();
Wizzurd2.src = "grafix/wizzurds/effects.wizard/nega.wiz.l1.png";
Wizzurd2.onload = LoadingBar;
var Wizzurd2R = new Image();
Wizzurd2R.src = "grafix/wizzurds/effects.wizard/nega.wiz.r1.png";
Wizzurd2R.onload = LoadingBar;
//Swimwizz
var swimWizzL = new Image();
swimWizzL.src = "grafix/wizzurds/effects.wizard/wiz.pizz.l.png";
swimWizzL.onload = LoadingBar;
var swimWizzR = new Image();
swimWizzR.src = "grafix/wizzurds/effects.wizard/wiz.pizz.r.png";
swimWizzR.onload = LoadingBar;
//Shadow wizz
var shadeWizzL = new Image();
shadeWizzL.src = "grafix/wizzurds/effects.wizard/wiz.shadow.l.png";
shadeWizzL.onload = LoadingBar;
var shadeWizzR = new Image();
shadeWizzR.src = "grafix/wizzurds/effects.wizard/wiz.shadow.r.png";
shadeWizzR.onload = LoadingBar;
//menu
var menuBack = new Image();
menuBack.src = "grafix/menu/menu.png";
menuBack.onload = LoadingBar;
var Title = new Image();
Title.src = "grafix/menu/title.png";
Title.onload = LoadingBar;
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
//HUD
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
var backGround1 = new Image();
backGround1.src = "grafix/background/grass1.png";
backGround1.onload = LoadingBar;
var backGround2 = new Image();
backGround2.src = "grafix/background/jungle1.png";
backGround2.onload = LoadingBar;
var backGround3 = new Image();
backGround3.src = "grafix/background/fire1.png";
backGround3.onload = LoadingBar;
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
//Jungle
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
//Lavaman
var LavamanpicL = new Image();
LavamanpicL.src = "grafix/creatures/firesprite/firesprite.l1.png";
LavamanpicL.onload = LoadingBar;
var LavamanpicR = new Image();
LavamanpicR.src = "grafix/creatures/firesprite/firesprite.r1.png";
LavamanpicR.onload = LoadingBar;
//Tenemy
var Globbly = new Image();
Globbly.src = "grafix/creatures/globbly/globbly.r1.png";
Globbly.onload = LoadingBar;
var Globbly2 = new Image();
Globbly2.src = "grafix/creatures/globbly/globbly.r2.png";
Globbly2.onload = LoadingBar;
var Globbly3 = new Image();
Globbly3.src = "grafix/creatures/globbly/globbly.r3.png";
Globbly3.onload = LoadingBar;
var Globbly4 = new Image();
Globbly4.src = "grafix/creatures/globbly/globbly.r4.png";
Globbly4.onload = LoadingBar;
var Globbly5 = new Image();
Globbly5.src = "grafix/creatures/globbly/globbly.r5.png";
Globbly5.onload = LoadingBar;
var Globbly6 = new Image();
Globbly6.src = "grafix/creatures/globbly/globbly.r6.png";
Globbly6.onload = LoadingBar;
var Globbly7 = new Image();
Globbly7.src = "grafix/creatures/globbly/globbly.r7.png";
Globbly7.onload = LoadingBar;
var Globbly8 = new Image();
Globbly8.src = "grafix/creatures/globbly/globbly.r8.png";
Globbly8.onload = LoadingBar;
var Globblys = {1: Globbly, 2: Globbly2, 3: Globbly3, 4: Globbly4, 5: Globbly5, 6: Globbly6, 7: Globbly7, 8: Globbly8};
//Hudge
var HudgeL = new Image();
HudgeL.src = "grafix/creatures/hudge/hudge.l1.png";
HudgeL.onload = LoadingBar;
var HudgeR = new Image();
HudgeR.src = "grafix/creatures/hudge/hudge.r1.png";
HudgeR.onload = LoadingBar;
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
//Enemy2
var PikkitL = new Image();
PikkitL.src = "grafix/creatures/pikkit/pikkit.l1.png";
PikkitL.onload = LoadingBar;
var PikkitR = new Image();
PikkitR.src = "grafix/creatures/pikkit/pikkit.r1.png";
PikkitR.onload = LoadingBar;
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
//Spawner
var Splavaman = new Image();
Splavaman.src = "grafix/creatures/lavaman/lavaman.l1.png";
Splavaman.onload = LoadingBar;
//Evil Wizzurd
var Sorcerorpng = new Image();
Sorcerorpng.src = "grafix/wizzurds/poison.wizard/poison.wiz.l1.png";
Sorcerorpng.onload = LoadingBar;
//Tree Wizzurd
var TWizzurd = new Image();
TWizzurd.src = "grafix/wizzurds/tree.wizard/tree.wiz.l1.png";
TWizzurd.onload = LoadingBar;
var TWizzurd2 = new Image();
TWizzurd2.src = "grafix/wizzurds/tree.wizard/tree.wiz.l2.png";
TWizzurd2.onload = LoadingBar;
var TWizzurd3 = new Image();
TWizzurd3.src = "grafix/wizzurds/tree.wizard/tree.wiz.l3.png";
TWizzurd3.onload = LoadingBar;
var TWizzurd4 = new Image();
TWizzurd4.src = "grafix/wizzurds/tree.wizard/tree.wiz.l4.png";
TWizzurd4.onload = LoadingBar;
var TWizzurd5 = new Image();
TWizzurd5.src = "grafix/wizzurds/tree.wizard/tree.wiz.l5.png";
TWizzurd5.onload = LoadingBar;
var TWizzurd6 = new Image();
TWizzurd6.src = "grafix/wizzurds/tree.wizard/tree.wiz.l6.png";
TWizzurd6.onload = LoadingBar;
var TWizzurd7 = new Image();
TWizzurd7.src = "grafix/wizzurds/tree.wizard/tree.wiz.l7.png";
TWizzurd7.onload = LoadingBar;
var TWizzurd8 = new Image();
TWizzurd8.src = "grafix/wizzurds/tree.wizard/tree.wiz.l8.png";
TWizzurd8.onload = LoadingBar;
var Treewizzez = {1: TWizzurd, 2: TWizzurd2, 3: TWizzurd3, 4: TWizzurd4, 5: TWizzurd5, 6: TWizzurd6, 7: TWizzurd7, 8: TWizzurd8};
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
//Monochrome Wizzurd
var MonoWizzurd = new Image();
MonoWizzurd.src = "grafix/wizzurds/effects.wizard/bw.wiz.l1.png";
MonoWizzurd.onload = LoadingBar;
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
//Hp up
var maxUP = new Image();
maxUP.src = "grafix/powers/heartup/treeheart.png";
maxUP.onload = LoadingBar;
var DragonmaxUP = new Image();
DragonmaxUP.src = "grafix/powers/heartup/redheart.png";
DragonmaxUP.onload = LoadingBar;
var ThiefLuckUP = new Image();
ThiefLuckUP.src = "grafix/powers/heartup/blueheart.png";
ThiefLuckUP.onload = LoadingBar;
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
//Meteor env
var Meteorcold = new Image();
Meteorcold.src = "grafix/objects/hot.rock/glow.01.png";
Meteorcold.onload = LoadingBar;
var Meteorcold2 = new Image();
Meteorcold2.src = "grafix/objects/hot.rock/glow.02.png";
Meteorcold2.onload = LoadingBar;
var Meteorcold3 = new Image();
Meteorcold3.src = "grafix/objects/hot.rock/glow.03.png";
Meteorcold3.onload = LoadingBar;
var Meteorcold4 = new Image();
Meteorcold4.src = "grafix/objects/hot.rock/glow.04.png";
Meteorcold4.onload = LoadingBar;
var Meteorcold5 = new Image();
Meteorcold5.src = "grafix/objects/hot.rock/glow.05.png";
Meteorcold5.onload = LoadingBar;
var Meteorcold6 = new Image();
Meteorcold6.src = "grafix/objects/hot.rock/glow.06.png";
Meteorcold6.onload = LoadingBar;
var Meteorcold7 = new Image();
Meteorcold7.src = "grafix/objects/hot.rock/glow.07.png";
Meteorcold7.onload = LoadingBar;
var Meteorcold8 = new Image();
Meteorcold8.src = "grafix/objects/hot.rock/glow.08.png";
Meteorcold8.onload = LoadingBar;
var Meteorcold9 = new Image();
Meteorcold9.src = "grafix/objects/hot.rock/glow.09.png";
Meteorcold9.onload = LoadingBar;
var Meteorcold10 = new Image();
Meteorcold10.src = "grafix/objects/hot.rock/glow.10.png";
Meteorcold10.onload = LoadingBar;
var Meteorcold11 = new Image();
Meteorcold11.src = "grafix/objects/hot.rock/glow.11.png";
Meteorcold11.onload = LoadingBar;
var Meteorcold12 = new Image();
Meteorcold12.src = "grafix/objects/hot.rock/glow.12.png";
Meteorcold12.onload = LoadingBar;
var Meteorcold13 = new Image();
Meteorcold13.src = "grafix/objects/hot.rock/glow.13.png";
Meteorcold13.onload = LoadingBar;
var Meteorcold14 = new Image();
Meteorcold14.src = "grafix/objects/hot.rock/glow.14.png";
Meteorcold14.onload = LoadingBar;
var Meteorcold15 = new Image();
Meteorcold15.src = "grafix/objects/hot.rock/glow.15.png";
Meteorcold15.onload = LoadingBar;
var Meteorcold16 = new Image();
Meteorcold16.src = "grafix/objects/hot.rock/glow.16.png";
Meteorcold16.onload = LoadingBar;
var Meteorcold17 = new Image();
Meteorcold17.src = "grafix/objects/hot.rock/glow.17.png";
Meteorcold17.onload = LoadingBar;
var Meteorcold18 = new Image();
Meteorcold18.src = "grafix/objects/hot.rock/glow.18.png";
Meteorcold18.onload = LoadingBar;
var Meteorcold19 = new Image();
Meteorcold19.src = "grafix/objects/hot.rock/glow.19.png";
Meteorcold19.onload = LoadingBar;
var Meteorcold20 = new Image();
Meteorcold20.src = "grafix/objects/hot.rock/glow.20.png";
Meteorcold20.onload = LoadingBar;
var Meteorcold21 = new Image();
Meteorcold21.src = "grafix/objects/hot.rock/glow.21.png";
Meteorcold21.onload = LoadingBar;
var Meteorcold22 = new Image();
Meteorcold22.src = "grafix/objects/hot.rock/glow.22.png";
Meteorcold22.onload = LoadingBar;
var Meteorcold23 = new Image();
Meteorcold23.src = "grafix/objects/hot.rock/glow.23.png";
Meteorcold23.onload = LoadingBar;
var Meteorcold24 = new Image();
Meteorcold24.src = "grafix/objects/hot.rock/glow.24.png";
Meteorcold24.onload = LoadingBar;
var Meteorcold25 = new Image();
Meteorcold25.src = "grafix/objects/hot.rock/glow.25.png";
Meteorcold25.onload = LoadingBar;
var Meteorcold26 = new Image();
Meteorcold26.src = "grafix/objects/hot.rock/glow.26.png";
Meteorcold26.onload = LoadingBar;
var Meteorcold27 = new Image();
Meteorcold27.src = "grafix/objects/hot.rock/glow.27.png";
Meteorcold27.onload = LoadingBar;
var Meteorcold28 = new Image();
Meteorcold28.src = "grafix/objects/hot.rock/glow.28.png";
Meteorcold28.onload = LoadingBar;
var Meteorcold29 = new Image();
Meteorcold29.src = "grafix/objects/hot.rock/glow.29.png";
Meteorcold29.onload = LoadingBar;
var Meteorcold30 = new Image();
Meteorcold30.src = "grafix/objects/hot.rock/glow.30.png";
Meteorcold30.onload = LoadingBar;
var Meteorcold31 = new Image();
Meteorcold31.src = "grafix/objects/hot.rock/glow.31.png";
Meteorcold31.onload = LoadingBar;
var Meteorcold32 = new Image();
Meteorcold32.src = "grafix/objects/hot.rock/glow.32.png";
Meteorcold32.onload = LoadingBar;
var Meteorcold33 = new Image();
Meteorcold33.src = "grafix/objects/hot.rock/glow.33.png";
Meteorcold33.onload = LoadingBar;
var EnvMeteor = {1: Meteorcold, 2: Meteorcold2, 3: Meteorcold3, 4: Meteorcold4, 5: Meteorcold5, 6: Meteorcold6, 7: Meteorcold7, 8: Meteorcold8, 9: Meteorcold9, 10: Meteorcold10, 11: Meteorcold11,
				12: Meteorcold12, 13: Meteorcold13, 14: Meteorcold14, 15: Meteorcold15, 16: Meteorcold16, 17: Meteorcold17, 18: Meteorcold18, 19: Meteorcold19, 20: Meteorcold20, 21: Meteorcold21, 22: Meteorcold22,
				23: Meteorcold23, 24: Meteorcold24, 25: Meteorcold25, 26: Meteorcold26, 27: Meteorcold27, 28: Meteorcold28, 29: Meteorcold29, 30: Meteorcold30, 31: Meteorcold31, 32: Meteorcold32, 33: Meteorcold33}; 
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
var darkTrapActive = new Image();
darkTrapActive.src = "grafix/objects/darktrap/darktrap.poof.png";
darkTrapActive.onload = LoadingBar;
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
var darkfireimg = {0: darkfireimg1, 1: darkfireimg2, 2: darkfireimg3};
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
var AllSounds = {1: Beam, 2: Killed, 3: Pickup, 4: Explosion, 5: Frozen, 6: Fwave, 7: Thunder, 8: Wind, 9: onDmg, 10: SpawnerSpawn,
				11: zapLaser, 12: Plucky, 13: multiLaser, 14: midBoop, 15: lowDouble, 16: lowBomb, 17: highDouble, 18: flatBoop, 19: fastbeepsLow, 20: fastbeepsHigh,
				21: hum, 22: longfuzz, 23: longlaser, 24: longpew, 25: longpulse, 26: lowpulse, 27: radiofailure, 28: trailingbeeps, 29: rainsound};
//Music
var Spells = document.getElementsByTagName("audio")[28];
var OverwhelmedByGoblins = document.getElementsByTagName("audio")[29];
var BadWizards = document.getElementsByTagName("audio")[30];
var DumblebeatsNormal = document.getElementsByTagName("audio")[31];
var CaseysQuest = document.getElementsByTagName("audio")[32];
var swampSong = document.getElementsByTagName("audio")[34];
var AllMusic = {1: Spells, 2: OverwhelmedByGoblins, 3: BadWizards, 4: DumblebeatsNormal, 5: CaseysQuest, 6: swampSong};
for(M in AllMusic){
	AllMusic[M].volume = 0.5;
}
DumblebeatsNormal.volume = 0.4;
CaseysQuest.volume = 0.4;
swampSong.volume = 0.4;
//-------------------------------------------------------------- Library Storage ----------------------------------------------------//
//reset by changing the strings, change in gameover() too
var highscore1 = $.jStorage.get("v80highscore1");
if(!highscore1){
		var highscore1 = 0;
		$.jStorage.set("v80highscore1",highscore1);
}
var highscore2 = $.jStorage.get("v80highscore2");
if(!highscore2){
		var highscore2 = 0;
		$.jStorage.set("v80highscore2",highscore2);
}
var highscore3 = $.jStorage.get("v80highscore3");
if(!highscore3){
		var highscore3 = 0;
		$.jStorage.set("v80highscore3",highscore3);
}
var highscore4 = $.jStorage.get("v80highscore4");
if(!highscore4){
		var highscore4 = 0;
		$.jStorage.set("v80highscore4",highscore4);
}
var highscore5 = $.jStorage.get("v80highscore5");
if(!highscore5){
		var highscore5 = 0;
		$.jStorage.set("v80highscore5",highscore5);
}
var highscore6 = $.jStorage.get("v80highscore6");
if(!highscore6){
		var highscore6 = 0;
		$.jStorage.set("v80highscore6",highscore6);
}
var highscore7 = $.jStorage.get("v80highscore7");
if(!highscore7){
		var highscore7 = 0;
		$.jStorage.set("v80highscore7",highscore7);
}
var highscore8 = $.jStorage.get("v80highscore8");
if(!highscore8){
		var highscore8 = 0;
		$.jStorage.set("v80highscore8",highscore8);
}
var highscore9 = $.jStorage.get("v80highscore9");
if(!highscore9){
		var highscore9 = 0;
		$.jStorage.set("v80highscore9",highscore9);
}
var highscore10 = $.jStorage.get("v80highscore10");
if(!highscore10){
		var highscore10 = 0;
		$.jStorage.set("v80highscore10",highscore10);
}
//Get Initials
var hs1init = $.jStorage.get("v80hs1init");
if(!hs1init){
		var hs1init = "        ";
		$.jStorage.set("v80hs1init",hs1init);
}
var hs2init = $.jStorage.get("v80hs2init");
if(!hs2init){
		var hs2init = "        ";
		$.jStorage.set("v80hs2init",hs2init);
}
var hs3init = $.jStorage.get("v80hs3init");
if(!hs3init){
		var hs3init = "        ";
		$.jStorage.set("v80hs3init",hs3init);
}
var hs4init = $.jStorage.get("v80hs4init");
if(!hs4init){
		var hs4init = "        ";
		$.jStorage.set("v80hs4init",hs4init);
}
var hs5init = $.jStorage.get("v80hs5init");
if(!hs5init){
		var hs5init = "        ";
		$.jStorage.set("v80hs5init",hs5init);
}
var hs6init = $.jStorage.get("v80hs6init");
if(!hs6init){
		var hs6init = "        ";
		$.jStorage.set("v80hs6init",hs6init);
}
var hs7init = $.jStorage.get("v80hs7init");
if(!hs7init){
		var hs7init = "        ";
		$.jStorage.set("v80hs7init",hs7init);
}
var hs8init = $.jStorage.get("v80hs8init");
if(!hs8init){
		var hs8init = "        ";
		$.jStorage.set("v80hs8init",hs8init);
}
var hs9init = $.jStorage.get("v80hs9init");
if(!hs9init){
		var hs9init = "        ";
		$.jStorage.set("v80hs9init",hs9init);
}
var hs10init = $.jStorage.get("v80hs10init");
if(!hs10init){
		var hs10init = "        ";
		$.jStorage.set("v80hs10init",hs10init);
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
var glasses1 = $.jStorage.get("v80glasses1");
if(!glasses1){
		var glasses1 = 0;
		$.jStorage.set("v80glasses1",glasses1);
}
var glasses2 = $.jStorage.get("v80glasses2");
if(!glasses2){
		var glasses2 = 0;
		$.jStorage.set("v80glasses2",glasses2);
}
var glasses3 = $.jStorage.get("v80glasses3");
if(!glasses3){
		var glasses3 = 0;
		$.jStorage.set("v80glasses3",glasses3);
}
var glasses4 = $.jStorage.get("v80glasses4");
if(!glasses4){
		var glasses4 = 0;
		$.jStorage.set("v80glasses4",glasses4);
}
var glasses5 = $.jStorage.get("v80glasses5");
if(!glasses5){
		var glasses5 = 0;
		$.jStorage.set("v80glasses5",glasses5);
}
var glasses6 = $.jStorage.get("v80glasses6");
if(!glasses6){
		var glasses6 = 0;
		$.jStorage.set("v80glasses6",glasses6);
}
var glasses7 = $.jStorage.get("v80glasses7");
if(!glasses7){
		var glasses7 = 0;
		$.jStorage.set("v80glasses7",glasses7);
}
var glasses8 = $.jStorage.get("v80glasses8");
if(!glasses8){
		var glasses8 = 0;
		$.jStorage.set("v80glasses8",glasses8);
}
var glasses9 = $.jStorage.get("v80glasses9");
if(!glasses9){
		var glasses9 = 0;
		$.jStorage.set("v80glasses9",glasses9);
}
var glasses10 = $.jStorage.get("v80glasses10");
if(!glasses10){
		var glasses10 = 0;
		$.jStorage.set("v80glasses10",glasses10);
}
//Get options
var dispCntrls = $.jStorage.get("cntrls");
if(!dispCntrls){
	var dispCntrls = 2;
	$.jStorage.set("cntrls", dispCntrls);
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
//---------------------------------------------------------------- Mouse Posn -------------------------------------------------------//
function getPosition(event){
    if (event.x != undefined && event.y != undefined){
         cX = event.x;
         cY = event.y;
        }
        else // Firefox method to get the position
        {
          cX = event.clientX + document.body.scrollLeft +
              document.documentElement.scrollLeft;
          cY = event.clientY + document.body.scrollTop +
              document.documentElement.scrollTop;
        }
        cX -= canvas.offsetLeft;
        cY -= canvas.offsetTop;
}
function getPositionhover(event){
    if (event.x != undefined && event.y != undefined){
		 hX = event.x;
         hY = event.y;
        }
        else // Firefox method to get the position
        {
		  hX = event.clientX + document.body.scrollLeft +
              document.documentElement.scrollLeft;
          hY = event.clientY + document.body.scrollTop +
              document.documentElement.scrollTop;
        }
		hX -= canvas.offsetLeft;
        hY -= canvas.offsetTop;
}