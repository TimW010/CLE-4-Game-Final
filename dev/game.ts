import { Level } from "./level.js";
import { Menu } from "./menu.js";

export class Game {

    private count : number = 0;
    public play : boolean = false;
    private levels : Level;
    private menu : Menu;

    constructor(){
        this.menu = new Menu(this);
    }

    public startGame(level : number){
        if(this.play){
            this.menu.div.remove();
            if(level == 1){
                console.log("1");
                this.levels = new Level(this, level);
                this.gameLoop();
            } else if (level == 2){
                console.log("2");
                this.levels = new Level(this, level);
            } else if (level == 3){
                console.log("3");
                this.levels = new Level(this, level);
            }
        }
    }

    private gameLoop() : void {
        this.levels.player.update();
        this.levels.words.changeWord(this.count);
        this.levels.letters.changeLetters(this.count);
        this.levels.letters.update();
        requestAnimationFrame(() => this.gameLoop());
    }
}
new Game();