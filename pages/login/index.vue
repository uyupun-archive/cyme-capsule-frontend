<template>
  <div>
    <h2 class="c-title">ログイン</h2>
    <div class="mb-3">
      <label>ユーザーID</label>
      <input type="text" class="form-control" placeholder="ユーザーID" />
    </div>
    <div class="mb-5">
      <label>パスワード</label>
      <input type="password" class="form-control" placeholder="パスワード" />
    </div>
    <div class="text-center mb-5">
      <button type="button" class="btn btn-lightgreen px-5">ログイン</button>
    </div>
    <div>
      <router-link to="/">&lt; トップへ戻る</router-link>
    </div>
  </div>
</template>
