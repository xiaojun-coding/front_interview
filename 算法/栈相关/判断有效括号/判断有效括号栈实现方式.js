function isValid(s) {
    // 创建一个栈
    const stack = [];
    // 遍历字符串
    for(let i=0; i< s.length; i++) {
        if(s[i]==="(" || s[i]==="{" || s[i] === "[") {
            stack.push(s[i])
        } else {
            // 出栈验证
            const pop = stack.pop()
            if((pop === "(" && s[i]!==")") || (pop === "{" && s[i] !=="}") || (pop==="[" && s[i]!=="]")) return false
        }
    }
    return stack.length===0 // 如果以上不能为空， 则关闭有效括号
}
console.log(isValid("(){}{}[]")) // true
console.log(isValid("(}{}{}[]")) // false