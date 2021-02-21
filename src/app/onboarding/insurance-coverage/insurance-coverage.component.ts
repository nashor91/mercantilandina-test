import { Component, OnInit } from '@angular/core';

import { DataService } from '../services/data.service';
import { UtilsFunctionsService } from '../../utils/utils-function.service';
import { MercantilMockApiService } from '../services/mercantil-mock-api.service';

import { Coberturas } from '../interfaces/coberturas.interface';


@Component({
  selector: 'app-insurance-coverage',
  templateUrl: './insurance-coverage.component.html',
  styleUrls: ['./insurance-coverage.component.scss']
})
export class InsuranceCoverageComponent implements OnInit {

  public coberturas: Coberturas[] = [];
  public cobertura: any;
  public coberturas_selected: boolean = false;

  constructor(
    private dataService: DataService,
    private mercantilMockApiService: MercantilMockApiService,
    private utilsFunctionsService: UtilsFunctionsService
  ) { }

  // Getter que retorna el valor actual del paso.

  get stepNumber() {

    return this.dataService.stepNumber;

  };

  ngOnInit(): void {

    this.getCoberturas();

  };

  // Función que retorna los planes de coberturas actuales.

  getCoberturas() {

    this.coberturas = this.mercantilMockApiService.getCoberturas()
    .subscribe( ( resp: any ) => {
      this.coberturas = this.utilsFunctionsService.sort(resp,'puntaje','desc');
      this.coberturas.forEach(insu => {
        insu.selected = false;
      });
    });

  };

  // Función que selecciona una cobertura.

  selectCobertura(cobertura: any) {

    let insurance = this.coberturas.find(element => element.selected === true);
    if (insurance) insurance.selected = false;
    cobertura.selected = true;
    this.cobertura = cobertura;

  };

  // Función que remeve la selección de la cobertura.

  deselectCobertura(cobertura: any) {

    cobertura.selected = false;
    this.cobertura = ""; 
  };

  // Función que actualiza el valor del paso y almacena la información cargada por el usuario

  navigateForm(val: number){

    this.dataService.stepNumber = val;
    this.dataService.insuranceFormData = this.cobertura;

  };

}