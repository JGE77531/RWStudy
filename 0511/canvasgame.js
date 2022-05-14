var canvas = document.getElementById('game');
var context = canvas.getContext('2d');

//마우스로 클릭한 위치
var mouse_x;
var mouse_y;

class player{   
    constructor(x, y, radius, color){ //생성자
        this.pos_X = x; 
        this.pos_y = y;
        this.radius = radius;
        this.color = color;
    }

    draw(){
        context.beginPath();
        context.arc(this.pos_X, this.pos_y, this.radius, 0, 2*Math.PI);
        context.fillStyle = this.color;
        context.fill();
        context.closePath();
    }
}

class bullet{
    constructor(position_X, position_y, destination_x, destination_y, radius, color, speed){
        this.position_x=position_X;
        this.position_y=position_y;
    }
    this.destination_x = destination_x/(Math.sqrt(Math.pow(destination_x,2)+Math.pow));
    this.destination_y = destination_y/(Math.sqrt(Math.pow(destination_x,2)+Math.pow));
}

var fps = 60;
setInterval(render, 1000/fps) //60초마다 render함수 실행
var p = new player(100, 100, 30, 'pink');


function render(){
    context.clearRect(0,0,canvas.width, canvas.Height);
    p.draw();

    for(let bullet)
}


canvas.onclick = function clickArc(event){
    context.beginPath();
    mouse_x = event.clientX-context.canvas.offsetLeft;
    mouse_y = event.clientY-context.canvas.offsetTop;
    context.arc(mouse_x, mouse_y, 10, 0, 2*Math.PI);
    context.fillStyle = '#B2CCFF';
    context.fill();
    context.closePath();
}
