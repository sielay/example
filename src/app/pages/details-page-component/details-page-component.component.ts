import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription, Observable } from 'rxjs';
import { Payments, Payment } from '../../model';

@Component({
  selector: 'app-details-page-component',
  templateUrl: './details-page-component.component.html',
  styleUrls: ['./details-page-component.component.scss']
})
export class DetailsPageComponentComponent implements OnInit, OnDestroy {

  private subscription: Subscription;
  private payment: Payment;

  constructor(
    private route: ActivatedRoute,
    private payments: Payments
  ) { }

  public ngOnInit() {

    this.subscription =
      Observable
        .combineLatest(this.route.params, this.payments)
        .map((value: [{ [key: string]: string }, Payment[]]) => {
          let key: string = value[0]['id'];
          if (!key || key.replace(/^\s+|\s+$/g, '').length === 0) {
            return;
          }
          return value[1].filter((payment: Payment) => payment.id === key)[0] || null;
        })
        .subscribe((payment: Payment) => this.payment = payment);
  }

  public ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
      this.subscription = null;
    }
    this.payment = null;
  }

}
