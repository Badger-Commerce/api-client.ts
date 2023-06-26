/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type ExtensionEntry = {
    /**
     * The unique identifier of this extension within the page's context
     */
    id?: string;
    /**
     * The name of the extension that should be used to render this page
     */
    extensionName?: string;
    /**
     * The slot on the page that this extension should be included
     */
    pageLocation?: string;
    /**
     * An integer based index to indicate the relative ordering of any components within a given slot on the page. A large number means higher up in the list.
     */
    displayOrder?: number;
    configurationProperties?: any;
    /**
     * Used for generating hierarchies within a page, for example, a columns component, which would then have two slots configured within it, e.g. col1 and col2, which the childrenExtensions would refer to.
     */
    childExtensions?: Array<ExtensionEntry>;
};

