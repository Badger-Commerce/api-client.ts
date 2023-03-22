/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Dimension } from './Dimension';
import type { ExtensionEntry } from './ExtensionEntry';
import type { MediaItem } from './MediaItem';
import type { TaxCodeLocales } from './TaxCodeLocales';
import type { Weight } from './Weight';

export type Product = {
    /**
     * unique id of the product
     */
    id?: string;
    /**
     * the ID of the catalogue
     */
    catalogueId?: string;
    /**
     * SKU ID of the product
     */
    skuId?: string;
    /**
     * The display name of the product
     */
    name?: string;
    /**
     * Long description of the product
     */
    description?: string;
    /**
     * A shortened description of the product
     */
    miniDescription?: string;
    /**
     * Media items associated with the product
     */
    media?: Array<MediaItem>;
    /**
     * Base price of the product in smallest denomination (e.g. pence/cent)
     */
    basePrice?: number;
    /**
     * Base comparison price for slash-pricing in smallest denomination
     */
    comparePrice?: number;
    /**
     * Name of the brand that makes the product - may be displayed on the lising and product pages.
     */
    manufacturer?: string;
    /**
     * The use friendly, unique, name for the product, usually used in the URL of the product.
     */
    seoName?: string;
    /**
     * The review score for the product
     */
    rating?: number;
    /**
     * IDs of the parent collections that this product belongs to
     */
    collectionIDs?: Array<string>;
    /**
     * Product attribute map
     */
    attributes?: any;
    /**
     * Date the item was publshed onto the live site
     */
    publishedDate?: string;
    /**
     * Date the item was created
     */
    createdDate?: string;
    /**
     * Flag indicating whether the product requires shipping
     */
    shippingRequired?: boolean;
    /**
     * A set of unique type descriptors identifying the capabilities/requirements for the product
     */
    typeDecorators?: Array<string>;
    /**
     * indicates that this is not a product that can be purchased, instead there are variants beneath this which must be purchased.
     */
    hasVariants?: boolean;
    /**
     * Optional data associated with the product for inclusion on the page.
     */
    extensionData?: Array<ExtensionEntry>;
    /**
     * Mapping of tax codes to locales that apply to this product
     */
    taxCodes?: Array<TaxCodeLocales>;
    /**
     * Weight measurements for the product
     */
    weights?: Array<Weight>;
    /**
     * Dimension measurements for the product
     */
    dimensions?: Array<Dimension>;
    /**
     * UPC of the product
     */
    upc?: string;
};

