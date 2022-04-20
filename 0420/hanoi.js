var button_reset = document.getElementById("button_reset");

var b1 = document.getElementsByClassName("box")[0];
var b2 = document.getElementsByClassName("box")[1];
var b3 = document.getElementsByClassName("box")[2];

var num = 5; //원반 수
var form = b1,b2,b3; //고리들

var nowDiv=null; //s지금 클릭된 칸
var nextDiv=null; //다음에 클릭된 칸
var nowHanoi; //지금 클릭된 칸의 원반(옮길 원반)

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
    var f = document.getElementById("f_text");
    f.innerHTML = ""
    for(var i=0; i<arr.length; i++){
        console.log(arr[i]);
        f.innerHTML += arr[i] + "<br>";
    }
    console.log("들어있는 원반의 수는 "+arr.length);
    F_click();
}


//갯수, 현재위치, 
function F_click() { //첫번째 클릭
    nowDiv = event.currentTarget.id; //클릭요소를 가져옴
    console.log(nowDiv);
    if(document.getElementById(nowDiv).top != 0) { //클릭된거 안에 arr배열이 있으면
        console.log("옮길 준비");
        nowHanoi=arr.pop();  
    }else{
        console.log("안에 배열 없음");
        alert("여기는 비어 있습니다.");
        F_click();
    }
}


function S_click(){ //두번째 클릭
    nextDiv = event.currentTarget.id; //클릭요소를 가져옴
        //다음 클릭 검사
        if(nextDiv!=nowDiv){ //다음 클릭된 아이디가 이전 클릭이랑 다르면
            console.log("원반 옮김");
            move();
        }else{
            console.log("이전과 같은 곳임");
        S_click();
        }
}

function move(){ //원반 옮기기
    nextDiv=arr.push(nowHanoi);
}