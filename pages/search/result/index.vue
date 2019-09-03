<template>
  <div>
    <div v-if="type === 1">
      <h2 class="c-title">カプセルを<br />検索中</h2>
    </div>
    <div v-else-if="type === 2">
      <h2 class="c-title">カプセルが<br />見つかりました</h2>
      <div class="mb-3">見つけたカプセル：{{ result.length }}個</div>
      <div
        v-for="item in result"
        :key="item.id"
        class="row align-items-center pb-3 border-bottom mx-0 mb-3"
      >
        <div class="col">{{ item.capsule_name }}</div>
        <div class="col text-center">
          <router-link :to="`/dig/${item.id}`" class="btn btn-lightgreen"
            >掘り出す</router-link
          >
        </div>
      </div>
    </div>
    <div v-else-if="type === 3">
      <h2 class="c-title">カプセルが<br />見つかりませんでした</h2>
    </div>
    <div v-else>
      <h2 class="c-title">現在地を取得<br />できませんでした</h2>
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
      result: [],
      type: 1,
      location: {
        latitude: 0,
        longitude: 0
      }
    }
  },
  computed: {
    ...mapGetters({ accessToken: 'user/accessToken' })
  },
  async mounted() {
    try {
      this.geolocation()
      if (this.type !== 2) {
        this.type = 3
        return
      }
      this.result = await this.search({
        latitude: this.location.latitude,
        longitude: this.location.longitude,
        accessToken: this.accessToken
      })
    } catch (e) {
      throw e
    }
  },
  methods: {
    ...mapActions({ search: 'capsule/search' }),
    geolocation() {
      if (!navigator.geolocation) {
        this.type = 4
      }

      const success = (position) => {
        this.location.latitude = position.coords.latitude
        this.location.longitude = position.coords.longitude
        this.type = 2
      }

      const error = () => {
        this.type = 4
      }

      navigator.geolocation.getCurrentPosition(success, error)
    }
  }
}
</script>
