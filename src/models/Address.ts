/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type Address = {
    /**
     * Name of the person at the address
     */
    name?: string;
    /**
     * First line of the address
     */
    line1?: string;
    /**
     * Second line of the address
     */
    line2?: string;
    /**
     * Third line of the address
     */
    line3?: string;
    /**
     * Fourth line of the address
     */
    line4?: string;
    /**
     * City/Town of the address
     */
    city?: string;
    /**
     * Region or county of the address
     */
    regionCounty?: string;
    /**
     * State or sub-country of the address
     */
    state?: string;
    /**
     * Country of the address
     */
    country?: string;
    /**
     * Postal/zip code of the address
     */
    postalCode?: string;
    /**
     * Instructions for the delivery
     */
    deliveryInstructions?: string;
    /**
     * What Three Words location code for the address
     */
    whatThreeWords?: string;
    /**
     * latitude of the address
     */
    latitude?: number;
    /**
     * longitude of the address
     */
    longitude?: number;
};

