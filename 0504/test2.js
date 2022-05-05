var canvas = document.getElementById('game');
var context = canvas.getContext('2d');

var mouse_x;
var mouse_y;

//플레이어 위치
var Player_x = 320;
var Player_y = 240;

//플레이어 이동 속도
var M_x = 5;
var M_y = 6;

//눌린 키 확인하는 변수
var keycode;


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
    }
}

function Player_Move(){
    pos_X += M_x;
    pos_y += M_y;
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

var p = new player(100, 100, 30, 'pink');
p.draw();