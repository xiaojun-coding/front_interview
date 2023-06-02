// 目标:把连续触发的事件合并成一次，变成最后一次执行，设置一个时间，让事件只触发一次，在这个时间内如果时间触发，
// 则奖将定时器清空，重新开始开始计算时间

// function debunce(fun, wait) {
//     // 缓存一个定时器
//     let timer = null;
//     return function (...args) {
//         // 重新开始计时
//         if(timer) clearTimeout(timer);
//         timer = setTimeout(()=> {
//            fun.apply(this, args)
//         },wait)
//     }
// }
// const searchDebounced = debunce(search, 300)
//
// function search (keywords) {
//     // 发起搜索请求
// }

// 防抖函数编写
function debunce(fun, wait) {
    let timer = 0;
    return function (...args) {
        if (timer) clearTimeout(timer)
        timer = setTimeout(() => {
            fun.apply(this, args);
        }, wait)
    }
}

const searchDebounced = debunce(search, 500)

function search(keywords) {
    // 发起搜索请求
}

// 总结: 防抖就是多个事件合并成一个事件，在指定的时间内执行最后一次，如果再次触发
// 清空定时器，重新计算时间
// 适用场景：文本输入的搜索和输入验证， 按钮提交，搜素联想词


