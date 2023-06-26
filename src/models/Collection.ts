/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { BadgerBaseAttributes } from './BadgerBaseAttributes';

export type Collection = (BadgerBaseAttributes & {
    /**
     * The display name of the collection
     */
    name?: string;
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
});

