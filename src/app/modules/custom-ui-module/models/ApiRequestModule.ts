export interface IApiResponse<TData> {
  data: TData;
  criteria: ICriteria;
  message  ?: string;
  success: boolean;
  hasError ?: boolean;
  errorInfo ?: any;
}

export interface ICriteria {
  pageResult ?: boolean;
  queryString ?: string;
  extraData ?: any;
  pagerInfo ?: IPagerInfo;
}

export interface IPagerInfo {
  currentPage ?: number;
  pageSize ?: number;
  totalPages ?: number;
  totalRecords ?: number;
  nextPageUrl ?: string;
  prevPageUrl ?: string;
  firstPageUrl ?: string;
  lastPageUrl ?: string;

}
