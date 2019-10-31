function printHello() {
    console.log(4)
    console.log('Hello from baz');
}
function baz2() {
    console.log('?')
    setTimeout(printHello, 5000);
}

function baz() {
    console.log(3)
    setTimeout(printHello, 3000);
}

function bar() {
  console.log(2)
    baz();
    baz2();
}

function foo() {
  console.log(1)
    bar();
}

foo();