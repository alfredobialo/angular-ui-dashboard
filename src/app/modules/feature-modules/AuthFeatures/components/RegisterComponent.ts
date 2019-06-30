import {Component, OnInit} from "@angular/core";
import {AbstractControl, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: "ssb-registration",
  template: `<div>
    <h1>Registration</h1>
    <div class="p-3">
      <p-inputSwitch [inputId]="'001'"></p-inputSwitch>
      <br>
      <p-dropdown [itemSize]="10"></p-dropdown>
    </div>
  </div>`
})

export class RegistrationComponent implements OnInit {
  firstName: FormControl = new FormControl(null, [Validators.required, Validators.maxLength(25)]);
  lasstName: FormControl = new FormControl(null, [Validators.required, Validators.maxLength(25)]);
  email: FormControl = new FormControl(null, [Validators.required, Validators.email]);
  phoneNo: FormControl = new FormControl(null, [Validators.required, Validators.pattern("[0-9]{11}")]);
  userId: FormControl = new FormControl(null, [Validators.required, Validators.minLength(6), Validators.maxLength(25)]);
  password: FormControl = new FormControl(null, [Validators.required, Validators.minLength(6), Validators.maxLength(25)]);
  password2: FormControl = new FormControl(null, [Validators.required, Validators.minLength(6), Validators.maxLength(25)]);
  regForm: FormGroup;
  constructor() {
  }

  ngOnInit() {
    this.createFormControlInstance();
  }

  private createFormControlInstance() {
    this.regForm  =  new FormGroup({});
  }
}
function passwordCompareValidator(compareToControl : AbstractControl) {
  return false;
}
