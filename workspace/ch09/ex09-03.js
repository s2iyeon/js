// 랜덤 고양이 이미지 가져오기 - axios 라이브러리
// ex09-02.ts 복사
import { appendImages } from "./utils.js";
// workspace 폴더에서 npm init -y
// workspace 폴더에서 npm i axios
import axios from "axios";
const url = 'https://api.thecatapi.com/v1/images/search';
const btn = document.querySelector('button');
btn?.addEventListener('click', getImages);
async function getImages() {
    try {
        const { data } = await axios.get(url);
        appendImages(data);
    }
    catch (err) {
        console.error('에러', err);
    }
}
;
