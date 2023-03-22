/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type SiteContext = {
    /**
     * The name of the site
     */
    siteName?: string;
    /**
     * Internal ID of the site
     */
    siteId?: string;
    /**
     * The primary domain for the site
     */
    domainURL?: string;
    /**
     * Other domain names that the site will respond to
     */
    otherDomains?: Array<string>;
    /**
     * True if the site should not redirect requests matched on other domains to the primary domain.  Should usually be false as it's bad for SEO to serve the same content on multiple URLs
     */
    preventRedirectOfOtherDomains?: boolean;
    /**
     * ID of the current live catalogue
     */
    catalogueId?: string;
    /**
     * The ID of the previously live catalouge
     */
    lastLiveCatalougeId?: string;
    /**
     * the default locale the site should use
     */
    defaultLocale?: string;
    /**
     * The URL prefix that the media items within the catalogue are located at (should be prefixed on the URLs supplied in the other APIs)
     */
    mediaPath?: string;
    /**
     * The URL to the main logo to be used with the theme
     */
    logoURL?: string;
    /**
     * Map of the social accounts that belong to the site
     */
    socialAccounts?: Record<string, string>;
};

