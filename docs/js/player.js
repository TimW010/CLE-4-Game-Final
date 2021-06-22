export class Player {
    constructor() {
        this.horizontalSpeed = 0;
        this.div = document.createElement("player");
        document.body.appendChild(this.div);
        window.addEventListener("keydown", (e) => this.onKeyDown(e));
        window.addEventListener("keyup", (e) => this.onKeyUp(e));
        this.x = ((window.innerWidth / 2) - (this.div.clientWidth / 2));
        this.y = ((window.innerHeight) - (this.div.clientHeight));
    }
    clear() {
        this.div.remove();
    }
    getBoundingRectangle() {
        return this.div.getBoundingClientRect();
    }
    update() {
        this.x += this.horizontalSpeed;
        if (this.x > (window.innerWidth - this.div.clientWidth)) {
            this.x = (window.innerWidth - this.div.clientWidth);
        }
        if (this.x < 0) {
            this.x = 0;
        }
        this.div.style.transform = `translate(${this.x}px, ${this.y}px)`;
    }
    onKeyDown(e) {
        switch (e.key) {
            case "a":
                this.horizontalSpeed = -10;
                this.div.style.backgroundImage = "url('././images/left.png')";
                break;
            case "d":
                this.horizontalSpeed = 10;
                this.div.style.backgroundImage = "url('././images/right.png')";
                break;
            case "ArrowLeft":
                this.horizontalSpeed = -10;
                this.div.style.backgroundImage = "url('././images/left.png')";
                break;
            case "ArrowRight":
                this.horizontalSpeed = 10;
                this.div.style.backgroundImage = "url('././images/right.png')";
                break;
        }
    }
    onKeyUp(e) {
        if (e.key == "a" || e.key == "d") {
            this.horizontalSpeed = 0;
        }
        else if (e.key == "ArrowLeft" || e.key == "ArrowRight") {
            this.horizontalSpeed = 0;
        }
    }
}
//# sourceMappingURL=player.js.map