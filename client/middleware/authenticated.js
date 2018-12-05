export default function({ redirect, store }) {
  if (!store.getters['auth/isAuthenticated']) {
    return redirect('/login');
  }
}
