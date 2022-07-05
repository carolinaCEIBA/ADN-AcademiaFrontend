export class Programacion{
    idprogramacion?: number;
    clase : number;
    aprendiz : number;
    instructor : number;
    fecha : any;
    hora : string;
    asistencia : string;

    constructor(clase: number, aprendiz: number, instructor: number, fecha: any, hora: string, asistencia: string){
        this.clase = clase;
        this.aprendiz = aprendiz;
        this.instructor = instructor;
        this.fecha = fecha;
        this.hora = hora;
        this.asistencia = asistencia;
    }

}