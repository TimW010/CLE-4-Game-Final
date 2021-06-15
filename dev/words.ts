export class Words {

    private x : number;
    private y : number;
    private word : HTMLElement;
    private correctWords : string[];
    private words : string[];

    constructor(array : string[], correct : string[]){
        this.words = array;
        this.correctWords = correct;
        this.create();
    }

    private create(){
        this.word = document.createElement("word");
        document.body.appendChild(this.word);
        this.setPosition();
    }

    private setPosition(){
        this.y = (0 + this.word.clientHeight);
        this.x = ((window.innerWidth / 2) - (this.word.clientWidth / 2));
        this.word.style.transform = `translate(${this.x}px, ${this.y}px)`;
    }

    public changeWord(count : number){
        this.word.innerHTML = this.words[count];
    }

    public showCorrectWord(count : number){
        this.word.innerHTML = this.correctWords[count];
    }
}