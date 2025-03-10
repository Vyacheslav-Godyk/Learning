const maxNumber = (arr) => {
    let result = arr[0];
    for (let i = 1; i < arr.length; i++) {
        result += arr[i];
    }
    return result;
}


arr = [10,1,3,1]

console.log(maxNumber(arr));