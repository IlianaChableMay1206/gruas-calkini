CREATE DATABASE IF NOT EXISTS api_rest_laravel;

USE api_rest_laravel;

CREATE TABLE superusuarios
(
      id_superuser      int(255) auto_increment NOT NULL,
      nombre            varchar(50) NOT NULL,   
      email             varchar(255) NOT NULL,
      contrasenia        varchar(255) NOT NULL,
      remember_token    varchar(255),
      CONSTRAINT pk_superusuarios PRIMARY KEY(id_superuser)
)
ENGINE=InnoDb;

CREATE TABLE choferes
(
      id_chofer         int(255) auto_increment NOT NULL,
      nombre            varchar(255),
      apellidos         varchar(255),
      edad              int(2),
      doc_licfederal    varchar(255),
      fecha_licfederal  date DEFAULT NULL,
      num_licfederal    int(255),
      doc_licestatal    varchar(255),
      fecha_licestatal  date DEFAULT NULL,
      num_licestatal    int(255),
      doc_ine           varchar(255),
      doc_curp          varchar(255),
      CONSTRAINT pk_choferes PRIMARY KEY(id_chofer)
)
ENGINE=InnoDb;

CREATE TABLE vehiculos
(
      id_vehiculo       int(255) auto_increment NOT NULL,
      superuser_id      int(255) NOT NULL,
      chofer_id         int(255) NOT NULL,
      marca             varchar(100),   
      modelo            varchar(255),
      foto_vehiculo     varchar(255),
      duenio_compania    varchar(255),
      color             varchar(50),
      placas            varchar(255),
      tipo_servicio     varchar(255),
      lugar_siniestro   varchar(255),
      descripcion_servicio    text,
      fecha_entrada     date DEFAULT NULL,
      pension_corralon  varchar(20),
      dias_pension      int(10),
      inventario        varchar(20),
      foto_inventario   varchar(255),
      llaves            varchar(20),
      estatus_entrega   varchar(20),
      fecha_entrega     date DEFAULT NULL,
      otro_asunto       text,
      sucursal_vehiculo varchar(20),
      CONSTRAINT pk_vehiculos PRIMARY KEY(id_vehiculo),
      CONSTRAINT fk_vehiculo_superuser FOREIGN KEY(superuser_id) REFERENCES superusuarios(id_superuser),
      CONSTRAINT fk_vehiculo_chofer FOREIGN KEY(chofer_id) REFERENCES choferes(id_chofer)
)
ENGINE=InnoDb;

CREATE TABLE gruas
(
      id_grua           int(255) auto_increment NOT NULL,
      superuser_id      int(255) NOT NULL,
      marca             varchar(255),
      modelo            varchar(255),
      num_serie         int(255),
      placas            varchar(255),
      anio              int(4),
      num_motor         int(255),
      tipo              varchar(20),
      doc_tarjcirculacion     varchar(255),
      doc_cartaporte    varchar(255),
      doc_polizaseguro  varchar(255),         
      doc_facturagrua   varchar(255),
      doc_concesion     varchar(255),
      doc_inclusiones   varchar(255),
      doc_permisofisicomeca   varchar(255),
      doc_anticontaminantes   varchar(255),
      CONSTRAINT pk_gruas PRIMARY KEY(id_grua),
      CONSTRAINT fk_gruas_superuser FOREIGN KEY(superuser_id) REFERENCES superusuarios(id_superuser)
)
ENGINE=InnoDb;