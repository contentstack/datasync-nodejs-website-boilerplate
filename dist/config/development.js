'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var config = exports.config = {
  sdk: 'contentstack-filesystem-sdk',
  contentstack: {
    apikey: '',
    deliveryToken: ''
  },
  locales: [{
    code: 'en-us',
    relative_url_prefix: '/'
  }, {
    code: 'es-es',
    relative_url_prefix: '/es/'
  }],
  contentStore: {
    baseDir: './_contents'
  },
  port: 4000
};