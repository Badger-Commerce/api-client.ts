/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { User } from '../models/User';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class UserService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Create a new user
     * Creates a new user in the Badger Datastore
     * @returns any A user was created
     * @throws ApiError
     */
    public createUser(): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/v1/user',
            errors: {
                400: `The specified user data is invalid`,
            },
        });
    }

    /**
     * Remove a user
     * Removes the current users details from the Badger Datastore (basically unregister/forget).
     * @returns any user was removed
     * @throws ApiError
     */
    public deleteUser(): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'DELETE',
            url: '/v1/user',
            errors: {
                400: `The specified user data is invalid`,
            },
        });
    }

    /**
     * Get user
     * Retrieve the user data held in Badger about the logged in customer. The user is resolved from the JWT token passed into the call. Providing you have a token you can expect this to always return a user, whether anonymous or not.
     * @returns User A User has been found
     * @returns any Unexpected error
     * @throws ApiError
     */
    public findUser(): CancelablePromise<User | any> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/user',
            errors: {
                400: `The specified user data is invalid`,
            },
        });
    }

    /**
     * Create a secure merge token
     * Creates a token for a user that can be used to merge this user with another
     * @returns string A merge token was created and returned
     * @returns any Unexpected error
     * @throws ApiError
     */
    public createMergeToken(): CancelablePromise<string | any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/v1/user/merge/token',
        });
    }

    /**
     * Merges the user
     * Merges another user (based on the merge token passed in) with the currently authenticated user, and de-activates the other user within the badger data store
     * @param mergeToken
     * @returns any Users successfully merged
     * @throws ApiError
     */
    public mergeUsers(
        mergeToken: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/v1/user/merge',
            query: {
                'mergeToken': mergeToken,
            },
            errors: {
                400: `Bad Merge Token`,
            },
        });
    }

}
