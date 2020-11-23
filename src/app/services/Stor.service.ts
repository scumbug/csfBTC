import { Injectable } from '@angular/core';
import { order } from '../interfaces/order.interface';

@Injectable()
export class Stor {
  public order: order;
  public constructor() {}
}
