// function fn(a, b, c, d) {
//     console.log(this);
//     console.log(a, b, c, d);
//     return "this is return"
// }
//
// // const cb = fn.bind({y: 100}, 1, 2, 3, 4)
// // cb()
// // console.log(cb());

// 封装一个bind方法
Function.prototype.MyBind = function (context, ...args) {
    console.log(this, "this1")
    const fn = this;
    // 返回一个函数
    return function (...newArgs) {
        // 通过apply改变this的指向
        return fn.apply(context, args.concat(newArgs));

    }
}

// 测试
function fn(a, b, c, d) {
    console.log(this, "this");
    console.log(a, b, c, d);
    return "this is return"
}

const cb = fn.MyBind({y: 200}, 1, 2, 3, 4)
cb()
console.log(cb());