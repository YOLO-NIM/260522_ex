// 표현식

// 익명함수 (Anonymous Function)
(function () {
  console.log("나는 존재한다");
})();

//함수 표현식
const f = function (fn) {
  fn(); // 함수
  console.log("나는 존재한다 2");
};
f(function () {
  console.log("포케 먹기 싫다"); // 함수를 값으로 넣어서 실행
});

a(); // 선언 전에도
// html? script -> 언제 해석될지 모름. html에 button, onclick 속성에 js 함수. html이 먼저 등장해서 위치를 잡은 다음, 뒤에 script. (var, function) / hoist(감아올리기) -> let, const가 도입. function? -> let, const를 써서 표현식 = 익명함수 식으로 넣어라
function a() {
  console.log("호이호이호이스팅");
}

// 화살표 함수 (유사 lambda)
