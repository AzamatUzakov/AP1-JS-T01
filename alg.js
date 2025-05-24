//Сложность алгоритма: 2 из 10
//Временная сложность: O(n)
//Что делает этот алгоритм: Генерация диапазона чисел
//function range(start, end) {
//  let arr = [];
//  for (start = start; start < end + 1; start++) {
//    arr.push(start);
//  }
//  console.log(arr);
//}
//range(0, 5);
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Сложность алгоритма: 1 из 10
//Временная сложность: O(1)
//Что делает этот алгоритм: Поиск элемента в массиве (с ошибкой)
//function include(input, output) {
//  for (let i = 0; i < input.length; i++) {
//    if (input[i] === output) {
//      return console.log(true);
//    } else {
//      return console.log(false);
//    }
//  }
//}
//include([10, 30, 30, 10], 10);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Сложность алгоритма: 3 из 10
//Временная сложность: O(n)
//Что делает этот алгоритм: Подсчет вхождений элемента в массив
//function countOccurrences(inp, output) {
//  let count = 0;
//  for (let i = 0; i < inp.length; i++) {
//    if (inp[i] === output) {
//      count++;
//    }
//  }
//  console.log(count);
//}
//
//countOccurrences([10, 3, 40, 10, 10, 3], 3);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Сложность алгоритма: 6 из 10
//Временная сложность: O(n²)
//Что делает этот алгоритм: Поиск уникальных элементов в массиве
//function uniqueElements(inp, out) {
//  let count = 0;
//  let arr = [];
//  for (let i = 0; i < inp.length; i++) {
//    count = 0;
//    for (let j = 0; j < inp.length; j++) {
//      if (inp[i] === inp[j]) {
//        count++;
//      }
//    }
//    if (count === 1) {
//      if (arr.includes(inp[i]) === false) {
//        arr.push(inp[i]);
//      }
//    }
//  }
//
//  console.log(count);
//
//  console.log(arr);
//}
//uniqueElements([4, 1, 3, 2, 2, 5, 1]);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Сложность алгоритма: 5 из 10
//Временная сложность: O(n²)
//Что делает этот алгоритм: Поиск пары чисел, сумма которых равна целевому значению
//function uniqueNums(inp, target) {
//  for (let i = 0; i < inp.length; i++) {
//    for (let g = i + 1; g < inp.length; g++) {
//      if (inp[i] + inp[g] === target) {
//        console.log(inp[i], inp[g]);
//      }
//    }
//  }
//}
//
//uniqueNums([1, 2, 3, 4, 5, 6], 7);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Сложность алгоритма: 7 из 10
//Временная сложность: O(n²)
//Что делает этот алгоритм: Создание массива, где каждый элемент — произведение всех элементов исходного массива, кроме текущего
//function arr(inp) {
//  const newArr = [];
//  for (let i = 0; i < inp.length; i++) {
//    console.log(i, "I");
//    let product = 1;
//    for (let g = 0; g < inp.length; g++) {
//      console.log(g, "G");
//
//      if (g !== i) {
//        product *= inp[g];
//      }
//    }
//    newArr.push(product);
//    console.log(product);
//  }
//  console.log(newArr);
//}
//arr([1, 2, 3, 4]);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Сложность алгоритма: 3 из 10
//Временная сложность: O(n)
//Что делает этот алгоритм: Подсчет гласных в строке
//function words(inp) {
//  let count = 0;
//  const processing = inp.toLowerCase().split("");
//
//  for (let i = 0; i < processing.length; i++) {
//    if (
//      processing[i] === "a" ||
//      processing[i] === "e" ||
//      processing[i] === "i" ||
//      processing[i] === "o" ||
//      processing[i] === "u"
//    ) {
//      count++;
//    }
//  }
//  console.log(count);
//}
//
//words("Hello World"); // 3
//words("JavaScript"); // 3
//words("aeiou"); // 5

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Сложность алгоритма: 6 из 10
//Временная сложность: O(n²)
//Что делает этот алгоритм: Поиск второго по величине уникального числа в массиве
//function nums(inp) {
//  const newArr = [];
//
//  for (let i = 0; i < inp.length; i++) {
//    if (!newArr.includes(inp[i])) {
//      newArr.push(inp[i]);
//    }
//  }
//  newArr.sort((a, b) => a - b).reverse();
//  if (newArr[1] === null || newArr[1] === undefined) {
//    console.log(null);
//  } else {
//    console.log(newArr[1]);
//  }
//}
//
//nums([1, 2, 4, 3, 5, 5]); // 4
//nums([10, 10, 9]); // 9
//nums([5]); // null
//nums([7, 7, 7, 7]); // null

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Сложность алгоритма: **2 из 10**
//Временная сложность: **O(n)**
//Что делает этот алгоритм: **Вычисление среднего целого значения массива**
// function arrNums(inp) {
//  let result = inp.reduce((sum, item) => sum + item, 0);
//  let razdeleni = result / inp.length;
//  let orgRes= Math.floor(razdeleni);
//  console.log(orgRes);
//}
//
//arrNums([1, 2, 3, 4, 5]); // 3
//arrNums([10, 10, 10]); // 10
//arrNums([3, 5]); // 4

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Сложность алгоритма: **8 из 10**
//Временная сложность: **O(n³)**
//Что делает этот алгоритм: **Поиск всех уникальных троек чисел и пар чисел, сумма которых равна целевому значению**

