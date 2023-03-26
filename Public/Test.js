let isGameOver = false;
const EASY = 1;
const IMPOSSIBLE = 2;
const PROGRESSIVE = 3;
let difficulty_level = EASY; // Set default difficulty level to EASY, update this value based on user selection
let easyModeScore = 0;
let impossibleModeScore = 0;
let progressiveHighScore = 0;
class MenuScene extends Phaser.Scene {
    constructor() {
        super({ key: 'MenuScene' });
    }
    create() {
        this.add.text(130, 50, 'Flappy Birds', { fontSize: '80px', fill: '#000', fontStyle: 'bold', });
        this.add.text(240, 170, 'Choose Level', { fontSize: '40px', fill: '#000' });
        const progressiveButton = this.add.text(304, 300, 'Progressive', { fontSize: '24px', fill: 'black' });
        const easyButton = this.add.text(360, 220, 'Easy', { fontSize: '24px', fill: 'green' });
        const impossibleButton = this.add.text(312, 260, 'Impossible', { fontSize: '24px', fill: 'red' });

        progressiveButton.setInteractive();
        easyButton.setInteractive();
        impossibleButton.setInteractive();

        progressiveButton.on('pointerdown', () => {
            difficulty_level = PROGRESSIVE;
            this.scene.start('GameScene');
        });

        easyButton.on('pointerdown', () => {
            difficulty_level = EASY;
            this.scene.start('GameScene');
        });
        impossibleButton.on('pointerdown', () => {
            difficulty_level = IMPOSSIBLE;
            this.scene.start('GameScene');
        });

    }
}

let highScore = 0;
const config = {
    type: Phaser.AUTO,
    width: 780,
    height: 400,
    backgroundColor: '#F6F6F6',
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 0 },
            debug: false
        }
    },
    render: {
        contextAttributes: {
            willReadFrequently: true
        }
    },
    canvas: document.getElementById('game-canvas'), // Add this line

    scene: [MenuScene, {
        key: 'GameScene',
        preload: preload,
        create: create,
        update: update
    }]
};


const game = new Phaser.Game(config);
let bird, pipes, cursors, scoreText;
let score = 0;
let pipeGap = 130;

function updateGameParameters() {
    if (difficulty_level === EASY) {
        bird.body.gravity.y = 1300;
        pipeGap = 150;
    } else if (difficulty_level === IMPOSSIBLE) {
        bird.body.gravity.y = 1800;
        pipeGap = 100;

    } else if (difficulty_level === PROGRESSIVE) {
        bird.body.gravity.y = 1300;
        pipeGap = 150;
    }
}
function preload() {
    this.load.spritesheet('bird', 'birdflying.png', {
        frameWidth: 81,
        frameHeight: 75
    });
    this.load.image('pipe', 'pipe.png');
    this.load.image('sky', 'sky.png');
    this.load.image('grass', 'grassgreen.png');
}

function create() {
    isGameOver = false;
    loadGame();

    pipes = this.physics.add.group();
    cursors = this.input.keyboard.createCursorKeys();
    this.time.addEvent({ delay: 1300, callback: addPipe, callbackScope: this, loop: true });

    scoreText = this.add.text(16, 16, 'Score: 0', { fontSize: '24px', fill: '#000' });

    this.anims.create({
        key: 'flap',
        frames: this.anims.generateFrameNumbers('bird', { start: 0, end: 8 - 1 }),
        frameRate: 7, // Increase this value to make the animation smoother
        repeat: -1
    });

    bird = this.physics.add.sprite(50, 250, 'bird');
    bird.setCollideWorldBounds(true);
    bird.displayWidth = 42;
    bird.displayHeight = 40;
    bird.body.gravity.y = 1300;
    bird.setDepth(2);
    bird.play('flap');
    // Add the grass image at the bottom of the game interface
    const grass = this.physics.add.sprite(config.width / 2, config.height - 10, 'grass');
    grass.setImmovable(true);
    grass.body.allowGravity = false;
    grass.displayHeight = 40;
    grass.scaleX = config.width / grass.width;
    grass.setDepth(10);
    // Add the sky image at the top of the game interface
    const sky = this.add.sprite(config.width / 2, 0, 'sky');
    sky.displayHeight = 120;
    sky.scaleX = config.width / sky.width;
    sky.setDepth(4);

    // Add the score text
    scoreText = this.add.text(16, 16, 'Score: 0', { fontSize: '24px', fill: '#000' });
    scoreText.setDepth(10);
    updateGameParameters();
}

function update() {
    // Set a minimum and maximum height for the bird
    const minHeight = 77;
    const maxHeight = config.height - 50;
    const pipeSpeed = difficulty_level === IMPOSSIBLE ? 6 : 4;
    pipes.getChildren().forEach((pipe) => {
        pipe.x -= pipeSpeed;
        if (pipe.x < -pipe.width) {
            pipes.remove(pipe, true, true);
        }
    });
    // Check if the bird's position is outside the allowed range
    if (bird.y < minHeight) {
        bird.y = minHeight;
        bird.setVelocityY(0);
    } else if (bird.y > maxHeight) {
        bird.y = maxHeight;
        bird.setVelocityY(0);
    }
    if (cursors.space.isDown) {
        bird.setVelocityY(-200);
    }
    pipes.getChildren().forEach(pipe => {
        pipe.x -= 4;
        if (pipe.x < -pipe.width) {
            pipes.remove(pipe, true, true);
        }
    });
    checkCollision(this);
}

