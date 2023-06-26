/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PagePage } from '../models/PagePage';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class PagesService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Search for a content page
     * Searches the Badger content repository for one or more pages that match the query parameters passed
     * @param seoName Seo Name to search for in the set of pages.
     * @param generateExtensions
     * @param pageNumber 0 based page number
     * @param pageSize Number of items to retrieve (max 200)
     * @returns PagePage A set of pages
     * @returns any Unexpected error
     * @throws ApiError
     */
    public searchForPages(
        seoName?: string,
        generateExtensions?: boolean,
        pageNumber?: number,
        pageSize: number = 50,
    ): CancelablePromise<PagePage | any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/pages',
            query: {
                'seoName': seoName,
                'generateExtensions': generateExtensions,
                'pageNumber': pageNumber,
                'pageSize': pageSize,
            },
            errors: {
                404: `Could not find anything that matched the query`,
            },
        });
    }

}
