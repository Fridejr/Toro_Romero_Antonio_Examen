//creamos el prototipo CuentaBancaria con 3 atributos, uno de ellos con valor por defecto
function CuentaBancaria(nombre, dni, saldo = 0) {
    this.nombre = nombre;
    this.dni = dni;
    this.saldo = saldo;
    
    //agregamos otro atributo el cual no esta en el constructor para generar un nuemero de cuenta aleatorio
    this.numeroCuenta = "ES" + Math.floor(Math.random() * 99999999999999999999).toString().padStart(20, '0')

    //hacemos un metodo para mostrar los datos
    this.mostrarDatos = function() {
        console.log(`Nombre: ${this.nombre} /nDNI: ${this.dni} /nNumero de cuenta: ${this.numeroCuenta} /n Saldo: ${this.saldo}`);
    }

    //segundo metodo, este sirve para aumentar el sueldo de la cuenta
    this.realizarIngreso = function(monto) {
        //se comprueba que la cantidad indicada es mayor a 0
        if (monto > 0) {
            this.saldo += monto;
            console.log(`Ingreso realizado. Nuevo saldo: ${this.saldo}`);

        } else {
            //si no se cumplen los requisitos se manda mensaje de error
            console.log("Introduce una cifra positiva");
        }
    }

    //tercer metodo, este sirve para retirar saldo de la cuenta
    this.realizarRetiro = function(monto) {
        //se comprueba que haya cantidad suficiente en la cuenta para poder hacer el retiro de la cantidad indicada
        if (monto > 0 && monto < this.saldo) {
            this.saldo -= monto;
            console.log(`Retiro realizado. Nuevo saldo: ${this.saldo}`);
            //se hace un return true para luego poder usar esta funcion en otra
            return true;

        } else {
            //si no se cumplen los requisitos se manda mensaje de error
            console.log("Introduce una cifra positiva y menor a la cantidad de saldo");
        }
    }

    //cuarto metodo, este sirve para pasar saldo de una cuenta a otra
    this.realizarTransferencia = function(cuentaDestino, monto) {
        //se comprueba que la retirada de dinero de la cuenta que quiere hacer la transferencia es valida y se realiza el retiro
        if (this.realizarRetiro(monto)) {
            //si este es valido, se agrega el saldo eliminado de la cuenta 1 a la cuenta 2
            cuentaDestino.saldo += monto;
            console.log(`Transferencia realizada. Nuevo saldo: ${this.saldo}`);

        } else {
            //se manda mensaje de error en caso que no se haya podido realizar la transferencia
            console.log("El retiro de su cuenta no se ha podido realizar, revise la cantidad que introdujiste");
        }

        
    }

}

//creamos dos cuentas
var cuenta1 = new CuentaBancaria("antonio", "3523253c", 330);
var cuenta2 = new CuentaBancaria("oscar", "323523b", 40);

//mostramos los datos de estas
cuenta1.mostrarDatos();
cuenta2.mostrarDatos();

//en una realizamos un retiro y en otra un ingreso
cuenta1.realizarRetiro(30);
cuenta2.realizarIngreso(60);

//realizamos una transferencia
cuenta1.realizarTransferencia(cuenta2, 100);

//mostramos los datos de nuevo para comprobar que los metodos se han ejecutado correctamente
cuenta1.mostrarDatos();
cuenta2.mostrarDatos();
