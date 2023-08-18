import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IUser } from '../user.model';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {

  userForm: FormGroup = new FormGroup(
    {
      id: new FormControl(),
      name: new FormControl('', [Validators.required]),
      username: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
      address: new FormGroup({
        street: new FormControl(),
        suite: new FormControl(),
        city: new FormControl(),
        zipcode: new FormControl(),
        geo: new FormGroup({
          lat: new FormControl(),
          lng: new FormControl()
        })
      }),
      phone: new FormControl(),
      website: new FormControl(),
      company: new FormGroup({
        name: new FormControl(),
        catchPhrase: new FormControl(),
        bs: new FormControl()
      })
    }
  );

  constructor() {

  }

  submitForm() {
    if (!this.userForm.invalid) {
      const user: IUser = this.userForm.value;
      console.log(this.userForm.value);
    }
  }

  resetForm() {
    this.userForm.reset();
  }

  updateForm() {
    this.userForm.patchValue({
      id: 123,
      name: 'Luke Skywalker',
      username: 'luke.skywalker',

    })
  }
}
