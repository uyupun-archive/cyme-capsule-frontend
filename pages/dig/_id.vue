<template>
  <div v-if="result">
    <div v-if="checkFirstTime()" class="mb-5">
      <h2 class="c-title">カプセルを<br />掘り出しました</h2>
      <div class="mb-5">
        <div class="mb-3">{{ result.capsule_name }}カプセル</div>
        <div class="mb-3">埋めた人：{{ result.burier }}</div>
        <div class="mb-3">緯度：{{ result.latitude }}</div>
        <div class="mb-3">経度：{{ result.longitude }}</div>
        <div>メッセージ</div>
        <p>
          {{ result.message }}
        </p>
      </div>
    </div>
    <div v-if="checkNotFirstTime()" class="mb-5">
      <h2 class="c-title">カプセルが<br />見つかりませんでした</h2>
      <p>{{ result }}</p>
    </div>
    <router-link to="/search">&lt; 戻る</router-link>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  layout: 'afterLogin',
  data() {
    return {
      result: null
    }
  },
  computed: {
    ...mapGetters({ accessToken: 'user/accessToken' })
  },
  async mounted() {
    await this.digCapsule()
  },
  methods: {
    ...mapActions({ dig: 'capsule/dig' }),
    async digCapsule() {
      const id = this.$route.params
      const accessToken = this.accessToken
      try {
        const result = await this.dig({ id, accessToken })
        this.result = result.data
      } catch (e) {
        throw e
      }
    },
    checkFirstTime() {
      if (this.result === null) return false
      else if (typeof this.result === 'string') return false
      return true
    },
    checkNotFirstTime() {
      if (this.result === null) return false
      else if (typeof this.result === 'object') return false
      return true
    }
  }
}
</script>
