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
// Время выполнения: O(n²)
// Сложность: 8/10
//Описание: Реализация Решета Эратосфена — вычеркивает составные числа из диапазона, оставляя только простые.