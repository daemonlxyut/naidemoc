# nAIdemoc

**A Comedy AI Chat Bot**

## What is nAIdemoc?

nAIdemocはAIによるツッコミチャットボットです。<br>
あなたの「ボケ」に応じた適切な「ツッコミ」を返します。<br>
本アプリケーションはチャット形式で誰でも気軽に扱うことができます。

[Application Here.](https://daemonlxyut.github.io/naidemoc/)

## Site Map

- [ホームページ](https://daemonlxyut.github.io/naidemoc/#/)
- [チャットページ](https://daemonlxyut.github.io/naidemoc/#/chat)
- [紹介ページ](https://daemonlxyut.github.io/naidemoc/#/nonodebris-com)

## Status

| リリース | 状況 | 実装内容 |
| ---- | ---- | ---- |
| alpha | closed | Main & Chat Page |
| beta  | now | Apply Vuetify and Add Our Page |

## Application

### Dependencies

#### 開発環境

- system
  - Node.js: v14.16.0
  - npm: 7.6.1
  - vue-cli: 4.5.11
- npm packages
    - vue: 2.5.2
    - vue-router 3.0.1
    - vuetify: 2.4.8
    - axios: 0.21.1
    - sass-loader@11.0.1
    - deepmerge@4.2.2
    - sass@1.32.8

### Local Test

```sh
git clone https://github.com/daemonlxyut/naidemoc.git
cd naidemoc

# 関連パッケージのインストール
npm i

# ローカルサーバ(localhost:8080 [default])を立ち上げる
npm run dev

# デプロイ用フォルダを生成
npm run build
```

### Procedure to Create a Vue Project

#### プロジェクトの初期化

```sh
# node.jsのインストール確認
node --version
npm --version

# vue-cliのインストール
npm install -g @vue/cli

# vue projectの初期化
vue init webpack [プロジェクト名]
# => 基本は指示通りに。追加パッケージはRouterのみで行った。

cd [プロジェクト名]
```

#### npmで各種パッケージをインストール

```sh
npm install axios
npm install vuetify
npm install sass sass-loader deepmerge -D
```

#### Vuetifyの設定

後日記載。

#### ビルドの設定

`npm run build`実行時の出力先を`/dist`から`/docs`に変更

```js
// config/index.js
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

## Creator

nonodebris.com

