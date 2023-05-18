/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { PersonalDetails } from './PersonalDetails';

export type AnonymousUser = {
    /**
     * The frontend identifier that uniquely identifies the user in the Badger Commerce platform. This is the value that will be passed in to the subsequent calls
     */
    frontEndId?: string;
    personalDetails?: PersonalDetails;
};

