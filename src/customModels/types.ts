import { Sex } from '../API';

type AWSEmail = string;
type AWSDate = string;

type Polices = string;

export interface IConnect {
  id: string;
  name: string;
  family_name: string;
  email: AWSEmail;
  sex: Sex;
  birthday: AWSDate;
}

export interface IAdmin {
  id: string;
  polices: Polices[];
}

export interface IFsbAgent {
  id: string;
}

export interface IUser {
  id: string;
  connectID: string;
  connect: IConnect;
}

export interface AWSListItems<T extends ModelData> {
  items: Partial<T>[];
  nextToken: string;
}

export type ModelData = IConnect | IAdmin | IFsbAgent | IUser;
export type ModelsKeys = keyof IConnect | keyof IAdmin | keyof IFsbAgent | keyof IUser;
