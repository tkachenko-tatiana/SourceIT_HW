/* 1-ый метод */
// const user = {
//     name: "John Smith",
//     sayHi: function() {
//       alert(this.name)
//     },
//     timeoutSayHi: function() {
//       setTimeout((this.sayHi).bind(this), 1000);
//     }
//    };
//    user.sayHi();
//    user.timeoutSayHi();

/* 2-ой метод */
const user = {
  name: "John Smith",
  sayHi: function() {
      alert(this.name)
  },
};

setTimeout(function() {
  user.sayHi();
}, 1000);

user.sayHi();
