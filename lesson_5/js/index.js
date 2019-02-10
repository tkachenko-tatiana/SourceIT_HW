
function calcNum(num)
{
    let remdiv = 0;
    while(num!=0)
    {
        remdiv+=(num%10);
        num/=10;
        num = Math.floor(num)
    }
    return remdiv;
}

function calcNum_sum_in_one_didgit(num)
{
    let sum = calcNum(num);
    while(sum>=10)
    {
        sum = calcNum(sum);
    }
    return sum;
}

function joinArray(arr1, arr2)
{
    for(let i = 0;i<arr2.length; i++)
    {
        arr1.push(arr2[i]);
    }
    return arr1;
}

function getEvenElements(arr)
{
    let newarr = [];
    for(let i = 0;i<arr.length; i++)
    {
        if(arr[i]%2===0)
        {
            newarr.push(arr[i]);
        }
    }

    return newarr;
}

/*Функция принимает массив объектов вида { id: 1, name: "Иван", age: 42 }
Функция должна вернуть массив имён пользователей которым исполнилось 18 лет.*/
let people_arr = [{ id: 1, name: "Иван", age: 42 }, 
                  { id: 2, name: "Иван2", age: 16 }, 
                  { id: 3, name: "Иван3", age: 56 }];

function getAdultName(arr_object)
{
    let arr_name_age18 = [];
    for(let i = 0; i<arr_object.length; i++)
    {
        if(arr_object[i].age >= 18)
        {
            arr_name_age18.push(arr_object[i].name);
        } 
    }
    return arr_name_age18;
}
/*
1) Написать функцию которая принимает неограниченное число массивов и возвращает объединенный массив.
2) Функция принимает строку, содержащую последовательность круглых, квадратных или фигурных скобок:
например: "[ ((1 + 2) * 5) + (42).toString() ] }"
 Функция должна вернуть true если все скобки закрыты в правильном порядке или false в противном случае.
*/

function join_many_Array()
{
    const newBig_arr = [];
    for(let i = 0;i<arguments.length; i++)
    {
        for(let j = 0;j<arguments[i].length; j++)
        {
            newBig_arr.push(arguments[i][j]);
        }
    }
    return newBig_arr;
}

function parentheses(string)
{
    const temp_arr = string.split('');

        let open_cir = 0;
        let close_cir = 0;
        let open_sqr = 0;
        let close_sqr = 0;
        let open_fig = 0;
        let close_fig = 0;

    for(let i = 0;i<temp_arr.length; i++)
    {
        switch (temp_arr[i]) {
            case '(':
                open_cir++;
                break;
            case ')':
                close_cir++;
                break;
            case '[':
                open_sqr++;
                break;
            case ']':
                close_sqr++;
                break;
            case '{':
                open_fig++;
                break;
            case '}':
                close_fig++;
                break;
            default:
                break;
        }
    }

    if(open_cir == close_cir && open_sqr == close_sqr && open_fig == close_fig)
    {
        return true;
    }
    return false;
}

const str = parentheses("[ ((1 + 2) * 5) + (42).toString() ] }");

const sum = calcNum(135);
const sum_in_one = calcNum_sum_in_one_didgit(1448);
const newArray = joinArray([1,2,3],[4,5,6]);
const even_values_arr = getEvenElements([1,2,3,4,5,6]);
const arr_name_age18 = getAdultName(people_arr);
const big_arr = join_many_Array([1,2],[3,4],[5,6],[1,2],[3,4],[5,6],[1,2],[3,4],[5,6]);
