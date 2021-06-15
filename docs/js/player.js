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
    getBoundingRectangle() {
        return this.div.getBoundingClientRect();
    }
    update() {
        this.div.style.transform = `translate(${this.x}px, ${this.y}px)`;
        this.x += this.horizontalSpeed;
        if (this.x > (window.innerWidth - this.div.clientWidth)) {
            this.x = (window.innerWidth - this.div.clientWidth);
        }
        if (this.x < 0) {
            this.x = 0;
        }
    }
    onKeyDown(e) {
        switch (e.key) {
            case "a":
                this.horizontalSpeed = -10;
                break;
            case "d":
                this.horizontalSpeed = 10;
                break;
            case "ArrowLeft":
                this.horizontalSpeed = -10;
                break;
            case "ArrowRight":
                this.horizontalSpeed = 10;
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