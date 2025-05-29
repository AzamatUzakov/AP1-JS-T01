//Задание 1. Создание диапазона
//function range(start, end) {
//  let arr = [];
//
//  for (let i = start; i < end + 1; i++) {
//    arr.push(i);
//  }
//  console.log(arr);
//}
//range(0, 5);

//-------------------------------------------------------------------------//

//Задание 2. Поиск двух чисел, составляющих сумму
//function getNumbersIdBySum(arrayOfNumbers, sum) {
//  for (let i = 0; i < arrayOfNumbers.length; i++) {
//    for (let g = arrayOfNumbers[i]; g < arrayOfNumbers.length; g++) {
//      if (arrayOfNumbers[i] + arrayOfNumbers[g] === sum) {
//        console.log(arrayOfNumbers[i], arrayOfNumbers[g]);
//      } else {
//        console.log(null);
//      }
//    }
//  }
//}
//getNumbersIdBySum([0, 5, 2, 3, 4, 5, 7, 2, 4, 8, 4, 2, 7, 9], 16);

//-------------------------------------------------------------------------//

//Задание 3. Нахождение НОД
function getNOD(first, second) {
  while (first % second !== 0) {
    let a = first % second;
    first = second;
    second = a;

    second % first;
  }
  console.log(second);
}

getNOD(1, 3)
//-------------------------------------------------------------------------//

//Задание 4. Нахождение простых чисел

/* function getSimpleNumbers(touple) {
  let start_num = touple[0];
  let end_num = touple.at(-1);

  for (let i = start_num; i <= end_num; i++) {
    //    console.log(i);
    if (i / i === 0 && i / 1) {
      //      console.log(i);
    } else {
      console.log(i);
    }
  }
}

getSimpleNumbers([2, 10]); */
