var mySampleArray = [3423,5,4,47889,654,8,867543,23,48,56432,55,23,25,12];

// Exercise example
for(let i = 0; i < mySampleArray.length; i++){
    console.log(mySampleArray[i]);
}

// Loops through the array and skip an element on each iteration, using the "for" loop
for(let i = 0; i < mySampleArray.length; i = i + 2){
    console.log(mySampleArray[i]);
}

// Loops through the array and skip an element on each iteration, using the "while" loop
let index = 0;

while(index < mySampleArray.length){
    console.log(mySampleArray[index]);
    index = index + 2;
}

// Loops through the array and skip an element on each iteration, using the "do while" loop
index = 0;
do {
    console.log(mySampleArray[index]);
    index = index + 2;
} while (index < mySampleArray.length);