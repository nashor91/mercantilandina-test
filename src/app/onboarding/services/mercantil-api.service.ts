import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Marcas } from '../interfaces/marcas.interface';

@Injectable({
  providedIn: 'root'
})
export class MercantilApiService {

  private URL_API = 'https://servicios.qamercantilandina.com.ar/api/v1/vehiculos/marcas';
  
  constructor(
    private http: HttpClient
    ) { }

  // Función que retorna datos de los vehículos.
  // Si se ejecuta sin parámetros, retornará las marcas de los vehículos.
  // Si se ejecuta con id y año, retornará los modelos de los vehículos.
  // Si se ejcuta con id, año y modelo, retornará las versiones de los vehículos.

  getVehiculos(id?: number, anio?: number, modelo?: string): any {

    let queryParams: string = '';

    if(modelo) {
      queryParams = `/${id}/${anio}/${modelo}`;
    } else if(id && anio) {
      queryParams = `/${id}/${anio}`;
    };
    
    return this.http.get<Marcas>(`${ this.URL_API }${queryParams}`);

  };

}
