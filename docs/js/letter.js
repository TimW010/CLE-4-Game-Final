export class Letter {
    constructor(speed, good, wrong) {
        this.speed = speed;
        console.log(this.speed);
        this.goodLetters = good;
        this.wrongLetters = wrong;
        this.create();
    }
    clear() {
        this.goodLetter.remove();
        this.wrongLetter.remove();
    }
    create() {
        this.goodLetter = document.createElement("goodLetter");
        this.wrongLetter = document.createElement("wrongLetter");
        document.body.appendChild(this.goodLetter);
        document.body.appendChild(this.wrongLetter);
        this.setPosition();
    }
    getBoundingRectangle() {
        return this.goodLetter.getBoundingClientRect();
    }
    changeLetters(count) {
        this.goodLetter.innerHTML = this.goodLetters[count];
        this.wrongLetter.innerHTML = this.wrongLetters[count];
    }
    update() {
        this.y += this.speed;
        console.log("y", this.y);
        this.goodLetter.style.transform = `translate(${this.xPosGood}px, ${this.y}px)`;
        this.wrongLetter.style.transform = `translate(${this.xPosWrong}px, ${this.y}px)`;
        if (this.y - this.goodLetter.clientHeight > window.innerHeight) {
            this.setPosition();
        }
    }
    setPosition() {
        this.xPosGood = Math.floor(Math.random() * (window.innerWidth - this.goodLetter.clientWidth));
        this.y = (0 - this.goodLetter.clientHeight);
        this.xPosWrong = Math.floor(Math.random() * (window.innerWidth - this.wrongLetter.clientWidth));
    }
}
//# sourceMappingURL=letter.js.map