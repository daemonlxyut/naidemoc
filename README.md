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

## ローカルでの検証とビルド

```sh
# プロジェクトのディレクトリへ移動
cd [プロジェクト名]

# ローカルサーバを立ち上げプロジェクトを検証
npm run dev
# => デフォルトでlocalhost:8080へアクセス

# ビルドしてデプロイ用フォルダを生成
npm run build
```

## サイトマップ

- [ホームページ](https://daemonlxyut.github.io/naidemoc/#/)
- [チャットページ](https://daemonlxyut.github.io/naidemoc/#/chat)

## Creator

nonodebris.com

