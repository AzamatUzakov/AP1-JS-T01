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
getNumbersIdBySum([0, 5, 2, 3, 4, 5, 7, 2, 4, 8, 4, 2, 7, 9], 16)
//Время выполнения: O(n²)
//Сложность: 4/10
//Перебирает все пары чисел в массиве, чтобы найти те, сумма которых равна заданному значению.