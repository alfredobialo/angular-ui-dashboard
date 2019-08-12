import {Injectable} from '@angular/core';
import {environment} from "../../environments/environment";
import {IUserProfile} from "./feature-modules/AuthFeatures/AuthModel";
import {HttpClient} from "@angular/common/http";
import {never, Observable, of} from "rxjs";
import {delay} from "rxjs/operators";

@Injectable(
  {providedIn :"root"}
)
export abstract class BaseHttpService {

  private _baseUrl :string  = environment.apiEndpoint;
  private rootResource  :any;
  constructor(protected http : HttpClient) {}

  public get apiEndPoint() :string
  {
    return this._baseUrl;
  }

  public async getApiRoot()  :Promise<any>
  {
    return await this.http.get(this._baseUrl).toPromise();

  }
  async getRootResource() {

    await this.getApiRoot()
      .then(x => {
        this.rootResource = x;
      });
    //.subscribe(x => this.rootResource = x)

    return this.rootResource;
  }
  public get currentUser() : IUserProfile
  {
    return {
      firstName : "Somkene",
      gender : "Female",
      getFullName: () => "Somkene Obialo",
      id: "somypet",
      lastName:"Obialo",
      profileUrl : "/user-profile-pics/somypet.png"
    }
  }
  executeResource(resourceUrl  :string,
                      httpMethod :  "post" | "get" | "put" | "delete" | "patch" | "head", options? : any) : Observable<any> /*| Promise<any>*/
  {
    // we expect the resource url to point to a valid endpoint for retrieving this resource
    switch (httpMethod) {
      case "get":
        return this.http.get(resourceUrl,options);
      default :
       return null;
    }

  }

}
