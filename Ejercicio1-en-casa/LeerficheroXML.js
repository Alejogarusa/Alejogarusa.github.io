loadDocA("libros", "xml");
function gestionarFicheroXML(ficheroXML){
    let capaVacia = document.querySelector("main");
    let libros = ficheroXML.querySelectorAll("libro");
    for (let i = 0; i < libros.length; i++) {
        capaVacia.innerHTML += "<div class='fila'>" + "<div class='celda'>" + libros[i].querySelector("ISBN").textContent + "</div>";
        capaVacia.innerHTML += "<div class='celda'>" + libros[i].querySelector("titulo").textContent + "</div>";
        capaVacia.innerHTML += "<div class='celda'>" + libros[i].querySelector("nivelProfundidad").textContent + "</div>";
        capaVacia.innerHTML += "<div class='celda'>" + libros[i].querySelector("autores").textContent + "</div>" + "</div>";
    }
}

// let capa = document.querySelector("#ficheroXML");
// capa.addEventListener("click", CargarFichero);
// function CargarFichero(){
//     loadDocA("libros.xml", "xml")
// }