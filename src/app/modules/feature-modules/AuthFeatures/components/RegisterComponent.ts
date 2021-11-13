import {Component, OnInit} from "@angular/core";
import {AbstractControl, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: "ssb-registration",
  template: `
      <div class="d-flex flex-column justify-content-center align-items-center flex-nowrap">
          <h3 class="text-primary">Registration</h3>
          <div class="">
              <form [formGroup]="regForm" class="">
                  <div class="row">
                      <div class="col-12 col-sm-3"><label for="input01" class="control-label">First Name</label></div>
                      <div class="col-sm-9"><input type="text" id="input01" class="form-control"></div>
                  </div>
                  <div class="row">
                      <div class="col-12 col-sm-3"><label for="input02" class="control-label">Last Name</label></div>
                      <div class="col-sm-9"><input type="text" id="input02" class="form-control"></div>
                  </div>
                  <div class="row">
                      <div class="col-12 col-sm-3"><label for="input03" class="control-label">Phone Number</label></div>
                      <div class="col-sm-9"><input type="text" id="input03" class="form-control"></div>
                  </div>
                  <div class="row">
                      <div class="col-12 col-sm-3"><label for="input04" class="control-label">Email Address</label>
                      </div>
                      <div class="col-sm-9"><input type="text" id="input04" class="form-control"></div>
                  </div>
                  <div class="row">
                      <div class="col-12 col-sm-3"><label for="input05" class="control-label">User Id</label></div>
                      <div class="col-sm-9"><input type="text" id="input05" class="form-control"></div>
                  </div>
                  <div class="row">
                      <div class="col-12 col-sm-3"><label for="input06" class="control-label">Password</label></div>
                      <div class="col-sm-9"><input type="text" id="input06" class="form-control"></div>
                  </div>
                  <div class="row">
                      <div class="col-12 col-sm-3"><label for="input07" class="control-label">Confirm Password</label>
                      </div>
                      <div class="col-sm-9"><input type="text" id="input07" class="form-control"></div>
                  </div>
              </form>
          </div>
      </div>`
})

export class RegistrationComponent implements OnInit {
  firstName: FormControl = new FormControl(null, [Validators.required, Validators.maxLength(25)]);
  lastName: FormControl = new FormControl(null, [Validators.required, Validators.maxLength(25)]);
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
    this.regForm = new FormGroup({});
  }
}

function passwordCompareValidator(compareToControl: AbstractControl) {
  return false;
}
