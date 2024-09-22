

function getMax(numbers){
    let max = numbers[0];
    for(const num of numbers){
        if(num > max){
            max = num;
        }
    }
    return max;
}

console.log(getMax([65, 66, 68, 72, 78, 60, 65, 66]));
