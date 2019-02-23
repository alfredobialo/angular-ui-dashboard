import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../../../environments/environment';

@Injectable()
export class AspnetApiService {
  private readonly baseUrl : string = environment.apiEndpoint;
  constructor(private  http: HttpClient) {
  }
  getProducts()  : Observable<any>
  {
    const products  = `${this.baseUrl}/products`;
    return this.http.get(products)

  }
}
