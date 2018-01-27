/*jslint esversion: 6, vars: true, plusplus: true, devel: true, nomen: true, indent: 4, maxerr: 50 */ 


// Game object
function Game(parameters) {
    this.name = parameters.name;
    this.lives = parameters.lives;
    this.scoreboard = parameters.scoreboard;
    this.levels = parameters.levels;
    this.currentLevel = this.levels[Number.parseInt(parameters.level)-1]; 
}
Game.prototype.nextLevel = function () {
    this.currentLevel = this.levels[this.currentLevel.id];
};

// Level object
function Level(parameters) {
    this.paddle = parameters.paddle;
    this.ball = parameters.ball;
    this.bricks = parameters.bricks;
    this.id = Number.parseInt(parameters.id);
}

// Figure object
function Figure(parameters) {
    this.x = Number.parseInt(parameters.x);
    this.y = Number.parseInt(parameters.y);
    this.color = parameters.color;
    
}

function Ball(parameters) {
    Figure.call(this, parameters);
    this.radius = Number.parseInt(parameters.radius);
    this.xdest = Number.parseInt(parameters.xdest);
    this.ydest = Number.parseInt(parameters.ydest);
}
Ball.prototype = Object.create(Figure.prototype);
Ball.prototype.constructor = Ball; // "Reinsert" the constructor

function Paddle(parameters) {
    Figure.call(this, parameters);
    this.height = Number.parseInt(parameters.height);
    this.width = Number.parseInt(parameters.width);
}

Paddle.prototype = Object.create(Figure.prototype);
Paddle.prototype.constructor = Paddle; // "Reinsert" the constructor

function Brick(parameters) {
    Figure.call(this, parameters);
    this.height = Number.parseInt(parameters.height);
    this.width = Number.parseInt(parameters.width);
    this.health = Number.parseInt(parameters.health);
}

Brick.prototype = Object.create(Figure.prototype);
Brick.prototype.constructor = Brick; // "Reinsert" the constructor
Brick.prototype.isHit = function () {
    this.health = this.health -1;
};

// Level object
function Scoreboard(parameters) {
    Figure.call(this, parameters);
    this.font = parameters.font;
    this.score = Number.parseInt(parameters.score);
}
Scoreboard.prototype = Object.create(Figure.prototype);
Scoreboard.prototype.constructor = Scoreboard; // "Reinsert" the constructor
Scoreboard.prototype.addScore = function (score) {
    this.score += score;
};

// Level object
function Lives(parameters) {
    Figure.call(this, parameters);
    this.font = parameters.font;
    this.lives = Number.parseInt(parameters.score);
}
Lives.prototype = Object.create(Figure.prototype);
Lives.prototype.constructor = Lives; // "Reinsert" the constructor
Lives.prototype.addLives = function (life) {
    this.lives += life;
};
Lives.prototype.removeLives = function (life) {
    this.lives -= life;
};