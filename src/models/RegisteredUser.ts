/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AnonymousUser } from './AnonymousUser';

export type RegisteredUser = (AnonymousUser & {
    /**
     * User's email address
     */
    email?: string;
    /**
     * registration date/time
     */
    registrationTime?: string;
    /**
     * Indicates that the email address has been verified for this customer
     */
    emailAddressVerified?: boolean;
    /**
     * image of the user (from the IDP)
     */
    picture?: string;
});

