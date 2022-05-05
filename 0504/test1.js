var canvas = document.getElementById('game');
var context = canvas.getContext('2d');

var x;
var y;


class player{
    constructor(x, y, radius, color){ //생성자
        this.pos_X = x; 
        this.pos_y = y;
        this.radius = radius;
        this.color = color;
    }

    draw(){
        context.arc(this.pos_X, this.pos_y, this.radius, 0, 2*Math.PI);
        context.fillStyle = this.color;
        context.fill();
    }
}

canvas.onclick = function clickArc(event){
    this.x = event.clientX-context.canvas.offsetLeft;
    this.y = event.clientY-context.canvas.offsetTop;
    context.arc(this.x,this.y,10, 0, 2*Math.PI);
    context.fill();
}

var p = new player(100, 100, 30, 'pink');
p.draw();