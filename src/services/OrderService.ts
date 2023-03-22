/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AddToBasketRequest } from '../models/AddToBasketRequest';
import type { CreateBasketRequest } from '../models/CreateBasketRequest';
import type { ModifyLineItemBody } from '../models/ModifyLineItemBody';
import type { Order } from '../models/Order';
import type { UpdatePersonalDetails } from '../models/UpdatePersonalDetails';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class OrderService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Gets the current basket
     * gets the user's current basket. If one doesn't exist, a transient one will be returned
     * @param retrieveProducts Determines whether the product level information should be included in the response
     * @returns Order Retrieved the basket for the user
     * @throws ApiError
     */
    public retrieveCurrentBasket(
        retrieveProducts?: boolean,
    ): CancelablePromise<Order> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/basket',
            query: {
                'retrieveProducts': retrieveProducts,
            },
        });
    }

    /**
     * Adds a product to the user's current basket
     * This operation will create a basket for the user if one doesn't already exist, and will add the product and trigger a reprice of the order (along with any promotions that may apply)
     * @param retrieveProducts Determines whether the product level information should be included in the response
     * @param forceNewLineItem Controls whether the added product should be created as a separate line item, or whether the quantity of any existing line items of the same product can be updated. If no value is passed, it will default to the behaviour configured for the site.
     * @param takeAwayItem Determines that the product being added is a take away item, which means that no fulfilment is required for this item as the customer has taken it at the point of sale (i.e. a POS transaction)
     * @param requestBody
     * @returns Order Retrieved the basket for the user
     * @throws ApiError
     */
    public addToBasket(
        retrieveProducts?: boolean,
        forceNewLineItem?: boolean,
        takeAwayItem?: boolean,
        requestBody?: AddToBasketRequest,
    ): CancelablePromise<Order> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/v1/basket',
            query: {
                'retrieveProducts': retrieveProducts,
                'forceNewLineItem': forceNewLineItem,
                'takeAwayItem': takeAwayItem,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

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

    /**
     * Delete current basket
     * This operation will remove the user's basket
     * @returns any Basket removed
     * @throws ApiError
     */
    public deleteBasket(): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/v1/basket',
        });
    }

    /**
     * Gets a basket by ID
     * gets a specific basket for the user. If one doesn't exist, a transient one will be returned
     * @param basketId
     * @returns Order Retrieved the basket for the user
     * @returns any Unexpected error
     * @throws ApiError
     */
    public retrieveBasketById(
        basketId: string,
    ): CancelablePromise<Order | any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/basket/{basketId}',
            path: {
                'basketId': basketId,
            },
            errors: {
                404: `A basket with the specified ID was not found or the current user does not have access to it.`,
            },
        });
    }

    /**
     * Updates the personal details within an order
     * gets a specific basket for the user and returns the
     * @param basketId ID of the basket to retrieve
     * @param requestBody
     * @returns any Successfully modified line item
     * @throws ApiError
     */
    public updatePersonalDetails(
        basketId: string,
        requestBody?: UpdatePersonalDetails,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/v1/basket/{basketId}/personalDetails',
            path: {
                'basketId': basketId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                404: `A basket or line item with the specified ID was not found or the current user does not have access to it.`,
            },
        });
    }

    /**
     * Updates a line item within an order
     * gets a specific basket for the user and returns the
     * @param basketId ID of the basket to retrieve
     * @param lineItemId ID of the line item within the basket to retrieve
     * @param requestBody
     * @returns Order Successfully modified line item
     * @returns any Unexpected error
     * @throws ApiError
     */
    public updateLineItem(
        basketId: string,
        lineItemId: string,
        requestBody?: ModifyLineItemBody,
    ): CancelablePromise<Order | any> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/v1/basket/{basketId}/{lineItemId}',
            path: {
                'basketId': basketId,
                'lineItemId': lineItemId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                404: `A basket or line item with the specified ID was not found or the current user does not have access to it.`,
            },
        });
    }

    /**
     * Removes a line item within an order
     * gets a specific basket for the user. If one doesn't exist, a transient one will be returned
     * @param basketId ID of the basket to retrieve
     * @param lineItemId ID of the line item within the basket to retrieve
     * @returns Order Successfully removed line item
     * @returns any Unexpected error
     * @throws ApiError
     */
    public removeLineItem(
        basketId: string,
        lineItemId: string,
    ): CancelablePromise<Order | any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/v1/basket/{basketId}/{lineItemId}',
            path: {
                'basketId': basketId,
                'lineItemId': lineItemId,
            },
            errors: {
                404: `A basket or line item with the specified ID was not found or the current user does not have access to it.`,
            },
        });
    }

}
