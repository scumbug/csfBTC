import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { order } from '../interfaces/order.interface';

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
    dob: new Date(),
    orderDate: new Date(),
    orderType: 'buy',
    quantity: 34,
    cryptoPair: 'BTCBRL',
    pairPrice: 2903,
  };

  constructor(private router: Router) {
    if (this.router.getCurrentNavigation().extras.state) {
      this.order = JSON.parse(
        this.router.getCurrentNavigation().extras.state.order
      );
      console.log(this.order);
    }
  }

  ngOnInit(): void {}
}
