// Enum 타입

(()=>{
  function printLanguage(lang: string){
    switch(lang){
      case 'JavaScript':
        console.log('자바스크립트 개발자군요!');
        break;
      case 'Python':
        console.log('파이썬 개발자군요!');
        break;
      case 'C':
        console.log('C언어 개발자군요!');
        break;
      case 'Java':
        console.log('자바 개발자군요!');
        break;
    }
  }
  printLanguage('Java');
  printLanguage('C');
  printLanguage('C++');
  printLanguage('Python');
  printLanguage('Javascript');
})();

(() => {
  // 숫자형 enum
  enum Language {
    JavaScript, // 0
    C,          // 1
    Python,     // 2
    Java        // 3
  }

  console.log(Language.Python, Language.C); // 2 1
  console.log(Language[0], Language[1]); // JavaScript C

  function printLanguage(lang: Language){
    console.log('전달받은 lang', lang);
    switch(lang){
      case Language.JavaScript:
        console.log('자바스크립트 개발자군요!');
        break;
      case Language.Python:
        console.log('파이썬 개발자군요!');
        break;
      case Language.C:
        console.log('C언어 개발자군요!');
        break;
      case Language.Java:
        console.log('자바 개발자군요!');
        break;
    }
  }
  printLanguage(Language.Java);
  printLanguage(Language.C);
  printLanguage(Language.Python);
  printLanguage(Language.JavaScript);
})();

(() => {
  // 문자열 enum
  enum Language {
    JavaScript = 'JS',
    C = 'C',
    Python = 'PY',
    Java = 'J'
  }

  console.log(Language.Python, Language.C); // PY C

  function printLanguage(lang: Language){
    console.log('전달받은 lang', lang);
    switch(lang){
      case Language.JavaScript:
        console.log('자바스크립트 개발자군요!');
        break;
      case Language.Python:
        console.log('파이썬 개발자군요!');
        break;
      case Language.C:
        console.log('C언어 개발자군요!');
        break;
      case Language.Java:
        console.log('자바 개발자군요!');
        break;
    }
  }
  printLanguage(Language.Java);
  printLanguage(Language.C);
  printLanguage(Language.Python);
  printLanguage(Language.JavaScript);
})();