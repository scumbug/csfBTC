export interface order {
  phone: number;
  name: string;
  gender: string;
  dob: moment.Moment;
  orderDate: Date;
  orderType: string;
  quantity: number;
  cryptoPair: string;
  pairPrice: number;
  qrCode?: string;
}
