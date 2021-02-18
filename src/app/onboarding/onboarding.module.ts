import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonalInfoComponent } from './personal-info/personal-info.component';
import { VehicleInfoComponent } from './vehicle-info/vehicle-info.component';
import { InsuranceCoverageComponent } from './insurance-coverage/insurance-coverage.component';
import { ReviewInfoComponent } from './review-info/review-info.component';



@NgModule({
  declarations: [PersonalInfoComponent, VehicleInfoComponent, InsuranceCoverageComponent, ReviewInfoComponent],
  imports: [
    CommonModule
  ],
  exports: [
    PersonalInfoComponent,
    VehicleInfoComponent,
    ReviewInfoComponent,
    InsuranceCoverageComponent
  ]
})
export class OnboardingModule { }
