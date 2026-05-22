// 호이스팅
console.log(fun); // 값(블록(=설계도)가 위로 올라간 형태)
console.log(typeof fun); // function(1급 객체)
console.log(fun()); // 값이 결정
console.log(bar); // undefined, var는 이동, 선언만 되고 호출되지 않음
// console.log(foo); // ReferenceError: foo is not defined
foo = 100; // var foo = 100;
console.log(foo);
var bar = 200;
console.log(bar);
function fun() {
  return 0;
}

// const fun = () => return 0; // 함수 표현식으로 방지
// let, const를 써서 선언 시점을 고정하는 것 -> 호이스팅 방지
// 1) 재선언, 재할당 X
// 2) 호이스팅 방지 (func, var...)
function fun() {
  return "덮어씌웠지롱"; // 선언부로 올라가고, 재선언도 가능하니까..
}

// 결론 : const, let, 함수표현식/화살표함수를 위주로 하면 호이스팅 겪을 일이 없다

