import { TestBed, async, inject } from '@angular/core/testing';
import { Payment } from './payment';
import { PaymentData, PaymentsResponse, Graph } from '../interfaces';
import * as _ from 'lodash';

import { DATA } from '../mockup/payments';

const CLONE_MERGE = (a: any, b: any) => {
    return _.merge(JSON.parse(JSON.stringify(a)), b);
};

describe('Payment', () => {

    it('constructs', async(() => {

        DATA.data
            .forEach((data: PaymentData) => {

                const payment = Payment.fromAPI(data);
                expect(payment.id).toEqual(data.id);
                expect(payment.organisationId.getValue()).toEqual(data.organisation_id);
                expect(payment.version.getValue()).toEqual(data.version);

            });

    }));

    it('Observables', async(() => {
        const payment = Payment.fromAPI(DATA.data[0]);

        payment.version.take(1).subscribe((version: number) => {
            return expect(version).not.toEqual(12);
        });

        payment.organisationId.take(1).subscribe((organisation: string) => {
            return expect(organisation).not.toEqual('abc');
        });

        payment.updateFromAPI(CLONE_MERGE(DATA.data[0], {
            organisation: 'abc',
            version: 12,
            amount: 'af'
        }));
    }));
});
