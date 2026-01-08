# you can run these and set up to only use for development purposes and not needed in production

`npm i eslint @eslint/js prettier eslint-config-prettier eslint-plugin-prettier -D`

- eslint - Main linting tool that finds and fixes problems in your JavaScript code

- @eslint/js - ESLint's official JavaScript configuration

- prettier - Code formatter that enforces consistent style

- eslint-config-prettier - Disables ESLint rules that conflict with Prettier

- eslint-plugin-prettier - Runs Prettier as an ESLint rule

# these commands are used mostly in CI/CD pipeline

- Use lint and format:check in CI/CD pipelines to verify code quality

- Use lint:fix and format locally to automatically fix issues before committing

- npm run eslint . => Scans all files in the project for code issues and reports them (doesn't change anything)

- npm run eslint . --fix => Scans for issues AND automatically fixes the ones that can be auto-fixed

- npm run prettier --write . => Reformats all files to match Prettier's style rules (modifies files)

- npm run prettier --check . => Checks if files are formatted correctly (doesn't change anything, just reports)
