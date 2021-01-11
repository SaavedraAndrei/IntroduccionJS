// PROMISES

// AHORA - FUTURO - NUNCA

// PENDING - FULFILLED - REJECTED


const userAuth = new Promise( (resolve, reject) => {

    const login = false;

    if (login) {
        resolve('Inicio de sesión de correcto')
    } else {
        reject('Inicio de sesión incorrecto')
    }

})


userAuth
    .then( (resultado) => {
        console.log(resultado);
    })
    .catch( (error) => {
        console.log(error);
    })




























