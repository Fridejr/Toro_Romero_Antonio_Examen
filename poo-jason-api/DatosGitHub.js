//creamos cadena json
var datosGitHubInstancia = '{"login": "Fridejr", "id": 133397612, "email": null, "public_repos": 9}';

//creamos la clase necesaria y añadimos un atributo al constructor, el cual sera la conversion de la cadena json
class DatosGitHub {
    constructor(datosGit) {
        //agregamos como atributo la conversion del json
        this.datosGit = JSON.parse(datosGit);

        //creamos otros 4 atributos a partir del json
        this.nombreUsuario = this.datosGit.login;
        this.id = this.datosGit.id;
        this.email = this.datosGit.email;
        this.cantidadRepositorios = this.datosGit.public_repos;
    }

    //metodo que muestra los datos del objeto
    datosRecibidos() {
        console.log(`El usuario de GitHub ${this.nombreUsuario} tiene un id ${this.id} cuyo correo es ${this.email} y tiene ${this.cantidadRepositorios} repositorios publicos`);
    }
}
//creamos el objeto para la clase DatosGitHub
const instanciaGitHub = new DatosGitHub(datosGitHubInstancia);

//mostramos los datos del objeto
instanciaGitHub.datosRecibidos();

//como vemos que el atributo aparece como "null", modificamos su valor
instanciaGitHub.email = "antoniotorodaw@gmail.com";

//volvemos a comprobar los datos
instanciaGitHub.datosRecibidos();
