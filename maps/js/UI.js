class UI {
    constructor() {
        this.api=new API();
         // Iniciar el mapa
         this.markers=new L.LayerGroup();
         this.mapa = this.inicializarMapa();

    }

    inicializarMapa() {
         // Inicializar y obtener la propiedad del mapa
         const map = L.map('mapa').setView([19.390519, -99.3739778], 6);
         const enlaceMapa = '<a href="http://openstreetmap.org">OpenStreetMap</a>';
         L.tileLayer(
             'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
             attribution: '&copy; ' + enlaceMapa + ' Contributors',
             maxZoom: 18,
             }).addTo(map);
         return map;

    }
    mostrarEstablecimientos(){
        this.api.obtenerDatos()
        .then(datos=>{
           this.mostrarPines(datos.respuestaJSON.results);
        });
    }
    mostrarPines(datos){
        this.markers.clearLayers();
        datos.forEach(dato=>{
            const {latitude,longitude,calle,regular,premium}=dato;
            
            const opcionesPopUp=L.popup()
            .setContent(`<p>Caller: ${calle}</p>
                        <p><b>Regular:</b>$${regular}</p>
                        <p><b>Premium:</b>$${premium}</p>
            `);
            const marker = new L.marker([
                    parseFloat(latitude),
                    parseFloat(longitude)
            ]).bindPopup(opcionesPopUp);
            this.markers.addLayer(marker);
        });
        this.markers.addTo(this.mapa);
    }
    obtenerSugerencias(busqueda){
        this.api.obtenerDatos().then(datos=>{
            const results=datos.respuestaJSON.results;
            this.filtrarSugerencias(results,busqueda);
        });
    }
    filtrarSugerencias(resultado,busqueda){
        const filtro=resultado.filter(filtro=>filtro.calle.indexOf(busqueda)!== -1);
        this.mostrarPines(filtro);
    }
}