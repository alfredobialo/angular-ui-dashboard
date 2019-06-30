import {UserManager, User, UserManagerSettings} from "oidc-client";
import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../../environments/environment";
 @Injectable({
   providedIn : "root"
 })
 export class OpenIdConnectOAuth2Service {
   private  _userManager: UserManager;
    constructor(private http: HttpClient) {
     const _config: UserManagerSettings = {
        authority : environment.identityProvider.authority,
       client_id : environment.identityProvider.clientId,
       clockSkew : 4,
       scope : "openid profile app-api",
       post_logout_redirect_uri : "",
       client_secret : "secret",
       response_type : "id_token token",


     };
     this._userManager = new UserManager(_config);
     // userManager.
   }

   getCurrentUserToken() {
     return "verylongbase54encondedstring";
   }
 }

