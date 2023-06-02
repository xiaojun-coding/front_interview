// 数组拍平非递归的实现方式
function flatten(arr: any []):number[] {
    const result: number[] = []
    const stack = [...arr];
    while (stack.length> 0) {
        const item = stack.pop();
        if(Array.isArray(item)) {
            // 如果是数组的话要放回栈里面去
            stack.push(...item)
        } else {
            result.unshift(item)
        }
    }
    return result
}
console.log(flatten([1,2,3,[4,[5,[6,[7,[8,9]]]]]]))
export {}