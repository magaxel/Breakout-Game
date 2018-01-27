/*jslint esversion: 6, vars: true, plusplus: true, devel: true, nomen: true, indent: 4, maxerr: 50 */ 
var gui = (function () {
    var drawBall = function (ball) {
        ctx.beginPath();
        ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2, false);
        ctx.fillStyle = ball.color;
        ctx.fill();
        ctx.closePath();
    };

    var drawPaddle = function (paddle) {
        ctx.beginPath();
        ctx.rect(paddle.x, paddle.y, paddle.width, paddle.height);
        ctx.fillStyle = paddle.color;
        ctx.fill();
        ctx.closePath();
    };

    var drawBricks = function (bricks) {
        bricks.forEach(function (brick) {
            ctx.beginPath();
            ctx.rect(brick.x, brick.y, brick.width, brick.height);
            ctx.fillStyle = brick.color;
            ctx.fill();
            ctx.closePath();
        });
    };

    var drawScore = function (scoreboard) {
        ctx.font = scoreboard.font;
        ctx.fillStyle = scoreboard.color;
        ctx.fillText("Score: " + scoreboard.score, scoreboard.x, scoreboard.y);
    };
    var drawLives = function (lives) {
        ctx.font = lives.font;
        ctx.fillStyle = lives.color;
        ctx.fillText("Lives: " + lives.lives, canvas.width - 65, 20);
    };

    var reDraw = function () {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        drawBall(game.currentLevel.ball);
        drawPaddle(game.currentLevel.paddle);
        drawBricks(game.currentLevel.bricks);
        drawScore(game.scoreboard);
        drawLives(game.lives);
        requestAnimationFrame(reDraw);
    };

    return {
        reDraw: reDraw,
    };
})();