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

// 로컬 스토리지의 모든 데이터 삭제
function clearLocal(){
  
}