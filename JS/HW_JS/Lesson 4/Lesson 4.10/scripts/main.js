function findMinNumber(numbers){
    let min = numbers[0]
    for (let i = 1; i < numbers.length; i++) {
        let number = numbers[i];
        if (number < min) {
            min = number;
        }
    }
    return min;
}

console.log(findMinNumber([-11, 11, 7, 9, 10, 0, -1, 5]));