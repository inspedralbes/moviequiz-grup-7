
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
                            <button type="button" id="Jugar" onclick="jugar()" class="get-profile btn btn-primary">Jugar</button>`;
                document.getElementById("logueado").innerHTML = htmlstr;
            }
        })
    }
<<<<<<< HEAD

    function buscando(){
=======
    function jugar(){
        document.addEventListener('DOMContentLoaded', function() {
            var elems = document.querySelectorAll('.modal');
            var instances = M.Modal.init(elems);
        });
    }

function buscando(){
>>>>>>> 41e2e03843e5a498b35b8799319fe39d2e4a403e
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
                                                    <input type="checkbox" id="fav" name="fav"/>
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

                                    //favorito = (e.target.parentElement.querySelector("[name='fav']").value == "on") ? true : false;
                                    comentario = e.target.parentElement.querySelector("#comentario").value;
                                    valoracion = e.target.parentElement.querySelector("[name='valoracion']").value;
                                    alert("hola");
                                    const nPelicula = e.target.getAttribute("num");
                                    console.log("Añado la pelicula" + nPelicula);
                                    const datosPelicula = datos.Search[nPelicula];
                                    const datosEnvio = new FormData();
                                    datosEnvio.append('valoracion', valoracion);
                                    datosEnvio.append('comentario', comentario);
                                    //datosEnvio.append('usuario', favorito );
                                    datosEnvio.append('nombre', datosPelicula.Title);
                                    datosEnvio.append('poster', datosPelicula.Poster);
                                    datosEnvio.append('imdbId', datosPelicula.imdbID);
                                    datosEnvio.append('ano', datosPelicula.Year);
                                    fetch(`./../php/valorarPeliculas.php`, {
                                        method: 'POST',
                                        body: datosEnvio
                                    })
                                        .then(response => response.json())
                                        .then(data => {
                                            console.log(data);
                                        });
                                }
                            });





        });
    }

function modalJoc() {
        let mod = "";
            mod += `
                <div class="modal" id="inicio">
                        <div class="modal-content">
                            <h4><u>Juego de adivinar la película</u></h4>
                            <p>En este juego, te mostaremos una imagen de una película, tendrás que adivinar el año que se estrenó dicha película</p>
                        </div>
                        <div class="modal-footer">
                            <a href="#" class="modal-close btn orange left">Cerrar</a>
                            <a href="#jugar" onclick="cmJugar" class="modal-close btn orange modal-trigger">Empezar</a>
                        </div>
                </div>
                </div id="content">
                    <div class="modal" id="jugar">
                        <div class="modal-content">
                            <p>Hola</p>
                        </div>
                    </div>
                </div> `;
            document.getElementById("contentModal").innerHTML=mod;
                var elems = document.querySelectorAll('.modal');
                var instances = M.Modal.init(elems);
}






