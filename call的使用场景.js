// 使用call来改变this的指向
function sayName() {
    console.log("My Name is" + ` ${this.name}`)
}

const person = {
    name: "张三"
}
const people = {
    name: "李四"
}
sayName(); // My Name isundefined
sayName.call(person); // My Name is  张三
sayName.call(people); // My Name is 李四

const dog = {
    name: "旺财",
    back() {
        console.log(`${this.name}旺旺叫`); // 旺财旺旺叫
    }
}
dog.back()
dog.back.call({name: "哈士奇"}); // 哈士奇旺旺叫

// 将伪数组转换成真正的数组
function sum(a, b) {
    return a + b;
}

const args = {0: 1, 1: 2, length: 2};
console.log(sum.call(null, ...args)); // 输出：3
