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
    private level_2_Words : string[] = ["M A .", "M . . S", "B . . M", "L E E . W", "S N . . .  W", "S . A A P", "S T R . N D"];
    private level_2_Letters : string[] = ["T", "UI", "OO", "U", "EEU", "CH", "A"];
    private level_2_CompletedWords : string[] = ["MAT", "MUIS", "BOOM", "LEEUW", "SNEEUW", "SCHAAP", "STRAND"];
    private level_2_wrongLetters : string[] =["D", "EU", "OU", "I", "UEE", "G", "AA"];

    //level 3
    private level_3_Words : string[] = [];
    private level_3_Letters : string[] = [];
    private level_3_CompletedWords : string[] = [];
    private level_3_wrongLetters : string[] = [];

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

    public goToMenu(){
        this.words.clear();
        this.letters.clear();
        this.player.clear();
        this.div.remove();
    }

    private create(){
        if (this.level == 1){
            this.div = document.createElement("level_1");
            document.body.appendChild(this.div);
            this.words = new Words(this.level_1_Words, this.level_1_CompletedWords);
            this.letters = new Letter(4, this.level_1_Letters, this.level_1_wrongLetters);
            this.player = new Player();
        } else if (this.level == 2){
            this.div = document.createElement("level_2");
            document.body.appendChild(this.div);
            this.words = new Words(this.level_2_Words, this.level_2_CompletedWords);
            this.letters = new Letter(5, this.level_2_Letters, this.level_2_wrongLetters);
            this.player = new Player();
        } else if (this.level == 3){
            this.div = document.createElement("level_3");
            document.body.appendChild(this.div);
            this.words = new Words(this.level_3_Words, this.level_3_CompletedWords);
            this.letters = new Letter(6, this.level_3_Letters, this.level_3_wrongLetters);
            this.player = new Player();
        }
    }

}