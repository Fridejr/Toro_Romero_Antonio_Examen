//constante flechas la cual crea un array con todos los elementos con clase arrow
const flechas = document.querySelectorAll(".arrow");

//bucle que recorre todos los elementos con clase arrow
flechas.forEach(flecha => {
    //agregamos un evento click a cada flecha
    flecha.addEventListener('click', function() {
        //constante que incluye el submenu que queremos deplegar
        const subMenu = this.parentElement.nextElementSibling;

        //usamos toggle para añadir la clase "show" al submenu para poder desplegarlo y ocultarlo, segun se necesite
        subMenu.classList.toggle('show');

        //tambien usamos toggle sobre cada flecha para que esta haga un giro de 90grados por cada click
        this.classList.toggle('rotate-arrow');
    })

    
})

