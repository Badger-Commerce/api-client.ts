/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { RegisteredUser } from './RegisteredUser';

export type User = ({
    /**
     * unique id of the user
     */
    id?: string;
    /**
     * indicates whether the account is linked to valid login credentials or is anonymous
     */
    anonymous?: boolean;
} & RegisteredUser);

