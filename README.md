# eslint-config-wandi

Wandi ESLint configurations

## Install

To install the configuration, you just have to run the following command :

```
npm install --save-dev eslint-config-wandi
```

## How to use

In your ESLint configuration file (we assume you use JS format in this
documentation, please refer to
[ESLint documentation](http://eslint.org/docs/user-guide/configuring#configuration-file-formats)
to see other supported formats), add the following `extends` property :

```js
module.exports = {
    extends: "wandi"
}
```

## Development and production configurations

By default, the configuration is in development mode. In this mode, some rules
just raise a warning even if they are critical in production. For example, when
we are developing, we want to be able to do some `console.log`ing.

To use the production configuration, use the following `extends` property :

```js
module.exports = {
    extends: "wandi/prod"
}
```
