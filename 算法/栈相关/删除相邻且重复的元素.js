function removeDuplicates(s) {
    const stack = [] // 传教一个栈
    // 遍历字符串
    for(let i=0; i< s.length; i++) {
        // 如果栈空而且当前元素和栈顶元素不相等，怎入栈，否则弹出栈
        if(stack.length === 0 || s[i] !== stack[stack.length -1]) {
            stack.push(s[i])
        } else {
            stack.pop()
        }
    }
    // 拼接字符串
    return stack.join("");
}
console.log(removeDuplicates("abbaca"))