/*jslint esversion: 6, vars: true, plusplus: true, devel: true, nomen: true, indent: 4, maxerr: 50 */ 
"use strict";
var controls = (function () {

    var rightPressed = false;
    var leftPressed = false;

    var keyDownHandler = function (e) {
        if (e.keyCode == 39) {
            rightPressed = true;
        }
        else if (e.keyCode == 37) {
            leftPressed = true;
        }
    };

    var keyUpHandler = function (e) {
        if (e.keyCode == 39) {
            rightPressed = false;
        }
        else if (e.keyCode == 37) {
            leftPressed = false;
        }
    };

    var getRight = function () {
        return rightPressed;
    };

    var getLeft = function () {
        return leftPressed;
    };

    var mouseMoveHandler = function (e) {
        var relativeX = e.clientX - canvas.offsetLeft;
        if (relativeX > 0 && relativeX < canvas.width) {
            game.currentLevel.paddle.x = relativeX - game.currentLevel.paddle.width / 2;
        }
    };

    return {
        keyDownHandler: keyDownHandler,
        keyUpHandler: keyUpHandler,
        getLeft: getLeft,
        getRight: getRight,
        mouseMoveHandler: mouseMoveHandler
    };
})();