<template>
  <div>
    <h2 class="c-title">カプセルを探す</h2>
    <p class="mb-5">
      現在地から半径〇m以内にあるカプセルを探しますか？
    </p>
    <div class="text-center">
      <router-link to="/search/result" class="btn btn-lightgreen px-5"
        >探す</router-link
      >
    </div>
  </div>
</template>

<script>
export default {
  layout: 'afterLogin'
}
</script>
