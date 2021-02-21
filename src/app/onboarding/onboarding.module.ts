import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { VehicleInfoComponent } from './vehicle-info/vehicle-info.component';
import { InsuranceCoverageComponent } from './insurance-coverage/insurance-coverage.component';
import { ReviewInfoComponent } from './review-info/review-info.component';
import { FinishStepComponent } from './finish-step/finish-step.component';



@NgModule({
  declarations: [PersonalInfoComponent, VehicleInfoComponent, InsuranceCoverageComponent, ReviewInfoComponent, FinishStepComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    PersonalInfoComponent,
    VehicleInfoComponent,
    ReviewInfoComponent,
    InsuranceCoverageComponent,
    FinishStepComponent
  ]
})
export class OnboardingModule { }
