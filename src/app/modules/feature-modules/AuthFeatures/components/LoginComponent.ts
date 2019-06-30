import {Component, Output, OnInit, EventEmitter, Input} from "@angular/core";
import {ILoginModel, IUserProfile} from "../AuthModel";
import {FormGroup, FormControl, Validators} from "@angular/forms";
import {AuthService} from "../AuthService";
// import {debounceTime, filter} from "rxjs/operators";

@Component({
  selector: "ssb-login",
  templateUrl: "./login.component.html",
  styles: [`
    label {
      font-size: 0.91rem;
      color: #4c89bd
    }

    div.login-container {
      width: 320px;
      border: 2px solid rgba(197, 216, 217, 0.56);
      border-radius: 10px;
      position: relative;

    }

    div.avartar {
      width: 100px;
      height: 100px;
      -webkit-border-radius: 100%;
      -moz-border-radius: 100%;
      border-radius: 100%;
      background-color: #4391d9;
      padding: 0;
      margin: 2px;
      position: absolute;
      top: -50px;
      border: 3px solid white;

    }
  `]
})

export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  @Input() idSuffix = "";
  @Output() onLoginSuccess: EventEmitter<IUserProfile> = new EventEmitter<IUserProfile>();
  userId: FormControl = new FormControl({value: null, disabled: false},
    [Validators.required, Validators.minLength(6), Validators.maxLength(20)]);
  password: FormControl = new FormControl(null, {
    validators : [Validators.required, Validators.minLength(6)]});
  processing  = false;

  constructor(private authService: AuthService) {

  }
  ngOnInit() {
    this.loginForm = new FormGroup({
      userId: this.userId,
      password: this.password
    });

    this.userId.valueChanges
      /*.pipe(debounceTime(600),

        //filter(x => x.toLowerCase() === "a")
        )*/
      .subscribe( x => {
        console.log(x);
       /// console.log("value Changes called!")
      });
      console.log(this.loginForm);
  }

  async signIn() {
    // check if the form is in a valid state

    if (this.loginForm.valid) {
      this.processing = true;
      // attempt signing in
      await this.authService.loginUser(this.loginForm.value).subscribe(x => {
        this.onLoginSuccess.emit(x);
      }, x => {} , ()  => {
        this.processing = false;
      } );

    }
  }
}
