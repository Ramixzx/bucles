let i = 20;

do {
    //If the difference (module) between "i" and "5" is 0 then print console.log(${i}!) else console.log(i).
    if(i % 5 === 0){
        console.log(`${i}!`);
    }else {
        console.log(i);
    }
    i--;
} while (i >= 0);