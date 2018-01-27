// https://developer.mozilla.org/en-US/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript
/*jslint esversion: 6, vars: true, plusplus: true, devel: true, nomen: true, indent: 4, maxerr: 50 */ 
var canvasName = "myCanvas";
var canvas = document.getElementById(canvasName);
var ctx = canvas.getContext("2d");

var game = build.game();
//console.log(game);
document.addEventListener("mousemove", controls.mouseMoveHandler, false);
document.addEventListener("keydown", controls.keyDownHandler, false);
document.addEventListener("keyup", controls.keyUpHandler, false);

mechanics.reCalc();
gui.reDraw();
