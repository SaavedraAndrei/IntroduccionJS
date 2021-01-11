// MÉTODOS CON PROPIEDAD

const Spotify = {

    Reproducir: function(id){
        console.log(`Se esta reproduciendo la canción con el id: ${id}`);
    },

    CrearPlayList: function(nombre){
        console.log(`Creando la playList ${nombre}`);
    }
}


Spotify.Reproducir(12);
Spotify.CrearPlayList('Maná');
