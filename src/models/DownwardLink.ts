/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type DownwardLink = {
    /**
     * ID of the component linked to - e.g. product, collection or page
     */
    linkedId?: string;
    linkType?: DownwardLink.linkType;
    /**
     * Indicates whether the tree should be traversed in a set of pages or collection
     */
    traverseTree?: boolean;
    /**
     * Determines how deep to go within a collection or page tree
     */
    traversalDepth?: number;
    /**
     * Number of items to retrieve from the linked type - e.g. 10 products, 20 collections, etc
     */
    batchSize?: number;
    /**
     * External URL that the link links to
     */
    externalURL?: string;
};

export namespace DownwardLink {

    export enum linkType {
        PAGE = 'PAGE',
        COLLECTION = 'COLLECTION',
        PRODUCT = 'PRODUCT',
        EXTERNAL_URL = 'EXTERNAL_URL',
        PRODUCT_ATB = 'PRODUCT_ATB',
    }


}

