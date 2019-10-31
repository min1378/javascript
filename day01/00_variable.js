// 자바스크립트에서 모든 변수는 재선언을 할 수 없다. let이라 선언하였을 경우 재할당은 가능.

let x = 1
console.log(x) // 1



x = 3
console.log(x) // 3

if (x === 3) {
  let message = '안녕하세요'
  console.log(message) // 안녕하세요
  console.log(x) // 3
}

console.log(x)



// 식별자
// 변수명은 식별자라 불린다.
// 1. 반드시 문자, 달러($), 밑줄(_)로 시작해야 한다.
// 2. 대소문자를구분하고 Class 이름을 제외하고 소문자로 시작하는 걸 권장.
// 3. 예약어 사용 불가 (const, let, class, return, case...)

// 카멜 케이스(camelCase) - 객체, 함수, 변수

// 이벤트 핸들러 - 'on'으로 시작
const onClick = () => {}

// boolean 값 - 'is' 로 시작
let is_Available = false

// 함수이름
function getUsername () {}


// 파스칼 케이스 (PascalCase) - 클래스, 생성자 (upperCamelCase)
class User {}

// 대문자 스네이크 케이스 - 상수

const API_KEY = 'asdokaofwodfnasdionoiwfoiafndo'



