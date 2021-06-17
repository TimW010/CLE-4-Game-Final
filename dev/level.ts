//import { Game } from "./game.js";
import { GameTemp } from "./gameTemp.js";
import { Words } from "./words.js";
import { Player } from "./player.js";
import { Letter } from "./letter.js";
import { Letters } from "./letters.js";

export class Level {

    //level 1
    private level_1_Words : string[] = ["k . t", ". . p", "p . p", "n . . t", "h . n d", "h . r t", "p . . s"];
    private level_1_Letters : string[] = ["a", "aa", "o", "oo", "o", "e", "oe"];
    private level_1_CompletedWords : string[] = ["kat", "aap", "pop", "noot", "hond", "hert", "poes"];
    private level_1_wrongLetters : string[] = ["aa", "a", "ou", "o", "oo", "ee", "ou"];

    //level 2
    private level_2_Words : string[] = ["m a .", "m . . s", "b . . m", "l e e . w", "s n . . .  w", "s . a a p", "s t r . n d"];
    private level_2_Letters : string[] = ["t", "ui", "oo", "u", "eeu", "ch", "a"];
    private level_2_CompletedWords : string[] = ["mat", "muis", "boom", "leeuw", "sneeuw", "schaap", "strand"];
    private level_2_wrongLetters : string[] =["d", "eu", "ou", "i", "uee", "g", "aa"];

    //level 3
    private level_3_Words : string[] = [];
    private level_3_Letters : string[] = [];
    private level_3_CompletedWords : string[] = [];
    private level_3_wrongLetters : string[] = [];

    private speed : number;
    private count : number = 0;


    public pause : boolean = false;
    //public letters : Letter;
    public letters : Letters[] = [];
    public player : Player;
    public words : Words;
    public div : HTMLElement;
    private level : number;
    private game : GameTemp // game : Game

    constructor(game : GameTemp, level : number){ // game : Game
        this.game = game;
        this.level = level;
        this.create();
    }

    public goToMenu(){
        this.words.clear();
        for(let letter of this.letters){
            letter.clear();
        }
        this.player.clear();
        this.div.remove();
    }

    private create(){
        if (this.level == 1){
            this.div = document.createElement("level_1");
            document.body.appendChild(this.div);
            this.words = new Words(this.level_1_Words, this.level_1_CompletedWords);
            //this.letters = new Letter(4, this.level_1_Letters, this.level_1_wrongLetters);
            this.letters.push(new Letters(this.level_1_Letters, true));
            this.letters.push(new Letters(this.level_1_wrongLetters, false));
            this.speed = 4;
            this.player = new Player();
        } else if (this.level == 2){
            this.div = document.createElement("level_2");
            document.body.appendChild(this.div);
            this.words = new Words(this.level_2_Words, this.level_2_CompletedWords);
            //this.letters = new Letter(5, this.level_2_Letters, this.level_2_wrongLetters);
            this.player = new Player();
        } else if (this.level == 3){
            this.div = document.createElement("level_3");
            document.body.appendChild(this.div);
            this.words = new Words(this.level_3_Words, this.level_3_CompletedWords);
            //this.letters = new Letter(6, this.level_3_Letters, this.level_3_wrongLetters);
            this.player = new Player();
        }
    }

    public startAndChange(){
        this.words.changeWord(this.count);
        for(let letter of this.letters){
            letter.changeLetters(this.count)
        }
        if(this.count > 6){
            this.count = 0;
            this.game.pause = true;
            this.goToMenu();
        }
    }

    private handleTimeout(){
        this.game.pause = false;
        this.count++;
        for(let letter of this.letters){
            letter.setPosition();
        }
        this.startAndChange();
    }

    public update(){
        this.player.update();
        for(let letter of this.letters){
            letter.update(this.speed);
            if(this.checkCollision(this.player.getBoundingRectangle(), letter.getBoundingRectangle()) && letter.isGoodLetter){
                console.log("collision");
                setTimeout(() => this.handleTimeout(), 2000)
                this.game.pause = true;
                this.words.showCorrectWord(this.count);
            }
        }
    }

    private checkCollision(player: ClientRect, object: ClientRect) : boolean {
        return (player.left <= object.right &&
            object.left <= player.right &&
            player.top <= object.bottom &&
            object.top <= player.bottom)
    }

}