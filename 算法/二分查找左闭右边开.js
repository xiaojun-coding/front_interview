function binarySearch(nums, target){
    let mid, left = 0, right = nums.length;
    while (left <= right) {
        mid = left + ((right - left) >> 1)
        if(nums[mid] > target) { // 中间值大于目标值
            right = mid // 去左边找
        } else if(nums[mid] < target){
            left = mid + 1 // 去右边找
        } else { // 目标值等于中间值
            return mid // 返回中间值
        }
    }
    return -1
}
console.log(binarySearch([1,3,4,6,7,9,12], 9))

