// 监听的目标
// 创建目标对象
class Subject {
    constructor(name) {
        this.name = name;
        // 观察者列表
        this.observerList = []
    }
    // 添加观察者-职位候选人
    addObserve(observer) {
        this.observerList.push(observer);
    }
    // 移除观察者
    removeObserver(observer) {
        const index = this.observerList.indexOf(observer)
        if(index > -1) {
            this.observerList.splice(index, 1);
        }
    }
    // 通知
    notify(message) {
        console.log("前端岗位空缺了，需要招人");
        this.observerList.forEach(item=> item.update((message)))
    }


}
// 观察者
class Observe {
    constructor(name) {
        this.name = name
    }
    // 订阅信息的回调{companyName:公司名， info:面试信息}
   update({companyName, info }) {
        console.log(this.name + "收到" + companyName + "的面试邀请" + info);
   }
}
// 创建目标对象
const subject = new Subject("百度公司");
// 创建观察者
const person1 = new Observe("kobe");
const person2 = new Observe("culi");
const person3 = new Observe("yaoming");

// 添加目标候选人
subject.addObserve(person1);
subject.addObserve(person2);
subject.addObserve(person3);
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


