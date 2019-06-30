import {Observable} from "rxjs";

export interface IObjectType {
  message?: string;
  success: boolean;
  data?: any;
}

export function  createObservableOfSomething(): Observable<IObjectType> {
    const obs$  = new Observable<IObjectType>(
      subscriber => {
        subscriber.next(getResultFromServer()[0]);
        subscriber.complete();
      }
    );
    return obs$;
}

export function getResultFromServer(): IObjectType[] {
  return [
    {
      data : {
        name : "Alfred Obialo",
        age : 20
      },
      success : true,
      message : "All Data loaded Successfully"
    }
    , {
      data : {
        name : "Olivia Obialo",
        age : 20
      },
      success : true,
      message : "All Data loaded Successfully"
    }, {
      data : {
        name : "Maryann Obialo",
        age : 20
      },
      success : true,
      message : "All Data loaded Successfully"
    }, {
      data : {
        name : "Michelle Obialo",
        age : 20
      },
      success : true,
      message : "All Data loaded Successfully"
    }
  ];
}
