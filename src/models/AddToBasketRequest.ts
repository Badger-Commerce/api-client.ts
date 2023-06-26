/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type AddToBasketRequest = {
    /**
     * skuId of the item to add to the basket
     */
    skuId: string;
    /**
     * skuId of the variant to add.
     */
    variantSkuId?: string;
    /**
     * number of items to add to the basket
     */
    quantity: number;
};

