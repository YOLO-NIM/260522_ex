// if, switch - 1번 => 여러번?
// 특정한 조건을 만족시키면 1번
// while - 특정한 조건이 만족된다면 계속 진행
// -> 조건/논리값 - boolean -> 뒤집으면 fasle
// w < 10 => w >= 10 될 때까지

let w = 0; // 변화의 기본이 되는 변수 - 초기화를 하는 표현식
while (w < 5) {
  // 언제까지 반복을 할 건지 - 조건식
  // while(true) // 무한반복
  // 계속 w가 변화가 없다면? => 무한반복
  console.log(w);
  w++; // 변수를 변화시키는 증감식
}

// for(초기식; 조건식; 증감식){}
for (let i = 0; i < 5; i++) {
  console.log(i);
}
// 통상적인 for문에서는 const 사용 불가 => 변하지 않기 때문에
// for-in, for-of -> const v 사용 가능 => 한 블록마다 호출되고 그 다음에 소멸함.

// 배열 순회
const arr = ["아침", "간식", "점심", "간식", "저녁", "간식", "야식"];
for (let i = 0; i < arr.length; i++) {
  // 0부터 시작해서 길이 미만으로 조건식이 간다
  // 1부터 시작을 하면 모든 조건이 '충족' -> 전체 길이 이하여야 모든 원소/요소를 찾을 수 있음
  // 인덱스 또한 0부터 시작하기 때문에 마지막 인덱스는 전체길이 -1, '미만'이 된다.
  if (arr[i] === "간식") {
    continue;
  }
  console.log(arr[i]);
  if (arr[i] === "점심") {
    break;
  }
}

// 역방향
console.log("==역방향==");
for (let i = arr.length; i > 0; i--) {
  console.log(arr[i - 1]);
}

// while 문으로 구현한다면
let w2 = arr.length - 1;
while (w2 >= 0) {
  console.log(arr[w2]);
  w2--;
}

// 무한 반복
// for (;;) {
//   // for의 무한 반복
//   console.log("크크크킄");
// }

// 중첨 for문
// 중첩은 몇번까지? : 2번 => bigO -> O^2 / O*logO
// if, switch, while, for 모두 겹칠 수 있음
for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    console.log(`i ${i} j ${j}`);
  }
}
