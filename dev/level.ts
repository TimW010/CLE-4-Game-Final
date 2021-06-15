import { Game } from "./game.js";
import { Words } from "./words.js";
import { Player } from "./player.js";
import { Letter } from "./letter.js";

export class Level {

    //level 1
    private level_1_Words : string[] = ["K . T", ". . P", "P . P", "N . . T", "H . N D", "H . R T", "P . . S"];
    private level_1_Letters : string[] = ["A", "AA", "O", "OO", "O", "E", "OE"];
    private level_1_CompletedWords : string[] = ["KAT", "AAP", "POP", "NOOT", "HOND", "HERT", "POES"];
    private level_1_wrongLetters : string[] = ["AA", "A", "OE", "O", "OO", "EE", "OU"];
    //level 2


    //level 3

    public letters : Letter;
    public player : Player;
    public words : Words;
    public div : HTMLElement;
    private level : number;
    private game : Game

    constructor(game : Game, level : number){
        this.game = game;
        this.level = level;
        this.create();
    }

    private create(){
        if (this.level == 1){
            this.div = document.createElement("level_1");
            this.words = new Words(this.level_1_Words);
            this.letters = new Letter(4, this.level_1_Letters, this.level_1_wrongLetters);
            this.player = new Player();
        } else if (this.level == 2){
            this.div = document.createElement("level_2");
        } else if (this.level == 3){
            this.div = document.createElement("level_3");
        }
    }

}