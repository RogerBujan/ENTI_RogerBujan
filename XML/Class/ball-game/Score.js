class Score {
    constructor({font,fillStyle,textAlign,text,canvas}){
        this.font = font;
        this.fillStyle = fillStyle;
        this.textAlign = textAlign;
        this.text = text;
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.score = 0;
    }

    render(){
        this.ctx.font = this.font;
        this.ctx.fillStyle = this.fillStyle;
        this.ctx.textAlign = this.textAlign;
        this.ctx.fillText(`${this.text} ${this.score}`, 10, 10);
    }

    incrementScore(){
        this.score++;
    }
}

export default Score;