/* //Задание 8. Сортировка слиянием
function mergeSort(arrayOfNumbers) {

    if (arrayOfNumbers.length <= 1) return arrayOfNumbers
    let midle = arrayOfNumbers.length / 2
    let leftSlice = mergeSort(arrayOfNumbers.slice(0, midle))
    let rightSlice = mergeSort(arrayOfNumbers.slice(midle))

    console.log(leftSlice);
    console.log(rightSlice);
    return merge(leftSlice, rightSlice)

}
function merge(leftSlice, rightSlice) {
    let arr = []
    
}

mergeSort([38, 27, 43, 3, 9, 82]) */