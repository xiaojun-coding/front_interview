// const obj = {
//     name: "张三",
//     greet(greeting) {
//         console.log(`${greeting}`, `${this.name}`)
//     }
// }
// obj.greet("hello")
// // 把函数替换成对象的属性
// obj.greet.call({name: "lisi"}, "hello");
// 封装一个call方法
Function.prototype.MyCall = function (context, ...args) {
    // 如果第一个参数是null或者undefind，指向window
    if (context == null || context == undefined) context = window
    // 避免重复
    const fn = Symbol();
    // 改变this指向
    context[fn] = this;
    // 获取结果
    const result = context[fn](...args)
    // 清楚上一次的结果，避免重复
    delete context[fn]
    return result
}
// 测试
const obj = {
    name: "张三",
    greet(greeting) {
        console.log(`${greeting}`, `${this.name}`)
    }
}
obj.greet("hello")
// 把函数替换成对象的属性
obj.greet.MyCall({name: "lisi"}, "hello");