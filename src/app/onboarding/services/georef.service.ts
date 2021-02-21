import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

import { Provincias } from '../interfaces/provincias.interface';
import { Municipios } from '../interfaces/municipios.interface';

@Injectable({
  providedIn: 'root'
})
export class GeorefService {

  private URL_API = 'https://apis.datos.gob.ar/georef/api';

  constructor(
    private http: HttpClient
    ) { }

  // Función que retorna todas las provincias.

  getProvincias(): any {
    
    return this.http.get<Provincias>(`${ this.URL_API }/provincias`);
    
  };

  // Función que retorna los municipios para una provincia determinada.

  getMunicipios(id:number): any {

    const params = new HttpParams()
    .set('provincia', id.toString())
    .set('campos', 'id,nombre')
    .set('max', '135' );
  
    return this.http.get<Municipios>(`${ this.URL_API }/municipios`, { params } );

  };

}