//Cuando el usuario haga scroll en la pagina, se ejecuta         myFuction


window.onscroll = function() {myFunction()};

function myFunction() {
        var winScroll = document.body.scrollTop || document.documentElement.scrollTop;

        var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        var scrolled = (winScroll / height) * 100;
        
    document.getElementById("myBar").style.width = scrolled + "%";
}