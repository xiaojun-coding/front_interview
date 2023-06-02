function loadImg(url) {
   return new Promise((resolve, reject)=> {
       const img = new Image();
       img.onload(()=> {
           console.log("加载一张图片完成");
           resolve(img)
       })
       img.onerror(()=> {
          reject(new Error("加载图片错误"+ url))
       })
       img.src = url;
   })
}