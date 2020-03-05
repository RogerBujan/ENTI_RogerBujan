export default class Ball {
    constructor({x, y, radious, canvas, onClick}){
        this.x = x;
        this.y = y;
        this.radious = radious;
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.onClick = onClick;
    }

    reset() {
        this.y = 0;
        this.x = Math.floor(Math.random() * this.canvas.width);
    }

    isOutsideBounds() {
        return this.y > this.canvas.height;
    }

    update() {
        this.y = this.y + 3;
    }

    render() {
        this.ctx.beginPath();
        this.ctx.arc(this.x, this.y, this.radious, 0, Math.PI * 2, true);
        this.ctx.closePath();
        this.ctx.fill();

        this.ctx.addHitRegion({ id: 'circle' });
        this.canvas.addEventListener('click', this.onClick);
    }

}