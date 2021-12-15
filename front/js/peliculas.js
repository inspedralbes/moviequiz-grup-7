
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
        let pass = document.getElementById("password").value;
    
        let datosEnvio = new FormData();
        datosEnvio.append('correo',email);
        datosEnvio.append('password',pass);
    
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
    function jugar(){
        document.addEventListener('DOMContentLoaded', function() {
            var elems = document.querySelectorAll('.modal');
            var instances = M.Modal.init(elems);
        });
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
            for(i=0; i<8; i++) {
                datos = data.Search[i];
                peliculas += `  <div class="row center">
                                <div class="col s6 m3 l3">
                                    <div class="card">
                                        <div class="card-image">
                                            <img src="${datos.Poster}" class="card-image">
                                            <span class="card-title">${datos.Title}</span>
                                             <a id="btn-modal" class="btn-floating halfway-fab modal-trigger waves-effect waves-light red" href="#modal${i}"><i class="material-icons">+</i></a>
                                        
                                            <div class="card-content">
                                                <p>${datos.Year}</p>
                                            </div>
                                        </div>
                                       <div id="modal${i}" class="modal">
                                        <div class="modal-content">
                                            <h4 class="center-align cyan-text text-darken-3">${datos.Title}</h4>
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
                                            <button id="btn-guardar" class="btn waves-effect waves-light disabled"> Guardar </button>
                                            <!--<div id="divError" class="divError"><label class="error"><span style="font-size: 20px"> ! </span>Debes de iniciar sesión para poder hacer una valoración</label></div>-->
                                        </div>
                                        <div class="modal-footer">
                                            <a href="#!" class="btn modal-close red"><i class="material-icons">cerrar</i></a>
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






