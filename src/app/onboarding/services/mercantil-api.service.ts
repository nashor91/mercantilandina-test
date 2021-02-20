import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Marcas } from '../interfaces/marcas.interface';

@Injectable({
  providedIn: 'root'
})
export class MercantilApiService {

  private URL_API = 'https://servicios.qamercantilandina.com.ar/api/v1/vehiculos/marcas';
  
  constructor(private http: HttpClient) { }

  getVehiculos(id?: number, anio?: number, modelo?: string): any {

    let queryParams: string = '';

    if(modelo) {
      queryParams = `/${id}/${anio}/${modelo}`;
    } else if(id && anio) {
      queryParams = `/${id}/${anio}`;
    }
    
    this.http.get<Marcas>(`${ this.URL_API }${queryParams}`)
    .subscribe( ( resp: Marcas ) => {
      return resp;
    });
  }

}
