// import 구문은 보통 모듈의 최상단에 정의
// Named Import
import { plus, minus, multiply } from './math.js';
// Default Import
import myMath from './math.js';
// Mixed Import(권장하지 않음)
import yourMath, { plus as add } from './math.js';
plus(1, 2);
minus(2, 3);
multiply(3, 4);
const haru = { name: 'haru', age: 5 };
myMath.printUser(haru);
yourMath.minus(4, 5);
add(5, 6);
// Dynamic Import
if (myMath.minus(7, 6) < 0) {
    // import ourMath from './math.js';
    // import()는 Promise를 반환하기 때문에 then에 콜백 함수 지정
    import('./math.js').then((ourMath) => {
        ourMath.plus(6, 7);
    });
    // EC2017 async/await
    // import()는 Promise를 반환하기 때문에 await 사용 가능
    const dynamicMath = await import('./math.js');
    dynamicMath.minus(7, 8);
}
