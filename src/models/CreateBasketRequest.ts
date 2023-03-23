/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AddToBasketRequest } from './AddToBasketRequest';

export type CreateBasketRequest = {
    basketItems: Array<AddToBasketRequest>;
    /**
     * Promo code to apply to the order
     */
    promotionCode?: string;
    /**
     * An optional date representing when the order was placed, used to calculate prices and promotions (e.g. historical repricing)
     */
    calculationDate?: string;
};

