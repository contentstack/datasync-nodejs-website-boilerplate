/* 
  if the master language of the stack is something other than en-us,
  it will have to be added in the contentStore config

  example, if master language of a stack is 'ru-ru'

  contentStore : {
    baseDir: './_contents',
    locale: 'ru-ru'
  }
*/
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
    baseDir: './_contents'
  },
  port: 4000
}

module.exports = config
