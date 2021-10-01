const main = () =>{
        const container = document.querySelector('.cont');
        const divChar = document.getElementById('divChar');
        const divEvent = document.getElementById('divEvent');
        const divWpn = document.getElementById('divWpn');
        const btns = document.querySelectorAll('.btn-links');
        const centro = document.getElementById('centro');
        const cont = document.querySelector('.cont');
        //1 = personajes, 2 = armas, 3 = platos, 4 = eventos, 5 = gachas
        divChar.onclick = function(event){
                let url='../json/data.json'
                cargarDatos(url, 1);
                rmChildNodes(centro);
                console.log("Buscando personajes...");
                if(cont.firstChild){
                        rmChildNodes(cont);
                }
        }
        btns[0].onclick = function(event){
                let url='../json/data.json'
                cargarDatos(url, 1);
                rmChildNodes(centro);
                console.log("Buscando personajes...");
                if(cont.firstChild){
                        rmChildNodes(cont);
                }
        }
        divEvent.onclick = function(event){
                let url='../json/data.json'
                cargarDatos(url, 4);  
                rmChildNodes(centro);    
                console.log("Buscando eventos..."); 
                if(cont.firstChild){
                        rmChildNodes(cont);
                }
        }
        btns[1].onclick = function(event){
                let url='../json/data.json'
                cargarDatos(url, 4);
                rmChildNodes(centro);
                console.log("Buscando eventos..."); 
                if(cont.firstChild){
                        rmChildNodes(cont);
                }
        }
        divWpn.onclick = function(event){
                let url='../json/data.json'
                cargarDatos(url, 2);
                rmChildNodes(centro);
                console.log("Buscando armas..."); 
                if(cont.firstChild){
                        rmChildNodes(cont);
                }
        }
        btns[2].onclick = function(event){
                let url='./json/data.json';
                cargarDatos(url, 2);
                rmChildNodes(centro);
                console.log("Buscando armas..."); 
                if(cont.firstChild){
                        rmChildNodes(cont);
                }
        }
        const rmChildNodes = (parent)=>{
                while (parent.firstChild) {
                    parent.removeChild(parent.firstChild);
                }
            }
        function cargarDatos(url, tipo){
                if(tipo==1){
                        console.log("Fetch a personajes...")
                        fetch(url)
                        .then(response=>response.json())
                        .then(data=>crearPjs(data))
                }
                else if(tipo==2){
                       console.log("Fetch a armas...")
                        fetch(url)
                        .then(response=>response.json())
                        .then(data=>crearArmas(data)) 
                }
        }
        const crearPjs = (data)=>{
                console.log(data.personajes.length);
                for(let i = 0; i < data.personajes.length; i++){
                        crearPj(data.personajes[i]);
                        console.log(data.personajes[i]);
                }
        }
        function crearPj(personaje){
                console.log(personaje);
                let card = document.createElement('div');
                card.className="card";
                let imgDiv = document.createElement('div');
                imgDiv.className="imgCont";
                let imgPj = document.createElement('img');
                imgPj.className="pjImg";
                let texto = document.createElement('div');
                texto.className="textCont";
                let parrafo = document.createElement('p');
                parrafo.className="texto";
                parrafo.innerText=personaje.nombre;
                imgPj.src=personaje.img_icon;
                texto.appendChild(parrafo);
                imgDiv.appendChild(imgPj);
                card.appendChild(imgDiv);
                card.appendChild(texto);
                card.addEventListener('click',()=>{
                        alert('Ir al personaje');
                    });

                cont.appendChild(card);
        }
        const crearArmas = (data) =>{
                console.log(data.armas.length);
                for(let i = 0; i < data.armas.length; i++){
                        crearArma(data.armas[i]);
                        console.log(data.armas[i]);
                }
        }
        function crearArma(arma){
                console.log(arma);
                let card = document.createElement('div');
                card.className="card";
                let imgDiv = document.createElement('div');
                imgDiv.className="imgCont";
                let imgPj = document.createElement('img');
                imgPj.className="pjImg";
                let texto = document.createElement('div');
                texto.className="textCont";
                let parrafo = document.createElement('p');
                parrafo.className="texto";
                parrafo.innerText=arma.tipo+" - "+arma.nombre;
                imgPj.src=arma.img;
                texto.appendChild(parrafo);
                imgDiv.appendChild(imgPj);
                card.appendChild(imgDiv);
                card.appendChild(texto);
                card.addEventListener('click',()=>{
                        alert('Ir al arma');
                    });

                cont.appendChild(card);
        }
} 

document.addEventListener('DOMContentLoaded', main);