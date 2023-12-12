//creamos la clase aula, la cual contiene dos atributos y un metodo
class Aula {
    constructor(numero, capacidad) {
        this.numero = numero;
        this.capacidad = capacidad;
    }

    //metodo para mostrar datos de los objetos de esta clase
    presentar_materiales() {
        console.log(`Bienvenidos al aula ${this.numero}, la cual tiene capacidad para ${this.capacidad} personas`);
    }
}

//creamos una segunda clase que hereda los dos atributos de la clase aula, ademas tambien añadimos uno nuevo llamado "instrumento"
class Musica extends Aula {
    constructor(numero, capacidad, instrumento) {
        //añadimos los atributos de la clase padre a este constructor
        super(numero, capacidad);
        //creamos el atributo exclusivo de esta
        this.instrumento = instrumento;
    }

    //modificamos el metodo para añadir tambien el nuevo atributo
    presentar_materiales() {
        console.log(`Bienvenidos al aula de música número ${this.numero}. Hoy presentaremos los materiales necesarios para la clase de ${this.instrumento}, solamente tenemos ${this.capacidad} plazas`);
    }
}

//creamos una tercera clase que tambien hereda los dos atributos de la clase aula, ademas tambien añadimos uno nuevo llamado "cantidadOrdenadores"
class Tecnologia extends Aula {
    constructor(numero, capacidad, cantidadOrdenadores) {
        //añadimos los atributos de la clase padre a este constructor
        super(numero, capacidad);
        //creamos el atributo exclusivo de esta
        this.cantidadOrdenadores = cantidadOrdenadores;
    }

    //modificamos el metodo para añadir tambien el nuevo atributo
    presentar_materiales() {
        console.log(`Bienvenidos al aula de tecnología número ${this.numero}. El día de hoy hemos comprador ${this.cantidadOrdenadores} ordenadores adicionales para aprender a programar, en total ahora tenemos ${this.capacidad} estudiantes de capacidad`);
    }
}

//creamos los objetos para las clases musica y tecnologia agregando sus atributos
var clasesSaxofon = new Musica(2, 10, "saxofon");
var claseTecnologia = new Tecnologia(3, 30, 20);

//llamamos al metodo presentar_materiales() para cada objeto
clasesSaxofon.presentar_materiales();
claseTecnologia.presentar_materiales();

console.log("La característica de la POO que permite sobrescribir los métodos en herencia es el polimorfismo");