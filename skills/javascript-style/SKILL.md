---
name: javascript-style
description: JavaScript and CommonJS conventions, ESLint usage, and matching existing file style in this Node.js boilerplate.
---

# JavaScript style – Contentstack DataSync Node.js Website Boilerplate

## When to use

- Writing or editing `.js` files under `app.js`, `bin/`, `config/`, `middlewares/`, `models/`, `routes/`, or `public/js/`
- Choosing `var` vs `const`/`let` or module layout in a file that mixes styles

## Instructions

- **Modules:** Use CommonJS (`require`, `module.exports`) consistently with the file you are editing. New code in files that already use `const`/`let` should use the same; older files under `config/` and `models/` often use `var`—do not rewrite wholesale for style alone.
- **Lint:** Run `npx eslint .`; rules live in `.eslintrc.js` (extends `eslint:recommended` with many explicit rules, including single quotes and JSDoc-related rules where enabled).
- **Paths:** Prefer `path.join(__dirname, ...)` for filesystem paths when the surrounding code does.
- **Formatting:** `.jsbeautifyrc` applies to JS/HTML formatting where your editor uses it; keep line length and indentation consistent with existing files.
