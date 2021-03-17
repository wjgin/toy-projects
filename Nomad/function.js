//alert('경고문구 만들기');
// constant(상수)는 값을 변경할 수 없게 해줌
/*
const a = 200;

// let은 수학적 변수
let b = a - 6; 
// 상수 a에 다른 값을 대입해도 변경할 수 없음 -> error를 출력
//a= 4;
console.log(b);
*/

/*
// Array -> int float string boolean data만 저장 가능
// 이건 list
const dayOfWeek = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', true, 1];
console.log(dayOfWeek);
console.log(dayOfWeek[2]);

// Array 만들기 bracket([]) 대신 curly bracket 안에 object 넣는다.
// 변수명 : 입력값
const WJInfo = {
    name: "WJ", 
    age: 28, 
    gender: "male", 
    favoriteMovie: ["aboutTime", "beautyInside"],
    favoriteFoods: [
        {
            name: "Kimchi", 
            fatty: false
        },
        {
            name: "Burger",
            fatty: true

        }
    ]
};
// constant여도 array안의 object는 변경할 수 있다.
WJInfo.gender = "female";
console.log(WJInfo.favoriteFoods);
*/

// 함수 만들기
/*
function WJ(name, age){
    //console.log("Hi", name, "I have", age, "years of age.")
    // `` 백틱을 이용하면 더 편하게 만들 수 있다.
    return `Hello ${name}, you have ${age} years of age.`
};

console.log (WJ("WooJ", 28));
*/

// object(객체)와 argument(인자)
// console.log  -> console은 객체 log는 그 속에 인자를 가지는 함수

const calculator = {
    plus: function(a, b){
        return a + b;
    },
    minus: function(a, b){
        return a - b;
    },
    multi: function(a, b){
        return a * b;
    },
    div: function(a, b){
        return a / b;
    },
    pow: function(a, b){
        return a**b;
    },
    mod: function(a, b){
        return a % b;
    },
    share: function(a, b){
       return Math.floor(a / b);
    }
}

console.log(calculator.share(8, 3));
