import { Graph } from './graph';
import { CurrencyValueData } from './currency-value';

export interface ChargesData {
    bearer_code: string;
    sender_charges: CurrencyValueData[];
    // TODO: speak to backend, we use two interfaces for same type of entity
    receiver_charges_amount: string;
    receiver_charges_currency: string;
}

