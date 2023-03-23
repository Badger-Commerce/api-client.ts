/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Order } from './Order';

export type OrderSearchResults = {
    orders?: Array<Order>;
    /**
     * Number of results found in the DB for this query
     */
    resultCount?: number;
};

