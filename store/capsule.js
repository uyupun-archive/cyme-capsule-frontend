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
      console.log(capsuleName, accessToken)
      await this.$axios
        .post(
          `capsule/bury`,
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
    }
  }
}
