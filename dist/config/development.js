'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var config = exports.config = {
  sdk: 'datasync-filesystem-sdk',
  contentstack: {
    apikey: 'blt051119facd0f6bb6',
    deliveryToken: 'cs48927c056641f58eb29aaf80'
  },
  locales: [{
    code: 'en-us',
    relative_url_prefix: '/'
  }, {
    code: 'es-es',
    relative_url_prefix: '/es/'
  }],
  contentStore: {
    baseDir: '../datasync-boilerplate/_development_contents'
  },
  port: 4000
};