let par = "Lorem ipsum dolor sit amet consectetur adipiscing elit Curabitur eget bibendum turpis Curabitur scelerisque eros ultricies venenatis mi at tempor nisl Integer tincidunt accumsan cursus"

let cadena = par.toLowerCase();

let counts = {};

for(let i = 0; i < cadena.length; i++){

    let letra = cadena[i]

    if (letra !== counts[letra]) {
        counts[letra] = 0;
    } 
    
}

console.log(counts)










// your code here




//Nuestro cliente necesita un programa que cuente las repeticiones de las letras en un string
// dado. Sé que es extraño, pero son muy testarudos ¡ Lo necesitamos lo antes posible!

//Crea un objeto donde las letras son las propiedades y los valores son el número de
//veces que esa letra se repite en toda la cadena.