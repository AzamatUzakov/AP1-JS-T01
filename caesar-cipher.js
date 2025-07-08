//Задание 6. Шифр Цезаря

function alphabetMap(rawString, mapCount) {



    for (let g = 0; g < mapCount; g++) {
        let result = ""
        let split_text = rawString.split('')
        for (let i = 0; i < split_text.length; i++) {


            if (split_text[i] === "a") {
                result += "def"
            } else if (split_text[i] === "b") {
                result += "efc"
            } else if (split_text[i] === "c") {
                result += "abe"
            } else if (split_text[i] === "d") {
                result += "cba"
            } else if (split_text[i] === "e") {
                result += "fba"
            } else if (split_text[i] === "f") {
                result += "dcb"
            }
        }
        rawString = result
    }

    console.log(rawString);




}



alphabetMap("aa", 2)

//Время выполнения: O(n × k) n — длина строки, k — количество итераций mapCount
//Сложность: 5 / 10
//Описание: Пользовательская вариация шифра Цезаря: каждый символ заменяется на уникальную последовательность букв по заданным правилам, повторяется mapCount раз.