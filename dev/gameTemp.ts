import { Level } from "./level.js";
import { Menu } from "./menu.js";

export class GameTemp {

    //toggle gameflow
    public play : boolean = false;
    public pause : boolean;
    //Menu
    private menu : Menu;

    //Level
    private level : Level;

    constructor(){
        this.menu = new Menu(this);
        this.pause = true;
    }

    public startGame(level : number){
        if(this.play){
            this.menu.div.remove();
            if(level == 1){
                console.log("1");
                this.level = new Level(this, level);
            } else if (level == 2){
                console.log("2");
                this.level = new Level(this, level);
            } else if (level == 3){
                console.log("3");
                this.level = new Level(this, level);
            }
            this.pause = false;
            this.level.startAndChange();
            this.gameLoop();
        }
    }

    public setMenu(){
        this.menu = new Menu(this);
    }

    public gameLoop(){
        if(this.play && !this.pause){
            this.level.update();
        }
        requestAnimationFrame(() => this.gameLoop());
    }
    
}
new GameTemp();
