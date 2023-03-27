import { Component, ViewChild } from '@angular/core';
import { FormElementComponent } from '../form-element/form-element.component';
import { LoginService } from './services/login.service';

@Component({
  selector: 'ableneo-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  @ViewChild('user', { static: false }) user!: FormElementComponent;
  @ViewChild('pw', { static: false }) pw!: FormElementComponent;

  constructor(readonly loginService: LoginService) {}

  onSubmitButtonClick(): void {
    this.loginService.login(this.user.text, this.pw.text).subscribe(console.log);
  }
}
