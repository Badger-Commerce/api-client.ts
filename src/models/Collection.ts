/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ExtensionEntry } from './ExtensionEntry';

export type Collection = {
    /**
     * ID of the collection in the data store
     */
    id?: string;
    /**
     * The display name of the collection
     */
    name?: string;
    /**
     * The unique code used in the URL to identify the collection
     */
    seoName?: string;
    /**
     * A short description of the collection
     */
    description?: string;
    /**
     * The name of the template that is should be used to display this collection
     */
    templateName?: string;
    /**
     * Indicates whether this particular collection has been disabled
     */
    disabled?: boolean;
    /**
     * List of collection IDs that are the parent collections of this collection.
     */
    parentCollectionIDs?: Array<string>;
    /**
     * base sorting ordinal - larger numbers are displayed first when collections are shown in a list
     */
    displayOrder?: number;
    /**
     * Optional data associated with the product for inclusion on the page.
     */
    extensionData?: Array<ExtensionEntry>;
};

