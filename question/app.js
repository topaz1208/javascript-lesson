//Q1
let nickname = 'まりちゃん';
let age ='ひみつの';
let Q1 = '私のニックネームは' + nickname + 'です。年齢は' + age +'歳です。';
console.log(Q1);

//Q2
let languages = ['JavaScript', 'PHP', 'Ruby', 'Python',  'Go' ]
let Q2 = `私の好きな言語は${languages[0]}です。次は${languages[3]}を勉強してみたいです。`
console.log(Q2)


//Q3
let user = {
  name: 'John',
  age: 26,
  bloodType: 'A',
  favorite: 'card',
};

//Q4
let playerList = [
    {
      name: 'John',
      age: 26,
      favorites: ['Card Game', 'Basket Ball', 'Programming'],
    },
    {
      name: 'Bob',
      age: 33,
      favorites: ['Tinder', 'The Legend of Zelda'],
    },
    {
      name: 'Michael',
      age: 22,
      favorites: ['Football', 'Smash Bros.'],
    }
  ];
  console.log(playerList[1].favorites[1])
  
//Q5
console.log((playerList[0].age+playerList[1].age+playerList[2].age)/3)

//Q6
function sayHello(){
  let Hello = 'Hello'
  console.log(Hello)
}
sayHello();

const sayWorld = function(){
  let sayWorld = 'World'
console.log(sayWorld)
}
sayWorld();

//Q7 
let updateuser = {
  name: 'John',
  age: 26,
  bloodType: 'A',
  favorite: 'card',
  birthday:'2000-09-27',
  sayHello: function(){
    console.log('Hello！');
  }
};
sayHello();

//Q8
let calc = {
add: function(x, y){
  console.log( x + y );
},
subtract: function(x, y){
  console.log(x - y);
},
multiply:function(x, y){
  console.log(x * y);
},
divide:function(x, y){
  console.log(x / y);
}
};

calc.add(5,2)
calc.subtract(20, 10)
calc.multiply(7, 7)
calc.divide(25, 5)

//Q9
function remainder(x, y){
  let result = x % y;
  console.log( x + 'を' + y + 'で割った余りは' + result + 'です');
  return x % y ; 
}
remainder(5, 3)

//Q10
function foo() {
let x = 1;
}
console.log(x);
//変数xはスコープが関数内のため、関数外にあるconsoleでは変数xが参照できずにエラーが出力される。
//関数外で出力を行いたい場合は、変数xの定義を関数外で行い、関数内で変数xの値を再代入するようにする。

//応用
//Q1
var random = Math.floor(Math.random() * 10)
console.log(random );

//Q2 
function HelloWorld(){
    console.log('Hello World!');
};
setTimeout(HelloWorld, 3000)

//Q3
let num = 0 ;
if(num < 0){
    console.log('num is greater than 0');
}else if(num > 0){
    console.log('num is less than 0');
}else{
console.log('num is 0');
}

//Q4 
let numbers = [];
for (let i = 0; i < 100; i++ ){
  numbers[numbers.length] = i;
};
console.log( numbers );

//Q5
let mixed = [4, '2', 5, '8', '9', 0, 1];
for (let i = 0; i < mixed.length; i++){
   if(typeof mixed[i] === 'number'){
    console.log(mixed[i] % 2 === 0 ? 'even' : 'odd');
  }else{
    console.log('not number');
  }  
}; 
