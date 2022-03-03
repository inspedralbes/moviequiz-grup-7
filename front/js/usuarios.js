document.getElementById("boton-contrasena").addEventListener('click', function (){

    let passwd =  document.getElementById("contrasena").value;

    let datosEnvio = new FormData();
    datosEnvio.append('passwd',passwd);

    fetch(`./../php/ActualizarContrasena.php`,{
        method: 'POST',
        body: datosEnvio
    });

})

fetch(`./../php/Favoritos.php`).then(function(res) {
        return res.json();

    }).then(function(data) {

        console.log(data);


        let pelis = "";
        for(let i=0; i<data.length; i++){
            pelis += `<a class="carousel-item"><img src="${data[i].imagen}"></a>
                `;
        }
        document.getElementById("carousel2").innerHTML=pelis;
        //    }).catch(function() {
        //        console.log("problem!");
        var imgs = document.querySelectorAll('.carousel');
        var instances = M.Carousel.init(imgs);

    });











