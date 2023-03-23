/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Order } from '../models/Order';
import type { OrderSearchResults } from '../models/OrderSearchResults';
import type { Product } from '../models/Product';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class AdminService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Creates a new product in the catalogue
     * Creates a new product in the default catalogue associated with the site. (any ID passed will be ignored as it's creating a new product)
     * @param catalogueId An override catalogue ID to allow products to be added to the non-default catalogue.
     * @param requestBody
     * @returns any Unexpected error
     * @returns Product The newly created Product.
     * @throws ApiError
     */
    public createNewProduct(
        catalogueId?: string,
        requestBody?: Product,
    ): CancelablePromise<any | Product> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/v1/admin/product',
            query: {
                'catalogueId': catalogueId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                409: `Duplicate Identifier found`,
            },
        });
    }

    /**
     * Updates a product in the catalogue
     * Updates a product in the default catalogue associated with the site.
     * @param id The ID of the product to be updated
     * @param catalogueId An override catalogue ID to allow products to be updated in the non-default catalogue.
     * @param requestBody
     * @returns any Unexpected error
     * @returns Product The updated Product.
     * @throws ApiError
     */
    public updateProduct(
        id: string,
        catalogueId?: string,
        requestBody?: Product,
    ): CancelablePromise<any | Product> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/v1/admin/product/{id}',
            path: {
                'id': id,
            },
            query: {
                'catalogueId': catalogueId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                404: `Product not found`,
            },
        });
    }

    /**
     * Updates a product in the catalogue
     * Updates a product in the default catalogue associated with the site.
     * @param skuId The SKU ID of the product to be updated
     * @param catalogueId An override catalogue ID to allow products to be updated in the non-default catalogue.
     * @param requestBody
     * @returns any Unexpected error
     * @returns Product The updated Product.
     * @throws ApiError
     */
    public updateProductBySkuId(
        skuId: string,
        catalogueId?: string,
        requestBody?: Product,
    ): CancelablePromise<any | Product> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/v1/admin/product/sku/{skuId}',
            path: {
                'skuId': skuId,
            },
            query: {
                'catalogueId': catalogueId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                404: `Product not found`,
            },
        });
    }

    /**
     * Creates a new product variant in the catalogue as a child of the parent product
     * Creates a new product variant in the default catalogue associated with the site.
     * @param id The ID of the parent product that this item is a variant of
     * @param catalogueId An override catalogue ID to allow products to be added to the non-default catalogue.
     * @param requestBody
     * @returns any Unexpected error
     * @returns Product The newly created Product.
     * @throws ApiError
     */
    public createNewProductVariant(
        id: string,
        catalogueId?: string,
        requestBody?: Product,
    ): CancelablePromise<any | Product> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/v1/admin/product/{id}/variant',
            path: {
                'id': id,
            },
            query: {
                'catalogueId': catalogueId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                409: `Duplicate Identifier found`,
            },
        });
    }

    /**
     * Gets orders
     * Gets orders for the site
     * @param pageSize The number of results to return in a page. If it isn't specified then a default number will be returned.
     * @param pageNumber The  page of results to be returned, with a 0-based index (i.e. the first page is page 0, then page 1, 2, etc.). Defaults to 0 if not supplied.
     * @param customerEmail Email address of the user used to filter the results to only those
     * @param state Status of the items that should be returneds
     * @returns OrderSearchResults Found Results
     * @throws ApiError
     */
    public retrieveOrders(
        pageSize?: number,
        pageNumber?: number,
        customerEmail?: string,
        state?: 'new' | 'inflight' | 'completed' | 'cancelled',
    ): CancelablePromise<OrderSearchResults> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/admin/orders',
            query: {
                'pageSize': pageSize,
                'pageNumber': pageNumber,
                'customerEmail': customerEmail,
                'state': state,
            },
        });
    }

    /**
     * Gets user
     * Gets users for the site
     * @param pageSize The number of results to return in a page. If it isn't specified then a default number will be returned.
     * @param pageNumber The  page of results to be returned, with a 0-based index (i.e. the first page is page 0, then page 1, 2, etc.). Defaults to 0 if not supplied.
     * @param orderType Type of user to return. Defaults to all
     * @returns Order Found Results
     * @throws ApiError
     */
    public retrieveUsers(
        pageSize?: number,
        pageNumber?: number,
        orderType?: 'anonymous' | 'registered' | 'anonOrders' | 'all',
    ): CancelablePromise<Array<Order>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/admin/users',
            query: {
                'pageSize': pageSize,
                'pageNumber': pageNumber,
                'orderType': orderType,
            },
        });
    }

}
