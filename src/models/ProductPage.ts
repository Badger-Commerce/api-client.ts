/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { PaginationParams } from './PaginationParams';
import type { Product } from './Product';

/**
 * A page of Products objects, with pagination data
 */
export type ProductPage = {
    paginationParams?: PaginationParams;
    data?: Array<Product>;
};

