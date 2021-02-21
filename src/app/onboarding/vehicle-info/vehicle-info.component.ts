import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

import { DataService } from '../services/data.service';
import { MercantilApiService } from '../services/mercantil-api.service';
import { UtilsFunctionsService } from '../../utils/utils-function.service';

import { Marcas } from '../interfaces/marcas.interface';
import { Versiones } from '../interfaces/versiones.interface';

@Component({
  selector: 'app-vehicle-info',
  templateUrl: './vehicle-info.component.html',
  styleUrls: ['./vehicle-info.component.scss']
})
export class VehicleInfoComponent implements OnInit {

  public vehicleDataForm!: FormGroup;
  public marcas: Marcas[] = [];
  public anios: number[] = [];
  public modelos: String[] =[];
  public versiones: Versiones[] =[];
  public marca!: number;
  public anio!: number;
  public modelo!: string;
  public version!: any;
  public selectedMarca: any;
  public selectedVersion: any;


  constructor( 
    private fb: FormBuilder,
    private dataService: DataService,
    private mercantilApiService: MercantilApiService ,
    public utilsFunctionsService: UtilsFunctionsService
    ) { }

  // Getter que retorna el paso actual.
  
  get stepNumber() {

    return this.dataService.stepNumber;

  };

  ngOnInit(): void {

    this.newForm();
    this.getMarcas();

  };

  // Función que inicializa el formulario.
  newForm(){

    this.vehicleDataForm = this.fb.group({
      inputMarca:[{value:'', }, Validators.required],
      inputModelo:[{value:'', disabled: true}, Validators.required],
      inputVersion:[{value:'', disabled: true}, Validators.required],
      inputAnio:[{value:'', disabled: true}, Validators.required]
    });

  };

  // Función que retorna las marcas de vehículos.

  getMarcas() {

    this.marcas = this.mercantilApiService.getVehiculos()
    .subscribe( ( resp: any ) => {
      this.marcas = this.utilsFunctionsService.sort(resp,'desc');
    });

  };

  // Función que habilita el dropdown de años e inicializa las variables siguientes.

  enableAnio() {

    this.modelos = [];
    this.anios = [];
    this.versiones = [];
    this.anio = 0;
    this.modelo = '';

    this.anios = this.utilsFunctionsService.generateYears();
    this.vehicleDataForm.controls['inputAnio'].enable();

  };

  // Función que retorna los modelos de vehículos para una determinada marca.

  getModelos() {

    this.marca = this.vehicleDataForm.value.inputMarca;
    this.anio = this.vehicleDataForm.value.inputAnio;
    this.modelos = this.mercantilApiService.getVehiculos(this.marca, this.anio)
    .subscribe( ( resp: any ) => {
      this.modelos = this.utilsFunctionsService.sort(resp,'desc');
      this.vehicleDataForm.controls['inputModelo'].enable();
    });

  };

  // Función que retorna las versiones de los modelos de los vehículos.

  getVersiones() {

    this.modelo = this.vehicleDataForm.value.inputModelo;
    this.versiones = this.mercantilApiService.getVehiculos(this.marca, this.anio, this.modelo)
    .subscribe( ( resp: any ) => {
      this.versiones = this.utilsFunctionsService.sort(resp,'desc');
      this.vehicleDataForm.controls[ 'inputVersion'].enable();
    });

  };

  // Función que navega al siguiente paso, actualizando el valor del paso y almacenando datos ingresados por el usuario.

  navigateForm(val: number){

    this.dataService.stepNumber = val;
    
    this.marca = this.vehicleDataForm.value.inputMarca;
    this.selectedMarca = this.marcas.find(marca => marca.codigo == this.marca);
    this.vehicleDataForm.value.nombreMarca = this.selectedMarca.desc;

    this.version = this.vehicleDataForm.value.inputVersion;
    this.selectedVersion = this.versiones.find(version => version.codigo == this.version);
    this.vehicleDataForm.value.nombreVersion = this.selectedVersion.desc;

    this.dataService.vehicleFormData = this.vehicleDataForm.value;

  };

}
