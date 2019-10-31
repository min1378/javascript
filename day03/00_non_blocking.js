function sleep_3() {
  // 비동기 함수 => 처리가 끝날 때 까지 기다리지 않아도 되는 함수
  setTimeout(function(){
    console.log('Wake Up!')
  }, 3000)
}

console.log('Start sleeping')
sleep_3()
console.log('End')