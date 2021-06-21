export class Menu {
    constructor(game) {
        this.game = game;
        this.create();
    }
    create() {
        this.div = document.createElement("menu");
        this.div.classList.add('menu');
        this.title = document.createElement("h1");
        this.title.innerText = "Letter Regen";
        this.div.appendChild(this.title);
        this.playButton = document.createElement("div");
        this.playButton.innerText = "Speel";
        this.playButton.addEventListener('click', (e) => this.chooseLevel(e));
        this.div.appendChild(this.playButton);
        document.body.appendChild(this.div);
    }
    chooseLevel(e) {
        this.playButton.remove();
        this.level1Button = document.createElement("div");
        this.level1Button.innerText = "Level 1";
        this.level1Button.addEventListener('click', (e) => this.play(e, 1));
        this.div.appendChild(this.level1Button);
        this.level2Button = document.createElement("div");
        this.level2Button.innerText = "Level 2";
        this.level2Button.addEventListener('click', (e) => this.play(e, 2));
        this.div.appendChild(this.level2Button);
        this.level3Button = document.createElement("div");
        this.level3Button.innerText = "Level 3";
        this.level3Button.addEventListener('click', (e) => this.play(e, 3));
        this.div.appendChild(this.level3Button);
    }
    play(e, level) {
        this.game.play = true;
        this.game.startGame(level);
    }
}
//# sourceMappingURL=menu.js.map