---
name: testing
description: Automated testing posture for this repo (currently minimal) and how to add tests without leaking credentials.
---

# Testing – Contentstack DataSync Node.js Website Boilerplate

## When to use

- Adding unit, integration, or E2E tests
- Deciding where test files live and how CI should run them
- Handling API keys and tokens in test fixtures

## Instructions

- **Today:** `package.json` has no `test` script and the repository does not ship a standard `test/` tree. Validate changes by running the app (`npm start`) and ESLint (`npx eslint .`) as appropriate.
- **Adding a runner:** Prefer adding a `test` script (e.g. Node’s built-in runner, or Mocha/Jest if the team standardizes) and document the command in `AGENTS.md` when it lands. Keep test-only changes in paths that your CI treats as non–release-affecting where applicable (see version-bump workflow).
- **Credentials:** Never commit real Contentstack keys or tokens. Use environment variables or ignored local config for integration tests; mirror patterns from `config/*.js` with placeholders only in committed files.
