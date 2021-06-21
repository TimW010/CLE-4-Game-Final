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
        this.goodLetter.style.transform = `translate(${this.xPosGood}px, ${this.y}px)`;
        this.wrongLetter.style.transform = `translate(${this.xPosWrong}px, ${this.y}px)`;
        if (this.y - this.goodLetter.clientHeight > window.innerHeight) {
            this.setPosition();
        }
    }
    setPosition() {
        this.y = (0 - this.goodLetter.clientHeight);
        let random = Math.floor(Math.random() * (8 - 0) + 1);
        console.log(random);
        if (random > 4) {
            this.xPosGood = Math.floor(Math.random() * ((window.innerWidth / 2) - this.goodLetter.clientWidth));
            this.xPosWrong = Math.floor(Math.random() * ((window.innerWidth - this.wrongLetter.clientWidth) - (window.innerWidth / 2)) + ((window.innerWidth / 2) - this.wrongLetter.clientWidth));
        }
        else {
            this.xPosWrong = Math.floor(Math.random() * ((window.innerWidth / 2) - this.wrongLetter.clientWidth));
            this.xPosGood = Math.floor(Math.random() * ((window.innerWidth - this.goodLetter.clientWidth) - (window.innerWidth / 2)) + ((window.innerWidth / 2) - this.goodLetter.clientWidth));
        }
    }
}
//# sourceMappingURL=letter.js.map