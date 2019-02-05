/*Даны две переменные - a и b. 
Например, они равны a=1; b=2. 
Необходимо поменять местами эти числа (то есть a=2, b=1). 
Но не используя третью переменную.*/

function task_1()
{
    let a = 1, b = 2;
    console.log(a, b);
    b = [a, a = b][0];
    console.log(a, b);
}

/*Пользователь вводит два числа. 
Найти и вывести максимальное из двух чисел.  
Учтите вариант равенства чисел.*/
function task_2(age) 
{  
  let first = Number(prompt('Please input first number'));
  let secound = Number(prompt('Please input second number'));
  
  if (first > secound) 
  {
    alert( first );
  } 
  else if(first < secound)
  {
    alert( secound );
  }
  else
  {
    alert( "numbers equals" );
  }
}

/*В первом подъезде квартиры с 1 по 20. 
Во втором с 21 по 48. В третьем с 49 по 90. 
Пользователь вводит номер квартиры. 
Программа должна указать в каком подъезде находится данная квартира.
*/
function task_3(age) 
{  
  let flatroom = Number(prompt('Please input number of flat room'));
  
  if ((flatroom <= 20) && (flatroom != 0)) 
  {
    alert( "building entrance 1");
  } 
  else if((flatroom >= 21) && (flatroom <= 48))
  {
    alert( "building entrance 2" );
  }
  else if((flatroom >= 49) && (flatroom <= 90))
  {
    alert( "building entrance 3" );
  }
  else
  {
    alert( "wrong number of flat room" );
  }
}

/*Пользователь вводит год рождения. 
Программа показывает количество лет и если лет больше или равно 16, то пишет – «добро пожаловать», 
если нет – «вход воспрещен».*/
function task_4(age) 
{  
  let age_of_user = Number(prompt('Please input year of your birthday.'));
  
  age_of_user = 2019 - age_of_user;

  alert( "your age is " + age_of_user);

  if (age_of_user >= 16) 
  {
    alert( "добро пожаловать");
  } 
  else
  {
    alert( "вход воспрещен" );
  }
}


/*Написать программу, которая вычисляет выражение:*/
 
function task_5(age) 
{  
  let x = Number(prompt('Please input x.'));

  if(x < -2)
  {
    alert(3*Math.pow(x, 2) - 8);
  }
  else if(x >= -2 && x <= 4)
  {
    alert(-9*Math.pow(x, 2) - 12);
  }
  else
  {
    alert(32 + x);
  }
}

function main()
{
    task_1();
    task_2();
    task_3();
    task_4();
    task_5();
}

main();