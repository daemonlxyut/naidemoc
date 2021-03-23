# nAIdemoc

> A Vue.js application of Interactive AI chat bot

## What is nAIdemoc?

nAIdemocはAIによるツッコミチャットボットです。<br>
あなたの「ボケ」に応じた適切な「ツッコミ」を返します。<br>
本アプリケーションはチャット形式で誰でも気軽に扱うことができます。<br>
アプリケーションは[こちら](https://daemonlxyut.github.io/naidemoc/)のリンクからアクセスできます。

## フロントエンド実装環境

- Node.js v14.16.0
- npm 7.6.1
- vue-cli 4.5.11
- npm packages
    - axios: 0.21.1
    - vue: 2.5.2
    - vue-router 3.0.1

```sh
# プロジェクト作成後にaxiosのみ個別のインストール
cd [プロジェクト名]
npm install axios
```

## プロジェクト作成時の手順

```sh
# node.jsのインストール確認
node --version
npm --version

# vue-cliのインストール
npm install -g @vue/cli

# vue projectの初期化
vue init webpack [プロジェクト名]
# => 基本は指示通りに。追加パッケージはRouterのみで行った。
```

## ローカル環境での検証とビルド

```sh
# プロジェクトのディレクトリへ移動
cd [プロジェクト名]

# 関連パッケージのインストール
npm i

# ローカルサーバを立ち上げプロジェクトを検証
npm run dev
# => デフォルトでlocalhost:8080へアクセス

# ビルドしてデプロイ用フォルダを生成
npm run build
```

## ビルドの設定

`npm run build`実行時の出力先を`/dist`から`/docs`に変更

```js
module.exports = {
  build: {
    // Before
    index: path.resolve(__dirname, '../dist/index.html'),
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',

    // After
    index: path.resolve(__dirname, '../docs/index.html'),
    assetsRoot: path.resolve(__dirname, '../docs'),
    assetsSubDirectory: 'static',
    assetsPublicPath: './',
  }
}
```

## サイトマップ

- [ホームページ](https://daemonlxyut.github.io/naidemoc/#/)
- [チャットページ](https://daemonlxyut.github.io/naidemoc/#/chat)

## Creator

nonodebris.com

