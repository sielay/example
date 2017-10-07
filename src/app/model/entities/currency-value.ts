import { CurrencyValueData } from '../interfaces';

/**
 * @class
 */
export class CurrencyValue {

    public static fromAPI(amount: string, currency: string) {
        return new CurrencyValue(amount, currency);
    }

    constructor(
        public readonly amount: string,
        public readonly currency: string
    ) { }

    public toFloat() {
        return parseFloat(this.amount);
    }

    public toAPI(): CurrencyValueData {
        return {
            amount: this.amount,
            currency: this.currency
        };
    }

    public toString() {
        return this.amount + ' ' + this.currency; 
    }
}