//Задание 8. Сортировка слиянием
function mergeSort(arrayOfNumbers) {

    if (arrayOfNumbers.length <= 1) return arrayOfNumbers
    let leftArr = arrayOfNumbers.slice(0, arrayOfNumbers.length / 2)//Разделяю масссив на половину
    let rightArr = arrayOfNumbers.slice(arrayOfNumbers.length / 2)//Разделяю масссив на половину


    let leftSorted = mergeSort(leftArr)//тут происходит рекурсия
    let rigthSorted = mergeSort(rightArr)//тут происходит рекурсия

    function merge(leftSorted, rigthSorted) {//function для слияния
        let resultArr = []//для результат
        while (leftSorted.length && rigthSorted.length) {//Пока оба массива не пустые, цикл будет выполняться.
            if (leftSorted[0] < rigthSorted[0]) { //Если первый элемент leftSorted меньше, чем первый элемент rigthSorted, то:
                resultArr.push(leftSorted.shift())//удаляет первый элемент из leftSorted и возвращает его.
            } else {
                resultArr.push(rigthSorted.shift())
            }
        }
        return resultArr.concat(leftSorted, rigthSorted)//добавление оставшихся элементов
    }
    return merge(leftSorted, rigthSorted)
}

console.log((mergeSort([38, 27, 43, 3, 9, 82])));
//Время выполнения: O(n log n)
//Сложность: 7 / 10
//Описание: Сортировка слиянием: рекурсивно делит массив пополам, сортирует каждую половину и объединяет их в один отсортированный массив.