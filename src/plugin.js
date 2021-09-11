export default ({ app: { router } }) => {
  if (process.client) {
    router.beforeEach((to, from, next) => {
      if (window.rta.trackPageView) {
        setTimeout(() => {
          window.rta.trackPageView()
        }, 300)
      }

      next()
    })
  }
}
