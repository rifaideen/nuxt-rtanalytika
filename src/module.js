const { join } = require('path')

module.exports = function (moduleOptions) {
  const { nuxt } = this
  const defaultOptions = nuxt.options.rtanalytika || {}
  const options = {
    ...defaultOptions,
    ...moduleOptions
  }

  if (!options.uid) {
    throw new Error('nuxt-analytika: Please configure the uid option in the module options.')
  }

  // disable script sanitizer
  this.options.head.__dangerouslyDisableSanitizers = this.options.head.__dangerouslyDisableSanitizers || []
  this.options.head.__dangerouslyDisableSanitizers.push('script')

  // push the snippet
  this.options.head.script.push({
    hid: 'rtanalytika-snippet',
    innerHTML: `window.rta=window.rta||function(){(window.rta.q=window.rta.q||[]).push(arguments)},window.rta.F=window.rta.F||1*new Date,rta('u','${options.uid}');`
  })

  this.options.head.script.push({
    his: 'rtanalytika-js-file',
    src: 'https://server.rtanalytika.com/analytics-spa.js'
  })

  // register the plugin
  this.addPlugin({
    src: join(__dirname, 'plugin.js'),
    fileName: 'rtanalytika.client.js'
  })
}

module.exports.meta = require('../package.json')
