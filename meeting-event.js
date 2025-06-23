//Задание 5. Запланированная встреча

const dayStart = "07:30"; // начало дня
const dayEnd = "17:45"; // конец дня;

let [start_hours, start_min] = dayStart.split(":").map(Number); // разделяю строку через : и перевожу его в number;
let [end_hours, end_min] = dayEnd.split(":").map(Number); // разделяю строку через : и перевожу его в number;

function scheduleMeeting(startTime, durationMinutes) {
  let float_startDay = start_hours * 60 + start_min; // Конвертирую часы в минуты
  let float_endDay = end_hours * 60 + end_min; // Конвертирую часы в минуты

  let [startTime_hours, startTime_min] = startTime.split(":").map(Number); // разделяю строку через : и перевожу его в number;

  let float_startTime = startTime_hours * 60 + startTime_min; // Конвертирую часы в минуты

  if (
    float_startTime >= float_startDay &&
    float_startTime + durationMinutes <= float_endDay
  ) {
    console.log(true);
  } else {
    console.log(false);
  }
}

scheduleMeeting("17:30", 30);

//Время выполнения: O(1)
//Сложность: 3/10
//Описание: Проверяет, можно ли начать встречу в заданное время так, чтобы она уместилась в пределах рабочего дня. Все значения переводятся в минуты для сравнения.