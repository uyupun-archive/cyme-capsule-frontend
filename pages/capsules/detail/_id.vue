<template>
  <div>
    <h2 class="c-title">〇〇カプセル</h2>
    <div class="mb-5">
      <div class="mb-3">埋めた人：〇〇</div>
      <div class="mb-3">緯度：135.0000000</div>
      <div class="mb-3">経度：35.0000000</div>
      <div>メッセージ</div>
      <p>
        メッセージの内容が入ります。メッセージの内容が入ります。メッセージの内容が入ります。
      </p>
    </div>
    <router-link to="/capsules">&lt; 戻る</router-link>
  </div>
</template>

<script>
export default {
  layout: 'afterLogin'
}
</script>
