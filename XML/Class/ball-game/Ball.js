class Ball{
    constructor({x, y, radious, canvas, onClick}){
        this.x = x;
        this.y = y;
        this.radious = radious;
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.onClick = onClick;
    }

    isOutside() {
        return this.y > this.canvas.height;
    }

    render(){
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radious, 0, Math.PI * 2, true);
        ctx.closePath();
        ctx.fill();

        ctx.addHitRegion({ id: 'circle' });
        canvas.addEventListener('click', onClick);
    }

    update(){
        this.y = this.y + 3;
    }

    resetPos(){
        y = 0;
        x = Math.floor(Math.random() * canvas.width);
    }
   
}

export default Ball;