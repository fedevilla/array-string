let palabra1 = prompt("Palabra");
let palabra2 = prompt("Palabra2");

let longitud = palabra1.length;
let k = longitud - 1;
let es = true;

//arr
let arr = [];

for (let i = 0; i < longitud; i++) {
    if(palabra1.length === palabra2.length){
        if(palabra1[i] === palabra2[k]){
            k--;
            es = true;
            console.log("Esto no es un array" + Array.isArray(palabra1[i]));
            console.log("El string es un array de caracteres, pero no es un array nativo. No tiene todo los metodos por que no es un Array.prototype. Es un 'array-like'");
            //transformo en array
            arr.push(palabra1[i]);
            console.log("Esto es un array " + Array.isArray(arr));
            console.log("Esto lleva el Array.prototype.");
        }else{
            es=false;
        }
    }else{
        console.log(Array.isArray(palabra2[i]));

    }
    
}
