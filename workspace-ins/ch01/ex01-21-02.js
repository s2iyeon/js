/*
for문을 이용해서 다양한 별찍기
*/

const lines = 5; // 전체 줄 수를 정의

/*
*
**
***
****
*****
*/
for (let i=0; i<lines; i++) {
  let star = '';
  for (let k=0; k<=i; k++) {
    star += '*';
  }
  console.log(star);
}


/*
*****
****
***
**
*
*/
for (let i=0; i<lines; i++) {
  let star = '';
  for (let k=0; k<(lines-i); k++) {
    star += '*';
  }
  console.log(star);
}

/*
    *
   **
  ***
 ****
*****
*/

/*
*****
 ****
  ***
   **
    *
*/


/*
    *
   ***
  *****
 *******
*********
*/

/*
*********
 *******
  *****
   ***
    *
*/