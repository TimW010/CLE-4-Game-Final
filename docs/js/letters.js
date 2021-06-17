export class Letters {
    constructor(letters, isGoodLetter) {
        this.letters = letters;
        this._isGoodLetter = isGoodLetter;
        this.create();
    }
    get isGoodLetter() {
        return this._isGoodLetter;
    }
    getBoundingRectangle() {
        return this.letter.getBoundingClientRect();
    }
    create() {
        this.letter = document.createElement("letter");
        document.body.appendChild(this.letter);
        this.setPosition();
    }
    setPosition() {
        this.x = Math.floor(Math.random() * (window.innerWidth - this.letter.clientWidth));
        this.y = (0 - this.letter.clientHeight);
    }
    clear() {
        this.letter.remove();
    }
    changeLetters(count) {
        this.letter.innerHTML = this.letters[count];
    }
    update(speed) {
        this.y += speed;
        this.letter.style.transform = `translate(${this.x}px, ${this.y}px)`;
        if (this.y - this.letter.clientHeight > window.innerHeight) {
            this.setPosition();
        }
    }
}
//# sourceMappingURL=letters.js.map