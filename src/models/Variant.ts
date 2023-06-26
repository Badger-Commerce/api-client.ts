/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Product } from './Product';
import type { VariantAttributeSelection } from './VariantAttributeSelection';

export type Variant = (Product & {
    variantGroupValuesAndCode?: Array<VariantAttributeSelection>;
});

