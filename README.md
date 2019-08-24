# Cyme Capsule frontend
Cyme Capsuleのフロントエンド用リポジトリ.

### Gitの運用方法について

issue毎に `feature-XXXX` ブランチを切って `develop` ブランチにPRを送る.  
PRはレビュー後 `develop` にマージされ, その後適切なタイミングで `master` にマージされる.

### セットアップ

- 初回時

```bash
make install
```

- ２回目以降

```bash
$ make up
```