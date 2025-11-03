(() => {
  const localKey = document.querySelector('#localKey');
  const localValue = document.querySelector('#localValue');
  const localResult = document.querySelector('#localResult');
  
  // 로컬 스토리지에 저장
  function saveToLocal(){
    if(localKey.value && localValue.value){
      localStorage.setItem(localKey.value, localValue.value);
      localResult.innerHTML = `저장됨: ${localKey.value} = ${localValue.value}`;
      localKey.value = '';
      localValue.value = '';
    }else{
      localResult.innerHTML = `키와 값을 모두 입력하세요.`;
    }
  }
  
  // 로컬 스토리지에서 읽어오기
  function loadFromLocal(){
    if(localKey.value){
      const value = localStorage.getItem(localKey.value);
      if(value){
        localResult.innerHTML = `불러옴: ${localKey.value} = ${value}`;
      }else{
        localResult.innerHTML = `키 ${localKey.value}를 찾을 수 없습니다.`;
      }
    }else{
      localResult.innerHTML = `키를 입력하세요.`;
    }
  }
  
  // 로컬 스토리지에서 삭제하기
  function deleteFromLocal(){
    if(localKey.value){
      const value = localStorage.getItem(localKey.value);
      if(value){
        localStorage.removeItem(localKey.value);
        localResult.innerHTML = `삭제함: ${localKey.value} = ${value}`;
      }else{
        localResult.innerHTML = `키 ${localKey.value}를 찾을 수 없습니다.`;
      }
    }else{
      localResult.innerHTML = `키를 입력하세요.`;
    }
  }
  
  // 로컬 스토리지의 모든 데이터 삭제
  function clearLocal(){
    localStorage.clear();
    localResult.innerHTML = `localStorage 전체 삭제`;
  }
  
  
  const sessionKey = document.querySelector('#sessionKey');
  const sessionValue = document.querySelector('#sessionValue');
  const sessionResult = document.querySelector('#sessionResult');
  
  // 로컬 스토리지에 저장
  function saveToSession(){
    if(sessionKey.value && sessionValue.value){
      sessionStorage.setItem(sessionKey.value, sessionValue.value);
      sessionResult.innerHTML = `저장됨: ${sessionKey.value} = ${sessionValue.value}`;
      sessionKey.value = '';
      sessionValue.value = '';
    }else{
      sessionResult.innerHTML = `키와 값을 모두 입력하세요.`;
    }
  }
  
  // 로컬 스토리지에서 읽어오기
  function loadFromSession(){
    if(sessionKey.value){
      const value = sessionStorage.getItem(sessionKey.value);
      if(value){
        sessionResult.innerHTML = `불러옴: ${sessionKey.value} = ${value}`;
      }else{
        sessionResult.innerHTML = `키 ${sessionKey.value}를 찾을 수 없습니다.`;
      }
    }else{
      sessionResult.innerHTML = `키를 입력하세요.`;
    }
  }
  
  // 로컬 스토리지에서 삭제하기
  function deleteFromSession(){
    if(sessionKey.value){
      const value = sessionStorage.getItem(sessionKey.value);
      if(value){
        sessionStorage.removeItem(sessionKey.value);
        sessionResult.innerHTML = `삭제함: ${sessionKey.value} = ${value}`;
      }else{
        sessionResult.innerHTML = `키 ${sessionKey.value}를 찾을 수 없습니다.`;
      }
    }else{
      sessionResult.innerHTML = `키를 입력하세요.`;
    }
  }
  
  // 로컬 스토리지의 모든 데이터 삭제
  function clearSession(){
    sessionStorage.clear();
    sessionResult.innerHTML = `sessionStorage 전체 삭제`;
  }
  
  // 스토리지의 모든 데이터 조회
  function showAllData(){
    const allDataE = document.querySelector('#allData');
    let html = `<h3>localStorage</h3>`;
    for(let i=0; i<localStorage.length; i++){
      const key = localStorage.key(i);
      const value = localStorage.getItem(key);
      html += `${key}: ${value}<br>`;
    }
  
    html += '<h3>sessionStorage</h3>';
    for(let i=0; i<sessionStorage.length; i++){
      const key = sessionStorage.key(i);
      const value = sessionStorage.getItem(key);
      html += `${key}: ${value}<br>`;
    }
  
    allDataE.innerHTML = html;
  }
})();
