const arr = [1, 2, 3, 4, 5]; // [e1,e2,e3, ...]
// 순서
// <-> *앞* [] *뒤* <-> (queue, stack) / JS --> [stack]. deque?

arr.push(11);
console.log(arr);
console.log(Object.keys(arr)); // 배열의 index = 숫자로 구현된 key다

const p = arr.pop(); // n-1번째 애가 pop
console.log(p);
console.log(arr);

// 후입 선출(Last-In-First-Out(LIFO))
arr.unshift("a");
console.log(arr);
console.log(Object.entries(arr));
const s = arr.shift();
console.log(s);
console.log(arr);

// unshift -> pop
// shit <-push (선입선출)
// pust -> pop (후입선출)

// (시작점, 제거할 개수)
console.log(arr.splice(1, 2)); // 인덱스 1부터 2개 제거
console.log(arr);

// 정렬은...나중에 추가로..(고차함수할 때)
