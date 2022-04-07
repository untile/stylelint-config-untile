# stylelint-config-untile

Untile-flavored stylelint config.
This configuration was created for react environment using [styled-components](https://www.styled-components.com/),
however it can be applied in other contexts.

## Installation

```sh
$ npm install stylelint @untile/stylelint-config-untile --save-dev
```

## Usage

Create an `.stylelintrc` file with the following:

```json
{
  "extends": ["@untile/stylelint-config-untile"]
}
```

Add the following `script` to your `package.json`:

```json
{
  "scripts": {
    "lint-styles": "stylelint './src/**/*.js'",
  }
}
```

and run the linter with:

```sh
$ npm run lint-styles
```

## Extending the config

Simply add a `"rules"` key to your config, then add your overrides and additions there.

```json
{
  "extends": "@untile/stylelint-config-untile",
  "rules": {
    "your-rules-here"
  }
}
```

## Releases

Be sure to have configured `NPM_TOKEN` in your globals.

```bash
npm version [<new version> | major | minor | patch] -m "Release %s"
git push origin master && git push --tags
```
