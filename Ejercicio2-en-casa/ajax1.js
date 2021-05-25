function CargarFichero(){
    loadDocA("mensajes.txt","txt")
}
setInterval(CargarFichero, 10000);
function gestionarFicheroTXT(a)
{
    let capaVacia = document.querySelector("main");
    capaVacia.innerHTML = "";
    let mensajes = a.split("\n");
    for (let i = 0; i < mensajes.length; i++) {
        if(i % 2 == 0) 
            capaVacia.innerHTML += "<div class='izq'>" + mensajes[i] + "\n</div>";
        else
            capaVacia.innerHTML += "<div class='der'>" + mensajes[i] + "\n</div>";
    }
}