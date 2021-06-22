import { Game } from "./game.js";
import { Words } from "./words.js";
import { Player } from "./player.js";
import { Letter } from "./letter.js";

export class Level {
    
    //level 1
    //thuis
    private level_1_Words : string[] = ["k . t", "b . l", "p . p", "b e .", "h o n .", "p . . s", "n . . t", "b a n ."];
    private level_1_Letters : string[] = ["a", "a", "o", "d", "d", "oe", "oo", "k"];
    public level_1_CompletedWords : string[] = ["kat", "bal", "pop", "bed", "hond", "poes", "noot", "bank"];
    private level_1_wrongLetters : string[] =["aa", "aa", "oh", "t", "t", "ou", "o", "gk"];
    
    //level 2
    //dierentuin
    private level_2_Words : string[] = [". . p", "b . . r", "l . m a", "w o l .", "p a n d .", "l . . u w", "t . . g e r", "g . r a f"];
    private level_2_Letters : string[] = ["aa", "ee", "a", "f", "a", "ee", "ij", "i"];
    private level_2_CompletedWords : string[] = ["aap", "beer", "lama", "wolf", "panda", "leeuw", "tijger", "giraf"];
    private level_2_wrongLetters : string[] = ["a", "i", "aa", "v", "aa", "ie", "ei", "ie"];
    
    //level 3
    //bos
    private level_3_Words : string[] = [". o s", "b . . m", "h . r t", "s t r . . k", "a . . e l", ". o g e l", "k o n . . n", "e e k h . . r n"];
    private level_3_Letters : string[] = ["v", "oo", "e", "ui", "pp", "v", "ij", "oo"];
    private level_3_CompletedWords : string[] = ["vos", "boom", "hert", "struik", "appel", "vogel", "konijn", "eekhoorn"];
    private level_3_wrongLetters : string[] = ["f", "o", "ee", "eu", "hp", "f", "ei", "o"];
    
    private pauseButton : HTMLElement;
    private levelObjects : string[];
    private levelObjectDiv : HTMLElement;
    private synth = window.speechSynthesis;
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

    public addObject(count : number){
        this.levelObjectDiv = document.createElement(this.levelObjects[count]);
        this.div.appendChild(this.levelObjectDiv);
    }

    public speak(tekst : string){
        let utterThis = new SpeechSynthesisUtterance(tekst);
        utterThis.lang = "nl-NL";
        this.synth.speak(utterThis);
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
            this.levelObjects = this.level_1_CompletedWords;
            this.player = new Player();
        } else if (this.level == 2){
            this.div = document.createElement("level_2");
            document.body.appendChild(this.div);
            this.words = new Words(this.level_2_Words, this.level_2_CompletedWords);
            this.letters = new Letter(5, this.level_2_Letters, this.level_2_wrongLetters);
            this.levelObjects = this.level_2_CompletedWords;
            this.player = new Player();
        } else if (this.level == 3){
            this.div = document.createElement("level_3");
            document.body.appendChild(this.div);
            this.words = new Words(this.level_3_Words, this.level_3_CompletedWords);
            this.letters = new Letter(6, this.level_3_Letters, this.level_3_wrongLetters);
            this.levelObjects = this.level_3_CompletedWords;
            this.player = new Player();
        }
        this.pauseButton = document.createElement("pauseButton");
        this.pauseButton.addEventListener('click', (e: MouseEvent) => this.pauseGame(e));
        this.pauseButton.addEventListener('mouseover', (e: MouseEvent) => this.pauseButtonHover(e))
        this.pauseButton.addEventListener('mouseout', (e: MouseEvent) => this.pauseButtonHover(e))
        this.pauseButton.style.backgroundImage = "url('././images/pauseButton1.png')";
        this.div.appendChild(this.pauseButton);
    }

    private pauseButtonHover(e : MouseEvent){
        /*if(onHover){
            this.pauseButton.style.backgroundImage = "url('././images/pauseButton2.png')";
        } else {
            this.pauseButton.style.backgroundImage = "url('././images/pauseButton1.png')";
        }*/
        this.pauseButton.style.cursor = "pointer";
    }

    private pauseGame(e: MouseEvent){
        this.game.pause = !this.game.pause;
        if(this.game.pause){
            this.pauseButton.style.backgroundImage = "url('././images/pauseButton3.png')";
            this.speak("even pauzeren");
        } else {
            this.pauseButton.style.backgroundImage = "url('././images/pauseButton1.png')";
            this.speak("weer verder");
        }
    }

}