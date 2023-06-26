/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { BaseHttpRequest } from './core/BaseHttpRequest';
import type { OpenAPIConfig } from './core/OpenAPI';
import { FetchHttpRequest } from './core/FetchHttpRequest';

import { AdminService } from './services/AdminService';
import { CheckoutService } from './services/CheckoutService';
import { CollectionsService } from './services/CollectionsService';
import { ExtensionServiceService } from './services/ExtensionServiceService';
import { MenuService } from './services/MenuService';
import { OrderService } from './services/OrderService';
import { PagesService } from './services/PagesService';
import { PosService } from './services/PosService';
import { PricingService } from './services/PricingService';
import { ProductsService } from './services/ProductsService';
import { SiteService } from './services/SiteService';
import { UserService } from './services/UserService';

type HttpRequestConstructor = new (config: OpenAPIConfig) => BaseHttpRequest;

export class BadgerCommerceSDK {

    public readonly admin: AdminService;
    public readonly checkout: CheckoutService;
    public readonly collections: CollectionsService;
    public readonly extensionService: ExtensionServiceService;
    public readonly menu: MenuService;
    public readonly order: OrderService;
    public readonly pages: PagesService;
    public readonly pos: PosService;
    public readonly pricing: PricingService;
    public readonly products: ProductsService;
    public readonly site: SiteService;
    public readonly user: UserService;

    public readonly request: BaseHttpRequest;

    constructor(config?: Partial<OpenAPIConfig>, HttpRequest: HttpRequestConstructor = FetchHttpRequest) {
        this.request = new HttpRequest({
            BASE: config?.BASE ?? 'https://virtserver.swaggerhub.com/Kedos-Consulting-Ltd/badger-commerce-api/1.0.0',
            VERSION: config?.VERSION ?? '1.0.0',
            WITH_CREDENTIALS: config?.WITH_CREDENTIALS ?? false,
            CREDENTIALS: config?.CREDENTIALS ?? 'include',
            TOKEN: config?.TOKEN,
            USERNAME: config?.USERNAME,
            PASSWORD: config?.PASSWORD,
            HEADERS: config?.HEADERS,
            ENCODE_PATH: config?.ENCODE_PATH,
        });

        this.admin = new AdminService(this.request);
        this.checkout = new CheckoutService(this.request);
        this.collections = new CollectionsService(this.request);
        this.extensionService = new ExtensionServiceService(this.request);
        this.menu = new MenuService(this.request);
        this.order = new OrderService(this.request);
        this.pages = new PagesService(this.request);
        this.pos = new PosService(this.request);
        this.pricing = new PricingService(this.request);
        this.products = new ProductsService(this.request);
        this.site = new SiteService(this.request);
        this.user = new UserService(this.request);
    }
}

