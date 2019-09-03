export default function({ store, redirect }) {
  if (
    !store.state.user.accessToken &&
    !localStorage.getItem('CYME_CAPSULE_TOKEN')
  ) {
    return redirect('/login')
  }
}
