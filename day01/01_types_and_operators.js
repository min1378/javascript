// Types and Operators (타입과 연산자)
// Primitive Type


// Numbers
const a = 13
const b = -5
const c = 3.14 // float
const d = 2.998e8 // 2.998 * 10^8
const e = Infinity
const f = -Infinity
const g = NaN // Not a Number
const h = 0 / 0
console.log( 5 / '안녕하세요') // NaN

// strings

const sentence1 = 'Ask and go to the blue'
const sentence2 = "Ask and go to the blue"
const sentence3 = `Ask and go to the blue`


console.log(sentence1)
console.log(sentence2)
console.log(sentence3)

// 따옴표를 사용하면 줄바꿈이 안됨.
// escape sequence 사용 가능

// const word = '안녕
// 하세요'

const word = '안녕\n하세요'
console.log(word)

// 백틱을 쓰면 줄바꿈 가능. escape sequence 사용 안됨.
// Template literal을 쓰면 줄바꿈 가능

const word2 = `안녕
하세요`

console.log(word2)

// Template literal
const age = 10
const message = `홍길동의 나이는 ${age}`
console.log(message)

console.log('happy' + 'hacking')

// Boolean
true
false


// Empty Value
// 값이 존재하지 않음을 표현하는 값
// 자바스크립트 설계 실수래... 잘못 만든 것 수정을 못하고 있다. 여기에 의존하고 있는 수많은 프로그램이 존재.....
// 그래서 그냥 냅둠...
undefined
null


let fristName // 선언하고 할당하지 않음 => undefined
let students = {}
students.jason // undefined
let lastName = null // 우리가 의도적으로 값이 없음을 표시할 때

// typeof null
// "object"
// typeof undefined
// "undefined"

// Operators (연산자)
// 할당 연산자

x = 0 // 0
x += 10 // 10 
x -= 3 // 7
x *= 3 // 21
x++ // 22
x-- // 21

// 비교 연산자

3 > 2 // True

3 < 2 // False

// 문자열 비교도 가능
// 영어 소문자가 대문자보다 큼, 알파벳은 오름차순.

'윤' < '김' // false

'윤' < '육' // false

'윤' > '육' // true

// 동등 연산자 (==)
// 서로 같은 값을 갖도록 변환할 수 있으면 같다고 판단한다.
// (JS 엔진이 자동으로 형변환) => 동등 연산자의 사용은 지양한다.

const a1 = 1
const b1 = '1'
console.log(a1 == b1) // true 변환이 가능하니깐!!

// 논리 연산자
// and, not, or

true && true // true
true && false // false

true || true // true
true || false // true
false || false // false

!true // false
!false // true

// 삼항 연산자
// 가장 앞의 boolean 값이 참이면 : 앞의 값이 반환, 그렇지 않다면 : 뒤의 값이 반환

let flag = true

const result = flag ? '참이니' : '거짓이니' // 참이니
console.log(result)









