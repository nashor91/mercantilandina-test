import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GeorefService } from '../services/georef.service';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.scss']
})
export class PersonalInfoComponent implements OnInit {

  personalDataForm!: FormGroup;

  constructor(
    private georefService: GeorefService,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.georefService.getProvincias();
    this.newForm();
  }

  newForm(){
    this.personalDataForm = this.fb.group({
      inputDni:['', Validators.required],
      inputApellido:['', Validators.required],
      inputNombre:['', Validators.required],
      inputEmail:[''],
      inputSmartPhone:[''],
      inputTelphone:[''],
      province:['', Validators.required],
      city:[{value:'', disabled: true}, Validators.required],
      home_address:[{value:'', disabled: true}, Validators.required],
      inputBirthDate:[''],
      inputUserName:['', Validators.required],
      inputPassword:['', Validators.required],
    });
  }

  ejecutar() {
    
    this.georefService.getMunicipios(1);
  }

}
