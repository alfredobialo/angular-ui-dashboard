import {Injectable} from '@angular/core';

@Injectable()
export class AlertService {

  constructor() {
  }
  alert(message : string,callback : () =>boolean) :Promise<any>
  {

      if(callback())
        return Promise.resolve(true);
      else
      {
        alert(message);
        return Promise.reject(message);
      }

  }

}
