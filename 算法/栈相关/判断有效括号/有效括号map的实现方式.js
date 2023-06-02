function isValid(s) {
    const stack = [];
    const map = new Map()
    map.set(")", "(")
    map.set("}", "{")
    map.set("]", "[")
    console.log(map)
    for(let i=0; i< s.length; i++) {
        if(!map.has(s[i])) { // 判断是否在栈里面
            stack.push(s[i])
        } else { // 出栈验证
            const pop = stack.pop()
            console.log(pop)
            console.log(map.get(s[i]))
            if(map.get(s[i]) !== pop) return false
        }
    }
    return stack.length === 0;

}
console.log(isValid("{}()[]"))