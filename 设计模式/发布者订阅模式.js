// 定义一个调度中心的类
class EventHub {
    // 初始化一个空对象，用来存放订阅者和事件
    constructor() {
        this.subscribers = {};
    }
    // 添加订阅者方法
    subscribe(event, subscriber) {
        // 如果事件不存在，则创建一个空数组
        if(!this.subscribers[event]) {
            this.subscribers[event] = []
        }
        // 如果事件存在，将订阅者添加到事件数组中
        this.subscribers[event].push(subscriber);
    }
    // 删除订阅者方法
    unSubscribe(event, subscriber) {
        // 如果事件存在，将从事件数组中删除订阅者
        if(this.subscribers[event]) {
            let index = this.subscribers[event].indexOf(subscriber);
            if(index > -1) {
                this.subscribers[event].splice(index, 1);
            }
        }
    }
    // 发布事件的方法
    publish(event, data) {
        // 如果事件存在，则遍历事件数组，调用每个订阅的update方法,并传入数据
        if(this.subscribers[event]) {
            for(let subscriber of this.subscribers[event]) {
                subscriber.update(data)
            }
        }
    }

}
// 定义一个发布者类
class Publiser {
    constructor(name) {
        this.name = name;
    }
}
// 定义一个订阅者类
class Subscriber {
    constructor(name) {
        this.name = name
    }
    // update方法，用来接收调度中心通知的数据
    update(data) {
        console.log(this.name + "收到了" + data);
    }
}
// 创建一个调度中心实例
let eventChannel = new EventHub();

// 创建两个发布者实例
let publisher1 = new Publiser("张三");
let publisher2 = new Publiser("李四");

// 创建三个订阅者实例
let subscriber1 = new Subscriber("王五");
let subscriber2 = new Subscriber("赵六");
let subscriber3 = new Subscriber("孙七");

// 让王五和赵六订阅张三发布的消息A，并在控制台打印出收到的消息内容。
eventChannel.subscribe("消息A", subscriber1);
eventChannel.subscribe("消息A", subscriber2);

// 让王五和孙七订阅李四发布的消息B，并在控制台打印出收到的消息内容。
eventChannel.subscribe("消息B", subscriber1);
eventChannel.subscribe("消息B", subscriber3);

// 张三发布了一条消息A：“今天天气不错。”，只有王五和赵六收到了这条消息。
eventChannel.publish("消息A", "今天天气不错。");
// 输出：
// 王五 收到了今天天气不错。
// 赵六 收到了今天天气不错。

// 李四发布了一条消息B：“明天要下雨。”，只有王五和孙七收到了这条消息。
eventChannel.publish("消息B", "明天要下雨。");
// 输出：
// 王五 收到了明天要下雨。