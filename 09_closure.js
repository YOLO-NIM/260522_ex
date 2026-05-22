// 렉시컬 스코프
const v = "global";

// 정처기

function f() {
  // lexical : 어휘의, 어휘적 -> 작성된 시점에서 결정
  //
  //선언된 것에 따라 스코프가 결정
  console.log(v);
}
f();

function f2() {
  const v = "local";
  f();
}

f2();

function f3() {
  let c = 0;
  return function () {
    return ++c;
  };
}

f3(); // function(){}
f3()(); // 실행할 때는 이렇게..?

const counter = f3(); // -> 함수 표현식
console.log(counter()); // 1
console.log(counter()); // 2
