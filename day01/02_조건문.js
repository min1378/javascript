// const username = prompt('안녕하세요? 당신은 누구세요?')

// let message = ''

// if (username === 'ssafy') {
//   message = '<h1>SSAFY에 오신걸 환영합니다.</h1>'
// }else if (username === 'admin') {
//   message = '<h1>운영자님 안녕하세요</h1>'
// }
//  else {
//   message = `<h1>Welcome ${username}</h1>`
// }

// document.write(message)



// switch 문

const username = prompt('WHO ARE YOU?')

let message = ''

switch(username) {
  case 'ssafy' : {
    message = '<h1>SSAFY에 오신걸 환영합니다.</h1>'
  }
  case 'admin' : {
    message = '<h1>운영자님 안녕하세요</h1>'
  }
  default : {
    message = `<h1>Welcome ${username}</h1>`
  }
}

document.write(message)

// 예시

// switch(사용자) {
//   case '관리자' : {
//     사용자.권한 += '관리자 페이지 접근'
//     }
  
//   case '일반_사용자' :{
//     사용자.권한 += '쓰기'
//   }
//   default : {
//     사용자.권한 += '읽기'
//   }
// }

