//Задание 10. Поиск наибольшей последовательности нулей
function getMaxZeroCount(raw) {

    let maxCount = 0
    let currentCount = 0
    let splitNums = raw.split("")

    for (let i = 0; i < splitNums.length; i++) {
        if (splitNums[i] === "0") {
            currentCount++
        } else if (splitNums[i] === "1") {//если в последовательности будет 1, то идет сравнение
            if (maxCount < currentCount) {
                maxCount = currentCount
            }
            currentCount = 0//сбрсываем счетчик
        }
    }
    console.log(maxCount);
}

getMaxZeroCount("1010010001")
//Время выполнения: O(n)
//Сложность: 3 / 10
//Описание: Находит максимальную последовательность подряд идущих нулей в строке, используя счётчик текущей серии и сохранение максимума.

