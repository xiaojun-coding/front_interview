// 模拟红灯亮了
function red() {
    console.log("red红灯亮了");
}
// 模拟绿灯亮了
function green() {
    console.log("green绿灯亮了");
}
// 模拟黄灯亮了
function yellow() {
    console.log("黄灯yellow亮了")
}

function task(timer, light, callback) {
    setTimeout(()=> {
        if(light==="red") {
            red();
        } else if(light==="green") {
            green()
        } else if(light==="yellow") {
            yellow()
        }
        callback()

    }, timer)
}
task(3000, "red", ()=> {
    task(1000, "green", ()=> {
        task(2000, "yellow", Function.prototype)
    })
})
const step = ()=> {
    task(3000, "red",()=> {
        task(1000, "green", ()=> {
            task(2000, "yellow", step)
        })
    })
}
step()