import createPersistedState from 'vuex-persistedstate'

export default ({ store }) => {
  window.onNuxtReady(() => {
    createPersistedState({
      key: 'CYME_CAPSULE_TOKEN',
      paths: ['user.accessToken']
    })(store)
  })
}
