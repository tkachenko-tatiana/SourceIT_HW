const users = [{
        id: 1,
        name: "Иван",
        age: 42
    },
    {
        id: 2,
        name: "Петро",
        age: 16
    }, {
        id: 3,
        name: "Василий",
        age: 14
    }, {
        id: 4,
        name: "Игорь",
        age: 20
    }, {
        id: 5,
        name: "Александр",
        age: 18
    }
];

function adultUsers(users) {
    let result = users.filter(user => {
        return user.age >= 18;
    });

    let arr = [];
    for (i = 0; i < result.length; i++) {
        arr.push(result[i].name);
    }
    return arr;
}

const newUsers = adultUsers(users);
console.log("newUsers: ", newUsers);