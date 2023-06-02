// 调度中心
class EventHub {
    constructor() {
        // 用来保存事件
        this.subscribers = {}
    }
    subscriber(event, callback) {
        // 如果没有事件
        if(!this.subscribers[event]) {
            this.subscribers[event] = [callback]
        } else {
            this.subscribers[event].push(callback)
        }
    }
    // 发布者订阅模式
    publish(event, data) {
        if(!this.subscribers[event]) {
            return
        }
        this.subscribers[event].forEach(callback=> callback(data));
    }
    unsubscriber(event, callback) {
        if(!this.subscribers[event]) return
        const index = this.subscribers[event].indexOf(callback)
        if(index > -1) {
            this.subscribers[event].splice(index ,1 )
        }
    }

}
