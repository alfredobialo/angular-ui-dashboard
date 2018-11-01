  namespace Asom.Core {
  export interface IValidable {
    validate(): IValidationError[]
  }

  export interface IPersistable<T> extends IValidable {
    id: any;
    getDataSource(): IRepository<T>;


  }

  export interface IRepository<T> {
    createObject(obj: T): CrudResponse<T>;

    createObjects(obj: T[]): CrudResponse<T[]>;

    findObject(id: any): CrudResponse<T>;

    findObject(criteria: Criteria): CrudResponse<T[]>;

    objectExist(obj: T): boolean;

    deleteObject(obj: T): CrudResponse<T>;

    updateObject(obj: T): CrudResponse<T>;

    updateObject(obj: T, criteria: Criteria): CrudResponse<T>;


  }

  export interface IValidationError {
    fieldName: string;
    info: string;
    hint?: string;

  }


  export class CrudResponse<T> {
    success: boolean = false;
    message: string = "";
    code: number;
    hasException: boolean = false;
    serverException: any;
    validationErrors: IValidationError[];
    data: T;
    extraData: any;
    criteria: Criteria;
  }


  export class Criteria {
    id: string;
    tag: any;
    queryString: string;
    dateRange: DateRange;
    useDateRange: boolean = false;

  }
 export class PageableCriteria extends Criteria{
    findByObj : boolean = false;
    searchAllField : boolean = false;
    getActive : boolean = false;
    activeValue : boolean  = true;
    tag:any;
    currentPage : number = 0;
    totalPages  : number = 0;
    totalRecord : number  = 0;
    pageSize : number =  10;
    // How do we access the datasource
    paginate(data:any[], count:number = 0)
    {
      this.totalRecord =  count >0 ? count : data.length;
      const mod = this.totalRecord % this.pageSize;
      this.totalPages = ((this.totalRecord - mod) / this.pageSize) + (mod > 0 ? 1 : 0);
      /*Do the data paging here*/
      const res   = data.slice(this.currentPage, this.pageSize); // not efficient
      return data;
    }

 }
  export class ValidationErrorLog {
    private errorList: IValidationError[] = [];
    public static void

    addError(fieldName: string, info: string, hint?: string) {
      this.errorList.push( {
        fieldName , info , hint
      });
    }
    getErrors():IValidationError[]
    {
       return [...this.errorList];
    }
  }

  export class DateRange {
    startDate: Date = new Date();
    endDate: Date = new Date();
  }
}
