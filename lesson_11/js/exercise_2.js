/* 1-ый метод */
// const group = {
//    users: ['student 1', 'student 2'],
//    sayHi: function(user) {
//      console.log(`Hi ${user}`);
//    },
//    sayHiToAll: function() {
//      this.users.forEach((user) => {
//        this.sayHi(user)
//      })
//    }
//  }
//   group.sayHiToAll();

/* 2-ой метод */
const group = {
  users: ['student 1', 'student 2'],
  sayHi: function(user) {
      console.log(`Hi ${user}`);
  },
  sayHiToAll: function() {
      this.users.forEach((function(user) {
          this.sayHi(user)
      }
      ).bind(this))
  }
}
group.sayHiToAll();
