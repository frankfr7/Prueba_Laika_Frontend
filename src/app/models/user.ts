export class User{
    constructor(
        public primer_nombre: string,
        public segundo_nombre: string,
        public primer_apellido: string,
        public segundo_apellido: string,
        public nro_documento: number,
        public tipo_documento_id: number
    ){}
}