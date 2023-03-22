/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CardDetails } from './CardDetails';

export type PaymentDetails = {
    /**
     * Token representing the payment method in the external payment system
     */
    token?: string;
    /**
     * Auth token for the token (respresenting an approved auth of the card in the external system)
     */
    authorisationToken?: string;
    /**
     * ISO currency code for the payment
     */
    currencyCode?: string;
    /**
     * state of the payment
     */
    state?: string;
    /**
     * shows whether this is a live payment or test
     */
    liveMode?: boolean;
    /**
     * Total amount of payment
     */
    amount?: number;
    /**
     * Total amount of platform/application fee
     */
    applicationFee?: number;
    cardDetails?: CardDetails;
};

