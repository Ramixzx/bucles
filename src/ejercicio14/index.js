let myArray = [43,23,6,87,43,1,4,6,3,67,8,3445,3,7,5435,63,346,3,456,734,6,34];

// Using the for loop and the global variable "maxNum" to store the largest number in the array with each iteration.
let maxNum = 0;

for(let i = 0; i < myArray.length; i++){
    if(myArray[i] > maxNum){
        maxNum = myArray[i];
    }else {
        maxNum;
    }
}

console.log(maxNum);

// Using the "do while" loop.
let index = 0;
maxNum = 0;

do {
    if(myArray[index] > maxNum){
        maxNum = myArray[index];
    }else {
        maxNum;
    }
    index++;
} while (index < myArray.length);

console.log(maxNum);

 // Easy. Using the "Math.max" method and passing a copy of the array as a parameter.
let maxNum2 = Math.max(...myArray);

console.log(maxNum2);

// Function that receives an array as a parameter. Sorts the array from smallest to largest and returns its last element
const maxNumArray = array => {
    array.sort((a, b) => a - b);

    let maxNum = array.pop();

    console.log(maxNum);
}

maxNumArray(myArray);