let arr = [45,67,87,23,5,32,60];

//Create a new empty array
let newArr = [];

// Loop through the array from back to front
for(let i = arr.length - 1; i >= 0; i--){
    // Save each element in the new array
    newArr.push(arr[i]);
}

console.log(newArr);