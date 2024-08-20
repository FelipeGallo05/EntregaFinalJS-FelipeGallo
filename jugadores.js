



fetch('/data/stats.json')
.then(response => {
    return response.json();
})
.then(data => {
    const cartaContenedor = document.getElementById('carta-contenedor')
    console.log(data);
    for(const llave in data){
        if (data.hasOwnProperty(llave)) {
            const jugador = data[llave];
            cartaContenedor.innerHTML +=  `
            <img src="${jugador.img}">
            <div>
            <h3>${jugador.nombre}</h3>
            <p>Altura: ${jugador.altura}</p>
            <p>Peso: ${jugador.peso} kg</p>
            <p>Posicion: ${jugador.posicion}</p>
            <p>3P: ${jugador.Triple}%</p>
            <p>TC: ${jugador.TC}%</p>
            </div>`
    }
}
})
.catch(error => console.error(error));



