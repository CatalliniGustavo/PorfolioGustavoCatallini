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
    estado: boolean;


    
    constructor(imgIcono: string, linkIcono: string, nombre: string, fechainicio: string, fechafin: string, lugar: string, titulo: string, descripcion: string, estado: boolean) {
        this.imgIcono = imgIcono;
        this.linkIcono = linkIcono;
        this.nombre = nombre;
        this.fechainicio = fechainicio;
        this.fechafin = fechafin;
        this.lugar = lugar;
        this.titulo = titulo;
        this.descripcion = descripcion;
        this.estado = estado;
    }


}
