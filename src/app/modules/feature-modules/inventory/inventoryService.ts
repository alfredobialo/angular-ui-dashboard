import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BaseHttpService} from "../../BaseHttpService";

@Injectable()
export class InventoryService extends BaseHttpService {

  private inventoryUrl = "/inventory";
  private apiRootCache: any;

  constructor(http: HttpClient) {
    super(http)
  }

  async getItems() {
    if (this.apiRootCache == null) {
      this.apiRootCache = await this.getRootResource();
    }
    const inventoryUrl = this.apiRootCache.inventory;
    return await this.executeResource(inventoryUrl, "get")
      .toPromise();

  }

  // This ta

  executeItemResource(url: any, options: any) {
    return this.executeResource(url, options)
  }
}


