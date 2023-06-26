/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class ExtensionServiceService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * GET endpoint for server-configured extension endpoint
     * @param type
     * @param itemId
     * @param extensionId
     * @returns any The Extension Service response (unstructured)
     * @throws ApiError
     */
    public getExtension(
        type: 'product' | 'collection' | 'page' | 'variant',
        itemId: string,
        extensionId: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/extensions/{type}/id/{itemId}/{extensionId}',
            path: {
                'type': type,
                'itemId': itemId,
                'extensionId': extensionId,
            },
        });
    }

}
