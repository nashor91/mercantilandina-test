import { Component, OnInit } from '@angular/core';

import { DataService } from '../services/data.service';

@Component({
  selector: 'app-review-info',
  templateUrl: './review-info.component.html',
  styleUrls: ['./review-info.component.scss']
})
export class ReviewInfoComponent implements OnInit {

  constructor(
    private dataService: DataService
  ) { }

  // Getter que retorna el paso actual.

  get stepNumber() {

    return this.dataService.stepNumber;

  };

  // Getter que retorna los datos almacenados de los formularios.

  get allFormData() {

    return this.dataService.allFormData;

  };

  ngOnInit(): void {
  }

  // Función que asigna el valor del paso siguiente.

  navigateForm(val: number){

    this.dataService.stepNumber = val;

  };

}
