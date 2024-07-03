/**
 * Copyright 2018 Atsushi Kojo.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 **/

module.exports = function (RED) {
  'use strict';

  const Shopify = require('shopify-api-node');

  function ShoipfyAuthNode(n) {
    RED.nodes.createNode(this, n);
    var node = this;
    var credentials = RED.nodes.getCredentials(n.id);
    credentials['shopName'] = n.shopName;
    credentials['appType'] = n.appType;

    this.callShopifyAPI = function(resource, method, inputParam, callback) {
      createInstance(credentials, function(err, shopify){
        if (err) {
          return callback(err);
        }

        const args = createRequestParam(resource, method, inputParam);
        const isPaging = ShopifyAPIRequests[resource][method].paging;

        if (isPaging) {
          (async () => {
            let params = { limit: 50 };
            let aryResult = [];

            do {
              const results = await shopify[resource][method](...args, params);

              aryResult = aryResult.concat(results);

              params = results.nextPageParameters;
            } while (params !== undefined);

            callback('', aryResult);

          })().catch(error => {
            callback(error);
          });

        } else {
          shopify[resource][method](...args)
            .then((result) => {
              callback('', result);
            })
            .catch((error) => {
              callback(error);
            });
        }
      });
    }
  }

  RED.nodes.registerType('shopify-auth', ShoipfyAuthNode, {
    credentials: {
      apiKey: { type: 'password' },
      password: { type: 'password' },
      accessToken: { type: 'password' },
    },
  });

  function createInstance(credentials, callback) {
    let instance;

    if (credentials.appType === 'private') {
      if (!credentials.apiKey || !credentials.password) {
        return callback('Missing credentials');

      } else {
        instance = new Shopify({
          shopName: credentials.shopName,
          apiKey: credentials.apiKey,
          password: credentials.password,
        });
      }
    } else {
      if (!credentials.accessToken) {
        return callback('Missing credentials');

      } else {
        instance = new Shopify({
          shopName: credentials.shopName,
          accessToken: credentials.accessToken,
        });
      }
    }

    return callback('', instance);
  }

  function createRequestParam(resource, method, input) {
    let params = ShopifyAPIRequests[resource][method].params;

    const requestParam = params.map(param => {
      let val = input[param];
      if (param === 'dataJson' && typeof val === 'string') {
        return JSON.parse(val);
      } else {
        return val;
      }
    });

    return requestParam;
  }


  const ShopifyAPIRequests = {
    "blog": {
      "count": { params: ["dataJson"], paging: false },
      "list": { params: ["dataJson"], paging: true },
      "get": { params: ["blogId", "dataJson"], paging: false },
      "create": { params: ["dataJson"], paging: false },
      "update": { params: ["blogId", "dataJson"], paging: false },
      "delete": { params: ["blogId"], paging: false }
    },
    "article": {
      "authors": { params: [], paging: false },
      "count": { params: ["blogId", "dataJson"], paging: false },
      "tags": { params: ["blogId", "dataJson"], paging: false },
      "list": { params: ["blogId", "dataJson"], paging: true },
      "get": { params: ["articleId", "blogId", "dataJson"], paging: false },
      "create": { params: ["blogId", "dataJson"], paging: false }, 
      "update": { params: ["blogId", "articleId", "dataJson"], paging: false },
      "delete": { params: ["blogId", "articleId"], paging: false }
    },
    "comment": {
      "approve": { params: ["commentId"], paging: false },
      "count": { params: ["blogId", "articleId", "dataJson"], paging: false }, 
      "create": { params: ["blogId", "articleId", "dataJson"], paging: false }, 
      "remove": { params: ["commentId"], paging: false }, 
      "get": { params: ["commentId", "dataJson"], paging: false }, 
      "list": { params: ["dataJson"], paging: true },
      "restore": { params: ["commentId"], paging: false }, 
      "update": { params: ["commentId", "dataJson"], paging: false },
      "notSpam": { params: ["commentId"], paging: false },
      "spam": { params: ["commentId"], paging: false },
    },
    "page": {
      "count": { params: ["dataJson"], paging: false },
      "list": { params: ["dataJson"], paging: true },
      "get": { params: ["pageId", "dataJson"], paging: false },
      "create": { params: ["dataJson"], paging: false },
      "update": { params: ["pageId", "dataJson"], paging: false },
      "delete": { params: ["pageId"], paging: false }
    },
    "theme": {
      "list": { params: ["dataJson"], paging: true },
      "get": { params: ["themeId", "dataJson"], paging: false },
      "create": { params: ["dataJson"], paging: false },  
      "update": { params: ["themeId", "dataJson"], paging: false },
      "delete": { params: ["themeId"], paging: false }
    },
    "customer": {
      "list": { params: [], paging: true },
      "get": { params: ["customerId"], paging: false },
      "create": { params: ["dataJson"], paging: false },
      "update": { params: ["customerId", "dataJson"], paging: false },
      "delete": { params: ["customerId"], paging: false }
    },
    "customerAddress": {
      "list": { params: ["customerId"], paging: true },
      "get": { params: ["customerId", "addressId"], paging: false },
      "create": { params: ["customerId", "dataJson"], paging: false },
      "update": { params: ["customerId", "addressId", "dataJson"], paging: false },
      "delete": { params: ["customerId", "addressId"], paging: false }
    },
    "product": {
      "list": { params: [], paging: true },
      "get": { params: ["productId"], paging: false },
      "create": { params: ["dataJson"], paging: false },
      "update": { params: ["productId", "dataJson"], paging: false },
      "delete": { params: ["productId"], paging: false }
    },
    "productVariant": {
      "list": { params: ["productId"], paging: true },
      "get": { params: ["variantId"], paging: false },
      "create": { params: ["productId", "dataJson"], paging: false },
      "update": { params: ["variantId", "dataJson"], paging: false },
      "delete": { params: ["productId", "variantId"], paging: false }
    },
    "draftOrder": {
      "list": { params: [], paging: true },
      "get": { params: ["draftOrderId"], paging: false },
      "create": { params: ["dataJson"], paging: false },
      "update": { params: ["draftOrderId", "dataJson"], paging: false },
      "delete": { params: ["draftOrderId"], paging: false }
    },
    "order": {
      "list": { params: [], paging: true },
      "get": { params: ["orderId"], paging: false },
      "create": { params: ["dataJson"], paging: false },
      "update": { params: ["orderId", "dataJson"], paging: false },
      "delete": { params: ["orderId"], paging: false }
    },
    "inventoryItem": {
      "list": { params: ["dataJson"], paging: true },
      "get": { params: ["inventoryItemId"], paging: false },
      "update": { params: ["inventoryItemId", "dataJson"], paging: false }
    },
    "inventoryLevel": {
      "list": { params: ["dataJson"], paging: true },
      "set": { params: ["dataJson"], paging: false },     // "inventoryItemId", "locationId", "available"
      "adjust": { params: ["dataJson"], paging: false },  // "inventoryItemId", "locationId", "available"
      "delete": { params: ["dataJson"], paging: false }   // "inventoryItemId", "locationId"
    },
    "location": {
      "list": { params: [], paging: true },
      "get": { params: ["locationId"], paging: false },
      "inventoryLevels": { params: ["locationId"], paging: true }
    }
  };
};
