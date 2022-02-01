import {Injectable} from "@angular/core";
import {HttpEvent, HttpEventType, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from "@angular/common/http";
import {Observable} from "rxjs";
import {tap} from "rxjs/operators";

@Injectable()
export  class DefaultHttpInterceptor implements HttpInterceptor
{
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    console.log(req);
    let cloneReq  =  req.clone({
      setHeaders : { "content-type" :"application/json" ,
        "x-appId" : "ssb-angular",
        "Authorization" : "Bearer xyz+23st/erww-token",
        "x-Modified-angular": "HttpInterceptor Object"}
    });

    return next.handle(cloneReq)
      .pipe(
        tap(  event => {
          if( event.type === HttpEventType.Response)
          {
            console.dir(event.body);
             let response  = event;

             console.log("Response FROM Interceptor : " , response);
          }
          //console.log(event);
        })

      );
  }

}
