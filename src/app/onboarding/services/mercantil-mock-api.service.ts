import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MercantilMockApiService {

  private URL_API = 'https://servicios.qamercantilandina.com.ar/api_mock_frontend/v1';

  constructor(
    private http: HttpClient
    ) { }

  // Función que retorna las los planes de coberturas de Mercantil Andina.

  getCoberturas(): any {
    
    return this.http.get(`${ this.URL_API }/coberturas`);

  };

  // Función que retorna true si el usuario ingresado por parámetro ya existe.
  // Si retornase false, será un usuario válido para continuar.

  checkUsuario(name: string): any {

    const params = new HttpParams()
    .set('nombre', name);
  
    return this.http.get<boolean>(`${ this.URL_API }/usuarios`, { params } );

  };

}
