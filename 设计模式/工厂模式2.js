class Factory {
    static getInstance(type) {
        switch (type) {
            case "Product1":
                return new Product1();
                break;
            case "Product2":
                return new Product2();
                break;
            case "Product3":
                return new Product3();
                break
            default:
                return new Error("没有此类产品");

        }

    }

}

class Product1 {
    constructor() {
        this.type = "Product1"
    }

    operate() {
        console.log(this.type)
    }
}

class Product2 {
    constructor() {
        this.type = "Product2"
    }

    operate() {
        console.log(this.type)
    }
}

class Product3 {
    constructor() {
        this.type = "Product3"
    }

    operate() {
        console.log(this.type)
    }
}

const prod1 = Factory.getInstance("Product1");
prod1.operate();
const prod2 = Factory.getInstance("Product2");
prod2.operate();
const prod3 = Factory.getInstance("Product3");
prod3.operate();

// vue种的场景
export default class VueRouter {
    constructor(options) {
        this.mode = mode	// 路由模式

        switch (mode) {           // 简单工厂
            case 'history':       // history 方式
                this.history = new HTML5History(this, options.base)
                break
            case 'hash':          // hash 方式
                this.history = new HashHistory(this, options.base, this.fallback)
                break
            case 'abstract':      // abstract 方式
                this.history = new AbstractHistory(this, options.base)
                break
            default:
            // ... 初始化失败报错
        }
    }
}



