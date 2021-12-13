
fetch(`./../json/peliculas.json`).then(function(res) {
            return res.json();

        }).then(function(data) {
            
            console.log(data);

            let pelis = "";
            for(i=0; i<data.length; i++){
                datos = data[i];
                pelis += `<div class="row center">
                                <div class="col s6 m3 l3">
                                       <div class="card">
                                            <div class="card-image">
                                                <img width="100px" src="${datos.imagen}"></img>
                                                <h3>${datos.titulo}</h3>
                                       </div>
                                </div>
                         </div>`;
            }
            document.getElementById("pelis").innerHTML=pelis;
    //    }).catch(function() {
    //        console.log("problem!");
        });


function buscando(){
        let pelicula=document.getElementById("buscar").value;
        let PeliculasPrincipales = document.getElementById("pelis");
        PeliculasPrincipales.style.display="none";
        fetch(`https://www.omdbapi.com/?apikey=9dbe2ca&s=${pelicula}`).then(function(res) {
            return res.json();
        }).then(function(data) {
            console.log(data);
            let peliculas = "";
            for(i=0; i<8; i++) {
                datos = data.Search[i];
                peliculas += ` <div class="row center">
                                            <div class="col s6 m3 l3">
                                                <div class="card">
                                                    <div class="card-image">
                                                    <img width="100px" src="${datos.Poster}"></img>
                                                    <h3>${datos.Title}</h3>
                                                    <a class="waves-effect waves-light btn">button</a>
                                                    </div>
                                                </div>
                                        </div>`;
            }
            document.getElementById("peliculas").innerHTML=peliculas;
            //document.getElementsByClassName("profile-image")[0].setAttribute("src",dadesUsr.picture.thumbnail);
            //}).catch(function() {
            //console.log("problem!");
        });
    }








