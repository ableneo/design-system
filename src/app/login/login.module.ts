import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ButtonModule } from '../button/button.module';
import { CardModule } from '../card/card.module';
import { FormElementModule } from '../form-element/form-element.module';
import { FormLayoutModule } from '../form-layout/form-layout.module';
import { LoginComponent } from './login.component';

@NgModule({
  declarations: [LoginComponent],
  imports: [CommonModule, CardModule, FormLayoutModule, FormElementModule, ButtonModule],
  exports: [LoginComponent]
})
export class LoginModule {}
