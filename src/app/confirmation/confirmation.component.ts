import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { order } from '../interfaces/order.interface';
import { Stor } from '../services/Stor.service';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css'],
})
export class ConfirmationComponent implements OnInit {
  order: order = {
    phone: 98716055,
    name: '352325',
    gender: 'female',
    dob: moment(),
    orderDate: new Date(),
    orderType: 'buy',
    quantity: 34,
    cryptoPair: 'BTCBRL',
    pairPrice: 2903,
  };

  constructor(private router: Router, private stor: Stor) {
    console.log(this.stor.order);
  }

  ngOnInit(): void {}
}
