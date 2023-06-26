/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Page } from './Page';
import type { PaginationParams } from './PaginationParams';

/**
 * A page of Page objects, with pagination data
 */
export type PagePage = {
    paginationParams?: PaginationParams;
    data?: Array<Page>;
};

