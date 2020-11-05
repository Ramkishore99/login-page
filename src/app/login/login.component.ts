import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from '@angular/platform-browser';
import { FormGroup,Validators,FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
    private fb: FormBuilder
  ) {
    this.matIconRegistry.addSvgIcon(
      'g-icon',
      this.domSanitizer.bypassSecurityTrustResourceUrl("assets/icons/google.svg")
    );
    this.matIconRegistry.addSvgIcon(
      'ms-icon',
      this.domSanitizer.bypassSecurityTrustResourceUrl("assets/icons/microsoft.svg")
    );
    this.matIconRegistry.addSvgIcon(
      'user-icon',
      this.domSanitizer.bypassSecurityTrustResourceUrl("assets/icons/user.svg")
    );

  }

  ngOnInit() {
    this.loginForm = this.fb.group({
      username: ['', Validators.required], 
      password: ['', Validators.required],
    });
  }

  get loginFormControl() {
    return this.loginForm.controls;
  }

  onSubmit(){
    console.log(this.loginForm.value);
  }
}
