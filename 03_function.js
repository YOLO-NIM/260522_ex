// let, const, (var)

let a = 0;
function myFun() {
  console.log(a);
  a++;
  let b = "나는 함수 안에서 선언된 변수다";
  // return undefined;
  return b;
}

myFun();
console.log(a);
// console.log(b); // ReferenceError: b is not defined
console.log(myFun());
const c = myFun();
console.log(c);

function myFun2(a) {
  // block을 새로 가면 let은 새롭게 만들 수 있지만, 밖으로 나갈 순 없음
  return a * 2; // 2? 200?
}
console.log(myFun2(100)); // 매개변수가 더 가까이 있어서
// 블록 외부에 있는 네임스페이스 -> 매개변수 -> 내부에서 선언

function myFun3() {
  if (Math.random() > 0.5) {
    return [1, 2, 3]; // 출력만의 의미를 가지는 건 아님
    // 여기서 함수 로직 종료
  }
  // else 역할을 하게 된다.
  return { a: 1, b: 2, c: 3 };
  // else도 안쓰고 switch도 안쓰고 함수화 한 다음에 if -> return
}
console.log(myFun3());
