import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Provincia } from '../interfaces/provincias.interface';
import { GeorefService } from '../services/georef.service';
import { MercantilMockApiService } from '../services/mercantil-mock-api.service';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.scss']
})
export class PersonalInfoComponent implements OnInit {

  public personalDataForm!: FormGroup;
  public provincias: Provincia[] = [];

  constructor(
    private georefService: GeorefService,
    private mercantilMockApiService: MercantilMockApiService,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.newForm();
    this.getProvincias();
  }

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
  }

  getProvincias() {
    this.provincias = this.georefService.getProvincias()
    .subscribe( ( resp: any ) => {
      this.provincias = resp.provincias;
    })
  };

  getMunicipios(id:number){
    const res = this.georefService.getMunicipios(id);
  }

}
