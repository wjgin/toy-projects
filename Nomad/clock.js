const clockContainer = document.querySelector(".js-clock");
const clockTitle = clockContainer.querySelector("h1");


function getTime(){
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    // ternary operator를 사용해서 조건을 주자 small ifs라고 할 수 있다.
    clockTitle.innerHTML = `${hours < 10 ? `0${hours}` : hours}:${
        minutes < 10 ? `0${minutes}` : minutes}:${
        seconds < 10 ? `0${seconds}` : seconds}`;
}

function init() {
    getTime();
    setInterval(getTime, 1000); // (함수, 시간(ms))
}

init();
