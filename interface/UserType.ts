export interface UserType {
  id: number;
  height: number;
  weight: number;
  firstName: string;
  lastName: string;
  userName: string;
  birthDate: string;
  age: number;
  gender: string;
  email: string;
  phone: string;
  avatarURL: string;
  address: UserAddress;
  company: UserCompany;
  bank: UserBank;
  university: string;
  bloodGroup: string;
  ip: string;
  macAddress: string;
  maidenName: string;
  ssn: string;
  userAgent: string;
}

export interface UserAddress {
  address: string;
  city: string;
  postalCode: string;
  state: string;
}

export interface UserBank {
  cardExpire: string;
  cardNumber: string;
  cardType: string;
  currency: string;
  iban: string;
}

export interface UserCompany {
  address: UserAddress;
  department: string;
  name: string;
  title: string;
}
