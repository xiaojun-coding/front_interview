const root = [
    {
        id: 1,
        text: "根节点",
        children: [
            {
                id: 2,
                text: "一级节点1",
                children: [
                    {
                        id: 21,
                        text: "二级节点2-1-1",
                    }
                ]
            },
            {
                id: 3,
                text: "一级节点2",
                children: [
                    {
                        id: 5,
                        text: "二级节点2-1",
                        children:[
                            {
                                id: 10,
                                text: "三级几点3-1"
                            },
                            {
                                id: 11,
                                text: "三级几点3-2"
                            },
                            {
                                id: 12,
                                text: "三级几点3-3"
                            },
                            {
                                id: 13,
                                text: "三级几点3-4"
                            }
                        ]
                    },
                    {
                        id: 6,
                        text: "二级节点2-2",
                    },
                    {
                        id: 7,
                        text: "二级节点2-3",
                    },
                ],
            },
            {
                id: 4,
                text: "一级节点3",
            },
        ],
    },
];

function treeToArray(root) {
    // 声明一个数组来保存当前的节点
    const result = [];

    const dns = (data, parentId)=> {
        // 遍历子树
        data.forEach(item=> {
            // 如果没有字节点
            item.parentId = parentId;
            result.push(item);
            // 如果有字节点
            if(item.children) {
              // 递归遍历添加
                dns(item.children, item.id)
                delete item.children
            }
        })
    }
    // 父级节点，直接添加
    dns(root, 0)
    return result

}
console.log(treeToArray(root))