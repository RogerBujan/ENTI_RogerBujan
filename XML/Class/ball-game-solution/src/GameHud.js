export default class GameHud {
    constructor({
        x,
        y,
        font, 
        fillStyle, 
        textAlign, 
        text,
        canvas
    }) {
        this.font = font;
        this.textAlign = textAlign;
        this.fillStyle = fillStyle;
        this.text = text;
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.score = 0;
        this.position = {x, y}

    }

    incrementScore () {
        this.score++;
    }

    render(){   
        this.ctx.font = this.font;
        this.ctx.fillStyle = this.fillStyle;
        this.ctx.textAlign = this.textAlign;
        this.ctx.fillText(`${this.text} ${this.score}`, this.position.x, this.position.y);
    }
}
