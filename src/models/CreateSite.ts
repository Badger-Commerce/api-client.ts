/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

/**
 * Request to create a new badger site
 */
export type CreateSite = {
    /**
     * The unique identifier for the site within the Badger backend.
     */
    siteId?: string;
    /**
     * The human readable name for the new site
     */
    siteName?: string;
    /**
     * The ISO code for the default base locale
     */
    defaultLocale?: string;
    /**
     * Email address of the admin user so that they can access the old admin backend
     */
    adminEmail?: string;
};

