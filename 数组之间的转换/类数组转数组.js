function test() {
    const linkArray = arguments;
    const arr = Array.apply(null, linkArray);
    console.log(arr)

}
test(1,2,3,4,5,6,7,8,9)