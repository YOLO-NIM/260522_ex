const program = {
  name: "부자로 만들어주는 로또 생성기",
  numbers: [],
  // picNumber: function () {}, // 이렇게 쓰는 것도 가능!
  picNumber() {
    console.log("숫자를 뽑았습니다!");
  },
  trash: "지워주세요",
};

console.log(`프로그램 이름 : ${program.name}`);
console.log(`프로그램 뽑은 숫자 : ${program.numbers}`);
program.picNumber();

program.language = "JS"; // property 추가
program.numbers = ["1", "2", "3", "5", "8", "13"]; // property 수정
delete program.trash; // property 삭제
console.log(program);
// mutation -> react => 객체가 주소값을 변경하여 새로 끼워져야 변경을 인식 (react...)
// 일부만 선택해서 새로운 객체로 만드는 경우 -> 구조 분해 할당

// 유틸리티 클래스 - 특정한 타입, 상황 등을 서포트하기 위해서 클래스 단위로 묶은 유용한 함수/메서드들
// 객체를 잘 다루기 위한 유용한 기능
console.log(Object.keys(program));
console.log(Object.values(program));
console.log(Object.entries(program)); // Entry. - 키/밸류 쌍
for (const k of Object.keys(program)) {
  console.log(k);
}
for (const v of Object.values(program)) {
  console.log(v);
}
for (const [k, v] of Object.entries(program)) {
  console.log(k, v);
}
