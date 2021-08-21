export interface IPrice {
  oneHour: number;
  halfHour: number;
}

export interface IAvailability {
  date: string;
  times: Array<IAvailabilityTime>;
}

export interface IAvailabilityTime {
  available: boolean;
  time: string;
}

export interface IRating {
  value: number;
  total: number;
}

export interface IPerson {
  id: string;
  description: string;
  fullName: string;
  imageUrl: string;
  location: string;
  rating: IRating;
  availabilities: Array<IAvailability>;
  specialty: string;
  price: IPrice;
}
