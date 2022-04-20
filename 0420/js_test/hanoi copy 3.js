var button_reset = document.getElementById("button_reset");

var b1 = document.getElementsByClassName("box")[0];
var b2 = document.getElementsByClassName("box")[1];
var b3 = document.getElementsByClassName("box")[2];
var p1 = document.getElementById("f_text");
var p2 = document.getElementById("s_text");
var p3 = document.getElementById("th_text");
var num = 5; //원반 수
var form = b1,b2,b3; //고리들

function init(){
    b1 = new Array();
    b2 = new Array();
    b3 = new Array();

    b1.push("🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥");
    b1.push("🟨🟨🟨🟨🟨🟨🟨🟨🟨");
    b1.push("🟩🟩🟩🟩🟩🟩🟩🟩");
    b1.push("🟦🟦🟦🟦🟦");
    b1.push("🟪🟪🟪");
    b1.push("⬛");
}



//console.log(arr.pop()); //마지막에 입력된거를 리턴함
//console.log(arr.shift());
