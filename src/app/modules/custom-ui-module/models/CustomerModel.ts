export interface ICustomerModel {
  id: string;
  firstName: string;
  lastName: string;
  contactAddress ?: IAddressInfo;
  phoneNumber  ?: string;
}

export interface IAddressInfo {
  city: string;
  state: string;
  zipCode ?: string;
}
