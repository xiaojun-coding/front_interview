// 预设函数的参数
function greet(greeting, name) {
    console.log(`${greeting}，${name}`);
}

const sayHelloToJohn = greet.bind(null, 'Hello', 'John'); // Hello，John

const sayHiToMary = greet.bind(null, 'Hi', 'Mary'); // Hi，Mary
sayHelloToJohn()
sayHiToMary()

function add(a, b) {
    return a + b
}

// 通过bind来实现函数科里化
const add1 = add.bind(null, 1);
console.log(add1()); // 1 + undefined: NaN
console.log(add1(2)); // 3 1+2
console.log(add1(3)); // 4 1+3