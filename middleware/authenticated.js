export default function ({ store, redirect }) {
  // If the user is not authenticated, user is a guest
  if (!store.state.authenticated) {
    return redirect('/login')
  }
}
