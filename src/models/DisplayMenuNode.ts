/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type DisplayMenuNode = {
    /**
     * ID of the menu Node
     */
    id?: string;
    /**
     * Link text displayed to the end user
     */
    text?: string;
    /**
     * URL or SKU ID that the link should go to/add
     */
    resource?: string;
    /**
     * Indicates that the link should open a new window
     */
    newWindow?: boolean;
    /**
     * Indicates what type of link this is, to determine the behaviour required from the UI
     */
    linkType?: DisplayMenuNode.linkType;
    childNodes?: Array<DisplayMenuNode>;
};

export namespace DisplayMenuNode {

    /**
     * Indicates what type of link this is, to determine the behaviour required from the UI
     */
    export enum linkType {
        INTERNAL = 'internal',
        EXTERNAL = 'external',
        ADD_TO_BASKET = 'addToBasket',
    }


}

