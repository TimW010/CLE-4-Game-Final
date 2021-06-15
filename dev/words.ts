export class Words {

    words : string[];

    constructor(array : string[]) {
        this.words = array;
    }

    public changeWord(count : number = 0){
        console.log(this.words[count]);
    }

}