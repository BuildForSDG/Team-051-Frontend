export default function ({ store, redirect }) {
  // If the user is not guest
  if (store.state.authenticated) {
    //redirect to dashboard or intended
    return redirect('/dashboard')
  }
}
