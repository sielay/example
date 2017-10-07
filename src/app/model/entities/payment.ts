import { PaymentData } from '../interfaces';
import { CurrencyValue } from './currency-value';
import { Party } from './party';
import { BehaviorSubject, Observable } from 'rxjs';

/**
 * @class
 */
export class Payment {

    /**
     * Entity factory
     * @param {PaymentData} data 
     */
    public static fromAPI(data: PaymentData): Payment {
        const payment: Payment = new Payment(data.id);
        payment.updateFromAPI(data);
        return payment;
    }

    public version: BehaviorSubject<number> = new BehaviorSubject<number>(null);
    public organisationId: BehaviorSubject<string> = new BehaviorSubject<string>(null);

    public amount: BehaviorSubject<CurrencyValue> = new BehaviorSubject<CurrencyValue>(null);
    public reference: BehaviorSubject<string> = new BehaviorSubject<string>(null);
    public processingDate: BehaviorSubject<Date> = new BehaviorSubject<Date>(null);
    public debtor: BehaviorSubject<Party> = new BehaviorSubject<Party>(null);
    public beneficiary: BehaviorSubject<Party> = new BehaviorSubject<Party>(null);
    public sponsor: BehaviorSubject<Party> = new BehaviorSubject<Party>(null);

    constructor(public readonly id: string) { }

    public updateFromAPI(data: PaymentData) {

        this.amount.next(CurrencyValue.fromAPI(data.attributes.amount, data.attributes.currency));
        this.organisationId.next(data.organisation_id);
        this.processingDate.next(new Date(Date.parse(data.attributes.processing_date)));
        this.reference.next(data.attributes.reference);
        this.debtor.next(Party.fromAPI(data.attributes.debtor_party));
        this.beneficiary.next(Party.fromAPI(data.attributes.beneficiary_party));
        this.sponsor.next(Party.fromAPI(data.attributes.sponsor_party));
        this.version.next(data.version);
    }

    public match(filter: string): boolean {
        if (this.id.indexOf(filter) !== -1) return true;
        if (this.organisationId.getValue().indexOf(filter) !== -1) return true;
        if (this.amount.getValue().toString().indexOf(filter) !== -1) return true;
        return false;
    }
}

