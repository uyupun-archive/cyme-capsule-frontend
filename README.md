# Cyme Capsule frontend
Cyme Capsuleのフロントエンド用リポジトリ.

### Gitの運用方法について

issue毎に `feature-XXXX` ブランチを切って `develop` ブランチにPRを送る.  
PRはレビュー後 `develop` にマージされ, その後適切なタイミングで `master` にマージされる.

### セットアップ

- 初回起動時

```bash
$ docker network create cyme-capsule // バックエンド側ですでに作成している場合は実行しなくて良い
$ make install
```

- ２回目以降起動時

```bash
$ make up
```

- 切断時

```bash
$ make down
```

※ makeコマンドが使用できない環境の場合, `Makefile` を参照して該当のコマンドを実行して下さい.