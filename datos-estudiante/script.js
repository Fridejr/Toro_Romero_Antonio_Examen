//Creamos las variables para que el usuario introduzca los datos
var nombre = prompt("Digame su nombre");
var apellidos = prompt("Digame sus apellidos");
var edad = parseInt(prompt("Digame su edad"));
var ciclo = prompt("Digame el ciclo que esta cursando actualmente", "DAW");

//condicion para comprobar que la variable edad sea un numero
if (!isNaN(edad)) {
    //si esta lo es, se muestran los datos del usuario
    document.write(`Nombre: ${nombre} <br> Apellidos: ${apellidos} <br> Edad: ${edad} <br> Ciclo actual: ${ciclo}`);

} else {
    //sino, se devuelve un error
    document.write("Ha habido un error, porfavor introduce un digito valido para tu edad");
}
