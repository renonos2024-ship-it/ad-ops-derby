# 【理不尽】Web広告運用ダービー

Web広告運用のプランを4択から選び、KPI達成率を競うダービー風ミニゲームです。

## MVP内容

- 案件5本
- 各案件に4つの媒体・設定・予算配分プラン
- 各プランのオッズ表示
- レースアニメーション
- クライアント横やり、媒体事故、計測事故などのカットイン
- 最終順位と結果講評

## ファイル構成

```text
ad-ops-derby/
├── index.html
├── style.css
├── app.js
└── README.md
```

## ローカル確認

`index.html` をブラウザで直接開くか、任意の静的サーバーで配信します。

```powershell
py -3.12 -m http.server 8000
```

その場合は `http://127.0.0.1:8000/ad-ops-derby/` を開きます。

## GitHub Pages

リポジトリのGitHub Pagesが有効なら、以下のようなURLで公開できます。

```text
https://<user>.github.io/<repo>/ad-ops-derby/
```

## 次に足すとよいもの

- 5案件連続プレイの合計スコア
- 結果画像のSNS共有
- イベント図鑑
- 案件・プランの追加データ分離
- カットインのサウンド演出
