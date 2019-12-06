let x = prompt('введите значение для x');

   if (x < -2){
        x = (3*(x*x) -8)
}
  else if  (x >= -2 && x <= 4){
        x = ( -9* (x*x) - 12)
}
    else{
    x = ((32) + x);
}
  alert (x);