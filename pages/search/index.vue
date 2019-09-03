<template>
  <div>
    <h2 class="c-title">カプセルを探す</h2>
    <p class="mb-5">
      現在地から半径〇m以内にあるカプセルを探しますか？
    </p>
    <div
      v-if="type !== 0 && type !== 3 && type !== 4 && type !== 6"
      class="text-center mb-3"
    >
      <button
        type="button"
        class="btn btn-lightgreen px-5"
        @click="searchCapsule"
      >
        探す
      </button>
    </div>
    <div v-if="type !== 1 && type !== 2 && type !== 5" class="text-center mb-3">
      <button
        type="button"
        class="btn btn-lightgreen px-5"
        @click="getGeolocation"
      >
        現在地を取得
      </button>
    </div>
    <div v-if="type === 1">
      <p>カプセルを検索中...</p>
    </div>
    <div v-else-if="type === 2">
      <p>カプセルが見つかりました</p>
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
      <p>カプセルが見つかりませんでした</p>
    </div>
    <div v-else-if="type === 4">
      <p>現在地を取得できませんでした</p>
    </div>
    <div v-else-if="type === 5">
      <p>現在地を取得しました</p>
    </div>
    <div v-else-if="type === 6">
      <p>現在地取得中...</p>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  layout: 'afterLogin',
  data() {
    return {
      result: [],
      type: 0,
      location: {
        latitude: 0,
        longitude: 0
      }
    }
  },
  computed: {
    ...mapGetters({ accessToken: 'user/accessToken' })
  },
  methods: {
    ...mapActions({ search: 'capsule/search' }),
    getGeolocation() {
      this.type = 6
      if (!navigator.geolocation) {
        this.type = 4
      }

      const success = (position) => {
        this.location.latitude = position.coords.latitude
        this.location.longitude = position.coords.longitude
        this.type = 5
      }

      const error = () => {
        this.type = 4
      }

      navigator.geolocation.getCurrentPosition(success, error)
    },
    async searchCapsule() {
      this.type = 1
      try {
        const result = await this.search({
          latitude: this.location.latitude,
          longitude: this.location.longitude,
          accessToken: this.accessToken
        })
        this.result = result.data
        this.type = 2
      } catch (e) {
        throw e
      }
    }
  }
}
</script>
