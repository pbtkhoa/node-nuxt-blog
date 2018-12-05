export default async function({ store }) {
  if (!process.server) {
    try {
      await store.dispatch('auth/checkUser');
    } catch (e) {
      console.log(e);
    }
  }
}
