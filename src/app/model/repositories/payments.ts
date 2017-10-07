import { Injectable } from '@angular/core';
import { Api } from '../api';
import { BehaviorSubject } from 'rxjs';
import { Payment } from '../entities';
import { PaymentsResponse, PaymentData } from '../interfaces';

@Injectable()
export class Payments extends BehaviorSubject<Payment[]> {

    constructor(
        private api: Api
    ) {
        super([]);
        this.api.get('payments').subscribe((data: PaymentsResponse) => {
            const list = data.data.map((item: PaymentData) => Payment.fromAPI(item));
            this.next(list);
        });
    }

}