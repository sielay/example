import { Component, OnInit, OnDestroy } from '@angular/core';
import { Payments, Payment } from '../../model';
import { Subscription, Observable, BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-page-component',
  templateUrl: './list-page-component.component.html',
  styleUrls: ['./list-page-component.component.scss']
})
export class ListPageComponentComponent implements OnInit, OnDestroy {

  private filter: BehaviorSubject<string> = new BehaviorSubject<string>('');
  private listItems: Observable<any> = null;

  constructor(
    private router: Router,
    private payments: Payments
  ) { }

  public details(payment: Payment) {
    this.router.navigate([
      'payment',
      payment.id
    ]);
  }

  public ngOnInit() {
    this.listItems = Observable
      .combineLatest(this.payments, this.filter)
      .map((pair: [Payment[], string]) => pair[0]
        .filter((payment: Payment) => {

          const filter: string = pair[1].replace(/^\s+|\s+$/g, '');

          if (filter.length === 0) {
            return true;
          }
          return payment.match(filter);
        }));
  }

  public ngOnDestroy() {
    this.listItems = null;
  }

}
