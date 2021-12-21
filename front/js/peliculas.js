
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
                                            <img src="${datos.imagen}"></img>
                                            <h3>${datos.titulo}</h3>
                                   </div>
                            </div>
                     </div>`;
        }
        document.getElementById("pelis").innerHTML=pelis;
//    }).catch(function() {
//        console.log("problem!");
    });


    function login(){

        let email = document.getElementById("correo").value;
        let pass = document.getElementById("passwd").value;

        let datosEnvio = new FormData();
        datosEnvio.append('correo',email);
        datosEnvio.append('passwd',pass);

        fetch(`./../php/Login.php`,{
            method: 'POST',
            body: datosEnvio

        }).then(function(res){
            return res.json();
        }).then(function(data){
            console.log(data);
            if(data.exito==false){
                htmlstr = "";
                htmlstr += `<h6>${data.mensaje}</h6>`;
                document.getElementById("logueado").innerHTML = htmlstr;
            }else{
                document.getElementById("login").setAttribute("style","display: none;");
                htmlstr = "";
                htmlstr += `<img src="${data.imagen}"></img>
                        <h6>Bienvenido</h6>
                        <h6>${data.correo}</h6>
                        <form action="./../php/Logout.php">
                            <input type="submit" id="boton" class="get-profile btn btn-primary" value="Logout"></input>
                        </form>`;
                document.getElementById("logueado").innerHTML = htmlstr;
            }
        })
    }

function buscando(){
    let pelicula=document.getElementById("buscar").value;
    let PeliculasPrincipales = document.getElementById("pelis");
    PeliculasPrincipales.style.display="none";
    fetch(`https://www.omdbapi.com/?apikey=9dbe2ca&s=${pelicula}`).then(function(res) {
        return res.json();
    }).then(function(data) {
        console.log(data);
        let peliculas = "";
        datos = data;
        for(let i=0; i<8; i++) {
            peliculas += `<div class="row center">
                            <div class="col s6 m3 l3">
                                <div class="card">
                                    <div class="card-image">
                                        <img src="${datos.Search[i].Poster}" class="card-image">
                                        <span class="card-title">${datos.Search[i].Title}</span>
                                         <a id="${i}" class="add btn-floating halfway-fab modal-trigger waves-effect waves-light red" href="#modal${i}"><i class=" add material-icons">add</i></a>
                                    
                                        <div class="card-content">
                                            <p>${datos.Search[i].Year}</p>
                                        </div>
                                    </div>
                                   <div id="modal${i}" class="modal">
                                    <div class="modal-content">
                                        <h4 class="center-align cyan-text text-darken-3">${datos.Search[i].Title}</h4>
                                        </br>
                                        <div>
                                            <label>
                                                <input type="checkbox" id="fav" name="fav" value="1"/>
                                                <span>Marcar como favorito</span>
                                            </label>
                                        </div>
                                        <div id="formValue">
                                            </br>
                                            <h5 class="red-text darken-1">Valoración</h5>
                                            </br>
                                            <label>
                                                <input name="valoracion" type="radio" value="1"/>
                                                <span>1</span>
                                            </label>
                                            <label>
                                                <input name="valoracion" type="radio" value="2"/>
                                                <span>2</span>
                                            </label>
                                            <label>
                                                <input name="valoracion" type="radio" value="3"/>
                                                <span>3</span>
                                            </label>
                                            <label>
                                                <input name="valoracion" type="radio" value="4"/>
                                                <span>4</span>
                                            </label>
                                            <label>
                                                <input name="valoracion" type="radio" value="5"/>
                                                <span>5</span>
                                            </label>
                                        </div>
                                        <div class="input-field">
                                            <textarea id="comentario" class="materialize-textarea" data-length="200"></textarea>
                                            <label for="comentario">Comentario</label>
                                        </div>
                                        <button id="btn-guardar"  num="${i}" class="calificar-pelicula add btn waves-effect waves-light" > Guardar </button>
                                    </div>
                                    <div class="modal-footer">
                                     
                                    </div>
                                </div>
                            </div>
                        </div>`;
        }
        document.getElementById("peliculas").innerHTML=peliculas;
        //document.getElementsByClassName("profile-image")[0].setAttribute("src",dadesUsr.picture.thumbnail);
        //}).catch(function() {
        //console.log("problem!");
        var elems = document.querySelectorAll('.modal');
        var instances = M.Modal.init(elems,{});




                        document.getElementById("peliculas").addEventListener("click", function (e) {

                            if (e.target.classList.contains("calificar-pelicula")) {

                                favorito = (e.target.parentElement.querySelector("[name='fav']").checked == true) ? 1 : 0;
                                comentario = e.target.parentElement.querySelector("#comentario").value;
                                valoracion = e.target.parentElement.querySelector("[name='valoracion']:checked").value;

                                console.log(favorito);
                                const nPelicula = e.target.getAttribute("num");
                                console.log("Añado la pelicula" + nPelicula);
                                const datosPelicula = datos.Search[nPelicula];
                                const datosEnvio = new FormData();
                                datosEnvio.append('valoracion', valoracion);
                                datosEnvio.append('comentario', comentario);
                                datosEnvio.append('favorito', favorito );
                                datosEnvio.append('nombre', datosPelicula.Title);
                                datosEnvio.append('poster', datosPelicula.Poster);
                                datosEnvio.append('imdbId', datosPelicula.imdbID);
                                datosEnvio.append('ano', datosPelicula.Year);
                                fetch(`./../php/valorarPeliculas.php`, {
                                    method: 'POST',
                                    body: datosEnvio
                                });
                            }
                        });
    });
}


    function mJoc() {


        fetch(`./../php/partida.php`).then(function (res) {
            return res.json();
        }).then(function (data) {
            console.log(data);
            let joc = "";
            for (let i = 0; i < data.peliculas.length; i++) {
                //datos = data[i];


                console.log(data.peliculas[i].any1)

                joc += `
                
                <div class="row">
                 
                    <div class="col s12 m12 l12 center">
                        <h5>${data.peliculas[i].titulo}</h5>
                        <img src="${data.peliculas[i].imagen}">
                    </div>
                    <div class="col s12 m12 l12 center" style="text-align: center;">
                            <h5>Eligue una opcion: </h5>
                            <div style="display: inline-block">                            
                               <label>
                                    <input name="any${i}" type="radio" value="${data.peliculas[i].any1}"/>
                                    <span>${data.peliculas[i].any1}</span>
                               </label>
                                 <label>
                                    <input name="any${i}" type="radio" value="${data.peliculas[i].any2}"/>
                                    <span>${data.peliculas[i].any2}</span>
                               </label>
                                <label>
                                    <input name="any${i}" type="radio" value="${data.peliculas[i].any3}"/>
                                    <span>${data.peliculas[i].any3}</span>
                               </label>
                                <label>
                                    <input name="any${i}" type="radio" value="${data.peliculas[i].any4}"/>
                                    <span>${data.peliculas[i].any4}</span>
                               </label>   
                            </div>
                    </div>
                </div>
        `;
            }

            document.getElementById("jContent").innerHTML = joc;

            document.getElementById("comprobar").addEventListener("click", function (e) {

                //resposteAny = e.target.parentElement.querySelector("[name='any']:checked").value;
                //nomPartida = e.target.parentElement.querySelector("[name='nPartida']").value;

                //console.log(e.target);

                let nomPartida = document.getElementById("nPartida").value;
                let any0 = document.querySelector("[name='any0']:checked").value;
                let any1 = document.querySelector("[name='any1']:checked").value;
                let any2 = document.querySelector("[name='any2']:checked").value;
                let any3 = document.querySelector("[name='any3']:checked").value;
                let any4 = document.querySelector("[name='any4']:checked").value;

                //Creacion del json
                let estrJoc = {
                    id_partida: data.id_partida,
                    nom_partida: nomPartida,
                    respostes: [
                        {
                            ImdbID: data.peliculas[0].id,
                            resposta: any0
                        },
                        {
                            ImdbID: data.peliculas[1].id,
                            resposta: any1
                        },
                        {
                            ImdbID: data.peliculas[2].id,
                            resposta: any2
                        },
                        {
                            ImdbID: data.peliculas[3].id,
                            resposta: any3
                        },
                        {
                            ImdbID: data.peliculas[4].id,
                            resposta: any4
                        }
                    ]
                }



                let datosEnvio = new FormData();
                datosEnvio.append('json', JSON.stringify(estrJoc));
                fetch('./../php/RecibirDatos.php', {
                    method: 'POST',
                    body: datosEnvio
                    //headers: {
                      //  'Content-Type': 'application/json' //Formato
                    //}
                })
                ;
            });
        });
    }
