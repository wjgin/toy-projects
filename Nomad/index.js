// HTML id JS로 가져 오기
// const title = document.getElementById("title");
// querySelector은 특정 기호 뒤의 것을 가져온다. #은 id .은 class를 의미한다.
const title = document.querySelector("#title");
// 해당 id의 내용을 바꿀 수 있다.
//title.innerHTML = "Hi is this Working?";
// DOM(Document Object Module) HTML의 모든 객체를 가져온다.
// 확인하고 싶은 객체를 보고 모두 수정해 줄 수 있다.
// console 창에서 디렉터리들을 모두 확인할 수 있다.

// document -> 문서 전체가 어떻게 이뤄져 있는지 객체를 볼 수 있다.
//console.dir(document);
// document에 속해있는 id를 구성하는 객체를 볼 수 있다.
// Js로 다 변화 시킬 수 있다.
/*
console.dir(title);
// title의 style의 color를 바꿔줘 봤다.
title.style.color = "red";
document.title = "changed Document Title";
*/
// event 동작
// changecolor()로 넣어주면 click을할 때가 아닌 바로 실행한다. 즉시, 실행의 의미이다.

// 자바스크립트로 직접적으로 CSS를 변화시키는 방법
// 하지만 비추천 -> 서로의 기능을 분리해주는 것이 좋다.
/*
const BASE_COLOR = 'rgb(255, 255, 255)';
const OTHER_COLOR = "red";

function changeColor(){
    const CURRENT_COLOR = title.style.color;
    if(CURRENT_COLOR === BASE_COLOR){
        title.style.color = OTHER_COLOR;
    }else{
        title.style.color = BASE_COLOR;
    }
}
function init(){
    title.style.color = BASE_COLOR;
    title.addEventListener("click", changeColor);

}

init();
*/

// 기능 분리를 위해서 class를 title에 삽입하는 logic을 만들기 <추천 방법>

const CLICKED_TITLE = "clicked";

function changeTitleColor(){
    const CURRENT_COLOR = title.className;
    if(CURRENT_COLOR !== "clicked"){
        title.className = "clicked";
    }else{
        title.className = "";
    }
}

title.addEventListener("click", changeTitleColor);

