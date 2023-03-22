/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type PriceAlterationDetails = {
    /**
     * Total amount of alteration applied
     */
    amount?: number;
    /**
     * Total percentage of alteration applied
     */
    percentage?: number;
    /**
     * Date that this price alteration was applied
     */
    dateApplied?: string;
    /**
     * Code representing the source of this alteration
     */
    code?: string;
    /**
     * human-readable description of the alteration
     */
    description?: string;
};

