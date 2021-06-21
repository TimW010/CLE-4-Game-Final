import { Words } from "./words.js";
import { Player } from "./player.js";
import { Letter } from "./letter.js";
export class Level {
    constructor(game, level) {
        this.level_1_Words = ["k . t", "b . l", "p . p", "b e .", "h . n d", "p . . s", "n . . t", "b a n ."];
        this.level_1_Letters = ["a", "a", "o", "d", "o", "oe", "oo", "k"];
        this.level_1_CompletedWords = ["kat", "bal", "pop", "bed", "hond", "poes", "noot", "bank"];
        this.level_1_wrongLetters = ["aa", "aa", "oh", "t", "oh", "ou", "o", "gk"];
        this.level_2_Words = [". . p", "b . . r", "l . m a", "w o l .", "p a n d .", "l . . u w", "t . . g e r", "g . r a f"];
        this.level_2_Letters = ["aa", "ee", "a", "f", "a", "ee", "ij", "i"];
        this.level_2_CompletedWords = ["aap", "beer", "lama", "wolf", "panda", "leeuw", "tijger", "giraf"];
        this.level_2_wrongLetters = ["a", "i", "aa", "v", "aa", "ie", "ei", "ie"];
        this.level_3_Words = [". o s", "b . . m", "h . r t", "s t r . . k", "a . . e l", ". o g e l", "k o n . . n", "e e k h . . r n"];
        this.level_3_Letters = ["v", "oo", "e", "ui", "pp", "v", "ij", "oo"];
        this.level_3_CompletedWords = ["vos", "boom", "hert", "struik", "appel", "vogel", "konijn", "eekhoorn"];
        this.level_3_wrongLetters = ["f", "o", "ee", "eu", "hp", "f", "ei", "o"];
        this.synth = window.speechSynthesis;
        this.game = game;
        this.level = level;
        this.create();
    }
    speak() {
        let utterThis = new SpeechSynthesisUtterance("Goed Gedaan");
        utterThis.lang = "nl-NL";
        this.synth.speak(utterThis);
    }
    goToMenu() {
        this.words.clear();
        this.letters.clear();
        this.player.clear();
        this.div.remove();
    }
    create() {
        if (this.level == 1) {
            this.div = document.createElement("level_1");
            document.body.appendChild(this.div);
            this.words = new Words(this.level_1_Words, this.level_1_CompletedWords);
            this.letters = new Letter(4, this.level_1_Letters, this.level_1_wrongLetters);
            this.player = new Player();
        }
        else if (this.level == 2) {
            this.div = document.createElement("level_2");
            document.body.appendChild(this.div);
            this.words = new Words(this.level_2_Words, this.level_2_CompletedWords);
            this.letters = new Letter(5, this.level_2_Letters, this.level_2_wrongLetters);
            this.player = new Player();
        }
        else if (this.level == 3) {
            this.div = document.createElement("level_3");
            document.body.appendChild(this.div);
            this.words = new Words(this.level_3_Words, this.level_3_CompletedWords);
            this.letters = new Letter(6, this.level_3_Letters, this.level_3_wrongLetters);
            this.player = new Player();
        }
    }
}
//# sourceMappingURL=level.js.map