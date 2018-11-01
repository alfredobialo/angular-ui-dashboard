// Reuire node GUID
 namespace Asom.Core.Defaults
{

  export class RepositoryNotSetException extends TypeError
  {
    public persistableObjectInfo : any  ;
    constructor(message : string, objInfo? :any)
    {
      super(message);
      this.persistableObjectInfo = objInfo;
    }

  }
  export abstract class DefaultPersistable<T> implements IPersistable<T>
  {
        public readonly  dataSource : IRepository<T>  = null;
        constructor()
        {

          this.doSomething();
        }
        doSomething()
        {
          console.log("doSomething Called");
        }



    getDataSource(): Asom.Core.IRepository<T> {
      throw new RepositoryNotSetException("Override this function and set the repository object!", this);
    }

    id: any = "00000-0000-00000";

    validate(): Asom.Core.IValidationError[] {
      return [];
    }
    //createObject(obj)
  }
}
