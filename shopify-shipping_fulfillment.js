 module.exports = function (RED) {
  'use strict';

  function ShopifyShippingFulfillmentNode(n) {
    RED.nodes.createNode(this, n);
    this.auth = n.auth;
    this.resource = n.resource;
    this.method = n.method;
    this.fulfillmentOrderId = n.fulfillmentOrderId;
    this.carrierServiceId = n.carrierServiceId;
    this.lineItemsByFulfillmentOrder = n.lineItemsByFulfillmentOrder;
    this.fulfillmentId = n.fulfillmentId;
    //this.tracking_info = n.tracking_info;
    this.eventId = n.eventId;
    //this.fulfillment_hold = n.fulfillment_hold;
    //this.fulfillment_order = n.fulfillment_order;
    //this.new_fulfill_at = n.new_fulfill_at;
    this.fulfillmentServiceId = n.fulfillmentServiceId;
    //this.message = n.message,
    this.fulfillmentOrderIds = n.fulfillmentOrderIds,
    //this.notify_customer = n.notify_customer,
    //this.assignment_status = n.assignment_status,
    //this.location_ids = n.location_ids,
    //this.fulfillment_deadline = n.fulfillment_deadline,
    this.orderId = n.orderId,
    //this.scope = n.scope,
    this.dataJson = n.dataJson;
    this.config = RED.nodes.getNode(this.auth);

    if (this.config) {
      var node = this;

      node.on('input', function (msg) {

        let fulfillmentOrderId = msg.fulfillmentOrderId || node.fulfillmentOrderId;
        let carrierServiceId = msg.carrierServiceId || node.carrierServiceId;
        let lineItemsByFulfillmentOrder = msg.lineItemsByFulfillmentOrder || node.lineItemsByFulfillmentOrder;
        let fulfillmentId = msg.fulfillmentId || node.fulfillmentId;
        let eventId = msg.eventId || node.eventId;
        let fulfillmentServiceId = msg.fulfillmentServiceId || node.fulfillmentServiceId;
        let fulfillmentOrderIds = msg.fulfillmentOrderIds || node.fulfillmentOrderIds;
        let orderId = msg.orderId || node.orderId;
        let dataJson = msg.dataJson || node.dataJson || {};

        let inputParam = {
          fulfillmentOrderId,
          carrierServiceId,
          lineItemsByFulfillmentOrder,
          fulfillmentId,
          eventId,
          fulfillmentServiceId,
          fulfillmentOrderIds,
          orderId,
          dataJson
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

  RED.nodes.registerType('shopify-shipping_fulfillment', ShopifyShippingFulfillmentNode);
};
