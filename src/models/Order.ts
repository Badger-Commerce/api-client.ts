/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Address } from './Address';
import type { LineItem } from './LineItem';
import type { OrderAction } from './OrderAction';
import type { PaymentDetails } from './PaymentDetails';
import type { PersonalDetails } from './PersonalDetails';
import type { Price } from './Price';

export type Order = {
    /**
     * Order ID
     */
    id?: string;
    /**
     * Friendly order number (human readable)
     */
    number?: string;
    /**
     * Set of actions that can be performed on the order to move it through the life-cycle.
     */
    nextActions?: Array<OrderAction>;
    /**
     * Date the item was created
     */
    createdDate?: string;
    /**
     * Date the order was submitted
     */
    submittedDate?: string;
    /**
     * Date the item was last updated
     */
    lastUpdatedDate?: string;
    /**
     * indicates whether the order is currently being repriced and therefore not consistent
     */
    repricing?: boolean;
    /**
     * secret code proving ownership of the order in non-authenticated contexts (e.g. deeplinks)
     */
    confirmationCode?: string;
    /**
     * current state of the order
     */
    state?: string;
    price?: Price;
    personalDetails?: PersonalDetails;
    paymentDetails?: PaymentDetails;
    shippingAddress?: Address;
    billingAddress?: Address;
    /**
     * Line items representing the contents of the order
     */
    lineItems?: Array<LineItem>;
};

