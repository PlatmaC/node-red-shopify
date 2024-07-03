 module.exports = function (RED) {
  'use strict';

  function ShopifyOnlineStoreNode(n) {
    RED.nodes.createNode(this, n);
    this.auth = n.auth;
    this.resource = n.resource;
    this.method = n.method;
    this.articleId = n.articleId;
    this.blogId = n.blogId;
    this.themeId = n.themeId;
    this.commentId = n.commentId;
    this.pageId = n.pageId;
    this.dataJson = n.dataJson;
    this.config = RED.nodes.getNode(this.auth);

    if (this.config) {
      var node = this;

      node.on('input', function (msg) {
        let articleId = msg.articleId || node.articleId;
        let blogId = msg.blogId || node.blogId;
        let themeId = msg.themeId || node.themeId;
        let commentId = msg.commentId || node.commentId;
        let pageId = msg.pageId || node.pageId;
        let dataJson = {};
        
        dataJson = msg.dataJson || node.dataJson || dataJson;

        let inputParam = {
          articleId: articleId,
          blogId: blogId,
          themeId: themeId,
          commentId: commentId,
          pageId: pageId,
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

  RED.nodes.registerType('shopify-online_store', ShopifyOnlineStoreNode);
};
