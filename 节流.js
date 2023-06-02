// 节流：事件，按照一定的时间间隔来触发
// 节流：指触发频繁的事件，只在指定的时间内执行回调，触发发事件的时间间隔大于等于这个时间才会执行回调

// 代码实列
// 封装一个节流函数
// 时间戳的实现方式
function thrttole(fun, wait) {
//     上一次时间
    let previous = 0;
    // 闭包
    return function () {
        //     获取当前的执行上下文
        let context = this;
        //     获取函数执行的参数
        let args = arguments;
        // 获取当前的时间
        let now = +new Date();
        // 如果data - previous大于等待的时间，执行函数
        if (now - previous > wait) {
            //     执行回调函数
            fun.apply(context, args)
            // 重新赋值时间
            previous = now;
        }
    }
}

// 节流函数: 频繁触发多次，设置一个时间，在此时间内执行一次

// settimeOut的实现方式
function throttleSetTimeOut(fun, delay) {
    // 设置定时器timer
    let timer = null;
    return function () {
        //     获取当前的执行上下文
        let context = this;
        // 获取参数
        let args = arguments;
        if (timer) return
        timer = setTimeout(() => {
            fun.apply(context, args)
            timer = 0;
        }, delay)
    }
}

// 场景:
// 1. 鼠标拖拽场景 2、缩放场景resize 3、滚动场景scroll 4、动画场景

// 防抖和节流总结
// 防抖:限制函数执行次数，多次密集执行最后一次，多次合并为一次
// 节流：限制执行频率，按照一定的时间节奏执行
