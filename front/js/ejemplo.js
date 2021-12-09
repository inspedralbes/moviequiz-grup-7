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


function buscar(){
    var peli = document.getElementById("cercar").value;
    var div = document.getElementById("pelis");
    fetch("http://www.omdbapi.com/?s=" +peli+ "&apikey=ae8cf42f")
        .then(response => response.json())
        .then(data => {
            for(let i =0; i< data.Search.length; i++){
                let h2 = document.createElement("h2");
                let img = document.createElement("img");
                h2.innerHTML = data.Search[i].Title;
                img.src = data.Search[i].Poster;

                div.append(h2, img);

            }
            console.log(data);
        });
}
