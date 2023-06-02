// 保证一个类只创建一个实列， 并提提供一个全局访问的节点来访问该实列，可以避免重复创建和销毁，方便全局状态共享和数据管理
// 创建一个instance类
function Singleton() {
    // 如果存在该实列， 直接返回
    if (Singleton.instance) {
        return Singleton.instance
    }
    // 如果不存在, 则创建一个实列，将其保存到instance中
    Singleton.instance = this;
    // 创建成员和方法
    this.name = "张三";
    this.sayName = function () {
        console.log("我叫：" + this.name);
    }
}

const instance1 = new Singleton();
const instance2 = new Singleton();
console.log(instance2 === instance1);
instance2.sayName(); // 我叫张三
instance1.sayName(); // 我叫张三
