const numbers = [1, 2, 3, 4]

numbers[0] // 1

numbers[-1] // undefined 
numbers.length // 4

// 배열 뒤집기 => 원본을 변형시킨다.
numbers.reverse() // [4, 3, 2, 1]
numbers  // [4, 3, 2, 1]
numbers.reverse() // [1, 2, 3, 4]
numbers // [1, 2, 3, 4]

// 가장 뒤에 요소 추가 후 길이 반환

numbers.push(5) // 마지막 인덱스로 5를 추가한다. 반환되는 값은 길이!!
numbers.push('abc')
numbers // [1, 2, 3, 4, 5, 'abc']

// 마지막 요소 제거 후 반환

numbers.pop() // 'abc' 반환 그리고 'abc'는 제거
numbers // [1, 2, 3, 4, 5]

// 가장 앞에 요소 추가 후 길이 반환
numbers.unshift('a') // 6 길이 반환
numbers // ['a', 1, 2, 3, 4, 5]

// 첫번째 요소 제거 후 반환

numbers.shift() // 'a' 반환 후 'a' 제거
numbers // [1, 2, 3, 4, 5]



// includes
numbers.includes(0) // false
numbers.includes(1) // true

// indexOf - 특정 아이템의 index를 찾아 서 반환
numbers.push('a')
numbers.push('a')
numbers // [1, 2, 3, 4, 5, 'a', 'a']
numbers.indexOf('a') // 5, 일치하는 가장 가까운 index 반환
numbers.indexOf('b') // -1, 일치하는 값이 없다면 -1 반환

// 배열의 아이템을 함수의 인자를 seperator로 이어서 문자열로 반환
numbers.join() // "1,2,3,4,5,a,a"
numbers.join('') // "1 2 3 4 5 a a"
numbers.join('-') // "1-2-3-4-5-a-a"

numbers // [1, 2, 3, 4, 5, 'a', 'a'] 배열은 바뀌지 않음

// object

const me = {
  name : 'ssafy',
  'phoneNumber' : '010-1234-5678',
  appleProducts : {
    macbook : '2018pro',
    iphone: '7',
  }

}

// me.name me['name'] 둘다 접근 가능 "ssafy" 반환
// me.appleProducts.macbook 

const name = 'jason'

const me1 = {
  name, // 변수의 이름과 key의 이름이 같다면 생략가능.
  'phoneNumber' : '010-1234-5678',
  appleProducts : {
    macbook : '2018pro',
    iphone: '7',
  }

}

// JSON

const jsonData = JSON.stringify(me) // 직렬화 => JS Object를 string 값으로

const parsedData = JSON.parse(jsonData) // 역직렬화 => string을 JS Object
// U.R.F 모드가 시작되었습니다! 