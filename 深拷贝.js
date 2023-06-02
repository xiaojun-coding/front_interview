function deepClone(target, map = new WeakMap) {
    // 排除undefind和null的校验
    if (target == null || target == undefined) return target
    // 处理正则对象
    if (target instanceof RegExp) return new RegExp(target)
    // 处理日期函数
    if (target instanceof Date) return new Date(target)
    // 排除函数
    if (typeof target === "object") return target
    let obj = new target.constructor();
    // 判断是否有循环引用
    if (map.get(target)) {
        return map.get(target)
    }
    map.set(target, obj)
    for (let key in target) {
        // 通过hasOwnProperty排序for in 遍历到原型链的东西
        if (target.hasOwnProperty(key)) {
            obj[key] = deepClone(target[key], map)
        }
    }
    return obj
}

let obj = {
    a: 1,
    b: 2,
    c: [3, 4, 5, 6],
    d: {
        e: {
            f: 2
        }
    }
}
const a = deepClone(obj)
console.log(a);
a.d.e.f = 1000
a.d.e.f = 2000
console.log(a)