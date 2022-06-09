export class usuario {
    id?: number;
    nombre: String;
    apellido: String;
    img: String;
    acerca: String;
    rol: String;

    

    constructor(nombre: String, apellido: String, img: String, acerca: String, rol: String) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.img = img;
        this.acerca = acerca;
        this.rol = rol;
    }
}