import { Level } from "./level.js";
import { Menu } from "./menu.js";
export class Game {
    constructor() {
        this.pause = false;
        this.count = 0;
        this.play = false;
        this.menu = new Menu(this);
        this.gameLoop();
        this.pause = true;
    }
    startGame(level) {
        if (this.play) {
            this.menu.div.remove();
            if (level == 1) {
                console.log("1");
                this.levels = new Level(this, level);
            }
            else if (level == 2) {
                console.log("2");
                this.levels = new Level(this, level);
            }
            else if (level == 3) {
                console.log("3");
                this.levels = new Level(this, level);
            }
            this.pause = false;
        }
    }
    handleTimeout() {
        this.pause = false;
        this.count++;
        this.levels.letters.setPosition();
        this.levels.words.speak(this.count);
    }
    gameLoop() {
        if (!this.pause && this.levels) {
            this.levels.player.update();
            this.levels.letters.update();
            this.levels.words.changeWord(this.count);
            this.levels.letters.changeLetters(this.count);
            if (this.checkCollision(this.levels.player.getBoundingRectangle(), this.levels.letters.getBoundingRectangle())) {
                console.log("collision");
                setTimeout(() => this.handleTimeout(), 2000);
                this.pause = true;
                this.levels.words.showCorrectWord(this.count);
            }
            if (this.count > 7) {
                this.count = 0;
                this.levels.goToMenu();
                this.menu = new Menu(this);
                this.pause = true;
            }
        }
        requestAnimationFrame(() => this.gameLoop());
    }
    checkCollision(player, object) {
        return (player.left <= object.right &&
            object.left <= player.right &&
            player.top <= object.bottom &&
            object.top <= player.bottom);
    }
}
new Game();
//# sourceMappingURL=game.js.map