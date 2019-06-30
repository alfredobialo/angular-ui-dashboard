import {Route} from "@angular/router" ;
import {LoginComponent} from "./components/LoginComponent";
import {RegistrationComponent} from "./components/RegisterComponent";
import {EditProfileComponent} from "./components/EditProfileComponent";
import {PasswordChangeComponent} from "./components/PasswordChangeComponent";

export const authRoutes: Route[] = [
  {
    path: "login",
    component: LoginComponent,
    data: {
      meta : {

      }
    }
  },
  {
    path: "register",
    component: RegistrationComponent
  },
  {
    path: "edit-profile",
    component: EditProfileComponent
  }, {
    path: "change-password",
    component: PasswordChangeComponent
  },
];
