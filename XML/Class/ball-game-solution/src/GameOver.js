export default class GameOver {
    constructor({font, textAlign, fillStyle, text, canvas}) {
        this.font = font;
        this.textAlign = textAlign;
        this.fillStyle = fillStyle;
        this.text = text;
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');

    }
    render(){
        this.ctx.font = this.font;
        this.ctx.fillStyle = this.fillStyle
        this.ctx.textAlign = this.textAlign;
        this.ctx.fillText(this.text, this.canvas.width / 2, this.canvas.height / 2);
    }
}
