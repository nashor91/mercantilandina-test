import { Component, OnInit } from '@angular/core';

import { DataService } from '../services/data.service';

@Component({
  selector: 'app-finish-step',
  templateUrl: './finish-step.component.html',
  styleUrls: ['./finish-step.component.scss']
})
export class FinishStepComponent implements OnInit {

  constructor(
    private dataService: DataService
    ) { }

  //Getter que retorna el paso actual.

  get stepNumber() {

    return this.dataService.stepNumber;

  };

  ngOnInit(): void {
  };

}
