/*jslint esversion: 6, vars: true, plusplus: true, devel: true, nomen: true, indent: 4, maxerr: 50 */ 
var build = (function () {
    var canvasName = "myCanvas";
    var canvas = document.getElementById(canvasName);
    var scoreboard = function () {
        scoreboard = new Scoreboard({ font: gamedata.scoreboard.font, color: gamedata.scoreboard.color, x: gamedata.scoreboard.x, y: gamedata.scoreboard.y, score: gamedata.scoreboard.score });
        return scoreboard;
    };
    var lives = function () {
        lives = new Lives({ font: gamedata.lives.font, color: gamedata.lives.color, x: gamedata.lives.x, y: gamedata.lives.y, score: gamedata.lives.lives });
        return lives;
    };

    var levels = function () {
        return gamedata.levels.map(l => new Level({
            ball: new Ball({ x: canvas.width / 2, y: canvas.height - l.paddle.height -l.ball.radius*4, radius: l.ball.radius, color: l.ball.color, xdest: -1, ydest: -1 }),
            paddle: new Paddle({ x: (canvas.width - l.paddle.width) / 2, y: canvas.height - l.paddle.height, width: l.paddle.width, height: l.paddle.height, color: l.paddle.color }),
            bricks: l.bricks.map(b => new Brick({ x: b.x, y: b.y, height: b.height, width: b.width, color: b.color, health: b.health })),
            id: l.id
        }));
    };

    var game = function () {
        game = new Game({ name: gamedata.name, lives: lives(), scoreboard: scoreboard(), levels: levels(), level: gamedata.startLevel });
        return game;
    };

    return {
        game: game,
    };
})();