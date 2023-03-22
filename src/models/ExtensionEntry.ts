/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { ExtensionPayload } from './ExtensionPayload';

export type ExtensionEntry = {
    /**
     * The name of the slot on the page where this collection of extensions should live
     */
    pageSlotName: string;
    payloads?: Array<ExtensionPayload>;
};

