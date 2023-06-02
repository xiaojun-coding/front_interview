function twoSum(nums: number[], target:number): number[] {
    // @ts-ignore
    const map = new Map();
    const len = nums.length;
    for(let i=0; i< len;i++) {
        const diff = target - nums[i];
        if(map.get(diff)) {
            // 返回的值
            return [diff, nums[i]];
        }
        map.set(nums[i], i);
    }
    return []
}
const nums = [1,2,3,4,5,6];
console.log(twoSum(nums, 11)); // [4,5]