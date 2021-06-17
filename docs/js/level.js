import { Words } from "./words.js";
import { Player } from "./player.js";
import { Letters } from "./letters.js";
export class Level {
    constructor(game, level) {
        this.level_1_Words = ["k . t", ". . p", "p . p", "n . . t", "h . n d", "h . r t", "p . . s"];
        this.level_1_Letters = ["a", "aa", "o", "oo", "o", "e", "oe"];
        this.level_1_CompletedWords = ["kat", "aap", "pop", "noot", "hond", "hert", "poes"];
        this.level_1_wrongLetters = ["aa", "a", "ou", "o", "oo", "ee", "ou"];
        this.level_2_Words = ["m a .", "m . . s", "b . . m", "l e e . w", "s n . . .  w", "s . a a p", "s t r . n d"];
        this.level_2_Letters = ["t", "ui", "oo", "u", "eeu", "ch", "a"];
        this.level_2_CompletedWords = ["mat", "muis", "boom", "leeuw", "sneeuw", "schaap", "strand"];
        this.level_2_wrongLetters = ["d", "eu", "ou", "i", "uee", "g", "aa"];
        this.level_3_Words = [];
        this.level_3_Letters = [];
        this.level_3_CompletedWords = [];
        this.level_3_wrongLetters = [];
        this.pause = false;
        this.letters = [];
        this.game = game;
        this.level = level;
        this.create();
    }
    create() {
        if (this.level == 1) {
            this.div = document.createElement("level_1");
            document.body.appendChild(this.div);
            this.words = new Words(this.level_1_Words, this.level_1_CompletedWords);
            this.letters.push(new Letters(this.level_1_Letters, true));
            this.letters.push(new Letters(this.level_1_wrongLetters, false));
            this.speed = 4;
            this.player = new Player();
        }
        else if (this.level == 2) {
            this.div = document.createElement("level_2");
            document.body.appendChild(this.div);
            this.words = new Words(this.level_2_Words, this.level_2_CompletedWords);
            this.player = new Player();
        }
        else if (this.level == 3) {
            this.div = document.createElement("level_3");
            document.body.appendChild(this.div);
            this.words = new Words(this.level_3_Words, this.level_3_CompletedWords);
            this.player = new Player();
        }
    }
    update() {
        this.words.changeWord(0);
        this.player.update();
        for (let letter of this.letters) {
            letter.changeLetters(0);
            letter.update(this.speed);
            if (this.checkCollision(this.player.getBoundingRectangle(), letter.getBoundingRectangle()) && letter.isGoodLetter) {
                console.log("collision");
            }
        }
    }
    checkCollision(a, b) {
        return (a.left <= b.right &&
            a.left <= b.right &&
            a.top <= b.bottom &&
            b.top <= a.bottom);
    }
}
//# sourceMappingURL=level.js.map