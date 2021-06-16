export class Words {
    constructor(array, correct) {
        this.words = array;
        this.correctWords = correct;
        this.create();
    }
    clear() {
        this.word.remove();
    }
    create() {
        this.word = document.createElement("word");
        document.body.appendChild(this.word);
        this.setPosition();
    }
    setPosition() {
        this.y = (0 + this.word.clientHeight);
        this.x = ((window.innerWidth / 2) - (this.word.clientWidth / 2));
        this.word.style.transform = `translate(${this.x}px, ${this.y}px)`;
    }
    changeWord(count) {
        this.word.innerHTML = this.words[count];
    }
    showCorrectWord(count) {
        this.word.innerHTML = this.correctWords[count];
    }
}
//# sourceMappingURL=words.js.map