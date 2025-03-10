const swapNumber = (arr, index1, index2) => {
    if (index1 < arr.length && index2 < arr.length) {
        let temp = arr[index1];
        arr[index1] = arr[index2];
        arr[index2] = temp;
        return arr;
    }

}

test = [10,20,30,40]
console.log(swapNumber(test, 1, 3));