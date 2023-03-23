/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreateBasketRequest } from '../models/CreateBasketRequest';
import type { Order } from '../models/Order';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class PricingService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Creates a new basket of products and triggers a price and promotion calculation of the contents
     * This operation will create a basket for the user if one doesn't already exist, and will add the products, and trigger a reprice of the order (along with any promotions that may apply). The basket can be optionally persisted if required, or purely held in memory for the life of the request.
     * @param retrieveProducts Determines whether the product level information should be included in the response
     * @param associateWithUser Sets this new basket as the user's current basket. Setting this to true means the basket is persisted regardless of the transientBasket property.
     * @param transientBasket Determines whether the basket is persisted to the DB or not
     * @param async Allows the API to return without completing the pricing operation. Setting this value means the order will be persisted (as the reference returned must be used to retrieve the outcome of the operation in a subsequent call)
     * @param requestBody
     * @returns Order The repriced order
     * @throws ApiError
     */
    public createNewBasket(
        retrieveProducts?: boolean,
        associateWithUser?: boolean,
        transientBasket?: boolean,
        async?: boolean,
        requestBody?: CreateBasketRequest,
    ): CancelablePromise<Order> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/v1/basket',
            query: {
                'retrieveProducts': retrieveProducts,
                'associateWithUser': associateWithUser,
                'transientBasket': transientBasket,
                'async': async,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}
