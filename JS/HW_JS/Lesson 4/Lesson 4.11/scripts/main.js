function sum(arr){
    let result = arr[0];
    for (let i = 1; i < arr.length; i++) {
        result += arr[i];
    }
    return result;
}

console.log(sum([10, 1, 3, 7]));