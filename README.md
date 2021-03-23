# naidemoc

> A Vue.js application of Interactive AI chat bot

## What is nAIdemoc?

nAIdemocはAIによるツッコミチャットボットです。
あなたの「ボケ」に応じた適切な「ツッコミ」を返します。
本アプリケーションはチャット形式で誰でも気軽に扱うことができます。
アプリケーションは[こちら](https://daemonlxyut.github.io/naidemoc/)のリンクからアクセスできます。

## フロントエンド実装環境

- Node.js v14.16.0
- npm 7.6.1
- vue-cli 4.5.11
- npm packages
    - "axios": "^0.21.1",
    - "vue": "^2.5.2",
    - "vue-router": "^3.0.1"

## プロジェクト作成時の手順

```bash
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

