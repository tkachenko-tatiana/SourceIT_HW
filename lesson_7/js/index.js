
/*1. Функция принимает массив. Функция должна вернуть "настоящую длинну массива" Пример: [1,2,3,4,5] => 5
               [1,2,3,4, ... пустота... 10] => 5
Используйте один из перебирающих методов массивов.*/

function trueLength(array)
{
    return array.reduce((sum, current) => {
        if(current){
            sum++;
        }
        return sum;
      }, 0);
}

let len = trueLength([1,2,3,4, , , , ,  , ,10]);

/*2. Функция принимает массив покупок вида { name: "Морковь", amount: 3, price: 2.50 }. Функция должна вернуть 
сумму всех покупок. Используйте один из перебирающих методов массивов*/

function calculateCart(items)
{
    return items.reduce((sum, currentItem) => {
        sum+=currentItem.price;
        return sum;
      }, 0);
}

let summ = calculateCart([{ name: "Морковь", amount: 3, price: 2.50 },
                          { name: "Свекла", amount: 2, price: 21.50 }, 
                          { name: "Хлеб", amount: 4, price: 27.50 }, 
                          { name: "Рыба", amount: 6, price: 1.50 }, 
                          { name: "Вода", amount: 8, price: 101.50 }]);

/*3. Функция принимает массив покупок вида  { id: 1, name: "Морковь", amount: 3, price: 2.50 } и id продукта.
Функция должна вернуть цену этого продукта.*/

function findPriceById(id, items)
{
    if(id<=items.length){
      for(let i=0;i<items.length;i++){
        if(items[i].id==id){
            return items[i].price;
        }
      }
    }
}

let summ = findPriceById(3, [{ id: 1, name: "Морковь", amount: 3, price: 2.50 },
                          { id: 2, name: "Свекла", amount: 2, price: 21.50 }, 
                          { id: 3, name: "Хлеб", amount: 4, price: 27.50 }, 
                          { id: 4, name: "Рыба", amount: 6, price: 1.50 }, 
                          { id: 5, name: "Вода", amount: 8, price: 101.50 }]);


/*4. Функция принимает массив покупок вида { id: 1, name: "Морковь", amount: 3, price: 2.50, category: ‘vegetables’ }  
и название категории. Функция должна вернуть продукты только данной категории.*/

function filterByCategory(category, items)
{
    let ret= [];
    items.forEach((current, i, arr) => {
        if(category == current.category){
            ret.push(current)
        }
    });
    return ret;
}

let summ = filterByCategory('yoghurt', [{ id: 1, name: "Морковь", amount: 3, price: 2.50, category: 'vegetables' },
                             { id: 2, name: "йогурт", amount: 3, price: 2.50, category: 'yoghurt' },
                             { id: 2, name: "йогурт2", amount: 3, price: 2.50, category: 'yoghurt' },
                             { id: 2, name: "йогурт3", amount: 3, price: 2.50, category: 'yoghurt' },
                             { id: 2, name: "йогурт4", amount: 3, price: 2.50, category: 'yoghurt' },
                             { id: 3, name: "конфета", amount: 3, price: 2.50, category: 'candy' }, 
                             { id: 4, name: "мука", amount: 3, price: 2.50, category: 'flour' }]);

/*5. Написать функцию, которая сравнивает 2 массива с примитивами (строки, числа). 
Массивы [1,2,3] и [1, 3, 2] равны так как содержат одни и те же элементы.
Функция должна вернуть true, если они равны и false если нет.*/

function compareArrays(arr1, arr2){
    let cnt = 0;
    if(arr1.length == arr2.length){
        for(let i = 0 ;i<arr1.length;i++){
            for(let j = 0 ;j<arr1.length;j++){
                if(arr1[i]===arr2[j]){
                    cnt++;
                }
            }
        }
    }
    if(cnt==arr2.length){
        return true;
    }
    else{
        return false;
    }
    
}

let compret = compareArrays([1,2,3] , [1, 3, 2]);


/*6. Функция принимает произвольный двухмерный массив.
Пример [[1, 2, 3], [4, 5], [6]]
Функция должна вернуть сумму его элементов.*/

function sum(arr){
    let cnt = 0;
    for(let i = 0 ;i<arr.length;i++){
        for(let j = 0 ;j<arr[i].length;j++){
            cnt+=arr[i][j];
        }
    }
    return cnt;
}

let compret = sum([[1, 2, 3], [4, 5], [6]]);

/*7. Заполнить элементы побочной диагонали матрицы 1, а все остальные 0.*/

function MatrixDiagon()
{
    let len=5;
    let cnt=len;
    let matrix = [];
    for(let i = 0 ;i<=len;i++){
        matrix[i]=[];
        for(let j = 0;j<=len;j++){
            if(j==cnt)
            {
                matrix[i][j]=1;
                cnt--;
            }
            else{
                matrix[i][j]=0;
            }
        }    
    }
    console.table(matrix);
}

MatrixDiagon();