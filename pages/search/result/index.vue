<template>
  <div>
    <h2 class="c-title">カプセルが<br />見つかりました</h2>
    <div class="mb-3">
      見つけたカプセル：3個
    </div>
    <div class="row align-items-center pb-3 border-bottom mx-0 mb-3">
      <div class="col">〇〇カプセル</div>
      <div class="col text-center">
        <router-link :to="`/dig/1`" class="btn btn-lightgreen"
          >掘り出す</router-link
        >
      </div>
    </div>
    <div class="row align-items-center pb-3 border-bottom mx-0 mb-3">
      <div class="col">〇〇カプセル</div>
      <div class="col text-center">
        <router-link :to="`/dig/2`" class="btn btn-lightgreen"
          >掘り出す</router-link
        >
      </div>
    </div>
    <div class="row align-items-center mx-0 mb-5">
      <div class="col">〇〇カプセル</div>
      <div class="col text-center">
        <router-link :to="`/dig/3`" class="btn btn-lightgreen"
          >掘り出す</router-link
        >
      </div>
    </div>
    <router-link to="/search">&lt; 戻る</router-link>
  </div>
</template>

<script>
export default {
  layout: 'afterLogin'
}
</script>
