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
    accessToken: (state) => {
      return state.accessToken
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
        .post(`/user/register`, {
          user_id: userId,
          password
        })
        .catch((e) => {
          throw e
        })
      if (userInfo) {
        this.$axios.setToken(userInfo.data.access_token, 'Bearer')
        commit('setToken', userInfo.data.access_token)
      }
    },
    async login({ commit }, { userId, password }) {
      const userInfo = await this.$axios
        .post(`/user/login`, {
          user_id: userId,
          password
        })
        .catch((e) => {
          throw e
        })
      if (userInfo) {
        this.$axios.setToken(userInfo.data.access_token, 'Bearer')
        commit('setToken', userInfo.data.access_token)
      }
    }
  }
}
