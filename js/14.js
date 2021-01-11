
// NOTIFICATION API

const boton =  document.querySelector('#boton');

boton.addEventListener('click', function(){
    
    Notification.requestPermission()
        .then( function(resultado){
            console.log(resultado);
        })
        .catch( function(error){
            console.log(error);
        })

})

if (Notification.requestPermission == 'granted') {
    
    new Notification('Se agregó un nuevo video',{
        icon : 'map.jpg',
        body : 'JavaScript con Andrei'
    })
}