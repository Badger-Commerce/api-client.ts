/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Price } from './Price';
import type { Product } from './Product';

export type LineItem = {
    /**
     * internal ID of the line item (used to allow modifications)
     */
    id?: string;
    /**
     * SKU ID of the Product represented by the line item.
     */
    productSkuId?: string;
    /**
     * optional SKU ID of the variant of the product that the line item represents
     */
    variantSkuId?: string;
    /**
     * single item price of the product represented by this line item
     */
    itemPrice?: number;
    price?: Price;
    /**
     * number of items in the line item
     */
    quantity?: number;
    /**
     * indicates that the line item requires shipment for fulfilment
     */
    requiresShipment?: boolean;
    /**
     * TBC
     */
    shippingCategoryCode?: number;
    /**
     * various fulfilment attributes as required for each product type
     */
    attributes?: Record<string, string>;
    /**
     * set of productTypeDescriptors that apply to this line item
     */
    productTypeDecorators?: Array<string>;
    productDetails?: Product;
};

