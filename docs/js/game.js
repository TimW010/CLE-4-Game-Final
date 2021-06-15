import { Level } from "./level.js";
import { Menu } from "./menu.js";
export class Game {
    constructor() {
        this.count = 0;
        this.play = false;
        this.menu = new Menu(this);
    }
    startGame(level) {
        if (this.play) {
            this.menu.div.remove();
            if (level == 1) {
                console.log("1");
                this.levels = new Level(this, level);
                this.gameLoop();
            }
            else if (level == 2) {
                console.log("2");
                this.levels = new Level(this, level);
            }
            else if (level == 3) {
                console.log("3");
                this.levels = new Level(this, level);
            }
        }
    }
    gameLoop() {
        this.levels.player.update();
        this.levels.words.changeWord(this.count);
        this.levels.letters.changeLetters(this.count);
        this.levels.letters.update();
        requestAnimationFrame(() => this.gameLoop());
    }
}
new Game();
//# sourceMappingURL=game.js.map