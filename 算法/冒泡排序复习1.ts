function bubbleSort(nums: number[]): number[] {
    if(!nums.length) return []
    const len = nums.length;
    for (let i = 0; i< len; i++) {
        let flag = false;
        for (let j = 0; j<len - 1 -i; j++) {
            if(nums[j]> nums[j+1]) {
                [nums[j], nums[j+1]] = [nums[j+1], nums[j]]
                flag = true;
            }
        }
        if(!flag) return nums
    }
    return nums
}
const arr = [3,4,2,5,9,6,7];
console.log(bubbleSort(arr))