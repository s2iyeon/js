// 내장 객체 - Date

(()=>{
  
  const startDate = new Date('2025-09-22');
  const finishDate = new Date(2026, 1, 13); // 년, 월(0부터 시작), 일

  console.log('JS 수업 시작일', getDate(startDate));
  console.log('수료일', getDate(finishDate));

  // startDate는 용쌤과 만난 날입니다. 오늘이 몇일째 되는 날인지 출력하세요.
  const today = new Date(); // 현재 시간
  const diff = today.getTime() - startDate.getTime(); // 밀리초 단위의 차이
  const diffDays = Math.floor(diff / (1000 * 60 * 60 * 24)); // 밀리초를 일 단위로 변환
  console.log(`오늘은 수업 시작일로부터 ${diffDays}일째입니다.`);

  // finishDate는 수료일입니다. 욤쌤과의 수업이 앞으로 몇일 남았는지 출력하세요.
  const diffFinish = finishDate.getTime() - today.getTime();
  const diffFinishDays = Math.floor(diffFinish / (1000 * 60 * 60 * 24));
  console.log(`수업 종료일까지 ${diffFinishDays}일 남았습니다.`);

  // 우리 만난지 백일째되는 날이 언제인지 출력하세요.
  const hundredDaysLater = new Date(startDate.getTime() + (1000 * 60 * 60 * 24 * 100));
  console.log(`우리 만난지 백일째 되는 날은 ${getDate(hundredDaysLater)}일 입니다.`);

  function getDate(date: Date): string {
    // date를 YYYY-MM-DD 형식으로 변환하여 반환하는 함수를 작성하세요.
    const month = date.getMonth() + 1;
    const day = date.getDate();
    return `${date.getFullYear()}-${month<10 ? '0'+month : month}-${day<10 ? '0'+day : day}`;
  }

})();

