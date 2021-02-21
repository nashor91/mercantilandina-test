export interface Municipios {
    cantidad:   number;
    inicio:     number;
    municipios: Municipio[];
    parametros: Parametros;
    total:      number;
}

export interface Municipio {
    id:     string;
    nombre: string;
}

export interface Parametros {
    campos:    string[];
    max:       number;
    provincia: string[];
}