export enum Resultado {
    aprobado = 'Aprobado',
    rechazado = 'Rechazado'
}

export class EstudioRiesgo {    
    id_estudio: number = 0;
    id_inmueble: number = 0;
    fechaEstudio: Date = new Date();
    resultadoListaClinton: Resultado = Resultado.rechazado;
    resultadoCentral: Resultado = Resultado.rechazado;
    certificadoLibertad: Resultado = Resultado.rechazado;
    observaciones: string = '';
}