# Contentstack DataSync Node.js Website Boilerplate – Agent guide

**Universal entry point** for contributors and AI agents. Detailed conventions live in **`skills/*/SKILL.md`**.

## What this repo is

| Field | Detail |
|--------|--------|
| **Name:** | [contentstack/datasync-nodejs-website-boilerplate](https://github.com/contentstack/datasync-nodejs-website-boilerplate) |
| **Purpose:** | Express app that serves a site from Contentstack DataSync–backed content (filesystem or MongoDB SDK), with Nunjucks views and synced data under the configured content store. |
| **Out of scope (if any):** | Not the DataSync sync pipeline itself (webhook listener, manager); this repo is the website layer on top of synced data. |

## Tech stack (at a glance)

| Area | Details |
|------|---------|
| Language | JavaScript (Node.js), CommonJS. Conventions: `skills/javascript-style/SKILL.md`. |
| Build | No compile step; run from source. Install dependencies with npm. |
| Tests | No automated test script in `package.json` today. |
| Lint / coverage | ESLint 5 with `.eslintrc.js` (strict rule set). No coverage tool configured. |
| Other | Express 5, Nunjucks, `@contentstack/datasync-filesystem-sdk` / `@contentstack/datasync-mongodb-sdk`, `contentstack` npm package. Optional: Husky hooks (Snyk, Talisman). |

## Commands (quick reference)

| Command type | Command |
|--------------|---------|
| Install deps | `npm install` |
| Run locally | `npm start` (uses `bin/www`; `NODE_ENV` selects `config/<env>.js`, default `development`) |
| Lint | `npx eslint .` |
| Husky setup | `npm run pre-commit` |

CI and automation: [.github/workflows/check-version-bump.yml](.github/workflows/check-version-bump.yml), [.github/workflows/sca-scan.yml](.github/workflows/sca-scan.yml), [.github/workflows/policy-scan.yml](.github/workflows/policy-scan.yml), [.github/workflows/codeql-analysis.yml](.github/workflows/codeql-analysis.yml), [.github/workflows/issues-jira.yml](.github/workflows/issues-jira.yml).

## Where the documentation lives: skills

| Skill | Path | What it covers |
|-------|------|----------------|
| Development workflow | `skills/dev-workflow/SKILL.md` | Install, run, hooks, CI expectations, version bumps on PRs |
| JavaScript style | `skills/javascript-style/SKILL.md` | CommonJS patterns, ESLint, matching existing file style |
| DataSync website app | `skills/datasync-website/SKILL.md` | Express entry points, Stack/content store, config and routes |
| Testing | `skills/testing/SKILL.md` | Current test posture; adding tests safely |
| Code review | `skills/code-review/SKILL.md` | PR checklist aligned with this repo |

An index with “when to use” hints is in `skills/README.md`.

## Using Cursor (optional)

If you use **Cursor**, `.cursor/rules/README.md` only points to **`AGENTS.md`**—same docs as everyone else.
