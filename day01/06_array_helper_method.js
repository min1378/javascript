//  Array helper method

const colors = ['red', 'blue', 'green', 'salmon']

for (const color of colors){
  // console.log(color)
}

colors.forEach(color => console.log(color))


// map - 배열내의 모든 요소에 대하여 주어진 함수를 호출한 결과를 모아 새로운 배열 return
// 일정한 형식의 새로운 배열을 만들 때 사용한다.

const numbers = [1, 2, 3, 4]

const doubleNumbers = numbers.map(number => number * 2)

// 숫자가 담긴 배열을 받아 각 수의 제곱근이 들어있는 새로운 배열을 만들어 보자!

const numbers2 = [4, 6, 9]

const squareNumbers = numbers2.map(number => Math.sqrt(number))


// filter - 주어진 함수의 테스트를 통과하는 모든 요소를 모아서 새로운 배열 반환.

numbers.filter(number => {
  return number % 2 === 0
})

const products = [
  {name: 'cucumber', type:'vege'},
  {name: 'banana', type:'fruit'},
  {name: 'carrot', type:'vege'},
  {name: 'apple', type:'fruit'},

]

const fruits = products.filter(product => product.type === 'fruit')

// map helper를 사용하여, distance / time (속도) 를 저장하는 speeds 배열을 만들어라.

const trips = [
  { distance : 34, time : 10 },
  { distance : 90, time : 50 },
  { distance : 59, time : 25 },
]

const speeds = trips.map(trip => trip.distance / trip.time)

// filter - 나이가 50 이상인 아이템만 추출한 새로운 배열을 만드세요.

const ages = [15, 25, 35, 45, 55, 65, 75, 85, 95]

const oldAges = ages.filter(age => age >= 50)


// requests 배열에서 각 요청들 중 status가 pending인 요청이 있는지 확인하라.

const requests = [
  { url: '/photos', status : 'complete'},
  { url: '/albums', status : 'pending'},
  { url: '/users', status : 'failed'},
]

const isInProgress = requests.some(request => request.status === 'pending')

const ssafyTest = [90, 99, 78, 80]

const sum = ssafyTest.reduce((total, score) => {
  total += score
  return total
}, 0)

// ssafyTest 배열을 doubleSsafyTest 로 만드시오!
// => [180, 198, 156, 160]

const doubleSsafyTest = ssafyTest.reduce((result, score) => {
  result.push(score * 2)
  return result
}, [])