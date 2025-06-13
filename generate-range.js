//Задание 1. Создание диапазона
function range(start, end) {
  let arr = [];

  for (let i = start; i < end + 1; i++) {
    arr.push(i);
  }
  console.log(arr);
}
range(0, 5);

//Функция range(start, end) создаёт массив чисел от start до end включительно.
// Время выполнения: O(n)
//Сложность понимания: 2/10
