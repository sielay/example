import { Graph } from './graph';
import { Entity } from './entity';
import { PartyData } from './party';

export interface PaymentData extends Entity {
    organisation_id: string;
    attributes: {
        amount: string;
        beneficiary_party: PartyData; // TODO
        charges_information: any //
        debtor_party: PartyData;
        currency: string;
        end_to_end_reference: string;
        fx: any;
        numeric_reference: string;
        payment_id: string;
        payment_purpose: string;
        payment_scheme: string;
        payment_type: string;
        processing_date: string;
        reference: string;
        scheme_payment_sub_type: string;
        scheme_payment_type: string;
        sponsor_party: PartyData;
    }
}

export interface PaymentsResponse {
    data: PaymentData[]
}