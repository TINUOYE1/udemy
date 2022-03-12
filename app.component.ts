import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  defaultSub="Advance"

  @ViewChild ('f') subForm: NgForm

  subFormTemplate = 
  {email: "",
  subscription: "",
  password: ""}
  submitted= false
  onSubmit(){
    console.log(this.subForm)
    this.subFormTemplate.email = this.subForm.form.value.email;
    this.subFormTemplate.subscription = this.subForm.form.value.subscription;
    this.subFormTemplate.password = this.subForm.form.value.password;
    this.submitted = true;
  }
}
