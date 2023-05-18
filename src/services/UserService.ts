/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { AnonymousUser } from '../models/AnonymousUser';
import type { RegisteredUser } from '../models/RegisteredUser';
import type { User } from '../models/User';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class UserService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Create a new user in the Commerce platform
     * Creates a new user in the Badger Commerce Datastore
     * @param requestBody
     * @returns User A User was created
     * @returns any Unexpected error
     * @throws ApiError
     */
    public createUser(
        requestBody?: RegisteredUser,
    ): CancelablePromise<User | any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/v1/user',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `The specified user data is invalid`,
                409: `A user already exists with these details`,
            },
        });
    }

    /**
     * Create a new anonymous user in the Commerce platform
     * Creates a new anonymous user in the Badger Commerce Datastore
     * @param requestBody
     * @returns User A User has been created
     * @returns any Unexpected error
     * @throws ApiError
     */
    public createAnonymousUser(
        requestBody?: AnonymousUser,
    ): CancelablePromise<User | any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/v1/user/anonymous',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `The specified user data is invalid`,
                409: `A user already exists with these details`,
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
            url: '/v1/user/id',
            errors: {
                400: `The user header was not passed`,
                409: `The user could not be found`,
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
            url: '/v1/user/id',
            errors: {
                400: `The specified user data is invalid`,
            },
        });
    }

    /**
     * Merges the user
     * Merges another user (based on the merge token passed in) with the currently specified registered user, and de-activates the other user within the badger data store
     * @param childUserId The user ID of the account to be subsumed into the main user.
     * @returns any Users successfully merged
     * @throws ApiError
     */
    public mergeUsers(
        childUserId: string,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'PUT',
            url: '/v1/user/merge',
            query: {
                'childUserId': childUserId,
            },
            errors: {
                400: `Bad Merge Token`,
            },
        });
    }

}
