import { Graph } from './graph';

export interface FixtureData {
    contract_reference: string;
    exchange_rate: string;
    // TODO: speak to backend currency/value interface
    orginal_amount: string;
    original_currency: string;
}

