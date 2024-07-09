Fork of the node-red-contrib-shopify package with added more API ends from ShopifyAPI
[node-red-contrib-shopify repository](https://www.npmjs.com/package/node-red-contrib-shopify)

## Features
Perform many usefull actions on your Shopify store via Node-RED, such as Blogs and articles editing, moderation comments, review and change in orders and customer accounts, changing the store assortment and availability.

## Use Cases
 The node-red-contrib-shopify node for Node-RED can be used to integrate with the Shopify API, allowing you to automate a variety of tasks in your online store. Here are some use cases for this node: 

 **1. Order Automation:** Use this node to automatically create, update, or delete orders in your Shopify store based on incoming data from other systems or external triggers. 

 **2. Inventory Management:** Automate the process of updating stock levels, for example, by synchronizing inventory with other platforms or updating stock levels in real time after products are sold. 

 **3. Customer Interaction:** Use the node to automatically send customized messages to customers, such as thank-you emails after a purchase or notifications about special offers and promotions. 

 **4. Feedback Processing:** Automate the collection and analysis of customer feedback, organizing responses to improve products and services. 

 **5. Reporting and Analytics:** Easily integrate Shopify data with other analytics tools to create sales reports, analyze purchasing trends, and measure the effectiveness of marketing campaigns. 

 **6. Synchronization with Other Platforms:** Integrate your Shopify store with other e-commerce platforms, ERP systems, or CRMs to synchronize data and improve business management. These examples demonstrate how the node-red-contrib-shopify node can be used to automate processes and enhance customer interactions in an online store.




## Install
@platmac/node-red-shopify can be install using the node-red editor's pallete or by running npm in the console:

``` bash
npm install @platmac/node-red-shopify
```

Restart your Node-RED instance, the shopify node appears in the palette and ready for use.

     Setup  Іhopify API connection


## List nodes

Input parametrs:

 - **articleId** - id of an article on which you want to perform actions;

 - **blogId** - id of a blog on which you want to perform actions;

 - **themeId** - id of a theme on which you want to perform actions;

 - **commentId** - id of a comment on which you want to perform actions;

 - **pageId** - id of a page on which you want to perform actions;

 - **dataJson** - additional field for all optinal fields, list of which you can see at [Shopidy REST Admin API reference](https://shopify.dev/api/admin-rest);

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

### shopify-online-store node

The shopify-customers node performs the following operations on the shop's customer information.

- **Article**
  - **List** - Retrieves a list of articles.
  - **Get** - Retrieves a single article.
  - **Create** - Creates an article.
  - **Update** - Updates an article.
  - **Delete** - Removes an article.
  - **Tage** - Retrieves a list of tags from articles.
  - **Author** -  Retrieves a list of authors from articles.
  - **Count** - Counts an articles.

- **Blog**
  - **List** - Retrieves a list of blogs.
  - **Get** - Retrieves a single blog.
  - **Create** - Creates a blog.
  - **Update** - Updates a blog.
  - **Delete** - Removes a blog.
  - **Count** - Counts blogs.

- **Comment**
  - **List** - Retrieves a list of comments.
  - **Get** - Retrieves a single comment.
  - **Create** - Creates a comment.
  - **Update** - Updates a comment.
  - **Remove** - Removes a comment.
  - **Approve** - Approves a comment.
  - **Count** - Counts comments.
  - **Not Spam** - Mark comment as not spam.
  - **Spam** - Mark comment as spam.
  - **Restore** - Restores a comment.

- **Page**
  - **List** - Retrieves a list of pages.
  - **Get** - Retrieves a single page.
  - **Create** - Creates a page.
  - **Update** - Updates a page.
  - **Delete** - Removes a page.
  - **Count** - Counts pages.

- **Theme**
  - **List** - Retrieves a list of themes.
  - **Get** - Retrieves a single theme.
  - **Create** - Creates a theme.
  - **Update** - Updates a theme.
  - **Delete** - Removes a theme.

**Note**： For more information about parametrs inside **"dataJson"**, see [Shopify REST Admin API reference](https://shopify.dev/api/admin-rest).


