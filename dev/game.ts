import { Level } from "./level.js";
import { Menu } from "./menu.js";

export class Game {

    private pause : boolean = false
    private count : number = 0;
    public play : boolean = false;
    private levels : Level;
    private menu : Menu;

    constructor(){
        this.menu = new Menu(this);
        this.gameLoop();
        this.pause = true;
    }

    public startGame(level : number){
        if(this.play){
            this.menu.div.remove();
            if(level == 1){
                console.log("1");
                this.levels = new Level(this, level);
            } else if (level == 2){
                console.log("2");
                this.levels = new Level(this, level);
            } else if (level == 3){
                console.log("3");
                this.levels = new Level(this, level);
            }
            this.pause = false;
        }
    }

    private handleTimeout(){
        this.pause = false;
        this.count++;
        this.levels.letters.setPosition();
    }

    private gameLoop() : void {
        if(!this.pause && this.levels){
            this.levels.player.update();
            this.levels.words.changeWord(this.count);
            this.levels.letters.changeLetters(this.count);
            this.levels.letters.update();
            if(this.checkCollision(this.levels.player.getBoundingRectangle(), this.levels.letters.getBoundingRectangle())){
                console.log("collision");
                this.levels.words.speak(this.count);
                setTimeout(() => this.handleTimeout(), 2000)
                this.pause = true;
                this.levels.words.showCorrectWord(this.count);
            }
            if(this.count > 6){
                this.count = 0;
                this.levels.goToMenu();
                this.menu = new Menu(this);
                this.pause = true;
            }
        }
        requestAnimationFrame(() => this.gameLoop());
    }

    private checkCollision(player: ClientRect, object: ClientRect) : boolean {
        return (player.left <= object.right &&
            object.left <= player.right &&
            player.top <= object.bottom &&
            object.top <= player.bottom)
    }
}
new Game();