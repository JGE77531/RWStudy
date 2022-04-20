var button_reset = document.getElementById("button_reset");

var b1 = document.getElementsByClassName("box")[0];
var b2 = document.getElementsByClassName("box")[1];
var b3 = document.getElementsByClassName("box")[2];

var f = document.getElementById("f_text");
var s = document.getElementById("s_text");
var th = document.getElementById("th_text");

var mouseCount=0;

var arr = []; //배열(하노이의탑)을만들음
    arr.push("🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥");
    arr.push("🟨🟨🟨🟨🟨🟨🟨🟨🟨");
    arr.push("🟩🟩🟩🟩🟩🟩🟩🟩");
    arr.push("🟦🟦🟦🟦🟦");
    arr.push("🟪🟪🟪");
    arr.push("⬛");

//console.log(arr.pop()); //마지막에 입력된거를 리턴함
//console.log(arr.shift());


function init(){
    f =  new Array();
    f = document.getElementById("f_text");
    f.innerHTML = "";

    s =  new Array();
    s = document.getElementById("s_text");
    s.innerHTML = "";

    tf =  new Array();
    tf = document.getElementById("th_text");
    tf.innerHTML = "";
    for(var i=0; i<arr.length; i++){
        console.log(arr[i]);
        f.innerHTML += arr[i] + "<br>";
    }
    console.log("들어있는 원반의 수는 "+arr.length);
}

function F_click(){
    if(mouseCount==0){
        mouseCount=1;
        arr.pop();
        C_consl();
    }else{
        if(mouseCount==2){
            arr.push();
            
        }else if(mouseCount==3){
            arr.push();
        }
    }
    
}

function S_click(){
    if(mouseCount==0){
        mouseCount=2;
        arr.pop();
        C_consl();
    }else if(mouseCount==1){
        arr.push();
    }else if(mouseCount==3){
        arr.push();
    }
}

function TF_click(){
    if(mouseCount==0){
        mouseCount=3;
        arr.pop();
        C_consl()
    }else if(mouseCount==1){
        arr.push();
    }else if(mouseCount==2){
        arr.push();
    }
}

function arrMove(){
    if(arr.push(arr)>arr[arr.length - 1])
    arr.push();
}

function C_consl(){
    console.log("눌림");
        console.log(mouseCount);
}