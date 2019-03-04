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
	$ cd contentstack-sync-utility-boilerplate-website-example
	$ npm install
```

2. Edit config file

By default, the app runs in `development` environment, using `config/development.js`

Config for `contentstack-sync-filesystem-sdk`:

```js
const config = {
  sdk: 'contentstack-sync-filesystem-sdk',
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
  port: 4000,
  contentStore: {
    baseDir: './_contents'
  },
}
```
3. Import the `header` and `footer` content types from schemaNentries folder in your stack and           publish the entries. Sync your data using sync-utility to use it in your app.

4. Add your custom Route

Routes folder contains all your routes.

Let's add a route for `about` content type.Considering you have a `about` content type with its entry published.We have provided `about` content type in schemaNentries folder. 

- Create a `about.js` file and add route as follow :

```js
const express = require('express');
const router = express.Router();
const Stack = require('../models/contentstack');


router.get('/about', (req, res, next) => {
  const contentTypeUID = 'about';

  Stack.contentType(contentTypeUID).entries()
    .find()
    .then(function success (result) {
      res.render('about.html', {
        about: result
      })
    }).catch(next)
})

module.exports = router

```

- Add your template `about.html` in views folder

```html
{% extends "layout/parent.html" %} {% block main_body %}
{% set entry = about.entries[0] %}

<div>
    {# Your about title will be rendered #}
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

Config for `contentstack-sync-mongodb-sdk`:
 
```js
const config = {
  sdk: 'contentstack-sync-mongodb-sdk',
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
  port: 4000,
  contentStore: {
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
