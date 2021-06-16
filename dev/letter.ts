export class Letter {

    private xPosGood : number;
    private y : number;
    private xPosWrong : number;

    private speed : number;

    private goodLetter : HTMLElement;
    private wrongLetter : HTMLElement;

    private goodLetters : string[];
    private wrongLetters : string[];

    constructor(speed : number, good : string[], wrong : string[]){
        this.speed = speed;
        console.log(this.speed);
        this.goodLetters = good;
        this.wrongLetters = wrong;
        this.create();
    }

    public clear(){
        this.goodLetter.remove();
        this.wrongLetter.remove();
    }

    private create(){
        this.goodLetter = document.createElement("goodLetter");
        this.wrongLetter = document.createElement("wrongLetter");
        document.body.appendChild(this.goodLetter);
        document.body.appendChild(this.wrongLetter);
        this.setPosition();
    }

    public getBoundingRectangle() : DOMRect {
        return this.goodLetter.getBoundingClientRect()
    }

    public changeLetters(count : number){
        this.goodLetter.innerHTML = this.goodLetters[count];
        this.wrongLetter.innerHTML = this.wrongLetters[count];
    }

    public update(){
        this.y += this.speed;
        console.log("y", this.y);
        this.goodLetter.style.transform = `translate(${this.xPosGood}px, ${this.y}px)`;
        this.wrongLetter.style.transform = `translate(${this.xPosWrong}px, ${this.y}px)`;

        if(this.y - this.goodLetter.clientHeight > window.innerHeight){
            this.setPosition();
        }
    }

    public setPosition(){
        this.xPosGood = Math.floor(Math.random() * (window.innerWidth - this.goodLetter.clientWidth));
        this.y = (0 - this.goodLetter.clientHeight);
        this.xPosWrong = Math.floor(Math.random() * (window.innerWidth - this.wrongLetter.clientWidth));
    }

}