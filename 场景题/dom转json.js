const domTree = {
    tagName: 'DIV',
    children: [
        {
            tagName: 'SPAN',
            children: [
                { tagName: 'A', children: [] }
            ]
        },
        {
            tagName: 'SPAN',
            children: [
                { tagName: 'A', children: [] },
                { tagName: 'A', children: [] }
            ]
        }
    ]
}
function domJson(domTree) {
    if(!domTree) return
    const obj = {
        tagName: domTree.tagName,
        children: []
    };
    const children = domTree.children;
    if(children) {
        Array.from(children).forEach((item)=> obj.childrenp.ush(domJson(item)))
    }
    return obj
}
console.log(domJson(domTree))