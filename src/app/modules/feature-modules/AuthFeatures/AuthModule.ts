import {NgModule} from "@angular/core";
import {LoginComponent} from "./components/LoginComponent";
import {AuthService} from "./AuthService";
import {SsbSharedModule} from "../../shared_modules/SharedModules";
import {RegistrationComponent} from "./components/RegisterComponent";
import {CurrentUserComponent} from "./components/CurrentUserComponent";
import {EditProfileComponent} from "./components/EditProfileComponent";
import {PasswordChangeComponent} from "./components/PasswordChangeComponent";
import {authRoutes} from "./AuthRoutes";
import {RouterModule} from "@angular/router";


@NgModule({
  imports: [SsbSharedModule, RouterModule.forChild(authRoutes)],
  // exports: [LoginComponent, RegistrationComponent, CurrentUserComponent, EditProfileComponent, PasswordChangeComponent],
  declarations: [LoginComponent, RegistrationComponent, CurrentUserComponent, EditProfileComponent, PasswordChangeComponent],
  providers: [AuthService],
})
export class AuthModule {
}
