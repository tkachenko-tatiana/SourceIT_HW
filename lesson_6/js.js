let array = [];

for (let i = 0; i < 6; i++) {
	array[i] = [];	
    for (let j = 0; j < 6; j++) {
        if (j == 5 - i){
        	array[i][j] = 1;
        } else {
            array[i][j] = 0;
        }
    }
}
console.table(array);