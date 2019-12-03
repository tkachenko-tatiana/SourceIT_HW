function getRandom(){
	let randomNumber = Math.ceil(Math.random()*10);
	console.log(randomNumber)
	return new Promise((resolve, reject)=>{
	setTimeout(function(){
		if(randomNumber<=5){
			resolve()
		}else{
			reject(new Error('Reject'))
		}
	},randomNumber*1000)

	})
}

getRandom()


