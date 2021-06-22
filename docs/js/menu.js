export class Menu {
    constructor(game) {
        this.game = game;
        this.create();
    }
    create() {
        this.div = document.createElement("menu");
        this.title = document.createElement("title");
        this.div.appendChild(this.title);
        this.playButton = document.createElement("playButton");
        this.playButton.classList.add("buttons");
        this.playButton.addEventListener('click', (e) => this.chooseLevel(e));
        this.div.appendChild(this.playButton);
        document.body.appendChild(this.div);
    }
    chooseLevel(e) {
        this.title.remove();
        this.playButton.remove();
        this.level1Button = document.createElement("level1Button");
        this.level1Button.classList.add("buttons");
        this.level1Button.addEventListener('click', (e) => this.play(e, 1));
        this.div.appendChild(this.level1Button);
        this.level2Button = document.createElement("level2Button");
        this.level2Button.classList.add("buttons");
        this.level2Button.addEventListener('click', (e) => this.play(e, 2));
        this.div.appendChild(this.level2Button);
        this.level3Button = document.createElement("level3Button");
        this.level3Button.classList.add("buttons");
        this.level3Button.addEventListener('click', (e) => this.play(e, 3));
        this.div.appendChild(this.level3Button);
    }
    play(e, level) {
        this.game.play = true;
        this.game.startGame(level);
    }
}
//# sourceMappingURL=menu.js.map