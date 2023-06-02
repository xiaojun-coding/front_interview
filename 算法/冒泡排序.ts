function bubbleSort(arr: number[]): number[] {
    // 获取数组的长度
    let len = arr.length;
    // 如果数组的长度小于2，直接return
    if (len < 2) return arr
    for (let i = 0; i < len; i++) {
        // 没有排序
        let flag: boolean = false;
        for (let j = 0; j < len - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
                flag = true // 已经排好序了
            }
        }
        // 假如已经排好序了
        if (!flag) return arr
    }
    return arr;
}

console.log(bubbleSort([9, 4, 5, 3, 2, 6, 7]));

// 冒泡排序最好的情况(o(n))，已经按照顺序排好了
// 最坏情况n的平方, 该数组是逆序数组

