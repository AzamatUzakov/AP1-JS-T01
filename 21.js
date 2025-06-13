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
//function getNOD(first, second) {
//  while (first % second !== 0) {
//    let a = first % second;
//    first = second;
//    second = a;
//
//    second % first;
//  }
//  console.log(second);
//}
//
//getNOD(1, 3);

//-------------------------------------------------------------------------//

//Задание 4. Нахождение простых чисел

function getSimpleNumbers(touple) {
  let first_number = touple[0]; //беру первый элемент из массива
  let second_number = touple.at(-1); //беру последний элемент из массива
  let all_nums = [];
  for (let i = first_number; i <= second_number; i++) { //делаю цикл чтобы вывести диапазон
    all_nums.push(i);
  }

  for (let g = 0; g < all_nums.length; g++) {//первый цикл по массиву
    if (all_nums[g] !== false) {//проверяю если числа простые
      for (let f = g + 1; f < all_nums.length; f++) {//второй цикл по маасиву, начиная с g + 1 элемента
        if (all_nums[f] % all_nums[g] === 0) {//беру эмент и нахожу все кратные ему числа
          all_nums[f] = false; // если число не простое то даю ему fasle
        }
      }
    }
  }
  return all_nums.filter((n) => {
    if (n !== false) {
      console.log(n);
    }
  });
}

getSimpleNumbers([2, 10]); //2 3 5 7
