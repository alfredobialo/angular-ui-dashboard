import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BaseHttpService} from "../../BaseHttpService";
import {never, Observable, of} from "rxjs";
import { delay} from "rxjs/operators";
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
@Injectable()
export class InventoryService extends BaseHttpService {

  private inventoryUrl  = "/inventory";
  constructor(private http : HttpClient) {
    super()
  }
  getItems() : Observable<any>
  {

    return of(  [
    {
      id : "001",
      name: "Sample Product",
      description: "product details took 5 seconds to load!!",
      costPrice : 35,
      retailPrice : 42,
      currency : {
        code : "USD",
        name :"US dollar",
        country :"United States of America"
      },
      links :[
        {
          url : "http://skoologic.asomproject.com/api/feedschannel/user-feeds?userId=iykeobialo&deptId=nacoss&levelId=612e7268-f799-4b62-85b2-1a2a3bc606b5&sessionId=733dcb1e-5414-4378-b6e9-9045bc00b43d&currentPage=1&pageSize=15",
          rel : "self"
        },
        {
          url :"http://api.evet.com/inventory/items",
          rel :"list"
        }
      ]
    },
    {
      id : "002",
      name: "Best Product 2",
      description: "product details took 5 seconds to load!!",
      costPrice : 5835,
      retailPrice : 6445,
      currency : {
        code : "NGN",
        name :"Naira",
        country :"Nigeria"
      },
      links :[
        {
          url : "http://api.evet.com/inventory/items/002",
          rel : "self"
        },
        {
          url :"http://api.evet.com/inventory/items",
          rel :"list"
        }
      ]
    }
  ]).pipe(delay(2200));
  }
  // This ta
  executeItemResource(resourceUrl  :string,
                      httpMethod :  "post" | "get" | "put" | "delete" | "patch" | "head", options? : any) : Observable<any> /*| Promise<any>*/
  {
     // we expect the resource url to point to a valid endpoint for retrieving this resource
    switch (httpMethod) {
      case "get":
        return this.http.get(resourceUrl,options);
      default :
        return of({id  : "xxxx", description : "not found", name : "Item not found"}).pipe(delay(500))
    }

  }
}


export class InventoryDashboardResolver implements Resolve<Observable<any>>
{
  constructor(private inventoryService : InventoryService){}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Observable<any>> | Promise<Observable<any>> | Observable<any> {
    console.log("Resolved Data params : ", route, state);
    return this.inventoryService.getItems();
  }

}
