/*
* 가변 인자 처리 - apply() 활용
  - 배열 데이터를 각각의 매개변수로 분리하여 전달할 때
*/

console.log(Math.min(10,100));	// 10
console.log(Math.min(200,100,50,60,80,30));// 30
console.log(Math.min(100,20,60,50,70)); // 20

// 지정한 배열의 요소 중 최소값을 반환
// 박지섭
function smallest(nums){
  // nums = [200,100,50,60,80,30]
  let min = nums[0]; // 200
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] < min) { // 100 < 200
      min = nums[i]; // min = 100
    }
  }
  return min;
}

// 서주희
function smallest(nums){
  // return Math.min(nums[0], nums[1], nums[2], ...);
  return Math.min.apply(Math, nums);
}

console.log(smallest([10,100]));	// 10
console.log(smallest([200,100,50,60,80,30]));// 30
console.log(smallest([100,20,60,50,70]));	// 20
