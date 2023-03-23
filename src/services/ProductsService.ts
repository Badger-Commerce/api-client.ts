/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ExtensionUpdateBody } from '../models/ExtensionUpdateBody';
import type { Product } from '../models/Product';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class ProductsService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Get the products contained in a collection
     * Fetches the products that are members of a collection specified by the ID in the URL
     * @param id ID of the collection in the data store
     * @param pageSize The number of results to return in a page. If it isn't specified then a configured default will be returned.
     * @param pageNumber The page of results to be returned, with a 0-based index (i.e. the first page is page 0, then page 1, 2, etc.).  Defaults to 0 if not supplied.
     * @returns Product An array of products
     * @returns any Unexpected error
     * @throws ApiError
     */
    public getProductsInCollection(
        id: string,
        pageSize?: number,
        pageNumber?: number,
    ): CancelablePromise<Array<Product> | any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/public/collection/{id}/products',
            path: {
                'id': id,
            },
            query: {
                'pageSize': pageSize,
                'pageNumber': pageNumber,
            },
            errors: {
                404: `Could not resolve a collection`,
            },
        });
    }

    /**
     * retrieve a product by various query parameters
     * Retrieve product details from the current catalogue associated with the site
     * @param upc UPC of the product to search for
     * @param seoName
     * @param pageNumber Page of results to return. Defaults to 1 (which is the first)
     * @param pageSize Number of results to return in each page
     * @returns Product A list of products that match the query.
     * @returns any Unexpected error
     * @throws ApiError
     */
    public queryProducts(
        upc?: string,
        seoName?: string,
        pageNumber?: number,
        pageSize?: number,
    ): CancelablePromise<Array<Product> | any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/public/product',
            query: {
                'upc': upc,
                'seoName': seoName,
                'pageNumber': pageNumber,
                'pageSize': pageSize,
            },
            errors: {
                400: `The specified product ID is invalid (not a number).`,
                404: `A product with the specified ID was not found.`,
            },
        });
    }

    /**
     * retrieve a product by sku code
     * Retrieve product details from the current catalogue associated with the site
     * @param productSkuCode
     * @param generateExtensions
     * @returns Product A product object.
     * @returns any Unexpected error
     * @throws ApiError
     */
    public getProductBySku(
        productSkuCode: string,
        generateExtensions?: boolean,
    ): CancelablePromise<Product | any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/public/product/{productSkuCode}',
            path: {
                'productSkuCode': productSkuCode,
            },
            query: {
                'generateExtensions': generateExtensions,
            },
            errors: {
                400: `The specified product ID is invalid (not a number).`,
                404: `A product with the specified ID was not found.`,
            },
        });
    }

    /**
     * Handle an upadte from an extension
     * Regenerates the data for the product based upon the action provided by the element within the page.
     * @param productSkuCode
     * @param extensionId
     * @param requestBody
     * @returns Product A product object.
     * @returns any Unexpected error
     * @throws ApiError
     */
    public processProductExtensionUpdate(
        productSkuCode: string,
        extensionId: string,
        requestBody?: ExtensionUpdateBody,
    ): CancelablePromise<Product | any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/v1/public/product/{productSkuCode}/extension/{extensionId}',
            path: {
                'productSkuCode': productSkuCode,
                'extensionId': extensionId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `The specified product ID is invalid (not a number).`,
                404: `A product with the specified ID was not found.`,
            },
        });
    }

}
