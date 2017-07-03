module.exports = {
    extends: [
        "eslint:recommended",
        "plugin:import/errors",
    ],
    parserOptions: {
        ecmaVersion: 2017,
        sourceType: "module",
        ecmaFeatures: {
            impliedStrict: true,
            experimentalObjectRestSpread: true
        }
    },
    env: {
        browser: true,
        es6: true
    },
    plugins: [
        "import"
    ],
}
