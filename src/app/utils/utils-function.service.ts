import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class UtilsFunctionsService {

  constructor() { }
 
  // Función que se encarga de ordenar alfabéticamente un arreglo.
  // Cuando recibe el campo atributo, lo ordena por dicho criterio.

  sort(arr:any,attribute?:any,desc?:any) {
    if (desc === 'desc') {
      if (attribute) {
        return arr.sort((a:any,b:any) => (a[attribute] < b[attribute]) ? 1 : ((b[attribute] < a[attribute]) ? -1 : 0));
      } else {
        return arr.sort((a:any,b:any) => (a < b) ? 1 : ((b < a) ? -1 : 0));
      }
    }
    if (attribute) {
      return arr.sort((a:any,b:any) => (a[attribute] > b[attribute]) ? 1 : ((b[attribute] > a[attribute]) ? -1 : 0));
    } else {
      return arr.sort((a:any,b:any) => (a > b) ? 1 : ((b > a) ? -1 : 0));
    }
  }

  // Función que genera a partir del año actual un array de 20 años hacia atras.

  generateYears() {

    let d = new Date();
    let n = d.getFullYear();
    let years: number[] = []
    for (var i = 0; i < 20; i++) {

      years.push(n);
      n --;

    };
    
    return years;

  };

}