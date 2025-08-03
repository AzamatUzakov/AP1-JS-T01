//Задание 7. Скользящее среднее
function sma(arrayOfNumbers, period) {
    let smaArr = []
    for (let i = 0; i < arrayOfNumbers.length; i++) {
        let start = i - period + 1//Используется для скользящего среднего, чтобы взять period элементов, заканчивающихся на позиции i.
        let sliceNum = arrayOfNumbers.slice(start, period + 1)
        let sum = sliceNum.reduce((a, b) => a + b, 0) / period
        smaArr.push(sum)
        console.log(smaArr);
    }
}
sma([1, 2, 3], 2)
//Время выполнения: O(n × p) n — длина массива, p — длина периода (slice и reduce внутри цикла)
//Сложность: 5/10
//Описание: Вычисляет скользящее среднее: на каждом шаге берёт period последних чисел, считает их среднее и сохраняет в результат.
