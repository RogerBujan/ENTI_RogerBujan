class GameOver {
    constructor({font,fillStyle,textAlign,text,canvas}){
        this.font = font;
        this.fillStyle = fillStyle;
        this.textAlign = textAlign;
        this.text = text;
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
    }
    render(){
        this.ctx.font = this.font;
        this.ctx.fillStyle = this.fillStyle;
        this.ctx.textAlign = this.textAlign;
        this.ctx.fillText(this.text, canvas.width / 2, canvas.height / 2);
    }
}

export default GameOver;
