/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { MenuNode } from '../models/MenuNode';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class MenuService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Creates a Menu node
     * @param requestBody
     * @returns MenuNode A Menu Item
     * @throws ApiError
     */
    public createMenuNode(
        requestBody?: MenuNode,
    ): CancelablePromise<MenuNode> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/v1/admin/menu',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Gets a list of Menu nodes from the repository
     * @param topLevelOnly Only fetch top level menu nodes
     * @param pageSize The number of results to return in a page. If it isn't specified then a configured default will be returned.
     * @param pageNumber The page of results to be returned, with a 0-based index (i.e. the first page is page 0, then page 1, 2, etc.).  Defaults to 0 if not supplied.
     * @returns MenuNode A Menu Item
     * @throws ApiError
     */
    public getMenuNodes(
        topLevelOnly?: boolean,
        pageSize?: number,
        pageNumber?: number,
    ): CancelablePromise<Array<MenuNode>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/admin/menu',
            query: {
                'topLevelOnly': topLevelOnly,
                'pageSize': pageSize,
                'pageNumber': pageNumber,
            },
        });
    }

    /**
     * Gets a menu node by its ID
     * @param id ID of the menu in the data store
     * @returns MenuNode A Menu Item
     * @returns any Unexpected error
     * @throws ApiError
     */
    public getMenuNodeById(
        id: string,
    ): CancelablePromise<MenuNode | any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/admin/menu/{id}',
            path: {
                'id': id,
            },
            errors: {
                404: `Could not find a node with that ID`,
            },
        });
    }

    /**
     * Updates a menu node by its ID
     * @param id ID of the menu in the data store
     * @param requestBody
     * @returns any Unexpected error
     * @throws ApiError
     */
    public updateMenuNodeById(
        id: string,
        requestBody?: MenuNode,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/v1/admin/menu/{id}',
            path: {
                'id': id,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                404: `Could not find a node with that ID`,
            },
        });
    }

    /**
     * Deletes a menu node by its ID
     * @param id ID of the menu in the data store
     * @returns any Unexpected error
     * @throws ApiError
     */
    public deleteMenuNodeById(
        id: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/v1/admin/menu/{id}',
            path: {
                'id': id,
            },
            errors: {
                404: `Could not find a node with that ID`,
            },
        });
    }

}
