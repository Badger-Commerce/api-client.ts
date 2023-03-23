/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { DownwardLink } from './DownwardLink';

export type MenuNode = {
    /**
     * ID of the menu Node
     */
    id?: string;
    /**
     * Slug identifying the node within the hierarchy
     */
    nodeId?: string;
    childNodeIds?: Array<string>;
    /**
     * The text displayed in for the link to the end users
     */
    linkedText?: string;
    /**
     * Indicates that the link should only be displayed to authenticated users
     */
    loggedInOnly?: boolean;
    downwardLink?: DownwardLink;
};

