import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-vehicle-info',
  templateUrl: './vehicle-info.component.html',
  styleUrls: ['./vehicle-info.component.scss']
})
export class VehicleInfoComponent implements OnInit {

  public vehicleDataForm!: FormGroup;

  constructor( 
    private fb: FormBuilder
    ) { }

  ngOnInit(): void {
    this.newForm();
  }

  newForm(){
    this.vehicleDataForm = this.fb.group({

      inputMarca:[{value:'', }, Validators.required],
      inputModelo:[{value:'', disabled: true}, Validators.required],
      inputVersion:[{value:'', disabled: true}, Validators.required],
      inputAnio:[{value:'', disabled: true}, Validators.required]

    });
  }

}
