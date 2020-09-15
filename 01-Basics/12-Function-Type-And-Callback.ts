function addAndHandle(n1: Number, n2: Number, cb: (num: Number) => void) {
    cb(+n1 + +n2);
}

addAndHandle(2, 3, res => {
    console.log(res);
});