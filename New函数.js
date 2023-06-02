// new的全部过程
function myNew(constructor, ...args) {
    // 创建一个空对象，将空对象的原型指向构造函数的原型
    const obj = Object.create(constructor.prototype);
    // 改变this的指向, 将构造函数的this执行新创建的obj对象，执行构造函数的内部代码
    const result = constructor.apply(obj, args)
    // 对返回值类型做一个处理，如果返回值是对象，则就返回对象，否则则就返回创建对象的地址
    return typeof result === "object" && result !== null ? result : obj
}

// 测试
function Person(name, age) {
    this.name = name;
    this.age = age;
}

const p = myNew(Person, "哈哈哈", 18);
console.log(p);