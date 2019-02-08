[![Contentstack](https://www.contentstack.com/docs/static/images/contentstack.png)](https://www.contentstack.com/)
## Contentstack sync expressjs demo

Contentstack is a headless CMS with an API-first approach. It is a CMS that developers can use to build powerful cross-platform applications in their favorite languages. Build your application frontend, and Contentstack will take care of the rest. [Read More](https://www.contentstack.com/).

This demo application will help you get started with setting up `contentstack-sync utilities`!


## Prerequisite:

1. nodejs v8 or higher
2. expressjs framework

## Start app

1. Install dependencies by running the following

```sh
	$ cd contentstack-sync-boilerplate/
	$ npm install
```

2. Edit config file

By default, the app runs in `development` environment, using `config/development.js`

Config for `contentstack-filesystem-sdk`:

```js
const config = {
  sdk: 'contentstack-filesystem-sdk',
  contentstack: {
    apikey: '',
    accessToken: '',
    locales: [
      {
        code: 'en-us',
        relative_url_prefix: '/'
      },
      {
        code: 'es-es',
        relative_url_prefix: '/es/'
      }
    ]
  },
  port: 4000,
  options: {
  	base_dir: '../contents'
  }
}
```

3. Add your custom Route

Routes folder contains all your routes.

Let's add a route for `contact_us` content type.Considering you have a `contact_us` content type with its entry published.

- Create a `contact_us.js` file and add route as follow :

```js
const express = require('express');
const router = express.Router();
const Stack = require('../models/contentstack');


router.get('/contact_us', (req, res, next) => {
  const contentTypeUID = 'contact_us';

  Stack.contentType(contentTypeUID).entries()
    .find()
    .then(function success (result) {
      res.render('contact_us.html', {
        entries: result
      })
    }).catch(next)
})

module.exports = router

```

- Add your template `contact_us.html` in views folder

```html
{% extends "./layout/parent.html" %} {% block main_body %}
{% set entry = entries.entries[0] %}

<div>
    {# Your contact_us title will be rendered #}
    <h1>{{ entry.title }}</h1>
	{# add your body here using {{ entry.field_name }} #}
</div>

{% endblock %}
```
- Start the Application with following command

```sh
    $ npm start
```
## Configuring boiler plate for MongoDb as a datastore

- Edit `development.js` as follows: 

Config for `contentstack-mongodb-sdk`:
 
```js
const config = {
  sdk: 'contentstack-mongodb-sdk',
  contentstack: {
    apikey: '',
    accessToken: '',
    locales: [
      {
        code: 'en-us',
        relative_url_prefix: '/'
      },
      {
        code: 'es-es',
        relative_url_prefix: '/es/'
      }
    ]
  },
  port: 4000,
  options: {
    url: '',
    dbName: ''
  }
}
```

- Restart your Application

### Resources

You can learn more on how to configure and use contentstack-sync utilities here

- (contentstack-webhook-listener)[]
- (contentstack-sync-manager)[]
- (contentstack-content-store-filesystem)[]
- (contentstack-content-store-mongodb)[]
- (contentstack-asset-store-filesystem)[]

### SDK's

Currently, Contentstack provides 2 SDK's to query contents

1. (contentstack-sync-filesystem-sdk)[]
2. (contentstack-sync-mongodb-sdk)[]
