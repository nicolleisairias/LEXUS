
export enum TipoInmueble {
    Casa = 'Casa',
    Apartamento = 'Apartamento',
    Oficina = 'Oficina'
}
export enum EstadoInmueble {
    Disponible = 'Disponible',
    Vendido = 'Vendido',
    Arrendado = 'Arrendado'
}

export class Inmueble {
    id_inmueble: number = 0;
    descripcion: string = '';
    precio: number = 0;
    tipo: TipoInmueble = TipoInmueble.Casa;
    estado: EstadoInmueble = EstadoInmueble.Arrendado;
    imagenes: Blob[] = [];

    //Foraneas
    id_cliente: number = 0;
    id_ubicacion: number = 0;
}