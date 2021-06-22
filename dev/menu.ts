import { Game } from "./game.js";

export class Menu {

    private level3Button : HTMLElement;
    private level2Button : HTMLElement;
    private level1Button : HTMLElement;
    private playButton : HTMLElement;
    private title : HTMLElement;
    public div : HTMLElement;
    private game : Game;

    constructor(game : Game){
        this.game = game;
        this.create();
    }

    private create() : void {
        //create menu
        this.div = document.createElement("menu");
        //this.div.classList.add('menu');
        //create title on menu
        this.title = document.createElement("title");
        //this.title.innerText = "Letter Regen";
        this.div.appendChild(this.title);
        //create playButton on menu
        this.playButton = document.createElement("playButton");
        this.playButton.classList.add("buttons");
        //this.playButton.innerText = "Speel";
        this.playButton.addEventListener('click', (e: MouseEvent) => this.chooseLevel(e));
        this.div.appendChild(this.playButton);
        document.body.appendChild(this.div);        
    }

    private chooseLevel(e: MouseEvent){
        this.title.remove();
        this.playButton.remove();

        //Show Levels

        //Level 1 selector
        this.level1Button = document.createElement("level1Button");
        this.level1Button.classList.add("buttons");
        //this.level1Button.innerText = "Level 1";
        this.level1Button.addEventListener('click', (e: MouseEvent) => this.play(e, 1));
        this.div.appendChild(this.level1Button);

        //level 2 selector
        this.level2Button = document.createElement("level2Button");
        this.level2Button.classList.add("buttons");
        //this.level2Button.innerText = "Level 2";
        this.level2Button.addEventListener('click', (e: MouseEvent) => this.play(e, 2));
        this.div.appendChild(this.level2Button);

        //level 3 selector
        this.level3Button = document.createElement("level3Button");
        this.level3Button.classList.add("buttons");
        //this.level3Button.innerText = "Level 3";
        this.level3Button.addEventListener('click', (e: MouseEvent) => this.play(e, 3));
        this.div.appendChild(this.level3Button);
    }

    private play(e: MouseEvent, level: number){
        this.game.play = true;
        this.game.startGame(level);
    }

}