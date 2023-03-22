/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { MeasurementType } from './MeasurementType';

export type Dimension = {
    /**
     * Length in cm in the x dimension
     */
    'x'?: number;
    /**
     * Length in cm in the y dimension
     */
    'y'?: number;
    /**
     * Length in cm in the z dimension
     */
    'z'?: number;
    measurementType?: MeasurementType;
};

