export class Letters {

    private x : number;
    private y : number;

    private letter : HTMLElement;

    private _isGoodLetter: boolean;

    public get isGoodLetter(): boolean {
        return this._isGoodLetter;
    }

    private letters : string[];

    //private synth = window.speechSynthesis;

    constructor(letters : string[], isGoodLetter : boolean){

        this.letters = letters;
        this._isGoodLetter = isGoodLetter;
        this.create();
    }

    public getBoundingRectangle() : DOMRect {
        return this.letter.getBoundingClientRect();
    }

    private create(){
        this.letter = document.createElement("letter");
        document.body.appendChild(this.letter);
        this.setPosition();
    }

    public setPosition(){
        this.x = Math.floor(Math.random() * (window.innerWidth - this.letter.clientWidth));
        this.y = (0 - this.letter.clientHeight);
    }

    public clear(){
        this.letter.remove();
    }

    public changeLetters(count : number){
        this.letter.innerHTML = this.letters[count];
    }

    public update(speed : number){
        this.y += speed;
        this.letter.style.transform = `translate(${this.x}px, ${this.y}px)`;
        if(this.y - this.letter.clientHeight > window.innerHeight){
            this.setPosition();
        }
    }

    /*private checkCollision(a: ClientRect, b: ClientRect) : boolean {
        return (a.left <= b.right &&
            a.left <= b.right &&
            a.top <= b.bottom &&
            b.top <= a.bottom)
    }*/
}