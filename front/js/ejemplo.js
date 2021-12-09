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


        