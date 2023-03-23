/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { PersonalDetails } from './PersonalDetails';

export type User = {
    /**
     * unique id of the user
     */
    id?: string;
    /**
     * User's email address
     */
    email?: string;
    /**
     * registration date/time
     */
    registrationTime?: string;
    personalDetails?: PersonalDetails;
    /**
     * indicates whether the account is linked to valid login credentials or is anonymous
     */
    anonymous?: boolean;
    /**
     * Indicates that the email address has been verified for this customer
     */
    emailAddressVerified?: boolean;
    /**
     * image of the user (from the IDP)
     */
    picture?: string;
    /**
     * issuer of the token
     */
    issuer?: string;
};