function addPipe() {
    let speedIncreaseCount = 0;
    // Randomize the pipe gap
    const minPipeGap = pipeGap - 30;
    const maxPipeGap = pipeGap + 30;
    const randomPipeGap = Phaser.Math.Between(minPipeGap, maxPipeGap);
    // Randomize the height of the top pipe
    const minPipeHeight = 50;
    const maxPipeHeight = config.height - randomPipeGap - minPipeHeight;
    const topHeight = Phaser.Math.Between(minPipeHeight, maxPipeHeight);

    const pipeTop = this.physics.add.sprite(config.width, topHeight, 'pipe');
    const pipeBottom = this.physics.add.sprite(config.width, topHeight + randomPipeGap, 'pipe');

    pipeTop.setOrigin(0, 1);
    pipeBottom.setOrigin(0, 0);

    pipeTop.setVelocityX(0);
    pipeBottom.setVelocityX(0);

    pipeTop.allowGravity = false;
    pipeBottom.allowGravity = false;

    pipes.add(pipeTop);
    pipes.add(pipeBottom);
    pipeBottom.name = 'pipeBottom'; // set name property for identification

    if (difficulty_level === PROGRESSIVE) {
        speedIncreaseCount++;

        if (speedIncreaseCount % 10 === 0) {
            pipeSpeed *= 1.02;
        }
    }
}

function checkCollision(scene) {
    scene.physics.add.overlap(bird, pipes, () => {
        gameOver(scene);
    }, null, scene);

    pipes.getChildren().forEach(pipe => {
        if (pipe.x + pipe.width < bird.x && pipe.getData('passed') === undefined) {
            pipe.setData('passed', true);

            // only add points if it's a pipeBottom sprite and the game is not over
            if (pipe.name === 'pipeBottom' && !isGameOver) {
                score += 1;
                scoreText.setText('Score: ' + score);
                updateScore(difficulty_level);
            }
        }
    });
}

// Update the high score if the current score is greater than the high score
function updateScore(difficulty_level) {
    if (difficulty_level === EASY) {
        if (score > easyModeScore) {
            easyModeScore = score;
            localStorage.setItem("easyHighScore", easyModeScore);
        }
    } else if (difficulty_level === IMPOSSIBLE) {
        if (score > impossibleModeScore) {
            impossibleModeScore = score;
            localStorage.setItem("impossibleHighScore", impossibleModeScore);
        }
    } else if (difficulty_level === PROGRESSIVE) {
        if (score > progressiveHighScore) {
            progressiveHighScore = score;
            localStorage.setItem("progressiveHighScore", progressiveHighScore);
        }
    }
}

function loadGame() {
    if (difficulty_level === EASY) {
        easyModeScore = localStorage.getItem("easyHighScore") || 0;
    } else if (difficulty_level === IMPOSSIBLE) {
        impossibleModeScore = localStorage.getItem("impossibleHighScore") || 0;
    } else if (difficulty_level === PROGRESSIVE) {
        progressiveHighScore = localStorage.getItem("progressiveHighScore") || 0;
    }
}

function gameOver(scene) {
    scene.physics.pause();
    isGameOver = true; // Add this line

    let highScore;
    if (difficulty_level === EASY) {
        highScore = easyModeScore;
    } else if (difficulty_level === IMPOSSIBLE) {
        highScore = impossibleModeScore;
    } else if (difficulty_level === PROGRESSIVE) {
        highScore = progressiveHighScore;
    }

    // Create a pop-up window using a graphics object
    const popup = scene.add.graphics();
    popup.fillStyle(0xCCCCCC, 0.8);
    popup.fillRect(150, 70, 500, 300);
    popup.lineStyle(3, 0x000000, 1);
    popup.strokeRect(150, 70, 500, 300);
    popup.setDepth(100); // Set the depth of the pop-up window

    // Display the messages with a higher depth value
    scene.add.text(275, 100, 'Game Over', { fontSize: '48px', fill: 'black' }).setDepth(101);
    scene.add.text(310, 180, 'Your Score: ' + score, { fontSize: '25px', fill: 'black' }).setDepth(101);
    scene.add.text(310, 230, 'High Score: ' + highScore, { fontSize: '25px', fill: 'black' }).setDepth(101);

    // Add buttons for Easy, Impossible, and Progressive levels
    const progressiveButton = scene.add.text(200, 300, 'Progressive', { fontSize: '24px', fill: 'black', fontFamily: 'Arial' }).setDepth(101);
    const easyButton = scene.add.text(380, 300, 'Easy', { fontSize: '24px', fill: 'green', fontFamily: 'Arial' }).setDepth(101);
    const impossibleButton = scene.add.text(480, 300, 'Impossible', { fontSize: '24px', fill: 'red', fontFamily: 'Arial' }).setDepth(101);

    // Make buttons interactive
    progressiveButton.setInteractive();
    easyButton.setInteractive();
    impossibleButton.setInteractive();


    // Add event listeners for button clicks
    progressiveButton.on('pointerdown', () => {
        difficulty_level = PROGRESSIVE;
        restartGame(scene, popup, easyButton, impossibleButton, progressiveButton);
    });

    easyButton.on('pointerdown', () => {
        difficulty_level = EASY;
        restartGame(scene, popup, easyButton, impossibleButton, progressiveButton);
    });

    impossibleButton.on('pointerdown', () => {
        difficulty_level = IMPOSSIBLE;
        restartGame(scene, popup, easyButton, impossibleButton, progressiveButton);
    });


}

// New function to restart the game and remove elements
function restartGame(scene, popup, easyButton, impossibleButton, progressiveButton) {
    isGameOver = false; // Set gameOver back to false when restarting the game
    score = 0;

    // Remove the new game message and pop-up window
    popup.destroy();
    progressiveButton.destroy(); // Add this line
    easyButton.destroy();
    impossibleButton.destroy();


    scene.scene.restart();
}