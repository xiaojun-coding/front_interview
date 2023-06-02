// 更改函数中的this指向
function sayName() {
    console.log(`My name is ${this.name}`);
}

const person = {
    name: '张三'
};
const people = {
    name: "李四"
}
sayName(); // My name is undefined

sayName.apply(person); // 输出：My name is 张三

sayName.apply(people) // My name is 李四

function sum(a, b) {
    return a + b;
}

const args = [1, 2];
// 通过apply来求数组的和
console.log(sum.apply(null, args)) // 3

