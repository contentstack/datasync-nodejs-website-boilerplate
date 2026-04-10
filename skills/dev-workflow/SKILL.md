---
name: dev-workflow
description: Local setup, npm scripts, Husky and security hooks, CI expectations, and PR version-bump rules for this boilerplate.
---

# Development workflow – Contentstack DataSync Node.js Website Boilerplate

## When to use

- Setting up the project or onboarding someone new
- Changing how commits or CI behave
- Opening a PR that touches application code (version bump may be required)

## Instructions

- **Dependencies:** Run `npm install` at the repo root. There is no separate build or bundle step.
- **Run the server:** `npm start` executes `node ./bin/www`. Port and stack config come from `config/<NODE_ENV>.js` (default `development` if `NODE_ENV` is unset).
- **Lint:** `npx eslint .` uses `.eslintrc.js`. There is no `lint` npm script; invoke ESLint directly.
- **Husky:** `npm run pre-commit` installs Husky and marks `.husky/pre-commit` executable. The pre-commit hook runs **Snyk** (`snyk test --all-projects`) and **Talisman**; both CLIs must be installed locally. Set `SKIP_HOOK=1` to bypass (document why if you use this in automation).
- **PR version bump:** [.github/workflows/check-version-bump.yml](../../.github/workflows/check-version-bump.yml) requires `package.json` to change when certain paths change (e.g. `app.js`, `bin/`, `config/`, `middlewares/`, `models/`, `public/`, `routes/`, `views/`, `schemaNentries/`) and the new version must be greater than the latest git tag. Doc-only or `.github`-only changes skip the check per that workflow.
