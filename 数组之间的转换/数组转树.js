
const treeData = [
    {
        id: 1,
        parent_id: null,
        name: 'Node 1'
    },
    {
        id: 2,
        parent_id: 1,
        name: 'Node 1-1'
    },
    {
        id: 3,
        parent_id: 1,
        name: 'Node 1-2'
    },
    {
        id: 4,
        parent_id: 2,
        name: 'Node 1-1-1'
    },
    {
        id: 5,
        parent_id: 2,
        name: 'Node 1-1-2'
    },
    {
        id: 6,
        parent_id: 3,
        name: 'Node 3-1-1'
    },
    {
        id: 7,
        parent_id: 3,
        name: 'Node 3-1-2'
    },
    {
        id: 8,
        parent_id: null,
        name: "Node 4"

    }
];
function arrayToTree(arr, pid) {
    // 声明一个数组
    let result = [];
    arr.forEach(item=> {
        if(item.parent_id === pid) {
            item.children = arrayToTree(arr, item.id)
            result.push(item);
        }
    })
    return result
}
console.log(arrayToTree(treeData, null))