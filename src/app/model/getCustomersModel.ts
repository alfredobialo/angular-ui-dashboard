import {Observable, Observer} from "rxjs";
import {current} from "codelyzer/util/syntaxKind";

export const customers: any[] = [
  {
    id: 1,
    name: "Alfred Obialo",
    address: "21 Ifeanyi street canal estate Cele okota"
  },
  {
    id: 2,
    name: "Chidozie Ugboma",
    address: "21 Ifeanyi street canal estate Cele okota"
  },
  {
    id: 3,
    name: "Chisimdi Okoye",
    address: "Apmis Software dev inc"
  },
  {
    id: 4,
    name: "Obialo Olivia",
    address: "Ihiagwa street owerri"
  },
  {
    id: 5,
    name: "Austin Umehne",
    address: "Dayway Power Distribution Inc"
  },
  {
    id: 6,
    name: "Adaeze Okoye",
    address: "Delivery Science Distribution Inc"
  },
];

export function getCustomerFromServer(currentPage: number, pageSize: number): Observable<any> {
  const skip = currentPage * pageSize;  // 1 * 1  = 1,
  const mod = customers.length % pageSize;
  const totalPages = ((customers.length - mod) / pageSize) + (mod > 0 ? 1 : 0);
  let pagination = {
    totalRecord: customers.length,
    pageSize, currentPage,
    totalPages: totalPages
  };
  const res = Observable.create(observer => {
    window.setTimeout(() => {
      observer.next({
        data: customers.slice(skip, pageSize + currentPage /*+ (currentPage > 0 ? 1 : 0)*/),
        pagination,
        message: "Customer Record loaded!"

      });
      observer.complete();
    }, 1100);


  });
  return res;
}
