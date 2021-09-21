class gruas{
    constructor(
        public id_grua: number,
        public id_superuser: number,
        public marca: string,
        public modelo: number,
        public num_serie: number,
        public placas: string,
        public anio: number,
        public num_motor: number,
        public tipo: string,
        public doc_tarjcirculacion: string,
        public doc_cartaporte: string,
        public doc_polizaseguro: string,
        public doc_facturagrua: string,
        public doc_consecion: string,
        public doc_inclusiones: string,
        public doc_permisofisicomeca: string,
        public doc_anticontaminantes: string
    ){}
}