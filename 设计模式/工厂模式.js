function Iphone() {
    this.name = "苹果手机"
}

function Huawei() {
    this.name = "华为手机"
}

// 创建工厂模式
function factory(phone) {
    switch (phone) {
        case "Iphone":
            return new Iphone()
            break;
        case "Huawei":
            return new Huawei();
            break;
        default:
            throw new Error("本工厂无此产品");
    }
}

const f1 = new factory("Iphone");
console.log(f1);
const f2 = new factory("Huawei");
console.log(f2);