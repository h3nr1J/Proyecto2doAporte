import { alumno } from "./alumno";
import { aula } from "./aula";
import { docente } from "./docente";


export interface asistencia {
    fechaAsistencia: string,
    alumnoAsistencia: alumno,
    aulaAsistecia: aula,
    estado: string,
    modificacionesA?: number | string
    codA :string,
    nroSesionRA: number,
    docenteA: docente
}
