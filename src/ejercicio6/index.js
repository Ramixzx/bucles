var mySampleArray = [3423,5,4,47889,654,8,867543,23,48,56432,55,23,25,12];
// Total number of elements in the array - 1
let lastItem = mySampleArray.length - 1;

// Exercise example
for(let i = 0; i < mySampleArray.length; i++){
    console.log(mySampleArray[i]);
}

// Looping through the array from the last position to the first, using the "for" loop
for(let i = lastItem; i >= 0; i--){
    console.log(mySampleArray[i]);
}

// Looping through the array from the last position to the first, using the "do while" loop
do {
    console.log(mySampleArray[lastItem]);
    lastItem--;
} while (lastItem >= 0);

// Looping through the array from the last position to the first, using the "while" loop

while (lastItem >= 0) {
    console.log(mySampleArray[lastItem]);
    lastItem--; 
};