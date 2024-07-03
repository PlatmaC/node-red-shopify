node-red-contrib-shopify
========================
このモジュールは、<a href="https://shopify.dev/api/admin-rest" target="_new">Shopify Admin API / REST</a> の<a href="http://nodered.org" target="_new">Node-RED</a> ノードコレクションです。

[![NPM](https://nodei.co/npm/node-red-contrib-shopify.png?downloads=true)](https://nodei.co/npm/node-red-contrib-shopify/)

前提条件
-------

node-red-contrib-shopifyは、<a href="http://nodered.org" target="_new">Node-RED</a>のインストールが必要です。


インストール
-------

Node-REDをインストールしたルートディレクトリで以下のコマンドを実行します。

    npm install node-red-contrib-shopify

Node-REDインスタンスを再起動すると、パレットにshopifyノードが表示されて使用可能になります。

概要
-------

node-red-contrib-shopifyは、次のモジュールを含んでいます。

### 認証

Shopify Admin API の認証を行います。`App Type` でアプリの種類を選択して必要な情報を入力します。

- **Private apps** - `API Key` および `password` を使用して認証します。
- **Custom apps** - `AccessToken` を使用して認証します。

### shopify-customers ノード

shopify-customers ノードでは、ストアの顧客情報に対して次の処理を実行します。

- **Customer**
  - **List** - 顧客のリストを取得します。
  - **Get** - 指定した1人の顧客を取得します。
  - **Create** - 新しい顧客を作成します。
  - **Update** - 指定した顧客を更新します。
  - **Delete** - 指定した顧客を削除します。

- **Customer Address**
  - **List** - 顧客の住所リストを取得します。
  - **Get** - 指定した1つの顧客住所を取得します。
  - **Create** - 顧客の新しい住所を作成します。
  - **Update** - 指定した顧客住所を更新します。
  - **Delete** - 指定した顧客住所を削除します。

### shopify-products ノード

shopify-products ノードでは、ストアの商品情報に対して次の処理を実行します。

- **Product**
  - **List** - 商品のリストを取得します。
  - **Get** - 指定した1つの商品を取得します。
  - **Create** - 新しい商品を作成します。
  - **Update** - 指定した商品を更新します。
  - **Delete** - 指定した商品を削除します。

- **Product Variant**
  - **List** - 商品バリエーションのリストを取得します。
  - **Get** - 指定した1つの商品バリエーションを取得します。
  - **Create** - 商品の新しいバリエーションを作成します。
  - **Update** - 指定した商品バリエーションを更新します。
  - **Delete** - 指定した商品バリエーションを削除します。

### shopify-orders ノード

shopify-orders ノードでは、ストアの注文情報に対して次の処理を実行します。

- **DraftOrder**
  - **List** - 下書き注文のリストを取得します。
  - **Get** - 指定した1つの下書き注文を取得します。
  - **Create** - 新しい下書き注文を作成します。
  - **Update** - 指定した下書き注文を更新します。
  - **Delete** - 指定した下書き注文を削除します。

- **Order**
  - **List** - 注文リストを取得します。
  - **Get** - 指定した1つの注文を取得します。
  - **Create** - 新しい注文を作成します。
  - **Update** - 指定した注文を更新します。
  - **Delete** - 指定した注文を削除します。

### shopify-inventory ノード

shopify-inventory ノードでは、ストアの在庫情報に対して次の処理を実行します。

- **InventoryItem**
  - **List** - 在庫品目のリストを取得します。
  - **Get** - 指定した1つの在庫品目を取得します。
  - **Update** - 指定した在庫品目を更新します。

- **InventoryLevel**
  - **List** - 在庫レベルのリストを取得します。
  - **Set** - 場所の在庫品目の在庫レベルを設定します。
  - **Adjust** - 場所の在庫品目の在庫レベルを調整します。
  - **Delete** - 場所の在庫品目の在庫レベルを削除します。

- **Location**
  - **List** - 場所のリストを取得します。
  - **Get** - 指定した1つの場所を取得します。
  - **inventoryLevels** - 場所の在庫レベルのリストを取得します。

**注**： 詳細は、[REST Admin API reference](https://shopify.dev/api/admin-rest)を参照してください。


謝辞
-------

node-red-contrib-shopifyは、次のオープンソースソフトウェアを使用しています。

- [shopify-api-node](https://github.com/MONEI/Shopify-api-node): Node.js用のShopify APIバインディングです。


ライセンス
-------

こちらを参照してください。[license](https://github.com/joeartsea/node-red-contrib-shopify/blob/master/LICENSE) (Apache License Version 2.0).


貢献
-------

[GitHub issues](https://github.com/joeartsea/node-red-contrib-shopify/issues)への問題提起、Pull requestsのどちらもあなたの貢献を歓迎します。


開発者
-------

開発者がnode-red-contrib-shopifyのソースを改変する場合、以下のコードを実行してクローンを作成します。

```
cd ~\.node-red\node_modules
git clone https://github.com/joeartsea/node-red-contrib-shopify.git
cd node-red-contrib-shopify
npm install
```
