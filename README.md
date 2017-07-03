# eslint-config-wandi

Wandi ESLint configuration

## Install

This package has some peer dependencies. The recommended way to install it and
its peer dependencies in a single command is to install
[`install-peerdeps`](https://github.com/nathanhleung/install-peerdeps) and run
it :

```
npm install -g install-peerdeps
install-peerdeps --dev @wandiparis/eslint-config-wandi
```

## How to use

In your ESLint configuration file (we assume you use JS format in this
documentation, please refer to
[ESLint documentation](http://eslint.org/docs/user-guide/configuring#configuration-file-formats)
to see other supported formats), add the following `extends` property :

```js
module.exports = {
    extends: "@wandiparis/eslint-config-wandi"
};
```

## Rules

The config extends some other configurations :

* `eslint-recommended` (see rules that have a check mark on [eslint rules list](http://eslint.org/docs/rules/))
* `plugin:import/errors` from [eslint-plugin-import](https://www.npmjs.com/package/eslint-plugin-import)
