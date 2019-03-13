//1 способ

/*const user = {
 name: "John Smith",
 sayHi: function() {
   alert(this.name)
 },
 timeoutSayHi: function() {
   setTimeout(user.sayHi.bind(user), 1000); 
 }
};



user.sayHi();
user.timeoutSayHi();
*/


//2 способ
const user = {
    name: "John Smith",
    sayHi: function() {
        alert(this.name)
    },
    timeoutSayHi: function() {
        setTimeout(function() {
            user.sayHi(); // Вася
        }, 1000);
    }
};
user.sayHi();
user.timeoutSayHi()