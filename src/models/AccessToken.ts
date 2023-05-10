/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type AccessToken = {
    /**
     * The token value that should be sent in subsequent requests
     */
    value?: string;
    /**
     * ID of the token within the system
     */
    id?: string;
    /**
     * The roles that are assigned to the token
     */
    roles?: Array<string>;
};

