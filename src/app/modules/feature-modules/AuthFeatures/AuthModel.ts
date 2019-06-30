export interface ILoginModel {
  userId: string;
  password: string;
}

export interface IUserProfile {
  firstName?: string;
  lastName?: string;
  id: string;
  profileUrl?: string;
  gender?: string;
  getFullName: () => string;
}


export class UserProfileInfo implements IUserProfile {

  firstName: string;
  gender: string;
  id: string;
  lastName: string;
  profileUrl: string;
  getFullName() {
    return `${this.firstName || ""} ${this.lastName || ""}`;
  }
}
