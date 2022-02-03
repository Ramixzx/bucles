let par = "Lorem ipsum dolor sit amet consectetur adipiscing elit Curabitur eget bibendum turpis Curabitur scelerisque eros ultricies venenatis mi at tempor nisl Integer tincidunt accumsan cursus";
// All letters in the string are converted to lowercase
let cadena = par.toLowerCase();

let counts = {};

// In this cycle, what is done is to save each letter in the counts object as if they were properties (without taking into account the white spaces).
for(let i = 0; i < cadena.length; i++){
        if(cadena[i] !== ' '){
            counts[cadena[i]] = 0;
        } 
}

// The for loop iterates the text letter by letter
for(let i = 0; i < cadena.length; i++){
    // For each letter in the string, if it matches an existing property on the counts object, add one to the value of that property
    for(letra in counts){
        if(letra === cadena[i]){
            counts[letra] += 1;
        } 
    }
}

console.log(counts)
