document.addEventListener("keydown", keydown, false);

var canvas = document.getElementById('game');
var context = canvas.getContext('2d');

//마우스로 클릭한 위치
var mouse_x;
var mouse_y;

//플레이어 위치
var Player_x = 320;
var Player_y = 240;

//플레이어 이동 속도
var move_x = 5;
var move_y = 5;

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
    pos_X += move_x;
    pos_y += move_y;
}

function keydown(){
    //눌러진 key의 코드값
    keycode=event.keyCode;
    switch(keycode){
        case 37: this.pos_X -= move_x; 
            break; //좌
        case 38: this.pos_y += move_y;
            break; //상
        case 39: this.pos_X += move_x; 
            break; //우
        case 40: this.pos_y -= move_x;
            break; //하
    }
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