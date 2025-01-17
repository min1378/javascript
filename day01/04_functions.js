// function add (num1, num2) {
//   return add1 + add2
// }

// add(1, 2) // 3



// // 함수 표현식
// const sub = function(num1, num2) {
//   return num1 - num2
// }

// // Arrow Function
// const addOne = function(num) {
//   return num + 1
// }
// const addTwo = (num) => {
//   return num + 2
// }

// let addOne = function(num) {
//   return num + 1
// }

// addOne = (num) => {
//   return num + 1
// }

// // 중괄호 제거는 바로 반환하겠다는 뜻
// addOne = (num) => num + 1

// addOne = num => num + 1

// name 이라는 인자를 받아서 hello ${name}을 반환하는 함수를
// 선언식, 표현식, arrow function 으로 만들어 보세요

// 선언식
function greeting(name) {
  return `hello ${name}`
}
// 표현식
const greeting2 = function(name) {
  return `hello ${name}`
}

let greeting3 = (name) => `hello ${name}`


// object 를 반환하는 arrow function

const makeObject1 = value => {
  return {'key':value}
}

const makeObject2 = value => ({'key' : value})




const noArgs = () => 'No args'