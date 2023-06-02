function red() {
    console.log("红灯亮了");
}
function green() {
    console.log("绿灯亮了")
}
function yellow() {
    console.log("黄灯亮了")
}

function  task(timer, light) {
    return new Promise((resolve, reject)=> {
        setTimeout(()=> {
            if(light === "red") {
                red()
            } else if(light === "green") {
                green()
            } else if(light=== "yellow") {
                yellow()
            }
            resolve();
        }, timer)
    })

}
const step = async () => {
    await task(3000, "red");
    await task(1000, "green")
    await task(2000, "yellow")
    step()
}
step()