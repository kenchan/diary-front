# けんちゃんくんさんのWeb日記

個人ブログ（2011-2023年の日記500件以上）をAstro v5とTailwind CSSで構築したプロジェクトです。

## 🚀 開発環境

### 必要な環境
- Node.js 22.x

### コマンド

| Command                | Action                                           |
| :--------------------- | :----------------------------------------------- |
| `npm install`          | 依存関係をインストール                            |
| `npm run dev`          | 開発サーバーを起動 (`localhost:3000`)             |
| `npm run build`        | 本番用にビルド (`./dist/`)                       |
| `npm run preview`      | ビルド結果をローカルでプレビュー                   |
| `npm run astro ...`    | Astro CLIコマンドを実行                          |

## 📁 プロジェクト構成

```
/
├── public/
│   ├── _headers          # Cloudflare Pages用キャッシュ設定
│   └── favicon.svg
├── src/
│   ├── components/
│   │   └── ArticleCard.astro
│   ├── content/
│   │   └── article/      # 記事のマークダウンファイル（500件以上）
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       ├── index.astro   # トップページ（最新10件）
│       ├── [slug].astro  # 個別記事ページ
│       ├── page/
│       │   └── [page].astro  # ページネーション
│       ├── rss.xml.ts
│       └── atom.xml.astro
└── astro.config.mjs
```

## 🌐 デプロイ

### Cloudflare Pages へのデプロイ

現在、`diary-cf.shu-cream.net`でテスト運用中です。

#### 初回セットアップ手順

1. **Cloudflare Dashboardでプロジェクトを作成**
   - Pages → Create a project
   - GitHubリポジトリを接続

2. **ビルド設定**
   ```
   Build command: npm run build
   Build output directory: dist
   Environment variables:
     NODE_VERSION: 22
     SITE_URL: https://diary-cf.shu-cream.net
   ```

3. **カスタムドメインの設定**
   - Pages プロジェクト → Custom domains
   - `diary-cf.shu-cream.net` を追加
   - DNS設定をCloudflareで管理（CNAMEレコードを自動追加）

4. **デプロイ**
   - mainブランチへのpushで自動デプロイ
   - プレビューデプロイはPR作成時に自動生成

#### キャッシュ設定

Cloudflare Pagesは`public/_headers`を自動的に読み込みます：

- RSSフィード: 1時間キャッシュ
- その他のページ: 5分キャッシュ

### Vercel へのデプロイ（従来の本番環境）

現在`diary.shu-cream.net`で運用中です（Cloudflare移行後は廃止予定）。

#### 設定
- アダプター: なし（静的ビルド）
- 出力ディレクトリ: dist
- Node.js: 22.x

## 📝 記事の追加

1. `src/content/article/` に新しいマークダウンファイルを作成
2. フロントマター（YAML）を設定：
   ```yaml
   ---
   title: 記事のタイトル
   slug: article-slug
   publishedOn: 2025-01-01
   createdAt: 2025-01-01T00:00:00+09:00
   updatedAt: 2025-01-01T00:00:00+09:00
   ---
   ```
3. 本文を記述
4. コミット＆プッシュで自動デプロイ

## 🎨 技術スタック

- **フレームワーク**: Astro v5
- **スタイリング**: Tailwind CSS v3
- **ホスティング**: Cloudflare Pages (移行中) / Vercel
- **Content Collection**: Astro Content Collections with Zod schema
- **シンタックスハイライト**: Shiki (github-light theme)

## 📖 ドキュメント

詳細なアーキテクチャと実装の詳細は[CLAUDE.md](./CLAUDE.md)を参照してください。
