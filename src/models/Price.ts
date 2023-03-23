/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { PriceAlterationDetails } from './PriceAlterationDetails';

export type Price = {
    /**
     * ISO Currency code of the price (e.g. GBP, USD, EUR)
     */
    currencyCode?: string;
    /**
     * Total price of the item (including taxes, fees, discounts etc)
     */
    total?: number;
    /**
     * Net price of the item (excluding taxes, fees, etc)
     */
    net?: number;
    /**
     * Amount of tax calculated for the item
     */
    tax?: number;
    /**
     * details of the sources of the tax for this item
     */
    taxSources?: Array<PriceAlterationDetails>;
    /**
     * Total amount of additional fees charged on the item
     */
    fee?: number;
    /**
     * details of the sources of the fees for this item
     */
    feeSources?: Array<PriceAlterationDetails>;
    /**
     * Total amount of additional application/platform fees charged on the item
     */
    applicationFee?: number;
    /**
     * details of the sources of the application/platform fees for this item
     */
    applicationFeeSources?: Array<PriceAlterationDetails>;
    /**
     * Total amount of discount applied to the item
     */
    discount?: number;
    /**
     * details of the sources of the discounts for this item
     */
    discountSources?: Array<PriceAlterationDetails>;
};

