function red() {
    console.log("红灯亮了");
}
function green() {
    console.log("绿灯亮了")
}
function yellow() {
  console.log("黄灯亮了")
}

function task(timer, light) {
    return new Promise((resolve, reject)=> {
        setTimeout(()=> {
            if(light==="red") {
                red()
            }else if(light ==="green") {
                green()
            } else if(light ==="yellow") {
                yellow()
            }
            resolve()
        }, timer)

    })
}
// 循环递归调用
const step = ()=> {
    task(3000, "red")
        .then(()=> task(1000, "green"))
        .then(()=> task("2000", "yellow"))
        .then( step)
}
step()