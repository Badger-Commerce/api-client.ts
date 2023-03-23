/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PaymentToken } from '../models/PaymentToken';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class PosService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Returns an authorisation token for a POS Payment system
     * Generates a secure auth token for the payment device in the location specified in the URL.
     * @param locationId ID of the location where the devices are located
     * @returns PaymentToken Successfully modified line item
     * @returns any Unexpected error
     * @throws ApiError
     */
    public generatePosPaymentToken(
        locationId: string,
    ): CancelablePromise<PaymentToken | any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/pos/{locationId}/paymentToken',
            path: {
                'locationId': locationId,
            },
            errors: {
                404: `Location was not found`,
            },
        });
    }

}
