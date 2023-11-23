import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  formData = {
    name: '',
    password: ''
  };

  onSubmit(){
    alert("Name: " + this.formData.name + "Passowrd: " + this.formData.password)

    this.formData = {
      name: '',
      password: ''
    };
  }
}Event