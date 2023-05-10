

# Badger Commerce Typescript API Client

The Badger Commerce Typescript API Client is a library that allows you to easily integrate with the headless commerce platform Badger Commerce using TypeScript. It uses the Fetch API and is generated with the openapi-typescript-codegen code generator. The API specification used is available at https://app.swaggerhub.com/apis-docs/Kedos-Consulting-Ltd/badger-commerce-api.

## Installation

To use the Badger Commerce Typescript API Client in your project, you can install it from npm:

```bash
npm install --save badger-commerce-typescript-api-client
```

## Usage

Before using the Badger Commerce Typescript API Client, you will need to obtain an API key from Badger Commerce. Once you have your API key, you can use it to create an instance of the client:

```typescript
import { BadgerCommerceSDK } from 'badger-commerce-typescript-api-client';

const apiKey = 'your_api_key_here';
const client = new BadgerCommerceSDK(apiKey);
```

The client exposes methods for each endpoint defined in the API specification. For example, to retrieve a list of products, you can use the `getProducts` method:

```typescript
const products = await client.getProducts();
console.log(products);
```

The response will be a JavaScript object representing the response from the Badger Commerce API.

If you need to pass parameters to an endpoint, you can pass them as an object to the method:

```typescript
const params = { limit: 10 };
const products = await client.getProducts(params);
console.log(products);
```

You can find more information about the available methods and parameters in the [API specification](https://app.swaggerhub.com/apis-docs/Kedos-Consulting-Ltd/badger-commerce-api).

## Contributing

If you find a bug or have a feature request, please [create an issue](https://github.com/example/badger-commerce-typescript-api-client/issues/new). Pull requests are welcome!

## License

The Badger Commerce Typescript API Client is released under the [MIT License](https://opensource.org/licenses/MIT).
