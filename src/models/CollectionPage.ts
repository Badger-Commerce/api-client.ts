/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Collection } from './Collection';
import type { PaginationParams } from './PaginationParams';

/**
 * A page of collection objects, with pagination data
 */
export type CollectionPage = {
    paginationParams?: PaginationParams;
    data?: Array<Collection>;
};

