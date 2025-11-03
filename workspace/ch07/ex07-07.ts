// 내장 객체 - String

(()=>{
  
  let msg = '  Hello World ';
  console.log(`[${msg}]`);

  // 앞뒤 공백 제거
  // [Hello World]
  console.log(`[${msg.trim()}]`);

  // 지정한 위치의 문자를 반환
  // r
  const msg2 = msg.trim();
  console.log(msg2.charAt(8));
  console.log(msg2.at(8));
  console.log(msg2.at(-3)); // 뒤에서 3번째 위치의 문자 반환

  // 지정한 위치의 문자 유니코드 값 반환
  // 72
  console.log(msg2.charCodeAt(0));
 

  // 지정한 문자의 위치 반환(앞에서 부터 찾은 첫 번째 위치 반환)
  // 4
  console.log(msg2.indexOf('o'));

  // 지정한 문자의 위치 반환(뒤에서 부터 찾은 첫 번째 위치 반환)
  // 7
  console.log(msg2.lastIndexOf('o'));

  // 지정한 문자열 포함 여부 확인
  // true
  console.log(msg2.includes('ell'));

  // 지정한 문자열로 시작하는지 여부 확인
  // true
  console.log(msg2.startsWith('He'));

  // 지정한 문자열로 끝나는지 여부 확인
  // true
  console.log(msg2.endsWith('rld'));

  // 지정한 문자열을 연결해서 반환
  // Hello World and JavaScript
  console.log(msg2.concat(' and', ' Javascript'));

  // 지정한 문자열을 찾아서 다른 문자열로 치환해서 반환(첫번째 찾은 문자열만)
  // Hi World
  console.log(msg2.replace('Hello', 'Hi'));

  // 지정한 문자열을 찾아서 다른 문자열로 치환해서 반환(모든 문자열)
  // HellO WOrld
  console.log(msg2.replaceAll('o', '오'));

  // 지정한 횟수만큼 문자열을 반복하여 연결해서 반환
  // Hello WorldHello WorldHello World
  console.log(msg2.repeat(3));

  // 지정한 문자열을 지정한 구분자로 분리하여 배열로 반환
  // ['Hello', 'World']
  console.log(msg2.split(' '));
  // ['Hell', ' W', 'rld']
  console.log(msg2.split('o'));

  // 지정한 위치에서 지정한 길이만큼 문자열을 반환
  // Hel(0번째 위치부터 3번째 위치 이전까지 반환(0~2))
  console.log(msg2.slice(0, 3));
  console.log(msg2.slice(2, 4));
  console.log(msg2.slice(8));

  // or(7번째 위치부터 9번째 위치 이전까지 반환(7~8))
  console.log(msg2.slice(7, 9));

  // rld(뒤에서 3번째 위치부터 끝까지 반환)
  console.log(msg2.slice(-3));

  // orld(7번째 위치부터 뒤에서 1번째 위치 이전까지 반환)
  console.log(msg2.slice(7, -1));

  // 모든 문자열을 소문자로 변환해서 반환
  // hello world
  console.log(msg2.toLowerCase());

  // 모든 문자열을 대문자로 변환해서 반환
  // HELLO WORLD
  console.log(msg2.toUpperCase());

  console.log(`[${msg}]`);

})();

