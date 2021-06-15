import { Words } from "./words.js";
import { Player } from "./player.js";
import { Letter } from "./letter.js";
export class Level {
    constructor(game, level) {
        this.level_1_Words = ["K . T", ". . P", "P . P", "N . . T", "H . N D", "H . R T", "P . . S"];
        this.level_1_Letters = ["A", "AA", "O", "OO", "O", "E", "OE"];
        this.level_1_CompletedWords = ["KAT", "AAP", "POP", "NOOT", "HOND", "HERT", "POES"];
        this.level_1_wrongLetters = ["AA", "A", "OE", "O", "OO", "EE", "OU"];
        this.level_2_Words = ["test"];
        this.level_2_Letters = ["t"];
        this.level_2_CompletedWords = ["test2"];
        this.level_2_wrongLetters = ["o"];
        this.level_3_Words = [];
        this.level_3_Letters = [];
        this.level_3_CompletedWords = [];
        this.level_3_wrongLetters = [];
        this.game = game;
        this.level = level;
        this.create();
    }
    create() {
        if (this.level == 1) {
            this.div = document.createElement("level_1");
            this.words = new Words(this.level_1_Words, this.level_1_CompletedWords);
            this.letters = new Letter(4, this.level_1_Letters, this.level_1_wrongLetters);
            this.player = new Player();
        }
        else if (this.level == 2) {
            this.div = document.createElement("level_2");
            this.words = new Words(this.level_2_Words, this.level_2_CompletedWords);
            this.letters = new Letter(5, this.level_2_Letters, this.level_2_wrongLetters);
            this.player = new Player();
        }
        else if (this.level == 3) {
            this.div = document.createElement("level_3");
            this.words = new Words(this.level_3_Words, this.level_3_CompletedWords);
            this.letters = new Letter(6, this.level_3_Letters, this.level_3_wrongLetters);
            this.player = new Player();
        }
    }
}
//# sourceMappingURL=level.js.map