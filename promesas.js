let result = undefined;

console.log(result);

//ESTRUCTURA BÁSICA DE UNA PROMESA
function waitUntil(message){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            //result = message;
            //resolve(result);
            reject(message);
        },200);
    });
}

// waitUntil('Puras promesas aquí!').then(result=>{
//     console.log(result);
// }).catch((err)=>{
//     console.log(err);
// });
// console.log(result);

function multiplicar(num1, num2){
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            resolve(num1*num2);
        },1500);
    });
}

function dividir (num1, num2){
    return new Promise((resolve, reject)=>{
        setTimeout(resolve(num1/num2),2000);
    });
}

//PROMISE.ALL - EJECUTA TODAS LAS PROMESAS ENVIADAS
//Si una de las promesas falla devuelve solo la excepción (EL ERROR)
// Promise.all([multiplicar(1,2), dividir(1,2), 'Promesa aquí', 35, true]).then((result)=>{
//     console.log(result);
// }).catch((error)=>{
//     console.log(error);
// });

function multiplicarLento(num1, num2){
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            resolve(num1*num2);
        },2000);
    });
}

function dividirRapido(num1, num2){
    return new Promise((resolve, reject)=>{
        setTimeout(resolve(num1/num2),1000);
    });
}


//Devuelve el resultado de la primer promesa en resolverse
//Si tienen el mismo tiempo se devuelve la primera en el array
//Si alguna falla y es la más rápida, se devuelve en forma de error (catch)
// Promise.race([multiplicarLento(1,2), dividirRapido(1,2)]).then((result)=>{
//     console.log('THEN ', result);
// }).catch((error)=>{
//     console.log('ERROR ', error);
// });

