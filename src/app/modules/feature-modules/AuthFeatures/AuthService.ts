import {Injectable} from "@angular/core";
import {ILoginModel, IUserProfile, UserProfileInfo} from "./AuthModel";
import {Observable} from "rxjs";

@Injectable()
export class AuthService {

  constructor() {
  }
  loginUser(user: ILoginModel): Observable<IUserProfile> {
      const res: IUserProfile  =  new UserProfileInfo();
      res.firstName  = "Alfred";
      res.lastName = "Obialo";
      res.gender = "MALE";
      res.id  = user.userId;
      res.profileUrl = "http://www.asomproject/images/users/profile-pics/alfredobialo_6327832992.png";
      const ob$ = new  Observable<IUserProfile>( observer => {
        setTimeout( () => {
          observer.next(res);
          observer.complete();
        }, 3000);
      });
      return ob$;

  }

}
