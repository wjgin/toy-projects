const body = document.querySelector("body");

const IMG_NUM = 2;

function paintImage(imageNumber){
    const image = new Image();
    image.src = `IMAGES/${imageNumber + 1}.jpg`;
    image.classList.add("bgImage");
    body.prepend(image);
}

function genRandom(){
    const number = Math.floor(Math.random()*IMG_NUM);
    return number;
}

function init(){
    const randomNumber = genRandom();
    paintImage(randomNumber);
}

init();