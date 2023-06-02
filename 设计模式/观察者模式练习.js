class Subject {
    constructor(name) {
        // 目标名字
        this.name = name
        // 所有的观察者
        this.observerList = []
    }
    // 添加观察者
    addObserver(observer) {
        this.observerList.push(observer)
    }
    // 移除观察者
    removeObserver(observer) {
        const index = this.observerList.indexOf(observer)
        if(index > -1) {
            this.observerList.splice(index, 1);
        }
    }
   // notify通知的方法
    notify(message) {
        console.log("前端岗位缺人了，请通知观察者前来面试");
        this.observerList.forEach(observer=> observer.update(message))
    }

}
class Observer {
    constructor(name) {
        this.name = name;
    }
    update({companyName, info}) {
        console.log(this.name + "收到" + companyName + "面试邀请" + info)
    }
}
// 创建目标对象
const subject = new Subject("百度公司");
// 创建观察者
const person1 = new Observer("kobe");
const person2 = new Observer("culi");
const person3 = new Observer("yaoming");

// 添加目标候选人
subject.addObserver(person1);
subject.addObserver(person2);
subject.addObserver(person3);
console.log(subject)

// 通知
subject.notify({
    companyName: subject.name,
    info: "请到百度公司来进行面试"
})
subject.removeObserver(person3);
subject.notify({
    companyName: subject.name,
    info: "请到百度公司来进行面试"
})