function simplifyPath(path) {
   const stack = [];
   const paths = path.split("/");
   for(let i=0; i<paths.length;i++) {
       const curPath = paths[i];
       if(curPath==="" || curPath===".") {
           continue;
       } else if(curPath==="..") {
           stack.pop()
       } else {
           stack.push(curPath)
       }
   }
   // 构建路径简化
    const result = [""];
   while (stack.length>0) {
       const pop = stack.pop();
       result.unshift('/', pop)

   }
   if(result.length> 1) {
       result.pop()
   }
   return result.join("")
}

console.log(simplifyPath("/home//foo/"))
console.log(simplifyPath("/home/")); // "/home"
console.log(simplifyPath("/a/./b/../../c/")); // "/c"
console.log(simplifyPath("/../")); // "/"
console.log(simplifyPath("/home//test/")); // "/home/test"
console.log(simplifyPath("/../dir")); // "/dir"