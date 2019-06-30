import { Injectable} from "@angular/core";
import {HttpInterceptor, HttpRequest, HttpHandler, HttpEvent} from "@angular/common/http";
import {Observable} from "rxjs";
import {OpenIdConnectOAuth2Service} from "./OpenIdConnect_OAuth2";

@Injectable()
export class AuthenticationBearerTokenInterceptor implements HttpInterceptor {
  constructor(private openidConnect: OpenIdConnectOAuth2Service) {}
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (req.url.startsWith("asom")) {
      const clonedReq  = req.clone();
      clonedReq.headers.set("Authorization", `Bearer ${this.openidConnect.getCurrentUserToken()}`);
      req  = clonedReq;
      return next.handle(req);
    } else {
      return next.handle(req);
    }

  }

}
