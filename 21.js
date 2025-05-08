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
function getNumbersIdBySum(arrayOfNumbers, sum) {
  for (let i = 0; i < arrayOfNumbers.length; i++) {
    for (let g = arrayOfNumbers[i]; g < arrayOfNumbers.length; g++) {
      if (arrayOfNumbers[i] + arrayOfNumbers[g] === sum) {
        console.log(arrayOfNumbers[i], arrayOfNumbers[g]);
      } else {
        console.log(null);
      }
    }
  }
}
getNumbersIdBySum([1, 0], 5);





