Fork of the node-red-contrib-shopify package with added more API ends from ShopifyAPI
[node-red-contrib-shopify repository](https://www.npmjs.com/package/node-red-contrib-shopify)

node-red-contrib-shopify

========================

[**Japanese**](./README_ja.md)

A collection of <a href="http://nodered.org" target="_new">Node-RED</a> nodes for <a href="https://shopify.dev/api/admin-rest" target="_new">Shopify Admin API / REST</a>.

[![NPM](https://nodei.co/npm/node-red-contrib-shopify.png?downloads=true)](https://nodei.co/npm/node-red-contrib-shopify/)


Pre-requisites
-------

The node-red-contrib-shopify requires <a href="http://nodered.org" target="_new">Node-RED</a> to be installed.


Install
-------

Run the following command in the root directory of your Node-RED install.

    npm install node-red-contrib-shopify

Restart your Node-RED instance, the shopify node appears in the palette and ready for use.

Overview
-------

node-red-contrib-shopify contains the following modules.

### Authenticate

Authenticate the Shopify Admin API. Select the type of application in `App Type` and enter the required information.

- **Private apps** - Authenticate using `API Key` and `password`.
- **Custom apps** - Authenticate using  `AccessToken`.

### shopify-customers node

The shopify-customers node performs the following operations on the shop's customer information.

- **Customer**
  - **List** - Retrieves a list of customers.
  - **Get** - Retrieves a single customer.
  - **Create** - Creates a customer.
  - **Update** - Updates a customer.
  - **Delete** - Removes a customer.

- **Customer Address**
  - **List** - Retrieves a list of addresses for a customer.
  - **Get** - Retrieves details for a single customer address.
  - **Create** - Creates a new address for a customer.
  - **Update** - Updates an existing customer address.
  - **Delete** - Removes an address from a customer’s address list.

### shopify-products node

The shopify-products node performs the following operations on the shop's product information.

- **Product**
  - **List** - Retrieve a list of products.
  - **Get** - Retrieve a single product.
  - **Create** - Create a new product.
  - **Update** - Updates a product
  - **Delete** - Delete a product.

- **Product Variant**
  - **List** - Retrieves a list of product variants.
  - **Get** - Receive a single Product Variant.
  - **Create** - Create a new Product Variant.
  - **Update** - Modify an existing Product Variant.
  - **Delete** - Remove an existing Product Variant.

### shopify-orders node

The shopify-orders node performs the following operations on the shop's order information.

- **DraftOrder**
  - **List** - Retrieves a list of draft orders.
  - **Get** - Receive a single DraftOrder.
  - **Create** - Create a new DraftOrder.
  - **Update** - Modify an existing DraftOrder.
  - **Delete** - Remove an existing DraftOrder.

- **Order**
  - **List** - Retrieve a list of orders.
  - **Get** - Retrieve a specific order.
  - **Create** - Create an order.
  - **Update** - Update an order.
  - **Delete** - Delete an order.

### shopify-inventory node

The shopify-inventory node performs the following operations on the shop's inventory information.

- **InventoryItem**
  - **List** - Retrieves a list of inventory items.
  - **Get** - Retrieves a single inventory item by ID.
  - **Update** - Updates an existing inventory item.

- **InventoryLevel**
  - **List** - Retrieves a list of inventory levels.
  - **Set** - Sets the inventory level for an inventory item at a location.
  - **Adjust** - Adjusts the inventory level of an inventory item at a location.
  - **Delete** - Deletes an inventory level from a location.

- **Location**
  - **List** - Retrieve a list of locations.
  - **Get** - Retrieve a single location by its ID.
  - **inventoryLevels** - Retrieve a list of inventory levels for a location.

**Note**： For more information, see [REST Admin API reference](https://shopify.dev/api/admin-rest).


Acknowledgements
-------

The node-red-contrib-shopify uses the following open source software:

- [shopify-api-node](https://github.com/MONEI/Shopify-api-node): Shopify API bindings for Node.js.


License
-------

See [license](https://github.com/joeartsea/node-red-contrib-shopify/blob/master/LICENSE) (Apache License Version 2.0).


Contributing
-------

Both submitting issues to [GitHub issues](https://github.com/joeartsea/node-red-contrib-shopify/issues) and Pull requests are welcome to contribute.


Developers
-------

If the developer wants to modify the source of node-red-contrib-shopify, run the following code to create a clone.

```
cd ~\.node-red\node_modules
git clone https://github.com/joeartsea/node-red-contrib-shopify.git
cd node-red-contrib-shopify
npm install
```
