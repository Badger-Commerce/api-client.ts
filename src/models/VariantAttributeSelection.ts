/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { VariantAttributeValue } from './VariantAttributeValue';

/**
 * The selected variant attribute for this particular variant. E.g. if the code is size, then the value might be 'small'
 */
export type VariantAttributeSelection = {
    /**
     * Code representing the variant group
     */
    code?: string;
    value?: VariantAttributeValue;
};

