'use strict'

const obj = {
    a: 12,
    b: 'I can do it',
    c: {
        d: {
            e: 14,
        },
        f: 'test'
    }
}

function deepClone(obj) {
    if (typeof obj === 'object') {
        return Object.keys(obj)
            .map(function (item) {
                return {
                    [item]: deepClone(obj[item])
                };
            })
            .reduce(function (item, clone) {
                return Object.assign(item, clone)
            });
    } else {
        return obj;
    }
}

const clone = deepClone(obj);
console.log(obj === clone)
console.log(obj.c === clone.c)
console.log(obj.c.d === clone.c.d)
