export class user {
    id?: number;
    nombre: String;
    apellido: String;
    email: String;
    img: String;
    acerca: String;

    constructor(nombre: String, apellido: String, email: String, img: String, acerca: String) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.email = email;
        this.img = img;
        this.acerca = acerca;
    }
}