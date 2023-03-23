/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PaymentIntent } from '../models/PaymentIntent';
import type { PaymentType } from '../models/PaymentType';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class CheckoutService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Submits the order for processing
     * Depending on the serverside configuration, this can trigger a number of operations (e.g. authorise payment, capture payment, start fulfilment, record transaction etc.). However this operation at a high level signifies the end of the customer's interaction with the order, and an acceptance of the order for processing by the system
     * @param basketId ID of the basket to submit
     * @returns any Order was successfully submitted for processing.
     * @throws ApiError
     */
    public submitOrder(
        basketId: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/v1/basket/{basketId}/submit',
            path: {
                'basketId': basketId,
            },
            errors: {
                404: `A basket with the specified ID was not found or the current user does not have access to it.`,
                409: `Order cannot be processed in its current state`,
            },
        });
    }

    /**
     * Updates the payment intent
     * Updates the payment intent on the order specified by the ID
     * @param basketId ID of the basket to retrieve
     * @param intentId ID of the intent
     * @param requestBody
     * @returns PaymentIntent Successfully modified line item
     * @returns any Unexpected error
     * @throws ApiError
     */
    public updatePaymentIntent(
        basketId: string,
        intentId: string,
        requestBody?: PaymentIntent,
    ): CancelablePromise<PaymentIntent | any> {
        return this.httpRequest.request({
            method: 'PATCH',
            url: '/v1/basket/{basketId}/paymentIntent/{intentId}',
            path: {
                'basketId': basketId,
                'intentId': intentId,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                404: `A basket with the specified ID was not found or the current user does not have access to it.`,
                409: `Payment cannot be modified at this time (due to the current state)`,
            },
        });
    }

    /**
     * Get payment intent by ID
     * Gets the payment intent attached to the order if present
     * @param basketId ID of the basket to retrieve
     * @param intentId The ID of the intent
     * @returns PaymentIntent Retrieved the intent from the order
     * @returns any Unexpected error
     * @throws ApiError
     */
    public getPaymentIntentById(
        basketId: string,
        intentId: string,
    ): CancelablePromise<PaymentIntent | any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/basket/{basketId}/paymentIntent/{intentId}',
            path: {
                'basketId': basketId,
                'intentId': intentId,
            },
            errors: {
                404: `The intent was not found`,
            },
        });
    }

    /**
     * Returns all the payment intents
     * Retrieves all the payment intents attached to the given order
     * @param basketId ID of the basket
     * @returns PaymentIntent Successfully modified line item
     * @returns any Unexpected error
     * @throws ApiError
     */
    public getAllPaymentIntents(
        basketId: string,
    ): CancelablePromise<Array<PaymentIntent> | any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/basket/{basketId}/paymentIntent',
            path: {
                'basketId': basketId,
            },
            errors: {
                404: `A basket with the specified ID was not found or the current user does not have access to it.`,
            },
        });
    }

    /**
     * Create payment intent and add it to the order
     * Creates a new payment intent with the backend and returns the newly created value
     * @param basketId ID of the basket to retrieve
     * @param paymentType The type of payment intent that should be created.
     * @param amount The amount of money that the intent should be created to capture. If this value is not supplied then the system will assume it should capture all remaining required balance for the order.
     * @returns PaymentIntent Successfully created a payment intent
     * @returns any Unexpected error
     * @throws ApiError
     */
    public addPaymentIntent(
        basketId: string,
        paymentType: PaymentType,
        amount?: number,
    ): CancelablePromise<PaymentIntent | any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/v1/basket/{basketId}/paymentIntent',
            path: {
                'basketId': basketId,
            },
            query: {
                'amount': amount,
                'paymentType': paymentType,
            },
            errors: {
                404: `A basket with the specified ID was not found or the current user does not have access to it.`,
                409: `A payment intent cannot be added to the order at this time (due to the current state of the order)`,
            },
        });
    }

    /**
     * Removes all current payments on the order
     * Removes all payments from the order that are not in a captured state.
     * @param basketId ID of the basket to retrieve
     * @returns any Unexpected error
     * @throws ApiError
     */
    public removeAllPayments(
        basketId: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/v1/basket/{basketId}/paymentIntent',
            path: {
                'basketId': basketId,
            },
            errors: {
                404: `A basket with the specified ID was not found or the current user does not have access to it.`,
                409: `Payments cannot be removed from the order at this time (due to the current state of the order)`,
            },
        });
    }

}
