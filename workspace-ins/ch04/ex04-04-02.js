/*
* Partial application - 로그 함수
*/

// 로그를 출력하는 일반 함수
function log(target, level, message){
  const now = new Date();
  console.log(`[${now.getHours()}:${now.getMinutes()}] [${target}] [${level}] ${message}`);
}
log('console', 'WARN', 'warn message 1');
log('console', 'WARN', 'warn message 2');
log('file', 'ERROR', 'error message 1');
log('file', 'ERROR', 'error message 2');

// lodash 라이브러리 사용
const consoleWarn = _.partial(log, 'console', 'WARN');
consoleWarn('lodash warn message 1'); // log('console', 'WARN', 'lodash warn message 1')
consoleWarn('lodash warn message 2'); // log('console', 'WARN', 'lodash warn message 2')

// mylib.js
const fileError = log.partial('file', 'ERROR');
fileError('mylib error message 1'); // log('file', 'ERROR', 'mylib error message 1')
fileError('mylib error message 2'); // log('file', 'ERROR', 'mylib error message 2')
