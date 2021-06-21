export class Player {

    private x : number;
    private y : number;
    private div : HTMLElement;
    private horizontalSpeed : number = 0;

    constructor(){

        this.div = document.createElement("player");
        document.body.appendChild(this.div);
        window.addEventListener("keydown", (e: KeyboardEvent) => this.onKeyDown(e));
        window.addEventListener("keyup", (e: KeyboardEvent) => this.onKeyUp(e));

        this.x = ((window.innerWidth / 2) - (this.div.clientWidth / 2));
        this.y = ((window.innerHeight) - (this.div.clientHeight));

    }

    public clear(){
        this.div.remove();
        // this.horizontalSpeed = 0;
    }

    public getBoundingRectangle() : DOMRect {
        return this.div.getBoundingClientRect()
    }

    public update() : void {
        this.x += this.horizontalSpeed;
        //console.log("horizontal speed", this.horizontalSpeed);
        
        
        if(this.x > (window.innerWidth - this.div.clientWidth)){
            this.x = (window.innerWidth - this.div.clientWidth);
        }
        if(this.x < 0){
            this.x = 0;
        }
        this.div.style.transform = `translate(${this.x}px, ${this.y}px)`;
    }

    private onKeyDown(e: KeyboardEvent) : void {
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

    private onKeyUp(e: KeyboardEvent) : void {
        if(e.key == "a" || e.key == "d") {
            this.horizontalSpeed = 0;
        } else if(e.key == "ArrowLeft" || e.key == "ArrowRight") {
            this.horizontalSpeed = 0;
        }
    }
}