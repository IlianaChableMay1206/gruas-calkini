class vehiculos{
    constructor(
        public id_vehiculos: number,
        public id_superuser: number,
        public id_chofer: number,
        public marca: string,
        public modelo: string,
        public foto_vehiculo: string,
        public dueño_compania: string,
        public color: string,
        public placas: string,
        public tipo_servicio: string,
        public lugar_siniestro: string,
        public descripcion_servicio: string,
        public fecha_entrada: string,
        public pension_corralon: string,
        public dias_pension: number,
        public inventario: string,
        public llaves: string,
        public estatus_entrega: string,
        public fecha_entrega: string,
        public otro_asunto: string,
        public sucursal_vehiculo: string
    ){}
}