import { Menu } from "./menu.js";
export class Game {
    constructor() {
        this.play = false;
        this.count = 0;
        this.level_1_Words = ["K . T", ". . P", "P . P", "N . . T", "H . N D", "H . R T", "P . . S"];
        this.level_1_Letters = ["A", "AA", "O", "OO", "O", "E", "OE"];
        this.menu = new Menu(this);
    }
    startGame(level) {
        if (this.play) {
            this.menu.div.remove();
            if (level == 1) {
                console.log("1");
            }
            else if (level == 2) {
                console.log("2");
            }
            else if (level == 3) {
                console.log("3");
            }
        }
    }
}
new Game();
//# sourceMappingURL=game.js.map