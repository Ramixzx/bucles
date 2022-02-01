// Genero dos variables para establecer limites(min - max) al numero aleatorio que creara la funcion "Math.random"
let min = 1;
let max = 1000;

let arr = [4, 5, 734, 43, 45];

// Forma de agregar diez numeros aleatorios al array utilizando el ciclo for
for(let i = 0; i < 10; i++){
    arr.push(Math.floor(Math.random()*(max - min + 1) + min));
};

console.log(arr);

// Forma de agregar diez numeros aleatorios al array utilizando el ciclo while
let condicion = 0;

while(condicion < 10){
    arr.push(Math.floor(Math.random()*(max - min + 1) + min));
    condicion++;
}

console.log(arr);

// Funcion que recibe un array (que recibe por parametros)
const agregarAleatorios = (array, cantidad) => {
    let min = 1;
    let max = 1000;

    for(let i = 0; i < cantidad; i++){
        array.push(Math.floor(Math.random()*(max - min + 1) + min));
    };

    console.log(array);
}

agregarAleatorios(arr, 10);
