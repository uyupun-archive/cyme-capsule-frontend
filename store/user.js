import { createNamespacedHelpers } from 'vuex'

export default {
  ...createNamespacedHelpers('user'),
  state() {
    return {
      id: null,
      accessToken: null
    }
  },
  getters: {
    userId: (state) => {
      return state.user.id
    }
  },
  mutations: {
    setToken: (state, token) => {
      state.accessToken = token
    }
  },
  actions: {
    async register({ commit }, { userId, password }) {
      const userInfo = await this.$axios
        .post(`/v1/user/login`, {
          user_id: userId,
          password
        })
        .catch((e) => {
          throw e
        })
      if (userInfo) {
        this.$axios.setToken(userInfo.token, 'Bearer')
        commit('setToken', userInfo.token)
      }
    },
    async login({ commit }, { userId, password }) {
      const userInfo = await this.$axios
        .post(`${process.env.API_URL}user/login`, {
          user_id: userId,
          password
        })
        .catch((e) => {
          throw e
        })
      if (userInfo) {
        this.$axios.setToken(userInfo.token, 'Bearer')
        commit('setToken', userInfo.token)
      }
    }
  }
}
