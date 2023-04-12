//Cuando el usuario haga scroll en la pagina, se ejecuta la funcion barraProgreso
window.onscroll = function(){barraProgreso()};

function barraProgreso() {
        let winScroll = document.body.scrollTop || document.documentElement.scrollTop;

        let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        let scrolled = (winScroll / height) * 100;
        
    document.getElementById("myBar").style.width = scrolled + "%";
}








//Cuando el usuario salga del Sitio Web se cambia el TITULO
    let tituloPrevio = document.title

window.addEventListener("blur", () => {
    tituloPrevio = document.title
    document.title = "¡Volve para despegar!"
})


window.addEventListener("focus", () => {
    document.title = tituloPrevio
})