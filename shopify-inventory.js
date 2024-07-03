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

  function ShopifyInventoryNode(n) {
    RED.nodes.createNode(this, n);
    this.auth = n.auth;
    this.resource = n.resource;
    this.method = n.method;
    this.inventoryItemId = n.inventoryItemId;
    this.locationId = n.locationId;
    this.available = n.available;
    this.dataJson = n.dataJson;
    this.config = RED.nodes.getNode(this.auth);

    if (this.config) {
      var node = this;

      node.on('input', function (msg) {
        let inventoryItemId = msg.inventoryItemId || node.inventoryItemId;
        let locationId = msg.locationId || node.locationId;
        let available = msg.available || node.available;
        let dataJson = {};

        if (node.resource === 'inventoryItem' && node.method === 'list') {
          node.dataJson = '';
          dataJson = {
            "ids": inventoryItemId
          }
        } else if (node.resource === 'inventoryLevel') {
          node.dataJson = '';
          switch(node.method) {
            case 'list':
              dataJson = {
                "inventory_item_ids": inventoryItemId,
                "location_ids": locationId
              };
              break;
            case 'set':
              dataJson = {
                "inventory_item_id": inventoryItemId,
                "location_id": locationId,
                "available": available
              };
              break;
            case 'adjust':
              dataJson = {
                "inventory_item_id": inventoryItemId,
                "location_id": locationId,
                "available_adjustment": available
              };
              break;
            case 'delete':
              dataJson = {
                "inventory_item_id": inventoryItemId,
                "location_id": locationId
              };
              break;
            default:
              break;
          }
        }
        dataJson = msg.dataJson || node.dataJson || dataJson;

        let inputParam = {
          inventoryItemId: inventoryItemId,
          locationId: locationId,
          available: available,
          dataJson: dataJson
        }

        this.config.callShopifyAPI(node.resource, node.method, inputParam,
          function(err, result) {
            if (err) {
              node.error(err.toString(), msg);
              node.status({ fill: 'red', shape: 'ring', text: 'failed' });
              return;

            } else {
              node.status({});
            }
            msg.payload = result;
            node.send(msg);
        });
      });

    } else {
      this.error('missing shopify configuration');
    }
  }

  RED.nodes.registerType('shopify-inventory', ShopifyInventoryNode);
};
