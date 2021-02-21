import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  
  private step: number = 1;
  public formsData: any[] = [];

  // Getter que retorna el paso actual.

  get stepNumber():number {

    return this.step;

  };

  // Setter que actualiza el paso actual.

  set stepNumber(val: number){

    this.step = val;

  };

  // Setter que actualiza en el array, los datos ingresados en el paso 1.

  set personalFormData(data: any) {

    this.formsData[0]?.personalForm ? this.formsData[0].personalForm = data : this.formsData.push({personalForm:data});

  };

  // Setter que actualiza en el array, los datos ingresados en el paso 2.

  set vehicleFormData(data: any) {

    this.formsData[1]?.vehicleForm ? this.formsData[1].vehicleForm = data : this.formsData.push({vehicleForm:data});

  };

  // Setter que actualiza en el array, los datos ingresados en el paso 3.

  set insuranceFormData(data: any) {
    
    this.formsData[2]?.insuranceForm ? this.formsData[2].insuranceForm = data : this.formsData.push({insuranceForm:data});

  };

  // Getter que retorna los datos ingresados en los anteriores pasos.

  get allFormData(): any {

    return this.formsData;

  };

  constructor() { }

}
