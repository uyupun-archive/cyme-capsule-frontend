<template>
  <div>
    <h2 class="c-title">カプセルの管理</h2>
    <b-tabs content-class="mt-3">
      <b-tab title="埋めた" active>
        <div class="row align-items-center pb-3 border-bottom mx-0 mb-3">
          <div class="col">〇〇カプセル</div>
          <div class="col text-center">
            <router-link :to="`/capsules/detail/1`" class="btn btn-lightgreen"
              >開く</router-link
            >
          </div>
        </div>
        <div class="row align-items-center pb-3 border-bottom mx-0 mb-3">
          <div class="col">〇〇カプセル</div>
          <div class="col text-center">
            <router-link :to="`/capsules/detail/2`" class="btn btn-lightgreen"
              >開く</router-link
            >
          </div>
        </div>
        <div class="row align-items-center mx-0">
          <div class="col">〇〇カプセル</div>
          <div class="col text-center">
            <router-link :to="`/capsules/detail/3`" class="btn btn-lightgreen"
              >開く</router-link
            >
          </div>
        </div>
      </b-tab>
      <b-tab title="掘り出した">
        <div class="row align-items-center pb-3 border-bottom mx-0 mb-3">
          <div class="col">〇〇カプセル</div>
          <div class="col text-center">
            <router-link :to="`/capsules/detail/4`" class="btn btn-lightgreen"
              >開く</router-link
            >
          </div>
        </div>
        <div class="row align-items-center mx-0">
          <div class="col">〇〇カプセル</div>
          <div class="col text-center">
            <router-link :to="`/capsules/detail/5`" class="btn btn-lightgreen"
              >開く</router-link
            >
          </div>
        </div>
      </b-tab>
    </b-tabs>
  </div>
</template>

<script>
export default {
  layout: 'afterLogin'
}
</script>
