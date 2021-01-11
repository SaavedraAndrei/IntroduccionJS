

// FETCH API

function obtenerEmpleados(){

    // const archivo = 'http://www.google.com/api'
    const archivo = 'empleados.json';
    
    fetch(archivo)
        .then( function(resultado){
            // return resultado.text();
            return resultado.json();
        })
        .then( function(datos){
            const {empleados} = datos;
            console.log(empleados);

            empleados.forEach(empleado => {
                // console.log(empleado)
                console.log(empleado.id);
                console.log(empleado.nombre);
                console.log(empleado.puesto);

                document.querySelector('.contenido').textContent += empleado.nombre;
            });
        })


}

obtenerEmpleados();