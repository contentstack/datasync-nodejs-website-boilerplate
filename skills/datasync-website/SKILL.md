---
name: datasync-website
description: Express entry points, Contentstack DataSync Stack, environment config, routes, and where synced content lives in this boilerplate.
---

# DataSync website app – Contentstack DataSync Node.js Website Boilerplate

## When to use

- Adding or changing pages, routes, middleware, or views
- Connecting or switching DataSync content stores (filesystem vs MongoDB SDK)
- Locating API keys, tokens, ports, or locale settings

## Instructions

- **HTTP entry:** `bin/www` creates the server from `app.js` (`module.exports = app`). `app.js` registers Nunjucks (`views/`), static assets under `/static` from `public/`, rate limiting, JSON/urlencoded parsers, and `./routes`.
- **Contentstack Stack:** `models/contentstack.js` uses `require(config.sdk)` to load `Contentstack`, then `Contentstack.Stack(config)` and `Stack.connect(config.contentStore)`. The `sdk` string in `config/<env>.js` must match an installed module name. Export is the connected `Stack` for use in routes.
- **Environment config:** Edit `config/development.js`, `config/staging.js`, or `config/production.js` for `contentstack.apikey`, `deliveryToken`, `contentStore` (e.g. `baseDir: './_contents'` for filesystem), `locales`, and `port`. Do not commit real secrets; use local overrides or secret injection patterns your team agrees on.
- **Routing:** `routes/index.js` mounts `middlewares` and `routes/home.js`. Locale and partials live under `middlewares/` (`locales.js`, `partials.js`).
- **Synced content:** Default filesystem layout uses `_contents` under the project (see `contentStore.baseDir` in config). `schemaNentries/` holds schema-related assets for the sample—treat as part of release-affecting paths when the version-bump workflow applies.
- **Dependencies:** See `package.json` for `@contentstack/datasync-filesystem-sdk`, `@contentstack/datasync-mongodb-sdk`, `contentstack`, `express`, `nunjucks`, etc.
- **Product docs:** [Contentstack DataSync](https://www.contentstack.com/docs/guide/synchronization/contentstack-datasync).
