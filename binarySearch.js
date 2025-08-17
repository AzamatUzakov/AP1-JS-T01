//Задание 9. Бинарный поиск
function binarySearch(arrayOfNumbers, num) {
    
    let sortArr = arrayOfNumbers.sort((a, b) => a - b)
    let left = 0
    let right = sortArr.length - 1
    
    while (left <= right) {
        let mid = Math.floor((left + right) / 2)//Нахожу середину длинны массива
        if (sortArr[mid] === num) {
            return mid
        } else if (num < sortArr[mid]) {//ищет в левой части
            right = mid - 1//сдивагаем центр так как мы уже его проверили
        } else {//ищет в правой части
            left = mid + 1 //сдивагаем центр так как мы уже его проверили
        }
    }
    return -1
}
console.log(binarySearch([-10, -5, 0, 5, 10], 0));

//Время выполнения: O(log n)(поиск) + O(n log n)(сортировка перед поиском) → итог O(n log n)
//Сложность: 5 / 10
//Описание: Бинарный поиск: сначала сортирует массив, затем делит диапазон пополам и ищет число, сужая границы до тех пор, пока не найдёт или не вернёт - 1.