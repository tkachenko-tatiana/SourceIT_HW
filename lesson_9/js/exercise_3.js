let calculator = {
    result: 0,
    input: function (a) {
        this.result = a;
        return this;
    },
    sum: function(b) {
        this.result += b;
        return this;
    },
    mul: function(b) {
        this.result *= b;
        return this;
    },
    sub: function(b) {
        this.result -= b;
        return this;
    }
};

const res = calculator.input(1).sum(2).mul(3).sub(4);

console.log('res: ', res);
