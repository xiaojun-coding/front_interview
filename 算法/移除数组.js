function removeArray(arr, val) {
    let k = 0;
    for(let i=0; i<arr.length;i++) {
        if(arr[i]!==val) {
            arr[k++] = arr[i]
        }
    }
    return k
}

// 测试
console.log(removeArray([1,3,4,4,4,4,5,6], 4))