<template>
  <div>
    <h2 class="c-title">カプセルを埋める</h2>
    <div class="mb-3">
      <label>カプセル名</label>
      <input type="text" class="form-control" placeholder="カプセル名" />
    </div>
    <div class="mb-3">
      <label>あなたの名前</label>
      <input type="text" class="form-control" placeholder="名前" />
    </div>
    <div class="mb-5">
      <label>メッセージ</label>
      <textarea class="form-control" placeholder="メッセージ"></textarea>
    </div>
    <div class="text-center">
      <button type="button" class="btn btn-lightgreen px-5">埋める</button>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'afterLogin'
}
</script>
