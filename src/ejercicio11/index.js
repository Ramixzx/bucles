var mix = [42, true, "towel", [2,1], 'hello', 34.4, {"name": "juan"}];


const dataType = arr => {
    // New array
    let newMix = [];

    // In each iteration it sends to the array "newMix" the data type of the element
    for(let i = 0; i < arr.length; i++){
        newMix.push(typeof arr[i]);
    }

    // Print the array
    console.log(newMix)
}

// Call the function
dataType(mix);