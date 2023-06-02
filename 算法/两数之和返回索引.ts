function twoSum(nums: number[], target: number) : number[] {
    // @ts-ignore
    const map = new Map();
    let len = nums.length;
    for(let i=0; i< len; i++ ) {
        // diff + num[i] = target
        const diff = target - nums[i];
        if(map.has(diff)) {
            // 返回索引
            return [map.get(diff), i];
        }
        map.set(nums[i], i);
    }
    return []
}
const nums = [1,2,3,4,5,6];
console.log(twoSum(nums, 11)); // [4,5]