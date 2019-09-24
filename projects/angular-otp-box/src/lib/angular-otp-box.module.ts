import { NgModule } from '@angular/core';
import { OtpInputComponent } from './components/angular-otp-input.component';
import { KeysPipe } from './pipes/keys.pipe';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NumberOnly } from './directives/numberOnly.directive';



@NgModule({
  declarations: [
    OtpInputComponent,
    KeysPipe,
    NumberOnly
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    OtpInputComponent
  ],
  providers:[KeysPipe]
})
export class AngularOtpLibModule { }