//function nums(inp, target) {
//  for (let i = 0; i < inp.length; i++) {
//    for (let g = i + 1; g < inp.length; g++) {
//      for (let f = g + 1; f < inp.length; f++) {
//        if (inp[i] + inp[g] === target) {
//          console.log(inp[i], inp[g]);
//        }
//        if (inp[i] + inp[g] + inp[f] === target) {
//          console.log(inp[i], inp[g], inp[f]);
//        }
//      }
//    }
//  }
//}
//nums([10, 1, 2, 7, 6, 5], 8);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Сложность алгоритма: **7 из 10**
//Временная сложность: **O(n²)**
//Что делает этот алгоритм: **Поиск дубликатов в массиве**
//function findDuplicates(inp) {
//  let arr = [];
//  let count = 0;
//  for (let i = 0; i < inp.length; i++) {
//    for (let g = i + 1; g < inp.length; g++) {
//      if (inp[i] === inp[g]) {
//        count++;
//        if (!arr.includes(inp[i])) {
//                  arr.push(inp[i]);
//
//        }
//      }
//
//    }
//  }
//  console.log(arr);
//}
//findDuplicates([1, 2, 3, 2, 3, 3, 4, 5, 5]); // => 2, 5
//findDuplicates([10, 20, 10, 30, 40, 30, 50]); // => 10, 30
//findDuplicates([1, 2, 3, 4]); // => ничего не выводит

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Сложность алгоритма: 7 из 10
//Временная сложность: O(n² · k log k)
//Что делает этот алгоритм:
//Находит и выводит пары строк из массива, которые являются анаграммами друг друга. Для этого каждая строка сортируется по буквам и сравнивается с остальными. Если отсортированные строки совпадают — они анаграммы.
//function anagrams(inp) {
//  for (let i = 0; i < inp.length; i++) {
//    let splitArrTop = inp[i].split("").sort().join("");
//
//    for (let g = i + 1; g < inp.length; g++) {
//      let splitArr = inp[g].split("").sort().join("");
//
//      if (splitArrTop === splitArr) {
//        console.log(inp[i], inp[g]);
//      }
//    }
//  }
//}
//
//anagrams([
//  "listen",
//  "silent",
//  "enlist",
//  "hello",
//  "world",
//  "ndkcmdk",
//  "dlrow",
//  "olleh",
//]);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Сложность алгоритма: 4 из 10
//Временная сложность: O(n)
//Что делает этот алгоритм:
//Определяет символы, которые встречаются в строке чаще всего. Игнорирует пробелы и регистр. Возвращает массив, содержащий наиболее частый(е) символ(ы) и их количество
//function mostFrequentChars(inp) {
//  let checkReplace = inp.replace(/\s/g, "").toLowerCase().split("");
//  let object = {};
//  let result = [];
//  let count = 0;
//  for (let i = 0; i < checkReplace.length; i++) {
//    if (object[checkReplace[i]] !== undefined) {
//      object[checkReplace[i]] += 1;
//    } else {
//      object[checkReplace[i]] = 1;
//    }
//  }
//
//  let filter = Object.values(object);
//  for (let val of filter) {
//    if (count < val) {
//      count = val;
//    }
//  }
//
//  for (let [key, value] of Object.entries(object)) {
//    if (value === count) {
//      result.push(key, value);
//    }
//  }
//  console.log(result);
//}
//
//mostFrequentChars("hello world"); // ['l']
//mostFrequentChars("abc abc abc"); // ['a', 'b', 'c']
//mostFrequentChars("aabbccdd"); // ['a', 'b', 'c', 'd']

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
