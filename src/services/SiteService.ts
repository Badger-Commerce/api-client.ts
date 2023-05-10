/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DisplayMenuNode } from '../models/DisplayMenuNode';
import type { MenuNode } from '../models/MenuNode';
import type { SiteContext } from '../models/SiteContext';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class SiteService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Get SiteContext data about the current site
     * Fetches the site context from the data store for the site that maps to the current URL/context.
     * @returns SiteContext A SiteContext object
     * @returns any Unexpected error
     * @throws ApiError
     */
    public getSiteContext(): CancelablePromise<SiteContext | any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/site',
            errors: {
                404: `Could not resolve a site`,
            },
        });
    }

    /**
     * Gets the default display menu structure
     * Fetches the default menu hierarchy from the data store for the site that maps to the current URL/context.
     * @returns DisplayMenuNode A Root Menu Item
     * @returns any Unexpected error
     * @throws ApiError
     */
    public getMenu(): CancelablePromise<Array<DisplayMenuNode> | any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/site/menu',
            errors: {
                404: `Could not resolve a menu for the site`,
            },
        });
    }

    /**
     * Gets a menu structure by the root ID
     * Fetches the menu hierarchy from the data store for the site that maps to the current URL/context.
     * @param rootNodeId ID of the root node of the menu in the data store
     * @returns MenuNode A Root Menu Item
     * @returns any Unexpected error
     * @throws ApiError
     */
    public getMenuByRootNodeId(
        rootNodeId: string,
    ): CancelablePromise<Array<MenuNode> | any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/site/menu/{rootNodeId}',
            path: {
                'rootNodeId': rootNodeId,
            },
            errors: {
                404: `Could not resolve a menu for the site`,
            },
        });
    }

}
