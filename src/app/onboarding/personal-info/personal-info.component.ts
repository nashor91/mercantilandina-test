import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { GeorefService } from '../services/georef.service';
import { MercantilMockApiService } from '../services/mercantil-mock-api.service';
import { DataService } from '../services/data.service';
import { UtilsFunctionsService } from '../../utils/utils-function.service';

import { Provincia } from '../interfaces/provincias.interface';
import { Municipio } from '../interfaces/municipios.interface';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.scss']
})
export class PersonalInfoComponent implements OnInit {

  public personalDataForm!: FormGroup;
  public provincias: Provincia[] = [];
  public municipios: Municipio[] = [];
  public selectedProvincia: any;
  public selectedMunicipio: any;
  public enableDirFlag: boolean = false;
  public exiteUsuarioFlag: boolean = false;

  constructor(
    private georefService: GeorefService,
    private mercantilMockApiService: MercantilMockApiService,
    private dataService: DataService,
    private fb: FormBuilder,
    public utilsFunctionsService: UtilsFunctionsService
  ) { }

  // Getter que retorna el paso actual.

  get stepNumber() {

    return this.dataService.stepNumber;

  };

  ngOnInit(): void {

    this.newForm();
    this.getProvincias();
    
  };

  newForm(){

    this.personalDataForm = this.fb.group({
      inputDNI:['', Validators.required],
      inputApellido:['', Validators.required],
      inputNombre:['', Validators.required],
      inputEmail:[''],
      inputSmartPhone:[''],
      inputTelphone:[''],
      inputProvincia:['', Validators.required],
      inputMunicipio:[{value:'', disabled: true}, Validators.required],
      inputDireccion:[{value:'', disabled: true}, Validators.required],
      inputBirthDate:[''],
      inputUserName:['', Validators.required],
      inputPassword:['', Validators.required],
    });

  };

  // Función que retorna las provincias.

  getProvincias() {

    this.provincias = this.georefService.getProvincias()
    .subscribe( ( resp: any ) => {
      this.provincias = this.utilsFunctionsService.sort(resp.provincias,'nombre');
    });

  };

  // Función que retorna los municipios para una provincia.

  getMunicipios(id:number){

    this.selectedProvincia = this.provincias.find(element => element.id === id.toString());
    this.personalDataForm.controls['inputMunicipio'].enable();
    this.municipios = this.georefService.getMunicipios(id)
    .subscribe( ( resp: any ) => {
      this.municipios = this.utilsFunctionsService.sort(resp.municipios,'nombre');
    });

  };

  // Función que activa el input de Direccion.

  enableDireccion() {

    this.enableDirFlag = true;
    this.personalDataForm.controls['inputDireccion'].enable();
    this.selectedMunicipio = this.municipios.find(element => element.id === this.personalDataForm.value.inputMunicipio);

  };

  // Función que checkea si el usuario ingresado existe o no.

  checkUsuario() {

    if (this.personalDataForm.controls.inputUserName.valid) {
      this.mercantilMockApiService.checkUsuario(this.personalDataForm.value.inputUserName)
      .subscribe(( resp: any ) => {
        this.exiteUsuarioFlag = resp;
      });
    };

  }

    // Función que actualiza el valor del step en el servicio, realiza asignaciones y actualiza el array de datos ingresados.

  navigateForm(val: number){

    this.dataService.stepNumber = val;
    this.personalDataForm.value.provinciaNombre = this.selectedProvincia.nombre;
    this.personalDataForm.value.municipioNombre = this.selectedMunicipio.nombre;
    this.dataService.personalFormData = this.personalDataForm.value;

  };

}
