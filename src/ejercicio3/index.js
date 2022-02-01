// Genero dos variables para establecer limites(min - max) al numero aleatorio que creara la funcion "Math.random"
let min = 1;
let max = 1000;

let arr = [4, 5, 734, 43, 45];

// Agregar dos numeros aleatorios al array sin utilizar ciclos
arr.push(Math.floor(Math.random()*(max - min + 1) + min));
arr.push(Math.floor(Math.random()*(max - min + 1) + min));

console.log(arr);


// Forma de agregar dos numeros aleatorios al array utilizando el ciclo for
for(let i = 0; i < 2; i++){
    arr.push(Math.floor(Math.random()*(max - min + 1) + min));
};

console.log(arr);

// Forma de agregar dos numeros aleatorios al array utilizando el ciclo while
let condicion = 0;

while(condicion < 2){
    arr.push(Math.floor(Math.random()*(max - min + 1) + min));
    condicion++;
}

console.log(arr);
