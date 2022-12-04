function getPrimeNums(n) {

    const arr = [];
    for (let i = 2; arr.length < n; i++) {
        let flag = false;
        for (let counter = 0; counter < i; counter++) {
            if (i % arr[counter] === 0) {
                flag = true;
                break;
            }
        }
        if (flag === false) {
            arr.push(i)
        };

    }
    return arr;
}


console.time();
console.log(getPrimeNums(process.argv[2]));
console.timeEnd();