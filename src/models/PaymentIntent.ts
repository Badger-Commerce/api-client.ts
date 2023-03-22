/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { PaymentType } from './PaymentType';

export type PaymentIntent = {
    /**
     * Secret token generated by the payment provider
     */
    paymentToken?: string;
    /**
     * ID of the payment intent in badger commerce
     */
    id?: string;
    /**
     * Third party payment ID for the payment intent
     */
    thirdPartyId?: string;
    /**
     * Amount in base currency requested with this intent
     */
    amountRequested?: number;
    /**
     * Amount in base currency captured with this intent
     */
    amountCaptured?: number;
    /**
     * Amount in base currency authorised with this intent
     */
    amountAuthorised?: number;
    /**
     * Amount in base currency refunded with this intent
     */
    amountRefunded?: number;
    /**
     * Status of the payment intent in the system
     */
    status?: string;
    paymentType?: PaymentType;
};
