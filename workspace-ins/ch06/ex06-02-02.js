// Enum 타입
(() => {
    function printLanguage(lang) {
        switch (lang) {
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
    let Language;
    (function (Language) {
        Language[Language["JavaScript"] = 0] = "JavaScript";
        Language[Language["C"] = 1] = "C";
        Language[Language["Python"] = 2] = "Python";
        Language[Language["Java"] = 3] = "Java"; // 3
    })(Language || (Language = {}));
    console.log(Language.Python, Language.C);
    function printLanguage(lang) {
        switch (lang) {
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
    printLanguage('Java');
    printLanguage('C');
    printLanguage('Python');
    printLanguage('Javascript');
})();
export {};
