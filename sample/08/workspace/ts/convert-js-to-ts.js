/**
 * JavaScript 파일을 TypeScript 파일로 변환하는 스크립트
 * 하위 폴더를 포함한 모든 .js 파일을 찾아서 .ts 파일로 변환
 */
const fs = require('fs');
const path = require('path');
const os = require('os');

// 작업할 기준 디렉토리 (현재 디렉토리)
const baseDir = '.';

/**
 * 재귀적으로 디렉토리를 탐색하여 모든 .js 파일을 찾는 함수
 * @param {string} dirPath - 탐색할 디렉토리 경로
 * @param {string[]} fileList - 찾은 .js 파일 경로를 저장할 배열 (기본값: 빈 배열)
 * @returns {string[]} 찾은 모든 .js 파일 경로 배열
 */
function findJsFiles(dirPath, fileList = []) {
  // 디렉토리 내의 모든 파일과 폴더 목록 가져오기
  const files = fs.readdirSync(dirPath);

  files.forEach((file) => {
    const filePath = path.join(dirPath, file);
    // 파일 또는 디렉토리 정보 가져오기
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      // 디렉토리인 경우 재귀적으로 탐색하여 하위 폴더도 확인
      findJsFiles(filePath, fileList);
    } else if (file.endsWith('.js')) {
      // convert-js-to-ts.js 파일은 제외
      if (file === 'convert-js-to-ts.js') {
        return;
      }
      // .js 파일인 경우 리스트에 추가
      fileList.push(filePath);
    }
  });

  return fileList;
}

// 기준 디렉토리 하위의 모든 .js 파일 찾기 (재귀적으로 모든 하위 폴더 포함)
console.log(`Searching for .js files in: ${path.resolve(baseDir)}`);
const jsFiles = findJsFiles(baseDir);

console.log(`Found ${jsFiles.length} .js file(s)\n`);

// 찾은 각 .js 파일에 대해 변환 작업 수행
jsFiles.forEach((filePath) => {
  // .js 확장자를 .ts로 변경한 경로 생성
  const tsFilePath = filePath.replace(/\.js$/, '.ts');

  // 이미 .ts 파일이 존재하면 중복 생성을 방지하기 위해 건너뛰기
  if (fs.existsSync(tsFilePath)) {
    console.log(`Skipped (already exists): ${tsFilePath}`);
    return;
  }

  // 원본 .js 파일 내용 읽기
  const originalCode = fs.readFileSync(filePath, 'utf8').toString();
  // 각 줄 앞에 들여쓰기 추가 (IIFE 내부에서 실행되도록)
  const indentedCode = originalCode.replaceAll(os.EOL, `${os.EOL}  `);
  // 즉시 실행 함수 표현식(IIFE)으로 감싼 코드 생성
  const wrappedCode = `(() => {${os.EOL}  ${indentedCode}${os.EOL}})();${os.EOL}`;

  // 변환된 코드를 .ts 파일로 저장
  fs.writeFileSync(tsFilePath, wrappedCode, 'utf8');

  console.log(`Converted: ${filePath} → ${tsFilePath}`);
});

console.log(`\nConversion completed. Total files processed: ${jsFiles.length}`);
