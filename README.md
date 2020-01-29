# nuxt-sls-ssr

Nuxt.jsとServerless Framework（AWS）でサーバーサイドレンダリングするサンプルです。

WordPressのREST APIから情報を非同期取ってきて、記事一覧と記事詳細ページを表示します。

## はじめに

1. まずはnpm installしましょう！

``` bash
# install dependencies
$ npm install
```


2. aws-cliでAWSの設定を行ってください。

https://docs.aws.amazon.com/ja_jp/cli/latest/userguide/cli-chap-configure.html

``` bash
$ aws configure
```


3. nuxt.config.jsのsiteUrlに表示したいWordPressサイトのURL（/wp-json前まで）を入力してください。

``` nuxt.config.js
env: {
  siteUrl: 'https://example.your-wordpress-site.com/wp-json/wp/v2/'
}
```


4. Route53にパブリックホストゾーンを作成してください

https://docs.aws.amazon.com/ja_jp/Route53/latest/DeveloperGuide/CreatingHostedZone.html

所有中のドメインがある場合は、Route53に移管 or ネームサーバーを向ける等してください。

ドメインがない場合は、Route53のコンソールから「登録済みドメイン」を選択し、ドメインを購入してください。


5. Certificate Manager（ACM）でパブリック証明書を発行してください

ACMのコンソールの「証明書のリクエスト」から「パブリック証明書のリクエスト」を選択し、ドメイン名（Route53に登録したもの）を入力して発行してください。


4. serverless.ymlにデプロイ先のドメインと名前を入力してください.

``` serverless.yml
custom:
  name: 'nuxt-sls-ssr'
  customDomain:
    domainName: '${self:provider.stage}.yourdomain.com'
    certificateName: '*.yourdomain.com'
```


5. serverless.ymlに記入した名前とリージョン名でS3にバケットを作ります。


## 開発スタート！

``` bash
# Nuxt.js開発モード
$ npm run dev

# Nuxt.jsビルド
$ npm run build

# AWSデプロイ後シミュレーション
$ npm run sls:offline

# AWSデプロイ
$ npm run sls:deploy

# デプロイしたものを削除
$ npm run sls:remove

```
