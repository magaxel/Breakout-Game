/*jslint esversion: 6, vars: true, plusplus: true, devel: true, nomen: true, indent: 4, maxerr: 50 */
"use strict";
var mechanics = (function () {
    var ballMove = function (ball, paddle) {
        // Bounce on paddle
        if (ball.y + ball.radius === paddle.y) {
            if (ball.x >= paddle.x) {
                if (ball.x <= paddle.x + paddle.width) {
                    ball.ydest = -ball.ydest;
                }
            }
        }

        // Bounce on right border
        if (ball.x >= canvas.width - ball.radius) {
            ball.xdest = -ball.xdest;
        }

        // Bounce on left border
        if (ball.x - ball.radius <= 0) {
            ball.xdest = -ball.xdest;
        }
        // Bounce on top border
        if (ball.y - ball.radius <= 0) {
            ball.ydest = -ball.ydest;
        }

        ball.x += ball.xdest;
        ball.y += ball.ydest;
        return ball;
    };

    var paddleMove = function (paddle) {

        if (controls.getRight() && paddle.x < canvas.width - paddle.width) {
            paddle.x += 7;
        }
        else if (controls.getLeft() && paddle.x > 0) {
            paddle.x -= 7;
        }
        return paddle;
    };

    var collisionDetection = function (bricks, ball) {

        bricks.forEach(function (brick) {
            //brick <= ball
            if (ball.x === brick.x + brick.width + ball.radius && ball.y > brick.y && ball.y < brick.y + brick.height) {
                brick.isHit();
                console.log("right");
                ball.xdest = -ball.xdest;
                game.scoreboard.addScore(1);
            }

            // ball => brick
            else if (ball.x === brick.x - ball.radius && ball.y > brick.y && ball.y < brick.y + brick.height) {
                brick.isHit();
                console.log("left");
                ball.xdest = -ball.xdest;
                game.scoreboard.addScore(1);
            }

            // top colission
            else if (ball.y === brick.y - ball.radius && ball.x > brick.x && ball.x < brick.x + brick.width) {
                brick.isHit();
                console.log(brick);
                ball.ydest = -ball.ydest;
                game.scoreboard.addScore(1);
            }

            // top colission
            else if (ball.y === brick.y + brick.height + ball.radius && ball.x > brick.x && ball.x < brick.x + brick.width) {
                brick.isHit();
                console.log(brick);
                ball.ydest = -ball.ydest;
                game.scoreboard.addScore(1);
            }

        });
        // Remove collisoned bricks from array
        bricks = bricks.filter(brick => brick.health > 0);
        if (bricks.length === 0) {
            game.nextLevel();
            if (game.currentLevel == null) {
                alert("you have bested the game");
                document.location.reload();
            }
            bricks = game.currentLevel.bricks;
        }
        return {
            bricks: bricks,
            ball: ball
        };
    };
    var reCalc = function () {
        game.currentLevel.ball = mechanics.ballMove(game.currentLevel.ball, game.currentLevel.paddle);
        game.currentLevel.paddle = mechanics.paddleMove(game.currentLevel.paddle);
        var collisions = mechanics.collisionDetection(game.currentLevel.bricks, game.currentLevel.ball);
        game.currentLevel.ball = collisions.ball;
        game.currentLevel.bricks = collisions.bricks;
        requestAnimationFrame(reCalc);
    };

    return {
        reCalc: reCalc,
        ballMove: ballMove,
        paddleMove: paddleMove,
        collisionDetection: collisionDetection
    };
})();