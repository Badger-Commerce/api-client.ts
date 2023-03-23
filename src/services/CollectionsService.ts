/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Collection } from '../models/Collection';
import type { Product } from '../models/Product';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class CollectionsService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Get a collection/category
     * Fetches the category specified by the ID for the current store.
     * @param id ID of the collection in the data store
     * @param generateExtensions
     * @returns Collection A Collection object
     * @returns any Unexpected error
     * @throws ApiError
     */
    public getCollection(
        id: string,
        generateExtensions?: boolean,
    ): CancelablePromise<Collection | any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/public/collection/{id}',
            path: {
                'id': id,
            },
            query: {
                'generateExtensions': generateExtensions,
            },
            errors: {
                404: `Could not resolve a collection`,
            },
        });
    }

    /**
     * Get a collection/category
     * Fetches the category specified by the ID for the current store.
     * @param id ID of the collection in the data store
     * @param extensionId
     * @returns Collection A Collection object
     * @returns any Unexpected error
     * @throws ApiError
     */
    public handleCollectionExtensionById(
        id: string,
        extensionId: string,
    ): CancelablePromise<Collection | any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/public/collection/{id}/extension/{extensionId}',
            path: {
                'id': id,
                'extensionId': extensionId,
            },
            errors: {
                404: `Could not resolve a collection`,
            },
        });
    }

    /**
     * Search for a collection/category
     * Searches the catalogue for a collection with a matching SEO name/code.
     * @param seoName SEO Name of the collection to search for
     * @param generateExtensions
     * @returns Collection A Collection object
     * @returns any Unexpected error
     * @throws ApiError
     */
    public searchForCollection(
        seoName: string,
        generateExtensions?: boolean,
    ): CancelablePromise<Collection | any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/public/collection',
            query: {
                'seoName': seoName,
                'generateExtensions': generateExtensions,
            },
            errors: {
                404: `Could not resolve a collection`,
            },
        });
    }

    /**
     * Handle extension submissions for a collection/category
     * Searches the catalogue for a collection with a matching SEO name/code, then triggers the extension framework
     * @param seoName SEO Name of the collection to search for
     * @param extensionId
     * @returns Collection A Collection object
     * @returns any Unexpected error
     * @throws ApiError
     */
    public handleCollectionExtension(
        seoName: string,
        extensionId: string,
    ): CancelablePromise<Collection | any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/v1/public/collection/extension/{extensionId}',
            path: {
                'extensionId': extensionId,
            },
            query: {
                'seoName': seoName,
            },
            errors: {
                404: `Could not resolve a collection`,
            },
        });
    }

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

}
