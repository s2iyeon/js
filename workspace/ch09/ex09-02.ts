// 랜덤 고양이 이미지 가져오기 - Fetch API 사용
// ex09-01.ts 복사

import type { Cat } from "./types.js";
import { appendImages } from "./utils.js";

// const url = 'https://api.thecatapi.com/v1/images/search';

const url = new URL('https://api.thecatapi.com/v1/images/search');
url.searchParams.set('limit', '10');
url.searchParams.set('breed_ids', 'pers,siam,sphy');

const btn = document.querySelector('button');
btn?.addEventListener('click', getImages);

async function getImages(): Promise<void> {
  try{
    const response = await fetch(url);
    console.log('response', response);
    if(response.ok){ // 응답 상태 코드가 2xx 일 경우
      const data: Cat[] = await response.json();
      console.log('data', data);
      appendImages(data);
    }else{ // 응답 상태 코드가 4xx, 5xx 일 경우
      console.error(response.status, '에러');
    }
  }catch(err){
    console.error('네트워크 에러', err);
  }
};