import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../../environments/environment";
import {IApiResponse} from "../models/ApiRequestModule";

@Injectable()
export class AspnetApiService {
  private readonly baseUrl: string = environment.apiEndpoint;
  constructor(private  http: HttpClient) {
  }
  getCustomers(): Observable<IApiResponse<any>> {
    const products  = `${this.baseUrl}/customers`;
    return this.http.get<IApiResponse<any>>(products);

  }
}
