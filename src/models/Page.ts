/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { BadgerBaseAttributes } from './BadgerBaseAttributes';

export type Page = (BadgerBaseAttributes & {
    /**
     * Name of the page, displayed to the end user
     */
    name?: string;
    /**
     * A description of the page
     */
    description?: string;
    /**
     * List of parent page SeoNames which form the hierarchy of the page structure
     */
    parentPages?: Array<string>;
    attributes?: any;
});

