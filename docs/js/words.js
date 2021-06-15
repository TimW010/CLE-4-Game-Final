export class Words {
    constructor(array) {
        this.words = array;
        this.create();
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
}
//# sourceMappingURL=words.js.map