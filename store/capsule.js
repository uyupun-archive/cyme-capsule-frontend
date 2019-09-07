import { createNamespacedHelpers } from 'vuex'

export default {
  ...createNamespacedHelpers('capsule'),
  state() {
    return {
      digList: [],
      myList: []
    }
  },
  mutations: {},
  actions: {
    async bury(
      { commit },
      { capsuleName, burier, message, latitude, longitude, accessToken }
    ) {
      await this.$axios
        .post(
          `v1/capsule/bury`,
          {
            capsule_name: capsuleName,
            burier,
            message,
            latitude,
            longitude
          },
          {
            headers: {
              Authorization: `Bearer: ${accessToken}`
            }
          }
        )
        .catch((e) => {
          throw e
        })
    },
    async search({ commit }, { latitude, longitude, accessToken }) {
      const result = await this.$axios.get(`v1/capsule/search`, {
        params: {
          latitude,
          longitude
        },
        headers: {
          Authorization: `Bearer: ${accessToken}`
        }
      })
      return result
    },
    async dig({ commit }, { id, accessToken }) {
      const result = await this.$axios.post(
        `v1/capsule/dig`,
        {
          id
        },
        {
          headers: {
            Authorization: `Bearer: ${accessToken}`
          }
        }
      )
      return result
    }
  }
}
