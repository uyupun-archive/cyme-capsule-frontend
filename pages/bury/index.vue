<template>
  <div>
    <h2 class="c-title">カプセルを埋める</h2>
    <div class="mb-3">
      <label>カプセル名</label>
      <input
        v-model="form.capsuleName"
        type="text"
        class="form-control"
        placeholder="カプセル名"
      />
    </div>
    <div class="mb-3">
      <label>あなたの名前</label>
      <input
        v-model="form.userName"
        type="text"
        class="form-control"
        placeholder="名前"
      />
    </div>
    <div class="mb-3">
      <label>メッセージ</label>
      <textarea
        v-model="form.message"
        class="form-control"
        placeholder="メッセージ"
      ></textarea>
    </div>
    <div class="mb-5">
      <button
        type="button"
        class="btn btn-lightgreen"
        :disabled="disabledGeolocationBtn"
        @click="geolocation"
      >
        現在地を取得する
      </button>
      <p v-if="disabledGeolocationBtn || geolocationMsg" class="mb-0">
        {{ geolocationMsg }}
      </p>
      <p v-if="locationExists" class="mb-0">
        緯度：{{ form.location.latitude }}<br />
        経度：{{ form.location.longitude }}
      </p>
    </div>
    <div class="text-center">
      <button
        type="button"
        class="btn btn-lightgreen px-5"
        :datafld="!locationExists"
        @click="submit"
      >
        埋める
      </button>
    </div>
    <modal v-if="openModal" text="カプセルを埋めました" @close="close">
      <template #footer>
        <a class="btn btn-lightgreen" @click="close">
          キャンセル
        </a>
      </template>
    </modal>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import modal from '@/components/modal'

export default {
  layout: 'afterLogin',
  components: {
    modal
  },
  data() {
    return {
      form: {
        capsuleName: '',
        userName: '',
        message: '',
        location: {
          latitude: 0,
          longitude: 0
        }
      },
      locationExists: false,
      openModal: false,
      disabledGeolocationBtn: false,
      geolocationMsg: ''
    }
  },
  computed: {
    ...mapGetters({ accessToken: 'user/accessToken' })
  },
  methods: {
    ...mapActions({ bury: 'capsule/bury' }),
    async submit() {
      try {
        await this.bury({
          capsuleName: this.form.capsuleName,
          burier: this.form.userName,
          message: this.form.message,
          latitude: this.form.location.latitude,
          longitude: this.form.location.longitude,
          accessToken: this.accessToken
        })
        this.openModal = true
      } catch (e) {
        throw e
      }
    },
    geolocation() {
      this.geolocationMsg = '取得中です...'
      this.disabledGeolocationBtn = true
      if (!navigator.geolocation) {
        this.geolocationMsg = '対応していません'
        return false
      }

      const success = (position) => {
        this.form.location.latitude = position.coords.latitude
        this.form.location.longitude = position.coords.longitude
        this.geolocationMsg = ''
        this.locationExists = true
      }

      const error = () => {
        this.geolocationMsg = '現在地を取得できませんでした'
      }

      navigator.geolocation.getCurrentPosition(success, error)
      this.disabledGeolocationBtn = false
    },
    close() {
      this.locationExists = false
      this.form = {
        capsuleName: '',
        userName: '',
        message: '',
        location: {
          latitude: 0,
          longitude: 0
        }
      }
      this.openModal = false
    }
  }
}
</script>
