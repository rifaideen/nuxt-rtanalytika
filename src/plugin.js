export default ({ app: { router } }, inject) => {
  // Inject rtanalytika object
  inject('rtanalytika', window.rta)

  <% if (options.ignores) { %>
    const ignores = '<%= options.ignores %>'.split(',')
  <% } else { %>
    const ignores = []
  <% } %>

  if (process.client) {
    router.beforeEach((to, from, next) => {
      if (window.rta.trackPageView) {
        if (!ignores.includes(to.name)) {
          setTimeout(() => {
            window.rta.trackPageView()
          }, 300)
        } else if (window.rta.stopTracking) {
          // stop any existing tracking.
          window.rta.stopTracking();
        }
      }

      next()
    })
  }
}
