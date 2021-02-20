import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Coberturas } from '../interfaces/coberturas.interface';

@Injectable({
  providedIn: 'root'
})
export class MercantilMockApiService {

  private URL_API = 'https://servicios.qamercantilandina.com.ar/api_mock_frontend/v1';

  constructor(private http: HttpClient) { }

  getCoberturas(): any {
    
    this.http.get<Coberturas>(`${ this.URL_API }/coberturas`)
    .subscribe( ( resp: Coberturas ) => {
      return resp;
    });
  }

  checkUsuario(name: string): any {

    const params = new HttpParams()
    .set('nombre', name);
  
    this.http.get<boolean>(`${ this.URL_API }/usuarios`, { params } )
    .subscribe( ( resp: boolean ) => {
      return resp;
    });

  }

}
