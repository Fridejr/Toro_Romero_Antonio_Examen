//creamos las constantes que recogen las clases "hamburgwe" y "nav-links"
const hamburguesa = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

//agregamos un evento clic al elemento con clase "hamburgesa"
hamburguesa.addEventListener('click', function() {
    //por cada clic que se hace sobre el elemento hamburguesa se agrega o se elimina 
    //(segun necesite) la clase "active" al elemento navLinks
    navLinks.classList.toggle("active");
});



