function delay(ms) {
 return new Promise((resolved,rejected)=>{
 	setTimeout(()=>{
 		resolved();
 	},ms)
 });
}

delay(2000).then(() => alert("Hello!"));