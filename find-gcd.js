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

getNOD(1, 3);

// Время выполнения: O(log n)
//Сложность: 3/10
//Описание: Это алгоритм Евклида — находит наибольший общий делитель (НОД) двух чисел путём деления с остатком.