const minNumber = (Array) => {
    let min = Array[0]
    for (let i = 1; i < Array.length; i++){
        let number = Array[i];
        if (number < min) {
            min = number;
        }
    }
    return min;
}

array = [11, 7, 15, 9, 3, 1, 19,25,77,87,97]


console.log(minNumber(array));