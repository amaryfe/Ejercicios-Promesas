//Ejercicio 1: Promesas Encadenadas

function ejercicioUno() {
    
    const numeroAleatorio = new Promise((resolve) => {
      setTimeout(() => {
        const num = Math.floor(Math.random() * 100) + 1;
        resolve(num);
        console.log(num);
      }, 2000);
    });
  
    const numeroElevado = numeroAleatorio.then((num2) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          const result = Math.pow(num2, 2);
          resolve(result);
          console.log(result);
        }, 3000);
      });
    });
  
    const raizCuadrada = numeroElevado.then((num3) => {
      return new Promise((resolve) => {
        setTimeout(() => {
          const numCuadrado = Math.sqrt(num3);
          resolve(numCuadrado);
          console.log(numCuadrado);
        }, 1000);
      });
    });

    return raizCuadrada;
}

ejercicioUno().then((resultadoFinal) => {
    console.log("RESULTADO:", resultadoFinal);
}).catch((error) => {
    console.error("ERROR:", error);
});


//-----------------------------------------------
//Ejercicio 2: Promesa de Múltiples Solicitudes

function ejercicioDos(urls) {
    const promesas = [];
  
    for (const url of urls) {
      const promesa = fetch(url)
        .then((response) => {
          if (!response.ok) {
            throw new Error(`Error en la solicitud a ${url}: ${response.status}`);
          }
          return response.json();
        })
        .catch((error) => {
          console.error(error);
          return null; 
        });
      promesas.push(promesa);
    }
  
    return Promise.all(promesas);
}

const urls = ['https://reqres.in/api/users/2', 'https://reqres.in/api/users/3', 'https://reqres.in/api/users/4'];
  
ejercicioDos(urls).then((resultados) => {
    console.log("RESULTADO:", resultados);
}).catch((error) => {
    console.error("ERROR:", error);
});
   

//----------------------------------
//Ejercicio 3: Promesas Paralelas

function ejercicioTres(funciones) {
    const promesas = [];
    for (const funcion of funciones) {
      const promesa = funcion();
      promesas.push(promesa);
    }
    return Promise.all(promesas);
  }
  
  function promesa() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("Hola en promesa 1");
      }, 2000);
    });
  }
  
  function promesa2() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("Hola en promesa 2");
      }, 1000);
    });
  }
  
  function promesa3() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("Hola en promesa 3");
      }, 1500);
    });
}
  
const funciones = [promesa, promesa2, promesa3];
  
ejercicioTres(funciones).then((resultados) => {
    console.log("RESULTADO:", resultados);
}).catch((error) => {
    console.error("ERROR:", error);
});
  

//--------------------------------------------
//Ejercicio 4: Promesas en Cadena con Retraso

function ejercicioCuatro(n) {
    let segundos = 0;
  
    function promesaRetrasada(valor) {
      return new Promise((resolve) => {
        setTimeout(() => {
          console.log(valor);
          resolve();
        }, segundos * 1000);
        segundos++;
      });
    }
  
    const promesas = [];
  
    for (let i = 1; i <= n; i++) {
      promesas.push(() => promesaRetrasada(i));
    }
  
    const resultado = promesas.reduce((cadenaPromesa, promesa) => {
      return cadenaPromesa.then(() => promesa());
    }, Promise.resolve());
  
    return resultado.then(() => {
      return new Promise((resolve) => {
        setTimeout(() => {
          console.log("Todas las promesas se resolvieron");
          resolve("Todas las promesas se resolvieron");
        }, n * 1000);
      });
    });
}
  
ejercicioCuatro(4).then((mensaje) => {
    console.log(mensaje);
}).catch((error) => {
    console.error("ERROR:", error);
});
  

//--------------------------------------
//Ejercicio 5: Promesa con Cancelación
