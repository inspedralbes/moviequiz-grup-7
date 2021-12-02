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
        