Function.prototype.MyApply = function (context, args) {
    // 如果第一个参数为null或者undefined时,this指向window
    if (context === null || context === undefined) context = window
    // 唯一值
    let fn = Symbol();
    // 改变this的指向
    context[fn] = this;
    // 获取result
    const result = context[fn](...args)
    // 删除上一次fn，避免污染
    delete context[fn]
    return result
}
