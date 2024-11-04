const select = document.getElementById('select');
function ir(){

    let eleccion = select.value;

    if(eleccion == "facil"){
        window.location = "./niveles/facil.html";
    }

}