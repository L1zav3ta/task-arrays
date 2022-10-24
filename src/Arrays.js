/*
  В функцию arraySorting() приходит строка чисел с разделительными запятыми вида "1,2,33,0,17".
  Преобразуте строку в массив чисел, отсортируйте их по возрастанию и верните строку с упорядоченными числами,
  разделенными запятыми.
*/
export function arraySorting(data) {
    let arOfString = data.split(','); // преобразуем строку в массив строк

    // "Преобразуте строку в массив чисел"
    let arOfInt = arOfString.map(function (elem) {
        return parseInt(elem);
    });

    const sortedArOfInt = arOfInt.sort((a, b) => a - b); // "отсортируйте их по возрастанию"
    return sortedArOfInt.join(); // "верните строку с упорядоченными числами, разделенными запятыми"
}

/*
  В функцию arrayFiltering() приходит массив целых чисел.
  Преобразуйте массив таким образом, чтобы все элементы массива, в которых содержатся числа более 100,
  были бы удалены из массива, и верните его в качестве результата функции.
*/
export function arrayFiltering(data) {
    let filtered = data.filter(function (elem) {
        return elem <= 100;
    });
    return filtered;
}

/*
  В функцию arrayPushing() приходят два массива целых чисел размерностью 5 элементов.
  Получите третий массив размерностью 10 элементов, в котором последовательно чередуются
  значения из первых двух массивов, и верните его в качестве результата функции.
*/
export function arrayPushing(array1, array2) {
    let res = [];
    for (let i = 0; i < array1.length; i++) {
        res.push([].concat(array1[i], array2[i])); // -> [[1,101], [2,102], ... [5,105]]
    }
    return res.flat(); // -> [1, 101, 2, 102, ..., 5, 105]
}
