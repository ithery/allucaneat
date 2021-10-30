module.exports = {
    env: {
        commonjs: true,
        es2021: true,
        node: true,
    },
    extends: ['standard', 'plugin:json/recommended', 'prettier'],
    parserOptions: {
        ecmaVersion: 12,
    },
    rules: {
        semi: [1, 'always'],
        'comma-dangle': 'off',
        'space-before-function-paren': 'off',
        "indent":  [2, 4, { "SwitchCase": 1 }], // this option sets a specific
    },
};
