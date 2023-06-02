// 原理: 判断当前对象的原型链和当前类的原型是否相等
function MyInstanceof(instance, constuctor) {
    // 如果不是对象，或者对象为空，返回false
    if (typeof instance !== "object" || instance == null) return false;
    // 获取原型链 对象.__proto__
    let proto = Object.getPrototypeOf(instance);
    while (proto) {
        // 如果对象.__proto === 构造函数.prototype
        if (proto === constuctor.prototype) {
            return true
            // 沿着原型链条一直往上面查找
            proto = Object.getPrototypeOf(proto)
        }
        return false
    }

}

console.log(MyInstanceof([], Array)); // ttue
console.log(MyInstanceof({}, Array)); // false
console.log(MyInstanceof({}, Object)); // true
console.log(MyInstanceof(null, Object)); // false
console.log(MyInstanceof('', Object)); // false
console.log(MyInstanceof(null, Array)); // false