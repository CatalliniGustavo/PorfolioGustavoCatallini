export class usuario {
    id?: number;
    nombre: String;
    apellido: String;
    img: String;
    acerca: String;

    constructor(nombre: String, apellido: String, img: String, acerca: String) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.img = img;
        this.acerca = acerca;
    }
}