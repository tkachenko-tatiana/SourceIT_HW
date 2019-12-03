let text = 'Hello JavaScript, i am trying to do my howework =)'; //text.length = 50 
let result='';
function cut(n){
	if(text.length>n){
		result += text.slice(0,n).concat('...');
		console.log(result);
		return n;
		
	} else{
		result +=text;
		console.log(result);
		return n;
	}
	
}

cut(15);

