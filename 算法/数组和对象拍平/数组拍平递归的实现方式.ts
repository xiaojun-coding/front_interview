function flattten(nums: any[]): number[] {
    // 声明一个变量保存拍平的数组
    const res: number[] = []
    for(let item of nums) {
        // 如果是数组的话
        if(Array.isArray(item)) {
            // 递归拍平
            res.push(...flattten(item))
        } else {
            // 如果不是数组的话，直接push
            res.push(item)
        }
    }
    return res
}
console.log(flattten([1,2,3,[4,[5,[6,[7,[8,9]]]]]]))