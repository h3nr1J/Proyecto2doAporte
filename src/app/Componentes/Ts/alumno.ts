import { aula } from "./aula";
import { docente } from "./docente";
import { nota } from "./nota";
import { tutor } from "./tutor";

export interface alumno{
    //datos de inicio de sesion
    usuarioA:string,
    contraseñaA:string,
    //datos generales
    codA:string,
    DniA:string,
    nombreA: string,
    apellidoPA:string,
    apellidoMA:string,
    fechaNaciA:string,
    sexoA:string,
    direccionA:string,
    notaA:nota,
    gradoA:string, 
    datosT:tutor,
    aulaA:aula,
    docenteA:docente,
}
