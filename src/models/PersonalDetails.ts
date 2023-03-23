/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type PersonalDetails = {
    /**
     * Honourary prefix
     */
    title?: string;
    /**
     * First Name
     */
    firstName?: string;
    /**
     * Last name/Surname
     */
    lastName?: string;
    /**
     * User's date of birtth
     */
    dateOfBirth?: string;
    /**
     * Additional phone numbers with identifying key
     */
    otherPhoneNumbers?: any;
    /**
     * Customer's mobile phone number
     */
    mobilePhoneNumber?: string;
    /**
     * Customer's email address
     */
    emailAddress?: string;
    /**
     * ID of the delivery address that is set as the default for the customer
     */
    defaultDeliveryAddressId?: string;
    /**
     * ID of the billing address that is set as the default for the customer
     */
    defaultBillingAddressId?: string;
};

