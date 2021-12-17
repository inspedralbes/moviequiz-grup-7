fetch(`./../json/peliculas.json`).then(function(res) {
            return res.json();

        }).then(function(data) {
            
            console.log(data);

            let pelis = "";
            for(i=0; i<data.length; i++){
                datos = data[i];
                pelis += `<div>
                <h2>${datos.titulo}</h2>
                <img src="${datos.imagen}"></img>
                </div>`;
            }
            document.getElementById("pelis").innerHTML=pelis;
    //    }).catch(function() {
    //        console.log("problem!");
        });

function buscando(){
    let nombre = document.getElementById("buscar").value;
    let PeliculasPrincipales = document.getElementById("pelis");
    PeliculasPrincipales.style.display="none";
    fetch(`https://www.omdbapi.com/?apikey=18911d9b&s=${nombre}`).then(function(res) {
        return res.json();
    }).then(function(data) {
        console.log(data);
        let pelis = "";
        for(i=0; i<10; i++){
            datos = data.Search[i];
            pelis += `<div>
                <h2>${datos.Title}</h2>
                <img src="${datos.Poster}"></img>
                </div>`;
        }
        document.getElementById("peliculas").innerHTML=pelis;

    });
    }








