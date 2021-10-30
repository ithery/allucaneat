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
        "semi": [1, 'always'],
        "comma-dangle": 'off',
        "space-before-function-paren": 'off',
        "indent": [2, 4, { "SwitchCase": 1 }], // this option sets a specific
        "brace-style": [2, "1tbs", {"allowSingleLine": true}], // enforce one true brace style (off by default)
        "comma-spacing": [1, {"before": false, "after": true}], // enforce spacing before and after comma
        "comma-style": [1, "last"], // enforce one true comma style (off by default)
        "eol-last": 1, // enforce newline at the end of file, with no multiple empty lines
        "key-spacing": [1, {"beforeColon": false, "afterColon": true}], // enforces spacing between keys and values in object literal properties
        "no-mixed-spaces-and-tabs": 1, // disallow mixed spaces and tabs for indentation
        "no-underscore-dangle": 1, // disallow dangling underscores in identifiers
        "semi-spacing": [1, {"before": false, "after": true}], // enforce spacing before and after semicolons
        "sort-vars": 0, // sort variables within the same declaration block (off by default)
        "space-before-blocks": [1, "always"], // require or disallow space before blocks (off by default)
        "space-in-parens": [1, "never"], // require or disallow spaces inside parentheses (off by default)
        "space-unary-ops": [1, {"words": true, "nonwords": false}], // Require or disallow spaces before/after unary operators (words on by default, nonwords off by default)
        "wrap-regex": 0, // require regex literals to be wrapped in parentheses (off by default)

    },
};
