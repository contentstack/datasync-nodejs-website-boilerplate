const config = {
  sdk: 'datasync-filesystem-sdk',
  contentstack: {
    apikey: '',
    deliveryToken: '',
  },
  locales: [
    {
      code: 'en-us',
      relative_url_prefix: '/'
    },
    {
      code: 'es-es',
      relative_url_prefix: '/es/'
    }
  ],
  contentStore: {
    baseDir: './_contents',
    locale: 'en-us'
  },
  port: 4000
}

module.exports = config
