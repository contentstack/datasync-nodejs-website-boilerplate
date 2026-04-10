---
name: code-review
description: PR checklist for this boilerplate—version bumps, security hooks, and consistency with Express/DataSync patterns.
---

# Code review – Contentstack DataSync Node.js Website Boilerplate

## When to use

- Authoring or reviewing a pull request
- Verifying release readiness for a change that touches app code

## Instructions

- **Version bump:** If the PR changes release-affecting files (paths are defined in `.github/workflows/check-version-bump.yml`), `package.json` version must increase and exceed the latest tag.
- **Security / hooks:** Contributors with Husky enabled should pass Snyk and Talisman locally unless bypass is justified; align dependency changes with `.github/workflows/sca-scan.yml` expectations where relevant.
- **Code quality:** ESLint should pass on touched files; new code should match existing patterns in the same directory (CommonJS, existing error handling).
- **Product behavior:** DataSync connection and routes should remain coherent—config changes should be documented for operators (ports, `contentStore`, locales).
- **Ownership:** See `CODEOWNERS` for required reviewers.
