//Задание 1. Создание диапазона
function range(start, end) {
  let arr = [];

  for (let i = start; i < end + 1; i++) {
    arr.push(i);
  }
  console.log(arr);
}
range(0, 10);

//Время выполнения: O(n)
//Сложность:  2/10
// Описание:Функция range(start, end) создаёт массив чисел от start до end включительно.
