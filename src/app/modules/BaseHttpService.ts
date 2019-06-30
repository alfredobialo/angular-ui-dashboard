import {Injectable} from '@angular/core';
import {environment} from "../../environments/environment";
import {IUserProfile} from "./feature-modules/AuthFeatures/AuthModel";

@Injectable(
  {providedIn :"root"}
)
export abstract class BaseHttpService {

  private _baseUrl :string  = environment.apiEndpoint;
  constructor() {
  }
  public get apiEndPoint() :string
  {
    return this._baseUrl;
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
}
