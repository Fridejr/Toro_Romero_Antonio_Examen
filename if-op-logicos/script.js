//contantes fecha y hora las cuales se establecen automaticamente con las funciones
const fecha = new Date();
const horaActual = fecha.getHours();

//condicional para saber que mensaje mandar
function saludarSegunHora() {
    //entre las 5 de la mañana y 12 del mediodia
    if (horaActual >= 5 && horaActual < 12) {
        document.write("Buenos dias");
    
        //entre las 12 del mediodia y las 6 de la tarde
    } else if(horaActual >= 12 && horaActual < 18) {
        document.write("Buenas tardes");
    
    } else {
        //el resto de horas
        document.write("Buenas noches");
    }
}