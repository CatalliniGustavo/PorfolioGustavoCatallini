export class Experiencia {
    id?: number;
    imgIcono: string;
    linkIcono: string;
    nombre: string;
    fechainicio: string;
    fechafin: string;
    lugar: string;
    titulo: string;
    descripcion: string;
    


    
    constructor(imgIcono: string, linkIcono: string, nombre: string, fechainicio: string, fechafin: string, lugar: string, titulo: string, descripcion: string) {
        this.imgIcono = imgIcono;
        this.linkIcono = linkIcono;
        this.nombre = nombre;
        this.fechainicio = fechainicio;
        this.fechafin = fechafin;
        this.lugar = lugar;
        this.titulo = titulo;
        this.descripcion = descripcion;
    }


}
