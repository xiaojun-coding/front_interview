function flatten(target: any, prefix="") {
    let result: any = {};
    for(let key in target) {
        if(target.hasOwnProperty(key)) {
            const newKey = prefix + key;
            if(typeof target[key] === "object") {
                // @ts-ignore
                Object.assign(result, flatten(target[key], newKey + "."))
            } else {
                result[newKey] = target[key]
            }
        }
    }
    return result
}
const obj = {
    a: 1,
    b: {
        c: 2,
        d: 3,
        e: {
            f: 4

        }
    }
}
console.log(flatten(obj))
