import {Injectable} from '@angular/core';
import {BaseHttpService} from "../../../BaseHttpService";
import {HttpClient} from "@angular/common/http";
import {single} from "rxjs/operators";

@Injectable()
export class CustomerService extends BaseHttpService {
  private apiRootCache: any;

  constructor(http: HttpClient) {
    super(http)
  }

  async getCustomerList() {
    if (this.apiRootCache == null) {
      this.apiRootCache = await this.getRootResource();
    }
    const crmUrl =  this.apiRootCache.crm;
    return await this.executeResource(crmUrl, "get")
      .toPromise();



  }


}
