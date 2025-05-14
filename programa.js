var map = L.map('map').setView([4.6279856,-74.0670738], 13);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);


// Abrir archivo GeoJSON
// Buscar llaves de interes
// SI el valor de la llave es un rreglo hacer un ciclo para recorrer elementos

async function Cargarpuntos() {
    var miArchivo= await fetch ("microondas.geojson");

    // convertir 
    var datos = await miArchivo.json();
    // obtener arreglo de llaves
    let listaFeatures=datos["features"];


    for (let i =0; i<2;i++){
        let misCoordenadas=listaFeatures[i]["geometry"]["coordinates"]
        var miMarcador=L.marker(misCoordenadas);
        miMarcador.addTo(map);
    }
    
}
Cargarpuntos();