/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ExtensionEntry } from './ExtensionEntry';

/**
 * Base attributes common to Badger data entities
 */
export type BadgerBaseAttributes = {
    /**
     * Unique ID of the item in the Badger datastore
     */
    id?: string;
    /**
     * The SEO friendly handle to retrieve the particular item, usually used in the URL of the page displaying the item.
     */
    seoName?: string;
    /**
     * the ID of the catalogue
     */
    catalogueId?: string;
    /**
     * The time the item was last modified
     */
    lastModifiedDate?: string;
    /**
     * The time the item was created
     */
    createdDate?: string;
    /**
     * Optional data associated with the product for inclusion on the page.
     */
    extensionData?: Array<ExtensionEntry>;
};

