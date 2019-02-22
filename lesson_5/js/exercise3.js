function joinArrays(arr1, arr2) { 
    let doubleArr = arr1.concat(arr2); // объявляем переменную и с помощью метода concat создаем новый массив, в который передается arr1 и arr2 
    return doubleArr; // возвращаем doubleArr
}

const newArr = joinArrays([1,2,3], [4,5,6]);
console.log(newArr);