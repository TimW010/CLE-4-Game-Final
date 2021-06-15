import { Menu } from "./menu.js";
import { Words } from "./words.js";

export class Game {

    public play : boolean = false;
    private menu : Menu;
    private count : number = 0;
    private level_1_Words : string[] = ["K . T", ". . P", "P . P", "N . . T", "H . N D", "H . R T", "P . . S"];
    private level_1_Letters : string[] = ["A", "AA", "O", "OO", "O", "E", "OE"];

    constructor(){
        this.menu = new Menu(this);
    }

    public startGame(level : number){
        if(this.play){
            this.menu.div.remove();
            if(level == 1){
                console.log("1");
            } else if (level == 2){
                console.log("2");
            } else if (level == 3){
                console.log("3");
            }
        }
    }
}
new Game();