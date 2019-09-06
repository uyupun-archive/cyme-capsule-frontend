export default function({ store, redirect }) {
  if (!store.state.user.accessToken) {
    if (!localStorage.getItem('CYME_CAPSULE_TOKEN')) {
      return redirect('/login')
    }
    const parse = JSON.parse(localStorage.getItem('CYME_CAPSULE_TOKEN'))
    store.commit('user/setToken', parse.user.accessToken)
  }
}
