import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs";
import {InventoryService} from "./inventoryService";
import {Injectable} from "@angular/core";

@Injectable()
export class InventoryDashboardResolver implements Resolve<Observable<any>> {
  constructor(private inventoryService: InventoryService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Observable<any>> | Promise<Observable<any>> | Observable<any> {
    console.log("Resolved Data params : ", route, state);
    return this.inventoryService.getItems();
  }

}
