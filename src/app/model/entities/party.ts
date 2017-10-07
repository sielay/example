import { PartyData } from '../interfaces';

/**
 * @class
 */
export class Party {

    public static fromAPI(party: PartyData) {
        return new Party(
            party.account_name,
            party.account_number,
            party.account_number_code,
            party.account_type,
            party.address,
            party.name,
            party.bank_id,
            party.bank_id_code
        );
    }

    constructor(
        public readonly account_name: string,
        public readonly account_number: string,
        public readonly account_number_code: string,
        public readonly account_type: number,
        public readonly address: string,
        public readonly name: string,
        public readonly bank_id: string,
        public readonly bank_id_code: string
    ) { }


    public toString() {
        return this.name || this.account_name || this.account_number;
    }
}